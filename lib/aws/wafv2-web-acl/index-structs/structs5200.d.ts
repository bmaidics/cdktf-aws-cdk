/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference } from './structs4800';
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementOutputReference, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatementOutputReference } from './structs3600';
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement, Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementOutputReference } from './structs4400';
import { Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig, Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference, Wafv2WebAclRuleStatementOrStatement, Wafv2WebAclRuleStatementOrStatementOutputReference } from './structs2800';
import { Wafv2WebAclRuleStatementAndStatement, Wafv2WebAclRuleStatementAndStatementOutputReference, Wafv2WebAclRuleStatementByteMatchStatement, Wafv2WebAclRuleStatementByteMatchStatementOutputReference, Wafv2WebAclRuleStatementGeoMatchStatement, Wafv2WebAclRuleStatementGeoMatchStatementOutputReference, Wafv2WebAclRuleStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementIpSetReferenceStatementOutputReference, Wafv2WebAclRuleStatementLabelMatchStatement, Wafv2WebAclRuleStatementLabelMatchStatementOutputReference, Wafv2WebAclRuleAction, Wafv2WebAclRuleActionOutputReference, Wafv2WebAclRuleOverrideAction, Wafv2WebAclRuleOverrideActionOutputReference, Wafv2WebAclRuleRuleLabel, Wafv2WebAclRuleRuleLabelList } from './structs0';
import { Wafv2WebAclRuleStatementManagedRuleGroupStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference, Wafv2WebAclRuleStatementNotStatement, Wafv2WebAclRuleStatementNotStatementOutputReference } from './structs2400';
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined);
    private _andStatement;
    get andStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementOutputReference;
    putAndStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement): void;
    resetAndStatement(): void;
    get andStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement | undefined;
    private _byteMatchStatement;
    get byteMatchStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementOutputReference;
    putByteMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement): void;
    resetByteMatchStatement(): void;
    get byteMatchStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement | undefined;
    private _geoMatchStatement;
    get geoMatchStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementOutputReference;
    putGeoMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement): void;
    resetGeoMatchStatement(): void;
    get geoMatchStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement | undefined;
    private _ipSetReferenceStatement;
    get ipSetReferenceStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementOutputReference;
    putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement): void;
    resetIpSetReferenceStatement(): void;
    get ipSetReferenceStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement | undefined;
    private _labelMatchStatement;
    get labelMatchStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatementOutputReference;
    putLabelMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement): void;
    resetLabelMatchStatement(): void;
    get labelMatchStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement | undefined;
    private _notStatement;
    get notStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementOutputReference;
    putNotStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement): void;
    resetNotStatement(): void;
    get notStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement | undefined;
    private _orStatement;
    get orStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference;
    putOrStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement): void;
    resetOrStatement(): void;
    get orStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement | undefined;
    private _regexPatternSetReferenceStatement;
    get regexPatternSetReferenceStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference;
    putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement): void;
    resetRegexPatternSetReferenceStatement(): void;
    get regexPatternSetReferenceStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement | undefined;
    private _sizeConstraintStatement;
    get sizeConstraintStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference;
    putSizeConstraintStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement): void;
    resetSizeConstraintStatement(): void;
    get sizeConstraintStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement | undefined;
    private _sqliMatchStatement;
    get sqliMatchStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference;
    putSqliMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement): void;
    resetSqliMatchStatement(): void;
    get sqliMatchStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined;
    private _xssMatchStatement;
    get xssMatchStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference;
    putXssMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement): void;
    resetXssMatchStatement(): void;
    get xssMatchStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined;
}
export interface Wafv2WebAclRuleStatementRateBasedStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#aggregate_key_type Wafv2WebAcl#aggregate_key_type}
    */
    readonly aggregateKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#limit Wafv2WebAcl#limit}
    */
    readonly limit: number;
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig;
    /**
    * scope_down_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#scope_down_statement Wafv2WebAcl#scope_down_statement}
    */
    readonly scopeDownStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatement): any;
export declare function wafv2WebAclRuleStatementRateBasedStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatement | undefined);
    private _aggregateKeyType?;
    get aggregateKeyType(): string;
    set aggregateKeyType(value: string);
    resetAggregateKeyType(): void;
    get aggregateKeyTypeInput(): string | undefined;
    private _limit?;
    get limit(): number;
    set limit(value: number);
    get limitInput(): number | undefined;
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig | undefined;
    private _scopeDownStatement;
    get scopeDownStatement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference;
    putScopeDownStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement): void;
    resetScopeDownStatement(): void;
    get scopeDownStatementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined;
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement): any;
export declare function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleToTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleToHclTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleOutputReference;
}
export interface Wafv2WebAclRuleStatementRuleGroupReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * excluded_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#excluded_rule Wafv2WebAcl#excluded_rule}
    */
    readonly excludedRule?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementRuleGroupReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference | Wafv2WebAclRuleStatementRuleGroupReferenceStatement): any;
export declare function wafv2WebAclRuleStatementRuleGroupReferenceStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference | Wafv2WebAclRuleStatementRuleGroupReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _excludedRule;
    get excludedRule(): Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleList;
    putExcludedRule(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | cdktf.IResolvable): void;
    resetExcludedRule(): void;
    get excludedRuleInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | undefined;
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatement): any;
export declare function wafv2WebAclRuleStatementSizeConstraintStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementSqliMatchStatement): any;
export declare function wafv2WebAclRuleStatementSqliMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    private _body;
    get body(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined;
    private _method;
    get method(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined;
}
export interface Wafv2WebAclRuleStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Wafv2WebAclRuleStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleStatementXssMatchStatementTextTransformationOutputReference;
}
export interface Wafv2WebAclRuleStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementXssMatchStatement): any;
export declare function wafv2WebAclRuleStatementXssMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined;
    private _textTransformation;
    get textTransformation(): Wafv2WebAclRuleStatementXssMatchStatementTextTransformationList;
    putTextTransformation(value: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable): void;
    get textTransformationInput(): cdktf.IResolvable | Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | undefined;
}
export interface Wafv2WebAclRuleStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementLabelMatchStatement;
    /**
    * managed_rule_group_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#managed_rule_group_statement Wafv2WebAcl#managed_rule_group_statement}
    */
    readonly managedRuleGroupStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementOrStatement;
    /**
    * rate_based_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#rate_based_statement Wafv2WebAcl#rate_based_statement}
    */
    readonly rateBasedStatement?: Wafv2WebAclRuleStatementRateBasedStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement;
    /**
    * rule_group_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#rule_group_reference_statement Wafv2WebAcl#rule_group_reference_statement}
    */
    readonly ruleGroupReferenceStatement?: Wafv2WebAclRuleStatementRuleGroupReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementToTerraform(struct?: Wafv2WebAclRuleStatementOutputReference | Wafv2WebAclRuleStatement): any;
export declare function wafv2WebAclRuleStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOutputReference | Wafv2WebAclRuleStatement): any;
export declare class Wafv2WebAclRuleStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatement | undefined);
    private _andStatement;
    get andStatement(): Wafv2WebAclRuleStatementAndStatementOutputReference;
    putAndStatement(value: Wafv2WebAclRuleStatementAndStatement): void;
    resetAndStatement(): void;
    get andStatementInput(): Wafv2WebAclRuleStatementAndStatement | undefined;
    private _byteMatchStatement;
    get byteMatchStatement(): Wafv2WebAclRuleStatementByteMatchStatementOutputReference;
    putByteMatchStatement(value: Wafv2WebAclRuleStatementByteMatchStatement): void;
    resetByteMatchStatement(): void;
    get byteMatchStatementInput(): Wafv2WebAclRuleStatementByteMatchStatement | undefined;
    private _geoMatchStatement;
    get geoMatchStatement(): Wafv2WebAclRuleStatementGeoMatchStatementOutputReference;
    putGeoMatchStatement(value: Wafv2WebAclRuleStatementGeoMatchStatement): void;
    resetGeoMatchStatement(): void;
    get geoMatchStatementInput(): Wafv2WebAclRuleStatementGeoMatchStatement | undefined;
    private _ipSetReferenceStatement;
    get ipSetReferenceStatement(): Wafv2WebAclRuleStatementIpSetReferenceStatementOutputReference;
    putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementIpSetReferenceStatement): void;
    resetIpSetReferenceStatement(): void;
    get ipSetReferenceStatementInput(): Wafv2WebAclRuleStatementIpSetReferenceStatement | undefined;
    private _labelMatchStatement;
    get labelMatchStatement(): Wafv2WebAclRuleStatementLabelMatchStatementOutputReference;
    putLabelMatchStatement(value: Wafv2WebAclRuleStatementLabelMatchStatement): void;
    resetLabelMatchStatement(): void;
    get labelMatchStatementInput(): Wafv2WebAclRuleStatementLabelMatchStatement | undefined;
    private _managedRuleGroupStatement;
    get managedRuleGroupStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference;
    putManagedRuleGroupStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatement): void;
    resetManagedRuleGroupStatement(): void;
    get managedRuleGroupStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatement | undefined;
    private _notStatement;
    get notStatement(): Wafv2WebAclRuleStatementNotStatementOutputReference;
    putNotStatement(value: Wafv2WebAclRuleStatementNotStatement): void;
    resetNotStatement(): void;
    get notStatementInput(): Wafv2WebAclRuleStatementNotStatement | undefined;
    private _orStatement;
    get orStatement(): Wafv2WebAclRuleStatementOrStatementOutputReference;
    putOrStatement(value: Wafv2WebAclRuleStatementOrStatement): void;
    resetOrStatement(): void;
    get orStatementInput(): Wafv2WebAclRuleStatementOrStatement | undefined;
    private _rateBasedStatement;
    get rateBasedStatement(): Wafv2WebAclRuleStatementRateBasedStatementOutputReference;
    putRateBasedStatement(value: Wafv2WebAclRuleStatementRateBasedStatement): void;
    resetRateBasedStatement(): void;
    get rateBasedStatementInput(): Wafv2WebAclRuleStatementRateBasedStatement | undefined;
    private _regexPatternSetReferenceStatement;
    get regexPatternSetReferenceStatement(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference;
    putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement): void;
    resetRegexPatternSetReferenceStatement(): void;
    get regexPatternSetReferenceStatementInput(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined;
    private _ruleGroupReferenceStatement;
    get ruleGroupReferenceStatement(): Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference;
    putRuleGroupReferenceStatement(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatement): void;
    resetRuleGroupReferenceStatement(): void;
    get ruleGroupReferenceStatementInput(): Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined;
    private _sizeConstraintStatement;
    get sizeConstraintStatement(): Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference;
    putSizeConstraintStatement(value: Wafv2WebAclRuleStatementSizeConstraintStatement): void;
    resetSizeConstraintStatement(): void;
    get sizeConstraintStatementInput(): Wafv2WebAclRuleStatementSizeConstraintStatement | undefined;
    private _sqliMatchStatement;
    get sqliMatchStatement(): Wafv2WebAclRuleStatementSqliMatchStatementOutputReference;
    putSqliMatchStatement(value: Wafv2WebAclRuleStatementSqliMatchStatement): void;
    resetSqliMatchStatement(): void;
    get sqliMatchStatementInput(): Wafv2WebAclRuleStatementSqliMatchStatement | undefined;
    private _xssMatchStatement;
    get xssMatchStatement(): Wafv2WebAclRuleStatementXssMatchStatementOutputReference;
    putXssMatchStatement(value: Wafv2WebAclRuleStatementXssMatchStatement): void;
    resetXssMatchStatement(): void;
    get xssMatchStatementInput(): Wafv2WebAclRuleStatementXssMatchStatement | undefined;
}
export interface Wafv2WebAclRuleVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleVisibilityConfigToTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any;
export declare function wafv2WebAclRuleVisibilityConfigToHclTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any;
export declare class Wafv2WebAclRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleVisibilityConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleVisibilityConfig | undefined);
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
export interface Wafv2WebAclRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#action Wafv2WebAcl#action}
    */
    readonly action?: Wafv2WebAclRuleAction;
    /**
    * override_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#override_action Wafv2WebAcl#override_action}
    */
    readonly overrideAction?: Wafv2WebAclRuleOverrideAction;
    /**
    * rule_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}
    */
    readonly ruleLabel?: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatement;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
    */
    readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfig;
}
export declare function wafv2WebAclRuleToTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleToHclTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRule | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRule | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _action;
    get action(): Wafv2WebAclRuleActionOutputReference;
    putAction(value: Wafv2WebAclRuleAction): void;
    resetAction(): void;
    get actionInput(): Wafv2WebAclRuleAction | undefined;
    private _overrideAction;
    get overrideAction(): Wafv2WebAclRuleOverrideActionOutputReference;
    putOverrideAction(value: Wafv2WebAclRuleOverrideAction): void;
    resetOverrideAction(): void;
    get overrideActionInput(): Wafv2WebAclRuleOverrideAction | undefined;
    private _ruleLabel;
    get ruleLabel(): Wafv2WebAclRuleRuleLabelList;
    putRuleLabel(value: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable): void;
    resetRuleLabel(): void;
    get ruleLabelInput(): cdktf.IResolvable | Wafv2WebAclRuleRuleLabel[] | undefined;
    private _statement;
    get statement(): Wafv2WebAclRuleStatementOutputReference;
    putStatement(value: Wafv2WebAclRuleStatement): void;
    get statementInput(): Wafv2WebAclRuleStatement | undefined;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2WebAclRuleVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2WebAclRuleVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2WebAclRuleVisibilityConfig | undefined;
}
export declare class Wafv2WebAclRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleOutputReference;
}
export interface Wafv2WebAclVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2WebAclVisibilityConfigToTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any;
export declare function wafv2WebAclVisibilityConfigToHclTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any;
export declare class Wafv2WebAclVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclVisibilityConfig | undefined;
    set internalValue(value: Wafv2WebAclVisibilityConfig | undefined);
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
