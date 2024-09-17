/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#id GuarddutyDetector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#tags_all GuarddutyDetector#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * datasources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#datasources GuarddutyDetector#datasources}
    */
    readonly datasources?: GuarddutyDetectorDatasources;
}
export interface GuarddutyDetectorDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
}
export declare function guarddutyDetectorDatasourcesS3LogsToTerraform(struct?: GuarddutyDetectorDatasourcesS3LogsOutputReference | GuarddutyDetectorDatasourcesS3Logs): any;
export declare function guarddutyDetectorDatasourcesS3LogsToHclTerraform(struct?: GuarddutyDetectorDatasourcesS3LogsOutputReference | GuarddutyDetectorDatasourcesS3Logs): any;
export declare class GuarddutyDetectorDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesS3Logs | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesS3Logs | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyDetectorDatasources {
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}
    */
    readonly s3Logs?: GuarddutyDetectorDatasourcesS3Logs;
}
export declare function guarddutyDetectorDatasourcesToTerraform(struct?: GuarddutyDetectorDatasourcesOutputReference | GuarddutyDetectorDatasources): any;
export declare function guarddutyDetectorDatasourcesToHclTerraform(struct?: GuarddutyDetectorDatasourcesOutputReference | GuarddutyDetectorDatasources): any;
export declare class GuarddutyDetectorDatasourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasources | undefined;
    set internalValue(value: GuarddutyDetectorDatasources | undefined);
    private _s3Logs;
    get s3Logs(): GuarddutyDetectorDatasourcesS3LogsOutputReference;
    putS3Logs(value: GuarddutyDetectorDatasourcesS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): GuarddutyDetectorDatasourcesS3Logs | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector aws_guardduty_detector}
*/
export declare class GuarddutyDetector extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_detector";
    /**
    * Generates CDKTF code for importing a GuarddutyDetector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyDetector to import
    * @param importFromId The id of the existing GuarddutyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyDetector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector aws_guardduty_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyDetectorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: GuarddutyDetectorConfig);
    get accountId(): string;
    get arn(): string;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _findingPublishingFrequency?;
    get findingPublishingFrequency(): string;
    set findingPublishingFrequency(value: string);
    resetFindingPublishingFrequency(): void;
    get findingPublishingFrequencyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _datasources;
    get datasources(): GuarddutyDetectorDatasourcesOutputReference;
    putDatasources(value: GuarddutyDetectorDatasources): void;
    resetDatasources(): void;
    get datasourcesInput(): GuarddutyDetectorDatasources | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
