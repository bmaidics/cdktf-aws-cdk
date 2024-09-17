/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}
    */
    readonly globalReplicationGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}
    */
    readonly globalReplicationGroupIdSuffix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}
    */
    readonly primaryReplicationGroupId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group aws_elasticache_global_replication_group}
*/
export declare class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_global_replication_group";
    /**
    * Generates CDKTF code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheGlobalReplicationGroup to import
    * @param importFromId The id of the existing ElasticacheGlobalReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheGlobalReplicationGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_global_replication_group aws_elasticache_global_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheGlobalReplicationGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig);
    get actualEngineVersion(): string;
    get arn(): string;
    get atRestEncryptionEnabled(): cdktf.IResolvable;
    get authTokenEnabled(): cdktf.IResolvable;
    get cacheNodeType(): string;
    get clusterEnabled(): cdktf.IResolvable;
    get engine(): string;
    get engineVersionActual(): string;
    private _globalReplicationGroupDescription?;
    get globalReplicationGroupDescription(): string;
    set globalReplicationGroupDescription(value: string);
    resetGlobalReplicationGroupDescription(): void;
    get globalReplicationGroupDescriptionInput(): string | undefined;
    get globalReplicationGroupId(): string;
    private _globalReplicationGroupIdSuffix?;
    get globalReplicationGroupIdSuffix(): string;
    set globalReplicationGroupIdSuffix(value: string);
    get globalReplicationGroupIdSuffixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _primaryReplicationGroupId?;
    get primaryReplicationGroupId(): string;
    set primaryReplicationGroupId(value: string);
    get primaryReplicationGroupIdInput(): string | undefined;
    get transitEncryptionEnabled(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
