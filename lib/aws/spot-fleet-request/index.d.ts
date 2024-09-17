/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}
    */
    readonly iamFleetRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#id SpotFleetRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}
    */
    readonly instanceInterruptionBehaviour?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}
    */
    readonly onDemandMaxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags_all SpotFleetRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}
    */
    readonly targetCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#valid_from SpotFleetRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#valid_until SpotFleetRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * launch_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}
    */
    readonly launchSpecification?: SpotFleetRequestLaunchSpecification[] | cdktf.IResolvable;
    /**
    * launch_template_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}
    */
    readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[] | cdktf.IResolvable;
    /**
    * spot_maintenance_strategies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}
    */
    readonly spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#timeouts SpotFleetRequest#timeouts}
    */
    readonly timeouts?: SpotFleetRequestTimeouts;
}
export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference;
}
export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}
    */
    readonly virtualName: string;
}
export declare function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    get virtualNameInput(): string | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference;
}
export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationRootBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecificationRootBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference;
}
export interface SpotFleetRequestLaunchSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ami SpotFleetRequest#ami}
    */
    readonly ami: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}
    */
    readonly iamInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#key_name SpotFleetRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#monitoring SpotFleetRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#placement_group SpotFleetRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}
    */
    readonly placementTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#user_data SpotFleetRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ebs_block_device SpotFleetRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#root_block_device SpotFleetRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotFleetRequestLaunchSpecificationRootBlockDevice[] | cdktf.IResolvable;
}
export declare function spotFleetRequestLaunchSpecificationToTerraform(struct?: SpotFleetRequestLaunchSpecification | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationToHclTerraform(struct?: SpotFleetRequestLaunchSpecification | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecification | cdktf.IResolvable | undefined);
    private _ami?;
    get ami(): string;
    set ami(value: string);
    get amiInput(): string | undefined;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): boolean | cdktf.IResolvable;
    set associatePublicIpAddress(value: boolean | cdktf.IResolvable);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): string;
    set iamInstanceProfile(value: string);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): string | undefined;
    private _iamInstanceProfileArn?;
    get iamInstanceProfileArn(): string;
    set iamInstanceProfileArn(value: string);
    resetIamInstanceProfileArn(): void;
    get iamInstanceProfileArnInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _monitoring?;
    get monitoring(): boolean | cdktf.IResolvable;
    set monitoring(value: boolean | cdktf.IResolvable);
    resetMonitoring(): void;
    get monitoringInput(): boolean | cdktf.IResolvable | undefined;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    private _placementTenancy?;
    get placementTenancy(): string;
    set placementTenancy(value: string);
    resetPlacementTenancy(): void;
    get placementTenancyInput(): string | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): string;
    set weightedCapacity(value: string);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): string | undefined;
    private _ebsBlockDevice;
    get ebsBlockDevice(): SpotFleetRequestLaunchSpecificationEbsBlockDeviceList;
    putEbsBlockDevice(value: SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | undefined;
    private _rootBlockDevice;
    get rootBlockDevice(): SpotFleetRequestLaunchSpecificationRootBlockDeviceList;
    putRootBlockDevice(value: SpotFleetRequestLaunchSpecificationRootBlockDevice[] | cdktf.IResolvable): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice[] | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationOutputReference;
}
export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#id SpotFleetRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#name SpotFleetRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#version SpotFleetRequest#version}
    */
    readonly version?: string;
}
export declare function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare class SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#priority SpotFleetRequest#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable | undefined);
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
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
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
export declare class SpotFleetRequestLaunchTemplateConfigOverridesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchTemplateConfigOverrides[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchTemplateConfigOverridesOutputReference;
}
export interface SpotFleetRequestLaunchTemplateConfig {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#launch_template_specification SpotFleetRequest#launch_template_specification}
    */
    readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#overrides SpotFleetRequest#overrides}
    */
    readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[] | cdktf.IResolvable;
}
export declare function spotFleetRequestLaunchTemplateConfigToTerraform(struct?: SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchTemplateConfigToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    private _overrides;
    get overrides(): SpotFleetRequestLaunchTemplateConfigOverridesList;
    putOverrides(value: SpotFleetRequestLaunchTemplateConfigOverrides[] | cdktf.IResolvable): void;
    resetOverrides(): void;
    get overridesInput(): cdktf.IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides[] | undefined;
}
export declare class SpotFleetRequestLaunchTemplateConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchTemplateConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchTemplateConfigOutputReference;
}
export interface SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}
    */
    readonly replacementStrategy?: string;
}
export declare function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference | SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any;
export declare function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference | SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any;
export declare class SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined;
    set internalValue(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined);
    private _replacementStrategy?;
    get replacementStrategy(): string;
    set replacementStrategy(value: string);
    resetReplacementStrategy(): void;
    get replacementStrategyInput(): string | undefined;
}
export interface SpotFleetRequestSpotMaintenanceStrategies {
    /**
    * capacity_rebalance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}
    */
    readonly capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
}
export declare function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesOutputReference | SpotFleetRequestSpotMaintenanceStrategies): any;
export declare function spotFleetRequestSpotMaintenanceStrategiesToHclTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesOutputReference | SpotFleetRequestSpotMaintenanceStrategies): any;
export declare class SpotFleetRequestSpotMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestSpotMaintenanceStrategies | undefined;
    set internalValue(value: SpotFleetRequestSpotMaintenanceStrategies | undefined);
    private _capacityRebalance;
    get capacityRebalance(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;
    putCapacityRebalance(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): void;
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined;
}
export interface SpotFleetRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#create SpotFleetRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete SpotFleetRequest#delete}
    */
    readonly delete?: string;
}
export declare function spotFleetRequestTimeoutsToTerraform(struct?: SpotFleetRequestTimeouts | cdktf.IResolvable): any;
export declare function spotFleetRequestTimeoutsToHclTerraform(struct?: SpotFleetRequestTimeouts | cdktf.IResolvable): any;
export declare class SpotFleetRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request aws_spot_fleet_request}
*/
export declare class SpotFleetRequest extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_spot_fleet_request";
    /**
    * Generates CDKTF code for importing a SpotFleetRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpotFleetRequest to import
    * @param importFromId The id of the existing SpotFleetRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpotFleetRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request aws_spot_fleet_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotFleetRequestConfig
    */
    constructor(scope: Construct, id: string, config: SpotFleetRequestConfig);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    get clientToken(): string;
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string | undefined;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
    private _iamFleetRole?;
    get iamFleetRole(): string;
    set iamFleetRole(value: string);
    get iamFleetRoleInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceInterruptionBehaviour?;
    get instanceInterruptionBehaviour(): string;
    set instanceInterruptionBehaviour(value: string);
    resetInstanceInterruptionBehaviour(): void;
    get instanceInterruptionBehaviourInput(): string | undefined;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number | undefined;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[] | undefined;
    private _onDemandAllocationStrategy?;
    get onDemandAllocationStrategy(): string;
    set onDemandAllocationStrategy(value: string);
    resetOnDemandAllocationStrategy(): void;
    get onDemandAllocationStrategyInput(): string | undefined;
    private _onDemandMaxTotalPrice?;
    get onDemandMaxTotalPrice(): string;
    set onDemandMaxTotalPrice(value: string);
    resetOnDemandMaxTotalPrice(): void;
    get onDemandMaxTotalPriceInput(): string | undefined;
    private _onDemandTargetCapacity?;
    get onDemandTargetCapacity(): number;
    set onDemandTargetCapacity(value: number);
    resetOnDemandTargetCapacity(): void;
    get onDemandTargetCapacityInput(): number | undefined;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    get spotRequestState(): string;
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
    private _targetCapacity?;
    get targetCapacity(): number;
    set targetCapacity(value: number);
    get targetCapacityInput(): number | undefined;
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[] | undefined;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable | undefined;
    private _validFrom?;
    get validFrom(): string;
    set validFrom(value: string);
    resetValidFrom(): void;
    get validFromInput(): string | undefined;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string | undefined;
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean | cdktf.IResolvable;
    set waitForFulfillment(value: boolean | cdktf.IResolvable);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | cdktf.IResolvable | undefined;
    private _launchSpecification;
    get launchSpecification(): SpotFleetRequestLaunchSpecificationList;
    putLaunchSpecification(value: SpotFleetRequestLaunchSpecification[] | cdktf.IResolvable): void;
    resetLaunchSpecification(): void;
    get launchSpecificationInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecification[] | undefined;
    private _launchTemplateConfig;
    get launchTemplateConfig(): SpotFleetRequestLaunchTemplateConfigList;
    putLaunchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[] | cdktf.IResolvable): void;
    resetLaunchTemplateConfig(): void;
    get launchTemplateConfigInput(): cdktf.IResolvable | SpotFleetRequestLaunchTemplateConfig[] | undefined;
    private _spotMaintenanceStrategies;
    get spotMaintenanceStrategies(): SpotFleetRequestSpotMaintenanceStrategiesOutputReference;
    putSpotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies): void;
    resetSpotMaintenanceStrategies(): void;
    get spotMaintenanceStrategiesInput(): SpotFleetRequestSpotMaintenanceStrategies | undefined;
    private _timeouts;
    get timeouts(): SpotFleetRequestTimeoutsOutputReference;
    putTimeouts(value: SpotFleetRequestTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SpotFleetRequestTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
