"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestreamwriteTable = exports.TimestreamwriteTableRetentionPropertiesOutputReference = exports.timestreamwriteTableRetentionPropertiesToHclTerraform = exports.timestreamwriteTableRetentionPropertiesToTerraform = exports.TimestreamwriteTableMagneticStoreWritePropertiesOutputReference = exports.timestreamwriteTableMagneticStoreWritePropertiesToHclTerraform = exports.timestreamwriteTableMagneticStoreWritePropertiesToTerraform = exports.TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference = exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform = exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform = exports.TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference = exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform = exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        encryption_option: cdktf.stringToTerraform(struct.encryptionOption),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        object_key_prefix: cdktf.stringToTerraform(struct.objectKeyPrefix),
    };
}
exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform = timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform;
function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_name: {
            value: cdktf.stringToHclTerraform(struct.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_option: {
            value: cdktf.stringToHclTerraform(struct.encryptionOption),
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
        object_key_prefix: {
            value: cdktf.stringToHclTerraform(struct.objectKeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform = timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform;
class TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._encryptionOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionOption = this._encryptionOption;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._objectKeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketName = undefined;
            this._encryptionOption = undefined;
            this._kmsKeyId = undefined;
            this._objectKeyPrefix = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketName = value.bucketName;
            this._encryptionOption = value.encryptionOption;
            this._kmsKeyId = value.kmsKeyId;
            this._objectKeyPrefix = value.objectKeyPrefix;
        }
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
    get encryptionOption() {
        return this.getStringAttribute('encryption_option');
    }
    set encryptionOption(value) {
        this._encryptionOption = value;
    }
    resetEncryptionOption() {
        this._encryptionOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionOptionInput() {
        return this._encryptionOption;
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
    get objectKeyPrefix() {
        return this.getStringAttribute('object_key_prefix');
    }
    set objectKeyPrefix(value) {
        this._objectKeyPrefix = value;
    }
    resetObjectKeyPrefix() {
        this._objectKeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectKeyPrefixInput() {
        return this._objectKeyPrefix;
    }
}
exports.TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference = TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.timestreamwriteTable.TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference", version: "0.0.0" };
function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        s3_configuration: timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct.s3Configuration),
    };
}
exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform = timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform;
function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        s3_configuration: {
            value: timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform(struct.s3Configuration),
            isBlock: true,
            type: "list",
            storageClassType: "TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform = timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform;
class TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // s3_configuration - computed: false, optional: true, required: false
        this._s3Configuration = new TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(this, "s3_configuration");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._s3Configuration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._s3Configuration.internalValue = value.s3Configuration;
        }
    }
    get s3Configuration() {
        return this._s3Configuration;
    }
    putS3Configuration(value) {
        this._s3Configuration.internalValue = value;
    }
    resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
}
exports.TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference = TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.timestreamwriteTable.TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference", version: "0.0.0" };
function timestreamwriteTableMagneticStoreWritePropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enable_magnetic_store_writes: cdktf.booleanToTerraform(struct.enableMagneticStoreWrites),
        magnetic_store_rejected_data_location: timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct.magneticStoreRejectedDataLocation),
    };
}
exports.timestreamwriteTableMagneticStoreWritePropertiesToTerraform = timestreamwriteTableMagneticStoreWritePropertiesToTerraform;
function timestreamwriteTableMagneticStoreWritePropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enable_magnetic_store_writes: {
            value: cdktf.booleanToHclTerraform(struct.enableMagneticStoreWrites),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        magnetic_store_rejected_data_location: {
            value: timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform(struct.magneticStoreRejectedDataLocation),
            isBlock: true,
            type: "list",
            storageClassType: "TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.timestreamwriteTableMagneticStoreWritePropertiesToHclTerraform = timestreamwriteTableMagneticStoreWritePropertiesToHclTerraform;
class TimestreamwriteTableMagneticStoreWritePropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // magnetic_store_rejected_data_location - computed: false, optional: true, required: false
        this._magneticStoreRejectedDataLocation = new TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(this, "magnetic_store_rejected_data_location");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enableMagneticStoreWrites !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableMagneticStoreWrites = this._enableMagneticStoreWrites;
        }
        if (this._magneticStoreRejectedDataLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.magneticStoreRejectedDataLocation = this._magneticStoreRejectedDataLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enableMagneticStoreWrites = undefined;
            this._magneticStoreRejectedDataLocation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enableMagneticStoreWrites = value.enableMagneticStoreWrites;
            this._magneticStoreRejectedDataLocation.internalValue = value.magneticStoreRejectedDataLocation;
        }
    }
    get enableMagneticStoreWrites() {
        return this.getBooleanAttribute('enable_magnetic_store_writes');
    }
    set enableMagneticStoreWrites(value) {
        this._enableMagneticStoreWrites = value;
    }
    resetEnableMagneticStoreWrites() {
        this._enableMagneticStoreWrites = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableMagneticStoreWritesInput() {
        return this._enableMagneticStoreWrites;
    }
    get magneticStoreRejectedDataLocation() {
        return this._magneticStoreRejectedDataLocation;
    }
    putMagneticStoreRejectedDataLocation(value) {
        this._magneticStoreRejectedDataLocation.internalValue = value;
    }
    resetMagneticStoreRejectedDataLocation() {
        this._magneticStoreRejectedDataLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get magneticStoreRejectedDataLocationInput() {
        return this._magneticStoreRejectedDataLocation.internalValue;
    }
}
exports.TimestreamwriteTableMagneticStoreWritePropertiesOutputReference = TimestreamwriteTableMagneticStoreWritePropertiesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
TimestreamwriteTableMagneticStoreWritePropertiesOutputReference[_c] = { fqn: "@cdktf/aws-cdk.timestreamwriteTable.TimestreamwriteTableMagneticStoreWritePropertiesOutputReference", version: "0.0.0" };
function timestreamwriteTableRetentionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct.magneticStoreRetentionPeriodInDays),
        memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct.memoryStoreRetentionPeriodInHours),
    };
}
exports.timestreamwriteTableRetentionPropertiesToTerraform = timestreamwriteTableRetentionPropertiesToTerraform;
function timestreamwriteTableRetentionPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        magnetic_store_retention_period_in_days: {
            value: cdktf.numberToHclTerraform(struct.magneticStoreRetentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_store_retention_period_in_hours: {
            value: cdktf.numberToHclTerraform(struct.memoryStoreRetentionPeriodInHours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.timestreamwriteTableRetentionPropertiesToHclTerraform = timestreamwriteTableRetentionPropertiesToHclTerraform;
class TimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._magneticStoreRetentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.magneticStoreRetentionPeriodInDays = this._magneticStoreRetentionPeriodInDays;
        }
        if (this._memoryStoreRetentionPeriodInHours !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryStoreRetentionPeriodInHours = this._memoryStoreRetentionPeriodInHours;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._magneticStoreRetentionPeriodInDays = undefined;
            this._memoryStoreRetentionPeriodInHours = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._magneticStoreRetentionPeriodInDays = value.magneticStoreRetentionPeriodInDays;
            this._memoryStoreRetentionPeriodInHours = value.memoryStoreRetentionPeriodInHours;
        }
    }
    get magneticStoreRetentionPeriodInDays() {
        return this.getNumberAttribute('magnetic_store_retention_period_in_days');
    }
    set magneticStoreRetentionPeriodInDays(value) {
        this._magneticStoreRetentionPeriodInDays = value;
    }
    // Temporarily expose input value. Use with caution.
    get magneticStoreRetentionPeriodInDaysInput() {
        return this._magneticStoreRetentionPeriodInDays;
    }
    get memoryStoreRetentionPeriodInHours() {
        return this.getNumberAttribute('memory_store_retention_period_in_hours');
    }
    set memoryStoreRetentionPeriodInHours(value) {
        this._memoryStoreRetentionPeriodInHours = value;
    }
    // Temporarily expose input value. Use with caution.
    get memoryStoreRetentionPeriodInHoursInput() {
        return this._memoryStoreRetentionPeriodInHours;
    }
}
exports.TimestreamwriteTableRetentionPropertiesOutputReference = TimestreamwriteTableRetentionPropertiesOutputReference;
_d = JSII_RTTI_SYMBOL_1;
TimestreamwriteTableRetentionPropertiesOutputReference[_d] = { fqn: "@cdktf/aws-cdk.timestreamwriteTable.TimestreamwriteTableRetentionPropertiesOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/timestreamwrite_table aws_timestreamwrite_table}
*/
class TimestreamwriteTable extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TimestreamwriteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TimestreamwriteTable to import
    * @param importFromId The id of the existing TimestreamwriteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/timestreamwrite_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TimestreamwriteTable to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_timestreamwrite_table", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/timestreamwrite_table aws_timestreamwrite_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteTableConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_timestreamwrite_table',
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
        // magnetic_store_write_properties - computed: false, optional: true, required: false
        this._magneticStoreWriteProperties = new TimestreamwriteTableMagneticStoreWritePropertiesOutputReference(this, "magnetic_store_write_properties");
        // retention_properties - computed: false, optional: true, required: false
        this._retentionProperties = new TimestreamwriteTableRetentionPropertiesOutputReference(this, "retention_properties");
        this._databaseName = config.databaseName;
        this._id = config.id;
        this._tableName = config.tableName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._magneticStoreWriteProperties.internalValue = config.magneticStoreWriteProperties;
        this._retentionProperties.internalValue = config.retentionProperties;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    set databaseName(value) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    get databaseNameInput() {
        return this._databaseName;
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
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    set tableName(value) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    get tableNameInput() {
        return this._tableName;
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
    get magneticStoreWriteProperties() {
        return this._magneticStoreWriteProperties;
    }
    putMagneticStoreWriteProperties(value) {
        this._magneticStoreWriteProperties.internalValue = value;
    }
    resetMagneticStoreWriteProperties() {
        this._magneticStoreWriteProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get magneticStoreWritePropertiesInput() {
        return this._magneticStoreWriteProperties.internalValue;
    }
    get retentionProperties() {
        return this._retentionProperties;
    }
    putRetentionProperties(value) {
        this._retentionProperties.internalValue = value;
    }
    resetRetentionProperties() {
        this._retentionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retentionPropertiesInput() {
        return this._retentionProperties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            database_name: cdktf.stringToTerraform(this._databaseName),
            id: cdktf.stringToTerraform(this._id),
            table_name: cdktf.stringToTerraform(this._tableName),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            magnetic_store_write_properties: timestreamwriteTableMagneticStoreWritePropertiesToTerraform(this._magneticStoreWriteProperties.internalValue),
            retention_properties: timestreamwriteTableRetentionPropertiesToTerraform(this._retentionProperties.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            database_name: {
                value: cdktf.stringToHclTerraform(this._databaseName),
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
            table_name: {
                value: cdktf.stringToHclTerraform(this._tableName),
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
            magnetic_store_write_properties: {
                value: timestreamwriteTableMagneticStoreWritePropertiesToHclTerraform(this._magneticStoreWriteProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "TimestreamwriteTableMagneticStoreWritePropertiesList",
            },
            retention_properties: {
                value: timestreamwriteTableRetentionPropertiesToHclTerraform(this._retentionProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "TimestreamwriteTableRetentionPropertiesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.TimestreamwriteTable = TimestreamwriteTable;
_e = JSII_RTTI_SYMBOL_1;
TimestreamwriteTable[_e] = { fqn: "@cdktf/aws-cdk.timestreamwriteTable.TimestreamwriteTable", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
TimestreamwriteTable.tfResourceType = "aws_timestreamwrite_table";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3RpbWVzdHJlYW13cml0ZS10YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTREL0IsU0FBZ0IsMkdBQTJHLENBQUMsTUFBMk47SUFDclYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNwRSxDQUFBO0FBQ0gsQ0FBQztBQVhELGtPQVdDO0FBR0QsU0FBZ0IsOEdBQThHLENBQUMsTUFBMk47SUFDeFYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMs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QUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsNkNBQTZDO2FBQ2hFO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUE1T0gsb0RBNk9DOzs7QUEzT0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxtQ0FBYyxHQUFHLDJCQUEyQixBQUE5QixDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3RpbWVzdHJlYW13cml0ZV90YWJsZVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVzdHJlYW13cml0ZVRhYmxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3RpbWVzdHJlYW13cml0ZV90YWJsZSNkYXRhYmFzZV9uYW1lIFRpbWVzdHJlYW13cml0ZVRhYmxlI2RhdGFiYXNlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFiYXNlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjaWQgVGltZXN0cmVhbXdyaXRlVGFibGUjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3RpbWVzdHJlYW13cml0ZV90YWJsZSN0YWJsZV9uYW1lIFRpbWVzdHJlYW13cml0ZVRhYmxlI3RhYmxlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjdGFncyBUaW1lc3RyZWFtd3JpdGVUYWJsZSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlI3RhZ3NfYWxsIFRpbWVzdHJlYW13cml0ZVRhYmxlI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogbWFnbmV0aWNfc3RvcmVfd3JpdGVfcHJvcGVydGllcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlI21hZ25ldGljX3N0b3JlX3dyaXRlX3Byb3BlcnRpZXMgVGltZXN0cmVhbXdyaXRlVGFibGUjbWFnbmV0aWNfc3RvcmVfd3JpdGVfcHJvcGVydGllc31cbiAgKi9cbiAgcmVhZG9ubHkgbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcz86IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcztcbiAgLyoqXG4gICogcmV0ZW50aW9uX3Byb3BlcnRpZXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3RpbWVzdHJlYW13cml0ZV90YWJsZSNyZXRlbnRpb25fcHJvcGVydGllcyBUaW1lc3RyZWFtd3JpdGVUYWJsZSNyZXRlbnRpb25fcHJvcGVydGllc31cbiAgKi9cbiAgcmVhZG9ubHkgcmV0ZW50aW9uUHJvcGVydGllcz86IFRpbWVzdHJlYW13cml0ZVRhYmxlUmV0ZW50aW9uUHJvcGVydGllcztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uUzNDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlI2J1Y2tldF9uYW1lIFRpbWVzdHJlYW13cml0ZVRhYmxlI2J1Y2tldF9uYW1lfVxuICAqL1xuICByZWFkb25seSBidWNrZXROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjZW5jcnlwdGlvbl9vcHRpb24gVGltZXN0cmVhbXdyaXRlVGFibGUjZW5jcnlwdGlvbl9vcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25PcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3RpbWVzdHJlYW13cml0ZV90YWJsZSNrbXNfa2V5X2lkIFRpbWVzdHJlYW13cml0ZVRhYmxlI2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjb2JqZWN0X2tleV9wcmVmaXggVGltZXN0cmVhbXdyaXRlVGFibGUjb2JqZWN0X2tleV9wcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IG9iamVjdEtleVByZWZpeD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBlbmNyeXB0aW9uX29wdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uT3B0aW9uKSxcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBvYmplY3Rfa2V5X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vYmplY3RLZXlQcmVmaXgpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYnVja2V0X25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVuY3J5cHRpb25fb3B0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uT3B0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBrbXNfa2V5X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb2JqZWN0X2tleV9wcmVmaXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdEtleVByZWZpeCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb25TM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXROYW1lID0gdGhpcy5fYnVja2V0TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5jcnlwdGlvbk9wdGlvbiA9IHRoaXMuX2VuY3J5cHRpb25PcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlJZCA9IHRoaXMuX2ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb2JqZWN0S2V5UHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9iamVjdEtleVByZWZpeCA9IHRoaXMuX29iamVjdEtleVByZWZpeDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vYmplY3RLZXlQcmVmaXggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZS5idWNrZXROYW1lO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbk9wdGlvbiA9IHZhbHVlLmVuY3J5cHRpb25PcHRpb247XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlLmttc0tleUlkO1xuICAgICAgdGhpcy5fb2JqZWN0S2V5UHJlZml4ID0gdmFsdWUub2JqZWN0S2V5UHJlZml4O1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldE5hbWUoKSB7XG4gICAgdGhpcy5fYnVja2V0TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXROYW1lO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9vcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbk9wdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbk9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fb3B0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmNyeXB0aW9uT3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGlvbk9wdGlvbigpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uT3B0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uT3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25PcHRpb247XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIG9iamVjdF9rZXlfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29iamVjdEtleVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb2JqZWN0S2V5UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X2tleV9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9iamVjdEtleVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqZWN0S2V5UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2JqZWN0S2V5UHJlZml4KCkge1xuICAgIHRoaXMuX29iamVjdEtleVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2JqZWN0S2V5UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdEtleVByZWZpeDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb24ge1xuICAvKipcbiAgKiBzM19jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjczNfY29uZmlndXJhdGlvbiBUaW1lc3RyZWFtd3JpdGVUYWJsZSNzM19jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBzM0NvbmZpZ3VyYXRpb24/OiBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb25TM0NvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgczNfY29uZmlndXJhdGlvbjogdGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uUzNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zM0NvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgczNfY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IHRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuczNDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uUzNDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fczNDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzQ29uZmlndXJhdGlvbiA9IHRoaXMuX3MzQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3MzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zM0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnMzQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBzM19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQ29uZmlndXJhdGlvbiA9IG5ldyBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb25TM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzM19jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IHMzQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fczNDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTM0NvbmZpZ3VyYXRpb24odmFsdWU6IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblMzQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3MzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3MzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlI2VuYWJsZV9tYWduZXRpY19zdG9yZV93cml0ZXMgVGltZXN0cmVhbXdyaXRlVGFibGUjZW5hYmxlX21hZ25ldGljX3N0b3JlX3dyaXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlTWFnbmV0aWNTdG9yZVdyaXRlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogbWFnbmV0aWNfc3RvcmVfcmVqZWN0ZWRfZGF0YV9sb2NhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlI21hZ25ldGljX3N0b3JlX3JlamVjdGVkX2RhdGFfbG9jYXRpb24gVGltZXN0cmVhbXdyaXRlVGFibGUjbWFnbmV0aWNfc3RvcmVfcmVqZWN0ZWRfZGF0YV9sb2NhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uPzogVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIHwgVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZV9tYWduZXRpY19zdG9yZV93cml0ZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZU1hZ25ldGljU3RvcmVXcml0ZXMpLFxuICAgIG1hZ25ldGljX3N0b3JlX3JlamVjdGVkX2RhdGFfbG9jYXRpb246IHRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgfCBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVuYWJsZV9tYWduZXRpY19zdG9yZV93cml0ZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgbWFnbmV0aWNfc3RvcmVfcmVqZWN0ZWRfZGF0YV9sb2NhdGlvbjoge1xuICAgICAgdmFsdWU6IHRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlTWFnbmV0aWNTdG9yZVdyaXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzID0gdGhpcy5fZW5hYmxlTWFnbmV0aWNTdG9yZVdyaXRlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb24gPSB0aGlzLl9tYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBUaW1lc3RyZWFtd3JpdGVUYWJsZU1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZU1hZ25ldGljU3RvcmVXcml0ZXMgPSB2YWx1ZS5lbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzO1xuICAgICAgdGhpcy5fbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlX21hZ25ldGljX3N0b3JlX3dyaXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9tYWduZXRpY19zdG9yZV93cml0ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZU1hZ25ldGljU3RvcmVXcml0ZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZU1hZ25ldGljU3RvcmVXcml0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVNYWduZXRpY1N0b3JlV3JpdGVzKCkge1xuICAgIHRoaXMuX2VuYWJsZU1hZ25ldGljU3RvcmVXcml0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZU1hZ25ldGljU3RvcmVXcml0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlTWFnbmV0aWNTdG9yZVdyaXRlcztcbiAgfVxuXG4gIC8vIG1hZ25ldGljX3N0b3JlX3JlamVjdGVkX2RhdGFfbG9jYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uID0gbmV3IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc01hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm1hZ25ldGljX3N0b3JlX3JlamVjdGVkX2RhdGFfbG9jYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb247XG4gIH1cbiAgcHVibGljIHB1dE1hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbih2YWx1ZTogVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb24oKSB7XG4gICAgdGhpcy5fbWFnbmV0aWNTdG9yZVJlamVjdGVkRGF0YUxvY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hZ25ldGljU3RvcmVSZWplY3RlZERhdGFMb2NhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYWduZXRpY1N0b3JlUmVqZWN0ZWREYXRhTG9jYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBUaW1lc3RyZWFtd3JpdGVUYWJsZVJldGVudGlvblByb3BlcnRpZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjbWFnbmV0aWNfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9kYXlzIFRpbWVzdHJlYW13cml0ZVRhYmxlI21hZ25ldGljX3N0b3JlX3JldGVudGlvbl9wZXJpb2RfaW5fZGF5c31cbiAgKi9cbiAgcmVhZG9ubHkgbWFnbmV0aWNTdG9yZVJldGVudGlvblBlcmlvZEluRGF5czogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy90aW1lc3RyZWFtd3JpdGVfdGFibGUjbWVtb3J5X3N0b3JlX3JldGVudGlvbl9wZXJpb2RfaW5faG91cnMgVGltZXN0cmVhbXdyaXRlVGFibGUjbWVtb3J5X3N0b3JlX3JldGVudGlvbl9wZXJpb2RfaW5faG91cnN9XG4gICovXG4gIHJlYWRvbmx5IG1lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3VyczogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXN0cmVhbXdyaXRlVGFibGVSZXRlbnRpb25Qcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogVGltZXN0cmVhbXdyaXRlVGFibGVSZXRlbnRpb25Qcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIHwgVGltZXN0cmVhbXdyaXRlVGFibGVSZXRlbnRpb25Qcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hZ25ldGljX3N0b3JlX3JldGVudGlvbl9wZXJpb2RfaW5fZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzKSxcbiAgICBtZW1vcnlfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9ob3VyczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnlTdG9yZVJldGVudGlvblBlcmlvZEluSG91cnMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdHJlYW13cml0ZVRhYmxlUmV0ZW50aW9uUHJvcGVydGllc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFRpbWVzdHJlYW13cml0ZVRhYmxlUmV0ZW50aW9uUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSB8IFRpbWVzdHJlYW13cml0ZVRhYmxlUmV0ZW50aW9uUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWFnbmV0aWNfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9kYXlzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBtZW1vcnlfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9ob3Vyczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFRpbWVzdHJlYW13cml0ZVRhYmxlUmV0ZW50aW9uUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogVGltZXN0cmVhbXdyaXRlVGFibGVSZXRlbnRpb25Qcm9wZXJ0aWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hZ25ldGljU3RvcmVSZXRlbnRpb25QZXJpb2RJbkRheXMgPSB0aGlzLl9tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3VycyA9IHRoaXMuX21lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3VycztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFRpbWVzdHJlYW13cml0ZVRhYmxlUmV0ZW50aW9uUHJvcGVydGllcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21hZ25ldGljU3RvcmVSZXRlbnRpb25QZXJpb2RJbkRheXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZW1vcnlTdG9yZVJldGVudGlvblBlcmlvZEluSG91cnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21hZ25ldGljU3RvcmVSZXRlbnRpb25QZXJpb2RJbkRheXMgPSB2YWx1ZS5tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzO1xuICAgICAgdGhpcy5fbWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzID0gdmFsdWUubWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hZ25ldGljX3N0b3JlX3JldGVudGlvbl9wZXJpb2RfaW5fZGF5cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWFnbmV0aWNfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9kYXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYWduZXRpY1N0b3JlUmV0ZW50aW9uUGVyaW9kSW5EYXlzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hZ25ldGljU3RvcmVSZXRlbnRpb25QZXJpb2RJbkRheXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFnbmV0aWNTdG9yZVJldGVudGlvblBlcmlvZEluRGF5cztcbiAgfVxuXG4gIC8vIG1lbW9yeV9zdG9yZV9yZXRlbnRpb25fcGVyaW9kX2luX2hvdXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3Vycz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWVtb3J5X3N0b3JlX3JldGVudGlvbl9wZXJpb2RfaW5faG91cnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3Vycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZW1vcnlTdG9yZVJldGVudGlvblBlcmlvZEluSG91cnM7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3RpbWVzdHJlYW13cml0ZV90YWJsZSBhd3NfdGltZXN0cmVhbXdyaXRlX3RhYmxlfVxuKi9cbmV4cG9ydCBjbGFzcyBUaW1lc3RyZWFtd3JpdGVUYWJsZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfdGltZXN0cmVhbXdyaXRlX3RhYmxlXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFRpbWVzdHJlYW13cml0ZVRhYmxlIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIFRpbWVzdHJlYW13cml0ZVRhYmxlIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBUaW1lc3RyZWFtd3JpdGVUYWJsZSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBUaW1lc3RyZWFtd3JpdGVUYWJsZSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfdGltZXN0cmVhbXdyaXRlX3RhYmxlXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdGltZXN0cmVhbXdyaXRlX3RhYmxlIGF3c190aW1lc3RyZWFtd3JpdGVfdGFibGV9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFRpbWVzdHJlYW13cml0ZVRhYmxlQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFRpbWVzdHJlYW13cml0ZVRhYmxlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfdGltZXN0cmVhbXdyaXRlX3RhYmxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gY29uZmlnLmRhdGFiYXNlTmFtZTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl90YWJsZU5hbWUgPSBjb25maWcudGFibGVOYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXM7XG4gICAgdGhpcy5fcmV0ZW50aW9uUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJldGVudGlvblByb3BlcnRpZXM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhYmxlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFibGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YWJsZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlTmFtZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3NfYWxsJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gbWFnbmV0aWNfc3RvcmVfd3JpdGVfcHJvcGVydGllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzID0gbmV3IFRpbWVzdHJlYW13cml0ZVRhYmxlTWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm1hZ25ldGljX3N0b3JlX3dyaXRlX3Byb3BlcnRpZXNcIik7XG4gIHB1YmxpYyBnZXQgbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcztcbiAgfVxuICBwdWJsaWMgcHV0TWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcyh2YWx1ZTogVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5fbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcygpIHtcbiAgICB0aGlzLl9tYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hZ25ldGljU3RvcmVXcml0ZVByb3BlcnRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmV0ZW50aW9uX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0ZW50aW9uUHJvcGVydGllcyA9IG5ldyBUaW1lc3RyZWFtd3JpdGVUYWJsZVJldGVudGlvblByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZXRlbnRpb25fcHJvcGVydGllc1wiKTtcbiAgcHVibGljIGdldCByZXRlbnRpb25Qcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzO1xuICB9XG4gIHB1YmxpYyBwdXRSZXRlbnRpb25Qcm9wZXJ0aWVzKHZhbHVlOiBUaW1lc3RyZWFtd3JpdGVUYWJsZVJldGVudGlvblByb3BlcnRpZXMpIHtcbiAgICB0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXRlbnRpb25Qcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX3JldGVudGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0ZW50aW9uUHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhdGFiYXNlTmFtZSksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFibGVOYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgbWFnbmV0aWNfc3RvcmVfd3JpdGVfcHJvcGVydGllczogdGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzVG9UZXJyYWZvcm0odGhpcy5fbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHJldGVudGlvbl9wcm9wZXJ0aWVzOiB0aW1lc3RyZWFtd3JpdGVUYWJsZVJldGVudGlvblByb3BlcnRpZXNUb1RlcnJhZm9ybSh0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgZGF0YWJhc2VfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGF0YWJhc2VOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFibGVfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdGFibGVOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgbWFnbmV0aWNfc3RvcmVfd3JpdGVfcHJvcGVydGllczoge1xuICAgICAgICB2YWx1ZTogdGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzVG9IY2xUZXJyYWZvcm0odGhpcy5fbWFnbmV0aWNTdG9yZVdyaXRlUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiVGltZXN0cmVhbXdyaXRlVGFibGVNYWduZXRpY1N0b3JlV3JpdGVQcm9wZXJ0aWVzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHJldGVudGlvbl9wcm9wZXJ0aWVzOiB7XG4gICAgICAgIHZhbHVlOiB0aW1lc3RyZWFtd3JpdGVUYWJsZVJldGVudGlvblByb3BlcnRpZXNUb0hjbFRlcnJhZm9ybSh0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJUaW1lc3RyZWFtd3JpdGVUYWJsZVJldGVudGlvblByb3BlcnRpZXNMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=