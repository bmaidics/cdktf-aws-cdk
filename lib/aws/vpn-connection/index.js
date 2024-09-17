"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpnConnection = exports.VpnConnectionVgwTelemetryList = exports.VpnConnectionVgwTelemetryOutputReference = exports.vpnConnectionVgwTelemetryToHclTerraform = exports.vpnConnectionVgwTelemetryToTerraform = exports.VpnConnectionRoutesList = exports.VpnConnectionRoutesOutputReference = exports.vpnConnectionRoutesToHclTerraform = exports.vpnConnectionRoutesToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function vpnConnectionRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.vpnConnectionRoutesToTerraform = vpnConnectionRoutesToTerraform;
function vpnConnectionRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.vpnConnectionRoutesToHclTerraform = vpnConnectionRoutesToHclTerraform;
class VpnConnectionRoutesOutputReference extends cdktf.ComplexObject {
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
    // destination_cidr_block - computed: true, optional: false, required: false
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
}
exports.VpnConnectionRoutesOutputReference = VpnConnectionRoutesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
VpnConnectionRoutesOutputReference[_a] = { fqn: "@cdktf/aws-cdk.vpnConnection.VpnConnectionRoutesOutputReference", version: "0.0.0" };
class VpnConnectionRoutesList extends cdktf.ComplexList {
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
        return new VpnConnectionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.VpnConnectionRoutesList = VpnConnectionRoutesList;
_b = JSII_RTTI_SYMBOL_1;
VpnConnectionRoutesList[_b] = { fqn: "@cdktf/aws-cdk.vpnConnection.VpnConnectionRoutesList", version: "0.0.0" };
function vpnConnectionVgwTelemetryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.vpnConnectionVgwTelemetryToTerraform = vpnConnectionVgwTelemetryToTerraform;
function vpnConnectionVgwTelemetryToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.vpnConnectionVgwTelemetryToHclTerraform = vpnConnectionVgwTelemetryToHclTerraform;
class VpnConnectionVgwTelemetryOutputReference extends cdktf.ComplexObject {
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
    // accepted_route_count - computed: true, optional: false, required: false
    get acceptedRouteCount() {
        return this.getNumberAttribute('accepted_route_count');
    }
    // certificate_arn - computed: true, optional: false, required: false
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    // last_status_change - computed: true, optional: false, required: false
    get lastStatusChange() {
        return this.getStringAttribute('last_status_change');
    }
    // outside_ip_address - computed: true, optional: false, required: false
    get outsideIpAddress() {
        return this.getStringAttribute('outside_ip_address');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // status_message - computed: true, optional: false, required: false
    get statusMessage() {
        return this.getStringAttribute('status_message');
    }
}
exports.VpnConnectionVgwTelemetryOutputReference = VpnConnectionVgwTelemetryOutputReference;
_c = JSII_RTTI_SYMBOL_1;
VpnConnectionVgwTelemetryOutputReference[_c] = { fqn: "@cdktf/aws-cdk.vpnConnection.VpnConnectionVgwTelemetryOutputReference", version: "0.0.0" };
class VpnConnectionVgwTelemetryList extends cdktf.ComplexList {
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
        return new VpnConnectionVgwTelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.VpnConnectionVgwTelemetryList = VpnConnectionVgwTelemetryList;
_d = JSII_RTTI_SYMBOL_1;
VpnConnectionVgwTelemetryList[_d] = { fqn: "@cdktf/aws-cdk.vpnConnection.VpnConnectionVgwTelemetryList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpn_connection aws_vpn_connection}
*/
class VpnConnection extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a VpnConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpnConnection to import
    * @param importFromId The id of the existing VpnConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpn_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpnConnection to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpn_connection", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpn_connection aws_vpn_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpn_connection',
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
        // routes - computed: true, optional: false, required: false
        this._routes = new VpnConnectionRoutesList(this, "routes", true);
        // vgw_telemetry - computed: true, optional: false, required: false
        this._vgwTelemetry = new VpnConnectionVgwTelemetryList(this, "vgw_telemetry", true);
        this._customerGatewayId = config.customerGatewayId;
        this._enableAcceleration = config.enableAcceleration;
        this._id = config.id;
        this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
        this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
        this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
        this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
        this._staticRoutesOnly = config.staticRoutesOnly;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayId = config.transitGatewayId;
        this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
        this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
        this._tunnel1IkeVersions = config.tunnel1IkeVersions;
        this._tunnel1InsideCidr = config.tunnel1InsideCidr;
        this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
        this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
        this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
        this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
        this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
        this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
        this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
        this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
        this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
        this._tunnel1PresharedKey = config.tunnel1PresharedKey;
        this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
        this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
        this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
        this._tunnel1StartupAction = config.tunnel1StartupAction;
        this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
        this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
        this._tunnel2IkeVersions = config.tunnel2IkeVersions;
        this._tunnel2InsideCidr = config.tunnel2InsideCidr;
        this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
        this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
        this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
        this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
        this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
        this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
        this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
        this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
        this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
        this._tunnel2PresharedKey = config.tunnel2PresharedKey;
        this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
        this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
        this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
        this._tunnel2StartupAction = config.tunnel2StartupAction;
        this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
        this._type = config.type;
        this._vpnGatewayId = config.vpnGatewayId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // customer_gateway_configuration - computed: true, optional: false, required: false
    get customerGatewayConfiguration() {
        return this.getStringAttribute('customer_gateway_configuration');
    }
    get customerGatewayId() {
        return this.getStringAttribute('customer_gateway_id');
    }
    set customerGatewayId(value) {
        this._customerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get customerGatewayIdInput() {
        return this._customerGatewayId;
    }
    get enableAcceleration() {
        return this.getBooleanAttribute('enable_acceleration');
    }
    set enableAcceleration(value) {
        this._enableAcceleration = value;
    }
    resetEnableAcceleration() {
        this._enableAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAccelerationInput() {
        return this._enableAcceleration;
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
    get localIpv4NetworkCidr() {
        return this.getStringAttribute('local_ipv4_network_cidr');
    }
    set localIpv4NetworkCidr(value) {
        this._localIpv4NetworkCidr = value;
    }
    resetLocalIpv4NetworkCidr() {
        this._localIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localIpv4NetworkCidrInput() {
        return this._localIpv4NetworkCidr;
    }
    get localIpv6NetworkCidr() {
        return this.getStringAttribute('local_ipv6_network_cidr');
    }
    set localIpv6NetworkCidr(value) {
        this._localIpv6NetworkCidr = value;
    }
    resetLocalIpv6NetworkCidr() {
        this._localIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localIpv6NetworkCidrInput() {
        return this._localIpv6NetworkCidr;
    }
    get remoteIpv4NetworkCidr() {
        return this.getStringAttribute('remote_ipv4_network_cidr');
    }
    set remoteIpv4NetworkCidr(value) {
        this._remoteIpv4NetworkCidr = value;
    }
    resetRemoteIpv4NetworkCidr() {
        this._remoteIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteIpv4NetworkCidrInput() {
        return this._remoteIpv4NetworkCidr;
    }
    get remoteIpv6NetworkCidr() {
        return this.getStringAttribute('remote_ipv6_network_cidr');
    }
    set remoteIpv6NetworkCidr(value) {
        this._remoteIpv6NetworkCidr = value;
    }
    resetRemoteIpv6NetworkCidr() {
        this._remoteIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteIpv6NetworkCidrInput() {
        return this._remoteIpv6NetworkCidr;
    }
    get routes() {
        return this._routes;
    }
    get staticRoutesOnly() {
        return this.getBooleanAttribute('static_routes_only');
    }
    set staticRoutesOnly(value) {
        this._staticRoutesOnly = value;
    }
    resetStaticRoutesOnly() {
        this._staticRoutesOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticRoutesOnlyInput() {
        return this._staticRoutesOnly;
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
    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    set transitGatewayId(value) {
        this._transitGatewayId = value;
    }
    resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayIdInput() {
        return this._transitGatewayId;
    }
    // tunnel1_address - computed: true, optional: false, required: false
    get tunnel1Address() {
        return this.getStringAttribute('tunnel1_address');
    }
    // tunnel1_bgp_asn - computed: true, optional: false, required: false
    get tunnel1BgpAsn() {
        return this.getStringAttribute('tunnel1_bgp_asn');
    }
    // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
    get tunnel1BgpHoldtime() {
        return this.getNumberAttribute('tunnel1_bgp_holdtime');
    }
    // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
    get tunnel1CgwInsideAddress() {
        return this.getStringAttribute('tunnel1_cgw_inside_address');
    }
    get tunnel1DpdTimeoutAction() {
        return this.getStringAttribute('tunnel1_dpd_timeout_action');
    }
    set tunnel1DpdTimeoutAction(value) {
        this._tunnel1DpdTimeoutAction = value;
    }
    resetTunnel1DpdTimeoutAction() {
        this._tunnel1DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1DpdTimeoutActionInput() {
        return this._tunnel1DpdTimeoutAction;
    }
    get tunnel1DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
    }
    set tunnel1DpdTimeoutSeconds(value) {
        this._tunnel1DpdTimeoutSeconds = value;
    }
    resetTunnel1DpdTimeoutSeconds() {
        this._tunnel1DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1DpdTimeoutSecondsInput() {
        return this._tunnel1DpdTimeoutSeconds;
    }
    get tunnel1IkeVersions() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel1_ike_versions'));
    }
    set tunnel1IkeVersions(value) {
        this._tunnel1IkeVersions = value;
    }
    resetTunnel1IkeVersions() {
        this._tunnel1IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1IkeVersionsInput() {
        return this._tunnel1IkeVersions;
    }
    get tunnel1InsideCidr() {
        return this.getStringAttribute('tunnel1_inside_cidr');
    }
    set tunnel1InsideCidr(value) {
        this._tunnel1InsideCidr = value;
    }
    resetTunnel1InsideCidr() {
        this._tunnel1InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1InsideCidrInput() {
        return this._tunnel1InsideCidr;
    }
    get tunnel1InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
    }
    set tunnel1InsideIpv6Cidr(value) {
        this._tunnel1InsideIpv6Cidr = value;
    }
    resetTunnel1InsideIpv6Cidr() {
        this._tunnel1InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1InsideIpv6CidrInput() {
        return this._tunnel1InsideIpv6Cidr;
    }
    get tunnel1Phase1DhGroupNumbers() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel1_phase1_dh_group_numbers')));
    }
    set tunnel1Phase1DhGroupNumbers(value) {
        this._tunnel1Phase1DhGroupNumbers = value;
    }
    resetTunnel1Phase1DhGroupNumbers() {
        this._tunnel1Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1DhGroupNumbersInput() {
        return this._tunnel1Phase1DhGroupNumbers;
    }
    get tunnel1Phase1EncryptionAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase1_encryption_algorithms'));
    }
    set tunnel1Phase1EncryptionAlgorithms(value) {
        this._tunnel1Phase1EncryptionAlgorithms = value;
    }
    resetTunnel1Phase1EncryptionAlgorithms() {
        this._tunnel1Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1EncryptionAlgorithmsInput() {
        return this._tunnel1Phase1EncryptionAlgorithms;
    }
    get tunnel1Phase1IntegrityAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase1_integrity_algorithms'));
    }
    set tunnel1Phase1IntegrityAlgorithms(value) {
        this._tunnel1Phase1IntegrityAlgorithms = value;
    }
    resetTunnel1Phase1IntegrityAlgorithms() {
        this._tunnel1Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1IntegrityAlgorithmsInput() {
        return this._tunnel1Phase1IntegrityAlgorithms;
    }
    get tunnel1Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
    }
    set tunnel1Phase1LifetimeSeconds(value) {
        this._tunnel1Phase1LifetimeSeconds = value;
    }
    resetTunnel1Phase1LifetimeSeconds() {
        this._tunnel1Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1LifetimeSecondsInput() {
        return this._tunnel1Phase1LifetimeSeconds;
    }
    get tunnel1Phase2DhGroupNumbers() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel1_phase2_dh_group_numbers')));
    }
    set tunnel1Phase2DhGroupNumbers(value) {
        this._tunnel1Phase2DhGroupNumbers = value;
    }
    resetTunnel1Phase2DhGroupNumbers() {
        this._tunnel1Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2DhGroupNumbersInput() {
        return this._tunnel1Phase2DhGroupNumbers;
    }
    get tunnel1Phase2EncryptionAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase2_encryption_algorithms'));
    }
    set tunnel1Phase2EncryptionAlgorithms(value) {
        this._tunnel1Phase2EncryptionAlgorithms = value;
    }
    resetTunnel1Phase2EncryptionAlgorithms() {
        this._tunnel1Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2EncryptionAlgorithmsInput() {
        return this._tunnel1Phase2EncryptionAlgorithms;
    }
    get tunnel1Phase2IntegrityAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase2_integrity_algorithms'));
    }
    set tunnel1Phase2IntegrityAlgorithms(value) {
        this._tunnel1Phase2IntegrityAlgorithms = value;
    }
    resetTunnel1Phase2IntegrityAlgorithms() {
        this._tunnel1Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2IntegrityAlgorithmsInput() {
        return this._tunnel1Phase2IntegrityAlgorithms;
    }
    get tunnel1Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
    }
    set tunnel1Phase2LifetimeSeconds(value) {
        this._tunnel1Phase2LifetimeSeconds = value;
    }
    resetTunnel1Phase2LifetimeSeconds() {
        this._tunnel1Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2LifetimeSecondsInput() {
        return this._tunnel1Phase2LifetimeSeconds;
    }
    get tunnel1PresharedKey() {
        return this.getStringAttribute('tunnel1_preshared_key');
    }
    set tunnel1PresharedKey(value) {
        this._tunnel1PresharedKey = value;
    }
    resetTunnel1PresharedKey() {
        this._tunnel1PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1PresharedKeyInput() {
        return this._tunnel1PresharedKey;
    }
    get tunnel1RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
    }
    set tunnel1RekeyFuzzPercentage(value) {
        this._tunnel1RekeyFuzzPercentage = value;
    }
    resetTunnel1RekeyFuzzPercentage() {
        this._tunnel1RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1RekeyFuzzPercentageInput() {
        return this._tunnel1RekeyFuzzPercentage;
    }
    get tunnel1RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
    }
    set tunnel1RekeyMarginTimeSeconds(value) {
        this._tunnel1RekeyMarginTimeSeconds = value;
    }
    resetTunnel1RekeyMarginTimeSeconds() {
        this._tunnel1RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1RekeyMarginTimeSecondsInput() {
        return this._tunnel1RekeyMarginTimeSeconds;
    }
    get tunnel1ReplayWindowSize() {
        return this.getNumberAttribute('tunnel1_replay_window_size');
    }
    set tunnel1ReplayWindowSize(value) {
        this._tunnel1ReplayWindowSize = value;
    }
    resetTunnel1ReplayWindowSize() {
        this._tunnel1ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1ReplayWindowSizeInput() {
        return this._tunnel1ReplayWindowSize;
    }
    get tunnel1StartupAction() {
        return this.getStringAttribute('tunnel1_startup_action');
    }
    set tunnel1StartupAction(value) {
        this._tunnel1StartupAction = value;
    }
    resetTunnel1StartupAction() {
        this._tunnel1StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1StartupActionInput() {
        return this._tunnel1StartupAction;
    }
    // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
    get tunnel1VgwInsideAddress() {
        return this.getStringAttribute('tunnel1_vgw_inside_address');
    }
    // tunnel2_address - computed: true, optional: false, required: false
    get tunnel2Address() {
        return this.getStringAttribute('tunnel2_address');
    }
    // tunnel2_bgp_asn - computed: true, optional: false, required: false
    get tunnel2BgpAsn() {
        return this.getStringAttribute('tunnel2_bgp_asn');
    }
    // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
    get tunnel2BgpHoldtime() {
        return this.getNumberAttribute('tunnel2_bgp_holdtime');
    }
    // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
    get tunnel2CgwInsideAddress() {
        return this.getStringAttribute('tunnel2_cgw_inside_address');
    }
    get tunnel2DpdTimeoutAction() {
        return this.getStringAttribute('tunnel2_dpd_timeout_action');
    }
    set tunnel2DpdTimeoutAction(value) {
        this._tunnel2DpdTimeoutAction = value;
    }
    resetTunnel2DpdTimeoutAction() {
        this._tunnel2DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2DpdTimeoutActionInput() {
        return this._tunnel2DpdTimeoutAction;
    }
    get tunnel2DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
    }
    set tunnel2DpdTimeoutSeconds(value) {
        this._tunnel2DpdTimeoutSeconds = value;
    }
    resetTunnel2DpdTimeoutSeconds() {
        this._tunnel2DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2DpdTimeoutSecondsInput() {
        return this._tunnel2DpdTimeoutSeconds;
    }
    get tunnel2IkeVersions() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel2_ike_versions'));
    }
    set tunnel2IkeVersions(value) {
        this._tunnel2IkeVersions = value;
    }
    resetTunnel2IkeVersions() {
        this._tunnel2IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2IkeVersionsInput() {
        return this._tunnel2IkeVersions;
    }
    get tunnel2InsideCidr() {
        return this.getStringAttribute('tunnel2_inside_cidr');
    }
    set tunnel2InsideCidr(value) {
        this._tunnel2InsideCidr = value;
    }
    resetTunnel2InsideCidr() {
        this._tunnel2InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2InsideCidrInput() {
        return this._tunnel2InsideCidr;
    }
    get tunnel2InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
    }
    set tunnel2InsideIpv6Cidr(value) {
        this._tunnel2InsideIpv6Cidr = value;
    }
    resetTunnel2InsideIpv6Cidr() {
        this._tunnel2InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2InsideIpv6CidrInput() {
        return this._tunnel2InsideIpv6Cidr;
    }
    get tunnel2Phase1DhGroupNumbers() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel2_phase1_dh_group_numbers')));
    }
    set tunnel2Phase1DhGroupNumbers(value) {
        this._tunnel2Phase1DhGroupNumbers = value;
    }
    resetTunnel2Phase1DhGroupNumbers() {
        this._tunnel2Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1DhGroupNumbersInput() {
        return this._tunnel2Phase1DhGroupNumbers;
    }
    get tunnel2Phase1EncryptionAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase1_encryption_algorithms'));
    }
    set tunnel2Phase1EncryptionAlgorithms(value) {
        this._tunnel2Phase1EncryptionAlgorithms = value;
    }
    resetTunnel2Phase1EncryptionAlgorithms() {
        this._tunnel2Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1EncryptionAlgorithmsInput() {
        return this._tunnel2Phase1EncryptionAlgorithms;
    }
    get tunnel2Phase1IntegrityAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase1_integrity_algorithms'));
    }
    set tunnel2Phase1IntegrityAlgorithms(value) {
        this._tunnel2Phase1IntegrityAlgorithms = value;
    }
    resetTunnel2Phase1IntegrityAlgorithms() {
        this._tunnel2Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1IntegrityAlgorithmsInput() {
        return this._tunnel2Phase1IntegrityAlgorithms;
    }
    get tunnel2Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
    }
    set tunnel2Phase1LifetimeSeconds(value) {
        this._tunnel2Phase1LifetimeSeconds = value;
    }
    resetTunnel2Phase1LifetimeSeconds() {
        this._tunnel2Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1LifetimeSecondsInput() {
        return this._tunnel2Phase1LifetimeSeconds;
    }
    get tunnel2Phase2DhGroupNumbers() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel2_phase2_dh_group_numbers')));
    }
    set tunnel2Phase2DhGroupNumbers(value) {
        this._tunnel2Phase2DhGroupNumbers = value;
    }
    resetTunnel2Phase2DhGroupNumbers() {
        this._tunnel2Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2DhGroupNumbersInput() {
        return this._tunnel2Phase2DhGroupNumbers;
    }
    get tunnel2Phase2EncryptionAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase2_encryption_algorithms'));
    }
    set tunnel2Phase2EncryptionAlgorithms(value) {
        this._tunnel2Phase2EncryptionAlgorithms = value;
    }
    resetTunnel2Phase2EncryptionAlgorithms() {
        this._tunnel2Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2EncryptionAlgorithmsInput() {
        return this._tunnel2Phase2EncryptionAlgorithms;
    }
    get tunnel2Phase2IntegrityAlgorithms() {
        return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase2_integrity_algorithms'));
    }
    set tunnel2Phase2IntegrityAlgorithms(value) {
        this._tunnel2Phase2IntegrityAlgorithms = value;
    }
    resetTunnel2Phase2IntegrityAlgorithms() {
        this._tunnel2Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2IntegrityAlgorithmsInput() {
        return this._tunnel2Phase2IntegrityAlgorithms;
    }
    get tunnel2Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
    }
    set tunnel2Phase2LifetimeSeconds(value) {
        this._tunnel2Phase2LifetimeSeconds = value;
    }
    resetTunnel2Phase2LifetimeSeconds() {
        this._tunnel2Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2LifetimeSecondsInput() {
        return this._tunnel2Phase2LifetimeSeconds;
    }
    get tunnel2PresharedKey() {
        return this.getStringAttribute('tunnel2_preshared_key');
    }
    set tunnel2PresharedKey(value) {
        this._tunnel2PresharedKey = value;
    }
    resetTunnel2PresharedKey() {
        this._tunnel2PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2PresharedKeyInput() {
        return this._tunnel2PresharedKey;
    }
    get tunnel2RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
    }
    set tunnel2RekeyFuzzPercentage(value) {
        this._tunnel2RekeyFuzzPercentage = value;
    }
    resetTunnel2RekeyFuzzPercentage() {
        this._tunnel2RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2RekeyFuzzPercentageInput() {
        return this._tunnel2RekeyFuzzPercentage;
    }
    get tunnel2RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
    }
    set tunnel2RekeyMarginTimeSeconds(value) {
        this._tunnel2RekeyMarginTimeSeconds = value;
    }
    resetTunnel2RekeyMarginTimeSeconds() {
        this._tunnel2RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2RekeyMarginTimeSecondsInput() {
        return this._tunnel2RekeyMarginTimeSeconds;
    }
    get tunnel2ReplayWindowSize() {
        return this.getNumberAttribute('tunnel2_replay_window_size');
    }
    set tunnel2ReplayWindowSize(value) {
        this._tunnel2ReplayWindowSize = value;
    }
    resetTunnel2ReplayWindowSize() {
        this._tunnel2ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2ReplayWindowSizeInput() {
        return this._tunnel2ReplayWindowSize;
    }
    get tunnel2StartupAction() {
        return this.getStringAttribute('tunnel2_startup_action');
    }
    set tunnel2StartupAction(value) {
        this._tunnel2StartupAction = value;
    }
    resetTunnel2StartupAction() {
        this._tunnel2StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2StartupActionInput() {
        return this._tunnel2StartupAction;
    }
    // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
    get tunnel2VgwInsideAddress() {
        return this.getStringAttribute('tunnel2_vgw_inside_address');
    }
    get tunnelInsideIpVersion() {
        return this.getStringAttribute('tunnel_inside_ip_version');
    }
    set tunnelInsideIpVersion(value) {
        this._tunnelInsideIpVersion = value;
    }
    resetTunnelInsideIpVersion() {
        this._tunnelInsideIpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelInsideIpVersionInput() {
        return this._tunnelInsideIpVersion;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get vgwTelemetry() {
        return this._vgwTelemetry;
    }
    get vpnGatewayId() {
        return this.getStringAttribute('vpn_gateway_id');
    }
    set vpnGatewayId(value) {
        this._vpnGatewayId = value;
    }
    resetVpnGatewayId() {
        this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpnGatewayIdInput() {
        return this._vpnGatewayId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
            enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
            id: cdktf.stringToTerraform(this._id),
            local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
            local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
            remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
            remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
            static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
            tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
            tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1IkeVersions),
            tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
            tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
            tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel1Phase1DhGroupNumbers),
            tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase1EncryptionAlgorithms),
            tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase1IntegrityAlgorithms),
            tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
            tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel1Phase2DhGroupNumbers),
            tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase2EncryptionAlgorithms),
            tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase2IntegrityAlgorithms),
            tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
            tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
            tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
            tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
            tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
            tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
            tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
            tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
            tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2IkeVersions),
            tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
            tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
            tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel2Phase1DhGroupNumbers),
            tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase1EncryptionAlgorithms),
            tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase1IntegrityAlgorithms),
            tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
            tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel2Phase2DhGroupNumbers),
            tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase2EncryptionAlgorithms),
            tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase2IntegrityAlgorithms),
            tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
            tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
            tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
            tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
            tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
            tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
            tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
            type: cdktf.stringToTerraform(this._type),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            customer_gateway_id: {
                value: cdktf.stringToHclTerraform(this._customerGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_acceleration: {
                value: cdktf.booleanToHclTerraform(this._enableAcceleration),
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
            local_ipv4_network_cidr: {
                value: cdktf.stringToHclTerraform(this._localIpv4NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_ipv6_network_cidr: {
                value: cdktf.stringToHclTerraform(this._localIpv6NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remote_ipv4_network_cidr: {
                value: cdktf.stringToHclTerraform(this._remoteIpv4NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remote_ipv6_network_cidr: {
                value: cdktf.stringToHclTerraform(this._remoteIpv6NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_routes_only: {
                value: cdktf.booleanToHclTerraform(this._staticRoutesOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            transit_gateway_id: {
                value: cdktf.stringToHclTerraform(this._transitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel1_dpd_timeout_action: {
                value: cdktf.stringToHclTerraform(this._tunnel1DpdTimeoutAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel1_dpd_timeout_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel1DpdTimeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel1_ike_versions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel1IkeVersions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel1_inside_cidr: {
                value: cdktf.stringToHclTerraform(this._tunnel1InsideCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel1_inside_ipv6_cidr: {
                value: cdktf.stringToHclTerraform(this._tunnel1InsideIpv6Cidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel1_phase1_dh_group_numbers: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tunnel1Phase1DhGroupNumbers),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            tunnel1_phase1_encryption_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel1Phase1EncryptionAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel1_phase1_integrity_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel1Phase1IntegrityAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel1_phase1_lifetime_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel1Phase1LifetimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel1_phase2_dh_group_numbers: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tunnel1Phase2DhGroupNumbers),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            tunnel1_phase2_encryption_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel1Phase2EncryptionAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel1_phase2_integrity_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel1Phase2IntegrityAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel1_phase2_lifetime_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel1Phase2LifetimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel1_preshared_key: {
                value: cdktf.stringToHclTerraform(this._tunnel1PresharedKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel1_rekey_fuzz_percentage: {
                value: cdktf.numberToHclTerraform(this._tunnel1RekeyFuzzPercentage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel1_rekey_margin_time_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel1RekeyMarginTimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel1_replay_window_size: {
                value: cdktf.numberToHclTerraform(this._tunnel1ReplayWindowSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel1_startup_action: {
                value: cdktf.stringToHclTerraform(this._tunnel1StartupAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel2_dpd_timeout_action: {
                value: cdktf.stringToHclTerraform(this._tunnel2DpdTimeoutAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel2_dpd_timeout_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel2DpdTimeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel2_ike_versions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel2IkeVersions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel2_inside_cidr: {
                value: cdktf.stringToHclTerraform(this._tunnel2InsideCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel2_inside_ipv6_cidr: {
                value: cdktf.stringToHclTerraform(this._tunnel2InsideIpv6Cidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel2_phase1_dh_group_numbers: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tunnel2Phase1DhGroupNumbers),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            tunnel2_phase1_encryption_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel2Phase1EncryptionAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel2_phase1_integrity_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel2Phase1IntegrityAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel2_phase1_lifetime_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel2Phase1LifetimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel2_phase2_dh_group_numbers: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tunnel2Phase2DhGroupNumbers),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            tunnel2_phase2_encryption_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel2Phase2EncryptionAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel2_phase2_integrity_algorithms: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnel2Phase2IntegrityAlgorithms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tunnel2_phase2_lifetime_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel2Phase2LifetimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel2_preshared_key: {
                value: cdktf.stringToHclTerraform(this._tunnel2PresharedKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel2_rekey_fuzz_percentage: {
                value: cdktf.numberToHclTerraform(this._tunnel2RekeyFuzzPercentage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel2_rekey_margin_time_seconds: {
                value: cdktf.numberToHclTerraform(this._tunnel2RekeyMarginTimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel2_replay_window_size: {
                value: cdktf.numberToHclTerraform(this._tunnel2ReplayWindowSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel2_startup_action: {
                value: cdktf.stringToHclTerraform(this._tunnel2StartupAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel_inside_ip_version: {
                value: cdktf.stringToHclTerraform(this._tunnelInsideIpVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpn_gateway_id: {
                value: cdktf.stringToHclTerraform(this._vpnGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.VpnConnection = VpnConnection;
_e = JSII_RTTI_SYMBOL_1;
VpnConnection[_e] = { fqn: "@cdktf/aws-cdk.vpnConnection.VpnConnection", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
VpnConnection.tfResourceType = "aws_vpn_connection";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Zwbi1jb25uZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBb04vQixTQUFnQiw4QkFBOEIsQ0FBQyxNQUE0QjtJQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPLEVBQ04sQ0FBQTtBQUNILENBQUM7QUFQRCx3RUFPQztBQUdELFNBQWdCLGlDQUFpQyxDQUFDLE1BQTRCO0lBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELDhFQVFDO0FBRUQsTUFBYSxrQ0FBbUMsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUd6RTs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFFLHNCQUErQjtRQUN2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KSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgVnBuQ29ubmVjdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiNjdXN0b21lcl9nYXRld2F5X2lkIFZwbkNvbm5lY3Rpb24jY3VzdG9tZXJfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tZXJHYXRld2F5SWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jZW5hYmxlX2FjY2VsZXJhdGlvbiBWcG5Db25uZWN0aW9uI2VuYWJsZV9hY2NlbGVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUFjY2VsZXJhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jaWQgVnBuQ29ubmVjdGlvbiNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jbG9jYWxfaXB2NF9uZXR3b3JrX2NpZHIgVnBuQ29ubmVjdGlvbiNsb2NhbF9pcHY0X25ldHdvcmtfY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYWxJcHY0TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI2xvY2FsX2lwdjZfbmV0d29ya19jaWRyIFZwbkNvbm5lY3Rpb24jbG9jYWxfaXB2Nl9uZXR3b3JrX2NpZHJ9XG4gICovXG4gIHJlYWRvbmx5IGxvY2FsSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiNyZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHIgVnBuQ29ubmVjdGlvbiNyZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHJ9XG4gICovXG4gIHJlYWRvbmx5IHJlbW90ZUlwdjROZXR3b3JrQ2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jcmVtb3RlX2lwdjZfbmV0d29ya19jaWRyIFZwbkNvbm5lY3Rpb24jcmVtb3RlX2lwdjZfbmV0d29ya19jaWRyfVxuICAqL1xuICByZWFkb25seSByZW1vdGVJcHY2TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3N0YXRpY19yb3V0ZXNfb25seSBWcG5Db25uZWN0aW9uI3N0YXRpY19yb3V0ZXNfb25seX1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGljUm91dGVzT25seT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdGFncyBWcG5Db25uZWN0aW9uI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0YWdzX2FsbCBWcG5Db25uZWN0aW9uI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdHJhbnNpdF9nYXRld2F5X2lkIFZwbkNvbm5lY3Rpb24jdHJhbnNpdF9nYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSB0cmFuc2l0R2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX2RwZF90aW1lb3V0X2FjdGlvbiBWcG5Db25uZWN0aW9uI3R1bm5lbDFfZHBkX3RpbWVvdXRfYWN0aW9ufVxuICAqL1xuICByZWFkb25seSB0dW5uZWwxRHBkVGltZW91dEFjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdHVubmVsMV9kcGRfdGltZW91dF9zZWNvbmRzIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9kcGRfdGltZW91dF9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwxRHBkVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfaWtlX3ZlcnNpb25zIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9pa2VfdmVyc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFJa2VWZXJzaW9ucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX2luc2lkZV9jaWRyIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9pbnNpZGVfY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMUluc2lkZUNpZHI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfaW5zaWRlX2lwdjZfY2lkciBWcG5Db25uZWN0aW9uI3R1bm5lbDFfaW5zaWRlX2lwdjZfY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMUluc2lkZUlwdjZDaWRyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9waGFzZTFfZGhfZ3JvdXBfbnVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzPzogbnVtYmVyW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcyBWcG5Db25uZWN0aW9uI3R1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcGhhc2UxX2ludGVncml0eV9hbGdvcml0aG1zIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHMgVnBuQ29ubmVjdGlvbiN0dW5uZWwxX3BoYXNlMV9saWZldGltZV9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9waGFzZTJfZGhfZ3JvdXBfbnVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzPzogbnVtYmVyW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcyBWcG5Db25uZWN0aW9uI3R1bm5lbDFfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHMgVnBuQ29ubmVjdGlvbiN0dW5uZWwxX3BoYXNlMl9saWZldGltZV9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX3ByZXNoYXJlZF9rZXkgVnBuQ29ubmVjdGlvbiN0dW5uZWwxX3ByZXNoYXJlZF9rZXl9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFQcmVzaGFyZWRLZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDFfcmVrZXlfZnV6el9wZXJjZW50YWdlIFZwbkNvbm5lY3Rpb24jdHVubmVsMV9yZWtleV9mdXp6X3BlcmNlbnRhZ2V9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHMgVnBuQ29ubmVjdGlvbiN0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwxX3JlcGxheV93aW5kb3dfc2l6ZSBWcG5Db25uZWN0aW9uI3R1bm5lbDFfcmVwbGF5X3dpbmRvd19zaXplfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwxUmVwbGF5V2luZG93U2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdHVubmVsMV9zdGFydHVwX2FjdGlvbiBWcG5Db25uZWN0aW9uI3R1bm5lbDFfc3RhcnR1cF9hY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDFTdGFydHVwQWN0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbiBWcG5Db25uZWN0aW9uI3R1bm5lbDJfZHBkX3RpbWVvdXRfYWN0aW9ufVxuICAqL1xuICByZWFkb25seSB0dW5uZWwyRHBkVGltZW91dEFjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwyRHBkVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfaWtlX3ZlcnNpb25zIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9pa2VfdmVyc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJJa2VWZXJzaW9ucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX2luc2lkZV9jaWRyIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9pbnNpZGVfY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMkluc2lkZUNpZHI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfaW5zaWRlX2lwdjZfY2lkciBWcG5Db25uZWN0aW9uI3R1bm5lbDJfaW5zaWRlX2lwdjZfY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMkluc2lkZUlwdjZDaWRyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9waGFzZTFfZGhfZ3JvdXBfbnVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzPzogbnVtYmVyW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcyBWcG5Db25uZWN0aW9uI3R1bm5lbDJfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcGhhc2UxX2ludGVncml0eV9hbGdvcml0aG1zIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHMgVnBuQ29ubmVjdGlvbiN0dW5uZWwyX3BoYXNlMV9saWZldGltZV9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9waGFzZTJfZGhfZ3JvdXBfbnVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzPzogbnVtYmVyW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcyBWcG5Db25uZWN0aW9uI3R1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtc31cbiAgKi9cbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHMgVnBuQ29ubmVjdGlvbiN0dW5uZWwyX3BoYXNlMl9saWZldGltZV9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX3ByZXNoYXJlZF9rZXkgVnBuQ29ubmVjdGlvbiN0dW5uZWwyX3ByZXNoYXJlZF9rZXl9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJQcmVzaGFyZWRLZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Zwbl9jb25uZWN0aW9uI3R1bm5lbDJfcmVrZXlfZnV6el9wZXJjZW50YWdlIFZwbkNvbm5lY3Rpb24jdHVubmVsMl9yZWtleV9mdXp6X3BlcmNlbnRhZ2V9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHMgVnBuQ29ubmVjdGlvbiN0dW5uZWwyX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWwyX3JlcGxheV93aW5kb3dfc2l6ZSBWcG5Db25uZWN0aW9uI3R1bm5lbDJfcmVwbGF5X3dpbmRvd19zaXplfVxuICAqL1xuICByZWFkb25seSB0dW5uZWwyUmVwbGF5V2luZG93U2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdHVubmVsMl9zdGFydHVwX2FjdGlvbiBWcG5Db25uZWN0aW9uI3R1bm5lbDJfc3RhcnR1cF9hY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbDJTdGFydHVwQWN0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiN0dW5uZWxfaW5zaWRlX2lwX3ZlcnNpb24gVnBuQ29ubmVjdGlvbiN0dW5uZWxfaW5zaWRlX2lwX3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHR1bm5lbEluc2lkZUlwVmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdHlwZSBWcG5Db25uZWN0aW9uI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jdnBuX2dhdGV3YXlfaWQgVnBuQ29ubmVjdGlvbiN2cG5fZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBuR2F0ZXdheUlkPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBWcG5Db25uZWN0aW9uUm91dGVzIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZwbkNvbm5lY3Rpb25Sb3V0ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBWcG5Db25uZWN0aW9uUm91dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZwbkNvbm5lY3Rpb25Sb3V0ZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBWcG5Db25uZWN0aW9uUm91dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgfTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgY2xhc3MgVnBuQ29ubmVjdGlvblJvdXRlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBWcG5Db25uZWN0aW9uUm91dGVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBWcG5Db25uZWN0aW9uUm91dGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fY2lkcl9ibG9jayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ2lkckJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzdGluYXRpb25fY2lkcl9ibG9jaycpO1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cblxuICAvLyBzdGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGUnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVnBuQ29ubmVjdGlvblJvdXRlc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogVnBuQ29ubmVjdGlvblJvdXRlc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBWcG5Db25uZWN0aW9uUm91dGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgVnBuQ29ubmVjdGlvblZnd1RlbGVtZXRyeSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2cG5Db25uZWN0aW9uVmd3VGVsZW1ldHJ5VG9UZXJyYWZvcm0oc3RydWN0PzogVnBuQ29ubmVjdGlvblZnd1RlbGVtZXRyeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2cG5Db25uZWN0aW9uVmd3VGVsZW1ldHJ5VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogVnBuQ29ubmVjdGlvblZnd1RlbGVtZXRyeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIFZwbkNvbm5lY3Rpb25WZ3dUZWxlbWV0cnlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogVnBuQ29ubmVjdGlvblZnd1RlbGVtZXRyeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogVnBuQ29ubmVjdGlvblZnd1RlbGVtZXRyeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY2VwdGVkX3JvdXRlX2NvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXB0ZWRSb3V0ZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWNjZXB0ZWRfcm91dGVfY291bnQnKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cblxuICAvLyBsYXN0X3N0YXR1c19jaGFuZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0U3RhdHVzQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9zdGF0dXNfY2hhbmdlJyk7XG4gIH1cblxuICAvLyBvdXRzaWRlX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdXRzaWRlSXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3V0c2lkZV9pcF9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHN0YXR1c19tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19tZXNzYWdlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZwbkNvbm5lY3Rpb25WZ3dUZWxlbWV0cnlMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFZwbkNvbm5lY3Rpb25WZ3dUZWxlbWV0cnlPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgVnBuQ29ubmVjdGlvblZnd1RlbGVtZXRyeU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy92cG5fY29ubmVjdGlvbiBhd3NfdnBuX2Nvbm5lY3Rpb259XG4qL1xuZXhwb3J0IGNsYXNzIFZwbkNvbm5lY3Rpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3Zwbl9jb25uZWN0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFZwbkNvbm5lY3Rpb24gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgVnBuQ29ubmVjdGlvbiB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgVnBuQ29ubmVjdGlvbiB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFZwbkNvbm5lY3Rpb24gdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3Zwbl9jb25uZWN0aW9uXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvdnBuX2Nvbm5lY3Rpb24gYXdzX3Zwbl9jb25uZWN0aW9ufSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBWcG5Db25uZWN0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFZwbkNvbm5lY3Rpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cG5fY29ubmVjdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkID0gY29uZmlnLmN1c3RvbWVyR2F0ZXdheUlkO1xuICAgIHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvbiA9IGNvbmZpZy5lbmFibGVBY2NlbGVyYXRpb247XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHIgPSBjb25maWcubG9jYWxJcHY0TmV0d29ya0NpZHI7XG4gICAgdGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHIgPSBjb25maWcubG9jYWxJcHY2TmV0d29ya0NpZHI7XG4gICAgdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyID0gY29uZmlnLnJlbW90ZUlwdjROZXR3b3JrQ2lkcjtcbiAgICB0aGlzLl9yZW1vdGVJcHY2TmV0d29ya0NpZHIgPSBjb25maWcucmVtb3RlSXB2Nk5ldHdvcmtDaWRyO1xuICAgIHRoaXMuX3N0YXRpY1JvdXRlc09ubHkgPSBjb25maWcuc3RhdGljUm91dGVzT25seTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQgPSBjb25maWcudHJhbnNpdEdhdGV3YXlJZDtcbiAgICB0aGlzLl90dW5uZWwxRHBkVGltZW91dEFjdGlvbiA9IGNvbmZpZy50dW5uZWwxRHBkVGltZW91dEFjdGlvbjtcbiAgICB0aGlzLl90dW5uZWwxRHBkVGltZW91dFNlY29uZHMgPSBjb25maWcudHVubmVsMURwZFRpbWVvdXRTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDFJa2VWZXJzaW9ucyA9IGNvbmZpZy50dW5uZWwxSWtlVmVyc2lvbnM7XG4gICAgdGhpcy5fdHVubmVsMUluc2lkZUNpZHIgPSBjb25maWcudHVubmVsMUluc2lkZUNpZHI7XG4gICAgdGhpcy5fdHVubmVsMUluc2lkZUlwdjZDaWRyID0gY29uZmlnLnR1bm5lbDFJbnNpZGVJcHY2Q2lkcjtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMgPSBjb25maWcudHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycyA9IGNvbmZpZy50dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM7XG4gICAgdGhpcy5fdHVubmVsMVByZXNoYXJlZEtleSA9IGNvbmZpZy50dW5uZWwxUHJlc2hhcmVkS2V5O1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlID0gY29uZmlnLnR1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlO1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDFSZXBsYXlXaW5kb3dTaXplID0gY29uZmlnLnR1bm5lbDFSZXBsYXlXaW5kb3dTaXplO1xuICAgIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uID0gY29uZmlnLnR1bm5lbDFTdGFydHVwQWN0aW9uO1xuICAgIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0QWN0aW9uID0gY29uZmlnLnR1bm5lbDJEcGRUaW1lb3V0QWN0aW9uO1xuICAgIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcyA9IGNvbmZpZy50dW5uZWwyRHBkVGltZW91dFNlY29uZHM7XG4gICAgdGhpcy5fdHVubmVsMklrZVZlcnNpb25zID0gY29uZmlnLnR1bm5lbDJJa2VWZXJzaW9ucztcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlQ2lkciA9IGNvbmZpZy50dW5uZWwySW5zaWRlQ2lkcjtcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHIgPSBjb25maWcudHVubmVsMkluc2lkZUlwdjZDaWRyO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycyA9IGNvbmZpZy50dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzID0gY29uZmlnLnR1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHMgPSBjb25maWcudHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwyUHJlc2hhcmVkS2V5ID0gY29uZmlnLnR1bm5lbDJQcmVzaGFyZWRLZXk7XG4gICAgdGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UgPSBjb25maWcudHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2U7XG4gICAgdGhpcy5fdHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHMgPSBjb25maWcudHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHM7XG4gICAgdGhpcy5fdHVubmVsMlJlcGxheVdpbmRvd1NpemUgPSBjb25maWcudHVubmVsMlJlcGxheVdpbmRvd1NpemU7XG4gICAgdGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24gPSBjb25maWcudHVubmVsMlN0YXJ0dXBBY3Rpb247XG4gICAgdGhpcy5fdHVubmVsSW5zaWRlSXBWZXJzaW9uID0gY29uZmlnLnR1bm5lbEluc2lkZUlwVmVyc2lvbjtcbiAgICB0aGlzLl90eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5fdnBuR2F0ZXdheUlkID0gY29uZmlnLnZwbkdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjdXN0b21lcl9nYXRld2F5X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21lckdhdGV3YXlDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfZ2F0ZXdheV9jb25maWd1cmF0aW9uJyk7XG4gIH1cblxuICAvLyBjdXN0b21lcl9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2N1c3RvbWVyR2F0ZXdheUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21lckdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbWVyR2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21lckdhdGV3YXlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21lckdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21lckdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIGVuYWJsZV9hY2NlbGVyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVBY2NlbGVyYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUFjY2VsZXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfYWNjZWxlcmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVBY2NlbGVyYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUFjY2VsZXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbmFibGVBY2NlbGVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUFjY2VsZXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVBY2NlbGVyYXRpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBsb2NhbF9pcHY0X25ldHdvcmtfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2FsSXB2NE5ldHdvcmtDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhbElwdjROZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX2lwdjRfbmV0d29ya19jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhbElwdjROZXR3b3JrQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhbElwdjROZXR3b3JrQ2lkcigpIHtcbiAgICB0aGlzLl9sb2NhbElwdjROZXR3b3JrQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYWxJcHY0TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHI7XG4gIH1cblxuICAvLyBsb2NhbF9pcHY2X25ldHdvcmtfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2FsSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhbElwdjZOZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX2lwdjZfbmV0d29ya19jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhbElwdjZOZXR3b3JrQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhbElwdjZOZXR3b3JrQ2lkcigpIHtcbiAgICB0aGlzLl9sb2NhbElwdjZOZXR3b3JrQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYWxJcHY2TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHI7XG4gIH1cblxuICAvLyByZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZW1vdGVJcHY0TmV0d29ya0NpZHI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlbW90ZUlwdjROZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlbW90ZV9pcHY0X25ldHdvcmtfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVtb3RlSXB2NE5ldHdvcmtDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdGVJcHY0TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZW1vdGVJcHY0TmV0d29ya0NpZHIoKSB7XG4gICAgdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZW1vdGVJcHY0TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyO1xuICB9XG5cbiAgLy8gcmVtb3RlX2lwdjZfbmV0d29ya19jaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVtb3RlSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZW1vdGVJcHY2TmV0d29ya0NpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZW1vdGVfaXB2Nl9uZXR3b3JrX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlbW90ZUlwdjZOZXR3b3JrQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtb3RlSXB2Nk5ldHdvcmtDaWRyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVtb3RlSXB2Nk5ldHdvcmtDaWRyKCkge1xuICAgIHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVtb3RlSXB2Nk5ldHdvcmtDaWRySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkcjtcbiAgfVxuXG4gIC8vIHJvdXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb3V0ZXMgPSBuZXcgVnBuQ29ubmVjdGlvblJvdXRlc0xpc3QodGhpcywgXCJyb3V0ZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXM7XG4gIH1cblxuICAvLyBzdGF0aWNfcm91dGVzX29ubHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0aWNSb3V0ZXNPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdGF0aWNSb3V0ZXNPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N0YXRpY19yb3V0ZXNfb25seScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGljUm91dGVzT25seSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RhdGljUm91dGVzT25seSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRpY1JvdXRlc09ubHkoKSB7XG4gICAgdGhpcy5fc3RhdGljUm91dGVzT25seSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGljUm91dGVzT25seUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfYXR0YWNobWVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2F0dGFjaG1lbnRfaWQnKTtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90cmFuc2l0R2F0ZXdheUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0R2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJhbnNpdEdhdGV3YXlJZCgpIHtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQ7XG4gIH1cblxuICAvLyB0dW5uZWwxX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gdHVubmVsMV9iZ3BfYXNuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHVubmVsMUJncEFzbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfYmdwX2FzbicpO1xuICB9XG5cbiAgLy8gdHVubmVsMV9iZ3BfaG9sZHRpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQmdwSG9sZHRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX2JncF9ob2xkdGltZScpO1xuICB9XG5cbiAgLy8gdHVubmVsMV9jZ3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQ2d3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfY2d3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwxX2RwZF90aW1lb3V0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxRHBkVGltZW91dEFjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMURwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwxX2RwZF90aW1lb3V0X2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMURwZFRpbWVvdXRBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0QWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMURwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFEcGRUaW1lb3V0QWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0QWN0aW9uO1xuICB9XG5cbiAgLy8gdHVubmVsMV9kcGRfdGltZW91dF9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMV9kcGRfdGltZW91dF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxRHBkVGltZW91dFNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxRHBkVGltZW91dFNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxRHBkVGltZW91dFNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwxX2lrZV92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxSWtlVmVyc2lvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMUlrZVZlcnNpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwxX2lrZV92ZXJzaW9ucycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFJa2VWZXJzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxSWtlVmVyc2lvbnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMUlrZVZlcnNpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxSWtlVmVyc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMUlrZVZlcnNpb25zO1xuICB9XG5cbiAgLy8gdHVubmVsMV9pbnNpZGVfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFJbnNpZGVDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfaW5zaWRlX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFJbnNpZGVDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwxSW5zaWRlQ2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFJbnNpZGVDaWRyKCkge1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlQ2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxSW5zaWRlQ2lkcjtcbiAgfVxuXG4gIC8vIHR1bm5lbDFfaW5zaWRlX2lwdjZfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFJbnNpZGVJcHY2Q2lkcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMUluc2lkZUlwdjZDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9pbnNpZGVfaXB2Nl9jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxSW5zaWRlSXB2NkNpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVJcHY2Q2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFJbnNpZGVJcHY2Q2lkcigpIHtcbiAgICB0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFJbnNpZGVJcHY2Q2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHI7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMoKSB7XG4gICAgcmV0dXJuIGNka3RmLlRva2VuLmFzTnVtYmVyTGlzdChjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXROdW1iZXJMaXN0QXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzJykpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzO1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTFfZW5jcnlwdGlvbl9hbGdvcml0aG1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UxX2ludGVncml0eV9hbGdvcml0aG1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMV9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgcmV0dXJuIGNka3RmLlRva2VuLmFzTnVtYmVyTGlzdChjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXROdW1iZXJMaXN0QXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzJykpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzO1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTJfZW5jcnlwdGlvbl9hbGdvcml0aG1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMl9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMl9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3ByZXNoYXJlZF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUHJlc2hhcmVkS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUHJlc2hhcmVkS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9wcmVzaGFyZWRfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUHJlc2hhcmVkS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVByZXNoYXJlZEtleSgpIHtcbiAgICB0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUHJlc2hhcmVkS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQcmVzaGFyZWRLZXk7XG4gIH1cblxuICAvLyB0dW5uZWwxX3Jla2V5X2Z1enpfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3Jla2V5X2Z1enpfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8gdHVubmVsMV9yZWtleV9tYXJnaW5fdGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDFfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzO1xuICB9XG5cbiAgLy8gdHVubmVsMV9yZXBsYXlfd2luZG93X3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVJlcGxheVdpbmRvd1NpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMV9yZXBsYXlfd2luZG93X3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHRoaXMuX3R1bm5lbDFSZXBsYXlXaW5kb3dTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUmVwbGF5V2luZG93U2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZTtcbiAgfVxuXG4gIC8vIHR1bm5lbDFfc3RhcnR1cF9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVN0YXJ0dXBBY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFTdGFydHVwQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9zdGFydHVwX2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVN0YXJ0dXBBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVN0YXJ0dXBBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMVN0YXJ0dXBBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFTdGFydHVwQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uO1xuICB9XG5cbiAgLy8gdHVubmVsMV92Z3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxVmd3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfdmd3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gdHVubmVsMl9iZ3BfYXNuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHVubmVsMkJncEFzbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfYmdwX2FzbicpO1xuICB9XG5cbiAgLy8gdHVubmVsMl9iZ3BfaG9sZHRpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQmdwSG9sZHRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX2JncF9ob2xkdGltZScpO1xuICB9XG5cbiAgLy8gdHVubmVsMl9jZ3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQ2d3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfY2d3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyRHBkVGltZW91dEFjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0QWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMkRwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJEcGRUaW1lb3V0QWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0QWN0aW9uO1xuICB9XG5cbiAgLy8gdHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyRHBkVGltZW91dFNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJEcGRUaW1lb3V0U2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwyX2lrZV92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwySWtlVmVyc2lvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMklrZVZlcnNpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwyX2lrZV92ZXJzaW9ucycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJJa2VWZXJzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwySWtlVmVyc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwySWtlVmVyc2lvbnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMklrZVZlcnNpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwySWtlVmVyc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMklrZVZlcnNpb25zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9pbnNpZGVfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJJbnNpZGVDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwySW5zaWRlQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfaW5zaWRlX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJJbnNpZGVDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlQ2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJJbnNpZGVDaWRyKCkge1xuICAgIHRoaXMuX3R1bm5lbDJJbnNpZGVDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwySW5zaWRlQ2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwySW5zaWRlQ2lkcjtcbiAgfVxuXG4gIC8vIHR1bm5lbDJfaW5zaWRlX2lwdjZfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJJbnNpZGVJcHY2Q2lkcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMkluc2lkZUlwdjZDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9pbnNpZGVfaXB2Nl9jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwySW5zaWRlSXB2NkNpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDJJbnNpZGVJcHY2Q2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJJbnNpZGVJcHY2Q2lkcigpIHtcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJJbnNpZGVJcHY2Q2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHI7XG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMoKSB7XG4gICAgcmV0dXJuIGNka3RmLlRva2VuLmFzTnVtYmVyTGlzdChjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXROdW1iZXJMaXN0QXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzJykpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTFfZW5jcnlwdGlvbl9hbGdvcml0aG1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UxX2ludGVncml0eV9hbGdvcml0aG1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMV9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMV9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgcmV0dXJuIGNka3RmLlRva2VuLmFzTnVtYmVyTGlzdChjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXROdW1iZXJMaXN0QXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzJykpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTJfZW5jcnlwdGlvbl9hbGdvcml0aG1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMl9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMl9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwyX3ByZXNoYXJlZF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUHJlc2hhcmVkS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUHJlc2hhcmVkS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9wcmVzaGFyZWRfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUHJlc2hhcmVkS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwyUHJlc2hhcmVkS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlByZXNoYXJlZEtleSgpIHtcbiAgICB0aGlzLl90dW5uZWwyUHJlc2hhcmVkS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUHJlc2hhcmVkS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJQcmVzaGFyZWRLZXk7XG4gIH1cblxuICAvLyB0dW5uZWwyX3Jla2V5X2Z1enpfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX3Jla2V5X2Z1enpfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8gdHVubmVsMl9yZWtleV9tYXJnaW5fdGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDJfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzO1xuICB9XG5cbiAgLy8gdHVubmVsMl9yZXBsYXlfd2luZG93X3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlJlcGxheVdpbmRvd1NpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9yZXBsYXlfd2luZG93X3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJSZXBsYXlXaW5kb3dTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwyUmVwbGF5V2luZG93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHRoaXMuX3R1bm5lbDJSZXBsYXlXaW5kb3dTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUmVwbGF5V2luZG93U2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUmVwbGF5V2luZG93U2l6ZTtcbiAgfVxuXG4gIC8vIHR1bm5lbDJfc3RhcnR1cF9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlN0YXJ0dXBBY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJTdGFydHVwQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9zdGFydHVwX2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlN0YXJ0dXBBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDJTdGFydHVwQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlN0YXJ0dXBBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJTdGFydHVwQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJTdGFydHVwQWN0aW9uO1xuICB9XG5cbiAgLy8gdHVubmVsMl92Z3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyVmd3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfdmd3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWxfaW5zaWRlX2lwX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWxJbnNpZGVJcFZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbEluc2lkZUlwVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbF9pbnNpZGVfaXBfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsSW5zaWRlSXBWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWxJbnNpZGVJcFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWxJbnNpZGVJcFZlcnNpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsSW5zaWRlSXBWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWxJbnNpZGVJcFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsSW5zaWRlSXBWZXJzaW9uO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyB2Z3dfdGVsZW1ldHJ5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Znd1RlbGVtZXRyeSA9IG5ldyBWcG5Db25uZWN0aW9uVmd3VGVsZW1ldHJ5TGlzdCh0aGlzLCBcInZnd190ZWxlbWV0cnlcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdmd3VGVsZW1ldHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl92Z3dUZWxlbWV0cnk7XG4gIH1cblxuICAvLyB2cG5fZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cG5HYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwbkdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Zwbl9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cG5HYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwbkdhdGV3YXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwbkdhdGV3YXlJZCgpIHtcbiAgICB0aGlzLl92cG5HYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwbkdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cG5HYXRld2F5SWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1c3RvbWVyX2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkKSxcbiAgICAgIGVuYWJsZV9hY2NlbGVyYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVBY2NlbGVyYXRpb24pLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGxvY2FsX2lwdjRfbmV0d29ya19jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sb2NhbElwdjROZXR3b3JrQ2lkciksXG4gICAgICBsb2NhbF9pcHY2X25ldHdvcmtfY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHIpLFxuICAgICAgcmVtb3RlX2lwdjRfbmV0d29ya19jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZW1vdGVJcHY0TmV0d29ya0NpZHIpLFxuICAgICAgcmVtb3RlX2lwdjZfbmV0d29ya19jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZW1vdGVJcHY2TmV0d29ya0NpZHIpLFxuICAgICAgc3RhdGljX3JvdXRlc19vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3RhdGljUm91dGVzT25seSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHRyYW5zaXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHJhbnNpdEdhdGV3YXlJZCksXG4gICAgICB0dW5uZWwxX2RwZF90aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24pLFxuICAgICAgdHVubmVsMV9kcGRfdGltZW91dF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxRHBkVGltZW91dFNlY29uZHMpLFxuICAgICAgdHVubmVsMV9pa2VfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnMpLFxuICAgICAgdHVubmVsMV9pbnNpZGVfY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMUluc2lkZUNpZHIpLFxuICAgICAgdHVubmVsMV9pbnNpZGVfaXB2Nl9jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHIpLFxuICAgICAgdHVubmVsMV9waGFzZTFfZGhfZ3JvdXBfbnVtYmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycyksXG4gICAgICB0dW5uZWwxX3BoYXNlMV9lbmNyeXB0aW9uX2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMV9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwxX3BoYXNlMV9saWZldGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzKSxcbiAgICAgIHR1bm5lbDFfcGhhc2UyX2RoX2dyb3VwX251bWJlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMpLFxuICAgICAgdHVubmVsMV9waGFzZTJfZW5jcnlwdGlvbl9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDFfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMV9waGFzZTJfbGlmZXRpbWVfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcyksXG4gICAgICB0dW5uZWwxX3ByZXNoYXJlZF9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFQcmVzaGFyZWRLZXkpLFxuICAgICAgdHVubmVsMV9yZWtleV9mdXp6X3BlcmNlbnRhZ2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlKSxcbiAgICAgIHR1bm5lbDFfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMpLFxuICAgICAgdHVubmVsMV9yZXBsYXlfd2luZG93X3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFSZXBsYXlXaW5kb3dTaXplKSxcbiAgICAgIHR1bm5lbDFfc3RhcnR1cF9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uKSxcbiAgICAgIHR1bm5lbDJfZHBkX3RpbWVvdXRfYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyRHBkVGltZW91dEFjdGlvbiksXG4gICAgICB0dW5uZWwyX2RwZF90aW1lb3V0X3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcyksXG4gICAgICB0dW5uZWwyX2lrZV92ZXJzaW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyksXG4gICAgICB0dW5uZWwyX2luc2lkZV9jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwySW5zaWRlQ2lkciksXG4gICAgICB0dW5uZWwyX2luc2lkZV9pcHY2X2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJJbnNpZGVJcHY2Q2lkciksXG4gICAgICB0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwyX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMpLFxuICAgICAgdHVubmVsMl9waGFzZTJfZGhfZ3JvdXBfbnVtYmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycyksXG4gICAgICB0dW5uZWwyX3BoYXNlMl9lbmNyeXB0aW9uX2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMl9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwyX3BoYXNlMl9saWZldGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKSxcbiAgICAgIHR1bm5lbDJfcHJlc2hhcmVkX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSksXG4gICAgICB0dW5uZWwyX3Jla2V5X2Z1enpfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UpLFxuICAgICAgdHVubmVsMl9yZWtleV9tYXJnaW5fdGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyksXG4gICAgICB0dW5uZWwyX3JlcGxheV93aW5kb3dfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlJlcGxheVdpbmRvd1NpemUpLFxuICAgICAgdHVubmVsMl9zdGFydHVwX2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24pLFxuICAgICAgdHVubmVsX2luc2lkZV9pcF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWxJbnNpZGVJcFZlcnNpb24pLFxuICAgICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgICB2cG5fZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdnBuR2F0ZXdheUlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGN1c3RvbWVyX2dhdGV3YXlfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZW5hYmxlX2FjY2VsZXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsb2NhbF9pcHY0X25ldHdvcmtfY2lkcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsb2NhbF9pcHY2X25ldHdvcmtfY2lkcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICByZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3JlbW90ZUlwdjROZXR3b3JrQ2lkciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlbW90ZV9pcHY2X25ldHdvcmtfY2lkcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVtb3RlSXB2Nk5ldHdvcmtDaWRyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3RhdGljX3JvdXRlc19vbmx5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc3RhdGljUm91dGVzT25seSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0X2dhdGV3YXlfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3RyYW5zaXRHYXRld2F5SWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX2RwZF90aW1lb3V0X2FjdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX2RwZF90aW1lb3V0X3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDFfaWtlX3ZlcnNpb25zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMUlrZVZlcnNpb25zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDFfaW5zaWRlX2NpZHI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdHVubmVsMV9pbnNpZGVfaXB2Nl9jaWRyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDFfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDFfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3BoYXNlMl9pbnRlZ3JpdHlfYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDFfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3ByZXNoYXJlZF9rZXk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFQcmVzaGFyZWRLZXkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3Jla2V5X2Z1enpfcGVyY2VudGFnZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgdHVubmVsMV9yZXBsYXlfd2luZG93X3NpemU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFSZXBsYXlXaW5kb3dTaXplKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgdHVubmVsMV9zdGFydHVwX2FjdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdHVubmVsMVN0YXJ0dXBBY3Rpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX2RwZF90aW1lb3V0X3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDJfaWtlX3ZlcnNpb25zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMklrZVZlcnNpb25zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDJfaW5zaWRlX2NpZHI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJJbnNpZGVDaWRyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdHVubmVsMl9pbnNpZGVfaXB2Nl9jaWRyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDJfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDJfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3BoYXNlMl9pbnRlZ3JpdHlfYWxnb3JpdGhtczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3R1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHR1bm5lbDJfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3ByZXNoYXJlZF9rZXk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJQcmVzaGFyZWRLZXkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3Jla2V5X2Z1enpfcGVyY2VudGFnZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWwyX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgdHVubmVsMl9yZXBsYXlfd2luZG93X3NpemU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJSZXBsYXlXaW5kb3dTaXplKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgdHVubmVsMl9zdGFydHVwX2FjdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0dW5uZWxfaW5zaWRlX2lwX3ZlcnNpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R1bm5lbEluc2lkZUlwVmVyc2lvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB2cG5fZ2F0ZXdheV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdnBuR2F0ZXdheUlkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=