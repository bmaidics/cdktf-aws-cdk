"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprunnerService = exports.ApprunnerServiceSourceConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationToHclTerraform = exports.apprunnerServiceSourceConfigurationToTerraform = exports.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference = exports.apprunnerServiceSourceConfigurationImageRepositoryToHclTerraform = exports.apprunnerServiceSourceConfigurationImageRepositoryToTerraform = exports.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform = exports.apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform = exports.apprunnerServiceSourceConfigurationCodeRepositoryToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform = exports.apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform = exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform = exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform = exports.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform = exports.apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform = exports.ApprunnerServiceInstanceConfigurationOutputReference = exports.apprunnerServiceInstanceConfigurationToHclTerraform = exports.apprunnerServiceInstanceConfigurationToTerraform = exports.ApprunnerServiceHealthCheckConfigurationOutputReference = exports.apprunnerServiceHealthCheckConfigurationToHclTerraform = exports.apprunnerServiceHealthCheckConfigurationToTerraform = exports.ApprunnerServiceEncryptionConfigurationOutputReference = exports.apprunnerServiceEncryptionConfigurationToHclTerraform = exports.apprunnerServiceEncryptionConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apprunnerServiceEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key: cdktf.stringToTerraform(struct.kmsKey),
    };
}
exports.apprunnerServiceEncryptionConfigurationToTerraform = apprunnerServiceEncryptionConfigurationToTerraform;
function apprunnerServiceEncryptionConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        kms_key: {
            value: cdktf.stringToHclTerraform(struct.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceEncryptionConfigurationToHclTerraform = apprunnerServiceEncryptionConfigurationToHclTerraform;
class ApprunnerServiceEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKey = value.kmsKey;
        }
    }
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    set kmsKey(value) {
        this._kmsKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyInput() {
        return this._kmsKey;
    }
}
exports.ApprunnerServiceEncryptionConfigurationOutputReference = ApprunnerServiceEncryptionConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ApprunnerServiceEncryptionConfigurationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference", version: "0.0.0" };
function apprunnerServiceHealthCheckConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval: cdktf.numberToTerraform(struct.interval),
        path: cdktf.stringToTerraform(struct.path),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout: cdktf.numberToTerraform(struct.timeout),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold),
    };
}
exports.apprunnerServiceHealthCheckConfigurationToTerraform = apprunnerServiceHealthCheckConfigurationToTerraform;
function apprunnerServiceHealthCheckConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        healthy_threshold: {
            value: cdktf.numberToHclTerraform(struct.healthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval: {
            value: cdktf.numberToHclTerraform(struct.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktf.numberToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unhealthy_threshold: {
            value: cdktf.numberToHclTerraform(struct.unhealthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceHealthCheckConfigurationToHclTerraform = apprunnerServiceHealthCheckConfigurationToHclTerraform;
class ApprunnerServiceHealthCheckConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._healthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        if (this._unhealthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._healthyThreshold = undefined;
            this._interval = undefined;
            this._path = undefined;
            this._protocol = undefined;
            this._timeout = undefined;
            this._unhealthyThreshold = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._healthyThreshold = value.healthyThreshold;
            this._interval = value.interval;
            this._path = value.path;
            this._protocol = value.protocol;
            this._timeout = value.timeout;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }
    get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    set healthyThreshold(value) {
        this._healthyThreshold = value;
    }
    resetHealthyThreshold() {
        this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthyThresholdInput() {
        return this._healthyThreshold;
    }
    get interval() {
        return this.getNumberAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
    }
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
    get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    set unhealthyThreshold(value) {
        this._unhealthyThreshold = value;
    }
    resetUnhealthyThreshold() {
        this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
exports.ApprunnerServiceHealthCheckConfigurationOutputReference = ApprunnerServiceHealthCheckConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ApprunnerServiceHealthCheckConfigurationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference", version: "0.0.0" };
function apprunnerServiceInstanceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu: cdktf.stringToTerraform(struct.cpu),
        instance_role_arn: cdktf.stringToTerraform(struct.instanceRoleArn),
        memory: cdktf.stringToTerraform(struct.memory),
    };
}
exports.apprunnerServiceInstanceConfigurationToTerraform = apprunnerServiceInstanceConfigurationToTerraform;
function apprunnerServiceInstanceConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cpu: {
            value: cdktf.stringToHclTerraform(struct.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_role_arn: {
            value: cdktf.stringToHclTerraform(struct.instanceRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktf.stringToHclTerraform(struct.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceInstanceConfigurationToHclTerraform = apprunnerServiceInstanceConfigurationToHclTerraform;
class ApprunnerServiceInstanceConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._instanceRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRoleArn = this._instanceRoleArn;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cpu = undefined;
            this._instanceRoleArn = undefined;
            this._memory = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cpu = value.cpu;
            this._instanceRoleArn = value.instanceRoleArn;
            this._memory = value.memory;
        }
    }
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    set cpu(value) {
        this._cpu = value;
    }
    resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuInput() {
        return this._cpu;
    }
    get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    set instanceRoleArn(value) {
        this._instanceRoleArn = value;
    }
    resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceRoleArnInput() {
        return this._instanceRoleArn;
    }
    get memory() {
        return this.getStringAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
}
exports.ApprunnerServiceInstanceConfigurationOutputReference = ApprunnerServiceInstanceConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
ApprunnerServiceInstanceConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_role_arn: cdktf.stringToTerraform(struct.accessRoleArn),
        connection_arn: cdktf.stringToTerraform(struct.connectionArn),
    };
}
exports.apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform = apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform;
function apprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_role_arn: {
            value: cdktf.stringToHclTerraform(struct.accessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_arn: {
            value: cdktf.stringToHclTerraform(struct.connectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform = apprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform;
class ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessRoleArn = this._accessRoleArn;
        }
        if (this._connectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionArn = this._connectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessRoleArn = undefined;
            this._connectionArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessRoleArn = value.accessRoleArn;
            this._connectionArn = value.connectionArn;
        }
    }
    get accessRoleArn() {
        return this.getStringAttribute('access_role_arn');
    }
    set accessRoleArn(value) {
        this._accessRoleArn = value;
    }
    resetAccessRoleArn() {
        this._accessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessRoleArnInput() {
        return this._accessRoleArn;
    }
    get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    set connectionArn(value) {
        this._connectionArn = value;
    }
    resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionArnInput() {
        return this._connectionArn;
    }
}
exports.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference = ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference[_d] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_command: cdktf.stringToTerraform(struct.buildCommand),
        port: cdktf.stringToTerraform(struct.port),
        runtime: cdktf.stringToTerraform(struct.runtime),
        runtime_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform = apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform;
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        build_command: {
            value: cdktf.stringToHclTerraform(struct.buildCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.stringToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime: {
            value: cdktf.stringToHclTerraform(struct.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime_environment_variables: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.runtimeEnvironmentVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        start_command: {
            value: cdktf.stringToHclTerraform(struct.startCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform = apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform;
class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._buildCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildCommand = this._buildCommand;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._runtimeEnvironmentVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
        }
        if (this._startCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.startCommand = this._startCommand;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._buildCommand = undefined;
            this._port = undefined;
            this._runtime = undefined;
            this._runtimeEnvironmentVariables = undefined;
            this._startCommand = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._buildCommand = value.buildCommand;
            this._port = value.port;
            this._runtime = value.runtime;
            this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
            this._startCommand = value.startCommand;
        }
    }
    get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    set buildCommand(value) {
        this._buildCommand = value;
    }
    resetBuildCommand() {
        this._buildCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildCommandInput() {
        return this._buildCommand;
    }
    get port() {
        return this.getStringAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    set runtime(value) {
        this._runtime = value;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeInput() {
        return this._runtime;
    }
    get runtimeEnvironmentVariables() {
        return this.getStringMapAttribute('runtime_environment_variables');
    }
    set runtimeEnvironmentVariables(value) {
        this._runtimeEnvironmentVariables = value;
    }
    resetRuntimeEnvironmentVariables() {
        this._runtimeEnvironmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeEnvironmentVariablesInput() {
        return this._runtimeEnvironmentVariables;
    }
    get startCommand() {
        return this.getStringAttribute('start_command');
    }
    set startCommand(value) {
        this._startCommand = value;
    }
    resetStartCommand() {
        this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startCommandInput() {
        return this._startCommand;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference = ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference[_e] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration_source: cdktf.stringToTerraform(struct.configurationSource),
        code_configuration_values: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct.codeConfigurationValues),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform = apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform;
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        configuration_source: {
            value: cdktf.stringToHclTerraform(struct.configurationSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_configuration_values: {
            value: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform(struct.codeConfigurationValues),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform = apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform;
class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // code_configuration_values - computed: false, optional: true, required: false
        this._codeConfigurationValues = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(this, "code_configuration_values");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._configurationSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationSource = this._configurationSource;
        }
        if (this._codeConfigurationValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeConfigurationValues = this._codeConfigurationValues?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configurationSource = undefined;
            this._codeConfigurationValues.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configurationSource = value.configurationSource;
            this._codeConfigurationValues.internalValue = value.codeConfigurationValues;
        }
    }
    get configurationSource() {
        return this.getStringAttribute('configuration_source');
    }
    set configurationSource(value) {
        this._configurationSource = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationSourceInput() {
        return this._configurationSource;
    }
    get codeConfigurationValues() {
        return this._codeConfigurationValues;
    }
    putCodeConfigurationValues(value) {
        this._codeConfigurationValues.internalValue = value;
    }
    resetCodeConfigurationValues() {
        this._codeConfigurationValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeConfigurationValuesInput() {
        return this._codeConfigurationValues.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference = ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference[_f] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform = apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform;
function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform = apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform;
class ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._value = value.value;
        }
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference = ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference;
_g = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference[_g] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_url: cdktf.stringToTerraform(struct.repositoryUrl),
        code_configuration: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct.codeConfiguration),
        source_code_version: apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct.sourceCodeVersion),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryToTerraform = apprunnerServiceSourceConfigurationCodeRepositoryToTerraform;
function apprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        repository_url: {
            value: cdktf.stringToHclTerraform(struct.repositoryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_configuration: {
            value: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform(struct.codeConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationList",
        },
        source_code_version: {
            value: apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform(struct.sourceCodeVersion),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform = apprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform;
class ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // code_configuration - computed: false, optional: true, required: false
        this._codeConfiguration = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(this, "code_configuration");
        // source_code_version - computed: false, optional: false, required: true
        this._sourceCodeVersion = new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(this, "source_code_version");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._repositoryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        if (this._codeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
        }
        if (this._sourceCodeVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceCodeVersion = this._sourceCodeVersion?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._repositoryUrl = undefined;
            this._codeConfiguration.internalValue = undefined;
            this._sourceCodeVersion.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._repositoryUrl = value.repositoryUrl;
            this._codeConfiguration.internalValue = value.codeConfiguration;
            this._sourceCodeVersion.internalValue = value.sourceCodeVersion;
        }
    }
    get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    set repositoryUrl(value) {
        this._repositoryUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryUrlInput() {
        return this._repositoryUrl;
    }
    get codeConfiguration() {
        return this._codeConfiguration;
    }
    putCodeConfiguration(value) {
        this._codeConfiguration.internalValue = value;
    }
    resetCodeConfiguration() {
        this._codeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeConfigurationInput() {
        return this._codeConfiguration.internalValue;
    }
    get sourceCodeVersion() {
        return this._sourceCodeVersion;
    }
    putSourceCodeVersion(value) {
        this._sourceCodeVersion.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCodeVersionInput() {
        return this._sourceCodeVersion.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference = ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference;
_h = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference[_h] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        port: cdktf.stringToTerraform(struct.port),
        runtime_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand),
    };
}
exports.apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform = apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform;
function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        port: {
            value: cdktf.stringToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime_environment_variables: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.runtimeEnvironmentVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        start_command: {
            value: cdktf.stringToHclTerraform(struct.startCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform = apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform;
class ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._runtimeEnvironmentVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
        }
        if (this._startCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.startCommand = this._startCommand;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._port = undefined;
            this._runtimeEnvironmentVariables = undefined;
            this._startCommand = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._port = value.port;
            this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
            this._startCommand = value.startCommand;
        }
    }
    get port() {
        return this.getStringAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get runtimeEnvironmentVariables() {
        return this.getStringMapAttribute('runtime_environment_variables');
    }
    set runtimeEnvironmentVariables(value) {
        this._runtimeEnvironmentVariables = value;
    }
    resetRuntimeEnvironmentVariables() {
        this._runtimeEnvironmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeEnvironmentVariablesInput() {
        return this._runtimeEnvironmentVariables;
    }
    get startCommand() {
        return this.getStringAttribute('start_command');
    }
    set startCommand(value) {
        this._startCommand = value;
    }
    resetStartCommand() {
        this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startCommandInput() {
        return this._startCommand;
    }
}
exports.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference = ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference[_j] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        image_identifier: cdktf.stringToTerraform(struct.imageIdentifier),
        image_repository_type: cdktf.stringToTerraform(struct.imageRepositoryType),
        image_configuration: apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct.imageConfiguration),
    };
}
exports.apprunnerServiceSourceConfigurationImageRepositoryToTerraform = apprunnerServiceSourceConfigurationImageRepositoryToTerraform;
function apprunnerServiceSourceConfigurationImageRepositoryToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        image_identifier: {
            value: cdktf.stringToHclTerraform(struct.imageIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_repository_type: {
            value: cdktf.stringToHclTerraform(struct.imageRepositoryType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_configuration: {
            value: apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform(struct.imageConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationImageRepositoryToHclTerraform = apprunnerServiceSourceConfigurationImageRepositoryToHclTerraform;
class ApprunnerServiceSourceConfigurationImageRepositoryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // image_configuration - computed: false, optional: true, required: false
        this._imageConfiguration = new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(this, "image_configuration");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._imageIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageIdentifier = this._imageIdentifier;
        }
        if (this._imageRepositoryType !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageRepositoryType = this._imageRepositoryType;
        }
        if (this._imageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageConfiguration = this._imageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._imageIdentifier = undefined;
            this._imageRepositoryType = undefined;
            this._imageConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._imageIdentifier = value.imageIdentifier;
            this._imageRepositoryType = value.imageRepositoryType;
            this._imageConfiguration.internalValue = value.imageConfiguration;
        }
    }
    get imageIdentifier() {
        return this.getStringAttribute('image_identifier');
    }
    set imageIdentifier(value) {
        this._imageIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageIdentifierInput() {
        return this._imageIdentifier;
    }
    get imageRepositoryType() {
        return this.getStringAttribute('image_repository_type');
    }
    set imageRepositoryType(value) {
        this._imageRepositoryType = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageRepositoryTypeInput() {
        return this._imageRepositoryType;
    }
    get imageConfiguration() {
        return this._imageConfiguration;
    }
    putImageConfiguration(value) {
        this._imageConfiguration.internalValue = value;
    }
    resetImageConfiguration() {
        this._imageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageConfigurationInput() {
        return this._imageConfiguration.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference = ApprunnerServiceSourceConfigurationImageRepositoryOutputReference;
_k = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationImageRepositoryOutputReference[_k] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference", version: "0.0.0" };
function apprunnerServiceSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_deployments_enabled: cdktf.booleanToTerraform(struct.autoDeploymentsEnabled),
        authentication_configuration: apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct.authenticationConfiguration),
        code_repository: apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct.codeRepository),
        image_repository: apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct.imageRepository),
    };
}
exports.apprunnerServiceSourceConfigurationToTerraform = apprunnerServiceSourceConfigurationToTerraform;
function apprunnerServiceSourceConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auto_deployments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.autoDeploymentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        authentication_configuration: {
            value: apprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform(struct.authenticationConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationAuthenticationConfigurationList",
        },
        code_repository: {
            value: apprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform(struct.codeRepository),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationCodeRepositoryList",
        },
        image_repository: {
            value: apprunnerServiceSourceConfigurationImageRepositoryToHclTerraform(struct.imageRepository),
            isBlock: true,
            type: "list",
            storageClassType: "ApprunnerServiceSourceConfigurationImageRepositoryList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apprunnerServiceSourceConfigurationToHclTerraform = apprunnerServiceSourceConfigurationToHclTerraform;
class ApprunnerServiceSourceConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // authentication_configuration - computed: false, optional: true, required: false
        this._authenticationConfiguration = new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
        // code_repository - computed: false, optional: true, required: false
        this._codeRepository = new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(this, "code_repository");
        // image_repository - computed: false, optional: true, required: false
        this._imageRepository = new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(this, "image_repository");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._autoDeploymentsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoDeploymentsEnabled = this._autoDeploymentsEnabled;
        }
        if (this._authenticationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
        }
        if (this._codeRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeRepository = this._codeRepository?.internalValue;
        }
        if (this._imageRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageRepository = this._imageRepository?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoDeploymentsEnabled = undefined;
            this._authenticationConfiguration.internalValue = undefined;
            this._codeRepository.internalValue = undefined;
            this._imageRepository.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoDeploymentsEnabled = value.autoDeploymentsEnabled;
            this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
            this._codeRepository.internalValue = value.codeRepository;
            this._imageRepository.internalValue = value.imageRepository;
        }
    }
    get autoDeploymentsEnabled() {
        return this.getBooleanAttribute('auto_deployments_enabled');
    }
    set autoDeploymentsEnabled(value) {
        this._autoDeploymentsEnabled = value;
    }
    resetAutoDeploymentsEnabled() {
        this._autoDeploymentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoDeploymentsEnabledInput() {
        return this._autoDeploymentsEnabled;
    }
    get authenticationConfiguration() {
        return this._authenticationConfiguration;
    }
    putAuthenticationConfiguration(value) {
        this._authenticationConfiguration.internalValue = value;
    }
    resetAuthenticationConfiguration() {
        this._authenticationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationConfigurationInput() {
        return this._authenticationConfiguration.internalValue;
    }
    get codeRepository() {
        return this._codeRepository;
    }
    putCodeRepository(value) {
        this._codeRepository.internalValue = value;
    }
    resetCodeRepository() {
        this._codeRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeRepositoryInput() {
        return this._codeRepository.internalValue;
    }
    get imageRepository() {
        return this._imageRepository;
    }
    putImageRepository(value) {
        this._imageRepository.internalValue = value;
    }
    resetImageRepository() {
        this._imageRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageRepositoryInput() {
        return this._imageRepository.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationOutputReference = ApprunnerServiceSourceConfigurationOutputReference;
_l = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationOutputReference[_l] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apprunner_service aws_apprunner_service}
*/
class ApprunnerService extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApprunnerService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerService to import
    * @param importFromId The id of the existing ApprunnerService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerService to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apprunner_service", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apprunner_service aws_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerServiceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apprunner_service',
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
        // encryption_configuration - computed: false, optional: true, required: false
        this._encryptionConfiguration = new ApprunnerServiceEncryptionConfigurationOutputReference(this, "encryption_configuration");
        // health_check_configuration - computed: false, optional: true, required: false
        this._healthCheckConfiguration = new ApprunnerServiceHealthCheckConfigurationOutputReference(this, "health_check_configuration");
        // instance_configuration - computed: false, optional: true, required: false
        this._instanceConfiguration = new ApprunnerServiceInstanceConfigurationOutputReference(this, "instance_configuration");
        // source_configuration - computed: false, optional: false, required: true
        this._sourceConfiguration = new ApprunnerServiceSourceConfigurationOutputReference(this, "source_configuration");
        this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
        this._id = config.id;
        this._serviceName = config.serviceName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._healthCheckConfiguration.internalValue = config.healthCheckConfiguration;
        this._instanceConfiguration.internalValue = config.instanceConfiguration;
        this._sourceConfiguration.internalValue = config.sourceConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoScalingConfigurationArn() {
        return this.getStringAttribute('auto_scaling_configuration_arn');
    }
    set autoScalingConfigurationArn(value) {
        this._autoScalingConfigurationArn = value;
    }
    resetAutoScalingConfigurationArn() {
        this._autoScalingConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoScalingConfigurationArnInput() {
        return this._autoScalingConfigurationArn;
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
    // service_id - computed: true, optional: false, required: false
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    set serviceName(value) {
        this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceNameInput() {
        return this._serviceName;
    }
    // service_url - computed: true, optional: false, required: false
    get serviceUrl() {
        return this.getStringAttribute('service_url');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    putEncryptionConfiguration(value) {
        this._encryptionConfiguration.internalValue = value;
    }
    resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
    get healthCheckConfiguration() {
        return this._healthCheckConfiguration;
    }
    putHealthCheckConfiguration(value) {
        this._healthCheckConfiguration.internalValue = value;
    }
    resetHealthCheckConfiguration() {
        this._healthCheckConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckConfigurationInput() {
        return this._healthCheckConfiguration.internalValue;
    }
    get instanceConfiguration() {
        return this._instanceConfiguration;
    }
    putInstanceConfiguration(value) {
        this._instanceConfiguration.internalValue = value;
    }
    resetInstanceConfiguration() {
        this._instanceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceConfigurationInput() {
        return this._instanceConfiguration.internalValue;
    }
    get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    putSourceConfiguration(value) {
        this._sourceConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
            id: cdktf.stringToTerraform(this._id),
            service_name: cdktf.stringToTerraform(this._serviceName),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            encryption_configuration: apprunnerServiceEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
            health_check_configuration: apprunnerServiceHealthCheckConfigurationToTerraform(this._healthCheckConfiguration.internalValue),
            instance_configuration: apprunnerServiceInstanceConfigurationToTerraform(this._instanceConfiguration.internalValue),
            source_configuration: apprunnerServiceSourceConfigurationToTerraform(this._sourceConfiguration.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            auto_scaling_configuration_arn: {
                value: cdktf.stringToHclTerraform(this._autoScalingConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_name: {
                value: cdktf.stringToHclTerraform(this._serviceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            encryption_configuration: {
                value: apprunnerServiceEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApprunnerServiceEncryptionConfigurationList",
            },
            health_check_configuration: {
                value: apprunnerServiceHealthCheckConfigurationToHclTerraform(this._healthCheckConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApprunnerServiceHealthCheckConfigurationList",
            },
            instance_configuration: {
                value: apprunnerServiceInstanceConfigurationToHclTerraform(this._instanceConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApprunnerServiceInstanceConfigurationList",
            },
            source_configuration: {
                value: apprunnerServiceSourceConfigurationToHclTerraform(this._sourceConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApprunnerServiceSourceConfigurationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.ApprunnerService = ApprunnerService;
_m = JSII_RTTI_SYMBOL_1;
ApprunnerService[_m] = { fqn: "@cdktf/aws-cdk.apprunnerService.ApprunnerService", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
ApprunnerService.tfResourceType = "aws_apprunner_service";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FwcHJ1bm5lci1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBNEQvQixTQUFnQixrREFBa0QsQ0FBQyxNQUF5RztJQUMxSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2pELENBQUE7QUFDSCxDQUFDO0FBUkQsZ0hBUUM7QUFHRCxTQUFnQixxREFBcUQsQ0FBQyxNQUF5RztJQUM3SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxPQUFPLEVBQUUsS0FBSztZQUNkLElB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QUFLLEVBQUUsbURBQW1ELENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztnQkFDckcsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsMkNBQTJDO2FBQzlEO1lBQ0Qsb0JBQW9CLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSxpREFBaUQsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO2dCQUNqRyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSx5Q0FBeUM7YUFDNUQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTNTSCw0Q0E0U0M7OztBQTFTQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLCtCQUFjLEdBQUcsdUJBQXVCLEFBQTFCLENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2Vcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2F1dG9fc2NhbGluZ19jb25maWd1cmF0aW9uX2FybiBBcHBydW5uZXJTZXJ2aWNlI2F1dG9fc2NhbGluZ19jb25maWd1cmF0aW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNpZCBBcHBydW5uZXJTZXJ2aWNlI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNzZXJ2aWNlX25hbWUgQXBwcnVubmVyU2VydmljZSNzZXJ2aWNlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3RhZ3MgQXBwcnVubmVyU2VydmljZSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjdGFnc19hbGwgQXBwcnVubmVyU2VydmljZSN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIEFwcHJ1bm5lclNlcnZpY2UjZW5jcnlwdGlvbl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogaGVhbHRoX2NoZWNrX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2hlYWx0aF9jaGVja19jb25maWd1cmF0aW9uIEFwcHJ1bm5lclNlcnZpY2UjaGVhbHRoX2NoZWNrX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGhlYWx0aENoZWNrQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIGluc3RhbmNlX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2luc3RhbmNlX2NvbmZpZ3VyYXRpb24gQXBwcnVubmVyU2VydmljZSNpbnN0YW5jZV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZUNvbmZpZ3VyYXRpb24/OiBBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBzb3VyY2VfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2Ujc291cmNlX2NvbmZpZ3VyYXRpb24gQXBwcnVubmVyU2VydmljZSNzb3VyY2VfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlQ29uZmlndXJhdGlvbjogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2ttc19rZXkgQXBwcnVubmVyU2VydmljZSNrbXNfa2V5fVxuICAqL1xuICByZWFkb25seSBrbXNLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBrbXNfa2V5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rbXNLZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ttc0tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXkgPSB0aGlzLl9rbXNLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9rbXNLZXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ttc0tleSA9IHZhbHVlLmttc0tleTtcbiAgICB9XG4gIH1cblxuICAvLyBrbXNfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ttc0tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjaGVhbHRoeV90aHJlc2hvbGQgQXBwcnVubmVyU2VydmljZSNoZWFsdGh5X3RocmVzaG9sZH1cbiAgKi9cbiAgcmVhZG9ubHkgaGVhbHRoeVRocmVzaG9sZD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjaW50ZXJ2YWwgQXBwcnVubmVyU2VydmljZSNpbnRlcnZhbH1cbiAgKi9cbiAgcmVhZG9ubHkgaW50ZXJ2YWw/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3BhdGggQXBwcnVubmVyU2VydmljZSNwYXRofVxuICAqL1xuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNwcm90b2NvbCBBcHBydW5uZXJTZXJ2aWNlI3Byb3RvY29sfVxuICAqL1xuICByZWFkb25seSBwcm90b2NvbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjdGltZW91dCBBcHBydW5uZXJTZXJ2aWNlI3RpbWVvdXR9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3VuaGVhbHRoeV90aHJlc2hvbGQgQXBwcnVubmVyU2VydmljZSN1bmhlYWx0aHlfdGhyZXNob2xkfVxuICAqL1xuICByZWFkb25seSB1bmhlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGVhbHRoeV90aHJlc2hvbGQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaGVhbHRoeVRocmVzaG9sZCksXG4gICAgaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHRpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dCksXG4gICAgdW5oZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS51bmhlYWx0aHlUaHJlc2hvbGQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaGVhbHRoeV90aHJlc2hvbGQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aHlUaHJlc2hvbGQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGludGVydmFsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJvdG9jb2w6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0aW1lb3V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB1bmhlYWx0aHlfdGhyZXNob2xkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51bmhlYWx0aHlUaHJlc2hvbGQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGVhbHRoeVRocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFsdGh5VGhyZXNob2xkID0gdGhpcy5faGVhbHRoeVRocmVzaG9sZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ludGVydmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhdGggPSB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5oZWFsdGh5VGhyZXNob2xkID0gdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB2YWx1ZS5oZWFsdGh5VGhyZXNob2xkO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZS5pbnRlcnZhbDtcbiAgICAgIHRoaXMuX3BhdGggPSB2YWx1ZS5wYXRoO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSB2YWx1ZS50aW1lb3V0O1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUudW5oZWFsdGh5VGhyZXNob2xkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlYWx0aHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGVhbHRoeVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgdGhpcy5faGVhbHRoeVRocmVzaG9sZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoeVRocmVzaG9sZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGh5VGhyZXNob2xkO1xuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIC8vIHBhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXRoKCkge1xuICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm90b2NvbCgpIHtcbiAgICB0aGlzLl9wcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dCgpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIH1cblxuICAvLyB1bmhlYWx0aHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VuaGVhbHRoeVRocmVzaG9sZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdW5oZWFsdGh5VGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndW5oZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5oZWFsdGh5VGhyZXNob2xkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbmhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bmhlYWx0aHlUaHJlc2hvbGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNjcHUgQXBwcnVubmVyU2VydmljZSNjcHV9XG4gICovXG4gIHJlYWRvbmx5IGNwdT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjaW5zdGFuY2Vfcm9sZV9hcm4gQXBwcnVubmVyU2VydmljZSNpbnN0YW5jZV9yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNtZW1vcnkgQXBwcnVubmVyU2VydmljZSNtZW1vcnl9XG4gICovXG4gIHJlYWRvbmx5IG1lbW9yeT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZUluc3RhbmNlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcHU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3B1KSxcbiAgICBpbnN0YW5jZV9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVJvbGVBcm4pLFxuICAgIG1lbW9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnkpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZUluc3RhbmNlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY3B1OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jcHUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3RhbmNlX3JvbGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVJvbGVBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1lbW9yeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWVtb3J5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NwdSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcHUgPSB0aGlzLl9jcHU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnN0YW5jZVJvbGVBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VSb2xlQXJuID0gdGhpcy5faW5zdGFuY2VSb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVtb3J5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lbW9yeSA9IHRoaXMuX21lbW9yeTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcHUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZW1vcnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NwdSA9IHZhbHVlLmNwdTtcbiAgICAgIHRoaXMuX2luc3RhbmNlUm9sZUFybiA9IHZhbHVlLmluc3RhbmNlUm9sZUFybjtcbiAgICAgIHRoaXMuX21lbW9yeSA9IHZhbHVlLm1lbW9yeTtcbiAgICB9XG4gIH1cblxuICAvLyBjcHUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3B1Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcHUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1KCkge1xuICAgIHRoaXMuX2NwdSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2Vfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VSb2xlQXJuKCkge1xuICAgIHRoaXMuX2luc3RhbmNlUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUm9sZUFybjtcbiAgfVxuXG4gIC8vIG1lbW9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZW1vcnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lbW9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVtb3J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZW1vcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZW1vcnkoKSB7XG4gICAgdGhpcy5fbWVtb3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZW1vcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjYWNjZXNzX3JvbGVfYXJuIEFwcHJ1bm5lclNlcnZpY2UjYWNjZXNzX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNjb25uZWN0aW9uX2FybiBBcHBydW5uZXJTZXJ2aWNlI2Nvbm5lY3Rpb25fYXJufVxuICAqL1xuICByZWFkb25seSBjb25uZWN0aW9uQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2Vzc19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NSb2xlQXJuKSxcbiAgICBjb25uZWN0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0aW9uQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzc19yb2xlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzUm9sZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29ubmVjdGlvbl9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2Nlc3NSb2xlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc1JvbGVBcm4gPSB0aGlzLl9hY2Nlc3NSb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29ubmVjdGlvbkFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25uZWN0aW9uQXJuID0gdGhpcy5fY29ubmVjdGlvbkFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc1JvbGVBcm4gPSB2YWx1ZS5hY2Nlc3NSb2xlQXJuO1xuICAgICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHZhbHVlLmNvbm5lY3Rpb25Bcm47XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3Nfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NSb2xlQXJuKCkge1xuICAgIHRoaXMuX2FjY2Vzc1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzUm9sZUFybjtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29ubmVjdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25Bcm4oKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbkFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjYnVpbGRfY29tbWFuZCBBcHBydW5uZXJTZXJ2aWNlI2J1aWxkX2NvbW1hbmR9XG4gICovXG4gIHJlYWRvbmx5IGJ1aWxkQ29tbWFuZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjcG9ydCBBcHBydW5uZXJTZXJ2aWNlI3BvcnR9XG4gICovXG4gIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3J1bnRpbWUgQXBwcnVubmVyU2VydmljZSNydW50aW1lfVxuICAqL1xuICByZWFkb25seSBydW50aW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3J1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzIEFwcHJ1bm5lclNlcnZpY2UjcnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXN9XG4gICovXG4gIHJlYWRvbmx5IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3N0YXJ0X2NvbW1hbmQgQXBwcnVubmVyU2VydmljZSNzdGFydF9jb21tYW5kfVxuICAqL1xuICByZWFkb25seSBzdGFydENvbW1hbmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVpbGRfY29tbWFuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWlsZENvbW1hbmQpLFxuICAgIHBvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydW50aW1lKSxcbiAgICBydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgIHN0YXJ0X2NvbW1hbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRDb21tYW5kKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGJ1aWxkX2NvbW1hbmQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1aWxkQ29tbWFuZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcnVudGltZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucnVudGltZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKShzdHJ1Y3QhLnJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgc3RhcnRfY29tbWFuZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRDb21tYW5kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVpbGRDb21tYW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1aWxkQ29tbWFuZCA9IHRoaXMuX2J1aWxkQ29tbWFuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ydW50aW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bnRpbWUgPSB0aGlzLl9ydW50aW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXJ0Q29tbWFuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGFydENvbW1hbmQgPSB0aGlzLl9zdGFydENvbW1hbmQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1aWxkQ29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ydW50aW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhcnRDb21tYW5kID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWlsZENvbW1hbmQgPSB2YWx1ZS5idWlsZENvbW1hbmQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdmFsdWUucG9ydDtcbiAgICAgIHRoaXMuX3J1bnRpbWUgPSB2YWx1ZS5ydW50aW1lO1xuICAgICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzID0gdmFsdWUucnVudGltZUVudmlyb25tZW50VmFyaWFibGVzO1xuICAgICAgdGhpcy5fc3RhcnRDb21tYW5kID0gdmFsdWUuc3RhcnRDb21tYW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1aWxkX2NvbW1hbmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVpbGRDb21tYW5kPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWlsZENvbW1hbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWlsZF9jb21tYW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWlsZENvbW1hbmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1aWxkQ29tbWFuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1aWxkQ29tbWFuZCgpIHtcbiAgICB0aGlzLl9idWlsZENvbW1hbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1aWxkQ29tbWFuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZENvbW1hbmQ7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9ydCgpIHtcbiAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cblxuICAvLyBydW50aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3J1bnRpbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydW50aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBydW50aW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ydW50aW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVudGltZTtcbiAgfVxuXG4gIC8vIHJ1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3J1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMoKSB7XG4gICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzO1xuICB9XG5cbiAgLy8gc3RhcnRfY29tbWFuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGFydENvbW1hbmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXJ0X2NvbW1hbmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0Q29tbWFuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhcnRDb21tYW5kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhcnRDb21tYW5kKCkge1xuICAgIHRoaXMuX3N0YXJ0Q29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhcnRDb21tYW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0Q29tbWFuZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNjb25maWd1cmF0aW9uX3NvdXJjZSBBcHBydW5uZXJTZXJ2aWNlI2NvbmZpZ3VyYXRpb25fc291cmNlfVxuICAqL1xuICByZWFkb25seSBjb25maWd1cmF0aW9uU291cmNlOiBzdHJpbmc7XG4gIC8qKlxuICAqIGNvZGVfY29uZmlndXJhdGlvbl92YWx1ZXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2NvZGVfY29uZmlndXJhdGlvbl92YWx1ZXMgQXBwcnVubmVyU2VydmljZSNjb2RlX2NvbmZpZ3VyYXRpb25fdmFsdWVzfVxuICAqL1xuICByZWFkb25seSBjb2RlQ29uZmlndXJhdGlvblZhbHVlcz86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYXRpb25fc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25Tb3VyY2UpLFxuICAgIGNvZGVfY29uZmlndXJhdGlvbl92YWx1ZXM6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29uZmlndXJhdGlvblZhbHVlcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb25maWd1cmF0aW9uX3NvdXJjZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29uZmlndXJhdGlvblNvdXJjZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29kZV9jb25maWd1cmF0aW9uX3ZhbHVlczoge1xuICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29uZmlndXJhdGlvblZhbHVlcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29uZmlndXJhdGlvblNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25maWd1cmF0aW9uU291cmNlID0gdGhpcy5fY29uZmlndXJhdGlvblNvdXJjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvZGVDb25maWd1cmF0aW9uVmFsdWVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVDb25maWd1cmF0aW9uVmFsdWVzID0gdGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uU291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29uZmlndXJhdGlvblNvdXJjZSA9IHZhbHVlLmNvbmZpZ3VyYXRpb25Tb3VyY2U7XG4gICAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvblZhbHVlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbl9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvblNvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uU291cmNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25Tb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblNvdXJjZTtcbiAgfVxuXG4gIC8vIGNvZGVfY29uZmlndXJhdGlvbl92YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMgPSBuZXcgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb2RlX2NvbmZpZ3VyYXRpb25fdmFsdWVzXCIpO1xuICBwdWJsaWMgZ2V0IGNvZGVDb25maWd1cmF0aW9uVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlQ29uZmlndXJhdGlvblZhbHVlcztcbiAgfVxuICBwdWJsaWMgcHV0Q29kZUNvbmZpZ3VyYXRpb25WYWx1ZXModmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzKSB7XG4gICAgdGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvZGVDb25maWd1cmF0aW9uVmFsdWVzKCkge1xuICAgIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uVmFsdWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZGVDb25maWd1cmF0aW9uVmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uVmFsdWVzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeVNvdXJjZUNvZGVWZXJzaW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjdHlwZSBBcHBydW5uZXJTZXJ2aWNlI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjdmFsdWUgQXBwcnVubmVyU2VydmljZSN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHR5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3JlcG9zaXRvcnlfdXJsIEFwcHJ1bm5lclNlcnZpY2UjcmVwb3NpdG9yeV91cmx9XG4gICovXG4gIHJlYWRvbmx5IHJlcG9zaXRvcnlVcmw6IHN0cmluZztcbiAgLyoqXG4gICogY29kZV9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNjb2RlX2NvbmZpZ3VyYXRpb24gQXBwcnVubmVyU2VydmljZSNjb2RlX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGNvZGVDb25maWd1cmF0aW9uPzogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBzb3VyY2VfY29kZV92ZXJzaW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNzb3VyY2VfY29kZV92ZXJzaW9uIEFwcHJ1bm5lclNlcnZpY2Ujc291cmNlX2NvZGVfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlQ29kZVZlcnNpb246IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5T3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXBvc2l0b3J5X3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBvc2l0b3J5VXJsKSxcbiAgICBjb2RlX2NvbmZpZ3VyYXRpb246IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY29kZUNvbmZpZ3VyYXRpb24pLFxuICAgIHNvdXJjZV9jb2RlX3ZlcnNpb246IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvblRvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlQ29kZVZlcnNpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5T3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcmVwb3NpdG9yeV91cmw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlcG9zaXRvcnlVcmwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvZGVfY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29kZUNvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBzb3VyY2VfY29kZV92ZXJzaW9uOiB7XG4gICAgICB2YWx1ZTogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeVNvdXJjZUNvZGVWZXJzaW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VDb2RlVmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVwb3NpdG9yeVVybCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXBvc2l0b3J5VXJsID0gdGhpcy5fcmVwb3NpdG9yeVVybDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvZGVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVDb25maWd1cmF0aW9uID0gdGhpcy5fY29kZUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VDb2RlVmVyc2lvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2VDb2RlVmVyc2lvbiA9IHRoaXMuX3NvdXJjZUNvZGVWZXJzaW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlcG9zaXRvcnlVcmwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlQ29kZVZlcnNpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVwb3NpdG9yeVVybCA9IHZhbHVlLnJlcG9zaXRvcnlVcmw7XG4gICAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZUNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9zb3VyY2VDb2RlVmVyc2lvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc291cmNlQ29kZVZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gcmVwb3NpdG9yeV91cmwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwb3NpdG9yeVVybD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwb3NpdG9yeVVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9zaXRvcnlfdXJsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvc2l0b3J5VXJsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvc2l0b3J5VXJsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlVcmxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeVVybDtcbiAgfVxuXG4gIC8vIGNvZGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlQ29uZmlndXJhdGlvbiA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb2RlX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY29kZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDb2RlQ29uZmlndXJhdGlvbih2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fY29kZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvZGVDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZGVDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzb3VyY2VfY29kZV92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZUNvZGVWZXJzaW9uID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNvdXJjZV9jb2RlX3ZlcnNpb25cIik7XG4gIHB1YmxpYyBnZXQgc291cmNlQ29kZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGVWZXJzaW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTb3VyY2VDb2RlVmVyc2lvbih2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeVNvdXJjZUNvZGVWZXJzaW9uKSB7XG4gICAgdGhpcy5fc291cmNlQ29kZVZlcnNpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDb2RlVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDb2RlVmVyc2lvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjcG9ydCBBcHBydW5uZXJTZXJ2aWNlI3BvcnR9XG4gICovXG4gIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3J1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzIEFwcHJ1bm5lclNlcnZpY2UjcnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXN9XG4gICovXG4gIHJlYWRvbmx5IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI3N0YXJ0X2NvbW1hbmQgQXBwcnVubmVyU2VydmljZSNzdGFydF9jb21tYW5kfVxuICAqL1xuICByZWFkb25seSBzdGFydENvbW1hbmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcG9ydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgIHN0YXJ0X2NvbW1hbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRDb21tYW5kKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHBvcnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJ1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICB9LFxuICAgIHN0YXJ0X2NvbW1hbmQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0Q29tbWFuZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3BvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucnVudGltZUVudmlyb25tZW50VmFyaWFibGVzID0gdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhcnRDb21tYW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXJ0Q29tbWFuZCA9IHRoaXMuX3N0YXJ0Q29tbWFuZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXJ0Q29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgICB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB2YWx1ZS5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gICAgICB0aGlzLl9zdGFydENvbW1hbmQgPSB2YWx1ZS5zdGFydENvbW1hbmQ7XG4gICAgfVxuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3J0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnQoKSB7XG4gICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG5cbiAgLy8gcnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgncnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gIH1cblxuICAvLyBzdGFydF9jb21tYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0Q29tbWFuZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhcnRDb21tYW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhcnRfY29tbWFuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhcnRDb21tYW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGFydENvbW1hbmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydENvbW1hbmQoKSB7XG4gICAgdGhpcy5fc3RhcnRDb21tYW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydENvbW1hbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRDb21tYW5kO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjaW1hZ2VfaWRlbnRpZmllciBBcHBydW5uZXJTZXJ2aWNlI2ltYWdlX2lkZW50aWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlSWRlbnRpZmllcjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNpbWFnZV9yZXBvc2l0b3J5X3R5cGUgQXBwcnVubmVyU2VydmljZSNpbWFnZV9yZXBvc2l0b3J5X3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlUmVwb3NpdG9yeVR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogaW1hZ2VfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjaW1hZ2VfY29uZmlndXJhdGlvbiBBcHBydW5uZXJTZXJ2aWNlI2ltYWdlX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGltYWdlQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeU91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGltYWdlX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VJZGVudGlmaWVyKSxcbiAgICBpbWFnZV9yZXBvc2l0b3J5X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VSZXBvc2l0b3J5VHlwZSksXG4gICAgaW1hZ2VfY29uZmlndXJhdGlvbjogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeU91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbWFnZV9pZGVudGlmaWVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbWFnZUlkZW50aWZpZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGltYWdlX3JlcG9zaXRvcnlfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VSZXBvc2l0b3J5VHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW1hZ2VfY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbWFnZUNvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbWFnZUlkZW50aWZpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VJZGVudGlmaWVyID0gdGhpcy5faW1hZ2VJZGVudGlmaWVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW1hZ2VSZXBvc2l0b3J5VHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbWFnZVJlcG9zaXRvcnlUeXBlID0gdGhpcy5faW1hZ2VSZXBvc2l0b3J5VHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbWFnZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9pbWFnZUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ltYWdlSWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ltYWdlUmVwb3NpdG9yeVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW1hZ2VJZGVudGlmaWVyID0gdmFsdWUuaW1hZ2VJZGVudGlmaWVyO1xuICAgICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5VHlwZSA9IHZhbHVlLmltYWdlUmVwb3NpdG9yeVR5cGU7XG4gICAgICB0aGlzLl9pbWFnZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmltYWdlQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpbWFnZV9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ltYWdlSWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZUlkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlSWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIGltYWdlX3JlcG9zaXRvcnlfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbWFnZVJlcG9zaXRvcnlUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbWFnZVJlcG9zaXRvcnlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfcmVwb3NpdG9yeV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZVJlcG9zaXRvcnlUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZVJlcG9zaXRvcnlUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VSZXBvc2l0b3J5VHlwZTtcbiAgfVxuXG4gIC8vIGltYWdlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW1hZ2VDb25maWd1cmF0aW9uID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaW1hZ2VfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBpbWFnZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SW1hZ2VDb25maWd1cmF0aW9uKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW1hZ2VDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNhdXRvX2RlcGxveW1lbnRzX2VuYWJsZWQgQXBwcnVubmVyU2VydmljZSNhdXRvX2RlcGxveW1lbnRzX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9EZXBsb3ltZW50c0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGF1dGhlbnRpY2F0aW9uX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2F1dGhlbnRpY2F0aW9uX2NvbmZpZ3VyYXRpb24gQXBwcnVubmVyU2VydmljZSNhdXRoZW50aWNhdGlvbl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBhdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogY29kZV9yZXBvc2l0b3J5IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBydW5uZXJfc2VydmljZSNjb2RlX3JlcG9zaXRvcnkgQXBwcnVubmVyU2VydmljZSNjb2RlX3JlcG9zaXRvcnl9XG4gICovXG4gIHJlYWRvbmx5IGNvZGVSZXBvc2l0b3J5PzogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeTtcbiAgLyoqXG4gICogaW1hZ2VfcmVwb3NpdG9yeSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UjaW1hZ2VfcmVwb3NpdG9yeSBBcHBydW5uZXJTZXJ2aWNlI2ltYWdlX3JlcG9zaXRvcnl9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlUmVwb3NpdG9yeT86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dG9fZGVwbG95bWVudHNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXV0b0RlcGxveW1lbnRzRW5hYmxlZCksXG4gICAgYXV0aGVudGljYXRpb25fY29uZmlndXJhdGlvbjogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgY29kZV9yZXBvc2l0b3J5OiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5VG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlUmVwb3NpdG9yeSksXG4gICAgaW1hZ2VfcmVwb3NpdG9yeTogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlUmVwb3NpdG9yeSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdXRvX2RlcGxveW1lbnRzX2VuYWJsZWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRvRGVwbG95bWVudHNFbmFibGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgYXV0aGVudGljYXRpb25fY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGNvZGVfcmVwb3NpdG9yeToge1xuICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvZGVSZXBvc2l0b3J5KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUxpc3RcIixcbiAgICB9LFxuICAgIGltYWdlX3JlcG9zaXRvcnk6IHtcbiAgICAgIHZhbHVlOiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VSZXBvc2l0b3J5KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0b0RlcGxveW1lbnRzRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdGhpcy5fYXV0b0RlcGxveW1lbnRzRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb2RlUmVwb3NpdG9yeT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb2RlUmVwb3NpdG9yeSA9IHRoaXMuX2NvZGVSZXBvc2l0b3J5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW1hZ2VSZXBvc2l0b3J5Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmltYWdlUmVwb3NpdG9yeSA9IHRoaXMuX2ltYWdlUmVwb3NpdG9yeT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0b0RlcGxveW1lbnRzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29kZVJlcG9zaXRvcnkuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ltYWdlUmVwb3NpdG9yeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdmFsdWUuYXV0b0RlcGxveW1lbnRzRW5hYmxlZDtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fY29kZVJlcG9zaXRvcnkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvZGVSZXBvc2l0b3J5O1xuICAgICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbWFnZVJlcG9zaXRvcnk7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b19kZXBsb3ltZW50c19lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9EZXBsb3ltZW50c0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9EZXBsb3ltZW50c0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19kZXBsb3ltZW50c19lbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvRGVwbG95bWVudHNFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0RlcGxveW1lbnRzRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvRGVwbG95bWVudHNFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9EZXBsb3ltZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbiA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImF1dGhlbnRpY2F0aW9uX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbih2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY29kZV9yZXBvc2l0b3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZGVSZXBvc2l0b3J5ID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb2RlX3JlcG9zaXRvcnlcIik7XG4gIHB1YmxpYyBnZXQgY29kZVJlcG9zaXRvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVSZXBvc2l0b3J5O1xuICB9XG4gIHB1YmxpYyBwdXRDb2RlUmVwb3NpdG9yeSh2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMuX2NvZGVSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlUmVwb3NpdG9yeSgpIHtcbiAgICB0aGlzLl9jb2RlUmVwb3NpdG9yeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2RlUmVwb3NpdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlUmVwb3NpdG9yeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW1hZ2VfcmVwb3NpdG9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZVJlcG9zaXRvcnkgPSBuZXcgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJpbWFnZV9yZXBvc2l0b3J5XCIpO1xuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VSZXBvc2l0b3J5O1xuICB9XG4gIHB1YmxpYyBwdXRJbWFnZVJlcG9zaXRvcnkodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZVJlcG9zaXRvcnkoKSB7XG4gICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVJlcG9zaXRvcnkuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwcnVubmVyX3NlcnZpY2UgYXdzX2FwcHJ1bm5lcl9zZXJ2aWNlfVxuKi9cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19hcHBydW5uZXJfc2VydmljZVwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBBcHBydW5uZXJTZXJ2aWNlIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEFwcHJ1bm5lclNlcnZpY2UgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIEFwcHJ1bm5lclNlcnZpY2UgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBBcHBydW5uZXJTZXJ2aWNlIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19hcHBydW5uZXJfc2VydmljZVwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHJ1bm5lcl9zZXJ2aWNlIGF3c19hcHBydW5uZXJfc2VydmljZX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQXBwcnVubmVyU2VydmljZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcHBydW5uZXJTZXJ2aWNlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwcnVubmVyX3NlcnZpY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4gPSBjb25maWcuYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lID0gY29uZmlnLnNlcnZpY2VOYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5oZWFsdGhDaGVja0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5faW5zdGFuY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuaW5zdGFuY2VDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NvdXJjZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zb3VyY2VDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9fc2NhbGluZ19jb25maWd1cmF0aW9uX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0b19zY2FsaW5nX2NvbmZpZ3VyYXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybigpIHtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm47XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9pZCcpO1xuICB9XG5cbiAgLy8gc2VydmljZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZpY2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VOYW1lO1xuICB9XG5cbiAgLy8gc2VydmljZV91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV91cmwnKTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaGVhbHRoX2NoZWNrX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJoZWFsdGhfY2hlY2tfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VDb25maWd1cmF0aW9uID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJpbnN0YW5jZV9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRJbnN0YW5jZUNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc291cmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlQ29uZmlndXJhdGlvbiA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNvdXJjZV9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IHNvdXJjZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFNvdXJjZUNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fc291cmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRvX3NjYWxpbmdfY29uZmlndXJhdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgc2VydmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlTmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbjogYXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBoZWFsdGhfY2hlY2tfY29uZmlndXJhdGlvbjogYXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2hlYWx0aENoZWNrQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGluc3RhbmNlX2NvbmZpZ3VyYXRpb246IGFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzb3VyY2VfY29uZmlndXJhdGlvbjogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYXV0b19zY2FsaW5nX2NvbmZpZ3VyYXRpb25fYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzZXJ2aWNlX25hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBhcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGhlYWx0aF9jaGVja19jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBhcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGluc3RhbmNlX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgICAgc291cmNlX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0odGhpcy5fc291cmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=