/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#id ImagebuilderImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}
    */
    readonly imageRecipeArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * image_tests_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#timeouts ImagebuilderImage#timeouts}
    */
    readonly timeouts?: ImagebuilderImageTimeouts;
}
export interface ImagebuilderImageOutputResourcesAmis {
}
export declare function imagebuilderImageOutputResourcesAmisToTerraform(struct?: ImagebuilderImageOutputResourcesAmis): any;
export declare function imagebuilderImageOutputResourcesAmisToHclTerraform(struct?: ImagebuilderImageOutputResourcesAmis): any;
export declare class ImagebuilderImageOutputResourcesAmisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageOutputResourcesAmis | undefined;
    set internalValue(value: ImagebuilderImageOutputResourcesAmis | undefined);
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class ImagebuilderImageOutputResourcesAmisList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageOutputResourcesAmisOutputReference;
}
export interface ImagebuilderImageOutputResources {
}
export declare function imagebuilderImageOutputResourcesToTerraform(struct?: ImagebuilderImageOutputResources): any;
export declare function imagebuilderImageOutputResourcesToHclTerraform(struct?: ImagebuilderImageOutputResources): any;
export declare class ImagebuilderImageOutputResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageOutputResources | undefined;
    set internalValue(value: ImagebuilderImageOutputResources | undefined);
    private _amis;
    get amis(): ImagebuilderImageOutputResourcesAmisList;
}
export declare class ImagebuilderImageOutputResourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageOutputResourcesOutputReference;
}
export interface ImagebuilderImageImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export declare function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any;
export declare function imagebuilderImageImageTestsConfigurationToHclTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any;
export declare class ImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageImageTestsConfiguration | undefined;
    set internalValue(value: ImagebuilderImageImageTestsConfiguration | undefined);
    private _imageTestsEnabled?;
    get imageTestsEnabled(): boolean | cdktf.IResolvable;
    set imageTestsEnabled(value: boolean | cdktf.IResolvable);
    resetImageTestsEnabled(): void;
    get imageTestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _timeoutMinutes?;
    get timeoutMinutes(): number;
    set timeoutMinutes(value: number);
    resetTimeoutMinutes(): void;
    get timeoutMinutesInput(): number | undefined;
}
export interface ImagebuilderImageTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#create ImagebuilderImage#create}
    */
    readonly create?: string;
}
export declare function imagebuilderImageTimeoutsToTerraform(struct?: ImagebuilderImageTimeouts | cdktf.IResolvable): any;
export declare function imagebuilderImageTimeoutsToHclTerraform(struct?: ImagebuilderImageTimeouts | cdktf.IResolvable): any;
export declare class ImagebuilderImageTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image aws_imagebuilder_image}
*/
export declare class ImagebuilderImage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_image";
    /**
    * Generates CDKTF code for importing a ImagebuilderImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderImage to import
    * @param importFromId The id of the existing ImagebuilderImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_image aws_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImageConfig);
    get arn(): string;
    get dateCreated(): string;
    private _distributionConfigurationArn?;
    get distributionConfigurationArn(): string;
    set distributionConfigurationArn(value: string);
    resetDistributionConfigurationArn(): void;
    get distributionConfigurationArnInput(): string | undefined;
    private _enhancedImageMetadataEnabled?;
    get enhancedImageMetadataEnabled(): boolean | cdktf.IResolvable;
    set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable);
    resetEnhancedImageMetadataEnabled(): void;
    get enhancedImageMetadataEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageRecipeArn?;
    get imageRecipeArn(): string;
    set imageRecipeArn(value: string);
    get imageRecipeArnInput(): string | undefined;
    private _infrastructureConfigurationArn?;
    get infrastructureConfigurationArn(): string;
    set infrastructureConfigurationArn(value: string);
    get infrastructureConfigurationArnInput(): string | undefined;
    get name(): string;
    get osVersion(): string;
    private _outputResources;
    get outputResources(): ImagebuilderImageOutputResourcesList;
    get platform(): string;
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
    get version(): string;
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): ImagebuilderImageImageTestsConfigurationOutputReference;
    putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration): void;
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImageImageTestsConfiguration | undefined;
    private _timeouts;
    get timeouts(): ImagebuilderImageTimeoutsOutputReference;
    putTimeouts(value: ImagebuilderImageTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ImagebuilderImageTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
