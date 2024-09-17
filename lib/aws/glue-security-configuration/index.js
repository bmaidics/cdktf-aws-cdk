"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueSecurityConfiguration = exports.GlueSecurityConfigurationEncryptionConfigurationOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationToHclTerraform = exports.glueSecurityConfigurationEncryptionConfigurationToTerraform = exports.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationS3EncryptionToHclTerraform = exports.glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform = exports.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform = exports.glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform = exports.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform = exports.glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_encryption_mode: cdktf.stringToTerraform(struct.cloudwatchEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform = glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform;
function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudwatch_encryption_mode: {
            value: cdktf.stringToHclTerraform(struct.cloudwatchEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform = glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform;
class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryptionMode = this._cloudwatchEncryptionMode;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchEncryptionMode = undefined;
            this._kmsKeyArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchEncryptionMode = value.cloudwatchEncryptionMode;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }
    get cloudwatchEncryptionMode() {
        return this.getStringAttribute('cloudwatch_encryption_mode');
    }
    set cloudwatchEncryptionMode(value) {
        this._cloudwatchEncryptionMode = value;
    }
    resetCloudwatchEncryptionMode() {
        this._cloudwatchEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchEncryptionModeInput() {
        return this._cloudwatchEncryptionMode;
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
}
exports.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference = GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference[_a] = { fqn: "@cdktf/aws-cdk.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference", version: "0.0.0" };
function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct.jobBookmarksEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform = glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform;
function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        job_bookmarks_encryption_mode: {
            value: cdktf.stringToHclTerraform(struct.jobBookmarksEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform = glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform;
class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._jobBookmarksEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobBookmarksEncryptionMode = this._jobBookmarksEncryptionMode;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._jobBookmarksEncryptionMode = undefined;
            this._kmsKeyArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._jobBookmarksEncryptionMode = value.jobBookmarksEncryptionMode;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }
    get jobBookmarksEncryptionMode() {
        return this.getStringAttribute('job_bookmarks_encryption_mode');
    }
    set jobBookmarksEncryptionMode(value) {
        this._jobBookmarksEncryptionMode = value;
    }
    resetJobBookmarksEncryptionMode() {
        this._jobBookmarksEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jobBookmarksEncryptionModeInput() {
        return this._jobBookmarksEncryptionMode;
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
}
exports.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference = GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference[_b] = { fqn: "@cdktf/aws-cdk.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference", version: "0.0.0" };
function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        s3_encryption_mode: cdktf.stringToTerraform(struct.s3EncryptionMode),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform = glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform;
function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_encryption_mode: {
            value: cdktf.stringToHclTerraform(struct.s3EncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueSecurityConfigurationEncryptionConfigurationS3EncryptionToHclTerraform = glueSecurityConfigurationEncryptionConfigurationS3EncryptionToHclTerraform;
class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._s3EncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3EncryptionMode = this._s3EncryptionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKeyArn = undefined;
            this._s3EncryptionMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyArn = value.kmsKeyArn;
            this._s3EncryptionMode = value.s3EncryptionMode;
        }
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
    get s3EncryptionMode() {
        return this.getStringAttribute('s3_encryption_mode');
    }
    set s3EncryptionMode(value) {
        this._s3EncryptionMode = value;
    }
    resetS3EncryptionMode() {
        this._s3EncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3EncryptionModeInput() {
        return this._s3EncryptionMode;
    }
}
exports.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference = GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference[_c] = { fqn: "@cdktf/aws-cdk.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference", version: "0.0.0" };
function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_encryption: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct.cloudwatchEncryption),
        job_bookmarks_encryption: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct.jobBookmarksEncryption),
        s3_encryption: glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct.s3Encryption),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationToTerraform = glueSecurityConfigurationEncryptionConfigurationToTerraform;
function glueSecurityConfigurationEncryptionConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudwatch_encryption: {
            value: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform(struct.cloudwatchEncryption),
            isBlock: true,
            type: "list",
            storageClassType: "GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionList",
        },
        job_bookmarks_encryption: {
            value: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform(struct.jobBookmarksEncryption),
            isBlock: true,
            type: "list",
            storageClassType: "GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionList",
        },
        s3_encryption: {
            value: glueSecurityConfigurationEncryptionConfigurationS3EncryptionToHclTerraform(struct.s3Encryption),
            isBlock: true,
            type: "list",
            storageClassType: "GlueSecurityConfigurationEncryptionConfigurationS3EncryptionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.glueSecurityConfigurationEncryptionConfigurationToHclTerraform = glueSecurityConfigurationEncryptionConfigurationToHclTerraform;
class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // cloudwatch_encryption - computed: false, optional: false, required: true
        this._cloudwatchEncryption = new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(this, "cloudwatch_encryption");
        // job_bookmarks_encryption - computed: false, optional: false, required: true
        this._jobBookmarksEncryption = new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(this, "job_bookmarks_encryption");
        // s3_encryption - computed: false, optional: false, required: true
        this._s3Encryption = new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(this, "s3_encryption");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cloudwatchEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryption = this._cloudwatchEncryption?.internalValue;
        }
        if (this._jobBookmarksEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobBookmarksEncryption = this._jobBookmarksEncryption?.internalValue;
        }
        if (this._s3Encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchEncryption.internalValue = undefined;
            this._jobBookmarksEncryption.internalValue = undefined;
            this._s3Encryption.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchEncryption.internalValue = value.cloudwatchEncryption;
            this._jobBookmarksEncryption.internalValue = value.jobBookmarksEncryption;
            this._s3Encryption.internalValue = value.s3Encryption;
        }
    }
    get cloudwatchEncryption() {
        return this._cloudwatchEncryption;
    }
    putCloudwatchEncryption(value) {
        this._cloudwatchEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchEncryptionInput() {
        return this._cloudwatchEncryption.internalValue;
    }
    get jobBookmarksEncryption() {
        return this._jobBookmarksEncryption;
    }
    putJobBookmarksEncryption(value) {
        this._jobBookmarksEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get jobBookmarksEncryptionInput() {
        return this._jobBookmarksEncryption.internalValue;
    }
    get s3Encryption() {
        return this._s3Encryption;
    }
    putS3Encryption(value) {
        this._s3Encryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3EncryptionInput() {
        return this._s3Encryption.internalValue;
    }
}
exports.GlueSecurityConfigurationEncryptionConfigurationOutputReference = GlueSecurityConfigurationEncryptionConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationOutputReference[_d] = { fqn: "@cdktf/aws-cdk.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_security_configuration aws_glue_security_configuration}
*/
class GlueSecurityConfiguration extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a GlueSecurityConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueSecurityConfiguration to import
    * @param importFromId The id of the existing GlueSecurityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_security_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueSecurityConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_security_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_security_configuration aws_glue_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSecurityConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_security_configuration',
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
        // encryption_configuration - computed: false, optional: false, required: true
        this._encryptionConfiguration = new GlueSecurityConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
        this._id = config.id;
        this._name = config.name;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
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
    get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    putEncryptionConfiguration(value) {
        this._encryptionConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            encryption_configuration: glueSecurityConfigurationEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: glueSecurityConfigurationEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "GlueSecurityConfigurationEncryptionConfigurationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.GlueSecurityConfiguration = GlueSecurityConfiguration;
_e = JSII_RTTI_SYMBOL_1;
GlueSecurityConfiguration[_e] = { fqn: "@cdktf/aws-cdk.glueSecurityConfiguration.GlueSecurityConfiguration", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
GlueSecurityConfiguration.tfResourceType = "aws_glue_security_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2dsdWUtc2VjdXJpdHktY29uZmlndXJhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQWtDL0IsU0FBZ0IsK0VBQStFLENBQUMsTUFBbUs7SUFDalEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDckYsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3hELENBQUE7QUFDSCxDQUFDO0FBVEQsMEtBU0M7QUFHRCxTQUFnQixrRkFBa0YsQ0FBQyxNQUFtSztJQUNwUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLDBCQUEwQixFQUFFO1lBQzFCLEtBQUss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Q0osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0Qsd0JBQXdCLEVBQUU7Z0JBQ3hCLEtBQUssRUFBRSw4REFBOEQsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO2dCQUNsSCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxzREFBc0Q7YUFDekU7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXZJSCw4REF3SUM7OztBQXRJQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHdDQUFjLEdBQUcsaUNBQWlDLEFBQXBDLENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24jaWQgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9uI25hbWUgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9uI2VuY3J5cHRpb25fY29uZmlndXJhdGlvbiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uI2VuY3J5cHRpb25fY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24jY2xvdWR3YXRjaF9lbmNyeXB0aW9uX21vZGUgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNjbG91ZHdhdGNoX2VuY3J5cHRpb25fbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24ja21zX2tleV9hcm4gR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNrbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSB8IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfZW5jcnlwdGlvbl9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZSksXG4gICAga21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5QXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNsb3Vkd2F0Y2hfZW5jcnlwdGlvbl9tb2RlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGttc19rZXlfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlID0gdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5QXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUFybiA9IHRoaXMuX2ttc0tleUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUgPSB2YWx1ZS5jbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGU7XG4gICAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZS5rbXNLZXlBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9lbmNyeXB0aW9uX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2VuY3J5cHRpb25fbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlO1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24jam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uX21vZGUgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNqb2JfYm9va21hcmtzX2VuY3J5cHRpb25fbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2dsdWVfc2VjdXJpdHlfY29uZmlndXJhdGlvbiNrbXNfa2V5X2FybiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uI2ttc19rZXlfYXJufVxuICAqL1xuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSB8IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUpLFxuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgfCBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBqb2JfYm9va21hcmtzX2VuY3J5cHRpb25fbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGttc19rZXlfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUgPSB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ttc0tleUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlBcm4gPSB0aGlzLl9rbXNLZXlBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rbXNLZXlBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlID0gdmFsdWUuam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGU7XG4gICAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZS5rbXNLZXlBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlKCkge1xuICAgIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZTtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24ja21zX2tleV9hcm4gR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNrbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24jczNfZW5jcnlwdGlvbl9tb2RlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb24jczNfZW5jcnlwdGlvbl9tb2RlfVxuICAqL1xuICByZWFkb25seSBzM0VuY3J5cHRpb25Nb2RlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gICAgczNfZW5jcnlwdGlvbl9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzRW5jcnlwdGlvbk1vZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSB8IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAga21zX2tleV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgczNfZW5jcnlwdGlvbl9tb2RlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zM0VuY3J5cHRpb25Nb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rbXNLZXlBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5QXJuID0gdGhpcy5fa21zS2V5QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNFbmNyeXB0aW9uTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0VuY3J5cHRpb25Nb2RlID0gdGhpcy5fczNFbmNyeXB0aW9uTW9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzRW5jcnlwdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlLmttc0tleUFybjtcbiAgICAgIHRoaXMuX3MzRW5jcnlwdGlvbk1vZGUgPSB2YWx1ZS5zM0VuY3J5cHRpb25Nb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxuXG4gIC8vIHMzX2VuY3J5cHRpb25fbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0VuY3J5cHRpb25Nb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfZW5jcnlwdGlvbl9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM0VuY3J5cHRpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zM0VuY3J5cHRpb25Nb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNFbmNyeXB0aW9uTW9kZSgpIHtcbiAgICB0aGlzLl9zM0VuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb25Nb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzRW5jcnlwdGlvbk1vZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogY2xvdWR3YXRjaF9lbmNyeXB0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24jY2xvdWR3YXRjaF9lbmNyeXB0aW9uIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb24jY2xvdWR3YXRjaF9lbmNyeXB0aW9ufVxuICAqL1xuICByZWFkb25seSBjbG91ZHdhdGNoRW5jcnlwdGlvbjogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb247XG4gIC8qKlxuICAqIGpvYl9ib29rbWFya3NfZW5jcnlwdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9uI2pvYl9ib29rbWFya3NfZW5jcnlwdGlvbiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uI2pvYl9ib29rbWFya3NfZW5jcnlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgam9iQm9va21hcmtzRW5jcnlwdGlvbjogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbjtcbiAgLyoqXG4gICogczNfZW5jcnlwdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9uI3MzX2VuY3J5cHRpb24gR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiNzM19lbmNyeXB0aW9ufVxuICAqL1xuICByZWFkb25seSBzM0VuY3J5cHRpb246IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2VuY3J5cHRpb246IGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoRW5jcnlwdGlvbiksXG4gICAgam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uOiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5qb2JCb29rbWFya3NFbmNyeXB0aW9uKSxcbiAgICBzM19lbmNyeXB0aW9uOiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzRW5jcnlwdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjbG91ZHdhdGNoX2VuY3J5cHRpb246IHtcbiAgICAgIHZhbHVlOiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaEVuY3J5cHRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGpvYl9ib29rbWFya3NfZW5jcnlwdGlvbjoge1xuICAgICAgdmFsdWU6IGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmpvYkJvb2ttYXJrc0VuY3J5cHRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgczNfZW5jcnlwdGlvbjoge1xuICAgICAgdmFsdWU6IGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuczNFbmNyeXB0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaEVuY3J5cHRpb24gPSB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuam9iQm9va21hcmtzRW5jcnlwdGlvbiA9IHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0VuY3J5cHRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNFbmNyeXB0aW9uID0gdGhpcy5fczNFbmNyeXB0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xvdWR3YXRjaEVuY3J5cHRpb247XG4gICAgICB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5qb2JCb29rbWFya3NFbmNyeXB0aW9uO1xuICAgICAgdGhpcy5fczNFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zM0VuY3J5cHRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uID0gbmV3IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY2xvdWR3YXRjaF9lbmNyeXB0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q2xvdWR3YXRjaEVuY3J5cHRpb24odmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoRW5jcnlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2pvYkJvb2ttYXJrc0VuY3J5cHRpb24gPSBuZXcgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImpvYl9ib29rbWFya3NfZW5jcnlwdGlvblwiKTtcbiAgcHVibGljIGdldCBqb2JCb29rbWFya3NFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRKb2JCb29rbWFya3NFbmNyeXB0aW9uKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uKSB7XG4gICAgdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpvYkJvb2ttYXJrc0VuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gczNfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zM0VuY3J5cHRpb24gPSBuZXcgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiczNfZW5jcnlwdGlvblwiKTtcbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzRW5jcnlwdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UzNFbmNyeXB0aW9uKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb24pIHtcbiAgICB0aGlzLl9zM0VuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNFbmNyeXB0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2dsdWVfc2VjdXJpdHlfY29uZmlndXJhdGlvbiBhd3NfZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbiByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb24gdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2dsdWVfc2VjdXJpdHlfY29uZmlndXJhdGlvblwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2dsdWVfc2VjdXJpdHlfY29uZmlndXJhdGlvbiBhd3NfZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9ufSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=