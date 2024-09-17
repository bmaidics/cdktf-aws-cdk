/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SleepConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep#create_duration Sleep#create_duration}
    */
    readonly createDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep#destroy_duration Sleep#destroy_duration}
    */
    readonly destroyDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep#id Sleep#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep#triggers Sleep#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep time_sleep}
*/
export declare class Sleep extends cdktf.TerraformResource {
    static readonly tfResourceType = "time_sleep";
    /**
    * Generates CDKTF code for importing a Sleep resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sleep to import
    * @param importFromId The id of the existing Sleep that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sleep to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/sleep time_sleep} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SleepConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SleepConfig);
    private _createDuration?;
    get createDuration(): string;
    set createDuration(value: string);
    resetCreateDuration(): void;
    get createDurationInput(): string | undefined;
    private _destroyDuration?;
    get destroyDuration(): string;
    set destroyDuration(value: string);
    resetDestroyDuration(): void;
    get destroyDurationInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
