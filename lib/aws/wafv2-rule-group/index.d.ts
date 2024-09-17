/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * custom_response_body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}
    */
    readonly customResponseBody?: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}
    */
    readonly rule?: Wafv2RuleGroupRule[] | cdktf.IResolvable;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}
    */
    readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig;
}
export interface Wafv2RuleGroupCustomResponseBody {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}
    */
    readonly key: string;
}
export declare function wafv2RuleGroupCustomResponseBodyToTerraform(struct?: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable): any;
export declare function wafv2RuleGroupCustomResponseBodyToHclTerraform(struct?: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupCustomResponseBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export declare class Wafv2RuleGroupCustomResponseBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupCustomResponseBodyOutputReference;
}
export interface Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionAllowCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
    */
    readonly insertHeader: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionAllowCustomRequestHandling): any;
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionAllowCustomRequestHandling): any;
export declare class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionAllow {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2RuleGroupRuleActionAllowCustomRequestHandling;
}
export declare function wafv2RuleGroupRuleActionAllowToTerraform(struct?: Wafv2RuleGroupRuleActionAllowOutputReference | Wafv2RuleGroupRuleActionAllow): any;
export declare function wafv2RuleGroupRuleActionAllowToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowOutputReference | Wafv2RuleGroupRuleActionAllow): any;
export declare class Wafv2RuleGroupRuleActionAllowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionAllow | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionAllow | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined;
}
export interface Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionBlockCustomResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}
    */
    readonly customResponseBodyKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}
    */
    readonly responseCode: number;
    /**
    * response_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}
    */
    readonly responseHeader?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference | Wafv2RuleGroupRuleActionBlockCustomResponse): any;
export declare function wafv2RuleGroupRuleActionBlockCustomResponseToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference | Wafv2RuleGroupRuleActionBlockCustomResponse): any;
export declare class Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionBlockCustomResponse | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionBlockCustomResponse | undefined);
    private _customResponseBodyKey?;
    get customResponseBodyKey(): string;
    set customResponseBodyKey(value: string);
    resetCustomResponseBodyKey(): void;
    get customResponseBodyKeyInput(): string | undefined;
    private _responseCode?;
    get responseCode(): number;
    set responseCode(value: number);
    get responseCodeInput(): number | undefined;
    private _responseHeader;
    get responseHeader(): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList;
    putResponseHeader(value: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable): void;
    resetResponseHeader(): void;
    get responseHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionBlock {
    /**
    * custom_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}
    */
    readonly customResponse?: Wafv2RuleGroupRuleActionBlockCustomResponse;
}
export declare function wafv2RuleGroupRuleActionBlockToTerraform(struct?: Wafv2RuleGroupRuleActionBlockOutputReference | Wafv2RuleGroupRuleActionBlock): any;
export declare function wafv2RuleGroupRuleActionBlockToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockOutputReference | Wafv2RuleGroupRuleActionBlock): any;
export declare class Wafv2RuleGroupRuleActionBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionBlock | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionBlock | undefined);
    private _customResponse;
    get customResponse(): Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference;
    putCustomResponse(value: Wafv2RuleGroupRuleActionBlockCustomResponse): void;
    resetCustomResponse(): void;
    get customResponseInput(): Wafv2RuleGroupRuleActionBlockCustomResponse | undefined;
}
export interface Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionCountCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
    */
    readonly insertHeader: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCountCustomRequestHandling): any;
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCountCustomRequestHandling): any;
export declare class Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionCount {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2RuleGroupRuleActionCountCustomRequestHandling;
}
export declare function wafv2RuleGroupRuleActionCountToTerraform(struct?: Wafv2RuleGroupRuleActionCountOutputReference | Wafv2RuleGroupRuleActionCount): any;
export declare function wafv2RuleGroupRuleActionCountToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountOutputReference | Wafv2RuleGroupRuleActionCount): any;
export declare class Wafv2RuleGroupRuleActionCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionCount | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCount | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined;
}
export interface Wafv2RuleGroupRuleAction {
    /**
    * allow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}
    */
    readonly allow?: Wafv2RuleGroupRuleActionAllow;
    /**
    * block block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}
    */
    readonly block?: Wafv2RuleGroupRuleActionBlock;
    /**
    * count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}
    */
    readonly count?: Wafv2RuleGroupRuleActionCount;
}
export declare function wafv2RuleGroupRuleActionToTerraform(struct?: Wafv2RuleGroupRuleActionOutputReference | Wafv2RuleGroupRuleAction): any;
export declare function wafv2RuleGroupRuleActionToHclTerraform(struct?: Wafv2RuleGroupRuleActionOutputReference | Wafv2RuleGroupRuleAction): any;
export declare class Wafv2RuleGroupRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleAction | undefined;
    set internalValue(value: Wafv2RuleGroupRuleAction | undefined);
    private _allow;
    get allow(): Wafv2RuleGroupRuleActionAllowOutputReference;
    putAllow(value: Wafv2RuleGroupRuleActionAllow): void;
    resetAllow(): void;
    get allowInput(): Wafv2RuleGroupRuleActionAllow | undefined;
    private _block;
    get block(): Wafv2RuleGroupRuleActionBlockOutputReference;
    putBlock(value: Wafv2RuleGroupRuleActionBlock): void;
    resetBlock(): void;
    get blockInput(): Wafv2RuleGroupRuleActionBlock | undefined;
    private _count;
    get count(): Wafv2RuleGroupRuleActionCountOutputReference;
    putCount(value: Wafv2RuleGroupRuleActionCount): void;
    resetCount(): void;
    get countInput(): Wafv2RuleGroupRuleActionCount | undefined;
}
export interface Wafv2RuleGroupRuleRuleLabel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleRuleLabelToTerraform(struct?: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleRuleLabelToHclTerraform(struct?: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleRuleLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleRuleLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleRuleLabelOutputReference;
}
export interface Wafv2RuleGroupRuleStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}
    */
    readonly statement: Wafv2RuleGroupRuleStatement;
}
export declare function wafv2RuleGroupRuleStatementAndStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementOutputReference | Wafv2RuleGroupRuleStatementAndStatement): any;
export declare function wafv2RuleGroupRuleStatementAndStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementOutputReference | Wafv2RuleGroupRuleStatementAndStatement): any;
export declare class Wafv2RuleGroupRuleStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementAndStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementAndStatement | undefined);
    private _statement;
    get statement(): Wafv2RuleGroupRuleStatementOutputReference;
    putStatement(value: Wafv2RuleGroupRuleStatement): void;
    get statementInput(): Wafv2RuleGroupRuleStatement | undefined;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#body Wafv2RuleGroup#body}
    */
    readonly body?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#method Wafv2RuleGroup#method}
    */
    readonly method?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
    */
    readonly queryString?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
    */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
    */
    readonly uriPath?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#type Wafv2RuleGroup#type}
    */
    readonly type: string;
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationOutputReference;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#positional_constraint Wafv2RuleGroup#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#search_string Wafv2RuleGroup#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
    */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
    */
    readonly textTransformation: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatement): any;
export declare function wafv2RuleGroupRuleStatementByteMatchStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference | Wafv2RuleGroupRuleStatementByteMatchStatement): any;
export declare class Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string | undefined;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#fallback_behavior Wafv2RuleGroup#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#header_name Wafv2RuleGroup#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig): any;
export declare function wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigToHclTerraform(struct?: Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string | undefined;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#country_codes Wafv2RuleGroup#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference | Wafv2RuleGroupRuleStatementGeoMatchStatement): any;
export declare function wafv2RuleGroupRuleStatementGeoMatchStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference | Wafv2RuleGroupRuleStatementGeoMatchStatement): any;
export declare class Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[] | undefined;
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig | undefined;
}
export interface Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#fallback_behavior Wafv2RuleGroup#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#header_name Wafv2RuleGroup#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#position Wafv2RuleGroup#position}
    */
    readonly position: string;
}
export declare function wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare function wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigToHclTerraform(struct?: Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string | undefined;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string | undefined;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#arn Wafv2RuleGroup#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference | Wafv2RuleGroupRuleStatementIpSetReferenceStatement): any;
export declare function wafv2RuleGroupRuleStatementIpSetReferenceStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference | Wafv2RuleGroupRuleStatementIpSetReferenceStatement): any;
export declare class Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
}
export interface Wafv2RuleGroupRuleStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}
    */
    readonly scope: string;
}
export declare function wafv2RuleGroupRuleStatementLabelMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference | Wafv2RuleGroupRuleStatementLabelMatchStatement): any;
export declare function wafv2RuleGroupRuleStatementLabelMatchStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference | Wafv2RuleGroupRuleStatementLabelMatchStatement): any;
export declare class Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}
    */
    readonly statement: Wafv2RuleGroupRuleStatement;
}
export declare function wafv2RuleGroupRuleStatementNotStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementOutputReference | Wafv2RuleGroupRuleStatementNotStatement): any;
export declare function wafv2RuleGroupRuleStatementNotStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementOutputReference | Wafv2RuleGroupRuleStatementNotStatement): any;
export declare class Wafv2RuleGroupRuleStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementNotStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementNotStatement | undefined);
    private _statement;
    get statement(): Wafv2RuleGroupRuleStatementOutputReference;
    putStatement(value: Wafv2RuleGroupRuleStatement): void;
    get statementInput(): Wafv2RuleGroupRuleStatement | undefined;
}
export interface Wafv2RuleGroupRuleStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}
    */
    readonly statement: Wafv2RuleGroupRuleStatement;
}
export declare function wafv2RuleGroupRuleStatementOrStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementOutputReference | Wafv2RuleGroupRuleStatementOrStatement): any;
export declare function wafv2RuleGroupRuleStatementOrStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementOutputReference | Wafv2RuleGroupRuleStatementOrStatement): any;
export declare class Wafv2RuleGroupRuleStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementOrStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementOrStatement | undefined);
    private _statement;
    get statement(): Wafv2RuleGroupRuleStatementOutputReference;
    putStatement(value: Wafv2RuleGroupRuleStatement): void;
    get statementInput(): Wafv2RuleGroupRuleStatement | undefined;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#body Wafv2RuleGroup#body}
    */
    readonly body?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#method Wafv2RuleGroup#method}
    */
    readonly method?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
    */
    readonly queryString?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
    */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
    */
    readonly uriPath?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#type Wafv2RuleGroup#type}
    */
    readonly type: string;
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#arn Wafv2RuleGroup#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
    */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
    */
    readonly textTransformation: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement): any;
export declare function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementOutputReference | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationList;
    putTextTransformation(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | undefined;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#body Wafv2RuleGroup#body}
    */
    readonly body?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#method Wafv2RuleGroup#method}
    */
    readonly method?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
    */
    readonly queryString?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
    */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
    */
    readonly uriPath?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#type Wafv2RuleGroup#type}
    */
    readonly type: string;
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationOutputReference;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#comparison_operator Wafv2RuleGroup#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#size Wafv2RuleGroup#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
    */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
    */
    readonly textTransformation: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatement): any;
export declare function wafv2RuleGroupRuleStatementSizeConstraintStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementOutputReference | Wafv2RuleGroupRuleStatementSizeConstraintStatement): any;
export declare class Wafv2RuleGroupRuleStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationList;
    putTextTransformation(value: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation[] | undefined;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#body Wafv2RuleGroup#body}
    */
    readonly body?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#method Wafv2RuleGroup#method}
    */
    readonly method?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
    */
    readonly queryString?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
    */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
    */
    readonly uriPath?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#type Wafv2RuleGroup#type}
    */
    readonly type: string;
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationOutputReference;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
    */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
    */
    readonly textTransformation: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatement): any;
export declare function wafv2RuleGroupRuleStatementSqliMatchStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementOutputReference | Wafv2RuleGroupRuleStatementSqliMatchStatement): any;
export declare class Wafv2RuleGroupRuleStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#body Wafv2RuleGroup#body}
    */
    readonly body?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#method Wafv2RuleGroup#method}
    */
    readonly method?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
    */
    readonly queryString?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
    */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
    */
    readonly uriPath?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#type Wafv2RuleGroup#type}
    */
    readonly type: string;
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationOutputReference;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
    */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
    */
    readonly textTransformation: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatement): any;
export declare function wafv2RuleGroupRuleStatementXssMatchStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementOutputReference | Wafv2RuleGroupRuleStatementXssMatchStatement): any;
export declare class Wafv2RuleGroupRuleStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2RuleGroupRuleStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#and_statement Wafv2RuleGroup#and_statement}
    */
    readonly andStatement?: Wafv2RuleGroupRuleStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#byte_match_statement Wafv2RuleGroup#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#geo_match_statement Wafv2RuleGroup#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#label_match_statement Wafv2RuleGroup#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2RuleGroupRuleStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#not_statement Wafv2RuleGroup#not_statement}
    */
    readonly notStatement?: Wafv2RuleGroupRuleStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#or_statement Wafv2RuleGroup#or_statement}
    */
    readonly orStatement?: Wafv2RuleGroupRuleStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#xss_match_statement Wafv2RuleGroup#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementXssMatchStatement;
}
export declare function wafv2RuleGroupRuleStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOutputReference | Wafv2RuleGroupRuleStatement): any;
export declare function wafv2RuleGroupRuleStatementToHclTerraform(struct?: Wafv2RuleGroupRuleStatementOutputReference | Wafv2RuleGroupRuleStatement): any;
export declare class Wafv2RuleGroupRuleStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleStatement | undefined;
    set internalValue(value: Wafv2RuleGroupRuleStatement | undefined);
    private _andStatement;
    get andStatement(): Wafv2RuleGroupRuleStatementAndStatementOutputReference;
    putAndStatement(value: Wafv2RuleGroupRuleStatementAndStatement): void;
    resetAndStatement(): void;
    get andStatementInput(): Wafv2RuleGroupRuleStatementAndStatement | undefined;
    private _byteMatchStatement;
    get byteMatchStatement(): Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference;
    putByteMatchStatement(value: Wafv2RuleGroupRuleStatementByteMatchStatement): void;
    resetByteMatchStatement(): void;
    get byteMatchStatementInput(): Wafv2RuleGroupRuleStatementByteMatchStatement | undefined;
    private _geoMatchStatement;
    get geoMatchStatement(): Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference;
    putGeoMatchStatement(value: Wafv2RuleGroupRuleStatementGeoMatchStatement): void;
    resetGeoMatchStatement(): void;
    get geoMatchStatementInput(): Wafv2RuleGroupRuleStatementGeoMatchStatement | undefined;
    private _ipSetReferenceStatement;
    get ipSetReferenceStatement(): Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference;
    putIpSetReferenceStatement(value: Wafv2RuleGroupRuleStatementIpSetReferenceStatement): void;
    resetIpSetReferenceStatement(): void;
    get ipSetReferenceStatementInput(): Wafv2RuleGroupRuleStatementIpSetReferenceStatement | undefined;
    private _labelMatchStatement;
    get labelMatchStatement(): Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference;
    putLabelMatchStatement(value: Wafv2RuleGroupRuleStatementLabelMatchStatement): void;
    resetLabelMatchStatement(): void;
    get labelMatchStatementInput(): Wafv2RuleGroupRuleStatementLabelMatchStatement | undefined;
    private _notStatement;
    get notStatement(): Wafv2RuleGroupRuleStatementNotStatementOutputReference;
    putNotStatement(value: Wafv2RuleGroupRuleStatementNotStatement): void;
    resetNotStatement(): void;
    get notStatementInput(): Wafv2RuleGroupRuleStatementNotStatement | undefined;
    private _orStatement;
    get orStatement(): Wafv2RuleGroupRuleStatementOrStatementOutputReference;
    putOrStatement(value: Wafv2RuleGroupRuleStatementOrStatement): void;
    resetOrStatement(): void;
    get orStatementInput(): Wafv2RuleGroupRuleStatementOrStatement | undefined;
    private _regexPatternSetReferenceStatement;
    get regexPatternSetReferenceStatement(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementOutputReference;
    putRegexPatternSetReferenceStatement(value: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement): void;
    resetRegexPatternSetReferenceStatement(): void;
    get regexPatternSetReferenceStatementInput(): Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement | undefined;
    private _sizeConstraintStatement;
    get sizeConstraintStatement(): Wafv2RuleGroupRuleStatementSizeConstraintStatementOutputReference;
    putSizeConstraintStatement(value: Wafv2RuleGroupRuleStatementSizeConstraintStatement): void;
    resetSizeConstraintStatement(): void;
    get sizeConstraintStatementInput(): Wafv2RuleGroupRuleStatementSizeConstraintStatement | undefined;
    private _sqliMatchStatement;
    get sqliMatchStatement(): Wafv2RuleGroupRuleStatementSqliMatchStatementOutputReference;
    putSqliMatchStatement(value: Wafv2RuleGroupRuleStatementSqliMatchStatement): void;
    resetSqliMatchStatement(): void;
    get sqliMatchStatementInput(): Wafv2RuleGroupRuleStatementSqliMatchStatement | undefined;
    private _xssMatchStatement;
    get xssMatchStatement(): Wafv2RuleGroupRuleStatementXssMatchStatementOutputReference;
    putXssMatchStatement(value: Wafv2RuleGroupRuleStatementXssMatchStatement): void;
    resetXssMatchStatement(): void;
    get xssMatchStatementInput(): Wafv2RuleGroupRuleStatementXssMatchStatement | undefined;
}
export interface Wafv2RuleGroupRuleVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleVisibilityConfigToTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfigOutputReference | Wafv2RuleGroupRuleVisibilityConfig): any;
export declare function wafv2RuleGroupRuleVisibilityConfigToHclTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfigOutputReference | Wafv2RuleGroupRuleVisibilityConfig): any;
export declare class Wafv2RuleGroupRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleVisibilityConfig | undefined;
    set internalValue(value: Wafv2RuleGroupRuleVisibilityConfig | undefined);
    private _cloudwatchMetricsEnabled?;
    get cloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    get cloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _sampledRequestsEnabled?;
    get sampledRequestsEnabled(): boolean | cdktf.IResolvable;
    set sampledRequestsEnabled(value: boolean | cdktf.IResolvable);
    get sampledRequestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Wafv2RuleGroupRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}
    */
    readonly action: Wafv2RuleGroupRuleAction;
    /**
    * rule_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}
    */
    readonly ruleLabel?: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}
    */
    readonly statement: Wafv2RuleGroupRuleStatement;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}
    */
    readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfig;
}
export declare function wafv2RuleGroupRuleToTerraform(struct?: Wafv2RuleGroupRule | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleToHclTerraform(struct?: Wafv2RuleGroupRule | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRule | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRule | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _action;
    get action(): Wafv2RuleGroupRuleActionOutputReference;
    putAction(value: Wafv2RuleGroupRuleAction): void;
    get actionInput(): Wafv2RuleGroupRuleAction | undefined;
    private _ruleLabel;
    get ruleLabel(): Wafv2RuleGroupRuleRuleLabelList;
    putRuleLabel(value: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable): void;
    resetRuleLabel(): void;
    get ruleLabelInput(): cdktf.IResolvable | Wafv2RuleGroupRuleRuleLabel[] | undefined;
    private _statement;
    get statement(): Wafv2RuleGroupRuleStatementOutputReference;
    putStatement(value: Wafv2RuleGroupRuleStatement): void;
    get statementInput(): Wafv2RuleGroupRuleStatement | undefined;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2RuleGroupRuleVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2RuleGroupRuleVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2RuleGroupRuleVisibilityConfig | undefined;
}
export declare class Wafv2RuleGroupRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleOutputReference;
}
export interface Wafv2RuleGroupVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2RuleGroupVisibilityConfigToTerraform(struct?: Wafv2RuleGroupVisibilityConfigOutputReference | Wafv2RuleGroupVisibilityConfig): any;
export declare function wafv2RuleGroupVisibilityConfigToHclTerraform(struct?: Wafv2RuleGroupVisibilityConfigOutputReference | Wafv2RuleGroupVisibilityConfig): any;
export declare class Wafv2RuleGroupVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupVisibilityConfig | undefined;
    set internalValue(value: Wafv2RuleGroupVisibilityConfig | undefined);
    private _cloudwatchMetricsEnabled?;
    get cloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    get cloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _sampledRequestsEnabled?;
    get sampledRequestsEnabled(): boolean | cdktf.IResolvable;
    set sampledRequestsEnabled(value: boolean | cdktf.IResolvable);
    get sampledRequestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group aws_wafv2_rule_group}
*/
export declare class Wafv2RuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_rule_group";
    /**
    * Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2RuleGroup to import
    * @param importFromId The id of the existing Wafv2RuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2RuleGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_rule_group aws_wafv2_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig);
    get arn(): string;
    private _capacity?;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lockToken(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
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
    private _customResponseBody;
    get customResponseBody(): Wafv2RuleGroupCustomResponseBodyList;
    putCustomResponseBody(value: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable): void;
    resetCustomResponseBody(): void;
    get customResponseBodyInput(): cdktf.IResolvable | Wafv2RuleGroupCustomResponseBody[] | undefined;
    private _rule;
    get rule(): Wafv2RuleGroupRuleList;
    putRule(value: Wafv2RuleGroupRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | Wafv2RuleGroupRule[] | undefined;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2RuleGroupVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2RuleGroupVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2RuleGroupVisibilityConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
