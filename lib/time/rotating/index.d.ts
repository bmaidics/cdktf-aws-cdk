/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RotatingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#id Rotating#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rfc3339 Rotating#rfc3339}
    */
    readonly rfc3339?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rotation_days Rotating#rotation_days}
    */
    readonly rotationDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rotation_hours Rotating#rotation_hours}
    */
    readonly rotationHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rotation_minutes Rotating#rotation_minutes}
    */
    readonly rotationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rotation_months Rotating#rotation_months}
    */
    readonly rotationMonths?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}
    */
    readonly rotationRfc3339?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#rotation_years Rotating#rotation_years}
    */
    readonly rotationYears?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#triggers Rotating#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating time_rotating}
*/
export declare class Rotating extends cdktf.TerraformResource {
    static readonly tfResourceType = "time_rotating";
    /**
    * Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Rotating to import
    * @param importFromId The id of the existing Rotating that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Rotating to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/rotating time_rotating} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RotatingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: RotatingConfig);
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
    private _rotationDays?;
    get rotationDays(): number;
    set rotationDays(value: number);
    resetRotationDays(): void;
    get rotationDaysInput(): number | undefined;
    private _rotationHours?;
    get rotationHours(): number;
    set rotationHours(value: number);
    resetRotationHours(): void;
    get rotationHoursInput(): number | undefined;
    private _rotationMinutes?;
    get rotationMinutes(): number;
    set rotationMinutes(value: number);
    resetRotationMinutes(): void;
    get rotationMinutesInput(): number | undefined;
    private _rotationMonths?;
    get rotationMonths(): number;
    set rotationMonths(value: number);
    resetRotationMonths(): void;
    get rotationMonthsInput(): number | undefined;
    private _rotationRfc3339?;
    get rotationRfc3339(): string;
    set rotationRfc3339(value: string);
    resetRotationRfc3339(): void;
    get rotationRfc3339Input(): string | undefined;
    private _rotationYears?;
    get rotationYears(): number;
    set rotationYears(value: number);
    resetRotationYears(): void;
    get rotationYearsInput(): number | undefined;
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
