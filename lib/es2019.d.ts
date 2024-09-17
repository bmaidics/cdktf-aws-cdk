/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
export declare function objectFromEntries<T = any>(entries: Array<readonly [PropertyKey, T]>): {
    [k: string]: T;
};
