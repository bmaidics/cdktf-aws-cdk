"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigConfigurationAggregator = exports.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference = exports.configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform = exports.configConfigurationAggregatorOrganizationAggregationSourceToTerraform = exports.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference = exports.configConfigurationAggregatorAccountAggregationSourceToHclTerraform = exports.configConfigurationAggregatorAccountAggregationSourceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.accountIds),
        all_regions: cdktf.booleanToTerraform(struct.allRegions),
        regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.regions),
    };
}
exports.configConfigurationAggregatorAccountAggregationSourceToTerraform = configConfigurationAggregatorAccountAggregationSourceToTerraform;
function configConfigurationAggregatorAccountAggregationSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        account_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.accountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        all_regions: {
            value: cdktf.booleanToHclTerraform(struct.allRegions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        regions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.regions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.configConfigurationAggregatorAccountAggregationSourceToHclTerraform = configConfigurationAggregatorAccountAggregationSourceToHclTerraform;
class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._accountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIds = this._accountIds;
        }
        if (this._allRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allRegions = this._allRegions;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accountIds = undefined;
            this._allRegions = undefined;
            this._regions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accountIds = value.accountIds;
            this._allRegions = value.allRegions;
            this._regions = value.regions;
        }
    }
    get accountIds() {
        return this.getListAttribute('account_ids');
    }
    set accountIds(value) {
        this._accountIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdsInput() {
        return this._accountIds;
    }
    get allRegions() {
        return this.getBooleanAttribute('all_regions');
    }
    set allRegions(value) {
        this._allRegions = value;
    }
    resetAllRegions() {
        this._allRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allRegionsInput() {
        return this._allRegions;
    }
    get regions() {
        return this.getListAttribute('regions');
    }
    set regions(value) {
        this._regions = value;
    }
    resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionsInput() {
        return this._regions;
    }
}
exports.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference = ConfigConfigurationAggregatorAccountAggregationSourceOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ConfigConfigurationAggregatorAccountAggregationSourceOutputReference[_a] = { fqn: "@cdktf/aws-cdk.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference", version: "0.0.0" };
function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_regions: cdktf.booleanToTerraform(struct.allRegions),
        regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.regions),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.configConfigurationAggregatorOrganizationAggregationSourceToTerraform = configConfigurationAggregatorOrganizationAggregationSourceToTerraform;
function configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        all_regions: {
            value: cdktf.booleanToHclTerraform(struct.allRegions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        regions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.regions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform = configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform;
class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._allRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allRegions = this._allRegions;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allRegions = undefined;
            this._regions = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allRegions = value.allRegions;
            this._regions = value.regions;
            this._roleArn = value.roleArn;
        }
    }
    get allRegions() {
        return this.getBooleanAttribute('all_regions');
    }
    set allRegions(value) {
        this._allRegions = value;
    }
    resetAllRegions() {
        this._allRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allRegionsInput() {
        return this._allRegions;
    }
    get regions() {
        return this.getListAttribute('regions');
    }
    set regions(value) {
        this._regions = value;
    }
    resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionsInput() {
        return this._regions;
    }
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
}
exports.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference = ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference[_b] = { fqn: "@cdktf/aws-cdk.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_aggregator aws_config_configuration_aggregator}
*/
class ConfigConfigurationAggregator extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ConfigConfigurationAggregator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigConfigurationAggregator to import
    * @param importFromId The id of the existing ConfigConfigurationAggregator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigConfigurationAggregator to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_configuration_aggregator", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_configuration_aggregator aws_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_config_configuration_aggregator',
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
        // account_aggregation_source - computed: false, optional: true, required: false
        this._accountAggregationSource = new ConfigConfigurationAggregatorAccountAggregationSourceOutputReference(this, "account_aggregation_source");
        // organization_aggregation_source - computed: false, optional: true, required: false
        this._organizationAggregationSource = new ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(this, "organization_aggregation_source");
        this._id = config.id;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._accountAggregationSource.internalValue = config.accountAggregationSource;
        this._organizationAggregationSource.internalValue = config.organizationAggregationSource;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
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
    get accountAggregationSource() {
        return this._accountAggregationSource;
    }
    putAccountAggregationSource(value) {
        this._accountAggregationSource.internalValue = value;
    }
    resetAccountAggregationSource() {
        this._accountAggregationSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountAggregationSourceInput() {
        return this._accountAggregationSource.internalValue;
    }
    get organizationAggregationSource() {
        return this._organizationAggregationSource;
    }
    putOrganizationAggregationSource(value) {
        this._organizationAggregationSource.internalValue = value;
    }
    resetOrganizationAggregationSource() {
        this._organizationAggregationSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get organizationAggregationSourceInput() {
        return this._organizationAggregationSource.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            account_aggregation_source: configConfigurationAggregatorAccountAggregationSourceToTerraform(this._accountAggregationSource.internalValue),
            organization_aggregation_source: configConfigurationAggregatorOrganizationAggregationSourceToTerraform(this._organizationAggregationSource.internalValue),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            account_aggregation_source: {
                value: configConfigurationAggregatorAccountAggregationSourceToHclTerraform(this._accountAggregationSource.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ConfigConfigurationAggregatorAccountAggregationSourceList",
            },
            organization_aggregation_source: {
                value: configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform(this._organizationAggregationSource.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ConfigConfigurationAggregatorOrganizationAggregationSourceList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.ConfigConfigurationAggregator = ConfigConfigurationAggregator;
_c = JSII_RTTI_SYMBOL_1;
ConfigConfigurationAggregator[_c] = { fqn: "@cdktf/aws-cdk.configConfigurationAggregator.ConfigConfigurationAggregator", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
ConfigConfigurationAggregator.tfResourceType = "aws_config_configuration_aggregator";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2NvbmZpZy1jb25maWd1cmF0aW9uLWFnZ3JlZ2F0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUFvRC9CLFNBQWdCLGdFQUFnRSxDQUFDLE1BQXFJO0lBQ3BOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNqRixXQUFXLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDekQsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDM0UsQ0FBQTtBQUNILENBQUM7QUFWRCw0SUFVQztBQUdELFNBQWdCLG1FQUFtRSxDQUFDLE1BQXFJO0lBQ3ZOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdC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QyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXZOSCxzRUF3TkM7OztBQXROQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDRDQUFjLEdBQUcscUNBQXFDLEFBQXhDLENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvclxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvbmZpZ19jb25maWd1cmF0aW9uX2FnZ3JlZ2F0b3IjaWQgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3IjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvbmZpZ19jb25maWd1cmF0aW9uX2FnZ3JlZ2F0b3IjbmFtZSBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvciNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvbmZpZ19jb25maWd1cmF0aW9uX2FnZ3JlZ2F0b3IjdGFncyBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvciN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvciN0YWdzX2FsbCBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvciN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIGFjY291bnRfYWdncmVnYXRpb25fc291cmNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb25maWdfY29uZmlndXJhdGlvbl9hZ2dyZWdhdG9yI2FjY291bnRfYWdncmVnYXRpb25fc291cmNlIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yI2FjY291bnRfYWdncmVnYXRpb25fc291cmNlfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50QWdncmVnYXRpb25Tb3VyY2U/OiBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvckFjY291bnRBZ2dyZWdhdGlvblNvdXJjZTtcbiAgLyoqXG4gICogb3JnYW5pemF0aW9uX2FnZ3JlZ2F0aW9uX3NvdXJjZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvciNvcmdhbml6YXRpb25fYWdncmVnYXRpb25fc291cmNlIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yI29yZ2FuaXphdGlvbl9hZ2dyZWdhdGlvbl9zb3VyY2V9XG4gICovXG4gIHJlYWRvbmx5IG9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlPzogQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JPcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JBY2NvdW50QWdncmVnYXRpb25Tb3VyY2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb25maWdfY29uZmlndXJhdGlvbl9hZ2dyZWdhdG9yI2FjY291bnRfaWRzIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yI2FjY291bnRfaWRzfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50SWRzOiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvciNhbGxfcmVnaW9ucyBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvciNhbGxfcmVnaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYWxsUmVnaW9ucz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvciNyZWdpb25zIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yI3JlZ2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHJlZ2lvbnM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JBY2NvdW50QWdncmVnYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvckFjY291bnRBZ2dyZWdhdGlvblNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYWNjb3VudElkcyksXG4gICAgYWxsX3JlZ2lvbnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbFJlZ2lvbnMpLFxuICAgIHJlZ2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnJlZ2lvbnMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JBY2NvdW50QWdncmVnYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvckFjY291bnRBZ2dyZWdhdGlvblNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWNjb3VudF9pZHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5hY2NvdW50SWRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGFsbF9yZWdpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsUmVnaW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHJlZ2lvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5yZWdpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JBY2NvdW50QWdncmVnYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2NvdW50SWRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY291bnRJZHMgPSB0aGlzLl9hY2NvdW50SWRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWxsUmVnaW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxSZWdpb25zID0gdGhpcy5fYWxsUmVnaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZ2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVnaW9ucyA9IHRoaXMuX3JlZ2lvbnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvckFjY291bnRBZ2dyZWdhdGlvblNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY291bnRJZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxSZWdpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVnaW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWNjb3VudElkcyA9IHZhbHVlLmFjY291bnRJZHM7XG4gICAgICB0aGlzLl9hbGxSZWdpb25zID0gdmFsdWUuYWxsUmVnaW9ucztcbiAgICAgIHRoaXMuX3JlZ2lvbnMgPSB2YWx1ZS5yZWdpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY291bnRfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY291bnRJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhY2NvdW50X2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjb3VudElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hY2NvdW50SWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY291bnRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudElkcztcbiAgfVxuXG4gIC8vIGFsbF9yZWdpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbFJlZ2lvbnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbFJlZ2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsX3JlZ2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbFJlZ2lvbnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbFJlZ2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxSZWdpb25zKCkge1xuICAgIHRoaXMuX2FsbFJlZ2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbFJlZ2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsUmVnaW9ucztcbiAgfVxuXG4gIC8vIHJlZ2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVnaW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCByZWdpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlZ2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVnaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZ2lvbnMoKSB7XG4gICAgdGhpcy5fcmVnaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVnaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpb25zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yT3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb25maWdfY29uZmlndXJhdGlvbl9hZ2dyZWdhdG9yI2FsbF9yZWdpb25zIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yI2FsbF9yZWdpb25zfVxuICAqL1xuICByZWFkb25seSBhbGxSZWdpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb25maWdfY29uZmlndXJhdGlvbl9hZ2dyZWdhdG9yI3JlZ2lvbnMgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3IjcmVnaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVnaW9ucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb25maWdfY29uZmlndXJhdGlvbl9hZ2dyZWdhdG9yI3JvbGVfYXJuIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yI3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvck9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JPcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZU91dHB1dFJlZmVyZW5jZSB8IENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yT3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsX3JlZ2lvbnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbFJlZ2lvbnMpLFxuICAgIHJlZ2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnJlZ2lvbnMpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yT3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvck9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlT3V0cHV0UmVmZXJlbmNlIHwgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JPcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWxsX3JlZ2lvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxSZWdpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcmVnaW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnJlZ2lvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgcm9sZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JPcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JPcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWxsUmVnaW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxSZWdpb25zID0gdGhpcy5fYWxsUmVnaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZ2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVnaW9ucyA9IHRoaXMuX3JlZ2lvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb2xlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JPcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FsbFJlZ2lvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWdpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWxsUmVnaW9ucyA9IHZhbHVlLmFsbFJlZ2lvbnM7XG4gICAgICB0aGlzLl9yZWdpb25zID0gdmFsdWUucmVnaW9ucztcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsbF9yZWdpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbFJlZ2lvbnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbFJlZ2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsX3JlZ2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbFJlZ2lvbnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbFJlZ2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxSZWdpb25zKCkge1xuICAgIHRoaXMuX2FsbFJlZ2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbFJlZ2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsUmVnaW9ucztcbiAgfVxuXG4gIC8vIHJlZ2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVnaW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCByZWdpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlZ2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVnaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZ2lvbnMoKSB7XG4gICAgdGhpcy5fcmVnaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVnaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpb25zO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvciBhd3NfY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvcn1cbiovXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3IgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2NvbmZpZ19jb25maWd1cmF0aW9uX2FnZ3JlZ2F0b3JcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3IgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3IgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb25maWdfY29uZmlndXJhdGlvbl9hZ2dyZWdhdG9yI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvciB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvclwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvbmZpZ19jb25maWd1cmF0aW9uX2FnZ3JlZ2F0b3IgYXdzX2NvbmZpZ19jb25maWd1cmF0aW9uX2FnZ3JlZ2F0b3J9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY29uZmlnX2NvbmZpZ3VyYXRpb25fYWdncmVnYXRvcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2FjY291bnRBZ2dyZWdhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmFjY291bnRBZ2dyZWdhdGlvblNvdXJjZTtcbiAgICB0aGlzLl9vcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBhY2NvdW50X2FnZ3JlZ2F0aW9uX3NvdXJjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50QWdncmVnYXRpb25Tb3VyY2UgPSBuZXcgQ29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JBY2NvdW50QWdncmVnYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhY2NvdW50X2FnZ3JlZ2F0aW9uX3NvdXJjZVwiKTtcbiAgcHVibGljIGdldCBhY2NvdW50QWdncmVnYXRpb25Tb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRBZ2dyZWdhdGlvblNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0QWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlKHZhbHVlOiBDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvckFjY291bnRBZ2dyZWdhdGlvblNvdXJjZSkge1xuICAgIHRoaXMuX2FjY291bnRBZ2dyZWdhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlKCkge1xuICAgIHRoaXMuX2FjY291bnRBZ2dyZWdhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50QWdncmVnYXRpb25Tb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvcmdhbml6YXRpb25fYWdncmVnYXRpb25fc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlID0gbmV3IENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yT3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJvcmdhbml6YXRpb25fYWdncmVnYXRpb25fc291cmNlXCIpO1xuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0T3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UodmFsdWU6IENvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yT3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UpIHtcbiAgICB0aGlzLl9vcmdhbml6YXRpb25BZ2dyZWdhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UoKSB7XG4gICAgdGhpcy5fb3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhY2NvdW50X2FnZ3JlZ2F0aW9uX3NvdXJjZTogY29uZmlnQ29uZmlndXJhdGlvbkFnZ3JlZ2F0b3JBY2NvdW50QWdncmVnYXRpb25Tb3VyY2VUb1RlcnJhZm9ybSh0aGlzLl9hY2NvdW50QWdncmVnYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBvcmdhbml6YXRpb25fYWdncmVnYXRpb25fc291cmNlOiBjb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvck9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlVG9UZXJyYWZvcm0odGhpcy5fb3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgYWNjb3VudF9hZ2dyZWdhdGlvbl9zb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yQWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlVG9IY2xUZXJyYWZvcm0odGhpcy5fYWNjb3VudEFnZ3JlZ2F0aW9uU291cmNlLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvckFjY291bnRBZ2dyZWdhdGlvblNvdXJjZUxpc3RcIixcbiAgICAgIH0sXG4gICAgICBvcmdhbml6YXRpb25fYWdncmVnYXRpb25fc291cmNlOiB7XG4gICAgICAgIHZhbHVlOiBjb25maWdDb25maWd1cmF0aW9uQWdncmVnYXRvck9yZ2FuaXphdGlvbkFnZ3JlZ2F0aW9uU291cmNlVG9IY2xUZXJyYWZvcm0odGhpcy5fb3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbmZpZ0NvbmZpZ3VyYXRpb25BZ2dyZWdhdG9yT3JnYW5pemF0aW9uQWdncmVnYXRpb25Tb3VyY2VMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=