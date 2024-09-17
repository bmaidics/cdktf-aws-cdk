"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchComputeEnvironment = exports.BatchComputeEnvironmentComputeResourcesOutputReference = exports.batchComputeEnvironmentComputeResourcesToHclTerraform = exports.batchComputeEnvironmentComputeResourcesToTerraform = exports.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference = exports.batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform = exports.batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform = exports.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference = exports.batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform = exports.batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        image_id_override: cdktf.stringToTerraform(struct.imageIdOverride),
        image_type: cdktf.stringToTerraform(struct.imageType),
    };
}
exports.batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform = batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform;
function batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        image_id_override: {
            value: cdktf.stringToHclTerraform(struct.imageIdOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_type: {
            value: cdktf.stringToHclTerraform(struct.imageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform = batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform;
class BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._imageIdOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageIdOverride = this._imageIdOverride;
        }
        if (this._imageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageType = this._imageType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._imageIdOverride = undefined;
            this._imageType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._imageIdOverride = value.imageIdOverride;
            this._imageType = value.imageType;
        }
    }
    get imageIdOverride() {
        return this.getStringAttribute('image_id_override');
    }
    set imageIdOverride(value) {
        this._imageIdOverride = value;
    }
    resetImageIdOverride() {
        this._imageIdOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageIdOverrideInput() {
        return this._imageIdOverride;
    }
    get imageType() {
        return this.getStringAttribute('image_type');
    }
    set imageType(value) {
        this._imageType = value;
    }
    resetImageType() {
        this._imageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageTypeInput() {
        return this._imageType;
    }
}
exports.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference = BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference", version: "0.0.0" };
function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform = batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform;
function batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_id: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform = batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform;
class BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._version = value.version;
        }
    }
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    set launchTemplateId(value) {
        this._launchTemplateId = value;
    }
    resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateIdInput() {
        return this._launchTemplateId;
    }
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    set launchTemplateName(value) {
        this._launchTemplateName = value;
    }
    resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateNameInput() {
        return this._launchTemplateName;
    }
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
exports.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference = BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference;
_b = JSII_RTTI_SYMBOL_1;
BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference[_b] = { fqn: "@cdktf/aws-cdk.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference", version: "0.0.0" };
function batchComputeEnvironmentComputeResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        bid_percentage: cdktf.numberToTerraform(struct.bidPercentage),
        desired_vcpus: cdktf.numberToTerraform(struct.desiredVcpus),
        ec2_key_pair: cdktf.stringToTerraform(struct.ec2KeyPair),
        image_id: cdktf.stringToTerraform(struct.imageId),
        instance_role: cdktf.stringToTerraform(struct.instanceRole),
        instance_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.instanceType),
        max_vcpus: cdktf.numberToTerraform(struct.maxVcpus),
        min_vcpus: cdktf.numberToTerraform(struct.minVcpus),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityGroupIds),
        spot_iam_fleet_role: cdktf.stringToTerraform(struct.spotIamFleetRole),
        subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subnets),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
        type: cdktf.stringToTerraform(struct.type),
        ec2_configuration: batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct.ec2Configuration),
        launch_template: batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct.launchTemplate),
    };
}
exports.batchComputeEnvironmentComputeResourcesToTerraform = batchComputeEnvironmentComputeResourcesToTerraform;
function batchComputeEnvironmentComputeResourcesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allocation_strategy: {
            value: cdktf.stringToHclTerraform(struct.allocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bid_percentage: {
            value: cdktf.numberToHclTerraform(struct.bidPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        desired_vcpus: {
            value: cdktf.numberToHclTerraform(struct.desiredVcpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ec2_key_pair: {
            value: cdktf.stringToHclTerraform(struct.ec2KeyPair),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_id: {
            value: cdktf.stringToHclTerraform(struct.imageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_role: {
            value: cdktf.stringToHclTerraform(struct.instanceRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_type: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.instanceType),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        max_vcpus: {
            value: cdktf.numberToHclTerraform(struct.maxVcpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_vcpus: {
            value: cdktf.numberToHclTerraform(struct.minVcpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        security_group_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        spot_iam_fleet_role: {
            value: cdktf.stringToHclTerraform(struct.spotIamFleetRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subnets),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        tags: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ec2_configuration: {
            value: batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct.ec2Configuration),
            isBlock: true,
            type: "list",
            storageClassType: "BatchComputeEnvironmentComputeResourcesEc2ConfigurationList",
        },
        launch_template: {
            value: batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct.launchTemplate),
            isBlock: true,
            type: "list",
            storageClassType: "BatchComputeEnvironmentComputeResourcesLaunchTemplateList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.batchComputeEnvironmentComputeResourcesToHclTerraform = batchComputeEnvironmentComputeResourcesToHclTerraform;
class BatchComputeEnvironmentComputeResourcesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // ec2_configuration - computed: false, optional: true, required: false
        this._ec2Configuration = new BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(this, "ec2_configuration");
        // launch_template - computed: false, optional: true, required: false
        this._launchTemplate = new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(this, "launch_template");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        if (this._bidPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.bidPercentage = this._bidPercentage;
        }
        if (this._desiredVcpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.desiredVcpus = this._desiredVcpus;
        }
        if (this._ec2KeyPair !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2KeyPair = this._ec2KeyPair;
        }
        if (this._imageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageId = this._imageId;
        }
        if (this._instanceRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRole = this._instanceRole;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._maxVcpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxVcpus = this._maxVcpus;
        }
        if (this._minVcpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.minVcpus = this._minVcpus;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._spotIamFleetRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotIamFleetRole = this._spotIamFleetRole;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._ec2Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
        }
        if (this._launchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allocationStrategy = undefined;
            this._bidPercentage = undefined;
            this._desiredVcpus = undefined;
            this._ec2KeyPair = undefined;
            this._imageId = undefined;
            this._instanceRole = undefined;
            this._instanceType = undefined;
            this._maxVcpus = undefined;
            this._minVcpus = undefined;
            this._securityGroupIds = undefined;
            this._spotIamFleetRole = undefined;
            this._subnets = undefined;
            this._tags = undefined;
            this._type = undefined;
            this._ec2Configuration.internalValue = undefined;
            this._launchTemplate.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allocationStrategy = value.allocationStrategy;
            this._bidPercentage = value.bidPercentage;
            this._desiredVcpus = value.desiredVcpus;
            this._ec2KeyPair = value.ec2KeyPair;
            this._imageId = value.imageId;
            this._instanceRole = value.instanceRole;
            this._instanceType = value.instanceType;
            this._maxVcpus = value.maxVcpus;
            this._minVcpus = value.minVcpus;
            this._securityGroupIds = value.securityGroupIds;
            this._spotIamFleetRole = value.spotIamFleetRole;
            this._subnets = value.subnets;
            this._tags = value.tags;
            this._type = value.type;
            this._ec2Configuration.internalValue = value.ec2Configuration;
            this._launchTemplate.internalValue = value.launchTemplate;
        }
    }
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    set allocationStrategy(value) {
        this._allocationStrategy = value;
    }
    resetAllocationStrategy() {
        this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationStrategyInput() {
        return this._allocationStrategy;
    }
    get bidPercentage() {
        return this.getNumberAttribute('bid_percentage');
    }
    set bidPercentage(value) {
        this._bidPercentage = value;
    }
    resetBidPercentage() {
        this._bidPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bidPercentageInput() {
        return this._bidPercentage;
    }
    get desiredVcpus() {
        return this.getNumberAttribute('desired_vcpus');
    }
    set desiredVcpus(value) {
        this._desiredVcpus = value;
    }
    resetDesiredVcpus() {
        this._desiredVcpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredVcpusInput() {
        return this._desiredVcpus;
    }
    get ec2KeyPair() {
        return this.getStringAttribute('ec2_key_pair');
    }
    set ec2KeyPair(value) {
        this._ec2KeyPair = value;
    }
    resetEc2KeyPair() {
        this._ec2KeyPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2KeyPairInput() {
        return this._ec2KeyPair;
    }
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    set imageId(value) {
        this._imageId = value;
    }
    resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageIdInput() {
        return this._imageId;
    }
    get instanceRole() {
        return this.getStringAttribute('instance_role');
    }
    set instanceRole(value) {
        this._instanceRole = value;
    }
    resetInstanceRole() {
        this._instanceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceRoleInput() {
        return this._instanceRole;
    }
    get instanceType() {
        return cdktf.Fn.tolist(this.getListAttribute('instance_type'));
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
    get maxVcpus() {
        return this.getNumberAttribute('max_vcpus');
    }
    set maxVcpus(value) {
        this._maxVcpus = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxVcpusInput() {
        return this._maxVcpus;
    }
    get minVcpus() {
        return this.getNumberAttribute('min_vcpus');
    }
    set minVcpus(value) {
        this._minVcpus = value;
    }
    resetMinVcpus() {
        this._minVcpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minVcpusInput() {
        return this._minVcpus;
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
    get spotIamFleetRole() {
        return this.getStringAttribute('spot_iam_fleet_role');
    }
    set spotIamFleetRole(value) {
        this._spotIamFleetRole = value;
    }
    resetSpotIamFleetRole() {
        this._spotIamFleetRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotIamFleetRoleInput() {
        return this._spotIamFleetRole;
    }
    get subnets() {
        return cdktf.Fn.tolist(this.getListAttribute('subnets'));
    }
    set subnets(value) {
        this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetsInput() {
        return this._subnets;
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
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get ec2Configuration() {
        return this._ec2Configuration;
    }
    putEc2Configuration(value) {
        this._ec2Configuration.internalValue = value;
    }
    resetEc2Configuration() {
        this._ec2Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2ConfigurationInput() {
        return this._ec2Configuration.internalValue;
    }
    get launchTemplate() {
        return this._launchTemplate;
    }
    putLaunchTemplate(value) {
        this._launchTemplate.internalValue = value;
    }
    resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }
}
exports.BatchComputeEnvironmentComputeResourcesOutputReference = BatchComputeEnvironmentComputeResourcesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
BatchComputeEnvironmentComputeResourcesOutputReference[_c] = { fqn: "@cdktf/aws-cdk.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/batch_compute_environment aws_batch_compute_environment}
*/
class BatchComputeEnvironment extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BatchComputeEnvironment to import
    * @param importFromId The id of the existing BatchComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BatchComputeEnvironment to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_batch_compute_environment", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/batch_compute_environment aws_batch_compute_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchComputeEnvironmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_batch_compute_environment',
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
        // compute_resources - computed: false, optional: true, required: false
        this._computeResources = new BatchComputeEnvironmentComputeResourcesOutputReference(this, "compute_resources");
        this._computeEnvironmentName = config.computeEnvironmentName;
        this._computeEnvironmentNamePrefix = config.computeEnvironmentNamePrefix;
        this._id = config.id;
        this._serviceRole = config.serviceRole;
        this._state = config.state;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._type = config.type;
        this._computeResources.internalValue = config.computeResources;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get computeEnvironmentName() {
        return this.getStringAttribute('compute_environment_name');
    }
    set computeEnvironmentName(value) {
        this._computeEnvironmentName = value;
    }
    resetComputeEnvironmentName() {
        this._computeEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get computeEnvironmentNameInput() {
        return this._computeEnvironmentName;
    }
    get computeEnvironmentNamePrefix() {
        return this.getStringAttribute('compute_environment_name_prefix');
    }
    set computeEnvironmentNamePrefix(value) {
        this._computeEnvironmentNamePrefix = value;
    }
    resetComputeEnvironmentNamePrefix() {
        this._computeEnvironmentNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get computeEnvironmentNamePrefixInput() {
        return this._computeEnvironmentNamePrefix;
    }
    // ecs_cluster_arn - computed: true, optional: false, required: false
    get ecsClusterArn() {
        return this.getStringAttribute('ecs_cluster_arn');
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
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    set serviceRole(value) {
        this._serviceRole = value;
    }
    resetServiceRole() {
        this._serviceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRoleInput() {
        return this._serviceRole;
    }
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // status_reason - computed: true, optional: false, required: false
    get statusReason() {
        return this.getStringAttribute('status_reason');
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
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get computeResources() {
        return this._computeResources;
    }
    putComputeResources(value) {
        this._computeResources.internalValue = value;
    }
    resetComputeResources() {
        this._computeResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get computeResourcesInput() {
        return this._computeResources.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
            compute_environment_name_prefix: cdktf.stringToTerraform(this._computeEnvironmentNamePrefix),
            id: cdktf.stringToTerraform(this._id),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            compute_resources: batchComputeEnvironmentComputeResourcesToTerraform(this._computeResources.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            compute_environment_name: {
                value: cdktf.stringToHclTerraform(this._computeEnvironmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_environment_name_prefix: {
                value: cdktf.stringToHclTerraform(this._computeEnvironmentNamePrefix),
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
            service_role: {
                value: cdktf.stringToHclTerraform(this._serviceRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktf.stringToHclTerraform(this._state),
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
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_resources: {
                value: batchComputeEnvironmentComputeResourcesToHclTerraform(this._computeResources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BatchComputeEnvironmentComputeResourcesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.BatchComputeEnvironment = BatchComputeEnvironment;
_d = JSII_RTTI_SYMBOL_1;
BatchComputeEnvironment[_d] = { fqn: "@cdktf/aws-cdk.batchComputeEnvironment.BatchComputeEnvironment", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
BatchComputeEnvironment.tfResourceType = "aws_batch_compute_environment";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2JhdGNoLWNvbXB1dGUtZW52aXJvbm1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUEwRC9CLFNBQWdCLGtFQUFrRSxDQUFDLE1BQXlJO0lBQzFOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNuRSxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFURCxnSkFTQztBQUdELFNBQWdCLHFFQUFxRSxDQUFDLE1BQXlJO0lBQzdOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFF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QUNkLElBQUksRUFBRSxLQUFLO2dCQUNYLGdCQUFnQixFQUFFLFdBQVc7YUFDOUI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsaUJBQWlCLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxxREFBcUQsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO2dCQUNsRyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSw2Q0FBNkM7YUFDaEU7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTlTSCwwREErU0M7OztBQTdTQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHNDQUFjLEdBQUcsK0JBQStCLEFBQWxDLENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjY29tcHV0ZV9lbnZpcm9ubWVudF9uYW1lIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I2NvbXB1dGVfZW52aXJvbm1lbnRfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgY29tcHV0ZUVudmlyb25tZW50TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCNjb21wdXRlX2Vudmlyb25tZW50X25hbWVfcHJlZml4IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I2NvbXB1dGVfZW52aXJvbm1lbnRfbmFtZV9wcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IGNvbXB1dGVFbnZpcm9ubWVudE5hbWVQcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjaWQgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjc2VydmljZV9yb2xlIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I3NlcnZpY2Vfcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZVJvbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjc3RhdGUgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjc3RhdGV9XG4gICovXG4gIHJlYWRvbmx5IHN0YXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I3RhZ3MgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjdGFnc19hbGwgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I3R5cGUgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBjb21wdXRlX3Jlc291cmNlcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCNjb21wdXRlX3Jlc291cmNlcyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNjb21wdXRlX3Jlc291cmNlc31cbiAgKi9cbiAgcmVhZG9ubHkgY29tcHV0ZVJlc291cmNlcz86IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlcztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzRWMyQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjaW1hZ2VfaWRfb3ZlcnJpZGUgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjaW1hZ2VfaWRfb3ZlcnJpZGV9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlSWRPdmVycmlkZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCNpbWFnZV90eXBlIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I2ltYWdlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0VjMkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNFYzJDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzRWMyQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbWFnZV9pZF9vdmVycmlkZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZUlkT3ZlcnJpZGUpLFxuICAgIGltYWdlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VUeXBlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNFYzJDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzRWMyQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0VjMkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGltYWdlX2lkX292ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbWFnZUlkT3ZlcnJpZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGltYWdlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmltYWdlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNFYzJDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNFYzJDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbWFnZUlkT3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VJZE92ZXJyaWRlID0gdGhpcy5faW1hZ2VJZE92ZXJyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW1hZ2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmltYWdlVHlwZSA9IHRoaXMuX2ltYWdlVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0VjMkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbWFnZUlkT3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ltYWdlSWRPdmVycmlkZSA9IHZhbHVlLmltYWdlSWRPdmVycmlkZTtcbiAgICAgIHRoaXMuX2ltYWdlVHlwZSA9IHZhbHVlLmltYWdlVHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBpbWFnZV9pZF9vdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlSWRPdmVycmlkZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZE92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfaWRfb3ZlcnJpZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlSWRPdmVycmlkZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW1hZ2VJZE92ZXJyaWRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW1hZ2VJZE92ZXJyaWRlKCkge1xuICAgIHRoaXMuX2ltYWdlSWRPdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZE92ZXJyaWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlSWRPdmVycmlkZTtcbiAgfVxuXG4gIC8vIGltYWdlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW1hZ2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbWFnZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltYWdlVHlwZSgpIHtcbiAgICB0aGlzLl9pbWFnZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVR5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzTGF1bmNoVGVtcGxhdGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2xhdW5jaF90ZW1wbGF0ZV9pZCBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNsYXVuY2hfdGVtcGxhdGVfaWR9XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjbGF1bmNoX3RlbXBsYXRlX25hbWUgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjbGF1bmNoX3RlbXBsYXRlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCN2ZXJzaW9uIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIHwgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzTGF1bmNoVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlSWQpLFxuICAgIGxhdW5jaF90ZW1wbGF0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlTmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNMYXVuY2hUZW1wbGF0ZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIHwgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzTGF1bmNoVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGF1bmNoX3RlbXBsYXRlX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmVyc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzTGF1bmNoVGVtcGxhdGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoVGVtcGxhdGVJZCA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoVGVtcGxhdGVOYW1lID0gdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJzaW9uID0gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZUlkO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdmFsdWUubGF1bmNoVGVtcGxhdGVOYW1lO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlLnZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFRlbXBsYXRlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZUlkKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVJZDtcbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGF1bmNoX3RlbXBsYXRlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFRlbXBsYXRlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoVGVtcGxhdGVOYW1lKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2FsbG9jYXRpb25fc3RyYXRlZ3kgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjYWxsb2NhdGlvbl9zdHJhdGVneX1cbiAgKi9cbiAgcmVhZG9ubHkgYWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2JpZF9wZXJjZW50YWdlIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I2JpZF9wZXJjZW50YWdlfVxuICAqL1xuICByZWFkb25seSBiaWRQZXJjZW50YWdlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2Rlc2lyZWRfdmNwdXMgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjZGVzaXJlZF92Y3B1c31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzaXJlZFZjcHVzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2VjMl9rZXlfcGFpciBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNlYzJfa2V5X3BhaXJ9XG4gICovXG4gIHJlYWRvbmx5IGVjMktleVBhaXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjaW1hZ2VfaWQgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjaW1hZ2VfaWR9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjaW5zdGFuY2Vfcm9sZSBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNpbnN0YW5jZV9yb2xlfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVJvbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjaW5zdGFuY2VfdHlwZSBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNpbnN0YW5jZV90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCNtYXhfdmNwdXMgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjbWF4X3ZjcHVzfVxuICAqL1xuICByZWFkb25seSBtYXhWY3B1czogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I21pbl92Y3B1cyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNtaW5fdmNwdXN9XG4gICovXG4gIHJlYWRvbmx5IG1pblZjcHVzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I3NlY3VyaXR5X2dyb3VwX2lkcyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNzZWN1cml0eV9ncm91cF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZHM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I3Nwb3RfaWFtX2ZsZWV0X3JvbGUgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjc3BvdF9pYW1fZmxlZXRfcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdElhbUZsZWV0Um9sZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCNzdWJuZXRzIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I3N1Ym5ldHN9XG4gICovXG4gIHJlYWRvbmx5IHN1Ym5ldHM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I3RhZ3MgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQjdHlwZSBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIGVjMl9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2VjMl9jb25maWd1cmF0aW9uIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50I2VjMl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBlYzJDb25maWd1cmF0aW9uPzogQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzRWMyQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogbGF1bmNoX3RlbXBsYXRlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50I2xhdW5jaF90ZW1wbGF0ZSBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCNsYXVuY2hfdGVtcGxhdGV9XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlPzogQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzTGF1bmNoVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNPdXRwdXRSZWZlcmVuY2UgfCBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgIGJpZF9wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpZFBlcmNlbnRhZ2UpLFxuICAgIGRlc2lyZWRfdmNwdXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGVzaXJlZFZjcHVzKSxcbiAgICBlYzJfa2V5X3BhaXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWMyS2V5UGFpciksXG4gICAgaW1hZ2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VJZCksXG4gICAgaW5zdGFuY2Vfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVJvbGUpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgbWF4X3ZjcHVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZjcHVzKSxcbiAgICBtaW5fdmNwdXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluVmNwdXMpLFxuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3BvdF9pYW1fZmxlZXRfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90SWFtRmxlZXRSb2xlKSxcbiAgICBzdWJuZXRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgZWMyX2NvbmZpZ3VyYXRpb246IGJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0VjMkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVjMkNvbmZpZ3VyYXRpb24pLFxuICAgIGxhdW5jaF90ZW1wbGF0ZTogYmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzTGF1bmNoVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNPdXRwdXRSZWZlcmVuY2UgfCBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYmlkX3BlcmNlbnRhZ2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJpZFBlcmNlbnRhZ2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGRlc2lyZWRfdmNwdXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlc2lyZWRWY3B1cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgZWMyX2tleV9wYWlyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lYzJLZXlQYWlyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpbWFnZV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW5zdGFuY2Vfcm9sZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VSb2xlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpbnN0YW5jZV90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgbWF4X3ZjcHVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhWY3B1cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgbWluX3ZjcHVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5taW5WY3B1cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIHNwb3RfaWFtX2ZsZWV0X3JvbGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNwb3RJYW1GbGVldFJvbGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN1Ym5ldHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgdGFnczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWMyX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNFYzJDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lYzJDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzRWMyQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGxhdW5jaF90ZW1wbGF0ZToge1xuICAgICAgdmFsdWU6IGJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG9jYXRpb25TdHJhdGVneSA9IHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2JpZFBlcmNlbnRhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmlkUGVyY2VudGFnZSA9IHRoaXMuX2JpZFBlcmNlbnRhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXNpcmVkVmNwdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzaXJlZFZjcHVzID0gdGhpcy5fZGVzaXJlZFZjcHVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWMyS2V5UGFpciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lYzJLZXlQYWlyID0gdGhpcy5fZWMyS2V5UGFpcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ltYWdlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VJZCA9IHRoaXMuX2ltYWdlSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnN0YW5jZVJvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VSb2xlID0gdGhpcy5faW5zdGFuY2VSb2xlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heFZjcHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFZjcHVzID0gdGhpcy5fbWF4VmNwdXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9taW5WY3B1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5taW5WY3B1cyA9IHRoaXMuX21pblZjcHVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VjdXJpdHlHcm91cElkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwSWRzID0gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nwb3RJYW1GbGVldFJvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BvdElhbUZsZWV0Um9sZSA9IHRoaXMuX3Nwb3RJYW1GbGVldFJvbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJuZXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1Ym5ldHMgPSB0aGlzLl9zdWJuZXRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdzID0gdGhpcy5fdGFncztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lYzJDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVjMkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9lYzJDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoVGVtcGxhdGUgPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JpZFBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXNpcmVkVmNwdXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lYzJLZXlQYWlyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW1hZ2VJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlUm9sZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFZjcHVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluVmNwdXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdElhbUZsZWV0Um9sZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1Ym5ldHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VjMkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlLmFsbG9jYXRpb25TdHJhdGVneTtcbiAgICAgIHRoaXMuX2JpZFBlcmNlbnRhZ2UgPSB2YWx1ZS5iaWRQZXJjZW50YWdlO1xuICAgICAgdGhpcy5fZGVzaXJlZFZjcHVzID0gdmFsdWUuZGVzaXJlZFZjcHVzO1xuICAgICAgdGhpcy5fZWMyS2V5UGFpciA9IHZhbHVlLmVjMktleVBhaXI7XG4gICAgICB0aGlzLl9pbWFnZUlkID0gdmFsdWUuaW1hZ2VJZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlUm9sZSA9IHZhbHVlLmluc3RhbmNlUm9sZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlLmluc3RhbmNlVHlwZTtcbiAgICAgIHRoaXMuX21heFZjcHVzID0gdmFsdWUubWF4VmNwdXM7XG4gICAgICB0aGlzLl9taW5WY3B1cyA9IHZhbHVlLm1pblZjcHVzO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHZhbHVlLnNlY3VyaXR5R3JvdXBJZHM7XG4gICAgICB0aGlzLl9zcG90SWFtRmxlZXRSb2xlID0gdmFsdWUuc3BvdElhbUZsZWV0Um9sZTtcbiAgICAgIHRoaXMuX3N1Ym5ldHMgPSB2YWx1ZS5zdWJuZXRzO1xuICAgICAgdGhpcy5fdGFncyA9IHZhbHVlLnRhZ3M7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX2VjMkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmVjMkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUubGF1bmNoVGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gYWxsb2NhdGlvbl9zdHJhdGVneSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsbG9jYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG9jYXRpb25TdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvblN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIC8vIGJpZF9wZXJjZW50YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JpZFBlcmNlbnRhZ2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJpZFBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdiaWRfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmlkUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmlkUGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJpZFBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fYmlkUGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmlkUGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaWRQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8gZGVzaXJlZF92Y3B1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2lyZWRWY3B1cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZGVzaXJlZFZjcHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVzaXJlZF92Y3B1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzaXJlZFZjcHVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZXNpcmVkVmNwdXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNpcmVkVmNwdXMoKSB7XG4gICAgdGhpcy5fZGVzaXJlZFZjcHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNpcmVkVmNwdXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzaXJlZFZjcHVzO1xuICB9XG5cbiAgLy8gZWMyX2tleV9wYWlyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VjMktleVBhaXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVjMktleVBhaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYzJfa2V5X3BhaXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVjMktleVBhaXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VjMktleVBhaXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFYzJLZXlQYWlyKCkge1xuICAgIHRoaXMuX2VjMktleVBhaXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVjMktleVBhaXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWMyS2V5UGFpcjtcbiAgfVxuXG4gIC8vIGltYWdlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW1hZ2VJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltYWdlSWQoKSB7XG4gICAgdGhpcy5faW1hZ2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZUlkO1xuICB9XG5cbiAgLy8gaW5zdGFuY2Vfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VSb2xlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VSb2xlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlUm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUm9sZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbWF4X3ZjcHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heFZjcHVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhWY3B1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF92Y3B1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4VmNwdXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFZjcHVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFZjcHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFZjcHVzO1xuICB9XG5cbiAgLy8gbWluX3ZjcHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pblZjcHVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5WY3B1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl92Y3B1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluVmNwdXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblZjcHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluVmNwdXMoKSB7XG4gICAgdGhpcy5fbWluVmNwdXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pblZjcHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pblZjcHVzO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfaWRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHNwb3RfaWFtX2ZsZWV0X3JvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdElhbUZsZWV0Um9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3BvdElhbUZsZWV0Um9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfaWFtX2ZsZWV0X3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RJYW1GbGVldFJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nwb3RJYW1GbGVldFJvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90SWFtRmxlZXRSb2xlKCkge1xuICAgIHRoaXMuX3Nwb3RJYW1GbGVldFJvbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RJYW1GbGVldFJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdElhbUZsZWV0Um9sZTtcbiAgfVxuXG4gIC8vIHN1Ym5ldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJuZXRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0cztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyBlYzJfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYzJDb25maWd1cmF0aW9uID0gbmV3IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0VjMkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJlYzJfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBlYzJDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lYzJDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRFYzJDb25maWd1cmF0aW9uKHZhbHVlOiBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNFYzJDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZWMyQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWMyQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lYzJDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVjMkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWMyQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlID0gbmV3IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGF1bmNoX3RlbXBsYXRlXCIpO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZTtcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoVGVtcGxhdGUodmFsdWU6IEJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xhdW5jaFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFRlbXBsYXRlKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQgYXdzX2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnR9XG4qL1xuZXhwb3J0IGNsYXNzIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEJhdGNoQ29tcHV0ZUVudmlyb25tZW50IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYmF0Y2hfY29tcHV0ZV9lbnZpcm9ubWVudCNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnQgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnRcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50IGF3c19iYXRjaF9jb21wdXRlX2Vudmlyb25tZW50fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBCYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2JhdGNoX2NvbXB1dGVfZW52aXJvbm1lbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9jb21wdXRlRW52aXJvbm1lbnROYW1lID0gY29uZmlnLmNvbXB1dGVFbnZpcm9ubWVudE5hbWU7XG4gICAgdGhpcy5fY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeCA9IGNvbmZpZy5jb21wdXRlRW52aXJvbm1lbnROYW1lUHJlZml4O1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3NlcnZpY2VSb2xlID0gY29uZmlnLnNlcnZpY2VSb2xlO1xuICAgIHRoaXMuX3N0YXRlID0gY29uZmlnLnN0YXRlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX2NvbXB1dGVSZXNvdXJjZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb21wdXRlUmVzb3VyY2VzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNvbXB1dGVfZW52aXJvbm1lbnRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXB1dGVFbnZpcm9ubWVudE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbXB1dGVFbnZpcm9ubWVudE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wdXRlX2Vudmlyb25tZW50X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXB1dGVFbnZpcm9ubWVudE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXB1dGVFbnZpcm9ubWVudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wdXRlRW52aXJvbm1lbnROYW1lKCkge1xuICAgIHRoaXMuX2NvbXB1dGVFbnZpcm9ubWVudE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXB1dGVFbnZpcm9ubWVudE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZUVudmlyb25tZW50TmFtZTtcbiAgfVxuXG4gIC8vIGNvbXB1dGVfZW52aXJvbm1lbnRfbmFtZV9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wdXRlRW52aXJvbm1lbnROYW1lUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wdXRlRW52aXJvbm1lbnROYW1lUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHV0ZV9lbnZpcm9ubWVudF9uYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXB1dGVFbnZpcm9ubWVudE5hbWVQcmVmaXgoKSB7XG4gICAgdGhpcy5fY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlRW52aXJvbm1lbnROYW1lUHJlZml4O1xuICB9XG5cbiAgLy8gZWNzX2NsdXN0ZXJfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWNzQ2x1c3RlckFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vjc19jbHVzdGVyX2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gc2VydmljZV9yb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmljZVJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlUm9sZSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGU7XG4gIH1cblxuICAvLyBzdGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyBzdGF0dXNfcmVhc29uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzX3JlYXNvbicpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIGNvbXB1dGVfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXB1dGVSZXNvdXJjZXMgPSBuZXcgQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY29tcHV0ZV9yZXNvdXJjZXNcIik7XG4gIHB1YmxpYyBnZXQgY29tcHV0ZVJlc291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZVJlc291cmNlcztcbiAgfVxuICBwdWJsaWMgcHV0Q29tcHV0ZVJlc291cmNlcyh2YWx1ZTogQmF0Y2hDb21wdXRlRW52aXJvbm1lbnRDb21wdXRlUmVzb3VyY2VzKSB7XG4gICAgdGhpcy5fY29tcHV0ZVJlc291cmNlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcHV0ZVJlc291cmNlcygpIHtcbiAgICB0aGlzLl9jb21wdXRlUmVzb3VyY2VzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXB1dGVSZXNvdXJjZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZVJlc291cmNlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wdXRlX2Vudmlyb25tZW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbXB1dGVFbnZpcm9ubWVudE5hbWUpLFxuICAgICAgY29tcHV0ZV9lbnZpcm9ubWVudF9uYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgc2VydmljZV9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlUm9sZSksXG4gICAgICBzdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhdGUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgIGNvbXB1dGVfcmVzb3VyY2VzOiBiYXRjaENvbXB1dGVFbnZpcm9ubWVudENvbXB1dGVSZXNvdXJjZXNUb1RlcnJhZm9ybSh0aGlzLl9jb21wdXRlUmVzb3VyY2VzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgY29tcHV0ZV9lbnZpcm9ubWVudF9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jb21wdXRlRW52aXJvbm1lbnROYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29tcHV0ZV9lbnZpcm9ubWVudF9uYW1lX3ByZWZpeDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY29tcHV0ZUVudmlyb25tZW50TmFtZVByZWZpeCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNlcnZpY2Vfcm9sZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc2VydmljZVJvbGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzdGF0ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc3RhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29tcHV0ZV9yZXNvdXJjZXM6IHtcbiAgICAgICAgdmFsdWU6IGJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbXB1dGVSZXNvdXJjZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkJhdGNoQ29tcHV0ZUVudmlyb25tZW50Q29tcHV0ZVJlc291cmNlc0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==