/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
    */
    readonly parameterOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}
    */
    readonly retainStack?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * deployment_targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#deployment_targets CloudformationStackSetInstance#deployment_targets}
    */
    readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#timeouts CloudformationStackSetInstance#timeouts}
    */
    readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceDeploymentTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
}
export declare function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any;
export declare function cloudformationStackSetInstanceDeploymentTargetsToHclTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any;
export declare class CloudformationStackSetInstanceDeploymentTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetInstanceDeploymentTargets | undefined;
    set internalValue(value: CloudformationStackSetInstanceDeploymentTargets | undefined);
    private _organizationalUnitIds?;
    get organizationalUnitIds(): string[];
    set organizationalUnitIds(value: string[]);
    resetOrganizationalUnitIds(): void;
    get organizationalUnitIdsInput(): string[] | undefined;
}
export interface CloudformationStackSetInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable): any;
export declare function cloudformationStackSetInstanceTimeoutsToHclTerraform(struct?: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable): any;
export declare class CloudformationStackSetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance}
*/
export declare class CloudformationStackSetInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudformation_stack_set_instance";
    /**
    * Generates CDKTF code for importing a CloudformationStackSetInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudformationStackSetInstance to import
    * @param importFromId The id of the existing CloudformationStackSetInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudformationStackSetInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetInstanceConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get organizationalUnitId(): string;
    private _parameterOverrides?;
    get parameterOverrides(): {
        [key: string]: string;
    };
    set parameterOverrides(value: {
        [key: string]: string;
    });
    resetParameterOverrides(): void;
    get parameterOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _retainStack?;
    get retainStack(): boolean | cdktf.IResolvable;
    set retainStack(value: boolean | cdktf.IResolvable);
    resetRetainStack(): void;
    get retainStackInput(): boolean | cdktf.IResolvable | undefined;
    get stackId(): string;
    private _stackSetName?;
    get stackSetName(): string;
    set stackSetName(value: string);
    get stackSetNameInput(): string | undefined;
    private _deploymentTargets;
    get deploymentTargets(): CloudformationStackSetInstanceDeploymentTargetsOutputReference;
    putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets): void;
    resetDeploymentTargets(): void;
    get deploymentTargetsInput(): CloudformationStackSetInstanceDeploymentTargets | undefined;
    private _timeouts;
    get timeouts(): CloudformationStackSetInstanceTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackSetInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudformationStackSetInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
