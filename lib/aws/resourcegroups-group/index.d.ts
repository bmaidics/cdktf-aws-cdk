/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * resource_query block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}
    */
    readonly resourceQuery: ResourcegroupsGroupResourceQuery;
}
export interface ResourcegroupsGroupResourceQuery {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}
    */
    readonly type?: string;
}
export declare function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQueryOutputReference | ResourcegroupsGroupResourceQuery): any;
export declare function resourcegroupsGroupResourceQueryToHclTerraform(struct?: ResourcegroupsGroupResourceQueryOutputReference | ResourcegroupsGroupResourceQuery): any;
export declare class ResourcegroupsGroupResourceQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResourcegroupsGroupResourceQuery | undefined;
    set internalValue(value: ResourcegroupsGroupResourceQuery | undefined);
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group aws_resourcegroups_group}
*/
export declare class ResourcegroupsGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_resourcegroups_group";
    /**
    * Generates CDKTF code for importing a ResourcegroupsGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ResourcegroupsGroup to import
    * @param importFromId The id of the existing ResourcegroupsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ResourcegroupsGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group aws_resourcegroups_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ResourcegroupsGroupConfig
    */
    constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig);
    get arn(): string;
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
    private _resourceQuery;
    get resourceQuery(): ResourcegroupsGroupResourceQueryOutputReference;
    putResourceQuery(value: ResourcegroupsGroupResourceQuery): void;
    get resourceQueryInput(): ResourcegroupsGroupResourceQuery | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
