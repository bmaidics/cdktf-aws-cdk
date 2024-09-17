/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { TerraformResource } from "cdktf";
import { ResourceMapper } from "../mapping";
type Class<T> = new (...args: any[]) => T;
type PropertyMappingFunc = (value: any) => {
    tfAttributeName: string;
    value: any;
};
type PropertyMapping = null | string | PropertyMappingFunc;
type PropertyMappings = {
    [cfnProperty: string]: PropertyMapping;
};
export declare function createGuessingResourceMapper<T extends TerraformResource>(Resource: Class<T>, propMappings?: PropertyMappings): ResourceMapper<T>;
export {};
