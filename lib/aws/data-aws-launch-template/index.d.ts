/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#id DataAwsLaunchTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#tags DataAwsLaunchTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#filter DataAwsLaunchTemplate#filter}
    */
    readonly filter?: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable;
}
export interface DataAwsLaunchTemplateBlockDeviceMappingsEbs {
}
export declare function dataAwsLaunchTemplateBlockDeviceMappingsEbsToTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappingsEbs): any;
export declare function dataAwsLaunchTemplateBlockDeviceMappingsEbsToHclTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappingsEbs): any;
export declare class DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateBlockDeviceMappingsEbs | undefined;
    set internalValue(value: DataAwsLaunchTemplateBlockDeviceMappingsEbs | undefined);
    get deleteOnTermination(): string;
    get encrypted(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchTemplateBlockDeviceMappingsEbsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference;
}
export interface DataAwsLaunchTemplateBlockDeviceMappings {
}
export declare function dataAwsLaunchTemplateBlockDeviceMappingsToTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappings): any;
export declare function dataAwsLaunchTemplateBlockDeviceMappingsToHclTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappings): any;
export declare class DataAwsLaunchTemplateBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateBlockDeviceMappings | undefined;
    set internalValue(value: DataAwsLaunchTemplateBlockDeviceMappings | undefined);
    get deviceName(): string;
    private _ebs;
    get ebs(): DataAwsLaunchTemplateBlockDeviceMappingsEbsList;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsLaunchTemplateBlockDeviceMappingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateBlockDeviceMappingsOutputReference;
}
export interface DataAwsLaunchTemplateCreditSpecification {
}
export declare function dataAwsLaunchTemplateCreditSpecificationToTerraform(struct?: DataAwsLaunchTemplateCreditSpecification): any;
export declare function dataAwsLaunchTemplateCreditSpecificationToHclTerraform(struct?: DataAwsLaunchTemplateCreditSpecification): any;
export declare class DataAwsLaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateCreditSpecification | undefined;
    set internalValue(value: DataAwsLaunchTemplateCreditSpecification | undefined);
    get cpuCredits(): string;
}
export declare class DataAwsLaunchTemplateCreditSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateCreditSpecificationOutputReference;
}
export interface DataAwsLaunchTemplateElasticGpuSpecifications {
}
export declare function dataAwsLaunchTemplateElasticGpuSpecificationsToTerraform(struct?: DataAwsLaunchTemplateElasticGpuSpecifications): any;
export declare function dataAwsLaunchTemplateElasticGpuSpecificationsToHclTerraform(struct?: DataAwsLaunchTemplateElasticGpuSpecifications): any;
export declare class DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateElasticGpuSpecifications | undefined;
    set internalValue(value: DataAwsLaunchTemplateElasticGpuSpecifications | undefined);
    get type(): string;
}
export declare class DataAwsLaunchTemplateElasticGpuSpecificationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference;
}
export interface DataAwsLaunchTemplateEnclaveOptions {
}
export declare function dataAwsLaunchTemplateEnclaveOptionsToTerraform(struct?: DataAwsLaunchTemplateEnclaveOptions): any;
export declare function dataAwsLaunchTemplateEnclaveOptionsToHclTerraform(struct?: DataAwsLaunchTemplateEnclaveOptions): any;
export declare class DataAwsLaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateEnclaveOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateEnclaveOptions | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsLaunchTemplateEnclaveOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateEnclaveOptionsOutputReference;
}
export interface DataAwsLaunchTemplateHibernationOptions {
}
export declare function dataAwsLaunchTemplateHibernationOptionsToTerraform(struct?: DataAwsLaunchTemplateHibernationOptions): any;
export declare function dataAwsLaunchTemplateHibernationOptionsToHclTerraform(struct?: DataAwsLaunchTemplateHibernationOptions): any;
export declare class DataAwsLaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateHibernationOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateHibernationOptions | undefined);
    get configured(): cdktf.IResolvable;
}
export declare class DataAwsLaunchTemplateHibernationOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateHibernationOptionsOutputReference;
}
export interface DataAwsLaunchTemplateIamInstanceProfile {
}
export declare function dataAwsLaunchTemplateIamInstanceProfileToTerraform(struct?: DataAwsLaunchTemplateIamInstanceProfile): any;
export declare function dataAwsLaunchTemplateIamInstanceProfileToHclTerraform(struct?: DataAwsLaunchTemplateIamInstanceProfile): any;
export declare class DataAwsLaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateIamInstanceProfile | undefined;
    set internalValue(value: DataAwsLaunchTemplateIamInstanceProfile | undefined);
    get arn(): string;
    get name(): string;
}
export declare class DataAwsLaunchTemplateIamInstanceProfileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateIamInstanceProfileOutputReference;
}
export interface DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions {
}
export declare function dataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare function dataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions | undefined);
    get blockDurationMinutes(): number;
    get instanceInterruptionBehavior(): string;
    get maxPrice(): string;
    get spotInstanceType(): string;
    get validUntil(): string;
}
export declare class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
}
export interface DataAwsLaunchTemplateInstanceMarketOptions {
}
export declare function dataAwsLaunchTemplateInstanceMarketOptionsToTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptions): any;
export declare function dataAwsLaunchTemplateInstanceMarketOptionsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptions): any;
export declare class DataAwsLaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceMarketOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceMarketOptions | undefined);
    get marketType(): string;
    private _spotOptions;
    get spotOptions(): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList;
}
export declare class DataAwsLaunchTemplateInstanceMarketOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceMarketOptionsOutputReference;
}
export interface DataAwsLaunchTemplateMetadataOptions {
}
export declare function dataAwsLaunchTemplateMetadataOptionsToTerraform(struct?: DataAwsLaunchTemplateMetadataOptions): any;
export declare function dataAwsLaunchTemplateMetadataOptionsToHclTerraform(struct?: DataAwsLaunchTemplateMetadataOptions): any;
export declare class DataAwsLaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateMetadataOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateMetadataOptions | undefined);
    get httpEndpoint(): string;
    get httpProtocolIpv6(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
    get instanceMetadataTags(): string;
}
export declare class DataAwsLaunchTemplateMetadataOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateMetadataOptionsOutputReference;
}
export interface DataAwsLaunchTemplateMonitoring {
}
export declare function dataAwsLaunchTemplateMonitoringToTerraform(struct?: DataAwsLaunchTemplateMonitoring): any;
export declare function dataAwsLaunchTemplateMonitoringToHclTerraform(struct?: DataAwsLaunchTemplateMonitoring): any;
export declare class DataAwsLaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateMonitoring | undefined;
    set internalValue(value: DataAwsLaunchTemplateMonitoring | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsLaunchTemplateMonitoringList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateMonitoringOutputReference;
}
export interface DataAwsLaunchTemplateNetworkInterfaces {
}
export declare function dataAwsLaunchTemplateNetworkInterfacesToTerraform(struct?: DataAwsLaunchTemplateNetworkInterfaces): any;
export declare function dataAwsLaunchTemplateNetworkInterfacesToHclTerraform(struct?: DataAwsLaunchTemplateNetworkInterfaces): any;
export declare class DataAwsLaunchTemplateNetworkInterfacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateNetworkInterfaces | undefined;
    set internalValue(value: DataAwsLaunchTemplateNetworkInterfaces | undefined);
    get associateCarrierIpAddress(): string;
    get associatePublicIpAddress(): string;
    get deleteOnTermination(): string;
    get description(): string;
    get deviceIndex(): number;
    get interfaceType(): string;
    get ipv4AddressCount(): number;
    get ipv4Addresses(): string[];
    get ipv6AddressCount(): number;
    get ipv6Addresses(): string[];
    get networkCardIndex(): number;
    get networkInterfaceId(): string;
    get privateIpAddress(): string;
    get securityGroups(): string[];
    get subnetId(): string;
}
export declare class DataAwsLaunchTemplateNetworkInterfacesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateNetworkInterfacesOutputReference;
}
export interface DataAwsLaunchTemplatePlacement {
}
export declare function dataAwsLaunchTemplatePlacementToTerraform(struct?: DataAwsLaunchTemplatePlacement): any;
export declare function dataAwsLaunchTemplatePlacementToHclTerraform(struct?: DataAwsLaunchTemplatePlacement): any;
export declare class DataAwsLaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplatePlacement | undefined;
    set internalValue(value: DataAwsLaunchTemplatePlacement | undefined);
    get affinity(): string;
    get availabilityZone(): string;
    get groupName(): string;
    get hostId(): string;
    get hostResourceGroupArn(): string;
    get partitionNumber(): number;
    get spreadDomain(): string;
    get tenancy(): string;
}
export declare class DataAwsLaunchTemplatePlacementList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplatePlacementOutputReference;
}
export interface DataAwsLaunchTemplateTagSpecifications {
}
export declare function dataAwsLaunchTemplateTagSpecificationsToTerraform(struct?: DataAwsLaunchTemplateTagSpecifications): any;
export declare function dataAwsLaunchTemplateTagSpecificationsToHclTerraform(struct?: DataAwsLaunchTemplateTagSpecifications): any;
export declare class DataAwsLaunchTemplateTagSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateTagSpecifications | undefined;
    set internalValue(value: DataAwsLaunchTemplateTagSpecifications | undefined);
    get resourceType(): string;
    private _tags;
    get tags(): cdktf.StringMap;
}
export declare class DataAwsLaunchTemplateTagSpecificationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateTagSpecificationsOutputReference;
}
export interface DataAwsLaunchTemplateFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#values DataAwsLaunchTemplate#values}
    */
    readonly values: string[];
}
export declare function dataAwsLaunchTemplateFilterToTerraform(struct?: DataAwsLaunchTemplateFilter | cdktf.IResolvable): any;
export declare function dataAwsLaunchTemplateFilterToHclTerraform(struct?: DataAwsLaunchTemplateFilter | cdktf.IResolvable): any;
export declare class DataAwsLaunchTemplateFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLaunchTemplateFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsLaunchTemplateFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLaunchTemplateFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template aws_launch_template}
*/
export declare class DataAwsLaunchTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_launch_template";
    /**
    * Generates CDKTF code for importing a DataAwsLaunchTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLaunchTemplate to import
    * @param importFromId The id of the existing DataAwsLaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLaunchTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/launch_template aws_launch_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchTemplateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLaunchTemplateConfig);
    get arn(): string;
    private _blockDeviceMappings;
    get blockDeviceMappings(): DataAwsLaunchTemplateBlockDeviceMappingsList;
    private _creditSpecification;
    get creditSpecification(): DataAwsLaunchTemplateCreditSpecificationList;
    get defaultVersion(): number;
    get description(): string;
    get disableApiTermination(): cdktf.IResolvable;
    get ebsOptimized(): string;
    private _elasticGpuSpecifications;
    get elasticGpuSpecifications(): DataAwsLaunchTemplateElasticGpuSpecificationsList;
    private _enclaveOptions;
    get enclaveOptions(): DataAwsLaunchTemplateEnclaveOptionsList;
    private _hibernationOptions;
    get hibernationOptions(): DataAwsLaunchTemplateHibernationOptionsList;
    private _iamInstanceProfile;
    get iamInstanceProfile(): DataAwsLaunchTemplateIamInstanceProfileList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageId(): string;
    get instanceInitiatedShutdownBehavior(): string;
    private _instanceMarketOptions;
    get instanceMarketOptions(): DataAwsLaunchTemplateInstanceMarketOptionsList;
    get instanceType(): string;
    get kernelId(): string;
    get keyName(): string;
    get latestVersion(): number;
    private _metadataOptions;
    get metadataOptions(): DataAwsLaunchTemplateMetadataOptionsList;
    private _monitoring;
    get monitoring(): DataAwsLaunchTemplateMonitoringList;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _networkInterfaces;
    get networkInterfaces(): DataAwsLaunchTemplateNetworkInterfacesList;
    private _placement;
    get placement(): DataAwsLaunchTemplatePlacementList;
    get ramDiskId(): string;
    get securityGroupNames(): string[];
    private _tagSpecifications;
    get tagSpecifications(): DataAwsLaunchTemplateTagSpecificationsList;
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
    get userData(): string;
    get vpcSecurityGroupIds(): string[];
    private _filter;
    get filter(): DataAwsLaunchTemplateFilterList;
    putFilter(value: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsLaunchTemplateFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
