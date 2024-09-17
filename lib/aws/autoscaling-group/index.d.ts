/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}
    */
    readonly capacityRebalance?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}
    */
    readonly defaultCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}
    */
    readonly desiredCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}
    */
    readonly enabledMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#force_delete AutoscalingGroup#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}
    */
    readonly forceDeleteWarmPool?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}
    */
    readonly healthCheckGracePeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}
    */
    readonly healthCheckType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#id AutoscalingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}
    */
    readonly launchConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}
    */
    readonly maxInstanceLifetime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_size AutoscalingGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}
    */
    readonly metricsGranularity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}
    */
    readonly minElbCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}
    */
    readonly minSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#placement_group AutoscalingGroup#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}
    */
    readonly protectFromScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}
    */
    readonly serviceLinkedRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}
    */
    readonly suspendedProcesses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#tags AutoscalingGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    }[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}
    */
    readonly terminationPolicies?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}
    */
    readonly vpcZoneIdentifier?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}
    */
    readonly waitForCapacityTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}
    */
    readonly waitForElbCapacity?: number;
    /**
    * initial_lifecycle_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}
    */
    readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable;
    /**
    * instance_refresh block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_refresh AutoscalingGroup#instance_refresh}
    */
    readonly instanceRefresh?: AutoscalingGroupInstanceRefresh;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate?: AutoscalingGroupLaunchTemplate;
    /**
    * mixed_instances_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}
    */
    readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#tag AutoscalingGroup#tag}
    */
    readonly tag?: AutoscalingGroupTag[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}
    */
    readonly timeouts?: AutoscalingGroupTimeouts;
    /**
    * warm_pool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#warm_pool AutoscalingGroup#warm_pool}
    */
    readonly warmPool?: AutoscalingGroupWarmPool;
}
export interface AutoscalingGroupInitialLifecycleHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#default_result AutoscalingGroup#default_result}
    */
    readonly defaultResult?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#lifecycle_transition AutoscalingGroup#lifecycle_transition}
    */
    readonly lifecycleTransition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#notification_metadata AutoscalingGroup#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#notification_target_arn AutoscalingGroup#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#role_arn AutoscalingGroup#role_arn}
    */
    readonly roleArn?: string;
}
export declare function autoscalingGroupInitialLifecycleHookToTerraform(struct?: AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable): any;
export declare function autoscalingGroupInitialLifecycleHookToHclTerraform(struct?: AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable): any;
export declare class AutoscalingGroupInitialLifecycleHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable | undefined);
    private _defaultResult?;
    get defaultResult(): string;
    set defaultResult(value: string);
    resetDefaultResult(): void;
    get defaultResultInput(): string | undefined;
    private _heartbeatTimeout?;
    get heartbeatTimeout(): number;
    set heartbeatTimeout(value: number);
    resetHeartbeatTimeout(): void;
    get heartbeatTimeoutInput(): number | undefined;
    private _lifecycleTransition?;
    get lifecycleTransition(): string;
    set lifecycleTransition(value: string);
    get lifecycleTransitionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notificationMetadata?;
    get notificationMetadata(): string;
    set notificationMetadata(value: string);
    resetNotificationMetadata(): void;
    get notificationMetadataInput(): string | undefined;
    private _notificationTargetArn?;
    get notificationTargetArn(): string;
    set notificationTargetArn(value: string);
    resetNotificationTargetArn(): void;
    get notificationTargetArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
}
export declare class AutoscalingGroupInitialLifecycleHookList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupInitialLifecycleHookOutputReference;
}
export interface AutoscalingGroupInstanceRefreshPreferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#checkpoint_delay AutoscalingGroup#checkpoint_delay}
    */
    readonly checkpointDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}
    */
    readonly checkpointPercentages?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_warmup AutoscalingGroup#instance_warmup}
    */
    readonly instanceWarmup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}
    */
    readonly minHealthyPercentage?: number;
}
export declare function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesOutputReference | AutoscalingGroupInstanceRefreshPreferences): any;
export declare function autoscalingGroupInstanceRefreshPreferencesToHclTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesOutputReference | AutoscalingGroupInstanceRefreshPreferences): any;
export declare class AutoscalingGroupInstanceRefreshPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupInstanceRefreshPreferences | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefreshPreferences | undefined);
    private _checkpointDelay?;
    get checkpointDelay(): string;
    set checkpointDelay(value: string);
    resetCheckpointDelay(): void;
    get checkpointDelayInput(): string | undefined;
    private _checkpointPercentages?;
    get checkpointPercentages(): number[];
    set checkpointPercentages(value: number[]);
    resetCheckpointPercentages(): void;
    get checkpointPercentagesInput(): number[] | undefined;
    private _instanceWarmup?;
    get instanceWarmup(): string;
    set instanceWarmup(value: string);
    resetInstanceWarmup(): void;
    get instanceWarmupInput(): string | undefined;
    private _minHealthyPercentage?;
    get minHealthyPercentage(): number;
    set minHealthyPercentage(value: number);
    resetMinHealthyPercentage(): void;
    get minHealthyPercentageInput(): number | undefined;
}
export interface AutoscalingGroupInstanceRefresh {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#strategy AutoscalingGroup#strategy}
    */
    readonly strategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#triggers AutoscalingGroup#triggers}
    */
    readonly triggers?: string[];
    /**
    * preferences block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#preferences AutoscalingGroup#preferences}
    */
    readonly preferences?: AutoscalingGroupInstanceRefreshPreferences;
}
export declare function autoscalingGroupInstanceRefreshToTerraform(struct?: AutoscalingGroupInstanceRefreshOutputReference | AutoscalingGroupInstanceRefresh): any;
export declare function autoscalingGroupInstanceRefreshToHclTerraform(struct?: AutoscalingGroupInstanceRefreshOutputReference | AutoscalingGroupInstanceRefresh): any;
export declare class AutoscalingGroupInstanceRefreshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupInstanceRefresh | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefresh | undefined);
    private _strategy?;
    get strategy(): string;
    set strategy(value: string);
    get strategyInput(): string | undefined;
    private _triggers?;
    get triggers(): string[];
    set triggers(value: string[]);
    resetTriggers(): void;
    get triggersInput(): string[] | undefined;
    private _preferences;
    get preferences(): AutoscalingGroupInstanceRefreshPreferencesOutputReference;
    putPreferences(value: AutoscalingGroupInstanceRefreshPreferences): void;
    resetPreferences(): void;
    get preferencesInput(): AutoscalingGroupInstanceRefreshPreferences | undefined;
}
export interface AutoscalingGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#id AutoscalingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupLaunchTemplateToTerraform(struct?: AutoscalingGroupLaunchTemplateOutputReference | AutoscalingGroupLaunchTemplate): any;
export declare function autoscalingGroupLaunchTemplateToHclTerraform(struct?: AutoscalingGroupLaunchTemplateOutputReference | AutoscalingGroupLaunchTemplate): any;
export declare class AutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupLaunchTemplate | undefined;
    set internalValue(value: AutoscalingGroupLaunchTemplate | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}
    */
    readonly onDemandBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}
    */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}
    */
    readonly spotAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_instance_pools AutoscalingGroup#spot_instance_pools}
    */
    readonly spotInstancePools?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_max_price AutoscalingGroup#spot_max_price}
    */
    readonly spotMaxPrice?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference | AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare function autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference | AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare class AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined);
    private _onDemandAllocationStrategy?;
    get onDemandAllocationStrategy(): string;
    set onDemandAllocationStrategy(value: string);
    resetOnDemandAllocationStrategy(): void;
    get onDemandAllocationStrategyInput(): string | undefined;
    private _onDemandBaseCapacity?;
    get onDemandBaseCapacity(): number;
    set onDemandBaseCapacity(value: number);
    resetOnDemandBaseCapacity(): void;
    get onDemandBaseCapacityInput(): number | undefined;
    private _onDemandPercentageAboveBaseCapacity?;
    get onDemandPercentageAboveBaseCapacity(): number;
    set onDemandPercentageAboveBaseCapacity(value: number);
    resetOnDemandPercentageAboveBaseCapacity(): void;
    get onDemandPercentageAboveBaseCapacityInput(): number | undefined;
    private _spotAllocationStrategy?;
    get spotAllocationStrategy(): string;
    set spotAllocationStrategy(value: string);
    resetSpotAllocationStrategy(): void;
    get spotAllocationStrategyInput(): string | undefined;
    private _spotInstancePools?;
    get spotInstancePools(): number;
    set spotInstancePools(value: number);
    resetSpotInstancePools(): void;
    get spotInstancePoolsInput(): number | undefined;
    private _spotMaxPrice?;
    get spotMaxPrice(): string;
    set spotMaxPrice(value: string);
    resetSpotMaxPrice(): void;
    get spotMaxPriceInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined);
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
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined);
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
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_type AutoscalingGroup#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#weighted_capacity AutoscalingGroup#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): string;
    set weightedCapacity(value: string);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): string | undefined;
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): void;
    resetLaunchTemplateSpecification(): void;
    get launchTemplateSpecificationInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined;
}
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#override AutoscalingGroup#override}
    */
    readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | cdktf.IResolvable;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;
    private _override;
    get override(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList;
    putOverride(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | cdktf.IResolvable): void;
    resetOverride(): void;
    get overrideInput(): cdktf.IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicy {
    /**
    * instances_distribution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instances_distribution AutoscalingGroup#instances_distribution}
    */
    readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
}
export declare function autoscalingGroupMixedInstancesPolicyToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyOutputReference | AutoscalingGroupMixedInstancesPolicy): any;
export declare function autoscalingGroupMixedInstancesPolicyToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyOutputReference | AutoscalingGroupMixedInstancesPolicy): any;
export declare class AutoscalingGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicy | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicy | undefined);
    private _instancesDistribution;
    get instancesDistribution(): AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
    putInstancesDistribution(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution): void;
    resetInstancesDistribution(): void;
    get instancesDistributionInput(): AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined;
    private _launchTemplate;
    get launchTemplate(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
    putLaunchTemplate(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate): void;
    get launchTemplateInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined;
}
export interface AutoscalingGroupTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#key AutoscalingGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#propagate_at_launch AutoscalingGroup#propagate_at_launch}
    */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#value AutoscalingGroup#value}
    */
    readonly value: string;
}
export declare function autoscalingGroupTagToTerraform(struct?: AutoscalingGroupTag | cdktf.IResolvable): any;
export declare function autoscalingGroupTagToHclTerraform(struct?: AutoscalingGroupTag | cdktf.IResolvable): any;
export declare class AutoscalingGroupTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupTag | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupTag | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _propagateAtLaunch?;
    get propagateAtLaunch(): boolean | cdktf.IResolvable;
    set propagateAtLaunch(value: boolean | cdktf.IResolvable);
    get propagateAtLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingGroupTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupTagOutputReference;
}
export interface AutoscalingGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}
    */
    readonly delete?: string;
}
export declare function autoscalingGroupTimeoutsToTerraform(struct?: AutoscalingGroupTimeouts | cdktf.IResolvable): any;
export declare function autoscalingGroupTimeoutsToHclTerraform(struct?: AutoscalingGroupTimeouts | cdktf.IResolvable): any;
export declare class AutoscalingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
export interface AutoscalingGroupWarmPool {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}
    */
    readonly maxGroupPreparedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#pool_state AutoscalingGroup#pool_state}
    */
    readonly poolState?: string;
}
export declare function autoscalingGroupWarmPoolToTerraform(struct?: AutoscalingGroupWarmPoolOutputReference | AutoscalingGroupWarmPool): any;
export declare function autoscalingGroupWarmPoolToHclTerraform(struct?: AutoscalingGroupWarmPoolOutputReference | AutoscalingGroupWarmPool): any;
export declare class AutoscalingGroupWarmPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupWarmPool | undefined;
    set internalValue(value: AutoscalingGroupWarmPool | undefined);
    private _maxGroupPreparedCapacity?;
    get maxGroupPreparedCapacity(): number;
    set maxGroupPreparedCapacity(value: number);
    resetMaxGroupPreparedCapacity(): void;
    get maxGroupPreparedCapacityInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _poolState?;
    get poolState(): string;
    set poolState(value: string);
    resetPoolState(): void;
    get poolStateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group aws_autoscaling_group}
*/
export declare class AutoscalingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_group";
    /**
    * Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingGroup to import
    * @param importFromId The id of the existing AutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group aws_autoscaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingGroupConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _capacityRebalance?;
    get capacityRebalance(): boolean | cdktf.IResolvable;
    set capacityRebalance(value: boolean | cdktf.IResolvable);
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): boolean | cdktf.IResolvable | undefined;
    private _defaultCooldown?;
    get defaultCooldown(): number;
    set defaultCooldown(value: number);
    resetDefaultCooldown(): void;
    get defaultCooldownInput(): number | undefined;
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    resetDesiredCapacity(): void;
    get desiredCapacityInput(): number | undefined;
    private _enabledMetrics?;
    get enabledMetrics(): string[];
    set enabledMetrics(value: string[]);
    resetEnabledMetrics(): void;
    get enabledMetricsInput(): string[] | undefined;
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _forceDeleteWarmPool?;
    get forceDeleteWarmPool(): boolean | cdktf.IResolvable;
    set forceDeleteWarmPool(value: boolean | cdktf.IResolvable);
    resetForceDeleteWarmPool(): void;
    get forceDeleteWarmPoolInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheckGracePeriod?;
    get healthCheckGracePeriod(): number;
    set healthCheckGracePeriod(value: number);
    resetHealthCheckGracePeriod(): void;
    get healthCheckGracePeriodInput(): number | undefined;
    private _healthCheckType?;
    get healthCheckType(): string;
    set healthCheckType(value: string);
    resetHealthCheckType(): void;
    get healthCheckTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _launchConfiguration?;
    get launchConfiguration(): string;
    set launchConfiguration(value: string);
    resetLaunchConfiguration(): void;
    get launchConfigurationInput(): string | undefined;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[] | undefined;
    private _maxInstanceLifetime?;
    get maxInstanceLifetime(): number;
    set maxInstanceLifetime(value: number);
    resetMaxInstanceLifetime(): void;
    get maxInstanceLifetimeInput(): number | undefined;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number | undefined;
    private _metricsGranularity?;
    get metricsGranularity(): string;
    set metricsGranularity(value: string);
    resetMetricsGranularity(): void;
    get metricsGranularityInput(): string | undefined;
    private _minElbCapacity?;
    get minElbCapacity(): number;
    set minElbCapacity(value: number);
    resetMinElbCapacity(): void;
    get minElbCapacityInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    private _protectFromScaleIn?;
    get protectFromScaleIn(): boolean | cdktf.IResolvable;
    set protectFromScaleIn(value: boolean | cdktf.IResolvable);
    resetProtectFromScaleIn(): void;
    get protectFromScaleInInput(): boolean | cdktf.IResolvable | undefined;
    private _serviceLinkedRoleArn?;
    get serviceLinkedRoleArn(): string;
    set serviceLinkedRoleArn(value: string);
    resetServiceLinkedRoleArn(): void;
    get serviceLinkedRoleArnInput(): string | undefined;
    private _suspendedProcesses?;
    get suspendedProcesses(): string[];
    set suspendedProcesses(value: string[]);
    resetSuspendedProcesses(): void;
    get suspendedProcessesInput(): string[] | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    }[] | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    }[] | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    }[] | undefined;
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[] | undefined;
    private _terminationPolicies?;
    get terminationPolicies(): string[];
    set terminationPolicies(value: string[]);
    resetTerminationPolicies(): void;
    get terminationPoliciesInput(): string[] | undefined;
    private _vpcZoneIdentifier?;
    get vpcZoneIdentifier(): string[];
    set vpcZoneIdentifier(value: string[]);
    resetVpcZoneIdentifier(): void;
    get vpcZoneIdentifierInput(): string[] | undefined;
    private _waitForCapacityTimeout?;
    get waitForCapacityTimeout(): string;
    set waitForCapacityTimeout(value: string);
    resetWaitForCapacityTimeout(): void;
    get waitForCapacityTimeoutInput(): string | undefined;
    private _waitForElbCapacity?;
    get waitForElbCapacity(): number;
    set waitForElbCapacity(value: number);
    resetWaitForElbCapacity(): void;
    get waitForElbCapacityInput(): number | undefined;
    private _initialLifecycleHook;
    get initialLifecycleHook(): AutoscalingGroupInitialLifecycleHookList;
    putInitialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable): void;
    resetInitialLifecycleHook(): void;
    get initialLifecycleHookInput(): cdktf.IResolvable | AutoscalingGroupInitialLifecycleHook[] | undefined;
    private _instanceRefresh;
    get instanceRefresh(): AutoscalingGroupInstanceRefreshOutputReference;
    putInstanceRefresh(value: AutoscalingGroupInstanceRefresh): void;
    resetInstanceRefresh(): void;
    get instanceRefreshInput(): AutoscalingGroupInstanceRefresh | undefined;
    private _launchTemplate;
    get launchTemplate(): AutoscalingGroupLaunchTemplateOutputReference;
    putLaunchTemplate(value: AutoscalingGroupLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): AutoscalingGroupLaunchTemplate | undefined;
    private _mixedInstancesPolicy;
    get mixedInstancesPolicy(): AutoscalingGroupMixedInstancesPolicyOutputReference;
    putMixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy): void;
    resetMixedInstancesPolicy(): void;
    get mixedInstancesPolicyInput(): AutoscalingGroupMixedInstancesPolicy | undefined;
    private _tag;
    get tag(): AutoscalingGroupTagList;
    putTag(value: AutoscalingGroupTag[] | cdktf.IResolvable): void;
    resetTag(): void;
    get tagInput(): cdktf.IResolvable | AutoscalingGroupTag[] | undefined;
    private _timeouts;
    get timeouts(): AutoscalingGroupTimeoutsOutputReference;
    putTimeouts(value: AutoscalingGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AutoscalingGroupTimeouts | undefined;
    private _warmPool;
    get warmPool(): AutoscalingGroupWarmPoolOutputReference;
    putWarmPool(value: AutoscalingGroupWarmPool): void;
    resetWarmPool(): void;
    get warmPoolInput(): AutoscalingGroupWarmPool | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
