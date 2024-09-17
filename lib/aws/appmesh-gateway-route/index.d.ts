/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#id AppmeshGatewayRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
    */
    readonly virtualGatewayName: string;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}
    */
    readonly spec: AppmeshGatewayRouteSpec;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined);
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare function appmeshGatewayRouteSpecGrpcRouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}
    */
    readonly serviceName: string;
}
export declare function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare function appmeshGatewayRouteSpecGrpcRouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteMatch | undefined);
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
}
export declare function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any;
export declare function appmeshGatewayRouteSpecGrpcRouteToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRoute | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecGrpcRouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecGrpcRouteAction | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecGrpcRouteMatch | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined);
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatch | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2Route {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
}
export declare function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any;
export declare function appmeshGatewayRouteSpecHttp2RouteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2Route | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2Route | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecHttp2RouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecHttp2RouteAction | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecHttp2RouteMatch | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined);
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatch | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
}
export declare function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any;
export declare function appmeshGatewayRouteSpecHttpRouteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any;
export declare class AppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRoute | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRoute | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecHttpRouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecHttpRouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecHttpRouteAction | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttpRouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecHttpRouteMatch | undefined;
}
export interface AppmeshGatewayRouteSpec {
    /**
    * grpc_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute;
    /**
    * http2_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}
    */
    readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route;
    /**
    * http_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}
    */
    readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute;
}
export declare function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any;
export declare function appmeshGatewayRouteSpecToHclTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any;
export declare class AppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpec | undefined;
    set internalValue(value: AppmeshGatewayRouteSpec | undefined);
    private _grpcRoute;
    get grpcRoute(): AppmeshGatewayRouteSpecGrpcRouteOutputReference;
    putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute): void;
    resetGrpcRoute(): void;
    get grpcRouteInput(): AppmeshGatewayRouteSpecGrpcRoute | undefined;
    private _http2Route;
    get http2Route(): AppmeshGatewayRouteSpecHttp2RouteOutputReference;
    putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route): void;
    resetHttp2Route(): void;
    get http2RouteInput(): AppmeshGatewayRouteSpecHttp2Route | undefined;
    private _httpRoute;
    get httpRoute(): AppmeshGatewayRouteSpecHttpRouteOutputReference;
    putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute): void;
    resetHttpRoute(): void;
    get httpRouteInput(): AppmeshGatewayRouteSpecHttpRoute | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route}
*/
export declare class AppmeshGatewayRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_gateway_route";
    /**
    * Generates CDKTF code for importing a AppmeshGatewayRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshGatewayRoute to import
    * @param importFromId The id of the existing AppmeshGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshGatewayRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _meshName?;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string | undefined;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get resourceOwner(): string;
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
    private _virtualGatewayName?;
    get virtualGatewayName(): string;
    set virtualGatewayName(value: string);
    get virtualGatewayNameInput(): string | undefined;
    private _spec;
    get spec(): AppmeshGatewayRouteSpecOutputReference;
    putSpec(value: AppmeshGatewayRouteSpec): void;
    get specInput(): AppmeshGatewayRouteSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
