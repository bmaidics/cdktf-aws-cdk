/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
}
export declare function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any;
export declare function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any;
export declare class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined;
    set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined);
    get userGroups(): string[];
    get userIds(): string[];
}
export declare class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference;
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
}
export declare function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any;
export declare function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any;
export declare class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined);
    private _amiTags;
    get amiTags(): cdktf.StringMap;
    get description(): string;
    get kmsKeyId(): string;
    private _launchPermission;
    get launchPermission(): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList;
    get name(): string;
    get targetAccountIds(): string[];
}
export declare class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference;
}
export interface DataAwsImagebuilderDistributionConfigurationDistribution {
}
export declare function dataAwsImagebuilderDistributionConfigurationDistributionToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistribution): any;
export declare function dataAwsImagebuilderDistributionConfigurationDistributionToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistribution): any;
export declare class DataAwsImagebuilderDistributionConfigurationDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderDistributionConfigurationDistribution | undefined;
    set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistribution | undefined);
    private _amiDistributionConfiguration;
    get amiDistributionConfiguration(): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList;
    get licenseConfigurationArns(): string[];
    get region(): string;
}
export declare class DataAwsImagebuilderDistributionConfigurationDistributionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}
*/
export declare class DataAwsImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_distribution_configuration";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderDistributionConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderDistributionConfiguration to import
    * @param importFromId The id of the existing DataAwsImagebuilderDistributionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderDistributionConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderDistributionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get dateCreated(): string;
    get dateUpdated(): string;
    get description(): string;
    private _distribution;
    get distribution(): DataAwsImagebuilderDistributionConfigurationDistributionList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
