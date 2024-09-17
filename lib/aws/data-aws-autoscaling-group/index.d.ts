/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/autoscaling_group#id DataAwsAutoscalingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/autoscaling_group#name DataAwsAutoscalingGroup#name}
    */
    readonly name: string;
}
export interface DataAwsAutoscalingGroupLaunchTemplate {
}
export declare function dataAwsAutoscalingGroupLaunchTemplateToTerraform(struct?: DataAwsAutoscalingGroupLaunchTemplate): any;
export declare function dataAwsAutoscalingGroupLaunchTemplateToHclTerraform(struct?: DataAwsAutoscalingGroupLaunchTemplate): any;
export declare class DataAwsAutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupLaunchTemplate | undefined;
    set internalValue(value: DataAwsAutoscalingGroupLaunchTemplate | undefined);
    get id(): string;
    get name(): string;
    get version(): string;
}
export declare class DataAwsAutoscalingGroupLaunchTemplateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupLaunchTemplateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/autoscaling_group aws_autoscaling_group}
*/
export declare class DataAwsAutoscalingGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_autoscaling_group";
    /**
    * Generates CDKTF code for importing a DataAwsAutoscalingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAutoscalingGroup to import
    * @param importFromId The id of the existing DataAwsAutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/autoscaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAutoscalingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/autoscaling_group aws_autoscaling_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAutoscalingGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig);
    get arn(): string;
    get availabilityZones(): string[];
    get defaultCooldown(): number;
    get desiredCapacity(): number;
    get healthCheckGracePeriod(): number;
    get healthCheckType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get launchConfiguration(): string;
    private _launchTemplate;
    get launchTemplate(): DataAwsAutoscalingGroupLaunchTemplateList;
    get loadBalancers(): string[];
    get maxSize(): number;
    get minSize(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get newInstancesProtectedFromScaleIn(): cdktf.IResolvable;
    get placementGroup(): string;
    get serviceLinkedRoleArn(): string;
    get status(): string;
    get targetGroupArns(): string[];
    get terminationPolicies(): string[];
    get vpcZoneIdentifier(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
