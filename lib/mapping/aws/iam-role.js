"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const iam_role_1 = require("../../aws/iam-role");
const EventualConsistencyWorkaroundAspect_1 = require("../EventualConsistencyWorkaroundAspect");
const helper_1 = require("../helper");
const index_1 = require("../index");
(0, index_1.registerMapping)("AWS::IAM::Role", {
    resource: (scope, id, props) => {
        const resource = (0, helper_1.createGuessingResourceMapper)(iam_role_1.IamRole, {
            AssumeRolePolicyDocument: (doc) => ({
                tfAttributeName: "assumeRolePolicy",
                value: cdktf_1.Fn.jsonencode(doc),
            }),
        })(scope, id, props);
        // add Aspect for working around eventual consistency issues
        if (resource)
            cdktf_1.Aspects.of(scope).add(new EventualConsistencyWorkaroundAspect_1.EventualConsistencyWorkaroundAspect(resource));
        return resource;
    },
    attributes: {
        Arn: (role) => role.arn,
        Ref: (role) => role.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFwcGluZy9hd3MvaWFtLXJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCxpQ0FBb0M7QUFDcEMsaURBQTZDO0FBQzdDLGdHQUE2RjtBQUM3RixzQ0FBeUQ7QUFDekQsb0NBQTJDO0FBRTNDLElBQUEsdUJBQWUsRUFBQyxnQkFBZ0IsRUFBRTtJQUNoQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUEscUNBQTRCLEVBQUMsa0JBQU8sRUFBRTtZQUNyRCx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsZUFBZSxFQUFFLGtCQUFrQjtnQkFDbkMsS0FBSyxFQUFFLFVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQzFCLENBQUM7U0FDSCxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVyQiw0REFBNEQ7UUFDNUQsSUFBSSxRQUFRO1lBQ1YsZUFBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSx5RUFBbUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQ2hDLEdBQUcsRUFBRSxDQUFDLElBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7S0FDaEM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbmltcG9ydCB7IEFzcGVjdHMsIEZuIH0gZnJvbSBcImNka3RmXCI7XG5pbXBvcnQgeyBJYW1Sb2xlIH0gZnJvbSBcIi4uLy4uL2F3cy9pYW0tcm9sZVwiO1xuaW1wb3J0IHsgRXZlbnR1YWxDb25zaXN0ZW5jeVdvcmthcm91bmRBc3BlY3QgfSBmcm9tIFwiLi4vRXZlbnR1YWxDb25zaXN0ZW5jeVdvcmthcm91bmRBc3BlY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpJQU06OlJvbGVcIiwge1xuICByZXNvdXJjZTogKHNjb3BlLCBpZCwgcHJvcHMpID0+IHtcbiAgICBjb25zdCByZXNvdXJjZSA9IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoSWFtUm9sZSwge1xuICAgICAgQXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiAoZG9jKSA9PiAoe1xuICAgICAgICB0ZkF0dHJpYnV0ZU5hbWU6IFwiYXNzdW1lUm9sZVBvbGljeVwiLFxuICAgICAgICB2YWx1ZTogRm4uanNvbmVuY29kZShkb2MpLFxuICAgICAgfSksXG4gICAgfSkoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBhZGQgQXNwZWN0IGZvciB3b3JraW5nIGFyb3VuZCBldmVudHVhbCBjb25zaXN0ZW5jeSBpc3N1ZXNcbiAgICBpZiAocmVzb3VyY2UpXG4gICAgICBBc3BlY3RzLm9mKHNjb3BlKS5hZGQobmV3IEV2ZW50dWFsQ29uc2lzdGVuY3lXb3JrYXJvdW5kQXNwZWN0KHJlc291cmNlKSk7XG5cbiAgICByZXR1cm4gcmVzb3VyY2U7XG4gIH0sXG5cbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHJvbGU6IElhbVJvbGUpID0+IHJvbGUuYXJuLFxuICAgIFJlZjogKHJvbGU6IElhbVJvbGUpID0+IHJvbGUuaWQsXG4gIH0sXG59KTtcbiJdfQ==