/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * datasources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}
    */
    readonly datasources?: GuarddutyOrganizationConfigurationDatasources;
}
export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
}
export declare function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any;
export declare function guarddutyOrganizationConfigurationDatasourcesS3LogsToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasources {
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
    */
    readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
}
export declare function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any;
export declare function guarddutyOrganizationConfigurationDatasourcesToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasources | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasources | undefined);
    private _s3Logs;
    get s3Logs(): GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference;
    putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration}
*/
export declare class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_organization_configuration";
    /**
    * Generates CDKTF code for importing a GuarddutyOrganizationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyOrganizationConfiguration to import
    * @param importFromId The id of the existing GuarddutyOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyOrganizationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _datasources;
    get datasources(): GuarddutyOrganizationConfigurationDatasourcesOutputReference;
    putDatasources(value: GuarddutyOrganizationConfigurationDatasources): void;
    resetDatasources(): void;
    get datasourcesInput(): GuarddutyOrganizationConfigurationDatasources | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
