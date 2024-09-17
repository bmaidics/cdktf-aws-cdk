/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/redshift_cluster#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/redshift_cluster#id DataAwsRedshiftCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/redshift_cluster#tags DataAwsRedshiftCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/redshift_cluster aws_redshift_cluster}
*/
export declare class DataAwsRedshiftCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshift_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftCluster to import
    * @param importFromId The id of the existing DataAwsRedshiftCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/redshift_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/redshift_cluster aws_redshift_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig);
    get allowVersionUpgrade(): cdktf.IResolvable;
    get automatedSnapshotRetentionPeriod(): number;
    get availabilityZone(): string;
    get bucketName(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    get clusterParameterGroupName(): string;
    get clusterPublicKey(): string;
    get clusterRevisionNumber(): string;
    get clusterSecurityGroups(): string[];
    get clusterSubnetGroupName(): string;
    get clusterType(): string;
    get clusterVersion(): string;
    get databaseName(): string;
    get elasticIp(): string;
    get enableLogging(): cdktf.IResolvable;
    get encrypted(): cdktf.IResolvable;
    get endpoint(): string;
    get enhancedVpcRouting(): cdktf.IResolvable;
    get iamRoles(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    get masterUsername(): string;
    get nodeType(): string;
    get numberOfNodes(): number;
    get port(): number;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): cdktf.IResolvable;
    get s3KeyPrefix(): string;
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
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
