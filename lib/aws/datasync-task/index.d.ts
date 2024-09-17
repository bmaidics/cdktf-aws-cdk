/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}
    */
    readonly destinationLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#id DatasyncTask#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#name DatasyncTask#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}
    */
    readonly sourceLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#tags DatasyncTask#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#tags_all DatasyncTask#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * excludes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#excludes DatasyncTask#excludes}
    */
    readonly excludes?: DatasyncTaskExcludes;
    /**
    * options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#options DatasyncTask#options}
    */
    readonly options?: DatasyncTaskOptions;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#schedule DatasyncTask#schedule}
    */
    readonly schedule?: DatasyncTaskSchedule;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#timeouts DatasyncTask#timeouts}
    */
    readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskExcludes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}
    */
    readonly filterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#value DatasyncTask#value}
    */
    readonly value?: string;
}
export declare function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludesOutputReference | DatasyncTaskExcludes): any;
export declare function datasyncTaskExcludesToHclTerraform(struct?: DatasyncTaskExcludesOutputReference | DatasyncTaskExcludes): any;
export declare class DatasyncTaskExcludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncTaskExcludes | undefined;
    set internalValue(value: DatasyncTaskExcludes | undefined);
    private _filterType?;
    get filterType(): string;
    set filterType(value: string);
    resetFilterType(): void;
    get filterTypeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export interface DatasyncTaskOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#atime DatasyncTask#atime}
    */
    readonly atime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}
    */
    readonly bytesPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#gid DatasyncTask#gid}
    */
    readonly gid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#log_level DatasyncTask#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#mtime DatasyncTask#mtime}
    */
    readonly mtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}
    */
    readonly overwriteMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}
    */
    readonly posixPermissions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}
    */
    readonly preserveDeletedFiles?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}
    */
    readonly preserveDevices?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}
    */
    readonly taskQueueing?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}
    */
    readonly transferMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#uid DatasyncTask#uid}
    */
    readonly uid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}
    */
    readonly verifyMode?: string;
}
export declare function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptionsOutputReference | DatasyncTaskOptions): any;
export declare function datasyncTaskOptionsToHclTerraform(struct?: DatasyncTaskOptionsOutputReference | DatasyncTaskOptions): any;
export declare class DatasyncTaskOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncTaskOptions | undefined;
    set internalValue(value: DatasyncTaskOptions | undefined);
    private _atime?;
    get atime(): string;
    set atime(value: string);
    resetAtime(): void;
    get atimeInput(): string | undefined;
    private _bytesPerSecond?;
    get bytesPerSecond(): number;
    set bytesPerSecond(value: number);
    resetBytesPerSecond(): void;
    get bytesPerSecondInput(): number | undefined;
    private _gid?;
    get gid(): string;
    set gid(value: string);
    resetGid(): void;
    get gidInput(): string | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
    private _mtime?;
    get mtime(): string;
    set mtime(value: string);
    resetMtime(): void;
    get mtimeInput(): string | undefined;
    private _overwriteMode?;
    get overwriteMode(): string;
    set overwriteMode(value: string);
    resetOverwriteMode(): void;
    get overwriteModeInput(): string | undefined;
    private _posixPermissions?;
    get posixPermissions(): string;
    set posixPermissions(value: string);
    resetPosixPermissions(): void;
    get posixPermissionsInput(): string | undefined;
    private _preserveDeletedFiles?;
    get preserveDeletedFiles(): string;
    set preserveDeletedFiles(value: string);
    resetPreserveDeletedFiles(): void;
    get preserveDeletedFilesInput(): string | undefined;
    private _preserveDevices?;
    get preserveDevices(): string;
    set preserveDevices(value: string);
    resetPreserveDevices(): void;
    get preserveDevicesInput(): string | undefined;
    private _taskQueueing?;
    get taskQueueing(): string;
    set taskQueueing(value: string);
    resetTaskQueueing(): void;
    get taskQueueingInput(): string | undefined;
    private _transferMode?;
    get transferMode(): string;
    set transferMode(value: string);
    resetTransferMode(): void;
    get transferModeInput(): string | undefined;
    private _uid?;
    get uid(): string;
    set uid(value: string);
    resetUid(): void;
    get uidInput(): string | undefined;
    private _verifyMode?;
    get verifyMode(): string;
    set verifyMode(value: string);
    resetVerifyMode(): void;
    get verifyModeInput(): string | undefined;
}
export interface DatasyncTaskSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskScheduleOutputReference | DatasyncTaskSchedule): any;
export declare function datasyncTaskScheduleToHclTerraform(struct?: DatasyncTaskScheduleOutputReference | DatasyncTaskSchedule): any;
export declare class DatasyncTaskScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncTaskSchedule | undefined;
    set internalValue(value: DatasyncTaskSchedule | undefined);
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
}
export interface DatasyncTaskTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#create DatasyncTask#create}
    */
    readonly create?: string;
}
export declare function datasyncTaskTimeoutsToTerraform(struct?: DatasyncTaskTimeouts | cdktf.IResolvable): any;
export declare function datasyncTaskTimeoutsToHclTerraform(struct?: DatasyncTaskTimeouts | cdktf.IResolvable): any;
export declare class DatasyncTaskTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncTaskTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatasyncTaskTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task aws_datasync_task}
*/
export declare class DatasyncTask extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_task";
    /**
    * Generates CDKTF code for importing a DatasyncTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncTask to import
    * @param importFromId The id of the existing DatasyncTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncTask to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task aws_datasync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncTaskConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncTaskConfig);
    get arn(): string;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string | undefined;
    private _destinationLocationArn?;
    get destinationLocationArn(): string;
    set destinationLocationArn(value: string);
    get destinationLocationArnInput(): string | undefined;
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
    private _sourceLocationArn?;
    get sourceLocationArn(): string;
    set sourceLocationArn(value: string);
    get sourceLocationArnInput(): string | undefined;
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
    private _excludes;
    get excludes(): DatasyncTaskExcludesOutputReference;
    putExcludes(value: DatasyncTaskExcludes): void;
    resetExcludes(): void;
    get excludesInput(): DatasyncTaskExcludes | undefined;
    private _options;
    get options(): DatasyncTaskOptionsOutputReference;
    putOptions(value: DatasyncTaskOptions): void;
    resetOptions(): void;
    get optionsInput(): DatasyncTaskOptions | undefined;
    private _schedule;
    get schedule(): DatasyncTaskScheduleOutputReference;
    putSchedule(value: DatasyncTaskSchedule): void;
    resetSchedule(): void;
    get scheduleInput(): DatasyncTaskSchedule | undefined;
    private _timeouts;
    get timeouts(): DatasyncTaskTimeoutsOutputReference;
    putTimeouts(value: DatasyncTaskTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatasyncTaskTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
