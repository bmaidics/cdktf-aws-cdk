/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamPoolCidrConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}
    */
    readonly ipamPoolId: string;
    /**
    * cidr_authorization_context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}
    */
    readonly cidrAuthorizationContext?: VpcIpamPoolCidrCidrAuthorizationContext;
}
export interface VpcIpamPoolCidrCidrAuthorizationContext {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}
    */
    readonly signature?: string;
}
export declare function vpcIpamPoolCidrCidrAuthorizationContextToTerraform(struct?: VpcIpamPoolCidrCidrAuthorizationContextOutputReference | VpcIpamPoolCidrCidrAuthorizationContext): any;
export declare function vpcIpamPoolCidrCidrAuthorizationContextToHclTerraform(struct?: VpcIpamPoolCidrCidrAuthorizationContextOutputReference | VpcIpamPoolCidrCidrAuthorizationContext): any;
export declare class VpcIpamPoolCidrCidrAuthorizationContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcIpamPoolCidrCidrAuthorizationContext | undefined;
    set internalValue(value: VpcIpamPoolCidrCidrAuthorizationContext | undefined);
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
    private _signature?;
    get signature(): string;
    set signature(value: string);
    resetSignature(): void;
    get signatureInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr}
*/
export declare class VpcIpamPoolCidr extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam_pool_cidr";
    /**
    * Generates CDKTF code for importing a VpcIpamPoolCidr resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpamPoolCidr to import
    * @param importFromId The id of the existing VpcIpamPoolCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpamPoolCidr to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolCidrConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPoolCidrConfig);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    resetCidr(): void;
    get cidrInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    get ipamPoolIdInput(): string | undefined;
    private _cidrAuthorizationContext;
    get cidrAuthorizationContext(): VpcIpamPoolCidrCidrAuthorizationContextOutputReference;
    putCidrAuthorizationContext(value: VpcIpamPoolCidrCidrAuthorizationContext): void;
    resetCidrAuthorizationContext(): void;
    get cidrAuthorizationContextInput(): VpcIpamPoolCidrCidrAuthorizationContext | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
