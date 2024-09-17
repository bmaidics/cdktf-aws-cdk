"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesDirectory = exports.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference = exports.workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform = exports.workspacesDirectoryWorkspaceCreationPropertiesToTerraform = exports.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference = exports.workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform = exports.workspacesDirectoryWorkspaceAccessPropertiesToTerraform = exports.WorkspacesDirectorySelfServicePermissionsOutputReference = exports.workspacesDirectorySelfServicePermissionsToHclTerraform = exports.workspacesDirectorySelfServicePermissionsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function workspacesDirectorySelfServicePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        change_compute_type: cdktf.booleanToTerraform(struct.changeComputeType),
        increase_volume_size: cdktf.booleanToTerraform(struct.increaseVolumeSize),
        rebuild_workspace: cdktf.booleanToTerraform(struct.rebuildWorkspace),
        restart_workspace: cdktf.booleanToTerraform(struct.restartWorkspace),
        switch_running_mode: cdktf.booleanToTerraform(struct.switchRunningMode),
    };
}
exports.workspacesDirectorySelfServicePermissionsToTerraform = workspacesDirectorySelfServicePermissionsToTerraform;
function workspacesDirectorySelfServicePermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        change_compute_type: {
            value: cdktf.booleanToHclTerraform(struct.changeComputeType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        increase_volume_size: {
            value: cdktf.booleanToHclTerraform(struct.increaseVolumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rebuild_workspace: {
            value: cdktf.booleanToHclTerraform(struct.rebuildWorkspace),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        restart_workspace: {
            value: cdktf.booleanToHclTerraform(struct.restartWorkspace),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        switch_running_mode: {
            value: cdktf.booleanToHclTerraform(struct.switchRunningMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.workspacesDirectorySelfServicePermissionsToHclTerraform = workspacesDirectorySelfServicePermissionsToHclTerraform;
class WorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
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
        if (this._changeComputeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.changeComputeType = this._changeComputeType;
        }
        if (this._increaseVolumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.increaseVolumeSize = this._increaseVolumeSize;
        }
        if (this._rebuildWorkspace !== undefined) {
            hasAnyValues = true;
            internalValueResult.rebuildWorkspace = this._rebuildWorkspace;
        }
        if (this._restartWorkspace !== undefined) {
            hasAnyValues = true;
            internalValueResult.restartWorkspace = this._restartWorkspace;
        }
        if (this._switchRunningMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.switchRunningMode = this._switchRunningMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._changeComputeType = undefined;
            this._increaseVolumeSize = undefined;
            this._rebuildWorkspace = undefined;
            this._restartWorkspace = undefined;
            this._switchRunningMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._changeComputeType = value.changeComputeType;
            this._increaseVolumeSize = value.increaseVolumeSize;
            this._rebuildWorkspace = value.rebuildWorkspace;
            this._restartWorkspace = value.restartWorkspace;
            this._switchRunningMode = value.switchRunningMode;
        }
    }
    get changeComputeType() {
        return this.getBooleanAttribute('change_compute_type');
    }
    set changeComputeType(value) {
        this._changeComputeType = value;
    }
    resetChangeComputeType() {
        this._changeComputeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get changeComputeTypeInput() {
        return this._changeComputeType;
    }
    get increaseVolumeSize() {
        return this.getBooleanAttribute('increase_volume_size');
    }
    set increaseVolumeSize(value) {
        this._increaseVolumeSize = value;
    }
    resetIncreaseVolumeSize() {
        this._increaseVolumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get increaseVolumeSizeInput() {
        return this._increaseVolumeSize;
    }
    get rebuildWorkspace() {
        return this.getBooleanAttribute('rebuild_workspace');
    }
    set rebuildWorkspace(value) {
        this._rebuildWorkspace = value;
    }
    resetRebuildWorkspace() {
        this._rebuildWorkspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rebuildWorkspaceInput() {
        return this._rebuildWorkspace;
    }
    get restartWorkspace() {
        return this.getBooleanAttribute('restart_workspace');
    }
    set restartWorkspace(value) {
        this._restartWorkspace = value;
    }
    resetRestartWorkspace() {
        this._restartWorkspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restartWorkspaceInput() {
        return this._restartWorkspace;
    }
    get switchRunningMode() {
        return this.getBooleanAttribute('switch_running_mode');
    }
    set switchRunningMode(value) {
        this._switchRunningMode = value;
    }
    resetSwitchRunningMode() {
        this._switchRunningMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get switchRunningModeInput() {
        return this._switchRunningMode;
    }
}
exports.WorkspacesDirectorySelfServicePermissionsOutputReference = WorkspacesDirectorySelfServicePermissionsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
WorkspacesDirectorySelfServicePermissionsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference", version: "0.0.0" };
function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_type_android: cdktf.stringToTerraform(struct.deviceTypeAndroid),
        device_type_chromeos: cdktf.stringToTerraform(struct.deviceTypeChromeos),
        device_type_ios: cdktf.stringToTerraform(struct.deviceTypeIos),
        device_type_linux: cdktf.stringToTerraform(struct.deviceTypeLinux),
        device_type_osx: cdktf.stringToTerraform(struct.deviceTypeOsx),
        device_type_web: cdktf.stringToTerraform(struct.deviceTypeWeb),
        device_type_windows: cdktf.stringToTerraform(struct.deviceTypeWindows),
        device_type_zeroclient: cdktf.stringToTerraform(struct.deviceTypeZeroclient),
    };
}
exports.workspacesDirectoryWorkspaceAccessPropertiesToTerraform = workspacesDirectoryWorkspaceAccessPropertiesToTerraform;
function workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        device_type_android: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeAndroid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_chromeos: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeChromeos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_ios: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeIos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_linux: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeLinux),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_osx: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeOsx),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_web: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeWeb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_windows: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeWindows),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_zeroclient: {
            value: cdktf.stringToHclTerraform(struct.deviceTypeZeroclient),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform = workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform;
class WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._deviceTypeAndroid !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeAndroid = this._deviceTypeAndroid;
        }
        if (this._deviceTypeChromeos !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeChromeos = this._deviceTypeChromeos;
        }
        if (this._deviceTypeIos !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeIos = this._deviceTypeIos;
        }
        if (this._deviceTypeLinux !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeLinux = this._deviceTypeLinux;
        }
        if (this._deviceTypeOsx !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeOsx = this._deviceTypeOsx;
        }
        if (this._deviceTypeWeb !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWeb = this._deviceTypeWeb;
        }
        if (this._deviceTypeWindows !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWindows = this._deviceTypeWindows;
        }
        if (this._deviceTypeZeroclient !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeZeroclient = this._deviceTypeZeroclient;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deviceTypeAndroid = undefined;
            this._deviceTypeChromeos = undefined;
            this._deviceTypeIos = undefined;
            this._deviceTypeLinux = undefined;
            this._deviceTypeOsx = undefined;
            this._deviceTypeWeb = undefined;
            this._deviceTypeWindows = undefined;
            this._deviceTypeZeroclient = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deviceTypeAndroid = value.deviceTypeAndroid;
            this._deviceTypeChromeos = value.deviceTypeChromeos;
            this._deviceTypeIos = value.deviceTypeIos;
            this._deviceTypeLinux = value.deviceTypeLinux;
            this._deviceTypeOsx = value.deviceTypeOsx;
            this._deviceTypeWeb = value.deviceTypeWeb;
            this._deviceTypeWindows = value.deviceTypeWindows;
            this._deviceTypeZeroclient = value.deviceTypeZeroclient;
        }
    }
    get deviceTypeAndroid() {
        return this.getStringAttribute('device_type_android');
    }
    set deviceTypeAndroid(value) {
        this._deviceTypeAndroid = value;
    }
    resetDeviceTypeAndroid() {
        this._deviceTypeAndroid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeAndroidInput() {
        return this._deviceTypeAndroid;
    }
    get deviceTypeChromeos() {
        return this.getStringAttribute('device_type_chromeos');
    }
    set deviceTypeChromeos(value) {
        this._deviceTypeChromeos = value;
    }
    resetDeviceTypeChromeos() {
        this._deviceTypeChromeos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeChromeosInput() {
        return this._deviceTypeChromeos;
    }
    get deviceTypeIos() {
        return this.getStringAttribute('device_type_ios');
    }
    set deviceTypeIos(value) {
        this._deviceTypeIos = value;
    }
    resetDeviceTypeIos() {
        this._deviceTypeIos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeIosInput() {
        return this._deviceTypeIos;
    }
    get deviceTypeLinux() {
        return this.getStringAttribute('device_type_linux');
    }
    set deviceTypeLinux(value) {
        this._deviceTypeLinux = value;
    }
    resetDeviceTypeLinux() {
        this._deviceTypeLinux = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeLinuxInput() {
        return this._deviceTypeLinux;
    }
    get deviceTypeOsx() {
        return this.getStringAttribute('device_type_osx');
    }
    set deviceTypeOsx(value) {
        this._deviceTypeOsx = value;
    }
    resetDeviceTypeOsx() {
        this._deviceTypeOsx = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeOsxInput() {
        return this._deviceTypeOsx;
    }
    get deviceTypeWeb() {
        return this.getStringAttribute('device_type_web');
    }
    set deviceTypeWeb(value) {
        this._deviceTypeWeb = value;
    }
    resetDeviceTypeWeb() {
        this._deviceTypeWeb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeWebInput() {
        return this._deviceTypeWeb;
    }
    get deviceTypeWindows() {
        return this.getStringAttribute('device_type_windows');
    }
    set deviceTypeWindows(value) {
        this._deviceTypeWindows = value;
    }
    resetDeviceTypeWindows() {
        this._deviceTypeWindows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeWindowsInput() {
        return this._deviceTypeWindows;
    }
    get deviceTypeZeroclient() {
        return this.getStringAttribute('device_type_zeroclient');
    }
    set deviceTypeZeroclient(value) {
        this._deviceTypeZeroclient = value;
    }
    resetDeviceTypeZeroclient() {
        this._deviceTypeZeroclient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeZeroclientInput() {
        return this._deviceTypeZeroclient;
    }
}
exports.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference = WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
_b = JSII_RTTI_SYMBOL_1;
WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference[_b] = { fqn: "@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference", version: "0.0.0" };
function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_security_group_id: cdktf.stringToTerraform(struct.customSecurityGroupId),
        default_ou: cdktf.stringToTerraform(struct.defaultOu),
        enable_internet_access: cdktf.booleanToTerraform(struct.enableInternetAccess),
        enable_maintenance_mode: cdktf.booleanToTerraform(struct.enableMaintenanceMode),
        user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct.userEnabledAsLocalAdministrator),
    };
}
exports.workspacesDirectoryWorkspaceCreationPropertiesToTerraform = workspacesDirectoryWorkspaceCreationPropertiesToTerraform;
function workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        custom_security_group_id: {
            value: cdktf.stringToHclTerraform(struct.customSecurityGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_ou: {
            value: cdktf.stringToHclTerraform(struct.defaultOu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_internet_access: {
            value: cdktf.booleanToHclTerraform(struct.enableInternetAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_maintenance_mode: {
            value: cdktf.booleanToHclTerraform(struct.enableMaintenanceMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_enabled_as_local_administrator: {
            value: cdktf.booleanToHclTerraform(struct.userEnabledAsLocalAdministrator),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform = workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform;
class WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._customSecurityGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.customSecurityGroupId = this._customSecurityGroupId;
        }
        if (this._defaultOu !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOu = this._defaultOu;
        }
        if (this._enableInternetAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableInternetAccess = this._enableInternetAccess;
        }
        if (this._enableMaintenanceMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableMaintenanceMode = this._enableMaintenanceMode;
        }
        if (this._userEnabledAsLocalAdministrator !== undefined) {
            hasAnyValues = true;
            internalValueResult.userEnabledAsLocalAdministrator = this._userEnabledAsLocalAdministrator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customSecurityGroupId = undefined;
            this._defaultOu = undefined;
            this._enableInternetAccess = undefined;
            this._enableMaintenanceMode = undefined;
            this._userEnabledAsLocalAdministrator = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customSecurityGroupId = value.customSecurityGroupId;
            this._defaultOu = value.defaultOu;
            this._enableInternetAccess = value.enableInternetAccess;
            this._enableMaintenanceMode = value.enableMaintenanceMode;
            this._userEnabledAsLocalAdministrator = value.userEnabledAsLocalAdministrator;
        }
    }
    get customSecurityGroupId() {
        return this.getStringAttribute('custom_security_group_id');
    }
    set customSecurityGroupId(value) {
        this._customSecurityGroupId = value;
    }
    resetCustomSecurityGroupId() {
        this._customSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customSecurityGroupIdInput() {
        return this._customSecurityGroupId;
    }
    get defaultOu() {
        return this.getStringAttribute('default_ou');
    }
    set defaultOu(value) {
        this._defaultOu = value;
    }
    resetDefaultOu() {
        this._defaultOu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultOuInput() {
        return this._defaultOu;
    }
    get enableInternetAccess() {
        return this.getBooleanAttribute('enable_internet_access');
    }
    set enableInternetAccess(value) {
        this._enableInternetAccess = value;
    }
    resetEnableInternetAccess() {
        this._enableInternetAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableInternetAccessInput() {
        return this._enableInternetAccess;
    }
    get enableMaintenanceMode() {
        return this.getBooleanAttribute('enable_maintenance_mode');
    }
    set enableMaintenanceMode(value) {
        this._enableMaintenanceMode = value;
    }
    resetEnableMaintenanceMode() {
        this._enableMaintenanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableMaintenanceModeInput() {
        return this._enableMaintenanceMode;
    }
    get userEnabledAsLocalAdministrator() {
        return this.getBooleanAttribute('user_enabled_as_local_administrator');
    }
    set userEnabledAsLocalAdministrator(value) {
        this._userEnabledAsLocalAdministrator = value;
    }
    resetUserEnabledAsLocalAdministrator() {
        this._userEnabledAsLocalAdministrator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userEnabledAsLocalAdministratorInput() {
        return this._userEnabledAsLocalAdministrator;
    }
}
exports.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference = WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference[_c] = { fqn: "@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory aws_workspaces_directory}
*/
class WorkspacesDirectory extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspacesDirectory to import
    * @param importFromId The id of the existing WorkspacesDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspacesDirectory to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspaces_directory", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory aws_workspaces_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesDirectoryConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_workspaces_directory',
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
        // self_service_permissions - computed: false, optional: true, required: false
        this._selfServicePermissions = new WorkspacesDirectorySelfServicePermissionsOutputReference(this, "self_service_permissions");
        // workspace_access_properties - computed: false, optional: true, required: false
        this._workspaceAccessProperties = new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(this, "workspace_access_properties");
        // workspace_creation_properties - computed: false, optional: true, required: false
        this._workspaceCreationProperties = new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(this, "workspace_creation_properties");
        this._directoryId = config.directoryId;
        this._id = config.id;
        this._ipGroupIds = config.ipGroupIds;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._selfServicePermissions.internalValue = config.selfServicePermissions;
        this._workspaceAccessProperties.internalValue = config.workspaceAccessProperties;
        this._workspaceCreationProperties.internalValue = config.workspaceCreationProperties;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alias - computed: true, optional: false, required: false
    get alias() {
        return this.getStringAttribute('alias');
    }
    // customer_user_name - computed: true, optional: false, required: false
    get customerUserName() {
        return this.getStringAttribute('customer_user_name');
    }
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    set directoryId(value) {
        this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    get directoryIdInput() {
        return this._directoryId;
    }
    // directory_name - computed: true, optional: false, required: false
    get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    // directory_type - computed: true, optional: false, required: false
    get directoryType() {
        return this.getStringAttribute('directory_type');
    }
    // dns_ip_addresses - computed: true, optional: false, required: false
    get dnsIpAddresses() {
        return cdktf.Fn.tolist(this.getListAttribute('dns_ip_addresses'));
    }
    // iam_role_id - computed: true, optional: false, required: false
    get iamRoleId() {
        return this.getStringAttribute('iam_role_id');
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
    get ipGroupIds() {
        return cdktf.Fn.tolist(this.getListAttribute('ip_group_ids'));
    }
    set ipGroupIds(value) {
        this._ipGroupIds = value;
    }
    resetIpGroupIds() {
        this._ipGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipGroupIdsInput() {
        return this._ipGroupIds;
    }
    // registration_code - computed: true, optional: false, required: false
    get registrationCode() {
        return this.getStringAttribute('registration_code');
    }
    get subnetIds() {
        return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
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
    // workspace_security_group_id - computed: true, optional: false, required: false
    get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
    }
    get selfServicePermissions() {
        return this._selfServicePermissions;
    }
    putSelfServicePermissions(value) {
        this._selfServicePermissions.internalValue = value;
    }
    resetSelfServicePermissions() {
        this._selfServicePermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selfServicePermissionsInput() {
        return this._selfServicePermissions.internalValue;
    }
    get workspaceAccessProperties() {
        return this._workspaceAccessProperties;
    }
    putWorkspaceAccessProperties(value) {
        this._workspaceAccessProperties.internalValue = value;
    }
    resetWorkspaceAccessProperties() {
        this._workspaceAccessProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workspaceAccessPropertiesInput() {
        return this._workspaceAccessProperties.internalValue;
    }
    get workspaceCreationProperties() {
        return this._workspaceCreationProperties;
    }
    putWorkspaceCreationProperties(value) {
        this._workspaceCreationProperties.internalValue = value;
    }
    resetWorkspaceCreationProperties() {
        this._workspaceCreationProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workspaceCreationPropertiesInput() {
        return this._workspaceCreationProperties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            id: cdktf.stringToTerraform(this._id),
            ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipGroupIds),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            self_service_permissions: workspacesDirectorySelfServicePermissionsToTerraform(this._selfServicePermissions.internalValue),
            workspace_access_properties: workspacesDirectoryWorkspaceAccessPropertiesToTerraform(this._workspaceAccessProperties.internalValue),
            workspace_creation_properties: workspacesDirectoryWorkspaceCreationPropertiesToTerraform(this._workspaceCreationProperties.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            directory_id: {
                value: cdktf.stringToHclTerraform(this._directoryId),
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
            ip_group_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            subnet_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
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
            self_service_permissions: {
                value: workspacesDirectorySelfServicePermissionsToHclTerraform(this._selfServicePermissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkspacesDirectorySelfServicePermissionsList",
            },
            workspace_access_properties: {
                value: workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(this._workspaceAccessProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkspacesDirectoryWorkspaceAccessPropertiesList",
            },
            workspace_creation_properties: {
                value: workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(this._workspaceCreationProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkspacesDirectoryWorkspaceCreationPropertiesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.WorkspacesDirectory = WorkspacesDirectory;
_d = JSII_RTTI_SYMBOL_1;
WorkspacesDirectory[_d] = { fqn: "@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
WorkspacesDirectory.tfResourceType = "aws_workspaces_directory";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3dvcmtzcGFjZXMtZGlyZWN0b3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBMEUvQixTQUFnQixvREFBb0QsQ0FBQyxNQUE2RztJQUNoTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQzFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBWkQsb0hBWUM7QUFHRCxTQUFnQix1REFBdUQsQ0FBQyxNQUE2RztJQUNuTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FB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QUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBbFVILGtEQW1VQzs7O0FBalVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csa0NBQWMsR0FBRywwQkFBMEIsQUFBN0IsQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmtzcGFjZXNEaXJlY3RvcnlDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjZGlyZWN0b3J5X2lkIFdvcmtzcGFjZXNEaXJlY3RvcnkjZGlyZWN0b3J5X2lkfVxuICAqL1xuICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNpZCBXb3Jrc3BhY2VzRGlyZWN0b3J5I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNpcF9ncm91cF9pZHMgV29ya3NwYWNlc0RpcmVjdG9yeSNpcF9ncm91cF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IGlwR3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3Rvcnkjc3VibmV0X2lkcyBXb3Jrc3BhY2VzRGlyZWN0b3J5I3N1Ym5ldF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHN1Ym5ldElkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSN0YWdzIFdvcmtzcGFjZXNEaXJlY3RvcnkjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I3RhZ3NfYWxsIFdvcmtzcGFjZXNEaXJlY3RvcnkjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBzZWxmX3NlcnZpY2VfcGVybWlzc2lvbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I3NlbGZfc2VydmljZV9wZXJtaXNzaW9ucyBXb3Jrc3BhY2VzRGlyZWN0b3J5I3NlbGZfc2VydmljZV9wZXJtaXNzaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc2VsZlNlcnZpY2VQZXJtaXNzaW9ucz86IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zO1xuICAvKipcbiAgKiB3b3Jrc3BhY2VfYWNjZXNzX3Byb3BlcnRpZXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I3dvcmtzcGFjZV9hY2Nlc3NfcHJvcGVydGllcyBXb3Jrc3BhY2VzRGlyZWN0b3J5I3dvcmtzcGFjZV9hY2Nlc3NfcHJvcGVydGllc31cbiAgKi9cbiAgcmVhZG9ubHkgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcz86IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzO1xuICAvKipcbiAgKiB3b3Jrc3BhY2VfY3JlYXRpb25fcHJvcGVydGllcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3Rvcnkjd29ya3NwYWNlX2NyZWF0aW9uX3Byb3BlcnRpZXMgV29ya3NwYWNlc0RpcmVjdG9yeSN3b3Jrc3BhY2VfY3JlYXRpb25fcHJvcGVydGllc31cbiAgKi9cbiAgcmVhZG9ubHkgd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzPzogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNjaGFuZ2VfY29tcHV0ZV90eXBlIFdvcmtzcGFjZXNEaXJlY3RvcnkjY2hhbmdlX2NvbXB1dGVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2hhbmdlQ29tcHV0ZVR5cGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I2luY3JlYXNlX3ZvbHVtZV9zaXplIFdvcmtzcGFjZXNEaXJlY3RvcnkjaW5jcmVhc2Vfdm9sdW1lX3NpemV9XG4gICovXG4gIHJlYWRvbmx5IGluY3JlYXNlVm9sdW1lU2l6ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjcmVidWlsZF93b3Jrc3BhY2UgV29ya3NwYWNlc0RpcmVjdG9yeSNyZWJ1aWxkX3dvcmtzcGFjZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVidWlsZFdvcmtzcGFjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjcmVzdGFydF93b3Jrc3BhY2UgV29ya3NwYWNlc0RpcmVjdG9yeSNyZXN0YXJ0X3dvcmtzcGFjZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzdGFydFdvcmtzcGFjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3Rvcnkjc3dpdGNoX3J1bm5pbmdfbW9kZSBXb3Jrc3BhY2VzRGlyZWN0b3J5I3N3aXRjaF9ydW5uaW5nX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IHN3aXRjaFJ1bm5pbmdNb2RlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXb3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc091dHB1dFJlZmVyZW5jZSB8IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNoYW5nZV9jb21wdXRlX3R5cGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNoYW5nZUNvbXB1dGVUeXBlKSxcbiAgICBpbmNyZWFzZV92b2x1bWVfc2l6ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jcmVhc2VWb2x1bWVTaXplKSxcbiAgICByZWJ1aWxkX3dvcmtzcGFjZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVidWlsZFdvcmtzcGFjZSksXG4gICAgcmVzdGFydF93b3Jrc3BhY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3RhcnRXb3Jrc3BhY2UpLFxuICAgIHN3aXRjaF9ydW5uaW5nX21vZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnN3aXRjaFJ1bm5pbmdNb2RlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3b3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zT3V0cHV0UmVmZXJlbmNlIHwgV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNoYW5nZV9jb21wdXRlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jaGFuZ2VDb21wdXRlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGluY3JlYXNlX3ZvbHVtZV9zaXplOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jcmVhc2VWb2x1bWVTaXplKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcmVidWlsZF93b3Jrc3BhY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWJ1aWxkV29ya3NwYWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcmVzdGFydF93b3Jrc3BhY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXN0YXJ0V29ya3NwYWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgc3dpdGNoX3J1bm5pbmdfbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN3aXRjaFJ1bm5pbmdNb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NoYW5nZUNvbXB1dGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNoYW5nZUNvbXB1dGVUeXBlID0gdGhpcy5fY2hhbmdlQ29tcHV0ZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNyZWFzZVZvbHVtZVNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jcmVhc2VWb2x1bWVTaXplID0gdGhpcy5faW5jcmVhc2VWb2x1bWVTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVidWlsZFdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWJ1aWxkV29ya3NwYWNlID0gdGhpcy5fcmVidWlsZFdvcmtzcGFjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc3RhcnRXb3Jrc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzdGFydFdvcmtzcGFjZSA9IHRoaXMuX3Jlc3RhcnRXb3Jrc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zd2l0Y2hSdW5uaW5nTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zd2l0Y2hSdW5uaW5nTW9kZSA9IHRoaXMuX3N3aXRjaFJ1bm5pbmdNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGFuZ2VDb21wdXRlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY3JlYXNlVm9sdW1lU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlYnVpbGRXb3Jrc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN0YXJ0V29ya3NwYWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3dpdGNoUnVubmluZ01vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NoYW5nZUNvbXB1dGVUeXBlID0gdmFsdWUuY2hhbmdlQ29tcHV0ZVR5cGU7XG4gICAgICB0aGlzLl9pbmNyZWFzZVZvbHVtZVNpemUgPSB2YWx1ZS5pbmNyZWFzZVZvbHVtZVNpemU7XG4gICAgICB0aGlzLl9yZWJ1aWxkV29ya3NwYWNlID0gdmFsdWUucmVidWlsZFdvcmtzcGFjZTtcbiAgICAgIHRoaXMuX3Jlc3RhcnRXb3Jrc3BhY2UgPSB2YWx1ZS5yZXN0YXJ0V29ya3NwYWNlO1xuICAgICAgdGhpcy5fc3dpdGNoUnVubmluZ01vZGUgPSB2YWx1ZS5zd2l0Y2hSdW5uaW5nTW9kZTtcbiAgICB9XG4gIH1cblxuICAvLyBjaGFuZ2VfY29tcHV0ZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NoYW5nZUNvbXB1dGVUeXBlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjaGFuZ2VDb21wdXRlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjaGFuZ2VfY29tcHV0ZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjaGFuZ2VDb21wdXRlVHlwZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2hhbmdlQ29tcHV0ZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGFuZ2VDb21wdXRlVHlwZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VDb21wdXRlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hhbmdlQ29tcHV0ZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlQ29tcHV0ZVR5cGU7XG4gIH1cblxuICAvLyBpbmNyZWFzZV92b2x1bWVfc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNyZWFzZVZvbHVtZVNpemU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY3JlYXNlVm9sdW1lU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNyZWFzZV92b2x1bWVfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jcmVhc2VWb2x1bWVTaXplKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNyZWFzZVZvbHVtZVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNyZWFzZVZvbHVtZVNpemUoKSB7XG4gICAgdGhpcy5faW5jcmVhc2VWb2x1bWVTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNyZWFzZVZvbHVtZVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jcmVhc2VWb2x1bWVTaXplO1xuICB9XG5cbiAgLy8gcmVidWlsZF93b3Jrc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVidWlsZFdvcmtzcGFjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVidWlsZFdvcmtzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZWJ1aWxkX3dvcmtzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVidWlsZFdvcmtzcGFjZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVidWlsZFdvcmtzcGFjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlYnVpbGRXb3Jrc3BhY2UoKSB7XG4gICAgdGhpcy5fcmVidWlsZFdvcmtzcGFjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVidWlsZFdvcmtzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWJ1aWxkV29ya3NwYWNlO1xuICB9XG5cbiAgLy8gcmVzdGFydF93b3Jrc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzdGFydFdvcmtzcGFjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVzdGFydFdvcmtzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXN0YXJ0X3dvcmtzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzdGFydFdvcmtzcGFjZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVzdGFydFdvcmtzcGFjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3RhcnRXb3Jrc3BhY2UoKSB7XG4gICAgdGhpcy5fcmVzdGFydFdvcmtzcGFjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdGFydFdvcmtzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0YXJ0V29ya3NwYWNlO1xuICB9XG5cbiAgLy8gc3dpdGNoX3J1bm5pbmdfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zd2l0Y2hSdW5uaW5nTW9kZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3dpdGNoUnVubmluZ01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3dpdGNoX3J1bm5pbmdfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3dpdGNoUnVubmluZ01vZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N3aXRjaFJ1bm5pbmdNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3dpdGNoUnVubmluZ01vZGUoKSB7XG4gICAgdGhpcy5fc3dpdGNoUnVubmluZ01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN3aXRjaFJ1bm5pbmdNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3aXRjaFJ1bm5pbmdNb2RlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjZGV2aWNlX3R5cGVfYW5kcm9pZCBXb3Jrc3BhY2VzRGlyZWN0b3J5I2RldmljZV90eXBlX2FuZHJvaWR9XG4gICovXG4gIHJlYWRvbmx5IGRldmljZVR5cGVBbmRyb2lkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNkZXZpY2VfdHlwZV9jaHJvbWVvcyBXb3Jrc3BhY2VzRGlyZWN0b3J5I2RldmljZV90eXBlX2Nocm9tZW9zfVxuICAqL1xuICByZWFkb25seSBkZXZpY2VUeXBlQ2hyb21lb3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I2RldmljZV90eXBlX2lvcyBXb3Jrc3BhY2VzRGlyZWN0b3J5I2RldmljZV90eXBlX2lvc31cbiAgKi9cbiAgcmVhZG9ubHkgZGV2aWNlVHlwZUlvcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjZGV2aWNlX3R5cGVfbGludXggV29ya3NwYWNlc0RpcmVjdG9yeSNkZXZpY2VfdHlwZV9saW51eH1cbiAgKi9cbiAgcmVhZG9ubHkgZGV2aWNlVHlwZUxpbnV4Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNkZXZpY2VfdHlwZV9vc3ggV29ya3NwYWNlc0RpcmVjdG9yeSNkZXZpY2VfdHlwZV9vc3h9XG4gICovXG4gIHJlYWRvbmx5IGRldmljZVR5cGVPc3g/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I2RldmljZV90eXBlX3dlYiBXb3Jrc3BhY2VzRGlyZWN0b3J5I2RldmljZV90eXBlX3dlYn1cbiAgKi9cbiAgcmVhZG9ubHkgZGV2aWNlVHlwZVdlYj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjZGV2aWNlX3R5cGVfd2luZG93cyBXb3Jrc3BhY2VzRGlyZWN0b3J5I2RldmljZV90eXBlX3dpbmRvd3N9XG4gICovXG4gIHJlYWRvbmx5IGRldmljZVR5cGVXaW5kb3dzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNkZXZpY2VfdHlwZV96ZXJvY2xpZW50IFdvcmtzcGFjZXNEaXJlY3RvcnkjZGV2aWNlX3R5cGVfemVyb2NsaWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgZGV2aWNlVHlwZVplcm9jbGllbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIHwgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlX3R5cGVfYW5kcm9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlQW5kcm9pZCksXG4gICAgZGV2aWNlX3R5cGVfY2hyb21lb3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZUNocm9tZW9zKSxcbiAgICBkZXZpY2VfdHlwZV9pb3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZUlvcyksXG4gICAgZGV2aWNlX3R5cGVfbGludXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZUxpbnV4KSxcbiAgICBkZXZpY2VfdHlwZV9vc3g6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZU9zeCksXG4gICAgZGV2aWNlX3R5cGVfd2ViOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVXZWIpLFxuICAgIGRldmljZV90eXBlX3dpbmRvd3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZVdpbmRvd3MpLFxuICAgIGRldmljZV90eXBlX3plcm9jbGllbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZVplcm9jbGllbnQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgfCBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGV2aWNlX3R5cGVfYW5kcm9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZUFuZHJvaWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRldmljZV90eXBlX2Nocm9tZW9zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlQ2hyb21lb3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRldmljZV90eXBlX2lvczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZUlvcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGV2aWNlX3R5cGVfbGludXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVMaW51eCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGV2aWNlX3R5cGVfb3N4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlT3N4KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZXZpY2VfdHlwZV93ZWI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVXZWIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRldmljZV90eXBlX3dpbmRvd3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVXaW5kb3dzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZXZpY2VfdHlwZV96ZXJvY2xpZW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlWmVyb2NsaWVudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGVBbmRyb2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZVR5cGVBbmRyb2lkID0gdGhpcy5fZGV2aWNlVHlwZUFuZHJvaWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXZpY2VUeXBlQ2hyb21lb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGV2aWNlVHlwZUNocm9tZW9zID0gdGhpcy5fZGV2aWNlVHlwZUNocm9tZW9zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlVHlwZUlvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlSW9zID0gdGhpcy5fZGV2aWNlVHlwZUlvcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGVMaW51eCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlTGludXggPSB0aGlzLl9kZXZpY2VUeXBlTGludXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXZpY2VUeXBlT3N4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZVR5cGVPc3ggPSB0aGlzLl9kZXZpY2VUeXBlT3N4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlVHlwZVdlYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlV2ViID0gdGhpcy5fZGV2aWNlVHlwZVdlYjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGVXaW5kb3dzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZVR5cGVXaW5kb3dzID0gdGhpcy5fZGV2aWNlVHlwZVdpbmRvd3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXZpY2VUeXBlWmVyb2NsaWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlWmVyb2NsaWVudCA9IHRoaXMuX2RldmljZVR5cGVaZXJvY2xpZW50O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlQW5kcm9pZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVDaHJvbWVvcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVJb3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlTGludXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlT3N4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZVdlYiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVXaW5kb3dzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZVplcm9jbGllbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVBbmRyb2lkID0gdmFsdWUuZGV2aWNlVHlwZUFuZHJvaWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlQ2hyb21lb3MgPSB2YWx1ZS5kZXZpY2VUeXBlQ2hyb21lb3M7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlSW9zID0gdmFsdWUuZGV2aWNlVHlwZUlvcztcbiAgICAgIHRoaXMuX2RldmljZVR5cGVMaW51eCA9IHZhbHVlLmRldmljZVR5cGVMaW51eDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVPc3ggPSB2YWx1ZS5kZXZpY2VUeXBlT3N4O1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZVdlYiA9IHZhbHVlLmRldmljZVR5cGVXZWI7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlV2luZG93cyA9IHZhbHVlLmRldmljZVR5cGVXaW5kb3dzO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZVplcm9jbGllbnQgPSB2YWx1ZS5kZXZpY2VUeXBlWmVyb2NsaWVudDtcbiAgICB9XG4gIH1cblxuICAvLyBkZXZpY2VfdHlwZV9hbmRyb2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZVR5cGVBbmRyb2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlQW5kcm9pZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX2FuZHJvaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZVR5cGVBbmRyb2lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlQW5kcm9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERldmljZVR5cGVBbmRyb2lkKCkge1xuICAgIHRoaXMuX2RldmljZVR5cGVBbmRyb2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VUeXBlQW5kcm9pZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUeXBlQW5kcm9pZDtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX2Nocm9tZW9zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZVR5cGVDaHJvbWVvcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZUNocm9tZW9zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfY2hyb21lb3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZVR5cGVDaHJvbWVvcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZUNocm9tZW9zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlVHlwZUNocm9tZW9zKCkge1xuICAgIHRoaXMuX2RldmljZVR5cGVDaHJvbWVvcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZUNocm9tZW9zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGVDaHJvbWVvcztcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX2lvcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXZpY2VUeXBlSW9zPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlSW9zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfaW9zJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VUeXBlSW9zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlSW9zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlVHlwZUlvcygpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlSW9zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VUeXBlSW9zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGVJb3M7XG4gIH1cblxuICAvLyBkZXZpY2VfdHlwZV9saW51eCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXZpY2VUeXBlTGludXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVMaW51eCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX2xpbnV4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VUeXBlTGludXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZVR5cGVMaW51eCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERldmljZVR5cGVMaW51eCgpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlTGludXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVMaW51eElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUeXBlTGludXg7XG4gIH1cblxuICAvLyBkZXZpY2VfdHlwZV9vc3ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlVHlwZU9zeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZU9zeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX29zeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlVHlwZU9zeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZU9zeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERldmljZVR5cGVPc3goKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZU9zeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZU9zeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUeXBlT3N4O1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfd2ViIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZVR5cGVXZWI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVXZWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV93ZWInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZVR5cGVXZWIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZVR5cGVXZWIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VUeXBlV2ViKCkge1xuICAgIHRoaXMuX2RldmljZVR5cGVXZWIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVXZWJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVHlwZVdlYjtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX3dpbmRvd3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlVHlwZVdpbmRvd3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVXaW5kb3dzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfd2luZG93cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlVHlwZVdpbmRvd3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZVR5cGVXaW5kb3dzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlVHlwZVdpbmRvd3MoKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZVdpbmRvd3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVXaW5kb3dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGVXaW5kb3dzO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfemVyb2NsaWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXZpY2VUeXBlWmVyb2NsaWVudD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVplcm9jbGllbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV96ZXJvY2xpZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VUeXBlWmVyb2NsaWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZVplcm9jbGllbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VUeXBlWmVyb2NsaWVudCgpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlWmVyb2NsaWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVplcm9jbGllbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVHlwZVplcm9jbGllbnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I2N1c3RvbV9zZWN1cml0eV9ncm91cF9pZCBXb3Jrc3BhY2VzRGlyZWN0b3J5I2N1c3RvbV9zZWN1cml0eV9ncm91cF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tU2VjdXJpdHlHcm91cElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNkZWZhdWx0X291IFdvcmtzcGFjZXNEaXJlY3RvcnkjZGVmYXVsdF9vdX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdE91Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSNlbmFibGVfaW50ZXJuZXRfYWNjZXNzIFdvcmtzcGFjZXNEaXJlY3RvcnkjZW5hYmxlX2ludGVybmV0X2FjY2Vzc31cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlSW50ZXJuZXRBY2Nlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dvcmtzcGFjZXNfZGlyZWN0b3J5I2VuYWJsZV9tYWludGVuYW5jZV9tb2RlIFdvcmtzcGFjZXNEaXJlY3RvcnkjZW5hYmxlX21haW50ZW5hbmNlX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZU1haW50ZW5hbmNlTW9kZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjdXNlcl9lbmFibGVkX2FzX2xvY2FsX2FkbWluaXN0cmF0b3IgV29ya3NwYWNlc0RpcmVjdG9yeSN1c2VyX2VuYWJsZWRfYXNfbG9jYWxfYWRtaW5pc3RyYXRvcn1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIHwgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tU2VjdXJpdHlHcm91cElkKSxcbiAgICBkZWZhdWx0X291OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRPdSksXG4gICAgZW5hYmxlX2ludGVybmV0X2FjY2VzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlSW50ZXJuZXRBY2Nlc3MpLFxuICAgIGVuYWJsZV9tYWludGVuYW5jZV9tb2RlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVNYWludGVuYW5jZU1vZGUpLFxuICAgIHVzZXJfZW5hYmxlZF9hc19sb2NhbF9hZG1pbmlzdHJhdG9yOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3b3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSB8IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGN1c3RvbV9zZWN1cml0eV9ncm91cF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tU2VjdXJpdHlHcm91cElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZWZhdWx0X291OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0T3UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVuYWJsZV9pbnRlcm5ldF9hY2Nlc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmFibGVJbnRlcm5ldEFjY2VzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGVuYWJsZV9tYWludGVuYW5jZV9tb2RlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlTWFpbnRlbmFuY2VNb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgdXNlcl9lbmFibGVkX2FzX2xvY2FsX2FkbWluaXN0cmF0b3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9tU2VjdXJpdHlHcm91cElkID0gdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVmYXVsdE91ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRPdSA9IHRoaXMuX2RlZmF1bHRPdTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZUludGVybmV0QWNjZXNzID0gdGhpcy5fZW5hYmxlSW50ZXJuZXRBY2Nlc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlTWFpbnRlbmFuY2VNb2RlID0gdGhpcy5fZW5hYmxlTWFpbnRlbmFuY2VNb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yID0gdGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0T3UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVJbnRlcm5ldEFjY2VzcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VuYWJsZU1haW50ZW5hbmNlTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJFbmFibGVkQXNMb2NhbEFkbWluaXN0cmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZCA9IHZhbHVlLmN1c3RvbVNlY3VyaXR5R3JvdXBJZDtcbiAgICAgIHRoaXMuX2RlZmF1bHRPdSA9IHZhbHVlLmRlZmF1bHRPdTtcbiAgICAgIHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzID0gdmFsdWUuZW5hYmxlSW50ZXJuZXRBY2Nlc3M7XG4gICAgICB0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGUgPSB2YWx1ZS5lbmFibGVNYWludGVuYW5jZU1vZGU7XG4gICAgICB0aGlzLl91c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yID0gdmFsdWUudXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tU2VjdXJpdHlHcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21TZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVNlY3VyaXR5R3JvdXBJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tU2VjdXJpdHlHcm91cElkKCkge1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZDtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfb3UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdE91Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0T3UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X291Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0T3UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRPdSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRPdSgpIHtcbiAgICB0aGlzLl9kZWZhdWx0T3UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRPdUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3U7XG4gIH1cblxuICAvLyBlbmFibGVfaW50ZXJuZXRfYWNjZXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUludGVybmV0QWNjZXNzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVJbnRlcm5ldEFjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfaW50ZXJuZXRfYWNjZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVJbnRlcm5ldEFjY2Vzcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlSW50ZXJuZXRBY2Nlc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVJbnRlcm5ldEFjY2VzcygpIHtcbiAgICB0aGlzLl9lbmFibGVJbnRlcm5ldEFjY2VzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlSW50ZXJuZXRBY2Nlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlSW50ZXJuZXRBY2Nlc3M7XG4gIH1cblxuICAvLyBlbmFibGVfbWFpbnRlbmFuY2VfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVNYWludGVuYW5jZU1vZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZU1haW50ZW5hbmNlTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfbWFpbnRlbmFuY2VfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlTWFpbnRlbmFuY2VNb2RlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVNYWludGVuYW5jZU1vZGUoKSB7XG4gICAgdGhpcy5fZW5hYmxlTWFpbnRlbmFuY2VNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVNYWludGVuYW5jZU1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlTWFpbnRlbmFuY2VNb2RlO1xuICB9XG5cbiAgLy8gdXNlcl9lbmFibGVkX2FzX2xvY2FsX2FkbWluaXN0cmF0b3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VyX2VuYWJsZWRfYXNfbG9jYWxfYWRtaW5pc3RyYXRvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJFbmFibGVkQXNMb2NhbEFkbWluaXN0cmF0b3IoKSB7XG4gICAgdGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93b3Jrc3BhY2VzX2RpcmVjdG9yeSBhd3Nfd29ya3NwYWNlc19kaXJlY3Rvcnl9XG4qL1xuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZXNEaXJlY3RvcnkgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3dvcmtzcGFjZXNfZGlyZWN0b3J5XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFdvcmtzcGFjZXNEaXJlY3RvcnkgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgV29ya3NwYWNlc0RpcmVjdG9yeSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgV29ya3NwYWNlc0RpcmVjdG9yeSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFdvcmtzcGFjZXNEaXJlY3RvcnkgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3dvcmtzcGFjZXNfZGlyZWN0b3J5XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd29ya3NwYWNlc19kaXJlY3RvcnkgYXdzX3dvcmtzcGFjZXNfZGlyZWN0b3J5fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBXb3Jrc3BhY2VzRGlyZWN0b3J5Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFdvcmtzcGFjZXNEaXJlY3RvcnlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c193b3Jrc3BhY2VzX2RpcmVjdG9yeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2RpcmVjdG9yeUlkID0gY29uZmlnLmRpcmVjdG9yeUlkO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2lwR3JvdXBJZHMgPSBjb25maWcuaXBHcm91cElkcztcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSBjb25maWcuc3VibmV0SWRzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fc2VsZlNlcnZpY2VQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNlbGZTZXJ2aWNlUGVybWlzc2lvbnM7XG4gICAgdGhpcy5fd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLndvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXM7XG4gICAgdGhpcy5fd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSBjb25maWcud29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGlhcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsaWFzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxpYXMnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbWVyX3VzZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyVXNlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21lcl91c2VyX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRpcmVjdG9yeV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kaXJlY3RvcnlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpcmVjdG9yeUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXJlY3RvcnlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXJlY3RvcnlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3RvcnlJZDtcbiAgfVxuXG4gIC8vIGRpcmVjdG9yeV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpcmVjdG9yeV9uYW1lJyk7XG4gIH1cblxuICAvLyBkaXJlY3RvcnlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfdHlwZScpO1xuICB9XG5cbiAgLy8gZG5zX2lwX2FkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc0lwQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnNfaXBfYWRkcmVzc2VzJykpO1xuICB9XG5cbiAgLy8gaWFtX3JvbGVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpYW1Sb2xlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW1fcm9sZV9pZCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gaXBfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXBHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpcEdyb3VwSWRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcF9ncm91cF9pZHMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBpcEdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2lwR3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcEdyb3VwSWRzKCkge1xuICAgIHRoaXMuX2lwR3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwR3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXBHcm91cElkcztcbiAgfVxuXG4gIC8vIHJlZ2lzdHJhdGlvbl9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaXN0cmF0aW9uQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lzdHJhdGlvbl9jb2RlJyk7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VibmV0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJuZXRJZHMoKSB7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0SWRzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB3b3Jrc3BhY2Vfc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3b3Jrc3BhY2VTZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3b3Jrc3BhY2Vfc2VjdXJpdHlfZ3JvdXBfaWQnKTtcbiAgfVxuXG4gIC8vIHNlbGZfc2VydmljZV9wZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWxmU2VydmljZVBlcm1pc3Npb25zID0gbmV3IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic2VsZl9zZXJ2aWNlX3Blcm1pc3Npb25zXCIpO1xuICBwdWJsaWMgZ2V0IHNlbGZTZXJ2aWNlUGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGZTZXJ2aWNlUGVybWlzc2lvbnM7XG4gIH1cbiAgcHVibGljIHB1dFNlbGZTZXJ2aWNlUGVybWlzc2lvbnModmFsdWU6IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zKSB7XG4gICAgdGhpcy5fc2VsZlNlcnZpY2VQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VsZlNlcnZpY2VQZXJtaXNzaW9ucygpIHtcbiAgICB0aGlzLl9zZWxmU2VydmljZVBlcm1pc3Npb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlbGZTZXJ2aWNlUGVybWlzc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZlNlcnZpY2VQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gd29ya3NwYWNlX2FjY2Vzc19wcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMgPSBuZXcgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ3b3Jrc3BhY2VfYWNjZXNzX3Byb3BlcnRpZXNcIik7XG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcztcbiAgfVxuICBwdWJsaWMgcHV0V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyh2YWx1ZTogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMpIHtcbiAgICB0aGlzLl93b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX3dvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB3b3Jrc3BhY2VfY3JlYXRpb25fcHJvcGVydGllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMgPSBuZXcgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIndvcmtzcGFjZV9jcmVhdGlvbl9wcm9wZXJ0aWVzXCIpO1xuICBwdWJsaWMgZ2V0IHdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzO1xuICB9XG4gIHB1YmxpYyBwdXRXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXModmFsdWU6IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMpIHtcbiAgICB0aGlzLl93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcygpIHtcbiAgICB0aGlzLl93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3RvcnlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RpcmVjdG9yeUlkKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBpcF9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9pcEdyb3VwSWRzKSxcbiAgICAgIHN1Ym5ldF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9zdWJuZXRJZHMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBzZWxmX3NlcnZpY2VfcGVybWlzc2lvbnM6IHdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zVG9UZXJyYWZvcm0odGhpcy5fc2VsZlNlcnZpY2VQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHdvcmtzcGFjZV9hY2Nlc3NfcHJvcGVydGllczogd29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXNUb1RlcnJhZm9ybSh0aGlzLl93b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUpLFxuICAgICAgd29ya3NwYWNlX2NyZWF0aW9uX3Byb3BlcnRpZXM6IHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXNUb1RlcnJhZm9ybSh0aGlzLl93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBkaXJlY3RvcnlfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2RpcmVjdG9yeUlkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaXBfZ3JvdXBfaWRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5faXBHcm91cElkcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBzdWJuZXRfaWRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc3VibmV0SWRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHNlbGZfc2VydmljZV9wZXJtaXNzaW9uczoge1xuICAgICAgICB2YWx1ZTogd29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnNUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZWxmU2VydmljZVBlcm1pc3Npb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJXb3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB3b3Jrc3BhY2VfYWNjZXNzX3Byb3BlcnRpZXM6IHtcbiAgICAgICAgdmFsdWU6IHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzVG9IY2xUZXJyYWZvcm0odGhpcy5fd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgd29ya3NwYWNlX2NyZWF0aW9uX3Byb3BlcnRpZXM6IHtcbiAgICAgICAgdmFsdWU6IHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXNUb0hjbFRlcnJhZm9ybSh0aGlzLl93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXNMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=