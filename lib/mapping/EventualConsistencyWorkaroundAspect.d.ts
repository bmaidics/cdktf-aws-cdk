/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { IAspect, TerraformResource } from "cdktf";
import { IConstruct } from "constructs";
interface EventualConsistencyWorkaroundAspectOptions {
    createDurationSeconds: number;
    destroyDurationSeconds: number;
}
/**
 * This Aspect serves as a workaround for eventually consistent resources (e.g. IAM resources)
 * It has to be added to the root (i.e. the Terraform Stack) so that it is invoked
 * on all resources that might reference the `eventualConsistentTarget` which is passed when
 * instantiating an `EventualConsistencyWorkaroundAspect`.
 *
 * How does it work?
 * - The `visit` function will be invoked for every resource in e.g. the TerraformStack
 * - Whenever a visited resource contains a reference to a property of the `eventualConsistentTarget`
 *   a `time_sleep` resource will be added as a dependency for that resource
 * - The `time_sleep` resource itself depends on the `eventualConsistentTarget` and by default waits
 *   20 seconds after the `eventualConsistentTarget` was created until it marks itself as done
 * - The dependend resources will then have their dependency on `time_sleep` fullfilled and will start
 *   to deploy
 */
export declare class EventualConsistencyWorkaroundAspect implements IAspect {
    private eventualConsistentTarget;
    private options;
    private static stackTimeProviders;
    private static getTimeProvider;
    private sleepResource?;
    constructor(eventualConsistentTarget: TerraformResource, options?: EventualConsistencyWorkaroundAspectOptions);
    visit(node: IConstruct): void;
    /**
     * makes sure we reuse the same sleep resource for the same eventual consistent target
     * (aka for an instance of this class)
     */
    private getSleepResource;
}
export {};
