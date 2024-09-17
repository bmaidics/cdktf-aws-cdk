"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsTerraformAdapter = void 0;
// TODO: move AWS adapter code here
__exportStar(require("./aws"), exports);
// TODO: export adapter and registerMapping / Overrides API
// TODO: how to make those register functions work in languages other than TS?
// TODO: export everything that is required for jsii to work
var aws_adapter_1 = require("./aws-adapter");
Object.defineProperty(exports, "AwsTerraformAdapter", { enumerable: true, get: function () { return aws_adapter_1.AwsTerraformAdapter; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxtQ0FBbUM7QUFFbkMsd0NBQXNCO0FBRXRCLDJEQUEyRDtBQUMzRCw4RUFBOEU7QUFDOUUsNERBQTREO0FBRTVELDZDQUFvRDtBQUEzQyxrSEFBQSxtQkFBbUIsT0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gVE9ETzogbW92ZSBBV1MgYWRhcHRlciBjb2RlIGhlcmVcblxuZXhwb3J0ICogZnJvbSBcIi4vYXdzXCI7XG5cbi8vIFRPRE86IGV4cG9ydCBhZGFwdGVyIGFuZCByZWdpc3Rlck1hcHBpbmcgLyBPdmVycmlkZXMgQVBJXG4vLyBUT0RPOiBob3cgdG8gbWFrZSB0aG9zZSByZWdpc3RlciBmdW5jdGlvbnMgd29yayBpbiBsYW5ndWFnZXMgb3RoZXIgdGhhbiBUUz9cbi8vIFRPRE86IGV4cG9ydCBldmVyeXRoaW5nIHRoYXQgaXMgcmVxdWlyZWQgZm9yIGpzaWkgdG8gd29ya1xuXG5leHBvcnQgeyBBd3NUZXJyYWZvcm1BZGFwdGVyIH0gZnJvbSBcIi4vYXdzLWFkYXB0ZXJcIjtcbiJdfQ==