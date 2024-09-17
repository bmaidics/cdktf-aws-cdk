"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const internet_gateway_1 = require("../../aws/internet-gateway");
const lb_1 = require("../../aws/lb");
const route_1 = require("../../aws/route");
const route_table_1 = require("../../aws/route-table");
const route_table_association_1 = require("../../aws/route-table-association");
const security_group_1 = require("../../aws/security-group");
const security_group_rule_1 = require("../../aws/security-group-rule");
const subnet_1 = require("../../aws/subnet");
const vpc_1 = require("../../aws/vpc");
const helper_1 = require("../helper");
const index_1 = require("../index");
(0, index_1.registerMapping)("AWS::EC2::VPC", {
    resource: (0, helper_1.createGuessingResourceMapper)(vpc_1.Vpc),
    attributes: {
        // TODO: make attributes optional!
        Arn: (vpc) => vpc.arn,
        Ref: (vpc) => vpc.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::Subnet", {
    resource: (0, helper_1.createGuessingResourceMapper)(subnet_1.Subnet),
    attributes: {
        Arn: (subnet) => subnet.arn,
        Ref: (subnet) => subnet.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::Route", {
    resource: (0, helper_1.createGuessingResourceMapper)(route_1.Route),
    attributes: {
        Arn: () => {
            throw new Error("Route resource does not have an arn");
        },
        Ref: (route) => route.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::RouteTable", {
    resource: (0, helper_1.createGuessingResourceMapper)(route_table_1.RouteTable),
    attributes: {
        Arn: (table) => table.arn,
        Ref: (table) => table.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::SubnetRouteTableAssociation", {
    resource: (0, helper_1.createGuessingResourceMapper)(route_table_association_1.RouteTableAssociation),
    attributes: {
        Arn: () => {
            throw new Error("RouteTableAssociation resource does not have an arn");
        },
        Ref: (a) => a.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::VPCGatewayAttachment", {
    resource: (scope, _id, props) => {
        // This has no resource representation in TF, see also: https://github.com/hashicorp/terraform-provider-aws/issues/5465#issuecomment-415575387
        // so we add an aspect to simulate the behaviour it has
        const vpcId = props.VpcId;
        delete props.VpcId;
        delete props.InternetGatewayId;
        cdktf_1.Aspects.of(scope).add({
            visit: (node) => {
                // FIXME: move this into some creation function or similar
                // TODO: this has the shortcoming of changing all internet gateways
                if (node instanceof internet_gateway_1.InternetGateway) {
                    // TODO: check the node.id and try to resolve that token somehow to find out the targetted internet gateway (note.id will be a Lazy that resolves to some TF resource)
                    node.vpcId = vpcId;
                }
            },
        });
        return null;
    },
    attributes: {
        // FIXME: when is this used? resolve to the related InternetGateway or VpnGateway instead
        Arn: () => {
            throw new Error("AWS::EC2::VPCGatewayAttachment has no represenation in Terraform and therefore cannot be accessed");
        },
        Ref: () => {
            throw new Error("AWS::EC2::VPCGatewayAttachment has no represenation in Terraform and therefore cannot be accessed");
        },
    },
});
(0, index_1.registerMapping)("AWS::ElasticLoadBalancingV2::LoadBalancer", {
    resource: (0, helper_1.createGuessingResourceMapper)(lb_1.Lb),
    attributes: {
        Arn: (elb) => elb.arn,
        Ref: (elb) => elb.id,
        DNSName: (elb) => elb.dnsName,
    },
});
(0, index_1.registerMapping)("AWS::EC2::SecurityGroup", {
    resource: (0, helper_1.createGuessingResourceMapper)(security_group_1.SecurityGroup), // FIXME: create rules via SecurityGroupRule resource?
    attributes: {
        Arn: (sg) => sg.arn,
        Ref: (sg) => sg.id,
        GroupId: (sg) => sg.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::SecurityGroupEgress", {
    resource: (scope, id, props) => {
        props.Type = "egress";
        return (0, helper_1.createGuessingResourceMapper)(security_group_rule_1.SecurityGroupRule, {
            GroupId: "securityGroupId",
            IpProtocol: "protocol",
        })(scope, id, props);
    },
    attributes: {
        Arn: () => {
            throw new Error("SecurityGroupRule has no arn");
        },
        Ref: (rule) => rule.id,
    },
});
(0, index_1.registerMapping)("AWS::EC2::SecurityGroupIngress", {
    resource: (scope, id, props) => {
        props.Type = "ingress";
        return (0, helper_1.createGuessingResourceMapper)(security_group_rule_1.SecurityGroupRule, {
            GroupId: "securityGroupId",
            IpProtocol: "protocol",
        })(scope, id, props);
    },
    attributes: {
        Arn: () => {
            throw new Error("SecurityGroupRule has no arn");
        },
        Ref: (rule) => rule.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXZwYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXBwaW5nL2F3cy9lYzItdnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7O0FBRUgsaUNBQWdDO0FBQ2hDLGlFQUE2RDtBQUM3RCxxQ0FBa0M7QUFDbEMsMkNBQXdDO0FBQ3hDLHVEQUFtRDtBQUNuRCwrRUFBMEU7QUFDMUUsNkRBQXlEO0FBQ3pELHVFQUFrRTtBQUNsRSw2Q0FBMEM7QUFDMUMsdUNBQW9DO0FBQ3BDLHNDQUF5RDtBQUN6RCxvQ0FBMkM7QUFFM0MsSUFBQSx1QkFBZSxFQUFDLGVBQWUsRUFBRTtJQUMvQixRQUFRLEVBQUUsSUFBQSxxQ0FBNEIsRUFBQyxTQUFHLENBQUM7SUFDM0MsVUFBVSxFQUFFO1FBQ1Ysa0NBQWtDO1FBQ2xDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUc7UUFDMUIsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtLQUMxQjtDQUNGLENBQUMsQ0FBQztBQUVILElBQUEsdUJBQWUsRUFBQyxrQkFBa0IsRUFBRTtJQUNsQyxRQUFRLEVBQUUsSUFBQSxxQ0FBNEIsRUFBQyxlQUFNLENBQUM7SUFDOUMsVUFBVSxFQUFFO1FBQ1YsR0FBRyxFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRztRQUNuQyxHQUFHLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0tBQ25DO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBQSx1QkFBZSxFQUFDLGlCQUFpQixFQUFFO0lBQ2pDLFFBQVEsRUFBRSxJQUFBLHFDQUE0QixFQUFDLGFBQUssQ0FBQztJQUM3QyxVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMs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QUFFO0tBQzFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG5pbXBvcnQgeyBBc3BlY3RzIH0gZnJvbSBcImNka3RmXCI7XG5pbXBvcnQgeyBJbnRlcm5ldEdhdGV3YXkgfSBmcm9tIFwiLi4vLi4vYXdzL2ludGVybmV0LWdhdGV3YXlcIjtcbmltcG9ydCB7IExiIH0gZnJvbSBcIi4uLy4uL2F3cy9sYlwiO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiLi4vLi4vYXdzL3JvdXRlXCI7XG5pbXBvcnQgeyBSb3V0ZVRhYmxlIH0gZnJvbSBcIi4uLy4uL2F3cy9yb3V0ZS10YWJsZVwiO1xuaW1wb3J0IHsgUm91dGVUYWJsZUFzc29jaWF0aW9uIH0gZnJvbSBcIi4uLy4uL2F3cy9yb3V0ZS10YWJsZS1hc3NvY2lhdGlvblwiO1xuaW1wb3J0IHsgU2VjdXJpdHlHcm91cCB9IGZyb20gXCIuLi8uLi9hd3Mvc2VjdXJpdHktZ3JvdXBcIjtcbmltcG9ydCB7IFNlY3VyaXR5R3JvdXBSdWxlIH0gZnJvbSBcIi4uLy4uL2F3cy9zZWN1cml0eS1ncm91cC1ydWxlXCI7XG5pbXBvcnQgeyBTdWJuZXQgfSBmcm9tIFwiLi4vLi4vYXdzL3N1Ym5ldFwiO1xuaW1wb3J0IHsgVnBjIH0gZnJvbSBcIi4uLy4uL2F3cy92cGNcIjtcbmltcG9ydCB7IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlZQQ1wiLCB7XG4gIHJlc291cmNlOiBjcmVhdGVHdWVzc2luZ1Jlc291cmNlTWFwcGVyKFZwYyksXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICAvLyBUT0RPOiBtYWtlIGF0dHJpYnV0ZXMgb3B0aW9uYWwhXG4gICAgQXJuOiAodnBjOiBWcGMpID0+IHZwYy5hcm4sXG4gICAgUmVmOiAodnBjOiBWcGMpID0+IHZwYy5pZCxcbiAgfSxcbn0pO1xuXG5yZWdpc3Rlck1hcHBpbmcoXCJBV1M6OkVDMjo6U3VibmV0XCIsIHtcbiAgcmVzb3VyY2U6IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoU3VibmV0KSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHN1Ym5ldDogU3VibmV0KSA9PiBzdWJuZXQuYXJuLFxuICAgIFJlZjogKHN1Ym5ldDogU3VibmV0KSA9PiBzdWJuZXQuaWQsXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlJvdXRlXCIsIHtcbiAgcmVzb3VyY2U6IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoUm91dGUpLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgQXJuOiAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb3V0ZSByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGFuIGFyblwiKTtcbiAgICB9LFxuICAgIFJlZjogKHJvdXRlOiBSb3V0ZSkgPT4gcm91dGUuaWQsXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlJvdXRlVGFibGVcIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihSb3V0ZVRhYmxlKSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHRhYmxlOiBSb3V0ZVRhYmxlKSA9PiB0YWJsZS5hcm4sXG4gICAgUmVmOiAodGFibGU6IFJvdXRlVGFibGUpID0+IHRhYmxlLmlkLFxuICB9LFxufSk7XG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6RUMyOjpTdWJuZXRSb3V0ZVRhYmxlQXNzb2NpYXRpb25cIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihSb3V0ZVRhYmxlQXNzb2NpYXRpb24pLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgQXJuOiAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb3V0ZVRhYmxlQXNzb2NpYXRpb24gcmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhbiBhcm5cIik7XG4gICAgfSxcbiAgICBSZWY6IChhOiBSb3V0ZVRhYmxlQXNzb2NpYXRpb24pID0+IGEuaWQsXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlZQQ0dhdGV3YXlBdHRhY2htZW50XCIsIHtcbiAgcmVzb3VyY2U6IChzY29wZSwgX2lkLCBwcm9wcykgPT4ge1xuICAgIC8vIFRoaXMgaGFzIG5vIHJlc291cmNlIHJlcHJlc2VudGF0aW9uIGluIFRGLCBzZWUgYWxzbzogaHR0cHM6Ly9naXRodWIuY29tL2hhc2hpY29ycC90ZXJyYWZvcm0tcHJvdmlkZXItYXdzL2lzc3Vlcy81NDY1I2lzc3VlY29tbWVudC00MTU1NzUzODdcbiAgICAvLyBzbyB3ZSBhZGQgYW4gYXNwZWN0IHRvIHNpbXVsYXRlIHRoZSBiZWhhdmlvdXIgaXQgaGFzXG4gICAgY29uc3QgdnBjSWQgPSBwcm9wcy5WcGNJZDtcbiAgICBkZWxldGUgcHJvcHMuVnBjSWQ7XG4gICAgZGVsZXRlIHByb3BzLkludGVybmV0R2F0ZXdheUlkO1xuXG4gICAgQXNwZWN0cy5vZihzY29wZSkuYWRkKHtcbiAgICAgIHZpc2l0OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBGSVhNRTogbW92ZSB0aGlzIGludG8gc29tZSBjcmVhdGlvbiBmdW5jdGlvbiBvciBzaW1pbGFyXG4gICAgICAgIC8vIFRPRE86IHRoaXMgaGFzIHRoZSBzaG9ydGNvbWluZyBvZiBjaGFuZ2luZyBhbGwgaW50ZXJuZXQgZ2F0ZXdheXNcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBJbnRlcm5ldEdhdGV3YXkpIHtcbiAgICAgICAgICAvLyBUT0RPOiBjaGVjayB0aGUgbm9kZS5pZCBhbmQgdHJ5IHRvIHJlc29sdmUgdGhhdCB0b2tlbiBzb21laG93IHRvIGZpbmQgb3V0IHRoZSB0YXJnZXR0ZWQgaW50ZXJuZXQgZ2F0ZXdheSAobm90ZS5pZCB3aWxsIGJlIGEgTGF6eSB0aGF0IHJlc29sdmVzIHRvIHNvbWUgVEYgcmVzb3VyY2UpXG4gICAgICAgICAgbm9kZS52cGNJZCA9IHZwY0lkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICAvLyBGSVhNRTogd2hlbiBpcyB0aGlzIHVzZWQ/IHJlc29sdmUgdG8gdGhlIHJlbGF0ZWQgSW50ZXJuZXRHYXRld2F5IG9yIFZwbkdhdGV3YXkgaW5zdGVhZFxuICAgIEFybjogKCkgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkFXUzo6RUMyOjpWUENHYXRld2F5QXR0YWNobWVudCBoYXMgbm8gcmVwcmVzZW5hdGlvbiBpbiBUZXJyYWZvcm0gYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgYWNjZXNzZWRcIixcbiAgICAgICk7XG4gICAgfSxcbiAgICBSZWY6ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJBV1M6OkVDMjo6VlBDR2F0ZXdheUF0dGFjaG1lbnQgaGFzIG5vIHJlcHJlc2VuYXRpb24gaW4gVGVycmFmb3JtIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIGFjY2Vzc2VkXCIsXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFbGFzdGljTG9hZEJhbGFuY2luZ1YyOjpMb2FkQmFsYW5jZXJcIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihMYiksXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBBcm46IChlbGI6IExiKSA9PiBlbGIuYXJuLFxuICAgIFJlZjogKGVsYjogTGIpID0+IGVsYi5pZCxcbiAgICBETlNOYW1lOiAoZWxiOiBMYikgPT4gZWxiLmRuc05hbWUsXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlNlY3VyaXR5R3JvdXBcIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihTZWN1cml0eUdyb3VwKSwgLy8gRklYTUU6IGNyZWF0ZSBydWxlcyB2aWEgU2VjdXJpdHlHcm91cFJ1bGUgcmVzb3VyY2U/XG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBBcm46IChzZzogU2VjdXJpdHlHcm91cCkgPT4gc2cuYXJuLFxuICAgIFJlZjogKHNnOiBTZWN1cml0eUdyb3VwKSA9PiBzZy5pZCxcbiAgICBHcm91cElkOiAoc2c6IFNlY3VyaXR5R3JvdXApID0+IHNnLmlkLFxuICB9LFxufSk7XG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6RUMyOjpTZWN1cml0eUdyb3VwRWdyZXNzXCIsIHtcbiAgcmVzb3VyY2U6IChzY29wZSwgaWQsIHByb3BzKSA9PiB7XG4gICAgcHJvcHMuVHlwZSA9IFwiZWdyZXNzXCI7XG4gICAgcmV0dXJuIGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoU2VjdXJpdHlHcm91cFJ1bGUsIHtcbiAgICAgIEdyb3VwSWQ6IFwic2VjdXJpdHlHcm91cElkXCIsXG4gICAgICBJcFByb3RvY29sOiBcInByb3RvY29sXCIsXG4gICAgfSkoc2NvcGUsIGlkLCBwcm9wcyk7XG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBBcm46ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlY3VyaXR5R3JvdXBSdWxlIGhhcyBubyBhcm5cIik7XG4gICAgfSxcbiAgICBSZWY6IChydWxlOiBTZWN1cml0eUdyb3VwUnVsZSkgPT4gcnVsZS5pZCxcbiAgfSxcbn0pO1xuXG5yZWdpc3Rlck1hcHBpbmcoXCJBV1M6OkVDMjo6U2VjdXJpdHlHcm91cEluZ3Jlc3NcIiwge1xuICByZXNvdXJjZTogKHNjb3BlLCBpZCwgcHJvcHMpID0+IHtcbiAgICBwcm9wcy5UeXBlID0gXCJpbmdyZXNzXCI7XG4gICAgcmV0dXJuIGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoU2VjdXJpdHlHcm91cFJ1bGUsIHtcbiAgICAgIEdyb3VwSWQ6IFwic2VjdXJpdHlHcm91cElkXCIsXG4gICAgICBJcFByb3RvY29sOiBcInByb3RvY29sXCIsXG4gICAgfSkoc2NvcGUsIGlkLCBwcm9wcyk7XG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBBcm46ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlY3VyaXR5R3JvdXBSdWxlIGhhcyBubyBhcm5cIik7XG4gICAgfSxcbiAgICBSZWY6IChydWxlOiBTZWN1cml0eUdyb3VwUnVsZSkgPT4gcnVsZS5pZCxcbiAgfSxcbn0pO1xuIl19