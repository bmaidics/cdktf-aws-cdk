"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueDataCatalogEncryptionSettings = exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform = exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform = exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        return_connection_password_encrypted: cdktf.booleanToTerraform(struct.returnConnectionPasswordEncrypted),
    };
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform;
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.awsKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        return_connection_password_encrypted: {
            value: cdktf.booleanToHclTerraform(struct.returnConnectionPasswordEncrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform;
class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._awsKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
        }
        if (this._returnConnectionPasswordEncrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnConnectionPasswordEncrypted = this._returnConnectionPasswordEncrypted;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsKmsKeyId = undefined;
            this._returnConnectionPasswordEncrypted = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsKmsKeyId = value.awsKmsKeyId;
            this._returnConnectionPasswordEncrypted = value.returnConnectionPasswordEncrypted;
        }
    }
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    set awsKmsKeyId(value) {
        this._awsKmsKeyId = value;
    }
    resetAwsKmsKeyId() {
        this._awsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsKmsKeyIdInput() {
        return this._awsKmsKeyId;
    }
    get returnConnectionPasswordEncrypted() {
        return this.getBooleanAttribute('return_connection_password_encrypted');
    }
    set returnConnectionPasswordEncrypted(value) {
        this._returnConnectionPasswordEncrypted = value;
    }
    // Temporarily expose input value. Use with caution.
    get returnConnectionPasswordEncryptedInput() {
        return this._returnConnectionPasswordEncrypted;
    }
}
exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference = GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference[_a] = { fqn: "@cdktf/aws-cdk.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference", version: "0.0.0" };
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog_encryption_mode: cdktf.stringToTerraform(struct.catalogEncryptionMode),
        sse_aws_kms_key_id: cdktf.stringToTerraform(struct.sseAwsKmsKeyId),
    };
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform;
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        catalog_encryption_mode: {
            value: cdktf.stringToHclTerraform(struct.catalogEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sse_aws_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.sseAwsKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform;
class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
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
        if (this._catalogEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogEncryptionMode = this._catalogEncryptionMode;
        }
        if (this._sseAwsKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseAwsKmsKeyId = this._sseAwsKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._catalogEncryptionMode = undefined;
            this._sseAwsKmsKeyId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalogEncryptionMode = value.catalogEncryptionMode;
            this._sseAwsKmsKeyId = value.sseAwsKmsKeyId;
        }
    }
    get catalogEncryptionMode() {
        return this.getStringAttribute('catalog_encryption_mode');
    }
    set catalogEncryptionMode(value) {
        this._catalogEncryptionMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get catalogEncryptionModeInput() {
        return this._catalogEncryptionMode;
    }
    get sseAwsKmsKeyId() {
        return this.getStringAttribute('sse_aws_kms_key_id');
    }
    set sseAwsKmsKeyId(value) {
        this._sseAwsKmsKeyId = value;
    }
    resetSseAwsKmsKeyId() {
        this._sseAwsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sseAwsKmsKeyIdInput() {
        return this._sseAwsKmsKeyId;
    }
}
exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference = GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference[_b] = { fqn: "@cdktf/aws-cdk.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference", version: "0.0.0" };
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_password_encryption: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct.connectionPasswordEncryption),
        encryption_at_rest: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct.encryptionAtRest),
    };
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform;
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        connection_password_encryption: {
            value: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform(struct.connectionPasswordEncryption),
            isBlock: true,
            type: "list",
            storageClassType: "GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList",
        },
        encryption_at_rest: {
            value: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform(struct.encryptionAtRest),
            isBlock: true,
            type: "list",
            storageClassType: "GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform;
class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // connection_password_encryption - computed: false, optional: false, required: true
        this._connectionPasswordEncryption = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(this, "connection_password_encryption");
        // encryption_at_rest - computed: false, optional: false, required: true
        this._encryptionAtRest = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(this, "encryption_at_rest");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._connectionPasswordEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionPasswordEncryption = this._connectionPasswordEncryption?.internalValue;
        }
        if (this._encryptionAtRest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._connectionPasswordEncryption.internalValue = undefined;
            this._encryptionAtRest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionPasswordEncryption.internalValue = value.connectionPasswordEncryption;
            this._encryptionAtRest.internalValue = value.encryptionAtRest;
        }
    }
    get connectionPasswordEncryption() {
        return this._connectionPasswordEncryption;
    }
    putConnectionPasswordEncryption(value) {
        this._connectionPasswordEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get connectionPasswordEncryptionInput() {
        return this._connectionPasswordEncryption.internalValue;
    }
    get encryptionAtRest() {
        return this._encryptionAtRest;
    }
    putEncryptionAtRest(value) {
        this._encryptionAtRest.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionAtRestInput() {
        return this._encryptionAtRest.internalValue;
    }
}
exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference = GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings}
*/
class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a GlueDataCatalogEncryptionSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueDataCatalogEncryptionSettings to import
    * @param importFromId The id of the existing GlueDataCatalogEncryptionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_data_catalog_encryption_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueDataCatalogEncryptionSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_data_catalog_encryption_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataCatalogEncryptionSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
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
        // data_catalog_encryption_settings - computed: false, optional: false, required: true
        this._dataCatalogEncryptionSettings = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(this, "data_catalog_encryption_settings");
        this._catalogId = config.catalogId;
        this._id = config.id;
        this._dataCatalogEncryptionSettings.internalValue = config.dataCatalogEncryptionSettings;
    }
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    set catalogId(value) {
        this._catalogId = value;
    }
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get catalogIdInput() {
        return this._catalogId;
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
    get dataCatalogEncryptionSettings() {
        return this._dataCatalogEncryptionSettings;
    }
    putDataCatalogEncryptionSettings(value) {
        this._dataCatalogEncryptionSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataCatalogEncryptionSettingsInput() {
        return this._dataCatalogEncryptionSettings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            id: cdktf.stringToTerraform(this._id),
            data_catalog_encryption_settings: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(this._dataCatalogEncryptionSettings.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            catalog_id: {
                value: cdktf.stringToHclTerraform(this._catalogId),
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
            data_catalog_encryption_settings: {
                value: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform(this._dataCatalogEncryptionSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.GlueDataCatalogEncryptionSettings = GlueDataCatalogEncryptionSettings;
_d = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettings[_d] = { fqn: "@cdktf/aws-cdk.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
GlueDataCatalogEncryptionSettings.tfResourceType = "aws_glue_data_catalog_encryption_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2dsdWUtZGF0YS1jYXRhbG9nLWVuY3J5cHRpb24tc2V0dGluZ3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUFrQy9CLFNBQWdCLHFHQUFxRyxDQUFDLE1BQStNO0lBQ25VLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDNUQsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztLQUMxRyxDQUFBO0FBQ0gsQ0FBQztBQVRELHNOQVNDO0FBR0QsU0FBZ0Isd0dBQXdHLENBQUMsTUFBK007SUFDdFUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxLQUFLLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztZQUM3RSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsU0FBUztTQUM1QjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsNE5Bc0JDO0FBRUQsTUFBYSx5R0FBMEcsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUdoSjs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVE5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGtDQUFrQyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzFELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO1FBQ2xHLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNkc7UUFDcEksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLFNBQVMsQ0FBQztRQUN0RCxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0NBQWtDLEdBQUcsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO1FBQ3BGLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBSUQsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBVyxpQ0FBaUMsQ0FBQyxLQUFrQztRQUM3RSxJQUFJLENBQUMsa0NBQWtDLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQ0FBc0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsa0NBQWtDLENBQUM7SUFDakQsQ0FBQzs7QUFqRUgsOE5Ba0VDOzs7QUFZRCxTQUFnQix5RkFBeUYsQ0FBQyxNQUF1TDtJQUMvUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUMvRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNwRSxDQUFBO0FBQ0gsQ0FBQztBQVRELDhMQVNDO0FBR0QsU0FBZ0IsNEZBQTRGLENBQUMsTUFBdUw7SUFDbFMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWix1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztZQUNoRSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztZQUN6RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsb01Bc0JDO0FBRUQsTUFBYSw2RkFBOEYsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUdwSTs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVE5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDMUUsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVELENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBaUc7UUFDeEgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7WUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsSUFBVyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOztBQWpFSCxzTUFrRUM7OztBQWdCRCxTQUFnQix5RUFBeUUsQ0FBQyxNQUF1SjtJQUMvTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsOEJBQThCLEVBQUUscUdBQXFHLENBQUMsTUFBTyxDQUFDLDRCQUE0QixDQUFDO1FBQzNLLGtCQUFrQixFQUFFLHlGQUF5RixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztLQUN4SSxDQUFBO0FBQ0gsQ0FBQztBQVRELDhKQVNDO0FBR0QsU0FBZ0IsNEVBQTRFLENBQUMsTUFBdUo7SUFDbFAsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWiw4QkFBOEIsRUFBRTtZQUM5QixLQUFLLEVBQUUsd0dBQXdHLENBQUMsTUFBTyxDQUFDLDRCQUE0QixDQUFDO1lBQ3JKLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxnR0FBZ0c7U0FDbkg7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixLQUFLLEVBQUUsNEZBQTRGLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1lBQzdILE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxvRkFBb0Y7U0FDdkc7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBdEJELG9LQXNCQztBQUVELE1BQWEsNkVBQThFLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHcEg7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFxQzlCLG9GQUFvRjtRQUM1RSxrQ0FBNkIsR0FBRyxJQUFJLHlHQUF5RyxDQUFDLElBQUksRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBWTlMLHdFQUF3RTtRQUNoRSxzQkFBaUIsR0FBRyxJQUFJLDZGQUE2RixDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBM0MxSixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3BFLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQztRQUN2RyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztRQUMvRSxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWlGO1FBQ3hHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ25ELENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsNEJBQTRCLENBQUM7WUFDdEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztJQUM1QyxDQUFDO0lBQ00sK0JBQStCLENBQUMsS0FBaUc7UUFDdEksSUFBSSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUM7SUFDMUQsQ0FBQztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDTSxtQkFBbUIsQ0FBQyxLQUFxRjtRQUM5RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDOztBQTlESCxzS0ErREM7OztBQUVEOztFQUVFO0FBQ0YsTUFBYSxpQ0FBa0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzVFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFnQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxRQUFrQztRQUM5SCxPQUFPLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSwyQ0FBMkMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbkssQ0FBQztJQUVMLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQStDO1FBQzlGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkNBQTJDO1lBQ2xFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsZUFBZSxFQUFFLFFBQVE7Z0JBQ3pCLHlCQUF5QixFQUFFLFFBQVE7YUFDcEM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ2pDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO1FBMENMLHNGQUFzRjtRQUM5RSxtQ0FBOEIsR0FBRyxJQUFJLDZFQUE2RSxDQUFDLElBQUksRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBMUNuSyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLDZCQUE2QixDQUFDO0lBQzNGLENBQUM7SUFRRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFJRCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBVyxFQUFFLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDN0MsQ0FBQztJQUNNLGdDQUFnQyxDQUFDLEtBQXFFO1FBQzNHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQ0FBa0M7UUFDM0MsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDO0lBQzNELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckMsZ0NBQWdDLEVBQUUseUVBQXlFLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWEsQ0FBQztTQUMvSixDQUFDO0lBQ0osQ0FBQztJQUVTLHVCQUF1QjtRQUMvQixNQUFNLEtBQUssR0FBRztZQUNaLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsZ0NBQWdDLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSw0RUFBNEUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDO2dCQUN0SSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxvRUFBb0U7YUFDdkY7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTFJSCw4RUEySUM7OztBQXpJQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGdEQUFjLEdBQUcsMkNBQTJDLEFBQTlDLENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5nc1xuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzI2NhdGFsb2dfaWQgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzI2NhdGFsb2dfaWR9XG4gICovXG4gIHJlYWRvbmx5IGNhdGFsb2dJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncyNpZCBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGRhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzI2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyNkYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3M6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzO1xufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzI2F3c19rbXNfa2V5X2lkIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyNhd3Nfa21zX2tleV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYXdzS21zS2V5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2dsdWVfZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3MjcmV0dXJuX2Nvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGVkIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyNyZXR1cm5fY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0ZWR9XG4gICovXG4gIHJlYWRvbmx5IHJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF3c19rbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c0ttc0tleUlkKSxcbiAgICByZXR1cm5fY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhd3Nfa21zX2tleV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXdzS21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJldHVybl9jb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F3c0ttc0tleUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF3c0ttc0tleUlkID0gdGhpcy5fYXdzS21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkID0gdGhpcy5fcmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXdzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F3c0ttc0tleUlkID0gdmFsdWUuYXdzS21zS2V5SWQ7XG4gICAgICB0aGlzLl9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQgPSB2YWx1ZS5yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYXdzX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXdzS21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF3c0ttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c0ttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hd3NLbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF3c0ttc0tleUlkKCkge1xuICAgIHRoaXMuX2F3c0ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NLbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NLbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHJldHVybl9jb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXR1cm5fY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0ZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncyNjYXRhbG9nX2VuY3J5cHRpb25fbW9kZSBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MjY2F0YWxvZ19lbmNyeXB0aW9uX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IGNhdGFsb2dFbmNyeXB0aW9uTW9kZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzI3NzZV9hd3Nfa21zX2tleV9pZCBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3Mjc3NlX2F3c19rbXNfa2V5X2lkfVxuICAqL1xuICByZWFkb25seSBzc2VBd3NLbXNLZXlJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdE91dHB1dFJlZmVyZW5jZSB8IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXRhbG9nX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nRW5jcnlwdGlvbk1vZGUpLFxuICAgIHNzZV9hd3Nfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2VBd3NLbXNLZXlJZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0T3V0cHV0UmVmZXJlbmNlIHwgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjYXRhbG9nX2VuY3J5cHRpb25fbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2F0YWxvZ0VuY3J5cHRpb25Nb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzc2VfYXdzX2ttc19rZXlfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNzZUF3c0ttc0tleUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXRhbG9nRW5jcnlwdGlvbk1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2F0YWxvZ0VuY3J5cHRpb25Nb2RlID0gdGhpcy5fY2F0YWxvZ0VuY3J5cHRpb25Nb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3NlQXdzS21zS2V5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3NlQXdzS21zS2V5SWQgPSB0aGlzLl9zc2VBd3NLbXNLZXlJZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhdGFsb2dFbmNyeXB0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NzZUF3c0ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jYXRhbG9nRW5jcnlwdGlvbk1vZGUgPSB2YWx1ZS5jYXRhbG9nRW5jcnlwdGlvbk1vZGU7XG4gICAgICB0aGlzLl9zc2VBd3NLbXNLZXlJZCA9IHZhbHVlLnNzZUF3c0ttc0tleUlkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhdGFsb2dfZW5jcnlwdGlvbl9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NhdGFsb2dFbmNyeXB0aW9uTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0VuY3J5cHRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZ19lbmNyeXB0aW9uX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhdGFsb2dFbmNyeXB0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0VuY3J5cHRpb25Nb2RlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhdGFsb2dFbmNyeXB0aW9uTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRhbG9nRW5jcnlwdGlvbk1vZGU7XG4gIH1cblxuICAvLyBzc2VfYXdzX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NlQXdzS21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNzZUF3c0ttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NlX2F3c19rbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2VBd3NLbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NlQXdzS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2VBd3NLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9zc2VBd3NLbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NlQXdzS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NlQXdzS21zS2V5SWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3Mge1xuICAvKipcbiAgKiBjb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2dsdWVfZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3MjY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0aW9uIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyNjb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRpb259XG4gICovXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb246IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbjtcbiAgLyoqXG4gICogZW5jcnlwdGlvbl9hdF9yZXN0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzI2VuY3J5cHRpb25fYXRfcmVzdCBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MjZW5jcnlwdGlvbl9hdF9yZXN0fVxuICAqL1xuICByZWFkb25seSBlbmNyeXB0aW9uQXRSZXN0OiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0aW9uOiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24pLFxuICAgIGVuY3J5cHRpb25fYXRfcmVzdDogZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0VG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQXRSZXN0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGlvbjoge1xuICAgICAgdmFsdWU6IGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGVuY3J5cHRpb25fYXRfcmVzdDoge1xuICAgICAgdmFsdWU6IGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbkF0UmVzdCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24gPSB0aGlzLl9jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5jcnlwdGlvbkF0UmVzdD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0aW9uQXRSZXN0ID0gdGhpcy5fZW5jcnlwdGlvbkF0UmVzdD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbkF0UmVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbkF0UmVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZW5jcnlwdGlvbkF0UmVzdDtcbiAgICB9XG4gIH1cblxuICAvLyBjb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbiA9IG5ldyBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRpb25cIik7XG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbih2YWx1ZTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9hdF9yZXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuY3J5cHRpb25BdFJlc3QgPSBuZXcgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZW5jcnlwdGlvbl9hdF9yZXN0XCIpO1xuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25BdFJlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25BdFJlc3Q7XG4gIH1cbiAgcHVibGljIHB1dEVuY3J5cHRpb25BdFJlc3QodmFsdWU6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25BdFJlc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQXRSZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25BdFJlc3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncyBhd3NfZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5nc31cbiovXG5leHBvcnQgY2xhc3MgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncyNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncyBhd3NfZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5nc30gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2dsdWVfZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3MnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSBjb25maWcuY2F0YWxvZ0lkO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzLmludGVybmFsVmFsdWUgPSBjb25maWcuZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNhdGFsb2dfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXRhbG9nSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhdGFsb2dJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2F0YWxvZ0lkKCkge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGFsb2dJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGRhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzID0gbmV3IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3NcIik7XG4gIHB1YmxpYyBnZXQgZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXREYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyh2YWx1ZTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NhdGFsb2dJZCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3M6IGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBjYXRhbG9nX2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jYXRhbG9nSWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5nczoge1xuICAgICAgICB2YWx1ZTogZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NUb0hjbFRlcnJhZm9ybSh0aGlzLl9kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=