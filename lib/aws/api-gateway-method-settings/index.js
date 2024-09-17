"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayMethodSettings = exports.ApiGatewayMethodSettingsSettingsOutputReference = exports.apiGatewayMethodSettingsSettingsToHclTerraform = exports.apiGatewayMethodSettingsSettingsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apiGatewayMethodSettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cache_data_encrypted: cdktf.booleanToTerraform(struct.cacheDataEncrypted),
        cache_ttl_in_seconds: cdktf.numberToTerraform(struct.cacheTtlInSeconds),
        caching_enabled: cdktf.booleanToTerraform(struct.cachingEnabled),
        data_trace_enabled: cdktf.booleanToTerraform(struct.dataTraceEnabled),
        logging_level: cdktf.stringToTerraform(struct.loggingLevel),
        metrics_enabled: cdktf.booleanToTerraform(struct.metricsEnabled),
        require_authorization_for_cache_control: cdktf.booleanToTerraform(struct.requireAuthorizationForCacheControl),
        throttling_burst_limit: cdktf.numberToTerraform(struct.throttlingBurstLimit),
        throttling_rate_limit: cdktf.numberToTerraform(struct.throttlingRateLimit),
        unauthorized_cache_control_header_strategy: cdktf.stringToTerraform(struct.unauthorizedCacheControlHeaderStrategy),
    };
}
exports.apiGatewayMethodSettingsSettingsToTerraform = apiGatewayMethodSettingsSettingsToTerraform;
function apiGatewayMethodSettingsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cache_data_encrypted: {
            value: cdktf.booleanToHclTerraform(struct.cacheDataEncrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_ttl_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.cacheTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        caching_enabled: {
            value: cdktf.booleanToHclTerraform(struct.cachingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        data_trace_enabled: {
            value: cdktf.booleanToHclTerraform(struct.dataTraceEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        logging_level: {
            value: cdktf.stringToHclTerraform(struct.loggingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metrics_enabled: {
            value: cdktf.booleanToHclTerraform(struct.metricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_authorization_for_cache_control: {
            value: cdktf.booleanToHclTerraform(struct.requireAuthorizationForCacheControl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        throttling_burst_limit: {
            value: cdktf.numberToHclTerraform(struct.throttlingBurstLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throttling_rate_limit: {
            value: cdktf.numberToHclTerraform(struct.throttlingRateLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unauthorized_cache_control_header_strategy: {
            value: cdktf.stringToHclTerraform(struct.unauthorizedCacheControlHeaderStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apiGatewayMethodSettingsSettingsToHclTerraform = apiGatewayMethodSettingsSettingsToHclTerraform;
class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._cacheDataEncrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheDataEncrypted = this._cacheDataEncrypted;
        }
        if (this._cacheTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheTtlInSeconds = this._cacheTtlInSeconds;
        }
        if (this._cachingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachingEnabled = this._cachingEnabled;
        }
        if (this._dataTraceEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
        }
        if (this._loggingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingLevel = this._loggingLevel;
        }
        if (this._metricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEnabled = this._metricsEnabled;
        }
        if (this._requireAuthorizationForCacheControl !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireAuthorizationForCacheControl = this._requireAuthorizationForCacheControl;
        }
        if (this._throttlingBurstLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
        }
        if (this._throttlingRateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
        }
        if (this._unauthorizedCacheControlHeaderStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.unauthorizedCacheControlHeaderStrategy = this._unauthorizedCacheControlHeaderStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cacheDataEncrypted = undefined;
            this._cacheTtlInSeconds = undefined;
            this._cachingEnabled = undefined;
            this._dataTraceEnabled = undefined;
            this._loggingLevel = undefined;
            this._metricsEnabled = undefined;
            this._requireAuthorizationForCacheControl = undefined;
            this._throttlingBurstLimit = undefined;
            this._throttlingRateLimit = undefined;
            this._unauthorizedCacheControlHeaderStrategy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cacheDataEncrypted = value.cacheDataEncrypted;
            this._cacheTtlInSeconds = value.cacheTtlInSeconds;
            this._cachingEnabled = value.cachingEnabled;
            this._dataTraceEnabled = value.dataTraceEnabled;
            this._loggingLevel = value.loggingLevel;
            this._metricsEnabled = value.metricsEnabled;
            this._requireAuthorizationForCacheControl = value.requireAuthorizationForCacheControl;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
            this._unauthorizedCacheControlHeaderStrategy = value.unauthorizedCacheControlHeaderStrategy;
        }
    }
    get cacheDataEncrypted() {
        return this.getBooleanAttribute('cache_data_encrypted');
    }
    set cacheDataEncrypted(value) {
        this._cacheDataEncrypted = value;
    }
    resetCacheDataEncrypted() {
        this._cacheDataEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheDataEncryptedInput() {
        return this._cacheDataEncrypted;
    }
    get cacheTtlInSeconds() {
        return this.getNumberAttribute('cache_ttl_in_seconds');
    }
    set cacheTtlInSeconds(value) {
        this._cacheTtlInSeconds = value;
    }
    resetCacheTtlInSeconds() {
        this._cacheTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheTtlInSecondsInput() {
        return this._cacheTtlInSeconds;
    }
    get cachingEnabled() {
        return this.getBooleanAttribute('caching_enabled');
    }
    set cachingEnabled(value) {
        this._cachingEnabled = value;
    }
    resetCachingEnabled() {
        this._cachingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cachingEnabledInput() {
        return this._cachingEnabled;
    }
    get dataTraceEnabled() {
        return this.getBooleanAttribute('data_trace_enabled');
    }
    set dataTraceEnabled(value) {
        this._dataTraceEnabled = value;
    }
    resetDataTraceEnabled() {
        this._dataTraceEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataTraceEnabledInput() {
        return this._dataTraceEnabled;
    }
    get loggingLevel() {
        return this.getStringAttribute('logging_level');
    }
    set loggingLevel(value) {
        this._loggingLevel = value;
    }
    resetLoggingLevel() {
        this._loggingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingLevelInput() {
        return this._loggingLevel;
    }
    get metricsEnabled() {
        return this.getBooleanAttribute('metrics_enabled');
    }
    set metricsEnabled(value) {
        this._metricsEnabled = value;
    }
    resetMetricsEnabled() {
        this._metricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricsEnabledInput() {
        return this._metricsEnabled;
    }
    get requireAuthorizationForCacheControl() {
        return this.getBooleanAttribute('require_authorization_for_cache_control');
    }
    set requireAuthorizationForCacheControl(value) {
        this._requireAuthorizationForCacheControl = value;
    }
    resetRequireAuthorizationForCacheControl() {
        this._requireAuthorizationForCacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireAuthorizationForCacheControlInput() {
        return this._requireAuthorizationForCacheControl;
    }
    get throttlingBurstLimit() {
        return this.getNumberAttribute('throttling_burst_limit');
    }
    set throttlingBurstLimit(value) {
        this._throttlingBurstLimit = value;
    }
    resetThrottlingBurstLimit() {
        this._throttlingBurstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get throttlingBurstLimitInput() {
        return this._throttlingBurstLimit;
    }
    get throttlingRateLimit() {
        return this.getNumberAttribute('throttling_rate_limit');
    }
    set throttlingRateLimit(value) {
        this._throttlingRateLimit = value;
    }
    resetThrottlingRateLimit() {
        this._throttlingRateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get throttlingRateLimitInput() {
        return this._throttlingRateLimit;
    }
    get unauthorizedCacheControlHeaderStrategy() {
        return this.getStringAttribute('unauthorized_cache_control_header_strategy');
    }
    set unauthorizedCacheControlHeaderStrategy(value) {
        this._unauthorizedCacheControlHeaderStrategy = value;
    }
    resetUnauthorizedCacheControlHeaderStrategy() {
        this._unauthorizedCacheControlHeaderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unauthorizedCacheControlHeaderStrategyInput() {
        return this._unauthorizedCacheControlHeaderStrategy;
    }
}
exports.ApiGatewayMethodSettingsSettingsOutputReference = ApiGatewayMethodSettingsSettingsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ApiGatewayMethodSettingsSettingsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method_settings aws_api_gateway_method_settings}
*/
class ApiGatewayMethodSettings extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiGatewayMethodSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayMethodSettings to import
    * @param importFromId The id of the existing ApiGatewayMethodSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayMethodSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_method_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method_settings aws_api_gateway_method_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_method_settings',
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
        // settings - computed: false, optional: false, required: true
        this._settings = new ApiGatewayMethodSettingsSettingsOutputReference(this, "settings");
        this._id = config.id;
        this._methodPath = config.methodPath;
        this._restApiId = config.restApiId;
        this._stageName = config.stageName;
        this._settings.internalValue = config.settings;
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
    get methodPath() {
        return this.getStringAttribute('method_path');
    }
    set methodPath(value) {
        this._methodPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get methodPathInput() {
        return this._methodPath;
    }
    get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    set restApiId(value) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get restApiIdInput() {
        return this._restApiId;
    }
    get stageName() {
        return this.getStringAttribute('stage_name');
    }
    set stageName(value) {
        this._stageName = value;
    }
    // Temporarily expose input value. Use with caution.
    get stageNameInput() {
        return this._stageName;
    }
    get settings() {
        return this._settings;
    }
    putSettings(value) {
        this._settings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get settingsInput() {
        return this._settings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            method_path: cdktf.stringToTerraform(this._methodPath),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            stage_name: cdktf.stringToTerraform(this._stageName),
            settings: apiGatewayMethodSettingsSettingsToTerraform(this._settings.internalValue),
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
            method_path: {
                value: cdktf.stringToHclTerraform(this._methodPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rest_api_id: {
                value: cdktf.stringToHclTerraform(this._restApiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stage_name: {
                value: cdktf.stringToHclTerraform(this._stageName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: apiGatewayMethodSettingsSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApiGatewayMethodSettingsSettingsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.ApiGatewayMethodSettings = ApiGatewayMethodSettings;
_b = JSII_RTTI_SYMBOL_1;
ApiGatewayMethodSettings[_b] = { fqn: "@cdktf/aws-cdk.apiGatewayMethodSettings.ApiGatewayMethodSettings", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
ApiGatewayMethodSettings.tfResourceType = "aws_api_gateway_method_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FwaS1nYXRld2F5LW1ldGhvZC1zZXR0aW5ncy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTBFL0IsU0FBZ0IsMkNBQTJDLENBQUMsTUFBMkY7SUFDckosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDMUUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDakUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0RSxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsZUFBZSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pFLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsbUNBQW1DLENBQUM7UUFDOUcsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8s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Q2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUNuRixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxzQ0FBc0M7YUFDekQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWpMSCw0REFrTEM7OztBQWhMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHVDQUFjLEdBQUcsaUNBQWlDLEFBQXBDLENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNpZCBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3MjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNtZXRob2RfcGF0aCBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3MjbWV0aG9kX3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IG1ldGhvZFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzI3Jlc3RfYXBpX2lkIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyNyZXN0X2FwaV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzdEFwaUlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNzdGFnZV9uYW1lIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyNzdGFnZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBzdGFnZU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogc2V0dGluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNzZXR0aW5ncyBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3Mjc2V0dGluZ3N9XG4gICovXG4gIHJlYWRvbmx5IHNldHRpbmdzOiBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5ncztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzU2V0dGluZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MjY2FjaGVfZGF0YV9lbmNyeXB0ZWQgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzI2NhY2hlX2RhdGFfZW5jcnlwdGVkfVxuICAqL1xuICByZWFkb25seSBjYWNoZURhdGFFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNjYWNoZV90dGxfaW5fc2Vjb25kcyBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3MjY2FjaGVfdHRsX2luX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IGNhY2hlVHRsSW5TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MjY2FjaGluZ19lbmFibGVkIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyNjYWNoaW5nX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGNhY2hpbmdFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MjZGF0YV90cmFjZV9lbmFibGVkIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyNkYXRhX3RyYWNlX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFUcmFjZUVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNsb2dnaW5nX2xldmVsIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyNsb2dnaW5nX2xldmVsfVxuICAqL1xuICByZWFkb25seSBsb2dnaW5nTGV2ZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNtZXRyaWNzX2VuYWJsZWQgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzI21ldHJpY3NfZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgbWV0cmljc0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyNyZXF1aXJlX2F1dGhvcml6YXRpb25fZm9yX2NhY2hlX2NvbnRyb2wgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzI3JlcXVpcmVfYXV0aG9yaXphdGlvbl9mb3JfY2FjaGVfY29udHJvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2w/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5ncyN0aHJvdHRsaW5nX2J1cnN0X2xpbWl0IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyN0aHJvdHRsaW5nX2J1cnN0X2xpbWl0fVxuICAqL1xuICByZWFkb25seSB0aHJvdHRsaW5nQnVyc3RMaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzI3Rocm90dGxpbmdfcmF0ZV9saW1pdCBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3MjdGhyb3R0bGluZ19yYXRlX2xpbWl0fVxuICAqL1xuICByZWFkb25seSB0aHJvdHRsaW5nUmF0ZUxpbWl0PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MjdW5hdXRob3JpemVkX2NhY2hlX2NvbnRyb2xfaGVhZGVyX3N0cmF0ZWd5IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyN1bmF1dGhvcml6ZWRfY2FjaGVfY29udHJvbF9oZWFkZXJfc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IHVuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhY2hlX2RhdGFfZW5jcnlwdGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jYWNoZURhdGFFbmNyeXB0ZWQpLFxuICAgIGNhY2hlX3R0bF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhY2hlVHRsSW5TZWNvbmRzKSxcbiAgICBjYWNoaW5nX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNhY2hpbmdFbmFibGVkKSxcbiAgICBkYXRhX3RyYWNlX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFUcmFjZUVuYWJsZWQpLFxuICAgIGxvZ2dpbmdfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nZ2luZ0xldmVsKSxcbiAgICBtZXRyaWNzX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY3NFbmFibGVkKSxcbiAgICByZXF1aXJlX2F1dGhvcml6YXRpb25fZm9yX2NhY2hlX2NvbnRyb2w6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sKSxcbiAgICB0aHJvdHRsaW5nX2J1cnN0X2xpbWl0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocm90dGxpbmdCdXJzdExpbWl0KSxcbiAgICB0aHJvdHRsaW5nX3JhdGVfbGltaXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyb3R0bGluZ1JhdGVMaW1pdCksXG4gICAgdW5hdXRob3JpemVkX2NhY2hlX2NvbnRyb2xfaGVhZGVyX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNhY2hlX2RhdGFfZW5jcnlwdGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2FjaGVEYXRhRW5jcnlwdGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgY2FjaGVfdHRsX2luX3NlY29uZHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNhY2hlVHRsSW5TZWNvbmRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBjYWNoaW5nX2VuYWJsZWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jYWNoaW5nRW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGRhdGFfdHJhY2VfZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRhdGFUcmFjZUVuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBsb2dnaW5nX2xldmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sb2dnaW5nTGV2ZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1ldHJpY3NfZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY3NFbmFibGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcmVxdWlyZV9hdXRob3JpemF0aW9uX2Zvcl9jYWNoZV9jb250cm9sOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICB0aHJvdHRsaW5nX2J1cnN0X2xpbWl0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aHJvdHRsaW5nQnVyc3RMaW1pdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdGhyb3R0bGluZ19yYXRlX2xpbWl0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aHJvdHRsaW5nUmF0ZUxpbWl0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB1bmF1dGhvcml6ZWRfY2FjaGVfY29udHJvbF9oZWFkZXJfc3RyYXRlZ3k6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FjaGVEYXRhRW5jcnlwdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hlRGF0YUVuY3J5cHRlZCA9IHRoaXMuX2NhY2hlRGF0YUVuY3J5cHRlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hlVHRsSW5TZWNvbmRzID0gdGhpcy5fY2FjaGVUdGxJblNlY29uZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYWNoaW5nRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYWNoaW5nRW5hYmxlZCA9IHRoaXMuX2NhY2hpbmdFbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGF0YVRyYWNlRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhVHJhY2VFbmFibGVkID0gdGhpcy5fZGF0YVRyYWNlRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ2dpbmdMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dnaW5nTGV2ZWwgPSB0aGlzLl9sb2dnaW5nTGV2ZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXRyaWNzRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNzRW5hYmxlZCA9IHRoaXMuX21ldHJpY3NFbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wgPSB0aGlzLl9yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRocm90dGxpbmdCdXJzdExpbWl0ID0gdGhpcy5fdGhyb3R0bGluZ0J1cnN0TGltaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRocm90dGxpbmdSYXRlTGltaXQgPSB0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgPSB0aGlzLl91bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FjaGVEYXRhRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FjaGVUdGxJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jYWNoaW5nRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RhdGFUcmFjZUVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dnaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyb3R0bGluZ0J1cnN0TGltaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhY2hlRGF0YUVuY3J5cHRlZCA9IHZhbHVlLmNhY2hlRGF0YUVuY3J5cHRlZDtcbiAgICAgIHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzID0gdmFsdWUuY2FjaGVUdGxJblNlY29uZHM7XG4gICAgICB0aGlzLl9jYWNoaW5nRW5hYmxlZCA9IHZhbHVlLmNhY2hpbmdFbmFibGVkO1xuICAgICAgdGhpcy5fZGF0YVRyYWNlRW5hYmxlZCA9IHZhbHVlLmRhdGFUcmFjZUVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dnaW5nTGV2ZWwgPSB2YWx1ZS5sb2dnaW5nTGV2ZWw7XG4gICAgICB0aGlzLl9tZXRyaWNzRW5hYmxlZCA9IHZhbHVlLm1ldHJpY3NFbmFibGVkO1xuICAgICAgdGhpcy5fcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wgPSB2YWx1ZS5yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbDtcbiAgICAgIHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0ID0gdmFsdWUudGhyb3R0bGluZ0J1cnN0TGltaXQ7XG4gICAgICB0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0ID0gdmFsdWUudGhyb3R0bGluZ1JhdGVMaW1pdDtcbiAgICAgIHRoaXMuX3VuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5ID0gdmFsdWUudW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3k7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FjaGVfZGF0YV9lbmNyeXB0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZURhdGFFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNhY2hlRGF0YUVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjYWNoZV9kYXRhX2VuY3J5cHRlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FjaGVEYXRhRW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jYWNoZURhdGFFbmNyeXB0ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYWNoZURhdGFFbmNyeXB0ZWQoKSB7XG4gICAgdGhpcy5fY2FjaGVEYXRhRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoZURhdGFFbmNyeXB0ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVEYXRhRW5jcnlwdGVkO1xuICB9XG5cbiAgLy8gY2FjaGVfdHRsX2luX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZVR0bEluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY2FjaGVUdGxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjYWNoZV90dGxfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FjaGVUdGxJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGVUdGxJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fY2FjaGVUdGxJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hlVHRsSW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gY2FjaGluZ19lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FjaGluZ0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNhY2hpbmdFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NhY2hpbmdfZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FjaGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NhY2hpbmdFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGluZ0VuYWJsZWQoKSB7XG4gICAgdGhpcy5fY2FjaGluZ0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hpbmdFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hpbmdFbmFibGVkO1xuICB9XG5cbiAgLy8gZGF0YV90cmFjZV9lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YVRyYWNlRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGF0YVRyYWNlRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkYXRhX3RyYWNlX2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFUcmFjZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RhdGFUcmFjZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhVHJhY2VFbmFibGVkKCkge1xuICAgIHRoaXMuX2RhdGFUcmFjZUVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFUcmFjZUVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVRyYWNlRW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfbGV2ZWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dnaW5nTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ2dpbmdfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ2dpbmdMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZ0xldmVsKCkge1xuICAgIHRoaXMuX2xvZ2dpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdMZXZlbDtcbiAgfVxuXG4gIC8vIG1ldHJpY3NfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY3NFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBtZXRyaWNzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtZXRyaWNzX2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldHJpY3NFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tZXRyaWNzRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldHJpY3NFbmFibGVkKCkge1xuICAgIHRoaXMuX21ldHJpY3NFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNzRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRyaWNzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIHJlcXVpcmVfYXV0aG9yaXphdGlvbl9mb3JfY2FjaGVfY29udHJvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX2F1dGhvcml6YXRpb25fZm9yX2NhY2hlX2NvbnRyb2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sKCkge1xuICAgIHRoaXMuX3JlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbDtcbiAgfVxuXG4gIC8vIHRocm90dGxpbmdfYnVyc3RfbGltaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyb3R0bGluZ0J1cnN0TGltaXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRocm90dGxpbmdCdXJzdExpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyb3R0bGluZ19idXJzdF9saW1pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyb3R0bGluZ0J1cnN0TGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyb3R0bGluZ0J1cnN0TGltaXQoKSB7XG4gICAgdGhpcy5fdGhyb3R0bGluZ0J1cnN0TGltaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocm90dGxpbmdCdXJzdExpbWl0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0O1xuICB9XG5cbiAgLy8gdGhyb3R0bGluZ19yYXRlX2xpbWl0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rocm90dGxpbmdSYXRlTGltaXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRocm90dGxpbmdSYXRlTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aHJvdHRsaW5nX3JhdGVfbGltaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocm90dGxpbmdSYXRlTGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Rocm90dGxpbmdSYXRlTGltaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHJvdHRsaW5nUmF0ZUxpbWl0KCkge1xuICAgIHRoaXMuX3Rocm90dGxpbmdSYXRlTGltaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocm90dGxpbmdSYXRlTGltaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyb3R0bGluZ1JhdGVMaW1pdDtcbiAgfVxuXG4gIC8vIHVuYXV0aG9yaXplZF9jYWNoZV9jb250cm9sX2hlYWRlcl9zdHJhdGVneSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuYXV0aG9yaXplZF9jYWNoZV9jb250cm9sX2hlYWRlcl9zdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5O1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MgYXdzX2FwaV9nYXRld2F5X21ldGhvZF9zZXR0aW5nc31cbiovXG5leHBvcnQgY2xhc3MgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3NcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5ncyB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzIGF3c19hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3N9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcGlfZ2F0ZXdheV9tZXRob2Rfc2V0dGluZ3MnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9tZXRob2RQYXRoID0gY29uZmlnLm1ldGhvZFBhdGg7XG4gICAgdGhpcy5fcmVzdEFwaUlkID0gY29uZmlnLnJlc3RBcGlJZDtcbiAgICB0aGlzLl9zdGFnZU5hbWUgPSBjb25maWcuc3RhZ2VOYW1lO1xuICAgIHRoaXMuX3NldHRpbmdzLmludGVybmFsVmFsdWUgPSBjb25maWcuc2V0dGluZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG1ldGhvZF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldGhvZFBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldGhvZFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRob2RfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0aG9kUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0aG9kUGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRob2RQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGhvZFBhdGg7XG4gIH1cblxuICAvLyByZXN0X2FwaV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXN0QXBpSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc3RBcGlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3RfYXBpX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0QXBpSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3RBcGlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0QXBpSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdEFwaUlkO1xuICB9XG5cbiAgLy8gc3RhZ2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGFnZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWdlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YWdlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhZ2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YWdlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFnZU5hbWU7XG4gIH1cblxuICAvLyBzZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXR0aW5ncyA9IG5ldyBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IHNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0U2V0dGluZ3ModmFsdWU6IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzKSB7XG4gICAgdGhpcy5fc2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbWV0aG9kX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ldGhvZFBhdGgpLFxuICAgICAgcmVzdF9hcGlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc3RBcGlJZCksXG4gICAgICBzdGFnZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFnZU5hbWUpLFxuICAgICAgc2V0dGluZ3M6IGFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fc2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtZXRob2RfcGF0aDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbWV0aG9kUGF0aCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlc3RfYXBpX2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yZXN0QXBpSWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzdGFnZV9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zdGFnZU5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICB2YWx1ZTogYXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzU2V0dGluZ3NUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzU2V0dGluZ3NMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=