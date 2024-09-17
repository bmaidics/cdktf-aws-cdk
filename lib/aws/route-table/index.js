"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteTable = exports.RouteTableTimeoutsOutputReference = exports.routeTableTimeoutsToHclTerraform = exports.routeTableTimeoutsToTerraform = exports.RouteTableRouteList = exports.RouteTableRouteOutputReference = exports.routeTableRouteToHclTerraform = exports.routeTableRouteToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function routeTableRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        carrier_gateway_id: struct.carrierGatewayId === undefined ? null : cdktf.stringToTerraform(struct.carrierGatewayId),
        cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
        destination_prefix_list_id: struct.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct.destinationPrefixListId),
        egress_only_gateway_id: struct.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct.egressOnlyGatewayId),
        gateway_id: struct.gatewayId === undefined ? null : cdktf.stringToTerraform(struct.gatewayId),
        instance_id: struct.instanceId === undefined ? null : cdktf.stringToTerraform(struct.instanceId),
        ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
        local_gateway_id: struct.localGatewayId === undefined ? null : cdktf.stringToTerraform(struct.localGatewayId),
        nat_gateway_id: struct.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct.natGatewayId),
        network_interface_id: struct.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct.networkInterfaceId),
        transit_gateway_id: struct.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct.transitGatewayId),
        vpc_endpoint_id: struct.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct.vpcEndpointId),
        vpc_peering_connection_id: struct.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct.vpcPeeringConnectionId),
    };
}
exports.routeTableRouteToTerraform = routeTableRouteToTerraform;
function routeTableRouteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        carrier_gateway_id: {
            value: struct.carrierGatewayId === undefined ? null : cdktf.stringToHclTerraform(struct.carrierGatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cidr_block: {
            value: struct.cidrBlock === undefined ? null : cdktf.stringToHclTerraform(struct.cidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_prefix_list_id: {
            value: struct.destinationPrefixListId === undefined ? null : cdktf.stringToHclTerraform(struct.destinationPrefixListId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        egress_only_gateway_id: {
            value: struct.egressOnlyGatewayId === undefined ? null : cdktf.stringToHclTerraform(struct.egressOnlyGatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gateway_id: {
            value: struct.gatewayId === undefined ? null : cdktf.stringToHclTerraform(struct.gatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_id: {
            value: struct.instanceId === undefined ? null : cdktf.stringToHclTerraform(struct.instanceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_cidr_block: {
            value: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToHclTerraform(struct.ipv6CidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_gateway_id: {
            value: struct.localGatewayId === undefined ? null : cdktf.stringToHclTerraform(struct.localGatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nat_gateway_id: {
            value: struct.natGatewayId === undefined ? null : cdktf.stringToHclTerraform(struct.natGatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_interface_id: {
            value: struct.networkInterfaceId === undefined ? null : cdktf.stringToHclTerraform(struct.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transit_gateway_id: {
            value: struct.transitGatewayId === undefined ? null : cdktf.stringToHclTerraform(struct.transitGatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_endpoint_id: {
            value: struct.vpcEndpointId === undefined ? null : cdktf.stringToHclTerraform(struct.vpcEndpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_peering_connection_id: {
            value: struct.vpcPeeringConnectionId === undefined ? null : cdktf.stringToHclTerraform(struct.vpcPeeringConnectionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.routeTableRouteToHclTerraform = routeTableRouteToHclTerraform;
class RouteTableRouteOutputReference extends cdktf.ComplexObject {
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._carrierGatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.carrierGatewayId = this._carrierGatewayId;
        }
        if (this._cidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrBlock = this._cidrBlock;
        }
        if (this._destinationPrefixListId !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPrefixListId = this._destinationPrefixListId;
        }
        if (this._egressOnlyGatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressOnlyGatewayId = this._egressOnlyGatewayId;
        }
        if (this._gatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.gatewayId = this._gatewayId;
        }
        if (this._instanceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceId = this._instanceId;
        }
        if (this._ipv6CidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
        }
        if (this._localGatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.localGatewayId = this._localGatewayId;
        }
        if (this._natGatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.natGatewayId = this._natGatewayId;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
        }
        if (this._transitGatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitGatewayId = this._transitGatewayId;
        }
        if (this._vpcEndpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpointId = this._vpcEndpointId;
        }
        if (this._vpcPeeringConnectionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcPeeringConnectionId = this._vpcPeeringConnectionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._carrierGatewayId = undefined;
            this._cidrBlock = undefined;
            this._destinationPrefixListId = undefined;
            this._egressOnlyGatewayId = undefined;
            this._gatewayId = undefined;
            this._instanceId = undefined;
            this._ipv6CidrBlock = undefined;
            this._localGatewayId = undefined;
            this._natGatewayId = undefined;
            this._networkInterfaceId = undefined;
            this._transitGatewayId = undefined;
            this._vpcEndpointId = undefined;
            this._vpcPeeringConnectionId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._carrierGatewayId = value.carrierGatewayId;
            this._cidrBlock = value.cidrBlock;
            this._destinationPrefixListId = value.destinationPrefixListId;
            this._egressOnlyGatewayId = value.egressOnlyGatewayId;
            this._gatewayId = value.gatewayId;
            this._instanceId = value.instanceId;
            this._ipv6CidrBlock = value.ipv6CidrBlock;
            this._localGatewayId = value.localGatewayId;
            this._natGatewayId = value.natGatewayId;
            this._networkInterfaceId = value.networkInterfaceId;
            this._transitGatewayId = value.transitGatewayId;
            this._vpcEndpointId = value.vpcEndpointId;
            this._vpcPeeringConnectionId = value.vpcPeeringConnectionId;
        }
    }
    get carrierGatewayId() {
        return this.getStringAttribute('carrier_gateway_id');
    }
    set carrierGatewayId(value) {
        this._carrierGatewayId = value;
    }
    resetCarrierGatewayId() {
        this._carrierGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get carrierGatewayIdInput() {
        return this._carrierGatewayId;
    }
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    set cidrBlock(value) {
        this._cidrBlock = value;
    }
    resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cidrBlockInput() {
        return this._cidrBlock;
    }
    get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    set destinationPrefixListId(value) {
        this._destinationPrefixListId = value;
    }
    resetDestinationPrefixListId() {
        this._destinationPrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationPrefixListIdInput() {
        return this._destinationPrefixListId;
    }
    get egressOnlyGatewayId() {
        return this.getStringAttribute('egress_only_gateway_id');
    }
    set egressOnlyGatewayId(value) {
        this._egressOnlyGatewayId = value;
    }
    resetEgressOnlyGatewayId() {
        this._egressOnlyGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get egressOnlyGatewayIdInput() {
        return this._egressOnlyGatewayId;
    }
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    resetGatewayId() {
        this._gatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    set instanceId(value) {
        this._instanceId = value;
    }
    resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceIdInput() {
        return this._instanceId;
    }
    get ipv6CidrBlock() {
        return this.getStringAttribute('ipv6_cidr_block');
    }
    set ipv6CidrBlock(value) {
        this._ipv6CidrBlock = value;
    }
    resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }
    get localGatewayId() {
        return this.getStringAttribute('local_gateway_id');
    }
    set localGatewayId(value) {
        this._localGatewayId = value;
    }
    resetLocalGatewayId() {
        this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localGatewayIdInput() {
        return this._localGatewayId;
    }
    get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }
    set natGatewayId(value) {
        this._natGatewayId = value;
    }
    resetNatGatewayId() {
        this._natGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get natGatewayIdInput() {
        return this._natGatewayId;
    }
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    set networkInterfaceId(value) {
        this._networkInterfaceId = value;
    }
    resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfaceIdInput() {
        return this._networkInterfaceId;
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
    get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    set vpcEndpointId(value) {
        this._vpcEndpointId = value;
    }
    resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
    set vpcPeeringConnectionId(value) {
        this._vpcPeeringConnectionId = value;
    }
    resetVpcPeeringConnectionId() {
        this._vpcPeeringConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcPeeringConnectionIdInput() {
        return this._vpcPeeringConnectionId;
    }
}
exports.RouteTableRouteOutputReference = RouteTableRouteOutputReference;
_a = JSII_RTTI_SYMBOL_1;
RouteTableRouteOutputReference[_a] = { fqn: "@cdktf/aws-cdk.routeTable.RouteTableRouteOutputReference", version: "0.0.0" };
class RouteTableRouteList extends cdktf.ComplexList {
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
        return new RouteTableRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.RouteTableRouteList = RouteTableRouteList;
_b = JSII_RTTI_SYMBOL_1;
RouteTableRouteList[_b] = { fqn: "@cdktf/aws-cdk.routeTable.RouteTableRouteList", version: "0.0.0" };
function routeTableTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
exports.routeTableTimeoutsToTerraform = routeTableTimeoutsToTerraform;
function routeTableTimeoutsToHclTerraform(struct) {
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
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.routeTableTimeoutsToHclTerraform = routeTableTimeoutsToHclTerraform;
class RouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
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
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
exports.RouteTableTimeoutsOutputReference = RouteTableTimeoutsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
RouteTableTimeoutsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.routeTable.RouteTableTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route_table aws_route_table}
*/
class RouteTable extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RouteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RouteTable to import
    * @param importFromId The id of the existing RouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RouteTable to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route_table", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route_table aws_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteTableConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route_table',
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
        // route - computed: true, optional: true, required: false
        this._route = new RouteTableRouteList(this, "route", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new RouteTableTimeoutsOutputReference(this, "timeouts");
        this._id = config.id;
        this._propagatingVgws = config.propagatingVgws;
        this._route.internalValue = config.route;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcId = config.vpcId;
        this._timeouts.internalValue = config.timeouts;
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
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    get propagatingVgws() {
        return cdktf.Fn.tolist(this.getListAttribute('propagating_vgws'));
    }
    set propagatingVgws(value) {
        this._propagatingVgws = value;
    }
    resetPropagatingVgws() {
        this._propagatingVgws = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagatingVgwsInput() {
        return this._propagatingVgws;
    }
    get route() {
        return this._route;
    }
    putRoute(value) {
        this._route.internalValue = value;
    }
    resetRoute() {
        this._route.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeInput() {
        return this._route.internalValue;
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
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
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
            id: cdktf.stringToTerraform(this._id),
            propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propagatingVgws),
            route: cdktf.listMapper(routeTableRouteToTerraform, false)(this._route.internalValue),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: routeTableTimeoutsToTerraform(this._timeouts.internalValue),
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
            propagating_vgws: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propagatingVgws),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            route: {
                value: cdktf.listMapperHcl(routeTableRouteToHclTerraform, false)(this._route.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RouteTableRouteList",
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
            vpc_id: {
                value: cdktf.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeouts: {
                value: routeTableTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RouteTableTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.RouteTable = RouteTable;
_d = JSII_RTTI_SYMBOL_1;
RouteTable[_d] = { fqn: "@cdktf/aws-cdk.routeTable.RouteTable", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
RouteTable.tfResourceType = "aws_route_table";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3JvdXRlLXRhYmxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBOEYvQixTQUFnQiwwQkFBMEIsQ0FBQyxNQUE0QztJQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsa0JBQWtCLEVBQUUsTUFBTyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JILFVBQVUsRUFBRSxNQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUMvRiwwQkFBMEIsRUFBRSxNQUFPLENBQUMsdUJBQXVCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDM0ksc0JBQXNCLEVBQUUsTUFBTyxDQUFDLG1CQUFtQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFt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O2dCQUNYLGdCQUFnQixFQUFFLFdBQVc7YUFDOUI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFDckUsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsb0JBQW9CO2FBQ3ZDO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUFwUEgsZ0NBcVBDOzs7QUFuUEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyx5QkFBYyxHQUFHLGlCQUFpQixBQUFwQixDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVUYWJsZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNpZCBSb3V0ZVRhYmxlI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNwcm9wYWdhdGluZ192Z3dzIFJvdXRlVGFibGUjcHJvcGFnYXRpbmdfdmd3c31cbiAgKi9cbiAgcmVhZG9ubHkgcHJvcGFnYXRpbmdWZ3dzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlI3JvdXRlIFJvdXRlVGFibGUjcm91dGV9XG4gICovXG4gIHJlYWRvbmx5IHJvdXRlPzogUm91dGVUYWJsZVJvdXRlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjdGFncyBSb3V0ZVRhYmxlI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSN0YWdzX2FsbCBSb3V0ZVRhYmxlI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjdnBjX2lkIFJvdXRlVGFibGUjdnBjX2lkfVxuICAqL1xuICByZWFkb25seSB2cGNJZDogc3RyaW5nO1xuICAvKipcbiAgKiB0aW1lb3V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjdGltZW91dHMgUm91dGVUYWJsZSN0aW1lb3V0c31cbiAgKi9cbiAgcmVhZG9ubHkgdGltZW91dHM/OiBSb3V0ZVRhYmxlVGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlVGFibGVSb3V0ZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlI2NhcnJpZXJfZ2F0ZXdheV9pZCBSb3V0ZVRhYmxlI2NhcnJpZXJfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY2FycmllckdhdGV3YXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjY2lkcl9ibG9jayBSb3V0ZVRhYmxlI2NpZHJfYmxvY2t9XG4gICovXG4gIHJlYWRvbmx5IGNpZHJCbG9jaz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjZGVzdGluYXRpb25fcHJlZml4X2xpc3RfaWQgUm91dGVUYWJsZSNkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25QcmVmaXhMaXN0SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlI2VncmVzc19vbmx5X2dhdGV3YXlfaWQgUm91dGVUYWJsZSNlZ3Jlc3Nfb25seV9nYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSBlZ3Jlc3NPbmx5R2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNnYXRld2F5X2lkIFJvdXRlVGFibGUjZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZ2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNpbnN0YW5jZV9pZCBSb3V0ZVRhYmxlI2luc3RhbmNlX2lkfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNpcHY2X2NpZHJfYmxvY2sgUm91dGVUYWJsZSNpcHY2X2NpZHJfYmxvY2t9XG4gICovXG4gIHJlYWRvbmx5IGlwdjZDaWRyQmxvY2s/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlI2xvY2FsX2dhdGV3YXlfaWQgUm91dGVUYWJsZSNsb2NhbF9nYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSBsb2NhbEdhdGV3YXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjbmF0X2dhdGV3YXlfaWQgUm91dGVUYWJsZSNuYXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbmF0R2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNuZXR3b3JrX2ludGVyZmFjZV9pZCBSb3V0ZVRhYmxlI25ldHdvcmtfaW50ZXJmYWNlX2lkfVxuICAqL1xuICByZWFkb25seSBuZXR3b3JrSW50ZXJmYWNlSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlI3RyYW5zaXRfZ2F0ZXdheV9pZCBSb3V0ZVRhYmxlI3RyYW5zaXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdHJhbnNpdEdhdGV3YXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjdnBjX2VuZHBvaW50X2lkIFJvdXRlVGFibGUjdnBjX2VuZHBvaW50X2lkfVxuICAqL1xuICByZWFkb25seSB2cGNFbmRwb2ludElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSN2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkIFJvdXRlVGFibGUjdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlVGFibGVSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IFJvdXRlVGFibGVSb3V0ZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhcnJpZXJfZ2F0ZXdheV9pZDogc3RydWN0IS5jYXJyaWVyR2F0ZXdheUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXJyaWVyR2F0ZXdheUlkKSxcbiAgICBjaWRyX2Jsb2NrOiBzdHJ1Y3QhLmNpZHJCbG9jayA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkckJsb2NrKSxcbiAgICBkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZDogc3RydWN0IS5kZXN0aW5hdGlvblByZWZpeExpc3RJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25QcmVmaXhMaXN0SWQpLFxuICAgIGVncmVzc19vbmx5X2dhdGV3YXlfaWQ6IHN0cnVjdCEuZWdyZXNzT25seUdhdGV3YXlJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWdyZXNzT25seUdhdGV3YXlJZCksXG4gICAgZ2F0ZXdheV9pZDogc3RydWN0IS5nYXRld2F5SWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdhdGV3YXlJZCksXG4gICAgaW5zdGFuY2VfaWQ6IHN0cnVjdCEuaW5zdGFuY2VJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VJZCksXG4gICAgaXB2Nl9jaWRyX2Jsb2NrOiBzdHJ1Y3QhLmlwdjZDaWRyQmxvY2sgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjZDaWRyQmxvY2spLFxuICAgIGxvY2FsX2dhdGV3YXlfaWQ6IHN0cnVjdCEubG9jYWxHYXRld2F5SWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2FsR2F0ZXdheUlkKSxcbiAgICBuYXRfZ2F0ZXdheV9pZDogc3RydWN0IS5uYXRHYXRld2F5SWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hdEdhdGV3YXlJZCksXG4gICAgbmV0d29ya19pbnRlcmZhY2VfaWQ6IHN0cnVjdCEubmV0d29ya0ludGVyZmFjZUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgIHRyYW5zaXRfZ2F0ZXdheV9pZDogc3RydWN0IS50cmFuc2l0R2F0ZXdheUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0R2F0ZXdheUlkKSxcbiAgICB2cGNfZW5kcG9pbnRfaWQ6IHN0cnVjdCEudnBjRW5kcG9pbnRJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudnBjRW5kcG9pbnRJZCksXG4gICAgdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZDogc3RydWN0IS52cGNQZWVyaW5nQ29ubmVjdGlvbklkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52cGNQZWVyaW5nQ29ubmVjdGlvbklkKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRhYmxlUm91dGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZVRhYmxlUm91dGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY2Fycmllcl9nYXRld2F5X2lkOiB7XG4gICAgICB2YWx1ZTogc3RydWN0IS5jYXJyaWVyR2F0ZXdheUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jYXJyaWVyR2F0ZXdheUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjaWRyX2Jsb2NrOiB7XG4gICAgICB2YWx1ZTogc3RydWN0IS5jaWRyQmxvY2sgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNpZHJCbG9jayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGVzdGluYXRpb25fcHJlZml4X2xpc3RfaWQ6IHtcbiAgICAgIHZhbHVlOiBzdHJ1Y3QhLmRlc3RpbmF0aW9uUHJlZml4TGlzdElkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblByZWZpeExpc3RJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWdyZXNzX29ubHlfZ2F0ZXdheV9pZDoge1xuICAgICAgdmFsdWU6IHN0cnVjdCEuZWdyZXNzT25seUdhdGV3YXlJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWdyZXNzT25seUdhdGV3YXlJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZ2F0ZXdheV9pZDoge1xuICAgICAgdmFsdWU6IHN0cnVjdCEuZ2F0ZXdheUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5nYXRld2F5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3RhbmNlX2lkOiB7XG4gICAgICB2YWx1ZTogc3RydWN0IS5pbnN0YW5jZUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpcHY2X2NpZHJfYmxvY2s6IHtcbiAgICAgIHZhbHVlOiBzdHJ1Y3QhLmlwdjZDaWRyQmxvY2sgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlwdjZDaWRyQmxvY2spLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxvY2FsX2dhdGV3YXlfaWQ6IHtcbiAgICAgIHZhbHVlOiBzdHJ1Y3QhLmxvY2FsR2F0ZXdheUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sb2NhbEdhdGV3YXlJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmF0X2dhdGV3YXlfaWQ6IHtcbiAgICAgIHZhbHVlOiBzdHJ1Y3QhLm5hdEdhdGV3YXlJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmF0R2F0ZXdheUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBuZXR3b3JrX2ludGVyZmFjZV9pZDoge1xuICAgICAgdmFsdWU6IHN0cnVjdCEubmV0d29ya0ludGVyZmFjZUlkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRyYW5zaXRfZ2F0ZXdheV9pZDoge1xuICAgICAgdmFsdWU6IHN0cnVjdCEudHJhbnNpdEdhdGV3YXlJZCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJhbnNpdEdhdGV3YXlJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdnBjX2VuZHBvaW50X2lkOiB7XG4gICAgICB2YWx1ZTogc3RydWN0IS52cGNFbmRwb2ludElkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52cGNFbmRwb2ludElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkOiB7XG4gICAgICB2YWx1ZTogc3RydWN0IS52cGNQZWVyaW5nQ29ubmVjdGlvbklkID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52cGNQZWVyaW5nQ29ubmVjdGlvbklkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlVGFibGVSb3V0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBSb3V0ZVRhYmxlUm91dGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NhcnJpZXJHYXRld2F5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FycmllckdhdGV3YXlJZCA9IHRoaXMuX2NhcnJpZXJHYXRld2F5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jaWRyQmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2lkckJsb2NrID0gdGhpcy5fY2lkckJsb2NrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb25QcmVmaXhMaXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb25QcmVmaXhMaXN0SWQgPSB0aGlzLl9kZXN0aW5hdGlvblByZWZpeExpc3RJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VncmVzc09ubHlHYXRld2F5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZWdyZXNzT25seUdhdGV3YXlJZCA9IHRoaXMuX2VncmVzc09ubHlHYXRld2F5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9nYXRld2F5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ2F0ZXdheUlkID0gdGhpcy5fZ2F0ZXdheUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZUlkID0gdGhpcy5faW5zdGFuY2VJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lwdjZDaWRyQmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXB2NkNpZHJCbG9jayA9IHRoaXMuX2lwdjZDaWRyQmxvY2s7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2NhbEdhdGV3YXlJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2NhbEdhdGV3YXlJZCA9IHRoaXMuX2xvY2FsR2F0ZXdheUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmF0R2F0ZXdheUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hdEdhdGV3YXlJZCA9IHRoaXMuX25hdEdhdGV3YXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uZXR3b3JrSW50ZXJmYWNlSWQgPSB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmFuc2l0R2F0ZXdheUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRyYW5zaXRHYXRld2F5SWQgPSB0aGlzLl90cmFuc2l0R2F0ZXdheUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdnBjRW5kcG9pbnRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52cGNFbmRwb2ludElkID0gdGhpcy5fdnBjRW5kcG9pbnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCA9IHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBSb3V0ZVRhYmxlUm91dGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FycmllckdhdGV3YXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NpZHJCbG9jayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUHJlZml4TGlzdElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZWdyZXNzT25seUdhdGV3YXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dhdGV3YXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pcHY2Q2lkckJsb2NrID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9jYWxHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYXRHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdnBjRW5kcG9pbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FycmllckdhdGV3YXlJZCA9IHZhbHVlLmNhcnJpZXJHYXRld2F5SWQ7XG4gICAgICB0aGlzLl9jaWRyQmxvY2sgPSB2YWx1ZS5jaWRyQmxvY2s7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvblByZWZpeExpc3RJZCA9IHZhbHVlLmRlc3RpbmF0aW9uUHJlZml4TGlzdElkO1xuICAgICAgdGhpcy5fZWdyZXNzT25seUdhdGV3YXlJZCA9IHZhbHVlLmVncmVzc09ubHlHYXRld2F5SWQ7XG4gICAgICB0aGlzLl9nYXRld2F5SWQgPSB2YWx1ZS5nYXRld2F5SWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZUlkID0gdmFsdWUuaW5zdGFuY2VJZDtcbiAgICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB2YWx1ZS5pcHY2Q2lkckJsb2NrO1xuICAgICAgdGhpcy5fbG9jYWxHYXRld2F5SWQgPSB2YWx1ZS5sb2NhbEdhdGV3YXlJZDtcbiAgICAgIHRoaXMuX25hdEdhdGV3YXlJZCA9IHZhbHVlLm5hdEdhdGV3YXlJZDtcbiAgICAgIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZCA9IHZhbHVlLm5ldHdvcmtJbnRlcmZhY2VJZDtcbiAgICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQgPSB2YWx1ZS50cmFuc2l0R2F0ZXdheUlkO1xuICAgICAgdGhpcy5fdnBjRW5kcG9pbnRJZCA9IHZhbHVlLnZwY0VuZHBvaW50SWQ7XG4gICAgICB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkID0gdmFsdWUudnBjUGVlcmluZ0Nvbm5lY3Rpb25JZDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXJyaWVyX2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXJyaWVyR2F0ZXdheUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXJyaWVyR2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2Fycmllcl9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXJyaWVyR2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXJyaWVyR2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FycmllckdhdGV3YXlJZCgpIHtcbiAgICB0aGlzLl9jYXJyaWVyR2F0ZXdheUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXJyaWVyR2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnJpZXJHYXRld2F5SWQ7XG4gIH1cblxuICAvLyBjaWRyX2Jsb2NrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2lkckJsb2NrPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjaWRyQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaWRyX2Jsb2NrJyk7XG4gIH1cbiAgcHVibGljIHNldCBjaWRyQmxvY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NpZHJCbG9jayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENpZHJCbG9jaygpIHtcbiAgICB0aGlzLl9jaWRyQmxvY2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNpZHJCbG9ja0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaWRyQmxvY2s7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uUHJlZml4TGlzdElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblByZWZpeExpc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvblByZWZpeExpc3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25QcmVmaXhMaXN0SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXN0aW5hdGlvblByZWZpeExpc3RJZCgpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvblByZWZpeExpc3RJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25QcmVmaXhMaXN0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25QcmVmaXhMaXN0SWQ7XG4gIH1cblxuICAvLyBlZ3Jlc3Nfb25seV9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWdyZXNzT25seUdhdGV3YXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZWdyZXNzT25seUdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VncmVzc19vbmx5X2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVncmVzc09ubHlHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VncmVzc09ubHlHYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFZ3Jlc3NPbmx5R2F0ZXdheUlkKCkge1xuICAgIHRoaXMuX2VncmVzc09ubHlHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVncmVzc09ubHlHYXRld2F5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWdyZXNzT25seUdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdhdGV3YXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2F0ZXdheUlkKCkge1xuICAgIHRoaXMuX2dhdGV3YXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VJZCgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlSWQ7XG4gIH1cblxuICAvLyBpcHY2X2NpZHJfYmxvY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pcHY2Q2lkckJsb2NrPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcHY2Q2lkckJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXB2Nl9jaWRyX2Jsb2NrJyk7XG4gIH1cbiAgcHVibGljIHNldCBpcHY2Q2lkckJsb2NrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pcHY2Q2lkckJsb2NrID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NkNpZHJCbG9jaygpIHtcbiAgICB0aGlzLl9pcHY2Q2lkckJsb2NrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY2Q2lkckJsb2NrSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjZDaWRyQmxvY2s7XG4gIH1cblxuICAvLyBsb2NhbF9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9jYWxHYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvY2FsR2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfZ2F0ZXdheV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9jYWxHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2FsR2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9jYWxHYXRld2F5SWQoKSB7XG4gICAgdGhpcy5fbG9jYWxHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvY2FsR2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsR2F0ZXdheUlkO1xuICB9XG5cbiAgLy8gbmF0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYXRHYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hdEdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hdF9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYXRHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hdEdhdGV3YXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hdEdhdGV3YXlJZCgpIHtcbiAgICB0aGlzLl9uYXRHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hdEdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYXRHYXRld2F5SWQ7XG4gIH1cblxuICAvLyBuZXR3b3JrX2ludGVyZmFjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtJbnRlcmZhY2VJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19pbnRlcmZhY2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtJbnRlcmZhY2VJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZDtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyYW5zaXRHYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYW5zaXRHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmFuc2l0R2F0ZXdheUlkKCkge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdEdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIHZwY19lbmRwb2ludF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY0VuZHBvaW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwY0VuZHBvaW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfZW5kcG9pbnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0VuZHBvaW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwY0VuZHBvaW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNFbmRwb2ludElkKCkge1xuICAgIHRoaXMuX3ZwY0VuZHBvaW50SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0VuZHBvaW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjRW5kcG9pbnRJZDtcbiAgfVxuXG4gIC8vIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNQZWVyaW5nQ29ubmVjdGlvbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2cGNQZWVyaW5nQ29ubmVjdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY1BlZXJpbmdDb25uZWN0aW9uSWQoKSB7XG4gICAgdGhpcy5fdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZVRhYmxlUm91dGVMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBSb3V0ZVRhYmxlUm91dGVbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogUm91dGVUYWJsZVJvdXRlT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFJvdXRlVGFibGVSb3V0ZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlVGFibGVUaW1lb3V0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3JvdXRlX3RhYmxlI2NyZWF0ZSBSb3V0ZVRhYmxlI2NyZWF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSNkZWxldGUgUm91dGVUYWJsZSNkZWxldGV9XG4gICovXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjdXBkYXRlIFJvdXRlVGFibGUjdXBkYXRlfVxuICAqL1xuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRhYmxlVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZVRhYmxlVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRhYmxlVGltZW91dHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZVRhYmxlVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY3JlYXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRlbGV0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1cGRhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVwZGF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZVRhYmxlVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFJvdXRlVGFibGVUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUm91dGVUYWJsZVRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZS5kZWxldGU7XG4gICAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZS51cGRhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cblxuICAvLyBkZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlKCkge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGRhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VwZGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXBkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGRhdGUoKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1cGRhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yb3V0ZV90YWJsZSBhd3Nfcm91dGVfdGFibGV9XG4qL1xuZXhwb3J0IGNsYXNzIFJvdXRlVGFibGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3JvdXRlX3RhYmxlXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFJvdXRlVGFibGUgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgUm91dGVUYWJsZSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgUm91dGVUYWJsZSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFJvdXRlVGFibGUgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3JvdXRlX3RhYmxlXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcm91dGVfdGFibGUgYXdzX3JvdXRlX3RhYmxlfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBSb3V0ZVRhYmxlQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFJvdXRlVGFibGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yb3V0ZV90YWJsZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3Byb3BhZ2F0aW5nVmd3cyA9IGNvbmZpZy5wcm9wYWdhdGluZ1Znd3M7XG4gICAgdGhpcy5fcm91dGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yb3V0ZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3ZwY0lkID0gY29uZmlnLnZwY0lkO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gb3duZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXJfaWQnKTtcbiAgfVxuXG4gIC8vIHByb3BhZ2F0aW5nX3Znd3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9wYWdhdGluZ1Znd3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcHJvcGFnYXRpbmdWZ3dzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwcm9wYWdhdGluZ192Z3dzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvcGFnYXRpbmdWZ3dzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Byb3BhZ2F0aW5nVmd3cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3BhZ2F0aW5nVmd3cygpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGluZ1Znd3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3BhZ2F0aW5nVmd3c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wYWdhdGluZ1Znd3M7XG4gIH1cblxuICAvLyByb3V0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvdXRlID0gbmV3IFJvdXRlVGFibGVSb3V0ZUxpc3QodGhpcywgXCJyb3V0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGU7XG4gIH1cbiAgcHVibGljIHB1dFJvdXRlKHZhbHVlOiBSb3V0ZVRhYmxlUm91dGVbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvdXRlKCkge1xuICAgIHRoaXMuX3JvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvdXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZwY19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92cGNJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNJZDtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IFJvdXRlVGFibGVUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRpbWVvdXRzXCIpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IFJvdXRlVGFibGVUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgcHJvcGFnYXRpbmdfdmd3czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3Byb3BhZ2F0aW5nVmd3cyksXG4gICAgICByb3V0ZTogY2RrdGYubGlzdE1hcHBlcihyb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3JvdXRlLmludGVybmFsVmFsdWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB2cGNfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZwY0lkKSxcbiAgICAgIHRpbWVvdXRzOiByb3V0ZVRhYmxlVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHByb3BhZ2F0aW5nX3Znd3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9wcm9wYWdhdGluZ1Znd3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcm91dGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wocm91dGVUYWJsZVJvdXRlVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9yb3V0ZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJSb3V0ZVRhYmxlUm91dGVMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdnBjX2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl92cGNJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXRzOiB7XG4gICAgICAgIHZhbHVlOiByb3V0ZVRhYmxlVGltZW91dHNUb0hjbFRlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzdHJ1Y3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJSb3V0ZVRhYmxlVGltZW91dHNcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==