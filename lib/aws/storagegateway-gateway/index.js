"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragegatewayGateway = exports.StoragegatewayGatewayTimeoutsOutputReference = exports.storagegatewayGatewayTimeoutsToHclTerraform = exports.storagegatewayGatewayTimeoutsToTerraform = exports.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference = exports.storagegatewayGatewaySmbActiveDirectorySettingsToHclTerraform = exports.storagegatewayGatewaySmbActiveDirectorySettingsToTerraform = exports.StoragegatewayGatewayGatewayNetworkInterfaceList = exports.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference = exports.storagegatewayGatewayGatewayNetworkInterfaceToHclTerraform = exports.storagegatewayGatewayGatewayNetworkInterfaceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function storagegatewayGatewayGatewayNetworkInterfaceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.storagegatewayGatewayGatewayNetworkInterfaceToTerraform = storagegatewayGatewayGatewayNetworkInterfaceToTerraform;
function storagegatewayGatewayGatewayNetworkInterfaceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.storagegatewayGatewayGatewayNetworkInterfaceToHclTerraform = storagegatewayGatewayGatewayNetworkInterfaceToHclTerraform;
class StoragegatewayGatewayGatewayNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ipv4_address - computed: true, optional: false, required: false
    get ipv4Address() {
        return this.getStringAttribute('ipv4_address');
    }
}
exports.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference = StoragegatewayGatewayGatewayNetworkInterfaceOutputReference;
_a = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewayGatewayNetworkInterfaceOutputReference[_a] = { fqn: "@cdktf/aws-cdk.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference", version: "0.0.0" };
class StoragegatewayGatewayGatewayNetworkInterfaceList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new StoragegatewayGatewayGatewayNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.StoragegatewayGatewayGatewayNetworkInterfaceList = StoragegatewayGatewayGatewayNetworkInterfaceList;
_b = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewayGatewayNetworkInterfaceList[_b] = { fqn: "@cdktf/aws-cdk.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList", version: "0.0.0" };
function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain_controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.domainControllers),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        password: cdktf.stringToTerraform(struct.password),
        timeout_in_seconds: cdktf.numberToTerraform(struct.timeoutInSeconds),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.storagegatewayGatewaySmbActiveDirectorySettingsToTerraform = storagegatewayGatewaySmbActiveDirectorySettingsToTerraform;
function storagegatewayGatewaySmbActiveDirectorySettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain_controllers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.domainControllers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        domain_name: {
            value: cdktf.stringToHclTerraform(struct.domainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_unit: {
            value: cdktf.stringToHclTerraform(struct.organizationalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.timeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.storagegatewayGatewaySmbActiveDirectorySettingsToHclTerraform = storagegatewayGatewaySmbActiveDirectorySettingsToHclTerraform;
class StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._domainControllers !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainControllers = this._domainControllers;
        }
        if (this._domainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._organizationalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnit = this._organizationalUnit;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._timeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._domainControllers = undefined;
            this._domainName = undefined;
            this._organizationalUnit = undefined;
            this._password = undefined;
            this._timeoutInSeconds = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._domainControllers = value.domainControllers;
            this._domainName = value.domainName;
            this._organizationalUnit = value.organizationalUnit;
            this._password = value.password;
            this._timeoutInSeconds = value.timeoutInSeconds;
            this._username = value.username;
        }
    }
    // active_directory_status - computed: true, optional: false, required: false
    get activeDirectoryStatus() {
        return this.getStringAttribute('active_directory_status');
    }
    get domainControllers() {
        return cdktf.Fn.tolist(this.getListAttribute('domain_controllers'));
    }
    set domainControllers(value) {
        this._domainControllers = value;
    }
    resetDomainControllers() {
        this._domainControllers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainControllersInput() {
        return this._domainControllers;
    }
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    set organizationalUnit(value) {
        this._organizationalUnit = value;
    }
    resetOrganizationalUnit() {
        this._organizationalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get organizationalUnitInput() {
        return this._organizationalUnit;
    }
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
    set timeoutInSeconds(value) {
        this._timeoutInSeconds = value;
    }
    resetTimeoutInSeconds() {
        this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInSecondsInput() {
        return this._timeoutInSeconds;
    }
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
}
exports.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference = StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference", version: "0.0.0" };
function storagegatewayGatewayTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
    };
}
exports.storagegatewayGatewayTimeoutsToTerraform = storagegatewayGatewayTimeoutsToTerraform;
function storagegatewayGatewayTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.storagegatewayGatewayTimeoutsToHclTerraform = storagegatewayGatewayTimeoutsToHclTerraform;
class StoragegatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._create !== undefined) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
        }
    }
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
}
exports.StoragegatewayGatewayTimeoutsOutputReference = StoragegatewayGatewayTimeoutsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewayTimeoutsOutputReference[_d] = { fqn: "@cdktf/aws-cdk.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_gateway aws_storagegateway_gateway}
*/
class StoragegatewayGateway extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StoragegatewayGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayGateway to import
    * @param importFromId The id of the existing StoragegatewayGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayGateway to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_storagegateway_gateway", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_gateway aws_storagegateway_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayGatewayConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_storagegateway_gateway',
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
        // gateway_network_interface - computed: true, optional: false, required: false
        this._gatewayNetworkInterface = new StoragegatewayGatewayGatewayNetworkInterfaceList(this, "gateway_network_interface", false);
        // smb_active_directory_settings - computed: false, optional: true, required: false
        this._smbActiveDirectorySettings = new StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(this, "smb_active_directory_settings");
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new StoragegatewayGatewayTimeoutsOutputReference(this, "timeouts");
        this._activationKey = config.activationKey;
        this._averageDownloadRateLimitInBitsPerSec = config.averageDownloadRateLimitInBitsPerSec;
        this._averageUploadRateLimitInBitsPerSec = config.averageUploadRateLimitInBitsPerSec;
        this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        this._gatewayIpAddress = config.gatewayIpAddress;
        this._gatewayName = config.gatewayName;
        this._gatewayTimezone = config.gatewayTimezone;
        this._gatewayType = config.gatewayType;
        this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
        this._id = config.id;
        this._mediumChangerType = config.mediumChangerType;
        this._smbFileShareVisibility = config.smbFileShareVisibility;
        this._smbGuestPassword = config.smbGuestPassword;
        this._smbSecurityStrategy = config.smbSecurityStrategy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._tapeDriveType = config.tapeDriveType;
        this._smbActiveDirectorySettings.internalValue = config.smbActiveDirectorySettings;
        this._timeouts.internalValue = config.timeouts;
    }
    get activationKey() {
        return this.getStringAttribute('activation_key');
    }
    set activationKey(value) {
        this._activationKey = value;
    }
    resetActivationKey() {
        this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activationKeyInput() {
        return this._activationKey;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get averageDownloadRateLimitInBitsPerSec() {
        return this.getNumberAttribute('average_download_rate_limit_in_bits_per_sec');
    }
    set averageDownloadRateLimitInBitsPerSec(value) {
        this._averageDownloadRateLimitInBitsPerSec = value;
    }
    resetAverageDownloadRateLimitInBitsPerSec() {
        this._averageDownloadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get averageDownloadRateLimitInBitsPerSecInput() {
        return this._averageDownloadRateLimitInBitsPerSec;
    }
    get averageUploadRateLimitInBitsPerSec() {
        return this.getNumberAttribute('average_upload_rate_limit_in_bits_per_sec');
    }
    set averageUploadRateLimitInBitsPerSec(value) {
        this._averageUploadRateLimitInBitsPerSec = value;
    }
    resetAverageUploadRateLimitInBitsPerSec() {
        this._averageUploadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get averageUploadRateLimitInBitsPerSecInput() {
        return this._averageUploadRateLimitInBitsPerSec;
    }
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    set cloudwatchLogGroupArn(value) {
        this._cloudwatchLogGroupArn = value;
    }
    resetCloudwatchLogGroupArn() {
        this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLogGroupArnInput() {
        return this._cloudwatchLogGroupArn;
    }
    // ec2_instance_id - computed: true, optional: false, required: false
    get ec2InstanceId() {
        return this.getStringAttribute('ec2_instance_id');
    }
    // endpoint_type - computed: true, optional: false, required: false
    get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    get gatewayIpAddress() {
        return this.getStringAttribute('gateway_ip_address');
    }
    set gatewayIpAddress(value) {
        this._gatewayIpAddress = value;
    }
    resetGatewayIpAddress() {
        this._gatewayIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIpAddressInput() {
        return this._gatewayIpAddress;
    }
    get gatewayName() {
        return this.getStringAttribute('gateway_name');
    }
    set gatewayName(value) {
        this._gatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayNameInput() {
        return this._gatewayName;
    }
    get gatewayNetworkInterface() {
        return this._gatewayNetworkInterface;
    }
    get gatewayTimezone() {
        return this.getStringAttribute('gateway_timezone');
    }
    set gatewayTimezone(value) {
        this._gatewayTimezone = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayTimezoneInput() {
        return this._gatewayTimezone;
    }
    get gatewayType() {
        return this.getStringAttribute('gateway_type');
    }
    set gatewayType(value) {
        this._gatewayType = value;
    }
    resetGatewayType() {
        this._gatewayType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayTypeInput() {
        return this._gatewayType;
    }
    get gatewayVpcEndpoint() {
        return this.getStringAttribute('gateway_vpc_endpoint');
    }
    set gatewayVpcEndpoint(value) {
        this._gatewayVpcEndpoint = value;
    }
    resetGatewayVpcEndpoint() {
        this._gatewayVpcEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayVpcEndpointInput() {
        return this._gatewayVpcEndpoint;
    }
    // host_environment - computed: true, optional: false, required: false
    get hostEnvironment() {
        return this.getStringAttribute('host_environment');
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
    get mediumChangerType() {
        return this.getStringAttribute('medium_changer_type');
    }
    set mediumChangerType(value) {
        this._mediumChangerType = value;
    }
    resetMediumChangerType() {
        this._mediumChangerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mediumChangerTypeInput() {
        return this._mediumChangerType;
    }
    get smbFileShareVisibility() {
        return this.getBooleanAttribute('smb_file_share_visibility');
    }
    set smbFileShareVisibility(value) {
        this._smbFileShareVisibility = value;
    }
    resetSmbFileShareVisibility() {
        this._smbFileShareVisibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbFileShareVisibilityInput() {
        return this._smbFileShareVisibility;
    }
    get smbGuestPassword() {
        return this.getStringAttribute('smb_guest_password');
    }
    set smbGuestPassword(value) {
        this._smbGuestPassword = value;
    }
    resetSmbGuestPassword() {
        this._smbGuestPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbGuestPasswordInput() {
        return this._smbGuestPassword;
    }
    get smbSecurityStrategy() {
        return this.getStringAttribute('smb_security_strategy');
    }
    set smbSecurityStrategy(value) {
        this._smbSecurityStrategy = value;
    }
    resetSmbSecurityStrategy() {
        this._smbSecurityStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbSecurityStrategyInput() {
        return this._smbSecurityStrategy;
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
    get tapeDriveType() {
        return this.getStringAttribute('tape_drive_type');
    }
    set tapeDriveType(value) {
        this._tapeDriveType = value;
    }
    resetTapeDriveType() {
        this._tapeDriveType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tapeDriveTypeInput() {
        return this._tapeDriveType;
    }
    get smbActiveDirectorySettings() {
        return this._smbActiveDirectorySettings;
    }
    putSmbActiveDirectorySettings(value) {
        this._smbActiveDirectorySettings.internalValue = value;
    }
    resetSmbActiveDirectorySettings() {
        this._smbActiveDirectorySettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbActiveDirectorySettingsInput() {
        return this._smbActiveDirectorySettings.internalValue;
    }
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            activation_key: cdktf.stringToTerraform(this._activationKey),
            average_download_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageDownloadRateLimitInBitsPerSec),
            average_upload_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageUploadRateLimitInBitsPerSec),
            cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
            gateway_ip_address: cdktf.stringToTerraform(this._gatewayIpAddress),
            gateway_name: cdktf.stringToTerraform(this._gatewayName),
            gateway_timezone: cdktf.stringToTerraform(this._gatewayTimezone),
            gateway_type: cdktf.stringToTerraform(this._gatewayType),
            gateway_vpc_endpoint: cdktf.stringToTerraform(this._gatewayVpcEndpoint),
            id: cdktf.stringToTerraform(this._id),
            medium_changer_type: cdktf.stringToTerraform(this._mediumChangerType),
            smb_file_share_visibility: cdktf.booleanToTerraform(this._smbFileShareVisibility),
            smb_guest_password: cdktf.stringToTerraform(this._smbGuestPassword),
            smb_security_strategy: cdktf.stringToTerraform(this._smbSecurityStrategy),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            tape_drive_type: cdktf.stringToTerraform(this._tapeDriveType),
            smb_active_directory_settings: storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(this._smbActiveDirectorySettings.internalValue),
            timeouts: storagegatewayGatewayTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            activation_key: {
                value: cdktf.stringToHclTerraform(this._activationKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            average_download_rate_limit_in_bits_per_sec: {
                value: cdktf.numberToHclTerraform(this._averageDownloadRateLimitInBitsPerSec),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            average_upload_rate_limit_in_bits_per_sec: {
                value: cdktf.numberToHclTerraform(this._averageUploadRateLimitInBitsPerSec),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cloudwatch_log_group_arn: {
                value: cdktf.stringToHclTerraform(this._cloudwatchLogGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_ip_address: {
                value: cdktf.stringToHclTerraform(this._gatewayIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_name: {
                value: cdktf.stringToHclTerraform(this._gatewayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_timezone: {
                value: cdktf.stringToHclTerraform(this._gatewayTimezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_type: {
                value: cdktf.stringToHclTerraform(this._gatewayType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_vpc_endpoint: {
                value: cdktf.stringToHclTerraform(this._gatewayVpcEndpoint),
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
            medium_changer_type: {
                value: cdktf.stringToHclTerraform(this._mediumChangerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            smb_file_share_visibility: {
                value: cdktf.booleanToHclTerraform(this._smbFileShareVisibility),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            smb_guest_password: {
                value: cdktf.stringToHclTerraform(this._smbGuestPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            smb_security_strategy: {
                value: cdktf.stringToHclTerraform(this._smbSecurityStrategy),
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
            tape_drive_type: {
                value: cdktf.stringToHclTerraform(this._tapeDriveType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            smb_active_directory_settings: {
                value: storagegatewayGatewaySmbActiveDirectorySettingsToHclTerraform(this._smbActiveDirectorySettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "StoragegatewayGatewaySmbActiveDirectorySettingsList",
            },
            timeouts: {
                value: storagegatewayGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "StoragegatewayGatewayTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.StoragegatewayGateway = StoragegatewayGateway;
_e = JSII_RTTI_SYMBOL_1;
StoragegatewayGateway[_e] = { fqn: "@cdktf/aws-cdk.storagegatewayGateway.StoragegatewayGateway", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
StoragegatewayGateway.tfResourceType = "aws_storagegateway_gateway";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3N0b3JhZ2VnYXRld2F5LWdhdGV3YXkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE0Ri9CLFNBQWdCLHVEQUF1RCxDQUFDLE1BQXFEO0lBQzNILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU8sRUFDTixDQUFBO0FBQ0gsQ0FBQztBQVBELDBIQU9DO0FBR0QsU0FBZ0IsMERBQTBELENBQUMsTUFBcUQ7SUFDOUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0lBQ0YsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBUkQsZ0lBUUM7QUFFRCxNQUFhLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBR2xHOzs7OztNQUtFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCLEVBQUUsa0JBQTBCLEVBQUUsc0JB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Q3BILE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLHFEQUFxRDthQUN4RTtZQUNELFFBQVEsRUFBRTtnQkFDUixLQUFLLEVBQUUsMkNBQTJDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7Z0JBQ2hGLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLCtCQUErQjthQUNsRDtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBdGlCSCxzREF1aUJDOzs7QUFyaUJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csb0NBQWMsR0FBRyw0QkFBNEIsQUFBL0IsQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5XG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZWdhdGV3YXlHYXRld2F5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjYWN0aXZhdGlvbl9rZXkgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2FjdGl2YXRpb25fa2V5fVxuICAqL1xuICByZWFkb25seSBhY3RpdmF0aW9uS2V5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5I2F2ZXJhZ2VfZG93bmxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWMgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2F2ZXJhZ2VfZG93bmxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWN9XG4gICovXG4gIHJlYWRvbmx5IGF2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNhdmVyYWdlX3VwbG9hZF9yYXRlX2xpbWl0X2luX2JpdHNfcGVyX3NlYyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkjYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWN9XG4gICovXG4gIHJlYWRvbmx5IGF2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSNjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dHcm91cEFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNnYXRld2F5X2lwX2FkZHJlc3MgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2dhdGV3YXlfaXBfYWRkcmVzc31cbiAgKi9cbiAgcmVhZG9ubHkgZ2F0ZXdheUlwQWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNnYXRld2F5X25hbWUgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2dhdGV3YXlfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZ2F0ZXdheU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNnYXRld2F5X3RpbWV6b25lIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSNnYXRld2F5X3RpbWV6b25lfVxuICAqL1xuICByZWFkb25seSBnYXRld2F5VGltZXpvbmU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNnYXRld2F5X3R5cGUgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2dhdGV3YXlfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgZ2F0ZXdheVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjZ2F0ZXdheV92cGNfZW5kcG9pbnQgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2dhdGV3YXlfdnBjX2VuZHBvaW50fVxuICAqL1xuICByZWFkb25seSBnYXRld2F5VnBjRW5kcG9pbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjaWQgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5I21lZGl1bV9jaGFuZ2VyX3R5cGUgU3RvcmFnZWdhdGV3YXlHYXRld2F5I21lZGl1bV9jaGFuZ2VyX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IG1lZGl1bUNoYW5nZXJUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5I3NtYl9maWxlX3NoYXJlX3Zpc2liaWxpdHkgU3RvcmFnZWdhdGV3YXlHYXRld2F5I3NtYl9maWxlX3NoYXJlX3Zpc2liaWxpdHl9XG4gICovXG4gIHJlYWRvbmx5IHNtYkZpbGVTaGFyZVZpc2liaWxpdHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjc21iX2d1ZXN0X3Bhc3N3b3JkIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSNzbWJfZ3Vlc3RfcGFzc3dvcmR9XG4gICovXG4gIHJlYWRvbmx5IHNtYkd1ZXN0UGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjc21iX3NlY3VyaXR5X3N0cmF0ZWd5IFN0b3JhZ2VnYXRld2F5R2F0ZXdheSNzbWJfc2VjdXJpdHlfc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IHNtYlNlY3VyaXR5U3RyYXRlZ3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjdGFncyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjdGFnc19hbGwgU3RvcmFnZWdhdGV3YXlHYXRld2F5I3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSN0YXBlX2RyaXZlX3R5cGUgU3RvcmFnZWdhdGV3YXlHYXRld2F5I3RhcGVfZHJpdmVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGFwZURyaXZlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogc21iX2FjdGl2ZV9kaXJlY3Rvcnlfc2V0dGluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjc21iX2FjdGl2ZV9kaXJlY3Rvcnlfc2V0dGluZ3MgU3RvcmFnZWdhdGV3YXlHYXRld2F5I3NtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBzbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncz86IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzO1xuICAvKipcbiAgKiB0aW1lb3V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSN0aW1lb3V0cyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkjdGltZW91dHN9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogU3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VnYXRld2F5R2F0ZXdheUdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VnYXRld2F5R2F0ZXdheUdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3RvcmFnZWdhdGV3YXlHYXRld2F5R2F0ZXdheU5ldHdvcmtJbnRlcmZhY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZWdhdGV3YXlHYXRld2F5R2F0ZXdheU5ldHdvcmtJbnRlcmZhY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlHYXRld2F5TmV0d29ya0ludGVyZmFjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VnYXRld2F5R2F0ZXdheUdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheUdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlHYXRld2F5TmV0d29ya0ludGVyZmFjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlwdjRfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXB2NF9hZGRyZXNzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VnYXRld2F5R2F0ZXdheUdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlHYXRld2F5TmV0d29ya0ludGVyZmFjZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlHYXRld2F5TmV0d29ya0ludGVyZmFjZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNkb21haW5fY29udHJvbGxlcnMgU3RvcmFnZWdhdGV3YXlHYXRld2F5I2RvbWFpbl9jb250cm9sbGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgZG9tYWluQ29udHJvbGxlcnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNkb21haW5fbmFtZSBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkjZG9tYWluX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheSNvcmdhbml6YXRpb25hbF91bml0IFN0b3JhZ2VnYXRld2F5R2F0ZXdheSNvcmdhbml6YXRpb25hbF91bml0fVxuICAqL1xuICByZWFkb25seSBvcmdhbml6YXRpb25hbFVuaXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjcGFzc3dvcmQgU3RvcmFnZWdhdGV3YXlHYXRld2F5I3Bhc3N3b3JkfVxuICAqL1xuICByZWFkb25seSBwYXNzd29yZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5I3RpbWVvdXRfaW5fc2Vjb25kcyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkjdGltZW91dF9pbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0aW1lb3V0SW5TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5I3VzZXJuYW1lIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSN1c2VybmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkb21haW5fY29udHJvbGxlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmRvbWFpbkNvbnRyb2xsZXJzKSxcbiAgICBkb21haW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb21haW5OYW1lKSxcbiAgICBvcmdhbml6YXRpb25hbF91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbmFsVW5pdCksXG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHRpbWVvdXRfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0SW5TZWNvbmRzKSxcbiAgICB1c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VybmFtZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkb21haW5fY29udHJvbGxlcnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5kb21haW5Db250cm9sbGVycyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGRvbWFpbl9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kb21haW5OYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBvcmdhbml6YXRpb25hbF91bml0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGltZW91dF9pbl9zZWNvbmRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0SW5TZWNvbmRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kb21haW5Db250cm9sbGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb21haW5Db250cm9sbGVycyA9IHRoaXMuX2RvbWFpbkNvbnRyb2xsZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9tYWluTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb21haW5OYW1lID0gdGhpcy5fZG9tYWluTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcmdhbml6YXRpb25hbFVuaXQgPSB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXNzd29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXNzd29yZCA9IHRoaXMuX3Bhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dEluU2Vjb25kcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0SW5TZWNvbmRzID0gdGhpcy5fdGltZW91dEluU2Vjb25kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJuYW1lID0gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RvbWFpbkNvbnRyb2xsZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZG9tYWluTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGltZW91dEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJuYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kb21haW5Db250cm9sbGVycyA9IHZhbHVlLmRvbWFpbkNvbnRyb2xsZXJzO1xuICAgICAgdGhpcy5fZG9tYWluTmFtZSA9IHZhbHVlLmRvbWFpbk5hbWU7XG4gICAgICB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXQgPSB2YWx1ZS5vcmdhbml6YXRpb25hbFVuaXQ7XG4gICAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlLnBhc3N3b3JkO1xuICAgICAgdGhpcy5fdGltZW91dEluU2Vjb25kcyA9IHZhbHVlLnRpbWVvdXRJblNlY29uZHM7XG4gICAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlLnVzZXJuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGl2ZV9kaXJlY3Rvcnlfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWN0aXZlRGlyZWN0b3J5U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aXZlX2RpcmVjdG9yeV9zdGF0dXMnKTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9jb250cm9sbGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb21haW5Db250cm9sbGVycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBkb21haW5Db250cm9sbGVycygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZG9tYWluX2NvbnRyb2xsZXJzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluQ29udHJvbGxlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZG9tYWluQ29udHJvbGxlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb21haW5Db250cm9sbGVycygpIHtcbiAgICB0aGlzLl9kb21haW5Db250cm9sbGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluQ29udHJvbGxlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluQ29udHJvbGxlcnM7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lO1xuICB9XG5cbiAgLy8gb3JnYW5pemF0aW9uYWxfdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vcmdhbml6YXRpb25hbFVuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbmFsVW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yZ2FuaXphdGlvbmFsX3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yZ2FuaXphdGlvbmFsVW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3JnYW5pemF0aW9uYWxVbml0KCkge1xuICAgIHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uYWxVbml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdDtcbiAgfVxuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Bhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICAvLyB0aW1lb3V0X2luX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dEluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGltZW91dEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RpbWVvdXRfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dEluU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dEluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fdGltZW91dEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dEluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0SW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gdXNlcm5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdXNlcm5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcm5hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VybmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjY3JlYXRlIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSNjcmVhdGV9XG4gICovXG4gIHJlYWRvbmx5IGNyZWF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogU3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNyZWF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkgYXdzX3N0b3JhZ2VnYXRld2F5X2dhdGV3YXl9XG4qL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheVwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgU3RvcmFnZWdhdGV3YXlHYXRld2F5IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXkgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3Nfc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheVwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3N0b3JhZ2VnYXRld2F5X2dhdGV3YXkgYXdzX3N0b3JhZ2VnYXRld2F5X2dhdGV3YXl9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFN0b3JhZ2VnYXRld2F5R2F0ZXdheUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zdG9yYWdlZ2F0ZXdheV9nYXRld2F5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYWN0aXZhdGlvbktleSA9IGNvbmZpZy5hY3RpdmF0aW9uS2V5O1xuICAgIHRoaXMuX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyA9IGNvbmZpZy5hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWM7XG4gICAgdGhpcy5fYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyA9IGNvbmZpZy5hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjO1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cEFybiA9IGNvbmZpZy5jbG91ZHdhdGNoTG9nR3JvdXBBcm47XG4gICAgdGhpcy5fZ2F0ZXdheUlwQWRkcmVzcyA9IGNvbmZpZy5nYXRld2F5SXBBZGRyZXNzO1xuICAgIHRoaXMuX2dhdGV3YXlOYW1lID0gY29uZmlnLmdhdGV3YXlOYW1lO1xuICAgIHRoaXMuX2dhdGV3YXlUaW1lem9uZSA9IGNvbmZpZy5nYXRld2F5VGltZXpvbmU7XG4gICAgdGhpcy5fZ2F0ZXdheVR5cGUgPSBjb25maWcuZ2F0ZXdheVR5cGU7XG4gICAgdGhpcy5fZ2F0ZXdheVZwY0VuZHBvaW50ID0gY29uZmlnLmdhdGV3YXlWcGNFbmRwb2ludDtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSA9IGNvbmZpZy5tZWRpdW1DaGFuZ2VyVHlwZTtcbiAgICB0aGlzLl9zbWJGaWxlU2hhcmVWaXNpYmlsaXR5ID0gY29uZmlnLnNtYkZpbGVTaGFyZVZpc2liaWxpdHk7XG4gICAgdGhpcy5fc21iR3Vlc3RQYXNzd29yZCA9IGNvbmZpZy5zbWJHdWVzdFBhc3N3b3JkO1xuICAgIHRoaXMuX3NtYlNlY3VyaXR5U3RyYXRlZ3kgPSBjb25maWcuc21iU2VjdXJpdHlTdHJhdGVneTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3RhcGVEcml2ZVR5cGUgPSBjb25maWcudGFwZURyaXZlVHlwZTtcbiAgICB0aGlzLl9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjdGl2YXRpb25fa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWN0aXZhdGlvbktleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aXZhdGlvbktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGl2YXRpb25fa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3RpdmF0aW9uS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3RpdmF0aW9uS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWN0aXZhdGlvbktleSgpIHtcbiAgICB0aGlzLl9hY3RpdmF0aW9uS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3RpdmF0aW9uS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRpb25LZXk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF2ZXJhZ2VfZG93bmxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhdmVyYWdlX2Rvd25sb2FkX3JhdGVfbGltaXRfaW5fYml0c19wZXJfc2VjJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYygpIHtcbiAgICB0aGlzLl9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWM7XG4gIH1cblxuICAvLyBhdmVyYWdlX3VwbG9hZF9yYXRlX2xpbWl0X2luX2JpdHNfcGVyX3NlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKCkge1xuICAgIHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYztcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoTG9nR3JvdXBBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWR3YXRjaExvZ0dyb3VwQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwQXJuO1xuICB9XG5cbiAgLy8gZWMyX2luc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWMySW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VjMl9pbnN0YW5jZV9pZCcpO1xuICB9XG5cbiAgLy8gZW5kcG9pbnRfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X3R5cGUnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyBnYXRld2F5X2lwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nYXRld2F5SXBBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnYXRld2F5SXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV9pcF9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBnYXRld2F5SXBBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nYXRld2F5SXBBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2F0ZXdheUlwQWRkcmVzcygpIHtcbiAgICB0aGlzLl9nYXRld2F5SXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnYXRld2F5SXBBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlJcEFkZHJlc3M7XG4gIH1cblxuICAvLyBnYXRld2F5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2F0ZXdheU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdhdGV3YXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBnYXRld2F5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2F0ZXdheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2F0ZXdheU5hbWU7XG4gIH1cblxuICAvLyBnYXRld2F5X25ldHdvcmtfaW50ZXJmYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlOZXR3b3JrSW50ZXJmYWNlID0gbmV3IFN0b3JhZ2VnYXRld2F5R2F0ZXdheUdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlTGlzdCh0aGlzLCBcImdhdGV3YXlfbmV0d29ya19pbnRlcmZhY2VcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGdhdGV3YXlOZXR3b3JrSW50ZXJmYWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9nYXRld2F5TmV0d29ya0ludGVyZmFjZTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfdGltZXpvbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2F0ZXdheVRpbWV6b25lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnYXRld2F5VGltZXpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X3RpbWV6b25lJyk7XG4gIH1cbiAgcHVibGljIHNldCBnYXRld2F5VGltZXpvbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dhdGV3YXlUaW1lem9uZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnYXRld2F5VGltZXpvbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2F0ZXdheVRpbWV6b25lO1xuICB9XG5cbiAgLy8gZ2F0ZXdheV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnYXRld2F5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dhdGV3YXlUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2F0ZXdheVR5cGUoKSB7XG4gICAgdGhpcy5fZ2F0ZXdheVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdhdGV3YXlUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlUeXBlO1xuICB9XG5cbiAgLy8gZ2F0ZXdheV92cGNfZW5kcG9pbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ2F0ZXdheVZwY0VuZHBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnYXRld2F5VnBjRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X3ZwY19lbmRwb2ludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheVZwY0VuZHBvaW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nYXRld2F5VnBjRW5kcG9pbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHYXRld2F5VnBjRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5fZ2F0ZXdheVZwY0VuZHBvaW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnYXRld2F5VnBjRW5kcG9pbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2F0ZXdheVZwY0VuZHBvaW50O1xuICB9XG5cbiAgLy8gaG9zdF9lbnZpcm9ubWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RFbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfZW52aXJvbm1lbnQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG1lZGl1bV9jaGFuZ2VyX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVkaXVtQ2hhbmdlclR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lZGl1bUNoYW5nZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVkaXVtX2NoYW5nZXJfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVkaXVtQ2hhbmdlclR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lZGl1bUNoYW5nZXJUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVkaXVtQ2hhbmdlclR5cGUoKSB7XG4gICAgdGhpcy5fbWVkaXVtQ2hhbmdlclR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lZGl1bUNoYW5nZXJUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lZGl1bUNoYW5nZXJUeXBlO1xuICB9XG5cbiAgLy8gc21iX2ZpbGVfc2hhcmVfdmlzaWJpbGl0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJGaWxlU2hhcmVWaXNpYmlsaXR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzbWJGaWxlU2hhcmVWaXNpYmlsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NtYl9maWxlX3NoYXJlX3Zpc2liaWxpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNtYkZpbGVTaGFyZVZpc2liaWxpdHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbWJGaWxlU2hhcmVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtYkZpbGVTaGFyZVZpc2liaWxpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eTtcbiAgfVxuXG4gIC8vIHNtYl9ndWVzdF9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJHdWVzdFBhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbWJHdWVzdFBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21iX2d1ZXN0X3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJHdWVzdFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbWJHdWVzdFBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21iR3Vlc3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zbWJHdWVzdFBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbWJHdWVzdFBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQ7XG4gIH1cblxuICAvLyBzbWJfc2VjdXJpdHlfc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJTZWN1cml0eVN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbWJTZWN1cml0eVN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21iX3NlY3VyaXR5X3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJTZWN1cml0eVN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21iU2VjdXJpdHlTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbWJTZWN1cml0eVN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYlNlY3VyaXR5U3RyYXRlZ3k7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHRhcGVfZHJpdmVfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXBlRHJpdmVUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXBlRHJpdmVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFwZV9kcml2ZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXBlRHJpdmVUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXBlRHJpdmVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFwZURyaXZlVHlwZSgpIHtcbiAgICB0aGlzLl90YXBlRHJpdmVUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXBlRHJpdmVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcGVEcml2ZVR5cGU7XG4gIH1cblxuICAvLyBzbWJfYWN0aXZlX2RpcmVjdG9yeV9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyA9IG5ldyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2V0IHNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3ModmFsdWU6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKSB7XG4gICAgdGhpcy5fc21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKCkge1xuICAgIHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cyA9IG5ldyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRpbWVvdXRzXCIpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2YXRpb25fa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY3RpdmF0aW9uS2V5KSxcbiAgICAgIGF2ZXJhZ2VfZG93bmxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyksXG4gICAgICBhdmVyYWdlX3VwbG9hZF9yYXRlX2xpbWl0X2luX2JpdHNfcGVyX3NlYzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyksXG4gICAgICBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cEFybiksXG4gICAgICBnYXRld2F5X2lwX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2dhdGV3YXlJcEFkZHJlc3MpLFxuICAgICAgZ2F0ZXdheV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5TmFtZSksXG4gICAgICBnYXRld2F5X3RpbWV6b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5VGltZXpvbmUpLFxuICAgICAgZ2F0ZXdheV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5VHlwZSksXG4gICAgICBnYXRld2F5X3ZwY19lbmRwb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVZwY0VuZHBvaW50KSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBtZWRpdW1fY2hhbmdlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSksXG4gICAgICBzbWJfZmlsZV9zaGFyZV92aXNpYmlsaXR5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eSksXG4gICAgICBzbWJfZ3Vlc3RfcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQpLFxuICAgICAgc21iX3NlY3VyaXR5X3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGFwZV9kcml2ZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXBlRHJpdmVUeXBlKSxcbiAgICAgIHNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzOiBzdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc1RvVGVycmFmb3JtKHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IHN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhY3RpdmF0aW9uX2tleToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYWN0aXZhdGlvbktleSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGF2ZXJhZ2VfZG93bmxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGF2ZXJhZ2VfdXBsb2FkX3JhdGVfbGltaXRfaW5fYml0c19wZXJfc2VjOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBnYXRld2F5X2lwX2FkZHJlc3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2dhdGV3YXlJcEFkZHJlc3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBnYXRld2F5X25hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2dhdGV3YXlOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZ2F0ZXdheV90aW1lem9uZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVRpbWV6b25lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZ2F0ZXdheV90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9nYXRld2F5VHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGdhdGV3YXlfdnBjX2VuZHBvaW50OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9nYXRld2F5VnBjRW5kcG9pbnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtZWRpdW1fY2hhbmdlcl90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNtYl9maWxlX3NoYXJlX3Zpc2liaWxpdHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zbWJGaWxlU2hhcmVWaXNpYmlsaXR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHNtYl9ndWVzdF9wYXNzd29yZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc21iR3Vlc3RQYXNzd29yZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNtYl9zZWN1cml0eV9zdHJhdGVneToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc21iU2VjdXJpdHlTdHJhdGVneSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhcGVfZHJpdmVfdHlwZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdGFwZURyaXZlVHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzOiB7XG4gICAgICAgIHZhbHVlOiBzdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc1RvSGNsVGVycmFmb3JtKHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0aW1lb3V0czoge1xuICAgICAgICB2YWx1ZTogc3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHNUb0hjbFRlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzdHJ1Y3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0c1wiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19