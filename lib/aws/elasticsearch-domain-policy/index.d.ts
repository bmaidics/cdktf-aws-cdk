/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticsearchDomainPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#access_policies ElasticsearchDomainPolicy#access_policies}
    */
    readonly accessPolicies: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#domain_name ElasticsearchDomainPolicy#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#id ElasticsearchDomainPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy aws_elasticsearch_domain_policy}
*/
export declare class ElasticsearchDomainPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticsearch_domain_policy";
    /**
    * Generates CDKTF code for importing a ElasticsearchDomainPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticsearchDomainPolicy to import
    * @param importFromId The id of the existing ElasticsearchDomainPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticsearchDomainPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy aws_elasticsearch_domain_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainPolicyConfig);
    private _accessPolicies?;
    get accessPolicies(): string;
    set accessPolicies(value: string);
    get accessPoliciesInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
