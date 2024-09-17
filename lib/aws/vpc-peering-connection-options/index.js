"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcPeeringConnectionOptions = exports.VpcPeeringConnectionOptionsRequesterOutputReference = exports.vpcPeeringConnectionOptionsRequesterToHclTerraform = exports.vpcPeeringConnectionOptionsRequesterToTerraform = exports.VpcPeeringConnectionOptionsAccepterOutputReference = exports.vpcPeeringConnectionOptionsAccepterToHclTerraform = exports.vpcPeeringConnectionOptionsAccepterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function vpcPeeringConnectionOptionsAccepterToTerraform(struct) {
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
exports.vpcPeeringConnectionOptionsAccepterToTerraform = vpcPeeringConnectionOptionsAccepterToTerraform;
function vpcPeeringConnectionOptionsAccepterToHclTerraform(struct) {
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
exports.vpcPeeringConnectionOptionsAccepterToHclTerraform = vpcPeeringConnectionOptionsAccepterToHclTerraform;
class VpcPeeringConnectionOptionsAccepterOutputReference extends cdktf.ComplexObject {
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
exports.VpcPeeringConnectionOptionsAccepterOutputReference = VpcPeeringConnectionOptionsAccepterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionOptionsAccepterOutputReference[_a] = { fqn: "@cdktf/aws-cdk.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference", version: "0.0.0" };
function vpcPeeringConnectionOptionsRequesterToTerraform(struct) {
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
exports.vpcPeeringConnectionOptionsRequesterToTerraform = vpcPeeringConnectionOptionsRequesterToTerraform;
function vpcPeeringConnectionOptionsRequesterToHclTerraform(struct) {
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
exports.vpcPeeringConnectionOptionsRequesterToHclTerraform = vpcPeeringConnectionOptionsRequesterToHclTerraform;
class VpcPeeringConnectionOptionsRequesterOutputReference extends cdktf.ComplexObject {
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
exports.VpcPeeringConnectionOptionsRequesterOutputReference = VpcPeeringConnectionOptionsRequesterOutputReference;
_b = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionOptionsRequesterOutputReference[_b] = { fqn: "@cdktf/aws-cdk.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection_options aws_vpc_peering_connection_options}
*/
class VpcPeeringConnectionOptions extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a VpcPeeringConnectionOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcPeeringConnectionOptions to import
    * @param importFromId The id of the existing VpcPeeringConnectionOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcPeeringConnectionOptions to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_peering_connection_options", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection_options aws_vpc_peering_connection_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionOptionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_options',
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
        this._accepter = new VpcPeeringConnectionOptionsAccepterOutputReference(this, "accepter");
        // requester - computed: false, optional: true, required: false
        this._requester = new VpcPeeringConnectionOptionsRequesterOutputReference(this, "requester");
        this._id = config.id;
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        this._accepter.internalValue = config.accepter;
        this._requester.internalValue = config.requester;
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
            id: cdktf.stringToTerraform(this._id),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: vpcPeeringConnectionOptionsAccepterToTerraform(this._accepter.internalValue),
            requester: vpcPeeringConnectionOptionsRequesterToTerraform(this._requester.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_peering_connection_id: {
                value: cdktf.stringToHclTerraform(this._vpcPeeringConnectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            accepter: {
                value: vpcPeeringConnectionOptionsAccepterToHclTerraform(this._accepter.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "VpcPeeringConnectionOptionsAccepterList",
            },
            requester: {
                value: vpcPeeringConnectionOptionsRequesterToHclTerraform(this._requester.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "VpcPeeringConnectionOptionsRequesterList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.VpcPeeringConnectionOptions = VpcPeeringConnectionOptions;
_c = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionOptions[_c] = { fqn: "@cdktf/aws-cdk.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
VpcPeeringConnectionOptions.tfResourceType = "aws_vpc_peering_connection_options";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3ZwYy1wZWVyaW5nLWNvbm5lY3Rpb24tb3B0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTRDL0IsU0FBZ0IsOENBQThDLENBQUMsTUFBaUc7SUFDOUosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDL0YsK0JBQStCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUM5RixnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO0tBQ2hHLENBQUE7QUFDSCxDQUFDO0FBVkQsd0dBVUM7QUFHRCxTQUFnQixpREFBaUQsQ0FBQyxNQUFpRztJQUNqSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gs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UERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnNcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9vcHRpb25zI2lkIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9ucyNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9vcHRpb25zI3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zI3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWR9XG4gICovXG4gIHJlYWRvbmx5IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQ6IHN0cmluZztcbiAgLyoqXG4gICogYWNjZXB0ZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fb3B0aW9ucyNhY2NlcHRlciBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnMjYWNjZXB0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGFjY2VwdGVyPzogVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXI7XG4gIC8qKlxuICAqIHJlcXVlc3RlciBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9vcHRpb25zI3JlcXVlc3RlciBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnMjcmVxdWVzdGVyfVxuICAqL1xuICByZWFkb25seSByZXF1ZXN0ZXI/OiBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNSZXF1ZXN0ZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc0FjY2VwdGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9vcHRpb25zI2FsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9ucyNhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwY31cbiAgKi9cbiAgcmVhZG9ubHkgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnMjYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbiBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnMjYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnMjYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmsgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zI2FsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rfVxuICAqL1xuICByZWFkb25seSBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2cGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNBY2NlcHRlclRvVGVycmFmb3JtKHN0cnVjdD86IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc0FjY2VwdGVyT3V0cHV0UmVmZXJlbmNlIHwgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyksXG4gICAgYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKSxcbiAgICBhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluazogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2cGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNBY2NlcHRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc0FjY2VwdGVyT3V0cHV0UmVmZXJlbmNlIHwgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGFsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNBY2NlcHRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uID0gdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc0FjY2VwdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB2YWx1ZS5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM7XG4gICAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB2YWx1ZS5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gICAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB2YWx1ZS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms7XG4gICAgfVxuICB9XG5cbiAgLy8gYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKCkge1xuICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYztcbiAgfVxuXG4gIC8vIGFsbG93X3JlbW90ZV92cGNfZG5zX3Jlc29sdXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24oKSB7XG4gICAgdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uO1xuICB9XG5cbiAgLy8gYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmsgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmsnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKCkge1xuICAgIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNSZXF1ZXN0ZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnMjYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGMgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zI2FsbG93X2NsYXNzaWNfbGlua190b19yZW1vdGVfdnBjfVxuICAqL1xuICByZWFkb25seSBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fb3B0aW9ucyNhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9ucyNhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9ufVxuICAqL1xuICByZWFkb25seSBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fb3B0aW9ucyNhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluayBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnMjYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbmt9XG4gICovXG4gIHJlYWRvbmx5IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3RlclRvVGVycmFmb3JtKHN0cnVjdD86IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3Rlck91dHB1dFJlZmVyZW5jZSB8IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3Rlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24pLFxuICAgIGFsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3RlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3Rlck91dHB1dFJlZmVyZW5jZSB8IFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3Rlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgYWxsb3dfdnBjX3RvX3JlbW90ZV9jbGFzc2ljX2xpbms6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3Rlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zUmVxdWVzdGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNSZXF1ZXN0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHZhbHVlLmFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYztcbiAgICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlLmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICAgIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHZhbHVlLmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMoKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjO1xuICB9XG5cbiAgLy8gYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gIH1cblxuICAvLyBhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsoKSB7XG4gICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmtJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnMgYXdzX3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25fb3B0aW9uc31cbiovXG5leHBvcnQgY2xhc3MgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnNcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9ucyB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnMjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9ucyB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9vcHRpb25zXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9vcHRpb25zIGF3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnN9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX29wdGlvbnMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkID0gY29uZmlnLnZwY1BlZXJpbmdDb25uZWN0aW9uSWQ7XG4gICAgdGhpcy5fYWNjZXB0ZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hY2NlcHRlcjtcbiAgICB0aGlzLl9yZXF1ZXN0ZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yZXF1ZXN0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkO1xuICB9XG5cbiAgLy8gYWNjZXB0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXB0ZXIgPSBuZXcgVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhY2NlcHRlclwiKTtcbiAgcHVibGljIGdldCBhY2NlcHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXB0ZXI7XG4gIH1cbiAgcHVibGljIHB1dEFjY2VwdGVyKHZhbHVlOiBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNBY2NlcHRlcikge1xuICAgIHRoaXMuX2FjY2VwdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NlcHRlcigpIHtcbiAgICB0aGlzLl9hY2NlcHRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NlcHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NlcHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmVxdWVzdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RlciA9IG5ldyBWcGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNSZXF1ZXN0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZXF1ZXN0ZXJcIik7XG4gIHB1YmxpYyBnZXQgcmVxdWVzdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXI7XG4gIH1cbiAgcHVibGljIHB1dFJlcXVlc3Rlcih2YWx1ZTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zUmVxdWVzdGVyKSB7XG4gICAgdGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0ZXIoKSB7XG4gICAgdGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVlc3RlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQpLFxuICAgICAgYWNjZXB0ZXI6IHZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc0FjY2VwdGVyVG9UZXJyYWZvcm0odGhpcy5fYWNjZXB0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICByZXF1ZXN0ZXI6IHZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3RlclRvVGVycmFmb3JtKHRoaXMuX3JlcXVlc3Rlci5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBhY2NlcHRlcjoge1xuICAgICAgICB2YWx1ZTogdnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9hY2NlcHRlci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiVnBjUGVlcmluZ0Nvbm5lY3Rpb25PcHRpb25zQWNjZXB0ZXJMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcmVxdWVzdGVyOiB7XG4gICAgICAgIHZhbHVlOiB2cGNQZWVyaW5nQ29ubmVjdGlvbk9wdGlvbnNSZXF1ZXN0ZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9yZXF1ZXN0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlZwY1BlZXJpbmdDb25uZWN0aW9uT3B0aW9uc1JlcXVlc3Rlckxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==