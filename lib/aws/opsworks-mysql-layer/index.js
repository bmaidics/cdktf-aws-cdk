"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksMysqlLayer = exports.OpsworksMysqlLayerEbsVolumeList = exports.OpsworksMysqlLayerEbsVolumeOutputReference = exports.opsworksMysqlLayerEbsVolumeToHclTerraform = exports.opsworksMysqlLayerEbsVolumeToTerraform = exports.OpsworksMysqlLayerCloudwatchConfigurationOutputReference = exports.opsworksMysqlLayerCloudwatchConfigurationToHclTerraform = exports.opsworksMysqlLayerCloudwatchConfigurationToTerraform = exports.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList = exports.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference = exports.opsworksMysqlLayerCloudwatchConfigurationLogStreamsToHclTerraform = exports.opsworksMysqlLayerCloudwatchConfigurationLogStreamsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksMysqlLayerCloudwatchConfigurationLogStreamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        batch_count: cdktf.numberToTerraform(struct.batchCount),
        batch_size: cdktf.numberToTerraform(struct.batchSize),
        buffer_duration: cdktf.numberToTerraform(struct.bufferDuration),
        datetime_format: cdktf.stringToTerraform(struct.datetimeFormat),
        encoding: cdktf.stringToTerraform(struct.encoding),
        file: cdktf.stringToTerraform(struct.file),
        file_fingerprint_lines: cdktf.stringToTerraform(struct.fileFingerprintLines),
        initial_position: cdktf.stringToTerraform(struct.initialPosition),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        multiline_start_pattern: cdktf.stringToTerraform(struct.multilineStartPattern),
        time_zone: cdktf.stringToTerraform(struct.timeZone),
    };
}
exports.opsworksMysqlLayerCloudwatchConfigurationLogStreamsToTerraform = opsworksMysqlLayerCloudwatchConfigurationLogStreamsToTerraform;
function opsworksMysqlLayerCloudwatchConfigurationLogStreamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        batch_count: {
            value: cdktf.numberToHclTerraform(struct.batchCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        batch_size: {
            value: cdktf.numberToHclTerraform(struct.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        buffer_duration: {
            value: cdktf.numberToHclTerraform(struct.bufferDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        datetime_format: {
            value: cdktf.stringToHclTerraform(struct.datetimeFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encoding: {
            value: cdktf.stringToHclTerraform(struct.encoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file: {
            value: cdktf.stringToHclTerraform(struct.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_fingerprint_lines: {
            value: cdktf.stringToHclTerraform(struct.fileFingerprintLines),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        initial_position: {
            value: cdktf.stringToHclTerraform(struct.initialPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktf.stringToHclTerraform(struct.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multiline_start_pattern: {
            value: cdktf.stringToHclTerraform(struct.multilineStartPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_zone: {
            value: cdktf.stringToHclTerraform(struct.timeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.opsworksMysqlLayerCloudwatchConfigurationLogStreamsToHclTerraform = opsworksMysqlLayerCloudwatchConfigurationLogStreamsToHclTerraform;
class OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
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
        if (this._batchCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchCount = this._batchCount;
        }
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._bufferDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.bufferDuration = this._bufferDuration;
        }
        if (this._datetimeFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.datetimeFormat = this._datetimeFormat;
        }
        if (this._encoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoding = this._encoding;
        }
        if (this._file !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file;
        }
        if (this._fileFingerprintLines !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileFingerprintLines = this._fileFingerprintLines;
        }
        if (this._initialPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialPosition = this._initialPosition;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._multilineStartPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.multilineStartPattern = this._multilineStartPattern;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchCount = undefined;
            this._batchSize = undefined;
            this._bufferDuration = undefined;
            this._datetimeFormat = undefined;
            this._encoding = undefined;
            this._file = undefined;
            this._fileFingerprintLines = undefined;
            this._initialPosition = undefined;
            this._logGroupName = undefined;
            this._multilineStartPattern = undefined;
            this._timeZone = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchCount = value.batchCount;
            this._batchSize = value.batchSize;
            this._bufferDuration = value.bufferDuration;
            this._datetimeFormat = value.datetimeFormat;
            this._encoding = value.encoding;
            this._file = value.file;
            this._fileFingerprintLines = value.fileFingerprintLines;
            this._initialPosition = value.initialPosition;
            this._logGroupName = value.logGroupName;
            this._multilineStartPattern = value.multilineStartPattern;
            this._timeZone = value.timeZone;
        }
    }
    get batchCount() {
        return this.getNumberAttribute('batch_count');
    }
    set batchCount(value) {
        this._batchCount = value;
    }
    resetBatchCount() {
        this._batchCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchCountInput() {
        return this._batchCount;
    }
    get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchSizeInput() {
        return this._batchSize;
    }
    get bufferDuration() {
        return this.getNumberAttribute('buffer_duration');
    }
    set bufferDuration(value) {
        this._bufferDuration = value;
    }
    resetBufferDuration() {
        this._bufferDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferDurationInput() {
        return this._bufferDuration;
    }
    get datetimeFormat() {
        return this.getStringAttribute('datetime_format');
    }
    set datetimeFormat(value) {
        this._datetimeFormat = value;
    }
    resetDatetimeFormat() {
        this._datetimeFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datetimeFormatInput() {
        return this._datetimeFormat;
    }
    get encoding() {
        return this.getStringAttribute('encoding');
    }
    set encoding(value) {
        this._encoding = value;
    }
    resetEncoding() {
        this._encoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encodingInput() {
        return this._encoding;
    }
    get file() {
        return this.getStringAttribute('file');
    }
    set file(value) {
        this._file = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file;
    }
    get fileFingerprintLines() {
        return this.getStringAttribute('file_fingerprint_lines');
    }
    set fileFingerprintLines(value) {
        this._fileFingerprintLines = value;
    }
    resetFileFingerprintLines() {
        this._fileFingerprintLines = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileFingerprintLinesInput() {
        return this._fileFingerprintLines;
    }
    get initialPosition() {
        return this.getStringAttribute('initial_position');
    }
    set initialPosition(value) {
        this._initialPosition = value;
    }
    resetInitialPosition() {
        this._initialPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initialPositionInput() {
        return this._initialPosition;
    }
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    get multilineStartPattern() {
        return this.getStringAttribute('multiline_start_pattern');
    }
    set multilineStartPattern(value) {
        this._multilineStartPattern = value;
    }
    resetMultilineStartPattern() {
        this._multilineStartPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get multilineStartPatternInput() {
        return this._multilineStartPattern;
    }
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    resetTimeZone() {
        this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeZoneInput() {
        return this._timeZone;
    }
}
exports.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference = OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference", version: "0.0.0" };
class OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
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
        return new OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList = OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList;
_b = JSII_RTTI_SYMBOL_1;
OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList[_b] = { fqn: "@cdktf/aws-cdk.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList", version: "0.0.0" };
function opsworksMysqlLayerCloudwatchConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_streams: cdktf.listMapper(opsworksMysqlLayerCloudwatchConfigurationLogStreamsToTerraform, true)(struct.logStreams),
    };
}
exports.opsworksMysqlLayerCloudwatchConfigurationToTerraform = opsworksMysqlLayerCloudwatchConfigurationToTerraform;
function opsworksMysqlLayerCloudwatchConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_streams: {
            value: cdktf.listMapperHcl(opsworksMysqlLayerCloudwatchConfigurationLogStreamsToHclTerraform, true)(struct.logStreams),
            isBlock: true,
            type: "list",
            storageClassType: "OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.opsworksMysqlLayerCloudwatchConfigurationToHclTerraform = opsworksMysqlLayerCloudwatchConfigurationToHclTerraform;
class OpsworksMysqlLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // log_streams - computed: false, optional: true, required: false
        this._logStreams = new OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList(this, "log_streams", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logStreams?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logStreams = this._logStreams?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logStreams.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logStreams.internalValue = value.logStreams;
        }
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get logStreams() {
        return this._logStreams;
    }
    putLogStreams(value) {
        this._logStreams.internalValue = value;
    }
    resetLogStreams() {
        this._logStreams.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamsInput() {
        return this._logStreams.internalValue;
    }
}
exports.OpsworksMysqlLayerCloudwatchConfigurationOutputReference = OpsworksMysqlLayerCloudwatchConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
OpsworksMysqlLayerCloudwatchConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference", version: "0.0.0" };
function opsworksMysqlLayerEbsVolumeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        mount_point: cdktf.stringToTerraform(struct.mountPoint),
        number_of_disks: cdktf.numberToTerraform(struct.numberOfDisks),
        raid_level: cdktf.stringToTerraform(struct.raidLevel),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.opsworksMysqlLayerEbsVolumeToTerraform = opsworksMysqlLayerEbsVolumeToTerraform;
function opsworksMysqlLayerEbsVolumeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        encrypted: {
            value: cdktf.booleanToHclTerraform(struct.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iops: {
            value: cdktf.numberToHclTerraform(struct.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mount_point: {
            value: cdktf.stringToHclTerraform(struct.mountPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        number_of_disks: {
            value: cdktf.numberToHclTerraform(struct.numberOfDisks),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        raid_level: {
            value: cdktf.stringToHclTerraform(struct.raidLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size: {
            value: cdktf.numberToHclTerraform(struct.size),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.opsworksMysqlLayerEbsVolumeToHclTerraform = opsworksMysqlLayerEbsVolumeToHclTerraform;
class OpsworksMysqlLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
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
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._mountPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPoint = this._mountPoint;
        }
        if (this._numberOfDisks !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfDisks = this._numberOfDisks;
        }
        if (this._raidLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.raidLevel = this._raidLevel;
        }
        if (this._size !== undefined) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._mountPoint = undefined;
            this._numberOfDisks = undefined;
            this._raidLevel = undefined;
            this._size = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._mountPoint = value.mountPoint;
            this._numberOfDisks = value.numberOfDisks;
            this._raidLevel = value.raidLevel;
            this._size = value.size;
            this._type = value.type;
        }
    }
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptedInput() {
        return this._encrypted;
    }
    get iops() {
        return this.getNumberAttribute('iops');
    }
    set iops(value) {
        this._iops = value;
    }
    resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iopsInput() {
        return this._iops;
    }
    get mountPoint() {
        return this.getStringAttribute('mount_point');
    }
    set mountPoint(value) {
        this._mountPoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get mountPointInput() {
        return this._mountPoint;
    }
    get numberOfDisks() {
        return this.getNumberAttribute('number_of_disks');
    }
    set numberOfDisks(value) {
        this._numberOfDisks = value;
    }
    // Temporarily expose input value. Use with caution.
    get numberOfDisksInput() {
        return this._numberOfDisks;
    }
    get raidLevel() {
        return this.getStringAttribute('raid_level');
    }
    set raidLevel(value) {
        this._raidLevel = value;
    }
    resetRaidLevel() {
        this._raidLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get raidLevelInput() {
        return this._raidLevel;
    }
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
exports.OpsworksMysqlLayerEbsVolumeOutputReference = OpsworksMysqlLayerEbsVolumeOutputReference;
_d = JSII_RTTI_SYMBOL_1;
OpsworksMysqlLayerEbsVolumeOutputReference[_d] = { fqn: "@cdktf/aws-cdk.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference", version: "0.0.0" };
class OpsworksMysqlLayerEbsVolumeList extends cdktf.ComplexList {
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
        return new OpsworksMysqlLayerEbsVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.OpsworksMysqlLayerEbsVolumeList = OpsworksMysqlLayerEbsVolumeList;
_e = JSII_RTTI_SYMBOL_1;
OpsworksMysqlLayerEbsVolumeList[_e] = { fqn: "@cdktf/aws-cdk.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer aws_opsworks_mysql_layer}
*/
class OpsworksMysqlLayer extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OpsworksMysqlLayer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksMysqlLayer to import
    * @param importFromId The id of the existing OpsworksMysqlLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksMysqlLayer to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opsworks_mysql_layer", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer aws_opsworks_mysql_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksMysqlLayerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_mysql_layer',
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
        // cloudwatch_configuration - computed: false, optional: true, required: false
        this._cloudwatchConfiguration = new OpsworksMysqlLayerCloudwatchConfigurationOutputReference(this, "cloudwatch_configuration");
        // ebs_volume - computed: false, optional: true, required: false
        this._ebsVolume = new OpsworksMysqlLayerEbsVolumeList(this, "ebs_volume", true);
        this._autoAssignElasticIps = config.autoAssignElasticIps;
        this._autoAssignPublicIps = config.autoAssignPublicIps;
        this._autoHealing = config.autoHealing;
        this._customConfigureRecipes = config.customConfigureRecipes;
        this._customDeployRecipes = config.customDeployRecipes;
        this._customInstanceProfileArn = config.customInstanceProfileArn;
        this._customJson = config.customJson;
        this._customSecurityGroupIds = config.customSecurityGroupIds;
        this._customSetupRecipes = config.customSetupRecipes;
        this._customShutdownRecipes = config.customShutdownRecipes;
        this._customUndeployRecipes = config.customUndeployRecipes;
        this._drainElbOnShutdown = config.drainElbOnShutdown;
        this._elasticLoadBalancer = config.elasticLoadBalancer;
        this._id = config.id;
        this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        this._instanceShutdownTimeout = config.instanceShutdownTimeout;
        this._name = config.name;
        this._rootPassword = config.rootPassword;
        this._rootPasswordOnAllInstances = config.rootPasswordOnAllInstances;
        this._stackId = config.stackId;
        this._systemPackages = config.systemPackages;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
        this._cloudwatchConfiguration.internalValue = config.cloudwatchConfiguration;
        this._ebsVolume.internalValue = config.ebsVolume;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoAssignElasticIps() {
        return this.getBooleanAttribute('auto_assign_elastic_ips');
    }
    set autoAssignElasticIps(value) {
        this._autoAssignElasticIps = value;
    }
    resetAutoAssignElasticIps() {
        this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoAssignElasticIpsInput() {
        return this._autoAssignElasticIps;
    }
    get autoAssignPublicIps() {
        return this.getBooleanAttribute('auto_assign_public_ips');
    }
    set autoAssignPublicIps(value) {
        this._autoAssignPublicIps = value;
    }
    resetAutoAssignPublicIps() {
        this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoAssignPublicIpsInput() {
        return this._autoAssignPublicIps;
    }
    get autoHealing() {
        return this.getBooleanAttribute('auto_healing');
    }
    set autoHealing(value) {
        this._autoHealing = value;
    }
    resetAutoHealing() {
        this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoHealingInput() {
        return this._autoHealing;
    }
    get customConfigureRecipes() {
        return this.getListAttribute('custom_configure_recipes');
    }
    set customConfigureRecipes(value) {
        this._customConfigureRecipes = value;
    }
    resetCustomConfigureRecipes() {
        this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customConfigureRecipesInput() {
        return this._customConfigureRecipes;
    }
    get customDeployRecipes() {
        return this.getListAttribute('custom_deploy_recipes');
    }
    set customDeployRecipes(value) {
        this._customDeployRecipes = value;
    }
    resetCustomDeployRecipes() {
        this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customDeployRecipesInput() {
        return this._customDeployRecipes;
    }
    get customInstanceProfileArn() {
        return this.getStringAttribute('custom_instance_profile_arn');
    }
    set customInstanceProfileArn(value) {
        this._customInstanceProfileArn = value;
    }
    resetCustomInstanceProfileArn() {
        this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customInstanceProfileArnInput() {
        return this._customInstanceProfileArn;
    }
    get customJson() {
        return this.getStringAttribute('custom_json');
    }
    set customJson(value) {
        this._customJson = value;
    }
    resetCustomJson() {
        this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customJsonInput() {
        return this._customJson;
    }
    get customSecurityGroupIds() {
        return cdktf.Fn.tolist(this.getListAttribute('custom_security_group_ids'));
    }
    set customSecurityGroupIds(value) {
        this._customSecurityGroupIds = value;
    }
    resetCustomSecurityGroupIds() {
        this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customSecurityGroupIdsInput() {
        return this._customSecurityGroupIds;
    }
    get customSetupRecipes() {
        return this.getListAttribute('custom_setup_recipes');
    }
    set customSetupRecipes(value) {
        this._customSetupRecipes = value;
    }
    resetCustomSetupRecipes() {
        this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customSetupRecipesInput() {
        return this._customSetupRecipes;
    }
    get customShutdownRecipes() {
        return this.getListAttribute('custom_shutdown_recipes');
    }
    set customShutdownRecipes(value) {
        this._customShutdownRecipes = value;
    }
    resetCustomShutdownRecipes() {
        this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customShutdownRecipesInput() {
        return this._customShutdownRecipes;
    }
    get customUndeployRecipes() {
        return this.getListAttribute('custom_undeploy_recipes');
    }
    set customUndeployRecipes(value) {
        this._customUndeployRecipes = value;
    }
    resetCustomUndeployRecipes() {
        this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customUndeployRecipesInput() {
        return this._customUndeployRecipes;
    }
    get drainElbOnShutdown() {
        return this.getBooleanAttribute('drain_elb_on_shutdown');
    }
    set drainElbOnShutdown(value) {
        this._drainElbOnShutdown = value;
    }
    resetDrainElbOnShutdown() {
        this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get drainElbOnShutdownInput() {
        return this._drainElbOnShutdown;
    }
    get elasticLoadBalancer() {
        return this.getStringAttribute('elastic_load_balancer');
    }
    set elasticLoadBalancer(value) {
        this._elasticLoadBalancer = value;
    }
    resetElasticLoadBalancer() {
        this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticLoadBalancerInput() {
        return this._elasticLoadBalancer;
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
    get installUpdatesOnBoot() {
        return this.getBooleanAttribute('install_updates_on_boot');
    }
    set installUpdatesOnBoot(value) {
        this._installUpdatesOnBoot = value;
    }
    resetInstallUpdatesOnBoot() {
        this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get installUpdatesOnBootInput() {
        return this._installUpdatesOnBoot;
    }
    get instanceShutdownTimeout() {
        return this.getNumberAttribute('instance_shutdown_timeout');
    }
    set instanceShutdownTimeout(value) {
        this._instanceShutdownTimeout = value;
    }
    resetInstanceShutdownTimeout() {
        this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceShutdownTimeoutInput() {
        return this._instanceShutdownTimeout;
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
    get rootPassword() {
        return this.getStringAttribute('root_password');
    }
    set rootPassword(value) {
        this._rootPassword = value;
    }
    resetRootPassword() {
        this._rootPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootPasswordInput() {
        return this._rootPassword;
    }
    get rootPasswordOnAllInstances() {
        return this.getBooleanAttribute('root_password_on_all_instances');
    }
    set rootPasswordOnAllInstances(value) {
        this._rootPasswordOnAllInstances = value;
    }
    resetRootPasswordOnAllInstances() {
        this._rootPasswordOnAllInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootPasswordOnAllInstancesInput() {
        return this._rootPasswordOnAllInstances;
    }
    get stackId() {
        return this.getStringAttribute('stack_id');
    }
    set stackId(value) {
        this._stackId = value;
    }
    // Temporarily expose input value. Use with caution.
    get stackIdInput() {
        return this._stackId;
    }
    get systemPackages() {
        return cdktf.Fn.tolist(this.getListAttribute('system_packages'));
    }
    set systemPackages(value) {
        this._systemPackages = value;
    }
    resetSystemPackages() {
        this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get systemPackagesInput() {
        return this._systemPackages;
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
    get useEbsOptimizedInstances() {
        return this.getBooleanAttribute('use_ebs_optimized_instances');
    }
    set useEbsOptimizedInstances(value) {
        this._useEbsOptimizedInstances = value;
    }
    resetUseEbsOptimizedInstances() {
        this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useEbsOptimizedInstancesInput() {
        return this._useEbsOptimizedInstances;
    }
    get cloudwatchConfiguration() {
        return this._cloudwatchConfiguration;
    }
    putCloudwatchConfiguration(value) {
        this._cloudwatchConfiguration.internalValue = value;
    }
    resetCloudwatchConfiguration() {
        this._cloudwatchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchConfigurationInput() {
        return this._cloudwatchConfiguration.internalValue;
    }
    get ebsVolume() {
        return this._ebsVolume;
    }
    putEbsVolume(value) {
        this._ebsVolume.internalValue = value;
    }
    resetEbsVolume() {
        this._ebsVolume.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsVolumeInput() {
        return this._ebsVolume.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
            auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
            auto_healing: cdktf.booleanToTerraform(this._autoHealing),
            custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customConfigureRecipes),
            custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDeployRecipes),
            custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
            custom_json: cdktf.stringToTerraform(this._customJson),
            custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSecurityGroupIds),
            custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSetupRecipes),
            custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customShutdownRecipes),
            custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customUndeployRecipes),
            drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
            elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
            id: cdktf.stringToTerraform(this._id),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
            name: cdktf.stringToTerraform(this._name),
            root_password: cdktf.stringToTerraform(this._rootPassword),
            root_password_on_all_instances: cdktf.booleanToTerraform(this._rootPasswordOnAllInstances),
            stack_id: cdktf.stringToTerraform(this._stackId),
            system_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemPackages),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
            cloudwatch_configuration: opsworksMysqlLayerCloudwatchConfigurationToTerraform(this._cloudwatchConfiguration.internalValue),
            ebs_volume: cdktf.listMapper(opsworksMysqlLayerEbsVolumeToTerraform, true)(this._ebsVolume.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            auto_assign_elastic_ips: {
                value: cdktf.booleanToHclTerraform(this._autoAssignElasticIps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_assign_public_ips: {
                value: cdktf.booleanToHclTerraform(this._autoAssignPublicIps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_healing: {
                value: cdktf.booleanToHclTerraform(this._autoHealing),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            custom_configure_recipes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customConfigureRecipes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            custom_deploy_recipes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customDeployRecipes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            custom_instance_profile_arn: {
                value: cdktf.stringToHclTerraform(this._customInstanceProfileArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_json: {
                value: cdktf.stringToHclTerraform(this._customJson),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_security_group_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSecurityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            custom_setup_recipes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSetupRecipes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            custom_shutdown_recipes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customShutdownRecipes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            custom_undeploy_recipes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customUndeployRecipes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            drain_elb_on_shutdown: {
                value: cdktf.booleanToHclTerraform(this._drainElbOnShutdown),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            elastic_load_balancer: {
                value: cdktf.stringToHclTerraform(this._elasticLoadBalancer),
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
            install_updates_on_boot: {
                value: cdktf.booleanToHclTerraform(this._installUpdatesOnBoot),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            instance_shutdown_timeout: {
                value: cdktf.numberToHclTerraform(this._instanceShutdownTimeout),
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
            root_password: {
                value: cdktf.stringToHclTerraform(this._rootPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            root_password_on_all_instances: {
                value: cdktf.booleanToHclTerraform(this._rootPasswordOnAllInstances),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stack_id: {
                value: cdktf.stringToHclTerraform(this._stackId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            system_packages: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemPackages),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
            use_ebs_optimized_instances: {
                value: cdktf.booleanToHclTerraform(this._useEbsOptimizedInstances),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cloudwatch_configuration: {
                value: opsworksMysqlLayerCloudwatchConfigurationToHclTerraform(this._cloudwatchConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "OpsworksMysqlLayerCloudwatchConfigurationList",
            },
            ebs_volume: {
                value: cdktf.listMapperHcl(opsworksMysqlLayerEbsVolumeToHclTerraform, true)(this._ebsVolume.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "OpsworksMysqlLayerEbsVolumeList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.OpsworksMysqlLayer = OpsworksMysqlLayer;
_f = JSII_RTTI_SYMBOL_1;
OpsworksMysqlLayer[_f] = { fqn: "@cdktf/aws-cdk.opsworksMysqlLayer.OpsworksMysqlLayer", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
OpsworksMysqlLayer.tfResourceType = "aws_opsworks_mysql_layer";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL29wc3dvcmtzLW15c3FsLWxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBb0svQixTQUFnQiw4REFBOEQsQ0FBQyxNQUFnRjtJQUM3SixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0Msc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNs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LGdCQUFnQixFQUFFLFNBQVM7YUFDNUI7WUFDRCx3QkFBd0IsRUFBRTtnQkFDeEIsS0FBSyxFQUFFLHVEQUF1RCxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7Z0JBQzNHLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLCtDQUErQzthQUNsRTtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztnQkFDMUcsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsZ0JBQWdCLEVBQUUsaUNBQWlDO2FBQ3BEO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUF2ckJILGdEQXdyQkM7OztBQXRyQkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxpQ0FBYyxHQUFHLDBCQUEwQixBQUE3QixDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NNeXNxbExheWVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2F1dG9fYXNzaWduX2VsYXN0aWNfaXBzIE9wc3dvcmtzTXlzcWxMYXllciNhdXRvX2Fzc2lnbl9lbGFzdGljX2lwc31cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b0Fzc2lnbkVsYXN0aWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2F1dG9fYXNzaWduX3B1YmxpY19pcHMgT3Bzd29ya3NNeXNxbExheWVyI2F1dG9fYXNzaWduX3B1YmxpY19pcHN9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9Bc3NpZ25QdWJsaWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2F1dG9faGVhbGluZyBPcHN3b3Jrc015c3FsTGF5ZXIjYXV0b19oZWFsaW5nfVxuICAqL1xuICByZWFkb25seSBhdXRvSGVhbGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjY3VzdG9tX2NvbmZpZ3VyZV9yZWNpcGVzIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21fY29uZmlndXJlX3JlY2lwZXN9XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjY3VzdG9tX2RlcGxveV9yZWNpcGVzIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21fZGVwbG95X3JlY2lwZXN9XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbURlcGxveVJlY2lwZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjY3VzdG9tX2luc3RhbmNlX3Byb2ZpbGVfYXJuIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21faW5zdGFuY2VfcHJvZmlsZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjY3VzdG9tX2pzb24gT3Bzd29ya3NNeXNxbExheWVyI2N1c3RvbV9qc29ufVxuICAqL1xuICByZWFkb25seSBjdXN0b21Kc29uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzfVxuICAqL1xuICByZWFkb25seSBjdXN0b21TZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2N1c3RvbV9zZXR1cF9yZWNpcGVzIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21fc2V0dXBfcmVjaXBlc31cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tU2V0dXBSZWNpcGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2N1c3RvbV9zaHV0ZG93bl9yZWNpcGVzIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21fc2h1dGRvd25fcmVjaXBlc31cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tU2h1dGRvd25SZWNpcGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2N1c3RvbV91bmRlcGxveV9yZWNpcGVzIE9wc3dvcmtzTXlzcWxMYXllciNjdXN0b21fdW5kZXBsb3lfcmVjaXBlc31cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tVW5kZXBsb3lSZWNpcGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2RyYWluX2VsYl9vbl9zaHV0ZG93biBPcHN3b3Jrc015c3FsTGF5ZXIjZHJhaW5fZWxiX29uX3NodXRkb3dufVxuICAqL1xuICByZWFkb25seSBkcmFpbkVsYk9uU2h1dGRvd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2VsYXN0aWNfbG9hZF9iYWxhbmNlciBPcHN3b3Jrc015c3FsTGF5ZXIjZWxhc3RpY19sb2FkX2JhbGFuY2VyfVxuICAqL1xuICByZWFkb25seSBlbGFzdGljTG9hZEJhbGFuY2VyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNpZCBPcHN3b3Jrc015c3FsTGF5ZXIjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2luc3RhbGxfdXBkYXRlc19vbl9ib290IE9wc3dvcmtzTXlzcWxMYXllciNpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFsbFVwZGF0ZXNPbkJvb3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2luc3RhbmNlX3NodXRkb3duX3RpbWVvdXQgT3Bzd29ya3NNeXNxbExheWVyI2luc3RhbmNlX3NodXRkb3duX3RpbWVvdXR9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNuYW1lIE9wc3dvcmtzTXlzcWxMYXllciNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNyb290X3Bhc3N3b3JkIE9wc3dvcmtzTXlzcWxMYXllciNyb290X3Bhc3N3b3JkfVxuICAqL1xuICByZWFkb25seSByb290UGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI3Jvb3RfcGFzc3dvcmRfb25fYWxsX2luc3RhbmNlcyBPcHN3b3Jrc015c3FsTGF5ZXIjcm9vdF9wYXNzd29yZF9vbl9hbGxfaW5zdGFuY2VzfVxuICAqL1xuICByZWFkb25seSByb290UGFzc3dvcmRPbkFsbEluc3RhbmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjc3RhY2tfaWQgT3Bzd29ya3NNeXNxbExheWVyI3N0YWNrX2lkfVxuICAqL1xuICByZWFkb25seSBzdGFja0lkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI3N5c3RlbV9wYWNrYWdlcyBPcHN3b3Jrc015c3FsTGF5ZXIjc3lzdGVtX3BhY2thZ2VzfVxuICAqL1xuICByZWFkb25seSBzeXN0ZW1QYWNrYWdlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciN0YWdzIE9wc3dvcmtzTXlzcWxMYXllciN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjdGFnc19hbGwgT3Bzd29ya3NNeXNxbExheWVyI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjdXNlX2Vic19vcHRpbWl6ZWRfaW5zdGFuY2VzIE9wc3dvcmtzTXlzcWxMYXllciN1c2VfZWJzX29wdGltaXplZF9pbnN0YW5jZXN9XG4gICovXG4gIHJlYWRvbmx5IHVzZUVic09wdGltaXplZEluc3RhbmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogY2xvdWR3YXRjaF9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNjbG91ZHdhdGNoX2NvbmZpZ3VyYXRpb24gT3Bzd29ya3NNeXNxbExheWVyI2Nsb3Vkd2F0Y2hfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWR3YXRjaENvbmZpZ3VyYXRpb24/OiBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogZWJzX3ZvbHVtZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjZWJzX3ZvbHVtZSBPcHN3b3Jrc015c3FsTGF5ZXIjZWJzX3ZvbHVtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZWJzVm9sdW1lPzogT3Bzd29ya3NNeXNxbExheWVyRWJzVm9sdW1lW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Mb2dTdHJlYW1zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjYmF0Y2hfY291bnQgT3Bzd29ya3NNeXNxbExheWVyI2JhdGNoX2NvdW50fVxuICAqL1xuICByZWFkb25seSBiYXRjaENvdW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNiYXRjaF9zaXplIE9wc3dvcmtzTXlzcWxMYXllciNiYXRjaF9zaXplfVxuICAqL1xuICByZWFkb25seSBiYXRjaFNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2J1ZmZlcl9kdXJhdGlvbiBPcHN3b3Jrc015c3FsTGF5ZXIjYnVmZmVyX2R1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBidWZmZXJEdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjZGF0ZXRpbWVfZm9ybWF0IE9wc3dvcmtzTXlzcWxMYXllciNkYXRldGltZV9mb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IGRhdGV0aW1lRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNlbmNvZGluZyBPcHN3b3Jrc015c3FsTGF5ZXIjZW5jb2Rpbmd9XG4gICovXG4gIHJlYWRvbmx5IGVuY29kaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNmaWxlIE9wc3dvcmtzTXlzcWxMYXllciNmaWxlfVxuICAqL1xuICByZWFkb25seSBmaWxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2ZpbGVfZmluZ2VycHJpbnRfbGluZXMgT3Bzd29ya3NNeXNxbExheWVyI2ZpbGVfZmluZ2VycHJpbnRfbGluZXN9XG4gICovXG4gIHJlYWRvbmx5IGZpbGVGaW5nZXJwcmludExpbmVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNpbml0aWFsX3Bvc2l0aW9uIE9wc3dvcmtzTXlzcWxMYXllciNpbml0aWFsX3Bvc2l0aW9ufVxuICAqL1xuICByZWFkb25seSBpbml0aWFsUG9zaXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2xvZ19ncm91cF9uYW1lIE9wc3dvcmtzTXlzcWxMYXllciNsb2dfZ3JvdXBfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbG9nR3JvdXBOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI211bHRpbGluZV9zdGFydF9wYXR0ZXJuIE9wc3dvcmtzTXlzcWxMYXllciNtdWx0aWxpbmVfc3RhcnRfcGF0dGVybn1cbiAgKi9cbiAgcmVhZG9ubHkgbXVsdGlsaW5lU3RhcnRQYXR0ZXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciN0aW1lX3pvbmUgT3Bzd29ya3NNeXNxbExheWVyI3RpbWVfem9uZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGltZVpvbmU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBiYXRjaF9jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5iYXRjaENvdW50KSxcbiAgICBiYXRjaF9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoU2l6ZSksXG4gICAgYnVmZmVyX2R1cmF0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlckR1cmF0aW9uKSxcbiAgICBkYXRldGltZV9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZXRpbWVGb3JtYXQpLFxuICAgIGVuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY29kaW5nKSxcbiAgICBmaWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGUpLFxuICAgIGZpbGVfZmluZ2VycHJpbnRfbGluZXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZUZpbmdlcnByaW50TGluZXMpLFxuICAgIGluaXRpYWxfcG9zaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbFBvc2l0aW9uKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIG11bHRpbGluZV9zdGFydF9wYXR0ZXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm11bHRpbGluZVN0YXJ0UGF0dGVybiksXG4gICAgdGltZV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVab25lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYmF0Y2hfY291bnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoQ291bnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGJhdGNoX3NpemU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoU2l6ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgYnVmZmVyX2R1cmF0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWZmZXJEdXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgZGF0ZXRpbWVfZm9ybWF0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kYXRldGltZUZvcm1hdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZW5jb2Rpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVuY29kaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmaWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmaWxlX2ZpbmdlcnByaW50X2xpbmVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlRmluZ2VycHJpbnRMaW5lcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW5pdGlhbF9wb3NpdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsb2dfZ3JvdXBfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtdWx0aWxpbmVfc3RhcnRfcGF0dGVybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubXVsdGlsaW5lU3RhcnRQYXR0ZXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0aW1lX3pvbmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWVab25lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uTG9nU3RyZWFtc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2JhdGNoQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmF0Y2hDb3VudCA9IHRoaXMuX2JhdGNoQ291bnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9iYXRjaFNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmF0Y2hTaXplID0gdGhpcy5fYmF0Y2hTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYnVmZmVyRHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVmZmVyRHVyYXRpb24gPSB0aGlzLl9idWZmZXJEdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RhdGV0aW1lRm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGV0aW1lRm9ybWF0ID0gdGhpcy5fZGF0ZXRpbWVGb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNvZGluZyA9IHRoaXMuX2VuY29kaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maWxlID0gdGhpcy5fZmlsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGVGaW5nZXJwcmludExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVGaW5nZXJwcmludExpbmVzID0gdGhpcy5fZmlsZUZpbmdlcnByaW50TGluZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbml0aWFsUG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5faW5pdGlhbFBvc2l0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nR3JvdXBOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ0dyb3VwTmFtZSA9IHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX211bHRpbGluZVN0YXJ0UGF0dGVybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tdWx0aWxpbmVTdGFydFBhdHRlcm4gPSB0aGlzLl9tdWx0aWxpbmVTdGFydFBhdHRlcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lWm9uZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lWm9uZSA9IHRoaXMuX3RpbWVab25lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Mb2dTdHJlYW1zIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JhdGNoQ291bnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iYXRjaFNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWZmZXJEdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RhdGV0aW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZUZpbmdlcnByaW50TGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbml0aWFsUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tdWx0aWxpbmVTdGFydFBhdHRlcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lWm9uZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iYXRjaENvdW50ID0gdmFsdWUuYmF0Y2hDb3VudDtcbiAgICAgIHRoaXMuX2JhdGNoU2l6ZSA9IHZhbHVlLmJhdGNoU2l6ZTtcbiAgICAgIHRoaXMuX2J1ZmZlckR1cmF0aW9uID0gdmFsdWUuYnVmZmVyRHVyYXRpb247XG4gICAgICB0aGlzLl9kYXRldGltZUZvcm1hdCA9IHZhbHVlLmRhdGV0aW1lRm9ybWF0O1xuICAgICAgdGhpcy5fZW5jb2RpbmcgPSB2YWx1ZS5lbmNvZGluZztcbiAgICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fZmlsZUZpbmdlcnByaW50TGluZXMgPSB2YWx1ZS5maWxlRmluZ2VycHJpbnRMaW5lcztcbiAgICAgIHRoaXMuX2luaXRpYWxQb3NpdGlvbiA9IHZhbHVlLmluaXRpYWxQb3NpdGlvbjtcbiAgICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHZhbHVlLmxvZ0dyb3VwTmFtZTtcbiAgICAgIHRoaXMuX211bHRpbGluZVN0YXJ0UGF0dGVybiA9IHZhbHVlLm11bHRpbGluZVN0YXJ0UGF0dGVybjtcbiAgICAgIHRoaXMuX3RpbWVab25lID0gdmFsdWUudGltZVpvbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gYmF0Y2hfY291bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmF0Y2hDb3VudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmF0Y2hDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2JhdGNoX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBiYXRjaENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYXRjaENvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmF0Y2hDb3VudCgpIHtcbiAgICB0aGlzLl9iYXRjaENvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXRjaENvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhdGNoQ291bnQ7XG4gIH1cblxuICAvLyBiYXRjaF9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhdGNoU2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmF0Y2hTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmF0Y2hfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmF0Y2hTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYXRjaFNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYXRjaFNpemUoKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXRjaFNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmF0Y2hTaXplO1xuICB9XG5cbiAgLy8gYnVmZmVyX2R1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1ZmZlckR1cmF0aW9uPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBidWZmZXJEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2J1ZmZlcl9kdXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVmZmVyRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlckR1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVmZmVyRHVyYXRpb24oKSB7XG4gICAgdGhpcy5fYnVmZmVyRHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1ZmZlckR1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlckR1cmF0aW9uO1xuICB9XG5cbiAgLy8gZGF0ZXRpbWVfZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGV0aW1lRm9ybWF0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRldGltZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGV0aW1lX2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0ZXRpbWVGb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGV0aW1lRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0ZXRpbWVGb3JtYXQoKSB7XG4gICAgdGhpcy5fZGF0ZXRpbWVGb3JtYXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGV0aW1lRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lRm9ybWF0O1xuICB9XG5cbiAgLy8gZW5jb2RpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jb2Rpbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuY29kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5jb2RpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY29kaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY29kaW5nKCkge1xuICAgIHRoaXMuX2VuY29kaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNvZGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNvZGluZztcbiAgfVxuXG4gIC8vIGZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG5cbiAgLy8gZmlsZV9maW5nZXJwcmludF9saW5lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlRmluZ2VycHJpbnRMaW5lcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZUZpbmdlcnByaW50TGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX2ZpbmdlcnByaW50X2xpbmVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlRmluZ2VycHJpbnRMaW5lcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsZUZpbmdlcnByaW50TGluZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlRmluZ2VycHJpbnRMaW5lcygpIHtcbiAgICB0aGlzLl9maWxlRmluZ2VycHJpbnRMaW5lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUZpbmdlcnByaW50TGluZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZUZpbmdlcnByaW50TGluZXM7XG4gIH1cblxuICAvLyBpbml0aWFsX3Bvc2l0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luaXRpYWxQb3NpdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5pdGlhbFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5pdGlhbF9wb3NpdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5pdGlhbFBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbml0aWFsUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbml0aWFsUG9zaXRpb24oKSB7XG4gICAgdGhpcy5faW5pdGlhbFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbml0aWFsUG9zaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbFBvc2l0aW9uO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbG9nR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIG11bHRpbGluZV9zdGFydF9wYXR0ZXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX211bHRpbGluZVN0YXJ0UGF0dGVybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbXVsdGlsaW5lU3RhcnRQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbXVsdGlsaW5lX3N0YXJ0X3BhdHRlcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG11bHRpbGluZVN0YXJ0UGF0dGVybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbXVsdGlsaW5lU3RhcnRQYXR0ZXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TXVsdGlsaW5lU3RhcnRQYXR0ZXJuKCkge1xuICAgIHRoaXMuX211bHRpbGluZVN0YXJ0UGF0dGVybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbXVsdGlsaW5lU3RhcnRQYXR0ZXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpbGluZVN0YXJ0UGF0dGVybjtcbiAgfVxuXG4gIC8vIHRpbWVfem9uZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lWm9uZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGltZVpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lX3pvbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVab25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aW1lWm9uZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVab25lKCkge1xuICAgIHRoaXMuX3RpbWVab25lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lWm9uZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lWm9uZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Mb2dTdHJlYW1zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Mb2dTdHJlYW1zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uTG9nU3RyZWFtc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI2VuYWJsZWQgT3Bzd29ya3NNeXNxbExheWVyI2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGxvZ19zdHJlYW1zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNsb2dfc3RyZWFtcyBPcHN3b3Jrc015c3FsTGF5ZXIjbG9nX3N0cmVhbXN9XG4gICovXG4gIHJlYWRvbmx5IGxvZ1N0cmVhbXM/OiBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbkxvZ1N0cmVhbXNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IE9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19zdHJlYW1zOiBjZGt0Zi5saXN0TWFwcGVyKG9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uTG9nU3RyZWFtc1RvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmxvZ1N0cmVhbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBPcHN3b3Jrc015c3FsTGF5ZXJDbG91ZHdhdGNoQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBsb2dfc3RyZWFtczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wob3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Mb2dTdHJlYW1zVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEubG9nU3RyZWFtcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uTG9nU3RyZWFtc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nU3RyZWFtcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dTdHJlYW1zID0gdGhpcy5fbG9nU3RyZWFtcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvZ1N0cmVhbXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sb2dTdHJlYW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBsb2dfc3RyZWFtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dTdHJlYW1zID0gbmV3IE9wc3dvcmtzTXlzcWxMYXllckNsb3Vkd2F0Y2hDb25maWd1cmF0aW9uTG9nU3RyZWFtc0xpc3QodGhpcywgXCJsb2dfc3RyZWFtc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nU3RyZWFtcztcbiAgfVxuICBwdWJsaWMgcHV0TG9nU3RyZWFtcyh2YWx1ZTogT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Mb2dTdHJlYW1zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2xvZ1N0cmVhbXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ1N0cmVhbXMoKSB7XG4gICAgdGhpcy5fbG9nU3RyZWFtcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNlbmNyeXB0ZWQgT3Bzd29ya3NNeXNxbExheWVyI2VuY3J5cHRlZH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNpb3BzIE9wc3dvcmtzTXlzcWxMYXllciNpb3BzfVxuICAqL1xuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNtb3VudF9wb2ludCBPcHN3b3Jrc015c3FsTGF5ZXIjbW91bnRfcG9pbnR9XG4gICovXG4gIHJlYWRvbmx5IG1vdW50UG9pbnQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjbnVtYmVyX29mX2Rpc2tzIE9wc3dvcmtzTXlzcWxMYXllciNudW1iZXJfb2ZfZGlza3N9XG4gICovXG4gIHJlYWRvbmx5IG51bWJlck9mRGlza3M6IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvb3Bzd29ya3NfbXlzcWxfbGF5ZXIjcmFpZF9sZXZlbCBPcHN3b3Jrc015c3FsTGF5ZXIjcmFpZF9sZXZlbH1cbiAgKi9cbiAgcmVhZG9ubHkgcmFpZExldmVsPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNzaXplIE9wc3dvcmtzTXlzcWxMYXllciNzaXplfVxuICAqL1xuICByZWFkb25seSBzaXplOiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyI3R5cGUgT3Bzd29ya3NNeXNxbExheWVyI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmNyeXB0ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRlZCksXG4gICAgaW9wczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pb3BzKSxcbiAgICBtb3VudF9wb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb3VudFBvaW50KSxcbiAgICBudW1iZXJfb2ZfZGlza3M6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubnVtYmVyT2ZEaXNrcyksXG4gICAgcmFpZF9sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yYWlkTGV2ZWwpLFxuICAgIHNpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZW5jcnlwdGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW9wczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgbW91bnRfcG9pbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1vdW50UG9pbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG51bWJlcl9vZl9kaXNrczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubnVtYmVyT2ZEaXNrcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgcmFpZF9sZXZlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmFpZExldmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE9wc3dvcmtzTXlzcWxMYXllckVic1ZvbHVtZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0ZWQgPSB0aGlzLl9lbmNyeXB0ZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlvcHMgPSB0aGlzLl9pb3BzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW91bnRQb2ludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb3VudFBvaW50ID0gdGhpcy5fbW91bnRQb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX251bWJlck9mRGlza3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubnVtYmVyT2ZEaXNrcyA9IHRoaXMuX251bWJlck9mRGlza3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yYWlkTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmFpZExldmVsID0gdGhpcy5fcmFpZExldmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaXplID0gdGhpcy5fc2l6ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21vdW50UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9udW1iZXJPZkRpc2tzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmFpZExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWUuZW5jcnlwdGVkO1xuICAgICAgdGhpcy5faW9wcyA9IHZhbHVlLmlvcHM7XG4gICAgICB0aGlzLl9tb3VudFBvaW50ID0gdmFsdWUubW91bnRQb2ludDtcbiAgICAgIHRoaXMuX251bWJlck9mRGlza3MgPSB2YWx1ZS5udW1iZXJPZkRpc2tzO1xuICAgICAgdGhpcy5fcmFpZExldmVsID0gdmFsdWUucmFpZExldmVsO1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlLnNpemU7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmNyeXB0ZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5jcnlwdGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRlZCgpIHtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cblxuICAvLyBpb3BzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lvcHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGlvcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpb3BzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpb3BzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pb3BzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW9wcygpIHtcbiAgICB0aGlzLl9pb3BzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpb3BzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lvcHM7XG4gIH1cblxuICAvLyBtb3VudF9wb2ludCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tb3VudFBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb3VudFBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW91bnRfcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vdW50UG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vdW50UG9pbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW91bnRQb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb3VudFBvaW50O1xuICB9XG5cbiAgLy8gbnVtYmVyX29mX2Rpc2tzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX251bWJlck9mRGlza3M/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG51bWJlck9mRGlza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdudW1iZXJfb2ZfZGlza3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG51bWJlck9mRGlza3ModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mRGlza3MgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbnVtYmVyT2ZEaXNrc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkRpc2tzO1xuICB9XG5cbiAgLy8gcmFpZF9sZXZlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yYWlkTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJhaWRMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JhaWRfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJhaWRMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmFpZExldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmFpZExldmVsKCkge1xuICAgIHRoaXMuX3JhaWRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmFpZExldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhaWRMZXZlbDtcbiAgfVxuXG4gIC8vIHNpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWVMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBPcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWVbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogT3Bzd29ya3NNeXNxbExheWVyRWJzVm9sdW1lT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE9wc3dvcmtzTXlzcWxMYXllckVic1ZvbHVtZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciBhd3Nfb3Bzd29ya3NfbXlzcWxfbGF5ZXJ9XG4qL1xuZXhwb3J0IGNsYXNzIE9wc3dvcmtzTXlzcWxMYXllciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfb3Bzd29ya3NfbXlzcWxfbGF5ZXJcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgT3Bzd29ya3NNeXNxbExheWVyIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIE9wc3dvcmtzTXlzcWxMYXllciB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgT3Bzd29ya3NNeXNxbExheWVyIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9vcHN3b3Jrc19teXNxbF9sYXllciNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgT3Bzd29ya3NNeXNxbExheWVyIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19vcHN3b3Jrc19teXNxbF9sYXllclwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL29wc3dvcmtzX215c3FsX2xheWVyIGF3c19vcHN3b3Jrc19teXNxbF9sYXllcn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgT3Bzd29ya3NNeXNxbExheWVyQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE9wc3dvcmtzTXlzcWxMYXllckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX29wc3dvcmtzX215c3FsX2xheWVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0b0Fzc2lnbkVsYXN0aWNJcHMgPSBjb25maWcuYXV0b0Fzc2lnbkVsYXN0aWNJcHM7XG4gICAgdGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyA9IGNvbmZpZy5hdXRvQXNzaWduUHVibGljSXBzO1xuICAgIHRoaXMuX2F1dG9IZWFsaW5nID0gY29uZmlnLmF1dG9IZWFsaW5nO1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSBjb25maWcuY3VzdG9tQ29uZmlndXJlUmVjaXBlcztcbiAgICB0aGlzLl9jdXN0b21EZXBsb3lSZWNpcGVzID0gY29uZmlnLmN1c3RvbURlcGxveVJlY2lwZXM7XG4gICAgdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuID0gY29uZmlnLmN1c3RvbUluc3RhbmNlUHJvZmlsZUFybjtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gY29uZmlnLmN1c3RvbUpzb247XG4gICAgdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy5jdXN0b21TZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcyA9IGNvbmZpZy5jdXN0b21TZXR1cFJlY2lwZXM7XG4gICAgdGhpcy5fY3VzdG9tU2h1dGRvd25SZWNpcGVzID0gY29uZmlnLmN1c3RvbVNodXRkb3duUmVjaXBlcztcbiAgICB0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXMgPSBjb25maWcuY3VzdG9tVW5kZXBsb3lSZWNpcGVzO1xuICAgIHRoaXMuX2RyYWluRWxiT25TaHV0ZG93biA9IGNvbmZpZy5kcmFpbkVsYk9uU2h1dGRvd247XG4gICAgdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciA9IGNvbmZpZy5lbGFzdGljTG9hZEJhbGFuY2VyO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290ID0gY29uZmlnLmluc3RhbGxVcGRhdGVzT25Cb290O1xuICAgIHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0ID0gY29uZmlnLmluc3RhbmNlU2h1dGRvd25UaW1lb3V0O1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9yb290UGFzc3dvcmQgPSBjb25maWcucm9vdFBhc3N3b3JkO1xuICAgIHRoaXMuX3Jvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzID0gY29uZmlnLnJvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzO1xuICAgIHRoaXMuX3N0YWNrSWQgPSBjb25maWcuc3RhY2tJZDtcbiAgICB0aGlzLl9zeXN0ZW1QYWNrYWdlcyA9IGNvbmZpZy5zeXN0ZW1QYWNrYWdlcztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcyA9IGNvbmZpZy51c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXM7XG4gICAgdGhpcy5fY2xvdWR3YXRjaENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jbG91ZHdhdGNoQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9lYnNWb2x1bWUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lYnNWb2x1bWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b19hc3NpZ25fZWxhc3RpY19pcHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0Fzc2lnbkVsYXN0aWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9Bc3NpZ25FbGFzdGljSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fYXNzaWduX2VsYXN0aWNfaXBzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvQXNzaWduRWxhc3RpY0lwcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnbkVsYXN0aWNJcHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvQXNzaWduRWxhc3RpY0lwcygpIHtcbiAgICB0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0Fzc2lnbkVsYXN0aWNJcHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0Fzc2lnbkVsYXN0aWNJcHM7XG4gIH1cblxuICAvLyBhdXRvX2Fzc2lnbl9wdWJsaWNfaXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9Bc3NpZ25QdWJsaWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9Bc3NpZ25QdWJsaWNJcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19hc3NpZ25fcHVibGljX2lwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0Fzc2lnblB1YmxpY0lwcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9Bc3NpZ25QdWJsaWNJcHMoKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0Fzc2lnblB1YmxpY0lwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzO1xuICB9XG5cbiAgLy8gYXV0b19oZWFsaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9IZWFsaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvSGVhbGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2hlYWxpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9IZWFsaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvSGVhbGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9IZWFsaW5nKCkge1xuICAgIHRoaXMuX2F1dG9IZWFsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvSGVhbGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvSGVhbGluZztcbiAgfVxuXG4gIC8vIGN1c3RvbV9jb25maWd1cmVfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21Db25maWd1cmVSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2NvbmZpZ3VyZV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21Db25maWd1cmVSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21Db25maWd1cmVSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ29uZmlndXJlUmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9kZXBsb3lfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21EZXBsb3lSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbURlcGxveVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2RlcGxveV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21EZXBsb3lSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21EZXBsb3lSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbURlcGxveVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21JbnN0YW5jZVByb2ZpbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuO1xuICB9XG5cbiAgLy8gY3VzdG9tX2pzb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tSnNvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbV9qc29uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21Kc29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tSnNvbigpIHtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21Kc29uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUpzb247XG4gIH1cblxuICAvLyBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVNlY3VyaXR5R3JvdXBJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWRzO1xuICB9XG5cbiAgLy8gY3VzdG9tX3NldHVwX3JlY2lwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tU2V0dXBSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbVNldHVwUmVjaXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fc2V0dXBfcmVjaXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tU2V0dXBSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVNldHVwUmVjaXBlcygpIHtcbiAgICB0aGlzLl9jdXN0b21TZXR1cFJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNldHVwUmVjaXBlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TZXR1cFJlY2lwZXM7XG4gIH1cblxuICAvLyBjdXN0b21fc2h1dGRvd25fcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21TaHV0ZG93blJlY2lwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2h1dGRvd25SZWNpcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2N1c3RvbV9zaHV0ZG93bl9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21TaHV0ZG93blJlY2lwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY3VzdG9tU2h1dGRvd25SZWNpcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tU2h1dGRvd25SZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2h1dGRvd25SZWNpcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV91bmRlcGxveV9yZWNpcGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVVuZGVwbG95UmVjaXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjdXN0b21VbmRlcGxveVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX3VuZGVwbG95X3JlY2lwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVVuZGVwbG95UmVjaXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21VbmRlcGxveVJlY2lwZXMoKSB7XG4gICAgdGhpcy5fY3VzdG9tVW5kZXBsb3lSZWNpcGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21VbmRlcGxveVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tVW5kZXBsb3lSZWNpcGVzO1xuICB9XG5cbiAgLy8gZHJhaW5fZWxiX29uX3NodXRkb3duIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RyYWluRWxiT25TaHV0ZG93bj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZHJhaW5FbGJPblNodXRkb3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RyYWluX2VsYl9vbl9zaHV0ZG93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHJhaW5FbGJPblNodXRkb3duKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREcmFpbkVsYk9uU2h1dGRvd24oKSB7XG4gICAgdGhpcy5fZHJhaW5FbGJPblNodXRkb3duID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkcmFpbkVsYk9uU2h1dGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhaW5FbGJPblNodXRkb3duO1xuICB9XG5cbiAgLy8gZWxhc3RpY19sb2FkX2JhbGFuY2VyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VsYXN0aWNMb2FkQmFsYW5jZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVsYXN0aWNMb2FkQmFsYW5jZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbGFzdGljX2xvYWRfYmFsYW5jZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVsYXN0aWNMb2FkQmFsYW5jZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbGFzdGljTG9hZEJhbGFuY2VyKCkge1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNMb2FkQmFsYW5jZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlcjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGluc3RhbGxfdXBkYXRlc19vbl9ib290IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbGxVcGRhdGVzT25Cb290PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFsbFVwZGF0ZXNPbkJvb3QodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFsbFVwZGF0ZXNPbkJvb3QoKSB7XG4gICAgdGhpcy5faW5zdGFsbFVwZGF0ZXNPbkJvb3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbGxVcGRhdGVzT25Cb290SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290O1xuICB9XG5cbiAgLy8gaW5zdGFuY2Vfc2h1dGRvd25fdGltZW91dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVNodXRkb3duVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VTaHV0ZG93blRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnN0YW5jZV9zaHV0ZG93bl90aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVNodXRkb3duVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5zdGFuY2VTaHV0ZG93blRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVNodXRkb3duVGltZW91dCgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVNodXRkb3duVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VTaHV0ZG93blRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VTaHV0ZG93blRpbWVvdXQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByb290X3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jvb3RQYXNzd29yZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9vdFBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9vdF9wYXNzd29yZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9vdFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb290UGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb290UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5fcm9vdFBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290UGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdFBhc3N3b3JkO1xuICB9XG5cbiAgLy8gcm9vdF9wYXNzd29yZF9vbl9hbGxfaW5zdGFuY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByb290UGFzc3dvcmRPbkFsbEluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyb290X3Bhc3N3b3JkX29uX2FsbF9pbnN0YW5jZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yb290UGFzc3dvcmRPbkFsbEluc3RhbmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzKCkge1xuICAgIHRoaXMuX3Jvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290UGFzc3dvcmRPbkFsbEluc3RhbmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290UGFzc3dvcmRPbkFsbEluc3RhbmNlcztcbiAgfVxuXG4gIC8vIHN0YWNrX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YWNrSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YWNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFja19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhY2tJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhY2tJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFja0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrSWQ7XG4gIH1cblxuICAvLyBzeXN0ZW1fcGFja2FnZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3lzdGVtUGFja2FnZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3lzdGVtUGFja2FnZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N5c3RlbV9wYWNrYWdlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN5c3RlbVBhY2thZ2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N5c3RlbVBhY2thZ2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3lzdGVtUGFja2FnZXMoKSB7XG4gICAgdGhpcy5fc3lzdGVtUGFja2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN5c3RlbVBhY2thZ2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5c3RlbVBhY2thZ2VzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1c2VfZWJzX29wdGltaXplZF9pbnN0YW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2Vic19vcHRpbWl6ZWRfaW5zdGFuY2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZUVic09wdGltaXplZEluc3RhbmNlcygpIHtcbiAgICB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZUVic09wdGltaXplZEluc3RhbmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXM7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaENvbmZpZ3VyYXRpb24gPSBuZXcgT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjbG91ZHdhdGNoX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoQ29uZmlndXJhdGlvbih2YWx1ZTogT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaENvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGVic192b2x1bWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzVm9sdW1lID0gbmV3IE9wc3dvcmtzTXlzcWxMYXllckVic1ZvbHVtZUxpc3QodGhpcywgXCJlYnNfdm9sdW1lXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVic1ZvbHVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWJzVm9sdW1lO1xuICB9XG4gIHB1YmxpYyBwdXRFYnNWb2x1bWUodmFsdWU6IE9wc3dvcmtzTXlzcWxMYXllckVic1ZvbHVtZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lYnNWb2x1bWUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic1ZvbHVtZSgpIHtcbiAgICB0aGlzLl9lYnNWb2x1bWUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzVm9sdW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic1ZvbHVtZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRvX2Fzc2lnbl9lbGFzdGljX2lwczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzKSxcbiAgICAgIGF1dG9fYXNzaWduX3B1YmxpY19pcHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzKSxcbiAgICAgIGF1dG9faGVhbGluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2F1dG9IZWFsaW5nKSxcbiAgICAgIGN1c3RvbV9jb25maWd1cmVfcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMpLFxuICAgICAgY3VzdG9tX2RlcGxveV9yZWNpcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcyksXG4gICAgICBjdXN0b21faW5zdGFuY2VfcHJvZmlsZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbUluc3RhbmNlUHJvZmlsZUFybiksXG4gICAgICBjdXN0b21fanNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tSnNvbiksXG4gICAgICBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcyksXG4gICAgICBjdXN0b21fc2V0dXBfcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcyksXG4gICAgICBjdXN0b21fc2h1dGRvd25fcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyksXG4gICAgICBjdXN0b21fdW5kZXBsb3lfcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcyksXG4gICAgICBkcmFpbl9lbGJfb25fc2h1dGRvd246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24pLFxuICAgICAgZWxhc3RpY19sb2FkX2JhbGFuY2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290KSxcbiAgICAgIGluc3RhbmNlX3NodXRkb3duX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0KSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcm9vdF9wYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcm9vdFBhc3N3b3JkKSxcbiAgICAgIHJvb3RfcGFzc3dvcmRfb25fYWxsX2luc3RhbmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Jvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzKSxcbiAgICAgIHN0YWNrX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFja0lkKSxcbiAgICAgIHN5c3RlbV9wYWNrYWdlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3N5c3RlbVBhY2thZ2VzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdXNlX2Vic19vcHRpbWl6ZWRfaW5zdGFuY2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzKSxcbiAgICAgIGNsb3Vkd2F0Y2hfY29uZmlndXJhdGlvbjogb3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jbG91ZHdhdGNoQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGVic192b2x1bWU6IGNka3RmLmxpc3RNYXBwZXIob3Bzd29ya3NNeXNxbExheWVyRWJzVm9sdW1lVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX2Vic1ZvbHVtZS5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGF1dG9fYXNzaWduX2VsYXN0aWNfaXBzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fYXV0b0Fzc2lnbkVsYXN0aWNJcHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgYXV0b19hc3NpZ25fcHVibGljX2lwczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2F1dG9Bc3NpZ25QdWJsaWNJcHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgYXV0b19oZWFsaW5nOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fYXV0b0hlYWxpbmcpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tX2NvbmZpZ3VyZV9yZWNpcGVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY3VzdG9tQ29uZmlndXJlUmVjaXBlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tX2RlcGxveV9yZWNpcGVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tX2luc3RhbmNlX3Byb2ZpbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjdXN0b21fanNvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY3VzdG9tSnNvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbV9zZWN1cml0eV9ncm91cF9pZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbV9zZXR1cF9yZWNpcGVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBjdXN0b21fc2h1dGRvd25fcmVjaXBlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tX3VuZGVwbG95X3JlY2lwZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGRyYWluX2VsYl9vbl9zaHV0ZG93bjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2RyYWluRWxiT25TaHV0ZG93biksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBlbGFzdGljX2xvYWRfYmFsYW5jZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGluc3RhbmNlX3NodXRkb3duX3RpbWVvdXQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJvb3RfcGFzc3dvcmQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Jvb3RQYXNzd29yZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJvb3RfcGFzc3dvcmRfb25fYWxsX2luc3RhbmNlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3Jvb3RQYXNzd29yZE9uQWxsSW5zdGFuY2VzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHN0YWNrX2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zdGFja0lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3lzdGVtX3BhY2thZ2VzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc3lzdGVtUGFja2FnZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdXNlX2Vic19vcHRpbWl6ZWRfaW5zdGFuY2VzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGNsb3Vkd2F0Y2hfY29uZmlndXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogb3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9jbG91ZHdhdGNoQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiT3Bzd29ya3NNeXNxbExheWVyQ2xvdWR3YXRjaENvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgICAgZWJzX3ZvbHVtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChvcHN3b3Jrc015c3FsTGF5ZXJFYnNWb2x1bWVUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fZWJzVm9sdW1lLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk9wc3dvcmtzTXlzcWxMYXllckVic1ZvbHVtZUxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==