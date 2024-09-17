/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#id DataAwsIdentitystoreUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}
    */
    readonly userId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#filter DataAwsIdentitystoreUser#filter}
    */
    readonly filter: DataAwsIdentitystoreUserFilter[] | cdktf.IResolvable;
}
export interface DataAwsIdentitystoreUserFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreUserFilterToTerraform(struct?: DataAwsIdentitystoreUserFilter | cdktf.IResolvable): any;
export declare function dataAwsIdentitystoreUserFilterToHclTerraform(struct?: DataAwsIdentitystoreUserFilter | cdktf.IResolvable): any;
export declare class DataAwsIdentitystoreUserFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUserFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsIdentitystoreUserFilter | cdktf.IResolvable | undefined);
    private _attributePath?;
    get attributePath(): string;
    set attributePath(value: string);
    get attributePathInput(): string | undefined;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string | undefined;
}
export declare class DataAwsIdentitystoreUserFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsIdentitystoreUserFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIdentitystoreUserFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user aws_identitystore_user}
*/
export declare class DataAwsIdentitystoreUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_identitystore_user";
    /**
    * Generates CDKTF code for importing a DataAwsIdentitystoreUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreUser to import
    * @param importFromId The id of the existing DataAwsIdentitystoreUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIdentitystoreUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/identitystore_user aws_identitystore_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreUserConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    resetUserId(): void;
    get userIdInput(): string | undefined;
    get userName(): string;
    private _filter;
    get filter(): DataAwsIdentitystoreUserFilterList;
    putFilter(value: DataAwsIdentitystoreUserFilter[] | cdktf.IResolvable): void;
    get filterInput(): cdktf.IResolvable | DataAwsIdentitystoreUserFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
