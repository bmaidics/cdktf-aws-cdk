/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version#engine DataAwsRdsEngineVersion#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version#id DataAwsRdsEngineVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version#version DataAwsRdsEngineVersion#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version aws_rds_engine_version}
*/
export declare class DataAwsRdsEngineVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_rds_engine_version";
    /**
    * Generates CDKTF code for importing a DataAwsRdsEngineVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsEngineVersion to import
    * @param importFromId The id of the existing DataAwsRdsEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsEngineVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_engine_version aws_rds_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsEngineVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsEngineVersionConfig);
    get defaultCharacterSet(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    get engineDescription(): string;
    get exportableLogTypes(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameterGroupFamily?;
    get parameterGroupFamily(): string;
    set parameterGroupFamily(value: string);
    resetParameterGroupFamily(): void;
    get parameterGroupFamilyInput(): string | undefined;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[] | undefined;
    get status(): string;
    get supportedCharacterSets(): string[];
    get supportedFeatureNames(): string[];
    get supportedModes(): string[];
    get supportedTimezones(): string[];
    get supportsGlobalDatabases(): cdktf.IResolvable;
    get supportsLogExportsToCloudwatch(): cdktf.IResolvable;
    get supportsParallelQuery(): cdktf.IResolvable;
    get supportsReadReplica(): cdktf.IResolvable;
    get validUpgradeTargets(): string[];
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
