"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsProvider = exports.awsProviderIgnoreTagsToHclTerraform = exports.awsProviderIgnoreTagsToTerraform = exports.awsProviderEndpointsToHclTerraform = exports.awsProviderEndpointsToTerraform = exports.awsProviderDefaultTagsToHclTerraform = exports.awsProviderDefaultTagsToTerraform = exports.awsProviderAssumeRoleToHclTerraform = exports.awsProviderAssumeRoleToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function awsProviderAssumeRoleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration_seconds: cdktf.numberToTerraform(struct.durationSeconds),
        external_id: cdktf.stringToTerraform(struct.externalId),
        policy: cdktf.stringToTerraform(struct.policy),
        policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.policyArns),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        session_name: cdktf.stringToTerraform(struct.sessionName),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
        transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.transitiveTagKeys),
    };
}
exports.awsProviderAssumeRoleToTerraform = awsProviderAssumeRoleToTerraform;
function awsProviderAssumeRoleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        duration_seconds: {
            value: cdktf.numberToHclTerraform(struct.durationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        external_id: {
            value: cdktf.stringToHclTerraform(struct.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy: {
            value: cdktf.stringToHclTerraform(struct.policy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_arns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.policyArns),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_name: {
            value: cdktf.stringToHclTerraform(struct.sessionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        transitive_tag_keys: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.transitiveTagKeys),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.awsProviderAssumeRoleToHclTerraform = awsProviderAssumeRoleToHclTerraform;
function awsProviderDefaultTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
    };
}
exports.awsProviderDefaultTagsToTerraform = awsProviderDefaultTagsToTerraform;
function awsProviderDefaultTagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        tags: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.awsProviderDefaultTagsToHclTerraform = awsProviderDefaultTagsToHclTerraform;
function awsProviderEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        accessanalyzer: cdktf.stringToTerraform(struct.accessanalyzer),
        account: cdktf.stringToTerraform(struct.account),
        acm: cdktf.stringToTerraform(struct.acm),
        acmpca: cdktf.stringToTerraform(struct.acmpca),
        alexaforbusiness: cdktf.stringToTerraform(struct.alexaforbusiness),
        amp: cdktf.stringToTerraform(struct.amp),
        amplify: cdktf.stringToTerraform(struct.amplify),
        amplifybackend: cdktf.stringToTerraform(struct.amplifybackend),
        apigateway: cdktf.stringToTerraform(struct.apigateway),
        apigatewayv2: cdktf.stringToTerraform(struct.apigatewayv2),
        appautoscaling: cdktf.stringToTerraform(struct.appautoscaling),
        appconfig: cdktf.stringToTerraform(struct.appconfig),
        appflow: cdktf.stringToTerraform(struct.appflow),
        appintegrations: cdktf.stringToTerraform(struct.appintegrations),
        appintegrationsservice: cdktf.stringToTerraform(struct.appintegrationsservice),
        applicationautoscaling: cdktf.stringToTerraform(struct.applicationautoscaling),
        applicationcostprofiler: cdktf.stringToTerraform(struct.applicationcostprofiler),
        applicationdiscovery: cdktf.stringToTerraform(struct.applicationdiscovery),
        applicationdiscoveryservice: cdktf.stringToTerraform(struct.applicationdiscoveryservice),
        applicationinsights: cdktf.stringToTerraform(struct.applicationinsights),
        appmesh: cdktf.stringToTerraform(struct.appmesh),
        appregistry: cdktf.stringToTerraform(struct.appregistry),
        apprunner: cdktf.stringToTerraform(struct.apprunner),
        appstream: cdktf.stringToTerraform(struct.appstream),
        appsync: cdktf.stringToTerraform(struct.appsync),
        athena: cdktf.stringToTerraform(struct.athena),
        auditmanager: cdktf.stringToTerraform(struct.auditmanager),
        augmentedairuntime: cdktf.stringToTerraform(struct.augmentedairuntime),
        autoscaling: cdktf.stringToTerraform(struct.autoscaling),
        autoscalingplans: cdktf.stringToTerraform(struct.autoscalingplans),
        backup: cdktf.stringToTerraform(struct.backup),
        batch: cdktf.stringToTerraform(struct.batch),
        braket: cdktf.stringToTerraform(struct.braket),
        budgets: cdktf.stringToTerraform(struct.budgets),
        chime: cdktf.stringToTerraform(struct.chime),
        cloud9: cdktf.stringToTerraform(struct.cloud9),
        cloudcontrol: cdktf.stringToTerraform(struct.cloudcontrol),
        cloudcontrolapi: cdktf.stringToTerraform(struct.cloudcontrolapi),
        clouddirectory: cdktf.stringToTerraform(struct.clouddirectory),
        cloudformation: cdktf.stringToTerraform(struct.cloudformation),
        cloudfront: cdktf.stringToTerraform(struct.cloudfront),
        cloudhsm: cdktf.stringToTerraform(struct.cloudhsm),
        cloudhsmv2: cdktf.stringToTerraform(struct.cloudhsmv2),
        cloudsearch: cdktf.stringToTerraform(struct.cloudsearch),
        cloudsearchdomain: cdktf.stringToTerraform(struct.cloudsearchdomain),
        cloudtrail: cdktf.stringToTerraform(struct.cloudtrail),
        cloudwatch: cdktf.stringToTerraform(struct.cloudwatch),
        cloudwatchevents: cdktf.stringToTerraform(struct.cloudwatchevents),
        cloudwatchlogs: cdktf.stringToTerraform(struct.cloudwatchlogs),
        codeartifact: cdktf.stringToTerraform(struct.codeartifact),
        codebuild: cdktf.stringToTerraform(struct.codebuild),
        codecommit: cdktf.stringToTerraform(struct.codecommit),
        codedeploy: cdktf.stringToTerraform(struct.codedeploy),
        codeguruprofiler: cdktf.stringToTerraform(struct.codeguruprofiler),
        codegurureviewer: cdktf.stringToTerraform(struct.codegurureviewer),
        codepipeline: cdktf.stringToTerraform(struct.codepipeline),
        codestar: cdktf.stringToTerraform(struct.codestar),
        codestarconnections: cdktf.stringToTerraform(struct.codestarconnections),
        codestarnotifications: cdktf.stringToTerraform(struct.codestarnotifications),
        cognitoidentity: cdktf.stringToTerraform(struct.cognitoidentity),
        cognitoidentityprovider: cdktf.stringToTerraform(struct.cognitoidentityprovider),
        cognitoidp: cdktf.stringToTerraform(struct.cognitoidp),
        cognitosync: cdktf.stringToTerraform(struct.cognitosync),
        comprehend: cdktf.stringToTerraform(struct.comprehend),
        comprehendmedical: cdktf.stringToTerraform(struct.comprehendmedical),
        config: cdktf.stringToTerraform(struct.config),
        configservice: cdktf.stringToTerraform(struct.configservice),
        connect: cdktf.stringToTerraform(struct.connect),
        connectcontactlens: cdktf.stringToTerraform(struct.connectcontactlens),
        connectparticipant: cdktf.stringToTerraform(struct.connectparticipant),
        costandusagereportservice: cdktf.stringToTerraform(struct.costandusagereportservice),
        costexplorer: cdktf.stringToTerraform(struct.costexplorer),
        cur: cdktf.stringToTerraform(struct.cur),
        databasemigration: cdktf.stringToTerraform(struct.databasemigration),
        databasemigrationservice: cdktf.stringToTerraform(struct.databasemigrationservice),
        dataexchange: cdktf.stringToTerraform(struct.dataexchange),
        datapipeline: cdktf.stringToTerraform(struct.datapipeline),
        datasync: cdktf.stringToTerraform(struct.datasync),
        dax: cdktf.stringToTerraform(struct.dax),
        detective: cdktf.stringToTerraform(struct.detective),
        devicefarm: cdktf.stringToTerraform(struct.devicefarm),
        devopsguru: cdktf.stringToTerraform(struct.devopsguru),
        directconnect: cdktf.stringToTerraform(struct.directconnect),
        dlm: cdktf.stringToTerraform(struct.dlm),
        dms: cdktf.stringToTerraform(struct.dms),
        docdb: cdktf.stringToTerraform(struct.docdb),
        ds: cdktf.stringToTerraform(struct.ds),
        dynamodb: cdktf.stringToTerraform(struct.dynamodb),
        dynamodbstreams: cdktf.stringToTerraform(struct.dynamodbstreams),
        ec2: cdktf.stringToTerraform(struct.ec2),
        ec2instanceconnect: cdktf.stringToTerraform(struct.ec2Instanceconnect),
        ecr: cdktf.stringToTerraform(struct.ecr),
        ecrpublic: cdktf.stringToTerraform(struct.ecrpublic),
        ecs: cdktf.stringToTerraform(struct.ecs),
        efs: cdktf.stringToTerraform(struct.efs),
        eks: cdktf.stringToTerraform(struct.eks),
        elasticache: cdktf.stringToTerraform(struct.elasticache),
        elasticbeanstalk: cdktf.stringToTerraform(struct.elasticbeanstalk),
        elasticinference: cdktf.stringToTerraform(struct.elasticinference),
        elasticsearch: cdktf.stringToTerraform(struct.elasticsearch),
        elasticsearchservice: cdktf.stringToTerraform(struct.elasticsearchservice),
        elastictranscoder: cdktf.stringToTerraform(struct.elastictranscoder),
        elb: cdktf.stringToTerraform(struct.elb),
        elbv2: cdktf.stringToTerraform(struct.elbv2),
        emr: cdktf.stringToTerraform(struct.emr),
        emrcontainers: cdktf.stringToTerraform(struct.emrcontainers),
        es: cdktf.stringToTerraform(struct.es),
        eventbridge: cdktf.stringToTerraform(struct.eventbridge),
        events: cdktf.stringToTerraform(struct.events),
        finspace: cdktf.stringToTerraform(struct.finspace),
        finspacedata: cdktf.stringToTerraform(struct.finspacedata),
        firehose: cdktf.stringToTerraform(struct.firehose),
        fis: cdktf.stringToTerraform(struct.fis),
        fms: cdktf.stringToTerraform(struct.fms),
        forecast: cdktf.stringToTerraform(struct.forecast),
        forecastquery: cdktf.stringToTerraform(struct.forecastquery),
        forecastqueryservice: cdktf.stringToTerraform(struct.forecastqueryservice),
        forecastservice: cdktf.stringToTerraform(struct.forecastservice),
        frauddetector: cdktf.stringToTerraform(struct.frauddetector),
        fsx: cdktf.stringToTerraform(struct.fsx),
        gamelift: cdktf.stringToTerraform(struct.gamelift),
        glacier: cdktf.stringToTerraform(struct.glacier),
        globalaccelerator: cdktf.stringToTerraform(struct.globalaccelerator),
        glue: cdktf.stringToTerraform(struct.glue),
        gluedatabrew: cdktf.stringToTerraform(struct.gluedatabrew),
        greengrass: cdktf.stringToTerraform(struct.greengrass),
        greengrassv2: cdktf.stringToTerraform(struct.greengrassv2),
        groundstation: cdktf.stringToTerraform(struct.groundstation),
        guardduty: cdktf.stringToTerraform(struct.guardduty),
        health: cdktf.stringToTerraform(struct.health),
        healthlake: cdktf.stringToTerraform(struct.healthlake),
        honeycode: cdktf.stringToTerraform(struct.honeycode),
        iam: cdktf.stringToTerraform(struct.iam),
        identitystore: cdktf.stringToTerraform(struct.identitystore),
        imagebuilder: cdktf.stringToTerraform(struct.imagebuilder),
        inspector: cdktf.stringToTerraform(struct.inspector),
        iot: cdktf.stringToTerraform(struct.iot),
        iot1clickdevices: cdktf.stringToTerraform(struct.iot1Clickdevices),
        iot1clickdevicesservice: cdktf.stringToTerraform(struct.iot1Clickdevicesservice),
        iot1clickprojects: cdktf.stringToTerraform(struct.iot1Clickprojects),
        iotanalytics: cdktf.stringToTerraform(struct.iotanalytics),
        iotdataplane: cdktf.stringToTerraform(struct.iotdataplane),
        iotdeviceadvisor: cdktf.stringToTerraform(struct.iotdeviceadvisor),
        iotevents: cdktf.stringToTerraform(struct.iotevents),
        ioteventsdata: cdktf.stringToTerraform(struct.ioteventsdata),
        iotfleethub: cdktf.stringToTerraform(struct.iotfleethub),
        iotjobsdataplane: cdktf.stringToTerraform(struct.iotjobsdataplane),
        iotsecuretunneling: cdktf.stringToTerraform(struct.iotsecuretunneling),
        iotsitewise: cdktf.stringToTerraform(struct.iotsitewise),
        iotthingsgraph: cdktf.stringToTerraform(struct.iotthingsgraph),
        iotwireless: cdktf.stringToTerraform(struct.iotwireless),
        kafka: cdktf.stringToTerraform(struct.kafka),
        kafkaconnect: cdktf.stringToTerraform(struct.kafkaconnect),
        kendra: cdktf.stringToTerraform(struct.kendra),
        kinesis: cdktf.stringToTerraform(struct.kinesis),
        kinesisanalytics: cdktf.stringToTerraform(struct.kinesisanalytics),
        kinesisanalyticsv2: cdktf.stringToTerraform(struct.kinesisanalyticsv2),
        kinesisvideo: cdktf.stringToTerraform(struct.kinesisvideo),
        kinesisvideoarchivedmedia: cdktf.stringToTerraform(struct.kinesisvideoarchivedmedia),
        kinesisvideomedia: cdktf.stringToTerraform(struct.kinesisvideomedia),
        kinesisvideosignalingchannels: cdktf.stringToTerraform(struct.kinesisvideosignalingchannels),
        kms: cdktf.stringToTerraform(struct.kms),
        lakeformation: cdktf.stringToTerraform(struct.lakeformation),
        lambda: cdktf.stringToTerraform(struct.lambda),
        lexmodelbuilding: cdktf.stringToTerraform(struct.lexmodelbuilding),
        lexmodelbuildingservice: cdktf.stringToTerraform(struct.lexmodelbuildingservice),
        lexmodels: cdktf.stringToTerraform(struct.lexmodels),
        lexmodelsv2: cdktf.stringToTerraform(struct.lexmodelsv2),
        lexruntime: cdktf.stringToTerraform(struct.lexruntime),
        lexruntimeservice: cdktf.stringToTerraform(struct.lexruntimeservice),
        lexruntimev2: cdktf.stringToTerraform(struct.lexruntimev2),
        licensemanager: cdktf.stringToTerraform(struct.licensemanager),
        lightsail: cdktf.stringToTerraform(struct.lightsail),
        location: cdktf.stringToTerraform(struct.location),
        lookoutequipment: cdktf.stringToTerraform(struct.lookoutequipment),
        lookoutforvision: cdktf.stringToTerraform(struct.lookoutforvision),
        lookoutmetrics: cdktf.stringToTerraform(struct.lookoutmetrics),
        machinelearning: cdktf.stringToTerraform(struct.machinelearning),
        macie: cdktf.stringToTerraform(struct.macie),
        macie2: cdktf.stringToTerraform(struct.macie2),
        managedblockchain: cdktf.stringToTerraform(struct.managedblockchain),
        marketplacecatalog: cdktf.stringToTerraform(struct.marketplacecatalog),
        marketplacecommerceanalytics: cdktf.stringToTerraform(struct.marketplacecommerceanalytics),
        marketplaceentitlement: cdktf.stringToTerraform(struct.marketplaceentitlement),
        marketplaceentitlementservice: cdktf.stringToTerraform(struct.marketplaceentitlementservice),
        marketplacemetering: cdktf.stringToTerraform(struct.marketplacemetering),
        mediaconnect: cdktf.stringToTerraform(struct.mediaconnect),
        mediaconvert: cdktf.stringToTerraform(struct.mediaconvert),
        medialive: cdktf.stringToTerraform(struct.medialive),
        mediapackage: cdktf.stringToTerraform(struct.mediapackage),
        mediapackagevod: cdktf.stringToTerraform(struct.mediapackagevod),
        mediastore: cdktf.stringToTerraform(struct.mediastore),
        mediastoredata: cdktf.stringToTerraform(struct.mediastoredata),
        mediatailor: cdktf.stringToTerraform(struct.mediatailor),
        memorydb: cdktf.stringToTerraform(struct.memorydb),
        mgn: cdktf.stringToTerraform(struct.mgn),
        migrationhub: cdktf.stringToTerraform(struct.migrationhub),
        migrationhubconfig: cdktf.stringToTerraform(struct.migrationhubconfig),
        mobile: cdktf.stringToTerraform(struct.mobile),
        mobileanalytics: cdktf.stringToTerraform(struct.mobileanalytics),
        mq: cdktf.stringToTerraform(struct.mq),
        mturk: cdktf.stringToTerraform(struct.mturk),
        mwaa: cdktf.stringToTerraform(struct.mwaa),
        neptune: cdktf.stringToTerraform(struct.neptune),
        networkfirewall: cdktf.stringToTerraform(struct.networkfirewall),
        networkmanager: cdktf.stringToTerraform(struct.networkmanager),
        nimblestudio: cdktf.stringToTerraform(struct.nimblestudio),
        opsworks: cdktf.stringToTerraform(struct.opsworks),
        opsworkscm: cdktf.stringToTerraform(struct.opsworkscm),
        organizations: cdktf.stringToTerraform(struct.organizations),
        outposts: cdktf.stringToTerraform(struct.outposts),
        personalize: cdktf.stringToTerraform(struct.personalize),
        personalizeevents: cdktf.stringToTerraform(struct.personalizeevents),
        personalizeruntime: cdktf.stringToTerraform(struct.personalizeruntime),
        pi: cdktf.stringToTerraform(struct.pi),
        pinpoint: cdktf.stringToTerraform(struct.pinpoint),
        pinpointemail: cdktf.stringToTerraform(struct.pinpointemail),
        pinpointsmsvoice: cdktf.stringToTerraform(struct.pinpointsmsvoice),
        polly: cdktf.stringToTerraform(struct.polly),
        pricing: cdktf.stringToTerraform(struct.pricing),
        prometheus: cdktf.stringToTerraform(struct.prometheus),
        prometheusservice: cdktf.stringToTerraform(struct.prometheusservice),
        proton: cdktf.stringToTerraform(struct.proton),
        qldb: cdktf.stringToTerraform(struct.qldb),
        qldbsession: cdktf.stringToTerraform(struct.qldbsession),
        quicksight: cdktf.stringToTerraform(struct.quicksight),
        ram: cdktf.stringToTerraform(struct.ram),
        rds: cdktf.stringToTerraform(struct.rds),
        rdsdata: cdktf.stringToTerraform(struct.rdsdata),
        rdsdataservice: cdktf.stringToTerraform(struct.rdsdataservice),
        redshift: cdktf.stringToTerraform(struct.redshift),
        redshiftdata: cdktf.stringToTerraform(struct.redshiftdata),
        rekognition: cdktf.stringToTerraform(struct.rekognition),
        resourcegroups: cdktf.stringToTerraform(struct.resourcegroups),
        resourcegroupstagging: cdktf.stringToTerraform(struct.resourcegroupstagging),
        resourcegroupstaggingapi: cdktf.stringToTerraform(struct.resourcegroupstaggingapi),
        robomaker: cdktf.stringToTerraform(struct.robomaker),
        route53: cdktf.stringToTerraform(struct.route53),
        route53domains: cdktf.stringToTerraform(struct.route53Domains),
        route53recoverycontrolconfig: cdktf.stringToTerraform(struct.route53Recoverycontrolconfig),
        route53recoveryreadiness: cdktf.stringToTerraform(struct.route53Recoveryreadiness),
        route53resolver: cdktf.stringToTerraform(struct.route53Resolver),
        s3: cdktf.stringToTerraform(struct.s3),
        s3control: cdktf.stringToTerraform(struct.s3Control),
        s3outposts: cdktf.stringToTerraform(struct.s3Outposts),
        sagemaker: cdktf.stringToTerraform(struct.sagemaker),
        sagemakeredgemanager: cdktf.stringToTerraform(struct.sagemakeredgemanager),
        sagemakerfeaturestoreruntime: cdktf.stringToTerraform(struct.sagemakerfeaturestoreruntime),
        sagemakerruntime: cdktf.stringToTerraform(struct.sagemakerruntime),
        savingsplans: cdktf.stringToTerraform(struct.savingsplans),
        schemas: cdktf.stringToTerraform(struct.schemas),
        sdb: cdktf.stringToTerraform(struct.sdb),
        secretsmanager: cdktf.stringToTerraform(struct.secretsmanager),
        securityhub: cdktf.stringToTerraform(struct.securityhub),
        serverlessapplicationrepository: cdktf.stringToTerraform(struct.serverlessapplicationrepository),
        serverlessapprepo: cdktf.stringToTerraform(struct.serverlessapprepo),
        serverlessrepo: cdktf.stringToTerraform(struct.serverlessrepo),
        servicecatalog: cdktf.stringToTerraform(struct.servicecatalog),
        servicediscovery: cdktf.stringToTerraform(struct.servicediscovery),
        servicequotas: cdktf.stringToTerraform(struct.servicequotas),
        ses: cdktf.stringToTerraform(struct.ses),
        sesv2: cdktf.stringToTerraform(struct.sesv2),
        sfn: cdktf.stringToTerraform(struct.sfn),
        shield: cdktf.stringToTerraform(struct.shield),
        signer: cdktf.stringToTerraform(struct.signer),
        simpledb: cdktf.stringToTerraform(struct.simpledb),
        sms: cdktf.stringToTerraform(struct.sms),
        snowball: cdktf.stringToTerraform(struct.snowball),
        sns: cdktf.stringToTerraform(struct.sns),
        sqs: cdktf.stringToTerraform(struct.sqs),
        ssm: cdktf.stringToTerraform(struct.ssm),
        ssmcontacts: cdktf.stringToTerraform(struct.ssmcontacts),
        ssmincidents: cdktf.stringToTerraform(struct.ssmincidents),
        sso: cdktf.stringToTerraform(struct.sso),
        ssoadmin: cdktf.stringToTerraform(struct.ssoadmin),
        ssooidc: cdktf.stringToTerraform(struct.ssooidc),
        stepfunctions: cdktf.stringToTerraform(struct.stepfunctions),
        storagegateway: cdktf.stringToTerraform(struct.storagegateway),
        sts: cdktf.stringToTerraform(struct.sts),
        support: cdktf.stringToTerraform(struct.support),
        swf: cdktf.stringToTerraform(struct.swf),
        synthetics: cdktf.stringToTerraform(struct.synthetics),
        textract: cdktf.stringToTerraform(struct.textract),
        timestreamquery: cdktf.stringToTerraform(struct.timestreamquery),
        timestreamwrite: cdktf.stringToTerraform(struct.timestreamwrite),
        transcribe: cdktf.stringToTerraform(struct.transcribe),
        transcribeservice: cdktf.stringToTerraform(struct.transcribeservice),
        transcribestreaming: cdktf.stringToTerraform(struct.transcribestreaming),
        transcribestreamingservice: cdktf.stringToTerraform(struct.transcribestreamingservice),
        transfer: cdktf.stringToTerraform(struct.transfer),
        translate: cdktf.stringToTerraform(struct.translate),
        waf: cdktf.stringToTerraform(struct.waf),
        wafregional: cdktf.stringToTerraform(struct.wafregional),
        wafv2: cdktf.stringToTerraform(struct.wafv2),
        wellarchitected: cdktf.stringToTerraform(struct.wellarchitected),
        workdocs: cdktf.stringToTerraform(struct.workdocs),
        worklink: cdktf.stringToTerraform(struct.worklink),
        workmail: cdktf.stringToTerraform(struct.workmail),
        workmailmessageflow: cdktf.stringToTerraform(struct.workmailmessageflow),
        workspaces: cdktf.stringToTerraform(struct.workspaces),
        xray: cdktf.stringToTerraform(struct.xray),
    };
}
exports.awsProviderEndpointsToTerraform = awsProviderEndpointsToTerraform;
function awsProviderEndpointsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        accessanalyzer: {
            value: cdktf.stringToHclTerraform(struct.accessanalyzer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        account: {
            value: cdktf.stringToHclTerraform(struct.account),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        acm: {
            value: cdktf.stringToHclTerraform(struct.acm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        acmpca: {
            value: cdktf.stringToHclTerraform(struct.acmpca),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        alexaforbusiness: {
            value: cdktf.stringToHclTerraform(struct.alexaforbusiness),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amp: {
            value: cdktf.stringToHclTerraform(struct.amp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amplify: {
            value: cdktf.stringToHclTerraform(struct.amplify),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amplifybackend: {
            value: cdktf.stringToHclTerraform(struct.amplifybackend),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        apigateway: {
            value: cdktf.stringToHclTerraform(struct.apigateway),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        apigatewayv2: {
            value: cdktf.stringToHclTerraform(struct.apigatewayv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appautoscaling: {
            value: cdktf.stringToHclTerraform(struct.appautoscaling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appconfig: {
            value: cdktf.stringToHclTerraform(struct.appconfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appflow: {
            value: cdktf.stringToHclTerraform(struct.appflow),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appintegrations: {
            value: cdktf.stringToHclTerraform(struct.appintegrations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appintegrationsservice: {
            value: cdktf.stringToHclTerraform(struct.appintegrationsservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        applicationautoscaling: {
            value: cdktf.stringToHclTerraform(struct.applicationautoscaling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        applicationcostprofiler: {
            value: cdktf.stringToHclTerraform(struct.applicationcostprofiler),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        applicationdiscovery: {
            value: cdktf.stringToHclTerraform(struct.applicationdiscovery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        applicationdiscoveryservice: {
            value: cdktf.stringToHclTerraform(struct.applicationdiscoveryservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        applicationinsights: {
            value: cdktf.stringToHclTerraform(struct.applicationinsights),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appmesh: {
            value: cdktf.stringToHclTerraform(struct.appmesh),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appregistry: {
            value: cdktf.stringToHclTerraform(struct.appregistry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        apprunner: {
            value: cdktf.stringToHclTerraform(struct.apprunner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appstream: {
            value: cdktf.stringToHclTerraform(struct.appstream),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        appsync: {
            value: cdktf.stringToHclTerraform(struct.appsync),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        athena: {
            value: cdktf.stringToHclTerraform(struct.athena),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auditmanager: {
            value: cdktf.stringToHclTerraform(struct.auditmanager),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        augmentedairuntime: {
            value: cdktf.stringToHclTerraform(struct.augmentedairuntime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        autoscaling: {
            value: cdktf.stringToHclTerraform(struct.autoscaling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        autoscalingplans: {
            value: cdktf.stringToHclTerraform(struct.autoscalingplans),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        backup: {
            value: cdktf.stringToHclTerraform(struct.backup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        batch: {
            value: cdktf.stringToHclTerraform(struct.batch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        braket: {
            value: cdktf.stringToHclTerraform(struct.braket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        budgets: {
            value: cdktf.stringToHclTerraform(struct.budgets),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        chime: {
            value: cdktf.stringToHclTerraform(struct.chime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloud9: {
            value: cdktf.stringToHclTerraform(struct.cloud9),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudcontrol: {
            value: cdktf.stringToHclTerraform(struct.cloudcontrol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudcontrolapi: {
            value: cdktf.stringToHclTerraform(struct.cloudcontrolapi),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        clouddirectory: {
            value: cdktf.stringToHclTerraform(struct.clouddirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudformation: {
            value: cdktf.stringToHclTerraform(struct.cloudformation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudfront: {
            value: cdktf.stringToHclTerraform(struct.cloudfront),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudhsm: {
            value: cdktf.stringToHclTerraform(struct.cloudhsm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudhsmv2: {
            value: cdktf.stringToHclTerraform(struct.cloudhsmv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudsearch: {
            value: cdktf.stringToHclTerraform(struct.cloudsearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudsearchdomain: {
            value: cdktf.stringToHclTerraform(struct.cloudsearchdomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudtrail: {
            value: cdktf.stringToHclTerraform(struct.cloudtrail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudwatch: {
            value: cdktf.stringToHclTerraform(struct.cloudwatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudwatchevents: {
            value: cdktf.stringToHclTerraform(struct.cloudwatchevents),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudwatchlogs: {
            value: cdktf.stringToHclTerraform(struct.cloudwatchlogs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codeartifact: {
            value: cdktf.stringToHclTerraform(struct.codeartifact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codebuild: {
            value: cdktf.stringToHclTerraform(struct.codebuild),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codecommit: {
            value: cdktf.stringToHclTerraform(struct.codecommit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codedeploy: {
            value: cdktf.stringToHclTerraform(struct.codedeploy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codeguruprofiler: {
            value: cdktf.stringToHclTerraform(struct.codeguruprofiler),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codegurureviewer: {
            value: cdktf.stringToHclTerraform(struct.codegurureviewer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codepipeline: {
            value: cdktf.stringToHclTerraform(struct.codepipeline),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codestar: {
            value: cdktf.stringToHclTerraform(struct.codestar),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codestarconnections: {
            value: cdktf.stringToHclTerraform(struct.codestarconnections),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        codestarnotifications: {
            value: cdktf.stringToHclTerraform(struct.codestarnotifications),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cognitoidentity: {
            value: cdktf.stringToHclTerraform(struct.cognitoidentity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cognitoidentityprovider: {
            value: cdktf.stringToHclTerraform(struct.cognitoidentityprovider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cognitoidp: {
            value: cdktf.stringToHclTerraform(struct.cognitoidp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cognitosync: {
            value: cdktf.stringToHclTerraform(struct.cognitosync),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        comprehend: {
            value: cdktf.stringToHclTerraform(struct.comprehend),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        comprehendmedical: {
            value: cdktf.stringToHclTerraform(struct.comprehendmedical),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        config: {
            value: cdktf.stringToHclTerraform(struct.config),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        configservice: {
            value: cdktf.stringToHclTerraform(struct.configservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connect: {
            value: cdktf.stringToHclTerraform(struct.connect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connectcontactlens: {
            value: cdktf.stringToHclTerraform(struct.connectcontactlens),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connectparticipant: {
            value: cdktf.stringToHclTerraform(struct.connectparticipant),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        costandusagereportservice: {
            value: cdktf.stringToHclTerraform(struct.costandusagereportservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        costexplorer: {
            value: cdktf.stringToHclTerraform(struct.costexplorer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cur: {
            value: cdktf.stringToHclTerraform(struct.cur),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        databasemigration: {
            value: cdktf.stringToHclTerraform(struct.databasemigration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        databasemigrationservice: {
            value: cdktf.stringToHclTerraform(struct.databasemigrationservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataexchange: {
            value: cdktf.stringToHclTerraform(struct.dataexchange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        datapipeline: {
            value: cdktf.stringToHclTerraform(struct.datapipeline),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        datasync: {
            value: cdktf.stringToHclTerraform(struct.datasync),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dax: {
            value: cdktf.stringToHclTerraform(struct.dax),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        detective: {
            value: cdktf.stringToHclTerraform(struct.detective),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        devicefarm: {
            value: cdktf.stringToHclTerraform(struct.devicefarm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        devopsguru: {
            value: cdktf.stringToHclTerraform(struct.devopsguru),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        directconnect: {
            value: cdktf.stringToHclTerraform(struct.directconnect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dlm: {
            value: cdktf.stringToHclTerraform(struct.dlm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dms: {
            value: cdktf.stringToHclTerraform(struct.dms),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        docdb: {
            value: cdktf.stringToHclTerraform(struct.docdb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ds: {
            value: cdktf.stringToHclTerraform(struct.ds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamodb: {
            value: cdktf.stringToHclTerraform(struct.dynamodb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamodbstreams: {
            value: cdktf.stringToHclTerraform(struct.dynamodbstreams),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ec2: {
            value: cdktf.stringToHclTerraform(struct.ec2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ec2instanceconnect: {
            value: cdktf.stringToHclTerraform(struct.ec2Instanceconnect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ecr: {
            value: cdktf.stringToHclTerraform(struct.ecr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ecrpublic: {
            value: cdktf.stringToHclTerraform(struct.ecrpublic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ecs: {
            value: cdktf.stringToHclTerraform(struct.ecs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        efs: {
            value: cdktf.stringToHclTerraform(struct.efs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        eks: {
            value: cdktf.stringToHclTerraform(struct.eks),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elasticache: {
            value: cdktf.stringToHclTerraform(struct.elasticache),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elasticbeanstalk: {
            value: cdktf.stringToHclTerraform(struct.elasticbeanstalk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elasticinference: {
            value: cdktf.stringToHclTerraform(struct.elasticinference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elasticsearch: {
            value: cdktf.stringToHclTerraform(struct.elasticsearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elasticsearchservice: {
            value: cdktf.stringToHclTerraform(struct.elasticsearchservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elastictranscoder: {
            value: cdktf.stringToHclTerraform(struct.elastictranscoder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elb: {
            value: cdktf.stringToHclTerraform(struct.elb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elbv2: {
            value: cdktf.stringToHclTerraform(struct.elbv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        emr: {
            value: cdktf.stringToHclTerraform(struct.emr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        emrcontainers: {
            value: cdktf.stringToHclTerraform(struct.emrcontainers),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        es: {
            value: cdktf.stringToHclTerraform(struct.es),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        eventbridge: {
            value: cdktf.stringToHclTerraform(struct.eventbridge),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        events: {
            value: cdktf.stringToHclTerraform(struct.events),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        finspace: {
            value: cdktf.stringToHclTerraform(struct.finspace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        finspacedata: {
            value: cdktf.stringToHclTerraform(struct.finspacedata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        firehose: {
            value: cdktf.stringToHclTerraform(struct.firehose),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fis: {
            value: cdktf.stringToHclTerraform(struct.fis),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fms: {
            value: cdktf.stringToHclTerraform(struct.fms),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        forecast: {
            value: cdktf.stringToHclTerraform(struct.forecast),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        forecastquery: {
            value: cdktf.stringToHclTerraform(struct.forecastquery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        forecastqueryservice: {
            value: cdktf.stringToHclTerraform(struct.forecastqueryservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        forecastservice: {
            value: cdktf.stringToHclTerraform(struct.forecastservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        frauddetector: {
            value: cdktf.stringToHclTerraform(struct.frauddetector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fsx: {
            value: cdktf.stringToHclTerraform(struct.fsx),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gamelift: {
            value: cdktf.stringToHclTerraform(struct.gamelift),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        glacier: {
            value: cdktf.stringToHclTerraform(struct.glacier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        globalaccelerator: {
            value: cdktf.stringToHclTerraform(struct.globalaccelerator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        glue: {
            value: cdktf.stringToHclTerraform(struct.glue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gluedatabrew: {
            value: cdktf.stringToHclTerraform(struct.gluedatabrew),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        greengrass: {
            value: cdktf.stringToHclTerraform(struct.greengrass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        greengrassv2: {
            value: cdktf.stringToHclTerraform(struct.greengrassv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        groundstation: {
            value: cdktf.stringToHclTerraform(struct.groundstation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        guardduty: {
            value: cdktf.stringToHclTerraform(struct.guardduty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        health: {
            value: cdktf.stringToHclTerraform(struct.health),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        healthlake: {
            value: cdktf.stringToHclTerraform(struct.healthlake),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        honeycode: {
            value: cdktf.stringToHclTerraform(struct.honeycode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam: {
            value: cdktf.stringToHclTerraform(struct.iam),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identitystore: {
            value: cdktf.stringToHclTerraform(struct.identitystore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        imagebuilder: {
            value: cdktf.stringToHclTerraform(struct.imagebuilder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inspector: {
            value: cdktf.stringToHclTerraform(struct.inspector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iot: {
            value: cdktf.stringToHclTerraform(struct.iot),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iot1clickdevices: {
            value: cdktf.stringToHclTerraform(struct.iot1Clickdevices),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iot1clickdevicesservice: {
            value: cdktf.stringToHclTerraform(struct.iot1Clickdevicesservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iot1clickprojects: {
            value: cdktf.stringToHclTerraform(struct.iot1Clickprojects),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotanalytics: {
            value: cdktf.stringToHclTerraform(struct.iotanalytics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotdataplane: {
            value: cdktf.stringToHclTerraform(struct.iotdataplane),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotdeviceadvisor: {
            value: cdktf.stringToHclTerraform(struct.iotdeviceadvisor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotevents: {
            value: cdktf.stringToHclTerraform(struct.iotevents),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ioteventsdata: {
            value: cdktf.stringToHclTerraform(struct.ioteventsdata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotfleethub: {
            value: cdktf.stringToHclTerraform(struct.iotfleethub),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotjobsdataplane: {
            value: cdktf.stringToHclTerraform(struct.iotjobsdataplane),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotsecuretunneling: {
            value: cdktf.stringToHclTerraform(struct.iotsecuretunneling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotsitewise: {
            value: cdktf.stringToHclTerraform(struct.iotsitewise),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotthingsgraph: {
            value: cdktf.stringToHclTerraform(struct.iotthingsgraph),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iotwireless: {
            value: cdktf.stringToHclTerraform(struct.iotwireless),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kafka: {
            value: cdktf.stringToHclTerraform(struct.kafka),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kafkaconnect: {
            value: cdktf.stringToHclTerraform(struct.kafkaconnect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kendra: {
            value: cdktf.stringToHclTerraform(struct.kendra),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesis: {
            value: cdktf.stringToHclTerraform(struct.kinesis),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesisanalytics: {
            value: cdktf.stringToHclTerraform(struct.kinesisanalytics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesisanalyticsv2: {
            value: cdktf.stringToHclTerraform(struct.kinesisanalyticsv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesisvideo: {
            value: cdktf.stringToHclTerraform(struct.kinesisvideo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesisvideoarchivedmedia: {
            value: cdktf.stringToHclTerraform(struct.kinesisvideoarchivedmedia),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesisvideomedia: {
            value: cdktf.stringToHclTerraform(struct.kinesisvideomedia),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesisvideosignalingchannels: {
            value: cdktf.stringToHclTerraform(struct.kinesisvideosignalingchannels),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms: {
            value: cdktf.stringToHclTerraform(struct.kms),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lakeformation: {
            value: cdktf.stringToHclTerraform(struct.lakeformation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda: {
            value: cdktf.stringToHclTerraform(struct.lambda),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexmodelbuilding: {
            value: cdktf.stringToHclTerraform(struct.lexmodelbuilding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexmodelbuildingservice: {
            value: cdktf.stringToHclTerraform(struct.lexmodelbuildingservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexmodels: {
            value: cdktf.stringToHclTerraform(struct.lexmodels),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexmodelsv2: {
            value: cdktf.stringToHclTerraform(struct.lexmodelsv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexruntime: {
            value: cdktf.stringToHclTerraform(struct.lexruntime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexruntimeservice: {
            value: cdktf.stringToHclTerraform(struct.lexruntimeservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lexruntimev2: {
            value: cdktf.stringToHclTerraform(struct.lexruntimev2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        licensemanager: {
            value: cdktf.stringToHclTerraform(struct.licensemanager),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lightsail: {
            value: cdktf.stringToHclTerraform(struct.lightsail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location: {
            value: cdktf.stringToHclTerraform(struct.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lookoutequipment: {
            value: cdktf.stringToHclTerraform(struct.lookoutequipment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lookoutforvision: {
            value: cdktf.stringToHclTerraform(struct.lookoutforvision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lookoutmetrics: {
            value: cdktf.stringToHclTerraform(struct.lookoutmetrics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        machinelearning: {
            value: cdktf.stringToHclTerraform(struct.machinelearning),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        macie: {
            value: cdktf.stringToHclTerraform(struct.macie),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        macie2: {
            value: cdktf.stringToHclTerraform(struct.macie2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managedblockchain: {
            value: cdktf.stringToHclTerraform(struct.managedblockchain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        marketplacecatalog: {
            value: cdktf.stringToHclTerraform(struct.marketplacecatalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        marketplacecommerceanalytics: {
            value: cdktf.stringToHclTerraform(struct.marketplacecommerceanalytics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        marketplaceentitlement: {
            value: cdktf.stringToHclTerraform(struct.marketplaceentitlement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        marketplaceentitlementservice: {
            value: cdktf.stringToHclTerraform(struct.marketplaceentitlementservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        marketplacemetering: {
            value: cdktf.stringToHclTerraform(struct.marketplacemetering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediaconnect: {
            value: cdktf.stringToHclTerraform(struct.mediaconnect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediaconvert: {
            value: cdktf.stringToHclTerraform(struct.mediaconvert),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        medialive: {
            value: cdktf.stringToHclTerraform(struct.medialive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediapackage: {
            value: cdktf.stringToHclTerraform(struct.mediapackage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediapackagevod: {
            value: cdktf.stringToHclTerraform(struct.mediapackagevod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediastore: {
            value: cdktf.stringToHclTerraform(struct.mediastore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediastoredata: {
            value: cdktf.stringToHclTerraform(struct.mediastoredata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mediatailor: {
            value: cdktf.stringToHclTerraform(struct.mediatailor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memorydb: {
            value: cdktf.stringToHclTerraform(struct.memorydb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mgn: {
            value: cdktf.stringToHclTerraform(struct.mgn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        migrationhub: {
            value: cdktf.stringToHclTerraform(struct.migrationhub),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        migrationhubconfig: {
            value: cdktf.stringToHclTerraform(struct.migrationhubconfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mobile: {
            value: cdktf.stringToHclTerraform(struct.mobile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mobileanalytics: {
            value: cdktf.stringToHclTerraform(struct.mobileanalytics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mq: {
            value: cdktf.stringToHclTerraform(struct.mq),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mturk: {
            value: cdktf.stringToHclTerraform(struct.mturk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mwaa: {
            value: cdktf.stringToHclTerraform(struct.mwaa),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        neptune: {
            value: cdktf.stringToHclTerraform(struct.neptune),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        networkfirewall: {
            value: cdktf.stringToHclTerraform(struct.networkfirewall),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        networkmanager: {
            value: cdktf.stringToHclTerraform(struct.networkmanager),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nimblestudio: {
            value: cdktf.stringToHclTerraform(struct.nimblestudio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opsworks: {
            value: cdktf.stringToHclTerraform(struct.opsworks),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opsworkscm: {
            value: cdktf.stringToHclTerraform(struct.opsworkscm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizations: {
            value: cdktf.stringToHclTerraform(struct.organizations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outposts: {
            value: cdktf.stringToHclTerraform(struct.outposts),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        personalize: {
            value: cdktf.stringToHclTerraform(struct.personalize),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        personalizeevents: {
            value: cdktf.stringToHclTerraform(struct.personalizeevents),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        personalizeruntime: {
            value: cdktf.stringToHclTerraform(struct.personalizeruntime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pi: {
            value: cdktf.stringToHclTerraform(struct.pi),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pinpoint: {
            value: cdktf.stringToHclTerraform(struct.pinpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pinpointemail: {
            value: cdktf.stringToHclTerraform(struct.pinpointemail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pinpointsmsvoice: {
            value: cdktf.stringToHclTerraform(struct.pinpointsmsvoice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        polly: {
            value: cdktf.stringToHclTerraform(struct.polly),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pricing: {
            value: cdktf.stringToHclTerraform(struct.pricing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prometheus: {
            value: cdktf.stringToHclTerraform(struct.prometheus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prometheusservice: {
            value: cdktf.stringToHclTerraform(struct.prometheusservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        proton: {
            value: cdktf.stringToHclTerraform(struct.proton),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qldb: {
            value: cdktf.stringToHclTerraform(struct.qldb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qldbsession: {
            value: cdktf.stringToHclTerraform(struct.qldbsession),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quicksight: {
            value: cdktf.stringToHclTerraform(struct.quicksight),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ram: {
            value: cdktf.stringToHclTerraform(struct.ram),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rds: {
            value: cdktf.stringToHclTerraform(struct.rds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rdsdata: {
            value: cdktf.stringToHclTerraform(struct.rdsdata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rdsdataservice: {
            value: cdktf.stringToHclTerraform(struct.rdsdataservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redshift: {
            value: cdktf.stringToHclTerraform(struct.redshift),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redshiftdata: {
            value: cdktf.stringToHclTerraform(struct.redshiftdata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rekognition: {
            value: cdktf.stringToHclTerraform(struct.rekognition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resourcegroups: {
            value: cdktf.stringToHclTerraform(struct.resourcegroups),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resourcegroupstagging: {
            value: cdktf.stringToHclTerraform(struct.resourcegroupstagging),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resourcegroupstaggingapi: {
            value: cdktf.stringToHclTerraform(struct.resourcegroupstaggingapi),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        robomaker: {
            value: cdktf.stringToHclTerraform(struct.robomaker),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        route53: {
            value: cdktf.stringToHclTerraform(struct.route53),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        route53domains: {
            value: cdktf.stringToHclTerraform(struct.route53Domains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        route53recoverycontrolconfig: {
            value: cdktf.stringToHclTerraform(struct.route53Recoverycontrolconfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        route53recoveryreadiness: {
            value: cdktf.stringToHclTerraform(struct.route53Recoveryreadiness),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        route53resolver: {
            value: cdktf.stringToHclTerraform(struct.route53Resolver),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3: {
            value: cdktf.stringToHclTerraform(struct.s3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3control: {
            value: cdktf.stringToHclTerraform(struct.s3Control),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3outposts: {
            value: cdktf.stringToHclTerraform(struct.s3Outposts),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemaker: {
            value: cdktf.stringToHclTerraform(struct.sagemaker),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemakeredgemanager: {
            value: cdktf.stringToHclTerraform(struct.sagemakeredgemanager),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemakerfeaturestoreruntime: {
            value: cdktf.stringToHclTerraform(struct.sagemakerfeaturestoreruntime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sagemakerruntime: {
            value: cdktf.stringToHclTerraform(struct.sagemakerruntime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        savingsplans: {
            value: cdktf.stringToHclTerraform(struct.savingsplans),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schemas: {
            value: cdktf.stringToHclTerraform(struct.schemas),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sdb: {
            value: cdktf.stringToHclTerraform(struct.sdb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secretsmanager: {
            value: cdktf.stringToHclTerraform(struct.secretsmanager),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        securityhub: {
            value: cdktf.stringToHclTerraform(struct.securityhub),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serverlessapplicationrepository: {
            value: cdktf.stringToHclTerraform(struct.serverlessapplicationrepository),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serverlessapprepo: {
            value: cdktf.stringToHclTerraform(struct.serverlessapprepo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serverlessrepo: {
            value: cdktf.stringToHclTerraform(struct.serverlessrepo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        servicecatalog: {
            value: cdktf.stringToHclTerraform(struct.servicecatalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        servicediscovery: {
            value: cdktf.stringToHclTerraform(struct.servicediscovery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        servicequotas: {
            value: cdktf.stringToHclTerraform(struct.servicequotas),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ses: {
            value: cdktf.stringToHclTerraform(struct.ses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sesv2: {
            value: cdktf.stringToHclTerraform(struct.sesv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sfn: {
            value: cdktf.stringToHclTerraform(struct.sfn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shield: {
            value: cdktf.stringToHclTerraform(struct.shield),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        signer: {
            value: cdktf.stringToHclTerraform(struct.signer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        simpledb: {
            value: cdktf.stringToHclTerraform(struct.simpledb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sms: {
            value: cdktf.stringToHclTerraform(struct.sms),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snowball: {
            value: cdktf.stringToHclTerraform(struct.snowball),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sns: {
            value: cdktf.stringToHclTerraform(struct.sns),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sqs: {
            value: cdktf.stringToHclTerraform(struct.sqs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssm: {
            value: cdktf.stringToHclTerraform(struct.ssm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssmcontacts: {
            value: cdktf.stringToHclTerraform(struct.ssmcontacts),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssmincidents: {
            value: cdktf.stringToHclTerraform(struct.ssmincidents),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sso: {
            value: cdktf.stringToHclTerraform(struct.sso),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssoadmin: {
            value: cdktf.stringToHclTerraform(struct.ssoadmin),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssooidc: {
            value: cdktf.stringToHclTerraform(struct.ssooidc),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stepfunctions: {
            value: cdktf.stringToHclTerraform(struct.stepfunctions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storagegateway: {
            value: cdktf.stringToHclTerraform(struct.storagegateway),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sts: {
            value: cdktf.stringToHclTerraform(struct.sts),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        support: {
            value: cdktf.stringToHclTerraform(struct.support),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        swf: {
            value: cdktf.stringToHclTerraform(struct.swf),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        synthetics: {
            value: cdktf.stringToHclTerraform(struct.synthetics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        textract: {
            value: cdktf.stringToHclTerraform(struct.textract),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestreamquery: {
            value: cdktf.stringToHclTerraform(struct.timestreamquery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestreamwrite: {
            value: cdktf.stringToHclTerraform(struct.timestreamwrite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transcribe: {
            value: cdktf.stringToHclTerraform(struct.transcribe),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transcribeservice: {
            value: cdktf.stringToHclTerraform(struct.transcribeservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transcribestreaming: {
            value: cdktf.stringToHclTerraform(struct.transcribestreaming),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transcribestreamingservice: {
            value: cdktf.stringToHclTerraform(struct.transcribestreamingservice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transfer: {
            value: cdktf.stringToHclTerraform(struct.transfer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        translate: {
            value: cdktf.stringToHclTerraform(struct.translate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        waf: {
            value: cdktf.stringToHclTerraform(struct.waf),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wafregional: {
            value: cdktf.stringToHclTerraform(struct.wafregional),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wafv2: {
            value: cdktf.stringToHclTerraform(struct.wafv2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wellarchitected: {
            value: cdktf.stringToHclTerraform(struct.wellarchitected),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workdocs: {
            value: cdktf.stringToHclTerraform(struct.workdocs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        worklink: {
            value: cdktf.stringToHclTerraform(struct.worklink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workmail: {
            value: cdktf.stringToHclTerraform(struct.workmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workmailmessageflow: {
            value: cdktf.stringToHclTerraform(struct.workmailmessageflow),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workspaces: {
            value: cdktf.stringToHclTerraform(struct.workspaces),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        xray: {
            value: cdktf.stringToHclTerraform(struct.xray),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.awsProviderEndpointsToHclTerraform = awsProviderEndpointsToHclTerraform;
function awsProviderIgnoreTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.keyPrefixes),
        keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.keys),
    };
}
exports.awsProviderIgnoreTagsToTerraform = awsProviderIgnoreTagsToTerraform;
function awsProviderIgnoreTagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        key_prefixes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.keyPrefixes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        keys: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.keys),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.awsProviderIgnoreTagsToHclTerraform = awsProviderIgnoreTagsToHclTerraform;
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws}
*/
class AwsProvider extends cdktf.TerraformProvider {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AwsProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AwsProvider to import
    * @param importFromId The id of the existing AwsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AwsProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AwsProviderConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws',
            terraformGeneratorMetadata: {
                providerName: 'aws',
                providerVersion: '3.76.1',
                providerVersionConstraint: '~> 3.0'
            },
            terraformProviderSource: 'aws'
        });
        this._accessKey = config.accessKey;
        this._allowedAccountIds = config.allowedAccountIds;
        this._forbiddenAccountIds = config.forbiddenAccountIds;
        this._httpProxy = config.httpProxy;
        this._insecure = config.insecure;
        this._maxRetries = config.maxRetries;
        this._profile = config.profile;
        this._region = config.region;
        this._s3ForcePathStyle = config.s3ForcePathStyle;
        this._secretKey = config.secretKey;
        this._sharedCredentialsFile = config.sharedCredentialsFile;
        this._skipCredentialsValidation = config.skipCredentialsValidation;
        this._skipGetEc2Platforms = config.skipGetEc2Platforms;
        this._skipMetadataApiCheck = config.skipMetadataApiCheck;
        this._skipRegionValidation = config.skipRegionValidation;
        this._skipRequestingAccountId = config.skipRequestingAccountId;
        this._token = config.token;
        this._alias = config.alias;
        this._assumeRole = config.assumeRole;
        this._defaultTags = config.defaultTags;
        this._endpoints = config.endpoints;
        this._ignoreTags = config.ignoreTags;
    }
    get accessKey() {
        return this._accessKey;
    }
    set accessKey(value) {
        this._accessKey = value;
    }
    resetAccessKey() {
        this._accessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyInput() {
        return this._accessKey;
    }
    get allowedAccountIds() {
        return this._allowedAccountIds;
    }
    set allowedAccountIds(value) {
        this._allowedAccountIds = value;
    }
    resetAllowedAccountIds() {
        this._allowedAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedAccountIdsInput() {
        return this._allowedAccountIds;
    }
    get forbiddenAccountIds() {
        return this._forbiddenAccountIds;
    }
    set forbiddenAccountIds(value) {
        this._forbiddenAccountIds = value;
    }
    resetForbiddenAccountIds() {
        this._forbiddenAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forbiddenAccountIdsInput() {
        return this._forbiddenAccountIds;
    }
    get httpProxy() {
        return this._httpProxy;
    }
    set httpProxy(value) {
        this._httpProxy = value;
    }
    resetHttpProxy() {
        this._httpProxy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpProxyInput() {
        return this._httpProxy;
    }
    get insecure() {
        return this._insecure;
    }
    set insecure(value) {
        this._insecure = value;
    }
    resetInsecure() {
        this._insecure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insecureInput() {
        return this._insecure;
    }
    get maxRetries() {
        return this._maxRetries;
    }
    set maxRetries(value) {
        this._maxRetries = value;
    }
    resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxRetriesInput() {
        return this._maxRetries;
    }
    get profile() {
        return this._profile;
    }
    set profile(value) {
        this._profile = value;
    }
    resetProfile() {
        this._profile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get profileInput() {
        return this._profile;
    }
    get region() {
        return this._region;
    }
    set region(value) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    get s3ForcePathStyle() {
        return this._s3ForcePathStyle;
    }
    set s3ForcePathStyle(value) {
        this._s3ForcePathStyle = value;
    }
    resetS3ForcePathStyle() {
        this._s3ForcePathStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ForcePathStyleInput() {
        return this._s3ForcePathStyle;
    }
    get secretKey() {
        return this._secretKey;
    }
    set secretKey(value) {
        this._secretKey = value;
    }
    resetSecretKey() {
        this._secretKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretKeyInput() {
        return this._secretKey;
    }
    get sharedCredentialsFile() {
        return this._sharedCredentialsFile;
    }
    set sharedCredentialsFile(value) {
        this._sharedCredentialsFile = value;
    }
    resetSharedCredentialsFile() {
        this._sharedCredentialsFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sharedCredentialsFileInput() {
        return this._sharedCredentialsFile;
    }
    get skipCredentialsValidation() {
        return this._skipCredentialsValidation;
    }
    set skipCredentialsValidation(value) {
        this._skipCredentialsValidation = value;
    }
    resetSkipCredentialsValidation() {
        this._skipCredentialsValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipCredentialsValidationInput() {
        return this._skipCredentialsValidation;
    }
    get skipGetEc2Platforms() {
        return this._skipGetEc2Platforms;
    }
    set skipGetEc2Platforms(value) {
        this._skipGetEc2Platforms = value;
    }
    resetSkipGetEc2Platforms() {
        this._skipGetEc2Platforms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipGetEc2PlatformsInput() {
        return this._skipGetEc2Platforms;
    }
    get skipMetadataApiCheck() {
        return this._skipMetadataApiCheck;
    }
    set skipMetadataApiCheck(value) {
        this._skipMetadataApiCheck = value;
    }
    resetSkipMetadataApiCheck() {
        this._skipMetadataApiCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipMetadataApiCheckInput() {
        return this._skipMetadataApiCheck;
    }
    get skipRegionValidation() {
        return this._skipRegionValidation;
    }
    set skipRegionValidation(value) {
        this._skipRegionValidation = value;
    }
    resetSkipRegionValidation() {
        this._skipRegionValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipRegionValidationInput() {
        return this._skipRegionValidation;
    }
    get skipRequestingAccountId() {
        return this._skipRequestingAccountId;
    }
    set skipRequestingAccountId(value) {
        this._skipRequestingAccountId = value;
    }
    resetSkipRequestingAccountId() {
        this._skipRequestingAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipRequestingAccountIdInput() {
        return this._skipRequestingAccountId;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    resetToken() {
        this._token = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenInput() {
        return this._token;
    }
    get alias() {
        return this._alias;
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    get assumeRole() {
        return this._assumeRole;
    }
    set assumeRole(value) {
        this._assumeRole = value;
    }
    resetAssumeRole() {
        this._assumeRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assumeRoleInput() {
        return this._assumeRole;
    }
    get defaultTags() {
        return this._defaultTags;
    }
    set defaultTags(value) {
        this._defaultTags = value;
    }
    resetDefaultTags() {
        this._defaultTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTagsInput() {
        return this._defaultTags;
    }
    get endpoints() {
        return this._endpoints;
    }
    set endpoints(value) {
        this._endpoints = value;
    }
    resetEndpoints() {
        this._endpoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointsInput() {
        return this._endpoints;
    }
    get ignoreTags() {
        return this._ignoreTags;
    }
    set ignoreTags(value) {
        this._ignoreTags = value;
    }
    resetIgnoreTags() {
        this._ignoreTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ignoreTagsInput() {
        return this._ignoreTags;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_key: cdktf.stringToTerraform(this._accessKey),
            allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
            forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forbiddenAccountIds),
            http_proxy: cdktf.stringToTerraform(this._httpProxy),
            insecure: cdktf.booleanToTerraform(this._insecure),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            profile: cdktf.stringToTerraform(this._profile),
            region: cdktf.stringToTerraform(this._region),
            s3_force_path_style: cdktf.booleanToTerraform(this._s3ForcePathStyle),
            secret_key: cdktf.stringToTerraform(this._secretKey),
            shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
            skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
            skip_get_ec2_platforms: cdktf.booleanToTerraform(this._skipGetEc2Platforms),
            skip_metadata_api_check: cdktf.booleanToTerraform(this._skipMetadataApiCheck),
            skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
            skip_requesting_account_id: cdktf.booleanToTerraform(this._skipRequestingAccountId),
            token: cdktf.stringToTerraform(this._token),
            alias: cdktf.stringToTerraform(this._alias),
            assume_role: awsProviderAssumeRoleToTerraform(this._assumeRole),
            default_tags: awsProviderDefaultTagsToTerraform(this._defaultTags),
            endpoints: cdktf.listMapper(awsProviderEndpointsToTerraform, true)(this._endpoints),
            ignore_tags: awsProviderIgnoreTagsToTerraform(this._ignoreTags),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            access_key: {
                value: cdktf.stringToHclTerraform(this._accessKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allowed_account_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            forbidden_account_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forbiddenAccountIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            http_proxy: {
                value: cdktf.stringToHclTerraform(this._httpProxy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insecure: {
                value: cdktf.booleanToHclTerraform(this._insecure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_retries: {
                value: cdktf.numberToHclTerraform(this._maxRetries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            profile: {
                value: cdktf.stringToHclTerraform(this._profile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region: {
                value: cdktf.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_force_path_style: {
                value: cdktf.booleanToHclTerraform(this._s3ForcePathStyle),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            secret_key: {
                value: cdktf.stringToHclTerraform(this._secretKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            shared_credentials_file: {
                value: cdktf.stringToHclTerraform(this._sharedCredentialsFile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            skip_credentials_validation: {
                value: cdktf.booleanToHclTerraform(this._skipCredentialsValidation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            skip_get_ec2_platforms: {
                value: cdktf.booleanToHclTerraform(this._skipGetEc2Platforms),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            skip_metadata_api_check: {
                value: cdktf.booleanToHclTerraform(this._skipMetadataApiCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            skip_region_validation: {
                value: cdktf.booleanToHclTerraform(this._skipRegionValidation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            skip_requesting_account_id: {
                value: cdktf.booleanToHclTerraform(this._skipRequestingAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            token: {
                value: cdktf.stringToHclTerraform(this._token),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assume_role: {
                value: awsProviderAssumeRoleToHclTerraform(this._assumeRole),
                isBlock: true,
                type: "list",
                storageClassType: "AwsProviderAssumeRoleList",
            },
            default_tags: {
                value: awsProviderDefaultTagsToHclTerraform(this._defaultTags),
                isBlock: true,
                type: "list",
                storageClassType: "AwsProviderDefaultTagsList",
            },
            endpoints: {
                value: cdktf.listMapperHcl(awsProviderEndpointsToHclTerraform, true)(this._endpoints),
                isBlock: true,
                type: "set",
                storageClassType: "AwsProviderEndpointsList",
            },
            ignore_tags: {
                value: awsProviderIgnoreTagsToHclTerraform(this._ignoreTags),
                isBlock: true,
                type: "list",
                storageClassType: "AwsProviderIgnoreTagsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AwsProvider = AwsProvider;
_a = JSII_RTTI_SYMBOL_1;
AwsProvider[_a] = { fqn: "@cdktf/aws-cdk.provider.AwsProvider", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AwsProvider.tfResourceType = "aws";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Byb3ZpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBa00vQixTQUFnQixnQ0FBZ0MsQ0FBQyxNQUE4QjtJQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNqRixRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDN0QsbUJBQW1CLEVBQUUs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M0I7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7WUFDaEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7WUFDakQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxlQUFlLEVBQUU7WUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7WUFDMUQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7WUFDekQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7WUFDekQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFD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QUFRO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3RELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxv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QUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1lBQy9DLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3ZELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3ZELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FB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ZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7WUFDcEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxlQUFlLEVBQUU7WUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7WUFDMUQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxjQUFj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QUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7WUFDakQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7WUFDakQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7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QyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQzlELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLDRCQUE0QjthQUMvQztZQUNELFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNyRixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSwwQkFBMEI7YUFDN0M7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLDJCQUEyQjthQUM5QztTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBNWtCSCxrQ0E2a0JDOzs7QUEza0JDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csMEJBQWMsR0FBRyxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXdzUHJvdmlkZXJDb25maWcge1xuICAvKipcbiAgKiBUaGUgYWNjZXNzIGtleSBmb3IgQVBJIG9wZXJhdGlvbnMuIFlvdSBjYW4gcmV0cmlldmUgdGhpc1xuICAqIGZyb20gdGhlICdTZWN1cml0eSAmIENyZWRlbnRpYWxzJyBzZWN0aW9uIG9mIHRoZSBBV1MgY29uc29sZS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYWNjZXNzX2tleSBBd3NQcm92aWRlciNhY2Nlc3Nfa2V5fVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NLZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYWxsb3dlZF9hY2NvdW50X2lkcyBBd3NQcm92aWRlciNhbGxvd2VkX2FjY291bnRfaWRzfVxuICAqL1xuICByZWFkb25seSBhbGxvd2VkQWNjb3VudElkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2ZvcmJpZGRlbl9hY2NvdW50X2lkcyBBd3NQcm92aWRlciNmb3JiaWRkZW5fYWNjb3VudF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IGZvcmJpZGRlbkFjY291bnRJZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogVGhlIGFkZHJlc3Mgb2YgYW4gSFRUUCBwcm94eSB0byB1c2Ugd2hlbiBhY2Nlc3NpbmcgdGhlIEFXUyBBUEkuIENhbiBhbHNvIGJlIGNvbmZpZ3VyZWQgdXNpbmcgdGhlIGBIVFRQX1BST1hZYCBvciBgSFRUUFNfUFJPWFlgIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaHR0cF9wcm94eSBBd3NQcm92aWRlciNodHRwX3Byb3h5fVxuICAqL1xuICByZWFkb25seSBodHRwUHJveHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEV4cGxpY2l0bHkgYWxsb3cgdGhlIHByb3ZpZGVyIHRvIHBlcmZvcm0gXCJpbnNlY3VyZVwiIFNTTCByZXF1ZXN0cy4gSWYgb21pdHRlZCwgZGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2luc2VjdXJlIEF3c1Byb3ZpZGVyI2luc2VjdXJlfVxuICAqL1xuICByZWFkb25seSBpbnNlY3VyZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIGFuIEFXUyBBUEkgcmVxdWVzdCBpc1xuICAqIGJlaW5nIGV4ZWN1dGVkLiBJZiB0aGUgQVBJIHJlcXVlc3Qgc3RpbGwgZmFpbHMsIGFuIGVycm9yIGlzXG4gICogdGhyb3duLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtYXhfcmV0cmllcyBBd3NQcm92aWRlciNtYXhfcmV0cmllc31cbiAgKi9cbiAgcmVhZG9ubHkgbWF4UmV0cmllcz86IG51bWJlcjtcbiAgLyoqXG4gICogVGhlIHByb2ZpbGUgZm9yIEFQSSBvcGVyYXRpb25zLiBJZiBub3Qgc2V0LCB0aGUgZGVmYXVsdCBwcm9maWxlXG4gICogY3JlYXRlZCB3aXRoIGBhd3MgY29uZmlndXJlYCB3aWxsIGJlIHVzZWQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3Byb2ZpbGUgQXdzUHJvdmlkZXIjcHJvZmlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvZmlsZT86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHJlZ2lvbiB3aGVyZSBBV1Mgb3BlcmF0aW9ucyB3aWxsIHRha2UgcGxhY2UuIEV4YW1wbGVzXG4gICogYXJlIHVzLWVhc3QtMSwgdXMtd2VzdC0yLCBldGMuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3JlZ2lvbiBBd3NQcm92aWRlciNyZWdpb259XG4gICovXG4gIHJlYWRvbmx5IHJlZ2lvbjogc3RyaW5nO1xuICAvKipcbiAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGZvcmNlIHRoZSByZXF1ZXN0IHRvIHVzZSBwYXRoLXN0eWxlIGFkZHJlc3NpbmcsXG4gICogaS5lLiwgaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vQlVDS0VUL0tFWS4gQnkgZGVmYXVsdCwgdGhlIFMzIGNsaWVudCB3aWxsXG4gICogdXNlIHZpcnR1YWwgaG9zdGVkIGJ1Y2tldCBhZGRyZXNzaW5nIHdoZW4gcG9zc2libGVcbiAgKiAoaHR0cDovL0JVQ0tFVC5zMy5hbWF6b25hd3MuY29tL0tFWSkuIFNwZWNpZmljIHRvIHRoZSBBbWF6b24gUzMgc2VydmljZS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjczNfZm9yY2VfcGF0aF9zdHlsZSBBd3NQcm92aWRlciNzM19mb3JjZV9wYXRoX3N0eWxlfVxuICAqL1xuICByZWFkb25seSBzM0ZvcmNlUGF0aFN0eWxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBUaGUgc2VjcmV0IGtleSBmb3IgQVBJIG9wZXJhdGlvbnMuIFlvdSBjYW4gcmV0cmlldmUgdGhpc1xuICAqIGZyb20gdGhlICdTZWN1cml0eSAmIENyZWRlbnRpYWxzJyBzZWN0aW9uIG9mIHRoZSBBV1MgY29uc29sZS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2VjcmV0X2tleSBBd3NQcm92aWRlciNzZWNyZXRfa2V5fVxuICAqL1xuICByZWFkb25seSBzZWNyZXRLZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBwYXRoIHRvIHRoZSBzaGFyZWQgY3JlZGVudGlhbHMgZmlsZS4gSWYgbm90IHNldFxuICAqIHRoaXMgZGVmYXVsdHMgdG8gfi8uYXdzL2NyZWRlbnRpYWxzLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzaGFyZWRfY3JlZGVudGlhbHNfZmlsZSBBd3NQcm92aWRlciNzaGFyZWRfY3JlZGVudGlhbHNfZmlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2hhcmVkQ3JlZGVudGlhbHNGaWxlPzogc3RyaW5nO1xuICAvKipcbiAgKiBTa2lwIHRoZSBjcmVkZW50aWFscyB2YWxpZGF0aW9uIHZpYSBTVFMgQVBJLiBVc2VkIGZvciBBV1MgQVBJIGltcGxlbWVudGF0aW9ucyB0aGF0IGRvIG5vdCBoYXZlIFNUUyBhdmFpbGFibGUvaW1wbGVtZW50ZWQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NraXBfY3JlZGVudGlhbHNfdmFsaWRhdGlvbiBBd3NQcm92aWRlciNza2lwX2NyZWRlbnRpYWxzX3ZhbGlkYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHNraXBDcmVkZW50aWFsc1ZhbGlkYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFNraXAgZ2V0dGluZyB0aGUgc3VwcG9ydGVkIEVDMiBwbGF0Zm9ybXMuIFVzZWQgYnkgdXNlcnMgdGhhdCBkb24ndCBoYXZlIGVjMjpEZXNjcmliZUFjY291bnRBdHRyaWJ1dGVzIHBlcm1pc3Npb25zLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNza2lwX2dldF9lYzJfcGxhdGZvcm1zIEF3c1Byb3ZpZGVyI3NraXBfZ2V0X2VjMl9wbGF0Zm9ybXN9XG4gICovXG4gIHJlYWRvbmx5IHNraXBHZXRFYzJQbGF0Zm9ybXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2tpcF9tZXRhZGF0YV9hcGlfY2hlY2sgQXdzUHJvdmlkZXIjc2tpcF9tZXRhZGF0YV9hcGlfY2hlY2t9XG4gICovXG4gIHJlYWRvbmx5IHNraXBNZXRhZGF0YUFwaUNoZWNrPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBTa2lwIHN0YXRpYyB2YWxpZGF0aW9uIG9mIHJlZ2lvbiBuYW1lLiBVc2VkIGJ5IHVzZXJzIG9mIGFsdGVybmF0aXZlIEFXUy1saWtlIEFQSXMgb3IgdXNlcnMgdy8gYWNjZXNzIHRvIHJlZ2lvbnMgdGhhdCBhcmUgbm90IHB1YmxpYyAoeWV0KS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2tpcF9yZWdpb25fdmFsaWRhdGlvbiBBd3NQcm92aWRlciNza2lwX3JlZ2lvbl92YWxpZGF0aW9ufVxuICAqL1xuICByZWFkb25seSBza2lwUmVnaW9uVmFsaWRhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogU2tpcCByZXF1ZXN0aW5nIHRoZSBhY2NvdW50IElELiBVc2VkIGZvciBBV1MgQVBJIGltcGxlbWVudGF0aW9ucyB0aGF0IGRvIG5vdCBoYXZlIElBTS9TVFMgQVBJIGFuZC9vciBtZXRhZGF0YSBBUEkuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NraXBfcmVxdWVzdGluZ19hY2NvdW50X2lkIEF3c1Byb3ZpZGVyI3NraXBfcmVxdWVzdGluZ19hY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBza2lwUmVxdWVzdGluZ0FjY291bnRJZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogc2Vzc2lvbiB0b2tlbi4gQSBzZXNzaW9uIHRva2VuIGlzIG9ubHkgcmVxdWlyZWQgaWYgeW91IGFyZVxuICAqIHVzaW5nIHRlbXBvcmFyeSBzZWN1cml0eSBjcmVkZW50aWFscy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjdG9rZW4gQXdzUHJvdmlkZXIjdG9rZW59XG4gICovXG4gIHJlYWRvbmx5IHRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgKiBBbGlhcyBuYW1lXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FsaWFzIEF3c1Byb3ZpZGVyI2FsaWFzfVxuICAqL1xuICByZWFkb25seSBhbGlhcz86IHN0cmluZztcbiAgLyoqXG4gICogYXNzdW1lX3JvbGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXNzdW1lX3JvbGUgQXdzUHJvdmlkZXIjYXNzdW1lX3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IGFzc3VtZVJvbGU/OiBBd3NQcm92aWRlckFzc3VtZVJvbGU7XG4gIC8qKlxuICAqIGRlZmF1bHRfdGFncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNkZWZhdWx0X3RhZ3MgQXdzUHJvdmlkZXIjZGVmYXVsdF90YWdzfVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0VGFncz86IEF3c1Byb3ZpZGVyRGVmYXVsdFRhZ3M7XG4gIC8qKlxuICAqIGVuZHBvaW50cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNlbmRwb2ludHMgQXdzUHJvdmlkZXIjZW5kcG9pbnRzfVxuICAqL1xuICByZWFkb25seSBlbmRwb2ludHM/OiBBd3NQcm92aWRlckVuZHBvaW50c1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGlnbm9yZV90YWdzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lnbm9yZV90YWdzIEF3c1Byb3ZpZGVyI2lnbm9yZV90YWdzfVxuICAqL1xuICByZWFkb25seSBpZ25vcmVUYWdzPzogQXdzUHJvdmlkZXJJZ25vcmVUYWdzO1xufVxuZXhwb3J0IGludGVyZmFjZSBBd3NQcm92aWRlckFzc3VtZVJvbGUge1xuICAvKipcbiAgKiBUaGUgZHVyYXRpb24sIGluIHNlY29uZHMsIG9mIHRoZSByb2xlIHNlc3Npb24uXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2R1cmF0aW9uX3NlY29uZHMgQXdzUHJvdmlkZXIjZHVyYXRpb25fc2Vjb25kc31cbiAgKi9cbiAgcmVhZG9ubHkgZHVyYXRpb25TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIHRoYXQgbWlnaHQgYmUgcmVxdWlyZWQgd2hlbiB5b3UgYXNzdW1lIGEgcm9sZSBpbiBhbm90aGVyIGFjY291bnQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2V4dGVybmFsX2lkIEF3c1Byb3ZpZGVyI2V4dGVybmFsX2lkfVxuICAqL1xuICByZWFkb25seSBleHRlcm5hbElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBJQU0gUG9saWN5IEpTT04gZGVzY3JpYmluZyBmdXJ0aGVyIHJlc3RyaWN0aW5nIHBlcm1pc3Npb25zIGZvciB0aGUgSUFNIFJvbGUgYmVpbmcgYXNzdW1lZC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcG9saWN5IEF3c1Byb3ZpZGVyI3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9saWN5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBBbWF6b24gUmVzb3VyY2UgTmFtZXMgKEFSTnMpIG9mIElBTSBQb2xpY2llcyBkZXNjcmliaW5nIGZ1cnRoZXIgcmVzdHJpY3RpbmcgcGVybWlzc2lvbnMgZm9yIHRoZSBJQU0gUm9sZSBiZWluZyBhc3N1bWVkLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNwb2xpY3lfYXJucyBBd3NQcm92aWRlciNwb2xpY3lfYXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgcG9saWN5QXJucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBBbWF6b24gUmVzb3VyY2UgTmFtZSBvZiBhbiBJQU0gUm9sZSB0byBhc3N1bWUgcHJpb3IgdG8gbWFraW5nIEFQSSBjYWxscy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjcm9sZV9hcm4gQXdzUHJvdmlkZXIjcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEFuIGlkZW50aWZpZXIgZm9yIHRoZSBhc3N1bWVkIHJvbGUgc2Vzc2lvbi5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2Vzc2lvbl9uYW1lIEF3c1Byb3ZpZGVyI3Nlc3Npb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2Vzc2lvbk5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEFzc3VtZSByb2xlIHNlc3Npb24gdGFncy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjdGFncyBBd3NQcm92aWRlciN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogQXNzdW1lIHJvbGUgc2Vzc2lvbiB0YWcga2V5cyB0byBwYXNzIHRvIGFueSBzdWJzZXF1ZW50IHNlc3Npb25zLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN0cmFuc2l0aXZlX3RhZ19rZXlzIEF3c1Byb3ZpZGVyI3RyYW5zaXRpdmVfdGFnX2tleXN9XG4gICovXG4gIHJlYWRvbmx5IHRyYW5zaXRpdmVUYWdLZXlzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhd3NQcm92aWRlckFzc3VtZVJvbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBd3NQcm92aWRlckFzc3VtZVJvbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZHVyYXRpb25fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kdXJhdGlvblNlY29uZHMpLFxuICAgIGV4dGVybmFsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4dGVybmFsSWQpLFxuICAgIHBvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb2xpY3kpLFxuICAgIHBvbGljeV9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5wb2xpY3lBcm5zKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICBzZXNzaW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2Vzc2lvbk5hbWUpLFxuICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gICAgdHJhbnNpdGl2ZV90YWdfa2V5czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudHJhbnNpdGl2ZVRhZ0tleXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF3c1Byb3ZpZGVyQXNzdW1lUm9sZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF3c1Byb3ZpZGVyQXNzdW1lUm9sZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZHVyYXRpb25fc2Vjb25kczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZHVyYXRpb25TZWNvbmRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBleHRlcm5hbF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZXh0ZXJuYWxJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wb2xpY3kpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBvbGljeV9hcm5zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEucG9saWN5QXJucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIHJvbGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzZXNzaW9uX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNlc3Npb25OYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0YWdzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgICB0cmFuc2l0aXZlX3RhZ19rZXlzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudHJhbnNpdGl2ZVRhZ0tleXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBd3NQcm92aWRlckRlZmF1bHRUYWdzIHtcbiAgLyoqXG4gICogUmVzb3VyY2UgdGFncyB0byBkZWZhdWx0IGFjcm9zcyBhbGwgcmVzb3VyY2VzXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3RhZ3MgQXdzUHJvdmlkZXIjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhd3NQcm92aWRlckRlZmF1bHRUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogQXdzUHJvdmlkZXJEZWZhdWx0VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF3c1Byb3ZpZGVyRGVmYXVsdFRhZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBd3NQcm92aWRlckRlZmF1bHRUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0YWdzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBd3NQcm92aWRlckVuZHBvaW50cyB7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FjY2Vzc2FuYWx5emVyIEF3c1Byb3ZpZGVyI2FjY2Vzc2FuYWx5emVyfVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NhbmFseXplcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYWNjb3VudCBBd3NQcm92aWRlciNhY2NvdW50fVxuICAqL1xuICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhY20gQXdzUHJvdmlkZXIjYWNtfVxuICAqL1xuICByZWFkb25seSBhY20/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FjbXBjYSBBd3NQcm92aWRlciNhY21wY2F9XG4gICovXG4gIHJlYWRvbmx5IGFjbXBjYT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYWxleGFmb3JidXNpbmVzcyBBd3NQcm92aWRlciNhbGV4YWZvcmJ1c2luZXNzfVxuICAqL1xuICByZWFkb25seSBhbGV4YWZvcmJ1c2luZXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhbXAgQXdzUHJvdmlkZXIjYW1wfVxuICAqL1xuICByZWFkb25seSBhbXA/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FtcGxpZnkgQXdzUHJvdmlkZXIjYW1wbGlmeX1cbiAgKi9cbiAgcmVhZG9ubHkgYW1wbGlmeT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYW1wbGlmeWJhY2tlbmQgQXdzUHJvdmlkZXIjYW1wbGlmeWJhY2tlbmR9XG4gICovXG4gIHJlYWRvbmx5IGFtcGxpZnliYWNrZW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhcGlnYXRld2F5IEF3c1Byb3ZpZGVyI2FwaWdhdGV3YXl9XG4gICovXG4gIHJlYWRvbmx5IGFwaWdhdGV3YXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FwaWdhdGV3YXl2MiBBd3NQcm92aWRlciNhcGlnYXRld2F5djJ9XG4gICovXG4gIHJlYWRvbmx5IGFwaWdhdGV3YXl2Mj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXBwYXV0b3NjYWxpbmcgQXdzUHJvdmlkZXIjYXBwYXV0b3NjYWxpbmd9XG4gICovXG4gIHJlYWRvbmx5IGFwcGF1dG9zY2FsaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhcHBjb25maWcgQXdzUHJvdmlkZXIjYXBwY29uZmlnfVxuICAqL1xuICByZWFkb25seSBhcHBjb25maWc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FwcGZsb3cgQXdzUHJvdmlkZXIjYXBwZmxvd31cbiAgKi9cbiAgcmVhZG9ubHkgYXBwZmxvdz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXBwaW50ZWdyYXRpb25zIEF3c1Byb3ZpZGVyI2FwcGludGVncmF0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYXBwaW50ZWdyYXRpb25zPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhcHBpbnRlZ3JhdGlvbnNzZXJ2aWNlIEF3c1Byb3ZpZGVyI2FwcGludGVncmF0aW9uc3NlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IGFwcGludGVncmF0aW9uc3NlcnZpY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FwcGxpY2F0aW9uYXV0b3NjYWxpbmcgQXdzUHJvdmlkZXIjYXBwbGljYXRpb25hdXRvc2NhbGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25hdXRvc2NhbGluZz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXBwbGljYXRpb25jb3N0cHJvZmlsZXIgQXdzUHJvdmlkZXIjYXBwbGljYXRpb25jb3N0cHJvZmlsZXJ9XG4gICovXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uY29zdHByb2ZpbGVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhcHBsaWNhdGlvbmRpc2NvdmVyeSBBd3NQcm92aWRlciNhcHBsaWNhdGlvbmRpc2NvdmVyeX1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25kaXNjb3Zlcnk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FwcGxpY2F0aW9uZGlzY292ZXJ5c2VydmljZSBBd3NQcm92aWRlciNhcHBsaWNhdGlvbmRpc2NvdmVyeXNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uZGlzY292ZXJ5c2VydmljZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXBwbGljYXRpb25pbnNpZ2h0cyBBd3NQcm92aWRlciNhcHBsaWNhdGlvbmluc2lnaHRzfVxuICAqL1xuICByZWFkb25seSBhcHBsaWNhdGlvbmluc2lnaHRzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhcHBtZXNoIEF3c1Byb3ZpZGVyI2FwcG1lc2h9XG4gICovXG4gIHJlYWRvbmx5IGFwcG1lc2g/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FwcHJlZ2lzdHJ5IEF3c1Byb3ZpZGVyI2FwcHJlZ2lzdHJ5fVxuICAqL1xuICByZWFkb25seSBhcHByZWdpc3RyeT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXBwcnVubmVyIEF3c1Byb3ZpZGVyI2FwcHJ1bm5lcn1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwcnVubmVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhcHBzdHJlYW0gQXdzUHJvdmlkZXIjYXBwc3RyZWFtfVxuICAqL1xuICByZWFkb25seSBhcHBzdHJlYW0/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2FwcHN5bmMgQXdzUHJvdmlkZXIjYXBwc3luY31cbiAgKi9cbiAgcmVhZG9ubHkgYXBwc3luYz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXRoZW5hIEF3c1Byb3ZpZGVyI2F0aGVuYX1cbiAgKi9cbiAgcmVhZG9ubHkgYXRoZW5hPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhdWRpdG1hbmFnZXIgQXdzUHJvdmlkZXIjYXVkaXRtYW5hZ2VyfVxuICAqL1xuICByZWFkb25seSBhdWRpdG1hbmFnZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2F1Z21lbnRlZGFpcnVudGltZSBBd3NQcm92aWRlciNhdWdtZW50ZWRhaXJ1bnRpbWV9XG4gICovXG4gIHJlYWRvbmx5IGF1Z21lbnRlZGFpcnVudGltZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYXV0b3NjYWxpbmcgQXdzUHJvdmlkZXIjYXV0b3NjYWxpbmd9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9zY2FsaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNhdXRvc2NhbGluZ3BsYW5zIEF3c1Byb3ZpZGVyI2F1dG9zY2FsaW5ncGxhbnN9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9zY2FsaW5ncGxhbnM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2JhY2t1cCBBd3NQcm92aWRlciNiYWNrdXB9XG4gICovXG4gIHJlYWRvbmx5IGJhY2t1cD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjYmF0Y2ggQXdzUHJvdmlkZXIjYmF0Y2h9XG4gICovXG4gIHJlYWRvbmx5IGJhdGNoPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNicmFrZXQgQXdzUHJvdmlkZXIjYnJha2V0fVxuICAqL1xuICByZWFkb25seSBicmFrZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2J1ZGdldHMgQXdzUHJvdmlkZXIjYnVkZ2V0c31cbiAgKi9cbiAgcmVhZG9ubHkgYnVkZ2V0cz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY2hpbWUgQXdzUHJvdmlkZXIjY2hpbWV9XG4gICovXG4gIHJlYWRvbmx5IGNoaW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjbG91ZDkgQXdzUHJvdmlkZXIjY2xvdWQ5fVxuICAqL1xuICByZWFkb25seSBjbG91ZDk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Nsb3VkY29udHJvbCBBd3NQcm92aWRlciNjbG91ZGNvbnRyb2x9XG4gICovXG4gIHJlYWRvbmx5IGNsb3VkY29udHJvbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY2xvdWRjb250cm9sYXBpIEF3c1Byb3ZpZGVyI2Nsb3VkY29udHJvbGFwaX1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWRjb250cm9sYXBpPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjbG91ZGRpcmVjdG9yeSBBd3NQcm92aWRlciNjbG91ZGRpcmVjdG9yeX1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWRkaXJlY3Rvcnk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Nsb3VkZm9ybWF0aW9uIEF3c1Byb3ZpZGVyI2Nsb3VkZm9ybWF0aW9ufVxuICAqL1xuICByZWFkb25seSBjbG91ZGZvcm1hdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY2xvdWRmcm9udCBBd3NQcm92aWRlciNjbG91ZGZyb250fVxuICAqL1xuICByZWFkb25seSBjbG91ZGZyb250Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjbG91ZGhzbSBBd3NQcm92aWRlciNjbG91ZGhzbX1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWRoc20/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Nsb3VkaHNtdjIgQXdzUHJvdmlkZXIjY2xvdWRoc212Mn1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWRoc212Mj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY2xvdWRzZWFyY2ggQXdzUHJvdmlkZXIjY2xvdWRzZWFyY2h9XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkc2VhcmNoPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjbG91ZHNlYXJjaGRvbWFpbiBBd3NQcm92aWRlciNjbG91ZHNlYXJjaGRvbWFpbn1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWRzZWFyY2hkb21haW4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Nsb3VkdHJhaWwgQXdzUHJvdmlkZXIjY2xvdWR0cmFpbH1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWR0cmFpbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY2xvdWR3YXRjaCBBd3NQcm92aWRlciNjbG91ZHdhdGNofVxuICAqL1xuICByZWFkb25seSBjbG91ZHdhdGNoPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjbG91ZHdhdGNoZXZlbnRzIEF3c1Byb3ZpZGVyI2Nsb3Vkd2F0Y2hldmVudHN9XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hldmVudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Nsb3Vkd2F0Y2hsb2dzIEF3c1Byb3ZpZGVyI2Nsb3Vkd2F0Y2hsb2dzfVxuICAqL1xuICByZWFkb25seSBjbG91ZHdhdGNobG9ncz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29kZWFydGlmYWN0IEF3c1Byb3ZpZGVyI2NvZGVhcnRpZmFjdH1cbiAgKi9cbiAgcmVhZG9ubHkgY29kZWFydGlmYWN0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb2RlYnVpbGQgQXdzUHJvdmlkZXIjY29kZWJ1aWxkfVxuICAqL1xuICByZWFkb25seSBjb2RlYnVpbGQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2NvZGVjb21taXQgQXdzUHJvdmlkZXIjY29kZWNvbW1pdH1cbiAgKi9cbiAgcmVhZG9ubHkgY29kZWNvbW1pdD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29kZWRlcGxveSBBd3NQcm92aWRlciNjb2RlZGVwbG95fVxuICAqL1xuICByZWFkb25seSBjb2RlZGVwbG95Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb2RlZ3VydXByb2ZpbGVyIEF3c1Byb3ZpZGVyI2NvZGVndXJ1cHJvZmlsZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNvZGVndXJ1cHJvZmlsZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2NvZGVndXJ1cmV2aWV3ZXIgQXdzUHJvdmlkZXIjY29kZWd1cnVyZXZpZXdlcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29kZWd1cnVyZXZpZXdlcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29kZXBpcGVsaW5lIEF3c1Byb3ZpZGVyI2NvZGVwaXBlbGluZX1cbiAgKi9cbiAgcmVhZG9ubHkgY29kZXBpcGVsaW5lPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb2Rlc3RhciBBd3NQcm92aWRlciNjb2Rlc3Rhcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29kZXN0YXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2NvZGVzdGFyY29ubmVjdGlvbnMgQXdzUHJvdmlkZXIjY29kZXN0YXJjb25uZWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgY29kZXN0YXJjb25uZWN0aW9ucz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29kZXN0YXJub3RpZmljYXRpb25zIEF3c1Byb3ZpZGVyI2NvZGVzdGFybm90aWZpY2F0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgY29kZXN0YXJub3RpZmljYXRpb25zPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb2duaXRvaWRlbnRpdHkgQXdzUHJvdmlkZXIjY29nbml0b2lkZW50aXR5fVxuICAqL1xuICByZWFkb25seSBjb2duaXRvaWRlbnRpdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2NvZ25pdG9pZGVudGl0eXByb3ZpZGVyIEF3c1Byb3ZpZGVyI2NvZ25pdG9pZGVudGl0eXByb3ZpZGVyfVxuICAqL1xuICByZWFkb25seSBjb2duaXRvaWRlbnRpdHlwcm92aWRlcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29nbml0b2lkcCBBd3NQcm92aWRlciNjb2duaXRvaWRwfVxuICAqL1xuICByZWFkb25seSBjb2duaXRvaWRwPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb2duaXRvc3luYyBBd3NQcm92aWRlciNjb2duaXRvc3luY31cbiAgKi9cbiAgcmVhZG9ubHkgY29nbml0b3N5bmM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2NvbXByZWhlbmQgQXdzUHJvdmlkZXIjY29tcHJlaGVuZH1cbiAgKi9cbiAgcmVhZG9ubHkgY29tcHJlaGVuZD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29tcHJlaGVuZG1lZGljYWwgQXdzUHJvdmlkZXIjY29tcHJlaGVuZG1lZGljYWx9XG4gICovXG4gIHJlYWRvbmx5IGNvbXByZWhlbmRtZWRpY2FsPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb25maWcgQXdzUHJvdmlkZXIjY29uZmlnfVxuICAqL1xuICByZWFkb25seSBjb25maWc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2NvbmZpZ3NlcnZpY2UgQXdzUHJvdmlkZXIjY29uZmlnc2VydmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZmlnc2VydmljZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29ubmVjdCBBd3NQcm92aWRlciNjb25uZWN0fVxuICAqL1xuICByZWFkb25seSBjb25uZWN0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb25uZWN0Y29udGFjdGxlbnMgQXdzUHJvdmlkZXIjY29ubmVjdGNvbnRhY3RsZW5zfVxuICAqL1xuICByZWFkb25seSBjb25uZWN0Y29udGFjdGxlbnM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Nvbm5lY3RwYXJ0aWNpcGFudCBBd3NQcm92aWRlciNjb25uZWN0cGFydGljaXBhbnR9XG4gICovXG4gIHJlYWRvbmx5IGNvbm5lY3RwYXJ0aWNpcGFudD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjY29zdGFuZHVzYWdlcmVwb3J0c2VydmljZSBBd3NQcm92aWRlciNjb3N0YW5kdXNhZ2VyZXBvcnRzZXJ2aWNlfVxuICAqL1xuICByZWFkb25seSBjb3N0YW5kdXNhZ2VyZXBvcnRzZXJ2aWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNjb3N0ZXhwbG9yZXIgQXdzUHJvdmlkZXIjY29zdGV4cGxvcmVyfVxuICAqL1xuICByZWFkb25seSBjb3N0ZXhwbG9yZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2N1ciBBd3NQcm92aWRlciNjdXJ9XG4gICovXG4gIHJlYWRvbmx5IGN1cj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZGF0YWJhc2VtaWdyYXRpb24gQXdzUHJvdmlkZXIjZGF0YWJhc2VtaWdyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRhdGFiYXNlbWlncmF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNkYXRhYmFzZW1pZ3JhdGlvbnNlcnZpY2UgQXdzUHJvdmlkZXIjZGF0YWJhc2VtaWdyYXRpb25zZXJ2aWNlfVxuICAqL1xuICByZWFkb25seSBkYXRhYmFzZW1pZ3JhdGlvbnNlcnZpY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2RhdGFleGNoYW5nZSBBd3NQcm92aWRlciNkYXRhZXhjaGFuZ2V9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFleGNoYW5nZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZGF0YXBpcGVsaW5lIEF3c1Byb3ZpZGVyI2RhdGFwaXBlbGluZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YXBpcGVsaW5lPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNkYXRhc3luYyBBd3NQcm92aWRlciNkYXRhc3luY31cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YXN5bmM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2RheCBBd3NQcm92aWRlciNkYXh9XG4gICovXG4gIHJlYWRvbmx5IGRheD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZGV0ZWN0aXZlIEF3c1Byb3ZpZGVyI2RldGVjdGl2ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGV0ZWN0aXZlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNkZXZpY2VmYXJtIEF3c1Byb3ZpZGVyI2RldmljZWZhcm19XG4gICovXG4gIHJlYWRvbmx5IGRldmljZWZhcm0/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2Rldm9wc2d1cnUgQXdzUHJvdmlkZXIjZGV2b3BzZ3VydX1cbiAgKi9cbiAgcmVhZG9ubHkgZGV2b3BzZ3VydT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZGlyZWN0Y29ubmVjdCBBd3NQcm92aWRlciNkaXJlY3Rjb25uZWN0fVxuICAqL1xuICByZWFkb25seSBkaXJlY3Rjb25uZWN0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNkbG0gQXdzUHJvdmlkZXIjZGxtfVxuICAqL1xuICByZWFkb25seSBkbG0/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2RtcyBBd3NQcm92aWRlciNkbXN9XG4gICovXG4gIHJlYWRvbmx5IGRtcz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZG9jZGIgQXdzUHJvdmlkZXIjZG9jZGJ9XG4gICovXG4gIHJlYWRvbmx5IGRvY2RiPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNkcyBBd3NQcm92aWRlciNkc31cbiAgKi9cbiAgcmVhZG9ubHkgZHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2R5bmFtb2RiIEF3c1Byb3ZpZGVyI2R5bmFtb2RifVxuICAqL1xuICByZWFkb25seSBkeW5hbW9kYj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZHluYW1vZGJzdHJlYW1zIEF3c1Byb3ZpZGVyI2R5bmFtb2Ric3RyZWFtc31cbiAgKi9cbiAgcmVhZG9ubHkgZHluYW1vZGJzdHJlYW1zPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNlYzIgQXdzUHJvdmlkZXIjZWMyfVxuICAqL1xuICByZWFkb25seSBlYzI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2VjMmluc3RhbmNlY29ubmVjdCBBd3NQcm92aWRlciNlYzJpbnN0YW5jZWNvbm5lY3R9XG4gICovXG4gIHJlYWRvbmx5IGVjMkluc3RhbmNlY29ubmVjdD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZWNyIEF3c1Byb3ZpZGVyI2Vjcn1cbiAgKi9cbiAgcmVhZG9ubHkgZWNyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNlY3JwdWJsaWMgQXdzUHJvdmlkZXIjZWNycHVibGljfVxuICAqL1xuICByZWFkb25seSBlY3JwdWJsaWM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2VjcyBBd3NQcm92aWRlciNlY3N9XG4gICovXG4gIHJlYWRvbmx5IGVjcz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZWZzIEF3c1Byb3ZpZGVyI2Vmc31cbiAgKi9cbiAgcmVhZG9ubHkgZWZzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNla3MgQXdzUHJvdmlkZXIjZWtzfVxuICAqL1xuICByZWFkb25seSBla3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2VsYXN0aWNhY2hlIEF3c1Byb3ZpZGVyI2VsYXN0aWNhY2hlfVxuICAqL1xuICByZWFkb25seSBlbGFzdGljYWNoZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZWxhc3RpY2JlYW5zdGFsayBBd3NQcm92aWRlciNlbGFzdGljYmVhbnN0YWxrfVxuICAqL1xuICByZWFkb25seSBlbGFzdGljYmVhbnN0YWxrPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNlbGFzdGljaW5mZXJlbmNlIEF3c1Byb3ZpZGVyI2VsYXN0aWNpbmZlcmVuY2V9XG4gICovXG4gIHJlYWRvbmx5IGVsYXN0aWNpbmZlcmVuY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2VsYXN0aWNzZWFyY2ggQXdzUHJvdmlkZXIjZWxhc3RpY3NlYXJjaH1cbiAgKi9cbiAgcmVhZG9ubHkgZWxhc3RpY3NlYXJjaD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZWxhc3RpY3NlYXJjaHNlcnZpY2UgQXdzUHJvdmlkZXIjZWxhc3RpY3NlYXJjaHNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IGVsYXN0aWNzZWFyY2hzZXJ2aWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNlbGFzdGljdHJhbnNjb2RlciBBd3NQcm92aWRlciNlbGFzdGljdHJhbnNjb2Rlcn1cbiAgKi9cbiAgcmVhZG9ubHkgZWxhc3RpY3RyYW5zY29kZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2VsYiBBd3NQcm92aWRlciNlbGJ9XG4gICovXG4gIHJlYWRvbmx5IGVsYj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZWxidjIgQXdzUHJvdmlkZXIjZWxidjJ9XG4gICovXG4gIHJlYWRvbmx5IGVsYnYyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNlbXIgQXdzUHJvdmlkZXIjZW1yfVxuICAqL1xuICByZWFkb25seSBlbXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2VtcmNvbnRhaW5lcnMgQXdzUHJvdmlkZXIjZW1yY29udGFpbmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgZW1yY29udGFpbmVycz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZXMgQXdzUHJvdmlkZXIjZXN9XG4gICovXG4gIHJlYWRvbmx5IGVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNldmVudGJyaWRnZSBBd3NQcm92aWRlciNldmVudGJyaWRnZX1cbiAgKi9cbiAgcmVhZG9ubHkgZXZlbnRicmlkZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2V2ZW50cyBBd3NQcm92aWRlciNldmVudHN9XG4gICovXG4gIHJlYWRvbmx5IGV2ZW50cz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZmluc3BhY2UgQXdzUHJvdmlkZXIjZmluc3BhY2V9XG4gICovXG4gIHJlYWRvbmx5IGZpbnNwYWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNmaW5zcGFjZWRhdGEgQXdzUHJvdmlkZXIjZmluc3BhY2VkYXRhfVxuICAqL1xuICByZWFkb25seSBmaW5zcGFjZWRhdGE/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2ZpcmVob3NlIEF3c1Byb3ZpZGVyI2ZpcmVob3NlfVxuICAqL1xuICByZWFkb25seSBmaXJlaG9zZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZmlzIEF3c1Byb3ZpZGVyI2Zpc31cbiAgKi9cbiAgcmVhZG9ubHkgZmlzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNmbXMgQXdzUHJvdmlkZXIjZm1zfVxuICAqL1xuICByZWFkb25seSBmbXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2ZvcmVjYXN0IEF3c1Byb3ZpZGVyI2ZvcmVjYXN0fVxuICAqL1xuICByZWFkb25seSBmb3JlY2FzdD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZm9yZWNhc3RxdWVyeSBBd3NQcm92aWRlciNmb3JlY2FzdHF1ZXJ5fVxuICAqL1xuICByZWFkb25seSBmb3JlY2FzdHF1ZXJ5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNmb3JlY2FzdHF1ZXJ5c2VydmljZSBBd3NQcm92aWRlciNmb3JlY2FzdHF1ZXJ5c2VydmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgZm9yZWNhc3RxdWVyeXNlcnZpY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2ZvcmVjYXN0c2VydmljZSBBd3NQcm92aWRlciNmb3JlY2FzdHNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IGZvcmVjYXN0c2VydmljZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZnJhdWRkZXRlY3RvciBBd3NQcm92aWRlciNmcmF1ZGRldGVjdG9yfVxuICAqL1xuICByZWFkb25seSBmcmF1ZGRldGVjdG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNmc3ggQXdzUHJvdmlkZXIjZnN4fVxuICAqL1xuICByZWFkb25seSBmc3g/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2dhbWVsaWZ0IEF3c1Byb3ZpZGVyI2dhbWVsaWZ0fVxuICAqL1xuICByZWFkb25seSBnYW1lbGlmdD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZ2xhY2llciBBd3NQcm92aWRlciNnbGFjaWVyfVxuICAqL1xuICByZWFkb25seSBnbGFjaWVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNnbG9iYWxhY2NlbGVyYXRvciBBd3NQcm92aWRlciNnbG9iYWxhY2NlbGVyYXRvcn1cbiAgKi9cbiAgcmVhZG9ubHkgZ2xvYmFsYWNjZWxlcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2dsdWUgQXdzUHJvdmlkZXIjZ2x1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZ2x1ZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZ2x1ZWRhdGFicmV3IEF3c1Byb3ZpZGVyI2dsdWVkYXRhYnJld31cbiAgKi9cbiAgcmVhZG9ubHkgZ2x1ZWRhdGFicmV3Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNncmVlbmdyYXNzIEF3c1Byb3ZpZGVyI2dyZWVuZ3Jhc3N9XG4gICovXG4gIHJlYWRvbmx5IGdyZWVuZ3Jhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2dyZWVuZ3Jhc3N2MiBBd3NQcm92aWRlciNncmVlbmdyYXNzdjJ9XG4gICovXG4gIHJlYWRvbmx5IGdyZWVuZ3Jhc3N2Mj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjZ3JvdW5kc3RhdGlvbiBBd3NQcm92aWRlciNncm91bmRzdGF0aW9ufVxuICAqL1xuICByZWFkb25seSBncm91bmRzdGF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNndWFyZGR1dHkgQXdzUHJvdmlkZXIjZ3VhcmRkdXR5fVxuICAqL1xuICByZWFkb25seSBndWFyZGR1dHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2hlYWx0aCBBd3NQcm92aWRlciNoZWFsdGh9XG4gICovXG4gIHJlYWRvbmx5IGhlYWx0aD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaGVhbHRobGFrZSBBd3NQcm92aWRlciNoZWFsdGhsYWtlfVxuICAqL1xuICByZWFkb25seSBoZWFsdGhsYWtlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNob25leWNvZGUgQXdzUHJvdmlkZXIjaG9uZXljb2RlfVxuICAqL1xuICByZWFkb25seSBob25leWNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lhbSBBd3NQcm92aWRlciNpYW19XG4gICovXG4gIHJlYWRvbmx5IGlhbT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaWRlbnRpdHlzdG9yZSBBd3NQcm92aWRlciNpZGVudGl0eXN0b3JlfVxuICAqL1xuICByZWFkb25seSBpZGVudGl0eXN0b3JlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNpbWFnZWJ1aWxkZXIgQXdzUHJvdmlkZXIjaW1hZ2VidWlsZGVyfVxuICAqL1xuICByZWFkb25seSBpbWFnZWJ1aWxkZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2luc3BlY3RvciBBd3NQcm92aWRlciNpbnNwZWN0b3J9XG4gICovXG4gIHJlYWRvbmx5IGluc3BlY3Rvcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaW90IEF3c1Byb3ZpZGVyI2lvdH1cbiAgKi9cbiAgcmVhZG9ubHkgaW90Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNpb3QxY2xpY2tkZXZpY2VzIEF3c1Byb3ZpZGVyI2lvdDFjbGlja2RldmljZXN9XG4gICovXG4gIHJlYWRvbmx5IGlvdDFDbGlja2RldmljZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lvdDFjbGlja2RldmljZXNzZXJ2aWNlIEF3c1Byb3ZpZGVyI2lvdDFjbGlja2RldmljZXNzZXJ2aWNlfVxuICAqL1xuICByZWFkb25seSBpb3QxQ2xpY2tkZXZpY2Vzc2VydmljZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaW90MWNsaWNrcHJvamVjdHMgQXdzUHJvdmlkZXIjaW90MWNsaWNrcHJvamVjdHN9XG4gICovXG4gIHJlYWRvbmx5IGlvdDFDbGlja3Byb2plY3RzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNpb3RhbmFseXRpY3MgQXdzUHJvdmlkZXIjaW90YW5hbHl0aWNzfVxuICAqL1xuICByZWFkb25seSBpb3RhbmFseXRpY3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lvdGRhdGFwbGFuZSBBd3NQcm92aWRlciNpb3RkYXRhcGxhbmV9XG4gICovXG4gIHJlYWRvbmx5IGlvdGRhdGFwbGFuZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaW90ZGV2aWNlYWR2aXNvciBBd3NQcm92aWRlciNpb3RkZXZpY2VhZHZpc29yfVxuICAqL1xuICByZWFkb25seSBpb3RkZXZpY2VhZHZpc29yPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNpb3RldmVudHMgQXdzUHJvdmlkZXIjaW90ZXZlbnRzfVxuICAqL1xuICByZWFkb25seSBpb3RldmVudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lvdGV2ZW50c2RhdGEgQXdzUHJvdmlkZXIjaW90ZXZlbnRzZGF0YX1cbiAgKi9cbiAgcmVhZG9ubHkgaW90ZXZlbnRzZGF0YT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaW90ZmxlZXRodWIgQXdzUHJvdmlkZXIjaW90ZmxlZXRodWJ9XG4gICovXG4gIHJlYWRvbmx5IGlvdGZsZWV0aHViPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNpb3Rqb2JzZGF0YXBsYW5lIEF3c1Byb3ZpZGVyI2lvdGpvYnNkYXRhcGxhbmV9XG4gICovXG4gIHJlYWRvbmx5IGlvdGpvYnNkYXRhcGxhbmU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lvdHNlY3VyZXR1bm5lbGluZyBBd3NQcm92aWRlciNpb3RzZWN1cmV0dW5uZWxpbmd9XG4gICovXG4gIHJlYWRvbmx5IGlvdHNlY3VyZXR1bm5lbGluZz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaW90c2l0ZXdpc2UgQXdzUHJvdmlkZXIjaW90c2l0ZXdpc2V9XG4gICovXG4gIHJlYWRvbmx5IGlvdHNpdGV3aXNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNpb3R0aGluZ3NncmFwaCBBd3NQcm92aWRlciNpb3R0aGluZ3NncmFwaH1cbiAgKi9cbiAgcmVhZG9ubHkgaW90dGhpbmdzZ3JhcGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2lvdHdpcmVsZXNzIEF3c1Byb3ZpZGVyI2lvdHdpcmVsZXNzfVxuICAqL1xuICByZWFkb25seSBpb3R3aXJlbGVzcz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mja2Fma2EgQXdzUHJvdmlkZXIja2Fma2F9XG4gICovXG4gIHJlYWRvbmx5IGthZmthPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNrYWZrYWNvbm5lY3QgQXdzUHJvdmlkZXIja2Fma2Fjb25uZWN0fVxuICAqL1xuICByZWFkb25seSBrYWZrYWNvbm5lY3Q/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2tlbmRyYSBBd3NQcm92aWRlciNrZW5kcmF9XG4gICovXG4gIHJlYWRvbmx5IGtlbmRyYT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mja2luZXNpcyBBd3NQcm92aWRlciNraW5lc2lzfVxuICAqL1xuICByZWFkb25seSBraW5lc2lzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNraW5lc2lzYW5hbHl0aWNzIEF3c1Byb3ZpZGVyI2tpbmVzaXNhbmFseXRpY3N9XG4gICovXG4gIHJlYWRvbmx5IGtpbmVzaXNhbmFseXRpY3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2tpbmVzaXNhbmFseXRpY3N2MiBBd3NQcm92aWRlciNraW5lc2lzYW5hbHl0aWNzdjJ9XG4gICovXG4gIHJlYWRvbmx5IGtpbmVzaXNhbmFseXRpY3N2Mj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mja2luZXNpc3ZpZGVvIEF3c1Byb3ZpZGVyI2tpbmVzaXN2aWRlb31cbiAgKi9cbiAgcmVhZG9ubHkga2luZXNpc3ZpZGVvPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNraW5lc2lzdmlkZW9hcmNoaXZlZG1lZGlhIEF3c1Byb3ZpZGVyI2tpbmVzaXN2aWRlb2FyY2hpdmVkbWVkaWF9XG4gICovXG4gIHJlYWRvbmx5IGtpbmVzaXN2aWRlb2FyY2hpdmVkbWVkaWE/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2tpbmVzaXN2aWRlb21lZGlhIEF3c1Byb3ZpZGVyI2tpbmVzaXN2aWRlb21lZGlhfVxuICAqL1xuICByZWFkb25seSBraW5lc2lzdmlkZW9tZWRpYT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mja2luZXNpc3ZpZGVvc2lnbmFsaW5nY2hhbm5lbHMgQXdzUHJvdmlkZXIja2luZXNpc3ZpZGVvc2lnbmFsaW5nY2hhbm5lbHN9XG4gICovXG4gIHJlYWRvbmx5IGtpbmVzaXN2aWRlb3NpZ25hbGluZ2NoYW5uZWxzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNrbXMgQXdzUHJvdmlkZXIja21zfVxuICAqL1xuICByZWFkb25seSBrbXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2xha2Vmb3JtYXRpb24gQXdzUHJvdmlkZXIjbGFrZWZvcm1hdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbGFrZWZvcm1hdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbGFtYmRhIEF3c1Byb3ZpZGVyI2xhbWJkYX1cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNsZXhtb2RlbGJ1aWxkaW5nIEF3c1Byb3ZpZGVyI2xleG1vZGVsYnVpbGRpbmd9XG4gICovXG4gIHJlYWRvbmx5IGxleG1vZGVsYnVpbGRpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2xleG1vZGVsYnVpbGRpbmdzZXJ2aWNlIEF3c1Byb3ZpZGVyI2xleG1vZGVsYnVpbGRpbmdzZXJ2aWNlfVxuICAqL1xuICByZWFkb25seSBsZXhtb2RlbGJ1aWxkaW5nc2VydmljZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbGV4bW9kZWxzIEF3c1Byb3ZpZGVyI2xleG1vZGVsc31cbiAgKi9cbiAgcmVhZG9ubHkgbGV4bW9kZWxzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNsZXhtb2RlbHN2MiBBd3NQcm92aWRlciNsZXhtb2RlbHN2Mn1cbiAgKi9cbiAgcmVhZG9ubHkgbGV4bW9kZWxzdjI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2xleHJ1bnRpbWUgQXdzUHJvdmlkZXIjbGV4cnVudGltZX1cbiAgKi9cbiAgcmVhZG9ubHkgbGV4cnVudGltZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbGV4cnVudGltZXNlcnZpY2UgQXdzUHJvdmlkZXIjbGV4cnVudGltZXNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IGxleHJ1bnRpbWVzZXJ2aWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNsZXhydW50aW1ldjIgQXdzUHJvdmlkZXIjbGV4cnVudGltZXYyfVxuICAqL1xuICByZWFkb25seSBsZXhydW50aW1ldjI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2xpY2Vuc2VtYW5hZ2VyIEF3c1Byb3ZpZGVyI2xpY2Vuc2VtYW5hZ2VyfVxuICAqL1xuICByZWFkb25seSBsaWNlbnNlbWFuYWdlcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbGlnaHRzYWlsIEF3c1Byb3ZpZGVyI2xpZ2h0c2FpbH1cbiAgKi9cbiAgcmVhZG9ubHkgbGlnaHRzYWlsPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNsb2NhdGlvbiBBd3NQcm92aWRlciNsb2NhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI2xvb2tvdXRlcXVpcG1lbnQgQXdzUHJvdmlkZXIjbG9va291dGVxdWlwbWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgbG9va291dGVxdWlwbWVudD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbG9va291dGZvcnZpc2lvbiBBd3NQcm92aWRlciNsb29rb3V0Zm9ydmlzaW9ufVxuICAqL1xuICByZWFkb25seSBsb29rb3V0Zm9ydmlzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNsb29rb3V0bWV0cmljcyBBd3NQcm92aWRlciNsb29rb3V0bWV0cmljc31cbiAgKi9cbiAgcmVhZG9ubHkgbG9va291dG1ldHJpY3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21hY2hpbmVsZWFybmluZyBBd3NQcm92aWRlciNtYWNoaW5lbGVhcm5pbmd9XG4gICovXG4gIHJlYWRvbmx5IG1hY2hpbmVsZWFybmluZz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWFjaWUgQXdzUHJvdmlkZXIjbWFjaWV9XG4gICovXG4gIHJlYWRvbmx5IG1hY2llPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtYWNpZTIgQXdzUHJvdmlkZXIjbWFjaWUyfVxuICAqL1xuICByZWFkb25seSBtYWNpZTI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21hbmFnZWRibG9ja2NoYWluIEF3c1Byb3ZpZGVyI21hbmFnZWRibG9ja2NoYWlufVxuICAqL1xuICByZWFkb25seSBtYW5hZ2VkYmxvY2tjaGFpbj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWFya2V0cGxhY2VjYXRhbG9nIEF3c1Byb3ZpZGVyI21hcmtldHBsYWNlY2F0YWxvZ31cbiAgKi9cbiAgcmVhZG9ubHkgbWFya2V0cGxhY2VjYXRhbG9nPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtYXJrZXRwbGFjZWNvbW1lcmNlYW5hbHl0aWNzIEF3c1Byb3ZpZGVyI21hcmtldHBsYWNlY29tbWVyY2VhbmFseXRpY3N9XG4gICovXG4gIHJlYWRvbmx5IG1hcmtldHBsYWNlY29tbWVyY2VhbmFseXRpY3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21hcmtldHBsYWNlZW50aXRsZW1lbnQgQXdzUHJvdmlkZXIjbWFya2V0cGxhY2VlbnRpdGxlbWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgbWFya2V0cGxhY2VlbnRpdGxlbWVudD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWFya2V0cGxhY2VlbnRpdGxlbWVudHNlcnZpY2UgQXdzUHJvdmlkZXIjbWFya2V0cGxhY2VlbnRpdGxlbWVudHNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IG1hcmtldHBsYWNlZW50aXRsZW1lbnRzZXJ2aWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtYXJrZXRwbGFjZW1ldGVyaW5nIEF3c1Byb3ZpZGVyI21hcmtldHBsYWNlbWV0ZXJpbmd9XG4gICovXG4gIHJlYWRvbmx5IG1hcmtldHBsYWNlbWV0ZXJpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21lZGlhY29ubmVjdCBBd3NQcm92aWRlciNtZWRpYWNvbm5lY3R9XG4gICovXG4gIHJlYWRvbmx5IG1lZGlhY29ubmVjdD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWVkaWFjb252ZXJ0IEF3c1Byb3ZpZGVyI21lZGlhY29udmVydH1cbiAgKi9cbiAgcmVhZG9ubHkgbWVkaWFjb252ZXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtZWRpYWxpdmUgQXdzUHJvdmlkZXIjbWVkaWFsaXZlfVxuICAqL1xuICByZWFkb25seSBtZWRpYWxpdmU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21lZGlhcGFja2FnZSBBd3NQcm92aWRlciNtZWRpYXBhY2thZ2V9XG4gICovXG4gIHJlYWRvbmx5IG1lZGlhcGFja2FnZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWVkaWFwYWNrYWdldm9kIEF3c1Byb3ZpZGVyI21lZGlhcGFja2FnZXZvZH1cbiAgKi9cbiAgcmVhZG9ubHkgbWVkaWFwYWNrYWdldm9kPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtZWRpYXN0b3JlIEF3c1Byb3ZpZGVyI21lZGlhc3RvcmV9XG4gICovXG4gIHJlYWRvbmx5IG1lZGlhc3RvcmU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21lZGlhc3RvcmVkYXRhIEF3c1Byb3ZpZGVyI21lZGlhc3RvcmVkYXRhfVxuICAqL1xuICByZWFkb25seSBtZWRpYXN0b3JlZGF0YT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWVkaWF0YWlsb3IgQXdzUHJvdmlkZXIjbWVkaWF0YWlsb3J9XG4gICovXG4gIHJlYWRvbmx5IG1lZGlhdGFpbG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtZW1vcnlkYiBBd3NQcm92aWRlciNtZW1vcnlkYn1cbiAgKi9cbiAgcmVhZG9ubHkgbWVtb3J5ZGI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21nbiBBd3NQcm92aWRlciNtZ259XG4gICovXG4gIHJlYWRvbmx5IG1nbj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbWlncmF0aW9uaHViIEF3c1Byb3ZpZGVyI21pZ3JhdGlvbmh1Yn1cbiAgKi9cbiAgcmVhZG9ubHkgbWlncmF0aW9uaHViPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtaWdyYXRpb25odWJjb25maWcgQXdzUHJvdmlkZXIjbWlncmF0aW9uaHViY29uZmlnfVxuICAqL1xuICByZWFkb25seSBtaWdyYXRpb25odWJjb25maWc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI21vYmlsZSBBd3NQcm92aWRlciNtb2JpbGV9XG4gICovXG4gIHJlYWRvbmx5IG1vYmlsZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbW9iaWxlYW5hbHl0aWNzIEF3c1Byb3ZpZGVyI21vYmlsZWFuYWx5dGljc31cbiAgKi9cbiAgcmVhZG9ubHkgbW9iaWxlYW5hbHl0aWNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNtcSBBd3NQcm92aWRlciNtcX1cbiAgKi9cbiAgcmVhZG9ubHkgbXE/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI210dXJrIEF3c1Byb3ZpZGVyI210dXJrfVxuICAqL1xuICByZWFkb25seSBtdHVyaz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbXdhYSBBd3NQcm92aWRlciNtd2FhfVxuICAqL1xuICByZWFkb25seSBtd2FhPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNuZXB0dW5lIEF3c1Byb3ZpZGVyI25lcHR1bmV9XG4gICovXG4gIHJlYWRvbmx5IG5lcHR1bmU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI25ldHdvcmtmaXJld2FsbCBBd3NQcm92aWRlciNuZXR3b3JrZmlyZXdhbGx9XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmtmaXJld2FsbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjbmV0d29ya21hbmFnZXIgQXdzUHJvdmlkZXIjbmV0d29ya21hbmFnZXJ9XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmttYW5hZ2VyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNuaW1ibGVzdHVkaW8gQXdzUHJvdmlkZXIjbmltYmxlc3R1ZGlvfVxuICAqL1xuICByZWFkb25seSBuaW1ibGVzdHVkaW8/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI29wc3dvcmtzIEF3c1Byb3ZpZGVyI29wc3dvcmtzfVxuICAqL1xuICByZWFkb25seSBvcHN3b3Jrcz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjb3Bzd29ya3NjbSBBd3NQcm92aWRlciNvcHN3b3Jrc2NtfVxuICAqL1xuICByZWFkb25seSBvcHN3b3Jrc2NtPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNvcmdhbml6YXRpb25zIEF3c1Byb3ZpZGVyI29yZ2FuaXphdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IG9yZ2FuaXphdGlvbnM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI291dHBvc3RzIEF3c1Byb3ZpZGVyI291dHBvc3RzfVxuICAqL1xuICByZWFkb25seSBvdXRwb3N0cz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcGVyc29uYWxpemUgQXdzUHJvdmlkZXIjcGVyc29uYWxpemV9XG4gICovXG4gIHJlYWRvbmx5IHBlcnNvbmFsaXplPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNwZXJzb25hbGl6ZWV2ZW50cyBBd3NQcm92aWRlciNwZXJzb25hbGl6ZWV2ZW50c31cbiAgKi9cbiAgcmVhZG9ubHkgcGVyc29uYWxpemVldmVudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3BlcnNvbmFsaXplcnVudGltZSBBd3NQcm92aWRlciNwZXJzb25hbGl6ZXJ1bnRpbWV9XG4gICovXG4gIHJlYWRvbmx5IHBlcnNvbmFsaXplcnVudGltZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcGkgQXdzUHJvdmlkZXIjcGl9XG4gICovXG4gIHJlYWRvbmx5IHBpPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNwaW5wb2ludCBBd3NQcm92aWRlciNwaW5wb2ludH1cbiAgKi9cbiAgcmVhZG9ubHkgcGlucG9pbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3BpbnBvaW50ZW1haWwgQXdzUHJvdmlkZXIjcGlucG9pbnRlbWFpbH1cbiAgKi9cbiAgcmVhZG9ubHkgcGlucG9pbnRlbWFpbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcGlucG9pbnRzbXN2b2ljZSBBd3NQcm92aWRlciNwaW5wb2ludHNtc3ZvaWNlfVxuICAqL1xuICByZWFkb25seSBwaW5wb2ludHNtc3ZvaWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNwb2xseSBBd3NQcm92aWRlciNwb2xseX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9sbHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3ByaWNpbmcgQXdzUHJvdmlkZXIjcHJpY2luZ31cbiAgKi9cbiAgcmVhZG9ubHkgcHJpY2luZz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcHJvbWV0aGV1cyBBd3NQcm92aWRlciNwcm9tZXRoZXVzfVxuICAqL1xuICByZWFkb25seSBwcm9tZXRoZXVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNwcm9tZXRoZXVzc2VydmljZSBBd3NQcm92aWRlciNwcm9tZXRoZXVzc2VydmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvbWV0aGV1c3NlcnZpY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3Byb3RvbiBBd3NQcm92aWRlciNwcm90b259XG4gICovXG4gIHJlYWRvbmx5IHByb3Rvbj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcWxkYiBBd3NQcm92aWRlciNxbGRifVxuICAqL1xuICByZWFkb25seSBxbGRiPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNxbGRic2Vzc2lvbiBBd3NQcm92aWRlciNxbGRic2Vzc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcWxkYnNlc3Npb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3F1aWNrc2lnaHQgQXdzUHJvdmlkZXIjcXVpY2tzaWdodH1cbiAgKi9cbiAgcmVhZG9ubHkgcXVpY2tzaWdodD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcmFtIEF3c1Byb3ZpZGVyI3JhbX1cbiAgKi9cbiAgcmVhZG9ubHkgcmFtPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNyZHMgQXdzUHJvdmlkZXIjcmRzfVxuICAqL1xuICByZWFkb25seSByZHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3Jkc2RhdGEgQXdzUHJvdmlkZXIjcmRzZGF0YX1cbiAgKi9cbiAgcmVhZG9ubHkgcmRzZGF0YT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcmRzZGF0YXNlcnZpY2UgQXdzUHJvdmlkZXIjcmRzZGF0YXNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IHJkc2RhdGFzZXJ2aWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNyZWRzaGlmdCBBd3NQcm92aWRlciNyZWRzaGlmdH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVkc2hpZnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3JlZHNoaWZ0ZGF0YSBBd3NQcm92aWRlciNyZWRzaGlmdGRhdGF9XG4gICovXG4gIHJlYWRvbmx5IHJlZHNoaWZ0ZGF0YT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcmVrb2duaXRpb24gQXdzUHJvdmlkZXIjcmVrb2duaXRpb259XG4gICovXG4gIHJlYWRvbmx5IHJla29nbml0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNyZXNvdXJjZWdyb3VwcyBBd3NQcm92aWRlciNyZXNvdXJjZWdyb3Vwc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2Vncm91cHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3Jlc291cmNlZ3JvdXBzdGFnZ2luZyBBd3NQcm92aWRlciNyZXNvdXJjZWdyb3Vwc3RhZ2dpbmd9XG4gICovXG4gIHJlYWRvbmx5IHJlc291cmNlZ3JvdXBzdGFnZ2luZz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpIEF3c1Byb3ZpZGVyI3Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNyb2JvbWFrZXIgQXdzUHJvdmlkZXIjcm9ib21ha2VyfVxuICAqL1xuICByZWFkb25seSByb2JvbWFrZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3JvdXRlNTMgQXdzUHJvdmlkZXIjcm91dGU1M31cbiAgKi9cbiAgcmVhZG9ubHkgcm91dGU1Mz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjcm91dGU1M2RvbWFpbnMgQXdzUHJvdmlkZXIjcm91dGU1M2RvbWFpbnN9XG4gICovXG4gIHJlYWRvbmx5IHJvdXRlNTNEb21haW5zPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNyb3V0ZTUzcmVjb3Zlcnljb250cm9sY29uZmlnIEF3c1Byb3ZpZGVyI3JvdXRlNTNyZWNvdmVyeWNvbnRyb2xjb25maWd9XG4gICovXG4gIHJlYWRvbmx5IHJvdXRlNTNSZWNvdmVyeWNvbnRyb2xjb25maWc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3JvdXRlNTNyZWNvdmVyeXJlYWRpbmVzcyBBd3NQcm92aWRlciNyb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3N9XG4gICovXG4gIHJlYWRvbmx5IHJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjcm91dGU1M3Jlc29sdmVyIEF3c1Byb3ZpZGVyI3JvdXRlNTNyZXNvbHZlcn1cbiAgKi9cbiAgcmVhZG9ubHkgcm91dGU1M1Jlc29sdmVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzMyBBd3NQcm92aWRlciNzM31cbiAgKi9cbiAgcmVhZG9ubHkgczM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3MzY29udHJvbCBBd3NQcm92aWRlciNzM2NvbnRyb2x9XG4gICovXG4gIHJlYWRvbmx5IHMzQ29udHJvbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjczNvdXRwb3N0cyBBd3NQcm92aWRlciNzM291dHBvc3RzfVxuICAqL1xuICByZWFkb25seSBzM091dHBvc3RzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzYWdlbWFrZXIgQXdzUHJvdmlkZXIjc2FnZW1ha2VyfVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NhZ2VtYWtlcmVkZ2VtYW5hZ2VyIEF3c1Byb3ZpZGVyI3NhZ2VtYWtlcmVkZ2VtYW5hZ2VyfVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJlZGdlbWFuYWdlcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2FnZW1ha2VyZmVhdHVyZXN0b3JlcnVudGltZSBBd3NQcm92aWRlciNzYWdlbWFrZXJmZWF0dXJlc3RvcmVydW50aW1lfVxuICAqL1xuICByZWFkb25seSBzYWdlbWFrZXJmZWF0dXJlc3RvcmVydW50aW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzYWdlbWFrZXJydW50aW1lIEF3c1Byb3ZpZGVyI3NhZ2VtYWtlcnJ1bnRpbWV9XG4gICovXG4gIHJlYWRvbmx5IHNhZ2VtYWtlcnJ1bnRpbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NhdmluZ3NwbGFucyBBd3NQcm92aWRlciNzYXZpbmdzcGxhbnN9XG4gICovXG4gIHJlYWRvbmx5IHNhdmluZ3NwbGFucz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2NoZW1hcyBBd3NQcm92aWRlciNzY2hlbWFzfVxuICAqL1xuICByZWFkb25seSBzY2hlbWFzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzZGIgQXdzUHJvdmlkZXIjc2RifVxuICAqL1xuICByZWFkb25seSBzZGI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NlY3JldHNtYW5hZ2VyIEF3c1Byb3ZpZGVyI3NlY3JldHNtYW5hZ2VyfVxuICAqL1xuICByZWFkb25seSBzZWNyZXRzbWFuYWdlcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2VjdXJpdHlodWIgQXdzUHJvdmlkZXIjc2VjdXJpdHlodWJ9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5aHViPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzZXJ2ZXJsZXNzYXBwbGljYXRpb25yZXBvc2l0b3J5IEF3c1Byb3ZpZGVyI3NlcnZlcmxlc3NhcHBsaWNhdGlvbnJlcG9zaXRvcnl9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlcmxlc3NhcHBsaWNhdGlvbnJlcG9zaXRvcnk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NlcnZlcmxlc3NhcHByZXBvIEF3c1Byb3ZpZGVyI3NlcnZlcmxlc3NhcHByZXBvfVxuICAqL1xuICByZWFkb25seSBzZXJ2ZXJsZXNzYXBwcmVwbz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2VydmVybGVzc3JlcG8gQXdzUHJvdmlkZXIjc2VydmVybGVzc3JlcG99XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlcmxlc3NyZXBvPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzZXJ2aWNlY2F0YWxvZyBBd3NQcm92aWRlciNzZXJ2aWNlY2F0YWxvZ31cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZWNhdGFsb2c/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NlcnZpY2VkaXNjb3ZlcnkgQXdzUHJvdmlkZXIjc2VydmljZWRpc2NvdmVyeX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZWRpc2NvdmVyeT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2VydmljZXF1b3RhcyBBd3NQcm92aWRlciNzZXJ2aWNlcXVvdGFzfVxuICAqL1xuICByZWFkb25seSBzZXJ2aWNlcXVvdGFzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzZXMgQXdzUHJvdmlkZXIjc2VzfVxuICAqL1xuICByZWFkb25seSBzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3Nlc3YyIEF3c1Byb3ZpZGVyI3Nlc3YyfVxuICAqL1xuICByZWFkb25seSBzZXN2Mj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2ZuIEF3c1Byb3ZpZGVyI3Nmbn1cbiAgKi9cbiAgcmVhZG9ubHkgc2ZuPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzaGllbGQgQXdzUHJvdmlkZXIjc2hpZWxkfVxuICAqL1xuICByZWFkb25seSBzaGllbGQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NpZ25lciBBd3NQcm92aWRlciNzaWduZXJ9XG4gICovXG4gIHJlYWRvbmx5IHNpZ25lcj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc2ltcGxlZGIgQXdzUHJvdmlkZXIjc2ltcGxlZGJ9XG4gICovXG4gIHJlYWRvbmx5IHNpbXBsZWRiPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzbXMgQXdzUHJvdmlkZXIjc21zfVxuICAqL1xuICByZWFkb25seSBzbXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3Nub3diYWxsIEF3c1Byb3ZpZGVyI3Nub3diYWxsfVxuICAqL1xuICByZWFkb25seSBzbm93YmFsbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc25zIEF3c1Byb3ZpZGVyI3Nuc31cbiAgKi9cbiAgcmVhZG9ubHkgc25zPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzcXMgQXdzUHJvdmlkZXIjc3FzfVxuICAqL1xuICByZWFkb25seSBzcXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NzbSBBd3NQcm92aWRlciNzc219XG4gICovXG4gIHJlYWRvbmx5IHNzbT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc3NtY29udGFjdHMgQXdzUHJvdmlkZXIjc3NtY29udGFjdHN9XG4gICovXG4gIHJlYWRvbmx5IHNzbWNvbnRhY3RzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzc21pbmNpZGVudHMgQXdzUHJvdmlkZXIjc3NtaW5jaWRlbnRzfVxuICAqL1xuICByZWFkb25seSBzc21pbmNpZGVudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3NzbyBBd3NQcm92aWRlciNzc299XG4gICovXG4gIHJlYWRvbmx5IHNzbz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc3NvYWRtaW4gQXdzUHJvdmlkZXIjc3NvYWRtaW59XG4gICovXG4gIHJlYWRvbmx5IHNzb2FkbWluPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzc29vaWRjIEF3c1Byb3ZpZGVyI3Nzb29pZGN9XG4gICovXG4gIHJlYWRvbmx5IHNzb29pZGM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3N0ZXBmdW5jdGlvbnMgQXdzUHJvdmlkZXIjc3RlcGZ1bmN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RlcGZ1bmN0aW9ucz86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc3RvcmFnZWdhdGV3YXkgQXdzUHJvdmlkZXIjc3RvcmFnZWdhdGV3YXl9XG4gICovXG4gIHJlYWRvbmx5IHN0b3JhZ2VnYXRld2F5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzdHMgQXdzUHJvdmlkZXIjc3RzfVxuICAqL1xuICByZWFkb25seSBzdHM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3N1cHBvcnQgQXdzUHJvdmlkZXIjc3VwcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjc3dmIEF3c1Byb3ZpZGVyI3N3Zn1cbiAgKi9cbiAgcmVhZG9ubHkgc3dmPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNzeW50aGV0aWNzIEF3c1Byb3ZpZGVyI3N5bnRoZXRpY3N9XG4gICovXG4gIHJlYWRvbmx5IHN5bnRoZXRpY3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3RleHRyYWN0IEF3c1Byb3ZpZGVyI3RleHRyYWN0fVxuICAqL1xuICByZWFkb25seSB0ZXh0cmFjdD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjdGltZXN0cmVhbXF1ZXJ5IEF3c1Byb3ZpZGVyI3RpbWVzdHJlYW1xdWVyeX1cbiAgKi9cbiAgcmVhZG9ubHkgdGltZXN0cmVhbXF1ZXJ5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN0aW1lc3RyZWFtd3JpdGUgQXdzUHJvdmlkZXIjdGltZXN0cmVhbXdyaXRlfVxuICAqL1xuICByZWFkb25seSB0aW1lc3RyZWFtd3JpdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3RyYW5zY3JpYmUgQXdzUHJvdmlkZXIjdHJhbnNjcmliZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHJhbnNjcmliZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjdHJhbnNjcmliZXNlcnZpY2UgQXdzUHJvdmlkZXIjdHJhbnNjcmliZXNlcnZpY2V9XG4gICovXG4gIHJlYWRvbmx5IHRyYW5zY3JpYmVzZXJ2aWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN0cmFuc2NyaWJlc3RyZWFtaW5nIEF3c1Byb3ZpZGVyI3RyYW5zY3JpYmVzdHJlYW1pbmd9XG4gICovXG4gIHJlYWRvbmx5IHRyYW5zY3JpYmVzdHJlYW1pbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3RyYW5zY3JpYmVzdHJlYW1pbmdzZXJ2aWNlIEF3c1Byb3ZpZGVyI3RyYW5zY3JpYmVzdHJlYW1pbmdzZXJ2aWNlfVxuICAqL1xuICByZWFkb25seSB0cmFuc2NyaWJlc3RyZWFtaW5nc2VydmljZT86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjdHJhbnNmZXIgQXdzUHJvdmlkZXIjdHJhbnNmZXJ9XG4gICovXG4gIHJlYWRvbmx5IHRyYW5zZmVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN0cmFuc2xhdGUgQXdzUHJvdmlkZXIjdHJhbnNsYXRlfVxuICAqL1xuICByZWFkb25seSB0cmFuc2xhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3dhZiBBd3NQcm92aWRlciN3YWZ9XG4gICovXG4gIHJlYWRvbmx5IHdhZj86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjd2FmcmVnaW9uYWwgQXdzUHJvdmlkZXIjd2FmcmVnaW9uYWx9XG4gICovXG4gIHJlYWRvbmx5IHdhZnJlZ2lvbmFsPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN3YWZ2MiBBd3NQcm92aWRlciN3YWZ2Mn1cbiAgKi9cbiAgcmVhZG9ubHkgd2FmdjI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3dlbGxhcmNoaXRlY3RlZCBBd3NQcm92aWRlciN3ZWxsYXJjaGl0ZWN0ZWR9XG4gICovXG4gIHJlYWRvbmx5IHdlbGxhcmNoaXRlY3RlZD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjd29ya2RvY3MgQXdzUHJvdmlkZXIjd29ya2RvY3N9XG4gICovXG4gIHJlYWRvbmx5IHdvcmtkb2NzPzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN3b3JrbGluayBBd3NQcm92aWRlciN3b3JrbGlua31cbiAgKi9cbiAgcmVhZG9ubHkgd29ya2xpbms/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3dvcmttYWlsIEF3c1Byb3ZpZGVyI3dvcmttYWlsfVxuICAqL1xuICByZWFkb25seSB3b3JrbWFpbD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlIHRoaXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2VydmljZSBlbmRwb2ludCBVUkxcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mjd29ya21haWxtZXNzYWdlZmxvdyBBd3NQcm92aWRlciN3b3JrbWFpbG1lc3NhZ2VmbG93fVxuICAqL1xuICByZWFkb25seSB3b3JrbWFpbG1lc3NhZ2VmbG93Pzogc3RyaW5nO1xuICAvKipcbiAgKiBVc2UgdGhpcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBzZXJ2aWNlIGVuZHBvaW50IFVSTFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyN3b3Jrc3BhY2VzIEF3c1Byb3ZpZGVyI3dvcmtzcGFjZXN9XG4gICovXG4gIHJlYWRvbmx5IHdvcmtzcGFjZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFVzZSB0aGlzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlcnZpY2UgZW5kcG9pbnQgVVJMXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzI3hyYXkgQXdzUHJvdmlkZXIjeHJheX1cbiAgKi9cbiAgcmVhZG9ubHkgeHJheT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF3c1Byb3ZpZGVyRW5kcG9pbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogQXdzUHJvdmlkZXJFbmRwb2ludHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NhbmFseXplcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NhbmFseXplciksXG4gICAgYWNjb3VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NvdW50KSxcbiAgICBhY206IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBhY21wY2E6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNtcGNhKSxcbiAgICBhbGV4YWZvcmJ1c2luZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsZXhhZm9yYnVzaW5lc3MpLFxuICAgIGFtcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbXApLFxuICAgIGFtcGxpZnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYW1wbGlmeSksXG4gICAgYW1wbGlmeWJhY2tlbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYW1wbGlmeWJhY2tlbmQpLFxuICAgIGFwaWdhdGV3YXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBpZ2F0ZXdheSksXG4gICAgYXBpZ2F0ZXdheXYyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwaWdhdGV3YXl2MiksXG4gICAgYXBwYXV0b3NjYWxpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwYXV0b3NjYWxpbmcpLFxuICAgIGFwcGNvbmZpZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBjb25maWcpLFxuICAgIGFwcGZsb3c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwZmxvdyksXG4gICAgYXBwaW50ZWdyYXRpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcGludGVncmF0aW9ucyksXG4gICAgYXBwaW50ZWdyYXRpb25zc2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBpbnRlZ3JhdGlvbnNzZXJ2aWNlKSxcbiAgICBhcHBsaWNhdGlvbmF1dG9zY2FsaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uYXV0b3NjYWxpbmcpLFxuICAgIGFwcGxpY2F0aW9uY29zdHByb2ZpbGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uY29zdHByb2ZpbGVyKSxcbiAgICBhcHBsaWNhdGlvbmRpc2NvdmVyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvbmRpc2NvdmVyeSksXG4gICAgYXBwbGljYXRpb25kaXNjb3ZlcnlzZXJ2aWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uZGlzY292ZXJ5c2VydmljZSksXG4gICAgYXBwbGljYXRpb25pbnNpZ2h0czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvbmluc2lnaHRzKSxcbiAgICBhcHBtZXNoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcG1lc2gpLFxuICAgIGFwcHJlZ2lzdHJ5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcHJlZ2lzdHJ5KSxcbiAgICBhcHBydW5uZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwcnVubmVyKSxcbiAgICBhcHBzdHJlYW06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwc3RyZWFtKSxcbiAgICBhcHBzeW5jOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcHN5bmMpLFxuICAgIGF0aGVuYTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdGhlbmEpLFxuICAgIGF1ZGl0bWFuYWdlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdWRpdG1hbmFnZXIpLFxuICAgIGF1Z21lbnRlZGFpcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdWdtZW50ZWRhaXJ1bnRpbWUpLFxuICAgIGF1dG9zY2FsaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9zY2FsaW5nKSxcbiAgICBhdXRvc2NhbGluZ3BsYW5zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9zY2FsaW5ncGxhbnMpLFxuICAgIGJhY2t1cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iYWNrdXApLFxuICAgIGJhdGNoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoKSxcbiAgICBicmFrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnJha2V0KSxcbiAgICBidWRnZXRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZGdldHMpLFxuICAgIGNoaW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNoaW1lKSxcbiAgICBjbG91ZDk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWQ5KSxcbiAgICBjbG91ZGNvbnRyb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRjb250cm9sKSxcbiAgICBjbG91ZGNvbnRyb2xhcGk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRjb250cm9sYXBpKSxcbiAgICBjbG91ZGRpcmVjdG9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZGRpcmVjdG9yeSksXG4gICAgY2xvdWRmb3JtYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRmb3JtYXRpb24pLFxuICAgIGNsb3VkZnJvbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRmcm9udCksXG4gICAgY2xvdWRoc206IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRoc20pLFxuICAgIGNsb3VkaHNtdjI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRoc212MiksXG4gICAgY2xvdWRzZWFyY2g6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRzZWFyY2gpLFxuICAgIGNsb3Vkc2VhcmNoZG9tYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkc2VhcmNoZG9tYWluKSxcbiAgICBjbG91ZHRyYWlsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkdHJhaWwpLFxuICAgIGNsb3Vkd2F0Y2g6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaCksXG4gICAgY2xvdWR3YXRjaGV2ZW50czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoZXZlbnRzKSxcbiAgICBjbG91ZHdhdGNobG9nczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNobG9ncyksXG4gICAgY29kZWFydGlmYWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVhcnRpZmFjdCksXG4gICAgY29kZWJ1aWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVidWlsZCksXG4gICAgY29kZWNvbW1pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlY29tbWl0KSxcbiAgICBjb2RlZGVwbG95OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVkZXBsb3kpLFxuICAgIGNvZGVndXJ1cHJvZmlsZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZWd1cnVwcm9maWxlciksXG4gICAgY29kZWd1cnVyZXZpZXdlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlZ3VydXJldmlld2VyKSxcbiAgICBjb2RlcGlwZWxpbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZXBpcGVsaW5lKSxcbiAgICBjb2Rlc3RhcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2Rlc3RhciksXG4gICAgY29kZXN0YXJjb25uZWN0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2Rlc3RhcmNvbm5lY3Rpb25zKSxcbiAgICBjb2Rlc3Rhcm5vdGlmaWNhdGlvbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZXN0YXJub3RpZmljYXRpb25zKSxcbiAgICBjb2duaXRvaWRlbnRpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29nbml0b2lkZW50aXR5KSxcbiAgICBjb2duaXRvaWRlbnRpdHlwcm92aWRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2duaXRvaWRlbnRpdHlwcm92aWRlciksXG4gICAgY29nbml0b2lkcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2duaXRvaWRwKSxcbiAgICBjb2duaXRvc3luYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2duaXRvc3luYyksXG4gICAgY29tcHJlaGVuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVoZW5kKSxcbiAgICBjb21wcmVoZW5kbWVkaWNhbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVoZW5kbWVkaWNhbCksXG4gICAgY29uZmlnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZyksXG4gICAgY29uZmlnc2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWdzZXJ2aWNlKSxcbiAgICBjb25uZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3QpLFxuICAgIGNvbm5lY3Rjb250YWN0bGVuczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0Y29udGFjdGxlbnMpLFxuICAgIGNvbm5lY3RwYXJ0aWNpcGFudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0cGFydGljaXBhbnQpLFxuICAgIGNvc3RhbmR1c2FnZXJlcG9ydHNlcnZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29zdGFuZHVzYWdlcmVwb3J0c2VydmljZSksXG4gICAgY29zdGV4cGxvcmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvc3RleHBsb3JlciksXG4gICAgY3VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1ciksXG4gICAgZGF0YWJhc2VtaWdyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VtaWdyYXRpb24pLFxuICAgIGRhdGFiYXNlbWlncmF0aW9uc2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZW1pZ3JhdGlvbnNlcnZpY2UpLFxuICAgIGRhdGFleGNoYW5nZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhZXhjaGFuZ2UpLFxuICAgIGRhdGFwaXBlbGluZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhcGlwZWxpbmUpLFxuICAgIGRhdGFzeW5jOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFzeW5jKSxcbiAgICBkYXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF4KSxcbiAgICBkZXRlY3RpdmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV0ZWN0aXZlKSxcbiAgICBkZXZpY2VmYXJtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZWZhcm0pLFxuICAgIGRldm9wc2d1cnU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2b3BzZ3VydSksXG4gICAgZGlyZWN0Y29ubmVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaXJlY3Rjb25uZWN0KSxcbiAgICBkbG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGxtKSxcbiAgICBkbXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG1zKSxcbiAgICBkb2NkYjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2NkYiksXG4gICAgZHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZHMpLFxuICAgIGR5bmFtb2RiOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmR5bmFtb2RiKSxcbiAgICBkeW5hbW9kYnN0cmVhbXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZHluYW1vZGJzdHJlYW1zKSxcbiAgICBlYzI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWMyKSxcbiAgICBlYzJpbnN0YW5jZWNvbm5lY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWMySW5zdGFuY2Vjb25uZWN0KSxcbiAgICBlY3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWNyKSxcbiAgICBlY3JwdWJsaWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWNycHVibGljKSxcbiAgICBlY3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWNzKSxcbiAgICBlZnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWZzKSxcbiAgICBla3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWtzKSxcbiAgICBlbGFzdGljYWNoZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbGFzdGljYWNoZSksXG4gICAgZWxhc3RpY2JlYW5zdGFsazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbGFzdGljYmVhbnN0YWxrKSxcbiAgICBlbGFzdGljaW5mZXJlbmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVsYXN0aWNpbmZlcmVuY2UpLFxuICAgIGVsYXN0aWNzZWFyY2g6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY3NlYXJjaCksXG4gICAgZWxhc3RpY3NlYXJjaHNlcnZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY3NlYXJjaHNlcnZpY2UpLFxuICAgIGVsYXN0aWN0cmFuc2NvZGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVsYXN0aWN0cmFuc2NvZGVyKSxcbiAgICBlbGI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWxiKSxcbiAgICBlbGJ2MjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbGJ2MiksXG4gICAgZW1yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtciksXG4gICAgZW1yY29udGFpbmVyczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbXJjb250YWluZXJzKSxcbiAgICBlczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcyksXG4gICAgZXZlbnRicmlkZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXZlbnRicmlkZ2UpLFxuICAgIGV2ZW50czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ldmVudHMpLFxuICAgIGZpbnNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbnNwYWNlKSxcbiAgICBmaW5zcGFjZWRhdGE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmluc3BhY2VkYXRhKSxcbiAgICBmaXJlaG9zZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maXJlaG9zZSksXG4gICAgZmlzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpcyksXG4gICAgZm1zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZtcyksXG4gICAgZm9yZWNhc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yZWNhc3QpLFxuICAgIGZvcmVjYXN0cXVlcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yZWNhc3RxdWVyeSksXG4gICAgZm9yZWNhc3RxdWVyeXNlcnZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yZWNhc3RxdWVyeXNlcnZpY2UpLFxuICAgIGZvcmVjYXN0c2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mb3JlY2FzdHNlcnZpY2UpLFxuICAgIGZyYXVkZGV0ZWN0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnJhdWRkZXRlY3RvciksXG4gICAgZnN4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZzeCksXG4gICAgZ2FtZWxpZnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2FtZWxpZnQpLFxuICAgIGdsYWNpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2xhY2llciksXG4gICAgZ2xvYmFsYWNjZWxlcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2xvYmFsYWNjZWxlcmF0b3IpLFxuICAgIGdsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2x1ZSksXG4gICAgZ2x1ZWRhdGFicmV3OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdsdWVkYXRhYnJldyksXG4gICAgZ3JlZW5ncmFzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ncmVlbmdyYXNzKSxcbiAgICBncmVlbmdyYXNzdjI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JlZW5ncmFzc3YyKSxcbiAgICBncm91bmRzdGF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VuZHN0YXRpb24pLFxuICAgIGd1YXJkZHV0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ndWFyZGR1dHkpLFxuICAgIGhlYWx0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFsdGgpLFxuICAgIGhlYWx0aGxha2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGVhbHRobGFrZSksXG4gICAgaG9uZXljb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvbmV5Y29kZSksXG4gICAgaWFtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbSksXG4gICAgaWRlbnRpdHlzdG9yZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZGVudGl0eXN0b3JlKSxcbiAgICBpbWFnZWJ1aWxkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VidWlsZGVyKSxcbiAgICBpbnNwZWN0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zcGVjdG9yKSxcbiAgICBpb3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW90KSxcbiAgICBpb3QxY2xpY2tkZXZpY2VzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdDFDbGlja2RldmljZXMpLFxuICAgIGlvdDFjbGlja2RldmljZXNzZXJ2aWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdDFDbGlja2RldmljZXNzZXJ2aWNlKSxcbiAgICBpb3QxY2xpY2twcm9qZWN0czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pb3QxQ2xpY2twcm9qZWN0cyksXG4gICAgaW90YW5hbHl0aWNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdGFuYWx5dGljcyksXG4gICAgaW90ZGF0YXBsYW5lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdGRhdGFwbGFuZSksXG4gICAgaW90ZGV2aWNlYWR2aXNvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pb3RkZXZpY2VhZHZpc29yKSxcbiAgICBpb3RldmVudHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW90ZXZlbnRzKSxcbiAgICBpb3RldmVudHNkYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdGV2ZW50c2RhdGEpLFxuICAgIGlvdGZsZWV0aHViOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdGZsZWV0aHViKSxcbiAgICBpb3Rqb2JzZGF0YXBsYW5lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdGpvYnNkYXRhcGxhbmUpLFxuICAgIGlvdHNlY3VyZXR1bm5lbGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pb3RzZWN1cmV0dW5uZWxpbmcpLFxuICAgIGlvdHNpdGV3aXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdHNpdGV3aXNlKSxcbiAgICBpb3R0aGluZ3NncmFwaDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pb3R0aGluZ3NncmFwaCksXG4gICAgaW90d2lyZWxlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW90d2lyZWxlc3MpLFxuICAgIGthZmthOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmthZmthKSxcbiAgICBrYWZrYWNvbm5lY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2Fma2Fjb25uZWN0KSxcbiAgICBrZW5kcmE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2VuZHJhKSxcbiAgICBraW5lc2lzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXMpLFxuICAgIGtpbmVzaXNhbmFseXRpY3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc2FuYWx5dGljcyksXG4gICAga2luZXNpc2FuYWx5dGljc3YyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNhbmFseXRpY3N2MiksXG4gICAga2luZXNpc3ZpZGVvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXN2aWRlbyksXG4gICAga2luZXNpc3ZpZGVvYXJjaGl2ZWRtZWRpYTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzdmlkZW9hcmNoaXZlZG1lZGlhKSxcbiAgICBraW5lc2lzdmlkZW9tZWRpYTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzdmlkZW9tZWRpYSksXG4gICAga2luZXNpc3ZpZGVvc2lnbmFsaW5nY2hhbm5lbHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc3ZpZGVvc2lnbmFsaW5nY2hhbm5lbHMpLFxuICAgIGttczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXMpLFxuICAgIGxha2Vmb3JtYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFrZWZvcm1hdGlvbiksXG4gICAgbGFtYmRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYSksXG4gICAgbGV4bW9kZWxidWlsZGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sZXhtb2RlbGJ1aWxkaW5nKSxcbiAgICBsZXhtb2RlbGJ1aWxkaW5nc2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sZXhtb2RlbGJ1aWxkaW5nc2VydmljZSksXG4gICAgbGV4bW9kZWxzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxleG1vZGVscyksXG4gICAgbGV4bW9kZWxzdjI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGV4bW9kZWxzdjIpLFxuICAgIGxleHJ1bnRpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGV4cnVudGltZSksXG4gICAgbGV4cnVudGltZXNlcnZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGV4cnVudGltZXNlcnZpY2UpLFxuICAgIGxleHJ1bnRpbWV2MjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sZXhydW50aW1ldjIpLFxuICAgIGxpY2Vuc2VtYW5hZ2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpY2Vuc2VtYW5hZ2VyKSxcbiAgICBsaWdodHNhaWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGlnaHRzYWlsKSxcbiAgICBsb2NhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhdGlvbiksXG4gICAgbG9va291dGVxdWlwbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb29rb3V0ZXF1aXBtZW50KSxcbiAgICBsb29rb3V0Zm9ydmlzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvb2tvdXRmb3J2aXNpb24pLFxuICAgIGxvb2tvdXRtZXRyaWNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvb2tvdXRtZXRyaWNzKSxcbiAgICBtYWNoaW5lbGVhcm5pbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFjaGluZWxlYXJuaW5nKSxcbiAgICBtYWNpZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYWNpZSksXG4gICAgbWFjaWUyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hY2llMiksXG4gICAgbWFuYWdlZGJsb2NrY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuYWdlZGJsb2NrY2hhaW4pLFxuICAgIG1hcmtldHBsYWNlY2F0YWxvZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRwbGFjZWNhdGFsb2cpLFxuICAgIG1hcmtldHBsYWNlY29tbWVyY2VhbmFseXRpY3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFya2V0cGxhY2Vjb21tZXJjZWFuYWx5dGljcyksXG4gICAgbWFya2V0cGxhY2VlbnRpdGxlbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRwbGFjZWVudGl0bGVtZW50KSxcbiAgICBtYXJrZXRwbGFjZWVudGl0bGVtZW50c2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRwbGFjZWVudGl0bGVtZW50c2VydmljZSksXG4gICAgbWFya2V0cGxhY2VtZXRlcmluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRwbGFjZW1ldGVyaW5nKSxcbiAgICBtZWRpYWNvbm5lY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVkaWFjb25uZWN0KSxcbiAgICBtZWRpYWNvbnZlcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVkaWFjb252ZXJ0KSxcbiAgICBtZWRpYWxpdmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVkaWFsaXZlKSxcbiAgICBtZWRpYXBhY2thZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVkaWFwYWNrYWdlKSxcbiAgICBtZWRpYXBhY2thZ2V2b2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVkaWFwYWNrYWdldm9kKSxcbiAgICBtZWRpYXN0b3JlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lZGlhc3RvcmUpLFxuICAgIG1lZGlhc3RvcmVkYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lZGlhc3RvcmVkYXRhKSxcbiAgICBtZWRpYXRhaWxvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZWRpYXRhaWxvciksXG4gICAgbWVtb3J5ZGI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVtb3J5ZGIpLFxuICAgIG1nbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZ24pLFxuICAgIG1pZ3JhdGlvbmh1YjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5taWdyYXRpb25odWIpLFxuICAgIG1pZ3JhdGlvbmh1YmNvbmZpZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5taWdyYXRpb25odWJjb25maWcpLFxuICAgIG1vYmlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb2JpbGUpLFxuICAgIG1vYmlsZWFuYWx5dGljczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb2JpbGVhbmFseXRpY3MpLFxuICAgIG1xOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1xKSxcbiAgICBtdHVyazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tdHVyayksXG4gICAgbXdhYTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5td2FhKSxcbiAgICBuZXB0dW5lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5lcHR1bmUpLFxuICAgIG5ldHdvcmtmaXJld2FsbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrZmlyZXdhbGwpLFxuICAgIG5ldHdvcmttYW5hZ2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmttYW5hZ2VyKSxcbiAgICBuaW1ibGVzdHVkaW86IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmltYmxlc3R1ZGlvKSxcbiAgICBvcHN3b3JrczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcHN3b3JrcyksXG4gICAgb3Bzd29ya3NjbTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcHN3b3Jrc2NtKSxcbiAgICBvcmdhbml6YXRpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbnMpLFxuICAgIG91dHBvc3RzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm91dHBvc3RzKSxcbiAgICBwZXJzb25hbGl6ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wZXJzb25hbGl6ZSksXG4gICAgcGVyc29uYWxpemVldmVudHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGVyc29uYWxpemVldmVudHMpLFxuICAgIHBlcnNvbmFsaXplcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wZXJzb25hbGl6ZXJ1bnRpbWUpLFxuICAgIHBpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBpKSxcbiAgICBwaW5wb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5waW5wb2ludCksXG4gICAgcGlucG9pbnRlbWFpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5waW5wb2ludGVtYWlsKSxcbiAgICBwaW5wb2ludHNtc3ZvaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBpbnBvaW50c21zdm9pY2UpLFxuICAgIHBvbGx5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvbGx5KSxcbiAgICBwcmljaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaWNpbmcpLFxuICAgIHByb21ldGhldXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvbWV0aGV1cyksXG4gICAgcHJvbWV0aGV1c3NlcnZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvbWV0aGV1c3NlcnZpY2UpLFxuICAgIHByb3RvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b24pLFxuICAgIHFsZGI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucWxkYiksXG4gICAgcWxkYnNlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucWxkYnNlc3Npb24pLFxuICAgIHF1aWNrc2lnaHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVpY2tzaWdodCksXG4gICAgcmFtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhbSksXG4gICAgcmRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJkcyksXG4gICAgcmRzZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZHNkYXRhKSxcbiAgICByZHNkYXRhc2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZHNkYXRhc2VydmljZSksXG4gICAgcmVkc2hpZnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVkc2hpZnQpLFxuICAgIHJlZHNoaWZ0ZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdGRhdGEpLFxuICAgIHJla29nbml0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJla29nbml0aW9uKSxcbiAgICByZXNvdXJjZWdyb3VwczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZWdyb3VwcyksXG4gICAgcmVzb3VyY2Vncm91cHN0YWdnaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlZ3JvdXBzdGFnZ2luZyksXG4gICAgcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaSksXG4gICAgcm9ib21ha2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvYm9tYWtlciksXG4gICAgcm91dGU1MzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb3V0ZTUzKSxcbiAgICByb3V0ZTUzZG9tYWluczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb3V0ZTUzRG9tYWlucyksXG4gICAgcm91dGU1M3JlY292ZXJ5Y29udHJvbGNvbmZpZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb3V0ZTUzUmVjb3Zlcnljb250cm9sY29uZmlnKSxcbiAgICByb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm91dGU1M1JlY292ZXJ5cmVhZGluZXNzKSxcbiAgICByb3V0ZTUzcmVzb2x2ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm91dGU1M1Jlc29sdmVyKSxcbiAgICBzMzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgczNjb250cm9sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzQ29udHJvbCksXG4gICAgczNvdXRwb3N0czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHBvc3RzKSxcbiAgICBzYWdlbWFrZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VyKSxcbiAgICBzYWdlbWFrZXJlZGdlbWFuYWdlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJlZGdlbWFuYWdlciksXG4gICAgc2FnZW1ha2VyZmVhdHVyZXN0b3JlcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJmZWF0dXJlc3RvcmVydW50aW1lKSxcbiAgICBzYWdlbWFrZXJydW50aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlcnJ1bnRpbWUpLFxuICAgIHNhdmluZ3NwbGFuczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYXZpbmdzcGxhbnMpLFxuICAgIHNjaGVtYXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NoZW1hcyksXG4gICAgc2RiOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNkYiksXG4gICAgc2VjcmV0c21hbmFnZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0c21hbmFnZXIpLFxuICAgIHNlY3VyaXR5aHViOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5aHViKSxcbiAgICBzZXJ2ZXJsZXNzYXBwbGljYXRpb25yZXBvc2l0b3J5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlcmxlc3NhcHBsaWNhdGlvbnJlcG9zaXRvcnkpLFxuICAgIHNlcnZlcmxlc3NhcHByZXBvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlcmxlc3NhcHByZXBvKSxcbiAgICBzZXJ2ZXJsZXNzcmVwbzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2ZXJsZXNzcmVwbyksXG4gICAgc2VydmljZWNhdGFsb2c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZWNhdGFsb2cpLFxuICAgIHNlcnZpY2VkaXNjb3Zlcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZWRpc2NvdmVyeSksXG4gICAgc2VydmljZXF1b3RhczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlcXVvdGFzKSxcbiAgICBzZXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VzKSxcbiAgICBzZXN2MjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXN2MiksXG4gICAgc2ZuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNmbiksXG4gICAgc2hpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNoaWVsZCksXG4gICAgc2lnbmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpZ25lciksXG4gICAgc2ltcGxlZGI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2ltcGxlZGIpLFxuICAgIHNtczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbXMpLFxuICAgIHNub3diYWxsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNub3diYWxsKSxcbiAgICBzbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25zKSxcbiAgICBzcXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3FzKSxcbiAgICBzc206IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NtKSxcbiAgICBzc21jb250YWN0czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc21jb250YWN0cyksXG4gICAgc3NtaW5jaWRlbnRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzbWluY2lkZW50cyksXG4gICAgc3NvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzbyksXG4gICAgc3NvYWRtaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NvYWRtaW4pLFxuICAgIHNzb29pZGM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3Nvb2lkYyksXG4gICAgc3RlcGZ1bmN0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGVwZnVuY3Rpb25zKSxcbiAgICBzdG9yYWdlZ2F0ZXdheTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdG9yYWdlZ2F0ZXdheSksXG4gICAgc3RzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cyksXG4gICAgc3VwcG9ydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdXBwb3J0KSxcbiAgICBzd2Y6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3dmKSxcbiAgICBzeW50aGV0aWNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN5bnRoZXRpY3MpLFxuICAgIHRleHRyYWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRleHRyYWN0KSxcbiAgICB0aW1lc3RyZWFtcXVlcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGltZXN0cmVhbXF1ZXJ5KSxcbiAgICB0aW1lc3RyZWFtd3JpdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGltZXN0cmVhbXdyaXRlKSxcbiAgICB0cmFuc2NyaWJlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zY3JpYmUpLFxuICAgIHRyYW5zY3JpYmVzZXJ2aWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zY3JpYmVzZXJ2aWNlKSxcbiAgICB0cmFuc2NyaWJlc3RyZWFtaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zY3JpYmVzdHJlYW1pbmcpLFxuICAgIHRyYW5zY3JpYmVzdHJlYW1pbmdzZXJ2aWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zY3JpYmVzdHJlYW1pbmdzZXJ2aWNlKSxcbiAgICB0cmFuc2ZlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2ZlciksXG4gICAgdHJhbnNsYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zbGF0ZSksXG4gICAgd2FmOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhZiksXG4gICAgd2FmcmVnaW9uYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2FmcmVnaW9uYWwpLFxuICAgIHdhZnYyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhZnYyKSxcbiAgICB3ZWxsYXJjaGl0ZWN0ZWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2VsbGFyY2hpdGVjdGVkKSxcbiAgICB3b3JrZG9jczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53b3JrZG9jcyksXG4gICAgd29ya2xpbms6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud29ya2xpbmspLFxuICAgIHdvcmttYWlsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndvcmttYWlsKSxcbiAgICB3b3JrbWFpbG1lc3NhZ2VmbG93OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndvcmttYWlsbWVzc2FnZWZsb3cpLFxuICAgIHdvcmtzcGFjZXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud29ya3NwYWNlcyksXG4gICAgeHJheTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS54cmF5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhd3NQcm92aWRlckVuZHBvaW50c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF3c1Byb3ZpZGVyRW5kcG9pbnRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzc2FuYWx5emVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NhbmFseXplciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYWNjb3VudDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYWNtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY20pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFjbXBjYToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNtcGNhKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhbGV4YWZvcmJ1c2luZXNzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGV4YWZvcmJ1c2luZXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhbXA6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFtcCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYW1wbGlmeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYW1wbGlmeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYW1wbGlmeWJhY2tlbmQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFtcGxpZnliYWNrZW5kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhcGlnYXRld2F5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcGlnYXRld2F5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhcGlnYXRld2F5djI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwaWdhdGV3YXl2MiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwYXV0b3NjYWxpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGF1dG9zY2FsaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhcHBjb25maWc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGNvbmZpZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwZmxvdzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwZmxvdyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwaW50ZWdyYXRpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcHBpbnRlZ3JhdGlvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFwcGludGVncmF0aW9uc3NlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGludGVncmF0aW9uc3NlcnZpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFwcGxpY2F0aW9uYXV0b3NjYWxpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uYXV0b3NjYWxpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFwcGxpY2F0aW9uY29zdHByb2ZpbGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvbmNvc3Rwcm9maWxlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwbGljYXRpb25kaXNjb3Zlcnk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uZGlzY292ZXJ5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhcHBsaWNhdGlvbmRpc2NvdmVyeXNlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uZGlzY292ZXJ5c2VydmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwbGljYXRpb25pbnNpZ2h0czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25pbnNpZ2h0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwbWVzaDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwbWVzaCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwcmVnaXN0cnk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcHJlZ2lzdHJ5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhcHBydW5uZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcHJ1bm5lciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwc3RyZWFtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcHBzdHJlYW0pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFwcHN5bmM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcHN5bmMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGF0aGVuYToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXRoZW5hKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhdWRpdG1hbmFnZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1ZGl0bWFuYWdlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXVnbWVudGVkYWlydW50aW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdWdtZW50ZWRhaXJ1bnRpbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGF1dG9zY2FsaW5nOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRvc2NhbGluZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXV0b3NjYWxpbmdwbGFuczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0b3NjYWxpbmdwbGFucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYmFja3VwOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5iYWNrdXApLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGJhdGNoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5iYXRjaCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYnJha2V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5icmFrZXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGJ1ZGdldHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1ZGdldHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNoaW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jaGltZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2xvdWQ5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbG91ZDkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3VkY29udHJvbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRjb250cm9sKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjbG91ZGNvbnRyb2xhcGk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkY29udHJvbGFwaSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2xvdWRkaXJlY3Rvcnk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkZGlyZWN0b3J5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjbG91ZGZvcm1hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRmb3JtYXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3VkZnJvbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkZnJvbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3VkaHNtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbG91ZGhzbSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2xvdWRoc212Mjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRoc212MiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2xvdWRzZWFyY2g6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkc2VhcmNoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjbG91ZHNlYXJjaGRvbWFpbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRzZWFyY2hkb21haW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3VkdHJhaWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkdHJhaWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3Vkd2F0Y2g6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2gpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3Vkd2F0Y2hldmVudHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hldmVudHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3Vkd2F0Y2hsb2dzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNobG9ncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29kZWFydGlmYWN0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlYXJ0aWZhY3QpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvZGVidWlsZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29kZWJ1aWxkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2RlY29tbWl0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlY29tbWl0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2RlZGVwbG95OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlZGVwbG95KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2RlZ3VydXByb2ZpbGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlZ3VydXByb2ZpbGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2RlZ3VydXJldmlld2VyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlZ3VydXJldmlld2VyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2RlcGlwZWxpbmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvZGVwaXBlbGluZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29kZXN0YXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvZGVzdGFyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2Rlc3RhcmNvbm5lY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2Rlc3RhcmNvbm5lY3Rpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb2Rlc3Rhcm5vdGlmaWNhdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvZGVzdGFybm90aWZpY2F0aW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29nbml0b2lkZW50aXR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2duaXRvaWRlbnRpdHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvZ25pdG9pZGVudGl0eXByb3ZpZGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2duaXRvaWRlbnRpdHlwcm92aWRlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29nbml0b2lkcDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29nbml0b2lkcCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29nbml0b3N5bmM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvZ25pdG9zeW5jKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb21wcmVoZW5kOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb21wcmVoZW5kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb21wcmVoZW5kbWVkaWNhbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlaGVuZG1lZGljYWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvbmZpZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29uZmlnKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb25maWdzZXJ2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25maWdzZXJ2aWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb25uZWN0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb25uZWN0Y29udGFjdGxlbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rjb250YWN0bGVucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29ubmVjdHBhcnRpY2lwYW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0cGFydGljaXBhbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvc3RhbmR1c2FnZXJlcG9ydHNlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvc3RhbmR1c2FnZXJlcG9ydHNlcnZpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvc3RleHBsb3Jlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29zdGV4cGxvcmVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjdXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmN1ciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGF0YWJhc2VtaWdyYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlbWlncmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkYXRhYmFzZW1pZ3JhdGlvbnNlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlbWlncmF0aW9uc2VydmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGF0YWV4Y2hhbmdlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kYXRhZXhjaGFuZ2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRhdGFwaXBlbGluZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF0YXBpcGVsaW5lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkYXRhc3luYzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF0YXN5bmMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRheDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF4KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZXRlY3RpdmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldGVjdGl2ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGV2aWNlZmFybToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlZmFybSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGV2b3BzZ3VydToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGV2b3BzZ3VydSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGlyZWN0Y29ubmVjdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0Y29ubmVjdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGxtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kbG0pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRtczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZG1zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkb2NkYjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZG9jZGIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZHluYW1vZGI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmR5bmFtb2RiKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkeW5hbW9kYnN0cmVhbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmR5bmFtb2Ric3RyZWFtcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWMyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lYzIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVjMmluc3RhbmNlY29ubmVjdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWMySW5zdGFuY2Vjb25uZWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlY3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVjciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWNycHVibGljOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lY3JwdWJsaWMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVjczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlZnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVmcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWtzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5la3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVsYXN0aWNhY2hlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbGFzdGljYWNoZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWxhc3RpY2JlYW5zdGFsazoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY2JlYW5zdGFsayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWxhc3RpY2luZmVyZW5jZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY2luZmVyZW5jZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWxhc3RpY3NlYXJjaDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY3NlYXJjaCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWxhc3RpY3NlYXJjaHNlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVsYXN0aWNzZWFyY2hzZXJ2aWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlbGFzdGljdHJhbnNjb2Rlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY3RyYW5zY29kZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVsYjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWxiKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlbGJ2Mjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWxidjIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVtcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW1yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlbXJjb250YWluZXJzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbXJjb250YWluZXJzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGV2ZW50YnJpZGdlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ldmVudGJyaWRnZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ldmVudHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZpbnNwYWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maW5zcGFjZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZmluc3BhY2VkYXRhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maW5zcGFjZWRhdGEpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZpcmVob3NlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maXJlaG9zZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZmlzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZtczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZm1zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmb3JlY2FzdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZm9yZWNhc3QpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZvcmVjYXN0cXVlcnk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZvcmVjYXN0cXVlcnkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZvcmVjYXN0cXVlcnlzZXJ2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mb3JlY2FzdHF1ZXJ5c2VydmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZm9yZWNhc3RzZXJ2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mb3JlY2FzdHNlcnZpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZyYXVkZGV0ZWN0b3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZyYXVkZGV0ZWN0b3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZzeDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZnN4KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBnYW1lbGlmdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZ2FtZWxpZnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGdsYWNpZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmdsYWNpZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGdsb2JhbGFjY2VsZXJhdG9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5nbG9iYWxhY2NlbGVyYXRvciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZ2x1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZ2x1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZ2x1ZWRhdGFicmV3OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5nbHVlZGF0YWJyZXcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGdyZWVuZ3Jhc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmdyZWVuZ3Jhc3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGdyZWVuZ3Jhc3N2Mjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZ3JlZW5ncmFzc3YyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBncm91bmRzdGF0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ncm91bmRzdGF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBndWFyZGR1dHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmd1YXJkZHV0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaGVhbHRoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5oZWFsdGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGhlYWx0aGxha2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aGxha2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGhvbmV5Y29kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaG9uZXljb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpYW06IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlhbSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWRlbnRpdHlzdG9yZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWRlbnRpdHlzdG9yZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW1hZ2VidWlsZGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbWFnZWJ1aWxkZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3BlY3Rvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zcGVjdG9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpb3Q6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlvdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90MWNsaWNrZGV2aWNlczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW90MUNsaWNrZGV2aWNlcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90MWNsaWNrZGV2aWNlc3NlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlvdDFDbGlja2RldmljZXNzZXJ2aWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpb3QxY2xpY2twcm9qZWN0czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW90MUNsaWNrcHJvamVjdHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlvdGFuYWx5dGljczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW90YW5hbHl0aWNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpb3RkYXRhcGxhbmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlvdGRhdGFwbGFuZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90ZGV2aWNlYWR2aXNvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW90ZGV2aWNlYWR2aXNvciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90ZXZlbnRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pb3RldmVudHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlvdGV2ZW50c2RhdGE6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlvdGV2ZW50c2RhdGEpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlvdGZsZWV0aHViOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pb3RmbGVldGh1YiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90am9ic2RhdGFwbGFuZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW90am9ic2RhdGFwbGFuZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90c2VjdXJldHVubmVsaW5nOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pb3RzZWN1cmV0dW5uZWxpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlvdHNpdGV3aXNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pb3RzaXRld2lzZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW90dGhpbmdzZ3JhcGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlvdHRoaW5nc2dyYXBoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpb3R3aXJlbGVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW90d2lyZWxlc3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGthZmthOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rYWZrYSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAga2Fma2Fjb25uZWN0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rYWZrYWNvbm5lY3QpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGtlbmRyYToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2VuZHJhKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBraW5lc2lzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBraW5lc2lzYW5hbHl0aWNzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzYW5hbHl0aWNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBraW5lc2lzYW5hbHl0aWNzdjI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNhbmFseXRpY3N2MiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAga2luZXNpc3ZpZGVvOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzdmlkZW8pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGtpbmVzaXN2aWRlb2FyY2hpdmVkbWVkaWE6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXN2aWRlb2FyY2hpdmVkbWVkaWEpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGtpbmVzaXN2aWRlb21lZGlhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzdmlkZW9tZWRpYSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAga2luZXNpc3ZpZGVvc2lnbmFsaW5nY2hhbm5lbHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXN2aWRlb3NpZ25hbGluZ2NoYW5uZWxzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBrbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmttcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGFrZWZvcm1hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGFrZWZvcm1hdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGFtYmRhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYW1iZGEpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxleG1vZGVsYnVpbGRpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxleG1vZGVsYnVpbGRpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxleG1vZGVsYnVpbGRpbmdzZXJ2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sZXhtb2RlbGJ1aWxkaW5nc2VydmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGV4bW9kZWxzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sZXhtb2RlbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxleG1vZGVsc3YyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sZXhtb2RlbHN2MiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGV4cnVudGltZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGV4cnVudGltZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGV4cnVudGltZXNlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxleHJ1bnRpbWVzZXJ2aWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsZXhydW50aW1ldjI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxleHJ1bnRpbWV2MiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGljZW5zZW1hbmFnZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxpY2Vuc2VtYW5hZ2VyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsaWdodHNhaWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxpZ2h0c2FpbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxvY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsb29rb3V0ZXF1aXBtZW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sb29rb3V0ZXF1aXBtZW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsb29rb3V0Zm9ydmlzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sb29rb3V0Zm9ydmlzaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsb29rb3V0bWV0cmljczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubG9va291dG1ldHJpY3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1hY2hpbmVsZWFybmluZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFjaGluZWxlYXJuaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYWNpZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFjaWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1hY2llMjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFjaWUyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYW5hZ2VkYmxvY2tjaGFpbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFuYWdlZGJsb2NrY2hhaW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1hcmtldHBsYWNlY2F0YWxvZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFya2V0cGxhY2VjYXRhbG9nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYXJrZXRwbGFjZWNvbW1lcmNlYW5hbHl0aWNzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRwbGFjZWNvbW1lcmNlYW5hbHl0aWNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYXJrZXRwbGFjZWVudGl0bGVtZW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRwbGFjZWVudGl0bGVtZW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtYXJrZXRwbGFjZWVudGl0bGVtZW50c2VydmljZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFya2V0cGxhY2VlbnRpdGxlbWVudHNlcnZpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1hcmtldHBsYWNlbWV0ZXJpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1hcmtldHBsYWNlbWV0ZXJpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1lZGlhY29ubmVjdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVkaWFjb25uZWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZWRpYWNvbnZlcnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1lZGlhY29udmVydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWVkaWFsaXZlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZWRpYWxpdmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1lZGlhcGFja2FnZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVkaWFwYWNrYWdlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZWRpYXBhY2thZ2V2b2Q6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1lZGlhcGFja2FnZXZvZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWVkaWFzdG9yZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVkaWFzdG9yZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWVkaWFzdG9yZWRhdGE6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1lZGlhc3RvcmVkYXRhKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZWRpYXRhaWxvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVkaWF0YWlsb3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1lbW9yeWRiOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZW1vcnlkYiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWduOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZ24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1pZ3JhdGlvbmh1Yjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWlncmF0aW9uaHViKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtaWdyYXRpb25odWJjb25maWc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1pZ3JhdGlvbmh1YmNvbmZpZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbW9iaWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tb2JpbGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1vYmlsZWFuYWx5dGljczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubW9iaWxlYW5hbHl0aWNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtcToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubXEpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG10dXJrOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tdHVyayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbXdhYToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubXdhYSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmVwdHVuZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmVwdHVuZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmV0d29ya2ZpcmV3YWxsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrZmlyZXdhbGwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5ldHdvcmttYW5hZ2VyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrbWFuYWdlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmltYmxlc3R1ZGlvOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uaW1ibGVzdHVkaW8pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG9wc3dvcmtzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vcHN3b3JrcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3Bzd29ya3NjbToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEub3Bzd29ya3NjbSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3JnYW5pemF0aW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEub3JnYW5pemF0aW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3V0cG9zdHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm91dHBvc3RzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwZXJzb25hbGl6ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGVyc29uYWxpemUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBlcnNvbmFsaXplZXZlbnRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wZXJzb25hbGl6ZWV2ZW50cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGVyc29uYWxpemVydW50aW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wZXJzb25hbGl6ZXJ1bnRpbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBpOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5waSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGlucG9pbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBpbnBvaW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwaW5wb2ludGVtYWlsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5waW5wb2ludGVtYWlsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwaW5wb2ludHNtc3ZvaWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5waW5wb2ludHNtc3ZvaWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwb2xseToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucG9sbHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByaWNpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByaWNpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByb21ldGhldXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByb21ldGhldXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByb21ldGhldXNzZXJ2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm9tZXRoZXVzc2VydmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJvdG9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm90b24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHFsZGI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnFsZGIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHFsZGJzZXNzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5xbGRic2Vzc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcXVpY2tzaWdodDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucXVpY2tzaWdodCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmFtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yYW0pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJkczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZHNkYXRhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZHNkYXRhKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZHNkYXRhc2VydmljZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmRzZGF0YXNlcnZpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlZHNoaWZ0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVkc2hpZnRkYXRhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdGRhdGEpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJla29nbml0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWtvZ25pdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVzb3VyY2Vncm91cHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlZ3JvdXBzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZXNvdXJjZWdyb3Vwc3RhZ2dpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlZ3JvdXBzdGFnZ2luZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJvYm9tYWtlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucm9ib21ha2VyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByb3V0ZTUzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yb3V0ZTUzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByb3V0ZTUzZG9tYWluczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucm91dGU1M0RvbWFpbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJvdXRlNTNyZWNvdmVyeWNvbnRyb2xjb25maWc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJvdXRlNTNSZWNvdmVyeWNvbnRyb2xjb25maWcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJvdXRlNTNyZWNvdmVyeXJlYWRpbmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucm91dGU1M1JlY292ZXJ5cmVhZGluZXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByb3V0ZTUzcmVzb2x2ZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJvdXRlNTNSZXNvbHZlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgczM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnMzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzM2NvbnRyb2w6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnMzQ29udHJvbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgczNvdXRwb3N0czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwb3N0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNhZ2VtYWtlcmVkZ2VtYW5hZ2VyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJlZGdlbWFuYWdlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VyZmVhdHVyZXN0b3JlcnVudGltZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VyZmVhdHVyZXN0b3JlcnVudGltZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2FnZW1ha2VycnVudGltZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VycnVudGltZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2F2aW5nc3BsYW5zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zYXZpbmdzcGxhbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNjaGVtYXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjaGVtYXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNkYjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2RiKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzZWNyZXRzbWFuYWdlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0c21hbmFnZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlY3VyaXR5aHViOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eWh1YiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VydmVybGVzc2FwcGxpY2F0aW9ucmVwb3NpdG9yeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VydmVybGVzc2FwcGxpY2F0aW9ucmVwb3NpdG9yeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VydmVybGVzc2FwcHJlcG86IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlcmxlc3NhcHByZXBvKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzZXJ2ZXJsZXNzcmVwbzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VydmVybGVzc3JlcG8pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlcnZpY2VjYXRhbG9nOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlY2F0YWxvZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VydmljZWRpc2NvdmVyeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZWRpc2NvdmVyeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VydmljZXF1b3Rhczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZXF1b3RhcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlc3YyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXN2MiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2ZuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNoaWVsZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2hpZWxkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzaWduZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNpZ25lciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2ltcGxlZGI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNpbXBsZWRiKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNtcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc25vd2JhbGw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNub3diYWxsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3FzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zcXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNzbToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3NtKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzc21jb250YWN0czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3NtY29udGFjdHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNzbWluY2lkZW50czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3NtaW5jaWRlbnRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzc286IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNzbyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3NvYWRtaW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNzb2FkbWluKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzc29vaWRjOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zc29vaWRjKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdGVwZnVuY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGVwZnVuY3Rpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdG9yYWdlZ2F0ZXdheToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZWdhdGV3YXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdXBwb3J0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdXBwb3J0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzd2Y6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN3ZiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3ludGhldGljczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3ludGhldGljcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGV4dHJhY3Q6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRleHRyYWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0aW1lc3RyZWFtcXVlcnk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWVzdHJlYW1xdWVyeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGltZXN0cmVhbXdyaXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aW1lc3RyZWFtd3JpdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRyYW5zY3JpYmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zY3JpYmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRyYW5zY3JpYmVzZXJ2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50cmFuc2NyaWJlc2VydmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdHJhbnNjcmliZXN0cmVhbWluZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJhbnNjcmliZXN0cmVhbWluZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdHJhbnNjcmliZXN0cmVhbWluZ3NlcnZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zY3JpYmVzdHJlYW1pbmdzZXJ2aWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0cmFuc2Zlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJhbnNmZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRyYW5zbGF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJhbnNsYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3YWY6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLndhZiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgd2FmcmVnaW9uYWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLndhZnJlZ2lvbmFsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3YWZ2Mjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEud2FmdjIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHdlbGxhcmNoaXRlY3RlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEud2VsbGFyY2hpdGVjdGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3b3JrZG9jczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEud29ya2RvY3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHdvcmtsaW5rOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS53b3JrbGluayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgd29ya21haWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLndvcmttYWlsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3b3JrbWFpbG1lc3NhZ2VmbG93OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS53b3JrbWFpbG1lc3NhZ2VmbG93KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3b3Jrc3BhY2VzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS53b3Jrc3BhY2VzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB4cmF5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS54cmF5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBd3NQcm92aWRlcklnbm9yZVRhZ3Mge1xuICAvKipcbiAgKiBSZXNvdXJjZSB0YWcga2V5IHByZWZpeGVzIHRvIGlnbm9yZSBhY3Jvc3MgYWxsIHJlc291cmNlcy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3Mja2V5X3ByZWZpeGVzIEF3c1Byb3ZpZGVyI2tleV9wcmVmaXhlc31cbiAgKi9cbiAgcmVhZG9ubHkga2V5UHJlZml4ZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogUmVzb3VyY2UgdGFnIGtleXMgdG8gaWdub3JlIGFjcm9zcyBhbGwgcmVzb3VyY2VzLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyNrZXlzIEF3c1Byb3ZpZGVyI2tleXN9XG4gICovXG4gIHJlYWRvbmx5IGtleXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF3c1Byb3ZpZGVySWdub3JlVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IEF3c1Byb3ZpZGVySWdub3JlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXlfcHJlZml4ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmtleVByZWZpeGVzKSxcbiAgICBrZXlzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5rZXlzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhd3NQcm92aWRlcklnbm9yZVRhZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBd3NQcm92aWRlcklnbm9yZVRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGtleV9wcmVmaXhlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmtleVByZWZpeGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAga2V5czoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmtleXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcyBhd3N9XG4qL1xuZXhwb3J0IGNsYXNzIEF3c1Byb3ZpZGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c1wiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBBd3NQcm92aWRlciByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBBd3NQcm92aWRlciB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQXdzUHJvdmlkZXIgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEF3c1Byb3ZpZGVyIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c1wiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MgYXdzfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBBd3NQcm92aWRlckNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBd3NQcm92aWRlckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgdGVycmFmb3JtUHJvdmlkZXJTb3VyY2U6ICdhd3MnXG4gICAgfSk7XG4gICAgdGhpcy5fYWNjZXNzS2V5ID0gY29uZmlnLmFjY2Vzc0tleTtcbiAgICB0aGlzLl9hbGxvd2VkQWNjb3VudElkcyA9IGNvbmZpZy5hbGxvd2VkQWNjb3VudElkcztcbiAgICB0aGlzLl9mb3JiaWRkZW5BY2NvdW50SWRzID0gY29uZmlnLmZvcmJpZGRlbkFjY291bnRJZHM7XG4gICAgdGhpcy5faHR0cFByb3h5ID0gY29uZmlnLmh0dHBQcm94eTtcbiAgICB0aGlzLl9pbnNlY3VyZSA9IGNvbmZpZy5pbnNlY3VyZTtcbiAgICB0aGlzLl9tYXhSZXRyaWVzID0gY29uZmlnLm1heFJldHJpZXM7XG4gICAgdGhpcy5fcHJvZmlsZSA9IGNvbmZpZy5wcm9maWxlO1xuICAgIHRoaXMuX3JlZ2lvbiA9IGNvbmZpZy5yZWdpb247XG4gICAgdGhpcy5fczNGb3JjZVBhdGhTdHlsZSA9IGNvbmZpZy5zM0ZvcmNlUGF0aFN0eWxlO1xuICAgIHRoaXMuX3NlY3JldEtleSA9IGNvbmZpZy5zZWNyZXRLZXk7XG4gICAgdGhpcy5fc2hhcmVkQ3JlZGVudGlhbHNGaWxlID0gY29uZmlnLnNoYXJlZENyZWRlbnRpYWxzRmlsZTtcbiAgICB0aGlzLl9za2lwQ3JlZGVudGlhbHNWYWxpZGF0aW9uID0gY29uZmlnLnNraXBDcmVkZW50aWFsc1ZhbGlkYXRpb247XG4gICAgdGhpcy5fc2tpcEdldEVjMlBsYXRmb3JtcyA9IGNvbmZpZy5za2lwR2V0RWMyUGxhdGZvcm1zO1xuICAgIHRoaXMuX3NraXBNZXRhZGF0YUFwaUNoZWNrID0gY29uZmlnLnNraXBNZXRhZGF0YUFwaUNoZWNrO1xuICAgIHRoaXMuX3NraXBSZWdpb25WYWxpZGF0aW9uID0gY29uZmlnLnNraXBSZWdpb25WYWxpZGF0aW9uO1xuICAgIHRoaXMuX3NraXBSZXF1ZXN0aW5nQWNjb3VudElkID0gY29uZmlnLnNraXBSZXF1ZXN0aW5nQWNjb3VudElkO1xuICAgIHRoaXMuX3Rva2VuID0gY29uZmlnLnRva2VuO1xuICAgIHRoaXMuX2FsaWFzID0gY29uZmlnLmFsaWFzO1xuICAgIHRoaXMuX2Fzc3VtZVJvbGUgPSBjb25maWcuYXNzdW1lUm9sZTtcbiAgICB0aGlzLl9kZWZhdWx0VGFncyA9IGNvbmZpZy5kZWZhdWx0VGFncztcbiAgICB0aGlzLl9lbmRwb2ludHMgPSBjb25maWcuZW5kcG9pbnRzO1xuICAgIHRoaXMuX2lnbm9yZVRhZ3MgPSBjb25maWcuaWdub3JlVGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXNzX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzS2V5O1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hY2Nlc3NLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NLZXkoKSB7XG4gICAgdGhpcy5fYWNjZXNzS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzS2V5O1xuICB9XG5cbiAgLy8gYWxsb3dlZF9hY2NvdW50X2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd2VkQWNjb3VudElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhbGxvd2VkQWNjb3VudElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZEFjY291bnRJZHM7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkQWNjb3VudElkcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbGxvd2VkQWNjb3VudElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93ZWRBY2NvdW50SWRzKCkge1xuICAgIHRoaXMuX2FsbG93ZWRBY2NvdW50SWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkQWNjb3VudElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkQWNjb3VudElkcztcbiAgfVxuXG4gIC8vIGZvcmJpZGRlbl9hY2NvdW50X2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JiaWRkZW5BY2NvdW50SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGZvcmJpZGRlbkFjY291bnRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmJpZGRlbkFjY291bnRJZHM7XG4gIH1cbiAgcHVibGljIHNldCBmb3JiaWRkZW5BY2NvdW50SWRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcmJpZGRlbkFjY291bnRJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JiaWRkZW5BY2NvdW50SWRzKCkge1xuICAgIHRoaXMuX2ZvcmJpZGRlbkFjY291bnRJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcmJpZGRlbkFjY291bnRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yYmlkZGVuQWNjb3VudElkcztcbiAgfVxuXG4gIC8vIGh0dHBfcHJveHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFByb3h5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBodHRwUHJveHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBQcm94eTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBQcm94eSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faHR0cFByb3h5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFByb3h5KCkge1xuICAgIHRoaXMuX2h0dHBQcm94eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cFByb3h5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBQcm94eTtcbiAgfVxuXG4gIC8vIGluc2VjdXJlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc2VjdXJlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbnNlY3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zZWN1cmU7XG4gIH1cbiAgcHVibGljIHNldCBpbnNlY3VyZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5zZWN1cmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnNlY3VyZSgpIHtcbiAgICB0aGlzLl9pbnNlY3VyZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zZWN1cmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zZWN1cmU7XG4gIH1cblxuICAvLyBtYXhfcmV0cmllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhSZXRyaWVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhSZXRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhSZXRyaWVzO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4UmV0cmllcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFJldHJpZXMoKSB7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UmV0cmllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhSZXRyaWVzO1xuICB9XG5cbiAgLy8gcHJvZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9maWxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm9maWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxlO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvZmlsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJvZmlsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2ZpbGUoKSB7XG4gICAgdGhpcy5fcHJvZmlsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxlO1xuICB9XG5cbiAgLy8gcmVnaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlZ2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpb247XG4gIH1cbiAgcHVibGljIHNldCByZWdpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlZ2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaW9uO1xuICB9XG5cbiAgLy8gczNfZm9yY2VfcGF0aF9zdHlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0ZvcmNlUGF0aFN0eWxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzM0ZvcmNlUGF0aFN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zM0ZvcmNlUGF0aFN0eWxlO1xuICB9XG4gIHB1YmxpYyBzZXQgczNGb3JjZVBhdGhTdHlsZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fczNGb3JjZVBhdGhTdHlsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzRm9yY2VQYXRoU3R5bGUoKSB7XG4gICAgdGhpcy5fczNGb3JjZVBhdGhTdHlsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNGb3JjZVBhdGhTdHlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0ZvcmNlUGF0aFN0eWxlO1xuICB9XG5cbiAgLy8gc2VjcmV0X2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWNyZXRLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0S2V5O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0S2V5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZWNyZXRLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWNyZXRLZXkoKSB7XG4gICAgdGhpcy5fc2VjcmV0S2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXRLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0S2V5O1xuICB9XG5cbiAgLy8gc2hhcmVkX2NyZWRlbnRpYWxzX2ZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2hhcmVkQ3JlZGVudGlhbHNGaWxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzaGFyZWRDcmVkZW50aWFsc0ZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlZENyZWRlbnRpYWxzRmlsZTtcbiAgfVxuICBwdWJsaWMgc2V0IHNoYXJlZENyZWRlbnRpYWxzRmlsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hhcmVkQ3JlZGVudGlhbHNGaWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2hhcmVkQ3JlZGVudGlhbHNGaWxlKCkge1xuICAgIHRoaXMuX3NoYXJlZENyZWRlbnRpYWxzRmlsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2hhcmVkQ3JlZGVudGlhbHNGaWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlZENyZWRlbnRpYWxzRmlsZTtcbiAgfVxuXG4gIC8vIHNraXBfY3JlZGVudGlhbHNfdmFsaWRhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9za2lwQ3JlZGVudGlhbHNWYWxpZGF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBza2lwQ3JlZGVudGlhbHNWYWxpZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwQ3JlZGVudGlhbHNWYWxpZGF0aW9uO1xuICB9XG4gIHB1YmxpYyBzZXQgc2tpcENyZWRlbnRpYWxzVmFsaWRhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2tpcENyZWRlbnRpYWxzVmFsaWRhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNraXBDcmVkZW50aWFsc1ZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fc2tpcENyZWRlbnRpYWxzVmFsaWRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tpcENyZWRlbnRpYWxzVmFsaWRhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwQ3JlZGVudGlhbHNWYWxpZGF0aW9uO1xuICB9XG5cbiAgLy8gc2tpcF9nZXRfZWMyX3BsYXRmb3JtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9za2lwR2V0RWMyUGxhdGZvcm1zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBza2lwR2V0RWMyUGxhdGZvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwR2V0RWMyUGxhdGZvcm1zO1xuICB9XG4gIHB1YmxpYyBzZXQgc2tpcEdldEVjMlBsYXRmb3Jtcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2tpcEdldEVjMlBsYXRmb3JtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNraXBHZXRFYzJQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5fc2tpcEdldEVjMlBsYXRmb3JtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tpcEdldEVjMlBsYXRmb3Jtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwR2V0RWMyUGxhdGZvcm1zO1xuICB9XG5cbiAgLy8gc2tpcF9tZXRhZGF0YV9hcGlfY2hlY2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tpcE1ldGFkYXRhQXBpQ2hlY2s/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNraXBNZXRhZGF0YUFwaUNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwTWV0YWRhdGFBcGlDaGVjaztcbiAgfVxuICBwdWJsaWMgc2V0IHNraXBNZXRhZGF0YUFwaUNoZWNrKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9za2lwTWV0YWRhdGFBcGlDaGVjayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNraXBNZXRhZGF0YUFwaUNoZWNrKCkge1xuICAgIHRoaXMuX3NraXBNZXRhZGF0YUFwaUNoZWNrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBza2lwTWV0YWRhdGFBcGlDaGVja0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwTWV0YWRhdGFBcGlDaGVjaztcbiAgfVxuXG4gIC8vIHNraXBfcmVnaW9uX3ZhbGlkYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tpcFJlZ2lvblZhbGlkYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNraXBSZWdpb25WYWxpZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwUmVnaW9uVmFsaWRhdGlvbjtcbiAgfVxuICBwdWJsaWMgc2V0IHNraXBSZWdpb25WYWxpZGF0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9za2lwUmVnaW9uVmFsaWRhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNraXBSZWdpb25WYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3NraXBSZWdpb25WYWxpZGF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBza2lwUmVnaW9uVmFsaWRhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwUmVnaW9uVmFsaWRhdGlvbjtcbiAgfVxuXG4gIC8vIHNraXBfcmVxdWVzdGluZ19hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NraXBSZXF1ZXN0aW5nQWNjb3VudElkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBza2lwUmVxdWVzdGluZ0FjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tpcFJlcXVlc3RpbmdBY2NvdW50SWQ7XG4gIH1cbiAgcHVibGljIHNldCBza2lwUmVxdWVzdGluZ0FjY291bnRJZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2tpcFJlcXVlc3RpbmdBY2NvdW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTa2lwUmVxdWVzdGluZ0FjY291bnRJZCgpIHtcbiAgICB0aGlzLl9za2lwUmVxdWVzdGluZ0FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tpcFJlcXVlc3RpbmdBY2NvdW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tpcFJlcXVlc3RpbmdBY2NvdW50SWQ7XG4gIH1cblxuICAvLyB0b2tlbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b2tlbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICB9XG4gIHB1YmxpYyBzZXQgdG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Rva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG9rZW4oKSB7XG4gICAgdGhpcy5fdG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICB9XG5cbiAgLy8gYWxpYXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxpYXM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFsaWFzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlhcztcbiAgfVxuICBwdWJsaWMgc2V0IGFsaWFzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbGlhcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsaWFzKCkge1xuICAgIHRoaXMuX2FsaWFzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGlhc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlhcztcbiAgfVxuXG4gIC8vIGFzc3VtZV9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fzc3VtZVJvbGU/OiBBd3NQcm92aWRlckFzc3VtZVJvbGU7IFxuICBwdWJsaWMgZ2V0IGFzc3VtZVJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc3VtZVJvbGU7XG4gIH1cbiAgcHVibGljIHNldCBhc3N1bWVSb2xlKHZhbHVlOiBBd3NQcm92aWRlckFzc3VtZVJvbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hc3N1bWVSb2xlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXNzdW1lUm9sZSgpIHtcbiAgICB0aGlzLl9hc3N1bWVSb2xlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhc3N1bWVSb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc3VtZVJvbGU7XG4gIH1cblxuICAvLyBkZWZhdWx0X3RhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFRhZ3M/OiBBd3NQcm92aWRlckRlZmF1bHRUYWdzOyBcbiAgcHVibGljIGdldCBkZWZhdWx0VGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFRhZ3M7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0VGFncyh2YWx1ZTogQXdzUHJvdmlkZXJEZWZhdWx0VGFncyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlZmF1bHRUYWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFRhZ3MoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFRhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUYWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRUYWdzO1xuICB9XG5cbiAgLy8gZW5kcG9pbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZHBvaW50cz86IEF3c1Byb3ZpZGVyRW5kcG9pbnRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludHM7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludHModmFsdWU6IEF3c1Byb3ZpZGVyRW5kcG9pbnRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuZHBvaW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZHBvaW50cygpIHtcbiAgICB0aGlzLl9lbmRwb2ludHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludHM7XG4gIH1cblxuICAvLyBpZ25vcmVfdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZ25vcmVUYWdzPzogQXdzUHJvdmlkZXJJZ25vcmVUYWdzOyBcbiAgcHVibGljIGdldCBpZ25vcmVUYWdzKCkge1xuICAgIHJldHVybiB0aGlzLl9pZ25vcmVUYWdzO1xuICB9XG4gIHB1YmxpYyBzZXQgaWdub3JlVGFncyh2YWx1ZTogQXdzUHJvdmlkZXJJZ25vcmVUYWdzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWdub3JlVGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElnbm9yZVRhZ3MoKSB7XG4gICAgdGhpcy5faWdub3JlVGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWdub3JlVGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZ25vcmVUYWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3Nfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY2Nlc3NLZXkpLFxuICAgICAgYWxsb3dlZF9hY2NvdW50X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2FsbG93ZWRBY2NvdW50SWRzKSxcbiAgICAgIGZvcmJpZGRlbl9hY2NvdW50X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2ZvcmJpZGRlbkFjY291bnRJZHMpLFxuICAgICAgaHR0cF9wcm94eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faHR0cFByb3h5KSxcbiAgICAgIGluc2VjdXJlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5faW5zZWN1cmUpLFxuICAgICAgbWF4X3JldHJpZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heFJldHJpZXMpLFxuICAgICAgcHJvZmlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJvZmlsZSksXG4gICAgICByZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlZ2lvbiksXG4gICAgICBzM19mb3JjZV9wYXRoX3N0eWxlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fczNGb3JjZVBhdGhTdHlsZSksXG4gICAgICBzZWNyZXRfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZWNyZXRLZXkpLFxuICAgICAgc2hhcmVkX2NyZWRlbnRpYWxzX2ZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NoYXJlZENyZWRlbnRpYWxzRmlsZSksXG4gICAgICBza2lwX2NyZWRlbnRpYWxzX3ZhbGlkYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9za2lwQ3JlZGVudGlhbHNWYWxpZGF0aW9uKSxcbiAgICAgIHNraXBfZ2V0X2VjMl9wbGF0Zm9ybXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9za2lwR2V0RWMyUGxhdGZvcm1zKSxcbiAgICAgIHNraXBfbWV0YWRhdGFfYXBpX2NoZWNrOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc2tpcE1ldGFkYXRhQXBpQ2hlY2spLFxuICAgICAgc2tpcF9yZWdpb25fdmFsaWRhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3NraXBSZWdpb25WYWxpZGF0aW9uKSxcbiAgICAgIHNraXBfcmVxdWVzdGluZ19hY2NvdW50X2lkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc2tpcFJlcXVlc3RpbmdBY2NvdW50SWQpLFxuICAgICAgdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Rva2VuKSxcbiAgICAgIGFsaWFzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbGlhcyksXG4gICAgICBhc3N1bWVfcm9sZTogYXdzUHJvdmlkZXJBc3N1bWVSb2xlVG9UZXJyYWZvcm0odGhpcy5fYXNzdW1lUm9sZSksXG4gICAgICBkZWZhdWx0X3RhZ3M6IGF3c1Byb3ZpZGVyRGVmYXVsdFRhZ3NUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0VGFncyksXG4gICAgICBlbmRwb2ludHM6IGNka3RmLmxpc3RNYXBwZXIoYXdzUHJvdmlkZXJFbmRwb2ludHNUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fZW5kcG9pbnRzKSxcbiAgICAgIGlnbm9yZV90YWdzOiBhd3NQcm92aWRlcklnbm9yZVRhZ3NUb1RlcnJhZm9ybSh0aGlzLl9pZ25vcmVUYWdzKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGFjY2Vzc19rZXk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FjY2Vzc0tleSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGFsbG93ZWRfYWNjb3VudF9pZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9hbGxvd2VkQWNjb3VudElkcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBmb3JiaWRkZW5fYWNjb3VudF9pZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9mb3JiaWRkZW5BY2NvdW50SWRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGh0dHBfcHJveHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2h0dHBQcm94eSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGluc2VjdXJlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5faW5zZWN1cmUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgbWF4X3JldHJpZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21heFJldHJpZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBwcm9maWxlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wcm9maWxlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcmVnaW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yZWdpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzM19mb3JjZV9wYXRoX3N0eWxlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fczNGb3JjZVBhdGhTdHlsZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBzZWNyZXRfa2V5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZWNyZXRLZXkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzaGFyZWRfY3JlZGVudGlhbHNfZmlsZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc2hhcmVkQ3JlZGVudGlhbHNGaWxlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc2tpcF9jcmVkZW50aWFsc192YWxpZGF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc2tpcENyZWRlbnRpYWxzVmFsaWRhdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBza2lwX2dldF9lYzJfcGxhdGZvcm1zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc2tpcEdldEVjMlBsYXRmb3JtcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBza2lwX21ldGFkYXRhX2FwaV9jaGVjazoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3NraXBNZXRhZGF0YUFwaUNoZWNrKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHNraXBfcmVnaW9uX3ZhbGlkYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9za2lwUmVnaW9uVmFsaWRhdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBza2lwX3JlcXVlc3RpbmdfYWNjb3VudF9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3NraXBSZXF1ZXN0aW5nQWNjb3VudElkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHRva2VuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90b2tlbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hbGlhcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGFzc3VtZV9yb2xlOiB7XG4gICAgICAgIHZhbHVlOiBhd3NQcm92aWRlckFzc3VtZVJvbGVUb0hjbFRlcnJhZm9ybSh0aGlzLl9hc3N1bWVSb2xlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXdzUHJvdmlkZXJBc3N1bWVSb2xlTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRfdGFnczoge1xuICAgICAgICB2YWx1ZTogYXdzUHJvdmlkZXJEZWZhdWx0VGFnc1RvSGNsVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRUYWdzKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXdzUHJvdmlkZXJEZWZhdWx0VGFnc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woYXdzUHJvdmlkZXJFbmRwb2ludHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fZW5kcG9pbnRzKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBd3NQcm92aWRlckVuZHBvaW50c0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBpZ25vcmVfdGFnczoge1xuICAgICAgICB2YWx1ZTogYXdzUHJvdmlkZXJJZ25vcmVUYWdzVG9IY2xUZXJyYWZvcm0odGhpcy5faWdub3JlVGFncyksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF3c1Byb3ZpZGVySWdub3JlVGFnc0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==