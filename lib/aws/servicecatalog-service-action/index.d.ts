/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#id ServicecatalogServiceAction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}
    */
    readonly definition: ServicecatalogServiceActionDefinition;
}
export interface ServicecatalogServiceActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}
    */
    readonly assumeRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}
    */
    readonly parameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#type ServicecatalogServiceAction#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#version ServicecatalogServiceAction#version}
    */
    readonly version: string;
}
export declare function servicecatalogServiceActionDefinitionToTerraform(struct?: ServicecatalogServiceActionDefinitionOutputReference | ServicecatalogServiceActionDefinition): any;
export declare function servicecatalogServiceActionDefinitionToHclTerraform(struct?: ServicecatalogServiceActionDefinitionOutputReference | ServicecatalogServiceActionDefinition): any;
export declare class ServicecatalogServiceActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogServiceActionDefinition | undefined;
    set internalValue(value: ServicecatalogServiceActionDefinition | undefined);
    private _assumeRole?;
    get assumeRole(): string;
    set assumeRole(value: string);
    resetAssumeRole(): void;
    get assumeRoleInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): string;
    set parameters(value: string);
    resetParameters(): void;
    get parametersInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action aws_servicecatalog_service_action}
*/
export declare class ServicecatalogServiceAction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_service_action";
    /**
    * Generates CDKTF code for importing a ServicecatalogServiceAction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogServiceAction to import
    * @param importFromId The id of the existing ServicecatalogServiceAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogServiceAction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_service_action aws_servicecatalog_service_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogServiceActionConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogServiceActionConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
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
    private _definition;
    get definition(): ServicecatalogServiceActionDefinitionOutputReference;
    putDefinition(value: ServicecatalogServiceActionDefinition): void;
    get definitionInput(): ServicecatalogServiceActionDefinition | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
