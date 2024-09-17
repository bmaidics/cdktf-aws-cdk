/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#id LakeformationPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#permissions LakeformationPermissions#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}
    */
    readonly permissionsWithGrantOption?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#principal LakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#data_location LakeformationPermissions#data_location}
    */
    readonly dataLocation?: LakeformationPermissionsDataLocation;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#database LakeformationPermissions#database}
    */
    readonly database?: LakeformationPermissionsDatabase;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#table LakeformationPermissions#table}
    */
    readonly table?: LakeformationPermissionsTable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#table_with_columns LakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationPermissionsTableWithColumns;
}
export interface LakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#arn LakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
}
export declare function lakeformationPermissionsDataLocationToTerraform(struct?: LakeformationPermissionsDataLocationOutputReference | LakeformationPermissionsDataLocation): any;
export declare function lakeformationPermissionsDataLocationToHclTerraform(struct?: LakeformationPermissionsDataLocationOutputReference | LakeformationPermissionsDataLocation): any;
export declare class LakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationPermissionsDataLocation | undefined;
    set internalValue(value: LakeformationPermissionsDataLocation | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
}
export interface LakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
    */
    readonly name: string;
}
export declare function lakeformationPermissionsDatabaseToTerraform(struct?: LakeformationPermissionsDatabaseOutputReference | LakeformationPermissionsDatabase): any;
export declare function lakeformationPermissionsDatabaseToHclTerraform(struct?: LakeformationPermissionsDatabaseOutputReference | LakeformationPermissionsDatabase): any;
export declare class LakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationPermissionsDatabase | undefined;
    set internalValue(value: LakeformationPermissionsDatabase | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface LakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationPermissionsTableToTerraform(struct?: LakeformationPermissionsTableOutputReference | LakeformationPermissionsTable): any;
export declare function lakeformationPermissionsTableToHclTerraform(struct?: LakeformationPermissionsTableOutputReference | LakeformationPermissionsTable): any;
export declare class LakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationPermissionsTable | undefined;
    set internalValue(value: LakeformationPermissionsTable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): boolean | cdktf.IResolvable | undefined;
}
export interface LakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#column_names LakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationPermissionsTableWithColumnsToTerraform(struct?: LakeformationPermissionsTableWithColumnsOutputReference | LakeformationPermissionsTableWithColumns): any;
export declare function lakeformationPermissionsTableWithColumnsToHclTerraform(struct?: LakeformationPermissionsTableWithColumnsOutputReference | LakeformationPermissionsTableWithColumns): any;
export declare class LakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationPermissionsTableWithColumns | undefined;
    set internalValue(value: LakeformationPermissionsTableWithColumns | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _columnNames?;
    get columnNames(): string[];
    set columnNames(value: string[]);
    resetColumnNames(): void;
    get columnNamesInput(): string[] | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _excludedColumnNames?;
    get excludedColumnNames(): string[];
    set excludedColumnNames(value: string[]);
    resetExcludedColumnNames(): void;
    get excludedColumnNamesInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions aws_lakeformation_permissions}
*/
export declare class LakeformationPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_permissions";
    /**
    * Generates CDKTF code for importing a LakeformationPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationPermissions to import
    * @param importFromId The id of the existing LakeformationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lakeformation_permissions aws_lakeformation_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: LakeformationPermissionsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _catalogResource?;
    get catalogResource(): boolean | cdktf.IResolvable;
    set catalogResource(value: boolean | cdktf.IResolvable);
    resetCatalogResource(): void;
    get catalogResourceInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    get permissionsInput(): string[] | undefined;
    private _permissionsWithGrantOption?;
    get permissionsWithGrantOption(): string[];
    set permissionsWithGrantOption(value: string[]);
    resetPermissionsWithGrantOption(): void;
    get permissionsWithGrantOptionInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _dataLocation;
    get dataLocation(): LakeformationPermissionsDataLocationOutputReference;
    putDataLocation(value: LakeformationPermissionsDataLocation): void;
    resetDataLocation(): void;
    get dataLocationInput(): LakeformationPermissionsDataLocation | undefined;
    private _database;
    get database(): LakeformationPermissionsDatabaseOutputReference;
    putDatabase(value: LakeformationPermissionsDatabase): void;
    resetDatabase(): void;
    get databaseInput(): LakeformationPermissionsDatabase | undefined;
    private _table;
    get table(): LakeformationPermissionsTableOutputReference;
    putTable(value: LakeformationPermissionsTable): void;
    resetTable(): void;
    get tableInput(): LakeformationPermissionsTable | undefined;
    private _tableWithColumns;
    get tableWithColumns(): LakeformationPermissionsTableWithColumnsOutputReference;
    putTableWithColumns(value: LakeformationPermissionsTableWithColumns): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): LakeformationPermissionsTableWithColumns | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
