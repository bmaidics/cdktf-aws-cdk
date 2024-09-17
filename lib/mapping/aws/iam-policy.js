"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const iam_group_policy_attachment_1 = require("../../aws/iam-group-policy-attachment");
const iam_policy_1 = require("../../aws/iam-policy");
const iam_role_policy_attachment_1 = require("../../aws/iam-role-policy-attachment");
const iam_user_policy_attachment_1 = require("../../aws/iam-user-policy-attachment");
const helper_1 = require("../helper");
const index_1 = require("../index");
(0, index_1.registerMapping)("AWS::IAM::Policy", {
    resource: (scope, id, props) => {
        // An AWS::IAM::Policy supports specifying roles, users and groups that this policy should
        // be attached to (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-roles)
        const roleAttachments = props.Roles || [];
        const userAttachments = props.Users || [];
        const groupAttachments = props.Groups || [];
        const resource = (0, helper_1.createGuessingResourceMapper)(iam_policy_1.IamPolicy, {
            PolicyDocument: (doc) => ({
                tfAttributeName: "policy",
                value: cdktf_1.Fn.jsonencode(doc),
            }),
            // ignore these props for the iam_policy resource, we handle them below
            Roles: null,
            Users: null,
            Groups: null,
        })(scope, id, props);
        roleAttachments.forEach((roleArn, idx) => {
            new iam_role_policy_attachment_1.IamRolePolicyAttachment(scope, `${id}_role${idx}`, {
                policyArn: resource.arn,
                role: roleArn,
            });
        });
        userAttachments.forEach((userArn, idx) => {
            new iam_user_policy_attachment_1.IamUserPolicyAttachment(scope, `${id}_user${idx}`, {
                policyArn: resource.arn,
                user: userArn,
            });
        });
        groupAttachments.forEach((groupArn, idx) => {
            new iam_group_policy_attachment_1.IamGroupPolicyAttachment(scope, `${id}_group${idx}`, {
                policyArn: resource.arn,
                group: groupArn,
            });
        });
        return resource;
    },
    attributes: {
        Arn: (policy) => policy.arn,
        Ref: (policy) => policy.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXBwaW5nL2F3cy9pYW0tcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7O0FBRUgsaUNBQTJCO0FBQzNCLHVGQUFpRjtBQUNqRixxREFBaUQ7QUFDakQscUZBQStFO0FBQy9FLHFGQUErRTtBQUMvRSxzQ0FBeUQ7QUFDekQsb0NBQTJDO0FBRTNDLElBQUEsdUJBQWUsRUFBQyxrQkFBa0IsRUFBRTtJQUNsQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzdCLDBGQUEwRjtRQUMxRixvSUFBb0k7UUFDcEksTUFBTSxlQUFlLEdBQVUsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakQsTUFBTSxlQUFlLEdBQVUsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakQsTUFBTSxnQkFBZ0IsR0FBVSxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUVuRCxNQUFNLFFBQVEsR0FBRyxJQUFBLHFDQUE0QixFQUFDLHNCQUFTLEVBQUU7WUFDdkQsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QixlQUFlLEVBQUUsUUFBUTtnQkFDekIsS0FBSyxFQUFFLFVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQzFCLENBQUM7WUFDRix1RUFBdUU7WUFDdkUsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFckIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN2QyxJQUFJLG9EQUF1QixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDckQsU0FBUyxFQUFFLFFBQVMsQ0FBQyxHQUFHO2dCQUN4QixJQUFJLEVBQUUsT0FBTzthQUNkLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN2QyxJQUFJLG9EQUF1QixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDckQsU0FBUyxFQUFFLFFBQVMsQ0FBQyxHQUFHO2dCQUN4QixJQUFJLEVBQUUsT0FBTzthQUNkLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pDLElBQUksc0RBQXdCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFO2dCQUN2RCxTQUFTLEVBQUUsUUFBUyxDQUFDLEdBQUc7Z0JBQ3hCLEtBQUssRUFBRSxRQUFRO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLEdBQUcsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1FBQ3RDLEdBQUcsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0tBQ3RDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG5pbXBvcnQgeyBGbiB9IGZyb20gXCJjZGt0ZlwiO1xuaW1wb3J0IHsgSWFtR3JvdXBQb2xpY3lBdHRhY2htZW50IH0gZnJvbSBcIi4uLy4uL2F3cy9pYW0tZ3JvdXAtcG9saWN5LWF0dGFjaG1lbnRcIjtcbmltcG9ydCB7IElhbVBvbGljeSB9IGZyb20gXCIuLi8uLi9hd3MvaWFtLXBvbGljeVwiO1xuaW1wb3J0IHsgSWFtUm9sZVBvbGljeUF0dGFjaG1lbnQgfSBmcm9tIFwiLi4vLi4vYXdzL2lhbS1yb2xlLXBvbGljeS1hdHRhY2htZW50XCI7XG5pbXBvcnQgeyBJYW1Vc2VyUG9saWN5QXR0YWNobWVudCB9IGZyb20gXCIuLi8uLi9hd3MvaWFtLXVzZXItcG9saWN5LWF0dGFjaG1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpJQU06OlBvbGljeVwiLCB7XG4gIHJlc291cmNlOiAoc2NvcGUsIGlkLCBwcm9wcykgPT4ge1xuICAgIC8vIEFuIEFXUzo6SUFNOjpQb2xpY3kgc3VwcG9ydHMgc3BlY2lmeWluZyByb2xlcywgdXNlcnMgYW5kIGdyb3VwcyB0aGF0IHRoaXMgcG9saWN5IHNob3VsZFxuICAgIC8vIGJlIGF0dGFjaGVkIHRvIChodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTQ2xvdWRGb3JtYXRpb24vbGF0ZXN0L1VzZXJHdWlkZS9hd3MtcmVzb3VyY2UtaWFtLXBvbGljeS5odG1sI2Nmbi1pYW0tcG9saWN5LXJvbGVzKVxuICAgIGNvbnN0IHJvbGVBdHRhY2htZW50czogYW55W10gPSBwcm9wcy5Sb2xlcyB8fCBbXTtcbiAgICBjb25zdCB1c2VyQXR0YWNobWVudHM6IGFueVtdID0gcHJvcHMuVXNlcnMgfHwgW107XG4gICAgY29uc3QgZ3JvdXBBdHRhY2htZW50czogYW55W10gPSBwcm9wcy5Hcm91cHMgfHwgW107XG5cbiAgICBjb25zdCByZXNvdXJjZSA9IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoSWFtUG9saWN5LCB7XG4gICAgICBQb2xpY3lEb2N1bWVudDogKGRvYykgPT4gKHtcbiAgICAgICAgdGZBdHRyaWJ1dGVOYW1lOiBcInBvbGljeVwiLFxuICAgICAgICB2YWx1ZTogRm4uanNvbmVuY29kZShkb2MpLFxuICAgICAgfSksXG4gICAgICAvLyBpZ25vcmUgdGhlc2UgcHJvcHMgZm9yIHRoZSBpYW1fcG9saWN5IHJlc291cmNlLCB3ZSBoYW5kbGUgdGhlbSBiZWxvd1xuICAgICAgUm9sZXM6IG51bGwsXG4gICAgICBVc2VyczogbnVsbCxcbiAgICAgIEdyb3VwczogbnVsbCxcbiAgICB9KShzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIHJvbGVBdHRhY2htZW50cy5mb3JFYWNoKChyb2xlQXJuLCBpZHgpID0+IHtcbiAgICAgIG5ldyBJYW1Sb2xlUG9saWN5QXR0YWNobWVudChzY29wZSwgYCR7aWR9X3JvbGUke2lkeH1gLCB7XG4gICAgICAgIHBvbGljeUFybjogcmVzb3VyY2UhLmFybixcbiAgICAgICAgcm9sZTogcm9sZUFybixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdXNlckF0dGFjaG1lbnRzLmZvckVhY2goKHVzZXJBcm4sIGlkeCkgPT4ge1xuICAgICAgbmV3IElhbVVzZXJQb2xpY3lBdHRhY2htZW50KHNjb3BlLCBgJHtpZH1fdXNlciR7aWR4fWAsIHtcbiAgICAgICAgcG9saWN5QXJuOiByZXNvdXJjZSEuYXJuLFxuICAgICAgICB1c2VyOiB1c2VyQXJuLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBncm91cEF0dGFjaG1lbnRzLmZvckVhY2goKGdyb3VwQXJuLCBpZHgpID0+IHtcbiAgICAgIG5ldyBJYW1Hcm91cFBvbGljeUF0dGFjaG1lbnQoc2NvcGUsIGAke2lkfV9ncm91cCR7aWR4fWAsIHtcbiAgICAgICAgcG9saWN5QXJuOiByZXNvdXJjZSEuYXJuLFxuICAgICAgICBncm91cDogZ3JvdXBBcm4sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNvdXJjZTtcbiAgfSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHBvbGljeTogSWFtUG9saWN5KSA9PiBwb2xpY3kuYXJuLFxuICAgIFJlZjogKHBvbGljeTogSWFtUG9saWN5KSA9PiBwb2xpY3kuaWQsXG4gIH0sXG59KTtcbiJdfQ==