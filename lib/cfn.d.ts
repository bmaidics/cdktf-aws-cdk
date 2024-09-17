/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
export interface CloudFormationResource {
    readonly Type: string;
    readonly Properties: any;
    readonly Condition?: string;
}
export interface CloudFormationTemplate {
    Resources?: {
        [id: string]: CloudFormationResource;
    };
    Conditions?: {
        [id: string]: any;
    };
    Outputs?: {
        [id: string]: any;
    };
}
