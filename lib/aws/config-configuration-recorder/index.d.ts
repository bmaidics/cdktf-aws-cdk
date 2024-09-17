/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#id ConfigConfigurationRecorder#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}
    */
    readonly roleArn: string;
    /**
    * recording_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}
    */
    readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
}
export interface ConfigConfigurationRecorderRecordingGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}
    */
    readonly allSupported?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
    */
    readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes?: string[];
}
export declare function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any;
export declare function configConfigurationRecorderRecordingGroupToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any;
export declare class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigurationRecorderRecordingGroup | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingGroup | undefined);
    private _allSupported?;
    get allSupported(): boolean | cdktf.IResolvable;
    set allSupported(value: boolean | cdktf.IResolvable);
    resetAllSupported(): void;
    get allSupportedInput(): boolean | cdktf.IResolvable | undefined;
    private _includeGlobalResourceTypes?;
    get includeGlobalResourceTypes(): boolean | cdktf.IResolvable;
    set includeGlobalResourceTypes(value: boolean | cdktf.IResolvable);
    resetIncludeGlobalResourceTypes(): void;
    get includeGlobalResourceTypesInput(): boolean | cdktf.IResolvable | undefined;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    resetResourceTypes(): void;
    get resourceTypesInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder aws_config_configuration_recorder}
*/
export declare class ConfigConfigurationRecorder extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_configuration_recorder";
    /**
    * Generates CDKTF code for importing a ConfigConfigurationRecorder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigConfigurationRecorder to import
    * @param importFromId The id of the existing ConfigConfigurationRecorder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigConfigurationRecorder to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_recorder aws_config_configuration_recorder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig);
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
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _recordingGroup;
    get recordingGroup(): ConfigConfigurationRecorderRecordingGroupOutputReference;
    putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup): void;
    resetRecordingGroup(): void;
    get recordingGroupInput(): ConfigConfigurationRecorderRecordingGroup | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
