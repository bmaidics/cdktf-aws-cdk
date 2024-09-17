/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}
    */
    readonly defaultBaseline?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}
    */
    readonly owner: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline aws_ssm_patch_baseline}
*/
export declare class DataAwsSsmPatchBaseline extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssm_patch_baseline";
    /**
    * Generates CDKTF code for importing a DataAwsSsmPatchBaseline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmPatchBaseline to import
    * @param importFromId The id of the existing DataAwsSsmPatchBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmPatchBaseline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline aws_ssm_patch_baseline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmPatchBaselineConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig);
    private _defaultBaseline?;
    get defaultBaseline(): boolean | cdktf.IResolvable;
    set defaultBaseline(value: boolean | cdktf.IResolvable);
    resetDefaultBaseline(): void;
    get defaultBaselineInput(): boolean | cdktf.IResolvable | undefined;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    resetOperatingSystem(): void;
    get operatingSystemInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
