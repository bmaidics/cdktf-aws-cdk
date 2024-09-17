"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsRdsOrderableDbInstance = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance}
*/
class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataAwsRdsOrderableDbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsOrderableDbInstance to import
    * @param importFromId The id of the existing DataAwsRdsOrderableDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsOrderableDbInstance to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_orderable_db_instance", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsOrderableDbInstanceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_orderable_db_instance',
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
        this._availabilityZoneGroup = config.availabilityZoneGroup;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._id = config.id;
        this._instanceClass = config.instanceClass;
        this._licenseModel = config.licenseModel;
        this._preferredEngineVersions = config.preferredEngineVersions;
        this._preferredInstanceClasses = config.preferredInstanceClasses;
        this._storageType = config.storageType;
        this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
        this._supportsGlobalDatabases = config.supportsGlobalDatabases;
        this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
        this._supportsIops = config.supportsIops;
        this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
        this._supportsPerformanceInsights = config.supportsPerformanceInsights;
        this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
        this._supportsStorageEncryption = config.supportsStorageEncryption;
        this._vpc = config.vpc;
    }
    get availabilityZoneGroup() {
        return this.getStringAttribute('availability_zone_group');
    }
    set availabilityZoneGroup(value) {
        this._availabilityZoneGroup = value;
    }
    resetAvailabilityZoneGroup() {
        this._availabilityZoneGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneGroupInput() {
        return this._availabilityZoneGroup;
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    get engine() {
        return this.getStringAttribute('engine');
    }
    set engine(value) {
        this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    get engineInput() {
        return this._engine;
    }
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    set engineVersion(value) {
        this._engineVersion = value;
    }
    resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineVersionInput() {
        return this._engineVersion;
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
    get instanceClass() {
        return this.getStringAttribute('instance_class');
    }
    set instanceClass(value) {
        this._instanceClass = value;
    }
    resetInstanceClass() {
        this._instanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceClassInput() {
        return this._instanceClass;
    }
    get licenseModel() {
        return this.getStringAttribute('license_model');
    }
    set licenseModel(value) {
        this._licenseModel = value;
    }
    resetLicenseModel() {
        this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get licenseModelInput() {
        return this._licenseModel;
    }
    // max_iops_per_db_instance - computed: true, optional: false, required: false
    get maxIopsPerDbInstance() {
        return this.getNumberAttribute('max_iops_per_db_instance');
    }
    // max_iops_per_gib - computed: true, optional: false, required: false
    get maxIopsPerGib() {
        return this.getNumberAttribute('max_iops_per_gib');
    }
    // max_storage_size - computed: true, optional: false, required: false
    get maxStorageSize() {
        return this.getNumberAttribute('max_storage_size');
    }
    // min_iops_per_db_instance - computed: true, optional: false, required: false
    get minIopsPerDbInstance() {
        return this.getNumberAttribute('min_iops_per_db_instance');
    }
    // min_iops_per_gib - computed: true, optional: false, required: false
    get minIopsPerGib() {
        return this.getNumberAttribute('min_iops_per_gib');
    }
    // min_storage_size - computed: true, optional: false, required: false
    get minStorageSize() {
        return this.getNumberAttribute('min_storage_size');
    }
    // multi_az_capable - computed: true, optional: false, required: false
    get multiAzCapable() {
        return this.getBooleanAttribute('multi_az_capable');
    }
    // outpost_capable - computed: true, optional: false, required: false
    get outpostCapable() {
        return this.getBooleanAttribute('outpost_capable');
    }
    get preferredEngineVersions() {
        return this.getListAttribute('preferred_engine_versions');
    }
    set preferredEngineVersions(value) {
        this._preferredEngineVersions = value;
    }
    resetPreferredEngineVersions() {
        this._preferredEngineVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredEngineVersionsInput() {
        return this._preferredEngineVersions;
    }
    get preferredInstanceClasses() {
        return this.getListAttribute('preferred_instance_classes');
    }
    set preferredInstanceClasses(value) {
        this._preferredInstanceClasses = value;
    }
    resetPreferredInstanceClasses() {
        this._preferredInstanceClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredInstanceClassesInput() {
        return this._preferredInstanceClasses;
    }
    // read_replica_capable - computed: true, optional: false, required: false
    get readReplicaCapable() {
        return this.getBooleanAttribute('read_replica_capable');
    }
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    set storageType(value) {
        this._storageType = value;
    }
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageTypeInput() {
        return this._storageType;
    }
    // supported_engine_modes - computed: true, optional: false, required: false
    get supportedEngineModes() {
        return this.getListAttribute('supported_engine_modes');
    }
    get supportsEnhancedMonitoring() {
        return this.getBooleanAttribute('supports_enhanced_monitoring');
    }
    set supportsEnhancedMonitoring(value) {
        this._supportsEnhancedMonitoring = value;
    }
    resetSupportsEnhancedMonitoring() {
        this._supportsEnhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsEnhancedMonitoringInput() {
        return this._supportsEnhancedMonitoring;
    }
    get supportsGlobalDatabases() {
        return this.getBooleanAttribute('supports_global_databases');
    }
    set supportsGlobalDatabases(value) {
        this._supportsGlobalDatabases = value;
    }
    resetSupportsGlobalDatabases() {
        this._supportsGlobalDatabases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsGlobalDatabasesInput() {
        return this._supportsGlobalDatabases;
    }
    get supportsIamDatabaseAuthentication() {
        return this.getBooleanAttribute('supports_iam_database_authentication');
    }
    set supportsIamDatabaseAuthentication(value) {
        this._supportsIamDatabaseAuthentication = value;
    }
    resetSupportsIamDatabaseAuthentication() {
        this._supportsIamDatabaseAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsIamDatabaseAuthenticationInput() {
        return this._supportsIamDatabaseAuthentication;
    }
    get supportsIops() {
        return this.getBooleanAttribute('supports_iops');
    }
    set supportsIops(value) {
        this._supportsIops = value;
    }
    resetSupportsIops() {
        this._supportsIops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsIopsInput() {
        return this._supportsIops;
    }
    get supportsKerberosAuthentication() {
        return this.getBooleanAttribute('supports_kerberos_authentication');
    }
    set supportsKerberosAuthentication(value) {
        this._supportsKerberosAuthentication = value;
    }
    resetSupportsKerberosAuthentication() {
        this._supportsKerberosAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsKerberosAuthenticationInput() {
        return this._supportsKerberosAuthentication;
    }
    get supportsPerformanceInsights() {
        return this.getBooleanAttribute('supports_performance_insights');
    }
    set supportsPerformanceInsights(value) {
        this._supportsPerformanceInsights = value;
    }
    resetSupportsPerformanceInsights() {
        this._supportsPerformanceInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsPerformanceInsightsInput() {
        return this._supportsPerformanceInsights;
    }
    get supportsStorageAutoscaling() {
        return this.getBooleanAttribute('supports_storage_autoscaling');
    }
    set supportsStorageAutoscaling(value) {
        this._supportsStorageAutoscaling = value;
    }
    resetSupportsStorageAutoscaling() {
        this._supportsStorageAutoscaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsStorageAutoscalingInput() {
        return this._supportsStorageAutoscaling;
    }
    get supportsStorageEncryption() {
        return this.getBooleanAttribute('supports_storage_encryption');
    }
    set supportsStorageEncryption(value) {
        this._supportsStorageEncryption = value;
    }
    resetSupportsStorageEncryption() {
        this._supportsStorageEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsStorageEncryptionInput() {
        return this._supportsStorageEncryption;
    }
    get vpc() {
        return this.getBooleanAttribute('vpc');
    }
    set vpc(value) {
        this._vpc = value;
    }
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcInput() {
        return this._vpc;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            id: cdktf.stringToTerraform(this._id),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredEngineVersions),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredInstanceClasses),
            storage_type: cdktf.stringToTerraform(this._storageType),
            supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
            supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
            supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
            supports_iops: cdktf.booleanToTerraform(this._supportsIops),
            supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
            supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
            supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
            supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
            vpc: cdktf.booleanToTerraform(this._vpc),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            availability_zone_group: {
                value: cdktf.stringToHclTerraform(this._availabilityZoneGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine: {
                value: cdktf.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktf.stringToHclTerraform(this._engineVersion),
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
            instance_class: {
                value: cdktf.stringToHclTerraform(this._instanceClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_model: {
                value: cdktf.stringToHclTerraform(this._licenseModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_engine_versions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredEngineVersions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            preferred_instance_classes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredInstanceClasses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            storage_type: {
                value: cdktf.stringToHclTerraform(this._storageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            supports_enhanced_monitoring: {
                value: cdktf.booleanToHclTerraform(this._supportsEnhancedMonitoring),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_global_databases: {
                value: cdktf.booleanToHclTerraform(this._supportsGlobalDatabases),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_iam_database_authentication: {
                value: cdktf.booleanToHclTerraform(this._supportsIamDatabaseAuthentication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_iops: {
                value: cdktf.booleanToHclTerraform(this._supportsIops),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_kerberos_authentication: {
                value: cdktf.booleanToHclTerraform(this._supportsKerberosAuthentication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_performance_insights: {
                value: cdktf.booleanToHclTerraform(this._supportsPerformanceInsights),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_storage_autoscaling: {
                value: cdktf.booleanToHclTerraform(this._supportsStorageAutoscaling),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            supports_storage_encryption: {
                value: cdktf.booleanToHclTerraform(this._supportsStorageEncryption),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            vpc: {
                value: cdktf.booleanToHclTerraform(this._vpc),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.DataAwsRdsOrderableDbInstance = DataAwsRdsOrderableDbInstance;
_a = JSII_RTTI_SYMBOL_1;
DataAwsRdsOrderableDbInstance[_a] = { fqn: "@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
DataAwsRdsOrderableDbInstance.tfResourceType = "aws_rds_orderable_db_instance";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2RhdGEtYXdzLXJkcy1vcmRlcmFibGUtZGItaW5zdGFuY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUFrRi9COztFQUVFO0FBQ0YsTUFBYSw2QkFBOEIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBTzFFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFnQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxRQUFrQztRQUM5SCxPQUFPLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSwrQkFBK0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkosQ0FBQztJQUVMLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTJDO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsK0JBQStCO1lBQ3RELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsZUFBZSxFQUFFLFFBQVE7Z0JBQ3pCLHlCQUF5QixFQUFFLFFBQVE7YUFDcEM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ2pDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixP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RCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxTQUFTO2FBQzVCO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUF6aUJILHNFQTBpQkM7OztBQXhpQkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw0Q0FBYyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2UjYXZhaWxhYmlsaXR5X3pvbmVfZ3JvdXAgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2UjYXZhaWxhYmlsaXR5X3pvbmVfZ3JvdXB9XG4gICovXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVHcm91cD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNlbmdpbmUgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2UjZW5naW5lfVxuICAqL1xuICByZWFkb25seSBlbmdpbmU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNlbmdpbmVfdmVyc2lvbiBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNlbmdpbmVfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZW5naW5lVmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNpZCBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNpbnN0YW5jZV9jbGFzcyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNpbnN0YW5jZV9jbGFzc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNsaWNlbnNlX21vZGVsIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlI2xpY2Vuc2VfbW9kZWx9XG4gICovXG4gIHJlYWRvbmx5IGxpY2Vuc2VNb2RlbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNwcmVmZXJyZWRfZW5naW5lX3ZlcnNpb25zIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlI3ByZWZlcnJlZF9lbmdpbmVfdmVyc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHByZWZlcnJlZEVuZ2luZVZlcnNpb25zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2UjcHJlZmVycmVkX2luc3RhbmNlX2NsYXNzZXMgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2UjcHJlZmVycmVkX2luc3RhbmNlX2NsYXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IHByZWZlcnJlZEluc3RhbmNlQ2xhc3Nlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL2RhdGEtc291cmNlcy9yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlI3N0b3JhZ2VfdHlwZSBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNzdG9yYWdlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHN0b3JhZ2VUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL2RhdGEtc291cmNlcy9yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlI3N1cHBvcnRzX2VuaGFuY2VkX21vbml0b3JpbmcgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2Ujc3VwcG9ydHNfZW5oYW5jZWRfbW9uaXRvcmluZ31cbiAgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydHNFbmhhbmNlZE1vbml0b3Jpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2Ujc3VwcG9ydHNfZ2xvYmFsX2RhdGFiYXNlcyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNzdXBwb3J0c19nbG9iYWxfZGF0YWJhc2VzfVxuICAqL1xuICByZWFkb25seSBzdXBwb3J0c0dsb2JhbERhdGFiYXNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNzdXBwb3J0c19pYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb24gRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2Ujc3VwcG9ydHNfaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBzdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2Ujc3VwcG9ydHNfaW9wcyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNzdXBwb3J0c19pb3BzfVxuICAqL1xuICByZWFkb25seSBzdXBwb3J0c0lvcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2Ujc3VwcG9ydHNfa2VyYmVyb3NfYXV0aGVudGljYXRpb24gRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2Ujc3VwcG9ydHNfa2VyYmVyb3NfYXV0aGVudGljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHN1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0cyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSNzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0c31cbiAgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL2RhdGEtc291cmNlcy9yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlI3N1cHBvcnRzX3N0b3JhZ2VfYXV0b3NjYWxpbmcgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2Ujc3VwcG9ydHNfc3RvcmFnZV9hdXRvc2NhbGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2Ujc3VwcG9ydHNfc3RvcmFnZV9lbmNyeXB0aW9uIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlI3N1cHBvcnRzX3N0b3JhZ2VfZW5jcnlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSN2cGMgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2UjdnBjfVxuICAqL1xuICByZWFkb25seSB2cGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL2RhdGEtc291cmNlcy9yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlIGF3c19yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZSNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2UgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2VcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL2RhdGEtc291cmNlcy9yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlIGF3c19yZHNfb3JkZXJhYmxlX2RiX2luc3RhbmNlfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXAgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZUdyb3VwO1xuICAgIHRoaXMuX2VuZ2luZSA9IGNvbmZpZy5lbmdpbmU7XG4gICAgdGhpcy5fZW5naW5lVmVyc2lvbiA9IGNvbmZpZy5lbmdpbmVWZXJzaW9uO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2luc3RhbmNlQ2xhc3MgPSBjb25maWcuaW5zdGFuY2VDbGFzcztcbiAgICB0aGlzLl9saWNlbnNlTW9kZWwgPSBjb25maWcubGljZW5zZU1vZGVsO1xuICAgIHRoaXMuX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zID0gY29uZmlnLnByZWZlcnJlZEVuZ2luZVZlcnNpb25zO1xuICAgIHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3NlcyA9IGNvbmZpZy5wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXM7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSBjb25maWcuc3RvcmFnZVR5cGU7XG4gICAgdGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcgPSBjb25maWcuc3VwcG9ydHNFbmhhbmNlZE1vbml0b3Jpbmc7XG4gICAgdGhpcy5fc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMgPSBjb25maWcuc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXM7XG4gICAgdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uID0gY29uZmlnLnN1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbjtcbiAgICB0aGlzLl9zdXBwb3J0c0lvcHMgPSBjb25maWcuc3VwcG9ydHNJb3BzO1xuICAgIHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbiA9IGNvbmZpZy5zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb247XG4gICAgdGhpcy5fc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzID0gY29uZmlnLnN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cztcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZyA9IGNvbmZpZy5zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZztcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uID0gY29uZmlnLnN1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb247XG4gICAgdGhpcy5fdnBjID0gY29uZmlnLnZwYztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lR3JvdXA/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lX2dyb3VwJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lR3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVHcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmVHcm91cCgpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXA7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZXMnKTtcbiAgfVxuXG4gIC8vIGVuZ2luZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmdpbmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZTtcbiAgfVxuXG4gIC8vIGVuZ2luZV92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5naW5lVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmdpbmVWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lVmVyc2lvbigpIHtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZVZlcnNpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9jbGFzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VDbGFzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlQ2xhc3MoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUNsYXNzO1xuICB9XG5cbiAgLy8gbGljZW5zZV9tb2RlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpY2Vuc2VNb2RlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGljZW5zZU1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGljZW5zZV9tb2RlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGljZW5zZU1vZGVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saWNlbnNlTW9kZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWNlbnNlTW9kZWwoKSB7XG4gICAgdGhpcy5fbGljZW5zZU1vZGVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWNlbnNlTW9kZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGljZW5zZU1vZGVsO1xuICB9XG5cbiAgLy8gbWF4X2lvcHNfcGVyX2RiX2luc3RhbmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4SW9wc1BlckRiSW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfaW9wc19wZXJfZGJfaW5zdGFuY2UnKTtcbiAgfVxuXG4gIC8vIG1heF9pb3BzX3Blcl9naWIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhJb3BzUGVyR2liKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2lvcHNfcGVyX2dpYicpO1xuICB9XG5cbiAgLy8gbWF4X3N0b3JhZ2Vfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFN0b3JhZ2VTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3N0b3JhZ2Vfc2l6ZScpO1xuICB9XG5cbiAgLy8gbWluX2lvcHNfcGVyX2RiX2luc3RhbmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluSW9wc1BlckRiSW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5faW9wc19wZXJfZGJfaW5zdGFuY2UnKTtcbiAgfVxuXG4gIC8vIG1pbl9pb3BzX3Blcl9naWIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5Jb3BzUGVyR2liKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX2lvcHNfcGVyX2dpYicpO1xuICB9XG5cbiAgLy8gbWluX3N0b3JhZ2Vfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblN0b3JhZ2VTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3N0b3JhZ2Vfc2l6ZScpO1xuICB9XG5cbiAgLy8gbXVsdGlfYXpfY2FwYWJsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG11bHRpQXpDYXBhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ211bHRpX2F6X2NhcGFibGUnKTtcbiAgfVxuXG4gIC8vIG91dHBvc3RfY2FwYWJsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHBvc3RDYXBhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ291dHBvc3RfY2FwYWJsZScpO1xuICB9XG5cbiAgLy8gcHJlZmVycmVkX2VuZ2luZV92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRFbmdpbmVWZXJzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwcmVmZXJyZWRfZW5naW5lX3ZlcnNpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWRFbmdpbmVWZXJzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcnJlZEVuZ2luZVZlcnNpb25zKCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRFbmdpbmVWZXJzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucztcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF9pbnN0YW5jZV9jbGFzc2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3Nlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJlZmVycmVkX2luc3RhbmNlX2NsYXNzZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZlcnJlZEluc3RhbmNlQ2xhc3Nlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXMoKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzO1xuICB9XG5cbiAgLy8gcmVhZF9yZXBsaWNhX2NhcGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWFkUmVwbGljYUNhcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVhZF9yZXBsaWNhX2NhcGFibGUnKTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdG9yYWdlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RvcmFnZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0b3JhZ2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZVR5cGUoKSB7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VUeXBlO1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkX2VuZ2luZV9tb2RlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEVuZ2luZU1vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1cHBvcnRlZF9lbmdpbmVfbW9kZXMnKTtcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX2VuaGFuY2VkX21vbml0b3JpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfZW5oYW5jZWRfbW9uaXRvcmluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcoKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfZ2xvYmFsX2RhdGFiYXNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdXBwb3J0c0dsb2JhbERhdGFiYXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19nbG9iYWxfZGF0YWJhc2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c0dsb2JhbERhdGFiYXNlcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0c0dsb2JhbERhdGFiYXNlcygpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0dsb2JhbERhdGFiYXNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXM7XG4gIH1cblxuICAvLyBzdXBwb3J0c19pYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19pYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbjtcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX2lvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c0lvcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzSW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19pb3BzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c0lvcHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzSW9wcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzSW9wcygpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0lvcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzSW9wc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0lvcHM7XG4gIH1cblxuICAvLyBzdXBwb3J0c19rZXJiZXJvc19hdXRoZW50aWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX2tlcmJlcm9zX2F1dGhlbnRpY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbigpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb247XG4gIH1cblxuICAvLyBzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX3BlcmZvcm1hbmNlX2luc2lnaHRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cygpIHtcbiAgICB0aGlzLl9zdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHM7XG4gIH1cblxuICAvLyBzdXBwb3J0c19zdG9yYWdlX2F1dG9zY2FsaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX3N0b3JhZ2VfYXV0b3NjYWxpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZztcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX3N0b3JhZ2VfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfc3RvcmFnZV9lbmNyeXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbigpIHtcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb247XG4gIH1cblxuICAvLyB2cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd2cGMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwYyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdnBjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjKCkge1xuICAgIHRoaXMuX3ZwYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwYztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmlsaXR5X3pvbmVfZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVHcm91cCksXG4gICAgICBlbmdpbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZ2luZSksXG4gICAgICBlbmdpbmVfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5naW5lVmVyc2lvbiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgaW5zdGFuY2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlQ2xhc3MpLFxuICAgICAgbGljZW5zZV9tb2RlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGljZW5zZU1vZGVsKSxcbiAgICAgIHByZWZlcnJlZF9lbmdpbmVfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucyksXG4gICAgICBwcmVmZXJyZWRfaW5zdGFuY2VfY2xhc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3NlcyksXG4gICAgICBzdG9yYWdlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0b3JhZ2VUeXBlKSxcbiAgICAgIHN1cHBvcnRzX2VuaGFuY2VkX21vbml0b3Jpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZyksXG4gICAgICBzdXBwb3J0c19nbG9iYWxfZGF0YWJhc2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMpLFxuICAgICAgc3VwcG9ydHNfaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uKSxcbiAgICAgIHN1cHBvcnRzX2lvcHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0lvcHMpLFxuICAgICAgc3VwcG9ydHNfa2VyYmVyb3NfYXV0aGVudGljYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24pLFxuICAgICAgc3VwcG9ydHNfcGVyZm9ybWFuY2VfaW5zaWdodHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHMpLFxuICAgICAgc3VwcG9ydHNfc3RvcmFnZV9hdXRvc2NhbGluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nKSxcbiAgICAgIHN1cHBvcnRzX3N0b3JhZ2VfZW5jcnlwdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24pLFxuICAgICAgdnBjOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdnBjKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lX2dyb3VwOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXApLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBlbmdpbmU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2VuZ2luZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGVuZ2luZV92ZXJzaW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9lbmdpbmVWZXJzaW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaW5zdGFuY2VfY2xhc3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlQ2xhc3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsaWNlbnNlX21vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9saWNlbnNlTW9kZWwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwcmVmZXJyZWRfZW5naW5lX3ZlcnNpb25zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fcHJlZmVycmVkRW5naW5lVmVyc2lvbnMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHByZWZlcnJlZF9pbnN0YW5jZV9jbGFzc2VzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBzdG9yYWdlX3R5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3N0b3JhZ2VUeXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3VwcG9ydHNfZW5oYW5jZWRfbW9uaXRvcmluZzoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHN1cHBvcnRzX2dsb2JhbF9kYXRhYmFzZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0dsb2JhbERhdGFiYXNlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBzdXBwb3J0c19pYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgc3VwcG9ydHNfaW9wczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzSW9wcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBzdXBwb3J0c19rZXJiZXJvc19hdXRoZW50aWNhdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBzdXBwb3J0c19zdG9yYWdlX2F1dG9zY2FsaW5nOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmcpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgc3VwcG9ydHNfc3RvcmFnZV9lbmNyeXB0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICB2cGM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl92cGMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=