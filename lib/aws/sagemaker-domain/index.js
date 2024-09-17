"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerDomain = exports.SagemakerDomainRetentionPolicyOutputReference = exports.sagemakerDomainRetentionPolicyToHclTerraform = exports.sagemakerDomainRetentionPolicyToTerraform = exports.SagemakerDomainDefaultUserSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsToHclTerraform = exports.sagemakerDomainDefaultUserSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform = exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform = exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = exports.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform = exports.sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList = exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform = exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform = exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform;
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform = sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform;
class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference[_a] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.lifecycleConfigArns),
        default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform = sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform;
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct) {
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
            value: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct.defaultResourceSpec),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform = sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform;
class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: true, required: false
        this._defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
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
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference = SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform;
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform;
class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference = SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference[_c] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference", version: "0.0.0" };
class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
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
        return new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList = SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList;
_d = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList[_d] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform;
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform;
class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference[_e] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct.customImage),
        default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform;
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform, true)(struct.customImage),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList",
        },
        default_resource_spec: {
            value: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct.defaultResourceSpec),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform;
class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // custom_image - computed: false, optional: true, required: false
        this._customImage = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
        // default_resource_spec - computed: false, optional: true, required: false
        this._defaultResourceSpec = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
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
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference = SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform = sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform;
function sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform = sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform;
class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference = SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference[_g] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform;
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct) {
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
exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform = sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform;
class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference[_h] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_resource_spec: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform = sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform;
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_resource_spec: {
            value: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct.defaultResourceSpec),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform = sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform;
class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: true, required: false
        this._defaultResourceSpec = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
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
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference = SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference[_j] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference", version: "0.0.0" };
function sagemakerDomainDefaultUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityGroups),
        jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct.kernelGatewayAppSettings),
        sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct.sharingSettings),
        tensor_board_app_settings: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct.tensorBoardAppSettings),
    };
}
exports.sagemakerDomainDefaultUserSettingsToTerraform = sagemakerDomainDefaultUserSettingsToTerraform;
function sagemakerDomainDefaultUserSettingsToHclTerraform(struct) {
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
            value: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct.jupyterServerAppSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsList",
        },
        kernel_gateway_app_settings: {
            value: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct.kernelGatewayAppSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsList",
        },
        sharing_settings: {
            value: sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct.sharingSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsSharingSettingsList",
        },
        tensor_board_app_settings: {
            value: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct.tensorBoardAppSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerDomainDefaultUserSettingsToHclTerraform = sagemakerDomainDefaultUserSettingsToHclTerraform;
class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // jupyter_server_app_settings - computed: false, optional: true, required: false
        this._jupyterServerAppSettings = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
        // kernel_gateway_app_settings - computed: false, optional: true, required: false
        this._kernelGatewayAppSettings = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
        // sharing_settings - computed: false, optional: true, required: false
        this._sharingSettings = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
        // tensor_board_app_settings - computed: false, optional: true, required: false
        this._tensorBoardAppSettings = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
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
exports.SagemakerDomainDefaultUserSettingsOutputReference = SagemakerDomainDefaultUserSettingsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsOutputReference[_k] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference", version: "0.0.0" };
function sagemakerDomainRetentionPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        home_efs_file_system: cdktf.stringToTerraform(struct.homeEfsFileSystem),
    };
}
exports.sagemakerDomainRetentionPolicyToTerraform = sagemakerDomainRetentionPolicyToTerraform;
function sagemakerDomainRetentionPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        home_efs_file_system: {
            value: cdktf.stringToHclTerraform(struct.homeEfsFileSystem),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerDomainRetentionPolicyToHclTerraform = sagemakerDomainRetentionPolicyToHclTerraform;
class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._homeEfsFileSystem !== undefined) {
            hasAnyValues = true;
            internalValueResult.homeEfsFileSystem = this._homeEfsFileSystem;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._homeEfsFileSystem = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._homeEfsFileSystem = value.homeEfsFileSystem;
        }
    }
    get homeEfsFileSystem() {
        return this.getStringAttribute('home_efs_file_system');
    }
    set homeEfsFileSystem(value) {
        this._homeEfsFileSystem = value;
    }
    resetHomeEfsFileSystem() {
        this._homeEfsFileSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homeEfsFileSystemInput() {
        return this._homeEfsFileSystem;
    }
}
exports.SagemakerDomainRetentionPolicyOutputReference = SagemakerDomainRetentionPolicyOutputReference;
_l = JSII_RTTI_SYMBOL_1;
SagemakerDomainRetentionPolicyOutputReference[_l] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain aws_sagemaker_domain}
*/
class SagemakerDomain extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SagemakerDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerDomain to import
    * @param importFromId The id of the existing SagemakerDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerDomain to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_domain", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_domain',
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
        // default_user_settings - computed: false, optional: false, required: true
        this._defaultUserSettings = new SagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings");
        // retention_policy - computed: false, optional: true, required: false
        this._retentionPolicy = new SagemakerDomainRetentionPolicyOutputReference(this, "retention_policy");
        this._appNetworkAccessType = config.appNetworkAccessType;
        this._authMode = config.authMode;
        this._domainName = config.domainName;
        this._id = config.id;
        this._kmsKeyId = config.kmsKeyId;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcId = config.vpcId;
        this._defaultUserSettings.internalValue = config.defaultUserSettings;
        this._retentionPolicy.internalValue = config.retentionPolicy;
    }
    get appNetworkAccessType() {
        return this.getStringAttribute('app_network_access_type');
    }
    set appNetworkAccessType(value) {
        this._appNetworkAccessType = value;
    }
    resetAppNetworkAccessType() {
        this._appNetworkAccessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appNetworkAccessTypeInput() {
        return this._appNetworkAccessType;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    set authMode(value) {
        this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get authModeInput() {
        return this._authMode;
    }
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    // home_efs_file_system_id - computed: true, optional: false, required: false
    get homeEfsFileSystemId() {
        return this.getStringAttribute('home_efs_file_system_id');
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
    // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
    get singleSignOnManagedApplicationInstanceId() {
        return this.getStringAttribute('single_sign_on_managed_application_instance_id');
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
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
    }
    get defaultUserSettings() {
        return this._defaultUserSettings;
    }
    putDefaultUserSettings(value) {
        this._defaultUserSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultUserSettingsInput() {
        return this._defaultUserSettings.internalValue;
    }
    get retentionPolicy() {
        return this._retentionPolicy;
    }
    putRetentionPolicy(value) {
        this._retentionPolicy.internalValue = value;
    }
    resetRetentionPolicy() {
        this._retentionPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retentionPolicyInput() {
        return this._retentionPolicy.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
            auth_mode: cdktf.stringToTerraform(this._authMode),
            domain_name: cdktf.stringToTerraform(this._domainName),
            id: cdktf.stringToTerraform(this._id),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings.internalValue),
            retention_policy: sagemakerDomainRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            app_network_access_type: {
                value: cdktf.stringToHclTerraform(this._appNetworkAccessType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_mode: {
                value: cdktf.stringToHclTerraform(this._authMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktf.stringToHclTerraform(this._domainName),
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
            kms_key_id: {
                value: cdktf.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
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
            vpc_id: {
                value: cdktf.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_user_settings: {
                value: sagemakerDomainDefaultUserSettingsToHclTerraform(this._defaultUserSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerDomainDefaultUserSettingsList",
            },
            retention_policy: {
                value: sagemakerDomainRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerDomainRetentionPolicyList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SagemakerDomain = SagemakerDomain;
_m = JSII_RTTI_SYMBOL_1;
SagemakerDomain[_m] = { fqn: "@cdktf/aws-cdk.sagemakerDomain.SagemakerDomain", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SagemakerDomain.tfResourceType = "aws_sagemaker_domain";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3NhZ2VtYWtlci1kb21haW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE0RS9CLFNBQWdCLHdGQUF3RixDQUFDLE1BQXFMO0lBQzVSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZFLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7S0FDdkYsQ0FBQTtBQUNILENBQUM7QUFYRCw0TEFXQztBQUdELFNBQWdCLDJGQUEyRixDQUFDLE1BQXFMO0lBQy9SLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFD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Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsd0NBQXdDO2FBQzNEO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSw0Q0FBNEMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO2dCQUN4RixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxvQ0FBb0M7YUFDdkQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWxWSCwwQ0FtVkM7OztBQWpWQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDhCQUFjLEdBQUcsc0JBQXNCLEFBQXpCLENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpblxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckRvbWFpbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2FwcF9uZXR3b3JrX2FjY2Vzc190eXBlIFNhZ2VtYWtlckRvbWFpbiNhcHBfbmV0d29ya19hY2Nlc3NfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwTmV0d29ya0FjY2Vzc1R5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jYXV0aF9tb2RlIFNhZ2VtYWtlckRvbWFpbiNhdXRoX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhNb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jZG9tYWluX25hbWUgU2FnZW1ha2VyRG9tYWluI2RvbWFpbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jaWQgU2FnZW1ha2VyRG9tYWluI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2ttc19rZXlfaWQgU2FnZW1ha2VyRG9tYWluI2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI3N1Ym5ldF9pZHMgU2FnZW1ha2VyRG9tYWluI3N1Ym5ldF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHN1Ym5ldElkczogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jdGFncyBTYWdlbWFrZXJEb21haW4jdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jdGFnc19hbGwgU2FnZW1ha2VyRG9tYWluI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiN2cGNfaWQgU2FnZW1ha2VyRG9tYWluI3ZwY19pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZztcbiAgLyoqXG4gICogZGVmYXVsdF91c2VyX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2RlZmF1bHRfdXNlcl9zZXR0aW5ncyBTYWdlbWFrZXJEb21haW4jZGVmYXVsdF91c2VyX3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0VXNlclNldHRpbmdzOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzO1xuICAvKipcbiAgKiByZXRlbnRpb25fcG9saWN5IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI3JldGVudGlvbl9wb2xpY3kgU2FnZW1ha2VyRG9tYWluI3JldGVudGlvbl9wb2xpY3l9XG4gICovXG4gIHJlYWRvbmx5IHJldGVudGlvblBvbGljeT86IFNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2luc3RhbmNlX3R5cGUgU2FnZW1ha2VyRG9tYWluI2luc3RhbmNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNsaWZlY3ljbGVfY29uZmlnX2FybiBTYWdlbWFrZXJEb21haW4jbGlmZWN5Y2xlX2NvbmZpZ19hcm59XG4gICovXG4gIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ0Fybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfYXJuIFNhZ2VtYWtlckRvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfYXJufVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gU2FnZW1ha2VyRG9tYWluI3NhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlID0gdGhpcy5faW5zdGFuY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybiA9IHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdmFsdWUubGlmZWN5Y2xlQ29uZmlnQXJuO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZUFybjtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNsaWZlY3ljbGVfY29uZmlnX2FybnMgU2FnZW1ha2VyRG9tYWluI2xpZmVjeWNsZV9jb25maWdfYXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBkZWZhdWx0X3Jlc291cmNlX3NwZWMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jZGVmYXVsdF9yZXNvdXJjZV9zcGVjIFNhZ2VtYWtlckRvbWFpbiNkZWZhdWx0X3Jlc291cmNlX3NwZWN9XG4gICovXG4gIHJlYWRvbmx5IGRlZmF1bHRSZXNvdXJjZVNwZWM/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybnMpLFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm5zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0UmVzb3VyY2VTcGVjKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGlmZWN5Y2xlQ29uZmlnQXJucyA9IHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRSZXNvdXJjZVNwZWMgPSB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm5zO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVmYXVsdFJlc291cmNlU3BlYztcbiAgICB9XG4gIH1cblxuICAvLyBsaWZlY3ljbGVfY29uZmlnX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybnMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVDb25maWdBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucztcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGVmYXVsdF9yZXNvdXJjZV9zcGVjXCIpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM7XG4gIH1cbiAgcHVibGljIHB1dERlZmF1bHRSZXNvdXJjZVNwZWModmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFJlc291cmNlU3BlYygpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRSZXNvdXJjZVNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jYXBwX2ltYWdlX2NvbmZpZ19uYW1lIFNhZ2VtYWtlckRvbWFpbiNhcHBfaW1hZ2VfY29uZmlnX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGFwcEltYWdlQ29uZmlnTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2ltYWdlX25hbWUgU2FnZW1ha2VyRG9tYWluI2ltYWdlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2ltYWdlX3ZlcnNpb25fbnVtYmVyIFNhZ2VtYWtlckRvbWFpbiNpbWFnZV92ZXJzaW9uX251bWJlcn1cbiAgKi9cbiAgcmVhZG9ubHkgaW1hZ2VWZXJzaW9uTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXBwX2ltYWdlX2NvbmZpZ19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcEltYWdlQ29uZmlnTmFtZSksXG4gICAgaW1hZ2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZU5hbWUpLFxuICAgIGltYWdlX3ZlcnNpb25fbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlVmVyc2lvbk51bWJlciksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFwcF9pbWFnZV9jb25maWdfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwSW1hZ2VDb25maWdOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpbWFnZV9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbWFnZU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGltYWdlX3ZlcnNpb25fbnVtYmVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbWFnZVZlcnNpb25OdW1iZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXBwSW1hZ2VDb25maWdOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFwcEltYWdlQ29uZmlnTmFtZSA9IHRoaXMuX2FwcEltYWdlQ29uZmlnTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ltYWdlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbWFnZU5hbWUgPSB0aGlzLl9pbWFnZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VWZXJzaW9uTnVtYmVyID0gdGhpcy5faW1hZ2VWZXJzaW9uTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FwcEltYWdlQ29uZmlnTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ltYWdlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ltYWdlVmVyc2lvbk51bWJlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hcHBJbWFnZUNvbmZpZ05hbWUgPSB2YWx1ZS5hcHBJbWFnZUNvbmZpZ05hbWU7XG4gICAgICB0aGlzLl9pbWFnZU5hbWUgPSB2YWx1ZS5pbWFnZU5hbWU7XG4gICAgICB0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXIgPSB2YWx1ZS5pbWFnZVZlcnNpb25OdW1iZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwX2ltYWdlX2NvbmZpZ19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FwcEltYWdlQ29uZmlnTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwSW1hZ2VDb25maWdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwX2ltYWdlX2NvbmZpZ19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBJbWFnZUNvbmZpZ05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcEltYWdlQ29uZmlnTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBJbWFnZUNvbmZpZ05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwSW1hZ2VDb25maWdOYW1lO1xuICB9XG5cbiAgLy8gaW1hZ2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbWFnZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW1hZ2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZU5hbWU7XG4gIH1cblxuICAvLyBpbWFnZV92ZXJzaW9uX251bWJlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZVZlcnNpb25OdW1iZXI/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGltYWdlVmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ltYWdlX3ZlcnNpb25fbnVtYmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZVZlcnNpb25OdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ltYWdlVmVyc2lvbk51bWJlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltYWdlVmVyc2lvbk51bWJlcigpIHtcbiAgICB0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlVmVyc2lvbk51bWJlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVZlcnNpb25OdW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2luc3RhbmNlX3R5cGUgU2FnZW1ha2VyRG9tYWluI2luc3RhbmNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNsaWZlY3ljbGVfY29uZmlnX2FybiBTYWdlbWFrZXJEb21haW4jbGlmZWN5Y2xlX2NvbmZpZ19hcm59XG4gICovXG4gIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ0Fybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfYXJuIFNhZ2VtYWtlckRvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfYXJufVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gU2FnZW1ha2VyRG9tYWluI3NhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlID0gdGhpcy5faW5zdGFuY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybiA9IHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdmFsdWUubGlmZWN5Y2xlQ29uZmlnQXJuO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZUFybjtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNsaWZlY3ljbGVfY29uZmlnX2FybnMgU2FnZW1ha2VyRG9tYWluI2xpZmVjeWNsZV9jb25maWdfYXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBjdXN0b21faW1hZ2UgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jY3VzdG9tX2ltYWdlIFNhZ2VtYWtlckRvbWFpbiNjdXN0b21faW1hZ2V9XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbUltYWdlPzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogZGVmYXVsdF9yZXNvdXJjZV9zcGVjIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2RlZmF1bHRfcmVzb3VyY2Vfc3BlYyBTYWdlbWFrZXJEb21haW4jZGVmYXVsdF9yZXNvdXJjZV9zcGVjfVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0UmVzb3VyY2VTcGVjPzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm5zKSxcbiAgICBjdXN0b21faW1hZ2U6IGNka3RmLmxpc3RNYXBwZXIoc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuY3VzdG9tSW1hZ2UpLFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm5zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGN1c3RvbV9pbWFnZToge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuY3VzdG9tSW1hZ2UpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VMaXN0XCIsXG4gICAgfSxcbiAgICBkZWZhdWx0X3Jlc291cmNlX3NwZWM6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFJlc291cmNlU3BlYyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybnMgPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9tSW1hZ2U/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9tSW1hZ2UgPSB0aGlzLl9jdXN0b21JbWFnZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFJlc291cmNlU3BlYyA9IHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2N1c3RvbUltYWdlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm5zO1xuICAgICAgdGhpcy5fY3VzdG9tSW1hZ2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmN1c3RvbUltYWdlO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVmYXVsdFJlc291cmNlU3BlYztcbiAgICB9XG4gIH1cblxuICAvLyBsaWZlY3ljbGVfY29uZmlnX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybnMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVDb25maWdBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucztcbiAgfVxuXG4gIC8vIGN1c3RvbV9pbWFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21JbWFnZSA9IG5ldyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VMaXN0KHRoaXMsIFwiY3VzdG9tX2ltYWdlXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBjdXN0b21JbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tSW1hZ2U7XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbUltYWdlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY3VzdG9tSW1hZ2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUltYWdlKCkge1xuICAgIHRoaXMuX2N1c3RvbUltYWdlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUltYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUltYWdlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkZWZhdWx0X3Jlc291cmNlX3NwZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFJlc291cmNlU3BlYyA9IG5ldyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImRlZmF1bHRfcmVzb3VyY2Vfc3BlY1wiKTtcbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0UmVzb3VyY2VTcGVjKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYykge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNub3RlYm9va19vdXRwdXRfb3B0aW9uIFNhZ2VtYWtlckRvbWFpbiNub3RlYm9va19vdXRwdXRfb3B0aW9ufVxuICAqL1xuICByZWFkb25seSBub3RlYm9va091dHB1dE9wdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzM19rbXNfa2V5X2lkIFNhZ2VtYWtlckRvbWFpbiNzM19rbXNfa2V5X2lkfVxuICAqL1xuICByZWFkb25seSBzM0ttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI3MzX291dHB1dF9wYXRoIFNhZ2VtYWtlckRvbWFpbiNzM19vdXRwdXRfcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgczNPdXRwdXRQYXRoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5vdGVib29rX291dHB1dF9vcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm90ZWJvb2tPdXRwdXRPcHRpb24pLFxuICAgIHMzX2ttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNLbXNLZXlJZCksXG4gICAgczNfb3V0cHV0X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXRQYXRoKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG5vdGVib29rX291dHB1dF9vcHRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5vdGVib29rT3V0cHV0T3B0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzM19rbXNfa2V5X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zM0ttc0tleUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzM19vdXRwdXRfcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXRQYXRoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vdGVib29rT3V0cHV0T3B0aW9uID0gdGhpcy5fbm90ZWJvb2tPdXRwdXRPcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0ttc0tleUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzS21zS2V5SWQgPSB0aGlzLl9zM0ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNPdXRwdXRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzT3V0cHV0UGF0aCA9IHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdmFsdWUubm90ZWJvb2tPdXRwdXRPcHRpb247XG4gICAgICB0aGlzLl9zM0ttc0tleUlkID0gdmFsdWUuczNLbXNLZXlJZDtcbiAgICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHZhbHVlLnMzT3V0cHV0UGF0aDtcbiAgICB9XG4gIH1cblxuICAvLyBub3RlYm9va19vdXRwdXRfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGVib29rT3V0cHV0T3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBub3RlYm9va091dHB1dE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGVib29rX291dHB1dF9vcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGVib29rT3V0cHV0T3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGVib29rT3V0cHV0T3B0aW9uKCkge1xuICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RlYm9va091dHB1dE9wdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbjtcbiAgfVxuXG4gIC8vIHMzX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNLbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNLbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzS21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0ttc0tleUlkKCkge1xuICAgIHRoaXMuX3MzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNLbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHMzX291dHB1dF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzT3V0cHV0UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfb3V0cHV0X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzT3V0cHV0UGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNPdXRwdXRQYXRoKCkge1xuICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2luc3RhbmNlX3R5cGUgU2FnZW1ha2VyRG9tYWluI2luc3RhbmNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNsaWZlY3ljbGVfY29uZmlnX2FybiBTYWdlbWFrZXJEb21haW4jbGlmZWN5Y2xlX2NvbmZpZ19hcm59XG4gICovXG4gIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ0Fybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfYXJuIFNhZ2VtYWtlckRvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfYXJufVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gU2FnZW1ha2VyRG9tYWluI3NhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VBcm4pLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV92ZXJzaW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsaWZlY3ljbGVfY29uZmlnX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyX2ltYWdlX3ZlcnNpb25fYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVR5cGUgPSB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGlmZWN5Y2xlQ29uZmlnQXJuID0gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FnZW1ha2VySW1hZ2VBcm4gPSB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4gPSB0aGlzLl9zYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdmFsdWUubGlmZWN5Y2xlQ29uZmlnQXJuO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZUFybjtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm4oKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJuO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZVZlcnNpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfdmVyc2lvbl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlVmVyc2lvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VWZXJzaW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhZ2VtYWtlckltYWdlVmVyc2lvbkFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyB7XG4gIC8qKlxuICAqIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNkZWZhdWx0X3Jlc291cmNlX3NwZWMgU2FnZW1ha2VyRG9tYWluI2RlZmF1bHRfcmVzb3VyY2Vfc3BlY31cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFJlc291cmNlU3BlYz86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X3Jlc291cmNlX3NwZWM6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFJlc291cmNlU3BlYyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZWZhdWx0X3Jlc291cmNlX3NwZWM6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZhdWx0UmVzb3VyY2VTcGVjID0gdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImRlZmF1bHRfcmVzb3VyY2Vfc3BlY1wiKTtcbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0UmVzb3VyY2VTcGVjKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc291cmNlU3BlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5ncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jZXhlY3V0aW9uX3JvbGUgU2FnZW1ha2VyRG9tYWluI2V4ZWN1dGlvbl9yb2xlfVxuICAqL1xuICByZWFkb25seSBleGVjdXRpb25Sb2xlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jc2VjdXJpdHlfZ3JvdXBzIFNhZ2VtYWtlckRvbWFpbiNzZWN1cml0eV9ncm91cHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIGp1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3MgU2FnZW1ha2VyRG9tYWluI2p1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkganVweXRlclNlcnZlckFwcFNldHRpbmdzPzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncztcbiAgLyoqXG4gICoga2VybmVsX2dhdGV3YXlfYXBwX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI2tlcm5lbF9nYXRld2F5X2FwcF9zZXR0aW5ncyBTYWdlbWFrZXJEb21haW4ja2VybmVsX2dhdGV3YXlfYXBwX3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBrZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICAvKipcbiAgKiBzaGFyaW5nX3NldHRpbmdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZG9tYWluI3NoYXJpbmdfc2V0dGluZ3MgU2FnZW1ha2VyRG9tYWluI3NoYXJpbmdfc2V0dGluZ3N9XG4gICovXG4gIHJlYWRvbmx5IHNoYXJpbmdTZXR0aW5ncz86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3M7XG4gIC8qKlxuICAqIHRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jdGVuc29yX2JvYXJkX2FwcF9zZXR0aW5ncyBTYWdlbWFrZXJEb21haW4jdGVuc29yX2JvYXJkX2FwcF9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgdGVuc29yQm9hcmRBcHBTZXR0aW5ncz86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4ZWN1dGlvbl9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4ZWN1dGlvblJvbGUpLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc2VjdXJpdHlHcm91cHMpLFxuICAgIGp1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5nczogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEuanVweXRlclNlcnZlckFwcFNldHRpbmdzKSxcbiAgICBrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3M6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyksXG4gICAgc2hhcmluZ19zZXR0aW5nczogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEuc2hhcmluZ1NldHRpbmdzKSxcbiAgICB0ZW5zb3JfYm9hcmRfYXBwX3NldHRpbmdzOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEudGVuc29yQm9hcmRBcHBTZXR0aW5ncyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBleGVjdXRpb25fcm9sZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZXhlY3V0aW9uUm9sZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VjdXJpdHlfZ3JvdXBzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc2VjdXJpdHlHcm91cHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3M6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzTGlzdFwiLFxuICAgIH0sXG4gICAga2VybmVsX2dhdGV3YXlfYXBwX3NldHRpbmdzOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0xpc3RcIixcbiAgICB9LFxuICAgIHNoYXJpbmdfc2V0dGluZ3M6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zaGFyaW5nU2V0dGluZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzTGlzdFwiLFxuICAgIH0sXG4gICAgdGVuc29yX2JvYXJkX2FwcF9zZXR0aW5nczoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50ZW5zb3JCb2FyZEFwcFNldHRpbmdzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4ZWN1dGlvblJvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhlY3V0aW9uUm9sZSA9IHRoaXMuX2V4ZWN1dGlvblJvbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWN1cml0eUdyb3VwcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwcyA9IHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyA9IHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MgPSB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zaGFyaW5nU2V0dGluZ3M/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2hhcmluZ1NldHRpbmdzID0gdGhpcy5fc2hhcmluZ1NldHRpbmdzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50ZW5zb3JCb2FyZEFwcFNldHRpbmdzID0gdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leGVjdXRpb25Sb2xlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2V4ZWN1dGlvblJvbGUgPSB2YWx1ZS5leGVjdXRpb25Sb2xlO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB2YWx1ZS5zZWN1cml0eUdyb3VwcztcbiAgICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuanVweXRlclNlcnZlckFwcFNldHRpbmdzO1xuICAgICAgdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M7XG4gICAgICB0aGlzLl9zaGFyaW5nU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNoYXJpbmdTZXR0aW5ncztcbiAgICAgIHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRlbnNvckJvYXJkQXBwU2V0dGluZ3M7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhlY3V0aW9uX3JvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uUm9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBleGVjdXRpb25Sb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leGVjdXRpb25Sb2xlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uUm9sZTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eUdyb3Vwcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUdyb3VwcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cHM7XG4gIH1cblxuICAvLyBqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfanVweXRlclNlcnZlckFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3NcIik7XG4gIHB1YmxpYyBnZXQganVweXRlclNlcnZlckFwcFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dEp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncykge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnVweXRlclNlcnZlckFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3NcIik7XG4gIHB1YmxpYyBnZXQga2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dEtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncykge1xuICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzaGFyaW5nX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NoYXJpbmdTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic2hhcmluZ19zZXR0aW5nc1wiKTtcbiAgcHVibGljIGdldCBzaGFyaW5nU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJpbmdTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0U2hhcmluZ1NldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzKSB7XG4gICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTaGFyaW5nU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNoYXJpbmdTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaGFyaW5nU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVuc29yQm9hcmRBcHBTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3NcIik7XG4gIHB1YmxpYyBnZXQgdGVuc29yQm9hcmRBcHBTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0VGVuc29yQm9hcmRBcHBTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3MpIHtcbiAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW5zb3JCb2FyZEFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVuc29yQm9hcmRBcHBTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2RvbWFpbiNob21lX2Vmc19maWxlX3N5c3RlbSBTYWdlbWFrZXJEb21haW4jaG9tZV9lZnNfZmlsZV9zeXN0ZW19XG4gICovXG4gIHJlYWRvbmx5IGhvbWVFZnNGaWxlU3lzdGVtPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhvbWVfZWZzX2ZpbGVfc3lzdGVtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvbWVFZnNGaWxlU3lzdGVtKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGhvbWVfZWZzX2ZpbGVfc3lzdGVtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob21lRWZzRmlsZVN5c3RlbSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faG9tZUVmc0ZpbGVTeXN0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9tZUVmc0ZpbGVTeXN0ZW0gPSB0aGlzLl9ob21lRWZzRmlsZVN5c3RlbTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hvbWVFZnNGaWxlU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ob21lRWZzRmlsZVN5c3RlbSA9IHZhbHVlLmhvbWVFZnNGaWxlU3lzdGVtO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhvbWVfZWZzX2ZpbGVfc3lzdGVtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvbWVFZnNGaWxlU3lzdGVtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob21lRWZzRmlsZVN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvbWVfZWZzX2ZpbGVfc3lzdGVtJyk7XG4gIH1cbiAgcHVibGljIHNldCBob21lRWZzRmlsZVN5c3RlbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9tZUVmc0ZpbGVTeXN0ZW0gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb21lRWZzRmlsZVN5c3RlbSgpIHtcbiAgICB0aGlzLl9ob21lRWZzRmlsZVN5c3RlbSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9tZUVmc0ZpbGVTeXN0ZW1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9tZUVmc0ZpbGVTeXN0ZW07XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4gYXdzX3NhZ2VtYWtlcl9kb21haW59XG4qL1xuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfc2FnZW1ha2VyX2RvbWFpblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBTYWdlbWFrZXJEb21haW4gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgU2FnZW1ha2VyRG9tYWluIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTYWdlbWFrZXJEb21haW4gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFNhZ2VtYWtlckRvbWFpbiB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3Nfc2FnZW1ha2VyX2RvbWFpblwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9kb21haW4gYXdzX3NhZ2VtYWtlcl9kb21haW59IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFNhZ2VtYWtlckRvbWFpbkNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTYWdlbWFrZXJEb21haW5Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zYWdlbWFrZXJfZG9tYWluJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXBwTmV0d29ya0FjY2Vzc1R5cGUgPSBjb25maWcuYXBwTmV0d29ya0FjY2Vzc1R5cGU7XG4gICAgdGhpcy5fYXV0aE1vZGUgPSBjb25maWcuYXV0aE1vZGU7XG4gICAgdGhpcy5fZG9tYWluTmFtZSA9IGNvbmZpZy5kb21haW5OYW1lO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2ttc0tleUlkID0gY29uZmlnLmttc0tleUlkO1xuICAgIHRoaXMuX3N1Ym5ldElkcyA9IGNvbmZpZy5zdWJuZXRJZHM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl92cGNJZCA9IGNvbmZpZy52cGNJZDtcbiAgICB0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWUgPSBjb25maWcuZGVmYXVsdFVzZXJTZXR0aW5ncztcbiAgICB0aGlzLl9yZXRlbnRpb25Qb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yZXRlbnRpb25Qb2xpY3k7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwcF9uZXR3b3JrX2FjY2Vzc190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcE5ldHdvcmtBY2Nlc3NUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcHBOZXR3b3JrQWNjZXNzVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcF9uZXR3b3JrX2FjY2Vzc190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBOZXR3b3JrQWNjZXNzVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwTmV0d29ya0FjY2Vzc1R5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBOZXR3b3JrQWNjZXNzVHlwZSgpIHtcbiAgICB0aGlzLl9hcHBOZXR3b3JrQWNjZXNzVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwTmV0d29ya0FjY2Vzc1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwTmV0d29ya0FjY2Vzc1R5cGU7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dGhfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRoTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRoX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRoTW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoTW9kZTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbk5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWluTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbk5hbWU7XG4gIH1cblxuICAvLyBob21lX2Vmc19maWxlX3N5c3RlbV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvbWVFZnNGaWxlU3lzdGVtSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob21lX2Vmc19maWxlX3N5c3RlbV9pZCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBzaW5nbGVfc2lnbl9vbl9tYW5hZ2VkX2FwcGxpY2F0aW9uX2luc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2luZ2xlU2lnbk9uTWFuYWdlZEFwcGxpY2F0aW9uSW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpbmdsZV9zaWduX29uX21hbmFnZWRfYXBwbGljYXRpb25faW5zdGFuY2VfaWQnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkcztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3NfYWxsJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICAvLyB2cGNfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdnBjSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdnBjSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjSWQ7XG4gIH1cblxuICAvLyBkZWZhdWx0X3VzZXJfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFVzZXJTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGVmYXVsdF91c2VyX3NldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRVc2VyU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRVc2VyU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dERlZmF1bHRVc2VyU2V0dGluZ3ModmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFVzZXJTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZXRlbnRpb25fcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldGVudGlvblBvbGljeSA9IG5ldyBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZXRlbnRpb25fcG9saWN5XCIpO1xuICBwdWJsaWMgZ2V0IHJldGVudGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0ZW50aW9uUG9saWN5O1xuICB9XG4gIHB1YmxpYyBwdXRSZXRlbnRpb25Qb2xpY3kodmFsdWU6IFNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeSkge1xuICAgIHRoaXMuX3JldGVudGlvblBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0ZW50aW9uUG9saWN5KCkge1xuICAgIHRoaXMuX3JldGVudGlvblBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRlbnRpb25Qb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0ZW50aW9uUG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcF9uZXR3b3JrX2FjY2Vzc190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcHBOZXR3b3JrQWNjZXNzVHlwZSksXG4gICAgICBhdXRoX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhNb2RlKSxcbiAgICAgIGRvbWFpbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kb21haW5OYW1lKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlJZCksXG4gICAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc3VibmV0SWRzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdnBjX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92cGNJZCksXG4gICAgICBkZWZhdWx0X3VzZXJfc2V0dGluZ3M6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgcmV0ZW50aW9uX3BvbGljeTogc2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fcmV0ZW50aW9uUG9saWN5LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYXBwX25ldHdvcmtfYWNjZXNzX3R5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FwcE5ldHdvcmtBY2Nlc3NUeXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgYXV0aF9tb2RlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hdXRoTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGRvbWFpbl9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kb21haW5OYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAga21zX2tleV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fa21zS2V5SWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzdWJuZXRfaWRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc3VibmV0SWRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHZwY19pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdnBjSWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0X3VzZXJfc2V0dGluZ3M6IHtcbiAgICAgICAgdmFsdWU6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUb0hjbFRlcnJhZm9ybSh0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHJldGVudGlvbl9wb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IHNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeVRvSGNsVGVycmFmb3JtKHRoaXMuX3JldGVudGlvblBvbGljeS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5TGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19