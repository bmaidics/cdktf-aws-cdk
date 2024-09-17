"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsPlatformApplication = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_platform_application aws_sns_platform_application}
*/
class SnsPlatformApplication extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SnsPlatformApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnsPlatformApplication to import
    * @param importFromId The id of the existing SnsPlatformApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_platform_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnsPlatformApplication to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sns_platform_application", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_platform_application aws_sns_platform_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsPlatformApplicationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_platform_application',
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
        this._eventDeliveryFailureTopicArn = config.eventDeliveryFailureTopicArn;
        this._eventEndpointCreatedTopicArn = config.eventEndpointCreatedTopicArn;
        this._eventEndpointDeletedTopicArn = config.eventEndpointDeletedTopicArn;
        this._eventEndpointUpdatedTopicArn = config.eventEndpointUpdatedTopicArn;
        this._failureFeedbackRoleArn = config.failureFeedbackRoleArn;
        this._id = config.id;
        this._name = config.name;
        this._platform = config.platform;
        this._platformCredential = config.platformCredential;
        this._platformPrincipal = config.platformPrincipal;
        this._successFeedbackRoleArn = config.successFeedbackRoleArn;
        this._successFeedbackSampleRate = config.successFeedbackSampleRate;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get eventDeliveryFailureTopicArn() {
        return this.getStringAttribute('event_delivery_failure_topic_arn');
    }
    set eventDeliveryFailureTopicArn(value) {
        this._eventDeliveryFailureTopicArn = value;
    }
    resetEventDeliveryFailureTopicArn() {
        this._eventDeliveryFailureTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventDeliveryFailureTopicArnInput() {
        return this._eventDeliveryFailureTopicArn;
    }
    get eventEndpointCreatedTopicArn() {
        return this.getStringAttribute('event_endpoint_created_topic_arn');
    }
    set eventEndpointCreatedTopicArn(value) {
        this._eventEndpointCreatedTopicArn = value;
    }
    resetEventEndpointCreatedTopicArn() {
        this._eventEndpointCreatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndpointCreatedTopicArnInput() {
        return this._eventEndpointCreatedTopicArn;
    }
    get eventEndpointDeletedTopicArn() {
        return this.getStringAttribute('event_endpoint_deleted_topic_arn');
    }
    set eventEndpointDeletedTopicArn(value) {
        this._eventEndpointDeletedTopicArn = value;
    }
    resetEventEndpointDeletedTopicArn() {
        this._eventEndpointDeletedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndpointDeletedTopicArnInput() {
        return this._eventEndpointDeletedTopicArn;
    }
    get eventEndpointUpdatedTopicArn() {
        return this.getStringAttribute('event_endpoint_updated_topic_arn');
    }
    set eventEndpointUpdatedTopicArn(value) {
        this._eventEndpointUpdatedTopicArn = value;
    }
    resetEventEndpointUpdatedTopicArn() {
        this._eventEndpointUpdatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndpointUpdatedTopicArnInput() {
        return this._eventEndpointUpdatedTopicArn;
    }
    get failureFeedbackRoleArn() {
        return this.getStringAttribute('failure_feedback_role_arn');
    }
    set failureFeedbackRoleArn(value) {
        this._failureFeedbackRoleArn = value;
    }
    resetFailureFeedbackRoleArn() {
        this._failureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failureFeedbackRoleArnInput() {
        return this._failureFeedbackRoleArn;
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
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    get platformCredential() {
        return this.getStringAttribute('platform_credential');
    }
    set platformCredential(value) {
        this._platformCredential = value;
    }
    // Temporarily expose input value. Use with caution.
    get platformCredentialInput() {
        return this._platformCredential;
    }
    get platformPrincipal() {
        return this.getStringAttribute('platform_principal');
    }
    set platformPrincipal(value) {
        this._platformPrincipal = value;
    }
    resetPlatformPrincipal() {
        this._platformPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformPrincipalInput() {
        return this._platformPrincipal;
    }
    get successFeedbackRoleArn() {
        return this.getStringAttribute('success_feedback_role_arn');
    }
    set successFeedbackRoleArn(value) {
        this._successFeedbackRoleArn = value;
    }
    resetSuccessFeedbackRoleArn() {
        this._successFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get successFeedbackRoleArnInput() {
        return this._successFeedbackRoleArn;
    }
    get successFeedbackSampleRate() {
        return this.getStringAttribute('success_feedback_sample_rate');
    }
    set successFeedbackSampleRate(value) {
        this._successFeedbackSampleRate = value;
    }
    resetSuccessFeedbackSampleRate() {
        this._successFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get successFeedbackSampleRateInput() {
        return this._successFeedbackSampleRate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            event_delivery_failure_topic_arn: cdktf.stringToTerraform(this._eventDeliveryFailureTopicArn),
            event_endpoint_created_topic_arn: cdktf.stringToTerraform(this._eventEndpointCreatedTopicArn),
            event_endpoint_deleted_topic_arn: cdktf.stringToTerraform(this._eventEndpointDeletedTopicArn),
            event_endpoint_updated_topic_arn: cdktf.stringToTerraform(this._eventEndpointUpdatedTopicArn),
            failure_feedback_role_arn: cdktf.stringToTerraform(this._failureFeedbackRoleArn),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            platform_credential: cdktf.stringToTerraform(this._platformCredential),
            platform_principal: cdktf.stringToTerraform(this._platformPrincipal),
            success_feedback_role_arn: cdktf.stringToTerraform(this._successFeedbackRoleArn),
            success_feedback_sample_rate: cdktf.stringToTerraform(this._successFeedbackSampleRate),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            event_delivery_failure_topic_arn: {
                value: cdktf.stringToHclTerraform(this._eventDeliveryFailureTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_endpoint_created_topic_arn: {
                value: cdktf.stringToHclTerraform(this._eventEndpointCreatedTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_endpoint_deleted_topic_arn: {
                value: cdktf.stringToHclTerraform(this._eventEndpointDeletedTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_endpoint_updated_topic_arn: {
                value: cdktf.stringToHclTerraform(this._eventEndpointUpdatedTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            failure_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._failureFeedbackRoleArn),
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
            platform: {
                value: cdktf.stringToHclTerraform(this._platform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            platform_credential: {
                value: cdktf.stringToHclTerraform(this._platformCredential),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            platform_principal: {
                value: cdktf.stringToHclTerraform(this._platformPrincipal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            success_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._successFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            success_feedback_sample_rate: {
                value: cdktf.stringToHclTerraform(this._successFeedbackSampleRate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SnsPlatformApplication = SnsPlatformApplication;
_a = JSII_RTTI_SYMBOL_1;
SnsPlatformApplication[_a] = { fqn: "@cdktf/aws-cdk.snsPlatformApplication.SnsPlatformApplication", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SnsPlatformApplication.tfResourceType = "aws_sns_platform_application";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Nucy1wbGF0Zm9ybS1hcHBsaWNhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTBEL0I7O0VBRUU7QUFDRixNQUFhLHNCQUF1QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPakUsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakI7Ozs7OztNQU1FO0lBQ0ssTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQWdCLEVBQUUsVUFBa0IsRUFBRSxZQUFvQixFQUFFLFFBQWtDO1FBQzlILE9BQU8sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0SixDQUFDO0lBRUwsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBb0M7UUFDbkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw4QkFBOEI7WUFDckQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixlQUFlLEVBQUUsUUFBUTtnQkFDekIseUJBQXlCLEVBQUUsUUFBUTthQUNwQztZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7WUFDakMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQzdCLE9BQU8sRUFBRSxN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QVE7YUFDM0I7WUFDRCx5QkFBeUIsRUFBRTtnQkFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7Z0JBQy9ELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCw0QkFBNEIsRUFBRTtnQkFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2xFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWpXSCx3REFrV0M7OztBQWhXQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHFDQUFjLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfcGxhdGZvcm1fYXBwbGljYXRpb25cbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiNldmVudF9kZWxpdmVyeV9mYWlsdXJlX3RvcGljX2FybiBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uI2V2ZW50X2RlbGl2ZXJ5X2ZhaWx1cmVfdG9waWNfYXJufVxuICAqL1xuICByZWFkb25seSBldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfcGxhdGZvcm1fYXBwbGljYXRpb24jZXZlbnRfZW5kcG9pbnRfY3JlYXRlZF90b3BpY19hcm4gU25zUGxhdGZvcm1BcHBsaWNhdGlvbiNldmVudF9lbmRwb2ludF9jcmVhdGVkX3RvcGljX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0Fybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3BsYXRmb3JtX2FwcGxpY2F0aW9uI2V2ZW50X2VuZHBvaW50X2RlbGV0ZWRfdG9waWNfYXJuIFNuc1BsYXRmb3JtQXBwbGljYXRpb24jZXZlbnRfZW5kcG9pbnRfZGVsZXRlZF90b3BpY19hcm59XG4gICovXG4gIHJlYWRvbmx5IGV2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiNldmVudF9lbmRwb2ludF91cGRhdGVkX3RvcGljX2FybiBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uI2V2ZW50X2VuZHBvaW50X3VwZGF0ZWRfdG9waWNfYXJufVxuICAqL1xuICByZWFkb25seSBldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfcGxhdGZvcm1fYXBwbGljYXRpb24jZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uI2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGZhaWx1cmVGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiNpZCBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfcGxhdGZvcm1fYXBwbGljYXRpb24jbmFtZSBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3BsYXRmb3JtX2FwcGxpY2F0aW9uI3BsYXRmb3JtIFNuc1BsYXRmb3JtQXBwbGljYXRpb24jcGxhdGZvcm19XG4gICovXG4gIHJlYWRvbmx5IHBsYXRmb3JtOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiNwbGF0Zm9ybV9jcmVkZW50aWFsIFNuc1BsYXRmb3JtQXBwbGljYXRpb24jcGxhdGZvcm1fY3JlZGVudGlhbH1cbiAgKi9cbiAgcmVhZG9ubHkgcGxhdGZvcm1DcmVkZW50aWFsOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiNwbGF0Zm9ybV9wcmluY2lwYWwgU25zUGxhdGZvcm1BcHBsaWNhdGlvbiNwbGF0Zm9ybV9wcmluY2lwYWx9XG4gICovXG4gIHJlYWRvbmx5IHBsYXRmb3JtUHJpbmNpcGFsPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfcGxhdGZvcm1fYXBwbGljYXRpb24jc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uI3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiNzdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlIFNuc1BsYXRmb3JtQXBwbGljYXRpb24jc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IHN0cmluZztcbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiBhd3Nfc25zX3BsYXRmb3JtX2FwcGxpY2F0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19zbnNfcGxhdGZvcm1fYXBwbGljYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgU25zUGxhdGZvcm1BcHBsaWNhdGlvbiByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfcGxhdGZvcm1fYXBwbGljYXRpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFNuc1BsYXRmb3JtQXBwbGljYXRpb24gdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvblwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvbiBhd3Nfc25zX3BsYXRmb3JtX2FwcGxpY2F0aW9ufSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNuc1BsYXRmb3JtQXBwbGljYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zbnNfcGxhdGZvcm1fYXBwbGljYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9ldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuID0gY29uZmlnLmV2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm47XG4gICAgdGhpcy5fZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0FybiA9IGNvbmZpZy5ldmVudEVuZHBvaW50Q3JlYXRlZFRvcGljQXJuO1xuICAgIHRoaXMuX2V2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4gPSBjb25maWcuZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybjtcbiAgICB0aGlzLl9ldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuID0gY29uZmlnLmV2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm47XG4gICAgdGhpcy5fZmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5mYWlsdXJlRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wbGF0Zm9ybSA9IGNvbmZpZy5wbGF0Zm9ybTtcbiAgICB0aGlzLl9wbGF0Zm9ybUNyZWRlbnRpYWwgPSBjb25maWcucGxhdGZvcm1DcmVkZW50aWFsO1xuICAgIHRoaXMuX3BsYXRmb3JtUHJpbmNpcGFsID0gY29uZmlnLnBsYXRmb3JtUHJpbmNpcGFsO1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9zdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gY29uZmlnLnN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZXZlbnRfZGVsaXZlcnlfZmFpbHVyZV90b3BpY19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXZlbnREZWxpdmVyeUZhaWx1cmVUb3BpY0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXZlbnREZWxpdmVyeUZhaWx1cmVUb3BpY0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X2RlbGl2ZXJ5X2ZhaWx1cmVfdG9waWNfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXZlbnREZWxpdmVyeUZhaWx1cmVUb3BpY0FybigpIHtcbiAgICB0aGlzLl9ldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm47XG4gIH1cblxuICAvLyBldmVudF9lbmRwb2ludF9jcmVhdGVkX3RvcGljX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldmVudEVuZHBvaW50Q3JlYXRlZFRvcGljQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBldmVudEVuZHBvaW50Q3JlYXRlZFRvcGljQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZlbnRfZW5kcG9pbnRfY3JlYXRlZF90b3BpY19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmVudEVuZHBvaW50Q3JlYXRlZFRvcGljQXJuKCkge1xuICAgIHRoaXMuX2V2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0FybjtcbiAgfVxuXG4gIC8vIGV2ZW50X2VuZHBvaW50X2RlbGV0ZWRfdG9waWNfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF9lbmRwb2ludF9kZWxldGVkX3RvcGljX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4oKSB7XG4gICAgdGhpcy5fZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuO1xuICB9XG5cbiAgLy8gZXZlbnRfZW5kcG9pbnRfdXBkYXRlZF90b3BpY19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXZlbnRFbmRwb2ludFVwZGF0ZWRUb3BpY0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXZlbnRFbmRwb2ludFVwZGF0ZWRUb3BpY0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X2VuZHBvaW50X3VwZGF0ZWRfdG9waWNfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXZlbnRFbmRwb2ludFVwZGF0ZWRUb3BpY0FybigpIHtcbiAgICB0aGlzLl9ldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm47XG4gIH1cblxuICAvLyBmYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZhaWx1cmVGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBmYWlsdXJlRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9mYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmYWlsdXJlRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BsYXRmb3JtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtJyk7XG4gIH1cbiAgcHVibGljIHNldCBwbGF0Zm9ybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm07XG4gIH1cblxuICAvLyBwbGF0Zm9ybV9jcmVkZW50aWFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BsYXRmb3JtQ3JlZGVudGlhbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1DcmVkZW50aWFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhdGZvcm1fY3JlZGVudGlhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhdGZvcm1DcmVkZW50aWFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybUNyZWRlbnRpYWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1DcmVkZW50aWFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtQ3JlZGVudGlhbDtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtX3ByaW5jaXBhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGF0Zm9ybVByaW5jaXBhbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1QcmluY2lwYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGF0Zm9ybV9wcmluY2lwYWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYXRmb3JtUHJpbmNpcGFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybVByaW5jaXBhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYXRmb3JtUHJpbmNpcGFsKCkge1xuICAgIHRoaXMuX3BsYXRmb3JtUHJpbmNpcGFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGF0Zm9ybVByaW5jaXBhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybVByaW5jaXBhbDtcbiAgfVxuXG4gIC8vIHN1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIHN1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnRfZGVsaXZlcnlfZmFpbHVyZV90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm4pLFxuICAgICAgZXZlbnRfZW5kcG9pbnRfY3JlYXRlZF90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4pLFxuICAgICAgZXZlbnRfZW5kcG9pbnRfZGVsZXRlZF90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4pLFxuICAgICAgZXZlbnRfZW5kcG9pbnRfdXBkYXRlZF90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm4pLFxuICAgICAgZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmFpbHVyZUZlZWRiYWNrUm9sZUFybiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwbGF0Zm9ybTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhdGZvcm0pLFxuICAgICAgcGxhdGZvcm1fY3JlZGVudGlhbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhdGZvcm1DcmVkZW50aWFsKSxcbiAgICAgIHBsYXRmb3JtX3ByaW5jaXBhbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhdGZvcm1QcmluY2lwYWwpLFxuICAgICAgc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICBzdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGV2ZW50X2RlbGl2ZXJ5X2ZhaWx1cmVfdG9waWNfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9ldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZXZlbnRfZW5kcG9pbnRfY3JlYXRlZF90b3BpY19hcm46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBldmVudF9lbmRwb2ludF9kZWxldGVkX3RvcGljX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV2ZW50X2VuZHBvaW50X3VwZGF0ZWRfdG9waWNfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9ldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZmFpbHVyZV9mZWVkYmFja19yb2xlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZmFpbHVyZUZlZWRiYWNrUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwbGF0Zm9ybToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcGxhdGZvcm0pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwbGF0Zm9ybV9jcmVkZW50aWFsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wbGF0Zm9ybUNyZWRlbnRpYWwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwbGF0Zm9ybV9wcmluY2lwYWw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3BsYXRmb3JtUHJpbmNpcGFsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3VjY2Vzc19mZWVkYmFja19yb2xlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==