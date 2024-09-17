/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#id ImagebuilderDistributionConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#tags_all ImagebuilderDistributionConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * distribution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#distribution ImagebuilderDistributionConfiguration#distribution}
    */
    readonly distribution: ImagebuilderDistributionConfigurationDistribution[] | cdktf.IResolvable;
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}
    */
    readonly userGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}
    */
    readonly userIds?: string[];
}
export declare function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any;
export declare function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToHclTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any;
export declare class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined);
    private _userGroups?;
    get userGroups(): string[];
    set userGroups(value: string[]);
    resetUserGroups(): void;
    get userGroupsInput(): string[] | undefined;
    private _userIds?;
    get userIds(): string[];
    set userIds(value: string[]);
    resetUserIds(): void;
    get userIdsInput(): string[] | undefined;
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
    */
    readonly amiTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
    */
    readonly targetAccountIds?: string[];
    /**
    * launch_permission block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#launch_permission ImagebuilderDistributionConfiguration#launch_permission}
    */
    readonly launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
}
export declare function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any;
export declare function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToHclTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any;
export declare class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined);
    private _amiTags?;
    get amiTags(): {
        [key: string]: string;
    };
    set amiTags(value: {
        [key: string]: string;
    });
    resetAmiTags(): void;
    get amiTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _targetAccountIds?;
    get targetAccountIds(): string[];
    set targetAccountIds(value: string[]);
    resetTargetAccountIds(): void;
    get targetAccountIdsInput(): string[] | undefined;
    private _launchPermission;
    get launchPermission(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference;
    putLaunchPermission(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): void;
    resetLaunchPermission(): void;
    get launchPermissionInput(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined;
}
export interface ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}
    */
    readonly repositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}
    */
    readonly service: string;
}
export declare function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): any;
export declare function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToHclTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): any;
export declare class ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined);
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string | undefined;
}
export interface ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * target_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}
    */
    readonly targetRepository: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
}
export declare function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): any;
export declare function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToHclTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): any;
export declare class ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined);
    private _containerTags?;
    get containerTags(): string[];
    set containerTags(value: string[]);
    resetContainerTags(): void;
    get containerTagsInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _targetRepository;
    get targetRepository(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference;
    putTargetRepository(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): void;
    get targetRepositoryInput(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined;
}
export interface ImagebuilderDistributionConfigurationDistribution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
    */
    readonly licenseConfigurationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}
    */
    readonly region: string;
    /**
    * ami_distribution_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
    */
    readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
    /**
    * container_distribution_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}
    */
    readonly containerDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
}
export declare function imagebuilderDistributionConfigurationDistributionToTerraform(struct?: ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable): any;
export declare function imagebuilderDistributionConfigurationDistributionToHclTerraform(struct?: ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable): any;
export declare class ImagebuilderDistributionConfigurationDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable | undefined);
    private _licenseConfigurationArns?;
    get licenseConfigurationArns(): string[];
    set licenseConfigurationArns(value: string[]);
    resetLicenseConfigurationArns(): void;
    get licenseConfigurationArnsInput(): string[] | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _amiDistributionConfiguration;
    get amiDistributionConfiguration(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference;
    putAmiDistributionConfiguration(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): void;
    resetAmiDistributionConfiguration(): void;
    get amiDistributionConfigurationInput(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined;
    private _containerDistributionConfiguration;
    get containerDistributionConfiguration(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference;
    putContainerDistributionConfiguration(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): void;
    resetContainerDistributionConfiguration(): void;
    get containerDistributionConfigurationInput(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined;
}
export declare class ImagebuilderDistributionConfigurationDistributionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderDistributionConfigurationDistribution[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderDistributionConfigurationDistributionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}
*/
export declare class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_distribution_configuration";
    /**
    * Generates CDKTF code for importing a ImagebuilderDistributionConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderDistributionConfiguration to import
    * @param importFromId The id of the existing ImagebuilderDistributionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderDistributionConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderDistributionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _distribution;
    get distribution(): ImagebuilderDistributionConfigurationDistributionList;
    putDistribution(value: ImagebuilderDistributionConfigurationDistribution[] | cdktf.IResolvable): void;
    get distributionInput(): cdktf.IResolvable | ImagebuilderDistributionConfigurationDistribution[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
