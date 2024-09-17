/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OffsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}
    */
    readonly baseRfc3339?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#id Offset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_days Offset#offset_days}
    */
    readonly offsetDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_hours Offset#offset_hours}
    */
    readonly offsetHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_minutes Offset#offset_minutes}
    */
    readonly offsetMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_months Offset#offset_months}
    */
    readonly offsetMonths?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_seconds Offset#offset_seconds}
    */
    readonly offsetSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_years Offset#offset_years}
    */
    readonly offsetYears?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#triggers Offset#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset time_offset}
*/
export declare class Offset extends cdktf.TerraformResource {
    static readonly tfResourceType = "time_offset";
    /**
    * Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Offset to import
    * @param importFromId The id of the existing Offset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Offset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset time_offset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OffsetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: OffsetConfig);
    private _baseRfc3339?;
    get baseRfc3339(): string;
    set baseRfc3339(value: string);
    resetBaseRfc3339(): void;
    get baseRfc3339Input(): string | undefined;
    get day(): number;
    get hour(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get minute(): number;
    get month(): number;
    private _offsetDays?;
    get offsetDays(): number;
    set offsetDays(value: number);
    resetOffsetDays(): void;
    get offsetDaysInput(): number | undefined;
    private _offsetHours?;
    get offsetHours(): number;
    set offsetHours(value: number);
    resetOffsetHours(): void;
    get offsetHoursInput(): number | undefined;
    private _offsetMinutes?;
    get offsetMinutes(): number;
    set offsetMinutes(value: number);
    resetOffsetMinutes(): void;
    get offsetMinutesInput(): number | undefined;
    private _offsetMonths?;
    get offsetMonths(): number;
    set offsetMonths(value: number);
    resetOffsetMonths(): void;
    get offsetMonthsInput(): number | undefined;
    private _offsetSeconds?;
    get offsetSeconds(): number;
    set offsetSeconds(value: number);
    resetOffsetSeconds(): void;
    get offsetSecondsInput(): number | undefined;
    private _offsetYears?;
    get offsetYears(): number;
    set offsetYears(value: number);
    resetOffsetYears(): void;
    get offsetYearsInput(): number | undefined;
    get rfc3339(): string;
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
