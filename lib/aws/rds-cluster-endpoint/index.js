"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsClusterEndpoint = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/rds_cluster_endpoint aws_rds_cluster_endpoint}
*/
class RdsClusterEndpoint extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RdsClusterEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterEndpoint to import
    * @param importFromId The id of the existing RdsClusterEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/rds_cluster_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterEndpoint to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_cluster_endpoint", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/rds_cluster_endpoint aws_rds_cluster_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterEndpointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_cluster_endpoint',
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
        this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
        this._clusterIdentifier = config.clusterIdentifier;
        this._customEndpointType = config.customEndpointType;
        this._excludedMembers = config.excludedMembers;
        this._id = config.id;
        this._staticMembers = config.staticMembers;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get clusterEndpointIdentifier() {
        return this.getStringAttribute('cluster_endpoint_identifier');
    }
    set clusterEndpointIdentifier(value) {
        this._clusterEndpointIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterEndpointIdentifierInput() {
        return this._clusterEndpointIdentifier;
    }
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    set clusterIdentifier(value) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
    get customEndpointType() {
        return this.getStringAttribute('custom_endpoint_type');
    }
    set customEndpointType(value) {
        this._customEndpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    get customEndpointTypeInput() {
        return this._customEndpointType;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    get excludedMembers() {
        return cdktf.Fn.tolist(this.getListAttribute('excluded_members'));
    }
    set excludedMembers(value) {
        this._excludedMembers = value;
    }
    resetExcludedMembers() {
        this._excludedMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludedMembersInput() {
        return this._excludedMembers;
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
    get staticMembers() {
        return cdktf.Fn.tolist(this.getListAttribute('static_members'));
    }
    set staticMembers(value) {
        this._staticMembers = value;
    }
    resetStaticMembers() {
        this._staticMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticMembersInput() {
        return this._staticMembers;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cluster_endpoint_identifier: cdktf.stringToTerraform(this._clusterEndpointIdentifier),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            custom_endpoint_type: cdktf.stringToTerraform(this._customEndpointType),
            excluded_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedMembers),
            id: cdktf.stringToTerraform(this._id),
            static_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticMembers),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            cluster_endpoint_identifier: {
                value: cdktf.stringToHclTerraform(this._clusterEndpointIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_identifier: {
                value: cdktf.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_endpoint_type: {
                value: cdktf.stringToHclTerraform(this._customEndpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            excluded_members: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedMembers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_members: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticMembers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.RdsClusterEndpoint = RdsClusterEndpoint;
_a = JSII_RTTI_SYMBOL_1;
RdsClusterEndpoint[_a] = { fqn: "@cdktf/aws-cdk.rdsClusterEndpoint.RdsClusterEndpoint", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
RdsClusterEndpoint.tfResourceType = "aws_rds_cluster_endpoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Jkcy1jbHVzdGVyLWVuZHBvaW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBMEMvQjs7RUFFRTtBQUNGLE1BQWEsa0JBQW1CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU83RCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7Ozs7O01BTUU7SUFDSyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBZ0IsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUUsUUFBa0M7UUFDOUgsT0FBTyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xKLENBQUM7SUFFTCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFnQztRQUMvRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGVBQWUsRUFBRSxRQUFRO2dCQUN6Qix5QkFBeUIsRUFBRSxRQUFRO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FBTyxFQUFFLE1BQU0s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SUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbEUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsZ0JBQWdCLEVBQUUsV0FBVzthQUM5QjtZQUNELFFBQVEsRUFBRTtnQkFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNyRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSxXQUFXO2FBQzlCO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUF0UUgsZ0RBdVFDOzs7QUFyUUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxpQ0FBYyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXJfZW5kcG9pbnRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBSZHNDbHVzdGVyRW5kcG9pbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXJfZW5kcG9pbnQjY2x1c3Rlcl9lbmRwb2ludF9pZGVudGlmaWVyIFJkc0NsdXN0ZXJFbmRwb2ludCNjbHVzdGVyX2VuZHBvaW50X2lkZW50aWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNsdXN0ZXJFbmRwb2ludElkZW50aWZpZXI6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXJfZW5kcG9pbnQjY2x1c3Rlcl9pZGVudGlmaWVyIFJkc0NsdXN0ZXJFbmRwb2ludCNjbHVzdGVyX2lkZW50aWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNsdXN0ZXJJZGVudGlmaWVyOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyX2VuZHBvaW50I2N1c3RvbV9lbmRwb2ludF90eXBlIFJkc0NsdXN0ZXJFbmRwb2ludCNjdXN0b21fZW5kcG9pbnRfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tRW5kcG9pbnRUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyX2VuZHBvaW50I2V4Y2x1ZGVkX21lbWJlcnMgUmRzQ2x1c3RlckVuZHBvaW50I2V4Y2x1ZGVkX21lbWJlcnN9XG4gICovXG4gIHJlYWRvbmx5IGV4Y2x1ZGVkTWVtYmVycz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3Rlcl9lbmRwb2ludCNpZCBSZHNDbHVzdGVyRW5kcG9pbnQjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyX2VuZHBvaW50I3N0YXRpY19tZW1iZXJzIFJkc0NsdXN0ZXJFbmRwb2ludCNzdGF0aWNfbWVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGljTWVtYmVycz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3Rlcl9lbmRwb2ludCN0YWdzIFJkc0NsdXN0ZXJFbmRwb2ludCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXJfZW5kcG9pbnQjdGFnc19hbGwgUmRzQ2x1c3RlckVuZHBvaW50I3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyX2VuZHBvaW50IGF3c19yZHNfY2x1c3Rlcl9lbmRwb2ludH1cbiovXG5leHBvcnQgY2xhc3MgUmRzQ2x1c3RlckVuZHBvaW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19yZHNfY2x1c3Rlcl9lbmRwb2ludFwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBSZHNDbHVzdGVyRW5kcG9pbnQgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgUmRzQ2x1c3RlckVuZHBvaW50IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBSZHNDbHVzdGVyRW5kcG9pbnQgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyX2VuZHBvaW50I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBSZHNDbHVzdGVyRW5kcG9pbnQgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3Jkc19jbHVzdGVyX2VuZHBvaW50XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXJfZW5kcG9pbnQgYXdzX3Jkc19jbHVzdGVyX2VuZHBvaW50fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBSZHNDbHVzdGVyRW5kcG9pbnRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUmRzQ2x1c3RlckVuZHBvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfcmRzX2NsdXN0ZXJfZW5kcG9pbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9jbHVzdGVyRW5kcG9pbnRJZGVudGlmaWVyID0gY29uZmlnLmNsdXN0ZXJFbmRwb2ludElkZW50aWZpZXI7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSBjb25maWcuY2x1c3RlcklkZW50aWZpZXI7XG4gICAgdGhpcy5fY3VzdG9tRW5kcG9pbnRUeXBlID0gY29uZmlnLmN1c3RvbUVuZHBvaW50VHlwZTtcbiAgICB0aGlzLl9leGNsdWRlZE1lbWJlcnMgPSBjb25maWcuZXhjbHVkZWRNZW1iZXJzO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3N0YXRpY01lbWJlcnMgPSBjb25maWcuc3RhdGljTWVtYmVycztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfZW5kcG9pbnRfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbHVzdGVyRW5kcG9pbnRJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVyRW5kcG9pbnRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9lbmRwb2ludF9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyRW5kcG9pbnRJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVyRW5kcG9pbnRJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJFbmRwb2ludElkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlckVuZHBvaW50SWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbHVzdGVySWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsdXN0ZXJJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVySWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVySWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIGN1c3RvbV9lbmRwb2ludF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2N1c3RvbUVuZHBvaW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tRW5kcG9pbnRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX2VuZHBvaW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbUVuZHBvaW50VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tRW5kcG9pbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUVuZHBvaW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21FbmRwb2ludFR5cGU7XG4gIH1cblxuICAvLyBlbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGV4Y2x1ZGVkX21lbWJlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhjbHVkZWRNZW1iZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVkTWVtYmVycygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhjbHVkZWRfbWVtYmVycycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4Y2x1ZGVkTWVtYmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9leGNsdWRlZE1lbWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGNsdWRlZE1lbWJlcnMoKSB7XG4gICAgdGhpcy5fZXhjbHVkZWRNZW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNsdWRlZE1lbWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZWRNZW1iZXJzO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gc3RhdGljX21lbWJlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGljTWVtYmVycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdGF0aWNNZW1iZXJzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdGF0aWNfbWVtYmVycycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRpY01lbWJlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3RhdGljTWVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRpY01lbWJlcnMoKSB7XG4gICAgdGhpcy5fc3RhdGljTWVtYmVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGljTWVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aWNNZW1iZXJzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsdXN0ZXJfZW5kcG9pbnRfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2x1c3RlckVuZHBvaW50SWRlbnRpZmllciksXG4gICAgICBjbHVzdGVyX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICAgIGN1c3RvbV9lbmRwb2ludF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21FbmRwb2ludFR5cGUpLFxuICAgICAgZXhjbHVkZWRfbWVtYmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2V4Y2x1ZGVkTWVtYmVycyksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgc3RhdGljX21lbWJlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9zdGF0aWNNZW1iZXJzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgY2x1c3Rlcl9lbmRwb2ludF9pZGVudGlmaWVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jbHVzdGVyRW5kcG9pbnRJZGVudGlmaWVyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY2x1c3Rlcl9pZGVudGlmaWVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWRlbnRpZmllciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbV9lbmRwb2ludF90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jdXN0b21FbmRwb2ludFR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBleGNsdWRlZF9tZW1iZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZXhjbHVkZWRNZW1iZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHN0YXRpY19tZW1iZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc3RhdGljTWVtYmVycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==