"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElastictranscoderPreset = exports.ElastictranscoderPresetVideoWatermarksList = exports.ElastictranscoderPresetVideoWatermarksOutputReference = exports.elastictranscoderPresetVideoWatermarksToHclTerraform = exports.elastictranscoderPresetVideoWatermarksToTerraform = exports.ElastictranscoderPresetVideoOutputReference = exports.elastictranscoderPresetVideoToHclTerraform = exports.elastictranscoderPresetVideoToTerraform = exports.ElastictranscoderPresetThumbnailsOutputReference = exports.elastictranscoderPresetThumbnailsToHclTerraform = exports.elastictranscoderPresetThumbnailsToTerraform = exports.ElastictranscoderPresetAudioCodecOptionsOutputReference = exports.elastictranscoderPresetAudioCodecOptionsToHclTerraform = exports.elastictranscoderPresetAudioCodecOptionsToTerraform = exports.ElastictranscoderPresetAudioOutputReference = exports.elastictranscoderPresetAudioToHclTerraform = exports.elastictranscoderPresetAudioToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function elastictranscoderPresetAudioToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        audio_packing_mode: cdktf.stringToTerraform(struct.audioPackingMode),
        bit_rate: cdktf.stringToTerraform(struct.bitRate),
        channels: cdktf.stringToTerraform(struct.channels),
        codec: cdktf.stringToTerraform(struct.codec),
        sample_rate: cdktf.stringToTerraform(struct.sampleRate),
    };
}
exports.elastictranscoderPresetAudioToTerraform = elastictranscoderPresetAudioToTerraform;
function elastictranscoderPresetAudioToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        audio_packing_mode: {
            value: cdktf.stringToHclTerraform(struct.audioPackingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bit_rate: {
            value: cdktf.stringToHclTerraform(struct.bitRate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        channels: {
            value: cdktf.stringToHclTerraform(struct.channels),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codec: {
            value: cdktf.stringToHclTerraform(struct.codec),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sample_rate: {
            value: cdktf.stringToHclTerraform(struct.sampleRate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPresetAudioToHclTerraform = elastictranscoderPresetAudioToHclTerraform;
class ElastictranscoderPresetAudioOutputReference extends cdktf.ComplexObject {
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
        if (this._audioPackingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioPackingMode = this._audioPackingMode;
        }
        if (this._bitRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitRate = this._bitRate;
        }
        if (this._channels !== undefined) {
            hasAnyValues = true;
            internalValueResult.channels = this._channels;
        }
        if (this._codec !== undefined) {
            hasAnyValues = true;
            internalValueResult.codec = this._codec;
        }
        if (this._sampleRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.sampleRate = this._sampleRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._audioPackingMode = undefined;
            this._bitRate = undefined;
            this._channels = undefined;
            this._codec = undefined;
            this._sampleRate = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._audioPackingMode = value.audioPackingMode;
            this._bitRate = value.bitRate;
            this._channels = value.channels;
            this._codec = value.codec;
            this._sampleRate = value.sampleRate;
        }
    }
    get audioPackingMode() {
        return this.getStringAttribute('audio_packing_mode');
    }
    set audioPackingMode(value) {
        this._audioPackingMode = value;
    }
    resetAudioPackingMode() {
        this._audioPackingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get audioPackingModeInput() {
        return this._audioPackingMode;
    }
    get bitRate() {
        return this.getStringAttribute('bit_rate');
    }
    set bitRate(value) {
        this._bitRate = value;
    }
    resetBitRate() {
        this._bitRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bitRateInput() {
        return this._bitRate;
    }
    get channels() {
        return this.getStringAttribute('channels');
    }
    set channels(value) {
        this._channels = value;
    }
    resetChannels() {
        this._channels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get channelsInput() {
        return this._channels;
    }
    get codec() {
        return this.getStringAttribute('codec');
    }
    set codec(value) {
        this._codec = value;
    }
    resetCodec() {
        this._codec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codecInput() {
        return this._codec;
    }
    get sampleRate() {
        return this.getStringAttribute('sample_rate');
    }
    set sampleRate(value) {
        this._sampleRate = value;
    }
    resetSampleRate() {
        this._sampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sampleRateInput() {
        return this._sampleRate;
    }
}
exports.ElastictranscoderPresetAudioOutputReference = ElastictranscoderPresetAudioOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetAudioOutputReference[_a] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference", version: "0.0.0" };
function elastictranscoderPresetAudioCodecOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bit_depth: cdktf.stringToTerraform(struct.bitDepth),
        bit_order: cdktf.stringToTerraform(struct.bitOrder),
        profile: cdktf.stringToTerraform(struct.profile),
        signed: cdktf.stringToTerraform(struct.signed),
    };
}
exports.elastictranscoderPresetAudioCodecOptionsToTerraform = elastictranscoderPresetAudioCodecOptionsToTerraform;
function elastictranscoderPresetAudioCodecOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bit_depth: {
            value: cdktf.stringToHclTerraform(struct.bitDepth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bit_order: {
            value: cdktf.stringToHclTerraform(struct.bitOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profile: {
            value: cdktf.stringToHclTerraform(struct.profile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        signed: {
            value: cdktf.stringToHclTerraform(struct.signed),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPresetAudioCodecOptionsToHclTerraform = elastictranscoderPresetAudioCodecOptionsToHclTerraform;
class ElastictranscoderPresetAudioCodecOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._bitDepth !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitDepth = this._bitDepth;
        }
        if (this._bitOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitOrder = this._bitOrder;
        }
        if (this._profile !== undefined) {
            hasAnyValues = true;
            internalValueResult.profile = this._profile;
        }
        if (this._signed !== undefined) {
            hasAnyValues = true;
            internalValueResult.signed = this._signed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bitDepth = undefined;
            this._bitOrder = undefined;
            this._profile = undefined;
            this._signed = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bitDepth = value.bitDepth;
            this._bitOrder = value.bitOrder;
            this._profile = value.profile;
            this._signed = value.signed;
        }
    }
    get bitDepth() {
        return this.getStringAttribute('bit_depth');
    }
    set bitDepth(value) {
        this._bitDepth = value;
    }
    resetBitDepth() {
        this._bitDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bitDepthInput() {
        return this._bitDepth;
    }
    get bitOrder() {
        return this.getStringAttribute('bit_order');
    }
    set bitOrder(value) {
        this._bitOrder = value;
    }
    resetBitOrder() {
        this._bitOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bitOrderInput() {
        return this._bitOrder;
    }
    get profile() {
        return this.getStringAttribute('profile');
    }
    set profile(value) {
        this._profile = value;
    }
    resetProfile() {
        this._profile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get profileInput() {
        return this._profile;
    }
    get signed() {
        return this.getStringAttribute('signed');
    }
    set signed(value) {
        this._signed = value;
    }
    resetSigned() {
        this._signed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get signedInput() {
        return this._signed;
    }
}
exports.ElastictranscoderPresetAudioCodecOptionsOutputReference = ElastictranscoderPresetAudioCodecOptionsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetAudioCodecOptionsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference", version: "0.0.0" };
function elastictranscoderPresetThumbnailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aspect_ratio: cdktf.stringToTerraform(struct.aspectRatio),
        format: cdktf.stringToTerraform(struct.format),
        interval: cdktf.stringToTerraform(struct.interval),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        padding_policy: cdktf.stringToTerraform(struct.paddingPolicy),
        resolution: cdktf.stringToTerraform(struct.resolution),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
    };
}
exports.elastictranscoderPresetThumbnailsToTerraform = elastictranscoderPresetThumbnailsToTerraform;
function elastictranscoderPresetThumbnailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aspect_ratio: {
            value: cdktf.stringToHclTerraform(struct.aspectRatio),
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
        interval: {
            value: cdktf.stringToHclTerraform(struct.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_height: {
            value: cdktf.stringToHclTerraform(struct.maxHeight),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_width: {
            value: cdktf.stringToHclTerraform(struct.maxWidth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        padding_policy: {
            value: cdktf.stringToHclTerraform(struct.paddingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resolution: {
            value: cdktf.stringToHclTerraform(struct.resolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sizing_policy: {
            value: cdktf.stringToHclTerraform(struct.sizingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPresetThumbnailsToHclTerraform = elastictranscoderPresetThumbnailsToHclTerraform;
class ElastictranscoderPresetThumbnailsOutputReference extends cdktf.ComplexObject {
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
        if (this._aspectRatio !== undefined) {
            hasAnyValues = true;
            internalValueResult.aspectRatio = this._aspectRatio;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._maxHeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxHeight = this._maxHeight;
        }
        if (this._maxWidth !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWidth = this._maxWidth;
        }
        if (this._paddingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.paddingPolicy = this._paddingPolicy;
        }
        if (this._resolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolution = this._resolution;
        }
        if (this._sizingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizingPolicy = this._sizingPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._aspectRatio = undefined;
            this._format = undefined;
            this._interval = undefined;
            this._maxHeight = undefined;
            this._maxWidth = undefined;
            this._paddingPolicy = undefined;
            this._resolution = undefined;
            this._sizingPolicy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._aspectRatio = value.aspectRatio;
            this._format = value.format;
            this._interval = value.interval;
            this._maxHeight = value.maxHeight;
            this._maxWidth = value.maxWidth;
            this._paddingPolicy = value.paddingPolicy;
            this._resolution = value.resolution;
            this._sizingPolicy = value.sizingPolicy;
        }
    }
    get aspectRatio() {
        return this.getStringAttribute('aspect_ratio');
    }
    set aspectRatio(value) {
        this._aspectRatio = value;
    }
    resetAspectRatio() {
        this._aspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aspectRatioInput() {
        return this._aspectRatio;
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
    get interval() {
        return this.getStringAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
    }
    get maxHeight() {
        return this.getStringAttribute('max_height');
    }
    set maxHeight(value) {
        this._maxHeight = value;
    }
    resetMaxHeight() {
        this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxHeightInput() {
        return this._maxHeight;
    }
    get maxWidth() {
        return this.getStringAttribute('max_width');
    }
    set maxWidth(value) {
        this._maxWidth = value;
    }
    resetMaxWidth() {
        this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWidthInput() {
        return this._maxWidth;
    }
    get paddingPolicy() {
        return this.getStringAttribute('padding_policy');
    }
    set paddingPolicy(value) {
        this._paddingPolicy = value;
    }
    resetPaddingPolicy() {
        this._paddingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get paddingPolicyInput() {
        return this._paddingPolicy;
    }
    get resolution() {
        return this.getStringAttribute('resolution');
    }
    set resolution(value) {
        this._resolution = value;
    }
    resetResolution() {
        this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolutionInput() {
        return this._resolution;
    }
    get sizingPolicy() {
        return this.getStringAttribute('sizing_policy');
    }
    set sizingPolicy(value) {
        this._sizingPolicy = value;
    }
    resetSizingPolicy() {
        this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizingPolicyInput() {
        return this._sizingPolicy;
    }
}
exports.ElastictranscoderPresetThumbnailsOutputReference = ElastictranscoderPresetThumbnailsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetThumbnailsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference", version: "0.0.0" };
function elastictranscoderPresetVideoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aspect_ratio: cdktf.stringToTerraform(struct.aspectRatio),
        bit_rate: cdktf.stringToTerraform(struct.bitRate),
        codec: cdktf.stringToTerraform(struct.codec),
        display_aspect_ratio: cdktf.stringToTerraform(struct.displayAspectRatio),
        fixed_gop: cdktf.stringToTerraform(struct.fixedGop),
        frame_rate: cdktf.stringToTerraform(struct.frameRate),
        keyframes_max_dist: cdktf.stringToTerraform(struct.keyframesMaxDist),
        max_frame_rate: cdktf.stringToTerraform(struct.maxFrameRate),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        padding_policy: cdktf.stringToTerraform(struct.paddingPolicy),
        resolution: cdktf.stringToTerraform(struct.resolution),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
    };
}
exports.elastictranscoderPresetVideoToTerraform = elastictranscoderPresetVideoToTerraform;
function elastictranscoderPresetVideoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aspect_ratio: {
            value: cdktf.stringToHclTerraform(struct.aspectRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bit_rate: {
            value: cdktf.stringToHclTerraform(struct.bitRate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codec: {
            value: cdktf.stringToHclTerraform(struct.codec),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        display_aspect_ratio: {
            value: cdktf.stringToHclTerraform(struct.displayAspectRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fixed_gop: {
            value: cdktf.stringToHclTerraform(struct.fixedGop),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        frame_rate: {
            value: cdktf.stringToHclTerraform(struct.frameRate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keyframes_max_dist: {
            value: cdktf.stringToHclTerraform(struct.keyframesMaxDist),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_frame_rate: {
            value: cdktf.stringToHclTerraform(struct.maxFrameRate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_height: {
            value: cdktf.stringToHclTerraform(struct.maxHeight),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_width: {
            value: cdktf.stringToHclTerraform(struct.maxWidth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        padding_policy: {
            value: cdktf.stringToHclTerraform(struct.paddingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resolution: {
            value: cdktf.stringToHclTerraform(struct.resolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sizing_policy: {
            value: cdktf.stringToHclTerraform(struct.sizingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPresetVideoToHclTerraform = elastictranscoderPresetVideoToHclTerraform;
class ElastictranscoderPresetVideoOutputReference extends cdktf.ComplexObject {
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
        if (this._aspectRatio !== undefined) {
            hasAnyValues = true;
            internalValueResult.aspectRatio = this._aspectRatio;
        }
        if (this._bitRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitRate = this._bitRate;
        }
        if (this._codec !== undefined) {
            hasAnyValues = true;
            internalValueResult.codec = this._codec;
        }
        if (this._displayAspectRatio !== undefined) {
            hasAnyValues = true;
            internalValueResult.displayAspectRatio = this._displayAspectRatio;
        }
        if (this._fixedGop !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedGop = this._fixedGop;
        }
        if (this._frameRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameRate = this._frameRate;
        }
        if (this._keyframesMaxDist !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyframesMaxDist = this._keyframesMaxDist;
        }
        if (this._maxFrameRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFrameRate = this._maxFrameRate;
        }
        if (this._maxHeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxHeight = this._maxHeight;
        }
        if (this._maxWidth !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWidth = this._maxWidth;
        }
        if (this._paddingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.paddingPolicy = this._paddingPolicy;
        }
        if (this._resolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolution = this._resolution;
        }
        if (this._sizingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizingPolicy = this._sizingPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._aspectRatio = undefined;
            this._bitRate = undefined;
            this._codec = undefined;
            this._displayAspectRatio = undefined;
            this._fixedGop = undefined;
            this._frameRate = undefined;
            this._keyframesMaxDist = undefined;
            this._maxFrameRate = undefined;
            this._maxHeight = undefined;
            this._maxWidth = undefined;
            this._paddingPolicy = undefined;
            this._resolution = undefined;
            this._sizingPolicy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._aspectRatio = value.aspectRatio;
            this._bitRate = value.bitRate;
            this._codec = value.codec;
            this._displayAspectRatio = value.displayAspectRatio;
            this._fixedGop = value.fixedGop;
            this._frameRate = value.frameRate;
            this._keyframesMaxDist = value.keyframesMaxDist;
            this._maxFrameRate = value.maxFrameRate;
            this._maxHeight = value.maxHeight;
            this._maxWidth = value.maxWidth;
            this._paddingPolicy = value.paddingPolicy;
            this._resolution = value.resolution;
            this._sizingPolicy = value.sizingPolicy;
        }
    }
    get aspectRatio() {
        return this.getStringAttribute('aspect_ratio');
    }
    set aspectRatio(value) {
        this._aspectRatio = value;
    }
    resetAspectRatio() {
        this._aspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aspectRatioInput() {
        return this._aspectRatio;
    }
    get bitRate() {
        return this.getStringAttribute('bit_rate');
    }
    set bitRate(value) {
        this._bitRate = value;
    }
    resetBitRate() {
        this._bitRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bitRateInput() {
        return this._bitRate;
    }
    get codec() {
        return this.getStringAttribute('codec');
    }
    set codec(value) {
        this._codec = value;
    }
    resetCodec() {
        this._codec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codecInput() {
        return this._codec;
    }
    get displayAspectRatio() {
        return this.getStringAttribute('display_aspect_ratio');
    }
    set displayAspectRatio(value) {
        this._displayAspectRatio = value;
    }
    resetDisplayAspectRatio() {
        this._displayAspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get displayAspectRatioInput() {
        return this._displayAspectRatio;
    }
    get fixedGop() {
        return this.getStringAttribute('fixed_gop');
    }
    set fixedGop(value) {
        this._fixedGop = value;
    }
    resetFixedGop() {
        this._fixedGop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fixedGopInput() {
        return this._fixedGop;
    }
    get frameRate() {
        return this.getStringAttribute('frame_rate');
    }
    set frameRate(value) {
        this._frameRate = value;
    }
    resetFrameRate() {
        this._frameRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frameRateInput() {
        return this._frameRate;
    }
    get keyframesMaxDist() {
        return this.getStringAttribute('keyframes_max_dist');
    }
    set keyframesMaxDist(value) {
        this._keyframesMaxDist = value;
    }
    resetKeyframesMaxDist() {
        this._keyframesMaxDist = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyframesMaxDistInput() {
        return this._keyframesMaxDist;
    }
    get maxFrameRate() {
        return this.getStringAttribute('max_frame_rate');
    }
    set maxFrameRate(value) {
        this._maxFrameRate = value;
    }
    resetMaxFrameRate() {
        this._maxFrameRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxFrameRateInput() {
        return this._maxFrameRate;
    }
    get maxHeight() {
        return this.getStringAttribute('max_height');
    }
    set maxHeight(value) {
        this._maxHeight = value;
    }
    resetMaxHeight() {
        this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxHeightInput() {
        return this._maxHeight;
    }
    get maxWidth() {
        return this.getStringAttribute('max_width');
    }
    set maxWidth(value) {
        this._maxWidth = value;
    }
    resetMaxWidth() {
        this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWidthInput() {
        return this._maxWidth;
    }
    get paddingPolicy() {
        return this.getStringAttribute('padding_policy');
    }
    set paddingPolicy(value) {
        this._paddingPolicy = value;
    }
    resetPaddingPolicy() {
        this._paddingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get paddingPolicyInput() {
        return this._paddingPolicy;
    }
    get resolution() {
        return this.getStringAttribute('resolution');
    }
    set resolution(value) {
        this._resolution = value;
    }
    resetResolution() {
        this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolutionInput() {
        return this._resolution;
    }
    get sizingPolicy() {
        return this.getStringAttribute('sizing_policy');
    }
    set sizingPolicy(value) {
        this._sizingPolicy = value;
    }
    resetSizingPolicy() {
        this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizingPolicyInput() {
        return this._sizingPolicy;
    }
}
exports.ElastictranscoderPresetVideoOutputReference = ElastictranscoderPresetVideoOutputReference;
_d = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetVideoOutputReference[_d] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference", version: "0.0.0" };
function elastictranscoderPresetVideoWatermarksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        horizontal_align: cdktf.stringToTerraform(struct.horizontalAlign),
        horizontal_offset: cdktf.stringToTerraform(struct.horizontalOffset),
        id: cdktf.stringToTerraform(struct.id),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        opacity: cdktf.stringToTerraform(struct.opacity),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
        target: cdktf.stringToTerraform(struct.target),
        vertical_align: cdktf.stringToTerraform(struct.verticalAlign),
        vertical_offset: cdktf.stringToTerraform(struct.verticalOffset),
    };
}
exports.elastictranscoderPresetVideoWatermarksToTerraform = elastictranscoderPresetVideoWatermarksToTerraform;
function elastictranscoderPresetVideoWatermarksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        horizontal_align: {
            value: cdktf.stringToHclTerraform(struct.horizontalAlign),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        horizontal_offset: {
            value: cdktf.stringToHclTerraform(struct.horizontalOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_height: {
            value: cdktf.stringToHclTerraform(struct.maxHeight),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_width: {
            value: cdktf.stringToHclTerraform(struct.maxWidth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opacity: {
            value: cdktf.stringToHclTerraform(struct.opacity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sizing_policy: {
            value: cdktf.stringToHclTerraform(struct.sizingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vertical_align: {
            value: cdktf.stringToHclTerraform(struct.verticalAlign),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vertical_offset: {
            value: cdktf.stringToHclTerraform(struct.verticalOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPresetVideoWatermarksToHclTerraform = elastictranscoderPresetVideoWatermarksToHclTerraform;
class ElastictranscoderPresetVideoWatermarksOutputReference extends cdktf.ComplexObject {
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
        if (this._horizontalAlign !== undefined) {
            hasAnyValues = true;
            internalValueResult.horizontalAlign = this._horizontalAlign;
        }
        if (this._horizontalOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.horizontalOffset = this._horizontalOffset;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._maxHeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxHeight = this._maxHeight;
        }
        if (this._maxWidth !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWidth = this._maxWidth;
        }
        if (this._opacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.opacity = this._opacity;
        }
        if (this._sizingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizingPolicy = this._sizingPolicy;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._verticalAlign !== undefined) {
            hasAnyValues = true;
            internalValueResult.verticalAlign = this._verticalAlign;
        }
        if (this._verticalOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.verticalOffset = this._verticalOffset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._horizontalAlign = undefined;
            this._horizontalOffset = undefined;
            this._id = undefined;
            this._maxHeight = undefined;
            this._maxWidth = undefined;
            this._opacity = undefined;
            this._sizingPolicy = undefined;
            this._target = undefined;
            this._verticalAlign = undefined;
            this._verticalOffset = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._horizontalAlign = value.horizontalAlign;
            this._horizontalOffset = value.horizontalOffset;
            this._id = value.id;
            this._maxHeight = value.maxHeight;
            this._maxWidth = value.maxWidth;
            this._opacity = value.opacity;
            this._sizingPolicy = value.sizingPolicy;
            this._target = value.target;
            this._verticalAlign = value.verticalAlign;
            this._verticalOffset = value.verticalOffset;
        }
    }
    get horizontalAlign() {
        return this.getStringAttribute('horizontal_align');
    }
    set horizontalAlign(value) {
        this._horizontalAlign = value;
    }
    resetHorizontalAlign() {
        this._horizontalAlign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get horizontalAlignInput() {
        return this._horizontalAlign;
    }
    get horizontalOffset() {
        return this.getStringAttribute('horizontal_offset');
    }
    set horizontalOffset(value) {
        this._horizontalOffset = value;
    }
    resetHorizontalOffset() {
        this._horizontalOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get horizontalOffsetInput() {
        return this._horizontalOffset;
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
    get maxHeight() {
        return this.getStringAttribute('max_height');
    }
    set maxHeight(value) {
        this._maxHeight = value;
    }
    resetMaxHeight() {
        this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxHeightInput() {
        return this._maxHeight;
    }
    get maxWidth() {
        return this.getStringAttribute('max_width');
    }
    set maxWidth(value) {
        this._maxWidth = value;
    }
    resetMaxWidth() {
        this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWidthInput() {
        return this._maxWidth;
    }
    get opacity() {
        return this.getStringAttribute('opacity');
    }
    set opacity(value) {
        this._opacity = value;
    }
    resetOpacity() {
        this._opacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get opacityInput() {
        return this._opacity;
    }
    get sizingPolicy() {
        return this.getStringAttribute('sizing_policy');
    }
    set sizingPolicy(value) {
        this._sizingPolicy = value;
    }
    resetSizingPolicy() {
        this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizingPolicyInput() {
        return this._sizingPolicy;
    }
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    get verticalAlign() {
        return this.getStringAttribute('vertical_align');
    }
    set verticalAlign(value) {
        this._verticalAlign = value;
    }
    resetVerticalAlign() {
        this._verticalAlign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verticalAlignInput() {
        return this._verticalAlign;
    }
    get verticalOffset() {
        return this.getStringAttribute('vertical_offset');
    }
    set verticalOffset(value) {
        this._verticalOffset = value;
    }
    resetVerticalOffset() {
        this._verticalOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verticalOffsetInput() {
        return this._verticalOffset;
    }
}
exports.ElastictranscoderPresetVideoWatermarksOutputReference = ElastictranscoderPresetVideoWatermarksOutputReference;
_e = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetVideoWatermarksOutputReference[_e] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference", version: "0.0.0" };
class ElastictranscoderPresetVideoWatermarksList extends cdktf.ComplexList {
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
        return new ElastictranscoderPresetVideoWatermarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ElastictranscoderPresetVideoWatermarksList = ElastictranscoderPresetVideoWatermarksList;
_f = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetVideoWatermarksList[_f] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_preset aws_elastictranscoder_preset}
*/
class ElastictranscoderPreset extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ElastictranscoderPreset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElastictranscoderPreset to import
    * @param importFromId The id of the existing ElastictranscoderPreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_preset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElastictranscoderPreset to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elastictranscoder_preset", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_preset aws_elastictranscoder_preset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPresetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elastictranscoder_preset',
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
        // audio - computed: false, optional: true, required: false
        this._audio = new ElastictranscoderPresetAudioOutputReference(this, "audio");
        // audio_codec_options - computed: false, optional: true, required: false
        this._audioCodecOptions = new ElastictranscoderPresetAudioCodecOptionsOutputReference(this, "audio_codec_options");
        // thumbnails - computed: false, optional: true, required: false
        this._thumbnails = new ElastictranscoderPresetThumbnailsOutputReference(this, "thumbnails");
        // video - computed: false, optional: true, required: false
        this._video = new ElastictranscoderPresetVideoOutputReference(this, "video");
        // video_watermarks - computed: false, optional: true, required: false
        this._videoWatermarks = new ElastictranscoderPresetVideoWatermarksList(this, "video_watermarks", true);
        this._container = config.container;
        this._description = config.description;
        this._id = config.id;
        this._name = config.name;
        this._type = config.type;
        this._videoCodecOptions = config.videoCodecOptions;
        this._audio.internalValue = config.audio;
        this._audioCodecOptions.internalValue = config.audioCodecOptions;
        this._thumbnails.internalValue = config.thumbnails;
        this._video.internalValue = config.video;
        this._videoWatermarks.internalValue = config.videoWatermarks;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get container() {
        return this.getStringAttribute('container');
    }
    set container(value) {
        this._container = value;
    }
    // Temporarily expose input value. Use with caution.
    get containerInput() {
        return this._container;
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
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
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
    get videoCodecOptions() {
        return this.getStringMapAttribute('video_codec_options');
    }
    set videoCodecOptions(value) {
        this._videoCodecOptions = value;
    }
    resetVideoCodecOptions() {
        this._videoCodecOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get videoCodecOptionsInput() {
        return this._videoCodecOptions;
    }
    get audio() {
        return this._audio;
    }
    putAudio(value) {
        this._audio.internalValue = value;
    }
    resetAudio() {
        this._audio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get audioInput() {
        return this._audio.internalValue;
    }
    get audioCodecOptions() {
        return this._audioCodecOptions;
    }
    putAudioCodecOptions(value) {
        this._audioCodecOptions.internalValue = value;
    }
    resetAudioCodecOptions() {
        this._audioCodecOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get audioCodecOptionsInput() {
        return this._audioCodecOptions.internalValue;
    }
    get thumbnails() {
        return this._thumbnails;
    }
    putThumbnails(value) {
        this._thumbnails.internalValue = value;
    }
    resetThumbnails() {
        this._thumbnails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thumbnailsInput() {
        return this._thumbnails.internalValue;
    }
    get video() {
        return this._video;
    }
    putVideo(value) {
        this._video.internalValue = value;
    }
    resetVideo() {
        this._video.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get videoInput() {
        return this._video.internalValue;
    }
    get videoWatermarks() {
        return this._videoWatermarks;
    }
    putVideoWatermarks(value) {
        this._videoWatermarks.internalValue = value;
    }
    resetVideoWatermarks() {
        this._videoWatermarks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get videoWatermarksInput() {
        return this._videoWatermarks.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            container: cdktf.stringToTerraform(this._container),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
            video_codec_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._videoCodecOptions),
            audio: elastictranscoderPresetAudioToTerraform(this._audio.internalValue),
            audio_codec_options: elastictranscoderPresetAudioCodecOptionsToTerraform(this._audioCodecOptions.internalValue),
            thumbnails: elastictranscoderPresetThumbnailsToTerraform(this._thumbnails.internalValue),
            video: elastictranscoderPresetVideoToTerraform(this._video.internalValue),
            video_watermarks: cdktf.listMapper(elastictranscoderPresetVideoWatermarksToTerraform, true)(this._videoWatermarks.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            container: {
                value: cdktf.stringToHclTerraform(this._container),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            video_codec_options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._videoCodecOptions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            audio: {
                value: elastictranscoderPresetAudioToHclTerraform(this._audio.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPresetAudioList",
            },
            audio_codec_options: {
                value: elastictranscoderPresetAudioCodecOptionsToHclTerraform(this._audioCodecOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPresetAudioCodecOptionsList",
            },
            thumbnails: {
                value: elastictranscoderPresetThumbnailsToHclTerraform(this._thumbnails.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPresetThumbnailsList",
            },
            video: {
                value: elastictranscoderPresetVideoToHclTerraform(this._video.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPresetVideoList",
            },
            video_watermarks: {
                value: cdktf.listMapperHcl(elastictranscoderPresetVideoWatermarksToHclTerraform, true)(this._videoWatermarks.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ElastictranscoderPresetVideoWatermarksList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.ElastictranscoderPreset = ElastictranscoderPreset;
_g = JSII_RTTI_SYMBOL_1;
ElastictranscoderPreset[_g] = { fqn: "@cdktf/aws-cdk.elastictranscoderPreset.ElastictranscoderPreset", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
ElastictranscoderPreset.tfResourceType = "aws_elastictranscoder_preset";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2VsYXN0aWN0cmFuc2NvZGVyLXByZXNldC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQXNGL0IsU0FBZ0IsdUNBQXVDLENBQUMsTUFBbUY7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBWkQsMEZBWUM7QUFHRCxTQUFnQiwwQ0FBMEMsQ0FBQyxNQUFtRjtJQUM1SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFN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dCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclByZXNldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjY29udGFpbmVyIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2NvbnRhaW5lcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29udGFpbmVyOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNkZXNjcmlwdGlvbiBFbGFzdGljdHJhbnNjb2RlclByZXNldCNkZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNpZCBFbGFzdGljdHJhbnNjb2RlclByZXNldCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I25hbWUgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3R5cGUgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3ZpZGVvX2NvZGVjX29wdGlvbnMgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjdmlkZW9fY29kZWNfb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgdmlkZW9Db2RlY09wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBhdWRpbyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2F1ZGlvIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2F1ZGlvfVxuICAqL1xuICByZWFkb25seSBhdWRpbz86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW87XG4gIC8qKlxuICAqIGF1ZGlvX2NvZGVjX29wdGlvbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNhdWRpb19jb2RlY19vcHRpb25zIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2F1ZGlvX2NvZGVjX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGF1ZGlvQ29kZWNPcHRpb25zPzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9ucztcbiAgLyoqXG4gICogdGh1bWJuYWlscyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3RodW1ibmFpbHMgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjdGh1bWJuYWlsc31cbiAgKi9cbiAgcmVhZG9ubHkgdGh1bWJuYWlscz86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscztcbiAgLyoqXG4gICogdmlkZW8gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCN2aWRlbyBFbGFzdGljdHJhbnNjb2RlclByZXNldCN2aWRlb31cbiAgKi9cbiAgcmVhZG9ubHkgdmlkZW8/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvO1xuICAvKipcbiAgKiB2aWRlb193YXRlcm1hcmtzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjdmlkZW9fd2F0ZXJtYXJrcyBFbGFzdGljdHJhbnNjb2RlclByZXNldCN2aWRlb193YXRlcm1hcmtzfVxuICAqL1xuICByZWFkb25seSB2aWRlb1dhdGVybWFya3M/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW8ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjYXVkaW9fcGFja2luZ19tb2RlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2F1ZGlvX3BhY2tpbmdfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXVkaW9QYWNraW5nTW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2JpdF9yYXRlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2JpdF9yYXRlfVxuICAqL1xuICByZWFkb25seSBiaXRSYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjY2hhbm5lbHMgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjY2hhbm5lbHN9XG4gICovXG4gIHJlYWRvbmx5IGNoYW5uZWxzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjY29kZWMgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjY29kZWN9XG4gICovXG4gIHJlYWRvbmx5IGNvZGVjPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjc2FtcGxlX3JhdGUgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjc2FtcGxlX3JhdGV9XG4gICovXG4gIHJlYWRvbmx5IHNhbXBsZVJhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXVkaW9fcGFja2luZ19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1ZGlvUGFja2luZ01vZGUpLFxuICAgIGJpdF9yYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpdFJhdGUpLFxuICAgIGNoYW5uZWxzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNoYW5uZWxzKSxcbiAgICBjb2RlYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlYyksXG4gICAgc2FtcGxlX3JhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FtcGxlUmF0ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9PdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdWRpb19wYWNraW5nX21vZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1ZGlvUGFja2luZ01vZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGJpdF9yYXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5iaXRSYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjaGFubmVsczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2hhbm5lbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvZGVjOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlYyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FtcGxlX3JhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNhbXBsZVJhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpbyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXVkaW9QYWNraW5nTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdWRpb1BhY2tpbmdNb2RlID0gdGhpcy5fYXVkaW9QYWNraW5nTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2JpdFJhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYml0UmF0ZSA9IHRoaXMuX2JpdFJhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jaGFubmVscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGFubmVscyA9IHRoaXMuX2NoYW5uZWxzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29kZWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29kZWMgPSB0aGlzLl9jb2RlYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhbXBsZVJhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FtcGxlUmF0ZSA9IHRoaXMuX3NhbXBsZVJhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXVkaW9QYWNraW5nTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JpdFJhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaGFubmVscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvZGVjID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXVkaW9QYWNraW5nTW9kZSA9IHZhbHVlLmF1ZGlvUGFja2luZ01vZGU7XG4gICAgICB0aGlzLl9iaXRSYXRlID0gdmFsdWUuYml0UmF0ZTtcbiAgICAgIHRoaXMuX2NoYW5uZWxzID0gdmFsdWUuY2hhbm5lbHM7XG4gICAgICB0aGlzLl9jb2RlYyA9IHZhbHVlLmNvZGVjO1xuICAgICAgdGhpcy5fc2FtcGxlUmF0ZSA9IHZhbHVlLnNhbXBsZVJhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXVkaW9fcGFja2luZ19tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1ZGlvUGFja2luZ01vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1ZGlvUGFja2luZ01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdWRpb19wYWNraW5nX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1ZGlvUGFja2luZ01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1ZGlvUGFja2luZ01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdWRpb1BhY2tpbmdNb2RlKCkge1xuICAgIHRoaXMuX2F1ZGlvUGFja2luZ01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1ZGlvUGFja2luZ01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9QYWNraW5nTW9kZTtcbiAgfVxuXG4gIC8vIGJpdF9yYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JpdFJhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJpdFJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiaXRfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYml0UmF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYml0UmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJpdFJhdGUoKSB7XG4gICAgdGhpcy5fYml0UmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYml0UmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRSYXRlO1xuICB9XG5cbiAgLy8gY2hhbm5lbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2hhbm5lbHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNoYW5uZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2hhbm5lbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNoYW5uZWxzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGFubmVscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENoYW5uZWxzKCkge1xuICAgIHRoaXMuX2NoYW5uZWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaGFubmVsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFubmVscztcbiAgfVxuXG4gIC8vIGNvZGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZGVjPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb2RlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvZGVjJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb2RlYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29kZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlYygpIHtcbiAgICB0aGlzLl9jb2RlYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZWM7XG4gIH1cblxuICAvLyBzYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYW1wbGVSYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYW1wbGVSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhbXBsZVJhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NhbXBsZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX3NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhbXBsZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2JpdF9kZXB0aCBFbGFzdGljdHJhbnNjb2RlclByZXNldCNiaXRfZGVwdGh9XG4gICovXG4gIHJlYWRvbmx5IGJpdERlcHRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjYml0X29yZGVyIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2JpdF9vcmRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgYml0T3JkZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNwcm9maWxlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I3Byb2ZpbGV9XG4gICovXG4gIHJlYWRvbmx5IHByb2ZpbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNzaWduZWQgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjc2lnbmVkfVxuICAqL1xuICByZWFkb25seSBzaWduZWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYml0X2RlcHRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpdERlcHRoKSxcbiAgICBiaXRfb3JkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYml0T3JkZXIpLFxuICAgIHByb2ZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvZmlsZSksXG4gICAgc2lnbmVkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpZ25lZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBiaXRfZGVwdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJpdERlcHRoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBiaXRfb3JkZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJpdE9yZGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwcm9maWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm9maWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzaWduZWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNpZ25lZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9iaXREZXB0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5iaXREZXB0aCA9IHRoaXMuX2JpdERlcHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYml0T3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYml0T3JkZXIgPSB0aGlzLl9iaXRPcmRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2ZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvZmlsZSA9IHRoaXMuX3Byb2ZpbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zaWduZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2lnbmVkID0gdGhpcy5fc2lnbmVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JpdERlcHRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYml0T3JkZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9maWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2lnbmVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9iaXREZXB0aCA9IHZhbHVlLmJpdERlcHRoO1xuICAgICAgdGhpcy5fYml0T3JkZXIgPSB2YWx1ZS5iaXRPcmRlcjtcbiAgICAgIHRoaXMuX3Byb2ZpbGUgPSB2YWx1ZS5wcm9maWxlO1xuICAgICAgdGhpcy5fc2lnbmVkID0gdmFsdWUuc2lnbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJpdF9kZXB0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iaXREZXB0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYml0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiaXRfZGVwdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJpdERlcHRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iaXREZXB0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJpdERlcHRoKCkge1xuICAgIHRoaXMuX2JpdERlcHRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiaXREZXB0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaXREZXB0aDtcbiAgfVxuXG4gIC8vIGJpdF9vcmRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iaXRPcmRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYml0T3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiaXRfb3JkZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJpdE9yZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iaXRPcmRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJpdE9yZGVyKCkge1xuICAgIHRoaXMuX2JpdE9yZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiaXRPcmRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRPcmRlcjtcbiAgfVxuXG4gIC8vIHByb2ZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZmlsZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb2ZpbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2ZpbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9maWxlKCkge1xuICAgIHRoaXMuX3Byb2ZpbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2ZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZmlsZTtcbiAgfVxuXG4gIC8vIHNpZ25lZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaWduZWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNpZ25lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpZ25lZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2lnbmVkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTaWduZWQoKSB7XG4gICAgdGhpcy5fc2lnbmVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaWduZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNhc3BlY3RfcmF0aW8gRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjYXNwZWN0X3JhdGlvfVxuICAqL1xuICByZWFkb25seSBhc3BlY3RSYXRpbz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2Zvcm1hdCBFbGFzdGljdHJhbnNjb2RlclByZXNldCNmb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IGZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2ludGVydmFsIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2ludGVydmFsfVxuICAqL1xuICByZWFkb25seSBpbnRlcnZhbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I21heF9oZWlnaHQgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjbWF4X2hlaWdodH1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjbWF4X3dpZHRoIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I21heF93aWR0aH1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4V2lkdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNwYWRkaW5nX3BvbGljeSBFbGFzdGljdHJhbnNjb2RlclByZXNldCNwYWRkaW5nX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgcGFkZGluZ1BvbGljeT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3Jlc29sdXRpb24gRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjcmVzb2x1dGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb2x1dGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3NpemluZ19wb2xpY3kgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjc2l6aW5nX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgc2l6aW5nUG9saWN5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFzcGVjdF9yYXRpbzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3BlY3RSYXRpbyksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgaW50ZXJ2YWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIG1heF9oZWlnaHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4SGVpZ2h0KSxcbiAgICBtYXhfd2lkdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4V2lkdGgpLFxuICAgIHBhZGRpbmdfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhZGRpbmdQb2xpY3kpLFxuICAgIHJlc29sdXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb2x1dGlvbiksXG4gICAgc2l6aW5nX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zaXppbmdQb2xpY3kpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlsc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlsc091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXNwZWN0X3JhdGlvOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hc3BlY3RSYXRpbyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mb3JtYXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGludGVydmFsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWF4X2hlaWdodDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4SGVpZ2h0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYXhfd2lkdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heFdpZHRoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwYWRkaW5nX3BvbGljeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGFkZGluZ1BvbGljeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVzb2x1dGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb2x1dGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2l6aW5nX3BvbGljeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2l6aW5nUG9saWN5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hc3BlY3RSYXRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hc3BlY3RSYXRpbyA9IHRoaXMuX2FzcGVjdFJhdGlvO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZvcm1hdCA9IHRoaXMuX2Zvcm1hdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ludGVydmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4SGVpZ2h0ID0gdGhpcy5fbWF4SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4V2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4V2lkdGggPSB0aGlzLl9tYXhXaWR0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhZGRpbmdQb2xpY3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFkZGluZ1BvbGljeSA9IHRoaXMuX3BhZGRpbmdQb2xpY3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvbHV0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc29sdXRpb24gPSB0aGlzLl9yZXNvbHV0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2l6aW5nUG9saWN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpemluZ1BvbGljeSA9IHRoaXMuX3NpemluZ1BvbGljeTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHZhbHVlLmFzcGVjdFJhdGlvO1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWUuZm9ybWF0O1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZS5pbnRlcnZhbDtcbiAgICAgIHRoaXMuX21heEhlaWdodCA9IHZhbHVlLm1heEhlaWdodDtcbiAgICAgIHRoaXMuX21heFdpZHRoID0gdmFsdWUubWF4V2lkdGg7XG4gICAgICB0aGlzLl9wYWRkaW5nUG9saWN5ID0gdmFsdWUucGFkZGluZ1BvbGljeTtcbiAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB2YWx1ZS5yZXNvbHV0aW9uO1xuICAgICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdmFsdWUuc2l6aW5nUG9saWN5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFzcGVjdF9yYXRpbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hc3BlY3RSYXRpbz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXNwZWN0UmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3BlY3RfcmF0aW8nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFzcGVjdFJhdGlvKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFzcGVjdFJhdGlvKCkge1xuICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhc3BlY3RSYXRpb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hc3BlY3RSYXRpbztcbiAgfVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JtYXQoKSB7XG4gICAgdGhpcy5fZm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIC8vIG1heF9oZWlnaHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4SGVpZ2h0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfaGVpZ2h0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhIZWlnaHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heEhlaWdodCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heEhlaWdodCgpIHtcbiAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heEhlaWdodElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhIZWlnaHQ7XG4gIH1cblxuICAvLyBtYXhfd2lkdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4V2lkdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X3dpZHRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhXaWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4V2lkdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhXaWR0aCgpIHtcbiAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4V2lkdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4V2lkdGg7XG4gIH1cblxuICAvLyBwYWRkaW5nX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYWRkaW5nUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYWRkaW5nUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFkZGluZ19wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhZGRpbmdQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYWRkaW5nUG9saWN5KCkge1xuICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhZGRpbmdQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFkZGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIHJlc29sdXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb2x1dGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc29sdXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc29sdXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc29sdXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvbHV0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc29sdXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x1dGlvbjtcbiAgfVxuXG4gIC8vIHNpemluZ19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2l6aW5nUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzaXppbmdQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaXppbmdfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXppbmdQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemluZ1BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpemluZ1BvbGljeSgpIHtcbiAgICB0aGlzLl9zaXppbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpemluZ1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaXppbmdQb2xpY3k7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlbyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNhc3BlY3RfcmF0aW8gRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjYXNwZWN0X3JhdGlvfVxuICAqL1xuICByZWFkb25seSBhc3BlY3RSYXRpbz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2JpdF9yYXRlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2JpdF9yYXRlfVxuICAqL1xuICByZWFkb25seSBiaXRSYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjY29kZWMgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjY29kZWN9XG4gICovXG4gIHJlYWRvbmx5IGNvZGVjPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjZGlzcGxheV9hc3BlY3RfcmF0aW8gRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjZGlzcGxheV9hc3BlY3RfcmF0aW99XG4gICovXG4gIHJlYWRvbmx5IGRpc3BsYXlBc3BlY3RSYXRpbz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2ZpeGVkX2dvcCBFbGFzdGljdHJhbnNjb2RlclByZXNldCNmaXhlZF9nb3B9XG4gICovXG4gIHJlYWRvbmx5IGZpeGVkR29wPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjZnJhbWVfcmF0ZSBFbGFzdGljdHJhbnNjb2RlclByZXNldCNmcmFtZV9yYXRlfVxuICAqL1xuICByZWFkb25seSBmcmFtZVJhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNrZXlmcmFtZXNfbWF4X2Rpc3QgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQja2V5ZnJhbWVzX21heF9kaXN0fVxuICAqL1xuICByZWFkb25seSBrZXlmcmFtZXNNYXhEaXN0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjbWF4X2ZyYW1lX3JhdGUgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjbWF4X2ZyYW1lX3JhdGV9XG4gICovXG4gIHJlYWRvbmx5IG1heEZyYW1lUmF0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I21heF9oZWlnaHQgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjbWF4X2hlaWdodH1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjbWF4X3dpZHRoIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I21heF93aWR0aH1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4V2lkdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNwYWRkaW5nX3BvbGljeSBFbGFzdGljdHJhbnNjb2RlclByZXNldCNwYWRkaW5nX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgcGFkZGluZ1BvbGljeT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3Jlc29sdXRpb24gRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjcmVzb2x1dGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb2x1dGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3NpemluZ19wb2xpY3kgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjc2l6aW5nX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgc2l6aW5nUG9saWN5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9PdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFzcGVjdF9yYXRpbzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3BlY3RSYXRpbyksXG4gICAgYml0X3JhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYml0UmF0ZSksXG4gICAgY29kZWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZWMpLFxuICAgIGRpc3BsYXlfYXNwZWN0X3JhdGlvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpc3BsYXlBc3BlY3RSYXRpbyksXG4gICAgZml4ZWRfZ29wOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpeGVkR29wKSxcbiAgICBmcmFtZV9yYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyYW1lUmF0ZSksXG4gICAga2V5ZnJhbWVzX21heF9kaXN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleWZyYW1lc01heERpc3QpLFxuICAgIG1heF9mcmFtZV9yYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEZyYW1lUmF0ZSksXG4gICAgbWF4X2hlaWdodDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhIZWlnaHQpLFxuICAgIG1heF93aWR0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhXaWR0aCksXG4gICAgcGFkZGluZ19wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFkZGluZ1BvbGljeSksXG4gICAgcmVzb2x1dGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvbHV0aW9uKSxcbiAgICBzaXppbmdfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemluZ1BvbGljeSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9PdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhc3BlY3RfcmF0aW86IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFzcGVjdFJhdGlvKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBiaXRfcmF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYml0UmF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29kZWM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvZGVjKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkaXNwbGF5X2FzcGVjdF9yYXRpbzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGlzcGxheUFzcGVjdFJhdGlvKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmaXhlZF9nb3A6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZpeGVkR29wKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmcmFtZV9yYXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mcmFtZVJhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGtleWZyYW1lc19tYXhfZGlzdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5ZnJhbWVzTWF4RGlzdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWF4X2ZyYW1lX3JhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heEZyYW1lUmF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWF4X2hlaWdodDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4SGVpZ2h0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYXhfd2lkdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heFdpZHRoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwYWRkaW5nX3BvbGljeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGFkZGluZ1BvbGljeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVzb2x1dGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb2x1dGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2l6aW5nX3BvbGljeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2l6aW5nUG9saWN5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW8gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FzcGVjdFJhdGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFzcGVjdFJhdGlvID0gdGhpcy5fYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIGlmICh0aGlzLl9iaXRSYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJpdFJhdGUgPSB0aGlzLl9iaXRSYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29kZWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29kZWMgPSB0aGlzLl9jb2RlYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlBc3BlY3RSYXRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaXNwbGF5QXNwZWN0UmF0aW8gPSB0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW87XG4gICAgfVxuICAgIGlmICh0aGlzLl9maXhlZEdvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maXhlZEdvcCA9IHRoaXMuX2ZpeGVkR29wO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZnJhbWVSYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZyYW1lUmF0ZSA9IHRoaXMuX2ZyYW1lUmF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tleWZyYW1lc01heERpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5ZnJhbWVzTWF4RGlzdCA9IHRoaXMuX2tleWZyYW1lc01heERpc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhGcmFtZVJhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4RnJhbWVSYXRlID0gdGhpcy5fbWF4RnJhbWVSYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4SGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heEhlaWdodCA9IHRoaXMuX21heEhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heFdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFdpZHRoID0gdGhpcy5fbWF4V2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYWRkaW5nUG9saWN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhZGRpbmdQb2xpY3kgPSB0aGlzLl9wYWRkaW5nUG9saWN5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb2x1dGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvbHV0aW9uID0gdGhpcy5fcmVzb2x1dGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NpemluZ1BvbGljeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaXppbmdQb2xpY3kgPSB0aGlzLl9zaXppbmdQb2xpY3k7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXNwZWN0UmF0aW8gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iaXRSYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29kZWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW8gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maXhlZEdvcCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleWZyYW1lc01heERpc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhGcmFtZVJhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHZhbHVlLmFzcGVjdFJhdGlvO1xuICAgICAgdGhpcy5fYml0UmF0ZSA9IHZhbHVlLmJpdFJhdGU7XG4gICAgICB0aGlzLl9jb2RlYyA9IHZhbHVlLmNvZGVjO1xuICAgICAgdGhpcy5fZGlzcGxheUFzcGVjdFJhdGlvID0gdmFsdWUuZGlzcGxheUFzcGVjdFJhdGlvO1xuICAgICAgdGhpcy5fZml4ZWRHb3AgPSB2YWx1ZS5maXhlZEdvcDtcbiAgICAgIHRoaXMuX2ZyYW1lUmF0ZSA9IHZhbHVlLmZyYW1lUmF0ZTtcbiAgICAgIHRoaXMuX2tleWZyYW1lc01heERpc3QgPSB2YWx1ZS5rZXlmcmFtZXNNYXhEaXN0O1xuICAgICAgdGhpcy5fbWF4RnJhbWVSYXRlID0gdmFsdWUubWF4RnJhbWVSYXRlO1xuICAgICAgdGhpcy5fbWF4SGVpZ2h0ID0gdmFsdWUubWF4SGVpZ2h0O1xuICAgICAgdGhpcy5fbWF4V2lkdGggPSB2YWx1ZS5tYXhXaWR0aDtcbiAgICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB2YWx1ZS5wYWRkaW5nUG9saWN5O1xuICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9IHZhbHVlLnJlc29sdXRpb247XG4gICAgICB0aGlzLl9zaXppbmdQb2xpY3kgPSB2YWx1ZS5zaXppbmdQb2xpY3k7XG4gICAgfVxuICB9XG5cbiAgLy8gYXNwZWN0X3JhdGlvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FzcGVjdFJhdGlvPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhc3BlY3RSYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FzcGVjdF9yYXRpbycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXNwZWN0UmF0aW8odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXNwZWN0UmF0aW8oKSB7XG4gICAgdGhpcy5fYXNwZWN0UmF0aW8gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzcGVjdFJhdGlvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FzcGVjdFJhdGlvO1xuICB9XG5cbiAgLy8gYml0X3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYml0UmF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYml0UmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2JpdF9yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBiaXRSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iaXRSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Qml0UmF0ZSgpIHtcbiAgICB0aGlzLl9iaXRSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiaXRSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdFJhdGU7XG4gIH1cblxuICAvLyBjb2RlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29kZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29kZWModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvZGVjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29kZWMoKSB7XG4gICAgdGhpcy5fY29kZWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVjO1xuICB9XG5cbiAgLy8gZGlzcGxheV9hc3BlY3RfcmF0aW8gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzcGxheUFzcGVjdFJhdGlvPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkaXNwbGF5QXNwZWN0UmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXNwbGF5X2FzcGVjdF9yYXRpbycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzcGxheUFzcGVjdFJhdGlvKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW8gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXNwbGF5QXNwZWN0UmF0aW8oKSB7XG4gICAgdGhpcy5fZGlzcGxheUFzcGVjdFJhdGlvID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNwbGF5QXNwZWN0UmF0aW9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUFzcGVjdFJhdGlvO1xuICB9XG5cbiAgLy8gZml4ZWRfZ29wIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpeGVkR29wPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaXhlZEdvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpeGVkX2dvcCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZml4ZWRHb3AodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpeGVkR29wID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rml4ZWRHb3AoKSB7XG4gICAgdGhpcy5fZml4ZWRHb3AgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpeGVkR29wSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpeGVkR29wO1xuICB9XG5cbiAgLy8gZnJhbWVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mcmFtZVJhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZyYW1lUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZyYW1lX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZyYW1lUmF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnJhbWVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnJhbWVSYXRlKCkge1xuICAgIHRoaXMuX2ZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnJhbWVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lUmF0ZTtcbiAgfVxuXG4gIC8vIGtleWZyYW1lc19tYXhfZGlzdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXlmcmFtZXNNYXhEaXN0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXlmcmFtZXNNYXhEaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5ZnJhbWVzX21heF9kaXN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXlmcmFtZXNNYXhEaXN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXlmcmFtZXNNYXhEaXN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5ZnJhbWVzTWF4RGlzdCgpIHtcbiAgICB0aGlzLl9rZXlmcmFtZXNNYXhEaXN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlmcmFtZXNNYXhEaXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleWZyYW1lc01heERpc3Q7XG4gIH1cblxuICAvLyBtYXhfZnJhbWVfcmF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heEZyYW1lUmF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4RnJhbWVSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X2ZyYW1lX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEZyYW1lUmF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4RnJhbWVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4RnJhbWVSYXRlKCkge1xuICAgIHRoaXMuX21heEZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4RnJhbWVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heEZyYW1lUmF0ZTtcbiAgfVxuXG4gIC8vIG1heF9oZWlnaHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4SGVpZ2h0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfaGVpZ2h0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhIZWlnaHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heEhlaWdodCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heEhlaWdodCgpIHtcbiAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heEhlaWdodElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhIZWlnaHQ7XG4gIH1cblxuICAvLyBtYXhfd2lkdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4V2lkdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X3dpZHRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhXaWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4V2lkdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhXaWR0aCgpIHtcbiAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4V2lkdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4V2lkdGg7XG4gIH1cblxuICAvLyBwYWRkaW5nX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYWRkaW5nUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYWRkaW5nUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFkZGluZ19wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhZGRpbmdQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYWRkaW5nUG9saWN5KCkge1xuICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhZGRpbmdQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFkZGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIHJlc29sdXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb2x1dGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc29sdXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc29sdXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc29sdXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvbHV0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc29sdXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x1dGlvbjtcbiAgfVxuXG4gIC8vIHNpemluZ19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2l6aW5nUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzaXppbmdQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaXppbmdfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXppbmdQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemluZ1BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpemluZ1BvbGljeSgpIHtcbiAgICB0aGlzLl9zaXppbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpemluZ1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaXppbmdQb2xpY3k7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjaG9yaXpvbnRhbF9hbGlnbiBFbGFzdGljdHJhbnNjb2RlclByZXNldCNob3Jpem9udGFsX2FsaWdufVxuICAqL1xuICByZWFkb25seSBob3Jpem9udGFsQWxpZ24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNob3Jpem9udGFsX29mZnNldCBFbGFzdGljdHJhbnNjb2RlclByZXNldCNob3Jpem9udGFsX29mZnNldH1cbiAgKi9cbiAgcmVhZG9ubHkgaG9yaXpvbnRhbE9mZnNldD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I2lkIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjbWF4X2hlaWdodCBFbGFzdGljdHJhbnNjb2RlclByZXNldCNtYXhfaGVpZ2h0fVxuICAqL1xuICByZWFkb25seSBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCNtYXhfd2lkdGggRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjbWF4X3dpZHRofVxuICAqL1xuICByZWFkb25seSBtYXhXaWR0aD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I29wYWNpdHkgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjb3BhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgb3BhY2l0eT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0I3NpemluZ19wb2xpY3kgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjc2l6aW5nX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgc2l6aW5nUG9saWN5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjdGFyZ2V0IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0I3RhcmdldH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjdmVydGljYWxfYWxpZ24gRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjdmVydGljYWxfYWxpZ259XG4gICovXG4gIHJlYWRvbmx5IHZlcnRpY2FsQWxpZ24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldCN2ZXJ0aWNhbF9vZmZzZXQgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQjdmVydGljYWxfb2Zmc2V0fVxuICAqL1xuICByZWFkb25seSB2ZXJ0aWNhbE9mZnNldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9XYXRlcm1hcmtzVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3MgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3Jpem9udGFsX2FsaWduOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvcml6b250YWxBbGlnbiksXG4gICAgaG9yaXpvbnRhbF9vZmZzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9yaXpvbnRhbE9mZnNldCksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIG1heF9oZWlnaHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4SGVpZ2h0KSxcbiAgICBtYXhfd2lkdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4V2lkdGgpLFxuICAgIG9wYWNpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3BhY2l0eSksXG4gICAgc2l6aW5nX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zaXppbmdQb2xpY3kpLFxuICAgIHRhcmdldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXQpLFxuICAgIHZlcnRpY2FsX2FsaWduOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnRpY2FsQWxpZ24pLFxuICAgIHZlcnRpY2FsX29mZnNldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJ0aWNhbE9mZnNldCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBob3Jpem9udGFsX2FsaWduOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob3Jpem9udGFsQWxpZ24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGhvcml6b250YWxfb2Zmc2V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob3Jpem9udGFsT2Zmc2V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1heF9oZWlnaHQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heEhlaWdodCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWF4X3dpZHRoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhXaWR0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEub3BhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2l6aW5nX3BvbGljeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2l6aW5nUG9saWN5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmVydGljYWxfYWxpZ246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZlcnRpY2FsQWxpZ24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZlcnRpY2FsX29mZnNldDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmVydGljYWxPZmZzZXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3MgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hvcml6b250YWxBbGlnbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3Jpem9udGFsQWxpZ24gPSB0aGlzLl9ob3Jpem9udGFsQWxpZ247XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3Jpem9udGFsT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvcml6b250YWxPZmZzZXQgPSB0aGlzLl9ob3Jpem9udGFsT2Zmc2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWQgPSB0aGlzLl9pZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heEhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhIZWlnaHQgPSB0aGlzLl9tYXhIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhXaWR0aCA9IHRoaXMuX21heFdpZHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcGFjaXR5ID0gdGhpcy5fb3BhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NpemluZ1BvbGljeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaXppbmdQb2xpY3kgPSB0aGlzLl9zaXppbmdQb2xpY3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0ID0gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVydGljYWxBbGlnbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJ0aWNhbEFsaWduID0gdGhpcy5fdmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZlcnRpY2FsT2Zmc2V0ID0gdGhpcy5fdmVydGljYWxPZmZzZXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsQWxpZ24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsT2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29wYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaXppbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJ0aWNhbEFsaWduID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmVydGljYWxPZmZzZXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faG9yaXpvbnRhbEFsaWduID0gdmFsdWUuaG9yaXpvbnRhbEFsaWduO1xuICAgICAgdGhpcy5faG9yaXpvbnRhbE9mZnNldCA9IHZhbHVlLmhvcml6b250YWxPZmZzZXQ7XG4gICAgICB0aGlzLl9pZCA9IHZhbHVlLmlkO1xuICAgICAgdGhpcy5fbWF4SGVpZ2h0ID0gdmFsdWUubWF4SGVpZ2h0O1xuICAgICAgdGhpcy5fbWF4V2lkdGggPSB2YWx1ZS5tYXhXaWR0aDtcbiAgICAgIHRoaXMuX29wYWNpdHkgPSB2YWx1ZS5vcGFjaXR5O1xuICAgICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdmFsdWUuc2l6aW5nUG9saWN5O1xuICAgICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWUudGFyZ2V0O1xuICAgICAgdGhpcy5fdmVydGljYWxBbGlnbiA9IHZhbHVlLnZlcnRpY2FsQWxpZ247XG4gICAgICB0aGlzLl92ZXJ0aWNhbE9mZnNldCA9IHZhbHVlLnZlcnRpY2FsT2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGhvcml6b250YWxfYWxpZ24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbEFsaWduPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3Jpem9udGFsQWxpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3Jpem9udGFsX2FsaWduJyk7XG4gIH1cbiAgcHVibGljIHNldCBob3Jpem9udGFsQWxpZ24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvcml6b250YWxBbGlnbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhvcml6b250YWxBbGlnbigpIHtcbiAgICB0aGlzLl9ob3Jpem9udGFsQWxpZ24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvcml6b250YWxBbGlnbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3Jpem9udGFsQWxpZ247XG4gIH1cblxuICAvLyBob3Jpem9udGFsX29mZnNldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3Jpem9udGFsT2Zmc2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3Jpem9udGFsT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9yaXpvbnRhbF9vZmZzZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvcml6b250YWxPZmZzZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvcml6b250YWxPZmZzZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3Jpem9udGFsT2Zmc2V0KCkge1xuICAgIHRoaXMuX2hvcml6b250YWxPZmZzZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvcml6b250YWxPZmZzZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9yaXpvbnRhbE9mZnNldDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBtYXhfaGVpZ2h0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heEhlaWdodD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X2hlaWdodCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4SGVpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhIZWlnaHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhIZWlnaHQoKSB7XG4gICAgdGhpcy5fbWF4SGVpZ2h0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhIZWlnaHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4SGVpZ2h0O1xuICB9XG5cbiAgLy8gbWF4X3dpZHRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heFdpZHRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF93aWR0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4V2lkdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heFdpZHRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4V2lkdGgoKSB7XG4gICAgdGhpcy5fbWF4V2lkdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFdpZHRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFdpZHRoO1xuICB9XG5cbiAgLy8gb3BhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vcGFjaXR5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3BhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3BhY2l0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3BhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9wYWNpdHkoKSB7XG4gICAgdGhpcy5fb3BhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3BhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcGFjaXR5O1xuICB9XG5cbiAgLy8gc2l6aW5nX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaXppbmdQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNpemluZ1BvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpemluZ19wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNpemluZ1BvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2l6aW5nUG9saWN5KCkge1xuICAgIHRoaXMuX3NpemluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2l6aW5nUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIHRhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXQoKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG5cbiAgLy8gdmVydGljYWxfYWxpZ24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVydGljYWxBbGlnbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVydGljYWxBbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnRpY2FsX2FsaWduJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJ0aWNhbEFsaWduKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92ZXJ0aWNhbEFsaWduID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVydGljYWxBbGlnbigpIHtcbiAgICB0aGlzLl92ZXJ0aWNhbEFsaWduID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJ0aWNhbEFsaWduSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsQWxpZ247XG4gIH1cblxuICAvLyB2ZXJ0aWNhbF9vZmZzZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVydGljYWxPZmZzZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVydGljYWxfb2Zmc2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJ0aWNhbE9mZnNldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVydGljYWxPZmZzZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJ0aWNhbE9mZnNldCgpIHtcbiAgICB0aGlzLl92ZXJ0aWNhbE9mZnNldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVydGljYWxPZmZzZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWxPZmZzZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9XYXRlcm1hcmtzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcHJlc2V0IGF3c19lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXR9XG4qL1xuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXRcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXQgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXRcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQgYXdzX2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5fdmlkZW9Db2RlY09wdGlvbnMgPSBjb25maWcudmlkZW9Db2RlY09wdGlvbnM7XG4gICAgdGhpcy5fYXVkaW8uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hdWRpbztcbiAgICB0aGlzLl9hdWRpb0NvZGVjT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmF1ZGlvQ29kZWNPcHRpb25zO1xuICAgIHRoaXMuX3RodW1ibmFpbHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aHVtYm5haWxzO1xuICAgIHRoaXMuX3ZpZGVvLmludGVybmFsVmFsdWUgPSBjb25maWcudmlkZW87XG4gICAgdGhpcy5fdmlkZW9XYXRlcm1hcmtzLmludGVybmFsVmFsdWUgPSBjb25maWcudmlkZW9XYXRlcm1hcmtzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNvbnRhaW5lciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb250YWluZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250YWluZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGFpbmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdmlkZW9fY29kZWNfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aWRlb0NvZGVjT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHZpZGVvQ29kZWNPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndmlkZW9fY29kZWNfb3B0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlkZW9Db2RlY09wdGlvbnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl92aWRlb0NvZGVjT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZpZGVvQ29kZWNPcHRpb25zKCkge1xuICAgIHRoaXMuX3ZpZGVvQ29kZWNPcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aWRlb0NvZGVjT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92aWRlb0NvZGVjT3B0aW9ucztcbiAgfVxuXG4gIC8vIGF1ZGlvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1ZGlvID0gbmV3IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhdWRpb1wiKTtcbiAgcHVibGljIGdldCBhdWRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW87XG4gIH1cbiAgcHVibGljIHB1dEF1ZGlvKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvKSB7XG4gICAgdGhpcy5fYXVkaW8uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1ZGlvKCkge1xuICAgIHRoaXMuX2F1ZGlvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1ZGlvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhdWRpb19jb2RlY19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1ZGlvQ29kZWNPcHRpb25zID0gbmV3IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhdWRpb19jb2RlY19vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IGF1ZGlvQ29kZWNPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0NvZGVjT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0QXVkaW9Db2RlY09wdGlvbnModmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnMpIHtcbiAgICB0aGlzLl9hdWRpb0NvZGVjT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXVkaW9Db2RlY09wdGlvbnMoKSB7XG4gICAgdGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVkaW9Db2RlY09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRodW1ibmFpbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGh1bWJuYWlscyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0aHVtYm5haWxzXCIpO1xuICBwdWJsaWMgZ2V0IHRodW1ibmFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbHM7XG4gIH1cbiAgcHVibGljIHB1dFRodW1ibmFpbHModmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscykge1xuICAgIHRoaXMuX3RodW1ibmFpbHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRodW1ibmFpbHMoKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHVtYm5haWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZpZGVvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZpZGVvID0gbmV3IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ2aWRlb1wiKTtcbiAgcHVibGljIGdldCB2aWRlbygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlkZW87XG4gIH1cbiAgcHVibGljIHB1dFZpZGVvKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvKSB7XG4gICAgdGhpcy5fdmlkZW8uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZpZGVvKCkge1xuICAgIHRoaXMuX3ZpZGVvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpZGVvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZGVvLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB2aWRlb193YXRlcm1hcmtzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZpZGVvV2F0ZXJtYXJrcyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrc0xpc3QodGhpcywgXCJ2aWRlb193YXRlcm1hcmtzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHZpZGVvV2F0ZXJtYXJrcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlkZW9XYXRlcm1hcmtzO1xuICB9XG4gIHB1YmxpYyBwdXRWaWRlb1dhdGVybWFya3ModmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9XYXRlcm1hcmtzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3ZpZGVvV2F0ZXJtYXJrcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlkZW9XYXRlcm1hcmtzKCkge1xuICAgIHRoaXMuX3ZpZGVvV2F0ZXJtYXJrcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aWRlb1dhdGVybWFya3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlkZW9XYXRlcm1hcmtzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29udGFpbmVyKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgIHZpZGVvX2NvZGVjX29wdGlvbnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ZpZGVvQ29kZWNPcHRpb25zKSxcbiAgICAgIGF1ZGlvOiBlbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvVG9UZXJyYWZvcm0odGhpcy5fYXVkaW8uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBhdWRpb19jb2RlY19vcHRpb25zOiBlbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zVG9UZXJyYWZvcm0odGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aHVtYm5haWxzOiBlbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHNUb1RlcnJhZm9ybSh0aGlzLl90aHVtYm5haWxzLmludGVybmFsVmFsdWUpLFxuICAgICAgdmlkZW86IGVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9Ub1RlcnJhZm9ybSh0aGlzLl92aWRlby5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHZpZGVvX3dhdGVybWFya3M6IGNka3RmLmxpc3RNYXBwZXIoZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdmlkZW9XYXRlcm1hcmtzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jb250YWluZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHZpZGVvX2NvZGVjX29wdGlvbnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3ZpZGVvQ29kZWNPcHRpb25zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgYXVkaW86IHtcbiAgICAgICAgdmFsdWU6IGVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Ub0hjbFRlcnJhZm9ybSh0aGlzLl9hdWRpby5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBhdWRpb19jb2RlY19vcHRpb25zOiB7XG4gICAgICAgIHZhbHVlOiBlbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zVG9IY2xUZXJyYWZvcm0odGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGh1bWJuYWlsczoge1xuICAgICAgICB2YWx1ZTogZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzVG9IY2xUZXJyYWZvcm0odGhpcy5fdGh1bWJuYWlscy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHZhbHVlOiBlbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvVG9IY2xUZXJyYWZvcm0odGhpcy5fdmlkZW8uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9MaXN0XCIsXG4gICAgICB9LFxuICAgICAgdmlkZW9fd2F0ZXJtYXJrczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChlbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrc1RvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl92aWRlb1dhdGVybWFya3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=