/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}
    */
    readonly appNetworkAccessType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}
    */
    readonly authMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#domain_name SagemakerDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#id SagemakerDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#tags SagemakerDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#tags_all SagemakerDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}
    */
    readonly vpcId: string;
    /**
    * default_user_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}
    */
    readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
    /**
    * retention_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}
    */
    readonly retentionPolicy?: SagemakerDomainRetentionPolicy;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _imageVersionNumber?;
    get imageVersionNumber(): number;
    set imageVersionNumber(value: number);
    resetImageVersionNumber(): void;
    get imageVersionNumberInput(): number | undefined;
}
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _customImage;
    get customImage(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any;
export declare function sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any;
export declare class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsSharingSettings | undefined);
    private _notebookOutputOption?;
    get notebookOutputOption(): string;
    set notebookOutputOption(value: string);
    resetNotebookOutputOption(): void;
    get notebookOutputOptionInput(): string | undefined;
    private _s3KmsKeyId?;
    get s3KmsKeyId(): string;
    set s3KmsKeyId(value: string);
    resetS3KmsKeyId(): void;
    get s3KmsKeyIdInput(): string | undefined;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    resetS3OutputPath(): void;
    get s3OutputPathInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined);
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
    /**
    * sharing_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}
    */
    readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
    /**
    * tensor_board_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
}
export declare function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any;
export declare function sagemakerDomainDefaultUserSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any;
export declare class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettings | undefined);
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _jupyterServerAppSettings;
    get jupyterServerAppSettings(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined;
    private _sharingSettings;
    get sharingSettings(): SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference;
    putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings): void;
    resetSharingSettings(): void;
    get sharingSettingsInput(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined;
    private _tensorBoardAppSettings;
    get tensorBoardAppSettings(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference;
    putTensorBoardAppSettings(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): void;
    resetTensorBoardAppSettings(): void;
    get tensorBoardAppSettingsInput(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined;
}
export interface SagemakerDomainRetentionPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}
    */
    readonly homeEfsFileSystem?: string;
}
export declare function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any;
export declare function sagemakerDomainRetentionPolicyToHclTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any;
export declare class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainRetentionPolicy | undefined;
    set internalValue(value: SagemakerDomainRetentionPolicy | undefined);
    private _homeEfsFileSystem?;
    get homeEfsFileSystem(): string;
    set homeEfsFileSystem(value: string);
    resetHomeEfsFileSystem(): void;
    get homeEfsFileSystemInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain aws_sagemaker_domain}
*/
export declare class SagemakerDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_domain";
    /**
    * Generates CDKTF code for importing a SagemakerDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerDomain to import
    * @param importFromId The id of the existing SagemakerDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_domain aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDomainConfig);
    private _appNetworkAccessType?;
    get appNetworkAccessType(): string;
    set appNetworkAccessType(value: string);
    resetAppNetworkAccessType(): void;
    get appNetworkAccessTypeInput(): string | undefined;
    get arn(): string;
    private _authMode?;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    get homeEfsFileSystemId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get singleSignOnManagedApplicationInstanceId(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
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
    get url(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _defaultUserSettings;
    get defaultUserSettings(): SagemakerDomainDefaultUserSettingsOutputReference;
    putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings): void;
    get defaultUserSettingsInput(): SagemakerDomainDefaultUserSettings | undefined;
    private _retentionPolicy;
    get retentionPolicy(): SagemakerDomainRetentionPolicyOutputReference;
    putRetentionPolicy(value: SagemakerDomainRetentionPolicy): void;
    resetRetentionPolicy(): void;
    get retentionPolicyInput(): SagemakerDomainRetentionPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
