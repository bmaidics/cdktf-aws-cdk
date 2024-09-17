/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnapshotCreateVolumePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}
    */
    readonly snapshotId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission aws_snapshot_create_volume_permission}
*/
export declare class SnapshotCreateVolumePermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_snapshot_create_volume_permission";
    /**
    * Generates CDKTF code for importing a SnapshotCreateVolumePermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnapshotCreateVolumePermission to import
    * @param importFromId The id of the existing SnapshotCreateVolumePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnapshotCreateVolumePermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission aws_snapshot_create_volume_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnapshotCreateVolumePermissionConfig
    */
    constructor(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    get snapshotIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
