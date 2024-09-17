/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MacieMemberAccountAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#id MacieMemberAccountAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#member_account_id MacieMemberAccountAssociation#member_account_id}
    */
    readonly memberAccountId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association aws_macie_member_account_association}
*/
export declare class MacieMemberAccountAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_macie_member_account_association";
    /**
    * Generates CDKTF code for importing a MacieMemberAccountAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MacieMemberAccountAssociation to import
    * @param importFromId The id of the existing MacieMemberAccountAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MacieMemberAccountAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association aws_macie_member_account_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieMemberAccountAssociationConfig
    */
    constructor(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _memberAccountId?;
    get memberAccountId(): string;
    set memberAccountId(value: string);
    get memberAccountIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
