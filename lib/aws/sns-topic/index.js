"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsTopic = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic aws_sns_topic}
*/
class SnsTopic extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SnsTopic resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnsTopic to import
    * @param importFromId The id of the existing SnsTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnsTopic to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sns_topic", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic aws_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_topic',
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
        this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
        this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
        this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deliveryPolicy = config.deliveryPolicy;
        this._displayName = config.displayName;
        this._fifoTopic = config.fifoTopic;
        this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
        this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
        this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
        this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
        this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
        this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
        this._id = config.id;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
        this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
        this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._policy = config.policy;
        this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
        this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
        this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    get applicationFailureFeedbackRoleArn() {
        return this.getStringAttribute('application_failure_feedback_role_arn');
    }
    set applicationFailureFeedbackRoleArn(value) {
        this._applicationFailureFeedbackRoleArn = value;
    }
    resetApplicationFailureFeedbackRoleArn() {
        this._applicationFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationFailureFeedbackRoleArnInput() {
        return this._applicationFailureFeedbackRoleArn;
    }
    get applicationSuccessFeedbackRoleArn() {
        return this.getStringAttribute('application_success_feedback_role_arn');
    }
    set applicationSuccessFeedbackRoleArn(value) {
        this._applicationSuccessFeedbackRoleArn = value;
    }
    resetApplicationSuccessFeedbackRoleArn() {
        this._applicationSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSuccessFeedbackRoleArnInput() {
        return this._applicationSuccessFeedbackRoleArn;
    }
    get applicationSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('application_success_feedback_sample_rate');
    }
    set applicationSuccessFeedbackSampleRate(value) {
        this._applicationSuccessFeedbackSampleRate = value;
    }
    resetApplicationSuccessFeedbackSampleRate() {
        this._applicationSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSuccessFeedbackSampleRateInput() {
        return this._applicationSuccessFeedbackSampleRate;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get contentBasedDeduplication() {
        return this.getBooleanAttribute('content_based_deduplication');
    }
    set contentBasedDeduplication(value) {
        this._contentBasedDeduplication = value;
    }
    resetContentBasedDeduplication() {
        this._contentBasedDeduplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBasedDeduplicationInput() {
        return this._contentBasedDeduplication;
    }
    get deliveryPolicy() {
        return this.getStringAttribute('delivery_policy');
    }
    set deliveryPolicy(value) {
        this._deliveryPolicy = value;
    }
    resetDeliveryPolicy() {
        this._deliveryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryPolicyInput() {
        return this._deliveryPolicy;
    }
    get displayName() {
        return this.getStringAttribute('display_name');
    }
    set displayName(value) {
        this._displayName = value;
    }
    resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get displayNameInput() {
        return this._displayName;
    }
    get fifoTopic() {
        return this.getBooleanAttribute('fifo_topic');
    }
    set fifoTopic(value) {
        this._fifoTopic = value;
    }
    resetFifoTopic() {
        this._fifoTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fifoTopicInput() {
        return this._fifoTopic;
    }
    get firehoseFailureFeedbackRoleArn() {
        return this.getStringAttribute('firehose_failure_feedback_role_arn');
    }
    set firehoseFailureFeedbackRoleArn(value) {
        this._firehoseFailureFeedbackRoleArn = value;
    }
    resetFirehoseFailureFeedbackRoleArn() {
        this._firehoseFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firehoseFailureFeedbackRoleArnInput() {
        return this._firehoseFailureFeedbackRoleArn;
    }
    get firehoseSuccessFeedbackRoleArn() {
        return this.getStringAttribute('firehose_success_feedback_role_arn');
    }
    set firehoseSuccessFeedbackRoleArn(value) {
        this._firehoseSuccessFeedbackRoleArn = value;
    }
    resetFirehoseSuccessFeedbackRoleArn() {
        this._firehoseSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firehoseSuccessFeedbackRoleArnInput() {
        return this._firehoseSuccessFeedbackRoleArn;
    }
    get firehoseSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('firehose_success_feedback_sample_rate');
    }
    set firehoseSuccessFeedbackSampleRate(value) {
        this._firehoseSuccessFeedbackSampleRate = value;
    }
    resetFirehoseSuccessFeedbackSampleRate() {
        this._firehoseSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firehoseSuccessFeedbackSampleRateInput() {
        return this._firehoseSuccessFeedbackSampleRate;
    }
    get httpFailureFeedbackRoleArn() {
        return this.getStringAttribute('http_failure_feedback_role_arn');
    }
    set httpFailureFeedbackRoleArn(value) {
        this._httpFailureFeedbackRoleArn = value;
    }
    resetHttpFailureFeedbackRoleArn() {
        this._httpFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpFailureFeedbackRoleArnInput() {
        return this._httpFailureFeedbackRoleArn;
    }
    get httpSuccessFeedbackRoleArn() {
        return this.getStringAttribute('http_success_feedback_role_arn');
    }
    set httpSuccessFeedbackRoleArn(value) {
        this._httpSuccessFeedbackRoleArn = value;
    }
    resetHttpSuccessFeedbackRoleArn() {
        this._httpSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpSuccessFeedbackRoleArnInput() {
        return this._httpSuccessFeedbackRoleArn;
    }
    get httpSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('http_success_feedback_sample_rate');
    }
    set httpSuccessFeedbackSampleRate(value) {
        this._httpSuccessFeedbackSampleRate = value;
    }
    resetHttpSuccessFeedbackSampleRate() {
        this._httpSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpSuccessFeedbackSampleRateInput() {
        return this._httpSuccessFeedbackSampleRate;
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
    get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    set kmsMasterKeyId(value) {
        this._kmsMasterKeyId = value;
    }
    resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
    }
    get lambdaFailureFeedbackRoleArn() {
        return this.getStringAttribute('lambda_failure_feedback_role_arn');
    }
    set lambdaFailureFeedbackRoleArn(value) {
        this._lambdaFailureFeedbackRoleArn = value;
    }
    resetLambdaFailureFeedbackRoleArn() {
        this._lambdaFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaFailureFeedbackRoleArnInput() {
        return this._lambdaFailureFeedbackRoleArn;
    }
    get lambdaSuccessFeedbackRoleArn() {
        return this.getStringAttribute('lambda_success_feedback_role_arn');
    }
    set lambdaSuccessFeedbackRoleArn(value) {
        this._lambdaSuccessFeedbackRoleArn = value;
    }
    resetLambdaSuccessFeedbackRoleArn() {
        this._lambdaSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaSuccessFeedbackRoleArnInput() {
        return this._lambdaSuccessFeedbackRoleArn;
    }
    get lambdaSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('lambda_success_feedback_sample_rate');
    }
    set lambdaSuccessFeedbackSampleRate(value) {
        this._lambdaSuccessFeedbackSampleRate = value;
    }
    resetLambdaSuccessFeedbackSampleRate() {
        this._lambdaSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaSuccessFeedbackSampleRateInput() {
        return this._lambdaSuccessFeedbackSampleRate;
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
    // owner - computed: true, optional: false, required: false
    get owner() {
        return this.getStringAttribute('owner');
    }
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
    get sqsFailureFeedbackRoleArn() {
        return this.getStringAttribute('sqs_failure_feedback_role_arn');
    }
    set sqsFailureFeedbackRoleArn(value) {
        this._sqsFailureFeedbackRoleArn = value;
    }
    resetSqsFailureFeedbackRoleArn() {
        this._sqsFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsFailureFeedbackRoleArnInput() {
        return this._sqsFailureFeedbackRoleArn;
    }
    get sqsSuccessFeedbackRoleArn() {
        return this.getStringAttribute('sqs_success_feedback_role_arn');
    }
    set sqsSuccessFeedbackRoleArn(value) {
        this._sqsSuccessFeedbackRoleArn = value;
    }
    resetSqsSuccessFeedbackRoleArn() {
        this._sqsSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsSuccessFeedbackRoleArnInput() {
        return this._sqsSuccessFeedbackRoleArn;
    }
    get sqsSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('sqs_success_feedback_sample_rate');
    }
    set sqsSuccessFeedbackSampleRate(value) {
        this._sqsSuccessFeedbackSampleRate = value;
    }
    resetSqsSuccessFeedbackSampleRate() {
        this._sqsSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsSuccessFeedbackSampleRateInput() {
        return this._sqsSuccessFeedbackSampleRate;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
            application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
            application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
            display_name: cdktf.stringToTerraform(this._displayName),
            fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
            firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
            firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
            firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
            http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
            http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
            http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
            id: cdktf.stringToTerraform(this._id),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
            lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
            lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
            sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
            sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            application_failure_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._applicationFailureFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            application_success_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._applicationSuccessFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            application_success_feedback_sample_rate: {
                value: cdktf.numberToHclTerraform(this._applicationSuccessFeedbackSampleRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            content_based_deduplication: {
                value: cdktf.booleanToHclTerraform(this._contentBasedDeduplication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            delivery_policy: {
                value: cdktf.stringToHclTerraform(this._deliveryPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktf.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fifo_topic: {
                value: cdktf.booleanToHclTerraform(this._fifoTopic),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            firehose_failure_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._firehoseFailureFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firehose_success_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._firehoseSuccessFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firehose_success_feedback_sample_rate: {
                value: cdktf.numberToHclTerraform(this._firehoseSuccessFeedbackSampleRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            http_failure_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._httpFailureFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            http_success_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._httpSuccessFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            http_success_feedback_sample_rate: {
                value: cdktf.numberToHclTerraform(this._httpSuccessFeedbackSampleRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_master_key_id: {
                value: cdktf.stringToHclTerraform(this._kmsMasterKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_failure_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._lambdaFailureFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_success_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._lambdaSuccessFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_success_feedback_sample_rate: {
                value: cdktf.numberToHclTerraform(this._lambdaSuccessFeedbackSampleRate),
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
            policy: {
                value: cdktf.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sqs_failure_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._sqsFailureFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sqs_success_feedback_role_arn: {
                value: cdktf.stringToHclTerraform(this._sqsSuccessFeedbackRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sqs_success_feedback_sample_rate: {
                value: cdktf.numberToHclTerraform(this._sqsSuccessFeedbackSampleRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SnsTopic = SnsTopic;
_a = JSII_RTTI_SYMBOL_1;
SnsTopic[_a] = { fqn: "@cdktf/aws-cdk.snsTopic.SnsTopic", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SnsTopic.tfResourceType = "aws_sns_topic";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Nucy10b3BpYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQWtIL0I7O0VBRUU7QUFDRixNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT25ELGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFnQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxRQUFrQztRQUM5SCxPQUFPLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZJLENBQUM7SUFFTCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUF5QixFQUFFO1FBQzFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsZUFBZTtZQUN0QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGVBQWUsRUFBRSxRQUFRO2dCQUN6Qix5QkFBeUIsRUFBRSxRQUFRO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztRQUNuRixJQUFJLENBQUMscUNBQXFDLEdBQUcsTUFBTSxDQUFDLG9DQUFvQyxDQUFDO1FBQ3pGLElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztRQUM3RSxJQUFJLENBQUMsK0JBQStCLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixDQUFDO1FBQzdFLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUNyRSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsNkJBQTZCLENBQUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDekUsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQztRQUMvRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFRRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxJQUFXLGlDQUFpQyxDQUFDLEtBQWE7UUFDeEQsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLEtBQUssQ0FBQztJQUNsRCxDQUFDO0lBQ00sc0NBQXNDO1FBQzNDLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxTQUFTLENBQUM7SUFDdEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHNDQUFzQztRQUMvQyxPQUFPLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztJQUNqRCxDQUFDO0lBSUQsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBVyxpQ0FBaUMsQ0FBQyxLQUFhO1FBQ3hELElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQztJQUNNLHNDQUFzQztRQUMzQyxJQUFJLENBQUMsa0NBQWtDLEdBQUcsU0FBUyxDQUFDO0lBQ3RELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQ0FBc0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsa0NBQWtDLENBQUM7SUFDakQsQ0FBQztJQUlELElBQVcsb0NBQW9DO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQVcsb0NBQW9DLENBQUMsS0FBYTtRQUMzRCxJQUFJLENBQUMscUNBQXFDLEdBQUcsS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFDTSx5Q0FBeUM7UUFDOUMsSUFBSSxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQztJQUN6RCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUNBQXlDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLHFDQUFxQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELElBQVcseUJBQXlCLENBQUMsS0FBa0M7UUFDckUsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ00sOEJBQThCO1FBQ25DLElBQUksQ0FBQywwQkFBMEIsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDhCQUE4QjtRQUN2QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBa0M7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFJRCxJQUFXLDhCQUE4QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxJQUFXLDhCQUE4QixDQUFDLEtBQWE7UUFDckQsSUFBSSxDQUFDLCtCQUErQixHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBQ00sbUNBQW1DO1FBQ3hDLElBQUksQ0FBQywrQkFBK0IsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1DQUFtQztRQUM1QyxPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQztJQUM5QyxDQUFDO0lBSUQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsSUFBVyw4QkFBOEIsQ0FBQyxLQUFhO1FBQ3JELElBQUksQ0FBQywrQkFBK0IsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUNNLG1DQUFtQztRQUN4QyxJQUFJLENBQUMsK0JBQStCLEdBQUcsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQ0FBbUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsK0JBQStCLENBQUM7SUFDOUMsQ0FBQztJQUlELElBQVcsaUNBQWlDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQVcsaUNBQWlDLENBQUMsS0FBYTtRQUN4RCxJQUFJLENBQUMsa0NBQWtDLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFDTSxzQ0FBc0M7UUFDM0MsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0NBQXNDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDO0lBQ2pELENBQUM7SUFJRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxJQUFXLDBCQUEwQixDQUFDLEtBQWE7UUFDakQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsSUFBVywwQkFBMEIsQ0FBQyxLQUFhO1FBQ2pELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQztJQUlELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQVcsNkJBQTZCLENBQUMsS0FBYTtRQUNwRCxJQUFJLENBQUMsOEJBQThCLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7SUFDTSxrQ0FBa0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0NBQWtDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQzdDLENBQUM7SUFJRCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBVyxFQUFFLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBVyw0QkFBNEIsQ0FBQyxLQUFhO1FBQ25ELElBQUksQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUNNLGlDQUFpQztRQUN0QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUMsQ0FBQztJQUlELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELElBQVcsNEJBQTRCLENBQUMsS0FBYTtRQUNuRCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFDTSxpQ0FBaUM7UUFDdEMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUNBQWlDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDO0lBQzVDLENBQUM7SUFJRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxJQUFXLCtCQUErQixDQUFDLEtBQWE7UUFDdEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBQ00sb0NBQW9DO1FBQ3pDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9DQUFvQztRQUM3QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFJRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxJQUFXLHlCQUF5QixDQUFDLEtBQWE7UUFDaEQsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ00sOEJBQThCO1FBQ25DLElBQUksQ0FBQywwQkFBMEIsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDhCQUE4QjtRQUN2QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxDQUFDO0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUFhO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNNLDhCQUE4QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUlELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELElBQVcsNEJBQTRCLENBQUMsS0FBYTtRQUNuRCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFDTSxpQ0FBaUM7UUFDdEMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUNBQWlDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDO0lBQzVDLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBZ0M7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBZ0M7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUM7WUFDdkcscUNBQXFDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztZQUN2Ryx3Q0FBd0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO1lBQzdHLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7WUFDdEYsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckQsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztZQUNqRyxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDO1lBQ2pHLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUM7WUFDdkcsOEJBQThCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN6Riw4QkFBOEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQ3pGLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUM7WUFDL0YsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hFLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDN0YsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztZQUM3RixtQ0FBbUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO1lBQ25HLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7WUFDdkYsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUN2RixnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzdGLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUVTLHVCQUF1QjtRQUMvQixNQUFNLEtBQUssR0FBRztZQUNaLHFDQUFxQyxFQUFFO2dCQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDMUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELHFDQUFxQyxFQUFFO2dCQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDMUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELHdDQUF3QyxFQUFFO2dCQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztnQkFDN0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELDJCQUEyQixFQUFFO2dCQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztnQkFDbkUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsU0FBUzthQUM1QjtZQUNELGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbkQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsU0FBUzthQUM1QjtZQUNELGtDQUFrQyxFQUFFO2dCQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztnQkFDdkUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGtDQUFrQyxFQUFFO2dCQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztnQkFDdkUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELHFDQUFxQyxFQUFFO2dCQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDMUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELDhCQUE4QixFQUFFO2dCQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztnQkFDbkUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELDhCQUE4QixFQUFFO2dCQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztnQkFDbkUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGlDQUFpQyxFQUFFO2dCQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUN2RCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsZ0NBQWdDLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO2dCQUNyRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsZ0NBQWdDLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO2dCQUNyRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsbUNBQW1DLEVBQUU7Z0JBQ25DLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO2dCQUN4RSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ25ELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsNkJBQTZCLEVBQUU7Z0JBQzdCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO2dCQUNsRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsNkJBQTZCLEVBQUU7Z0JBQzdCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO2dCQUNsRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsZ0NBQWdDLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO2dCQUNyRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2xFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2dCQUNYLGdCQUFnQixFQUFFLFdBQVc7YUFDOUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDckUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsZ0JBQWdCLEVBQUUsV0FBVzthQUM5QjtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBL3JCSCw0QkFnc0JDOzs7QUE5ckJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csdUJBQWMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWNcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTbnNUb3BpY0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjYXBwbGljYXRpb25fZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiBTbnNUb3BpYyNhcHBsaWNhdGlvbl9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBhcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIFNuc1RvcGljI2FwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI2FwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgU25zVG9waWMjYXBwbGljYXRpb25fc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uIFNuc1RvcGljI2NvbnRlbnRfYmFzZWRfZGVkdXBsaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI2RlbGl2ZXJ5X3BvbGljeSBTbnNUb3BpYyNkZWxpdmVyeV9wb2xpY3l9XG4gICovXG4gIHJlYWRvbmx5IGRlbGl2ZXJ5UG9saWN5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjZGlzcGxheV9uYW1lIFNuc1RvcGljI2Rpc3BsYXlfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNmaWZvX3RvcGljIFNuc1RvcGljI2ZpZm9fdG9waWN9XG4gICovXG4gIHJlYWRvbmx5IGZpZm9Ub3BpYz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI2ZpcmVob3NlX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gU25zVG9waWMjZmlyZWhvc2VfZmFpbHVyZV9mZWVkYmFja19yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZmlyZWhvc2VGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiBTbnNUb3BpYyNmaXJlaG9zZV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBmaXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNmaXJlaG9zZV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlIFNuc1RvcGljI2ZpcmVob3NlX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGV9XG4gICovXG4gIHJlYWRvbmx5IGZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI2h0dHBfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiBTbnNUb3BpYyNodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIFNuc1RvcGljI2h0dHBfc3VjY2Vzc19mZWVkYmFja19yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgaHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgU25zVG9waWMjaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlfVxuICAqL1xuICByZWFkb25seSBodHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI2lkIFNuc1RvcGljI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMja21zX21hc3Rlcl9rZXlfaWQgU25zVG9waWMja21zX21hc3Rlcl9rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc01hc3RlcktleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjbGFtYmRhX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gU25zVG9waWMjbGFtYmRhX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGxhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNsYW1iZGFfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiBTbnNUb3BpYyNsYW1iZGFfc3VjY2Vzc19mZWVkYmFja19yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI2xhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlIFNuc1RvcGljI2xhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlfVxuICAqL1xuICByZWFkb25seSBsYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjbmFtZSBTbnNUb3BpYyNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjbmFtZV9wcmVmaXggU25zVG9waWMjbmFtZV9wcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IG5hbWVQcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNwb2xpY3kgU25zVG9waWMjcG9saWN5fVxuICAqL1xuICByZWFkb25seSBwb2xpY3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyNzcXNfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiBTbnNUb3BpYyNzcXNfZmFpbHVyZV9mZWVkYmFja19yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljI3Nxc19zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIFNuc1RvcGljI3Nxc19zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBzcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgU25zVG9waWMjc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGV9XG4gICovXG4gIHJlYWRvbmx5IHNxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nuc190b3BpYyN0YWdzIFNuc1RvcGljI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjdGFnc19hbGwgU25zVG9waWMjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc25zX3RvcGljIGF3c19zbnNfdG9waWN9XG4qL1xuZXhwb3J0IGNsYXNzIFNuc1RvcGljIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19zbnNfdG9waWNcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgU25zVG9waWMgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgU25zVG9waWMgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIFNuc1RvcGljIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFNuc1RvcGljIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19zbnNfdG9waWNcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zbnNfdG9waWMgYXdzX3Nuc190b3BpY30gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgU25zVG9waWNDb25maWcgPSB7fVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTbnNUb3BpY0NvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc25zX3RvcGljJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IGNvbmZpZy5hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiA9IGNvbmZpZy5jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uO1xuICAgIHRoaXMuX2RlbGl2ZXJ5UG9saWN5ID0gY29uZmlnLmRlbGl2ZXJ5UG9saWN5O1xuICAgIHRoaXMuX2Rpc3BsYXlOYW1lID0gY29uZmlnLmRpc3BsYXlOYW1lO1xuICAgIHRoaXMuX2ZpZm9Ub3BpYyA9IGNvbmZpZy5maWZvVG9waWM7XG4gICAgdGhpcy5fZmlyZWhvc2VGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IGNvbmZpZy5maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5faHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuaHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuaHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSBjb25maWcuaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fa21zTWFzdGVyS2V5SWQgPSBjb25maWcua21zTWFzdGVyS2V5SWQ7XG4gICAgdGhpcy5fbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcubGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gY29uZmlnLmxhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9wb2xpY3kgPSBjb25maWcucG9saWN5O1xuICAgIHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLnNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IGNvbmZpZy5zcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwcGxpY2F0aW9uX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBsaWNhdGlvbl9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gIH1cblxuICAvLyBhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwbGljYXRpb25fc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50QmFzZWREZWR1cGxpY2F0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudEJhc2VkRGVkdXBsaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50QmFzZWREZWR1cGxpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb247XG4gIH1cblxuICAvLyBkZWxpdmVyeV9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsaXZlcnlQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxpdmVyeVBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsaXZlcnlQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxpdmVyeVBvbGljeSgpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsaXZlcnlQb2xpY3k7XG4gIH1cblxuICAvLyBkaXNwbGF5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzcGxheU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlzcGxheV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXNwbGF5TmFtZSgpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzcGxheU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWU7XG4gIH1cblxuICAvLyBmaWZvX3RvcGljIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpZm9Ub3BpYz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZmlmb1RvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZpZm9fdG9waWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpZm9Ub3BpYyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZmlmb1RvcGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rmlmb1RvcGljKCkge1xuICAgIHRoaXMuX2ZpZm9Ub3BpYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlmb1RvcGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZm9Ub3BpYztcbiAgfVxuXG4gIC8vIGZpcmVob3NlX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlyZWhvc2VGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaXJlaG9zZV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gIH1cblxuICAvLyBmaXJlaG9zZV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICB9XG5cbiAgLy8gZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ZpcmVob3NlX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vIGh0dHBfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGh0dHBfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGh0dHBfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGttc19tYXN0ZXJfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc01hc3RlcktleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNNYXN0ZXJLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19tYXN0ZXJfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNNYXN0ZXJLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zTWFzdGVyS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNNYXN0ZXJLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNNYXN0ZXJLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zTWFzdGVyS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zTWFzdGVyS2V5SWQ7XG4gIH1cblxuICAvLyBsYW1iZGFfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFtYmRhX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGxhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYW1iZGFfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICB9XG5cbiAgLy8gbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2xhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZVByZWZpeCgpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXg7XG4gIH1cblxuICAvLyBvd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXInKTtcbiAgfVxuXG4gIC8vIHBvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvbGljeSgpIHtcbiAgICB0aGlzLl9wb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb2xpY3k7XG4gIH1cblxuICAvLyBzcXNfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3FzX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIHNxc19zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcXNfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICB9XG5cbiAgLy8gc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Nxc19zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBwbGljYXRpb25fZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGFwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICBhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiksXG4gICAgICBkZWxpdmVyeV9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlbGl2ZXJ5UG9saWN5KSxcbiAgICAgIGRpc3BsYXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlzcGxheU5hbWUpLFxuICAgICAgZmlmb190b3BpYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZpZm9Ub3BpYyksXG4gICAgICBmaXJlaG9zZV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGZpcmVob3NlX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICBodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGh0dHBfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAga21zX21hc3Rlcl9rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc01hc3RlcktleUlkKSxcbiAgICAgIGxhbWJkYV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGxhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGxhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wb2xpY3kpLFxuICAgICAgc3FzX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhcHBsaWNhdGlvbl9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50X2Jhc2VkX2RlZHVwbGljYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGRlbGl2ZXJ5X3BvbGljeToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVsaXZlcnlQb2xpY3kpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5X25hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2Rpc3BsYXlOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZmlmb190b3BpYzoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2ZpZm9Ub3BpYyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBmaXJlaG9zZV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBmaXJlaG9zZV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBmaXJlaG9zZV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGh0dHBfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBrbXNfbWFzdGVyX2tleV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fa21zTWFzdGVyS2V5SWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsYW1iZGFfZmFpbHVyZV9mZWVkYmFja19yb2xlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGxhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZV9wcmVmaXg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3BvbGljeSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNxc19mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzcXNfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19