"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_permission_1 = require("../../aws/lambda-permission");
const helper_1 = require("../helper");
const index_1 = require("../index");
(0, index_1.registerMapping)("AWS::Lambda::Permission", {
    resource: (0, helper_1.createGuessingResourceMapper)(lambda_permission_1.LambdaPermission),
    attributes: {
        Ref: (permission) => permission.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLXBlcm1pc3Npb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFwcGluZy9hd3MvbGFtYmRhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCxtRUFBK0Q7QUFDL0Qsc0NBQXlEO0FBQ3pELG9DQUEyQztBQUUzQyxJQUFBLHVCQUFlLEVBQUMseUJBQXlCLEVBQUU7SUFDekMsUUFBUSxFQUFFLElBQUEscUNBQTRCLEVBQUMsb0NBQWdCLENBQUM7SUFDeEQsVUFBVSxFQUFFO1FBQ1YsR0FBRyxFQUFFLENBQUMsVUFBNEIsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7S0FDckQ7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbmltcG9ydCB7IExhbWJkYVBlcm1pc3Npb24gfSBmcm9tIFwiLi4vLi4vYXdzL2xhbWJkYS1wZXJtaXNzaW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVHdWVzc2luZ1Jlc291cmNlTWFwcGVyIH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJNYXBwaW5nIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6TGFtYmRhOjpQZXJtaXNzaW9uXCIsIHtcbiAgcmVzb3VyY2U6IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoTGFtYmRhUGVybWlzc2lvbiksXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBSZWY6IChwZXJtaXNzaW9uOiBMYW1iZGFQZXJtaXNzaW9uKSA9PiBwZXJtaXNzaW9uLmlkLFxuICB9LFxufSk7XG4iXX0=