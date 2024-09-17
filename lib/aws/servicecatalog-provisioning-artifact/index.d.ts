/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogProvisioningArtifactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}
    */
    readonly guidance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}
    */
    readonly templatePhysicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact}
*/
export declare class ServicecatalogProvisioningArtifact extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_provisioning_artifact";
    /**
    * Generates CDKTF code for importing a ServicecatalogProvisioningArtifact resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogProvisioningArtifact to import
    * @param importFromId The id of the existing ServicecatalogProvisioningArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogProvisioningArtifact to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisioningArtifactConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProvisioningArtifactConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): boolean | cdktf.IResolvable | undefined;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disableTemplateValidation?;
    get disableTemplateValidation(): boolean | cdktf.IResolvable;
    set disableTemplateValidation(value: boolean | cdktf.IResolvable);
    resetDisableTemplateValidation(): void;
    get disableTemplateValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _guidance?;
    get guidance(): string;
    set guidance(value: string);
    resetGuidance(): void;
    get guidanceInput(): string | undefined;
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
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string | undefined;
    private _templatePhysicalId?;
    get templatePhysicalId(): string;
    set templatePhysicalId(value: string);
    resetTemplatePhysicalId(): void;
    get templatePhysicalIdInput(): string | undefined;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
