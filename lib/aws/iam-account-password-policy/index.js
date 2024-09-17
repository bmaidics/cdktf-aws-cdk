"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamAccountPasswordPolicy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_account_password_policy aws_iam_account_password_policy}
*/
class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IamAccountPasswordPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamAccountPasswordPolicy to import
    * @param importFromId The id of the existing IamAccountPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_account_password_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamAccountPasswordPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_account_password_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_account_password_policy aws_iam_account_password_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountPasswordPolicyConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_iam_account_password_policy',
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
        this._allowUsersToChangePassword = config.allowUsersToChangePassword;
        this._hardExpiry = config.hardExpiry;
        this._id = config.id;
        this._maxPasswordAge = config.maxPasswordAge;
        this._minimumPasswordLength = config.minimumPasswordLength;
        this._passwordReusePrevention = config.passwordReusePrevention;
        this._requireLowercaseCharacters = config.requireLowercaseCharacters;
        this._requireNumbers = config.requireNumbers;
        this._requireSymbols = config.requireSymbols;
        this._requireUppercaseCharacters = config.requireUppercaseCharacters;
    }
    get allowUsersToChangePassword() {
        return this.getBooleanAttribute('allow_users_to_change_password');
    }
    set allowUsersToChangePassword(value) {
        this._allowUsersToChangePassword = value;
    }
    resetAllowUsersToChangePassword() {
        this._allowUsersToChangePassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowUsersToChangePasswordInput() {
        return this._allowUsersToChangePassword;
    }
    // expire_passwords - computed: true, optional: false, required: false
    get expirePasswords() {
        return this.getBooleanAttribute('expire_passwords');
    }
    get hardExpiry() {
        return this.getBooleanAttribute('hard_expiry');
    }
    set hardExpiry(value) {
        this._hardExpiry = value;
    }
    resetHardExpiry() {
        this._hardExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hardExpiryInput() {
        return this._hardExpiry;
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
    get maxPasswordAge() {
        return this.getNumberAttribute('max_password_age');
    }
    set maxPasswordAge(value) {
        this._maxPasswordAge = value;
    }
    resetMaxPasswordAge() {
        this._maxPasswordAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPasswordAgeInput() {
        return this._maxPasswordAge;
    }
    get minimumPasswordLength() {
        return this.getNumberAttribute('minimum_password_length');
    }
    set minimumPasswordLength(value) {
        this._minimumPasswordLength = value;
    }
    resetMinimumPasswordLength() {
        this._minimumPasswordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumPasswordLengthInput() {
        return this._minimumPasswordLength;
    }
    get passwordReusePrevention() {
        return this.getNumberAttribute('password_reuse_prevention');
    }
    set passwordReusePrevention(value) {
        this._passwordReusePrevention = value;
    }
    resetPasswordReusePrevention() {
        this._passwordReusePrevention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordReusePreventionInput() {
        return this._passwordReusePrevention;
    }
    get requireLowercaseCharacters() {
        return this.getBooleanAttribute('require_lowercase_characters');
    }
    set requireLowercaseCharacters(value) {
        this._requireLowercaseCharacters = value;
    }
    resetRequireLowercaseCharacters() {
        this._requireLowercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireLowercaseCharactersInput() {
        return this._requireLowercaseCharacters;
    }
    get requireNumbers() {
        return this.getBooleanAttribute('require_numbers');
    }
    set requireNumbers(value) {
        this._requireNumbers = value;
    }
    resetRequireNumbers() {
        this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireNumbersInput() {
        return this._requireNumbers;
    }
    get requireSymbols() {
        return this.getBooleanAttribute('require_symbols');
    }
    set requireSymbols(value) {
        this._requireSymbols = value;
    }
    resetRequireSymbols() {
        this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSymbolsInput() {
        return this._requireSymbols;
    }
    get requireUppercaseCharacters() {
        return this.getBooleanAttribute('require_uppercase_characters');
    }
    set requireUppercaseCharacters(value) {
        this._requireUppercaseCharacters = value;
    }
    resetRequireUppercaseCharacters() {
        this._requireUppercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireUppercaseCharactersInput() {
        return this._requireUppercaseCharacters;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_users_to_change_password: cdktf.booleanToTerraform(this._allowUsersToChangePassword),
            hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
            id: cdktf.stringToTerraform(this._id),
            max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
            minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
            password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
            require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
            require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
            require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
            require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allow_users_to_change_password: {
                value: cdktf.booleanToHclTerraform(this._allowUsersToChangePassword),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            hard_expiry: {
                value: cdktf.booleanToHclTerraform(this._hardExpiry),
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
            max_password_age: {
                value: cdktf.numberToHclTerraform(this._maxPasswordAge),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            minimum_password_length: {
                value: cdktf.numberToHclTerraform(this._minimumPasswordLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            password_reuse_prevention: {
                value: cdktf.numberToHclTerraform(this._passwordReusePrevention),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            require_lowercase_characters: {
                value: cdktf.booleanToHclTerraform(this._requireLowercaseCharacters),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            require_numbers: {
                value: cdktf.booleanToHclTerraform(this._requireNumbers),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            require_symbols: {
                value: cdktf.booleanToHclTerraform(this._requireSymbols),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            require_uppercase_characters: {
                value: cdktf.booleanToHclTerraform(this._requireUppercaseCharacters),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.IamAccountPasswordPolicy = IamAccountPasswordPolicy;
_a = JSII_RTTI_SYMBOL_1;
IamAccountPasswordPolicy[_a] = { fqn: "@cdktf/aws-cdk.iamAccountPasswordPolicy.IamAccountPasswordPolicy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
IamAccountPasswordPolicy.tfResourceType = "aws_iam_account_password_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2lhbS1hY2NvdW50LXBhc3N3b3JkLXBvbGljeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQWtEL0I7O0VBRUU7QUFDRixNQUFhLHdCQUF5QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPbkUsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakI7Ozs7OztNQU1FO0lBQ0ssTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQWdCLEVBQUUsVUFBa0IsRUFBRSxZQUFvQixFQUFFLFFBQWtDO1FBQzlILE9BQU8sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLGlDQUFpQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6SixDQUFDO0lBRUwsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBeUMsRUFBRTtRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGVBQWUsRUFBRSxRQUFRO2dCQUN6Qix5QkFBeUIsRUFBRSxRQUFRO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FB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QUMsZUFBZSxDQUFDO2dCQUN4RCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxTQUFTO2FBQzVCO1lBQ0QsNEJBQTRCLEVBQUU7Z0JBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO2dCQUNwRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxTQUFTO2FBQzVCO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUExVEgsNERBMlRDOzs7QUF6VEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyx1Q0FBYyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5XG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgSWFtQWNjb3VudFBhc3N3b3JkUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeSNhbGxvd191c2Vyc190b19jaGFuZ2VfcGFzc3dvcmQgSWFtQWNjb3VudFBhc3N3b3JkUG9saWN5I2FsbG93X3VzZXJzX3RvX2NoYW5nZV9wYXNzd29yZH1cbiAgKi9cbiAgcmVhZG9ubHkgYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeSNoYXJkX2V4cGlyeSBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kjaGFyZF9leHBpcnl9XG4gICovXG4gIHJlYWRvbmx5IGhhcmRFeHBpcnk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeSNpZCBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeSNtYXhfcGFzc3dvcmRfYWdlIElhbUFjY291bnRQYXNzd29yZFBvbGljeSNtYXhfcGFzc3dvcmRfYWdlfVxuICAqL1xuICByZWFkb25seSBtYXhQYXNzd29yZEFnZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5I21pbmltdW1fcGFzc3dvcmRfbGVuZ3RoIElhbUFjY291bnRQYXNzd29yZFBvbGljeSNtaW5pbXVtX3Bhc3N3b3JkX2xlbmd0aH1cbiAgKi9cbiAgcmVhZG9ubHkgbWluaW11bVBhc3N3b3JkTGVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9pYW1fYWNjb3VudF9wYXNzd29yZF9wb2xpY3kjcGFzc3dvcmRfcmV1c2VfcHJldmVudGlvbiBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kjcGFzc3dvcmRfcmV1c2VfcHJldmVudGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcGFzc3dvcmRSZXVzZVByZXZlbnRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeSNyZXF1aXJlX2xvd2VyY2FzZV9jaGFyYWN0ZXJzIElhbUFjY291bnRQYXNzd29yZFBvbGljeSNyZXF1aXJlX2xvd2VyY2FzZV9jaGFyYWN0ZXJzfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5I3JlcXVpcmVfbnVtYmVycyBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kjcmVxdWlyZV9udW1iZXJzfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlTnVtYmVycz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5I3JlcXVpcmVfc3ltYm9scyBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kjcmVxdWlyZV9zeW1ib2xzfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlU3ltYm9scz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5I3JlcXVpcmVfdXBwZXJjYXNlX2NoYXJhY3RlcnMgSWFtQWNjb3VudFBhc3N3b3JkUG9saWN5I3JlcXVpcmVfdXBwZXJjYXNlX2NoYXJhY3RlcnN9XG4gICovXG4gIHJlYWRvbmx5IHJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5IGF3c19pYW1fYWNjb3VudF9wYXNzd29yZF9wb2xpY3l9XG4qL1xuZXhwb3J0IGNsYXNzIElhbUFjY291bnRQYXNzd29yZFBvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIElhbUFjY291bnRQYXNzd29yZFBvbGljeSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIElhbUFjY291bnRQYXNzd29yZFBvbGljeSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeVwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeSBhd3NfaWFtX2FjY291bnRfcGFzc3dvcmRfcG9saWN5fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3lDb25maWcgPSB7fVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3lDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkID0gY29uZmlnLmFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkO1xuICAgIHRoaXMuX2hhcmRFeHBpcnkgPSBjb25maWcuaGFyZEV4cGlyeTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9tYXhQYXNzd29yZEFnZSA9IGNvbmZpZy5tYXhQYXNzd29yZEFnZTtcbiAgICB0aGlzLl9taW5pbXVtUGFzc3dvcmRMZW5ndGggPSBjb25maWcubWluaW11bVBhc3N3b3JkTGVuZ3RoO1xuICAgIHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uID0gY29uZmlnLnBhc3N3b3JkUmV1c2VQcmV2ZW50aW9uO1xuICAgIHRoaXMuX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzID0gY29uZmlnLnJlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzO1xuICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gY29uZmlnLnJlcXVpcmVOdW1iZXJzO1xuICAgIHRoaXMuX3JlcXVpcmVTeW1ib2xzID0gY29uZmlnLnJlcXVpcmVTeW1ib2xzO1xuICAgIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzID0gY29uZmlnLnJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGxvd191c2Vyc190b19jaGFuZ2VfcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93X3VzZXJzX3RvX2NoYW5nZV9wYXNzd29yZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5fYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkO1xuICB9XG5cbiAgLy8gZXhwaXJlX3Bhc3N3b3JkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cGlyZVBhc3N3b3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdleHBpcmVfcGFzc3dvcmRzJyk7XG4gIH1cblxuICAvLyBoYXJkX2V4cGlyeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hhcmRFeHBpcnk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGhhcmRFeHBpcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaGFyZF9leHBpcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhhcmRFeHBpcnkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2hhcmRFeHBpcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIYXJkRXhwaXJ5KCkge1xuICAgIHRoaXMuX2hhcmRFeHBpcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhhcmRFeHBpcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFyZEV4cGlyeTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG1heF9wYXNzd29yZF9hZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQYXNzd29yZEFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UGFzc3dvcmRBZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcGFzc3dvcmRfYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhQYXNzd29yZEFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UGFzc3dvcmRBZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhQYXNzd29yZEFnZSgpIHtcbiAgICB0aGlzLl9tYXhQYXNzd29yZEFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UGFzc3dvcmRBZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UGFzc3dvcmRBZ2U7XG4gIH1cblxuICAvLyBtaW5pbXVtX3Bhc3N3b3JkX2xlbmd0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5pbXVtUGFzc3dvcmRMZW5ndGg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbmltdW1QYXNzd29yZExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbmltdW1fcGFzc3dvcmRfbGVuZ3RoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5pbXVtUGFzc3dvcmRMZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbmltdW1QYXNzd29yZExlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbmltdW1QYXNzd29yZExlbmd0aCgpIHtcbiAgICB0aGlzLl9taW5pbXVtUGFzc3dvcmRMZW5ndGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbmltdW1QYXNzd29yZExlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5pbXVtUGFzc3dvcmRMZW5ndGg7XG4gIH1cblxuICAvLyBwYXNzd29yZF9yZXVzZV9wcmV2ZW50aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmRSZXVzZVByZXZlbnRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkUmV1c2VQcmV2ZW50aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGFzc3dvcmRfcmV1c2VfcHJldmVudGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFzc3dvcmRSZXVzZVByZXZlbnRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFzc3dvcmRSZXVzZVByZXZlbnRpb24oKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRSZXVzZVByZXZlbnRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkUmV1c2VQcmV2ZW50aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9sb3dlcmNhc2VfY2hhcmFjdGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX2xvd2VyY2FzZV9jaGFyYWN0ZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycygpIHtcbiAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnM7XG4gIH1cblxuICAvLyByZXF1aXJlX251bWJlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlTnVtYmVycz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZU51bWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZV9udW1iZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlTnVtYmVycyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZU51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlTnVtYmVycygpIHtcbiAgICB0aGlzLl9yZXF1aXJlTnVtYmVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZU51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZU51bWJlcnM7XG4gIH1cblxuICAvLyByZXF1aXJlX3N5bWJvbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlU3ltYm9scz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVN5bWJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZV9zeW1ib2xzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlU3ltYm9scyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZVN5bWJvbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlU3ltYm9scygpIHtcbiAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVN5bWJvbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZVN5bWJvbHM7XG4gIH1cblxuICAvLyByZXF1aXJlX3VwcGVyY2FzZV9jaGFyYWN0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfdXBwZXJjYXNlX2NoYXJhY3RlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzKCkge1xuICAgIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dfdXNlcnNfdG9fY2hhbmdlX3Bhc3N3b3JkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQpLFxuICAgICAgaGFyZF9leHBpcnk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9oYXJkRXhwaXJ5KSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBtYXhfcGFzc3dvcmRfYWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhQYXNzd29yZEFnZSksXG4gICAgICBtaW5pbXVtX3Bhc3N3b3JkX2xlbmd0aDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluaW11bVBhc3N3b3JkTGVuZ3RoKSxcbiAgICAgIHBhc3N3b3JkX3JldXNlX3ByZXZlbnRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uKSxcbiAgICAgIHJlcXVpcmVfbG93ZXJjYXNlX2NoYXJhY3RlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyksXG4gICAgICByZXF1aXJlX251bWJlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlTnVtYmVycyksXG4gICAgICByZXF1aXJlX3N5bWJvbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlU3ltYm9scyksXG4gICAgICByZXF1aXJlX3VwcGVyY2FzZV9jaGFyYWN0ZXJzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYWxsb3dfdXNlcnNfdG9fY2hhbmdlX3Bhc3N3b3JkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgaGFyZF9leHBpcnk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9oYXJkRXhwaXJ5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1heF9wYXNzd29yZF9hZ2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21heFBhc3N3b3JkQWdlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbWluaW11bV9wYXNzd29yZF9sZW5ndGg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21pbmltdW1QYXNzd29yZExlbmd0aCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHBhc3N3b3JkX3JldXNlX3ByZXZlbnRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgcmVxdWlyZV9sb3dlcmNhc2VfY2hhcmFjdGVyczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVfbnVtYmVyczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVOdW1iZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVfc3ltYm9sczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVTeW1ib2xzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVfdXBwZXJjYXNlX2NoYXJhY3RlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9yZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==