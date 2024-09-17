"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmsEndpoint = exports.DmsEndpointS3SettingsOutputReference = exports.dmsEndpointS3SettingsToHclTerraform = exports.dmsEndpointS3SettingsToTerraform = exports.DmsEndpointMongodbSettingsOutputReference = exports.dmsEndpointMongodbSettingsToHclTerraform = exports.dmsEndpointMongodbSettingsToTerraform = exports.DmsEndpointKinesisSettingsOutputReference = exports.dmsEndpointKinesisSettingsToHclTerraform = exports.dmsEndpointKinesisSettingsToTerraform = exports.DmsEndpointKafkaSettingsOutputReference = exports.dmsEndpointKafkaSettingsToHclTerraform = exports.dmsEndpointKafkaSettingsToTerraform = exports.DmsEndpointElasticsearchSettingsOutputReference = exports.dmsEndpointElasticsearchSettingsToHclTerraform = exports.dmsEndpointElasticsearchSettingsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dmsEndpointElasticsearchSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        endpoint_uri: cdktf.stringToTerraform(struct.endpointUri),
        error_retry_duration: cdktf.numberToTerraform(struct.errorRetryDuration),
        full_load_error_percentage: cdktf.numberToTerraform(struct.fullLoadErrorPercentage),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
    };
}
exports.dmsEndpointElasticsearchSettingsToTerraform = dmsEndpointElasticsearchSettingsToTerraform;
function dmsEndpointElasticsearchSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        endpoint_uri: {
            value: cdktf.stringToHclTerraform(struct.endpointUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_retry_duration: {
            value: cdktf.numberToHclTerraform(struct.errorRetryDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        full_load_error_percentage: {
            value: cdktf.numberToHclTerraform(struct.fullLoadErrorPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service_access_role_arn: {
            value: cdktf.stringToHclTerraform(struct.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.dmsEndpointElasticsearchSettingsToHclTerraform = dmsEndpointElasticsearchSettingsToHclTerraform;
class DmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._endpointUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointUri = this._endpointUri;
        }
        if (this._errorRetryDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorRetryDuration = this._errorRetryDuration;
        }
        if (this._fullLoadErrorPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullLoadErrorPercentage = this._fullLoadErrorPercentage;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._endpointUri = undefined;
            this._errorRetryDuration = undefined;
            this._fullLoadErrorPercentage = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._endpointUri = value.endpointUri;
            this._errorRetryDuration = value.errorRetryDuration;
            this._fullLoadErrorPercentage = value.fullLoadErrorPercentage;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }
    get endpointUri() {
        return this.getStringAttribute('endpoint_uri');
    }
    set endpointUri(value) {
        this._endpointUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointUriInput() {
        return this._endpointUri;
    }
    get errorRetryDuration() {
        return this.getNumberAttribute('error_retry_duration');
    }
    set errorRetryDuration(value) {
        this._errorRetryDuration = value;
    }
    resetErrorRetryDuration() {
        this._errorRetryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get errorRetryDurationInput() {
        return this._errorRetryDuration;
    }
    get fullLoadErrorPercentage() {
        return this.getNumberAttribute('full_load_error_percentage');
    }
    set fullLoadErrorPercentage(value) {
        this._fullLoadErrorPercentage = value;
    }
    resetFullLoadErrorPercentage() {
        this._fullLoadErrorPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fullLoadErrorPercentageInput() {
        return this._fullLoadErrorPercentage;
    }
    get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    set serviceAccessRoleArn(value) {
        this._serviceAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
exports.DmsEndpointElasticsearchSettingsOutputReference = DmsEndpointElasticsearchSettingsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
DmsEndpointElasticsearchSettingsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference", version: "0.0.0" };
function dmsEndpointKafkaSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        broker: cdktf.stringToTerraform(struct.broker),
        include_control_details: cdktf.booleanToTerraform(struct.includeControlDetails),
        include_null_and_empty: cdktf.booleanToTerraform(struct.includeNullAndEmpty),
        include_partition_value: cdktf.booleanToTerraform(struct.includePartitionValue),
        include_table_alter_operations: cdktf.booleanToTerraform(struct.includeTableAlterOperations),
        include_transaction_details: cdktf.booleanToTerraform(struct.includeTransactionDetails),
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        message_max_bytes: cdktf.numberToTerraform(struct.messageMaxBytes),
        no_hex_prefix: cdktf.booleanToTerraform(struct.noHexPrefix),
        partition_include_schema_table: cdktf.booleanToTerraform(struct.partitionIncludeSchemaTable),
        sasl_password: cdktf.stringToTerraform(struct.saslPassword),
        sasl_username: cdktf.stringToTerraform(struct.saslUsername),
        security_protocol: cdktf.stringToTerraform(struct.securityProtocol),
        ssl_ca_certificate_arn: cdktf.stringToTerraform(struct.sslCaCertificateArn),
        ssl_client_certificate_arn: cdktf.stringToTerraform(struct.sslClientCertificateArn),
        ssl_client_key_arn: cdktf.stringToTerraform(struct.sslClientKeyArn),
        ssl_client_key_password: cdktf.stringToTerraform(struct.sslClientKeyPassword),
        topic: cdktf.stringToTerraform(struct.topic),
    };
}
exports.dmsEndpointKafkaSettingsToTerraform = dmsEndpointKafkaSettingsToTerraform;
function dmsEndpointKafkaSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        broker: {
            value: cdktf.stringToHclTerraform(struct.broker),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_control_details: {
            value: cdktf.booleanToHclTerraform(struct.includeControlDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_null_and_empty: {
            value: cdktf.booleanToHclTerraform(struct.includeNullAndEmpty),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_partition_value: {
            value: cdktf.booleanToHclTerraform(struct.includePartitionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_table_alter_operations: {
            value: cdktf.booleanToHclTerraform(struct.includeTableAlterOperations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_transaction_details: {
            value: cdktf.booleanToHclTerraform(struct.includeTransactionDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        message_format: {
            value: cdktf.stringToHclTerraform(struct.messageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_max_bytes: {
            value: cdktf.numberToHclTerraform(struct.messageMaxBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        no_hex_prefix: {
            value: cdktf.booleanToHclTerraform(struct.noHexPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        partition_include_schema_table: {
            value: cdktf.booleanToHclTerraform(struct.partitionIncludeSchemaTable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sasl_password: {
            value: cdktf.stringToHclTerraform(struct.saslPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sasl_username: {
            value: cdktf.stringToHclTerraform(struct.saslUsername),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_protocol: {
            value: cdktf.stringToHclTerraform(struct.securityProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_ca_certificate_arn: {
            value: cdktf.stringToHclTerraform(struct.sslCaCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_client_certificate_arn: {
            value: cdktf.stringToHclTerraform(struct.sslClientCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_client_key_arn: {
            value: cdktf.stringToHclTerraform(struct.sslClientKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_client_key_password: {
            value: cdktf.stringToHclTerraform(struct.sslClientKeyPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic: {
            value: cdktf.stringToHclTerraform(struct.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.dmsEndpointKafkaSettingsToHclTerraform = dmsEndpointKafkaSettingsToHclTerraform;
class DmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._broker !== undefined) {
            hasAnyValues = true;
            internalValueResult.broker = this._broker;
        }
        if (this._includeControlDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeControlDetails = this._includeControlDetails;
        }
        if (this._includeNullAndEmpty !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
        }
        if (this._includePartitionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includePartitionValue = this._includePartitionValue;
        }
        if (this._includeTableAlterOperations !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
        }
        if (this._includeTransactionDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
        }
        if (this._messageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._messageMaxBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageMaxBytes = this._messageMaxBytes;
        }
        if (this._noHexPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.noHexPrefix = this._noHexPrefix;
        }
        if (this._partitionIncludeSchemaTable !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
        }
        if (this._saslPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslPassword = this._saslPassword;
        }
        if (this._saslUsername !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslUsername = this._saslUsername;
        }
        if (this._securityProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityProtocol = this._securityProtocol;
        }
        if (this._sslCaCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
        }
        if (this._sslClientCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslClientCertificateArn = this._sslClientCertificateArn;
        }
        if (this._sslClientKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslClientKeyArn = this._sslClientKeyArn;
        }
        if (this._sslClientKeyPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslClientKeyPassword = this._sslClientKeyPassword;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._broker = undefined;
            this._includeControlDetails = undefined;
            this._includeNullAndEmpty = undefined;
            this._includePartitionValue = undefined;
            this._includeTableAlterOperations = undefined;
            this._includeTransactionDetails = undefined;
            this._messageFormat = undefined;
            this._messageMaxBytes = undefined;
            this._noHexPrefix = undefined;
            this._partitionIncludeSchemaTable = undefined;
            this._saslPassword = undefined;
            this._saslUsername = undefined;
            this._securityProtocol = undefined;
            this._sslCaCertificateArn = undefined;
            this._sslClientCertificateArn = undefined;
            this._sslClientKeyArn = undefined;
            this._sslClientKeyPassword = undefined;
            this._topic = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._broker = value.broker;
            this._includeControlDetails = value.includeControlDetails;
            this._includeNullAndEmpty = value.includeNullAndEmpty;
            this._includePartitionValue = value.includePartitionValue;
            this._includeTableAlterOperations = value.includeTableAlterOperations;
            this._includeTransactionDetails = value.includeTransactionDetails;
            this._messageFormat = value.messageFormat;
            this._messageMaxBytes = value.messageMaxBytes;
            this._noHexPrefix = value.noHexPrefix;
            this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
            this._saslPassword = value.saslPassword;
            this._saslUsername = value.saslUsername;
            this._securityProtocol = value.securityProtocol;
            this._sslCaCertificateArn = value.sslCaCertificateArn;
            this._sslClientCertificateArn = value.sslClientCertificateArn;
            this._sslClientKeyArn = value.sslClientKeyArn;
            this._sslClientKeyPassword = value.sslClientKeyPassword;
            this._topic = value.topic;
        }
    }
    get broker() {
        return this.getStringAttribute('broker');
    }
    set broker(value) {
        this._broker = value;
    }
    // Temporarily expose input value. Use with caution.
    get brokerInput() {
        return this._broker;
    }
    get includeControlDetails() {
        return this.getBooleanAttribute('include_control_details');
    }
    set includeControlDetails(value) {
        this._includeControlDetails = value;
    }
    resetIncludeControlDetails() {
        this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeControlDetailsInput() {
        return this._includeControlDetails;
    }
    get includeNullAndEmpty() {
        return this.getBooleanAttribute('include_null_and_empty');
    }
    set includeNullAndEmpty(value) {
        this._includeNullAndEmpty = value;
    }
    resetIncludeNullAndEmpty() {
        this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeNullAndEmptyInput() {
        return this._includeNullAndEmpty;
    }
    get includePartitionValue() {
        return this.getBooleanAttribute('include_partition_value');
    }
    set includePartitionValue(value) {
        this._includePartitionValue = value;
    }
    resetIncludePartitionValue() {
        this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includePartitionValueInput() {
        return this._includePartitionValue;
    }
    get includeTableAlterOperations() {
        return this.getBooleanAttribute('include_table_alter_operations');
    }
    set includeTableAlterOperations(value) {
        this._includeTableAlterOperations = value;
    }
    resetIncludeTableAlterOperations() {
        this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeTableAlterOperationsInput() {
        return this._includeTableAlterOperations;
    }
    get includeTransactionDetails() {
        return this.getBooleanAttribute('include_transaction_details');
    }
    set includeTransactionDetails(value) {
        this._includeTransactionDetails = value;
    }
    resetIncludeTransactionDetails() {
        this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeTransactionDetailsInput() {
        return this._includeTransactionDetails;
    }
    get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    set messageFormat(value) {
        this._messageFormat = value;
    }
    resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageFormatInput() {
        return this._messageFormat;
    }
    get messageMaxBytes() {
        return this.getNumberAttribute('message_max_bytes');
    }
    set messageMaxBytes(value) {
        this._messageMaxBytes = value;
    }
    resetMessageMaxBytes() {
        this._messageMaxBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageMaxBytesInput() {
        return this._messageMaxBytes;
    }
    get noHexPrefix() {
        return this.getBooleanAttribute('no_hex_prefix');
    }
    set noHexPrefix(value) {
        this._noHexPrefix = value;
    }
    resetNoHexPrefix() {
        this._noHexPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noHexPrefixInput() {
        return this._noHexPrefix;
    }
    get partitionIncludeSchemaTable() {
        return this.getBooleanAttribute('partition_include_schema_table');
    }
    set partitionIncludeSchemaTable(value) {
        this._partitionIncludeSchemaTable = value;
    }
    resetPartitionIncludeSchemaTable() {
        this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get partitionIncludeSchemaTableInput() {
        return this._partitionIncludeSchemaTable;
    }
    get saslPassword() {
        return this.getStringAttribute('sasl_password');
    }
    set saslPassword(value) {
        this._saslPassword = value;
    }
    resetSaslPassword() {
        this._saslPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get saslPasswordInput() {
        return this._saslPassword;
    }
    get saslUsername() {
        return this.getStringAttribute('sasl_username');
    }
    set saslUsername(value) {
        this._saslUsername = value;
    }
    resetSaslUsername() {
        this._saslUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get saslUsernameInput() {
        return this._saslUsername;
    }
    get securityProtocol() {
        return this.getStringAttribute('security_protocol');
    }
    set securityProtocol(value) {
        this._securityProtocol = value;
    }
    resetSecurityProtocol() {
        this._securityProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityProtocolInput() {
        return this._securityProtocol;
    }
    get sslCaCertificateArn() {
        return this.getStringAttribute('ssl_ca_certificate_arn');
    }
    set sslCaCertificateArn(value) {
        this._sslCaCertificateArn = value;
    }
    resetSslCaCertificateArn() {
        this._sslCaCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslCaCertificateArnInput() {
        return this._sslCaCertificateArn;
    }
    get sslClientCertificateArn() {
        return this.getStringAttribute('ssl_client_certificate_arn');
    }
    set sslClientCertificateArn(value) {
        this._sslClientCertificateArn = value;
    }
    resetSslClientCertificateArn() {
        this._sslClientCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslClientCertificateArnInput() {
        return this._sslClientCertificateArn;
    }
    get sslClientKeyArn() {
        return this.getStringAttribute('ssl_client_key_arn');
    }
    set sslClientKeyArn(value) {
        this._sslClientKeyArn = value;
    }
    resetSslClientKeyArn() {
        this._sslClientKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslClientKeyArnInput() {
        return this._sslClientKeyArn;
    }
    get sslClientKeyPassword() {
        return this.getStringAttribute('ssl_client_key_password');
    }
    set sslClientKeyPassword(value) {
        this._sslClientKeyPassword = value;
    }
    resetSslClientKeyPassword() {
        this._sslClientKeyPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslClientKeyPasswordInput() {
        return this._sslClientKeyPassword;
    }
    get topic() {
        return this.getStringAttribute('topic');
    }
    set topic(value) {
        this._topic = value;
    }
    resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topicInput() {
        return this._topic;
    }
}
exports.DmsEndpointKafkaSettingsOutputReference = DmsEndpointKafkaSettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
DmsEndpointKafkaSettingsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference", version: "0.0.0" };
function dmsEndpointKinesisSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_control_details: cdktf.booleanToTerraform(struct.includeControlDetails),
        include_null_and_empty: cdktf.booleanToTerraform(struct.includeNullAndEmpty),
        include_partition_value: cdktf.booleanToTerraform(struct.includePartitionValue),
        include_table_alter_operations: cdktf.booleanToTerraform(struct.includeTableAlterOperations),
        include_transaction_details: cdktf.booleanToTerraform(struct.includeTransactionDetails),
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        partition_include_schema_table: cdktf.booleanToTerraform(struct.partitionIncludeSchemaTable),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
        stream_arn: cdktf.stringToTerraform(struct.streamArn),
    };
}
exports.dmsEndpointKinesisSettingsToTerraform = dmsEndpointKinesisSettingsToTerraform;
function dmsEndpointKinesisSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        include_control_details: {
            value: cdktf.booleanToHclTerraform(struct.includeControlDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_null_and_empty: {
            value: cdktf.booleanToHclTerraform(struct.includeNullAndEmpty),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_partition_value: {
            value: cdktf.booleanToHclTerraform(struct.includePartitionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_table_alter_operations: {
            value: cdktf.booleanToHclTerraform(struct.includeTableAlterOperations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_transaction_details: {
            value: cdktf.booleanToHclTerraform(struct.includeTransactionDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        message_format: {
            value: cdktf.stringToHclTerraform(struct.messageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_include_schema_table: {
            value: cdktf.booleanToHclTerraform(struct.partitionIncludeSchemaTable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        service_access_role_arn: {
            value: cdktf.stringToHclTerraform(struct.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_arn: {
            value: cdktf.stringToHclTerraform(struct.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.dmsEndpointKinesisSettingsToHclTerraform = dmsEndpointKinesisSettingsToHclTerraform;
class DmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._includeControlDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeControlDetails = this._includeControlDetails;
        }
        if (this._includeNullAndEmpty !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
        }
        if (this._includePartitionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includePartitionValue = this._includePartitionValue;
        }
        if (this._includeTableAlterOperations !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
        }
        if (this._includeTransactionDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
        }
        if (this._messageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._partitionIncludeSchemaTable !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._includeControlDetails = undefined;
            this._includeNullAndEmpty = undefined;
            this._includePartitionValue = undefined;
            this._includeTableAlterOperations = undefined;
            this._includeTransactionDetails = undefined;
            this._messageFormat = undefined;
            this._partitionIncludeSchemaTable = undefined;
            this._serviceAccessRoleArn = undefined;
            this._streamArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._includeControlDetails = value.includeControlDetails;
            this._includeNullAndEmpty = value.includeNullAndEmpty;
            this._includePartitionValue = value.includePartitionValue;
            this._includeTableAlterOperations = value.includeTableAlterOperations;
            this._includeTransactionDetails = value.includeTransactionDetails;
            this._messageFormat = value.messageFormat;
            this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
            this._streamArn = value.streamArn;
        }
    }
    get includeControlDetails() {
        return this.getBooleanAttribute('include_control_details');
    }
    set includeControlDetails(value) {
        this._includeControlDetails = value;
    }
    resetIncludeControlDetails() {
        this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeControlDetailsInput() {
        return this._includeControlDetails;
    }
    get includeNullAndEmpty() {
        return this.getBooleanAttribute('include_null_and_empty');
    }
    set includeNullAndEmpty(value) {
        this._includeNullAndEmpty = value;
    }
    resetIncludeNullAndEmpty() {
        this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeNullAndEmptyInput() {
        return this._includeNullAndEmpty;
    }
    get includePartitionValue() {
        return this.getBooleanAttribute('include_partition_value');
    }
    set includePartitionValue(value) {
        this._includePartitionValue = value;
    }
    resetIncludePartitionValue() {
        this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includePartitionValueInput() {
        return this._includePartitionValue;
    }
    get includeTableAlterOperations() {
        return this.getBooleanAttribute('include_table_alter_operations');
    }
    set includeTableAlterOperations(value) {
        this._includeTableAlterOperations = value;
    }
    resetIncludeTableAlterOperations() {
        this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeTableAlterOperationsInput() {
        return this._includeTableAlterOperations;
    }
    get includeTransactionDetails() {
        return this.getBooleanAttribute('include_transaction_details');
    }
    set includeTransactionDetails(value) {
        this._includeTransactionDetails = value;
    }
    resetIncludeTransactionDetails() {
        this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeTransactionDetailsInput() {
        return this._includeTransactionDetails;
    }
    get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    set messageFormat(value) {
        this._messageFormat = value;
    }
    resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageFormatInput() {
        return this._messageFormat;
    }
    get partitionIncludeSchemaTable() {
        return this.getBooleanAttribute('partition_include_schema_table');
    }
    set partitionIncludeSchemaTable(value) {
        this._partitionIncludeSchemaTable = value;
    }
    resetPartitionIncludeSchemaTable() {
        this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get partitionIncludeSchemaTableInput() {
        return this._partitionIncludeSchemaTable;
    }
    get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    set serviceAccessRoleArn(value) {
        this._serviceAccessRoleArn = value;
    }
    resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
    get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    set streamArn(value) {
        this._streamArn = value;
    }
    resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get streamArnInput() {
        return this._streamArn;
    }
}
exports.DmsEndpointKinesisSettingsOutputReference = DmsEndpointKinesisSettingsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
DmsEndpointKinesisSettingsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference", version: "0.0.0" };
function dmsEndpointMongodbSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_mechanism: cdktf.stringToTerraform(struct.authMechanism),
        auth_source: cdktf.stringToTerraform(struct.authSource),
        auth_type: cdktf.stringToTerraform(struct.authType),
        docs_to_investigate: cdktf.stringToTerraform(struct.docsToInvestigate),
        extract_doc_id: cdktf.stringToTerraform(struct.extractDocId),
        nesting_level: cdktf.stringToTerraform(struct.nestingLevel),
    };
}
exports.dmsEndpointMongodbSettingsToTerraform = dmsEndpointMongodbSettingsToTerraform;
function dmsEndpointMongodbSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_mechanism: {
            value: cdktf.stringToHclTerraform(struct.authMechanism),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_source: {
            value: cdktf.stringToHclTerraform(struct.authSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_type: {
            value: cdktf.stringToHclTerraform(struct.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        docs_to_investigate: {
            value: cdktf.stringToHclTerraform(struct.docsToInvestigate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extract_doc_id: {
            value: cdktf.stringToHclTerraform(struct.extractDocId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nesting_level: {
            value: cdktf.stringToHclTerraform(struct.nestingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.dmsEndpointMongodbSettingsToHclTerraform = dmsEndpointMongodbSettingsToHclTerraform;
class DmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._authMechanism !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMechanism = this._authMechanism;
        }
        if (this._authSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.authSource = this._authSource;
        }
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._docsToInvestigate !== undefined) {
            hasAnyValues = true;
            internalValueResult.docsToInvestigate = this._docsToInvestigate;
        }
        if (this._extractDocId !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractDocId = this._extractDocId;
        }
        if (this._nestingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.nestingLevel = this._nestingLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authMechanism = undefined;
            this._authSource = undefined;
            this._authType = undefined;
            this._docsToInvestigate = undefined;
            this._extractDocId = undefined;
            this._nestingLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authMechanism = value.authMechanism;
            this._authSource = value.authSource;
            this._authType = value.authType;
            this._docsToInvestigate = value.docsToInvestigate;
            this._extractDocId = value.extractDocId;
            this._nestingLevel = value.nestingLevel;
        }
    }
    get authMechanism() {
        return this.getStringAttribute('auth_mechanism');
    }
    set authMechanism(value) {
        this._authMechanism = value;
    }
    resetAuthMechanism() {
        this._authMechanism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMechanismInput() {
        return this._authMechanism;
    }
    get authSource() {
        return this.getStringAttribute('auth_source');
    }
    set authSource(value) {
        this._authSource = value;
    }
    resetAuthSource() {
        this._authSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authSourceInput() {
        return this._authSource;
    }
    get authType() {
        return this.getStringAttribute('auth_type');
    }
    set authType(value) {
        this._authType = value;
    }
    resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authTypeInput() {
        return this._authType;
    }
    get docsToInvestigate() {
        return this.getStringAttribute('docs_to_investigate');
    }
    set docsToInvestigate(value) {
        this._docsToInvestigate = value;
    }
    resetDocsToInvestigate() {
        this._docsToInvestigate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get docsToInvestigateInput() {
        return this._docsToInvestigate;
    }
    get extractDocId() {
        return this.getStringAttribute('extract_doc_id');
    }
    set extractDocId(value) {
        this._extractDocId = value;
    }
    resetExtractDocId() {
        this._extractDocId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extractDocIdInput() {
        return this._extractDocId;
    }
    get nestingLevel() {
        return this.getStringAttribute('nesting_level');
    }
    set nestingLevel(value) {
        this._nestingLevel = value;
    }
    resetNestingLevel() {
        this._nestingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nestingLevelInput() {
        return this._nestingLevel;
    }
}
exports.DmsEndpointMongodbSettingsOutputReference = DmsEndpointMongodbSettingsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
DmsEndpointMongodbSettingsOutputReference[_d] = { fqn: "@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference", version: "0.0.0" };
function dmsEndpointS3SettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_folder: cdktf.stringToTerraform(struct.bucketFolder),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        compression_type: cdktf.stringToTerraform(struct.compressionType),
        csv_delimiter: cdktf.stringToTerraform(struct.csvDelimiter),
        csv_row_delimiter: cdktf.stringToTerraform(struct.csvRowDelimiter),
        data_format: cdktf.stringToTerraform(struct.dataFormat),
        date_partition_enabled: cdktf.booleanToTerraform(struct.datePartitionEnabled),
        encryption_mode: cdktf.stringToTerraform(struct.encryptionMode),
        external_table_definition: cdktf.stringToTerraform(struct.externalTableDefinition),
        parquet_timestamp_in_millisecond: cdktf.booleanToTerraform(struct.parquetTimestampInMillisecond),
        parquet_version: cdktf.stringToTerraform(struct.parquetVersion),
        server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct.serverSideEncryptionKmsKeyId),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
    };
}
exports.dmsEndpointS3SettingsToTerraform = dmsEndpointS3SettingsToTerraform;
function dmsEndpointS3SettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_folder: {
            value: cdktf.stringToHclTerraform(struct.bucketFolder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_name: {
            value: cdktf.stringToHclTerraform(struct.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compression_type: {
            value: cdktf.stringToHclTerraform(struct.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        csv_delimiter: {
            value: cdktf.stringToHclTerraform(struct.csvDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        csv_row_delimiter: {
            value: cdktf.stringToHclTerraform(struct.csvRowDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_format: {
            value: cdktf.stringToHclTerraform(struct.dataFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        date_partition_enabled: {
            value: cdktf.booleanToHclTerraform(struct.datePartitionEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encryption_mode: {
            value: cdktf.stringToHclTerraform(struct.encryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_table_definition: {
            value: cdktf.stringToHclTerraform(struct.externalTableDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parquet_timestamp_in_millisecond: {
            value: cdktf.booleanToHclTerraform(struct.parquetTimestampInMillisecond),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        parquet_version: {
            value: cdktf.stringToHclTerraform(struct.parquetVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_side_encryption_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.serverSideEncryptionKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_access_role_arn: {
            value: cdktf.stringToHclTerraform(struct.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.dmsEndpointS3SettingsToHclTerraform = dmsEndpointS3SettingsToHclTerraform;
class DmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketFolder !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketFolder = this._bucketFolder;
        }
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._csvDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvDelimiter = this._csvDelimiter;
        }
        if (this._csvRowDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvRowDelimiter = this._csvRowDelimiter;
        }
        if (this._dataFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFormat = this._dataFormat;
        }
        if (this._datePartitionEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.datePartitionEnabled = this._datePartitionEnabled;
        }
        if (this._encryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionMode = this._encryptionMode;
        }
        if (this._externalTableDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalTableDefinition = this._externalTableDefinition;
        }
        if (this._parquetTimestampInMillisecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquetTimestampInMillisecond = this._parquetTimestampInMillisecond;
        }
        if (this._parquetVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquetVersion = this._parquetVersion;
        }
        if (this._serverSideEncryptionKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketFolder = undefined;
            this._bucketName = undefined;
            this._compressionType = undefined;
            this._csvDelimiter = undefined;
            this._csvRowDelimiter = undefined;
            this._dataFormat = undefined;
            this._datePartitionEnabled = undefined;
            this._encryptionMode = undefined;
            this._externalTableDefinition = undefined;
            this._parquetTimestampInMillisecond = undefined;
            this._parquetVersion = undefined;
            this._serverSideEncryptionKmsKeyId = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketFolder = value.bucketFolder;
            this._bucketName = value.bucketName;
            this._compressionType = value.compressionType;
            this._csvDelimiter = value.csvDelimiter;
            this._csvRowDelimiter = value.csvRowDelimiter;
            this._dataFormat = value.dataFormat;
            this._datePartitionEnabled = value.datePartitionEnabled;
            this._encryptionMode = value.encryptionMode;
            this._externalTableDefinition = value.externalTableDefinition;
            this._parquetTimestampInMillisecond = value.parquetTimestampInMillisecond;
            this._parquetVersion = value.parquetVersion;
            this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }
    get bucketFolder() {
        return this.getStringAttribute('bucket_folder');
    }
    set bucketFolder(value) {
        this._bucketFolder = value;
    }
    resetBucketFolder() {
        this._bucketFolder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketFolderInput() {
        return this._bucketFolder;
    }
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    set compressionType(value) {
        this._compressionType = value;
    }
    resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionTypeInput() {
        return this._compressionType;
    }
    get csvDelimiter() {
        return this.getStringAttribute('csv_delimiter');
    }
    set csvDelimiter(value) {
        this._csvDelimiter = value;
    }
    resetCsvDelimiter() {
        this._csvDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csvDelimiterInput() {
        return this._csvDelimiter;
    }
    get csvRowDelimiter() {
        return this.getStringAttribute('csv_row_delimiter');
    }
    set csvRowDelimiter(value) {
        this._csvRowDelimiter = value;
    }
    resetCsvRowDelimiter() {
        this._csvRowDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csvRowDelimiterInput() {
        return this._csvRowDelimiter;
    }
    get dataFormat() {
        return this.getStringAttribute('data_format');
    }
    set dataFormat(value) {
        this._dataFormat = value;
    }
    resetDataFormat() {
        this._dataFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataFormatInput() {
        return this._dataFormat;
    }
    get datePartitionEnabled() {
        return this.getBooleanAttribute('date_partition_enabled');
    }
    set datePartitionEnabled(value) {
        this._datePartitionEnabled = value;
    }
    resetDatePartitionEnabled() {
        this._datePartitionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datePartitionEnabledInput() {
        return this._datePartitionEnabled;
    }
    get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
    }
    set encryptionMode(value) {
        this._encryptionMode = value;
    }
    resetEncryptionMode() {
        this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionModeInput() {
        return this._encryptionMode;
    }
    get externalTableDefinition() {
        return this.getStringAttribute('external_table_definition');
    }
    set externalTableDefinition(value) {
        this._externalTableDefinition = value;
    }
    resetExternalTableDefinition() {
        this._externalTableDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalTableDefinitionInput() {
        return this._externalTableDefinition;
    }
    get parquetTimestampInMillisecond() {
        return this.getBooleanAttribute('parquet_timestamp_in_millisecond');
    }
    set parquetTimestampInMillisecond(value) {
        this._parquetTimestampInMillisecond = value;
    }
    resetParquetTimestampInMillisecond() {
        this._parquetTimestampInMillisecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parquetTimestampInMillisecondInput() {
        return this._parquetTimestampInMillisecond;
    }
    get parquetVersion() {
        return this.getStringAttribute('parquet_version');
    }
    set parquetVersion(value) {
        this._parquetVersion = value;
    }
    resetParquetVersion() {
        this._parquetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parquetVersionInput() {
        return this._parquetVersion;
    }
    get serverSideEncryptionKmsKeyId() {
        return this.getStringAttribute('server_side_encryption_kms_key_id');
    }
    set serverSideEncryptionKmsKeyId(value) {
        this._serverSideEncryptionKmsKeyId = value;
    }
    resetServerSideEncryptionKmsKeyId() {
        this._serverSideEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverSideEncryptionKmsKeyIdInput() {
        return this._serverSideEncryptionKmsKeyId;
    }
    get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    set serviceAccessRoleArn(value) {
        this._serviceAccessRoleArn = value;
    }
    resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
exports.DmsEndpointS3SettingsOutputReference = DmsEndpointS3SettingsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
DmsEndpointS3SettingsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint aws_dms_endpoint}
*/
class DmsEndpoint extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DmsEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsEndpoint to import
    * @param importFromId The id of the existing DmsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsEndpoint to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_endpoint", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint aws_dms_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEndpointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dms_endpoint',
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
        // elasticsearch_settings - computed: false, optional: true, required: false
        this._elasticsearchSettings = new DmsEndpointElasticsearchSettingsOutputReference(this, "elasticsearch_settings");
        // kafka_settings - computed: false, optional: true, required: false
        this._kafkaSettings = new DmsEndpointKafkaSettingsOutputReference(this, "kafka_settings");
        // kinesis_settings - computed: false, optional: true, required: false
        this._kinesisSettings = new DmsEndpointKinesisSettingsOutputReference(this, "kinesis_settings");
        // mongodb_settings - computed: false, optional: true, required: false
        this._mongodbSettings = new DmsEndpointMongodbSettingsOutputReference(this, "mongodb_settings");
        // s3_settings - computed: false, optional: true, required: false
        this._s3Settings = new DmsEndpointS3SettingsOutputReference(this, "s3_settings");
        this._certificateArn = config.certificateArn;
        this._databaseName = config.databaseName;
        this._endpointId = config.endpointId;
        this._endpointType = config.endpointType;
        this._engineName = config.engineName;
        this._extraConnectionAttributes = config.extraConnectionAttributes;
        this._id = config.id;
        this._kmsKeyArn = config.kmsKeyArn;
        this._password = config.password;
        this._port = config.port;
        this._secretsManagerAccessRoleArn = config.secretsManagerAccessRoleArn;
        this._secretsManagerArn = config.secretsManagerArn;
        this._serverName = config.serverName;
        this._serviceAccessRole = config.serviceAccessRole;
        this._sslMode = config.sslMode;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._username = config.username;
        this._elasticsearchSettings.internalValue = config.elasticsearchSettings;
        this._kafkaSettings.internalValue = config.kafkaSettings;
        this._kinesisSettings.internalValue = config.kinesisSettings;
        this._mongodbSettings.internalValue = config.mongodbSettings;
        this._s3Settings.internalValue = config.s3Settings;
    }
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    set certificateArn(value) {
        this._certificateArn = value;
    }
    resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateArnInput() {
        return this._certificateArn;
    }
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    set databaseName(value) {
        this._databaseName = value;
    }
    resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get databaseNameInput() {
        return this._databaseName;
    }
    // endpoint_arn - computed: true, optional: false, required: false
    get endpointArn() {
        return this.getStringAttribute('endpoint_arn');
    }
    get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }
    set endpointId(value) {
        this._endpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointIdInput() {
        return this._endpointId;
    }
    get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    set endpointType(value) {
        this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointTypeInput() {
        return this._endpointType;
    }
    get engineName() {
        return this.getStringAttribute('engine_name');
    }
    set engineName(value) {
        this._engineName = value;
    }
    // Temporarily expose input value. Use with caution.
    get engineNameInput() {
        return this._engineName;
    }
    get extraConnectionAttributes() {
        return this.getStringAttribute('extra_connection_attributes');
    }
    set extraConnectionAttributes(value) {
        this._extraConnectionAttributes = value;
    }
    resetExtraConnectionAttributes() {
        this._extraConnectionAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extraConnectionAttributesInput() {
        return this._extraConnectionAttributes;
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
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    set secretsManagerAccessRoleArn(value) {
        this._secretsManagerAccessRoleArn = value;
    }
    resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }
    get secretsManagerArn() {
        return this.getStringAttribute('secrets_manager_arn');
    }
    set secretsManagerArn(value) {
        this._secretsManagerArn = value;
    }
    resetSecretsManagerArn() {
        this._secretsManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretsManagerArnInput() {
        return this._secretsManagerArn;
    }
    get serverName() {
        return this.getStringAttribute('server_name');
    }
    set serverName(value) {
        this._serverName = value;
    }
    resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverNameInput() {
        return this._serverName;
    }
    get serviceAccessRole() {
        return this.getStringAttribute('service_access_role');
    }
    set serviceAccessRole(value) {
        this._serviceAccessRole = value;
    }
    resetServiceAccessRole() {
        this._serviceAccessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccessRoleInput() {
        return this._serviceAccessRole;
    }
    get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    set sslMode(value) {
        this._sslMode = value;
    }
    resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslModeInput() {
        return this._sslMode;
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
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
    get elasticsearchSettings() {
        return this._elasticsearchSettings;
    }
    putElasticsearchSettings(value) {
        this._elasticsearchSettings.internalValue = value;
    }
    resetElasticsearchSettings() {
        this._elasticsearchSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticsearchSettingsInput() {
        return this._elasticsearchSettings.internalValue;
    }
    get kafkaSettings() {
        return this._kafkaSettings;
    }
    putKafkaSettings(value) {
        this._kafkaSettings.internalValue = value;
    }
    resetKafkaSettings() {
        this._kafkaSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kafkaSettingsInput() {
        return this._kafkaSettings.internalValue;
    }
    get kinesisSettings() {
        return this._kinesisSettings;
    }
    putKinesisSettings(value) {
        this._kinesisSettings.internalValue = value;
    }
    resetKinesisSettings() {
        this._kinesisSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisSettingsInput() {
        return this._kinesisSettings.internalValue;
    }
    get mongodbSettings() {
        return this._mongodbSettings;
    }
    putMongodbSettings(value) {
        this._mongodbSettings.internalValue = value;
    }
    resetMongodbSettings() {
        this._mongodbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mongodbSettingsInput() {
        return this._mongodbSettings.internalValue;
    }
    get s3Settings() {
        return this._s3Settings;
    }
    putS3Settings(value) {
        this._s3Settings.internalValue = value;
    }
    resetS3Settings() {
        this._s3Settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3SettingsInput() {
        return this._s3Settings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            database_name: cdktf.stringToTerraform(this._databaseName),
            endpoint_id: cdktf.stringToTerraform(this._endpointId),
            endpoint_type: cdktf.stringToTerraform(this._endpointType),
            engine_name: cdktf.stringToTerraform(this._engineName),
            extra_connection_attributes: cdktf.stringToTerraform(this._extraConnectionAttributes),
            id: cdktf.stringToTerraform(this._id),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            password: cdktf.stringToTerraform(this._password),
            port: cdktf.numberToTerraform(this._port),
            secrets_manager_access_role_arn: cdktf.stringToTerraform(this._secretsManagerAccessRoleArn),
            secrets_manager_arn: cdktf.stringToTerraform(this._secretsManagerArn),
            server_name: cdktf.stringToTerraform(this._serverName),
            service_access_role: cdktf.stringToTerraform(this._serviceAccessRole),
            ssl_mode: cdktf.stringToTerraform(this._sslMode),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            username: cdktf.stringToTerraform(this._username),
            elasticsearch_settings: dmsEndpointElasticsearchSettingsToTerraform(this._elasticsearchSettings.internalValue),
            kafka_settings: dmsEndpointKafkaSettingsToTerraform(this._kafkaSettings.internalValue),
            kinesis_settings: dmsEndpointKinesisSettingsToTerraform(this._kinesisSettings.internalValue),
            mongodb_settings: dmsEndpointMongodbSettingsToTerraform(this._mongodbSettings.internalValue),
            s3_settings: dmsEndpointS3SettingsToTerraform(this._s3Settings.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            certificate_arn: {
                value: cdktf.stringToHclTerraform(this._certificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_name: {
                value: cdktf.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_id: {
                value: cdktf.stringToHclTerraform(this._endpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_type: {
                value: cdktf.stringToHclTerraform(this._endpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_name: {
                value: cdktf.stringToHclTerraform(this._engineName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            extra_connection_attributes: {
                value: cdktf.stringToHclTerraform(this._extraConnectionAttributes),
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
            kms_key_arn: {
                value: cdktf.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            password: {
                value: cdktf.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktf.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secrets_manager_access_role_arn: {
                value: cdktf.stringToHclTerraform(this._secretsManagerAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secrets_manager_arn: {
                value: cdktf.stringToHclTerraform(this._secretsManagerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_name: {
                value: cdktf.stringToHclTerraform(this._serverName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_access_role: {
                value: cdktf.stringToHclTerraform(this._serviceAccessRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssl_mode: {
                value: cdktf.stringToHclTerraform(this._sslMode),
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
            username: {
                value: cdktf.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            elasticsearch_settings: {
                value: dmsEndpointElasticsearchSettingsToHclTerraform(this._elasticsearchSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DmsEndpointElasticsearchSettingsList",
            },
            kafka_settings: {
                value: dmsEndpointKafkaSettingsToHclTerraform(this._kafkaSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DmsEndpointKafkaSettingsList",
            },
            kinesis_settings: {
                value: dmsEndpointKinesisSettingsToHclTerraform(this._kinesisSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DmsEndpointKinesisSettingsList",
            },
            mongodb_settings: {
                value: dmsEndpointMongodbSettingsToHclTerraform(this._mongodbSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DmsEndpointMongodbSettingsList",
            },
            s3_settings: {
                value: dmsEndpointS3SettingsToHclTerraform(this._s3Settings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DmsEndpointS3SettingsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.DmsEndpoint = DmsEndpoint;
_f = JSII_RTTI_SYMBOL_1;
DmsEndpoint[_f] = { fqn: "@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
DmsEndpoint.tfResourceType = "aws_dms_endpoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Rtcy1lbmRwb2ludC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQWtJL0IsU0FBZ0IsMkNBQTJDLENBQUMsTUFBMkY7SUFDckosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3pFLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDcEYsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUMvRSxDQUFBO0FBQ0gsQ0FBQztBQVhELGtHQVdDO0FBR0QsU0FBZ0IsOENBQThDLENBQUMsTUFBMkY7SUFDeEosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFB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Z0JBQ1gsS0FBSyxFQUFFLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUMxRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSwyQkFBMkI7YUFDOUM7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXptQkgsa0NBMG1CQzs7O0FBeG1CQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDBCQUFjLEdBQUcsa0JBQWtCLEFBQXJCLENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50XG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRG1zRW5kcG9pbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2NlcnRpZmljYXRlX2FybiBEbXNFbmRwb2ludCNjZXJ0aWZpY2F0ZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjZGF0YWJhc2VfbmFtZSBEbXNFbmRwb2ludCNkYXRhYmFzZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYXRhYmFzZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNlbmRwb2ludF9pZCBEbXNFbmRwb2ludCNlbmRwb2ludF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5kcG9pbnRJZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjZW5kcG9pbnRfdHlwZSBEbXNFbmRwb2ludCNlbmRwb2ludF90eXBlfVxuICAqL1xuICByZWFkb25seSBlbmRwb2ludFR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2VuZ2luZV9uYW1lIERtc0VuZHBvaW50I2VuZ2luZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBlbmdpbmVOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNleHRyYV9jb25uZWN0aW9uX2F0dHJpYnV0ZXMgRG1zRW5kcG9pbnQjZXh0cmFfY29ubmVjdGlvbl9hdHRyaWJ1dGVzfVxuICAqL1xuICByZWFkb25seSBleHRyYUNvbm5lY3Rpb25BdHRyaWJ1dGVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjaWQgRG1zRW5kcG9pbnQjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNrbXNfa2V5X2FybiBEbXNFbmRwb2ludCNrbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjcGFzc3dvcmQgRG1zRW5kcG9pbnQjcGFzc3dvcmR9XG4gICovXG4gIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjcG9ydCBEbXNFbmRwb2ludCNwb3J0fVxuICAqL1xuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc2VjcmV0c19tYW5hZ2VyX2FjY2Vzc19yb2xlX2FybiBEbXNFbmRwb2ludCNzZWNyZXRzX21hbmFnZXJfYWNjZXNzX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBzZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNzZWNyZXRzX21hbmFnZXJfYXJuIERtc0VuZHBvaW50I3NlY3JldHNfbWFuYWdlcl9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNlY3JldHNNYW5hZ2VyQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc2VydmVyX25hbWUgRG1zRW5kcG9pbnQjc2VydmVyX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlck5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNzZXJ2aWNlX2FjY2Vzc19yb2xlIERtc0VuZHBvaW50I3NlcnZpY2VfYWNjZXNzX3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VBY2Nlc3NSb2xlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc3NsX21vZGUgRG1zRW5kcG9pbnQjc3NsX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IHNzbE1vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCN0YWdzIERtc0VuZHBvaW50I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjdGFnc19hbGwgRG1zRW5kcG9pbnQjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjdXNlcm5hbWUgRG1zRW5kcG9pbnQjdXNlcm5hbWV9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBlbGFzdGljc2VhcmNoX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjZWxhc3RpY3NlYXJjaF9zZXR0aW5ncyBEbXNFbmRwb2ludCNlbGFzdGljc2VhcmNoX3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBlbGFzdGljc2VhcmNoU2V0dGluZ3M/OiBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5ncztcbiAgLyoqXG4gICoga2Fma2Ffc2V0dGluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNrYWZrYV9zZXR0aW5ncyBEbXNFbmRwb2ludCNrYWZrYV9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkga2Fma2FTZXR0aW5ncz86IERtc0VuZHBvaW50S2Fma2FTZXR0aW5ncztcbiAgLyoqXG4gICoga2luZXNpc19zZXR0aW5ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2tpbmVzaXNfc2V0dGluZ3MgRG1zRW5kcG9pbnQja2luZXNpc19zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkga2luZXNpc1NldHRpbmdzPzogRG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3M7XG4gIC8qKlxuICAqIG1vbmdvZGJfc2V0dGluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNtb25nb2RiX3NldHRpbmdzIERtc0VuZHBvaW50I21vbmdvZGJfc2V0dGluZ3N9XG4gICovXG4gIHJlYWRvbmx5IG1vbmdvZGJTZXR0aW5ncz86IERtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzO1xuICAvKipcbiAgKiBzM19zZXR0aW5ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I3MzX3NldHRpbmdzIERtc0VuZHBvaW50I3MzX3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBzM1NldHRpbmdzPzogRG1zRW5kcG9pbnRTM1NldHRpbmdzO1xufVxuZXhwb3J0IGludGVyZmFjZSBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5ncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNlbmRwb2ludF91cmkgRG1zRW5kcG9pbnQjZW5kcG9pbnRfdXJpfVxuICAqL1xuICByZWFkb25seSBlbmRwb2ludFVyaTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjZXJyb3JfcmV0cnlfZHVyYXRpb24gRG1zRW5kcG9pbnQjZXJyb3JfcmV0cnlfZHVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGVycm9yUmV0cnlEdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2Z1bGxfbG9hZF9lcnJvcl9wZXJjZW50YWdlIERtc0VuZHBvaW50I2Z1bGxfbG9hZF9lcnJvcl9wZXJjZW50YWdlfVxuICAqL1xuICByZWFkb25seSBmdWxsTG9hZEVycm9yUGVyY2VudGFnZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I3NlcnZpY2VfYWNjZXNzX3JvbGVfYXJuIERtc0VuZHBvaW50I3NlcnZpY2VfYWNjZXNzX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBzZXJ2aWNlQWNjZXNzUm9sZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IERtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZHBvaW50X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludFVyaSksXG4gICAgZXJyb3JfcmV0cnlfZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JSZXRyeUR1cmF0aW9uKSxcbiAgICBmdWxsX2xvYWRfZXJyb3JfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mdWxsTG9hZEVycm9yUGVyY2VudGFnZSksXG4gICAgc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZUFjY2Vzc1JvbGVBcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZW5kcG9pbnRfdXJpOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludFVyaSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZXJyb3JfcmV0cnlfZHVyYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVycm9yUmV0cnlEdXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgZnVsbF9sb2FkX2Vycm9yX3BlcmNlbnRhZ2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZ1bGxMb2FkRXJyb3JQZXJjZW50YWdlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzZXJ2aWNlX2FjY2Vzc19yb2xlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZUFjY2Vzc1JvbGVBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmRwb2ludFVyaSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmRwb2ludFVyaSA9IHRoaXMuX2VuZHBvaW50VXJpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZXJyb3JSZXRyeUR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVycm9yUmV0cnlEdXJhdGlvbiA9IHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZ1bGxMb2FkRXJyb3JQZXJjZW50YWdlID0gdGhpcy5fZnVsbExvYWRFcnJvclBlcmNlbnRhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmRwb2ludFVyaSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuZHBvaW50VXJpID0gdmFsdWUuZW5kcG9pbnRVcmk7XG4gICAgICB0aGlzLl9lcnJvclJldHJ5RHVyYXRpb24gPSB2YWx1ZS5lcnJvclJldHJ5RHVyYXRpb247XG4gICAgICB0aGlzLl9mdWxsTG9hZEVycm9yUGVyY2VudGFnZSA9IHZhbHVlLmZ1bGxMb2FkRXJyb3JQZXJjZW50YWdlO1xuICAgICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB2YWx1ZS5zZXJ2aWNlQWNjZXNzUm9sZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBlbmRwb2ludF91cmkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5kcG9pbnRVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZHBvaW50VXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnRfdXJpJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludFVyaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5kcG9pbnRVcmkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRVcmlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kcG9pbnRVcmk7XG4gIH1cblxuICAvLyBlcnJvcl9yZXRyeV9kdXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lcnJvclJldHJ5RHVyYXRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGVycm9yUmV0cnlEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Vycm9yX3JldHJ5X2R1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlcnJvclJldHJ5RHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVycm9yUmV0cnlEdXJhdGlvbigpIHtcbiAgICB0aGlzLl9lcnJvclJldHJ5RHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVycm9yUmV0cnlEdXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvclJldHJ5RHVyYXRpb247XG4gIH1cblxuICAvLyBmdWxsX2xvYWRfZXJyb3JfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mdWxsTG9hZEVycm9yUGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZnVsbExvYWRFcnJvclBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmdWxsX2xvYWRfZXJyb3JfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnVsbExvYWRFcnJvclBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnVsbExvYWRFcnJvclBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fZnVsbExvYWRFcnJvclBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZ1bGxMb2FkRXJyb3JQZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZUFjY2Vzc1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2Nlc3NSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VBY2Nlc3NSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjZXNzUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEbXNFbmRwb2ludEthZmthU2V0dGluZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjYnJva2VyIERtc0VuZHBvaW50I2Jyb2tlcn1cbiAgKi9cbiAgcmVhZG9ubHkgYnJva2VyOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNpbmNsdWRlX2NvbnRyb2xfZGV0YWlscyBEbXNFbmRwb2ludCNpbmNsdWRlX2NvbnRyb2xfZGV0YWlsc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZUNvbnRyb2xEZXRhaWxzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjaW5jbHVkZV9udWxsX2FuZF9lbXB0eSBEbXNFbmRwb2ludCNpbmNsdWRlX251bGxfYW5kX2VtcHR5fVxuICAqL1xuICByZWFkb25seSBpbmNsdWRlTnVsbEFuZEVtcHR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWUgRG1zRW5kcG9pbnQjaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2luY2x1ZGVfdGFibGVfYWx0ZXJfb3BlcmF0aW9ucyBEbXNFbmRwb2ludCNpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2luY2x1ZGVfdHJhbnNhY3Rpb25fZGV0YWlscyBEbXNFbmRwb2ludCNpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHN9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNtZXNzYWdlX2Zvcm1hdCBEbXNFbmRwb2ludCNtZXNzYWdlX2Zvcm1hdH1cbiAgKi9cbiAgcmVhZG9ubHkgbWVzc2FnZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I21lc3NhZ2VfbWF4X2J5dGVzIERtc0VuZHBvaW50I21lc3NhZ2VfbWF4X2J5dGVzfVxuICAqL1xuICByZWFkb25seSBtZXNzYWdlTWF4Qnl0ZXM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNub19oZXhfcHJlZml4IERtc0VuZHBvaW50I25vX2hleF9wcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IG5vSGV4UHJlZml4PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlIERtc0VuZHBvaW50I3BhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZX1cbiAgKi9cbiAgcmVhZG9ubHkgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc2FzbF9wYXNzd29yZCBEbXNFbmRwb2ludCNzYXNsX3Bhc3N3b3JkfVxuICAqL1xuICByZWFkb25seSBzYXNsUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNzYXNsX3VzZXJuYW1lIERtc0VuZHBvaW50I3Nhc2xfdXNlcm5hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNhc2xVc2VybmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I3NlY3VyaXR5X3Byb3RvY29sIERtc0VuZHBvaW50I3NlY3VyaXR5X3Byb3RvY29sfVxuICAqL1xuICByZWFkb25seSBzZWN1cml0eVByb3RvY29sPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc3NsX2NhX2NlcnRpZmljYXRlX2FybiBEbXNFbmRwb2ludCNzc2xfY2FfY2VydGlmaWNhdGVfYXJufVxuICAqL1xuICByZWFkb25seSBzc2xDYUNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc3NsX2NsaWVudF9jZXJ0aWZpY2F0ZV9hcm4gRG1zRW5kcG9pbnQjc3NsX2NsaWVudF9jZXJ0aWZpY2F0ZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNzbENsaWVudENlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc3NsX2NsaWVudF9rZXlfYXJuIERtc0VuZHBvaW50I3NzbF9jbGllbnRfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc3NsQ2xpZW50S2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc3NsX2NsaWVudF9rZXlfcGFzc3dvcmQgRG1zRW5kcG9pbnQjc3NsX2NsaWVudF9rZXlfcGFzc3dvcmR9XG4gICovXG4gIHJlYWRvbmx5IHNzbENsaWVudEtleVBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjdG9waWMgRG1zRW5kcG9pbnQjdG9waWN9XG4gICovXG4gIHJlYWRvbmx5IHRvcGljPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJyb2tlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5icm9rZXIpLFxuICAgIGluY2x1ZGVfY29udHJvbF9kZXRhaWxzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQ29udHJvbERldGFpbHMpLFxuICAgIGluY2x1ZGVfbnVsbF9hbmRfZW1wdHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVOdWxsQW5kRW1wdHkpLFxuICAgIGluY2x1ZGVfcGFydGl0aW9uX3ZhbHVlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlUGFydGl0aW9uVmFsdWUpLFxuICAgIGluY2x1ZGVfdGFibGVfYWx0ZXJfb3BlcmF0aW9uczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zKSxcbiAgICBpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMpLFxuICAgIG1lc3NhZ2VfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VGb3JtYXQpLFxuICAgIG1lc3NhZ2VfbWF4X2J5dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VNYXhCeXRlcyksXG4gICAgbm9faGV4X3ByZWZpeDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEubm9IZXhQcmVmaXgpLFxuICAgIHBhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKSxcbiAgICBzYXNsX3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhc2xQYXNzd29yZCksXG4gICAgc2FzbF91c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYXNsVXNlcm5hbWUpLFxuICAgIHNlY3VyaXR5X3Byb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5UHJvdG9jb2wpLFxuICAgIHNzbF9jYV9jZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NsQ2FDZXJ0aWZpY2F0ZUFybiksXG4gICAgc3NsX2NsaWVudF9jZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4pLFxuICAgIHNzbF9jbGllbnRfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2xDbGllbnRLZXlBcm4pLFxuICAgIHNzbF9jbGllbnRfa2V5X3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzbENsaWVudEtleVBhc3N3b3JkKSxcbiAgICB0b3BpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50b3BpYyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBicm9rZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJyb2tlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW5jbHVkZV9jb250cm9sX2RldGFpbHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQ29udHJvbERldGFpbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX251bGxfYW5kX2VtcHR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZU51bGxBbmRFbXB0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGluY2x1ZGVfcGFydGl0aW9uX3ZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVBhcnRpdGlvblZhbHVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW5jbHVkZV90cmFuc2FjdGlvbl9kZXRhaWxzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIG1lc3NhZ2VfZm9ybWF0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlRm9ybWF0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZXNzYWdlX21heF9ieXRlczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZU1heEJ5dGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBub19oZXhfcHJlZml4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubm9IZXhQcmVmaXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBwYXJ0aXRpb25faW5jbHVkZV9zY2hlbWFfdGFibGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBzYXNsX3Bhc3N3b3JkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYXNsUGFzc3dvcmQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNhc2xfdXNlcm5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNhc2xVc2VybmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VjdXJpdHlfcHJvdG9jb2w6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5UHJvdG9jb2wpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNzbF9jYV9jZXJ0aWZpY2F0ZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNzbENhQ2VydGlmaWNhdGVBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNzbF9jbGllbnRfY2VydGlmaWNhdGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zc2xDbGllbnRDZXJ0aWZpY2F0ZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3NsX2NsaWVudF9rZXlfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zc2xDbGllbnRLZXlBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNzbF9jbGllbnRfa2V5X3Bhc3N3b3JkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zc2xDbGllbnRLZXlQYXNzd29yZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdG9waWM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRvcGljKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERtc0VuZHBvaW50S2Fma2FTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9icm9rZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnJva2VyID0gdGhpcy5fYnJva2VyO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVDb250cm9sRGV0YWlscyA9IHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZU51bGxBbmRFbXB0eSA9IHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVBhcnRpdGlvblZhbHVlID0gdGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXNzYWdlRm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lc3NhZ2VGb3JtYXQgPSB0aGlzLl9tZXNzYWdlRm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVzc2FnZU1heEJ5dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lc3NhZ2VNYXhCeXRlcyA9IHRoaXMuX21lc3NhZ2VNYXhCeXRlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vSGV4UHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vSGV4UHJlZml4ID0gdGhpcy5fbm9IZXhQcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FzbFBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhc2xQYXNzd29yZCA9IHRoaXMuX3Nhc2xQYXNzd29yZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nhc2xVc2VybmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zYXNsVXNlcm5hbWUgPSB0aGlzLl9zYXNsVXNlcm5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWN1cml0eVByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3VyaXR5UHJvdG9jb2wgPSB0aGlzLl9zZWN1cml0eVByb3RvY29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3NsQ2FDZXJ0aWZpY2F0ZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zc2xDYUNlcnRpZmljYXRlQXJuID0gdGhpcy5fc3NsQ2FDZXJ0aWZpY2F0ZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NzbENsaWVudENlcnRpZmljYXRlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzbENsaWVudENlcnRpZmljYXRlQXJuID0gdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zc2xDbGllbnRLZXlBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3NsQ2xpZW50S2V5QXJuID0gdGhpcy5fc3NsQ2xpZW50S2V5QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3NsQ2xpZW50S2V5UGFzc3dvcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3NsQ2xpZW50S2V5UGFzc3dvcmQgPSB0aGlzLl9zc2xDbGllbnRLZXlQYXNzd29yZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RvcGljICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRvcGljID0gdGhpcy5fdG9waWM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEbXNFbmRwb2ludEthZmthU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9icm9rZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21lc3NhZ2VGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub0hleFByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nhc2xQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nhc2xVc2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5UHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RvcGljID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9icm9rZXIgPSB2YWx1ZS5icm9rZXI7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB2YWx1ZS5pbmNsdWRlQ29udHJvbERldGFpbHM7XG4gICAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdmFsdWUuaW5jbHVkZU51bGxBbmRFbXB0eTtcbiAgICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHZhbHVlLmluY2x1ZGVQYXJ0aXRpb25WYWx1ZTtcbiAgICAgIHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHZhbHVlLmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucztcbiAgICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB2YWx1ZS5pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzO1xuICAgICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHZhbHVlLm1lc3NhZ2VGb3JtYXQ7XG4gICAgICB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXMgPSB2YWx1ZS5tZXNzYWdlTWF4Qnl0ZXM7XG4gICAgICB0aGlzLl9ub0hleFByZWZpeCA9IHZhbHVlLm5vSGV4UHJlZml4O1xuICAgICAgdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdmFsdWUucGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlO1xuICAgICAgdGhpcy5fc2FzbFBhc3N3b3JkID0gdmFsdWUuc2FzbFBhc3N3b3JkO1xuICAgICAgdGhpcy5fc2FzbFVzZXJuYW1lID0gdmFsdWUuc2FzbFVzZXJuYW1lO1xuICAgICAgdGhpcy5fc2VjdXJpdHlQcm90b2NvbCA9IHZhbHVlLnNlY3VyaXR5UHJvdG9jb2w7XG4gICAgICB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuID0gdmFsdWUuc3NsQ2FDZXJ0aWZpY2F0ZUFybjtcbiAgICAgIHRoaXMuX3NzbENsaWVudENlcnRpZmljYXRlQXJuID0gdmFsdWUuc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm47XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlBcm4gPSB2YWx1ZS5zc2xDbGllbnRLZXlBcm47XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlQYXNzd29yZCA9IHZhbHVlLnNzbENsaWVudEtleVBhc3N3b3JkO1xuICAgICAgdGhpcy5fdG9waWMgPSB2YWx1ZS50b3BpYztcbiAgICB9XG4gIH1cblxuICAvLyBicm9rZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnJva2VyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBicm9rZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicm9rZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJyb2tlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnJva2VyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJyb2tlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9icm9rZXI7XG4gIH1cblxuICAvLyBpbmNsdWRlX2NvbnRyb2xfZGV0YWlscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlQ29udHJvbERldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb250cm9sRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2NvbnRyb2xfZGV0YWlscycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZUNvbnRyb2xEZXRhaWxzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlQ29udHJvbERldGFpbHMoKSB7XG4gICAgdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlQ29udHJvbERldGFpbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9udWxsX2FuZF9lbXB0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlTnVsbEFuZEVtcHR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbEFuZEVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfbnVsbF9hbmRfZW1wdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVOdWxsQW5kRW1wdHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlTnVsbEFuZEVtcHR5KCkge1xuICAgIHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVOdWxsQW5kRW1wdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU51bGxBbmRFbXB0eTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfcGFydGl0aW9uX3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVBhcnRpdGlvblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfcGFydGl0aW9uX3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlUGFydGl0aW9uVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVQYXJ0aXRpb25WYWx1ZSgpIHtcbiAgICB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWU7XG4gIH1cblxuICAvLyBpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucygpIHtcbiAgICB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnM7XG4gIH1cblxuICAvLyBpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzKCkge1xuICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscztcbiAgfVxuXG4gIC8vIG1lc3NhZ2VfZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc3NhZ2VGb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlX2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzc2FnZUZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc3NhZ2VGb3JtYXQoKSB7XG4gICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlRm9ybWF0O1xuICB9XG5cbiAgLy8gbWVzc2FnZV9tYXhfYnl0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVzc2FnZU1heEJ5dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtZXNzYWdlTWF4Qnl0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtZXNzYWdlX21heF9ieXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzc2FnZU1heEJ5dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNzYWdlTWF4Qnl0ZXMoKSB7XG4gICAgdGhpcy5fbWVzc2FnZU1heEJ5dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlTWF4Qnl0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZU1heEJ5dGVzO1xuICB9XG5cbiAgLy8gbm9faGV4X3ByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ub0hleFByZWZpeD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgbm9IZXhQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbm9faGV4X3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm9IZXhQcmVmaXgodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX25vSGV4UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm9IZXhQcmVmaXgoKSB7XG4gICAgdGhpcy5fbm9IZXhQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vSGV4UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vSGV4UHJlZml4O1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3BhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUoKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlO1xuICB9XG5cbiAgLy8gc2FzbF9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYXNsUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNhc2xQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nhc2xfcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhc2xQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FzbFBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FzbFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3Nhc2xQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FzbFBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhc2xQYXNzd29yZDtcbiAgfVxuXG4gIC8vIHNhc2xfdXNlcm5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FzbFVzZXJuYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYXNsVXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYXNsX3VzZXJuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYXNsVXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nhc2xVc2VybmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhc2xVc2VybmFtZSgpIHtcbiAgICB0aGlzLl9zYXNsVXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhc2xVc2VybmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYXNsVXNlcm5hbWU7XG4gIH1cblxuICAvLyBzZWN1cml0eV9wcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eVByb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWN1cml0eVByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjdXJpdHlfcHJvdG9jb2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5UHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY3VyaXR5UHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eVByb3RvY29sKCkge1xuICAgIHRoaXMuX3NlY3VyaXR5UHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5UHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlQcm90b2NvbDtcbiAgfVxuXG4gIC8vIHNzbF9jYV9jZXJ0aWZpY2F0ZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NsQ2FDZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NsQ2FDZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzbF9jYV9jZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzbENhQ2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzbENhQ2VydGlmaWNhdGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2xDYUNlcnRpZmljYXRlQXJuKCkge1xuICAgIHRoaXMuX3NzbENhQ2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzbENhQ2VydGlmaWNhdGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NsQ2FDZXJ0aWZpY2F0ZUFybjtcbiAgfVxuXG4gIC8vIHNzbF9jbGllbnRfY2VydGlmaWNhdGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbENsaWVudENlcnRpZmljYXRlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2xDbGllbnRDZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzbF9jbGllbnRfY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2xDbGllbnRDZXJ0aWZpY2F0ZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2xDbGllbnRDZXJ0aWZpY2F0ZUFybigpIHtcbiAgICB0aGlzLl9zc2xDbGllbnRDZXJ0aWZpY2F0ZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm47XG4gIH1cblxuICAvLyBzc2xfY2xpZW50X2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NsQ2xpZW50S2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2xDbGllbnRLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfY2xpZW50X2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzbENsaWVudEtleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsQ2xpZW50S2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NsQ2xpZW50S2V5QXJuKCkge1xuICAgIHRoaXMuX3NzbENsaWVudEtleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsQ2xpZW50S2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzbENsaWVudEtleUFybjtcbiAgfVxuXG4gIC8vIHNzbF9jbGllbnRfa2V5X3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbENsaWVudEtleVBhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2xDbGllbnRLZXlQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzbF9jbGllbnRfa2V5X3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2xDbGllbnRLZXlQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsQ2xpZW50S2V5UGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2xDbGllbnRLZXlQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zc2xDbGllbnRLZXlQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsQ2xpZW50S2V5UGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NsQ2xpZW50S2V5UGFzc3dvcmQ7XG4gIH1cblxuICAvLyB0b3BpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b3BpYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0b3BpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdG9waWModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RvcGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG9waWMoKSB7XG4gICAgdGhpcy5fdG9waWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRvcGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcGljO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2luY2x1ZGVfY29udHJvbF9kZXRhaWxzIERtc0VuZHBvaW50I2luY2x1ZGVfY29udHJvbF9kZXRhaWxzfVxuICAqL1xuICByZWFkb25seSBpbmNsdWRlQ29udHJvbERldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNpbmNsdWRlX251bGxfYW5kX2VtcHR5IERtc0VuZHBvaW50I2luY2x1ZGVfbnVsbF9hbmRfZW1wdHl9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVOdWxsQW5kRW1wdHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNpbmNsdWRlX3BhcnRpdGlvbl92YWx1ZSBEbXNFbmRwb2ludCNpbmNsdWRlX3BhcnRpdGlvbl92YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVBhcnRpdGlvblZhbHVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zIERtc0VuZHBvaW50I2luY2x1ZGVfdGFibGVfYWx0ZXJfb3BlcmF0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjaW5jbHVkZV90cmFuc2FjdGlvbl9kZXRhaWxzIERtc0VuZHBvaW50I2luY2x1ZGVfdHJhbnNhY3Rpb25fZGV0YWlsc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I21lc3NhZ2VfZm9ybWF0IERtc0VuZHBvaW50I21lc3NhZ2VfZm9ybWF0fVxuICAqL1xuICByZWFkb25seSBtZXNzYWdlRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlIERtc0VuZHBvaW50I3BhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZX1cbiAgKi9cbiAgcmVhZG9ubHkgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm4gRG1zRW5kcG9pbnQjc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VBY2Nlc3NSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjc3RyZWFtX2FybiBEbXNFbmRwb2ludCNzdHJlYW1fYXJufVxuICAqL1xuICByZWFkb25seSBzdHJlYW1Bcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgRG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5jbHVkZV9jb250cm9sX2RldGFpbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVDb250cm9sRGV0YWlscyksXG4gICAgaW5jbHVkZV9udWxsX2FuZF9lbXB0eTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZU51bGxBbmRFbXB0eSksXG4gICAgaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVQYXJ0aXRpb25WYWx1ZSksXG4gICAgaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMpLFxuICAgIGluY2x1ZGVfdHJhbnNhY3Rpb25fZGV0YWlsczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyksXG4gICAgbWVzc2FnZV9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZUZvcm1hdCksXG4gICAgcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUpLFxuICAgIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VBY2Nlc3NSb2xlQXJuKSxcbiAgICBzdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbmNsdWRlX2NvbnRyb2xfZGV0YWlsczoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVDb250cm9sRGV0YWlscyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGluY2x1ZGVfbnVsbF9hbmRfZW1wdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlTnVsbEFuZEVtcHR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlUGFydGl0aW9uVmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgbWVzc2FnZV9mb3JtYXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VGb3JtYXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlQWNjZXNzUm9sZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3RyZWFtX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVDb250cm9sRGV0YWlscyA9IHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZU51bGxBbmRFbXB0eSA9IHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVBhcnRpdGlvblZhbHVlID0gdGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXNzYWdlRm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lc3NhZ2VGb3JtYXQgPSB0aGlzLl9tZXNzYWdlRm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdHJlYW1Bcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RyZWFtQXJuID0gdGhpcy5fc3RyZWFtQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21lc3NhZ2VGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0cmVhbUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzID0gdmFsdWUuaW5jbHVkZUNvbnRyb2xEZXRhaWxzO1xuICAgICAgdGhpcy5faW5jbHVkZU51bGxBbmRFbXB0eSA9IHZhbHVlLmluY2x1ZGVOdWxsQW5kRW1wdHk7XG4gICAgICB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgPSB2YWx1ZS5pbmNsdWRlUGFydGl0aW9uVmFsdWU7XG4gICAgICB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMgPSB2YWx1ZS5pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnM7XG4gICAgICB0aGlzLl9pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzID0gdmFsdWUuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscztcbiAgICAgIHRoaXMuX21lc3NhZ2VGb3JtYXQgPSB2YWx1ZS5tZXNzYWdlRm9ybWF0O1xuICAgICAgdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdmFsdWUucGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlO1xuICAgICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB2YWx1ZS5zZXJ2aWNlQWNjZXNzUm9sZUFybjtcbiAgICAgIHRoaXMuX3N0cmVhbUFybiA9IHZhbHVlLnN0cmVhbUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbmNsdWRlX2NvbnRyb2xfZGV0YWlscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlQ29udHJvbERldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb250cm9sRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2NvbnRyb2xfZGV0YWlscycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZUNvbnRyb2xEZXRhaWxzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlQ29udHJvbERldGFpbHMoKSB7XG4gICAgdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlQ29udHJvbERldGFpbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9udWxsX2FuZF9lbXB0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlTnVsbEFuZEVtcHR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbEFuZEVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfbnVsbF9hbmRfZW1wdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVOdWxsQW5kRW1wdHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlTnVsbEFuZEVtcHR5KCkge1xuICAgIHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVOdWxsQW5kRW1wdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU51bGxBbmRFbXB0eTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfcGFydGl0aW9uX3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVBhcnRpdGlvblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfcGFydGl0aW9uX3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlUGFydGl0aW9uVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVQYXJ0aXRpb25WYWx1ZSgpIHtcbiAgICB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWU7XG4gIH1cblxuICAvLyBpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucygpIHtcbiAgICB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnM7XG4gIH1cblxuICAvLyBpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzKCkge1xuICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscztcbiAgfVxuXG4gIC8vIG1lc3NhZ2VfZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc3NhZ2VGb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlX2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzc2FnZUZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc3NhZ2VGb3JtYXQoKSB7XG4gICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlRm9ybWF0O1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3BhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUoKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmljZUFjY2Vzc1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2Nlc3NSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VBY2Nlc3NSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZpY2VBY2Nlc3NSb2xlQXJuKCkge1xuICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjZXNzUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybjtcbiAgfVxuXG4gIC8vIHN0cmVhbV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RyZWFtQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdHJlYW1Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJlYW1fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdHJlYW1Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0cmVhbUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0cmVhbUFybigpIHtcbiAgICB0aGlzLl9zdHJlYW1Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0cmVhbUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1Bcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjYXV0aF9tZWNoYW5pc20gRG1zRW5kcG9pbnQjYXV0aF9tZWNoYW5pc219XG4gICovXG4gIHJlYWRvbmx5IGF1dGhNZWNoYW5pc20/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNhdXRoX3NvdXJjZSBEbXNFbmRwb2ludCNhdXRoX3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0aFNvdXJjZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2F1dGhfdHlwZSBEbXNFbmRwb2ludCNhdXRoX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjZG9jc190b19pbnZlc3RpZ2F0ZSBEbXNFbmRwb2ludCNkb2NzX3RvX2ludmVzdGlnYXRlfVxuICAqL1xuICByZWFkb25seSBkb2NzVG9JbnZlc3RpZ2F0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2V4dHJhY3RfZG9jX2lkIERtc0VuZHBvaW50I2V4dHJhY3RfZG9jX2lkfVxuICAqL1xuICByZWFkb25seSBleHRyYWN0RG9jSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNuZXN0aW5nX2xldmVsIERtc0VuZHBvaW50I25lc3RpbmdfbGV2ZWx9XG4gICovXG4gIHJlYWRvbmx5IG5lc3RpbmdMZXZlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoX21lY2hhbmlzbTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoTWVjaGFuaXNtKSxcbiAgICBhdXRoX3NvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoU291cmNlKSxcbiAgICBhdXRoX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aFR5cGUpLFxuICAgIGRvY3NfdG9faW52ZXN0aWdhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9jc1RvSW52ZXN0aWdhdGUpLFxuICAgIGV4dHJhY3RfZG9jX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4dHJhY3REb2NJZCksXG4gICAgbmVzdGluZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXN0aW5nTGV2ZWwpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXV0aF9tZWNoYW5pc206IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGhNZWNoYW5pc20pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGF1dGhfc291cmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRoU291cmNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhdXRoX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGhUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkb2NzX3RvX2ludmVzdGlnYXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kb2NzVG9JbnZlc3RpZ2F0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZXh0cmFjdF9kb2NfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4dHJhY3REb2NJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmVzdGluZ19sZXZlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmVzdGluZ0xldmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0aE1lY2hhbmlzbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoTWVjaGFuaXNtID0gdGhpcy5fYXV0aE1lY2hhbmlzbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dGhTb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aFNvdXJjZSA9IHRoaXMuX2F1dGhTb3VyY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRoVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoVHlwZSA9IHRoaXMuX2F1dGhUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9jc1RvSW52ZXN0aWdhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9jc1RvSW52ZXN0aWdhdGUgPSB0aGlzLl9kb2NzVG9JbnZlc3RpZ2F0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dHJhY3REb2NJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRyYWN0RG9jSWQgPSB0aGlzLl9leHRyYWN0RG9jSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXN0aW5nTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmVzdGluZ0xldmVsID0gdGhpcy5fbmVzdGluZ0xldmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRoTWVjaGFuaXNtID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXV0aFNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZG9jc1RvSW52ZXN0aWdhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9leHRyYWN0RG9jSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXN0aW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dGhNZWNoYW5pc20gPSB2YWx1ZS5hdXRoTWVjaGFuaXNtO1xuICAgICAgdGhpcy5fYXV0aFNvdXJjZSA9IHZhbHVlLmF1dGhTb3VyY2U7XG4gICAgICB0aGlzLl9hdXRoVHlwZSA9IHZhbHVlLmF1dGhUeXBlO1xuICAgICAgdGhpcy5fZG9jc1RvSW52ZXN0aWdhdGUgPSB2YWx1ZS5kb2NzVG9JbnZlc3RpZ2F0ZTtcbiAgICAgIHRoaXMuX2V4dHJhY3REb2NJZCA9IHZhbHVlLmV4dHJhY3REb2NJZDtcbiAgICAgIHRoaXMuX25lc3RpbmdMZXZlbCA9IHZhbHVlLm5lc3RpbmdMZXZlbDtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRoX21lY2hhbmlzbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoTWVjaGFuaXNtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRoTWVjaGFuaXNtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aF9tZWNoYW5pc20nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhNZWNoYW5pc20odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhNZWNoYW5pc20gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRoTWVjaGFuaXNtKCkge1xuICAgIHRoaXMuX2F1dGhNZWNoYW5pc20gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhNZWNoYW5pc21JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aE1lY2hhbmlzbTtcbiAgfVxuXG4gIC8vIGF1dGhfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhTb3VyY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dGhTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRoX3NvdXJjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aFNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aFNvdXJjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhTb3VyY2UoKSB7XG4gICAgdGhpcy5fYXV0aFNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aFNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoU291cmNlO1xuICB9XG5cbiAgLy8gYXV0aF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRoVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aFR5cGUoKSB7XG4gICAgdGhpcy5fYXV0aFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhUeXBlO1xuICB9XG5cbiAgLy8gZG9jc190b19pbnZlc3RpZ2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb2NzVG9JbnZlc3RpZ2F0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9jc1RvSW52ZXN0aWdhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2NzX3RvX2ludmVzdGlnYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb2NzVG9JbnZlc3RpZ2F0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9jc1RvSW52ZXN0aWdhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2NzVG9JbnZlc3RpZ2F0ZSgpIHtcbiAgICB0aGlzLl9kb2NzVG9JbnZlc3RpZ2F0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9jc1RvSW52ZXN0aWdhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jc1RvSW52ZXN0aWdhdGU7XG4gIH1cblxuICAvLyBleHRyYWN0X2RvY19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHRyYWN0RG9jSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4dHJhY3REb2NJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4dHJhY3RfZG9jX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHRyYWN0RG9jSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4dHJhY3REb2NJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4dHJhY3REb2NJZCgpIHtcbiAgICB0aGlzLl9leHRyYWN0RG9jSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dHJhY3REb2NJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHRyYWN0RG9jSWQ7XG4gIH1cblxuICAvLyBuZXN0aW5nX2xldmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25lc3RpbmdMZXZlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmVzdGluZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmVzdGluZ19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmVzdGluZ0xldmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXN0aW5nTGV2ZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXN0aW5nTGV2ZWwoKSB7XG4gICAgdGhpcy5fbmVzdGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXN0aW5nTGV2ZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmVzdGluZ0xldmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERtc0VuZHBvaW50UzNTZXR0aW5ncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNidWNrZXRfZm9sZGVyIERtc0VuZHBvaW50I2J1Y2tldF9mb2xkZXJ9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldEZvbGRlcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2J1Y2tldF9uYW1lIERtc0VuZHBvaW50I2J1Y2tldF9uYW1lfVxuICAqL1xuICByZWFkb25seSBidWNrZXROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9kbXNfZW5kcG9pbnQjY29tcHJlc3Npb25fdHlwZSBEbXNFbmRwb2ludCNjb21wcmVzc2lvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBjb21wcmVzc2lvblR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNjc3ZfZGVsaW1pdGVyIERtc0VuZHBvaW50I2Nzdl9kZWxpbWl0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNzdkRlbGltaXRlcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2Nzdl9yb3dfZGVsaW1pdGVyIERtc0VuZHBvaW50I2Nzdl9yb3dfZGVsaW1pdGVyfVxuICAqL1xuICByZWFkb25seSBjc3ZSb3dEZWxpbWl0ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNkYXRhX2Zvcm1hdCBEbXNFbmRwb2ludCNkYXRhX2Zvcm1hdH1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2RhdGVfcGFydGl0aW9uX2VuYWJsZWQgRG1zRW5kcG9pbnQjZGF0ZV9wYXJ0aXRpb25fZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0ZVBhcnRpdGlvbkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNlbmNyeXB0aW9uX21vZGUgRG1zRW5kcG9pbnQjZW5jcnlwdGlvbl9tb2RlfVxuICAqL1xuICByZWFkb25seSBlbmNyeXB0aW9uTW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2V4dGVybmFsX3RhYmxlX2RlZmluaXRpb24gRG1zRW5kcG9pbnQjZXh0ZXJuYWxfdGFibGVfZGVmaW5pdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZXh0ZXJuYWxUYWJsZURlZmluaXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNwYXJxdWV0X3RpbWVzdGFtcF9pbl9taWxsaXNlY29uZCBEbXNFbmRwb2ludCNwYXJxdWV0X3RpbWVzdGFtcF9pbl9taWxsaXNlY29uZH1cbiAgKi9cbiAgcmVhZG9ubHkgcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNwYXJxdWV0X3ZlcnNpb24gRG1zRW5kcG9pbnQjcGFycXVldF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSBwYXJxdWV0VmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I3NlcnZlcl9zaWRlX2VuY3J5cHRpb25fa21zX2tleV9pZCBEbXNFbmRwb2ludCNzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uX2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCNzZXJ2aWNlX2FjY2Vzc19yb2xlX2FybiBEbXNFbmRwb2ludCNzZXJ2aWNlX2FjY2Vzc19yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZUFjY2Vzc1JvbGVBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkbXNFbmRwb2ludFMzU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludFMzU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludFMzU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2ZvbGRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRGb2xkZXIpLFxuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGNvbXByZXNzaW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25UeXBlKSxcbiAgICBjc3ZfZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNzdkRlbGltaXRlciksXG4gICAgY3N2X3Jvd19kZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3N2Um93RGVsaW1pdGVyKSxcbiAgICBkYXRhX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhRm9ybWF0KSxcbiAgICBkYXRlX3BhcnRpdGlvbl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUGFydGl0aW9uRW5hYmxlZCksXG4gICAgZW5jcnlwdGlvbl9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb25Nb2RlKSxcbiAgICBleHRlcm5hbF90YWJsZV9kZWZpbml0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4dGVybmFsVGFibGVEZWZpbml0aW9uKSxcbiAgICBwYXJxdWV0X3RpbWVzdGFtcF9pbl9taWxsaXNlY29uZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQpLFxuICAgIHBhcnF1ZXRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJxdWV0VmVyc2lvbiksXG4gICAgc2VydmVyX3NpZGVfZW5jcnlwdGlvbl9rbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQpLFxuICAgIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VBY2Nlc3NSb2xlQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkbXNFbmRwb2ludFMzU2V0dGluZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludFMzU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludFMzU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGJ1Y2tldF9mb2xkZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEZvbGRlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYnVja2V0X25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvbXByZXNzaW9uX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY3N2X2RlbGltaXRlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3N2RGVsaW1pdGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjc3Zfcm93X2RlbGltaXRlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3N2Um93RGVsaW1pdGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkYXRhX2Zvcm1hdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF0YUZvcm1hdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGF0ZV9wYXJ0aXRpb25fZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRhdGVQYXJ0aXRpb25FbmFibGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgZW5jcnlwdGlvbl9tb2RlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uTW9kZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZXh0ZXJuYWxfdGFibGVfZGVmaW5pdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZXh0ZXJuYWxUYWJsZURlZmluaXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBhcnF1ZXRfdGltZXN0YW1wX2luX21pbGxpc2Vjb25kOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBwYXJxdWV0X3ZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBhcnF1ZXRWZXJzaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uX2ttc19rZXlfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlQWNjZXNzUm9sZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEbXNFbmRwb2ludFMzU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERtc0VuZHBvaW50UzNTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0Rm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1Y2tldEZvbGRlciA9IHRoaXMuX2J1Y2tldEZvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1Y2tldE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0TmFtZSA9IHRoaXMuX2J1Y2tldE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wcmVzc2lvblR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcHJlc3Npb25UeXBlID0gdGhpcy5fY29tcHJlc3Npb25UeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3N2RGVsaW1pdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNzdkRlbGltaXRlciA9IHRoaXMuX2NzdkRlbGltaXRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NzdlJvd0RlbGltaXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jc3ZSb3dEZWxpbWl0ZXIgPSB0aGlzLl9jc3ZSb3dEZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kYXRhRm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFGb3JtYXQgPSB0aGlzLl9kYXRhRm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGF0ZVBhcnRpdGlvbkVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0ZVBhcnRpdGlvbkVuYWJsZWQgPSB0aGlzLl9kYXRlUGFydGl0aW9uRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRpb25Nb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuY3J5cHRpb25Nb2RlID0gdGhpcy5fZW5jcnlwdGlvbk1vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHRlcm5hbFRhYmxlRGVmaW5pdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRlcm5hbFRhYmxlRGVmaW5pdGlvbiA9IHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQgPSB0aGlzLl9wYXJxdWV0VGltZXN0YW1wSW5NaWxsaXNlY29uZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhcnF1ZXRWZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnF1ZXRWZXJzaW9uID0gdGhpcy5fcGFycXVldFZlcnNpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERtc0VuZHBvaW50UzNTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldEZvbGRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvblR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jc3ZEZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jc3ZSb3dEZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kYXRhRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF0ZVBhcnRpdGlvbkVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJxdWV0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVja2V0Rm9sZGVyID0gdmFsdWUuYnVja2V0Rm9sZGVyO1xuICAgICAgdGhpcy5fYnVja2V0TmFtZSA9IHZhbHVlLmJ1Y2tldE5hbWU7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvblR5cGUgPSB2YWx1ZS5jb21wcmVzc2lvblR5cGU7XG4gICAgICB0aGlzLl9jc3ZEZWxpbWl0ZXIgPSB2YWx1ZS5jc3ZEZWxpbWl0ZXI7XG4gICAgICB0aGlzLl9jc3ZSb3dEZWxpbWl0ZXIgPSB2YWx1ZS5jc3ZSb3dEZWxpbWl0ZXI7XG4gICAgICB0aGlzLl9kYXRhRm9ybWF0ID0gdmFsdWUuZGF0YUZvcm1hdDtcbiAgICAgIHRoaXMuX2RhdGVQYXJ0aXRpb25FbmFibGVkID0gdmFsdWUuZGF0ZVBhcnRpdGlvbkVuYWJsZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uTW9kZSA9IHZhbHVlLmVuY3J5cHRpb25Nb2RlO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxUYWJsZURlZmluaXRpb24gPSB2YWx1ZS5leHRlcm5hbFRhYmxlRGVmaW5pdGlvbjtcbiAgICAgIHRoaXMuX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kID0gdmFsdWUucGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQ7XG4gICAgICB0aGlzLl9wYXJxdWV0VmVyc2lvbiA9IHZhbHVlLnBhcnF1ZXRWZXJzaW9uO1xuICAgICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb25LbXNLZXlJZCA9IHZhbHVlLnNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHZhbHVlLnNlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9mb2xkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0Rm9sZGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRGb2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfZm9sZGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRGb2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldEZvbGRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldEZvbGRlcigpIHtcbiAgICB0aGlzLl9idWNrZXRGb2xkZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldEZvbGRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRGb2xkZXI7XG4gIH1cblxuICAvLyBidWNrZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXROYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXROYW1lKCkge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0TmFtZTtcbiAgfVxuXG4gIC8vIGNvbXByZXNzaW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcHJlc3Npb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wcmVzc2lvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wcmVzc2lvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXByZXNzaW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXByZXNzaW9uVHlwZSgpIHtcbiAgICB0aGlzLl9jb21wcmVzc2lvblR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wcmVzc2lvblR5cGU7XG4gIH1cblxuICAvLyBjc3ZfZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NzdkRlbGltaXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3N2RGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3N2X2RlbGltaXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3N2RGVsaW1pdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jc3ZEZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDc3ZEZWxpbWl0ZXIoKSB7XG4gICAgdGhpcy5fY3N2RGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjc3ZEZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2RGVsaW1pdGVyO1xuICB9XG5cbiAgLy8gY3N2X3Jvd19kZWxpbWl0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3N2Um93RGVsaW1pdGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjc3ZSb3dEZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjc3Zfcm93X2RlbGltaXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3N2Um93RGVsaW1pdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jc3ZSb3dEZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDc3ZSb3dEZWxpbWl0ZXIoKSB7XG4gICAgdGhpcy5fY3N2Um93RGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjc3ZSb3dEZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2Um93RGVsaW1pdGVyO1xuICB9XG5cbiAgLy8gZGF0YV9mb3JtYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YUZvcm1hdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF0YUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfZm9ybWF0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YUZvcm1hdCgpIHtcbiAgICB0aGlzLl9kYXRhRm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFGb3JtYXQ7XG4gIH1cblxuICAvLyBkYXRlX3BhcnRpdGlvbl9lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGVQYXJ0aXRpb25FbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkYXRlUGFydGl0aW9uRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkYXRlX3BhcnRpdGlvbl9lbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRlUGFydGl0aW9uRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGF0ZVBhcnRpdGlvbkVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRlUGFydGl0aW9uRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9kYXRlUGFydGl0aW9uRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0ZVBhcnRpdGlvbkVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVBhcnRpdGlvbkVuYWJsZWQ7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5jcnlwdGlvbl9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmNyeXB0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbk1vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0aW9uTW9kZSgpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbk1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbk1vZGU7XG4gIH1cblxuICAvLyBleHRlcm5hbF90YWJsZV9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4dGVybmFsVGFibGVEZWZpbml0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleHRlcm5hbFRhYmxlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4dGVybmFsX3RhYmxlX2RlZmluaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4dGVybmFsVGFibGVEZWZpbml0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHRlcm5hbFRhYmxlRGVmaW5pdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4dGVybmFsVGFibGVEZWZpbml0aW9uKCkge1xuICAgIHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHRlcm5hbFRhYmxlRGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHRlcm5hbFRhYmxlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8vIHBhcnF1ZXRfdGltZXN0YW1wX2luX21pbGxpc2Vjb25kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwYXJxdWV0VGltZXN0YW1wSW5NaWxsaXNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdwYXJxdWV0X3RpbWVzdGFtcF9pbl9taWxsaXNlY29uZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQoKSB7XG4gICAgdGhpcy5fcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kO1xuICB9XG5cbiAgLy8gcGFycXVldF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnF1ZXRWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXJxdWV0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcnF1ZXRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFycXVldFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcnF1ZXRWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFycXVldFZlcnNpb24oKSB7XG4gICAgdGhpcy5fcGFycXVldFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnF1ZXRWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnF1ZXRWZXJzaW9uO1xuICB9XG5cbiAgLy8gc2VydmVyX3NpZGVfZW5jcnlwdGlvbl9rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkKCkge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb25LbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VBY2Nlc3NSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjZXNzUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfYWNjZXNzX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlQWNjZXNzUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlQWNjZXNzUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm47XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Rtc19lbmRwb2ludCBhd3NfZG1zX2VuZHBvaW50fVxuKi9cbmV4cG9ydCBjbGFzcyBEbXNFbmRwb2ludCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfZG1zX2VuZHBvaW50XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIERtc0VuZHBvaW50IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIERtc0VuZHBvaW50IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBEbXNFbmRwb2ludCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBEbXNFbmRwb2ludCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfZG1zX2VuZHBvaW50XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZG1zX2VuZHBvaW50IGF3c19kbXNfZW5kcG9pbnR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERtc0VuZHBvaW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERtc0VuZHBvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZG1zX2VuZHBvaW50JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBcm4gPSBjb25maWcuY2VydGlmaWNhdGVBcm47XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gY29uZmlnLmRhdGFiYXNlTmFtZTtcbiAgICB0aGlzLl9lbmRwb2ludElkID0gY29uZmlnLmVuZHBvaW50SWQ7XG4gICAgdGhpcy5fZW5kcG9pbnRUeXBlID0gY29uZmlnLmVuZHBvaW50VHlwZTtcbiAgICB0aGlzLl9lbmdpbmVOYW1lID0gY29uZmlnLmVuZ2luZU5hbWU7XG4gICAgdGhpcy5fZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcyA9IGNvbmZpZy5leHRyYUNvbm5lY3Rpb25BdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2ttc0tleUFybiA9IGNvbmZpZy5rbXNLZXlBcm47XG4gICAgdGhpcy5fcGFzc3dvcmQgPSBjb25maWcucGFzc3dvcmQ7XG4gICAgdGhpcy5fcG9ydCA9IGNvbmZpZy5wb3J0O1xuICAgIHRoaXMuX3NlY3JldHNNYW5hZ2VyQWNjZXNzUm9sZUFybiA9IGNvbmZpZy5zZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm47XG4gICAgdGhpcy5fc2VjcmV0c01hbmFnZXJBcm4gPSBjb25maWcuc2VjcmV0c01hbmFnZXJBcm47XG4gICAgdGhpcy5fc2VydmVyTmFtZSA9IGNvbmZpZy5zZXJ2ZXJOYW1lO1xuICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlID0gY29uZmlnLnNlcnZpY2VBY2Nlc3NSb2xlO1xuICAgIHRoaXMuX3NzbE1vZGUgPSBjb25maWcuc3NsTW9kZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3VzZXJuYW1lID0gY29uZmlnLnVzZXJuYW1lO1xuICAgIHRoaXMuX2VsYXN0aWNzZWFyY2hTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVsYXN0aWNzZWFyY2hTZXR0aW5ncztcbiAgICB0aGlzLl9rYWZrYVNldHRpbmdzLmludGVybmFsVmFsdWUgPSBjb25maWcua2Fma2FTZXR0aW5ncztcbiAgICB0aGlzLl9raW5lc2lzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5raW5lc2lzU2V0dGluZ3M7XG4gICAgdGhpcy5fbW9uZ29kYlNldHRpbmdzLmludGVybmFsVmFsdWUgPSBjb25maWcubW9uZ29kYlNldHRpbmdzO1xuICAgIHRoaXMuX3MzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zM1NldHRpbmdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjZXJ0aWZpY2F0ZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlQXJuKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUFybjtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YWJhc2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhYmFzZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGFiYXNlTmFtZSgpIHtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gIH1cblxuICAvLyBlbmRwb2ludF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X2FybicpO1xuICB9XG5cbiAgLy8gZW5kcG9pbnRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5kcG9pbnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmRwb2ludElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kcG9pbnRJZDtcbiAgfVxuXG4gIC8vIGVuZHBvaW50X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5kcG9pbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmRwb2ludFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZHBvaW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRwb2ludFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kcG9pbnRUeXBlO1xuICB9XG5cbiAgLy8gZW5naW5lX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5naW5lTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5naW5lTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmdpbmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmVOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZ2luZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lTmFtZTtcbiAgfVxuXG4gIC8vIGV4dHJhX2Nvbm5lY3Rpb25fYXR0cmlidXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHRyYV9jb25uZWN0aW9uX2F0dHJpYnV0ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHRyYUNvbm5lY3Rpb25BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX2V4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcztcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHNlY3JldHNfbWFuYWdlcl9hY2Nlc3Nfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjcmV0c01hbmFnZXJBY2Nlc3NSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRzX21hbmFnZXJfYWNjZXNzX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY3JldHNNYW5hZ2VyQWNjZXNzUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3JldHNNYW5hZ2VyQWNjZXNzUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3JldHNNYW5hZ2VyQWNjZXNzUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm47XG4gIH1cblxuICAvLyBzZWNyZXRzX21hbmFnZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3JldHNNYW5hZ2VyQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWNyZXRzTWFuYWdlckFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldHNfbWFuYWdlcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3JldHNNYW5hZ2VyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNyZXRzTWFuYWdlckFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3JldHNNYW5hZ2VyQXJuKCkge1xuICAgIHRoaXMuX3NlY3JldHNNYW5hZ2VyQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXRzTWFuYWdlckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXRzTWFuYWdlckFybjtcbiAgfVxuXG4gIC8vIHNlcnZlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZlck5hbWUoKSB7XG4gICAgdGhpcy5fc2VydmVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmVyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJOYW1lO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2Nlc3Nfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlQWNjZXNzUm9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2FjY2Vzc19yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlQWNjZXNzUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlQWNjZXNzUm9sZSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGU7XG4gIH1cblxuICAvLyBzc2xfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNzbE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NsTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzbE1vZGUoKSB7XG4gICAgdGhpcy5fc3NsTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xNb2RlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlcm5hbWUoKSB7XG4gICAgdGhpcy5fdXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG5cbiAgLy8gZWxhc3RpY3NlYXJjaF9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbGFzdGljc2VhcmNoU2V0dGluZ3MgPSBuZXcgRG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJlbGFzdGljc2VhcmNoX3NldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRFbGFzdGljc2VhcmNoU2V0dGluZ3ModmFsdWU6IERtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzKSB7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbGFzdGljc2VhcmNoU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljc2VhcmNoU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGthZmthX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2thZmthU2V0dGluZ3MgPSBuZXcgRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwia2Fma2Ffc2V0dGluZ3NcIik7XG4gIHB1YmxpYyBnZXQga2Fma2FTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2Fma2FTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0S2Fma2FTZXR0aW5ncyh2YWx1ZTogRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzKSB7XG4gICAgdGhpcy5fa2Fma2FTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2Fma2FTZXR0aW5ncygpIHtcbiAgICB0aGlzLl9rYWZrYVNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGthZmthU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2Fma2FTZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8ga2luZXNpc19zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9raW5lc2lzU2V0dGluZ3MgPSBuZXcgRG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJraW5lc2lzX3NldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc1NldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRLaW5lc2lzU2V0dGluZ3ModmFsdWU6IERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzKSB7XG4gICAgdGhpcy5fa2luZXNpc1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLaW5lc2lzU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fa2luZXNpc1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtpbmVzaXNTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1vbmdvZGJfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9uZ29kYlNldHRpbmdzID0gbmV3IERtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibW9uZ29kYl9zZXR0aW5nc1wiKTtcbiAgcHVibGljIGdldCBtb25nb2RiU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbmdvZGJTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0TW9uZ29kYlNldHRpbmdzKHZhbHVlOiBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5ncykge1xuICAgIHRoaXMuX21vbmdvZGJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TW9uZ29kYlNldHRpbmdzKCkge1xuICAgIHRoaXMuX21vbmdvZGJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb25nb2RiU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9uZ29kYlNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM1NldHRpbmdzID0gbmV3IERtc0VuZHBvaW50UzNTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInMzX3NldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IHMzU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dFMzU2V0dGluZ3ModmFsdWU6IERtc0VuZHBvaW50UzNTZXR0aW5ncykge1xuICAgIHRoaXMuX3MzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fczNTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM1NldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2VydGlmaWNhdGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUFybiksXG4gICAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhYmFzZU5hbWUpLFxuICAgICAgZW5kcG9pbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZHBvaW50SWQpLFxuICAgICAgZW5kcG9pbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5kcG9pbnRUeXBlKSxcbiAgICAgIGVuZ2luZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVOYW1lKSxcbiAgICAgIGV4dHJhX2Nvbm5lY3Rpb25fYXR0cmlidXRlczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcyksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAga21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0tleUFybiksXG4gICAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGFzc3dvcmQpLFxuICAgICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcG9ydCksXG4gICAgICBzZWNyZXRzX21hbmFnZXJfYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm4pLFxuICAgICAgc2VjcmV0c19tYW5hZ2VyX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VjcmV0c01hbmFnZXJBcm4pLFxuICAgICAgc2VydmVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZlck5hbWUpLFxuICAgICAgc2VydmljZV9hY2Nlc3Nfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZUFjY2Vzc1JvbGUpLFxuICAgICAgc3NsX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NzbE1vZGUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB1c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdXNlcm5hbWUpLFxuICAgICAgZWxhc3RpY3NlYXJjaF9zZXR0aW5nczogZG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl9lbGFzdGljc2VhcmNoU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBrYWZrYV9zZXR0aW5nczogZG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fa2Fma2FTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGtpbmVzaXNfc2V0dGluZ3M6IGRtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fa2luZXNpc1NldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgbW9uZ29kYl9zZXR0aW5nczogZG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl9tb25nb2RiU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzM19zZXR0aW5nczogZG1zRW5kcG9pbnRTM1NldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fczNTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGNlcnRpZmljYXRlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkYXRhYmFzZV9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kYXRhYmFzZU5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBlbmRwb2ludF9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZW5kcG9pbnRJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGVuZHBvaW50X3R5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2VuZHBvaW50VHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGVuZ2luZV9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9lbmdpbmVOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZXh0cmFfY29ubmVjdGlvbl9hdHRyaWJ1dGVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9leHRyYUNvbm5lY3Rpb25BdHRyaWJ1dGVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAga21zX2tleV9hcm46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2ttc0tleUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wYXNzd29yZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHBvcnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3BvcnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBzZWNyZXRzX21hbmFnZXJfYWNjZXNzX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZWNyZXRzTWFuYWdlckFjY2Vzc1JvbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzZWNyZXRzX21hbmFnZXJfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZWNyZXRzTWFuYWdlckFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNlcnZlcl9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZXJ2ZXJOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc2VydmljZV9hY2Nlc3Nfcm9sZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc2VydmljZUFjY2Vzc1JvbGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzc2xfbW9kZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc3NsTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl91c2VybmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGVsYXN0aWNzZWFyY2hfc2V0dGluZ3M6IHtcbiAgICAgICAgdmFsdWU6IGRtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzVG9IY2xUZXJyYWZvcm0odGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5nc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBrYWZrYV9zZXR0aW5nczoge1xuICAgICAgICB2YWx1ZTogZG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzVG9IY2xUZXJyYWZvcm0odGhpcy5fa2Fma2FTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGtpbmVzaXNfc2V0dGluZ3M6IHtcbiAgICAgICAgdmFsdWU6IGRtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzVG9IY2xUZXJyYWZvcm0odGhpcy5fa2luZXNpc1NldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJEbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5nc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBtb25nb2RiX3NldHRpbmdzOiB7XG4gICAgICAgIHZhbHVlOiBkbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHRoaXMuX21vbmdvZGJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NMaXN0XCIsXG4gICAgICB9LFxuICAgICAgczNfc2V0dGluZ3M6IHtcbiAgICAgICAgdmFsdWU6IGRtc0VuZHBvaW50UzNTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHRoaXMuX3MzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkRtc0VuZHBvaW50UzNTZXR0aW5nc0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==