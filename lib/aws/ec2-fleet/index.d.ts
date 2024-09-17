/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#id Ec2Fleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#tags Ec2Fleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#tags_all Ec2Fleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}
    */
    readonly terminateInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#type Ec2Fleet#type}
    */
    readonly type?: string;
    /**
    * launch_template_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}
    */
    readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig;
    /**
    * on_demand_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}
    */
    readonly onDemandOptions?: Ec2FleetOnDemandOptions;
    /**
    * spot_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#spot_options Ec2Fleet#spot_options}
    */
    readonly spotOptions?: Ec2FleetSpotOptions;
    /**
    * target_capacity_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}
    */
    readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#timeouts Ec2Fleet#timeouts}
    */
    readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#version Ec2Fleet#version}
    */
    readonly version: string;
}
export declare function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare class Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string | undefined;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#availability_zone Ec2Fleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#instance_type Ec2Fleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#max_price Ec2Fleet#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#priority Ec2Fleet#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#subnet_id Ec2Fleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable): any;
export declare function ec2FleetLaunchTemplateConfigOverrideToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable | undefined);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _maxPrice?;
    get maxPrice(): string;
    set maxPrice(value: string);
    resetMaxPrice(): void;
    get maxPriceInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): number;
    set weightedCapacity(value: number);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): number | undefined;
}
export declare class Ec2FleetLaunchTemplateConfigOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Ec2FleetLaunchTemplateConfigOverrideOutputReference;
}
export interface Ec2FleetLaunchTemplateConfig {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}
    */
    readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#override Ec2Fleet#override}
    */
    readonly override?: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable;
}
export declare function ec2FleetLaunchTemplateConfigToTerraform(struct?: Ec2FleetLaunchTemplateConfigOutputReference | Ec2FleetLaunchTemplateConfig): any;
export declare function ec2FleetLaunchTemplateConfigToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOutputReference | Ec2FleetLaunchTemplateConfig): any;
export declare class Ec2FleetLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfig | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfig | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    private _override;
    get override(): Ec2FleetLaunchTemplateConfigOverrideList;
    putOverride(value: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable): void;
    resetOverride(): void;
    get overrideInput(): cdktf.IResolvable | Ec2FleetLaunchTemplateConfigOverride[] | undefined;
}
export interface Ec2FleetOnDemandOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
}
export declare function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any;
export declare function ec2FleetOnDemandOptionsToHclTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any;
export declare class Ec2FleetOnDemandOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetOnDemandOptions | undefined;
    set internalValue(value: Ec2FleetOnDemandOptions | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}
    */
    readonly replacementStrategy?: string;
}
export declare function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any;
export declare function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any;
export declare class Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined;
    set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined);
    private _replacementStrategy?;
    get replacementStrategy(): string;
    set replacementStrategy(value: string);
    resetReplacementStrategy(): void;
    get replacementStrategyInput(): string | undefined;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategies {
    /**
    * capacity_rebalance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}
    */
    readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
}
export declare function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any;
export declare function ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any;
export declare class Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategies | undefined;
    set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategies | undefined);
    private _capacityRebalance;
    get capacityRebalance(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference;
    putCapacityRebalance(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): void;
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined;
}
export interface Ec2FleetSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * maintenance_strategies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}
    */
    readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies;
}
export declare function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any;
export declare function ec2FleetSpotOptionsToHclTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any;
export declare class Ec2FleetSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetSpotOptions | undefined;
    set internalValue(value: Ec2FleetSpotOptions | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string | undefined;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number | undefined;
    private _maintenanceStrategies;
    get maintenanceStrategies(): Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference;
    putMaintenanceStrategies(value: Ec2FleetSpotOptionsMaintenanceStrategies): void;
    resetMaintenanceStrategies(): void;
    get maintenanceStrategiesInput(): Ec2FleetSpotOptionsMaintenanceStrategies | undefined;
}
export interface Ec2FleetTargetCapacitySpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}
    */
    readonly defaultTargetCapacityType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}
    */
    readonly spotTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}
    */
    readonly totalTargetCapacity: number;
}
export declare function ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any;
export declare function ec2FleetTargetCapacitySpecificationToHclTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any;
export declare class Ec2FleetTargetCapacitySpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetTargetCapacitySpecification | undefined;
    set internalValue(value: Ec2FleetTargetCapacitySpecification | undefined);
    private _defaultTargetCapacityType?;
    get defaultTargetCapacityType(): string;
    set defaultTargetCapacityType(value: string);
    get defaultTargetCapacityTypeInput(): string | undefined;
    private _onDemandTargetCapacity?;
    get onDemandTargetCapacity(): number;
    set onDemandTargetCapacity(value: number);
    resetOnDemandTargetCapacity(): void;
    get onDemandTargetCapacityInput(): number | undefined;
    private _spotTargetCapacity?;
    get spotTargetCapacity(): number;
    set spotTargetCapacity(value: number);
    resetSpotTargetCapacity(): void;
    get spotTargetCapacityInput(): number | undefined;
    private _totalTargetCapacity?;
    get totalTargetCapacity(): number;
    set totalTargetCapacity(value: number);
    get totalTargetCapacityInput(): number | undefined;
}
export interface Ec2FleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#create Ec2Fleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#delete Ec2Fleet#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#update Ec2Fleet#update}
    */
    readonly update?: string;
}
export declare function ec2FleetTimeoutsToTerraform(struct?: Ec2FleetTimeouts | cdktf.IResolvable): any;
export declare function ec2FleetTimeoutsToHclTerraform(struct?: Ec2FleetTimeouts | cdktf.IResolvable): any;
export declare class Ec2FleetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2FleetTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet aws_ec2_fleet}
*/
export declare class Ec2Fleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_fleet";
    /**
    * Generates CDKTF code for importing a Ec2Fleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2Fleet to import
    * @param importFromId The id of the existing Ec2Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2Fleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet aws_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FleetConfig
    */
    constructor(scope: Construct, id: string, config: Ec2FleetConfig);
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable | undefined;
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
    private _terminateInstances?;
    get terminateInstances(): boolean | cdktf.IResolvable;
    set terminateInstances(value: boolean | cdktf.IResolvable);
    resetTerminateInstances(): void;
    get terminateInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _launchTemplateConfig;
    get launchTemplateConfig(): Ec2FleetLaunchTemplateConfigOutputReference;
    putLaunchTemplateConfig(value: Ec2FleetLaunchTemplateConfig): void;
    get launchTemplateConfigInput(): Ec2FleetLaunchTemplateConfig | undefined;
    private _onDemandOptions;
    get onDemandOptions(): Ec2FleetOnDemandOptionsOutputReference;
    putOnDemandOptions(value: Ec2FleetOnDemandOptions): void;
    resetOnDemandOptions(): void;
    get onDemandOptionsInput(): Ec2FleetOnDemandOptions | undefined;
    private _spotOptions;
    get spotOptions(): Ec2FleetSpotOptionsOutputReference;
    putSpotOptions(value: Ec2FleetSpotOptions): void;
    resetSpotOptions(): void;
    get spotOptionsInput(): Ec2FleetSpotOptions | undefined;
    private _targetCapacitySpecification;
    get targetCapacitySpecification(): Ec2FleetTargetCapacitySpecificationOutputReference;
    putTargetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification): void;
    get targetCapacitySpecificationInput(): Ec2FleetTargetCapacitySpecification | undefined;
    private _timeouts;
    get timeouts(): Ec2FleetTimeoutsOutputReference;
    putTimeouts(value: Ec2FleetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2FleetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
