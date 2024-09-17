"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("./ec2-vpc");
require("./ec2-enclave-certificate-iam-role-association");
require("./events-role");
require("./iam-policy");
require("./iam-role");
require("./lambda-permission");
// TODO: move to own file
// import { paramCase } from "change-case";
// import { S3Bucket, S3BucketConfig, S3BucketWebsite } from "../../aws";
// import { registerMapping } from "../index";
// import { Writeable } from "../../type-utils";
// registerMapping("AWS::S3::Bucket", {
//   resource: (scope, id, props) => {
//     const config: Writeable<S3BucketConfig> = {};
//     // versioninng
//     if (props.VersioningConfiguration?.Status === "Enabled") {
//       config.versioning = [{ enabled: true }];
//       delete props.VersioningConfiguration;
//     }
//     const enc =
//       props.BucketEncryption?.ServerSideEncryptionConfiguration?.[0]
//         ?.ServerSideEncryptionByDefault;
//     if (enc) {
//       config.serverSideEncryptionConfiguration = [
//         {
//           rule: [
//             {
//               applyServerSideEncryptionByDefault: [
//                 {
//                   sseAlgorithm: enc.SSEAlgorithm,
//                   kmsMasterKeyId: enc.KMSMasterKeyID,
//                 },
//               ],
//             },
//           ],
//         },
//       ];
//       delete props.BucketEncryption;
//     }
//     const acl = props.AccessControl;
//     delete props.AccessControl;
//     if (acl) {
//       config.acl = paramCase(acl);
//     }
//     const website = props.WebsiteConfiguration;
//     if (website) {
//       const websiteConfig: Writeable<S3BucketWebsite> = {};
//       config.website = [websiteConfig];
//       config.website = [
//         {
//           indexDocument: website.IndexDocument,
//           errorDocument: website.ErrorDocument,
//           redirectAllRequestsTo: website.RedirectAllRequestsTo
//             ? (website.RedirectAllRequestsTo.Protocol
//                 ? website.RedirectAllRequestsTo.Protocol + "://"
//                 : "") + website.RedirectAllRequestsTo.HostName
//             : undefined,
//         },
//       ];
//     }
//     const bucketName = props.BucketName;
//     delete props.BucketName;
//     if (bucketName) {
//       config.bucket = bucketName;
//     }
//     return new S3Bucket(scope, id, config);
//   },
//   attributes: {},
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFwcGluZy9hd3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCxxQkFBbUI7QUFDbkIsMERBQXdEO0FBRXhELHlCQUF1QjtBQUV2Qix3QkFBc0I7QUFDdEIsc0JBQW9CO0FBRXBCLCtCQUE2QjtBQUU3Qix5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLHlFQUF5RTtBQUN6RSw4Q0FBOEM7QUFDOUMsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QyxzQ0FBc0M7QUFDdEMsb0RBQW9EO0FBRXBELHFCQUFxQjtBQUNyQixpRUFBaUU7QUFDakUsaURBQWlEO0FBRWpELDhDQUE4QztBQUM5QyxRQUFRO0FBRVIsa0JBQWtCO0FBQ2xCLHVFQUF1RTtBQUN2RSwyQ0FBMkM7QUFDM0MsaUJBQWlCO0FBQ2pCLHFEQUFxRDtBQUNyRCxZQUFZO0FBQ1osb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixzREFBc0Q7QUFDdEQsb0JBQW9CO0FBQ3BCLG9EQUFvRDtBQUNwRCx3REFBd0Q7QUFDeEQscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBRVgsdUNBQXVDO0FBQ3ZDLFFBQVE7QUFFUix1Q0FBdUM7QUFDdkMsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixxQ0FBcUM7QUFDckMsUUFBUTtBQUVSLGtEQUFrRDtBQUVsRCxxQkFBcUI7QUFDckIsOERBQThEO0FBQzlELDBDQUEwQztBQUUxQywyQkFBMkI7QUFDM0IsWUFBWTtBQUNaLGtEQUFrRDtBQUNsRCxrREFBa0Q7QUFDbEQsaUVBQWlFO0FBQ2pFLHdEQUF3RDtBQUN4RCxtRUFBbUU7QUFDbkUsaUVBQWlFO0FBQ2pFLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsV0FBVztBQUNYLFFBQVE7QUFFUiwyQ0FBMkM7QUFDM0MsK0JBQStCO0FBQy9CLHdCQUF3QjtBQUN4QixvQ0FBb0M7QUFDcEMsUUFBUTtBQUVSLDhDQUE4QztBQUM5QyxPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbmltcG9ydCBcIi4vZWMyLXZwY1wiO1xuaW1wb3J0IFwiLi9lYzItZW5jbGF2ZS1jZXJ0aWZpY2F0ZS1pYW0tcm9sZS1hc3NvY2lhdGlvblwiO1xuXG5pbXBvcnQgXCIuL2V2ZW50cy1yb2xlXCI7XG5cbmltcG9ydCBcIi4vaWFtLXBvbGljeVwiO1xuaW1wb3J0IFwiLi9pYW0tcm9sZVwiO1xuXG5pbXBvcnQgXCIuL2xhbWJkYS1wZXJtaXNzaW9uXCI7XG5cbi8vIFRPRE86IG1vdmUgdG8gb3duIGZpbGVcbi8vIGltcG9ydCB7IHBhcmFtQ2FzZSB9IGZyb20gXCJjaGFuZ2UtY2FzZVwiO1xuLy8gaW1wb3J0IHsgUzNCdWNrZXQsIFMzQnVja2V0Q29uZmlnLCBTM0J1Y2tldFdlYnNpdGUgfSBmcm9tIFwiLi4vLi4vYXdzXCI7XG4vLyBpbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbi8vIGltcG9ydCB7IFdyaXRlYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlLXV0aWxzXCI7XG4vLyByZWdpc3Rlck1hcHBpbmcoXCJBV1M6OlMzOjpCdWNrZXRcIiwge1xuLy8gICByZXNvdXJjZTogKHNjb3BlLCBpZCwgcHJvcHMpID0+IHtcbi8vICAgICBjb25zdCBjb25maWc6IFdyaXRlYWJsZTxTM0J1Y2tldENvbmZpZz4gPSB7fTtcblxuLy8gICAgIC8vIHZlcnNpb25pbm5nXG4vLyAgICAgaWYgKHByb3BzLlZlcnNpb25pbmdDb25maWd1cmF0aW9uPy5TdGF0dXMgPT09IFwiRW5hYmxlZFwiKSB7XG4vLyAgICAgICBjb25maWcudmVyc2lvbmluZyA9IFt7IGVuYWJsZWQ6IHRydWUgfV07XG5cbi8vICAgICAgIGRlbGV0ZSBwcm9wcy5WZXJzaW9uaW5nQ29uZmlndXJhdGlvbjtcbi8vICAgICB9XG5cbi8vICAgICBjb25zdCBlbmMgPVxuLy8gICAgICAgcHJvcHMuQnVja2V0RW5jcnlwdGlvbj8uU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uPy5bMF1cbi8vICAgICAgICAgPy5TZXJ2ZXJTaWRlRW5jcnlwdGlvbkJ5RGVmYXVsdDtcbi8vICAgICBpZiAoZW5jKSB7XG4vLyAgICAgICBjb25maWcuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgcnVsZTogW1xuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICBhcHBseVNlcnZlclNpZGVFbmNyeXB0aW9uQnlEZWZhdWx0OiBbXG4vLyAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgc3NlQWxnb3JpdGhtOiBlbmMuU1NFQWxnb3JpdGhtLFxuLy8gICAgICAgICAgICAgICAgICAga21zTWFzdGVyS2V5SWQ6IGVuYy5LTVNNYXN0ZXJLZXlJRCxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICBdLFxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICBdLFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgXTtcblxuLy8gICAgICAgZGVsZXRlIHByb3BzLkJ1Y2tldEVuY3J5cHRpb247XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgYWNsID0gcHJvcHMuQWNjZXNzQ29udHJvbDtcbi8vICAgICBkZWxldGUgcHJvcHMuQWNjZXNzQ29udHJvbDtcbi8vICAgICBpZiAoYWNsKSB7XG4vLyAgICAgICBjb25maWcuYWNsID0gcGFyYW1DYXNlKGFjbCk7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3Qgd2Vic2l0ZSA9IHByb3BzLldlYnNpdGVDb25maWd1cmF0aW9uO1xuXG4vLyAgICAgaWYgKHdlYnNpdGUpIHtcbi8vICAgICAgIGNvbnN0IHdlYnNpdGVDb25maWc6IFdyaXRlYWJsZTxTM0J1Y2tldFdlYnNpdGU+ID0ge307XG4vLyAgICAgICBjb25maWcud2Vic2l0ZSA9IFt3ZWJzaXRlQ29uZmlnXTtcblxuLy8gICAgICAgY29uZmlnLndlYnNpdGUgPSBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBpbmRleERvY3VtZW50OiB3ZWJzaXRlLkluZGV4RG9jdW1lbnQsXG4vLyAgICAgICAgICAgZXJyb3JEb2N1bWVudDogd2Vic2l0ZS5FcnJvckRvY3VtZW50LFxuLy8gICAgICAgICAgIHJlZGlyZWN0QWxsUmVxdWVzdHNUbzogd2Vic2l0ZS5SZWRpcmVjdEFsbFJlcXVlc3RzVG9cbi8vICAgICAgICAgICAgID8gKHdlYnNpdGUuUmVkaXJlY3RBbGxSZXF1ZXN0c1RvLlByb3RvY29sXG4vLyAgICAgICAgICAgICAgICAgPyB3ZWJzaXRlLlJlZGlyZWN0QWxsUmVxdWVzdHNUby5Qcm90b2NvbCArIFwiOi8vXCJcbi8vICAgICAgICAgICAgICAgICA6IFwiXCIpICsgd2Vic2l0ZS5SZWRpcmVjdEFsbFJlcXVlc3RzVG8uSG9zdE5hbWVcbi8vICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgXTtcbi8vICAgICB9XG5cbi8vICAgICBjb25zdCBidWNrZXROYW1lID0gcHJvcHMuQnVja2V0TmFtZTtcbi8vICAgICBkZWxldGUgcHJvcHMuQnVja2V0TmFtZTtcbi8vICAgICBpZiAoYnVja2V0TmFtZSkge1xuLy8gICAgICAgY29uZmlnLmJ1Y2tldCA9IGJ1Y2tldE5hbWU7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIG5ldyBTM0J1Y2tldChzY29wZSwgaWQsIGNvbmZpZyk7XG4vLyAgIH0sXG4vLyAgIGF0dHJpYnV0ZXM6IHt9LFxuLy8gfSk7XG4iXX0=