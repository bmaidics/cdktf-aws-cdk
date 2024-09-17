/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AwsProviderConfig {
    /**
    * The access key for API operations. You can retrieve this
    * from the 'Security & Credentials' section of the AWS console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#access_key AwsProvider#access_key}
    */
    readonly accessKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#allowed_account_ids AwsProvider#allowed_account_ids}
    */
    readonly allowedAccountIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}
    */
    readonly forbiddenAccountIds?: string[];
    /**
    * The address of an HTTP proxy to use when accessing the AWS API. Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#http_proxy AwsProvider#http_proxy}
    */
    readonly httpProxy?: string;
    /**
    * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#insecure AwsProvider#insecure}
    */
    readonly insecure?: boolean | cdktf.IResolvable;
    /**
    * The maximum number of times an AWS API request is
    * being executed. If the API request still fails, an error is
    * thrown.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#max_retries AwsProvider#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * The profile for API operations. If not set, the default profile
    * created with `aws configure` will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#profile AwsProvider#profile}
    */
    readonly profile?: string;
    /**
    * The region where AWS operations will take place. Examples
    * are us-east-1, us-west-2, etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#region AwsProvider#region}
    */
    readonly region: string;
    /**
    * Set this to true to force the request to use path-style addressing,
    * i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
    * use virtual hosted bucket addressing when possible
    * (http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3_force_path_style AwsProvider#s3_force_path_style}
    */
    readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
    /**
    * The secret key for API operations. You can retrieve this
    * from the 'Security & Credentials' section of the AWS console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#secret_key AwsProvider#secret_key}
    */
    readonly secretKey?: string;
    /**
    * The path to the shared credentials file. If not set
    * this defaults to ~/.aws/credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#shared_credentials_file AwsProvider#shared_credentials_file}
    */
    readonly sharedCredentialsFile?: string;
    /**
    * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_credentials_validation AwsProvider#skip_credentials_validation}
    */
    readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
    /**
    * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}
    */
    readonly skipGetEc2Platforms?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}
    */
    readonly skipMetadataApiCheck?: boolean | cdktf.IResolvable;
    /**
    * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_region_validation AwsProvider#skip_region_validation}
    */
    readonly skipRegionValidation?: boolean | cdktf.IResolvable;
    /**
    * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
    */
    readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
    /**
    * session token. A session token is only required if you are
    * using temporary security credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#token AwsProvider#token}
    */
    readonly token?: string;
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#alias AwsProvider#alias}
    */
    readonly alias?: string;
    /**
    * assume_role block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#assume_role AwsProvider#assume_role}
    */
    readonly assumeRole?: AwsProviderAssumeRole;
    /**
    * default_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#default_tags AwsProvider#default_tags}
    */
    readonly defaultTags?: AwsProviderDefaultTags;
    /**
    * endpoints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#endpoints AwsProvider#endpoints}
    */
    readonly endpoints?: AwsProviderEndpoints[] | cdktf.IResolvable;
    /**
    * ignore_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ignore_tags AwsProvider#ignore_tags}
    */
    readonly ignoreTags?: AwsProviderIgnoreTags;
}
export interface AwsProviderAssumeRole {
    /**
    * The duration, in seconds, of the role session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#duration_seconds AwsProvider#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * A unique identifier that might be required when you assume a role in another account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#external_id AwsProvider#external_id}
    */
    readonly externalId?: string;
    /**
    * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#policy AwsProvider#policy}
    */
    readonly policy?: string;
    /**
    * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#policy_arns AwsProvider#policy_arns}
    */
    readonly policyArns?: string[];
    /**
    * Amazon Resource Name of an IAM Role to assume prior to making API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#role_arn AwsProvider#role_arn}
    */
    readonly roleArn?: string;
    /**
    * An identifier for the assumed role session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#session_name AwsProvider#session_name}
    */
    readonly sessionName?: string;
    /**
    * Assume role session tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#tags AwsProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Assume role session tag keys to pass to any subsequent sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transitive_tag_keys AwsProvider#transitive_tag_keys}
    */
    readonly transitiveTagKeys?: string[];
}
export declare function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRole): any;
export declare function awsProviderAssumeRoleToHclTerraform(struct?: AwsProviderAssumeRole): any;
export interface AwsProviderDefaultTags {
    /**
    * Resource tags to default across all resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#tags AwsProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function awsProviderDefaultTagsToTerraform(struct?: AwsProviderDefaultTags): any;
export declare function awsProviderDefaultTagsToHclTerraform(struct?: AwsProviderDefaultTags): any;
export interface AwsProviderEndpoints {
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#accessanalyzer AwsProvider#accessanalyzer}
    */
    readonly accessanalyzer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#account AwsProvider#account}
    */
    readonly account?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#acm AwsProvider#acm}
    */
    readonly acm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#acmpca AwsProvider#acmpca}
    */
    readonly acmpca?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#alexaforbusiness AwsProvider#alexaforbusiness}
    */
    readonly alexaforbusiness?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amp AwsProvider#amp}
    */
    readonly amp?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amplify AwsProvider#amplify}
    */
    readonly amplify?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amplifybackend AwsProvider#amplifybackend}
    */
    readonly amplifybackend?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apigateway AwsProvider#apigateway}
    */
    readonly apigateway?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apigatewayv2 AwsProvider#apigatewayv2}
    */
    readonly apigatewayv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appautoscaling AwsProvider#appautoscaling}
    */
    readonly appautoscaling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appconfig AwsProvider#appconfig}
    */
    readonly appconfig?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appflow AwsProvider#appflow}
    */
    readonly appflow?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appintegrations AwsProvider#appintegrations}
    */
    readonly appintegrations?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appintegrationsservice AwsProvider#appintegrationsservice}
    */
    readonly appintegrationsservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationautoscaling AwsProvider#applicationautoscaling}
    */
    readonly applicationautoscaling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationcostprofiler AwsProvider#applicationcostprofiler}
    */
    readonly applicationcostprofiler?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationdiscovery AwsProvider#applicationdiscovery}
    */
    readonly applicationdiscovery?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}
    */
    readonly applicationdiscoveryservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationinsights AwsProvider#applicationinsights}
    */
    readonly applicationinsights?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appmesh AwsProvider#appmesh}
    */
    readonly appmesh?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appregistry AwsProvider#appregistry}
    */
    readonly appregistry?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apprunner AwsProvider#apprunner}
    */
    readonly apprunner?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appstream AwsProvider#appstream}
    */
    readonly appstream?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appsync AwsProvider#appsync}
    */
    readonly appsync?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#athena AwsProvider#athena}
    */
    readonly athena?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#auditmanager AwsProvider#auditmanager}
    */
    readonly auditmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#augmentedairuntime AwsProvider#augmentedairuntime}
    */
    readonly augmentedairuntime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#autoscaling AwsProvider#autoscaling}
    */
    readonly autoscaling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#autoscalingplans AwsProvider#autoscalingplans}
    */
    readonly autoscalingplans?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#backup AwsProvider#backup}
    */
    readonly backup?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#batch AwsProvider#batch}
    */
    readonly batch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#braket AwsProvider#braket}
    */
    readonly braket?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#budgets AwsProvider#budgets}
    */
    readonly budgets?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#chime AwsProvider#chime}
    */
    readonly chime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloud9 AwsProvider#cloud9}
    */
    readonly cloud9?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudcontrol AwsProvider#cloudcontrol}
    */
    readonly cloudcontrol?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudcontrolapi AwsProvider#cloudcontrolapi}
    */
    readonly cloudcontrolapi?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#clouddirectory AwsProvider#clouddirectory}
    */
    readonly clouddirectory?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudformation AwsProvider#cloudformation}
    */
    readonly cloudformation?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudfront AwsProvider#cloudfront}
    */
    readonly cloudfront?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudhsm AwsProvider#cloudhsm}
    */
    readonly cloudhsm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudhsmv2 AwsProvider#cloudhsmv2}
    */
    readonly cloudhsmv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudsearch AwsProvider#cloudsearch}
    */
    readonly cloudsearch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudsearchdomain AwsProvider#cloudsearchdomain}
    */
    readonly cloudsearchdomain?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudtrail AwsProvider#cloudtrail}
    */
    readonly cloudtrail?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatch AwsProvider#cloudwatch}
    */
    readonly cloudwatch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatchevents AwsProvider#cloudwatchevents}
    */
    readonly cloudwatchevents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatchlogs AwsProvider#cloudwatchlogs}
    */
    readonly cloudwatchlogs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codeartifact AwsProvider#codeartifact}
    */
    readonly codeartifact?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codebuild AwsProvider#codebuild}
    */
    readonly codebuild?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codecommit AwsProvider#codecommit}
    */
    readonly codecommit?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codedeploy AwsProvider#codedeploy}
    */
    readonly codedeploy?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codeguruprofiler AwsProvider#codeguruprofiler}
    */
    readonly codeguruprofiler?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codegurureviewer AwsProvider#codegurureviewer}
    */
    readonly codegurureviewer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codepipeline AwsProvider#codepipeline}
    */
    readonly codepipeline?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestar AwsProvider#codestar}
    */
    readonly codestar?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestarconnections AwsProvider#codestarconnections}
    */
    readonly codestarconnections?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestarnotifications AwsProvider#codestarnotifications}
    */
    readonly codestarnotifications?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidentity AwsProvider#cognitoidentity}
    */
    readonly cognitoidentity?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidentityprovider AwsProvider#cognitoidentityprovider}
    */
    readonly cognitoidentityprovider?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidp AwsProvider#cognitoidp}
    */
    readonly cognitoidp?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitosync AwsProvider#cognitosync}
    */
    readonly cognitosync?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#comprehend AwsProvider#comprehend}
    */
    readonly comprehend?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#comprehendmedical AwsProvider#comprehendmedical}
    */
    readonly comprehendmedical?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#config AwsProvider#config}
    */
    readonly config?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#configservice AwsProvider#configservice}
    */
    readonly configservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connect AwsProvider#connect}
    */
    readonly connect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connectcontactlens AwsProvider#connectcontactlens}
    */
    readonly connectcontactlens?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connectparticipant AwsProvider#connectparticipant}
    */
    readonly connectparticipant?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#costandusagereportservice AwsProvider#costandusagereportservice}
    */
    readonly costandusagereportservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#costexplorer AwsProvider#costexplorer}
    */
    readonly costexplorer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cur AwsProvider#cur}
    */
    readonly cur?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#databasemigration AwsProvider#databasemigration}
    */
    readonly databasemigration?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#databasemigrationservice AwsProvider#databasemigrationservice}
    */
    readonly databasemigrationservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dataexchange AwsProvider#dataexchange}
    */
    readonly dataexchange?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#datapipeline AwsProvider#datapipeline}
    */
    readonly datapipeline?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#datasync AwsProvider#datasync}
    */
    readonly datasync?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dax AwsProvider#dax}
    */
    readonly dax?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#detective AwsProvider#detective}
    */
    readonly detective?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#devicefarm AwsProvider#devicefarm}
    */
    readonly devicefarm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#devopsguru AwsProvider#devopsguru}
    */
    readonly devopsguru?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#directconnect AwsProvider#directconnect}
    */
    readonly directconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dlm AwsProvider#dlm}
    */
    readonly dlm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dms AwsProvider#dms}
    */
    readonly dms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#docdb AwsProvider#docdb}
    */
    readonly docdb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ds AwsProvider#ds}
    */
    readonly ds?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dynamodb AwsProvider#dynamodb}
    */
    readonly dynamodb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dynamodbstreams AwsProvider#dynamodbstreams}
    */
    readonly dynamodbstreams?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ec2 AwsProvider#ec2}
    */
    readonly ec2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ec2instanceconnect AwsProvider#ec2instanceconnect}
    */
    readonly ec2Instanceconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecr AwsProvider#ecr}
    */
    readonly ecr?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecrpublic AwsProvider#ecrpublic}
    */
    readonly ecrpublic?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecs AwsProvider#ecs}
    */
    readonly ecs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#efs AwsProvider#efs}
    */
    readonly efs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#eks AwsProvider#eks}
    */
    readonly eks?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticache AwsProvider#elasticache}
    */
    readonly elasticache?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticbeanstalk AwsProvider#elasticbeanstalk}
    */
    readonly elasticbeanstalk?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticinference AwsProvider#elasticinference}
    */
    readonly elasticinference?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticsearch AwsProvider#elasticsearch}
    */
    readonly elasticsearch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticsearchservice AwsProvider#elasticsearchservice}
    */
    readonly elasticsearchservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elastictranscoder AwsProvider#elastictranscoder}
    */
    readonly elastictranscoder?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elb AwsProvider#elb}
    */
    readonly elb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elbv2 AwsProvider#elbv2}
    */
    readonly elbv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#emr AwsProvider#emr}
    */
    readonly emr?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#emrcontainers AwsProvider#emrcontainers}
    */
    readonly emrcontainers?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#es AwsProvider#es}
    */
    readonly es?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#eventbridge AwsProvider#eventbridge}
    */
    readonly eventbridge?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#events AwsProvider#events}
    */
    readonly events?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#finspace AwsProvider#finspace}
    */
    readonly finspace?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#finspacedata AwsProvider#finspacedata}
    */
    readonly finspacedata?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#firehose AwsProvider#firehose}
    */
    readonly firehose?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fis AwsProvider#fis}
    */
    readonly fis?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fms AwsProvider#fms}
    */
    readonly fms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecast AwsProvider#forecast}
    */
    readonly forecast?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastquery AwsProvider#forecastquery}
    */
    readonly forecastquery?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastqueryservice AwsProvider#forecastqueryservice}
    */
    readonly forecastqueryservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastservice AwsProvider#forecastservice}
    */
    readonly forecastservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#frauddetector AwsProvider#frauddetector}
    */
    readonly frauddetector?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fsx AwsProvider#fsx}
    */
    readonly fsx?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#gamelift AwsProvider#gamelift}
    */
    readonly gamelift?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#glacier AwsProvider#glacier}
    */
    readonly glacier?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#globalaccelerator AwsProvider#globalaccelerator}
    */
    readonly globalaccelerator?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#glue AwsProvider#glue}
    */
    readonly glue?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#gluedatabrew AwsProvider#gluedatabrew}
    */
    readonly gluedatabrew?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#greengrass AwsProvider#greengrass}
    */
    readonly greengrass?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#greengrassv2 AwsProvider#greengrassv2}
    */
    readonly greengrassv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#groundstation AwsProvider#groundstation}
    */
    readonly groundstation?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#guardduty AwsProvider#guardduty}
    */
    readonly guardduty?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#health AwsProvider#health}
    */
    readonly health?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#healthlake AwsProvider#healthlake}
    */
    readonly healthlake?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#honeycode AwsProvider#honeycode}
    */
    readonly honeycode?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iam AwsProvider#iam}
    */
    readonly iam?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#identitystore AwsProvider#identitystore}
    */
    readonly identitystore?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#imagebuilder AwsProvider#imagebuilder}
    */
    readonly imagebuilder?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#inspector AwsProvider#inspector}
    */
    readonly inspector?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot AwsProvider#iot}
    */
    readonly iot?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickdevices AwsProvider#iot1clickdevices}
    */
    readonly iot1Clickdevices?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}
    */
    readonly iot1Clickdevicesservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickprojects AwsProvider#iot1clickprojects}
    */
    readonly iot1Clickprojects?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotanalytics AwsProvider#iotanalytics}
    */
    readonly iotanalytics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotdataplane AwsProvider#iotdataplane}
    */
    readonly iotdataplane?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotdeviceadvisor AwsProvider#iotdeviceadvisor}
    */
    readonly iotdeviceadvisor?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotevents AwsProvider#iotevents}
    */
    readonly iotevents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ioteventsdata AwsProvider#ioteventsdata}
    */
    readonly ioteventsdata?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotfleethub AwsProvider#iotfleethub}
    */
    readonly iotfleethub?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotjobsdataplane AwsProvider#iotjobsdataplane}
    */
    readonly iotjobsdataplane?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotsecuretunneling AwsProvider#iotsecuretunneling}
    */
    readonly iotsecuretunneling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotsitewise AwsProvider#iotsitewise}
    */
    readonly iotsitewise?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotthingsgraph AwsProvider#iotthingsgraph}
    */
    readonly iotthingsgraph?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotwireless AwsProvider#iotwireless}
    */
    readonly iotwireless?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kafka AwsProvider#kafka}
    */
    readonly kafka?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kafkaconnect AwsProvider#kafkaconnect}
    */
    readonly kafkaconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kendra AwsProvider#kendra}
    */
    readonly kendra?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesis AwsProvider#kinesis}
    */
    readonly kinesis?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisanalytics AwsProvider#kinesisanalytics}
    */
    readonly kinesisanalytics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}
    */
    readonly kinesisanalyticsv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideo AwsProvider#kinesisvideo}
    */
    readonly kinesisvideo?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}
    */
    readonly kinesisvideoarchivedmedia?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideomedia AwsProvider#kinesisvideomedia}
    */
    readonly kinesisvideomedia?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}
    */
    readonly kinesisvideosignalingchannels?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kms AwsProvider#kms}
    */
    readonly kms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lakeformation AwsProvider#lakeformation}
    */
    readonly lakeformation?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lambda AwsProvider#lambda}
    */
    readonly lambda?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelbuilding AwsProvider#lexmodelbuilding}
    */
    readonly lexmodelbuilding?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}
    */
    readonly lexmodelbuildingservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodels AwsProvider#lexmodels}
    */
    readonly lexmodels?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelsv2 AwsProvider#lexmodelsv2}
    */
    readonly lexmodelsv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntime AwsProvider#lexruntime}
    */
    readonly lexruntime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntimeservice AwsProvider#lexruntimeservice}
    */
    readonly lexruntimeservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntimev2 AwsProvider#lexruntimev2}
    */
    readonly lexruntimev2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#licensemanager AwsProvider#licensemanager}
    */
    readonly licensemanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lightsail AwsProvider#lightsail}
    */
    readonly lightsail?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#location AwsProvider#location}
    */
    readonly location?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutequipment AwsProvider#lookoutequipment}
    */
    readonly lookoutequipment?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutforvision AwsProvider#lookoutforvision}
    */
    readonly lookoutforvision?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutmetrics AwsProvider#lookoutmetrics}
    */
    readonly lookoutmetrics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#machinelearning AwsProvider#machinelearning}
    */
    readonly machinelearning?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#macie AwsProvider#macie}
    */
    readonly macie?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#macie2 AwsProvider#macie2}
    */
    readonly macie2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#managedblockchain AwsProvider#managedblockchain}
    */
    readonly managedblockchain?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacecatalog AwsProvider#marketplacecatalog}
    */
    readonly marketplacecatalog?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}
    */
    readonly marketplacecommerceanalytics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplaceentitlement AwsProvider#marketplaceentitlement}
    */
    readonly marketplaceentitlement?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}
    */
    readonly marketplaceentitlementservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacemetering AwsProvider#marketplacemetering}
    */
    readonly marketplacemetering?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediaconnect AwsProvider#mediaconnect}
    */
    readonly mediaconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediaconvert AwsProvider#mediaconvert}
    */
    readonly mediaconvert?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#medialive AwsProvider#medialive}
    */
    readonly medialive?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediapackage AwsProvider#mediapackage}
    */
    readonly mediapackage?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediapackagevod AwsProvider#mediapackagevod}
    */
    readonly mediapackagevod?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediastore AwsProvider#mediastore}
    */
    readonly mediastore?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediastoredata AwsProvider#mediastoredata}
    */
    readonly mediastoredata?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediatailor AwsProvider#mediatailor}
    */
    readonly mediatailor?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#memorydb AwsProvider#memorydb}
    */
    readonly memorydb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mgn AwsProvider#mgn}
    */
    readonly mgn?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#migrationhub AwsProvider#migrationhub}
    */
    readonly migrationhub?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#migrationhubconfig AwsProvider#migrationhubconfig}
    */
    readonly migrationhubconfig?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mobile AwsProvider#mobile}
    */
    readonly mobile?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mobileanalytics AwsProvider#mobileanalytics}
    */
    readonly mobileanalytics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mq AwsProvider#mq}
    */
    readonly mq?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mturk AwsProvider#mturk}
    */
    readonly mturk?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mwaa AwsProvider#mwaa}
    */
    readonly mwaa?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#neptune AwsProvider#neptune}
    */
    readonly neptune?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#networkfirewall AwsProvider#networkfirewall}
    */
    readonly networkfirewall?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#networkmanager AwsProvider#networkmanager}
    */
    readonly networkmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#nimblestudio AwsProvider#nimblestudio}
    */
    readonly nimblestudio?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#opsworks AwsProvider#opsworks}
    */
    readonly opsworks?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#opsworkscm AwsProvider#opsworkscm}
    */
    readonly opsworkscm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#organizations AwsProvider#organizations}
    */
    readonly organizations?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#outposts AwsProvider#outposts}
    */
    readonly outposts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalize AwsProvider#personalize}
    */
    readonly personalize?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalizeevents AwsProvider#personalizeevents}
    */
    readonly personalizeevents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalizeruntime AwsProvider#personalizeruntime}
    */
    readonly personalizeruntime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pi AwsProvider#pi}
    */
    readonly pi?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpoint AwsProvider#pinpoint}
    */
    readonly pinpoint?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpointemail AwsProvider#pinpointemail}
    */
    readonly pinpointemail?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpointsmsvoice AwsProvider#pinpointsmsvoice}
    */
    readonly pinpointsmsvoice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#polly AwsProvider#polly}
    */
    readonly polly?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pricing AwsProvider#pricing}
    */
    readonly pricing?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#prometheus AwsProvider#prometheus}
    */
    readonly prometheus?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#prometheusservice AwsProvider#prometheusservice}
    */
    readonly prometheusservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#proton AwsProvider#proton}
    */
    readonly proton?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#qldb AwsProvider#qldb}
    */
    readonly qldb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#qldbsession AwsProvider#qldbsession}
    */
    readonly qldbsession?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#quicksight AwsProvider#quicksight}
    */
    readonly quicksight?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ram AwsProvider#ram}
    */
    readonly ram?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rds AwsProvider#rds}
    */
    readonly rds?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rdsdata AwsProvider#rdsdata}
    */
    readonly rdsdata?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rdsdataservice AwsProvider#rdsdataservice}
    */
    readonly rdsdataservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#redshift AwsProvider#redshift}
    */
    readonly redshift?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#redshiftdata AwsProvider#redshiftdata}
    */
    readonly redshiftdata?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rekognition AwsProvider#rekognition}
    */
    readonly rekognition?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroups AwsProvider#resourcegroups}
    */
    readonly resourcegroups?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroupstagging AwsProvider#resourcegroupstagging}
    */
    readonly resourcegroupstagging?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}
    */
    readonly resourcegroupstaggingapi?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#robomaker AwsProvider#robomaker}
    */
    readonly robomaker?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53 AwsProvider#route53}
    */
    readonly route53?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53domains AwsProvider#route53domains}
    */
    readonly route53Domains?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}
    */
    readonly route53Recoverycontrolconfig?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53recoveryreadiness AwsProvider#route53recoveryreadiness}
    */
    readonly route53Recoveryreadiness?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53resolver AwsProvider#route53resolver}
    */
    readonly route53Resolver?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3 AwsProvider#s3}
    */
    readonly s3?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3control AwsProvider#s3control}
    */
    readonly s3Control?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3outposts AwsProvider#s3outposts}
    */
    readonly s3Outposts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemaker AwsProvider#sagemaker}
    */
    readonly sagemaker?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakeredgemanager AwsProvider#sagemakeredgemanager}
    */
    readonly sagemakeredgemanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}
    */
    readonly sagemakerfeaturestoreruntime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakerruntime AwsProvider#sagemakerruntime}
    */
    readonly sagemakerruntime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#savingsplans AwsProvider#savingsplans}
    */
    readonly savingsplans?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#schemas AwsProvider#schemas}
    */
    readonly schemas?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sdb AwsProvider#sdb}
    */
    readonly sdb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#secretsmanager AwsProvider#secretsmanager}
    */
    readonly secretsmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#securityhub AwsProvider#securityhub}
    */
    readonly securityhub?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}
    */
    readonly serverlessapplicationrepository?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessapprepo AwsProvider#serverlessapprepo}
    */
    readonly serverlessapprepo?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessrepo AwsProvider#serverlessrepo}
    */
    readonly serverlessrepo?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicecatalog AwsProvider#servicecatalog}
    */
    readonly servicecatalog?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicediscovery AwsProvider#servicediscovery}
    */
    readonly servicediscovery?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicequotas AwsProvider#servicequotas}
    */
    readonly servicequotas?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ses AwsProvider#ses}
    */
    readonly ses?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sesv2 AwsProvider#sesv2}
    */
    readonly sesv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sfn AwsProvider#sfn}
    */
    readonly sfn?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#shield AwsProvider#shield}
    */
    readonly shield?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#signer AwsProvider#signer}
    */
    readonly signer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#simpledb AwsProvider#simpledb}
    */
    readonly simpledb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sms AwsProvider#sms}
    */
    readonly sms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#snowball AwsProvider#snowball}
    */
    readonly snowball?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sns AwsProvider#sns}
    */
    readonly sns?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sqs AwsProvider#sqs}
    */
    readonly sqs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssm AwsProvider#ssm}
    */
    readonly ssm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssmcontacts AwsProvider#ssmcontacts}
    */
    readonly ssmcontacts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssmincidents AwsProvider#ssmincidents}
    */
    readonly ssmincidents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sso AwsProvider#sso}
    */
    readonly sso?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssoadmin AwsProvider#ssoadmin}
    */
    readonly ssoadmin?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssooidc AwsProvider#ssooidc}
    */
    readonly ssooidc?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#stepfunctions AwsProvider#stepfunctions}
    */
    readonly stepfunctions?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#storagegateway AwsProvider#storagegateway}
    */
    readonly storagegateway?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sts AwsProvider#sts}
    */
    readonly sts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#support AwsProvider#support}
    */
    readonly support?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#swf AwsProvider#swf}
    */
    readonly swf?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#synthetics AwsProvider#synthetics}
    */
    readonly synthetics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#textract AwsProvider#textract}
    */
    readonly textract?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#timestreamquery AwsProvider#timestreamquery}
    */
    readonly timestreamquery?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#timestreamwrite AwsProvider#timestreamwrite}
    */
    readonly timestreamwrite?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribe AwsProvider#transcribe}
    */
    readonly transcribe?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribeservice AwsProvider#transcribeservice}
    */
    readonly transcribeservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribestreaming AwsProvider#transcribestreaming}
    */
    readonly transcribestreaming?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribestreamingservice AwsProvider#transcribestreamingservice}
    */
    readonly transcribestreamingservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transfer AwsProvider#transfer}
    */
    readonly transfer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#translate AwsProvider#translate}
    */
    readonly translate?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#waf AwsProvider#waf}
    */
    readonly waf?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wafregional AwsProvider#wafregional}
    */
    readonly wafregional?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wafv2 AwsProvider#wafv2}
    */
    readonly wafv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wellarchitected AwsProvider#wellarchitected}
    */
    readonly wellarchitected?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workdocs AwsProvider#workdocs}
    */
    readonly workdocs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#worklink AwsProvider#worklink}
    */
    readonly worklink?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workmail AwsProvider#workmail}
    */
    readonly workmail?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workmailmessageflow AwsProvider#workmailmessageflow}
    */
    readonly workmailmessageflow?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workspaces AwsProvider#workspaces}
    */
    readonly workspaces?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#xray AwsProvider#xray}
    */
    readonly xray?: string;
}
export declare function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any;
export declare function awsProviderEndpointsToHclTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any;
export interface AwsProviderIgnoreTags {
    /**
    * Resource tag key prefixes to ignore across all resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#key_prefixes AwsProvider#key_prefixes}
    */
    readonly keyPrefixes?: string[];
    /**
    * Resource tag keys to ignore across all resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#keys AwsProvider#keys}
    */
    readonly keys?: string[];
}
export declare function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTags): any;
export declare function awsProviderIgnoreTagsToHclTerraform(struct?: AwsProviderIgnoreTags): any;
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws}
*/
export declare class AwsProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType = "aws";
    /**
    * Generates CDKTF code for importing a AwsProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AwsProvider to import
    * @param importFromId The id of the existing AwsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AwsProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AwsProviderConfig
    */
    constructor(scope: Construct, id: string, config: AwsProviderConfig);
    private _accessKey?;
    get accessKey(): string | undefined;
    set accessKey(value: string | undefined);
    resetAccessKey(): void;
    get accessKeyInput(): string | undefined;
    private _allowedAccountIds?;
    get allowedAccountIds(): string[] | undefined;
    set allowedAccountIds(value: string[] | undefined);
    resetAllowedAccountIds(): void;
    get allowedAccountIdsInput(): string[] | undefined;
    private _forbiddenAccountIds?;
    get forbiddenAccountIds(): string[] | undefined;
    set forbiddenAccountIds(value: string[] | undefined);
    resetForbiddenAccountIds(): void;
    get forbiddenAccountIdsInput(): string[] | undefined;
    private _httpProxy?;
    get httpProxy(): string | undefined;
    set httpProxy(value: string | undefined);
    resetHttpProxy(): void;
    get httpProxyInput(): string | undefined;
    private _insecure?;
    get insecure(): boolean | cdktf.IResolvable | undefined;
    set insecure(value: boolean | cdktf.IResolvable | undefined);
    resetInsecure(): void;
    get insecureInput(): boolean | cdktf.IResolvable | undefined;
    private _maxRetries?;
    get maxRetries(): number | undefined;
    set maxRetries(value: number | undefined);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _profile?;
    get profile(): string | undefined;
    set profile(value: string | undefined);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _region?;
    get region(): string | undefined;
    set region(value: string | undefined);
    get regionInput(): string | undefined;
    private _s3ForcePathStyle?;
    get s3ForcePathStyle(): boolean | cdktf.IResolvable | undefined;
    set s3ForcePathStyle(value: boolean | cdktf.IResolvable | undefined);
    resetS3ForcePathStyle(): void;
    get s3ForcePathStyleInput(): boolean | cdktf.IResolvable | undefined;
    private _secretKey?;
    get secretKey(): string | undefined;
    set secretKey(value: string | undefined);
    resetSecretKey(): void;
    get secretKeyInput(): string | undefined;
    private _sharedCredentialsFile?;
    get sharedCredentialsFile(): string | undefined;
    set sharedCredentialsFile(value: string | undefined);
    resetSharedCredentialsFile(): void;
    get sharedCredentialsFileInput(): string | undefined;
    private _skipCredentialsValidation?;
    get skipCredentialsValidation(): boolean | cdktf.IResolvable | undefined;
    set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined);
    resetSkipCredentialsValidation(): void;
    get skipCredentialsValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _skipGetEc2Platforms?;
    get skipGetEc2Platforms(): boolean | cdktf.IResolvable | undefined;
    set skipGetEc2Platforms(value: boolean | cdktf.IResolvable | undefined);
    resetSkipGetEc2Platforms(): void;
    get skipGetEc2PlatformsInput(): boolean | cdktf.IResolvable | undefined;
    private _skipMetadataApiCheck?;
    get skipMetadataApiCheck(): boolean | cdktf.IResolvable | undefined;
    set skipMetadataApiCheck(value: boolean | cdktf.IResolvable | undefined);
    resetSkipMetadataApiCheck(): void;
    get skipMetadataApiCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _skipRegionValidation?;
    get skipRegionValidation(): boolean | cdktf.IResolvable | undefined;
    set skipRegionValidation(value: boolean | cdktf.IResolvable | undefined);
    resetSkipRegionValidation(): void;
    get skipRegionValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _skipRequestingAccountId?;
    get skipRequestingAccountId(): boolean | cdktf.IResolvable | undefined;
    set skipRequestingAccountId(value: boolean | cdktf.IResolvable | undefined);
    resetSkipRequestingAccountId(): void;
    get skipRequestingAccountIdInput(): boolean | cdktf.IResolvable | undefined;
    private _token?;
    get token(): string | undefined;
    set token(value: string | undefined);
    resetToken(): void;
    get tokenInput(): string | undefined;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _assumeRole?;
    get assumeRole(): AwsProviderAssumeRole | undefined;
    set assumeRole(value: AwsProviderAssumeRole | undefined);
    resetAssumeRole(): void;
    get assumeRoleInput(): AwsProviderAssumeRole | undefined;
    private _defaultTags?;
    get defaultTags(): AwsProviderDefaultTags | undefined;
    set defaultTags(value: AwsProviderDefaultTags | undefined);
    resetDefaultTags(): void;
    get defaultTagsInput(): AwsProviderDefaultTags | undefined;
    private _endpoints?;
    get endpoints(): AwsProviderEndpoints[] | cdktf.IResolvable | undefined;
    set endpoints(value: AwsProviderEndpoints[] | cdktf.IResolvable | undefined);
    resetEndpoints(): void;
    get endpointsInput(): cdktf.IResolvable | AwsProviderEndpoints[] | undefined;
    private _ignoreTags?;
    get ignoreTags(): AwsProviderIgnoreTags | undefined;
    set ignoreTags(value: AwsProviderIgnoreTags | undefined);
    resetIgnoreTags(): void;
    get ignoreTagsInput(): AwsProviderIgnoreTags | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
