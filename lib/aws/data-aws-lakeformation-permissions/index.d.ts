/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#id DataAwsLakeformationPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}
    */
    readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#database DataAwsLakeformationPermissions#database}
    */
    readonly database?: DataAwsLakeformationPermissionsDatabase;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#table DataAwsLakeformationPermissions#table}
    */
    readonly table?: DataAwsLakeformationPermissionsTable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns;
}
export interface DataAwsLakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
}
export declare function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any;
export declare function dataAwsLakeformationPermissionsDataLocationToHclTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any;
export declare class DataAwsLakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsDataLocation | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDataLocation | undefined);
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
export interface DataAwsLakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
}
export declare function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any;
export declare function dataAwsLakeformationPermissionsDatabaseToHclTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any;
export declare class DataAwsLakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsDatabase | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDatabase | undefined);
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
export interface DataAwsLakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any;
export declare function dataAwsLakeformationPermissionsTableToHclTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any;
export declare class DataAwsLakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsTable | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsTable | undefined);
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
export interface DataAwsLakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any;
export declare function dataAwsLakeformationPermissionsTableWithColumnsToHclTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any;
export declare class DataAwsLakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsTableWithColumns | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsTableWithColumns | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions aws_lakeformation_permissions}
*/
export declare class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lakeformation_permissions";
    /**
    * Generates CDKTF code for importing a DataAwsLakeformationPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLakeformationPermissions to import
    * @param importFromId The id of the existing DataAwsLakeformationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLakeformationPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_permissions aws_lakeformation_permissions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig);
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
    get permissions(): string[];
    get permissionsWithGrantOption(): string[];
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _dataLocation;
    get dataLocation(): DataAwsLakeformationPermissionsDataLocationOutputReference;
    putDataLocation(value: DataAwsLakeformationPermissionsDataLocation): void;
    resetDataLocation(): void;
    get dataLocationInput(): DataAwsLakeformationPermissionsDataLocation | undefined;
    private _database;
    get database(): DataAwsLakeformationPermissionsDatabaseOutputReference;
    putDatabase(value: DataAwsLakeformationPermissionsDatabase): void;
    resetDatabase(): void;
    get databaseInput(): DataAwsLakeformationPermissionsDatabase | undefined;
    private _table;
    get table(): DataAwsLakeformationPermissionsTableOutputReference;
    putTable(value: DataAwsLakeformationPermissionsTable): void;
    resetTable(): void;
    get tableInput(): DataAwsLakeformationPermissionsTable | undefined;
    private _tableWithColumns;
    get tableWithColumns(): DataAwsLakeformationPermissionsTableWithColumnsOutputReference;
    putTableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): DataAwsLakeformationPermissionsTableWithColumns | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
