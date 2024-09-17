/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#addon_name EksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#addon_version EksAddon#addon_version}
    */
    readonly addonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#id EksAddon#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}
    */
    readonly resolveConflicts?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}
    */
    readonly serviceAccountRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#tags EksAddon#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#tags_all EksAddon#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon aws_eks_addon}
*/
export declare class EksAddon extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_addon";
    /**
    * Generates CDKTF code for importing a EksAddon resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksAddon to import
    * @param importFromId The id of the existing EksAddon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksAddon to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_addon aws_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAddonConfig
    */
    constructor(scope: Construct, id: string, config: EksAddonConfig);
    private _addonName?;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string | undefined;
    private _addonVersion?;
    get addonVersion(): string;
    set addonVersion(value: string);
    resetAddonVersion(): void;
    get addonVersionInput(): string | undefined;
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get modifiedAt(): string;
    private _resolveConflicts?;
    get resolveConflicts(): string;
    set resolveConflicts(value: string);
    resetResolveConflicts(): void;
    get resolveConflictsInput(): string | undefined;
    private _serviceAccountRoleArn?;
    get serviceAccountRoleArn(): string;
    set serviceAccountRoleArn(value: string);
    resetServiceAccountRoleArn(): void;
    get serviceAccountRoleArnInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
