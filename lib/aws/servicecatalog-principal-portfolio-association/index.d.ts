/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogPrincipalPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association#accept_language ServicecatalogPrincipalPortfolioAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association#id ServicecatalogPrincipalPortfolioAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association#portfolio_id ServicecatalogPrincipalPortfolioAssociation#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association#principal_arn ServicecatalogPrincipalPortfolioAssociation#principal_arn}
    */
    readonly principalArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association#principal_type ServicecatalogPrincipalPortfolioAssociation#principal_type}
    */
    readonly principalType?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association aws_servicecatalog_principal_portfolio_association}
*/
export declare class ServicecatalogPrincipalPortfolioAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_principal_portfolio_association";
    /**
    * Generates CDKTF code for importing a ServicecatalogPrincipalPortfolioAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogPrincipalPortfolioAssociation to import
    * @param importFromId The id of the existing ServicecatalogPrincipalPortfolioAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogPrincipalPortfolioAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_principal_portfolio_association aws_servicecatalog_principal_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPrincipalPortfolioAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogPrincipalPortfolioAssociationConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string | undefined;
    private _principalArn?;
    get principalArn(): string;
    set principalArn(value: string);
    get principalArnInput(): string | undefined;
    private _principalType?;
    get principalType(): string;
    set principalType(value: string);
    resetPrincipalType(): void;
    get principalTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
