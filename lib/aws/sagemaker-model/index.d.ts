/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#id SagemakerModel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#name SagemakerModel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#tags SagemakerModel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * container block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container SagemakerModel#container}
    */
    readonly container?: SagemakerModelContainer[] | cdktf.IResolvable;
    /**
    * inference_execution_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}
    */
    readonly inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig;
    /**
    * primary_container block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}
    */
    readonly primaryContainer?: SagemakerModelPrimaryContainer;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}
    */
    readonly vpcConfig?: SagemakerModelVpcConfig;
}
export interface SagemakerModelContainerImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}
    */
    readonly repositoryAccessMode: string;
}
export declare function sagemakerModelContainerImageConfigToTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any;
export declare function sagemakerModelContainerImageConfigToHclTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any;
export declare class SagemakerModelContainerImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerModelContainerImageConfig | undefined;
    set internalValue(value: SagemakerModelContainerImageConfig | undefined);
    private _repositoryAccessMode?;
    get repositoryAccessMode(): string;
    set repositoryAccessMode(value: string);
    get repositoryAccessModeInput(): string | undefined;
}
export interface SagemakerModelContainer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}
    */
    readonly environment?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image SagemakerModel#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * image_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}
    */
    readonly imageConfig?: SagemakerModelContainerImageConfig;
}
export declare function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer | cdktf.IResolvable): any;
export declare function sagemakerModelContainerToHclTerraform(struct?: SagemakerModelContainer | cdktf.IResolvable): any;
export declare class SagemakerModelContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerModelContainer | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerModelContainer | cdktf.IResolvable | undefined);
    private _containerHostname?;
    get containerHostname(): string;
    set containerHostname(value: string);
    resetContainerHostname(): void;
    get containerHostnameInput(): string | undefined;
    private _environment?;
    get environment(): {
        [key: string]: string;
    };
    set environment(value: {
        [key: string]: string;
    });
    resetEnvironment(): void;
    get environmentInput(): {
        [key: string]: string;
    } | undefined;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _modelDataUrl?;
    get modelDataUrl(): string;
    set modelDataUrl(value: string);
    resetModelDataUrl(): void;
    get modelDataUrlInput(): string | undefined;
    private _imageConfig;
    get imageConfig(): SagemakerModelContainerImageConfigOutputReference;
    putImageConfig(value: SagemakerModelContainerImageConfig): void;
    resetImageConfig(): void;
    get imageConfigInput(): SagemakerModelContainerImageConfig | undefined;
}
export declare class SagemakerModelContainerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerModelContainer[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerModelContainerOutputReference;
}
export interface SagemakerModelInferenceExecutionConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}
    */
    readonly mode: string;
}
export declare function sagemakerModelInferenceExecutionConfigToTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any;
export declare function sagemakerModelInferenceExecutionConfigToHclTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any;
export declare class SagemakerModelInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerModelInferenceExecutionConfig | undefined;
    set internalValue(value: SagemakerModelInferenceExecutionConfig | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
}
export interface SagemakerModelPrimaryContainerImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}
    */
    readonly repositoryAccessMode: string;
}
export declare function sagemakerModelPrimaryContainerImageConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any;
export declare function sagemakerModelPrimaryContainerImageConfigToHclTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any;
export declare class SagemakerModelPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerModelPrimaryContainerImageConfig | undefined;
    set internalValue(value: SagemakerModelPrimaryContainerImageConfig | undefined);
    private _repositoryAccessMode?;
    get repositoryAccessMode(): string;
    set repositoryAccessMode(value: string);
    get repositoryAccessModeInput(): string | undefined;
}
export interface SagemakerModelPrimaryContainer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}
    */
    readonly environment?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image SagemakerModel#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * image_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}
    */
    readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig;
}
export declare function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any;
export declare function sagemakerModelPrimaryContainerToHclTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any;
export declare class SagemakerModelPrimaryContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerModelPrimaryContainer | undefined;
    set internalValue(value: SagemakerModelPrimaryContainer | undefined);
    private _containerHostname?;
    get containerHostname(): string;
    set containerHostname(value: string);
    resetContainerHostname(): void;
    get containerHostnameInput(): string | undefined;
    private _environment?;
    get environment(): {
        [key: string]: string;
    };
    set environment(value: {
        [key: string]: string;
    });
    resetEnvironment(): void;
    get environmentInput(): {
        [key: string]: string;
    } | undefined;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _modelDataUrl?;
    get modelDataUrl(): string;
    set modelDataUrl(value: string);
    resetModelDataUrl(): void;
    get modelDataUrlInput(): string | undefined;
    private _imageConfig;
    get imageConfig(): SagemakerModelPrimaryContainerImageConfigOutputReference;
    putImageConfig(value: SagemakerModelPrimaryContainerImageConfig): void;
    resetImageConfig(): void;
    get imageConfigInput(): SagemakerModelPrimaryContainerImageConfig | undefined;
}
export interface SagemakerModelVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}
    */
    readonly subnets: string[];
}
export declare function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any;
export declare function sagemakerModelVpcConfigToHclTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any;
export declare class SagemakerModelVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerModelVpcConfig | undefined;
    set internalValue(value: SagemakerModelVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model aws_sagemaker_model}
*/
export declare class SagemakerModel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_model";
    /**
    * Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerModel to import
    * @param importFromId The id of the existing SagemakerModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerModel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model aws_sagemaker_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelConfig);
    get arn(): string;
    private _enableNetworkIsolation?;
    get enableNetworkIsolation(): boolean | cdktf.IResolvable;
    set enableNetworkIsolation(value: boolean | cdktf.IResolvable);
    resetEnableNetworkIsolation(): void;
    get enableNetworkIsolationInput(): boolean | cdktf.IResolvable | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
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
    private _container;
    get container(): SagemakerModelContainerList;
    putContainer(value: SagemakerModelContainer[] | cdktf.IResolvable): void;
    resetContainer(): void;
    get containerInput(): cdktf.IResolvable | SagemakerModelContainer[] | undefined;
    private _inferenceExecutionConfig;
    get inferenceExecutionConfig(): SagemakerModelInferenceExecutionConfigOutputReference;
    putInferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig): void;
    resetInferenceExecutionConfig(): void;
    get inferenceExecutionConfigInput(): SagemakerModelInferenceExecutionConfig | undefined;
    private _primaryContainer;
    get primaryContainer(): SagemakerModelPrimaryContainerOutputReference;
    putPrimaryContainer(value: SagemakerModelPrimaryContainer): void;
    resetPrimaryContainer(): void;
    get primaryContainerInput(): SagemakerModelPrimaryContainer | undefined;
    private _vpcConfig;
    get vpcConfig(): SagemakerModelVpcConfigOutputReference;
    putVpcConfig(value: SagemakerModelVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): SagemakerModelVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
