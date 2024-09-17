"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamRolePolicyAttachment = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_role_policy_attachment aws_iam_role_policy_attachment}
*/
class IamRolePolicyAttachment extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IamRolePolicyAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamRolePolicyAttachment to import
    * @param importFromId The id of the existing IamRolePolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_role_policy_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamRolePolicyAttachment to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_role_policy_attachment", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_role_policy_attachment aws_iam_role_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyAttachmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_iam_role_policy_attachment',
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
        this._id = config.id;
        this._policyArn = config.policyArn;
        this._role = config.role;
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
    get policyArn() {
        return this.getStringAttribute('policy_arn');
    }
    set policyArn(value) {
        this._policyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get policyArnInput() {
        return this._policyArn;
    }
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            policy_arn: cdktf.stringToTerraform(this._policyArn),
            role: cdktf.stringToTerraform(this._role),
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
            policy_arn: {
                value: cdktf.stringToHclTerraform(this._policyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktf.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.IamRolePolicyAttachment = IamRolePolicyAttachment;
_a = JSII_RTTI_SYMBOL_1;
IamRolePolicyAttachment[_a] = { fqn: "@cdktf/aws-cdk.iamRolePolicyAttachment.IamRolePolicyAttachment", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
IamRolePolicyAttachment.tfResourceType = "aws_iam_role_policy_attachment";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2lhbS1yb2xlLXBvbGljeS1hdHRhY2htZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBc0IvQjs7RUFFRTtBQUNGLE1BQWEsdUJBQXdCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9sRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7Ozs7O01BTUU7SUFDSyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBZ0IsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUUsUUFBa0M7UUFDOUgsT0FBTyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3hKLENBQUM7SUFFTCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFxQztRQUNwRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGdDQUFnQztZQUN2RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGVBQWUsRUFBRSxRQUFRO2dCQUN6Qix5QkFBeUIsRUFBRSxRQUFRO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FBTyxFQUFF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SUFDNUgsQ0FBQzs7QUF2SUgsMERBd0lDOzs7QUF0SUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxzQ0FBYyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBJYW1Sb2xlUG9saWN5QXR0YWNobWVudENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9pYW1fcm9sZV9wb2xpY3lfYXR0YWNobWVudCNpZCBJYW1Sb2xlUG9saWN5QXR0YWNobWVudCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnQjcG9saWN5X2FybiBJYW1Sb2xlUG9saWN5QXR0YWNobWVudCNwb2xpY3lfYXJufVxuICAqL1xuICByZWFkb25seSBwb2xpY3lBcm46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnQjcm9sZSBJYW1Sb2xlUG9saWN5QXR0YWNobWVudCNyb2xlfVxuICAqL1xuICByZWFkb25seSByb2xlOiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9pYW1fcm9sZV9wb2xpY3lfYXR0YWNobWVudCBhd3NfaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnR9XG4qL1xuZXhwb3J0IGNsYXNzIElhbVJvbGVQb2xpY3lBdHRhY2htZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19pYW1fcm9sZV9wb2xpY3lfYXR0YWNobWVudFwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBJYW1Sb2xlUG9saWN5QXR0YWNobWVudCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBJYW1Sb2xlUG9saWN5QXR0YWNobWVudCB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgSWFtUm9sZVBvbGljeUF0dGFjaG1lbnQgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9yb2xlX3BvbGljeV9hdHRhY2htZW50I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBJYW1Sb2xlUG9saWN5QXR0YWNobWVudCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnRcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9pYW1fcm9sZV9wb2xpY3lfYXR0YWNobWVudCBhd3NfaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIElhbVJvbGVQb2xpY3lBdHRhY2htZW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IElhbVJvbGVQb2xpY3lBdHRhY2htZW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfaWFtX3JvbGVfcG9saWN5X2F0dGFjaG1lbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9wb2xpY3lBcm4gPSBjb25maWcucG9saWN5QXJuO1xuICAgIHRoaXMuX3JvbGUgPSBjb25maWcucm9sZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gcG9saWN5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb2xpY3lBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvbGljeUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvbGljeV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvbGljeUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9saWN5QXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvbGljeUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb2xpY3lBcm47XG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIHBvbGljeV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeUFybiksXG4gICAgICByb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb2xlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHBvbGljeV9hcm46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3BvbGljeUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJvbGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3JvbGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==