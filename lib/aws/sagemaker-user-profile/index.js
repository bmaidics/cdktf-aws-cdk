"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerUserProfile = exports.SagemakerUserProfileUserSettingsOutputReference = exports.sagemakerUserProfileUserSettingsToHclTerraform = exports.sagemakerUserProfileUserSettingsToTerraform = exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference = exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform = exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform = exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform = exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = exports.SagemakerUserProfileUserSettingsSharingSettingsOutputReference = exports.sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform = exports.sagemakerUserProfileUserSettingsSharingSettingsToTerraform = exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform = exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList = exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference = exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform = exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform = exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform = exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        lifecycle_config_arn: cdktf.stringToTerraform(struct.lifecycleConfigArn),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
        sagemaker_image_version_arn: cdktf.stringToTerraform(struct.sagemakerImageVersionArn),
    };
}
exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform;
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktf.stringToHclTerraform(struct.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker_image_arn: {
            value: cdktf.stringToHclTerraform(struct.sagemakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker_image_version_arn: {
            value: cdktf.stringToHclTerraform(struct.sagemakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform = sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform;
class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sagemakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        if (this._sagemakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sagemakerImageArn = undefined;
            this._sagemakerImageVersionArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sagemakerImageArn = value.sagemakerImageArn;
            this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
        }
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    set lifecycleConfigArn(value) {
        this._lifecycleConfigArn = value;
    }
    resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
    get sagemakerImageVersionArn() {
        return this.getStringAttribute('sagemaker_image_version_arn');
    }
    set sagemakerImageVersionArn(value) {
        this._sagemakerImageVersionArn = value;
    }
    resetSagemakerImageVersionArn() {
        this._sagemakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageVersionArnInput() {
        return this._sagemakerImageVersionArn;
    }
}
exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference[_a] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.lifecycleConfigArns),
        default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform = sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform;
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lifecycle_config_arns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.lifecycleConfigArns),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        default_resource_spec: {
            value: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct.defaultResourceSpec),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform = sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform;
class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: false, required: true
        this._defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lifecycleConfigArns = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    get lifecycleConfigArns() {
        return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
    }
    set lifecycleConfigArns(value) {
        this._lifecycleConfigArns = value;
    }
    resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference = SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_image_config_name: cdktf.stringToTerraform(struct.appImageConfigName),
        image_name: cdktf.stringToTerraform(struct.imageName),
        image_version_number: cdktf.numberToTerraform(struct.imageVersionNumber),
    };
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform;
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktf.stringToHclTerraform(struct.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktf.stringToHclTerraform(struct.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktf.numberToHclTerraform(struct.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform;
class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }
    get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    set appImageConfigName(value) {
        this._appImageConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    get appImageConfigNameInput() {
        return this._appImageConfigName;
    }
    get imageName() {
        return this.getStringAttribute('image_name');
    }
    set imageName(value) {
        this._imageName = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageNameInput() {
        return this._imageName;
    }
    get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    set imageVersionNumber(value) {
        this._imageVersionNumber = value;
    }
    resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}
exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference = SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference[_c] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference", version: "0.0.0" };
class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
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
        return new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList = SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList;
_d = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList[_d] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList", version: "0.0.0" };
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        lifecycle_config_arn: cdktf.stringToTerraform(struct.lifecycleConfigArn),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
        sagemaker_image_version_arn: cdktf.stringToTerraform(struct.sagemakerImageVersionArn),
    };
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform;
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktf.stringToHclTerraform(struct.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker_image_arn: {
            value: cdktf.stringToHclTerraform(struct.sagemakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker_image_version_arn: {
            value: cdktf.stringToHclTerraform(struct.sagemakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform;
class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sagemakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        if (this._sagemakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sagemakerImageArn = undefined;
            this._sagemakerImageVersionArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sagemakerImageArn = value.sagemakerImageArn;
            this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
        }
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    set lifecycleConfigArn(value) {
        this._lifecycleConfigArn = value;
    }
    resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
    get sagemakerImageVersionArn() {
        return this.getStringAttribute('sagemaker_image_version_arn');
    }
    set sagemakerImageVersionArn(value) {
        this._sagemakerImageVersionArn = value;
    }
    resetSagemakerImageVersionArn() {
        this._sagemakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageVersionArnInput() {
        return this._sagemakerImageVersionArn;
    }
}
exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference[_e] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct.customImage),
        default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform;
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lifecycle_config_arns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.lifecycleConfigArns),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        custom_image: {
            value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform, true)(struct.customImage),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList",
        },
        default_resource_spec: {
            value: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct.defaultResourceSpec),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform;
class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // custom_image - computed: false, optional: true, required: false
        this._customImage = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
        // default_resource_spec - computed: false, optional: false, required: true
        this._defaultResourceSpec = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if (this._customImage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImage = this._customImage?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lifecycleConfigArns = undefined;
            this._customImage.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
            this._customImage.internalValue = value.customImage;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    get lifecycleConfigArns() {
        return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
    }
    set lifecycleConfigArns(value) {
        this._lifecycleConfigArns = value;
    }
    resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
    get customImage() {
        return this._customImage;
    }
    putCustomImage(value) {
        this._customImage.internalValue = value;
    }
    resetCustomImage() {
        this._customImage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customImageInput() {
        return this._customImage.internalValue;
    }
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference = SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notebook_output_option: cdktf.stringToTerraform(struct.notebookOutputOption),
        s3_kms_key_id: cdktf.stringToTerraform(struct.s3KmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
    };
}
exports.sagemakerUserProfileUserSettingsSharingSettingsToTerraform = sagemakerUserProfileUserSettingsSharingSettingsToTerraform;
function sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        notebook_output_option: {
            value: cdktf.stringToHclTerraform(struct.notebookOutputOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.s3KmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_path: {
            value: cdktf.stringToHclTerraform(struct.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform = sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform;
class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._notebookOutputOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.notebookOutputOption = this._notebookOutputOption;
        }
        if (this._s3KmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
        }
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notebookOutputOption = undefined;
            this._s3KmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notebookOutputOption = value.notebookOutputOption;
            this._s3KmsKeyId = value.s3KmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }
    get notebookOutputOption() {
        return this.getStringAttribute('notebook_output_option');
    }
    set notebookOutputOption(value) {
        this._notebookOutputOption = value;
    }
    resetNotebookOutputOption() {
        this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notebookOutputOptionInput() {
        return this._notebookOutputOption;
    }
    get s3KmsKeyId() {
        return this.getStringAttribute('s3_kms_key_id');
    }
    set s3KmsKeyId(value) {
        this._s3KmsKeyId = value;
    }
    resetS3KmsKeyId() {
        this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3KmsKeyIdInput() {
        return this._s3KmsKeyId;
    }
    get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    set s3OutputPath(value) {
        this._s3OutputPath = value;
    }
    resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
exports.SagemakerUserProfileUserSettingsSharingSettingsOutputReference = SagemakerUserProfileUserSettingsSharingSettingsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsSharingSettingsOutputReference[_g] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        lifecycle_config_arn: cdktf.stringToTerraform(struct.lifecycleConfigArn),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
        sagemaker_image_version_arn: cdktf.stringToTerraform(struct.sagemakerImageVersionArn),
    };
}
exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform;
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktf.stringToHclTerraform(struct.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker_image_arn: {
            value: cdktf.stringToHclTerraform(struct.sagemakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker_image_version_arn: {
            value: cdktf.stringToHclTerraform(struct.sagemakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform = sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform;
class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sagemakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        if (this._sagemakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sagemakerImageArn = undefined;
            this._sagemakerImageVersionArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sagemakerImageArn = value.sagemakerImageArn;
            this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
        }
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    set lifecycleConfigArn(value) {
        this._lifecycleConfigArn = value;
    }
    resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
    get sagemakerImageVersionArn() {
        return this.getStringAttribute('sagemaker_image_version_arn');
    }
    set sagemakerImageVersionArn(value) {
        this._sagemakerImageVersionArn = value;
    }
    resetSagemakerImageVersionArn() {
        this._sagemakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageVersionArnInput() {
        return this._sagemakerImageVersionArn;
    }
}
exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference[_h] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_resource_spec: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform = sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform;
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_resource_spec: {
            value: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct.defaultResourceSpec),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform = sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform;
class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: false, required: true
        this._defaultResourceSpec = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference = SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference[_j] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference", version: "0.0.0" };
function sagemakerUserProfileUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityGroups),
        jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct.kernelGatewayAppSettings),
        sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct.sharingSettings),
        tensor_board_app_settings: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct.tensorBoardAppSettings),
    };
}
exports.sagemakerUserProfileUserSettingsToTerraform = sagemakerUserProfileUserSettingsToTerraform;
function sagemakerUserProfileUserSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        execution_role: {
            value: cdktf.stringToHclTerraform(struct.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityGroups),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        jupyter_server_app_settings: {
            value: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct.jupyterServerAppSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettingsList",
        },
        kernel_gateway_app_settings: {
            value: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct.kernelGatewayAppSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsList",
        },
        sharing_settings: {
            value: sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct.sharingSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsSharingSettingsList",
        },
        tensor_board_app_settings: {
            value: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform(struct.tensorBoardAppSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerUserProfileUserSettingsTensorBoardAppSettingsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerUserProfileUserSettingsToHclTerraform = sagemakerUserProfileUserSettingsToHclTerraform;
class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // jupyter_server_app_settings - computed: false, optional: true, required: false
        this._jupyterServerAppSettings = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
        // kernel_gateway_app_settings - computed: false, optional: true, required: false
        this._kernelGatewayAppSettings = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
        // sharing_settings - computed: false, optional: true, required: false
        this._sharingSettings = new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
        // tensor_board_app_settings - computed: false, optional: true, required: false
        this._tensorBoardAppSettings = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._jupyterServerAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
        }
        if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
        }
        if (this._sharingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
        }
        if (this._tensorBoardAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._executionRole = undefined;
            this._securityGroups = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._sharingSettings.internalValue = undefined;
            this._tensorBoardAppSettings.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._executionRole = value.executionRole;
            this._securityGroups = value.securityGroups;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._sharingSettings.internalValue = value.sharingSettings;
            this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
        }
    }
    get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    set executionRole(value) {
        this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleInput() {
        return this._executionRole;
    }
    get securityGroups() {
        return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
    }
    set securityGroups(value) {
        this._securityGroups = value;
    }
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupsInput() {
        return this._securityGroups;
    }
    get jupyterServerAppSettings() {
        return this._jupyterServerAppSettings;
    }
    putJupyterServerAppSettings(value) {
        this._jupyterServerAppSettings.internalValue = value;
    }
    resetJupyterServerAppSettings() {
        this._jupyterServerAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jupyterServerAppSettingsInput() {
        return this._jupyterServerAppSettings.internalValue;
    }
    get kernelGatewayAppSettings() {
        return this._kernelGatewayAppSettings;
    }
    putKernelGatewayAppSettings(value) {
        this._kernelGatewayAppSettings.internalValue = value;
    }
    resetKernelGatewayAppSettings() {
        this._kernelGatewayAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kernelGatewayAppSettingsInput() {
        return this._kernelGatewayAppSettings.internalValue;
    }
    get sharingSettings() {
        return this._sharingSettings;
    }
    putSharingSettings(value) {
        this._sharingSettings.internalValue = value;
    }
    resetSharingSettings() {
        this._sharingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sharingSettingsInput() {
        return this._sharingSettings.internalValue;
    }
    get tensorBoardAppSettings() {
        return this._tensorBoardAppSettings;
    }
    putTensorBoardAppSettings(value) {
        this._tensorBoardAppSettings.internalValue = value;
    }
    resetTensorBoardAppSettings() {
        this._tensorBoardAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tensorBoardAppSettingsInput() {
        return this._tensorBoardAppSettings.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsOutputReference = SagemakerUserProfileUserSettingsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsOutputReference[_k] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile}
*/
class SagemakerUserProfile extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SagemakerUserProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerUserProfile to import
    * @param importFromId The id of the existing SagemakerUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerUserProfile to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_user_profile", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerUserProfileConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_user_profile',
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
        // user_settings - computed: false, optional: true, required: false
        this._userSettings = new SagemakerUserProfileUserSettingsOutputReference(this, "user_settings");
        this._domainId = config.domainId;
        this._id = config.id;
        this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
        this._singleSignOnUserValue = config.singleSignOnUserValue;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._userProfileName = config.userProfileName;
        this._userSettings.internalValue = config.userSettings;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get domainId() {
        return this.getStringAttribute('domain_id');
    }
    set domainId(value) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainIdInput() {
        return this._domainId;
    }
    // home_efs_file_system_uid - computed: true, optional: false, required: false
    get homeEfsFileSystemUid() {
        return this.getStringAttribute('home_efs_file_system_uid');
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
    get singleSignOnUserIdentifier() {
        return this.getStringAttribute('single_sign_on_user_identifier');
    }
    set singleSignOnUserIdentifier(value) {
        this._singleSignOnUserIdentifier = value;
    }
    resetSingleSignOnUserIdentifier() {
        this._singleSignOnUserIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleSignOnUserIdentifierInput() {
        return this._singleSignOnUserIdentifier;
    }
    get singleSignOnUserValue() {
        return this.getStringAttribute('single_sign_on_user_value');
    }
    set singleSignOnUserValue(value) {
        this._singleSignOnUserValue = value;
    }
    resetSingleSignOnUserValue() {
        this._singleSignOnUserValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleSignOnUserValueInput() {
        return this._singleSignOnUserValue;
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
    get userProfileName() {
        return this.getStringAttribute('user_profile_name');
    }
    set userProfileName(value) {
        this._userProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    get userProfileNameInput() {
        return this._userProfileName;
    }
    get userSettings() {
        return this._userSettings;
    }
    putUserSettings(value) {
        this._userSettings.internalValue = value;
    }
    resetUserSettings() {
        this._userSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userSettingsInput() {
        return this._userSettings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            domain_id: cdktf.stringToTerraform(this._domainId),
            id: cdktf.stringToTerraform(this._id),
            single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
            single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            user_profile_name: cdktf.stringToTerraform(this._userProfileName),
            user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            domain_id: {
                value: cdktf.stringToHclTerraform(this._domainId),
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
            single_sign_on_user_identifier: {
                value: cdktf.stringToHclTerraform(this._singleSignOnUserIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            single_sign_on_user_value: {
                value: cdktf.stringToHclTerraform(this._singleSignOnUserValue),
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
            user_profile_name: {
                value: cdktf.stringToHclTerraform(this._userProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_settings: {
                value: sagemakerUserProfileUserSettingsToHclTerraform(this._userSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerUserProfileUserSettingsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SagemakerUserProfile = SagemakerUserProfile;
_l = JSII_RTTI_SYMBOL_1;
SagemakerUserProfile[_l] = { fqn: "@cdktf/aws-cdk.sagemakerUserProfile.SagemakerUserProfile", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SagemakerUserProfile.tfResourceType = "aws_sagemaker_user_profile";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3NhZ2VtYWtlci11c2VyLXByb2ZpbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE4RC9CLFNBQWdCLHNGQUFzRixDQUFDLE1BQWlMO0lBQ3RSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZFLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7S0FDdkYsQ0FBQTtBQUNILENBQUM7QUFYRCx3TEFXQztBQUdELFNBQWdCLHlGQUF5RixDQUFDLE1BQWlMO0lBQ3pSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFB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QixvQkFBb0I7QUFDRyxtQ0FBYyxHQUFHLDRCQUE0QixBQUEvQixDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGVcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI2RvbWFpbl9pZCBTYWdlbWFrZXJVc2VyUHJvZmlsZSNkb21haW5faWR9XG4gICovXG4gIHJlYWRvbmx5IGRvbWFpbklkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjaWQgU2FnZW1ha2VyVXNlclByb2ZpbGUjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjc2luZ2xlX3NpZ25fb25fdXNlcl9pZGVudGlmaWVyIFNhZ2VtYWtlclVzZXJQcm9maWxlI3NpbmdsZV9zaWduX29uX3VzZXJfaWRlbnRpZmllcn1cbiAgKi9cbiAgcmVhZG9ubHkgc2luZ2xlU2lnbk9uVXNlcklkZW50aWZpZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjc2luZ2xlX3NpZ25fb25fdXNlcl92YWx1ZSBTYWdlbWFrZXJVc2VyUHJvZmlsZSNzaW5nbGVfc2lnbl9vbl91c2VyX3ZhbHVlfVxuICAqL1xuICByZWFkb25seSBzaW5nbGVTaWduT25Vc2VyVmFsdWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjdGFncyBTYWdlbWFrZXJVc2VyUHJvZmlsZSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSN0YWdzX2FsbCBTYWdlbWFrZXJVc2VyUHJvZmlsZSN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjdXNlcl9wcm9maWxlX25hbWUgU2FnZW1ha2VyVXNlclByb2ZpbGUjdXNlcl9wcm9maWxlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJQcm9maWxlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiB1c2VyX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI3VzZXJfc2V0dGluZ3MgU2FnZW1ha2VyVXNlclByb2ZpbGUjdXNlcl9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgdXNlclNldHRpbmdzPzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3M7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjaW5zdGFuY2VfdHlwZSBTYWdlbWFrZXJVc2VyUHJvZmlsZSNpbnN0YW5jZV90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjbGlmZWN5Y2xlX2NvbmZpZ19hcm4gU2FnZW1ha2VyVXNlclByb2ZpbGUjbGlmZWN5Y2xlX2NvbmZpZ19hcm59XG4gICovXG4gIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ0Fybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNzYWdlbWFrZXJfaW1hZ2VfYXJuIFNhZ2VtYWtlclVzZXJQcm9maWxlI3NhZ2VtYWtlcl9pbWFnZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNhZ2VtYWtlckltYWdlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI3NhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybiBTYWdlbWFrZXJVc2VyUHJvZmlsZSNzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJuKSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlQXJuKSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGluc3RhbmNlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyX2ltYWdlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlID0gdGhpcy5faW5zdGFuY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybiA9IHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlLmluc3RhbmNlVHlwZTtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybiA9IHZhbHVlLmxpZmVjeWNsZUNvbmZpZ0FybjtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdmFsdWUuc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm47XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIGxpZmVjeWNsZV9jb25maWdfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpZmVjeWNsZUNvbmZpZ0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGlmZWN5Y2xlX2NvbmZpZ19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpZmVjeWNsZUNvbmZpZ0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGlmZWN5Y2xlQ29uZmlnQXJuKCkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybjtcbiAgfVxuXG4gIC8vIHNhZ2VtYWtlcl9pbWFnZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FnZW1ha2VySW1hZ2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNhZ2VtYWtlckltYWdlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FnZW1ha2VyX2ltYWdlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2FnZW1ha2VySW1hZ2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhZ2VtYWtlckltYWdlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhZ2VtYWtlckltYWdlVmVyc2lvbkFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI2xpZmVjeWNsZV9jb25maWdfYXJucyBTYWdlbWFrZXJVc2VyUHJvZmlsZSNsaWZlY3ljbGVfY29uZmlnX2FybnN9XG4gICovXG4gIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ0FybnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogZGVmYXVsdF9yZXNvdXJjZV9zcGVjIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI2RlZmF1bHRfcmVzb3VyY2Vfc3BlYyBTYWdlbWFrZXJVc2VyUHJvZmlsZSNkZWZhdWx0X3Jlc291cmNlX3NwZWN9XG4gICovXG4gIHJlYWRvbmx5IGRlZmF1bHRSZXNvdXJjZVNwZWM6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybnMpLFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0UmVzb3VyY2VTcGVjKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGxpZmVjeWNsZV9jb25maWdfYXJuczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBkZWZhdWx0X3Jlc291cmNlX3NwZWM6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saWZlY3ljbGVDb25maWdBcm5zID0gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFJlc291cmNlU3BlYyA9IHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm5zO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVmYXVsdFJlc291cmNlU3BlYztcbiAgICB9XG4gIH1cblxuICAvLyBsaWZlY3ljbGVfY29uZmlnX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybnMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVDb25maWdBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucztcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImRlZmF1bHRfcmVzb3VyY2Vfc3BlY1wiKTtcbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0UmVzb3VyY2VTcGVjKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc291cmNlU3BlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjYXBwX2ltYWdlX2NvbmZpZ19uYW1lIFNhZ2VtYWtlclVzZXJQcm9maWxlI2FwcF9pbWFnZV9jb25maWdfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwSW1hZ2VDb25maWdOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjaW1hZ2VfbmFtZSBTYWdlbWFrZXJVc2VyUHJvZmlsZSNpbWFnZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBpbWFnZU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNpbWFnZV92ZXJzaW9uX251bWJlciBTYWdlbWFrZXJVc2VyUHJvZmlsZSNpbWFnZV92ZXJzaW9uX251bWJlcn1cbiAgKi9cbiAgcmVhZG9ubHkgaW1hZ2VWZXJzaW9uTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcHBfaW1hZ2VfY29uZmlnX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwSW1hZ2VDb25maWdOYW1lKSxcbiAgICBpbWFnZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlTmFtZSksXG4gICAgaW1hZ2VfdmVyc2lvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VWZXJzaW9uTnVtYmVyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhcHBfaW1hZ2VfY29uZmlnX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcEltYWdlQ29uZmlnTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW1hZ2VfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpbWFnZV92ZXJzaW9uX251bWJlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VWZXJzaW9uTnVtYmVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXBwSW1hZ2VDb25maWdOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFwcEltYWdlQ29uZmlnTmFtZSA9IHRoaXMuX2FwcEltYWdlQ29uZmlnTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ltYWdlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbWFnZU5hbWUgPSB0aGlzLl9pbWFnZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VWZXJzaW9uTnVtYmVyID0gdGhpcy5faW1hZ2VWZXJzaW9uTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hcHBJbWFnZUNvbmZpZ05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXBwSW1hZ2VDb25maWdOYW1lID0gdmFsdWUuYXBwSW1hZ2VDb25maWdOYW1lO1xuICAgICAgdGhpcy5faW1hZ2VOYW1lID0gdmFsdWUuaW1hZ2VOYW1lO1xuICAgICAgdGhpcy5faW1hZ2VWZXJzaW9uTnVtYmVyID0gdmFsdWUuaW1hZ2VWZXJzaW9uTnVtYmVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFwcF9pbWFnZV9jb25maWdfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hcHBJbWFnZUNvbmZpZ05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcEltYWdlQ29uZmlnTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcF9pbWFnZV9jb25maWdfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwSW1hZ2VDb25maWdOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBJbWFnZUNvbmZpZ05hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwSW1hZ2VDb25maWdOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcEltYWdlQ29uZmlnTmFtZTtcbiAgfVxuXG4gIC8vIGltYWdlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW1hZ2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VOYW1lO1xuICB9XG5cbiAgLy8gaW1hZ2VfdmVyc2lvbl9udW1iZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW1hZ2VWZXJzaW9uTnVtYmVyPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbWFnZVZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbWFnZV92ZXJzaW9uX251bWJlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VWZXJzaW9uTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZVZlcnNpb25OdW1iZXIoKSB7XG4gICAgdGhpcy5faW1hZ2VWZXJzaW9uTnVtYmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZVZlcnNpb25OdW1iZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VWZXJzaW9uTnVtYmVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI2luc3RhbmNlX3R5cGUgU2FnZW1ha2VyVXNlclByb2ZpbGUjaW5zdGFuY2VfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI2xpZmVjeWNsZV9jb25maWdfYXJuIFNhZ2VtYWtlclVzZXJQcm9maWxlI2xpZmVjeWNsZV9jb25maWdfYXJufVxuICAqL1xuICByZWFkb25seSBsaWZlY3ljbGVDb25maWdBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjc2FnZW1ha2VyX2ltYWdlX2FybiBTYWdlbWFrZXJVc2VyUHJvZmlsZSNzYWdlbWFrZXJfaW1hZ2VfYXJufVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gU2FnZW1ha2VyVXNlclByb2ZpbGUjc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJufVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIGxpZmVjeWNsZV9jb25maWdfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybiksXG4gICAgc2FnZW1ha2VyX2ltYWdlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gICAgc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbnN0YW5jZV90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxpZmVjeWNsZV9jb25maWdfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNhZ2VtYWtlcl9pbWFnZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saWZlY3ljbGVDb25maWdBcm4gPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zYWdlbWFrZXJJbWFnZUFybiA9IHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm47XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlQXJuO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdmFsdWUuc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBsaWZlY3ljbGVfY29uZmlnX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9saWZlY3ljbGVDb25maWdBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xpZmVjeWNsZV9jb25maWdfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVDb25maWdBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExpZmVjeWNsZUNvbmZpZ0FybigpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saWZlY3ljbGVDb25maWdBcm47XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NhZ2VtYWtlckltYWdlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NhZ2VtYWtlcl9pbWFnZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhZ2VtYWtlckltYWdlQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgfVxuXG4gIC8vIHNhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4oKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNsaWZlY3ljbGVfY29uZmlnX2FybnMgU2FnZW1ha2VyVXNlclByb2ZpbGUjbGlmZWN5Y2xlX2NvbmZpZ19hcm5zfVxuICAqL1xuICByZWFkb25seSBsaWZlY3ljbGVDb25maWdBcm5zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIGN1c3RvbV9pbWFnZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNjdXN0b21faW1hZ2UgU2FnZW1ha2VyVXNlclByb2ZpbGUjY3VzdG9tX2ltYWdlfVxuICAqL1xuICByZWFkb25seSBjdXN0b21JbWFnZT86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBkZWZhdWx0X3Jlc291cmNlX3NwZWMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjZGVmYXVsdF9yZXNvdXJjZV9zcGVjIFNhZ2VtYWtlclVzZXJQcm9maWxlI2RlZmF1bHRfcmVzb3VyY2Vfc3BlY31cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFJlc291cmNlU3BlYzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxpZmVjeWNsZV9jb25maWdfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJucyksXG4gICAgY3VzdG9tX2ltYWdlOiBjZGt0Zi5saXN0TWFwcGVyKHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5jdXN0b21JbWFnZSksXG4gICAgZGVmYXVsdF9yZXNvdXJjZV9zcGVjOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm5zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGN1c3RvbV9pbWFnZToge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmN1c3RvbUltYWdlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZUxpc3RcIixcbiAgICB9LFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFJlc291cmNlU3BlYyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybnMgPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9tSW1hZ2U/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9tSW1hZ2UgPSB0aGlzLl9jdXN0b21JbWFnZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFJlc291cmNlU3BlYyA9IHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jdXN0b21JbWFnZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdmFsdWUubGlmZWN5Y2xlQ29uZmlnQXJucztcbiAgICAgIHRoaXMuX2N1c3RvbUltYWdlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21JbWFnZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRlZmF1bHRSZXNvdXJjZVNwZWM7XG4gICAgfVxuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpZmVjeWNsZUNvbmZpZ0FybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJucygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbGlmZWN5Y2xlX2NvbmZpZ19hcm5zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlQ29uZmlnQXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGlmZWN5Y2xlQ29uZmlnQXJucygpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnM7XG4gIH1cblxuICAvLyBjdXN0b21faW1hZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tSW1hZ2UgPSBuZXcgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZUxpc3QodGhpcywgXCJjdXN0b21faW1hZ2VcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGN1c3RvbUltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21JbWFnZTtcbiAgfVxuICBwdWJsaWMgcHV0Q3VzdG9tSW1hZ2UodmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY3VzdG9tSW1hZ2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUltYWdlKCkge1xuICAgIHRoaXMuX2N1c3RvbUltYWdlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUltYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUltYWdlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkZWZhdWx0X3Jlc291cmNlX3NwZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFJlc291cmNlU3BlYyA9IG5ldyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJkZWZhdWx0X3Jlc291cmNlX3NwZWNcIik7XG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc291cmNlU3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYztcbiAgfVxuICBwdWJsaWMgcHV0RGVmYXVsdFJlc291cmNlU3BlYyh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRSZXNvdXJjZVNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNub3RlYm9va19vdXRwdXRfb3B0aW9uIFNhZ2VtYWtlclVzZXJQcm9maWxlI25vdGVib29rX291dHB1dF9vcHRpb259XG4gICovXG4gIHJlYWRvbmx5IG5vdGVib29rT3V0cHV0T3B0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI3MzX2ttc19rZXlfaWQgU2FnZW1ha2VyVXNlclByb2ZpbGUjczNfa21zX2tleV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgczNLbXNLZXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNzM19vdXRwdXRfcGF0aCBTYWdlbWFrZXJVc2VyUHJvZmlsZSNzM19vdXRwdXRfcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgczNPdXRwdXRQYXRoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5vdGVib29rX291dHB1dF9vcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm90ZWJvb2tPdXRwdXRPcHRpb24pLFxuICAgIHMzX2ttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNLbXNLZXlJZCksXG4gICAgczNfb3V0cHV0X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXRQYXRoKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG5vdGVib29rX291dHB1dF9vcHRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5vdGVib29rT3V0cHV0T3B0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzM19rbXNfa2V5X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zM0ttc0tleUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzM19vdXRwdXRfcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXRQYXRoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbm90ZWJvb2tPdXRwdXRPcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90ZWJvb2tPdXRwdXRPcHRpb24gPSB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzS21zS2V5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNLbXNLZXlJZCA9IHRoaXMuX3MzS21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM091dHB1dFBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNPdXRwdXRQYXRoID0gdGhpcy5fczNPdXRwdXRQYXRoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdmFsdWUubm90ZWJvb2tPdXRwdXRPcHRpb247XG4gICAgICB0aGlzLl9zM0ttc0tleUlkID0gdmFsdWUuczNLbXNLZXlJZDtcbiAgICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHZhbHVlLnMzT3V0cHV0UGF0aDtcbiAgICB9XG4gIH1cblxuICAvLyBub3RlYm9va19vdXRwdXRfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGVib29rT3V0cHV0T3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBub3RlYm9va091dHB1dE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGVib29rX291dHB1dF9vcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGVib29rT3V0cHV0T3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGVib29rT3V0cHV0T3B0aW9uKCkge1xuICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RlYm9va091dHB1dE9wdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbjtcbiAgfVxuXG4gIC8vIHMzX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNLbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNLbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzS21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0ttc0tleUlkKCkge1xuICAgIHRoaXMuX3MzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNLbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHMzX291dHB1dF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzT3V0cHV0UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfb3V0cHV0X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzT3V0cHV0UGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNPdXRwdXRQYXRoKCkge1xuICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNpbnN0YW5jZV90eXBlIFNhZ2VtYWtlclVzZXJQcm9maWxlI2luc3RhbmNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNsaWZlY3ljbGVfY29uZmlnX2FybiBTYWdlbWFrZXJVc2VyUHJvZmlsZSNsaWZlY3ljbGVfY29uZmlnX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgbGlmZWN5Y2xlQ29uZmlnQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI3NhZ2VtYWtlcl9pbWFnZV9hcm4gU2FnZW1ha2VyVXNlclByb2ZpbGUjc2FnZW1ha2VyX2ltYWdlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuIFNhZ2VtYWtlclVzZXJQcm9maWxlI3NhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saWZlY3ljbGVDb25maWdBcm4gPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zYWdlbWFrZXJJbWFnZUFybiA9IHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdmFsdWUubGlmZWN5Y2xlQ29uZmlnQXJuO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZUFybjtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3Mge1xuICAvKipcbiAgKiBkZWZhdWx0X3Jlc291cmNlX3NwZWMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjZGVmYXVsdF9yZXNvdXJjZV9zcGVjIFNhZ2VtYWtlclVzZXJQcm9maWxlI2RlZmF1bHRfcmVzb3VyY2Vfc3BlY31cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFJlc291cmNlU3BlYzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X3Jlc291cmNlX3NwZWM6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVmYXVsdF9yZXNvdXJjZV9zcGVjOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFJlc291cmNlU3BlYyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRSZXNvdXJjZVNwZWMgPSB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJkZWZhdWx0X3Jlc291cmNlX3NwZWNcIik7XG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc291cmNlU3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYztcbiAgfVxuICBwdWJsaWMgcHV0RGVmYXVsdFJlc291cmNlU3BlYyh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYykge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5ncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjZXhlY3V0aW9uX3JvbGUgU2FnZW1ha2VyVXNlclByb2ZpbGUjZXhlY3V0aW9uX3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNzZWN1cml0eV9ncm91cHMgU2FnZW1ha2VyVXNlclByb2ZpbGUjc2VjdXJpdHlfZ3JvdXBzfVxuICAqL1xuICByZWFkb25seSBzZWN1cml0eUdyb3Vwcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUjanVweXRlcl9zZXJ2ZXJfYXBwX3NldHRpbmdzIFNhZ2VtYWtlclVzZXJQcm9maWxlI2p1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkganVweXRlclNlcnZlckFwcFNldHRpbmdzPzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M7XG4gIC8qKlxuICAqIGtlcm5lbF9nYXRld2F5X2FwcF9zZXR0aW5ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3MgU2FnZW1ha2VyVXNlclByb2ZpbGUja2VybmVsX2dhdGV3YXlfYXBwX3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBrZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncztcbiAgLyoqXG4gICogc2hhcmluZ19zZXR0aW5ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNzaGFyaW5nX3NldHRpbmdzIFNhZ2VtYWtlclVzZXJQcm9maWxlI3NoYXJpbmdfc2V0dGluZ3N9XG4gICovXG4gIHJlYWRvbmx5IHNoYXJpbmdTZXR0aW5ncz86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzO1xuICAvKipcbiAgKiB0ZW5zb3JfYm9hcmRfYXBwX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlI3RlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3MgU2FnZW1ha2VyVXNlclByb2ZpbGUjdGVuc29yX2JvYXJkX2FwcF9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgdGVuc29yQm9hcmRBcHBTZXR0aW5ncz86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGVjdXRpb25fcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leGVjdXRpb25Sb2xlKSxcbiAgICBzZWN1cml0eV9ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBzKSxcbiAgICBqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3M6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MpLFxuICAgIGtlcm5lbF9nYXRld2F5X2FwcF9zZXR0aW5nczogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyksXG4gICAgc2hhcmluZ19zZXR0aW5nczogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnNoYXJpbmdTZXR0aW5ncyksXG4gICAgdGVuc29yX2JvYXJkX2FwcF9zZXR0aW5nczogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS50ZW5zb3JCb2FyZEFwcFNldHRpbmdzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGV4ZWN1dGlvbl9yb2xlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5leGVjdXRpb25Sb2xlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzZWN1cml0eV9ncm91cHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGp1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5nczoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0xpc3RcIixcbiAgICB9LFxuICAgIGtlcm5lbF9nYXRld2F5X2FwcF9zZXR0aW5nczoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0xpc3RcIixcbiAgICB9LFxuICAgIHNoYXJpbmdfc2V0dGluZ3M6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2hhcmluZ1NldHRpbmdzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3NMaXN0XCIsXG4gICAgfSxcbiAgICB0ZW5zb3JfYm9hcmRfYXBwX3NldHRpbmdzOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50ZW5zb3JCb2FyZEFwcFNldHRpbmdzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4ZWN1dGlvblJvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhlY3V0aW9uUm9sZSA9IHRoaXMuX2V4ZWN1dGlvblJvbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWN1cml0eUdyb3VwcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwcyA9IHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyA9IHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MgPSB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zaGFyaW5nU2V0dGluZ3M/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2hhcmluZ1NldHRpbmdzID0gdGhpcy5fc2hhcmluZ1NldHRpbmdzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50ZW5zb3JCb2FyZEFwcFNldHRpbmdzID0gdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhlY3V0aW9uUm9sZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NoYXJpbmdTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9leGVjdXRpb25Sb2xlID0gdmFsdWUuZXhlY3V0aW9uUm9sZTtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWUuc2VjdXJpdHlHcm91cHM7XG4gICAgICB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncztcbiAgICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWUua2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICAgICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zaGFyaW5nU2V0dGluZ3M7XG4gICAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS50ZW5zb3JCb2FyZEFwcFNldHRpbmdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4ZWN1dGlvbl9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4ZWN1dGlvblJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fcm9sZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGVjdXRpb25Sb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvblJvbGU7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5R3JvdXBzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cHMoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICB9XG5cbiAgLy8ganVweXRlcl9zZXJ2ZXJfYXBwX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImp1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5nc1wiKTtcbiAgcHVibGljIGdldCBqdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0SnVweXRlclNlcnZlckFwcFNldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncykge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnVweXRlclNlcnZlckFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwia2VybmVsX2dhdGV3YXlfYXBwX3NldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IGtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3ModmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKSB7XG4gICAgdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNoYXJpbmdfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2hhcmluZ1NldHRpbmdzID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic2hhcmluZ19zZXR0aW5nc1wiKTtcbiAgcHVibGljIGdldCBzaGFyaW5nU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJpbmdTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0U2hhcmluZ1NldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5ncykge1xuICAgIHRoaXMuX3NoYXJpbmdTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2hhcmluZ1NldHRpbmdzKCkge1xuICAgIHRoaXMuX3NoYXJpbmdTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaGFyaW5nU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0ZW5zb3JfYm9hcmRfYXBwX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MgPSBuZXcgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGVuc29yX2JvYXJkX2FwcF9zZXR0aW5nc1wiKTtcbiAgcHVibGljIGdldCB0ZW5zb3JCb2FyZEFwcFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRUZW5zb3JCb2FyZEFwcFNldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3MpIHtcbiAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW5zb3JCb2FyZEFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVuc29yQm9hcmRBcHBTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUgYXdzX3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGV9XG4qL1xuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19zYWdlbWFrZXJfdXNlcl9wcm9maWxlXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFNhZ2VtYWtlclVzZXJQcm9maWxlIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIFNhZ2VtYWtlclVzZXJQcm9maWxlIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTYWdlbWFrZXJVc2VyUHJvZmlsZSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX3VzZXJfcHJvZmlsZSNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgU2FnZW1ha2VyVXNlclByb2ZpbGUgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGVcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfdXNlcl9wcm9maWxlIGF3c19zYWdlbWFrZXJfdXNlcl9wcm9maWxlfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBTYWdlbWFrZXJVc2VyUHJvZmlsZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTYWdlbWFrZXJVc2VyUHJvZmlsZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9kb21haW5JZCA9IGNvbmZpZy5kb21haW5JZDtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllciA9IGNvbmZpZy5zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcjtcbiAgICB0aGlzLl9zaW5nbGVTaWduT25Vc2VyVmFsdWUgPSBjb25maWcuc2luZ2xlU2lnbk9uVXNlclZhbHVlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXNlclByb2ZpbGVOYW1lID0gY29uZmlnLnVzZXJQcm9maWxlTmFtZTtcbiAgICB0aGlzLl91c2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy51c2VyU2V0dGluZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZG9tYWluX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbklkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvbWFpbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbklkO1xuICB9XG5cbiAgLy8gaG9tZV9lZnNfZmlsZV9zeXN0ZW1fdWlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9tZUVmc0ZpbGVTeXN0ZW1VaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob21lX2Vmc19maWxlX3N5c3RlbV91aWQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIHNpbmdsZV9zaWduX29uX3VzZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2luZ2xlU2lnbk9uVXNlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaW5nbGVfc2lnbl9vbl91c2VyX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3NpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHNpbmdsZV9zaWduX29uX3VzZXJfdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2luZ2xlU2lnbk9uVXNlclZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzaW5nbGVTaWduT25Vc2VyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaW5nbGVfc2lnbl9vbl91c2VyX3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaW5nbGVTaWduT25Vc2VyVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpbmdsZVNpZ25PblVzZXJWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpbmdsZVNpZ25PblVzZXJWYWx1ZSgpIHtcbiAgICB0aGlzLl9zaW5nbGVTaWduT25Vc2VyVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpbmdsZVNpZ25PblVzZXJWYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTaWduT25Vc2VyVmFsdWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVzZXJfcHJvZmlsZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJQcm9maWxlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlclByb2ZpbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wcm9maWxlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJQcm9maWxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlclByb2ZpbGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQcm9maWxlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUHJvZmlsZU5hbWU7XG4gIH1cblxuICAvLyB1c2VyX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInVzZXJfc2V0dGluZ3NcIik7XG4gIHB1YmxpYyBnZXQgdXNlclNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dFVzZXJTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzLl91c2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJTZXR0aW5ncygpIHtcbiAgICB0aGlzLl91c2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlclNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RvbWFpbklkKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBzaW5nbGVfc2lnbl9vbl91c2VyX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyKSxcbiAgICAgIHNpbmdsZV9zaWduX29uX3VzZXJfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NpbmdsZVNpZ25PblVzZXJWYWx1ZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVzZXJfcHJvZmlsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VyUHJvZmlsZU5hbWUpLFxuICAgICAgdXNlcl9zZXR0aW5nczogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl91c2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBkb21haW5faWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2RvbWFpbklkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc2luZ2xlX3NpZ25fb25fdXNlcl9pZGVudGlmaWVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNpbmdsZV9zaWduX29uX3VzZXJfdmFsdWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3NpbmdsZVNpZ25PblVzZXJWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHVzZXJfcHJvZmlsZV9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl91c2VyUHJvZmlsZU5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB1c2VyX3NldHRpbmdzOiB7XG4gICAgICAgIHZhbHVlOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHRoaXMuX3VzZXJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=