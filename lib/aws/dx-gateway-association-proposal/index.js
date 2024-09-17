"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DxGatewayAssociationProposal = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association_proposal aws_dx_gateway_association_proposal}
*/
class DxGatewayAssociationProposal extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DxGatewayAssociationProposal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DxGatewayAssociationProposal to import
    * @param importFromId The id of the existing DxGatewayAssociationProposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association_proposal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DxGatewayAssociationProposal to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dx_gateway_association_proposal", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association_proposal aws_dx_gateway_association_proposal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationProposalConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dx_gateway_association_proposal',
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
        this._allowedPrefixes = config.allowedPrefixes;
        this._associatedGatewayId = config.associatedGatewayId;
        this._dxGatewayId = config.dxGatewayId;
        this._dxGatewayOwnerAccountId = config.dxGatewayOwnerAccountId;
        this._id = config.id;
    }
    get allowedPrefixes() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_prefixes'));
    }
    set allowedPrefixes(value) {
        this._allowedPrefixes = value;
    }
    resetAllowedPrefixes() {
        this._allowedPrefixes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedPrefixesInput() {
        return this._allowedPrefixes;
    }
    get associatedGatewayId() {
        return this.getStringAttribute('associated_gateway_id');
    }
    set associatedGatewayId(value) {
        this._associatedGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get associatedGatewayIdInput() {
        return this._associatedGatewayId;
    }
    // associated_gateway_owner_account_id - computed: true, optional: false, required: false
    get associatedGatewayOwnerAccountId() {
        return this.getStringAttribute('associated_gateway_owner_account_id');
    }
    // associated_gateway_type - computed: true, optional: false, required: false
    get associatedGatewayType() {
        return this.getStringAttribute('associated_gateway_type');
    }
    get dxGatewayId() {
        return this.getStringAttribute('dx_gateway_id');
    }
    set dxGatewayId(value) {
        this._dxGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get dxGatewayIdInput() {
        return this._dxGatewayId;
    }
    get dxGatewayOwnerAccountId() {
        return this.getStringAttribute('dx_gateway_owner_account_id');
    }
    set dxGatewayOwnerAccountId(value) {
        this._dxGatewayOwnerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get dxGatewayOwnerAccountIdInput() {
        return this._dxGatewayOwnerAccountId;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrefixes),
            associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
            dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
            dx_gateway_owner_account_id: cdktf.stringToTerraform(this._dxGatewayOwnerAccountId),
            id: cdktf.stringToTerraform(this._id),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allowed_prefixes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrefixes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            associated_gateway_id: {
                value: cdktf.stringToHclTerraform(this._associatedGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dx_gateway_id: {
                value: cdktf.stringToHclTerraform(this._dxGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dx_gateway_owner_account_id: {
                value: cdktf.stringToHclTerraform(this._dxGatewayOwnerAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.DxGatewayAssociationProposal = DxGatewayAssociationProposal;
_a = JSII_RTTI_SYMBOL_1;
DxGatewayAssociationProposal[_a] = { fqn: "@cdktf/aws-cdk.dxGatewayAssociationProposal.DxGatewayAssociationProposal", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
DxGatewayAssociationProposal.tfResourceType = "aws_dx_gateway_association_proposal";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2R4LWdhdGV3YXktYXNzb2NpYXRpb24tcHJvcG9zYWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE4Qi9COztFQUVFO0FBQ0YsTUFBYSw0QkFBNkIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3ZFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFnQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxRQUFrQztRQUM5SCxPQUFPLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxxQ0FBcUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0osQ0FBQztJQUVMLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTBDO1FBQ3pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUscUNBQXFDO1lBQzVELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsZUFBZSxFQUFFLFFBQVE7Z0JBQ3pCLHlCQUF5QixFQUFFLFFBQVE7YUFDcEM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ2pDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixPQUFP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LG9CQUFvQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztnQkFDaEUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTlMSCxvRUErTEM7OztBQTdMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDJDQUFjLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9keF9nYXRld2F5X2Fzc29jaWF0aW9uX3Byb3Bvc2FsXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9keF9nYXRld2F5X2Fzc29jaWF0aW9uX3Byb3Bvc2FsI2FsbG93ZWRfcHJlZml4ZXMgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbCNhbGxvd2VkX3ByZWZpeGVzfVxuICAqL1xuICByZWFkb25seSBhbGxvd2VkUHJlZml4ZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbCNhc3NvY2lhdGVkX2dhdGV3YXlfaWQgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbCNhc3NvY2lhdGVkX2dhdGV3YXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGFzc29jaWF0ZWRHYXRld2F5SWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbCNkeF9nYXRld2F5X2lkIER4R2F0ZXdheUFzc29jaWF0aW9uUHJvcG9zYWwjZHhfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZHhHYXRld2F5SWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbCNkeF9nYXRld2F5X293bmVyX2FjY291bnRfaWQgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbCNkeF9nYXRld2F5X293bmVyX2FjY291bnRfaWR9XG4gICovXG4gIHJlYWRvbmx5IGR4R2F0ZXdheU93bmVyQWNjb3VudElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2R4X2dhdGV3YXlfYXNzb2NpYXRpb25fcHJvcG9zYWwjaWQgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2R4X2dhdGV3YXlfYXNzb2NpYXRpb25fcHJvcG9zYWwgYXdzX2R4X2dhdGV3YXlfYXNzb2NpYXRpb25fcHJvcG9zYWx9XG4qL1xuZXhwb3J0IGNsYXNzIER4R2F0ZXdheUFzc29jaWF0aW9uUHJvcG9zYWwgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2R4X2dhdGV3YXlfYXNzb2NpYXRpb25fcHJvcG9zYWxcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBEeEdhdGV3YXlBc3NvY2lhdGlvblByb3Bvc2FsIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBEeEdhdGV3YXlBc3NvY2lhdGlvblByb3Bvc2FsIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9keF9nYXRld2F5X2Fzc29jaWF0aW9uX3Byb3Bvc2FsI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBEeEdhdGV3YXlBc3NvY2lhdGlvblByb3Bvc2FsIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19keF9nYXRld2F5X2Fzc29jaWF0aW9uX3Byb3Bvc2FsXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbCBhd3NfZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRHhHYXRld2F5QXNzb2NpYXRpb25Qcm9wb3NhbENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEeEdhdGV3YXlBc3NvY2lhdGlvblByb3Bvc2FsQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2FsbG93ZWRQcmVmaXhlcyA9IGNvbmZpZy5hbGxvd2VkUHJlZml4ZXM7XG4gICAgdGhpcy5fYXNzb2NpYXRlZEdhdGV3YXlJZCA9IGNvbmZpZy5hc3NvY2lhdGVkR2F0ZXdheUlkO1xuICAgIHRoaXMuX2R4R2F0ZXdheUlkID0gY29uZmlnLmR4R2F0ZXdheUlkO1xuICAgIHRoaXMuX2R4R2F0ZXdheU93bmVyQWNjb3VudElkID0gY29uZmlnLmR4R2F0ZXdheU93bmVyQWNjb3VudElkO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGxvd2VkX3ByZWZpeGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZFByZWZpeGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFsbG93ZWRQcmVmaXhlcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxsb3dlZF9wcmVmaXhlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93ZWRQcmVmaXhlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGxvd2VkUHJlZml4ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd2VkUHJlZml4ZXMoKSB7XG4gICAgdGhpcy5fYWxsb3dlZFByZWZpeGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkUHJlZml4ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZFByZWZpeGVzO1xuICB9XG5cbiAgLy8gYXNzb2NpYXRlZF9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Fzc29jaWF0ZWRHYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZWRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3NvY2lhdGVkX2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFzc29jaWF0ZWRHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Fzc29jaWF0ZWRHYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlZEdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hc3NvY2lhdGVkR2F0ZXdheUlkO1xuICB9XG5cbiAgLy8gYXNzb2NpYXRlZF9nYXRld2F5X293bmVyX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NvY2lhdGVkR2F0ZXdheU93bmVyQWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzb2NpYXRlZF9nYXRld2F5X293bmVyX2FjY291bnRfaWQnKTtcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZWRfZ2F0ZXdheV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlZEdhdGV3YXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzb2NpYXRlZF9nYXRld2F5X3R5cGUnKTtcbiAgfVxuXG4gIC8vIGR4X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZHhHYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGR4R2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZHhfZ2F0ZXdheV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHhHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2R4R2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGR4R2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R4R2F0ZXdheUlkO1xuICB9XG5cbiAgLy8gZHhfZ2F0ZXdheV9vd25lcl9hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2R4R2F0ZXdheU93bmVyQWNjb3VudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkeEdhdGV3YXlPd25lckFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2R4X2dhdGV3YXlfb3duZXJfYWNjb3VudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHhHYXRld2F5T3duZXJBY2NvdW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2R4R2F0ZXdheU93bmVyQWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGR4R2F0ZXdheU93bmVyQWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R4R2F0ZXdheU93bmVyQWNjb3VudElkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd2VkX3ByZWZpeGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fYWxsb3dlZFByZWZpeGVzKSxcbiAgICAgIGFzc29jaWF0ZWRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXNzb2NpYXRlZEdhdGV3YXlJZCksXG4gICAgICBkeF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9keEdhdGV3YXlJZCksXG4gICAgICBkeF9nYXRld2F5X293bmVyX2FjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2R4R2F0ZXdheU93bmVyQWNjb3VudElkKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhbGxvd2VkX3ByZWZpeGVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fYWxsb3dlZFByZWZpeGVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGFzc29jaWF0ZWRfZ2F0ZXdheV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYXNzb2NpYXRlZEdhdGV3YXlJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGR4X2dhdGV3YXlfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2R4R2F0ZXdheUlkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZHhfZ2F0ZXdheV9vd25lcl9hY2NvdW50X2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9keEdhdGV3YXlPd25lckFjY291bnRJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19