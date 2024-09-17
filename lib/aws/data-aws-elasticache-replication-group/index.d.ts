/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}
    */
    readonly replicationGroupId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticache_replication_group aws_elasticache_replication_group}
*/
export declare class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elasticache_replication_group";
    /**
    * Generates CDKTF code for importing a DataAwsElasticacheReplicationGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticacheReplicationGroup to import
    * @param importFromId The id of the existing DataAwsElasticacheReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticacheReplicationGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticache_replication_group aws_elasticache_replication_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheReplicationGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheReplicationGroupConfig);
    get arn(): string;
    get authTokenEnabled(): cdktf.IResolvable;
    get automaticFailoverEnabled(): cdktf.IResolvable;
    get configurationEndpointAddress(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get memberClusters(): string[];
    get multiAzEnabled(): cdktf.IResolvable;
    get nodeType(): string;
    get numberCacheClusters(): number;
    get port(): number;
    get primaryEndpointAddress(): string;
    get readerEndpointAddress(): string;
    get replicationGroupDescription(): string;
    private _replicationGroupId?;
    get replicationGroupId(): string;
    set replicationGroupId(value: string);
    get replicationGroupIdInput(): string | undefined;
    get snapshotRetentionLimit(): number;
    get snapshotWindow(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
