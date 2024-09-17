/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}
    */
    readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}
    */
    readonly authToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}
    */
    readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}
    */
    readonly dataTieringEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}
    */
    readonly globalReplicationGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#id ElasticacheReplicationGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}
    */
    readonly multiAzEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}
    */
    readonly numberCacheClusters?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}
    */
    readonly replicationGroupDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}
    */
    readonly replicationGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}
    */
    readonly snapshotArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}
    */
    readonly snapshotWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}
    */
    readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}
    */
    readonly userGroupIds?: string[];
    /**
    * cluster_mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}
    */
    readonly clusterMode?: ElasticacheReplicationGroupClusterMode;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#timeouts ElasticacheReplicationGroup#timeouts}
    */
    readonly timeouts?: ElasticacheReplicationGroupTimeouts;
}
export interface ElasticacheReplicationGroupClusterMode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}
    */
    readonly numNodeGroups?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}
    */
    readonly replicasPerNodeGroup: number;
}
export declare function elasticacheReplicationGroupClusterModeToTerraform(struct?: ElasticacheReplicationGroupClusterModeOutputReference | ElasticacheReplicationGroupClusterMode): any;
export declare function elasticacheReplicationGroupClusterModeToHclTerraform(struct?: ElasticacheReplicationGroupClusterModeOutputReference | ElasticacheReplicationGroupClusterMode): any;
export declare class ElasticacheReplicationGroupClusterModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheReplicationGroupClusterMode | undefined;
    set internalValue(value: ElasticacheReplicationGroupClusterMode | undefined);
    private _numNodeGroups?;
    get numNodeGroups(): number;
    set numNodeGroups(value: number);
    resetNumNodeGroups(): void;
    get numNodeGroupsInput(): number | undefined;
    private _replicasPerNodeGroup?;
    get replicasPerNodeGroup(): number;
    set replicasPerNodeGroup(value: number);
    get replicasPerNodeGroupInput(): number | undefined;
}
export interface ElasticacheReplicationGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#create ElasticacheReplicationGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#update ElasticacheReplicationGroup#update}
    */
    readonly update?: string;
}
export declare function elasticacheReplicationGroupTimeoutsToTerraform(struct?: ElasticacheReplicationGroupTimeouts | cdktf.IResolvable): any;
export declare function elasticacheReplicationGroupTimeoutsToHclTerraform(struct?: ElasticacheReplicationGroupTimeouts | cdktf.IResolvable): any;
export declare class ElasticacheReplicationGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheReplicationGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheReplicationGroupTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group aws_elasticache_replication_group}
*/
export declare class ElasticacheReplicationGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_replication_group";
    /**
    * Generates CDKTF code for importing a ElasticacheReplicationGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheReplicationGroup to import
    * @param importFromId The id of the existing ElasticacheReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheReplicationGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_replication_group aws_elasticache_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheReplicationGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheReplicationGroupConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _atRestEncryptionEnabled?;
    get atRestEncryptionEnabled(): boolean | cdktf.IResolvable;
    set atRestEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetAtRestEncryptionEnabled(): void;
    get atRestEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _authToken?;
    get authToken(): string;
    set authToken(value: string);
    resetAuthToken(): void;
    get authTokenInput(): string | undefined;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _automaticFailoverEnabled?;
    get automaticFailoverEnabled(): boolean | cdktf.IResolvable;
    set automaticFailoverEnabled(value: boolean | cdktf.IResolvable);
    resetAutomaticFailoverEnabled(): void;
    get automaticFailoverEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    get clusterEnabled(): cdktf.IResolvable;
    get configurationEndpointAddress(): string;
    private _dataTieringEnabled?;
    get dataTieringEnabled(): boolean | cdktf.IResolvable;
    set dataTieringEnabled(value: boolean | cdktf.IResolvable);
    resetDataTieringEnabled(): void;
    get dataTieringEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get engineVersionActual(): string;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string | undefined;
    private _globalReplicationGroupId?;
    get globalReplicationGroupId(): string;
    set globalReplicationGroupId(value: string);
    resetGlobalReplicationGroupId(): void;
    get globalReplicationGroupIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    get memberClusters(): string[];
    private _multiAzEnabled?;
    get multiAzEnabled(): boolean | cdktf.IResolvable;
    set multiAzEnabled(value: boolean | cdktf.IResolvable);
    resetMultiAzEnabled(): void;
    get multiAzEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string | undefined;
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string | undefined;
    private _numberCacheClusters?;
    get numberCacheClusters(): number;
    set numberCacheClusters(value: number);
    resetNumberCacheClusters(): void;
    get numberCacheClustersInput(): number | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    get primaryEndpointAddress(): string;
    get readerEndpointAddress(): string;
    private _replicationGroupDescription?;
    get replicationGroupDescription(): string;
    set replicationGroupDescription(value: string);
    get replicationGroupDescriptionInput(): string | undefined;
    private _replicationGroupId?;
    get replicationGroupId(): string;
    set replicationGroupId(value: string);
    get replicationGroupIdInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[] | undefined;
    private _snapshotArns?;
    get snapshotArns(): string[];
    set snapshotArns(value: string[]);
    resetSnapshotArns(): void;
    get snapshotArnsInput(): string[] | undefined;
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    resetSnapshotName(): void;
    get snapshotNameInput(): string | undefined;
    private _snapshotRetentionLimit?;
    get snapshotRetentionLimit(): number;
    set snapshotRetentionLimit(value: number);
    resetSnapshotRetentionLimit(): void;
    get snapshotRetentionLimitInput(): number | undefined;
    private _snapshotWindow?;
    get snapshotWindow(): string;
    set snapshotWindow(value: string);
    resetSnapshotWindow(): void;
    get snapshotWindowInput(): string | undefined;
    private _subnetGroupName?;
    get subnetGroupName(): string;
    set subnetGroupName(value: string);
    resetSubnetGroupName(): void;
    get subnetGroupNameInput(): string | undefined;
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
    private _transitEncryptionEnabled?;
    get transitEncryptionEnabled(): boolean | cdktf.IResolvable;
    set transitEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetTransitEncryptionEnabled(): void;
    get transitEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _userGroupIds?;
    get userGroupIds(): string[];
    set userGroupIds(value: string[]);
    resetUserGroupIds(): void;
    get userGroupIdsInput(): string[] | undefined;
    private _clusterMode;
    get clusterMode(): ElasticacheReplicationGroupClusterModeOutputReference;
    putClusterMode(value: ElasticacheReplicationGroupClusterMode): void;
    resetClusterMode(): void;
    get clusterModeInput(): ElasticacheReplicationGroupClusterMode | undefined;
    private _timeouts;
    get timeouts(): ElasticacheReplicationGroupTimeoutsOutputReference;
    putTimeouts(value: ElasticacheReplicationGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticacheReplicationGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
