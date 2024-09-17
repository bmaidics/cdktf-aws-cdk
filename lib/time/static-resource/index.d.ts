/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StaticResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/static#id StaticResource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/static#rfc3339 StaticResource#rfc3339}
    */
    readonly rfc3339?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/static#triggers StaticResource#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/static time_static}
*/
export declare class StaticResource extends cdktf.TerraformResource {
    static readonly tfResourceType = "time_static";
    /**
    * Generates CDKTF code for importing a StaticResource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StaticResource to import
    * @param importFromId The id of the existing StaticResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/static#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StaticResource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/static time_static} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StaticResourceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: StaticResourceConfig);
    get day(): number;
    get hour(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get minute(): number;
    get month(): number;
    private _rfc3339?;
    get rfc3339(): string;
    set rfc3339(value: string);
    resetRfc3339(): void;
    get rfc3339Input(): string | undefined;
    get second(): number;
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
    get unix(): number;
    get year(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
