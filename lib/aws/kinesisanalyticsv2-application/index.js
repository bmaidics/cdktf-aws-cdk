"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
Object.defineProperty(exports, "__esModule", { value: true });
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform = void 0;
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToHclTerraform = void 0;
exports.Kinesisanalyticsv2Application = exports.Kinesisanalyticsv2ApplicationTimeoutsOutputReference = exports.kinesisanalyticsv2ApplicationTimeoutsToHclTerraform = exports.kinesisanalyticsv2ApplicationTimeoutsToTerraform = exports.Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference = exports.kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToHclTerraform = exports.kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
        object_version: cdktf.stringToTerraform(struct.objectVersion),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_arn: {
            value: cdktf.stringToHclTerraform(struct.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_key: {
            value: cdktf.stringToHclTerraform(struct.fileKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_version: {
            value: cdktf.stringToHclTerraform(struct.objectVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._fileKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileKey = this._fileKey;
        }
        if (this._objectVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectVersion = this._objectVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._fileKey = undefined;
            this._objectVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._fileKey = value.fileKey;
            this._objectVersion = value.objectVersion;
        }
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
    get fileKey() {
        return this.getStringAttribute('file_key');
    }
    set fileKey(value) {
        this._fileKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileKeyInput() {
        return this._fileKey;
    }
    get objectVersion() {
        return this.getStringAttribute('object_version');
    }
    set objectVersion(value) {
        this._objectVersion = value;
    }
    resetObjectVersion() {
        this._objectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectVersionInput() {
        return this._objectVersion;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        text_content: cdktf.stringToTerraform(struct.textContent),
        s3_content_location: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct.s3ContentLocation),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        text_content: {
            value: cdktf.stringToHclTerraform(struct.textContent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_content_location: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform(struct.s3ContentLocation),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // s3_content_location - computed: false, optional: true, required: false
        this._s3ContentLocation = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(this, "s3_content_location");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._textContent !== undefined) {
            hasAnyValues = true;
            internalValueResult.textContent = this._textContent;
        }
        if (this._s3ContentLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ContentLocation = this._s3ContentLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._textContent = undefined;
            this._s3ContentLocation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._textContent = value.textContent;
            this._s3ContentLocation.internalValue = value.s3ContentLocation;
        }
    }
    get textContent() {
        return this.getStringAttribute('text_content');
    }
    set textContent(value) {
        this._textContent = value;
    }
    resetTextContent() {
        this._textContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get textContentInput() {
        return this._textContent;
    }
    get s3ContentLocation() {
        return this._s3ContentLocation;
    }
    putS3ContentLocation(value) {
        this._s3ContentLocation.internalValue = value;
    }
    resetS3ContentLocation() {
        this._s3ContentLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ContentLocationInput() {
        return this._s3ContentLocation.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference[_b] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        code_content_type: cdktf.stringToTerraform(struct.codeContentType),
        code_content: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct.codeContent),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        code_content_type: {
            value: cdktf.stringToHclTerraform(struct.codeContentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_content: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform(struct.codeContent),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // code_content - computed: false, optional: true, required: false
        this._codeContent = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(this, "code_content");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._codeContentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeContentType = this._codeContentType;
        }
        if (this._codeContent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeContent = this._codeContent?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._codeContentType = undefined;
            this._codeContent.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._codeContentType = value.codeContentType;
            this._codeContent.internalValue = value.codeContent;
        }
    }
    get codeContentType() {
        return this.getStringAttribute('code_content_type');
    }
    set codeContentType(value) {
        this._codeContentType = value;
    }
    // Temporarily expose input value. Use with caution.
    get codeContentTypeInput() {
        return this._codeContentType;
    }
    get codeContent() {
        return this._codeContent;
    }
    putCodeContent(value) {
        this._codeContent.internalValue = value;
    }
    resetCodeContent() {
        this._codeContent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeContentInput() {
        return this._codeContent.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        snapshots_enabled: cdktf.booleanToTerraform(struct.snapshotsEnabled),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        snapshots_enabled: {
            value: cdktf.booleanToHclTerraform(struct.snapshotsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._snapshotsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotsEnabled = this._snapshotsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._snapshotsEnabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._snapshotsEnabled = value.snapshotsEnabled;
        }
    }
    get snapshotsEnabled() {
        return this.getBooleanAttribute('snapshots_enabled');
    }
    set snapshotsEnabled(value) {
        this._snapshotsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotsEnabledInput() {
        return this._snapshotsEnabled;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference[_d] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        property_group_id: cdktf.stringToTerraform(struct.propertyGroupId),
        property_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct.propertyMap),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        property_group_id: {
            value: cdktf.stringToHclTerraform(struct.propertyGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_map: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.propertyMap),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._propertyGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyGroupId = this._propertyGroupId;
        }
        if (this._propertyMap !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyMap = this._propertyMap;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._propertyGroupId = undefined;
            this._propertyMap = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._propertyGroupId = value.propertyGroupId;
            this._propertyMap = value.propertyMap;
        }
    }
    get propertyGroupId() {
        return this.getStringAttribute('property_group_id');
    }
    set propertyGroupId(value) {
        this._propertyGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get propertyGroupIdInput() {
        return this._propertyGroupId;
    }
    get propertyMap() {
        return this.getStringMapAttribute('property_map');
    }
    set propertyMap(value) {
        this._propertyMap = value;
    }
    // Temporarily expose input value. Use with caution.
    get propertyMapInput() {
        return this._propertyMap;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference[_e] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference", version: "0.0.0" };
class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList extends cdktf.ComplexList {
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
        return new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList = Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList;
_f = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList[_f] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform, true)(struct.propertyGroup),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        property_group: {
            value: cdktf.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToHclTerraform, true)(struct.propertyGroup),
            isBlock: true,
            type: "set",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // property_group - computed: false, optional: false, required: true
        this._propertyGroup = new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupList(this, "property_group", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._propertyGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyGroup = this._propertyGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._propertyGroup.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._propertyGroup.internalValue = value.propertyGroup;
        }
    }
    get propertyGroup() {
        return this._propertyGroup;
    }
    putPropertyGroup(value) {
        this._propertyGroup.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get propertyGroupInput() {
        return this._propertyGroup.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference;
_g = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference[_g] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checkpoint_interval: cdktf.numberToTerraform(struct.checkpointInterval),
        checkpointing_enabled: cdktf.booleanToTerraform(struct.checkpointingEnabled),
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        min_pause_between_checkpoints: cdktf.numberToTerraform(struct.minPauseBetweenCheckpoints),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        checkpoint_interval: {
            value: cdktf.numberToHclTerraform(struct.checkpointInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        checkpointing_enabled: {
            value: cdktf.booleanToHclTerraform(struct.checkpointingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        configuration_type: {
            value: cdktf.stringToHclTerraform(struct.configurationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_pause_between_checkpoints: {
            value: cdktf.numberToHclTerraform(struct.minPauseBetweenCheckpoints),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._checkpointInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkpointInterval = this._checkpointInterval;
        }
        if (this._checkpointingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkpointingEnabled = this._checkpointingEnabled;
        }
        if (this._configurationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationType = this._configurationType;
        }
        if (this._minPauseBetweenCheckpoints !== undefined) {
            hasAnyValues = true;
            internalValueResult.minPauseBetweenCheckpoints = this._minPauseBetweenCheckpoints;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkpointInterval = undefined;
            this._checkpointingEnabled = undefined;
            this._configurationType = undefined;
            this._minPauseBetweenCheckpoints = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkpointInterval = value.checkpointInterval;
            this._checkpointingEnabled = value.checkpointingEnabled;
            this._configurationType = value.configurationType;
            this._minPauseBetweenCheckpoints = value.minPauseBetweenCheckpoints;
        }
    }
    get checkpointInterval() {
        return this.getNumberAttribute('checkpoint_interval');
    }
    set checkpointInterval(value) {
        this._checkpointInterval = value;
    }
    resetCheckpointInterval() {
        this._checkpointInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkpointIntervalInput() {
        return this._checkpointInterval;
    }
    get checkpointingEnabled() {
        return this.getBooleanAttribute('checkpointing_enabled');
    }
    set checkpointingEnabled(value) {
        this._checkpointingEnabled = value;
    }
    resetCheckpointingEnabled() {
        this._checkpointingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkpointingEnabledInput() {
        return this._checkpointingEnabled;
    }
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationTypeInput() {
        return this._configurationType;
    }
    get minPauseBetweenCheckpoints() {
        return this.getNumberAttribute('min_pause_between_checkpoints');
    }
    set minPauseBetweenCheckpoints(value) {
        this._minPauseBetweenCheckpoints = value;
    }
    resetMinPauseBetweenCheckpoints() {
        this._minPauseBetweenCheckpoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minPauseBetweenCheckpointsInput() {
        return this._minPauseBetweenCheckpoints;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference[_h] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        log_level: cdktf.stringToTerraform(struct.logLevel),
        metrics_level: cdktf.stringToTerraform(struct.metricsLevel),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        configuration_type: {
            value: cdktf.stringToHclTerraform(struct.configurationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_level: {
            value: cdktf.stringToHclTerraform(struct.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metrics_level: {
            value: cdktf.stringToHclTerraform(struct.metricsLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._configurationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationType = this._configurationType;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        if (this._metricsLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsLevel = this._metricsLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configurationType = undefined;
            this._logLevel = undefined;
            this._metricsLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configurationType = value.configurationType;
            this._logLevel = value.logLevel;
            this._metricsLevel = value.metricsLevel;
        }
    }
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationTypeInput() {
        return this._configurationType;
    }
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
    get metricsLevel() {
        return this.getStringAttribute('metrics_level');
    }
    set metricsLevel(value) {
        this._metricsLevel = value;
    }
    resetMetricsLevel() {
        this._metricsLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricsLevelInput() {
        return this._metricsLevel;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference[_j] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_scaling_enabled: cdktf.booleanToTerraform(struct.autoScalingEnabled),
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
        parallelism_per_kpu: cdktf.numberToTerraform(struct.parallelismPerKpu),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auto_scaling_enabled: {
            value: cdktf.booleanToHclTerraform(struct.autoScalingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        configuration_type: {
            value: cdktf.stringToHclTerraform(struct.configurationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelism: {
            value: cdktf.numberToHclTerraform(struct.parallelism),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        parallelism_per_kpu: {
            value: cdktf.numberToHclTerraform(struct.parallelismPerKpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._autoScalingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingEnabled = this._autoScalingEnabled;
        }
        if (this._configurationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationType = this._configurationType;
        }
        if (this._parallelism !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelism = this._parallelism;
        }
        if (this._parallelismPerKpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelismPerKpu = this._parallelismPerKpu;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoScalingEnabled = undefined;
            this._configurationType = undefined;
            this._parallelism = undefined;
            this._parallelismPerKpu = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoScalingEnabled = value.autoScalingEnabled;
            this._configurationType = value.configurationType;
            this._parallelism = value.parallelism;
            this._parallelismPerKpu = value.parallelismPerKpu;
        }
    }
    get autoScalingEnabled() {
        return this.getBooleanAttribute('auto_scaling_enabled');
    }
    set autoScalingEnabled(value) {
        this._autoScalingEnabled = value;
    }
    resetAutoScalingEnabled() {
        this._autoScalingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoScalingEnabledInput() {
        return this._autoScalingEnabled;
    }
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationTypeInput() {
        return this._configurationType;
    }
    get parallelism() {
        return this.getNumberAttribute('parallelism');
    }
    set parallelism(value) {
        this._parallelism = value;
    }
    resetParallelism() {
        this._parallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelismInput() {
        return this._parallelism;
    }
    get parallelismPerKpu() {
        return this.getNumberAttribute('parallelism_per_kpu');
    }
    set parallelismPerKpu(value) {
        this._parallelismPerKpu = value;
    }
    resetParallelismPerKpu() {
        this._parallelismPerKpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelismPerKpuInput() {
        return this._parallelismPerKpu;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference[_k] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checkpoint_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct.checkpointConfiguration),
        monitoring_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct.monitoringConfiguration),
        parallelism_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct.parallelismConfiguration),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        checkpoint_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform(struct.checkpointConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationList",
        },
        monitoring_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform(struct.monitoringConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationList",
        },
        parallelism_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform(struct.parallelismConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // checkpoint_configuration - computed: false, optional: true, required: false
        this._checkpointConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(this, "checkpoint_configuration");
        // monitoring_configuration - computed: false, optional: true, required: false
        this._monitoringConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
        // parallelism_configuration - computed: false, optional: true, required: false
        this._parallelismConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(this, "parallelism_configuration");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._checkpointConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkpointConfiguration = this._checkpointConfiguration?.internalValue;
        }
        if (this._monitoringConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
        }
        if (this._parallelismConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelismConfiguration = this._parallelismConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkpointConfiguration.internalValue = undefined;
            this._monitoringConfiguration.internalValue = undefined;
            this._parallelismConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkpointConfiguration.internalValue = value.checkpointConfiguration;
            this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
            this._parallelismConfiguration.internalValue = value.parallelismConfiguration;
        }
    }
    get checkpointConfiguration() {
        return this._checkpointConfiguration;
    }
    putCheckpointConfiguration(value) {
        this._checkpointConfiguration.internalValue = value;
    }
    resetCheckpointConfiguration() {
        this._checkpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkpointConfigurationInput() {
        return this._checkpointConfiguration.internalValue;
    }
    get monitoringConfiguration() {
        return this._monitoringConfiguration;
    }
    putMonitoringConfiguration(value) {
        this._monitoringConfiguration.internalValue = value;
    }
    resetMonitoringConfiguration() {
        this._monitoringConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringConfigurationInput() {
        return this._monitoringConfiguration.internalValue;
    }
    get parallelismConfiguration() {
        return this._parallelismConfiguration;
    }
    putParallelismConfiguration(value) {
        this._parallelismConfiguration.internalValue = value;
    }
    resetParallelismConfiguration() {
        this._parallelismConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelismConfigurationInput() {
        return this._parallelismConfiguration.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference;
_l = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference[_l] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_restore_type: cdktf.stringToTerraform(struct.applicationRestoreType),
        snapshot_name: cdktf.stringToTerraform(struct.snapshotName),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        application_restore_type: {
            value: cdktf.stringToHclTerraform(struct.applicationRestoreType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snapshot_name: {
            value: cdktf.stringToHclTerraform(struct.snapshotName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._applicationRestoreType !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationRestoreType = this._applicationRestoreType;
        }
        if (this._snapshotName !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotName = this._snapshotName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationRestoreType = undefined;
            this._snapshotName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationRestoreType = value.applicationRestoreType;
            this._snapshotName = value.snapshotName;
        }
    }
    get applicationRestoreType() {
        return this.getStringAttribute('application_restore_type');
    }
    set applicationRestoreType(value) {
        this._applicationRestoreType = value;
    }
    resetApplicationRestoreType() {
        this._applicationRestoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationRestoreTypeInput() {
        return this._applicationRestoreType;
    }
    get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }
    set snapshotName(value) {
        this._snapshotName = value;
    }
    resetSnapshotName() {
        this._snapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotNameInput() {
        return this._snapshotName;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference;
_m = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference[_m] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_non_restored_state: cdktf.booleanToTerraform(struct.allowNonRestoredState),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_non_restored_state: {
            value: cdktf.booleanToHclTerraform(struct.allowNonRestoredState),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._allowNonRestoredState !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowNonRestoredState = this._allowNonRestoredState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowNonRestoredState = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowNonRestoredState = value.allowNonRestoredState;
        }
    }
    get allowNonRestoredState() {
        return this.getBooleanAttribute('allow_non_restored_state');
    }
    set allowNonRestoredState(value) {
        this._allowNonRestoredState = value;
    }
    resetAllowNonRestoredState() {
        this._allowNonRestoredState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowNonRestoredStateInput() {
        return this._allowNonRestoredState;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference;
_o = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference[_o] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_restore_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct.applicationRestoreConfiguration),
        flink_run_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct.flinkRunConfiguration),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        application_restore_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToHclTerraform(struct.applicationRestoreConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationList",
        },
        flink_run_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToHclTerraform(struct.flinkRunConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // application_restore_configuration - computed: false, optional: true, required: false
        this._applicationRestoreConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference(this, "application_restore_configuration");
        // flink_run_configuration - computed: false, optional: true, required: false
        this._flinkRunConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference(this, "flink_run_configuration");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._applicationRestoreConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationRestoreConfiguration = this._applicationRestoreConfiguration?.internalValue;
        }
        if (this._flinkRunConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.flinkRunConfiguration = this._flinkRunConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationRestoreConfiguration.internalValue = undefined;
            this._flinkRunConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationRestoreConfiguration.internalValue = value.applicationRestoreConfiguration;
            this._flinkRunConfiguration.internalValue = value.flinkRunConfiguration;
        }
    }
    get applicationRestoreConfiguration() {
        return this._applicationRestoreConfiguration;
    }
    putApplicationRestoreConfiguration(value) {
        this._applicationRestoreConfiguration.internalValue = value;
    }
    resetApplicationRestoreConfiguration() {
        this._applicationRestoreConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationRestoreConfigurationInput() {
        return this._applicationRestoreConfiguration.internalValue;
    }
    get flinkRunConfiguration() {
        return this._flinkRunConfiguration;
    }
    putFlinkRunConfiguration(value) {
        this._flinkRunConfiguration.internalValue = value;
    }
    resetFlinkRunConfiguration() {
        this._flinkRunConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get flinkRunConfigurationInput() {
        return this._flinkRunConfiguration.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference;
_p = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference[_p] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        count: cdktf.numberToTerraform(struct.count),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        count: {
            value: cdktf.numberToHclTerraform(struct.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference extends cdktf.ComplexObject {
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
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._count = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._count = value.count;
        }
    }
    get count() {
        return this.getNumberAttribute('count');
    }
    set count(value) {
        this._count = value;
    }
    resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countInput() {
        return this._count;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference;
_q = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference[_q] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
        }
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference;
_r = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference[_r] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input_lambda_processor: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct.inputLambdaProcessor),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        input_lambda_processor: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToHclTerraform(struct.inputLambdaProcessor),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // input_lambda_processor - computed: false, optional: false, required: true
        this._inputLambdaProcessor = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference(this, "input_lambda_processor");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._inputLambdaProcessor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputLambdaProcessor = this._inputLambdaProcessor?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._inputLambdaProcessor.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._inputLambdaProcessor.internalValue = value.inputLambdaProcessor;
        }
    }
    get inputLambdaProcessor() {
        return this._inputLambdaProcessor;
    }
    putInputLambdaProcessor(value) {
        this._inputLambdaProcessor.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get inputLambdaProcessorInput() {
        return this._inputLambdaProcessor.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference;
_s = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference[_s] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mapping: {
            value: cdktf.stringToHclTerraform(struct.mapping),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql_type: {
            value: cdktf.stringToHclTerraform(struct.sqlType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference extends cdktf.ComplexObject {
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
        if (this._mapping !== undefined) {
            hasAnyValues = true;
            internalValueResult.mapping = this._mapping;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sqlType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlType = this._sqlType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mapping = undefined;
            this._name = undefined;
            this._sqlType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mapping = value.mapping;
            this._name = value.name;
            this._sqlType = value.sqlType;
        }
    }
    get mapping() {
        return this.getStringAttribute('mapping');
    }
    set mapping(value) {
        this._mapping = value;
    }
    resetMapping() {
        this._mapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mappingInput() {
        return this._mapping;
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
    get sqlType() {
        return this.getStringAttribute('sql_type');
    }
    set sqlType(value) {
        this._sqlType = value;
    }
    // Temporarily expose input value. Use with caution.
    get sqlTypeInput() {
        return this._sqlType;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference;
_t = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference[_t] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference", version: "0.0.0" };
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList extends cdktf.ComplexList {
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
        return new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList;
_u = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList[_u] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_column_delimiter: {
            value: cdktf.stringToHclTerraform(struct.recordColumnDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_row_delimiter: {
            value: cdktf.stringToHclTerraform(struct.recordRowDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._recordColumnDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
        }
        if (this._recordRowDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordColumnDelimiter = undefined;
            this._recordRowDelimiter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordColumnDelimiter = value.recordColumnDelimiter;
            this._recordRowDelimiter = value.recordRowDelimiter;
        }
    }
    get recordColumnDelimiter() {
        return this.getStringAttribute('record_column_delimiter');
    }
    set recordColumnDelimiter(value) {
        this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordColumnDelimiterInput() {
        return this._recordColumnDelimiter;
    }
    get recordRowDelimiter() {
        return this.getStringAttribute('record_row_delimiter');
    }
    set recordRowDelimiter(value) {
        this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordRowDelimiterInput() {
        return this._recordRowDelimiter;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference;
_v = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference[_v] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_row_path: {
            value: cdktf.stringToHclTerraform(struct.recordRowPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._recordRowPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordRowPath = this._recordRowPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordRowPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordRowPath = value.recordRowPath;
        }
    }
    get recordRowPath() {
        return this.getStringAttribute('record_row_path');
    }
    set recordRowPath(value) {
        this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordRowPathInput() {
        return this._recordRowPath;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference;
_w = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference[_w] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct.csvMappingParameters),
        json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct.jsonMappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        csv_mapping_parameters: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct.csvMappingParameters),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersList",
        },
        json_mapping_parameters: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct.jsonMappingParameters),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // csv_mapping_parameters - computed: false, optional: true, required: false
        this._csvMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this, "csv_mapping_parameters");
        // json_mapping_parameters - computed: false, optional: true, required: false
        this._jsonMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this, "json_mapping_parameters");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._csvMappingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvMappingParameters = this._csvMappingParameters?.internalValue;
        }
        if (this._jsonMappingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonMappingParameters = this._jsonMappingParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csvMappingParameters.internalValue = undefined;
            this._jsonMappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csvMappingParameters.internalValue = value.csvMappingParameters;
            this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
        }
    }
    get csvMappingParameters() {
        return this._csvMappingParameters;
    }
    putCsvMappingParameters(value) {
        this._csvMappingParameters.internalValue = value;
    }
    resetCsvMappingParameters() {
        this._csvMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csvMappingParametersInput() {
        return this._csvMappingParameters.internalValue;
    }
    get jsonMappingParameters() {
        return this._jsonMappingParameters;
    }
    putJsonMappingParameters(value) {
        this._jsonMappingParameters.internalValue = value;
    }
    resetJsonMappingParameters() {
        this._jsonMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsonMappingParametersInput() {
        return this._jsonMappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference;
_x = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference[_x] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
        mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct.mappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_format_type: {
            value: cdktf.stringToHclTerraform(struct.recordFormatType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mapping_parameters: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToHclTerraform(struct.mappingParameters),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // mapping_parameters - computed: false, optional: false, required: true
        this._mappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordFormatType !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        if (this._mappingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordFormatType = undefined;
            this._mappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordFormatType = value.recordFormatType;
            this._mappingParameters.internalValue = value.mappingParameters;
        }
    }
    get recordFormatType() {
        return this.getStringAttribute('record_format_type');
    }
    set recordFormatType(value) {
        this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordFormatTypeInput() {
        return this._recordFormatType;
    }
    get mappingParameters() {
        return this._mappingParameters;
    }
    putMappingParameters(value) {
        this._mappingParameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get mappingParametersInput() {
        return this._mappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference;
_y = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference[_y] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform, true)(struct.recordColumn),
        record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct.recordFormat),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_encoding: {
            value: cdktf.stringToHclTerraform(struct.recordEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_column: {
            value: cdktf.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToHclTerraform, true)(struct.recordColumn),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList",
        },
        record_format: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToHclTerraform(struct.recordFormat),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // record_column - computed: false, optional: false, required: true
        this._recordColumn = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnList(this, "record_column", false);
        // record_format - computed: false, optional: false, required: true
        this._recordFormat = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference(this, "record_format");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordEncoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordEncoding = this._recordEncoding;
        }
        if (this._recordColumn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordColumn = this._recordColumn?.internalValue;
        }
        if (this._recordFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordFormat = this._recordFormat?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordEncoding = undefined;
            this._recordColumn.internalValue = undefined;
            this._recordFormat.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordEncoding = value.recordEncoding;
            this._recordColumn.internalValue = value.recordColumn;
            this._recordFormat.internalValue = value.recordFormat;
        }
    }
    get recordEncoding() {
        return this.getStringAttribute('record_encoding');
    }
    set recordEncoding(value) {
        this._recordEncoding = value;
    }
    resetRecordEncoding() {
        this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordEncodingInput() {
        return this._recordEncoding;
    }
    get recordColumn() {
        return this._recordColumn;
    }
    putRecordColumn(value) {
        this._recordColumn.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordColumnInput() {
        return this._recordColumn.internalValue;
    }
    get recordFormat() {
        return this._recordFormat;
    }
    putRecordFormat(value) {
        this._recordFormat.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordFormatInput() {
        return this._recordFormat.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference;
_z = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference[_z] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input_starting_position: cdktf.stringToTerraform(struct.inputStartingPosition),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        input_starting_position: {
            value: cdktf.stringToHclTerraform(struct.inputStartingPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._inputStartingPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputStartingPosition = this._inputStartingPosition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputStartingPosition = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputStartingPosition = value.inputStartingPosition;
        }
    }
    get inputStartingPosition() {
        return this.getStringAttribute('input_starting_position');
    }
    set inputStartingPosition(value) {
        this._inputStartingPosition = value;
    }
    resetInputStartingPosition() {
        this._inputStartingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputStartingPositionInput() {
        return this._inputStartingPosition;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference[_0] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference", version: "0.0.0" };
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList extends cdktf.ComplexList {
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
        return new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList;
_1 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList[_1] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
        }
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference[_2] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
        }
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference[_3] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name_prefix: cdktf.stringToTerraform(struct.namePrefix),
        input_parallelism: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct.inputParallelism),
        input_processing_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct.inputProcessingConfiguration),
        input_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct.inputSchema),
        input_starting_position_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform, true)(struct.inputStartingPositionConfiguration),
        kinesis_firehose_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct.kinesisFirehoseInput),
        kinesis_streams_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct.kinesisStreamsInput),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name_prefix: {
            value: cdktf.stringToHclTerraform(struct.namePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_parallelism: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToHclTerraform(struct.inputParallelism),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismList",
        },
        input_processing_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToHclTerraform(struct.inputProcessingConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationList",
        },
        input_schema: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToHclTerraform(struct.inputSchema),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaList",
        },
        input_starting_position_configuration: {
            value: cdktf.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToHclTerraform, true)(struct.inputStartingPositionConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList",
        },
        kinesis_firehose_input: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToHclTerraform(struct.kinesisFirehoseInput),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputList",
        },
        kinesis_streams_input: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToHclTerraform(struct.kinesisStreamsInput),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // input_parallelism - computed: false, optional: true, required: false
        this._inputParallelism = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference(this, "input_parallelism");
        // input_processing_configuration - computed: false, optional: true, required: false
        this._inputProcessingConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference(this, "input_processing_configuration");
        // input_schema - computed: false, optional: false, required: true
        this._inputSchema = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference(this, "input_schema");
        // input_starting_position_configuration - computed: false, optional: true, required: false
        this._inputStartingPositionConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationList(this, "input_starting_position_configuration", false);
        // kinesis_firehose_input - computed: false, optional: true, required: false
        this._kinesisFirehoseInput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference(this, "kinesis_firehose_input");
        // kinesis_streams_input - computed: false, optional: true, required: false
        this._kinesisStreamsInput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference(this, "kinesis_streams_input");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.namePrefix = this._namePrefix;
        }
        if (this._inputParallelism?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputParallelism = this._inputParallelism?.internalValue;
        }
        if (this._inputProcessingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputProcessingConfiguration = this._inputProcessingConfiguration?.internalValue;
        }
        if (this._inputSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputSchema = this._inputSchema?.internalValue;
        }
        if (this._inputStartingPositionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputStartingPositionConfiguration = this._inputStartingPositionConfiguration?.internalValue;
        }
        if (this._kinesisFirehoseInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehoseInput = this._kinesisFirehoseInput?.internalValue;
        }
        if (this._kinesisStreamsInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamsInput = this._kinesisStreamsInput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._namePrefix = undefined;
            this._inputParallelism.internalValue = undefined;
            this._inputProcessingConfiguration.internalValue = undefined;
            this._inputSchema.internalValue = undefined;
            this._inputStartingPositionConfiguration.internalValue = undefined;
            this._kinesisFirehoseInput.internalValue = undefined;
            this._kinesisStreamsInput.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._namePrefix = value.namePrefix;
            this._inputParallelism.internalValue = value.inputParallelism;
            this._inputProcessingConfiguration.internalValue = value.inputProcessingConfiguration;
            this._inputSchema.internalValue = value.inputSchema;
            this._inputStartingPositionConfiguration.internalValue = value.inputStartingPositionConfiguration;
            this._kinesisFirehoseInput.internalValue = value.kinesisFirehoseInput;
            this._kinesisStreamsInput.internalValue = value.kinesisStreamsInput;
        }
    }
    // in_app_stream_names - computed: true, optional: false, required: false
    get inAppStreamNames() {
        return this.getListAttribute('in_app_stream_names');
    }
    // input_id - computed: true, optional: false, required: false
    get inputId() {
        return this.getStringAttribute('input_id');
    }
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    get inputParallelism() {
        return this._inputParallelism;
    }
    putInputParallelism(value) {
        this._inputParallelism.internalValue = value;
    }
    resetInputParallelism() {
        this._inputParallelism.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputParallelismInput() {
        return this._inputParallelism.internalValue;
    }
    get inputProcessingConfiguration() {
        return this._inputProcessingConfiguration;
    }
    putInputProcessingConfiguration(value) {
        this._inputProcessingConfiguration.internalValue = value;
    }
    resetInputProcessingConfiguration() {
        this._inputProcessingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputProcessingConfigurationInput() {
        return this._inputProcessingConfiguration.internalValue;
    }
    get inputSchema() {
        return this._inputSchema;
    }
    putInputSchema(value) {
        this._inputSchema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get inputSchemaInput() {
        return this._inputSchema.internalValue;
    }
    get inputStartingPositionConfiguration() {
        return this._inputStartingPositionConfiguration;
    }
    putInputStartingPositionConfiguration(value) {
        this._inputStartingPositionConfiguration.internalValue = value;
    }
    resetInputStartingPositionConfiguration() {
        this._inputStartingPositionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputStartingPositionConfigurationInput() {
        return this._inputStartingPositionConfiguration.internalValue;
    }
    get kinesisFirehoseInput() {
        return this._kinesisFirehoseInput;
    }
    putKinesisFirehoseInput(value) {
        this._kinesisFirehoseInput.internalValue = value;
    }
    resetKinesisFirehoseInput() {
        this._kinesisFirehoseInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisFirehoseInputInput() {
        return this._kinesisFirehoseInput.internalValue;
    }
    get kinesisStreamsInput() {
        return this._kinesisStreamsInput;
    }
    putKinesisStreamsInput(value) {
        this._kinesisStreamsInput.internalValue = value;
    }
    resetKinesisStreamsInput() {
        this._kinesisStreamsInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisStreamsInputInput() {
        return this._kinesisStreamsInput.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference;
_4 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference[_4] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_format_type: {
            value: cdktf.stringToHclTerraform(struct.recordFormatType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference extends cdktf.ComplexObject {
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
        if (this._recordFormatType !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordFormatType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordFormatType = value.recordFormatType;
        }
    }
    get recordFormatType() {
        return this.getStringAttribute('record_format_type');
    }
    set recordFormatType(value) {
        this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordFormatTypeInput() {
        return this._recordFormatType;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference[_5] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
        }
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference[_6] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
        }
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference[_7] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
        }
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference[_8] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        destination_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct.destinationSchema),
        kinesis_firehose_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct.kinesisFirehoseOutput),
        kinesis_streams_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct.kinesisStreamsOutput),
        lambda_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct.lambdaOutput),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_schema: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToHclTerraform(struct.destinationSchema),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaList",
        },
        kinesis_firehose_output: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToHclTerraform(struct.kinesisFirehoseOutput),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputList",
        },
        kinesis_streams_output: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToHclTerraform(struct.kinesisStreamsOutput),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputList",
        },
        lambda_output: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToHclTerraform(struct.lambdaOutput),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // destination_schema - computed: false, optional: false, required: true
        this._destinationSchema = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference(this, "destination_schema");
        // kinesis_firehose_output - computed: false, optional: true, required: false
        this._kinesisFirehoseOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference(this, "kinesis_firehose_output");
        // kinesis_streams_output - computed: false, optional: true, required: false
        this._kinesisStreamsOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference(this, "kinesis_streams_output");
        // lambda_output - computed: false, optional: true, required: false
        this._lambdaOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference(this, "lambda_output");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._destinationSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationSchema = this._destinationSchema?.internalValue;
        }
        if (this._kinesisFirehoseOutput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehoseOutput = this._kinesisFirehoseOutput?.internalValue;
        }
        if (this._kinesisStreamsOutput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamsOutput = this._kinesisStreamsOutput?.internalValue;
        }
        if (this._lambdaOutput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaOutput = this._lambdaOutput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._destinationSchema.internalValue = undefined;
            this._kinesisFirehoseOutput.internalValue = undefined;
            this._kinesisStreamsOutput.internalValue = undefined;
            this._lambdaOutput.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._destinationSchema.internalValue = value.destinationSchema;
            this._kinesisFirehoseOutput.internalValue = value.kinesisFirehoseOutput;
            this._kinesisStreamsOutput.internalValue = value.kinesisStreamsOutput;
            this._lambdaOutput.internalValue = value.lambdaOutput;
        }
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
    // output_id - computed: true, optional: false, required: false
    get outputId() {
        return this.getStringAttribute('output_id');
    }
    get destinationSchema() {
        return this._destinationSchema;
    }
    putDestinationSchema(value) {
        this._destinationSchema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationSchemaInput() {
        return this._destinationSchema.internalValue;
    }
    get kinesisFirehoseOutput() {
        return this._kinesisFirehoseOutput;
    }
    putKinesisFirehoseOutput(value) {
        this._kinesisFirehoseOutput.internalValue = value;
    }
    resetKinesisFirehoseOutput() {
        this._kinesisFirehoseOutput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisFirehoseOutputInput() {
        return this._kinesisFirehoseOutput.internalValue;
    }
    get kinesisStreamsOutput() {
        return this._kinesisStreamsOutput;
    }
    putKinesisStreamsOutput(value) {
        this._kinesisStreamsOutput.internalValue = value;
    }
    resetKinesisStreamsOutput() {
        this._kinesisStreamsOutput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisStreamsOutputInput() {
        return this._kinesisStreamsOutput.internalValue;
    }
    get lambdaOutput() {
        return this._lambdaOutput;
    }
    putLambdaOutput(value) {
        this._lambdaOutput.internalValue = value;
    }
    resetLambdaOutput() {
        this._lambdaOutput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaOutputInput() {
        return this._lambdaOutput.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference[_9] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference", version: "0.0.0" };
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList extends cdktf.ComplexList {
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
        return new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList;
_10 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList[_10] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mapping: {
            value: cdktf.stringToHclTerraform(struct.mapping),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql_type: {
            value: cdktf.stringToHclTerraform(struct.sqlType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference extends cdktf.ComplexObject {
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
        if (this._mapping !== undefined) {
            hasAnyValues = true;
            internalValueResult.mapping = this._mapping;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sqlType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlType = this._sqlType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mapping = undefined;
            this._name = undefined;
            this._sqlType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mapping = value.mapping;
            this._name = value.name;
            this._sqlType = value.sqlType;
        }
    }
    get mapping() {
        return this.getStringAttribute('mapping');
    }
    set mapping(value) {
        this._mapping = value;
    }
    resetMapping() {
        this._mapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mappingInput() {
        return this._mapping;
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
    get sqlType() {
        return this.getStringAttribute('sql_type');
    }
    set sqlType(value) {
        this._sqlType = value;
    }
    // Temporarily expose input value. Use with caution.
    get sqlTypeInput() {
        return this._sqlType;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference;
_11 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference[_11] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference", version: "0.0.0" };
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList extends cdktf.ComplexList {
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
        return new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList;
_12 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList[_12] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_column_delimiter: {
            value: cdktf.stringToHclTerraform(struct.recordColumnDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_row_delimiter: {
            value: cdktf.stringToHclTerraform(struct.recordRowDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._recordColumnDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
        }
        if (this._recordRowDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordColumnDelimiter = undefined;
            this._recordRowDelimiter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordColumnDelimiter = value.recordColumnDelimiter;
            this._recordRowDelimiter = value.recordRowDelimiter;
        }
    }
    get recordColumnDelimiter() {
        return this.getStringAttribute('record_column_delimiter');
    }
    set recordColumnDelimiter(value) {
        this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordColumnDelimiterInput() {
        return this._recordColumnDelimiter;
    }
    get recordRowDelimiter() {
        return this.getStringAttribute('record_row_delimiter');
    }
    set recordRowDelimiter(value) {
        this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordRowDelimiterInput() {
        return this._recordRowDelimiter;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference;
_13 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference[_13] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_row_path: {
            value: cdktf.stringToHclTerraform(struct.recordRowPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._recordRowPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordRowPath = this._recordRowPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordRowPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordRowPath = value.recordRowPath;
        }
    }
    get recordRowPath() {
        return this.getStringAttribute('record_row_path');
    }
    set recordRowPath(value) {
        this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordRowPathInput() {
        return this._recordRowPath;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference;
_14 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference[_14] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct.csvMappingParameters),
        json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct.jsonMappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        csv_mapping_parameters: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct.csvMappingParameters),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersList",
        },
        json_mapping_parameters: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct.jsonMappingParameters),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // csv_mapping_parameters - computed: false, optional: true, required: false
        this._csvMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this, "csv_mapping_parameters");
        // json_mapping_parameters - computed: false, optional: true, required: false
        this._jsonMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this, "json_mapping_parameters");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._csvMappingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvMappingParameters = this._csvMappingParameters?.internalValue;
        }
        if (this._jsonMappingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonMappingParameters = this._jsonMappingParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csvMappingParameters.internalValue = undefined;
            this._jsonMappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csvMappingParameters.internalValue = value.csvMappingParameters;
            this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
        }
    }
    get csvMappingParameters() {
        return this._csvMappingParameters;
    }
    putCsvMappingParameters(value) {
        this._csvMappingParameters.internalValue = value;
    }
    resetCsvMappingParameters() {
        this._csvMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csvMappingParametersInput() {
        return this._csvMappingParameters.internalValue;
    }
    get jsonMappingParameters() {
        return this._jsonMappingParameters;
    }
    putJsonMappingParameters(value) {
        this._jsonMappingParameters.internalValue = value;
    }
    resetJsonMappingParameters() {
        this._jsonMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsonMappingParametersInput() {
        return this._jsonMappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference;
_15 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference[_15] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
        mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct.mappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_format_type: {
            value: cdktf.stringToHclTerraform(struct.recordFormatType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mapping_parameters: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToHclTerraform(struct.mappingParameters),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // mapping_parameters - computed: false, optional: false, required: true
        this._mappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordFormatType !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        if (this._mappingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordFormatType = undefined;
            this._mappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordFormatType = value.recordFormatType;
            this._mappingParameters.internalValue = value.mappingParameters;
        }
    }
    get recordFormatType() {
        return this.getStringAttribute('record_format_type');
    }
    set recordFormatType(value) {
        this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordFormatTypeInput() {
        return this._recordFormatType;
    }
    get mappingParameters() {
        return this._mappingParameters;
    }
    putMappingParameters(value) {
        this._mappingParameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get mappingParametersInput() {
        return this._mappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference;
_16 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference[_16] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform, true)(struct.recordColumn),
        record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct.recordFormat),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        record_encoding: {
            value: cdktf.stringToHclTerraform(struct.recordEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_column: {
            value: cdktf.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToHclTerraform, true)(struct.recordColumn),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList",
        },
        record_format: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToHclTerraform(struct.recordFormat),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // record_column - computed: false, optional: false, required: true
        this._recordColumn = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnList(this, "record_column", false);
        // record_format - computed: false, optional: false, required: true
        this._recordFormat = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference(this, "record_format");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordEncoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordEncoding = this._recordEncoding;
        }
        if (this._recordColumn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordColumn = this._recordColumn?.internalValue;
        }
        if (this._recordFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordFormat = this._recordFormat?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordEncoding = undefined;
            this._recordColumn.internalValue = undefined;
            this._recordFormat.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordEncoding = value.recordEncoding;
            this._recordColumn.internalValue = value.recordColumn;
            this._recordFormat.internalValue = value.recordFormat;
        }
    }
    get recordEncoding() {
        return this.getStringAttribute('record_encoding');
    }
    set recordEncoding(value) {
        this._recordEncoding = value;
    }
    resetRecordEncoding() {
        this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordEncodingInput() {
        return this._recordEncoding;
    }
    get recordColumn() {
        return this._recordColumn;
    }
    putRecordColumn(value) {
        this._recordColumn.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordColumnInput() {
        return this._recordColumn.internalValue;
    }
    get recordFormat() {
        return this._recordFormat;
    }
    putRecordFormat(value) {
        this._recordFormat.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get recordFormatInput() {
        return this._recordFormat.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference;
_17 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference[_17] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_arn: {
            value: cdktf.stringToHclTerraform(struct.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_key: {
            value: cdktf.stringToHclTerraform(struct.fileKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._fileKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileKey = this._fileKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._fileKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._fileKey = value.fileKey;
        }
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
    get fileKey() {
        return this.getStringAttribute('file_key');
    }
    set fileKey(value) {
        this._fileKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileKeyInput() {
        return this._fileKey;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference;
_18 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference[_18] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        reference_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct.referenceSchema),
        s3_reference_data_source: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct.s3ReferenceDataSource),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        table_name: {
            value: cdktf.stringToHclTerraform(struct.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reference_schema: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToHclTerraform(struct.referenceSchema),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaList",
        },
        s3_reference_data_source: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToHclTerraform(struct.s3ReferenceDataSource),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // reference_schema - computed: false, optional: false, required: true
        this._referenceSchema = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference(this, "reference_schema");
        // s3_reference_data_source - computed: false, optional: false, required: true
        this._s3ReferenceDataSource = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference(this, "s3_reference_data_source");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._referenceSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceSchema = this._referenceSchema?.internalValue;
        }
        if (this._s3ReferenceDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ReferenceDataSource = this._s3ReferenceDataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._tableName = undefined;
            this._referenceSchema.internalValue = undefined;
            this._s3ReferenceDataSource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._tableName = value.tableName;
            this._referenceSchema.internalValue = value.referenceSchema;
            this._s3ReferenceDataSource.internalValue = value.s3ReferenceDataSource;
        }
    }
    // reference_id - computed: true, optional: false, required: false
    get referenceId() {
        return this.getStringAttribute('reference_id');
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
    get referenceSchema() {
        return this._referenceSchema;
    }
    putReferenceSchema(value) {
        this._referenceSchema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get referenceSchemaInput() {
        return this._referenceSchema.internalValue;
    }
    get s3ReferenceDataSource() {
        return this._s3ReferenceDataSource;
    }
    putS3ReferenceDataSource(value) {
        this._s3ReferenceDataSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3ReferenceDataSourceInput() {
        return this._s3ReferenceDataSource.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference;
_19 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference[_19] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct.input),
        output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform, true)(struct.output),
        reference_data_source: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct.referenceDataSource),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        input: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToHclTerraform(struct.input),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputList",
        },
        output: {
            value: cdktf.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToHclTerraform, true)(struct.output),
            isBlock: true,
            type: "set",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList",
        },
        reference_data_source: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToHclTerraform(struct.referenceDataSource),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // input - computed: false, optional: true, required: false
        this._input = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference(this, "input");
        // output - computed: false, optional: true, required: false
        this._output = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputList(this, "output", true);
        // reference_data_source - computed: false, optional: true, required: false
        this._referenceDataSource = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference(this, "reference_data_source");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._input?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.input = this._input?.internalValue;
        }
        if (this._output?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.output = this._output?.internalValue;
        }
        if (this._referenceDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceDataSource = this._referenceDataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._input.internalValue = undefined;
            this._output.internalValue = undefined;
            this._referenceDataSource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._input.internalValue = value.input;
            this._output.internalValue = value.output;
            this._referenceDataSource.internalValue = value.referenceDataSource;
        }
    }
    get input() {
        return this._input;
    }
    putInput(value) {
        this._input.internalValue = value;
    }
    resetInput() {
        this._input.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputInput() {
        return this._input.internalValue;
    }
    get output() {
        return this._output;
    }
    putOutput(value) {
        this._output.internalValue = value;
    }
    resetOutput() {
        this._output.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputInput() {
        return this._output.internalValue;
    }
    get referenceDataSource() {
        return this._referenceDataSource;
    }
    putReferenceDataSource(value) {
        this._referenceDataSource.internalValue = value;
    }
    resetReferenceDataSource() {
        this._referenceDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get referenceDataSourceInput() {
        return this._referenceDataSource.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference;
_20 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference[_20] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subnetIds),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        security_group_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }
    get securityGroupIds() {
        return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
    }
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    get subnetIds() {
        return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
    }
    // vpc_configuration_id - computed: true, optional: false, required: false
    get vpcConfigurationId() {
        return this.getStringAttribute('vpc_configuration_id');
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference;
_21 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference[_21] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_code_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct.applicationCodeConfiguration),
        application_snapshot_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct.applicationSnapshotConfiguration),
        environment_properties: kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct.environmentProperties),
        flink_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct.flinkApplicationConfiguration),
        run_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct.runConfiguration),
        sql_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct.sqlApplicationConfiguration),
        vpc_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        application_code_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform(struct.applicationCodeConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationList",
        },
        application_snapshot_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform(struct.applicationSnapshotConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationList",
        },
        environment_properties: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform(struct.environmentProperties),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesList",
        },
        flink_application_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform(struct.flinkApplicationConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationList",
        },
        run_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToHclTerraform(struct.runConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationList",
        },
        sql_application_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform(struct.sqlApplicationConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationList",
        },
        vpc_configuration: {
            value: kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToHclTerraform(struct.vpcConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform;
class Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // application_code_configuration - computed: false, optional: false, required: true
        this._applicationCodeConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(this, "application_code_configuration");
        // application_snapshot_configuration - computed: false, optional: true, required: false
        this._applicationSnapshotConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(this, "application_snapshot_configuration");
        // environment_properties - computed: false, optional: true, required: false
        this._environmentProperties = new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(this, "environment_properties");
        // flink_application_configuration - computed: false, optional: true, required: false
        this._flinkApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(this, "flink_application_configuration");
        // run_configuration - computed: false, optional: true, required: false
        this._runConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference(this, "run_configuration");
        // sql_application_configuration - computed: false, optional: true, required: false
        this._sqlApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference(this, "sql_application_configuration");
        // vpc_configuration - computed: false, optional: true, required: false
        this._vpcConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._applicationCodeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationCodeConfiguration = this._applicationCodeConfiguration?.internalValue;
        }
        if (this._applicationSnapshotConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationSnapshotConfiguration = this._applicationSnapshotConfiguration?.internalValue;
        }
        if (this._environmentProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentProperties = this._environmentProperties?.internalValue;
        }
        if (this._flinkApplicationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.flinkApplicationConfiguration = this._flinkApplicationConfiguration?.internalValue;
        }
        if (this._runConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runConfiguration = this._runConfiguration?.internalValue;
        }
        if (this._sqlApplicationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlApplicationConfiguration = this._sqlApplicationConfiguration?.internalValue;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationCodeConfiguration.internalValue = undefined;
            this._applicationSnapshotConfiguration.internalValue = undefined;
            this._environmentProperties.internalValue = undefined;
            this._flinkApplicationConfiguration.internalValue = undefined;
            this._runConfiguration.internalValue = undefined;
            this._sqlApplicationConfiguration.internalValue = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationCodeConfiguration.internalValue = value.applicationCodeConfiguration;
            this._applicationSnapshotConfiguration.internalValue = value.applicationSnapshotConfiguration;
            this._environmentProperties.internalValue = value.environmentProperties;
            this._flinkApplicationConfiguration.internalValue = value.flinkApplicationConfiguration;
            this._runConfiguration.internalValue = value.runConfiguration;
            this._sqlApplicationConfiguration.internalValue = value.sqlApplicationConfiguration;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }
    get applicationCodeConfiguration() {
        return this._applicationCodeConfiguration;
    }
    putApplicationCodeConfiguration(value) {
        this._applicationCodeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get applicationCodeConfigurationInput() {
        return this._applicationCodeConfiguration.internalValue;
    }
    get applicationSnapshotConfiguration() {
        return this._applicationSnapshotConfiguration;
    }
    putApplicationSnapshotConfiguration(value) {
        this._applicationSnapshotConfiguration.internalValue = value;
    }
    resetApplicationSnapshotConfiguration() {
        this._applicationSnapshotConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSnapshotConfigurationInput() {
        return this._applicationSnapshotConfiguration.internalValue;
    }
    get environmentProperties() {
        return this._environmentProperties;
    }
    putEnvironmentProperties(value) {
        this._environmentProperties.internalValue = value;
    }
    resetEnvironmentProperties() {
        this._environmentProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentPropertiesInput() {
        return this._environmentProperties.internalValue;
    }
    get flinkApplicationConfiguration() {
        return this._flinkApplicationConfiguration;
    }
    putFlinkApplicationConfiguration(value) {
        this._flinkApplicationConfiguration.internalValue = value;
    }
    resetFlinkApplicationConfiguration() {
        this._flinkApplicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get flinkApplicationConfigurationInput() {
        return this._flinkApplicationConfiguration.internalValue;
    }
    get runConfiguration() {
        return this._runConfiguration;
    }
    putRunConfiguration(value) {
        this._runConfiguration.internalValue = value;
    }
    resetRunConfiguration() {
        this._runConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runConfigurationInput() {
        return this._runConfiguration.internalValue;
    }
    get sqlApplicationConfiguration() {
        return this._sqlApplicationConfiguration;
    }
    putSqlApplicationConfiguration(value) {
        this._sqlApplicationConfiguration.internalValue = value;
    }
    resetSqlApplicationConfiguration() {
        this._sqlApplicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqlApplicationConfigurationInput() {
        return this._sqlApplicationConfiguration.internalValue;
    }
    get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    putVpcConfiguration(value) {
        this._vpcConfiguration.internalValue = value;
    }
    resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference;
_22 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference[_22] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_stream_arn: cdktf.stringToTerraform(struct.logStreamArn),
    };
}
exports.kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform = kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform;
function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        log_stream_arn: {
            value: cdktf.stringToHclTerraform(struct.logStreamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToHclTerraform = kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToHclTerraform;
class Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logStreamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logStreamArn = this._logStreamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._logStreamArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._logStreamArn = value.logStreamArn;
        }
    }
    // cloudwatch_logging_option_id - computed: true, optional: false, required: false
    get cloudwatchLoggingOptionId() {
        return this.getStringAttribute('cloudwatch_logging_option_id');
    }
    get logStreamArn() {
        return this.getStringAttribute('log_stream_arn');
    }
    set logStreamArn(value) {
        this._logStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamArnInput() {
        return this._logStreamArn;
    }
}
exports.Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference = Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference;
_23 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference[_23] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference", version: "0.0.0" };
function kinesisanalyticsv2ApplicationTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
exports.kinesisanalyticsv2ApplicationTimeoutsToTerraform = kinesisanalyticsv2ApplicationTimeoutsToTerraform;
function kinesisanalyticsv2ApplicationTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.kinesisanalyticsv2ApplicationTimeoutsToHclTerraform = kinesisanalyticsv2ApplicationTimeoutsToHclTerraform;
class Kinesisanalyticsv2ApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._create !== undefined) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
exports.Kinesisanalyticsv2ApplicationTimeoutsOutputReference = Kinesisanalyticsv2ApplicationTimeoutsOutputReference;
_24 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationTimeoutsOutputReference[_24] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesisanalyticsv2_application aws_kinesisanalyticsv2_application}
*/
class Kinesisanalyticsv2Application extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Kinesisanalyticsv2Application resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Kinesisanalyticsv2Application to import
    * @param importFromId The id of the existing Kinesisanalyticsv2Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Kinesisanalyticsv2Application to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kinesisanalyticsv2_application", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesisanalyticsv2_application aws_kinesisanalyticsv2_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kinesisanalyticsv2_application',
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
        // application_configuration - computed: false, optional: true, required: false
        this._applicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(this, "application_configuration");
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new Kinesisanalyticsv2ApplicationTimeoutsOutputReference(this, "timeouts");
        this._description = config.description;
        this._forceStop = config.forceStop;
        this._id = config.id;
        this._name = config.name;
        this._runtimeEnvironment = config.runtimeEnvironment;
        this._serviceExecutionRole = config.serviceExecutionRole;
        this._startApplication = config.startApplication;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._applicationConfiguration.internalValue = config.applicationConfiguration;
        this._cloudwatchLoggingOptions.internalValue = config.cloudwatchLoggingOptions;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // create_timestamp - computed: true, optional: false, required: false
    get createTimestamp() {
        return this.getStringAttribute('create_timestamp');
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get forceStop() {
        return this.getBooleanAttribute('force_stop');
    }
    set forceStop(value) {
        this._forceStop = value;
    }
    resetForceStop() {
        this._forceStop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceStopInput() {
        return this._forceStop;
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
    // last_update_timestamp - computed: true, optional: false, required: false
    get lastUpdateTimestamp() {
        return this.getStringAttribute('last_update_timestamp');
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
    get runtimeEnvironment() {
        return this.getStringAttribute('runtime_environment');
    }
    set runtimeEnvironment(value) {
        this._runtimeEnvironment = value;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeEnvironmentInput() {
        return this._runtimeEnvironment;
    }
    get serviceExecutionRole() {
        return this.getStringAttribute('service_execution_role');
    }
    set serviceExecutionRole(value) {
        this._serviceExecutionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceExecutionRoleInput() {
        return this._serviceExecutionRole;
    }
    get startApplication() {
        return this.getBooleanAttribute('start_application');
    }
    set startApplication(value) {
        this._startApplication = value;
    }
    resetStartApplication() {
        this._startApplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startApplicationInput() {
        return this._startApplication;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getNumberAttribute('version_id');
    }
    get applicationConfiguration() {
        return this._applicationConfiguration;
    }
    putApplicationConfiguration(value) {
        this._applicationConfiguration.internalValue = value;
    }
    resetApplicationConfiguration() {
        this._applicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationConfigurationInput() {
        return this._applicationConfiguration.internalValue;
    }
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_stop: cdktf.booleanToTerraform(this._forceStop),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            runtime_environment: cdktf.stringToTerraform(this._runtimeEnvironment),
            service_execution_role: cdktf.stringToTerraform(this._serviceExecutionRole),
            start_application: cdktf.booleanToTerraform(this._startApplication),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(this._applicationConfiguration.internalValue),
            cloudwatch_logging_options: kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions.internalValue),
            timeouts: kinesisanalyticsv2ApplicationTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            force_stop: {
                value: cdktf.booleanToHclTerraform(this._forceStop),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            runtime_environment: {
                value: cdktf.stringToHclTerraform(this._runtimeEnvironment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_execution_role: {
                value: cdktf.stringToHclTerraform(this._serviceExecutionRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start_application: {
                value: cdktf.booleanToHclTerraform(this._startApplication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            application_configuration: {
                value: kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform(this._applicationConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationList",
            },
            cloudwatch_logging_options: {
                value: kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToHclTerraform(this._cloudwatchLoggingOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsList",
            },
            timeouts: {
                value: kinesisanalyticsv2ApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "Kinesisanalyticsv2ApplicationTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Kinesisanalyticsv2Application = Kinesisanalyticsv2Application;
_25 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2Application[_25] = { fqn: "@cdktf/aws-cdk.kinesisanalyticsv2Application.Kinesisanalyticsv2Application", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
Kinesisanalyticsv2Application.tfResourceType = "aws_kinesisanalyticsv2_application";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2tpbmVzaXNhbmFseXRpY3N2Mi1hcHBsaWNhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0EsK0JBQStCO0FBOEUvQixTQUFnQix3SEFBd0gsQ0FBQyxNQUFxUDtJQUM1WCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDL0QsQ0FBQTtBQUNILENBQUM7QUFWRCw0UEFVQztBQUdELFNBQWdCLDJIQUEySCxDQUFDLE1BQXFQO0lBQy9YLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7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LEVBQUUsbUVBQW1FLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztnQkFDeEgsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsMkRBQTJEO2FBQzlFO1lBQ0QsMEJBQTBCLEVBQUU7Z0JBQzFCLEtBQUssRUFBRSxtRUFBbUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO2dCQUN4SCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSwyREFBMkQ7YUFDOUU7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUN4RixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSx1Q0FBdUM7YUFDMUQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXJYSCxzRUFzWEM7OztBQXBYQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDRDQUFjLEdBQUcsb0NBQW9DLEFBQXZDLENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2Rlc2NyaXB0aW9uIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2ZvcmNlX3N0b3AgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jZm9yY2Vfc3RvcH1cbiAgKi9cbiAgcmVhZG9ubHkgZm9yY2VTdG9wPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jaWQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNuYW1lIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3J1bnRpbWVfZW52aXJvbm1lbnQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcnVudGltZV9lbnZpcm9ubWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgcnVudGltZUVudmlyb25tZW50OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNzZXJ2aWNlX2V4ZWN1dGlvbl9yb2xlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3NlcnZpY2VfZXhlY3V0aW9uX3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VFeGVjdXRpb25Sb2xlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNzdGFydF9hcHBsaWNhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNzdGFydF9hcHBsaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhcnRBcHBsaWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3RhZ3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiN0YWdzX2FsbCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIGFwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNhcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucztcbiAgLyoqXG4gICogdGltZW91dHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiN0aW1lb3V0cyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiN0aW1lb3V0c31cbiAgKi9cbiAgcmVhZG9ubHkgdGltZW91dHM/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvblRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2J1Y2tldF9hcm4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jYnVja2V0X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0QXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNmaWxlX2tleSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNmaWxlX2tleX1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsZUtleTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jb2JqZWN0X3ZlcnNpb24gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jb2JqZWN0X3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IG9iamVjdFZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRBcm4pLFxuICAgIGZpbGVfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGVLZXkpLFxuICAgIG9iamVjdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdFZlcnNpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYnVja2V0X2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmaWxlX2tleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZmlsZUtleSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb2JqZWN0X3ZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdFZlcnNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0QXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1Y2tldEFybiA9IHRoaXMuX2J1Y2tldEFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZUtleSA9IHRoaXMuX2ZpbGVLZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vYmplY3RWZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9iamVjdFZlcnNpb24gPSB0aGlzLl9vYmplY3RWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGVLZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vYmplY3RWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXRBcm4gPSB2YWx1ZS5idWNrZXRBcm47XG4gICAgICB0aGlzLl9maWxlS2V5ID0gdmFsdWUuZmlsZUtleTtcbiAgICAgIHRoaXMuX29iamVjdFZlcnNpb24gPSB2YWx1ZS5vYmplY3RWZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0QXJuO1xuICB9XG5cbiAgLy8gZmlsZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWxlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZUtleTtcbiAgfVxuXG4gIC8vIG9iamVjdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29iamVjdFZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9iamVjdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3RfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0VmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqZWN0VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9iamVjdFZlcnNpb24oKSB7XG4gICAgdGhpcy5fb2JqZWN0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2JqZWN0VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RWZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3RleHRfY29udGVudCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiN0ZXh0X2NvbnRlbnR9XG4gICovXG4gIHJlYWRvbmx5IHRleHRDb250ZW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiBzM19jb250ZW50X2xvY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jczNfY29udGVudF9sb2NhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNzM19jb250ZW50X2xvY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBzM0NvbnRlbnRMb2NhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGV4dF9jb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRleHRDb250ZW50KSxcbiAgICBzM19jb250ZW50X2xvY2F0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zM0NvbnRlbnRMb2NhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0ZXh0X2NvbnRlbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRleHRDb250ZW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzM19jb250ZW50X2xvY2F0aW9uOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuczNDb250ZW50TG9jYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3RleHRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRleHRDb250ZW50ID0gdGhpcy5fdGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0NvbnRlbnRMb2NhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0NvbnRlbnRMb2NhdGlvbiA9IHRoaXMuX3MzQ29udGVudExvY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90ZXh0Q29udGVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzQ29udGVudExvY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3RleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG4gICAgICB0aGlzLl9zM0NvbnRlbnRMb2NhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuczNDb250ZW50TG9jYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gdGV4dF9jb250ZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RleHRDb250ZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0ZXh0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RleHRfY29udGVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGV4dENvbnRlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHRDb250ZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGV4dENvbnRlbnQoKSB7XG4gICAgdGhpcy5fdGV4dENvbnRlbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRleHRDb250ZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRDb250ZW50O1xuICB9XG5cbiAgLy8gczNfY29udGVudF9sb2NhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0NvbnRlbnRMb2NhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiczNfY29udGVudF9sb2NhdGlvblwiKTtcbiAgcHVibGljIGdldCBzM0NvbnRlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fczNDb250ZW50TG9jYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFMzQ29udGVudExvY2F0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uKSB7XG4gICAgdGhpcy5fczNDb250ZW50TG9jYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzQ29udGVudExvY2F0aW9uKCkge1xuICAgIHRoaXMuX3MzQ29udGVudExvY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQ29udGVudExvY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQ29udGVudExvY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2NvZGVfY29udGVudF90eXBlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2NvZGVfY29udGVudF90eXBlfVxuICAqL1xuICByZWFkb25seSBjb2RlQ29udGVudFR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogY29kZV9jb250ZW50IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jY29kZV9jb250ZW50IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2NvZGVfY29udGVudH1cbiAgKi9cbiAgcmVhZG9ubHkgY29kZUNvbnRlbnQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2RlX2NvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29udGVudFR5cGUpLFxuICAgIGNvZGVfY29udGVudDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVDb250ZW50KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvZGVfY29udGVudF90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29udGVudFR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvZGVfY29udGVudDoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29udGVudCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50TGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29kZUNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVDb250ZW50VHlwZSA9IHRoaXMuX2NvZGVDb250ZW50VHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvZGVDb250ZW50Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVDb250ZW50ID0gdGhpcy5fY29kZUNvbnRlbnQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudFR5cGUgPSB2YWx1ZS5jb2RlQ29udGVudFR5cGU7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZUNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY29kZV9jb250ZW50X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29kZUNvbnRlbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb2RlQ29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlX2NvbnRlbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29kZUNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2RlQ29udGVudFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZUNvbnRlbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVDb250ZW50VHlwZTtcbiAgfVxuXG4gIC8vIGNvZGVfY29udGVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlQ29udGVudCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNvZGVfY29udGVudFwiKTtcbiAgcHVibGljIGdldCBjb2RlQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZUNvbnRlbnQ7XG4gIH1cbiAgcHVibGljIHB1dENvZGVDb250ZW50KHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudCkge1xuICAgIHRoaXMuX2NvZGVDb250ZW50LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlQ29udGVudCgpIHtcbiAgICB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2RlQ29udGVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jc25hcHNob3RzX2VuYWJsZWQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jc25hcHNob3RzX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IHNuYXBzaG90c0VuYWJsZWQ6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzbmFwc2hvdHNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RzRW5hYmxlZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBzbmFwc2hvdHNfZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNuYXBzaG90c0VuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NuYXBzaG90c0VuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc25hcHNob3RzRW5hYmxlZCA9IHRoaXMuX3NuYXBzaG90c0VuYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc25hcHNob3RzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc25hcHNob3RzRW5hYmxlZCA9IHZhbHVlLnNuYXBzaG90c0VuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc25hcHNob3RzX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc25hcHNob3RzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc25hcHNob3RzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzbmFwc2hvdHNfZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc25hcHNob3RzRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc25hcHNob3RzRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbmFwc2hvdHNFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90c0VuYWJsZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3Byb3BlcnR5X2dyb3VwX2lkIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3Byb3BlcnR5X2dyb3VwX2lkfVxuICAqL1xuICByZWFkb25seSBwcm9wZXJ0eUdyb3VwSWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3Byb3BlcnR5X21hcCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNwcm9wZXJ0eV9tYXB9XG4gICovXG4gIHJlYWRvbmx5IHByb3BlcnR5TWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcGVydHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvcGVydHlHcm91cElkKSxcbiAgICBwcm9wZXJ0eV9tYXA6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvcGVydHlNYXApLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcm9wZXJ0eV9ncm91cF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJvcGVydHlHcm91cElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwcm9wZXJ0eV9tYXA6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnR5TWFwKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1Byb3BlcnR5R3JvdXAgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Byb3BlcnR5R3JvdXBJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9wZXJ0eUdyb3VwSWQgPSB0aGlzLl9wcm9wZXJ0eUdyb3VwSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9wZXJ0eU1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9wZXJ0eU1hcCA9IHRoaXMuX3Byb3BlcnR5TWFwO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3BlcnR5R3JvdXBJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3BlcnR5TWFwID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3BlcnR5R3JvdXBJZCA9IHZhbHVlLnByb3BlcnR5R3JvdXBJZDtcbiAgICAgIHRoaXMuX3Byb3BlcnR5TWFwID0gdmFsdWUucHJvcGVydHlNYXA7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvcGVydHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJvcGVydHlHcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm9wZXJ0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9wZXJ0eV9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvcGVydHlHcm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9wZXJ0eUdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvcGVydHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5R3JvdXBJZDtcbiAgfVxuXG4gIC8vIHByb3BlcnR5X21hcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm9wZXJ0eU1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHByb3BlcnR5TWFwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgncHJvcGVydHlfbWFwJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9wZXJ0eU1hcCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3Byb3BlcnR5TWFwID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3BlcnR5TWFwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5TWFwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1Byb3BlcnR5R3JvdXBMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1Byb3BlcnR5R3JvdXBbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICogcHJvcGVydHlfZ3JvdXAgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNwcm9wZXJ0eV9ncm91cCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNwcm9wZXJ0eV9ncm91cH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvcGVydHlHcm91cDogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0eV9ncm91cDogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1Byb3BlcnR5R3JvdXBUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5wcm9wZXJ0eUdyb3VwKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHByb3BlcnR5X2dyb3VwOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1Byb3BlcnR5R3JvdXBUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5wcm9wZXJ0eUdyb3VwKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc1Byb3BlcnR5R3JvdXBMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJvcGVydHlHcm91cD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9wZXJ0eUdyb3VwID0gdGhpcy5fcHJvcGVydHlHcm91cD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJvcGVydHlHcm91cC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcm9wZXJ0eUdyb3VwLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcm9wZXJ0eUdyb3VwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByb3BlcnR5X2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3BlcnR5R3JvdXAgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwTGlzdCh0aGlzLCBcInByb3BlcnR5X2dyb3VwXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHByb3BlcnR5R3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5R3JvdXA7XG4gIH1cbiAgcHVibGljIHB1dFByb3BlcnR5R3JvdXAodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cFtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wcm9wZXJ0eUdyb3VwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvcGVydHlHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUdyb3VwLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2NoZWNrcG9pbnRfaW50ZXJ2YWwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jY2hlY2twb2ludF9pbnRlcnZhbH1cbiAgKi9cbiAgcmVhZG9ubHkgY2hlY2twb2ludEludGVydmFsPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jY2hlY2twb2ludGluZ19lbmFibGVkIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2NoZWNrcG9pbnRpbmdfZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgY2hlY2twb2ludGluZ0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNjb25maWd1cmF0aW9uX3R5cGUgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jY29uZmlndXJhdGlvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBjb25maWd1cmF0aW9uVHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jbWluX3BhdXNlX2JldHdlZW5fY2hlY2twb2ludHMgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbWluX3BhdXNlX2JldHdlZW5fY2hlY2twb2ludHN9XG4gICovXG4gIHJlYWRvbmx5IG1pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNoZWNrcG9pbnRfaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY2hlY2twb2ludEludGVydmFsKSxcbiAgICBjaGVja3BvaW50aW5nX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNoZWNrcG9pbnRpbmdFbmFibGVkKSxcbiAgICBjb25maWd1cmF0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmlndXJhdGlvblR5cGUpLFxuICAgIG1pbl9wYXVzZV9iZXR3ZWVuX2NoZWNrcG9pbnRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNoZWNrcG9pbnRfaW50ZXJ2YWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNoZWNrcG9pbnRJbnRlcnZhbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgY2hlY2twb2ludGluZ19lbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2hlY2twb2ludGluZ0VuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBjb25maWd1cmF0aW9uX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25UeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtaW5fcGF1c2VfYmV0d2Vlbl9jaGVja3BvaW50czoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGVja3BvaW50SW50ZXJ2YWwgPSB0aGlzLl9jaGVja3BvaW50SW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jaGVja3BvaW50aW5nRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGVja3BvaW50aW5nRW5hYmxlZCA9IHRoaXMuX2NoZWNrcG9pbnRpbmdFbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29uZmlndXJhdGlvblR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29uZmlndXJhdGlvblR5cGUgPSB0aGlzLl9jb25maWd1cmF0aW9uVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzID0gdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGVja3BvaW50SW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaGVja3BvaW50aW5nRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbCA9IHZhbHVlLmNoZWNrcG9pbnRJbnRlcnZhbDtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRpbmdFbmFibGVkID0gdmFsdWUuY2hlY2twb2ludGluZ0VuYWJsZWQ7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uVHlwZSA9IHZhbHVlLmNvbmZpZ3VyYXRpb25UeXBlO1xuICAgICAgdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMgPSB2YWx1ZS5taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cztcbiAgICB9XG4gIH1cblxuICAvLyBjaGVja3BvaW50X2ludGVydmFsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2hlY2twb2ludEludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBjaGVja3BvaW50SW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjaGVja3BvaW50X2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBjaGVja3BvaW50SW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENoZWNrcG9pbnRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9jaGVja3BvaW50SW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNoZWNrcG9pbnRJbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja3BvaW50SW50ZXJ2YWw7XG4gIH1cblxuICAvLyBjaGVja3BvaW50aW5nX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaGVja3BvaW50aW5nRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludGluZ0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2hlY2twb2ludGluZ19lbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjaGVja3BvaW50aW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludGluZ0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGVja3BvaW50aW5nRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9jaGVja3BvaW50aW5nRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludGluZ0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2twb2ludGluZ0VuYWJsZWQ7XG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvblR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uZmlndXJhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblR5cGU7XG4gIH1cblxuICAvLyBtaW5fcGF1c2VfYmV0d2Vlbl9jaGVja3BvaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5QYXVzZUJldHdlZW5DaGVja3BvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9wYXVzZV9iZXR3ZWVuX2NoZWNrcG9pbnRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5QYXVzZUJldHdlZW5DaGVja3BvaW50cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5QYXVzZUJldHdlZW5DaGVja3BvaW50cygpIHtcbiAgICB0aGlzLl9taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2NvbmZpZ3VyYXRpb25fdHlwZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNjb25maWd1cmF0aW9uX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25UeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNsb2dfbGV2ZWwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbG9nX2xldmVsfVxuICAqL1xuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI21ldHJpY3NfbGV2ZWwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbWV0cmljc19sZXZlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbWV0cmljc0xldmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uVHlwZSksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgICBtZXRyaWNzX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY3NMZXZlbCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb25maWd1cmF0aW9uX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25UeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsb2dfbGV2ZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZXRyaWNzX2xldmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNzTGV2ZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uTW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZpZ3VyYXRpb25UeXBlID0gdGhpcy5fY29uZmlndXJhdGlvblR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dMZXZlbCA9IHRoaXMuX2xvZ0xldmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWV0cmljc0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY3NMZXZlbCA9IHRoaXMuX21ldHJpY3NMZXZlbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNzTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdmFsdWUuY29uZmlndXJhdGlvblR5cGU7XG4gICAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbHVlLmxvZ0xldmVsO1xuICAgICAgdGhpcy5fbWV0cmljc0xldmVsID0gdmFsdWUubWV0cmljc0xldmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb25fdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWd1cmF0aW9uX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ3VyYXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIGxvZ19sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0xldmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nTGV2ZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nTGV2ZWwoKSB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xuICB9XG5cbiAgLy8gbWV0cmljc19sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY3NMZXZlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljc0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljc19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljc0xldmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNzTGV2ZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNzTGV2ZWwoKSB7XG4gICAgdGhpcy5fbWV0cmljc0xldmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNzTGV2ZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljc0xldmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jYXV0b19zY2FsaW5nX2VuYWJsZWQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jYXV0b19zY2FsaW5nX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9TY2FsaW5nRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2NvbmZpZ3VyYXRpb25fdHlwZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNjb25maWd1cmF0aW9uX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25UeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNwYXJhbGxlbGlzbSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNwYXJhbGxlbGlzbX1cbiAgKi9cbiAgcmVhZG9ubHkgcGFyYWxsZWxpc20/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNwYXJhbGxlbGlzbV9wZXJfa3B1IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3BhcmFsbGVsaXNtX3Blcl9rcHV9XG4gICovXG4gIHJlYWRvbmx5IHBhcmFsbGVsaXNtUGVyS3B1PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dG9fc2NhbGluZ19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvU2NhbGluZ0VuYWJsZWQpLFxuICAgIGNvbmZpZ3VyYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uVHlwZSksXG4gICAgcGFyYWxsZWxpc206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGFyYWxsZWxpc20pLFxuICAgIHBhcmFsbGVsaXNtX3Blcl9rcHU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGFyYWxsZWxpc21QZXJLcHUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXV0b19zY2FsaW5nX2VuYWJsZWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRvU2NhbGluZ0VuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBjb25maWd1cmF0aW9uX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25UeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwYXJhbGxlbGlzbToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEucGFyYWxsZWxpc20pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHBhcmFsbGVsaXNtX3Blcl9rcHU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBhcmFsbGVsaXNtUGVyS3B1KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9TY2FsaW5nRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRvU2NhbGluZ0VuYWJsZWQgPSB0aGlzLl9hdXRvU2NhbGluZ0VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25maWd1cmF0aW9uVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25maWd1cmF0aW9uVHlwZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFyYWxsZWxpc20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYWxsZWxpc20gPSB0aGlzLl9wYXJhbGxlbGlzbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhcmFsbGVsaXNtUGVyS3B1ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcmFsbGVsaXNtUGVyS3B1ID0gdGhpcy5fcGFyYWxsZWxpc21QZXJLcHU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0b1NjYWxpbmdFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29uZmlndXJhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJhbGxlbGlzbSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcmFsbGVsaXNtUGVyS3B1ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRvU2NhbGluZ0VuYWJsZWQgPSB2YWx1ZS5hdXRvU2NhbGluZ0VuYWJsZWQ7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uVHlwZSA9IHZhbHVlLmNvbmZpZ3VyYXRpb25UeXBlO1xuICAgICAgdGhpcy5fcGFyYWxsZWxpc20gPSB2YWx1ZS5wYXJhbGxlbGlzbTtcbiAgICAgIHRoaXMuX3BhcmFsbGVsaXNtUGVyS3B1ID0gdmFsdWUucGFyYWxsZWxpc21QZXJLcHU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b19zY2FsaW5nX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvU2NhbGluZ0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9TY2FsaW5nRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX3NjYWxpbmdfZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1NjYWxpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvU2NhbGluZ0VuYWJsZWQoKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1NjYWxpbmdFbmFibGVkO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlndXJhdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlO1xuICB9XG5cbiAgLy8gcGFyYWxsZWxpc20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbGxlbGlzbT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGFyYWxsZWxpc20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwYXJhbGxlbGlzbScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYWxsZWxpc20odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYWxsZWxpc20oKSB7XG4gICAgdGhpcy5fcGFyYWxsZWxpc20gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFsbGVsaXNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFsbGVsaXNtO1xuICB9XG5cbiAgLy8gcGFyYWxsZWxpc21fcGVyX2twdSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFsbGVsaXNtUGVyS3B1PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwYXJhbGxlbGlzbVBlcktwdSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhcmFsbGVsaXNtX3Blcl9rcHUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFsbGVsaXNtUGVyS3B1KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYXJhbGxlbGlzbVBlcktwdSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFsbGVsaXNtUGVyS3B1KCkge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtUGVyS3B1ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbGxlbGlzbVBlcktwdUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbGxlbGlzbVBlcktwdTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogY2hlY2twb2ludF9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jY2hlY2twb2ludF9jb25maWd1cmF0aW9uIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2NoZWNrcG9pbnRfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY2hlY2twb2ludENvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIG1vbml0b3JpbmdfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI21vbml0b3JpbmdfY29uZmlndXJhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNtb25pdG9yaW5nX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IG1vbml0b3JpbmdDb25maWd1cmF0aW9uPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBwYXJhbGxlbGlzbV9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcGFyYWxsZWxpc21fY29uZmlndXJhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNwYXJhbGxlbGlzbV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBwYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNoZWNrcG9pbnRfY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jaGVja3BvaW50Q29uZmlndXJhdGlvbiksXG4gICAgbW9uaXRvcmluZ19jb25maWd1cmF0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uTW9uaXRvcmluZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmdDb25maWd1cmF0aW9uKSxcbiAgICBwYXJhbGxlbGlzbV9jb25maWd1cmF0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY2hlY2twb2ludF9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jaGVja3BvaW50Q29uZmlndXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25DaGVja3BvaW50Q29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIG1vbml0b3JpbmdfY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uTW9uaXRvcmluZ0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBwYXJhbGxlbGlzbV9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucGFyYWxsZWxpc21Db25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2hlY2twb2ludENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2hlY2twb2ludENvbmZpZ3VyYXRpb24gPSB0aGlzLl9jaGVja3BvaW50Q29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1vbml0b3JpbmdDb25maWd1cmF0aW9uID0gdGhpcy5fbW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYWxsZWxpc21Db25maWd1cmF0aW9uID0gdGhpcy5fcGFyYWxsZWxpc21Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFyYWxsZWxpc21Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jaGVja3BvaW50Q29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tb25pdG9yaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGFyYWxsZWxpc21Db25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrcG9pbnRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaGVja3BvaW50Q29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjaGVja3BvaW50X2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDaGVja3BvaW50Q29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENoZWNrcG9pbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNoZWNrcG9pbnRDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibW9uaXRvcmluZ19jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb25pdG9yaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb25pdG9yaW5nQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGFyYWxsZWxpc21fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInBhcmFsbGVsaXNtX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgcGFyYWxsZWxpc21Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYWxsZWxpc21Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYWxsZWxpc21Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNhcHBsaWNhdGlvbl9yZXN0b3JlX3R5cGUgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jYXBwbGljYXRpb25fcmVzdG9yZV90eXBlfVxuICAqL1xuICByZWFkb25seSBhcHBsaWNhdGlvblJlc3RvcmVUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jc25hcHNob3RfbmFtZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNzbmFwc2hvdF9uYW1lfVxuICAqL1xuICByZWFkb25seSBzbmFwc2hvdE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXBwbGljYXRpb25fcmVzdG9yZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uUmVzdG9yZVR5cGUpLFxuICAgIHNuYXBzaG90X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3ROYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFwcGxpY2F0aW9uX3Jlc3RvcmVfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25SZXN0b3JlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc25hcHNob3RfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3ROYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXBwbGljYXRpb25SZXN0b3JlVHlwZSA9IHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zbmFwc2hvdE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc25hcHNob3ROYW1lID0gdGhpcy5fc25hcHNob3ROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zbmFwc2hvdE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGUgPSB2YWx1ZS5hcHBsaWNhdGlvblJlc3RvcmVUeXBlO1xuICAgICAgdGhpcy5fc25hcHNob3ROYW1lID0gdmFsdWUuc25hcHNob3ROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX3Jlc3RvcmVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uUmVzdG9yZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBsaWNhdGlvbl9yZXN0b3JlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uUmVzdG9yZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvblJlc3RvcmVUeXBlKCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uUmVzdG9yZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlVHlwZTtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc25hcHNob3ROYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbmFwc2hvdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbmFwc2hvdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbmFwc2hvdE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NuYXBzaG90TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNuYXBzaG90TmFtZSgpIHtcbiAgICB0aGlzLl9zbmFwc2hvdE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNuYXBzaG90TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2FsbG93X25vbl9yZXN0b3JlZF9zdGF0ZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNhbGxvd19ub25fcmVzdG9yZWRfc3RhdGV9XG4gICovXG4gIHJlYWRvbmx5IGFsbG93Tm9uUmVzdG9yZWRTdGF0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd19ub25fcmVzdG9yZWRfc3RhdGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93Tm9uUmVzdG9yZWRTdGF0ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGxvd19ub25fcmVzdG9yZWRfc3RhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd05vblJlc3RvcmVkU3RhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd05vblJlc3RvcmVkU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dOb25SZXN0b3JlZFN0YXRlID0gdGhpcy5fYWxsb3dOb25SZXN0b3JlZFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dOb25SZXN0b3JlZFN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGxvd05vblJlc3RvcmVkU3RhdGUgPSB2YWx1ZS5hbGxvd05vblJlc3RvcmVkU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gYWxsb3dfbm9uX3Jlc3RvcmVkX3N0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dOb25SZXN0b3JlZFN0YXRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd05vblJlc3RvcmVkU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfbm9uX3Jlc3RvcmVkX3N0YXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd05vblJlc3RvcmVkU3RhdGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93Tm9uUmVzdG9yZWRTdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93Tm9uUmVzdG9yZWRTdGF0ZSgpIHtcbiAgICB0aGlzLl9hbGxvd05vblJlc3RvcmVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93Tm9uUmVzdG9yZWRTdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd05vblJlc3RvcmVkU3RhdGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogYXBwbGljYXRpb25fcmVzdG9yZV9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jYXBwbGljYXRpb25fcmVzdG9yZV9jb25maWd1cmF0aW9uIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2FwcGxpY2F0aW9uX3Jlc3RvcmVfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIGZsaW5rX3J1bl9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jZmxpbmtfcnVuX2NvbmZpZ3VyYXRpb24gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jZmxpbmtfcnVuX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGZsaW5rUnVuQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcHBsaWNhdGlvbl9yZXN0b3JlX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24pLFxuICAgIGZsaW5rX3J1bl9jb25maWd1cmF0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25GbGlua1J1bkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZsaW5rUnVuQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhcHBsaWNhdGlvbl9yZXN0b3JlX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGZsaW5rX3J1bl9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mbGlua1J1bkNvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25GbGlua1J1bkNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZsaW5rUnVuQ29uZmlndXJhdGlvbiA9IHRoaXMuX2ZsaW5rUnVuQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZsaW5rUnVuQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5mbGlua1J1bkNvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fcmVzdG9yZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImFwcGxpY2F0aW9uX3Jlc3RvcmVfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZmxpbmtfcnVuX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmxpbmtSdW5Db25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZsaW5rX3J1bl9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGZsaW5rUnVuQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRGbGlua1J1bkNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2ZsaW5rUnVuQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmxpbmtSdW5Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2ZsaW5rUnVuQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmbGlua1J1bkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc20ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jY291bnQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jY291bnR9XG4gICovXG4gIHJlYWRvbmx5IGNvdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvdW50KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc20pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvdW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb3VudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc20gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvdW50ID0gdGhpcy5fY291bnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvdW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb3VudCA9IHZhbHVlLmNvdW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvdW50KCkge1xuICAgIHRoaXMuX2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3Jlc291cmNlX2FybiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZXNvdXJjZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvck91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvck91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlc291cmNlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3NvciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3IgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBpbnB1dF9sYW1iZGFfcHJvY2Vzc29yIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jaW5wdXRfbGFtYmRhX3Byb2Nlc3NvciBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNpbnB1dF9sYW1iZGFfcHJvY2Vzc29yfVxuICAqL1xuICByZWFkb25seSBpbnB1dExhbWJkYVByb2Nlc3NvcjogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnB1dF9sYW1iZGFfcHJvY2Vzc29yOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dExhbWJkYVByb2Nlc3NvciksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbnB1dF9sYW1iZGFfcHJvY2Vzc29yOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3NvclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5wdXRMYW1iZGFQcm9jZXNzb3IpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0TGFtYmRhUHJvY2Vzc29yID0gdGhpcy5faW5wdXRMYW1iZGFQcm9jZXNzb3I/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbnB1dExhbWJkYVByb2Nlc3NvcjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnB1dF9sYW1iZGFfcHJvY2Vzc29yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lucHV0TGFtYmRhUHJvY2Vzc29yID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3JPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJpbnB1dF9sYW1iZGFfcHJvY2Vzc29yXCIpO1xuICBwdWJsaWMgZ2V0IGlucHV0TGFtYmRhUHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dExhbWJkYVByb2Nlc3NvcjtcbiAgfVxuICBwdWJsaWMgcHV0SW5wdXRMYW1iZGFQcm9jZXNzb3IodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3IpIHtcbiAgICB0aGlzLl9pbnB1dExhbWJkYVByb2Nlc3Nvci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0TGFtYmRhUHJvY2Vzc29ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI21hcHBpbmcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbWFwcGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgbWFwcGluZz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI25hbWUgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jc3FsX3R5cGUgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jc3FsX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHNxbFR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcHBpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFwcGluZyksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBzcWxfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcWxUeXBlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWFwcGluZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFwcGluZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3FsX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNxbFR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWFwcGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXBwaW5nID0gdGhpcy5fbWFwcGluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcWxUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNxbFR5cGUgPSB0aGlzLl9zcWxUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hcHBpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3FsVHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXBwaW5nID0gdmFsdWUubWFwcGluZztcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fc3FsVHlwZSA9IHZhbHVlLnNxbFR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFwcGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXBwaW5nPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXBwaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFwcGluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWFwcGluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFwcGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hcHBpbmcoKSB7XG4gICAgdGhpcy5fbWFwcGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFwcGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBzcWxfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zcWxUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcWxUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3FsX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNxbFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NxbFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3FsVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcWxUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW5MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW5bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX2NvbHVtbl9kZWxpbWl0ZXIgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVjb3JkX2NvbHVtbl9kZWxpbWl0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IHJlY29yZENvbHVtbkRlbGltaXRlcjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX3Jvd19kZWxpbWl0ZXIgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVjb3JkX3Jvd19kZWxpbWl0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IHJlY29yZFJvd0RlbGltaXRlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9jb2x1bW5fZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZENvbHVtbkRlbGltaXRlciksXG4gICAgcmVjb3JkX3Jvd19kZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93RGVsaW1pdGVyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlY29yZF9jb2x1bW5fZGVsaW1pdGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlY29yZF9yb3dfZGVsaW1pdGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRSb3dEZWxpbWl0ZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZENvbHVtbkRlbGltaXRlciA9IHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRSb3dEZWxpbWl0ZXIgPSB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB2YWx1ZS5yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gICAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB2YWx1ZS5yZWNvcmRSb3dEZWxpbWl0ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX2NvbHVtbl9kZWxpbWl0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkQ29sdW1uRGVsaW1pdGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfY29sdW1uX2RlbGltaXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkQ29sdW1uRGVsaW1pdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uRGVsaW1pdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlcjtcbiAgfVxuXG4gIC8vIHJlY29yZF9yb3dfZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZFJvd0RlbGltaXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93RGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX3Jvd19kZWxpbWl0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZFJvd0RlbGltaXRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd0RlbGltaXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX3Jvd19wYXRoIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3JlY29yZF9yb3dfcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVjb3JkUm93UGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9yb3dfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRSb3dQYXRoKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlY29yZF9yb3dfcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZFJvd1BhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkUm93UGF0aCA9IHRoaXMuX3JlY29yZFJvd1BhdGg7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZFJvd1BhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZFJvd1BhdGggPSB2YWx1ZS5yZWNvcmRSb3dQYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9yb3dfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRSb3dQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRSb3dQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX3Jvd19wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRSb3dQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRSb3dQYXRoID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd1BhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkUm93UGF0aDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB7XG4gIC8qKlxuICAqIGNzdl9tYXBwaW5nX3BhcmFtZXRlcnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2Nzdl9tYXBwaW5nX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IGNzdk1hcHBpbmdQYXJhbWV0ZXJzPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycztcbiAgLyoqXG4gICoganNvbl9tYXBwaW5nX3BhcmFtZXRlcnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNqc29uX21hcHBpbmdfcGFyYW1ldGVycyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNqc29uX21hcHBpbmdfcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkganNvbk1hcHBpbmdQYXJhbWV0ZXJzPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3N2X21hcHBpbmdfcGFyYW1ldGVyczoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuY3N2TWFwcGluZ1BhcmFtZXRlcnMpLFxuICAgIGpzb25fbWFwcGluZ19wYXJhbWV0ZXJzOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuanNvbk1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNzdl9tYXBwaW5nX3BhcmFtZXRlcnM6IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jc3ZNYXBwaW5nUGFyYW1ldGVycyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNMaXN0XCIsXG4gICAgfSxcbiAgICBqc29uX21hcHBpbmdfcGFyYW1ldGVyczoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5qc29uTWFwcGluZ1BhcmFtZXRlcnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jc3ZNYXBwaW5nUGFyYW1ldGVycyA9IHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fanNvbk1hcHBpbmdQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmpzb25NYXBwaW5nUGFyYW1ldGVycyA9IHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmpzb25NYXBwaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzXCIpO1xuICBwdWJsaWMgZ2V0IGNzdk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0Q3N2TWFwcGluZ1BhcmFtZXRlcnModmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3N2TWFwcGluZ1BhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3N2TWFwcGluZ1BhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGpzb25fbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2pzb25NYXBwaW5nUGFyYW1ldGVycyA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImpzb25fbWFwcGluZ19wYXJhbWV0ZXJzXCIpO1xuICBwdWJsaWMgZ2V0IGpzb25NYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbk1hcHBpbmdQYXJhbWV0ZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRKc29uTWFwcGluZ1BhcmFtZXRlcnModmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fanNvbk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRKc29uTWFwcGluZ1BhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fanNvbk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpzb25NYXBwaW5nUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX2Zvcm1hdF90eXBlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3JlY29yZF9mb3JtYXRfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVjb3JkRm9ybWF0VHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBtYXBwaW5nX3BhcmFtZXRlcnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNtYXBwaW5nX3BhcmFtZXRlcnMgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbWFwcGluZ19wYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBtYXBwaW5nUGFyYW1ldGVyczogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2Zvcm1hdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdFR5cGUpLFxuICAgIG1hcHBpbmdfcGFyYW1ldGVyczoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlY29yZF9mb3JtYXRfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRm9ybWF0VHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWFwcGluZ19wYXJhbWV0ZXJzOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRGb3JtYXRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEZvcm1hdFR5cGUgPSB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFwcGluZ1BhcmFtZXRlcnMgPSB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlID0gdmFsdWUucmVjb3JkRm9ybWF0VHlwZTtcbiAgICAgIHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYXBwaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfZm9ybWF0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkRm9ybWF0VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9mb3JtYXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkRm9ybWF0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkRm9ybWF0VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdFR5cGU7XG4gIH1cblxuICAvLyBtYXBwaW5nX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWFwcGluZ1BhcmFtZXRlcnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJtYXBwaW5nX3BhcmFtZXRlcnNcIik7XG4gIHB1YmxpYyBnZXQgbWFwcGluZ1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRNYXBwaW5nUGFyYW1ldGVycyh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hcHBpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlY29yZF9lbmNvZGluZyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWNvcmRfZW5jb2Rpbmd9XG4gICovXG4gIHJlYWRvbmx5IHJlY29yZEVuY29kaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiByZWNvcmRfY29sdW1uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX2NvbHVtbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWNvcmRfY29sdW1ufVxuICAqL1xuICByZWFkb25seSByZWNvcmRDb2x1bW46IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHJlY29yZF9mb3JtYXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNyZWNvcmRfZm9ybWF0IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3JlY29yZF9mb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdDogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9lbmNvZGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRFbmNvZGluZyksXG4gICAgcmVjb3JkX2NvbHVtbjogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW5Ub1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5yZWNvcmRDb2x1bW4pLFxuICAgIHJlY29yZF9mb3JtYXQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdFRvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRm9ybWF0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlY29yZF9lbmNvZGluZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRW5jb2RpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlY29yZF9jb2x1bW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnJlY29yZENvbHVtbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbkxpc3RcIixcbiAgICB9LFxuICAgIHJlY29yZF9mb3JtYXQ6IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZEVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEVuY29kaW5nID0gdGhpcy5fcmVjb3JkRW5jb2Rpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRDb2x1bW4/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkQ29sdW1uID0gdGhpcy5fcmVjb3JkQ29sdW1uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEZvcm1hdCA9IHRoaXMuX3JlY29yZEZvcm1hdD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvcmRGb3JtYXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkRW5jb2RpbmcgPSB2YWx1ZS5yZWNvcmRFbmNvZGluZztcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVjb3JkQ29sdW1uO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZWNvcmRGb3JtYXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX2VuY29kaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlY29yZEVuY29kaW5nPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRFbmNvZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9lbmNvZGluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkRW5jb2RpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjb3JkRW5jb2RpbmcoKSB7XG4gICAgdGhpcy5fcmVjb3JkRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEVuY29kaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEVuY29kaW5nO1xuICB9XG5cbiAgLy8gcmVjb3JkX2NvbHVtbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW4gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uTGlzdCh0aGlzLCBcInJlY29yZF9jb2x1bW5cIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IHJlY29yZENvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uO1xuICB9XG4gIHB1YmxpYyBwdXRSZWNvcmRDb2x1bW4odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZWNvcmRDb2x1bW4uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZWNvcmRfZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZEZvcm1hdCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZWNvcmRfZm9ybWF0XCIpO1xuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkRm9ybWF0O1xuICB9XG4gIHB1YmxpYyBwdXRSZWNvcmRGb3JtYXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdCkge1xuICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNpbnB1dF9zdGFydGluZ19wb3NpdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNpbnB1dF9zdGFydGluZ19wb3NpdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5wdXRTdGFydGluZ1Bvc2l0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlucHV0X3N0YXJ0aW5nX3Bvc2l0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0U3RhcnRpbmdQb3NpdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbnB1dF9zdGFydGluZ19wb3NpdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5wdXRTdGFydGluZ1Bvc2l0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5wdXRTdGFydGluZ1Bvc2l0aW9uID0gdGhpcy5faW5wdXRTdGFydGluZ1Bvc2l0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5wdXRTdGFydGluZ1Bvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbiA9IHZhbHVlLmlucHV0U3RhcnRpbmdQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnB1dF9zdGFydGluZ19wb3NpdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0U3RhcnRpbmdQb3NpdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5wdXRTdGFydGluZ1Bvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfc3RhcnRpbmdfcG9zaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlucHV0U3RhcnRpbmdQb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXRTdGFydGluZ1Bvc2l0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRTdGFydGluZ1Bvc2l0aW9uKCkge1xuICAgIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRTdGFydGluZ1Bvc2l0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNyZXNvdXJjZV9hcm4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVzb3VyY2VfYXJufVxuICAqL1xuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZXNvdXJjZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUFybiA9IHRoaXMuX3Jlc291cmNlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3Jlc291cmNlX2FybiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZXNvdXJjZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc1N0cmVhbXNJbnB1dFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc1N0cmVhbXNJbnB1dFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlc291cmNlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUFybiA9IHRoaXMuX3Jlc291cmNlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNuYW1lX3ByZWZpeCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNuYW1lX3ByZWZpeH1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZVByZWZpeDogc3RyaW5nO1xuICAvKipcbiAgKiBpbnB1dF9wYXJhbGxlbGlzbSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2lucHV0X3BhcmFsbGVsaXNtIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2lucHV0X3BhcmFsbGVsaXNtfVxuICAqL1xuICByZWFkb25seSBpbnB1dFBhcmFsbGVsaXNtPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc207XG4gIC8qKlxuICAqIGlucHV0X3Byb2Nlc3NpbmdfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2lucHV0X3Byb2Nlc3NpbmdfY29uZmlndXJhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNpbnB1dF9wcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGlucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogaW5wdXRfc2NoZW1hIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jaW5wdXRfc2NoZW1hIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2lucHV0X3NjaGVtYX1cbiAgKi9cbiAgcmVhZG9ubHkgaW5wdXRTY2hlbWE6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYTtcbiAgLyoqXG4gICogaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2lucHV0X3N0YXJ0aW5nX3Bvc2l0aW9uX2NvbmZpZ3VyYXRpb24gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICoga2luZXNpc19maXJlaG9zZV9pbnB1dCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2tpbmVzaXNfZmlyZWhvc2VfaW5wdXQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24ja2luZXNpc19maXJlaG9zZV9pbnB1dH1cbiAgKi9cbiAgcmVhZG9ubHkga2luZXNpc0ZpcmVob3NlSW5wdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc0ZpcmVob3NlSW5wdXQ7XG4gIC8qKlxuICAqIGtpbmVzaXNfc3RyZWFtc19pbnB1dCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2tpbmVzaXNfc3RyZWFtc19pbnB1dCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNraW5lc2lzX3N0cmVhbXNfaW5wdXR9XG4gICovXG4gIHJlYWRvbmx5IGtpbmVzaXNTdHJlYW1zSW5wdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc1N0cmVhbXNJbnB1dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lUHJlZml4KSxcbiAgICBpbnB1dF9wYXJhbGxlbGlzbToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc21Ub1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0UGFyYWxsZWxpc20pLFxuICAgIGlucHV0X3Byb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pLFxuICAgIGlucHV0X3NjaGVtYToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dFNjaGVtYSksXG4gICAgaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbjogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmlucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgIGtpbmVzaXNfZmlyZWhvc2VfaW5wdXQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dFRvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc0ZpcmVob3NlSW5wdXQpLFxuICAgIGtpbmVzaXNfc3RyZWFtc19pbnB1dDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNTdHJlYW1zSW5wdXQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmFtZV9wcmVmaXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWVQcmVmaXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlucHV0X3BhcmFsbGVsaXNtOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc21Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlucHV0UGFyYWxsZWxpc20pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbUxpc3RcIixcbiAgICB9LFxuICAgIGlucHV0X3Byb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBpbnB1dF9zY2hlbWE6IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlucHV0U2NoZW1hKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hTGlzdFwiLFxuICAgIH0sXG4gICAgaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woa2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBraW5lc2lzX2ZpcmVob3NlX2lucHV0OiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzRmlyZWhvc2VJbnB1dCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dExpc3RcIixcbiAgICB9LFxuICAgIGtpbmVzaXNfc3RyZWFtc19pbnB1dDoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzU3RyZWFtc0lucHV0KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXRMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWVQcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZVByZWZpeCA9IHRoaXMuX25hbWVQcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnB1dFBhcmFsbGVsaXNtPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0UGFyYWxsZWxpc20gPSB0aGlzLl9pbnB1dFBhcmFsbGVsaXNtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uID0gdGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0U2NoZW1hPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0U2NoZW1hID0gdGhpcy5faW5wdXRTY2hlbWE/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2luZXNpc0ZpcmVob3NlSW5wdXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2luZXNpc0ZpcmVob3NlSW5wdXQgPSB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tpbmVzaXNTdHJlYW1zSW5wdXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2luZXNpc1N0cmVhbXNJbnB1dCA9IHRoaXMuX2tpbmVzaXNTdHJlYW1zSW5wdXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0UGFyYWxsZWxpc20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0U2NoZW1hLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWUubmFtZVByZWZpeDtcbiAgICAgIHRoaXMuX2lucHV0UGFyYWxsZWxpc20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlucHV0UGFyYWxsZWxpc207XG4gICAgICB0aGlzLl9pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5faW5wdXRTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlucHV0U2NoZW1hO1xuICAgICAgdGhpcy5faW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX2tpbmVzaXNGaXJlaG9zZUlucHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5raW5lc2lzRmlyZWhvc2VJbnB1dDtcbiAgICAgIHRoaXMuX2tpbmVzaXNTdHJlYW1zSW5wdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmtpbmVzaXNTdHJlYW1zSW5wdXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5fYXBwX3N0cmVhbV9uYW1lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluQXBwU3RyZWFtTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5fYXBwX3N0cmVhbV9uYW1lcycpO1xuICB9XG5cbiAgLy8gaW5wdXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnB1dElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWVfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXg7XG4gIH1cblxuICAvLyBpbnB1dF9wYXJhbGxlbGlzbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dFBhcmFsbGVsaXNtID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaW5wdXRfcGFyYWxsZWxpc21cIik7XG4gIHB1YmxpYyBnZXQgaW5wdXRQYXJhbGxlbGlzbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRQYXJhbGxlbGlzbTtcbiAgfVxuICBwdWJsaWMgcHV0SW5wdXRQYXJhbGxlbGlzbSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc20pIHtcbiAgICB0aGlzLl9pbnB1dFBhcmFsbGVsaXNtLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dFBhcmFsbGVsaXNtKCkge1xuICAgIHRoaXMuX2lucHV0UGFyYWxsZWxpc20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRQYXJhbGxlbGlzbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFBhcmFsbGVsaXNtLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBpbnB1dF9wcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImlucHV0X3Byb2Nlc3NpbmdfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBpbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2lucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGlucHV0X3NjaGVtYSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbnB1dFNjaGVtYSA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJpbnB1dF9zY2hlbWFcIik7XG4gIHB1YmxpYyBnZXQgaW5wdXRTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U2NoZW1hO1xuICB9XG4gIHB1YmxpYyBwdXRJbnB1dFNjaGVtYSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hKSB7XG4gICAgdGhpcy5faW5wdXRTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFNjaGVtYUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFNjaGVtYS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uTGlzdCh0aGlzLCBcImlucHV0X3N0YXJ0aW5nX3Bvc2l0aW9uX2NvbmZpZ3VyYXRpb25cIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGlucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5faW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfZmlyZWhvc2VfaW5wdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2luZXNpc0ZpcmVob3NlSW5wdXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwia2luZXNpc19maXJlaG9zZV9pbnB1dFwiKTtcbiAgcHVibGljIGdldCBraW5lc2lzRmlyZWhvc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc0ZpcmVob3NlSW5wdXQ7XG4gIH1cbiAgcHVibGljIHB1dEtpbmVzaXNGaXJlaG9zZUlucHV0KHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc0ZpcmVob3NlSW5wdXQpIHtcbiAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZXNpc0ZpcmVob3NlSW5wdXQoKSB7XG4gICAgdGhpcy5fa2luZXNpc0ZpcmVob3NlSW5wdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2luZXNpc0ZpcmVob3NlSW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc0ZpcmVob3NlSW5wdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfc3RyZWFtc19pbnB1dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9raW5lc2lzU3RyZWFtc0lucHV0ID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwia2luZXNpc19zdHJlYW1zX2lucHV0XCIpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNTdHJlYW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmVzaXNTdHJlYW1zSW5wdXQ7XG4gIH1cbiAgcHVibGljIHB1dEtpbmVzaXNTdHJlYW1zSW5wdXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0KSB7XG4gICAgdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZXNpc1N0cmVhbXNJbnB1dCgpIHtcbiAgICB0aGlzLl9raW5lc2lzU3RyZWFtc0lucHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtpbmVzaXNTdHJlYW1zSW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWEge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX2Zvcm1hdF90eXBlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3JlY29yZF9mb3JtYXRfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVjb3JkRm9ybWF0VHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWFPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9mb3JtYXRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRGb3JtYXRUeXBlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlY29yZF9mb3JtYXRfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRm9ybWF0VHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRGb3JtYXRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEZvcm1hdFR5cGUgPSB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB2YWx1ZS5yZWNvcmRGb3JtYXRUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9mb3JtYXRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX2Zvcm1hdF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRGb3JtYXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkRm9ybWF0VHlwZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNyZXNvdXJjZV9hcm4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVzb3VyY2VfYXJufVxuICAqL1xuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZXNvdXJjZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc1N0cmVhbXNPdXRwdXQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVzb3VyY2VfYXJuIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3Jlc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc1N0cmVhbXNPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc1N0cmVhbXNPdXRwdXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcmVzb3VyY2VfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUFybiA9IHRoaXMuX3Jlc291cmNlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlLnJlc291cmNlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNyZXNvdXJjZV9hcm4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVzb3VyY2VfYXJufVxuICAqL1xuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZXNvdXJjZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI25hbWUgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBkZXN0aW5hdGlvbl9zY2hlbWEgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNkZXN0aW5hdGlvbl9zY2hlbWEgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jZGVzdGluYXRpb25fc2NoZW1hfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblNjaGVtYTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYTtcbiAgLyoqXG4gICoga2luZXNpc19maXJlaG9zZV9vdXRwdXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNraW5lc2lzX2ZpcmVob3NlX291dHB1dCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNraW5lc2lzX2ZpcmVob3NlX291dHB1dH1cbiAgKi9cbiAgcmVhZG9ubHkga2luZXNpc0ZpcmVob3NlT3V0cHV0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXQ7XG4gIC8qKlxuICAqIGtpbmVzaXNfc3RyZWFtc19vdXRwdXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNraW5lc2lzX3N0cmVhbXNfb3V0cHV0IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2tpbmVzaXNfc3RyZWFtc19vdXRwdXR9XG4gICovXG4gIHJlYWRvbmx5IGtpbmVzaXNTdHJlYW1zT3V0cHV0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dDtcbiAgLyoqXG4gICogbGFtYmRhX291dHB1dCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2xhbWJkYV9vdXRwdXQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbGFtYmRhX291dHB1dH1cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhT3V0cHV0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0IHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBkZXN0aW5hdGlvbl9zY2hlbWE6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uU2NoZW1hKSxcbiAgICBraW5lc2lzX2ZpcmVob3NlX291dHB1dDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNGaXJlaG9zZU91dHB1dCksXG4gICAga2luZXNpc19zdHJlYW1zX291dHB1dDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dFRvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc1N0cmVhbXNPdXRwdXQpLFxuICAgIGxhbWJkYV9vdXRwdXQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFPdXRwdXQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGVzdGluYXRpb25fc2NoZW1hOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25TY2hlbWEpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hTGlzdFwiLFxuICAgIH0sXG4gICAga2luZXNpc19maXJlaG9zZV9vdXRwdXQ6IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dFRvSGNsVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc0ZpcmVob3NlT3V0cHV0KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXRMaXN0XCIsXG4gICAgfSxcbiAgICBraW5lc2lzX3N0cmVhbXNfb3V0cHV0OiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dFRvSGNsVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc1N0cmVhbXNPdXRwdXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0TGlzdFwiLFxuICAgIH0sXG4gICAgbGFtYmRhX291dHB1dDoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFPdXRwdXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXQgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvblNjaGVtYT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXN0aW5hdGlvblNjaGVtYSA9IHRoaXMuX2Rlc3RpbmF0aW9uU2NoZW1hPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2luZXNpc0ZpcmVob3NlT3V0cHV0Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtpbmVzaXNGaXJlaG9zZU91dHB1dCA9IHRoaXMuX2tpbmVzaXNGaXJlaG9zZU91dHB1dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tpbmVzaXNTdHJlYW1zT3V0cHV0Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtpbmVzaXNTdHJlYW1zT3V0cHV0ID0gdGhpcy5fa2luZXNpc1N0cmVhbXNPdXRwdXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYW1iZGFPdXRwdXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhT3V0cHV0ID0gdGhpcy5fbGFtYmRhT3V0cHV0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXQgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uU2NoZW1hLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2VPdXRwdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tpbmVzaXNTdHJlYW1zT3V0cHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYW1iZGFPdXRwdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uU2NoZW1hLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kZXN0aW5hdGlvblNjaGVtYTtcbiAgICAgIHRoaXMuX2tpbmVzaXNGaXJlaG9zZU91dHB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWUua2luZXNpc0ZpcmVob3NlT3V0cHV0O1xuICAgICAgdGhpcy5fa2luZXNpc1N0cmVhbXNPdXRwdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmtpbmVzaXNTdHJlYW1zT3V0cHV0O1xuICAgICAgdGhpcy5fbGFtYmRhT3V0cHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYW1iZGFPdXRwdXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBvdXRwdXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdXRwdXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ291dHB1dF9pZCcpO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fc2NoZW1hIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uU2NoZW1hID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWFPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJkZXN0aW5hdGlvbl9zY2hlbWFcIik7XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25TY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uU2NoZW1hO1xuICB9XG4gIHB1YmxpYyBwdXREZXN0aW5hdGlvblNjaGVtYSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYSkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uU2NoZW1hLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25TY2hlbWFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25TY2hlbWEuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfZmlyZWhvc2Vfb3V0cHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tpbmVzaXNGaXJlaG9zZU91dHB1dCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImtpbmVzaXNfZmlyZWhvc2Vfb3V0cHV0XCIpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNGaXJlaG9zZU91dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc0ZpcmVob3NlT3V0cHV0O1xuICB9XG4gIHB1YmxpYyBwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0KSB7XG4gICAgdGhpcy5fa2luZXNpc0ZpcmVob3NlT3V0cHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLaW5lc2lzRmlyZWhvc2VPdXRwdXQoKSB7XG4gICAgdGhpcy5fa2luZXNpc0ZpcmVob3NlT3V0cHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtpbmVzaXNGaXJlaG9zZU91dHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzRmlyZWhvc2VPdXRwdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfc3RyZWFtc19vdXRwdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2luZXNpc1N0cmVhbXNPdXRwdXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImtpbmVzaXNfc3RyZWFtc19vdXRwdXRcIik7XG4gIHB1YmxpYyBnZXQga2luZXNpc1N0cmVhbXNPdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmVzaXNTdHJlYW1zT3V0cHV0O1xuICB9XG4gIHB1YmxpYyBwdXRLaW5lc2lzU3RyZWFtc091dHB1dCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dCkge1xuICAgIHRoaXMuX2tpbmVzaXNTdHJlYW1zT3V0cHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLaW5lc2lzU3RyZWFtc091dHB1dCgpIHtcbiAgICB0aGlzLl9raW5lc2lzU3RyZWFtc091dHB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBraW5lc2lzU3RyZWFtc091dHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzU3RyZWFtc091dHB1dC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGFtYmRhX291dHB1dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFPdXRwdXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsYW1iZGFfb3V0cHV0XCIpO1xuICBwdWJsaWMgZ2V0IGxhbWJkYU91dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhT3V0cHV0O1xuICB9XG4gIHB1YmxpYyBwdXRMYW1iZGFPdXRwdXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0KSB7XG4gICAgdGhpcy5fbGFtYmRhT3V0cHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFPdXRwdXQoKSB7XG4gICAgdGhpcy5fbGFtYmRhT3V0cHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYU91dHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFPdXRwdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dE91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNtYXBwaW5nIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI21hcHBpbmd9XG4gICovXG4gIHJlYWRvbmx5IG1hcHBpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNuYW1lIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3NxbF90eXBlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3NxbF90eXBlfVxuICAqL1xuICByZWFkb25seSBzcWxUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXBwaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmcpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc3FsX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3FsVHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1hcHBpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNxbF90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zcWxUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21hcHBpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFwcGluZyA9IHRoaXMuX21hcHBpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3FsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcWxUeXBlID0gdGhpcy5fc3FsVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXBwaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NxbFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFwcGluZyA9IHZhbHVlLm1hcHBpbmc7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3NxbFR5cGUgPSB2YWx1ZS5zcWxUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hcHBpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFwcGluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWFwcGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21hcHBpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hcHBpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21hcHBpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXBwaW5nKCkge1xuICAgIHRoaXMuX21hcHBpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hcHBpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwcGluZztcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc3FsX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3FsVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3FsVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NxbF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcWxUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcWxUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxbFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3FsVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5PdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlY29yZF9jb2x1bW5fZGVsaW1pdGVyIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3JlY29yZF9jb2x1bW5fZGVsaW1pdGVyfVxuICAqL1xuICByZWFkb25seSByZWNvcmRDb2x1bW5EZWxpbWl0ZXI6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlY29yZF9yb3dfZGVsaW1pdGVyIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3JlY29yZF9yb3dfZGVsaW1pdGVyfVxuICAqL1xuICByZWFkb25seSByZWNvcmRSb3dEZWxpbWl0ZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfY29sdW1uX2RlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIpLFxuICAgIHJlY29yZF9yb3dfZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFJvd0RlbGltaXRlciksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZWNvcmRfY29sdW1uX2RlbGltaXRlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkQ29sdW1uRGVsaW1pdGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZWNvcmRfcm93X2RlbGltaXRlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93RGVsaW1pdGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkUm93RGVsaW1pdGVyID0gdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyID0gdmFsdWUucmVjb3JkQ29sdW1uRGVsaW1pdGVyO1xuICAgICAgdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyID0gdmFsdWUucmVjb3JkUm93RGVsaW1pdGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9jb2x1bW5fZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZENvbHVtbkRlbGltaXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uRGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX2NvbHVtbl9kZWxpbWl0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZENvbHVtbkRlbGltaXRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZENvbHVtbkRlbGltaXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gIH1cblxuICAvLyByZWNvcmRfcm93X2RlbGltaXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRSb3dEZWxpbWl0ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd0RlbGltaXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9yb3dfZGVsaW1pdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRSb3dEZWxpbWl0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRSb3dEZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlY29yZF9yb3dfcGF0aCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWNvcmRfcm93X3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IHJlY29yZFJvd1BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfcm93X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZWNvcmRfcm93X3BhdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFJvd1BhdGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZFJvd1BhdGggPSB0aGlzLl9yZWNvcmRSb3dQYXRoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRSb3dQYXRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRSb3dQYXRoID0gdmFsdWUucmVjb3JkUm93UGF0aDtcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfcm93X3BhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkUm93UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9yb3dfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkUm93UGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRSb3dQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZFJvd1BhdGg7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMge1xuICAvKipcbiAgKiBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jY3N2X21hcHBpbmdfcGFyYW1ldGVycyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBjc3ZNYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gIC8qKlxuICAqIGpzb25fbWFwcGluZ19wYXJhbWV0ZXJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24janNvbl9tYXBwaW5nX3BhcmFtZXRlcnMgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24janNvbl9tYXBwaW5nX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IGpzb25NYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNzdl9tYXBwaW5nX3BhcmFtZXRlcnM6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNzdk1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgICBqc29uX21hcHBpbmdfcGFyYW1ldGVyczoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmpzb25NYXBwaW5nUGFyYW1ldGVycyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3N2TWFwcGluZ1BhcmFtZXRlcnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzTGlzdFwiLFxuICAgIH0sXG4gICAganNvbl9tYXBwaW5nX3BhcmFtZXRlcnM6IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuanNvbk1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3N2TWFwcGluZ1BhcmFtZXRlcnMgPSB0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qc29uTWFwcGluZ1BhcmFtZXRlcnMgPSB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNzdk1hcHBpbmdQYXJhbWV0ZXJzO1xuICAgICAgdGhpcy5fanNvbk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5qc29uTWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gY3N2X21hcHBpbmdfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jc3ZNYXBwaW5nUGFyYW1ldGVycyA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY3N2X21hcHBpbmdfcGFyYW1ldGVyc1wiKTtcbiAgcHVibGljIGdldCBjc3ZNYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dENzdk1hcHBpbmdQYXJhbWV0ZXJzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENzdk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdk1hcHBpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBqc29uX21hcHBpbmdfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qc29uTWFwcGluZ1BhcmFtZXRlcnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJqc29uX21hcHBpbmdfcGFyYW1ldGVyc1wiKTtcbiAgcHVibGljIGdldCBqc29uTWFwcGluZ1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0SnNvbk1hcHBpbmdQYXJhbWV0ZXJzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVycykge1xuICAgIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnNvbk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqc29uTWFwcGluZ1BhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlY29yZF9mb3JtYXRfdHlwZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWNvcmRfZm9ybWF0X3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdFR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogbWFwcGluZ19wYXJhbWV0ZXJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jbWFwcGluZ19wYXJhbWV0ZXJzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI21hcHBpbmdfcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgbWFwcGluZ1BhcmFtZXRlcnM6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9mb3JtYXRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRGb3JtYXRUeXBlKSxcbiAgICBtYXBwaW5nX3BhcmFtZXRlcnM6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5tYXBwaW5nUGFyYW1ldGVycyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZWNvcmRfZm9ybWF0X3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdFR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1hcHBpbmdfcGFyYW1ldGVyczoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXBwaW5nUGFyYW1ldGVycyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0VHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRGb3JtYXRUeXBlID0gdGhpcy5fcmVjb3JkRm9ybWF0VHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hcHBpbmdQYXJhbWV0ZXJzID0gdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0VHlwZSA9IHZhbHVlLnJlY29yZEZvcm1hdFR5cGU7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZEZvcm1hdFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfZm9ybWF0X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZEZvcm1hdFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlO1xuICB9XG5cbiAgLy8gbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21hcHBpbmdQYXJhbWV0ZXJzID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibWFwcGluZ19wYXJhbWV0ZXJzXCIpO1xuICBwdWJsaWMgZ2V0IG1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0TWFwcGluZ1BhcmFtZXRlcnModmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXBwaW5nUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNyZWNvcmRfZW5jb2RpbmcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVjb3JkX2VuY29kaW5nfVxuICAqL1xuICByZWFkb25seSByZWNvcmRFbmNvZGluZz86IHN0cmluZztcbiAgLyoqXG4gICogcmVjb3JkX2NvbHVtbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlY29yZF9jb2x1bW4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jcmVjb3JkX2NvbHVtbn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVjb3JkQ29sdW1uOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5bXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiByZWNvcmRfZm9ybWF0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVjb3JkX2Zvcm1hdCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWNvcmRfZm9ybWF0fVxuICAqL1xuICByZWFkb25seSByZWNvcmRGb3JtYXQ6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRW5jb2RpbmcpLFxuICAgIHJlY29yZF9jb2x1bW46IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucmVjb3JkQ29sdW1uKSxcbiAgICByZWNvcmRfZm9ybWF0OiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZWNvcmRfZW5jb2Rpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEVuY29kaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZWNvcmRfY29sdW1uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5yZWNvcmRDb2x1bW4pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5MaXN0XCIsXG4gICAgfSxcbiAgICByZWNvcmRfZm9ybWF0OiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRGb3JtYXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRFbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRFbmNvZGluZyA9IHRoaXMuX3JlY29yZEVuY29kaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZENvbHVtbiA9IHRoaXMuX3JlY29yZENvbHVtbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29yZEZvcm1hdD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRGb3JtYXQgPSB0aGlzLl9yZWNvcmRGb3JtYXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdmFsdWUucmVjb3JkRW5jb2Rpbmc7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW4uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlY29yZENvbHVtbjtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVjb3JkRm9ybWF0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9lbmNvZGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWNvcmRFbmNvZGluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkRW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfZW5jb2RpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZEVuY29kaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlY29yZEVuY29kaW5nKCkge1xuICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRFbmNvZGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRFbmNvZGluZztcbiAgfVxuXG4gIC8vIHJlY29yZF9jb2x1bW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkQ29sdW1uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtbkxpc3QodGhpcywgXCJyZWNvcmRfY29sdW1uXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZENvbHVtbjtcbiAgfVxuICBwdWJsaWMgcHV0UmVjb3JkQ29sdW1uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVjb3JkQ29sdW1uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZENvbHVtbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicmVjb3JkX2Zvcm1hdFwiKTtcbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdDtcbiAgfVxuICBwdWJsaWMgcHV0UmVjb3JkRm9ybWF0KHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXQpIHtcbiAgICB0aGlzLl9yZWNvcmRGb3JtYXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2J1Y2tldF9hcm4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jYnVja2V0X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0QXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNmaWxlX2tleSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNmaWxlX2tleX1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsZUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QXJuKSxcbiAgICBmaWxlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlS2V5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGJ1Y2tldF9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZmlsZV9rZXk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZpbGVLZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2J1Y2tldEFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRBcm4gPSB0aGlzLl9idWNrZXRBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9maWxlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVLZXkgPSB0aGlzLl9maWxlS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZUtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWUuYnVja2V0QXJuO1xuICAgICAgdGhpcy5fZmlsZUtleSA9IHZhbHVlLmZpbGVLZXk7XG4gICAgfVxuICB9XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXRBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRBcm47XG4gIH1cblxuICAvLyBmaWxlX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWxlS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGVLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVLZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlS2V5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiN0YWJsZV9uYW1lIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3RhYmxlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiByZWZlcmVuY2Vfc2NoZW1hIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jcmVmZXJlbmNlX3NjaGVtYSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWZlcmVuY2Vfc2NoZW1hfVxuICAqL1xuICByZWFkb25seSByZWZlcmVuY2VTY2hlbWE6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYTtcbiAgLyoqXG4gICogczNfcmVmZXJlbmNlX2RhdGFfc291cmNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jczNfcmVmZXJlbmNlX2RhdGFfc291cmNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3MzX3JlZmVyZW5jZV9kYXRhX3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgczNSZWZlcmVuY2VEYXRhU291cmNlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YWJsZU5hbWUpLFxuICAgIHJlZmVyZW5jZV9zY2hlbWE6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdCEucmVmZXJlbmNlU2NoZW1hKSxcbiAgICBzM19yZWZlcmVuY2VfZGF0YV9zb3VyY2U6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuczNSZWZlcmVuY2VEYXRhU291cmNlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHRhYmxlX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVmZXJlbmNlX3NjaGVtYToge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVmZXJlbmNlU2NoZW1hKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hTGlzdFwiLFxuICAgIH0sXG4gICAgczNfcmVmZXJlbmNlX2RhdGFfc291cmNlOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zM1JlZmVyZW5jZURhdGFTb3VyY2UpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2VMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90YWJsZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFibGVOYW1lID0gdGhpcy5fdGFibGVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVmZXJlbmNlU2NoZW1hPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZmVyZW5jZVNjaGVtYSA9IHRoaXMuX3JlZmVyZW5jZVNjaGVtYT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzUmVmZXJlbmNlRGF0YVNvdXJjZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM1JlZmVyZW5jZURhdGFTb3VyY2UgPSB0aGlzLl9zM1JlZmVyZW5jZURhdGFTb3VyY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90YWJsZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWZlcmVuY2VTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzUmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90YWJsZU5hbWUgPSB2YWx1ZS50YWJsZU5hbWU7XG4gICAgICB0aGlzLl9yZWZlcmVuY2VTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlZmVyZW5jZVNjaGVtYTtcbiAgICAgIHRoaXMuX3MzUmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuczNSZWZlcmVuY2VEYXRhU291cmNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlZmVyZW5jZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZmVyZW5jZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVmZXJlbmNlX2lkJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhYmxlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFibGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YWJsZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlTmFtZTtcbiAgfVxuXG4gIC8vIHJlZmVyZW5jZV9zY2hlbWEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVmZXJlbmNlU2NoZW1hID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInJlZmVyZW5jZV9zY2hlbWFcIik7XG4gIHB1YmxpYyBnZXQgcmVmZXJlbmNlU2NoZW1hKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VTY2hlbWE7XG4gIH1cbiAgcHVibGljIHB1dFJlZmVyZW5jZVNjaGVtYSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hKSB7XG4gICAgdGhpcy5fcmVmZXJlbmNlU2NoZW1hLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVmZXJlbmNlU2NoZW1hSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVyZW5jZVNjaGVtYS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gczNfcmVmZXJlbmNlX2RhdGFfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzUmVmZXJlbmNlRGF0YVNvdXJjZSA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzM19yZWZlcmVuY2VfZGF0YV9zb3VyY2VcIik7XG4gIHB1YmxpYyBnZXQgczNSZWZlcmVuY2VEYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9zM1JlZmVyZW5jZURhdGFTb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dFMzUmVmZXJlbmNlRGF0YVNvdXJjZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlKSB7XG4gICAgdGhpcy5fczNSZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNSZWZlcmVuY2VEYXRhU291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzUmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogaW5wdXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNpbnB1dCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNpbnB1dH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5wdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0O1xuICAvKipcbiAgKiBvdXRwdXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiNvdXRwdXQgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jb3V0cHV0fVxuICAqL1xuICByZWFkb25seSBvdXRwdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHJlZmVyZW5jZV9kYXRhX3NvdXJjZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3JlZmVyZW5jZV9kYXRhX3NvdXJjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNyZWZlcmVuY2VfZGF0YV9zb3VyY2V9XG4gICovXG4gIHJlYWRvbmx5IHJlZmVyZW5jZURhdGFTb3VyY2U/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5wdXQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0KSxcbiAgICBvdXRwdXQ6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5vdXRwdXQpLFxuICAgIHJlZmVyZW5jZV9kYXRhX3NvdXJjZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5yZWZlcmVuY2VEYXRhU291cmNlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5wdXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0TGlzdFwiLFxuICAgIH0sXG4gICAgb3V0cHV0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLm91dHB1dCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMaXN0XCIsXG4gICAgfSxcbiAgICByZWZlcmVuY2VfZGF0YV9zb3VyY2U6IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlZmVyZW5jZURhdGFTb3VyY2UpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5wdXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5wdXQgPSB0aGlzLl9pbnB1dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX291dHB1dD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdXRwdXQgPSB0aGlzLl9vdXRwdXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZmVyZW5jZURhdGFTb3VyY2UgPSB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3V0cHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lucHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbnB1dDtcbiAgICAgIHRoaXMuX291dHB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWUub3V0cHV0O1xuICAgICAgdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVmZXJlbmNlRGF0YVNvdXJjZTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnB1dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaW5wdXRcIik7XG4gIHB1YmxpYyBnZXQgaW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0O1xuICB9XG4gIHB1YmxpYyBwdXRJbnB1dCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCkge1xuICAgIHRoaXMuX2lucHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3V0cHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX291dHB1dCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExpc3QodGhpcywgXCJvdXRwdXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb3V0cHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXQ7XG4gIH1cbiAgcHVibGljIHB1dE91dHB1dCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3V0cHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXQoKSB7XG4gICAgdGhpcy5fb3V0cHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlZmVyZW5jZV9kYXRhX3NvdXJjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWZlcmVuY2VEYXRhU291cmNlID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInJlZmVyZW5jZV9kYXRhX3NvdXJjZVwiKTtcbiAgcHVibGljIGdldCByZWZlcmVuY2VEYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlO1xuICB9XG4gIHB1YmxpYyBwdXRSZWZlcmVuY2VEYXRhU291cmNlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2UpIHtcbiAgICB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWZlcmVuY2VEYXRhU291cmNlKCkge1xuICAgIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVmZXJlbmNlRGF0YVNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3NlY3VyaXR5X2dyb3VwX2lkcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNzZWN1cml0eV9ncm91cF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZHM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jc3VibmV0X2lkcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNzdWJuZXRfaWRzfVxuICAqL1xuICByZWFkb25seSBzdWJuZXRJZHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc3VibmV0SWRzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHNlY3VyaXR5X2dyb3VwX2lkczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBzdWJuZXRfaWRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc3VibmV0SWRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2VjdXJpdHlHcm91cElkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwSWRzID0gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1Ym5ldElkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJuZXRJZHMgPSB0aGlzLl9zdWJuZXRJZHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0SWRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWUuc2VjdXJpdHlHcm91cElkcztcbiAgICAgIHRoaXMuX3N1Ym5ldElkcyA9IHZhbHVlLnN1Ym5ldElkcztcbiAgICB9XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwSWRzO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdWJuZXRJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1Ym5ldElkcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0SWRzO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZ3VyYXRpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNDb25maWd1cmF0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfY29uZmlndXJhdGlvbl9pZCcpO1xuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIGFwcGxpY2F0aW9uX2NvZGVfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2FwcGxpY2F0aW9uX2NvZGVfY29uZmlndXJhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNhcHBsaWNhdGlvbl9jb2RlX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb246IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogYXBwbGljYXRpb25fc25hcHNob3RfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2FwcGxpY2F0aW9uX3NuYXBzaG90X2NvbmZpZ3VyYXRpb24gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jYXBwbGljYXRpb25fc25hcHNob3RfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBlbnZpcm9ubWVudF9wcm9wZXJ0aWVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jZW52aXJvbm1lbnRfcHJvcGVydGllcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiNlbnZpcm9ubWVudF9wcm9wZXJ0aWVzfVxuICAqL1xuICByZWFkb25seSBlbnZpcm9ubWVudFByb3BlcnRpZXM/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllcztcbiAgLyoqXG4gICogZmxpbmtfYXBwbGljYXRpb25fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2ZsaW5rX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jZmxpbmtfYXBwbGljYXRpb25fY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBydW5fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3J1bl9jb25maWd1cmF0aW9uIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3J1bl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBydW5Db25maWd1cmF0aW9uPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBzcWxfYXBwbGljYXRpb25fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI3NxbF9hcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3NxbF9hcHBsaWNhdGlvbl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBzcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogdnBjX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiN2cGNfY29uZmlndXJhdGlvbiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiN2cGNfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcHBsaWNhdGlvbl9jb2RlX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbiksXG4gICAgYXBwbGljYXRpb25fc25hcHNob3RfY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24pLFxuICAgIGVudmlyb25tZW50X3Byb3BlcnRpZXM6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS5lbnZpcm9ubWVudFByb3BlcnRpZXMpLFxuICAgIGZsaW5rX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKSxcbiAgICBydW5fY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5ydW5Db25maWd1cmF0aW9uKSxcbiAgICBzcWxfYXBwbGljYXRpb25fY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgdnBjX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudnBjQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhcHBsaWNhdGlvbl9jb2RlX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBhcHBsaWNhdGlvbl9zbmFwc2hvdF9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgZW52aXJvbm1lbnRfcHJvcGVydGllczoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbnZpcm9ubWVudFByb3BlcnRpZXMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc0xpc3RcIixcbiAgICB9LFxuICAgIGZsaW5rX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBydW5fY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucnVuQ29uZmlndXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIHNxbF9hcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgdnBjX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZwY0NvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uID0gdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uID0gdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbnZpcm9ubWVudFByb3BlcnRpZXM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW52aXJvbm1lbnRQcm9wZXJ0aWVzID0gdGhpcy5fZW52aXJvbm1lbnRQcm9wZXJ0aWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3J1bkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucnVuQ29uZmlndXJhdGlvbiA9IHRoaXMuX3J1bkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uID0gdGhpcy5fc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdnBjQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52cGNDb25maWd1cmF0aW9uID0gdGhpcy5fdnBjQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3J1bkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdnBjQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fZW52aXJvbm1lbnRQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lbnZpcm9ubWVudFByb3BlcnRpZXM7XG4gICAgICB0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9ydW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ydW5Db25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl92cGNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS52cGNDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX2NvZGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImFwcGxpY2F0aW9uX2NvZGVfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhcHBsaWNhdGlvbl9zbmFwc2hvdF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhcHBsaWNhdGlvbl9zbmFwc2hvdF9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGVudmlyb25tZW50X3Byb3BlcnRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW52aXJvbm1lbnRQcm9wZXJ0aWVzID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZW52aXJvbm1lbnRfcHJvcGVydGllc1wiKTtcbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcztcbiAgfVxuICBwdWJsaWMgcHV0RW52aXJvbm1lbnRQcm9wZXJ0aWVzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllcykge1xuICAgIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW52aXJvbm1lbnRQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFByb3BlcnRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnRQcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmbGlua19hcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJmbGlua19hcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJ1bl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bkNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicnVuX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgcnVuQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVuQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UnVuQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fcnVuQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UnVuQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9ydW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVuQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3FsX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic3FsX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ2cGNfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCB2cGNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92cGNDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRWcGNDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl92cGNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3ZwY0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jbG9nX3N0cmVhbV9hcm4gS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb24jbG9nX3N0cmVhbV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGxvZ1N0cmVhbUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvZ19zdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBsb2dfc3RyZWFtX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbG9nU3RyZWFtQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ1N0cmVhbUFybiA9IHRoaXMuX2xvZ1N0cmVhbUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1Bcm4gPSB2YWx1ZS5sb2dTdHJlYW1Bcm47XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9uX2lkJyk7XG4gIH1cblxuICAvLyBsb2dfc3RyZWFtX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sb2dTdHJlYW1Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ1N0cmVhbUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nU3RyZWFtQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jY3JlYXRlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2NyZWF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jZGVsZXRlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI2RlbGV0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24jdXBkYXRlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uI3VwZGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXBkYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25UaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvblRpbWVvdXRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25UaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjcmVhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGVsZXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHVwZGF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGUgPSB0aGlzLl9jcmVhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVsZXRlID0gdGhpcy5fZGVsZXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvbiBhd3Nfa2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfa2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbiB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3Nfa2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMva2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uIGF3c19raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfa2luZXNpc2FuYWx5dGljc3YyX2FwcGxpY2F0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZm9yY2VTdG9wID0gY29uZmlnLmZvcmNlU3RvcDtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50ID0gY29uZmlnLnJ1bnRpbWVFbnZpcm9ubWVudDtcbiAgICB0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSA9IGNvbmZpZy5zZXJ2aWNlRXhlY3V0aW9uUm9sZTtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gY29uZmlnLnN0YXJ0QXBwbGljYXRpb247XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3JlYXRlX3RpbWVzdGFtcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZVRpbWVzdGFtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZV90aW1lc3RhbXAnKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBmb3JjZV9zdG9wIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcmNlU3RvcD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZm9yY2VTdG9wKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcmNlX3N0b3AnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlU3RvcCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZm9yY2VTdG9wID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VTdG9wKCkge1xuICAgIHRoaXMuX2ZvcmNlU3RvcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yY2VTdG9wSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlU3RvcDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlX3RpbWVzdGFtcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVUaW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZV90aW1lc3RhbXAnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcnVudGltZV9lbnZpcm9ubWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydW50aW1lRW52aXJvbm1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bnRpbWVfZW52aXJvbm1lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bnRpbWVFbnZpcm9ubWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnQ7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2V4ZWN1dGlvbl9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZpY2VFeGVjdXRpb25Sb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlRXhlY3V0aW9uUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfZXhlY3V0aW9uX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VFeGVjdXRpb25Sb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlRXhlY3V0aW9uUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZTtcbiAgfVxuXG4gIC8vIHN0YXJ0X2FwcGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0QXBwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0QXBwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RhcnRfYXBwbGljYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0QXBwbGljYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N0YXJ0QXBwbGljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydEFwcGxpY2F0aW9uKCkge1xuICAgIHRoaXMuX3N0YXJ0QXBwbGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0QXBwbGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRBcHBsaWNhdGlvbjtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmVyc2lvbl9pZCcpO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnModmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0aW1lb3V0c1wiKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvblRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBmb3JjZV9zdG9wOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VTdG9wKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHJ1bnRpbWVfZW52aXJvbm1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudCksXG4gICAgICBzZXJ2aWNlX2V4ZWN1dGlvbl9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSksXG4gICAgICBzdGFydF9hcHBsaWNhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N0YXJ0QXBwbGljYXRpb24pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRpbWVvdXRzOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvblRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBmb3JjZV9zdG9wOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fZm9yY2VTdG9wKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBydW50aW1lX2Vudmlyb25tZW50OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9ydW50aW1lRW52aXJvbm1lbnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzZXJ2aWNlX2V4ZWN1dGlvbl9yb2xlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHN0YXJ0X2FwcGxpY2F0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc3RhcnRBcHBsaWNhdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICBhcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IHtcbiAgICAgICAgdmFsdWU6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9IY2xUZXJyYWZvcm0odGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0aW1lb3V0czoge1xuICAgICAgICB2YWx1ZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25UaW1lb3V0c1RvSGNsVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInN0cnVjdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIktpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uVGltZW91dHNcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==