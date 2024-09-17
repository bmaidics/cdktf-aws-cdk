"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform = exports.appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform = exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform = exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform = exports.appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform = void 0;
exports.appmeshVirtualGatewaySpecLoggingToTerraform = exports.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference = exports.appmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform = exports.appmeshVirtualGatewaySpecLoggingAccessLogToTerraform = exports.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference = exports.appmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform = exports.appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform = exports.AppmeshVirtualGatewaySpecListenerOutputReference = exports.appmeshVirtualGatewaySpecListenerToHclTerraform = exports.appmeshVirtualGatewaySpecListenerToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsValidationToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform = exports.appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform = exports.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference = exports.appmeshVirtualGatewaySpecListenerPortMappingToHclTerraform = exports.appmeshVirtualGatewaySpecListenerPortMappingToTerraform = exports.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference = exports.appmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform = exports.appmeshVirtualGatewaySpecListenerHealthCheckToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference = void 0;
exports.AppmeshVirtualGateway = exports.AppmeshVirtualGatewaySpecOutputReference = exports.appmeshVirtualGatewaySpecToHclTerraform = exports.appmeshVirtualGatewaySpecToTerraform = exports.AppmeshVirtualGatewaySpecLoggingOutputReference = exports.appmeshVirtualGatewaySpecLoggingToHclTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_chain: {
            value: cdktf.stringToHclTerraform(struct.certificateChain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key: {
            value: cdktf.stringToHclTerraform(struct.privateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        if (this._privateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
            this._privateKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
            this._privateKey = value.privateKey;
        }
    }
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateChainInput() {
        return this._certificateChain;
    }
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    set privateKey(value) {
        this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get privateKeyInput() {
        return this._privateKey;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference[_a] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct.file),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList",
        },
        sds: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct.sds),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this, "file");
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this, "sds");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._file?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file?.internalValue;
        }
        if (this._sds?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sds = this._sds?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    get file() {
        return this._file;
    }
    putFile(value) {
        this._file.internalValue = value;
    }
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file.internalValue;
    }
    get sds() {
        return this._sds;
    }
    putSds(value) {
        this._sds.internalValue = value;
    }
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference[_c] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exact),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exact: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exact),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
        }
    }
    get exact() {
        return cdktf.Fn.tolist(this.getListAttribute('exact'));
    }
    set exact(value) {
        this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference[_d] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        match: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct.match),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._match?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.match = this._match?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._match.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._match.internalValue = value.match;
        }
    }
    get match() {
        return this._match;
    }
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference[_e] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.certificateAuthorityArns),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_authority_arns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.certificateAuthorityArns),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateAuthorityArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateAuthorityArns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateAuthorityArns = value.certificateAuthorityArns;
        }
    }
    get certificateAuthorityArns() {
        return cdktf.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
    }
    set certificateAuthorityArns(value) {
        this._certificateAuthorityArns = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateAuthorityArnsInput() {
        return this._certificateAuthorityArns;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference[_f] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_chain: {
            value: cdktf.stringToHclTerraform(struct.certificateChain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
        }
    }
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateChainInput() {
        return this._certificateChain;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference[_g] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference[_h] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct.acm),
        file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        acm: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct.acm),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList",
        },
        file: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct.file),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList",
        },
        sds: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct.sds),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // acm - computed: false, optional: true, required: false
        this._acm = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this, "acm");
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this, "file");
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this, "sds");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._acm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acm = this._acm?.internalValue;
        }
        if (this._file?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file?.internalValue;
        }
        if (this._sds?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sds = this._sds?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acm.internalValue = undefined;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acm.internalValue = value.acm;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    get acm() {
        return this._acm;
    }
    putAcm(value) {
        this._acm.internalValue = value;
    }
    resetAcm() {
        this._acm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get acmInput() {
        return this._acm.internalValue;
    }
    get file() {
        return this._file;
    }
    putFile(value) {
        this._file.internalValue = value;
    }
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file.internalValue;
    }
    get sds() {
        return this._sds;
    }
    putSds(value) {
        this._sds.internalValue = value;
    }
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference[_j] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        subject_alternative_names: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct.subjectAlternativeNames),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList",
        },
        trust: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct.trust),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // subject_alternative_names - computed: false, optional: true, required: false
        this._subjectAlternativeNames = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this, "trust");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._subjectAlternativeNames?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
        }
        if (this._trust?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trust = this._trust?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._subjectAlternativeNames.internalValue = undefined;
            this._trust.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
            this._trust.internalValue = value.trust;
        }
    }
    get subjectAlternativeNames() {
        return this._subjectAlternativeNames;
    }
    putSubjectAlternativeNames(value) {
        this._subjectAlternativeNames.internalValue = value;
    }
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames.internalValue;
    }
    get trust() {
        return this._trust;
    }
    putTrust(value) {
        this._trust.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get trustInput() {
        return this._trust.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference[_k] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.ports),
        certificate: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enforce: {
            value: cdktf.booleanToHclTerraform(struct.enforce),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ports: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.ports),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
        certificate: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList",
        },
        validation: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct.validation),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // certificate - computed: false, optional: true, required: false
        this._certificate = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this, "certificate");
        // validation - computed: false, optional: false, required: true
        this._validation = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(this, "validation");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enforce !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforce = this._enforce;
        }
        if (this._ports !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enforce = undefined;
            this._ports = undefined;
            this._certificate.internalValue = undefined;
            this._validation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enforce = value.enforce;
            this._ports = value.ports;
            this._certificate.internalValue = value.certificate;
            this._validation.internalValue = value.validation;
        }
    }
    get enforce() {
        return this.getBooleanAttribute('enforce');
    }
    set enforce(value) {
        this._enforce = value;
    }
    resetEnforce() {
        this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enforceInput() {
        return this._enforce;
    }
    get ports() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
    }
    set ports(value) {
        this._ports = value;
    }
    resetPorts() {
        this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portsInput() {
        return this._ports;
    }
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    get validation() {
        return this._validation;
    }
    putValidation(value) {
        this._validation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get validationInput() {
        return this._validation.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference[_l] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tls: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        tls: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform(struct.tls),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // tls - computed: false, optional: true, required: false
        this._tls = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(this, "tls");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._tls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls = this._tls?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._tls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._tls.internalValue = value.tls;
        }
    }
    get tls() {
        return this._tls;
    }
    putTls(value) {
        this._tls.internalValue = value;
    }
    resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsInput() {
        return this._tls.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference;
_m = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference[_m] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_policy: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct.clientPolicy),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsToTerraform;
function appmeshVirtualGatewaySpecBackendDefaultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        client_policy: {
            value: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform(struct.clientPolicy),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecBackendDefaultsToHclTerraform = appmeshVirtualGatewaySpecBackendDefaultsToHclTerraform;
class AppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // client_policy - computed: false, optional: true, required: false
        this._clientPolicy = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(this, "client_policy");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._clientPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientPolicy.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientPolicy.internalValue = value.clientPolicy;
        }
    }
    get clientPolicy() {
        return this._clientPolicy;
    }
    putClientPolicy(value) {
        this._clientPolicy.internalValue = value;
    }
    resetClientPolicy() {
        this._clientPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientPolicyInput() {
        return this._clientPolicy.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsOutputReference;
_o = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsOutputReference[_o] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform;
function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_requests: {
            value: cdktf.numberToHclTerraform(struct.maxRequests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform;
class AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
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
        if (this._maxRequests !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRequests = this._maxRequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxRequests = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxRequests = value.maxRequests;
        }
    }
    get maxRequests() {
        return this.getNumberAttribute('max_requests');
    }
    set maxRequests(value) {
        this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxRequestsInput() {
        return this._maxRequests;
    }
}
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference;
_p = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference[_p] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
        max_pending_requests: cdktf.numberToTerraform(struct.maxPendingRequests),
    };
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform;
function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_connections: {
            value: cdktf.numberToHclTerraform(struct.maxConnections),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_pending_requests: {
            value: cdktf.numberToHclTerraform(struct.maxPendingRequests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform;
class AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
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
        if (this._maxConnections !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConnections = this._maxConnections;
        }
        if (this._maxPendingRequests !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPendingRequests = this._maxPendingRequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxConnections = undefined;
            this._maxPendingRequests = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxConnections = value.maxConnections;
            this._maxPendingRequests = value.maxPendingRequests;
        }
    }
    get maxConnections() {
        return this.getNumberAttribute('max_connections');
    }
    set maxConnections(value) {
        this._maxConnections = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxConnectionsInput() {
        return this._maxConnections;
    }
    get maxPendingRequests() {
        return this.getNumberAttribute('max_pending_requests');
    }
    set maxPendingRequests(value) {
        this._maxPendingRequests = value;
    }
    resetMaxPendingRequests() {
        this._maxPendingRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPendingRequestsInput() {
        return this._maxPendingRequests;
    }
}
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference;
_q = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference[_q] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform;
function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_requests: {
            value: cdktf.numberToHclTerraform(struct.maxRequests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform;
class AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
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
        if (this._maxRequests !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRequests = this._maxRequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxRequests = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxRequests = value.maxRequests;
        }
    }
    get maxRequests() {
        return this.getNumberAttribute('max_requests');
    }
    set maxRequests(value) {
        this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxRequestsInput() {
        return this._maxRequests;
    }
}
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference;
_r = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference[_r] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        grpc: appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct.grpc),
        http: appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct.http),
        http2: appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct.http2),
    };
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform;
function appmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        grpc: {
            value: appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform(struct.grpc),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList",
        },
        http: {
            value: appmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform(struct.http),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerConnectionPoolHttpList",
        },
        http2: {
            value: appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform(struct.http2),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform;
class AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // grpc - computed: false, optional: true, required: false
        this._grpc = new AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(this, "grpc");
        // http - computed: false, optional: true, required: false
        this._http = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(this, "http");
        // http2 - computed: false, optional: true, required: false
        this._http2 = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(this, "http2");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._grpc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.grpc = this._grpc?.internalValue;
        }
        if (this._http?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.http = this._http?.internalValue;
        }
        if (this._http2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.http2 = this._http2?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._grpc.internalValue = undefined;
            this._http.internalValue = undefined;
            this._http2.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._grpc.internalValue = value.grpc;
            this._http.internalValue = value.http;
            this._http2.internalValue = value.http2;
        }
    }
    get grpc() {
        return this._grpc;
    }
    putGrpc(value) {
        this._grpc.internalValue = value;
    }
    resetGrpc() {
        this._grpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grpcInput() {
        return this._grpc.internalValue;
    }
    get http() {
        return this._http;
    }
    putHttp(value) {
        this._http.internalValue = value;
    }
    resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpInput() {
        return this._http.internalValue;
    }
    get http2() {
        return this._http2;
    }
    putHttp2(value) {
        this._http2.internalValue = value;
    }
    resetHttp2() {
        this._http2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get http2Input() {
        return this._http2.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference;
_s = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference[_s] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval_millis: cdktf.numberToTerraform(struct.intervalMillis),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout_millis: cdktf.numberToTerraform(struct.timeoutMillis),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold),
    };
}
exports.appmeshVirtualGatewaySpecListenerHealthCheckToTerraform = appmeshVirtualGatewaySpecListenerHealthCheckToTerraform;
function appmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform(struct) {
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
        interval_millis: {
            value: cdktf.numberToHclTerraform(struct.intervalMillis),
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
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_millis: {
            value: cdktf.numberToHclTerraform(struct.timeoutMillis),
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
exports.appmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform = appmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform;
class AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
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
        if (this._intervalMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalMillis = this._intervalMillis;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._timeoutMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutMillis = this._timeoutMillis;
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
            this._intervalMillis = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._timeoutMillis = undefined;
            this._unhealthyThreshold = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._healthyThreshold = value.healthyThreshold;
            this._intervalMillis = value.intervalMillis;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._timeoutMillis = value.timeoutMillis;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }
    get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    set healthyThreshold(value) {
        this._healthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get healthyThresholdInput() {
        return this._healthyThreshold;
    }
    get intervalMillis() {
        return this.getNumberAttribute('interval_millis');
    }
    set intervalMillis(value) {
        this._intervalMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    get intervalMillisInput() {
        return this._intervalMillis;
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
    get port() {
        return this.getNumberAttribute('port');
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
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    get timeoutMillis() {
        return this.getNumberAttribute('timeout_millis');
    }
    set timeoutMillis(value) {
        this._timeoutMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutMillisInput() {
        return this._timeoutMillis;
    }
    get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    set unhealthyThreshold(value) {
        this._unhealthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
exports.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference = AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference;
_t = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference[_t] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
exports.appmeshVirtualGatewaySpecListenerPortMappingToTerraform = appmeshVirtualGatewaySpecListenerPortMappingToTerraform;
function appmeshVirtualGatewaySpecListenerPortMappingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerPortMappingToHclTerraform = appmeshVirtualGatewaySpecListenerPortMappingToHclTerraform;
class AppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
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
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._port = undefined;
            this._protocol = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._port = value.port;
            this._protocol = value.protocol;
        }
    }
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
}
exports.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference = AppmeshVirtualGatewaySpecListenerPortMappingOutputReference;
_u = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerPortMappingOutputReference[_u] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform;
function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_arn: {
            value: cdktf.stringToHclTerraform(struct.certificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateArn = value.certificateArn;
        }
    }
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    set certificateArn(value) {
        this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateArnInput() {
        return this._certificateArn;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference;
_v = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference[_v] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform;
function appmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_chain: {
            value: cdktf.stringToHclTerraform(struct.certificateChain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key: {
            value: cdktf.stringToHclTerraform(struct.privateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        if (this._privateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
            this._privateKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
            this._privateKey = value.privateKey;
        }
    }
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateChainInput() {
        return this._certificateChain;
    }
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    set privateKey(value) {
        this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get privateKeyInput() {
        return this._privateKey;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference;
_w = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference[_w] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform;
function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference;
_x = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference[_x] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct.acm),
        file: appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform;
function appmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        acm: {
            value: appmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform(struct.acm),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsCertificateAcmList",
        },
        file: {
            value: appmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform(struct.file),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsCertificateFileList",
        },
        sds: {
            value: appmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform(struct.sds),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsCertificateSdsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // acm - computed: false, optional: true, required: false
        this._acm = new AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(this, "acm");
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(this, "file");
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(this, "sds");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._acm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acm = this._acm?.internalValue;
        }
        if (this._file?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file?.internalValue;
        }
        if (this._sds?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sds = this._sds?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acm.internalValue = undefined;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acm.internalValue = value.acm;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    get acm() {
        return this._acm;
    }
    putAcm(value) {
        this._acm.internalValue = value;
    }
    resetAcm() {
        this._acm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get acmInput() {
        return this._acm.internalValue;
    }
    get file() {
        return this._file;
    }
    putFile(value) {
        this._file.internalValue = value;
    }
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file.internalValue;
    }
    get sds() {
        return this._sds;
    }
    putSds(value) {
        this._sds.internalValue = value;
    }
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference;
_y = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference[_y] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exact),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform;
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exact: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exact),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform = appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
        }
    }
    get exact() {
        return cdktf.Fn.tolist(this.getListAttribute('exact'));
    }
    set exact(value) {
        this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
_z = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference[_z] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform;
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        match: {
            value: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct.match),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform = appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._match?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.match = this._match?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._match.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._match.internalValue = value.match;
        }
    }
    get match() {
        return this._match;
    }
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference[_0] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform;
function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_chain: {
            value: cdktf.stringToHclTerraform(struct.certificateChain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
        }
    }
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateChainInput() {
        return this._certificateChain;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference[_1] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform;
function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference[_2] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform;
function appmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file: {
            value: appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform(struct.file),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList",
        },
        sds: {
            value: appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform(struct.sds),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(this, "file");
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(this, "sds");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._file?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file?.internalValue;
        }
        if (this._sds?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sds = this._sds?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    get file() {
        return this._file;
    }
    putFile(value) {
        this._file.internalValue = value;
    }
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file.internalValue;
    }
    get sds() {
        return this._sds;
    }
    putSds(value) {
        this._sds.internalValue = value;
    }
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference[_3] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationToTerraform;
function appmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        subject_alternative_names: {
            value: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct.subjectAlternativeNames),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList",
        },
        trust: {
            value: appmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform(struct.trust),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsValidationTrustList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform = appmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // subject_alternative_names - computed: false, optional: true, required: false
        this._subjectAlternativeNames = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(this, "trust");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._subjectAlternativeNames?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
        }
        if (this._trust?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trust = this._trust?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._subjectAlternativeNames.internalValue = undefined;
            this._trust.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
            this._trust.internalValue = value.trust;
        }
    }
    get subjectAlternativeNames() {
        return this._subjectAlternativeNames;
    }
    putSubjectAlternativeNames(value) {
        this._subjectAlternativeNames.internalValue = value;
    }
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames.internalValue;
    }
    get trust() {
        return this._trust;
    }
    putTrust(value) {
        this._trust.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get trustInput() {
        return this._trust.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference;
_4 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference[_4] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsToTerraform = appmeshVirtualGatewaySpecListenerTlsToTerraform;
function appmeshVirtualGatewaySpecListenerTlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate: {
            value: appmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsCertificateList",
        },
        validation: {
            value: appmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform(struct.validation),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsValidationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerTlsToHclTerraform = appmeshVirtualGatewaySpecListenerTlsToHclTerraform;
class AppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // certificate - computed: false, optional: false, required: true
        this._certificate = new AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(this, "certificate");
        // validation - computed: false, optional: true, required: false
        this._validation = new AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(this, "validation");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mode = undefined;
            this._certificate.internalValue = undefined;
            this._validation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mode = value.mode;
            this._certificate.internalValue = value.certificate;
            this._validation.internalValue = value.validation;
        }
    }
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    get validation() {
        return this._validation;
    }
    putValidation(value) {
        this._validation.internalValue = value;
    }
    resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validationInput() {
        return this._validation.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerTlsOutputReference = AppmeshVirtualGatewaySpecListenerTlsOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsOutputReference[_5] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_pool: appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct.connectionPool),
        health_check: appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct.healthCheck),
        port_mapping: appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct.portMapping),
        tls: appmeshVirtualGatewaySpecListenerTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualGatewaySpecListenerToTerraform = appmeshVirtualGatewaySpecListenerToTerraform;
function appmeshVirtualGatewaySpecListenerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        connection_pool: {
            value: appmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform(struct.connectionPool),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerConnectionPoolList",
        },
        health_check: {
            value: appmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform(struct.healthCheck),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerHealthCheckList",
        },
        port_mapping: {
            value: appmeshVirtualGatewaySpecListenerPortMappingToHclTerraform(struct.portMapping),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerPortMappingList",
        },
        tls: {
            value: appmeshVirtualGatewaySpecListenerTlsToHclTerraform(struct.tls),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerTlsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecListenerToHclTerraform = appmeshVirtualGatewaySpecListenerToHclTerraform;
class AppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // connection_pool - computed: false, optional: true, required: false
        this._connectionPool = new AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(this, "connection_pool");
        // health_check - computed: false, optional: true, required: false
        this._healthCheck = new AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(this, "health_check");
        // port_mapping - computed: false, optional: false, required: true
        this._portMapping = new AppmeshVirtualGatewaySpecListenerPortMappingOutputReference(this, "port_mapping");
        // tls - computed: false, optional: true, required: false
        this._tls = new AppmeshVirtualGatewaySpecListenerTlsOutputReference(this, "tls");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._connectionPool?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionPool = this._connectionPool?.internalValue;
        }
        if (this._healthCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthCheck = this._healthCheck?.internalValue;
        }
        if (this._portMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portMapping = this._portMapping?.internalValue;
        }
        if (this._tls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls = this._tls?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._connectionPool.internalValue = undefined;
            this._healthCheck.internalValue = undefined;
            this._portMapping.internalValue = undefined;
            this._tls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionPool.internalValue = value.connectionPool;
            this._healthCheck.internalValue = value.healthCheck;
            this._portMapping.internalValue = value.portMapping;
            this._tls.internalValue = value.tls;
        }
    }
    get connectionPool() {
        return this._connectionPool;
    }
    putConnectionPool(value) {
        this._connectionPool.internalValue = value;
    }
    resetConnectionPool() {
        this._connectionPool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionPoolInput() {
        return this._connectionPool.internalValue;
    }
    get healthCheck() {
        return this._healthCheck;
    }
    putHealthCheck(value) {
        this._healthCheck.internalValue = value;
    }
    resetHealthCheck() {
        this._healthCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckInput() {
        return this._healthCheck.internalValue;
    }
    get portMapping() {
        return this._portMapping;
    }
    putPortMapping(value) {
        this._portMapping.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get portMappingInput() {
        return this._portMapping.internalValue;
    }
    get tls() {
        return this._tls;
    }
    putTls(value) {
        this._tls.internalValue = value;
    }
    resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsInput() {
        return this._tls.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecListenerOutputReference = AppmeshVirtualGatewaySpecListenerOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerOutputReference[_6] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
    };
}
exports.appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform = appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform;
function appmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform = appmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform;
class AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
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
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._path = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._path = value.path;
        }
    }
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
}
exports.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference = AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference[_7] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct.file),
    };
}
exports.appmeshVirtualGatewaySpecLoggingAccessLogToTerraform = appmeshVirtualGatewaySpecLoggingAccessLogToTerraform;
function appmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file: {
            value: appmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform(struct.file),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecLoggingAccessLogFileList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform = appmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform;
class AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(this, "file");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._file?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
        }
    }
    get file() {
        return this._file;
    }
    putFile(value) {
        this._file.internalValue = value;
    }
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference = AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference[_8] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_log: appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct.accessLog),
    };
}
exports.appmeshVirtualGatewaySpecLoggingToTerraform = appmeshVirtualGatewaySpecLoggingToTerraform;
function appmeshVirtualGatewaySpecLoggingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_log: {
            value: appmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform(struct.accessLog),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecLoggingAccessLogList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecLoggingToHclTerraform = appmeshVirtualGatewaySpecLoggingToHclTerraform;
class AppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // access_log - computed: false, optional: true, required: false
        this._accessLog = new AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(this, "access_log");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessLog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessLog = this._accessLog?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessLog.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessLog.internalValue = value.accessLog;
        }
    }
    get accessLog() {
        return this._accessLog;
    }
    putAccessLog(value) {
        this._accessLog.internalValue = value;
    }
    resetAccessLog() {
        this._accessLog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessLogInput() {
        return this._accessLog.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecLoggingOutputReference = AppmeshVirtualGatewaySpecLoggingOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecLoggingOutputReference[_9] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference", version: "0.0.0" };
function appmeshVirtualGatewaySpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        backend_defaults: appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct.backendDefaults),
        listener: appmeshVirtualGatewaySpecListenerToTerraform(struct.listener),
        logging: appmeshVirtualGatewaySpecLoggingToTerraform(struct.logging),
    };
}
exports.appmeshVirtualGatewaySpecToTerraform = appmeshVirtualGatewaySpecToTerraform;
function appmeshVirtualGatewaySpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        backend_defaults: {
            value: appmeshVirtualGatewaySpecBackendDefaultsToHclTerraform(struct.backendDefaults),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecBackendDefaultsList",
        },
        listener: {
            value: appmeshVirtualGatewaySpecListenerToHclTerraform(struct.listener),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecListenerList",
        },
        logging: {
            value: appmeshVirtualGatewaySpecLoggingToHclTerraform(struct.logging),
            isBlock: true,
            type: "list",
            storageClassType: "AppmeshVirtualGatewaySpecLoggingList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appmeshVirtualGatewaySpecToHclTerraform = appmeshVirtualGatewaySpecToHclTerraform;
class AppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // backend_defaults - computed: false, optional: true, required: false
        this._backendDefaults = new AppmeshVirtualGatewaySpecBackendDefaultsOutputReference(this, "backend_defaults");
        // listener - computed: false, optional: false, required: true
        this._listener = new AppmeshVirtualGatewaySpecListenerOutputReference(this, "listener");
        // logging - computed: false, optional: true, required: false
        this._logging = new AppmeshVirtualGatewaySpecLoggingOutputReference(this, "logging");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._backendDefaults?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.backendDefaults = this._backendDefaults?.internalValue;
        }
        if (this._listener?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.listener = this._listener?.internalValue;
        }
        if (this._logging?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logging = this._logging?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._backendDefaults.internalValue = undefined;
            this._listener.internalValue = undefined;
            this._logging.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._backendDefaults.internalValue = value.backendDefaults;
            this._listener.internalValue = value.listener;
            this._logging.internalValue = value.logging;
        }
    }
    get backendDefaults() {
        return this._backendDefaults;
    }
    putBackendDefaults(value) {
        this._backendDefaults.internalValue = value;
    }
    resetBackendDefaults() {
        this._backendDefaults.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backendDefaultsInput() {
        return this._backendDefaults.internalValue;
    }
    get listener() {
        return this._listener;
    }
    putListener(value) {
        this._listener.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get listenerInput() {
        return this._listener.internalValue;
    }
    get logging() {
        return this._logging;
    }
    putLogging(value) {
        this._logging.internalValue = value;
    }
    resetLogging() {
        this._logging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingInput() {
        return this._logging.internalValue;
    }
}
exports.AppmeshVirtualGatewaySpecOutputReference = AppmeshVirtualGatewaySpecOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecOutputReference[_10] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_virtual_gateway aws_appmesh_virtual_gateway}
*/
class AppmeshVirtualGateway extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppmeshVirtualGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshVirtualGateway to import
    * @param importFromId The id of the existing AppmeshVirtualGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_virtual_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshVirtualGateway to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_virtual_gateway", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_virtual_gateway aws_appmesh_virtual_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualGatewayConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_gateway',
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
        // spec - computed: false, optional: false, required: true
        this._spec = new AppmeshVirtualGatewaySpecOutputReference(this, "spec");
        this._id = config.id;
        this._meshName = config.meshName;
        this._meshOwner = config.meshOwner;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._spec.internalValue = config.spec;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_date - computed: true, optional: false, required: false
    get createdDate() {
        return this.getStringAttribute('created_date');
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
    // last_updated_date - computed: true, optional: false, required: false
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }
    get meshName() {
        return this.getStringAttribute('mesh_name');
    }
    set meshName(value) {
        this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    get meshNameInput() {
        return this._meshName;
    }
    get meshOwner() {
        return this.getStringAttribute('mesh_owner');
    }
    set meshOwner(value) {
        this._meshOwner = value;
    }
    resetMeshOwner() {
        this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get meshOwnerInput() {
        return this._meshOwner;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // resource_owner - computed: true, optional: false, required: false
    get resourceOwner() {
        return this.getStringAttribute('resource_owner');
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
    get spec() {
        return this._spec;
    }
    putSpec(value) {
        this._spec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get specInput() {
        return this._spec.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            spec: appmeshVirtualGatewaySpecToTerraform(this._spec.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mesh_name: {
                value: cdktf.stringToHclTerraform(this._meshName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mesh_owner: {
                value: cdktf.stringToHclTerraform(this._meshOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            spec: {
                value: appmeshVirtualGatewaySpecToHclTerraform(this._spec.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppmeshVirtualGatewaySpecList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AppmeshVirtualGateway = AppmeshVirtualGateway;
_11 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGateway[_11] = { fqn: "@cdktf/aws-cdk.appmeshVirtualGateway.AppmeshVirtualGateway", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AppmeshVirtualGateway.tfResourceType = "aws_appmesh_virtual_gateway";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FwcG1lc2gtdmlydHVhbC1nYXRld2F5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQSwrQkFBK0I7QUFrRC9CLFNBQWdCLGlGQUFpRixDQUFDLE1BQXVLO0lBQ3ZRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQVRELDhLQVNDO0FBR0QsU0FBZ0Isb0ZBQW9GLENBQUMsTUFBdUs7SUFDMVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVB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UUFBUSxDQUFDO2dCQUNyRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSxXQUFXO2FBQzlCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztnQkFDeEUsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsK0JBQStCO2FBQ2xEO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUF4UEgsc0RBeVBDOzs7QUF2UEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxvQ0FBYyxHQUFHLDZCQUE2QixBQUFoQyxDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5XG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2lkIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjbWVzaF9uYW1lIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNtZXNoX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG1lc2hOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I21lc2hfb3duZXIgQXBwbWVzaFZpcnR1YWxHYXRld2F5I21lc2hfb3duZXJ9XG4gICovXG4gIHJlYWRvbmx5IG1lc2hPd25lcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjbmFtZSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSN0YWdzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjdGFnc19hbGwgQXBwbWVzaFZpcnR1YWxHYXRld2F5I3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogc3BlYyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjc3BlYyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc3BlY31cbiAgKi9cbiAgcmVhZG9ubHkgc3BlYzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2NlcnRpZmljYXRlX2NoYWluIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNjZXJ0aWZpY2F0ZV9jaGFpbn1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNwcml2YXRlX2tleSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjcHJpdmF0ZV9rZXl9XG4gICovXG4gIHJlYWRvbmx5IHByaXZhdGVLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgICBwcml2YXRlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcml2YXRlS2V5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNlcnRpZmljYXRlX2NoYWluOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwcml2YXRlX2tleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJpdmF0ZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlS2V5ID0gdGhpcy5fcHJpdmF0ZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpdmF0ZUtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlLmNlcnRpZmljYXRlQ2hhaW47XG4gICAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWUucHJpdmF0ZUtleTtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJpdmF0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZhdGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmF0ZUtleTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNzZWNyZXRfbmFtZSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc2VjcmV0X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHNlY3JldF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWNyZXROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3JldE5hbWUgPSB0aGlzLl9zZWNyZXROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VjcmV0TmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlLnNlY3JldE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VjcmV0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjcmV0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VjcmV0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNyZXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNyZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0TmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUge1xuICAvKipcbiAgKiBmaWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNmaWxlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNmaWxlfVxuICAqL1xuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZTtcbiAgLyoqXG4gICogc2RzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNzZHMgQXBwbWVzaFZpcnR1YWxHYXRld2F5I3Nkc31cbiAgKi9cbiAgcmVhZG9ubHkgc2RzPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzVG9UZXJyYWZvcm0oc3RydWN0IS5zZHMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZmlsZToge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZpbGUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlTGlzdFwiLFxuICAgIH0sXG4gICAgc2RzOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZHMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9maWxlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGUgPSB0aGlzLl9maWxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2RzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJmaWxlXCIpO1xuICBwdWJsaWMgZ2V0IGZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgcHVibGljIHB1dEZpbGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNkc1wiKTtcbiAgcHVibGljIGdldCBzZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NkcztcbiAgfVxuICBwdWJsaWMgcHV0U2RzKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNkcygpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2V4YWN0IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNleGFjdH1cbiAgKi9cbiAgcmVhZG9ubHkgZXhhY3Q6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5leGFjdCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBleGFjdDoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmV4YWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhhY3QgPSB0aGlzLl9leGFjdDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9leGFjdCA9IHZhbHVlLmV4YWN0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4YWN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4YWN0Pzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGV4YWN0KCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGFjdCcpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4YWN0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V4YWN0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4YWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4YWN0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMge1xuICAvKipcbiAgKiBtYXRjaCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjbWF0Y2ggQXBwbWVzaFZpcnR1YWxHYXRld2F5I21hdGNofVxuICAqL1xuICByZWFkb25seSBtYXRjaDogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1hdGNoOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXRjaCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF0Y2ggPSB0aGlzLl9tYXRjaD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2g7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibWF0Y2hcIik7XG4gIHB1YmxpYyBnZXQgbWF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoO1xuICB9XG4gIHB1YmxpYyBwdXRNYXRjaCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoKSB7XG4gICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXRjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJucyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybnN9XG4gICovXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJuczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJuczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyA9IHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJucztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJucyA9IHZhbHVlLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucztcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJucycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJucztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2NlcnRpZmljYXRlX2NoYWluIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNjZXJ0aWZpY2F0ZV9jaGFpbn1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2NoYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNlcnRpZmljYXRlQ2hhaW4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNlcnRpZmljYXRlQ2hhaW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWUuY2VydGlmaWNhdGVDaGFpbjtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNzZWNyZXRfbmFtZSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc2VjcmV0X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHNlY3JldF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3JldE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VjcmV0TmFtZSA9IHRoaXMuX3NlY3JldE5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VjcmV0TmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlLnNlY3JldE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VjcmV0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjcmV0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VjcmV0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNyZXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNyZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0TmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0IHtcbiAgLyoqXG4gICogYWNtIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNhY20gQXBwbWVzaFZpcnR1YWxHYXRld2F5I2FjbX1cbiAgKi9cbiAgcmVhZG9ubHkgYWNtPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbTtcbiAgLyoqXG4gICogZmlsZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjZmlsZSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjZmlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlO1xuICAvKipcbiAgKiBzZHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3NkcyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc2RzfVxuICAqL1xuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjbTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0IS5zZHMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWNtOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbUxpc3RcIixcbiAgICB9LFxuICAgIGZpbGU6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlTGlzdFwiLFxuICAgIH0sXG4gICAgc2RzOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNtPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjbSA9IHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2RzID0gdGhpcy5fc2RzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNtO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmlsZTtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY20gPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImFjbVwiKTtcbiAgcHVibGljIGdldCBhY20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbTtcbiAgfVxuICBwdWJsaWMgcHV0QWNtKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY20oKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZpbGVcIik7XG4gIHB1YmxpYyBnZXQgZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBwdWJsaWMgcHV0RmlsZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzZHNcIik7XG4gIHB1YmxpYyBnZXQgc2RzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZHM7XG4gIH1cbiAgcHVibGljIHB1dFNkcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24ge1xuICAvKipcbiAgKiBzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzfVxuICAqL1xuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gIC8qKlxuICAqIHRydXN0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSN0cnVzdCBBcHBtZXNoVmlydHVhbEdhdGV3YXkjdHJ1c3R9XG4gICovXG4gIHJlYWRvbmx5IHRydXN0OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKSxcbiAgICB0cnVzdDogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFRvVGVycmFmb3JtKHN0cnVjdCEudHJ1c3QpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczoge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0xpc3RcIixcbiAgICB9LFxuICAgIHRydXN0OiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFRvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJ1c3QpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0TGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzID0gdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cnVzdD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cnVzdCA9IHRoaXMuX3RydXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHJ1c3QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzO1xuICAgICAgdGhpcy5fdHJ1c3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRydXN0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3ViamVjdEFsdGVybmF0aXZlTmFtZXMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXNcIik7XG4gIHB1YmxpYyBnZXQgc3ViamVjdEFsdGVybmF0aXZlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzO1xuICB9XG4gIHB1YmxpYyBwdXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcykge1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdHJ1c3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJ1c3QgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRydXN0XCIpO1xuICBwdWJsaWMgZ2V0IHRydXN0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdDtcbiAgfVxuICBwdWJsaWMgcHV0VHJ1c3QodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QpIHtcbiAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRydXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RydXN0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRscyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2VuZm9yY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2VuZm9yY2V9XG4gICovXG4gIHJlYWRvbmx5IGVuZm9yY2U/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3BvcnRzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNwb3J0c31cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydHM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICogY2VydGlmaWNhdGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2NlcnRpZmljYXRlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNjZXJ0aWZpY2F0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGU7XG4gIC8qKlxuICAqIHZhbGlkYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3ZhbGlkYXRpb24gQXBwbWVzaFZpcnR1YWxHYXRld2F5I3ZhbGlkYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHZhbGlkYXRpb246IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZm9yY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuZm9yY2UpLFxuICAgIHBvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5wb3J0cyksXG4gICAgY2VydGlmaWNhdGU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZGF0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVuZm9yY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmZvcmNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcG9ydHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5wb3J0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlckxpc3RcIixcbiAgICB9LFxuICAgIGNlcnRpZmljYXRlOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUxpc3RcIixcbiAgICB9LFxuICAgIHZhbGlkYXRpb246IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsaWRhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmZvcmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuZm9yY2UgPSB0aGlzLl9lbmZvcmNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydHMgPSB0aGlzLl9wb3J0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NlcnRpZmljYXRlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbGlkYXRpb24gPSB0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuZm9yY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuZm9yY2UgPSB2YWx1ZS5lbmZvcmNlO1xuICAgICAgdGhpcy5fcG9ydHMgPSB2YWx1ZS5wb3J0cztcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jZXJ0aWZpY2F0ZTtcbiAgICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnZhbGlkYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZW5mb3JjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmZvcmNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmZvcmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuZm9yY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZm9yY2UodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuZm9yY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmZvcmNlKCkge1xuICAgIHRoaXMuX2VuZm9yY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZm9yY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5mb3JjZTtcbiAgfVxuXG4gIC8vIHBvcnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnRzPzogbnVtYmVyW107IFxuICBwdWJsaWMgZ2V0IHBvcnRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Ub2tlbi5hc051bWJlckxpc3QoY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TnVtYmVyTGlzdEF0dHJpYnV0ZSgncG9ydHMnKSkpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fcG9ydHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0cygpIHtcbiAgICB0aGlzLl9wb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydHM7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjZXJ0aWZpY2F0ZVwiKTtcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGU7XG4gIH1cbiAgcHVibGljIHB1dENlcnRpZmljYXRlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGUoKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsaWRhdGlvbiA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInZhbGlkYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgdmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0VmFsaWRhdGlvbih2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24pIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSB7XG4gIC8qKlxuICAqIHRscyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjdGxzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSN0bHN9XG4gICovXG4gIHJlYWRvbmx5IHRscz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGxzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0IS50bHMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgdGxzOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudGxzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdGxzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRscyA9IHRoaXMuX3Rscz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB2YWx1ZS50bHM7XG4gICAgfVxuICB9XG5cbiAgLy8gdGxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RscyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGxzXCIpO1xuICBwdWJsaWMgZ2V0IHRscygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzO1xuICB9XG4gIHB1YmxpYyBwdXRUbHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRscygpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMge1xuICAvKipcbiAgKiBjbGllbnRfcG9saWN5IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNjbGllbnRfcG9saWN5IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNjbGllbnRfcG9saWN5fVxuICAqL1xuICByZWFkb25seSBjbGllbnRQb2xpY3k/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsaWVudF9wb2xpY3k6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudFBvbGljeSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjbGllbnRfcG9saWN5OiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50UG9saWN5KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xpZW50UG9saWN5Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsaWVudFBvbGljeSA9IHRoaXMuX2NsaWVudFBvbGljeT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jbGllbnRQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbGllbnRQb2xpY3k7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xpZW50X3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbGllbnRQb2xpY3kgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNsaWVudF9wb2xpY3lcIik7XG4gIHB1YmxpYyBnZXQgY2xpZW50UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dENsaWVudFBvbGljeSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSkge1xuICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50UG9saWN5KCkge1xuICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjbWF4X3JlcXVlc3RzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNtYXhfcmVxdWVzdHN9XG4gICovXG4gIHJlYWRvbmx5IG1heFJlcXVlc3RzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJlcXVlc3RzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1heF9yZXF1ZXN0czoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4UmVxdWVzdHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heFJlcXVlc3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFJlcXVlc3RzID0gdGhpcy5fbWF4UmVxdWVzdHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4UmVxdWVzdHMgPSB2YWx1ZS5tYXhSZXF1ZXN0cztcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfcmVxdWVzdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4UmVxdWVzdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJlcXVlc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3JlcXVlc3RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhSZXF1ZXN0cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UmVxdWVzdHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UmVxdWVzdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UmVxdWVzdHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjbWF4X2Nvbm5lY3Rpb25zIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNtYXhfY29ubmVjdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IG1heENvbm5lY3Rpb25zOiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I21heF9wZW5kaW5nX3JlcXVlc3RzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNtYXhfcGVuZGluZ19yZXF1ZXN0c31cbiAgKi9cbiAgcmVhZG9ubHkgbWF4UGVuZGluZ1JlcXVlc3RzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9jb25uZWN0aW9uczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDb25uZWN0aW9ucyksXG4gICAgbWF4X3BlbmRpbmdfcmVxdWVzdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UGVuZGluZ1JlcXVlc3RzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1heF9jb25uZWN0aW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4Q29ubmVjdGlvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIG1heF9wZW5kaW5nX3JlcXVlc3RzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhQZW5kaW5nUmVxdWVzdHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heENvbm5lY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENvbm5lY3Rpb25zID0gdGhpcy5fbWF4Q29ubmVjdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4UGVuZGluZ1JlcXVlc3RzID0gdGhpcy5fbWF4UGVuZGluZ1JlcXVlc3RzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4Q29ubmVjdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21heENvbm5lY3Rpb25zID0gdmFsdWUubWF4Q29ubmVjdGlvbnM7XG4gICAgICB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHMgPSB2YWx1ZS5tYXhQZW5kaW5nUmVxdWVzdHM7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4X2Nvbm5lY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heENvbm5lY3Rpb25zPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhDb25uZWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jb25uZWN0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4Q29ubmVjdGlvbnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENvbm5lY3Rpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENvbm5lY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENvbm5lY3Rpb25zO1xuICB9XG5cbiAgLy8gbWF4X3BlbmRpbmdfcmVxdWVzdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4UGVuZGluZ1JlcXVlc3RzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhQZW5kaW5nUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcGVuZGluZ19yZXF1ZXN0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4UGVuZGluZ1JlcXVlc3RzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhQZW5kaW5nUmVxdWVzdHMoKSB7XG4gICAgdGhpcy5fbWF4UGVuZGluZ1JlcXVlc3RzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhQZW5kaW5nUmVxdWVzdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UGVuZGluZ1JlcXVlc3RzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNtYXhfcmVxdWVzdHMgQXBwbWVzaFZpcnR1YWxHYXRld2F5I21heF9yZXF1ZXN0c31cbiAgKi9cbiAgcmVhZG9ubHkgbWF4UmVxdWVzdHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfcmVxdWVzdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UmVxdWVzdHMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF4X3JlcXVlc3RzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhSZXF1ZXN0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhSZXF1ZXN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhSZXF1ZXN0cyA9IHRoaXMuX21heFJlcXVlc3RzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heFJlcXVlc3RzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHZhbHVlLm1heFJlcXVlc3RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9yZXF1ZXN0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhSZXF1ZXN0cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcmVxdWVzdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFJlcXVlc3RzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSZXF1ZXN0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbCB7XG4gIC8qKlxuICAqIGdycGMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2dycGMgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2dycGN9XG4gICovXG4gIHJlYWRvbmx5IGdycGM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGM7XG4gIC8qKlxuICAqIGh0dHAgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2h0dHAgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2h0dHB9XG4gICovXG4gIHJlYWRvbmx5IGh0dHA/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHA7XG4gIC8qKlxuICAqIGh0dHAyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNodHRwMiBBcHBtZXNoVmlydHVhbEdhdGV3YXkjaHR0cDJ9XG4gICovXG4gIHJlYWRvbmx5IGh0dHAyPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBncnBjOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmdycGMpLFxuICAgIGh0dHA6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cFRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cCksXG4gICAgaHR0cDI6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHAyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGdycGM6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmdycGMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNMaXN0XCIsXG4gICAgfSxcbiAgICBodHRwOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5odHRwKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwTGlzdFwiLFxuICAgIH0sXG4gICAgaHR0cDI6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5odHRwMiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZ3JwYz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ncnBjID0gdGhpcy5fZ3JwYz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2h0dHA/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cCA9IHRoaXMuX2h0dHA/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwMj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwMiA9IHRoaXMuX2h0dHAyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ncnBjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ncnBjLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ncnBjO1xuICAgICAgdGhpcy5faHR0cC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaHR0cDtcbiAgICAgIHRoaXMuX2h0dHAyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5odHRwMjtcbiAgICB9XG4gIH1cblxuICAvLyBncnBjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dycGMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZ3JwY1wiKTtcbiAgcHVibGljIGdldCBncnBjKCkge1xuICAgIHJldHVybiB0aGlzLl9ncnBjO1xuICB9XG4gIHB1YmxpYyBwdXRHcnBjKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMpIHtcbiAgICB0aGlzLl9ncnBjLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcnBjKCkge1xuICAgIHRoaXMuX2dycGMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncnBjLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2h0dHAgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaHR0cFwiKTtcbiAgcHVibGljIGdldCBodHRwKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwO1xuICB9XG4gIHB1YmxpYyBwdXRIdHRwKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHApIHtcbiAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwKCkge1xuICAgIHRoaXMuX2h0dHAuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwMiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwMiA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaHR0cDJcIik7XG4gIHB1YmxpYyBnZXQgaHR0cDIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAyO1xuICB9XG4gIHB1YmxpYyBwdXRIdHRwMih2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMikge1xuICAgIHRoaXMuX2h0dHAyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwMigpIHtcbiAgICB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwMklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjaGVhbHRoeV90aHJlc2hvbGQgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2hlYWx0aHlfdGhyZXNob2xkfVxuICAqL1xuICByZWFkb25seSBoZWFsdGh5VGhyZXNob2xkOiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2ludGVydmFsX21pbGxpcyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjaW50ZXJ2YWxfbWlsbGlzfVxuICAqL1xuICByZWFkb25seSBpbnRlcnZhbE1pbGxpczogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNwYXRoIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNwYXRofVxuICAqL1xuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNwb3J0IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNwb3J0fVxuICAqL1xuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNwcm90b2NvbCBBcHBtZXNoVmlydHVhbEdhdGV3YXkjcHJvdG9jb2x9XG4gICovXG4gIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3RpbWVvdXRfbWlsbGlzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSN0aW1lb3V0X21pbGxpc31cbiAgKi9cbiAgcmVhZG9ubHkgdGltZW91dE1pbGxpczogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSN1bmhlYWx0aHlfdGhyZXNob2xkIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSN1bmhlYWx0aHlfdGhyZXNob2xkfVxuICAqL1xuICByZWFkb25seSB1bmhlYWx0aHlUaHJlc2hvbGQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFsdGh5VGhyZXNob2xkKSxcbiAgICBpbnRlcnZhbF9taWxsaXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxNaWxsaXMpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgdGltZW91dF9taWxsaXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dE1pbGxpcyksXG4gICAgdW5oZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS51bmhlYWx0aHlUaHJlc2hvbGQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaGVhbHRoeV90aHJlc2hvbGQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aHlUaHJlc2hvbGQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGludGVydmFsX21pbGxpczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxNaWxsaXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHBhdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBvcnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHByb3RvY29sOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGltZW91dF9taWxsaXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXRNaWxsaXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHVuaGVhbHRoeV90aHJlc2hvbGQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVuaGVhbHRoeVRocmVzaG9sZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2sgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhbHRoeVRocmVzaG9sZCA9IHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnRlcnZhbE1pbGxpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnRlcnZhbE1pbGxpcyA9IHRoaXMuX2ludGVydmFsTWlsbGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXRoID0gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm90b2NvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm90b2NvbCA9IHRoaXMuX3Byb3RvY29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dE1pbGxpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0TWlsbGlzID0gdGhpcy5fdGltZW91dE1pbGxpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VuaGVhbHRoeVRocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bmhlYWx0aHlUaHJlc2hvbGQgPSB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnRlcnZhbE1pbGxpcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0TWlsbGlzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUuaGVhbHRoeVRocmVzaG9sZDtcbiAgICAgIHRoaXMuX2ludGVydmFsTWlsbGlzID0gdmFsdWUuaW50ZXJ2YWxNaWxsaXM7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWUucGF0aDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICAgIHRoaXMuX3RpbWVvdXRNaWxsaXMgPSB2YWx1ZS50aW1lb3V0TWlsbGlzO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUudW5oZWFsdGh5VGhyZXNob2xkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlYWx0aHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGVhbHRoeVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGh5VGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQ7XG4gIH1cblxuICAvLyBpbnRlcnZhbF9taWxsaXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxNaWxsaXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsTWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJ2YWxfbWlsbGlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbE1pbGxpcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWxNaWxsaXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxNaWxsaXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxNaWxsaXM7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF0aCgpIHtcbiAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvLyB0aW1lb3V0X21pbGxpcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aW1lb3V0TWlsbGlzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0TWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9taWxsaXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRNaWxsaXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWVvdXRNaWxsaXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dE1pbGxpc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0TWlsbGlzO1xuICB9XG5cbiAgLy8gdW5oZWFsdGh5X3RocmVzaG9sZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bmhlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3VuaGVhbHRoeV90aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNwb3J0IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNwb3J0fVxuICAqL1xuICByZWFkb25seSBwb3J0OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3Byb3RvY29sIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmdPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHBvcnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHByb3RvY29sOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3BvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm90b2NvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm90b2NvbCA9IHRoaXMuX3Byb3RvY29sO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICB9XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY20ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNjZXJ0aWZpY2F0ZV9hcm4gQXBwbWVzaFZpcnR1YWxHYXRld2F5I2NlcnRpZmljYXRlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY21PdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY21PdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY2VydGlmaWNhdGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY20gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NlcnRpZmljYXRlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQXJuID0gdGhpcy5fY2VydGlmaWNhdGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlLmNlcnRpZmljYXRlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNjZXJ0aWZpY2F0ZV9jaGFpbiBBcHBtZXNoVmlydHVhbEdhdGV3YXkjY2VydGlmaWNhdGVfY2hhaW59XG4gICovXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjcHJpdmF0ZV9rZXkgQXBwbWVzaFZpcnR1YWxHYXRld2F5I3ByaXZhdGVfa2V5fVxuICAqL1xuICByZWFkb25seSBwcml2YXRlS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJpdmF0ZV9rZXk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByaXZhdGVLZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2YXRlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByaXZhdGVLZXkgPSB0aGlzLl9wcml2YXRlS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZS5jZXJ0aWZpY2F0ZUNoYWluO1xuICAgICAgdGhpcy5fcHJpdmF0ZUtleSA9IHZhbHVlLnByaXZhdGVLZXk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfY2hhaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVDaGFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2NoYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUNoYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVDaGFpbjtcbiAgfVxuXG4gIC8vIHByaXZhdGVfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByaXZhdGVLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByaXZhdGVLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcml2YXRlX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpdmF0ZUtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpdmF0ZUtleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVLZXk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNzZWNyZXRfbmFtZSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc2VjcmV0X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHNlY3JldF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2VjcmV0TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VjcmV0TmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlLnNlY3JldE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VjcmV0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjcmV0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VjcmV0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNyZXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNyZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0TmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSB7XG4gIC8qKlxuICAqIGFjbSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjYWNtIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNhY219XG4gICovXG4gIHJlYWRvbmx5IGFjbT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtO1xuICAvKipcbiAgKiBmaWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNmaWxlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNmaWxlfVxuICAqL1xuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlO1xuICAvKipcbiAgKiBzZHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3NkcyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc2RzfVxuICAqL1xuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY206IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtVG9UZXJyYWZvcm0oc3RydWN0IS5hY20pLFxuICAgIGZpbGU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjbToge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY20pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbUxpc3RcIixcbiAgICB9LFxuICAgIGZpbGU6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZpbGUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVMaXN0XCIsXG4gICAgfSxcbiAgICBzZHM6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNtPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjbSA9IHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2RzID0gdGhpcy5fc2RzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjbTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpbGU7XG4gICAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNkcztcbiAgICB9XG4gIH1cblxuICAvLyBhY20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNtID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNtXCIpO1xuICBwdWJsaWMgZ2V0IGFjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNtO1xuICB9XG4gIHB1YmxpYyBwdXRBY20odmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY20oKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJmaWxlXCIpO1xuICBwdWJsaWMgZ2V0IGZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgcHVibGljIHB1dEZpbGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZSkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbGUoKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZHMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzZHNcIik7XG4gIHB1YmxpYyBnZXQgc2RzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZHM7XG4gIH1cbiAgcHVibGljIHB1dFNkcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNkcygpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjZXhhY3QgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2V4YWN0fVxuICAqL1xuICByZWFkb25seSBleGFjdDogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXhhY3Q6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmV4YWN0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGV4YWN0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuZXhhY3QpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhhY3QgPSB0aGlzLl9leGFjdDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhhY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdmFsdWUuZXhhY3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhhY3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhhY3Q/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZXhhY3QoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4YWN0JykpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhhY3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXhhY3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhhY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhhY3Q7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHtcbiAgLyoqXG4gICogbWF0Y2ggYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I21hdGNoIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNtYXRjaH1cbiAgKi9cbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKHN0cnVjdCEubWF0Y2gpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF0Y2g6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF0Y2gpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoID0gdGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2g7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJtYXRjaFwiKTtcbiAgcHVibGljIGdldCBtYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2g7XG4gIH1cbiAgcHVibGljIHB1dE1hdGNoKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCkge1xuICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF0Y2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjY2VydGlmaWNhdGVfY2hhaW4gQXBwbWVzaFZpcnR1YWxHYXRld2F5I2NlcnRpZmljYXRlX2NoYWlufVxuICAqL1xuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZS5jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2NoYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ2hhaW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9jaGFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVDaGFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjc2VjcmV0X25hbWUgQXBwbWVzaFZpcnR1YWxHYXRld2F5I3NlY3JldF9uYW1lfVxuICAqL1xuICByZWFkb25seSBzZWNyZXROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2VjcmV0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0TmFtZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBzZWNyZXRfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0TmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2VjcmV0TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0IHtcbiAgLyoqXG4gICogZmlsZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjZmlsZSBBcHBtZXNoVmlydHVhbEdhdGV3YXkjZmlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGU7XG4gIC8qKlxuICAqIHNkcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjc2RzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNzZHN9XG4gICovXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGZpbGU6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZUxpc3RcIixcbiAgICB9LFxuICAgIHNkczoge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maWxlID0gdGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZHMgPSB0aGlzLl9zZHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmlsZTtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZmlsZVwiKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZSgpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NkcyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzZHNcIik7XG4gIHB1YmxpYyBnZXQgc2RzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZHM7XG4gIH1cbiAgcHVibGljIHB1dFNkcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzKSB7XG4gICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZHMoKSB7XG4gICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uIHtcbiAgLyoqXG4gICogc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lc31cbiAgKi9cbiAgcmVhZG9ubHkgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gIC8qKlxuICAqIHRydXN0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSN0cnVzdCBBcHBtZXNoVmlydHVhbEdhdGV3YXkjdHJ1c3R9XG4gICovXG4gIHJlYWRvbmx5IHRydXN0OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFRvVGVycmFmb3JtKHN0cnVjdCEudHJ1c3QpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczoge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3ViamVjdEFsdGVybmF0aXZlTmFtZXMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNMaXN0XCIsXG4gICAgfSxcbiAgICB0cnVzdDoge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFRvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJ1c3QpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzID0gdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cnVzdD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cnVzdCA9IHRoaXMuX3RydXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJ1c3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzXCIpO1xuICBwdWJsaWMgZ2V0IHN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcztcbiAgfVxuICBwdWJsaWMgcHV0U3ViamVjdEFsdGVybmF0aXZlTmFtZXModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcykge1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdHJ1c3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJ1c3QgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidHJ1c3RcIik7XG4gIHB1YmxpYyBnZXQgdHJ1c3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RydXN0O1xuICB9XG4gIHB1YmxpYyBwdXRUcnVzdCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0KSB7XG4gICAgdGhpcy5fdHJ1c3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I21vZGUgQXBwbWVzaFZpcnR1YWxHYXRld2F5I21vZGV9XG4gICovXG4gIHJlYWRvbmx5IG1vZGU6IHN0cmluZztcbiAgLyoqXG4gICogY2VydGlmaWNhdGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2NlcnRpZmljYXRlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNjZXJ0aWZpY2F0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlO1xuICAvKipcbiAgKiB2YWxpZGF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSN2YWxpZGF0aW9uIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSN2YWxpZGF0aW9ufVxuICAqL1xuICByZWFkb25seSB2YWxpZGF0aW9uPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICAgIGNlcnRpZmljYXRlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnZhbGlkYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2VydGlmaWNhdGU6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUxpc3RcIixcbiAgICB9LFxuICAgIHZhbGlkYXRpb246IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52YWxpZGF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jZXJ0aWZpY2F0ZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jZXJ0aWZpY2F0ZSA9IHRoaXMuX2NlcnRpZmljYXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tb2RlID0gdmFsdWUubW9kZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jZXJ0aWZpY2F0ZTtcbiAgICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnZhbGlkYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNlcnRpZmljYXRlXCIpO1xuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZTtcbiAgfVxuICBwdWJsaWMgcHV0Q2VydGlmaWNhdGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdmFsaWRhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92YWxpZGF0aW9uID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ2YWxpZGF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IHZhbGlkYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFZhbGlkYXRpb24odmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb24pIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyIHtcbiAgLyoqXG4gICogY29ubmVjdGlvbl9wb29sIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNjb25uZWN0aW9uX3Bvb2wgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2Nvbm5lY3Rpb25fcG9vbH1cbiAgKi9cbiAgcmVhZG9ubHkgY29ubmVjdGlvblBvb2w/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbDtcbiAgLyoqXG4gICogaGVhbHRoX2NoZWNrIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNoZWFsdGhfY2hlY2sgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2hlYWx0aF9jaGVja31cbiAgKi9cbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjaztcbiAgLyoqXG4gICogcG9ydF9tYXBwaW5nIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNwb3J0X21hcHBpbmcgQXBwbWVzaFZpcnR1YWxHYXRld2F5I3BvcnRfbWFwcGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydE1hcHBpbmc6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nO1xuICAvKipcbiAgKiB0bHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I3RscyBBcHBtZXNoVmlydHVhbEdhdGV3YXkjdGxzfVxuICAqL1xuICByZWFkb25seSB0bHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29ubmVjdGlvbl9wb29sOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvblBvb2wpLFxuICAgIGhlYWx0aF9jaGVjazogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aENoZWNrKSxcbiAgICBwb3J0X21hcHBpbmc6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0TWFwcGluZyksXG4gICAgdGxzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnRscyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb25uZWN0aW9uX3Bvb2w6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvblBvb2wpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbExpc3RcIixcbiAgICB9LFxuICAgIGhlYWx0aF9jaGVjazoge1xuICAgICAgdmFsdWU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5oZWFsdGhDaGVjayksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrTGlzdFwiLFxuICAgIH0sXG4gICAgcG9ydF9tYXBwaW5nOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBvcnRNYXBwaW5nKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmdMaXN0XCIsXG4gICAgfSxcbiAgICB0bHM6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRscyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25Qb29sPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbm5lY3Rpb25Qb29sID0gdGhpcy5fY29ubmVjdGlvblBvb2w/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oZWFsdGhDaGVjaz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFsdGhDaGVjayA9IHRoaXMuX2hlYWx0aENoZWNrPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydE1hcHBpbmc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydE1hcHBpbmcgPSB0aGlzLl9wb3J0TWFwcGluZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rscz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50bHMgPSB0aGlzLl90bHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25uZWN0aW9uUG9vbC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvbm5lY3Rpb25Qb29sO1xuICAgICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmhlYWx0aENoZWNrO1xuICAgICAgdGhpcy5fcG9ydE1hcHBpbmcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBvcnRNYXBwaW5nO1xuICAgICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB2YWx1ZS50bHM7XG4gICAgfVxuICB9XG5cbiAgLy8gY29ubmVjdGlvbl9wb29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25Qb29sID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY29ubmVjdGlvbl9wb29sXCIpO1xuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Qb29sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uUG9vbDtcbiAgfVxuICBwdWJsaWMgcHV0Q29ubmVjdGlvblBvb2wodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25Qb29sKCkge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25Qb29sLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Qb29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25Qb29sLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2sgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJoZWFsdGhfY2hlY2tcIik7XG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrO1xuICB9XG4gIHB1YmxpYyBwdXRIZWFsdGhDaGVjayh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2spIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVjay5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhbHRoQ2hlY2soKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBvcnRfbWFwcGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0TWFwcGluZyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInBvcnRfbWFwcGluZ1wiKTtcbiAgcHVibGljIGdldCBwb3J0TWFwcGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydE1hcHBpbmc7XG4gIH1cbiAgcHVibGljIHB1dFBvcnRNYXBwaW5nKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZykge1xuICAgIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydE1hcHBpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydE1hcHBpbmcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90bHMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGxzXCIpO1xuICBwdWJsaWMgZ2V0IHRscygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzO1xuICB9XG4gIHB1YmxpYyBwdXRUbHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscykge1xuICAgIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGxzKCkge1xuICAgIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0bHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkjcGF0aCBBcHBtZXNoVmlydHVhbEdhdGV3YXkjcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwYXRoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wYXRoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhdGggPSB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcGF0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcGF0aCA9IHZhbHVlLnBhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8gcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2cge1xuICAvKipcbiAgKiBmaWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNmaWxlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNmaWxlfVxuICAqL1xuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBmaWxlOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2cgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmlsZTtcbiAgICB9XG4gIH1cblxuICAvLyBmaWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbGUgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZmlsZVwiKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcge1xuICAvKipcbiAgKiBhY2Nlc3NfbG9nIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNhY2Nlc3NfbG9nIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSNhY2Nlc3NfbG9nfVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NMb2c/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfbG9nOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTG9nKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzc19sb2c6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTG9nKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZXNzTG9nPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc0xvZyA9IHRoaXMuX2FjY2Vzc0xvZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzTG9nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNjZXNzTG9nO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY2Vzc19sb2cgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXNzTG9nID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXNzX2xvZ1wiKTtcbiAgcHVibGljIGdldCBhY2Nlc3NMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0xvZztcbiAgfVxuICBwdWJsaWMgcHV0QWNjZXNzTG9nKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZykge1xuICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzTG9nKCkge1xuICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NMb2dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzTG9nLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYyB7XG4gIC8qKlxuICAqIGJhY2tlbmRfZGVmYXVsdHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2JhY2tlbmRfZGVmYXVsdHMgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2JhY2tlbmRfZGVmYXVsdHN9XG4gICovXG4gIHJlYWRvbmx5IGJhY2tlbmREZWZhdWx0cz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHM7XG4gIC8qKlxuICAqIGxpc3RlbmVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNsaXN0ZW5lciBBcHBtZXNoVmlydHVhbEdhdGV3YXkjbGlzdGVuZXJ9XG4gICovXG4gIHJlYWRvbmx5IGxpc3RlbmVyOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXI7XG4gIC8qKlxuICAqIGxvZ2dpbmcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5I2xvZ2dpbmcgQXBwbWVzaFZpcnR1YWxHYXRld2F5I2xvZ2dpbmd9XG4gICovXG4gIHJlYWRvbmx5IGxvZ2dpbmc/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBiYWNrZW5kX2RlZmF1bHRzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzVG9UZXJyYWZvcm0oc3RydWN0IS5iYWNrZW5kRGVmYXVsdHMpLFxuICAgIGxpc3RlbmVyOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpc3RlbmVyKSxcbiAgICBsb2dnaW5nOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nZ2luZyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBiYWNrZW5kX2RlZmF1bHRzOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYmFja2VuZERlZmF1bHRzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0xpc3RcIixcbiAgICB9LFxuICAgIGxpc3RlbmVyOiB7XG4gICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5saXN0ZW5lciksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckxpc3RcIixcbiAgICB9LFxuICAgIGxvZ2dpbmc6IHtcbiAgICAgIHZhbHVlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubG9nZ2luZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9iYWNrZW5kRGVmYXVsdHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmFja2VuZERlZmF1bHRzID0gdGhpcy5fYmFja2VuZERlZmF1bHRzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGlzdGVuZXI/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ2dpbmc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nZ2luZyA9IHRoaXMuX2xvZ2dpbmc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2VuZERlZmF1bHRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saXN0ZW5lci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9iYWNrZW5kRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmJhY2tlbmREZWZhdWx0cztcbiAgICAgIHRoaXMuX2xpc3RlbmVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5saXN0ZW5lcjtcbiAgICAgIHRoaXMuX2xvZ2dpbmcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmxvZ2dpbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gYmFja2VuZF9kZWZhdWx0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYWNrZW5kRGVmYXVsdHMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImJhY2tlbmRfZGVmYXVsdHNcIik7XG4gIHB1YmxpYyBnZXQgYmFja2VuZERlZmF1bHRzKCkge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZW5kRGVmYXVsdHM7XG4gIH1cbiAgcHVibGljIHB1dEJhY2tlbmREZWZhdWx0cyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0cykge1xuICAgIHRoaXMuX2JhY2tlbmREZWZhdWx0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmFja2VuZERlZmF1bHRzKCkge1xuICAgIHRoaXMuX2JhY2tlbmREZWZhdWx0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrZW5kRGVmYXVsdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2VuZERlZmF1bHRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsaXN0ZW5lciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9saXN0ZW5lciA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsaXN0ZW5lclwiKTtcbiAgcHVibGljIGdldCBsaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXI7XG4gIH1cbiAgcHVibGljIHB1dExpc3RlbmVyKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIpIHtcbiAgICB0aGlzLl9saXN0ZW5lci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpc3RlbmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsb2dnaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ2dpbmcgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsb2dnaW5nXCIpO1xuICBwdWJsaWMgZ2V0IGxvZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmc7XG4gIH1cbiAgcHVibGljIHB1dExvZ2dpbmcodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nKSB7XG4gICAgdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZygpIHtcbiAgICB0aGlzLl9sb2dnaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSBhd3NfYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXl9XG4qL1xuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXlcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQXBwbWVzaFZpcnR1YWxHYXRld2F5IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQXBwbWVzaFZpcnR1YWxHYXRld2F5IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheSNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQXBwbWVzaFZpcnR1YWxHYXRld2F5IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheVwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcG1lc2hfdmlydHVhbF9nYXRld2F5IGF3c19hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQXBwbWVzaFZpcnR1YWxHYXRld2F5Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcG1lc2hfdmlydHVhbF9nYXRld2F5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbWVzaE5hbWUgPSBjb25maWcubWVzaE5hbWU7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gY29uZmlnLm1lc2hPd25lcjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9zcGVjLmludGVybmFsVmFsdWUgPSBjb25maWcuc3BlYztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjcmVhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gbWVzaF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc2hOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNoTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc2hfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc2hOYW1lO1xuICB9XG5cbiAgLy8gbWVzaF9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc2hPd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzaE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzaF9vd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE93bmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNoT3duZXIoKSB7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNoT3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzaE93bmVyO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9vd25lcicpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBzcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NwZWMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNwZWNcIik7XG4gIHB1YmxpYyBnZXQgc3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYztcbiAgfVxuICBwdWJsaWMgcHV0U3BlYyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYykge1xuICAgIHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG1lc2hfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWVzaE5hbWUpLFxuICAgICAgbWVzaF9vd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWVzaE93bmVyKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBzcGVjOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjVG9UZXJyYWZvcm0odGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1lc2hfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbWVzaE5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtZXNoX293bmVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9tZXNoT3duZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgc3BlYzoge1xuICAgICAgICB2YWx1ZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY1RvSGNsVGVycmFmb3JtKHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=