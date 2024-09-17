/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCatalogDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}
    */
    readonly locationUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * target_database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}
    */
    readonly targetDatabase?: GlueCatalogDatabaseTargetDatabase;
}
export interface GlueCatalogDatabaseTargetDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}
    */
    readonly databaseName: string;
}
export declare function glueCatalogDatabaseTargetDatabaseToTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any;
export declare function glueCatalogDatabaseTargetDatabaseToHclTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any;
export declare class GlueCatalogDatabaseTargetDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogDatabaseTargetDatabase | undefined;
    set internalValue(value: GlueCatalogDatabaseTargetDatabase | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database aws_glue_catalog_database}
*/
export declare class GlueCatalogDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_catalog_database";
    /**
    * Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueCatalogDatabase to import
    * @param importFromId The id of the existing GlueCatalogDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueCatalogDatabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database aws_glue_catalog_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
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
    private _locationUri?;
    get locationUri(): string;
    set locationUri(value: string);
    resetLocationUri(): void;
    get locationUriInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _targetDatabase;
    get targetDatabase(): GlueCatalogDatabaseTargetDatabaseOutputReference;
    putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase): void;
    resetTargetDatabase(): void;
    get targetDatabaseInput(): GlueCatalogDatabaseTargetDatabase | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
