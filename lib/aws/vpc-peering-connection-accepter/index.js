"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcPeeringConnectionAccepterA = exports.VpcPeeringConnectionAccepterRequesterOutputReference = exports.vpcPeeringConnectionAccepterRequesterToHclTerraform = exports.vpcPeeringConnectionAccepterRequesterToTerraform = exports.VpcPeeringConnectionAccepterAccepterOutputReference = exports.vpcPeeringConnectionAccepterAccepterToHclTerraform = exports.vpcPeeringConnectionAccepterAccepterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function vpcPeeringConnectionAccepterAccepterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink),
    };
}
exports.vpcPeeringConnectionAccepterAccepterToTerraform = vpcPeeringConnectionAccepterAccepterToTerraform;
function vpcPeeringConnectionAccepterAccepterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_classic_link_to_remote_vpc: {
            value: cdktf.booleanToHclTerraform(struct.allowClassicLinkToRemoteVpc),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_remote_vpc_dns_resolution: {
            value: cdktf.booleanToHclTerraform(struct.allowRemoteVpcDnsResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_vpc_to_remote_classic_link: {
            value: cdktf.booleanToHclTerraform(struct.allowVpcToRemoteClassicLink),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.vpcPeeringConnectionAccepterAccepterToHclTerraform = vpcPeeringConnectionAccepterAccepterToHclTerraform;
class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowClassicLinkToRemoteVpc !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
        }
        if (this._allowRemoteVpcDnsResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
        }
        if (this._allowVpcToRemoteClassicLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowClassicLinkToRemoteVpc = undefined;
            this._allowRemoteVpcDnsResolution = undefined;
            this._allowVpcToRemoteClassicLink = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
            this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
            this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
        }
    }
    get allowClassicLinkToRemoteVpc() {
        return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
    }
    set allowClassicLinkToRemoteVpc(value) {
        this._allowClassicLinkToRemoteVpc = value;
    }
    resetAllowClassicLinkToRemoteVpc() {
        this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowClassicLinkToRemoteVpcInput() {
        return this._allowClassicLinkToRemoteVpc;
    }
    get allowRemoteVpcDnsResolution() {
        return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
    }
    set allowRemoteVpcDnsResolution(value) {
        this._allowRemoteVpcDnsResolution = value;
    }
    resetAllowRemoteVpcDnsResolution() {
        this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowRemoteVpcDnsResolutionInput() {
        return this._allowRemoteVpcDnsResolution;
    }
    get allowVpcToRemoteClassicLink() {
        return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
    }
    set allowVpcToRemoteClassicLink(value) {
        this._allowVpcToRemoteClassicLink = value;
    }
    resetAllowVpcToRemoteClassicLink() {
        this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowVpcToRemoteClassicLinkInput() {
        return this._allowVpcToRemoteClassicLink;
    }
}
exports.VpcPeeringConnectionAccepterAccepterOutputReference = VpcPeeringConnectionAccepterAccepterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionAccepterAccepterOutputReference[_a] = { fqn: "@cdktf/aws-cdk.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference", version: "0.0.0" };
function vpcPeeringConnectionAccepterRequesterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink),
    };
}
exports.vpcPeeringConnectionAccepterRequesterToTerraform = vpcPeeringConnectionAccepterRequesterToTerraform;
function vpcPeeringConnectionAccepterRequesterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_classic_link_to_remote_vpc: {
            value: cdktf.booleanToHclTerraform(struct.allowClassicLinkToRemoteVpc),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_remote_vpc_dns_resolution: {
            value: cdktf.booleanToHclTerraform(struct.allowRemoteVpcDnsResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_vpc_to_remote_classic_link: {
            value: cdktf.booleanToHclTerraform(struct.allowVpcToRemoteClassicLink),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.vpcPeeringConnectionAccepterRequesterToHclTerraform = vpcPeeringConnectionAccepterRequesterToHclTerraform;
class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowClassicLinkToRemoteVpc !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
        }
        if (this._allowRemoteVpcDnsResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
        }
        if (this._allowVpcToRemoteClassicLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowClassicLinkToRemoteVpc = undefined;
            this._allowRemoteVpcDnsResolution = undefined;
            this._allowVpcToRemoteClassicLink = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
            this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
            this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
        }
    }
    get allowClassicLinkToRemoteVpc() {
        return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
    }
    set allowClassicLinkToRemoteVpc(value) {
        this._allowClassicLinkToRemoteVpc = value;
    }
    resetAllowClassicLinkToRemoteVpc() {
        this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowClassicLinkToRemoteVpcInput() {
        return this._allowClassicLinkToRemoteVpc;
    }
    get allowRemoteVpcDnsResolution() {
        return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
    }
    set allowRemoteVpcDnsResolution(value) {
        this._allowRemoteVpcDnsResolution = value;
    }
    resetAllowRemoteVpcDnsResolution() {
        this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowRemoteVpcDnsResolutionInput() {
        return this._allowRemoteVpcDnsResolution;
    }
    get allowVpcToRemoteClassicLink() {
        return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
    }
    set allowVpcToRemoteClassicLink(value) {
        this._allowVpcToRemoteClassicLink = value;
    }
    resetAllowVpcToRemoteClassicLink() {
        this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowVpcToRemoteClassicLinkInput() {
        return this._allowVpcToRemoteClassicLink;
    }
}
exports.VpcPeeringConnectionAccepterRequesterOutputReference = VpcPeeringConnectionAccepterRequesterOutputReference;
_b = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionAccepterRequesterOutputReference[_b] = { fqn: "@cdktf/aws-cdk.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}
*/
class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a VpcPeeringConnectionAccepterA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcPeeringConnectionAccepterA to import
    * @param importFromId The id of the existing VpcPeeringConnectionAccepterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcPeeringConnectionAccepterA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_peering_connection_accepter", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionAccepterAConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws',
                providerVersion: '3.76.1',
                providerVersionConstraint: '~> 3.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        // accepter - computed: false, optional: true, required: false
        this._accepter = new VpcPeeringConnectionAccepterAccepterOutputReference(this, "accepter");
        // requester - computed: false, optional: true, required: false
        this._requester = new VpcPeeringConnectionAccepterRequesterOutputReference(this, "requester");
        this._autoAccept = config.autoAccept;
        this._id = config.id;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        this._accepter.internalValue = config.accepter;
        this._requester.internalValue = config.requester;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accept_status - computed: true, optional: false, required: false
    get acceptStatus() {
        return this.getStringAttribute('accept_status');
    }
    get autoAccept() {
        return this.getBooleanAttribute('auto_accept');
    }
    set autoAccept(value) {
        this._autoAccept = value;
    }
    resetAutoAccept() {
        this._autoAccept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoAcceptInput() {
        return this._autoAccept;
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // peer_owner_id - computed: true, optional: false, required: false
    get peerOwnerId() {
        return this.getStringAttribute('peer_owner_id');
    }
    // peer_region - computed: true, optional: false, required: false
    get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    // peer_vpc_id - computed: true, optional: false, required: false
    get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
    }
    get tags() {
        return this.getStringMapAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.getStringMapAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
    set vpcPeeringConnectionId(value) {
        this._vpcPeeringConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcPeeringConnectionIdInput() {
        return this._vpcPeeringConnectionId;
    }
    get accepter() {
        return this._accepter;
    }
    putAccepter(value) {
        this._accepter.internalValue = value;
    }
    resetAccepter() {
        this._accepter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accepterInput() {
        return this._accepter.internalValue;
    }
    get requester() {
        return this._requester;
    }
    putRequester(value) {
        this._requester.internalValue = value;
    }
    resetRequester() {
        this._requester.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requesterInput() {
        return this._requester.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_accept: cdktf.booleanToTerraform(this._autoAccept),
            id: cdktf.stringToTerraform(this._id),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter.internalValue),
            requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            auto_accept: {
                value: cdktf.booleanToHclTerraform(this._autoAccept),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tags_all: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            vpc_peering_connection_id: {
                value: cdktf.stringToHclTerraform(this._vpcPeeringConnectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            accepter: {
                value: vpcPeeringConnectionAccepterAccepterToHclTerraform(this._accepter.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "VpcPeeringConnectionAccepterAccepterList",
            },
            requester: {
                value: vpcPeeringConnectionAccepterRequesterToHclTerraform(this._requester.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "VpcPeeringConnectionAccepterRequesterList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.VpcPeeringConnectionAccepterA = VpcPeeringConnectionAccepterA;
_c = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionAccepterA[_c] = { fqn: "@cdktf/aws-cdk.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
VpcPeeringConnectionAccepterA.tfResourceType = "aws_vpc_peering_connection_accepter";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3ZwYy1wZWVyaW5nLWNvbm5lY3Rpb24tYWNjZXB0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUF3RC9CLFNBQWdCLCtDQUErQyxDQUFDLE1BQW1HO0lBQ2pLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQy9GLCtCQUErQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDOUYsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztLQUNoRyxDQUFBO0FBQ0gsQ0FBQztBQVZELDBHQVVDO0FBR0QsU0FBZ0Isa0RBQWtELENBQUMsTUFBbUc7SUFDcEssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9I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QU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUFuUUgsc0VBb1FDOzs7QUFsUUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw0Q0FBYyxHQUFHLHFDQUFxQyxBQUF4QyxDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXJcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyI2F1dG9fYWNjZXB0IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBI2F1dG9fYWNjZXB0fVxuICAqL1xuICByZWFkb25seSBhdXRvQWNjZXB0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyI2lkIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyI3RhZ3MgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXIjdGFnc19hbGwgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyI3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEjdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZDogc3RyaW5nO1xuICAvKipcbiAgKiBhY2NlcHRlciBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9hY2NlcHRlciNhY2NlcHRlciBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSNhY2NlcHRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXB0ZXI/OiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQWNjZXB0ZXI7XG4gIC8qKlxuICAqIHJlcXVlc3RlciBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9hY2NlcHRlciNyZXF1ZXN0ZXIgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEjcmVxdWVzdGVyfVxuICAqL1xuICByZWFkb25seSByZXF1ZXN0ZXI/OiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQWNjZXB0ZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyI2FsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBI2FsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjfVxuICAqL1xuICByZWFkb25seSBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXIjYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSNhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9ufVxuICAqL1xuICByZWFkb25seSBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXIjYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmsgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEjYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmt9XG4gICovXG4gIHJlYWRvbmx5IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlclRvVGVycmFmb3JtKHN0cnVjdD86IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlck91dHB1dFJlZmVyZW5jZSB8IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24pLFxuICAgIGFsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlck91dHB1dFJlZmVyZW5jZSB8IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbms6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQWNjZXB0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHZhbHVlLmFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYztcbiAgICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlLmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICAgIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHZhbHVlLmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMoKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjO1xuICB9XG5cbiAgLy8gYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gIH1cblxuICAvLyBhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsoKSB7XG4gICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmtJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyI2FsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBI2FsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjfVxuICAqL1xuICByZWFkb25seSBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXIjYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSNhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9ufVxuICAqL1xuICByZWFkb25seSBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXIjYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmsgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEjYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmt9XG4gICovXG4gIHJlYWRvbmx5IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyT3V0cHV0UmVmZXJlbmNlIHwgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlclJlcXVlc3Rlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24pLFxuICAgIGFsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyT3V0cHV0UmVmZXJlbmNlIHwgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlclJlcXVlc3Rlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbms6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uID0gdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHZhbHVlLmFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYztcbiAgICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlLmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICAgIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHZhbHVlLmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMoKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjO1xuICB9XG5cbiAgLy8gYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gIH1cblxuICAvLyBhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsoKSB7XG4gICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmtJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyIGF3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyfVxuKi9cbmV4cG9ydCBjbGFzcyBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9hY2NlcHRlclwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckEgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fYWNjZXB0ZXIjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9hY2NlcHRlciBhd3NfdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9hY2NlcHRlcn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0b0FjY2VwdCA9IGNvbmZpZy5hdXRvQWNjZXB0O1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCA9IGNvbmZpZy52cGNQZWVyaW5nQ29ubmVjdGlvbklkO1xuICAgIHRoaXMuX2FjY2VwdGVyLmludGVybmFsVmFsdWUgPSBjb25maWcuYWNjZXB0ZXI7XG4gICAgdGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWUgPSBjb25maWcucmVxdWVzdGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2NlcHRfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXB0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXB0X3N0YXR1cycpO1xuICB9XG5cbiAgLy8gYXV0b19hY2NlcHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0FjY2VwdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXV0b0FjY2VwdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2FjY2VwdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0FjY2VwdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b0FjY2VwdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9BY2NlcHQoKSB7XG4gICAgdGhpcy5fYXV0b0FjY2VwdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0FjY2VwdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQWNjZXB0O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gcGVlcl9vd25lcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlZXJPd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVlcl9vd25lcl9pZCcpO1xuICB9XG5cbiAgLy8gcGVlcl9yZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwZWVyUmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVlcl9yZWdpb24nKTtcbiAgfVxuXG4gIC8vIHBlZXJfdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVlclZwY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVlcl92cGNfaWQnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3NfYWxsJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuXG4gIC8vIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkO1xuICB9XG5cbiAgLy8gYWNjZXB0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXB0ZXIgPSBuZXcgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXB0ZXJcIik7XG4gIHB1YmxpYyBnZXQgYWNjZXB0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2VwdGVyO1xuICB9XG4gIHB1YmxpYyBwdXRBY2NlcHRlcih2YWx1ZTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyKSB7XG4gICAgdGhpcy5fYWNjZXB0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY2VwdGVyKCkge1xuICAgIHRoaXMuX2FjY2VwdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2VwdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2VwdGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZXF1ZXN0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWVzdGVyID0gbmV3IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZXF1ZXN0ZXJcIik7XG4gIHB1YmxpYyBnZXQgcmVxdWVzdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXI7XG4gIH1cbiAgcHVibGljIHB1dFJlcXVlc3Rlcih2YWx1ZTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlclJlcXVlc3Rlcikge1xuICAgIHRoaXMuX3JlcXVlc3Rlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdGVyKCkge1xuICAgIHRoaXMuX3JlcXVlc3Rlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dG9fYWNjZXB0OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXV0b0FjY2VwdCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkKSxcbiAgICAgIGFjY2VwdGVyOiB2cGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQWNjZXB0ZXJUb1RlcnJhZm9ybSh0aGlzLl9hY2NlcHRlci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHJlcXVlc3RlcjogdnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlclJlcXVlc3RlclRvVGVycmFmb3JtKHRoaXMuX3JlcXVlc3Rlci5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGF1dG9fYWNjZXB0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fYXV0b0FjY2VwdCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgYWNjZXB0ZXI6IHtcbiAgICAgICAgdmFsdWU6IHZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlclRvSGNsVGVycmFmb3JtKHRoaXMuX2FjY2VwdGVyLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQWNjZXB0ZXJMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcmVxdWVzdGVyOiB7XG4gICAgICAgIHZhbHVlOiB2cGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19