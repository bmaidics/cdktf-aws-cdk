/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group#arn DataAwsLbTargetGroup#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group#id DataAwsLbTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group#name DataAwsLbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group#tags DataAwsLbTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsLbTargetGroupHealthCheck {
}
export declare function dataAwsLbTargetGroupHealthCheckToTerraform(struct?: DataAwsLbTargetGroupHealthCheck): any;
export declare function dataAwsLbTargetGroupHealthCheckToHclTerraform(struct?: DataAwsLbTargetGroupHealthCheck): any;
export declare class DataAwsLbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbTargetGroupHealthCheck | undefined;
    set internalValue(value: DataAwsLbTargetGroupHealthCheck | undefined);
    get enabled(): cdktf.IResolvable;
    get healthyThreshold(): number;
    get interval(): number;
    get matcher(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get timeout(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsLbTargetGroupHealthCheckList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbTargetGroupHealthCheckOutputReference;
}
export interface DataAwsLbTargetGroupStickiness {
}
export declare function dataAwsLbTargetGroupStickinessToTerraform(struct?: DataAwsLbTargetGroupStickiness): any;
export declare function dataAwsLbTargetGroupStickinessToHclTerraform(struct?: DataAwsLbTargetGroupStickiness): any;
export declare class DataAwsLbTargetGroupStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbTargetGroupStickiness | undefined;
    set internalValue(value: DataAwsLbTargetGroupStickiness | undefined);
    get cookieDuration(): number;
    get cookieName(): string;
    get enabled(): cdktf.IResolvable;
    get type(): string;
}
export declare class DataAwsLbTargetGroupStickinessList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbTargetGroupStickinessOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group aws_lb_target_group}
*/
export declare class DataAwsLbTargetGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lb_target_group";
    /**
    * Generates CDKTF code for importing a DataAwsLbTargetGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLbTargetGroup to import
    * @param importFromId The id of the existing DataAwsLbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLbTargetGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lb_target_group aws_lb_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbTargetGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLbTargetGroupConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get arnSuffix(): string;
    get connectionTermination(): cdktf.IResolvable;
    get deregistrationDelay(): number;
    private _healthCheck;
    get healthCheck(): DataAwsLbTargetGroupHealthCheckList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lambdaMultiValueHeadersEnabled(): cdktf.IResolvable;
    get loadBalancingAlgorithmType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get port(): number;
    get preserveClientIp(): string;
    get protocol(): string;
    get protocolVersion(): string;
    get proxyProtocolV2(): cdktf.IResolvable;
    get slowStart(): number;
    private _stickiness;
    get stickiness(): DataAwsLbTargetGroupStickinessList;
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
    get targetType(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
