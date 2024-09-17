"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cloudwatch_event_rule_1 = require("../../aws/cloudwatch-event-rule");
const cloudwatch_event_target_1 = require("../../aws/cloudwatch-event-target");
const index_1 = require("../index");
// TODO: types for CloudFormation Resources? would be really nice.
(0, index_1.registerMapping)("AWS::Events::Rule", {
    resource: (scope, id, props) => {
        const ruleProps = {
            name: props.Name,
            isEnabled: props.State === "ENABLED"
                ? true
                : props.State === "DISABLED"
                    ? false
                    : undefined, // TODO: this might be a common case for the automapper to check for / or common pattern to build a utility for
            description: props.Description,
            eventBusName: props.EventBusName,
            eventPattern: props.EventPattern,
            roleArn: props.RoleArn,
            scheduleExpression: props.ScheduleExpression,
        };
        delete props.Name;
        delete props.State;
        delete props.Description;
        delete props.EventBusName;
        delete props.EventPattern;
        delete props.RoleArn;
        delete props.ScheduleExpression; // TODO: use some utility for this simple naming mapping (needs to have the mapping in guessing resource mapper made reusable somehow)
        const rule = new cloudwatch_event_rule_1.CloudwatchEventRule(scope, id, ruleProps);
        (props.Targets || []).map((target, idx) => {
            const targetProps = {
                arn: target.Arn,
                rule: rule.id,
                batchTarget: target.BatchParameters
                    ? {
                        jobDefinition: target.BatchParameters.JobDefinition,
                        jobName: target.BatchParameters.JobName,
                        arraySize: target.BatchParameters.ArrayProperties?.Size,
                        jobAttempts: target.BatchParameters.RetryStrategy?.Attempts,
                    }
                    : undefined,
                deadLetterConfig: target.DeadLetterConfig
                    ? {
                        arn: target.DeadLetterConfig.Arn,
                    }
                    : undefined,
                // TODO: this is incomplete, see: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html
            };
            delete props.Targets;
            return new cloudwatch_event_target_1.CloudwatchEventTarget(scope, `${id}_target${idx}`, targetProps);
        });
        return rule;
    },
    attributes: {
        Arn: (rule) => rule.arn,
        Ref: (rule) => rule.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFwcGluZy9hd3MvZXZlbnRzLXJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCwyRUFHeUM7QUFDekMsK0VBRzJDO0FBQzNDLG9DQUEyQztBQUUzQyxrRUFBa0U7QUFFbEUsSUFBQSx1QkFBZSxFQUFDLG1CQUFtQixFQUFFO0lBQ25DLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDN0IsTUFBTSxTQUFTLEdBQThCO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixTQUFTLEVBQ1AsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTO2dCQUN2QixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxVQUFVO29CQUMxQixDQUFDLENBQUMsS0FBSztvQkFDUCxDQUFDLENBQUMsU0FBUyxFQUFFLCtHQUErRztZQUNsSSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtTQUM3QyxDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzFCLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxzSUFBc0k7UUFFdkssTUFBTSxJQUFJLEdBQUcsSUFBSSwyQ0FBbUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTNELENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDckQsTUFBTSxXQUFXLEdBQWdDO2dCQUMvQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNiLFdBQVcsRUFBRSxNQUFNLENBQUMsZUFBZTtvQkFDakMsQ0FBQyxDQUFDO3dCQUNFLGFBQWEsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWE7d0JBQ25ELE9BQU8sRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU87d0JBQ3ZDLFNBQVMsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxJQUFJO3dCQUN2RCxXQUFXLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsUUFBUTtxQkFDNUQ7b0JBQ0gsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtvQkFDdkMsQ0FBQyxDQUFDO3dCQUNFLEdBQUcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRztxQkFDakM7b0JBQ0gsQ0FBQyxDQUFDLFNBQVM7Z0JBRWIsdUlBQXVJO2FBQ3hJLENBQUM7WUFDRixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFckIsT0FBTyxJQUFJLCtDQUFxQixDQUM5QixLQUFLLEVBQ0wsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQ3BCLFdBQVcsQ0FDWixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUF5QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRztRQUM1QyxHQUFHLEVBQUUsQ0FBQyxJQUF5QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtLQUM1QztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2xvdWR3YXRjaEV2ZW50UnVsZSxcbiAgQ2xvdWR3YXRjaEV2ZW50UnVsZUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uL2F3cy9jbG91ZHdhdGNoLWV2ZW50LXJ1bGVcIjtcbmltcG9ydCB7XG4gIENsb3Vkd2F0Y2hFdmVudFRhcmdldCxcbiAgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vYXdzL2Nsb3Vkd2F0Y2gtZXZlbnQtdGFyZ2V0XCI7XG5pbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuLy8gVE9ETzogdHlwZXMgZm9yIENsb3VkRm9ybWF0aW9uIFJlc291cmNlcz8gd291bGQgYmUgcmVhbGx5IG5pY2UuXG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6RXZlbnRzOjpSdWxlXCIsIHtcbiAgcmVzb3VyY2U6IChzY29wZSwgaWQsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgcnVsZVByb3BzOiBDbG91ZHdhdGNoRXZlbnRSdWxlQ29uZmlnID0ge1xuICAgICAgbmFtZTogcHJvcHMuTmFtZSxcbiAgICAgIGlzRW5hYmxlZDpcbiAgICAgICAgcHJvcHMuU3RhdGUgPT09IFwiRU5BQkxFRFwiXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBwcm9wcy5TdGF0ZSA9PT0gXCJESVNBQkxFRFwiXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gVE9ETzogdGhpcyBtaWdodCBiZSBhIGNvbW1vbiBjYXNlIGZvciB0aGUgYXV0b21hcHBlciB0byBjaGVjayBmb3IgLyBvciBjb21tb24gcGF0dGVybiB0byBidWlsZCBhIHV0aWxpdHkgZm9yXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuRGVzY3JpcHRpb24sXG4gICAgICBldmVudEJ1c05hbWU6IHByb3BzLkV2ZW50QnVzTmFtZSxcbiAgICAgIGV2ZW50UGF0dGVybjogcHJvcHMuRXZlbnRQYXR0ZXJuLFxuICAgICAgcm9sZUFybjogcHJvcHMuUm9sZUFybixcbiAgICAgIHNjaGVkdWxlRXhwcmVzc2lvbjogcHJvcHMuU2NoZWR1bGVFeHByZXNzaW9uLFxuICAgIH07XG4gICAgZGVsZXRlIHByb3BzLk5hbWU7XG4gICAgZGVsZXRlIHByb3BzLlN0YXRlO1xuICAgIGRlbGV0ZSBwcm9wcy5EZXNjcmlwdGlvbjtcbiAgICBkZWxldGUgcHJvcHMuRXZlbnRCdXNOYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5FdmVudFBhdHRlcm47XG4gICAgZGVsZXRlIHByb3BzLlJvbGVBcm47XG4gICAgZGVsZXRlIHByb3BzLlNjaGVkdWxlRXhwcmVzc2lvbjsgLy8gVE9ETzogdXNlIHNvbWUgdXRpbGl0eSBmb3IgdGhpcyBzaW1wbGUgbmFtaW5nIG1hcHBpbmcgKG5lZWRzIHRvIGhhdmUgdGhlIG1hcHBpbmcgaW4gZ3Vlc3NpbmcgcmVzb3VyY2UgbWFwcGVyIG1hZGUgcmV1c2FibGUgc29tZWhvdylcblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50UnVsZShzY29wZSwgaWQsIHJ1bGVQcm9wcyk7XG5cbiAgICAocHJvcHMuVGFyZ2V0cyB8fCBbXSkubWFwKCh0YXJnZXQ6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFByb3BzOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRDb25maWcgPSB7XG4gICAgICAgIGFybjogdGFyZ2V0LkFybixcbiAgICAgICAgcnVsZTogcnVsZS5pZCxcbiAgICAgICAgYmF0Y2hUYXJnZXQ6IHRhcmdldC5CYXRjaFBhcmFtZXRlcnNcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgam9iRGVmaW5pdGlvbjogdGFyZ2V0LkJhdGNoUGFyYW1ldGVycy5Kb2JEZWZpbml0aW9uLFxuICAgICAgICAgICAgICBqb2JOYW1lOiB0YXJnZXQuQmF0Y2hQYXJhbWV0ZXJzLkpvYk5hbWUsXG4gICAgICAgICAgICAgIGFycmF5U2l6ZTogdGFyZ2V0LkJhdGNoUGFyYW1ldGVycy5BcnJheVByb3BlcnRpZXM/LlNpemUsXG4gICAgICAgICAgICAgIGpvYkF0dGVtcHRzOiB0YXJnZXQuQmF0Y2hQYXJhbWV0ZXJzLlJldHJ5U3RyYXRlZ3k/LkF0dGVtcHRzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBkZWFkTGV0dGVyQ29uZmlnOiB0YXJnZXQuRGVhZExldHRlckNvbmZpZ1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBhcm46IHRhcmdldC5EZWFkTGV0dGVyQ29uZmlnLkFybixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGluY29tcGxldGUsIHNlZTogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU0Nsb3VkRm9ybWF0aW9uL2xhdGVzdC9Vc2VyR3VpZGUvYXdzLXByb3BlcnRpZXMtZXZlbnRzLXJ1bGUtdGFyZ2V0Lmh0bWxcbiAgICAgIH07XG4gICAgICBkZWxldGUgcHJvcHMuVGFyZ2V0cztcblxuICAgICAgcmV0dXJuIG5ldyBDbG91ZHdhdGNoRXZlbnRUYXJnZXQoXG4gICAgICAgIHNjb3BlLFxuICAgICAgICBgJHtpZH1fdGFyZ2V0JHtpZHh9YCxcbiAgICAgICAgdGFyZ2V0UHJvcHMsXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBBcm46IChydWxlOiBDbG91ZHdhdGNoRXZlbnRSdWxlKSA9PiBydWxlLmFybixcbiAgICBSZWY6IChydWxlOiBDbG91ZHdhdGNoRXZlbnRSdWxlKSA9PiBydWxlLmlkLFxuICB9LFxufSk7XG4iXX0=