/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#default_cores DataAwsEc2InstanceType#default_cores}
    */
    readonly defaultCores?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#default_threads_per_core DataAwsEc2InstanceType#default_threads_per_core}
    */
    readonly defaultThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#hypervisor DataAwsEc2InstanceType#hypervisor}
    */
    readonly hypervisor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#id DataAwsEc2InstanceType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#maximum_ipv6_addresses_per_interface DataAwsEc2InstanceType#maximum_ipv6_addresses_per_interface}
    */
    readonly maximumIpv6AddressesPerInterface?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#total_fpga_memory DataAwsEc2InstanceType#total_fpga_memory}
    */
    readonly totalFpgaMemory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#total_gpu_memory DataAwsEc2InstanceType#total_gpu_memory}
    */
    readonly totalGpuMemory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#total_instance_storage DataAwsEc2InstanceType#total_instance_storage}
    */
    readonly totalInstanceStorage?: number;
    /**
    * fpgas block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#fpgas DataAwsEc2InstanceType#fpgas}
    */
    readonly fpgas?: DataAwsEc2InstanceTypeFpgas[] | cdktf.IResolvable;
    /**
    * gpus block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#gpus DataAwsEc2InstanceType#gpus}
    */
    readonly gpus?: DataAwsEc2InstanceTypeGpus[] | cdktf.IResolvable;
    /**
    * inference_accelerators block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#inference_accelerators DataAwsEc2InstanceType#inference_accelerators}
    */
    readonly inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[] | cdktf.IResolvable;
    /**
    * instance_disks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#instance_disks DataAwsEc2InstanceType#instance_disks}
    */
    readonly instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[] | cdktf.IResolvable;
}
export interface DataAwsEc2InstanceTypeFpgas {
}
export declare function dataAwsEc2InstanceTypeFpgasToTerraform(struct?: DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeFpgasToHclTerraform(struct?: DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeFpgasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable | undefined);
    get count(): number;
    get manufacturer(): string;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeFpgasList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2InstanceTypeFpgas[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeFpgasOutputReference;
}
export interface DataAwsEc2InstanceTypeGpus {
}
export declare function dataAwsEc2InstanceTypeGpusToTerraform(struct?: DataAwsEc2InstanceTypeGpus | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeGpusToHclTerraform(struct?: DataAwsEc2InstanceTypeGpus | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeGpusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeGpus | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeGpus | cdktf.IResolvable | undefined);
    get count(): number;
    get manufacturer(): string;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeGpusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2InstanceTypeGpus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeGpusOutputReference;
}
export interface DataAwsEc2InstanceTypeInferenceAccelerators {
}
export declare function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeInferenceAcceleratorsToHclTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable | undefined);
    get count(): number;
    get manufacturer(): string;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeInferenceAcceleratorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2InstanceTypeInferenceAccelerators[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference;
}
export interface DataAwsEc2InstanceTypeInstanceDisks {
}
export declare function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeInstanceDisksToHclTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeInstanceDisksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable | undefined);
    get count(): number;
    get size(): number;
    get type(): string;
}
export declare class DataAwsEc2InstanceTypeInstanceDisksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2InstanceTypeInstanceDisks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeInstanceDisksOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type aws_ec2_instance_type}
*/
export declare class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_instance_type";
    /**
    * Generates CDKTF code for importing a DataAwsEc2InstanceType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2InstanceType to import
    * @param importFromId The id of the existing DataAwsEc2InstanceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2InstanceType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_instance_type aws_ec2_instance_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig);
    get autoRecoverySupported(): cdktf.IResolvable;
    get bareMetal(): cdktf.IResolvable;
    get burstablePerformanceSupported(): cdktf.IResolvable;
    get currentGeneration(): cdktf.IResolvable;
    get dedicatedHostsSupported(): cdktf.IResolvable;
    private _defaultCores?;
    get defaultCores(): number;
    set defaultCores(value: number);
    resetDefaultCores(): void;
    get defaultCoresInput(): number | undefined;
    private _defaultThreadsPerCore?;
    get defaultThreadsPerCore(): number;
    set defaultThreadsPerCore(value: number);
    resetDefaultThreadsPerCore(): void;
    get defaultThreadsPerCoreInput(): number | undefined;
    get defaultVcpus(): number;
    get ebsEncryptionSupport(): string;
    get ebsNvmeSupport(): string;
    get ebsOptimizedSupport(): string;
    get ebsPerformanceBaselineBandwidth(): number;
    get ebsPerformanceBaselineIops(): number;
    get ebsPerformanceBaselineThroughput(): number;
    get ebsPerformanceMaximumBandwidth(): number;
    get ebsPerformanceMaximumIops(): number;
    get ebsPerformanceMaximumThroughput(): number;
    get efaSupported(): cdktf.IResolvable;
    get enaSupport(): string;
    get encryptionInTransitSupported(): cdktf.IResolvable;
    get freeTierEligible(): cdktf.IResolvable;
    get hibernationSupported(): cdktf.IResolvable;
    private _hypervisor?;
    get hypervisor(): string;
    set hypervisor(value: string);
    resetHypervisor(): void;
    get hypervisorInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceStorageSupported(): cdktf.IResolvable;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    get ipv6Supported(): cdktf.IResolvable;
    get maximumIpv4AddressesPerInterface(): number;
    private _maximumIpv6AddressesPerInterface?;
    get maximumIpv6AddressesPerInterface(): number;
    set maximumIpv6AddressesPerInterface(value: number);
    resetMaximumIpv6AddressesPerInterface(): void;
    get maximumIpv6AddressesPerInterfaceInput(): number | undefined;
    get maximumNetworkInterfaces(): number;
    get memorySize(): number;
    get networkPerformance(): string;
    get supportedArchitectures(): string[];
    get supportedPlacementStrategies(): string[];
    get supportedRootDeviceTypes(): string[];
    get supportedUsagesClasses(): string[];
    get supportedVirtualizationTypes(): string[];
    get sustainedClockSpeed(): number;
    private _totalFpgaMemory?;
    get totalFpgaMemory(): number;
    set totalFpgaMemory(value: number);
    resetTotalFpgaMemory(): void;
    get totalFpgaMemoryInput(): number | undefined;
    private _totalGpuMemory?;
    get totalGpuMemory(): number;
    set totalGpuMemory(value: number);
    resetTotalGpuMemory(): void;
    get totalGpuMemoryInput(): number | undefined;
    private _totalInstanceStorage?;
    get totalInstanceStorage(): number;
    set totalInstanceStorage(value: number);
    resetTotalInstanceStorage(): void;
    get totalInstanceStorageInput(): number | undefined;
    get validCores(): number[];
    get validThreadsPerCore(): number[];
    private _fpgas;
    get fpgas(): DataAwsEc2InstanceTypeFpgasList;
    putFpgas(value: DataAwsEc2InstanceTypeFpgas[] | cdktf.IResolvable): void;
    resetFpgas(): void;
    get fpgasInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeFpgas[] | undefined;
    private _gpus;
    get gpus(): DataAwsEc2InstanceTypeGpusList;
    putGpus(value: DataAwsEc2InstanceTypeGpus[] | cdktf.IResolvable): void;
    resetGpus(): void;
    get gpusInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeGpus[] | undefined;
    private _inferenceAccelerators;
    get inferenceAccelerators(): DataAwsEc2InstanceTypeInferenceAcceleratorsList;
    putInferenceAccelerators(value: DataAwsEc2InstanceTypeInferenceAccelerators[] | cdktf.IResolvable): void;
    resetInferenceAccelerators(): void;
    get inferenceAcceleratorsInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeInferenceAccelerators[] | undefined;
    private _instanceDisks;
    get instanceDisks(): DataAwsEc2InstanceTypeInstanceDisksList;
    putInstanceDisks(value: DataAwsEc2InstanceTypeInstanceDisks[] | cdktf.IResolvable): void;
    resetInstanceDisks(): void;
    get instanceDisksInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeInstanceDisks[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
