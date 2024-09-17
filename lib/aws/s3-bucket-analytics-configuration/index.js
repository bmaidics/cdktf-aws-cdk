"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3BucketAnalyticsConfiguration = exports.S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisToHclTerraform = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform = exports.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToHclTerraform = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform = exports.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToHclTerraform = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform = exports.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform = exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform = exports.S3BucketAnalyticsConfigurationFilterOutputReference = exports.s3BucketAnalyticsConfigurationFilterToHclTerraform = exports.s3BucketAnalyticsConfigurationFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3BucketAnalyticsConfigurationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
    };
}
exports.s3BucketAnalyticsConfigurationFilterToTerraform = s3BucketAnalyticsConfigurationFilterToTerraform;
function s3BucketAnalyticsConfigurationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketAnalyticsConfigurationFilterToHclTerraform = s3BucketAnalyticsConfigurationFilterToHclTerraform;
class S3BucketAnalyticsConfigurationFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._prefix = undefined;
            this._tags = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._prefix = value.prefix;
            this._tags = value.tags;
        }
    }
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
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
}
exports.S3BucketAnalyticsConfigurationFilterOutputReference = S3BucketAnalyticsConfigurationFilterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
S3BucketAnalyticsConfigurationFilterOutputReference[_a] = { fqn: "@cdktf/aws-cdk.s3BucketAnalyticsConfiguration.S3BucketAnalyticsConfigurationFilterOutputReference", version: "0.0.0" };
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_account_id: cdktf.stringToTerraform(struct.bucketAccountId),
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        format: cdktf.stringToTerraform(struct.format),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform;
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_account_id: {
            value: cdktf.stringToHclTerraform(struct.bucketAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_arn: {
            value: cdktf.stringToHclTerraform(struct.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktf.stringToHclTerraform(struct.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform;
class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketAccountId = this._bucketAccountId;
        }
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketAccountId = undefined;
            this._bucketArn = undefined;
            this._format = undefined;
            this._prefix = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketAccountId = value.bucketAccountId;
            this._bucketArn = value.bucketArn;
            this._format = value.format;
            this._prefix = value.prefix;
        }
    }
    get bucketAccountId() {
        return this.getStringAttribute('bucket_account_id');
    }
    set bucketAccountId(value) {
        this._bucketAccountId = value;
    }
    resetBucketAccountId() {
        this._bucketAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketAccountIdInput() {
        return this._bucketAccountId;
    }
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketArnInput() {
        return this._bucketArn;
    }
    get format() {
        return this.getStringAttribute('format');
    }
    set format(value) {
        this._format = value;
    }
    resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format;
    }
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
}
exports.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference = S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.s3BucketAnalyticsConfiguration.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference", version: "0.0.0" };
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        s3_bucket_destination: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct.s3BucketDestination),
    };
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform;
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        s3_bucket_destination: {
            value: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform(struct.s3BucketDestination),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToHclTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToHclTerraform;
class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // s3_bucket_destination - computed: false, optional: false, required: true
        this._s3BucketDestination = new S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference(this, "s3_bucket_destination");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._s3BucketDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._s3BucketDestination.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._s3BucketDestination.internalValue = value.s3BucketDestination;
        }
    }
    get s3BucketDestination() {
        return this._s3BucketDestination;
    }
    putS3BucketDestination(value) {
        this._s3BucketDestination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3BucketDestinationInput() {
        return this._s3BucketDestination.internalValue;
    }
}
exports.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference = S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.s3BucketAnalyticsConfiguration.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference", version: "0.0.0" };
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        output_schema_version: cdktf.stringToTerraform(struct.outputSchemaVersion),
        destination: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct.destination),
    };
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform;
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        output_schema_version: {
            value: cdktf.stringToHclTerraform(struct.outputSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination: {
            value: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToHclTerraform(struct.destination),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToHclTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToHclTerraform;
class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // destination - computed: false, optional: false, required: true
        this._destination = new S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference(this, "destination");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._outputSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
        }
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._outputSchemaVersion = undefined;
            this._destination.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._outputSchemaVersion = value.outputSchemaVersion;
            this._destination.internalValue = value.destination;
        }
    }
    get outputSchemaVersion() {
        return this.getStringAttribute('output_schema_version');
    }
    set outputSchemaVersion(value) {
        this._outputSchemaVersion = value;
    }
    resetOutputSchemaVersion() {
        this._outputSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputSchemaVersionInput() {
        return this._outputSchemaVersion;
    }
    get destination() {
        return this._destination;
    }
    putDestination(value) {
        this._destination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination.internalValue;
    }
}
exports.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference = S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference;
_d = JSII_RTTI_SYMBOL_1;
S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference[_d] = { fqn: "@cdktf/aws-cdk.s3BucketAnalyticsConfiguration.S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference", version: "0.0.0" };
function s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        data_export: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct.dataExport),
    };
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform;
function s3BucketAnalyticsConfigurationStorageClassAnalysisToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        data_export: {
            value: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToHclTerraform(struct.dataExport),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketAnalyticsConfigurationStorageClassAnalysisToHclTerraform = s3BucketAnalyticsConfigurationStorageClassAnalysisToHclTerraform;
class S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // data_export - computed: false, optional: false, required: true
        this._dataExport = new S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference(this, "data_export");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dataExport?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataExport = this._dataExport?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dataExport.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dataExport.internalValue = value.dataExport;
        }
    }
    get dataExport() {
        return this._dataExport;
    }
    putDataExport(value) {
        this._dataExport.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataExportInput() {
        return this._dataExport.internalValue;
    }
}
exports.S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference = S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference;
_e = JSII_RTTI_SYMBOL_1;
S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference[_e] = { fqn: "@cdktf/aws-cdk.s3BucketAnalyticsConfiguration.S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_analytics_configuration aws_s3_bucket_analytics_configuration}
*/
class S3BucketAnalyticsConfiguration extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a S3BucketAnalyticsConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketAnalyticsConfiguration to import
    * @param importFromId The id of the existing S3BucketAnalyticsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_analytics_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketAnalyticsConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_analytics_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_analytics_configuration aws_s3_bucket_analytics_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAnalyticsConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_bucket_analytics_configuration',
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
        // filter - computed: false, optional: true, required: false
        this._filter = new S3BucketAnalyticsConfigurationFilterOutputReference(this, "filter");
        // storage_class_analysis - computed: false, optional: true, required: false
        this._storageClassAnalysis = new S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference(this, "storage_class_analysis");
        this._bucket = config.bucket;
        this._id = config.id;
        this._name = config.name;
        this._filter.internalValue = config.filter;
        this._storageClassAnalysis.internalValue = config.storageClassAnalysis;
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
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
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    get storageClassAnalysis() {
        return this._storageClassAnalysis;
    }
    putStorageClassAnalysis(value) {
        this._storageClassAnalysis.internalValue = value;
    }
    resetStorageClassAnalysis() {
        this._storageClassAnalysis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassAnalysisInput() {
        return this._storageClassAnalysis.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            filter: s3BucketAnalyticsConfigurationFilterToTerraform(this._filter.internalValue),
            storage_class_analysis: s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(this._storageClassAnalysis.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            bucket: {
                value: cdktf.stringToHclTerraform(this._bucket),
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
            filter: {
                value: s3BucketAnalyticsConfigurationFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "S3BucketAnalyticsConfigurationFilterList",
            },
            storage_class_analysis: {
                value: s3BucketAnalyticsConfigurationStorageClassAnalysisToHclTerraform(this._storageClassAnalysis.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "S3BucketAnalyticsConfigurationStorageClassAnalysisList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.S3BucketAnalyticsConfiguration = S3BucketAnalyticsConfiguration;
_f = JSII_RTTI_SYMBOL_1;
S3BucketAnalyticsConfiguration[_f] = { fqn: "@cdktf/aws-cdk.s3BucketAnalyticsConfiguration.S3BucketAnalyticsConfiguration", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
S3BucketAnalyticsConfiguration.tfResourceType = "aws_s3_bucket_analytics_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3MzLWJ1Y2tldC1hbmFseXRpY3MtY29uZmlndXJhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTRDL0IsU0FBZ0IsK0NBQStDLENBQUMsTUFBbUc7SUFDakssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzlELENBQUE7QUFDSCxDQUFDO0FBVEQsMEdBU0M7QUFHRCxTQUFnQixrREFBa0QsQ0FBQyxNQUFtRztJQUNwSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztR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QyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXZMSCx3RUF3TEM7OztBQXRMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDZDQUFjLEdBQUcsdUNBQXVDLEFBQTFDLENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNidWNrZXQgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uI2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNpZCBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNuYW1lIFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIGZpbHRlciBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9uI2ZpbHRlciBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24jZmlsdGVyfVxuICAqL1xuICByZWFkb25seSBmaWx0ZXI/OiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25GaWx0ZXI7XG4gIC8qKlxuICAqIHN0b3JhZ2VfY2xhc3NfYW5hbHlzaXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNzdG9yYWdlX2NsYXNzX2FuYWx5c2lzIFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbiNzdG9yYWdlX2NsYXNzX2FuYWx5c2lzfVxuICAqL1xuICByZWFkb25seSBzdG9yYWdlQ2xhc3NBbmFseXNpcz86IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzO1xufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25GaWx0ZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb24jcHJlZml4IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbiNwcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9uI3RhZ3MgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcmVmaXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGFnczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25GaWx0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbkZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWZpeCA9IHRoaXMuX3ByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFncyA9IHRoaXMuX3RhZ3M7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25GaWx0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZS5wcmVmaXg7XG4gICAgICB0aGlzLl90YWdzID0gdmFsdWUudGFncztcbiAgICB9XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZml4KCkge1xuICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydERlc3RpbmF0aW9uUzNCdWNrZXREZXN0aW5hdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNidWNrZXRfYWNjb3VudF9pZCBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24jYnVja2V0X2FjY291bnRfaWR9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldEFjY291bnRJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9uI2J1Y2tldF9hcm4gUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uI2J1Y2tldF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldEFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb24jZm9ybWF0IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbiNmb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IGZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9uI3ByZWZpeCBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24jcHJlZml4fVxuICAqL1xuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2FjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QWNjb3VudElkKSxcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25TM0J1Y2tldERlc3RpbmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25TM0J1Y2tldERlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25TM0J1Y2tldERlc3RpbmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBidWNrZXRfYWNjb3VudF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QWNjb3VudElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBidWNrZXRfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWNrZXRBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZm9ybWF0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydERlc3RpbmF0aW9uUzNCdWNrZXREZXN0aW5hdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0QWNjb3VudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1Y2tldEFjY291bnRJZCA9IHRoaXMuX2J1Y2tldEFjY291bnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1Y2tldEFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRBcm4gPSB0aGlzLl9idWNrZXRBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9ybWF0ID0gdGhpcy5fZm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWZpeCA9IHRoaXMuX3ByZWZpeDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydERlc3RpbmF0aW9uUzNCdWNrZXREZXN0aW5hdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldEFjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVja2V0QWNjb3VudElkID0gdmFsdWUuYnVja2V0QWNjb3VudElkO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWUuYnVja2V0QXJuO1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWUuZm9ybWF0O1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldEFjY291bnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0QWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldEFjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0QWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVja2V0QWNjb3VudElkKCkge1xuICAgIHRoaXMuX2J1Y2tldEFjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0QWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldEFjY291bnRJZDtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0QXJuO1xuICB9XG5cbiAgLy8gZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Zvcm1hdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZm9ybWF0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcm1hdCgpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZml4KCkge1xuICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvbiB7XG4gIC8qKlxuICAqIHMzX2J1Y2tldF9kZXN0aW5hdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9uI3MzX2J1Y2tldF9kZXN0aW5hdGlvbiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24jczNfYnVja2V0X2Rlc3RpbmF0aW9ufVxuICAqL1xuICByZWFkb25seSBzM0J1Y2tldERlc3RpbmF0aW9uOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydERlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgczNfYnVja2V0X2Rlc3RpbmF0aW9uOiBzM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzQnVja2V0RGVzdGluYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydERlc3RpbmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgczNfYnVja2V0X2Rlc3RpbmF0aW9uOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25TM0J1Y2tldERlc3RpbmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zM0J1Y2tldERlc3RpbmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25TM0J1Y2tldERlc3RpbmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3MzQnVja2V0RGVzdGluYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNCdWNrZXREZXN0aW5hdGlvbiA9IHRoaXMuX3MzQnVja2V0RGVzdGluYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3MzQnVja2V0RGVzdGluYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fczNCdWNrZXREZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuczNCdWNrZXREZXN0aW5hdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBzM19idWNrZXRfZGVzdGluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfczNCdWNrZXREZXN0aW5hdGlvbiA9IG5ldyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvblMzQnVja2V0RGVzdGluYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzM19idWNrZXRfZGVzdGluYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgczNCdWNrZXREZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fczNCdWNrZXREZXN0aW5hdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UzNCdWNrZXREZXN0aW5hdGlvbih2YWx1ZTogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25TM0J1Y2tldERlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5fczNCdWNrZXREZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQnVja2V0RGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNCdWNrZXREZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNvdXRwdXRfc2NoZW1hX3ZlcnNpb24gUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uI291dHB1dF9zY2hlbWFfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0U2NoZW1hVmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogZGVzdGluYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNkZXN0aW5hdGlvbiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24jZGVzdGluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydFRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydE91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvdXRwdXRfc2NoZW1hX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3V0cHV0U2NoZW1hVmVyc2lvbiksXG4gICAgZGVzdGluYXRpb246IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydERlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0T3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBvdXRwdXRfc2NoZW1hX3ZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm91dHB1dFNjaGVtYVZlcnNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9vdXRwdXRTY2hlbWFWZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm91dHB1dFNjaGVtYVZlcnNpb24gPSB0aGlzLl9vdXRwdXRTY2hlbWFWZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb24gPSB0aGlzLl9kZXN0aW5hdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX291dHB1dFNjaGVtYVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9vdXRwdXRTY2hlbWFWZXJzaW9uID0gdmFsdWUub3V0cHV0U2NoZW1hVmVyc2lvbjtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kZXN0aW5hdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBvdXRwdXRfc2NoZW1hX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3V0cHV0U2NoZW1hVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3V0cHV0U2NoZW1hVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ291dHB1dF9zY2hlbWFfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0cHV0U2NoZW1hVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3V0cHV0U2NoZW1hVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dHB1dFNjaGVtYVZlcnNpb24oKSB7XG4gICAgdGhpcy5fb3V0cHV0U2NoZW1hVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0U2NoZW1hVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRTY2hlbWFWZXJzaW9uO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb24gPSBuZXcgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNEYXRhRXhwb3J0RGVzdGluYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJkZXN0aW5hdGlvblwiKTtcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb247XG4gIH1cbiAgcHVibGljIHB1dERlc3RpbmF0aW9uKHZhbHVlOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnREZXN0aW5hdGlvbikge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpcyB7XG4gIC8qKlxuICAqIGRhdGFfZXhwb3J0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb24jZGF0YV9leHBvcnQgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uI2RhdGFfZXhwb3J0fVxuICAqL1xuICByZWFkb25seSBkYXRhRXhwb3J0OiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc1RvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YV9leHBvcnQ6IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydFRvVGVycmFmb3JtKHN0cnVjdCEuZGF0YUV4cG9ydCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc091dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkYXRhX2V4cG9ydDoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF0YUV4cG9ydCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzRGF0YUV4cG9ydExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kYXRhRXhwb3J0Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFFeHBvcnQgPSB0aGlzLl9kYXRhRXhwb3J0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uU3RvcmFnZUNsYXNzQW5hbHlzaXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYXRhRXhwb3J0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhdGFFeHBvcnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRhdGFFeHBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YV9leHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YUV4cG9ydCA9IG5ldyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJkYXRhX2V4cG9ydFwiKTtcbiAgcHVibGljIGdldCBkYXRhRXhwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhRXhwb3J0O1xuICB9XG4gIHB1YmxpYyBwdXREYXRhRXhwb3J0KHZhbHVlOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpc0RhdGFFeHBvcnQpIHtcbiAgICB0aGlzLl9kYXRhRXhwb3J0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YUV4cG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhRXhwb3J0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiBhd3NfczNfYnVja2V0X2FuYWx5dGljc19jb25maWd1cmF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb24gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbiNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19zM19idWNrZXRfYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb25cIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb24gYXdzX3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3MzX2J1Y2tldF9hbmFseXRpY3NfY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2J1Y2tldCA9IGNvbmZpZy5idWNrZXQ7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmZpbHRlcjtcbiAgICB0aGlzLl9zdG9yYWdlQ2xhc3NBbmFseXNpcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnN0b3JhZ2VDbGFzc0FuYWx5c2lzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIGZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWx0ZXIgPSBuZXcgUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZmlsdGVyXCIpO1xuICBwdWJsaWMgZ2V0IGZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG4gIHB1YmxpYyBwdXRGaWx0ZXIodmFsdWU6IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbkZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsdGVyKCkge1xuICAgIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWx0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzdG9yYWdlX2NsYXNzX2FuYWx5c2lzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VDbGFzc0FuYWx5c2lzID0gbmV3IFMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic3RvcmFnZV9jbGFzc19hbmFseXNpc1wiKTtcbiAgcHVibGljIGdldCBzdG9yYWdlQ2xhc3NBbmFseXNpcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZUNsYXNzQW5hbHlzaXM7XG4gIH1cbiAgcHVibGljIHB1dFN0b3JhZ2VDbGFzc0FuYWx5c2lzKHZhbHVlOiBTM0J1Y2tldEFuYWx5dGljc0NvbmZpZ3VyYXRpb25TdG9yYWdlQ2xhc3NBbmFseXNpcykge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzc0FuYWx5c2lzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlQ2xhc3NBbmFseXNpcygpIHtcbiAgICB0aGlzLl9zdG9yYWdlQ2xhc3NBbmFseXNpcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlQ2xhc3NBbmFseXNpc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlQ2xhc3NBbmFseXNpcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1Y2tldCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBmaWx0ZXI6IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbkZpbHRlclRvVGVycmFmb3JtKHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHN0b3JhZ2VfY2xhc3NfYW5hbHlzaXM6IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzVG9UZXJyYWZvcm0odGhpcy5fc3RvcmFnZUNsYXNzQW5hbHlzaXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBidWNrZXQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2J1Y2tldCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgdmFsdWU6IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbkZpbHRlclRvSGNsVGVycmFmb3JtKHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRBbmFseXRpY3NDb25maWd1cmF0aW9uRmlsdGVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHN0b3JhZ2VfY2xhc3NfYW5hbHlzaXM6IHtcbiAgICAgICAgdmFsdWU6IHMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzVG9IY2xUZXJyYWZvcm0odGhpcy5fc3RvcmFnZUNsYXNzQW5hbHlzaXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvblN0b3JhZ2VDbGFzc0FuYWx5c2lzTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19