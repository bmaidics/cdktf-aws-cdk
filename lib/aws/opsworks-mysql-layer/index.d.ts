/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksMysqlLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#id OpsworksMysqlLayer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#name OpsworksMysqlLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}
    */
    readonly rootPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}
    */
    readonly rootPasswordOnAllInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * cloudwatch_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#cloudwatch_configuration OpsworksMysqlLayer#cloudwatch_configuration}
    */
    readonly cloudwatchConfiguration?: OpsworksMysqlLayerCloudwatchConfiguration;
    /**
    * ebs_volume block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#ebs_volume OpsworksMysqlLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksMysqlLayerEbsVolume[] | cdktf.IResolvable;
}
export interface OpsworksMysqlLayerCloudwatchConfigurationLogStreams {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}
    */
    readonly batchCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}
    */
    readonly bufferDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}
    */
    readonly datetimeFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#file OpsworksMysqlLayer#file}
    */
    readonly file: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}
    */
    readonly fileFingerprintLines?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}
    */
    readonly initialPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}
    */
    readonly multilineStartPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}
    */
    readonly timeZone?: string;
}
export declare function opsworksMysqlLayerCloudwatchConfigurationLogStreamsToTerraform(struct?: OpsworksMysqlLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare function opsworksMysqlLayerCloudwatchConfigurationLogStreamsToHclTerraform(struct?: OpsworksMysqlLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare class OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksMysqlLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksMysqlLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined);
    private _batchCount?;
    get batchCount(): number;
    set batchCount(value: number);
    resetBatchCount(): void;
    get batchCountInput(): number | undefined;
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _bufferDuration?;
    get bufferDuration(): number;
    set bufferDuration(value: number);
    resetBufferDuration(): void;
    get bufferDurationInput(): number | undefined;
    private _datetimeFormat?;
    get datetimeFormat(): string;
    set datetimeFormat(value: string);
    resetDatetimeFormat(): void;
    get datetimeFormatInput(): string | undefined;
    private _encoding?;
    get encoding(): string;
    set encoding(value: string);
    resetEncoding(): void;
    get encodingInput(): string | undefined;
    private _file?;
    get file(): string;
    set file(value: string);
    get fileInput(): string | undefined;
    private _fileFingerprintLines?;
    get fileFingerprintLines(): string;
    set fileFingerprintLines(value: string);
    resetFileFingerprintLines(): void;
    get fileFingerprintLinesInput(): string | undefined;
    private _initialPosition?;
    get initialPosition(): string;
    set initialPosition(value: string);
    resetInitialPosition(): void;
    get initialPositionInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _multilineStartPattern?;
    get multilineStartPattern(): string;
    set multilineStartPattern(value: string);
    resetMultilineStartPattern(): void;
    get multilineStartPatternInput(): string | undefined;
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    resetTimeZone(): void;
    get timeZoneInput(): string | undefined;
}
export declare class OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksMysqlLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference;
}
export interface OpsworksMysqlLayerCloudwatchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * log_streams block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#log_streams OpsworksMysqlLayer#log_streams}
    */
    readonly logStreams?: OpsworksMysqlLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
}
export declare function opsworksMysqlLayerCloudwatchConfigurationToTerraform(struct?: OpsworksMysqlLayerCloudwatchConfigurationOutputReference | OpsworksMysqlLayerCloudwatchConfiguration): any;
export declare function opsworksMysqlLayerCloudwatchConfigurationToHclTerraform(struct?: OpsworksMysqlLayerCloudwatchConfigurationOutputReference | OpsworksMysqlLayerCloudwatchConfiguration): any;
export declare class OpsworksMysqlLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksMysqlLayerCloudwatchConfiguration | undefined;
    set internalValue(value: OpsworksMysqlLayerCloudwatchConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logStreams;
    get logStreams(): OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList;
    putLogStreams(value: OpsworksMysqlLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable): void;
    resetLogStreams(): void;
    get logStreamsInput(): cdktf.IResolvable | OpsworksMysqlLayerCloudwatchConfigurationLogStreams[] | undefined;
}
export interface OpsworksMysqlLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#size OpsworksMysqlLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#type OpsworksMysqlLayer#type}
    */
    readonly type?: string;
}
export declare function opsworksMysqlLayerEbsVolumeToTerraform(struct?: OpsworksMysqlLayerEbsVolume | cdktf.IResolvable): any;
export declare function opsworksMysqlLayerEbsVolumeToHclTerraform(struct?: OpsworksMysqlLayerEbsVolume | cdktf.IResolvable): any;
export declare class OpsworksMysqlLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksMysqlLayerEbsVolume | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksMysqlLayerEbsVolume | cdktf.IResolvable | undefined);
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
    private _mountPoint?;
    get mountPoint(): string;
    set mountPoint(value: string);
    get mountPointInput(): string | undefined;
    private _numberOfDisks?;
    get numberOfDisks(): number;
    set numberOfDisks(value: number);
    get numberOfDisksInput(): number | undefined;
    private _raidLevel?;
    get raidLevel(): string;
    set raidLevel(value: string);
    resetRaidLevel(): void;
    get raidLevelInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class OpsworksMysqlLayerEbsVolumeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksMysqlLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksMysqlLayerEbsVolumeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer aws_opsworks_mysql_layer}
*/
export declare class OpsworksMysqlLayer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_mysql_layer";
    /**
    * Generates CDKTF code for importing a OpsworksMysqlLayer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksMysqlLayer to import
    * @param importFromId The id of the existing OpsworksMysqlLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksMysqlLayer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_mysql_layer aws_opsworks_mysql_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksMysqlLayerConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksMysqlLayerConfig);
    get arn(): string;
    private _autoAssignElasticIps?;
    get autoAssignElasticIps(): boolean | cdktf.IResolvable;
    set autoAssignElasticIps(value: boolean | cdktf.IResolvable);
    resetAutoAssignElasticIps(): void;
    get autoAssignElasticIpsInput(): boolean | cdktf.IResolvable | undefined;
    private _autoAssignPublicIps?;
    get autoAssignPublicIps(): boolean | cdktf.IResolvable;
    set autoAssignPublicIps(value: boolean | cdktf.IResolvable);
    resetAutoAssignPublicIps(): void;
    get autoAssignPublicIpsInput(): boolean | cdktf.IResolvable | undefined;
    private _autoHealing?;
    get autoHealing(): boolean | cdktf.IResolvable;
    set autoHealing(value: boolean | cdktf.IResolvable);
    resetAutoHealing(): void;
    get autoHealingInput(): boolean | cdktf.IResolvable | undefined;
    private _customConfigureRecipes?;
    get customConfigureRecipes(): string[];
    set customConfigureRecipes(value: string[]);
    resetCustomConfigureRecipes(): void;
    get customConfigureRecipesInput(): string[] | undefined;
    private _customDeployRecipes?;
    get customDeployRecipes(): string[];
    set customDeployRecipes(value: string[]);
    resetCustomDeployRecipes(): void;
    get customDeployRecipesInput(): string[] | undefined;
    private _customInstanceProfileArn?;
    get customInstanceProfileArn(): string;
    set customInstanceProfileArn(value: string);
    resetCustomInstanceProfileArn(): void;
    get customInstanceProfileArnInput(): string | undefined;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string | undefined;
    private _customSecurityGroupIds?;
    get customSecurityGroupIds(): string[];
    set customSecurityGroupIds(value: string[]);
    resetCustomSecurityGroupIds(): void;
    get customSecurityGroupIdsInput(): string[] | undefined;
    private _customSetupRecipes?;
    get customSetupRecipes(): string[];
    set customSetupRecipes(value: string[]);
    resetCustomSetupRecipes(): void;
    get customSetupRecipesInput(): string[] | undefined;
    private _customShutdownRecipes?;
    get customShutdownRecipes(): string[];
    set customShutdownRecipes(value: string[]);
    resetCustomShutdownRecipes(): void;
    get customShutdownRecipesInput(): string[] | undefined;
    private _customUndeployRecipes?;
    get customUndeployRecipes(): string[];
    set customUndeployRecipes(value: string[]);
    resetCustomUndeployRecipes(): void;
    get customUndeployRecipesInput(): string[] | undefined;
    private _drainElbOnShutdown?;
    get drainElbOnShutdown(): boolean | cdktf.IResolvable;
    set drainElbOnShutdown(value: boolean | cdktf.IResolvable);
    resetDrainElbOnShutdown(): void;
    get drainElbOnShutdownInput(): boolean | cdktf.IResolvable | undefined;
    private _elasticLoadBalancer?;
    get elasticLoadBalancer(): string;
    set elasticLoadBalancer(value: string);
    resetElasticLoadBalancer(): void;
    get elasticLoadBalancerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean | cdktf.IResolvable;
    set installUpdatesOnBoot(value: boolean | cdktf.IResolvable);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | cdktf.IResolvable | undefined;
    private _instanceShutdownTimeout?;
    get instanceShutdownTimeout(): number;
    set instanceShutdownTimeout(value: number);
    resetInstanceShutdownTimeout(): void;
    get instanceShutdownTimeoutInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _rootPassword?;
    get rootPassword(): string;
    set rootPassword(value: string);
    resetRootPassword(): void;
    get rootPasswordInput(): string | undefined;
    private _rootPasswordOnAllInstances?;
    get rootPasswordOnAllInstances(): boolean | cdktf.IResolvable;
    set rootPasswordOnAllInstances(value: boolean | cdktf.IResolvable);
    resetRootPasswordOnAllInstances(): void;
    get rootPasswordOnAllInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string | undefined;
    private _systemPackages?;
    get systemPackages(): string[];
    set systemPackages(value: string[]);
    resetSystemPackages(): void;
    get systemPackagesInput(): string[] | undefined;
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
    private _useEbsOptimizedInstances?;
    get useEbsOptimizedInstances(): boolean | cdktf.IResolvable;
    set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable);
    resetUseEbsOptimizedInstances(): void;
    get useEbsOptimizedInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _cloudwatchConfiguration;
    get cloudwatchConfiguration(): OpsworksMysqlLayerCloudwatchConfigurationOutputReference;
    putCloudwatchConfiguration(value: OpsworksMysqlLayerCloudwatchConfiguration): void;
    resetCloudwatchConfiguration(): void;
    get cloudwatchConfigurationInput(): OpsworksMysqlLayerCloudwatchConfiguration | undefined;
    private _ebsVolume;
    get ebsVolume(): OpsworksMysqlLayerEbsVolumeList;
    putEbsVolume(value: OpsworksMysqlLayerEbsVolume[] | cdktf.IResolvable): void;
    resetEbsVolume(): void;
    get ebsVolumeInput(): cdktf.IResolvable | OpsworksMysqlLayerEbsVolume[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
