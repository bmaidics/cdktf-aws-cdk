"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ObjectCopy = exports.S3ObjectCopyGrantList = exports.S3ObjectCopyGrantOutputReference = exports.s3ObjectCopyGrantToHclTerraform = exports.s3ObjectCopyGrantToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3ObjectCopyGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        id: cdktf.stringToTerraform(struct.id),
        permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.permissions),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
exports.s3ObjectCopyGrantToTerraform = s3ObjectCopyGrantToTerraform;
function s3ObjectCopyGrantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.permissions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktf.stringToHclTerraform(struct.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3ObjectCopyGrantToHclTerraform = s3ObjectCopyGrantToHclTerraform;
class S3ObjectCopyGrantOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._id = undefined;
            this._permissions = undefined;
            this._type = undefined;
            this._uri = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._id = value.id;
            this._permissions = value.permissions;
            this._type = value.type;
            this._uri = value.uri;
        }
    }
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
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
    get permissions() {
        return cdktf.Fn.tolist(this.getListAttribute('permissions'));
    }
    set permissions(value) {
        this._permissions = value;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
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
    get uri() {
        return this.getStringAttribute('uri');
    }
    set uri(value) {
        this._uri = value;
    }
    resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriInput() {
        return this._uri;
    }
}
exports.S3ObjectCopyGrantOutputReference = S3ObjectCopyGrantOutputReference;
_a = JSII_RTTI_SYMBOL_1;
S3ObjectCopyGrantOutputReference[_a] = { fqn: "@cdktf/aws-cdk.s3ObjectCopy.S3ObjectCopyGrantOutputReference", version: "0.0.0" };
class S3ObjectCopyGrantList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new S3ObjectCopyGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.S3ObjectCopyGrantList = S3ObjectCopyGrantList;
_b = JSII_RTTI_SYMBOL_1;
S3ObjectCopyGrantList[_b] = { fqn: "@cdktf/aws-cdk.s3ObjectCopy.S3ObjectCopyGrantList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_object_copy aws_s3_object_copy}
*/
class S3ObjectCopy extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ObjectCopy to import
    * @param importFromId The id of the existing S3ObjectCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ObjectCopy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_object_copy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_object_copy aws_s3_object_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectCopyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_object_copy',
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
        // grant - computed: false, optional: true, required: false
        this._grant = new S3ObjectCopyGrantList(this, "grant", true);
        this._acl = config.acl;
        this._bucket = config.bucket;
        this._bucketKeyEnabled = config.bucketKeyEnabled;
        this._cacheControl = config.cacheControl;
        this._contentDisposition = config.contentDisposition;
        this._contentEncoding = config.contentEncoding;
        this._contentLanguage = config.contentLanguage;
        this._contentType = config.contentType;
        this._copyIfMatch = config.copyIfMatch;
        this._copyIfModifiedSince = config.copyIfModifiedSince;
        this._copyIfNoneMatch = config.copyIfNoneMatch;
        this._copyIfUnmodifiedSince = config.copyIfUnmodifiedSince;
        this._customerAlgorithm = config.customerAlgorithm;
        this._customerKey = config.customerKey;
        this._customerKeyMd5 = config.customerKeyMd5;
        this._expectedBucketOwner = config.expectedBucketOwner;
        this._expectedSourceBucketOwner = config.expectedSourceBucketOwner;
        this._expires = config.expires;
        this._forceDestroy = config.forceDestroy;
        this._id = config.id;
        this._key = config.key;
        this._kmsEncryptionContext = config.kmsEncryptionContext;
        this._kmsKeyId = config.kmsKeyId;
        this._metadata = config.metadata;
        this._metadataDirective = config.metadataDirective;
        this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
        this._objectLockMode = config.objectLockMode;
        this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
        this._requestPayer = config.requestPayer;
        this._serverSideEncryption = config.serverSideEncryption;
        this._source = config.source;
        this._sourceCustomerAlgorithm = config.sourceCustomerAlgorithm;
        this._sourceCustomerKey = config.sourceCustomerKey;
        this._sourceCustomerKeyMd5 = config.sourceCustomerKeyMd5;
        this._storageClass = config.storageClass;
        this._taggingDirective = config.taggingDirective;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._websiteRedirect = config.websiteRedirect;
        this._grant.internalValue = config.grant;
    }
    get acl() {
        return this.getStringAttribute('acl');
    }
    set acl(value) {
        this._acl = value;
    }
    resetAcl() {
        this._acl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aclInput() {
        return this._acl;
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    get bucketKeyEnabled() {
        return this.getBooleanAttribute('bucket_key_enabled');
    }
    set bucketKeyEnabled(value) {
        this._bucketKeyEnabled = value;
    }
    resetBucketKeyEnabled() {
        this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketKeyEnabledInput() {
        return this._bucketKeyEnabled;
    }
    get cacheControl() {
        return this.getStringAttribute('cache_control');
    }
    set cacheControl(value) {
        this._cacheControl = value;
    }
    resetCacheControl() {
        this._cacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheControlInput() {
        return this._cacheControl;
    }
    get contentDisposition() {
        return this.getStringAttribute('content_disposition');
    }
    set contentDisposition(value) {
        this._contentDisposition = value;
    }
    resetContentDisposition() {
        this._contentDisposition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentDispositionInput() {
        return this._contentDisposition;
    }
    get contentEncoding() {
        return this.getStringAttribute('content_encoding');
    }
    set contentEncoding(value) {
        this._contentEncoding = value;
    }
    resetContentEncoding() {
        this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentEncodingInput() {
        return this._contentEncoding;
    }
    get contentLanguage() {
        return this.getStringAttribute('content_language');
    }
    set contentLanguage(value) {
        this._contentLanguage = value;
    }
    resetContentLanguage() {
        this._contentLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentLanguageInput() {
        return this._contentLanguage;
    }
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    get copyIfMatch() {
        return this.getStringAttribute('copy_if_match');
    }
    set copyIfMatch(value) {
        this._copyIfMatch = value;
    }
    resetCopyIfMatch() {
        this._copyIfMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfMatchInput() {
        return this._copyIfMatch;
    }
    get copyIfModifiedSince() {
        return this.getStringAttribute('copy_if_modified_since');
    }
    set copyIfModifiedSince(value) {
        this._copyIfModifiedSince = value;
    }
    resetCopyIfModifiedSince() {
        this._copyIfModifiedSince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfModifiedSinceInput() {
        return this._copyIfModifiedSince;
    }
    get copyIfNoneMatch() {
        return this.getStringAttribute('copy_if_none_match');
    }
    set copyIfNoneMatch(value) {
        this._copyIfNoneMatch = value;
    }
    resetCopyIfNoneMatch() {
        this._copyIfNoneMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfNoneMatchInput() {
        return this._copyIfNoneMatch;
    }
    get copyIfUnmodifiedSince() {
        return this.getStringAttribute('copy_if_unmodified_since');
    }
    set copyIfUnmodifiedSince(value) {
        this._copyIfUnmodifiedSince = value;
    }
    resetCopyIfUnmodifiedSince() {
        this._copyIfUnmodifiedSince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfUnmodifiedSinceInput() {
        return this._copyIfUnmodifiedSince;
    }
    get customerAlgorithm() {
        return this.getStringAttribute('customer_algorithm');
    }
    set customerAlgorithm(value) {
        this._customerAlgorithm = value;
    }
    resetCustomerAlgorithm() {
        this._customerAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerAlgorithmInput() {
        return this._customerAlgorithm;
    }
    get customerKey() {
        return this.getStringAttribute('customer_key');
    }
    set customerKey(value) {
        this._customerKey = value;
    }
    resetCustomerKey() {
        this._customerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerKeyInput() {
        return this._customerKey;
    }
    get customerKeyMd5() {
        return this.getStringAttribute('customer_key_md5');
    }
    set customerKeyMd5(value) {
        this._customerKeyMd5 = value;
    }
    resetCustomerKeyMd5() {
        this._customerKeyMd5 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerKeyMd5Input() {
        return this._customerKeyMd5;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    set expectedBucketOwner(value) {
        this._expectedBucketOwner = value;
    }
    resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }
    get expectedSourceBucketOwner() {
        return this.getStringAttribute('expected_source_bucket_owner');
    }
    set expectedSourceBucketOwner(value) {
        this._expectedSourceBucketOwner = value;
    }
    resetExpectedSourceBucketOwner() {
        this._expectedSourceBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedSourceBucketOwnerInput() {
        return this._expectedSourceBucketOwner;
    }
    // expiration - computed: true, optional: false, required: false
    get expiration() {
        return this.getStringAttribute('expiration');
    }
    get expires() {
        return this.getStringAttribute('expires');
    }
    set expires(value) {
        this._expires = value;
    }
    resetExpires() {
        this._expires = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expiresInput() {
        return this._expires;
    }
    get forceDestroy() {
        return this.getBooleanAttribute('force_destroy');
    }
    set forceDestroy(value) {
        this._forceDestroy = value;
    }
    resetForceDestroy() {
        this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDestroyInput() {
        return this._forceDestroy;
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
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    get kmsEncryptionContext() {
        return this.getStringAttribute('kms_encryption_context');
    }
    set kmsEncryptionContext(value) {
        this._kmsEncryptionContext = value;
    }
    resetKmsEncryptionContext() {
        this._kmsEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsEncryptionContextInput() {
        return this._kmsEncryptionContext;
    }
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    get metadata() {
        return this.getStringMapAttribute('metadata');
    }
    set metadata(value) {
        this._metadata = value;
    }
    resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata;
    }
    get metadataDirective() {
        return this.getStringAttribute('metadata_directive');
    }
    set metadataDirective(value) {
        this._metadataDirective = value;
    }
    resetMetadataDirective() {
        this._metadataDirective = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataDirectiveInput() {
        return this._metadataDirective;
    }
    get objectLockLegalHoldStatus() {
        return this.getStringAttribute('object_lock_legal_hold_status');
    }
    set objectLockLegalHoldStatus(value) {
        this._objectLockLegalHoldStatus = value;
    }
    resetObjectLockLegalHoldStatus() {
        this._objectLockLegalHoldStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockLegalHoldStatusInput() {
        return this._objectLockLegalHoldStatus;
    }
    get objectLockMode() {
        return this.getStringAttribute('object_lock_mode');
    }
    set objectLockMode(value) {
        this._objectLockMode = value;
    }
    resetObjectLockMode() {
        this._objectLockMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockModeInput() {
        return this._objectLockMode;
    }
    get objectLockRetainUntilDate() {
        return this.getStringAttribute('object_lock_retain_until_date');
    }
    set objectLockRetainUntilDate(value) {
        this._objectLockRetainUntilDate = value;
    }
    resetObjectLockRetainUntilDate() {
        this._objectLockRetainUntilDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockRetainUntilDateInput() {
        return this._objectLockRetainUntilDate;
    }
    // request_charged - computed: true, optional: false, required: false
    get requestCharged() {
        return this.getBooleanAttribute('request_charged');
    }
    get requestPayer() {
        return this.getStringAttribute('request_payer');
    }
    set requestPayer(value) {
        this._requestPayer = value;
    }
    resetRequestPayer() {
        this._requestPayer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestPayerInput() {
        return this._requestPayer;
    }
    get serverSideEncryption() {
        return this.getStringAttribute('server_side_encryption');
    }
    set serverSideEncryption(value) {
        this._serverSideEncryption = value;
    }
    resetServerSideEncryption() {
        this._serverSideEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverSideEncryptionInput() {
        return this._serverSideEncryption;
    }
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    get sourceCustomerAlgorithm() {
        return this.getStringAttribute('source_customer_algorithm');
    }
    set sourceCustomerAlgorithm(value) {
        this._sourceCustomerAlgorithm = value;
    }
    resetSourceCustomerAlgorithm() {
        this._sourceCustomerAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCustomerAlgorithmInput() {
        return this._sourceCustomerAlgorithm;
    }
    get sourceCustomerKey() {
        return this.getStringAttribute('source_customer_key');
    }
    set sourceCustomerKey(value) {
        this._sourceCustomerKey = value;
    }
    resetSourceCustomerKey() {
        this._sourceCustomerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCustomerKeyInput() {
        return this._sourceCustomerKey;
    }
    get sourceCustomerKeyMd5() {
        return this.getStringAttribute('source_customer_key_md5');
    }
    set sourceCustomerKeyMd5(value) {
        this._sourceCustomerKeyMd5 = value;
    }
    resetSourceCustomerKeyMd5() {
        this._sourceCustomerKeyMd5 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCustomerKeyMd5Input() {
        return this._sourceCustomerKeyMd5;
    }
    // source_version_id - computed: true, optional: false, required: false
    get sourceVersionId() {
        return this.getStringAttribute('source_version_id');
    }
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
    get taggingDirective() {
        return this.getStringAttribute('tagging_directive');
    }
    set taggingDirective(value) {
        this._taggingDirective = value;
    }
    resetTaggingDirective() {
        this._taggingDirective = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taggingDirectiveInput() {
        return this._taggingDirective;
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
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    get websiteRedirect() {
        return this.getStringAttribute('website_redirect');
    }
    set websiteRedirect(value) {
        this._websiteRedirect = value;
    }
    resetWebsiteRedirect() {
        this._websiteRedirect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get websiteRedirectInput() {
        return this._websiteRedirect;
    }
    get grant() {
        return this._grant;
    }
    putGrant(value) {
        this._grant.internalValue = value;
    }
    resetGrant() {
        this._grant.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grantInput() {
        return this._grant.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
            cache_control: cdktf.stringToTerraform(this._cacheControl),
            content_disposition: cdktf.stringToTerraform(this._contentDisposition),
            content_encoding: cdktf.stringToTerraform(this._contentEncoding),
            content_language: cdktf.stringToTerraform(this._contentLanguage),
            content_type: cdktf.stringToTerraform(this._contentType),
            copy_if_match: cdktf.stringToTerraform(this._copyIfMatch),
            copy_if_modified_since: cdktf.stringToTerraform(this._copyIfModifiedSince),
            copy_if_none_match: cdktf.stringToTerraform(this._copyIfNoneMatch),
            copy_if_unmodified_since: cdktf.stringToTerraform(this._copyIfUnmodifiedSince),
            customer_algorithm: cdktf.stringToTerraform(this._customerAlgorithm),
            customer_key: cdktf.stringToTerraform(this._customerKey),
            customer_key_md5: cdktf.stringToTerraform(this._customerKeyMd5),
            expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
            expected_source_bucket_owner: cdktf.stringToTerraform(this._expectedSourceBucketOwner),
            expires: cdktf.stringToTerraform(this._expires),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            id: cdktf.stringToTerraform(this._id),
            key: cdktf.stringToTerraform(this._key),
            kms_encryption_context: cdktf.stringToTerraform(this._kmsEncryptionContext),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
            metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
            object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
            object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
            object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
            request_payer: cdktf.stringToTerraform(this._requestPayer),
            server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
            source: cdktf.stringToTerraform(this._source),
            source_customer_algorithm: cdktf.stringToTerraform(this._sourceCustomerAlgorithm),
            source_customer_key: cdktf.stringToTerraform(this._sourceCustomerKey),
            source_customer_key_md5: cdktf.stringToTerraform(this._sourceCustomerKeyMd5),
            storage_class: cdktf.stringToTerraform(this._storageClass),
            tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
            grant: cdktf.listMapper(s3ObjectCopyGrantToTerraform, true)(this._grant.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            acl: {
                value: cdktf.stringToHclTerraform(this._acl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket: {
                value: cdktf.stringToHclTerraform(this._bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_key_enabled: {
                value: cdktf.booleanToHclTerraform(this._bucketKeyEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_control: {
                value: cdktf.stringToHclTerraform(this._cacheControl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_disposition: {
                value: cdktf.stringToHclTerraform(this._contentDisposition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_encoding: {
                value: cdktf.stringToHclTerraform(this._contentEncoding),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_language: {
                value: cdktf.stringToHclTerraform(this._contentLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_type: {
                value: cdktf.stringToHclTerraform(this._contentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            copy_if_match: {
                value: cdktf.stringToHclTerraform(this._copyIfMatch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            copy_if_modified_since: {
                value: cdktf.stringToHclTerraform(this._copyIfModifiedSince),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            copy_if_none_match: {
                value: cdktf.stringToHclTerraform(this._copyIfNoneMatch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            copy_if_unmodified_since: {
                value: cdktf.stringToHclTerraform(this._copyIfUnmodifiedSince),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_algorithm: {
                value: cdktf.stringToHclTerraform(this._customerAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_key: {
                value: cdktf.stringToHclTerraform(this._customerKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_key_md5: {
                value: cdktf.stringToHclTerraform(this._customerKeyMd5),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expected_bucket_owner: {
                value: cdktf.stringToHclTerraform(this._expectedBucketOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expected_source_bucket_owner: {
                value: cdktf.stringToHclTerraform(this._expectedSourceBucketOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expires: {
                value: cdktf.stringToHclTerraform(this._expires),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            force_destroy: {
                value: cdktf.booleanToHclTerraform(this._forceDestroy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key: {
                value: cdktf.stringToHclTerraform(this._key),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_encryption_context: {
                value: cdktf.stringToHclTerraform(this._kmsEncryptionContext),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktf.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            metadata_directive: {
                value: cdktf.stringToHclTerraform(this._metadataDirective),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            object_lock_legal_hold_status: {
                value: cdktf.stringToHclTerraform(this._objectLockLegalHoldStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            object_lock_mode: {
                value: cdktf.stringToHclTerraform(this._objectLockMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            object_lock_retain_until_date: {
                value: cdktf.stringToHclTerraform(this._objectLockRetainUntilDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_payer: {
                value: cdktf.stringToHclTerraform(this._requestPayer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_side_encryption: {
                value: cdktf.stringToHclTerraform(this._serverSideEncryption),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktf.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_customer_algorithm: {
                value: cdktf.stringToHclTerraform(this._sourceCustomerAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_customer_key: {
                value: cdktf.stringToHclTerraform(this._sourceCustomerKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_customer_key_md5: {
                value: cdktf.stringToHclTerraform(this._sourceCustomerKeyMd5),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_class: {
                value: cdktf.stringToHclTerraform(this._storageClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tagging_directive: {
                value: cdktf.stringToHclTerraform(this._taggingDirective),
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
            website_redirect: {
                value: cdktf.stringToHclTerraform(this._websiteRedirect),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            grant: {
                value: cdktf.listMapperHcl(s3ObjectCopyGrantToHclTerraform, true)(this._grant.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "S3ObjectCopyGrantList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.S3ObjectCopy = S3ObjectCopy;
_c = JSII_RTTI_SYMBOL_1;
S3ObjectCopy[_c] = { fqn: "@cdktf/aws-cdk.s3ObjectCopy.S3ObjectCopy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
S3ObjectCopy.tfResourceType = "aws_s3_object_copy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3MzLW9iamVjdC1jb3B5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBcU0vQixTQUFnQiw0QkFBNEIsQ0FBQyxNQUE4QztJQUN6RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNsRixJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBWkQsb0VBWUM7QUFHRCxTQUFnQiwrQkFBK0IsQ0FBQyxNQUE4QztJQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFB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QUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBMWhDSCxvQ0EyaENDOzs7QUF6aENDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csMkJBQWMsR0FBRyxvQkFBb0IsQUFBdkIsQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFMzT2JqZWN0Q29weUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNhY2wgUzNPYmplY3RDb3B5I2FjbH1cbiAgKi9cbiAgcmVhZG9ubHkgYWNsPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNidWNrZXQgUzNPYmplY3RDb3B5I2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2J1Y2tldF9rZXlfZW5hYmxlZCBTM09iamVjdENvcHkjYnVja2V0X2tleV9lbmFibGVkfVxuICAqL1xuICByZWFkb25seSBidWNrZXRLZXlFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNjYWNoZV9jb250cm9sIFMzT2JqZWN0Q29weSNjYWNoZV9jb250cm9sfVxuICAqL1xuICByZWFkb25seSBjYWNoZUNvbnRyb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2NvbnRlbnRfZGlzcG9zaXRpb24gUzNPYmplY3RDb3B5I2NvbnRlbnRfZGlzcG9zaXRpb259XG4gICovXG4gIHJlYWRvbmx5IGNvbnRlbnREaXNwb3NpdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjY29udGVudF9lbmNvZGluZyBTM09iamVjdENvcHkjY29udGVudF9lbmNvZGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudEVuY29kaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNjb250ZW50X2xhbmd1YWdlIFMzT2JqZWN0Q29weSNjb250ZW50X2xhbmd1YWdlfVxuICAqL1xuICByZWFkb25seSBjb250ZW50TGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2NvbnRlbnRfdHlwZSBTM09iamVjdENvcHkjY29udGVudF90eXBlfVxuICAqL1xuICByZWFkb25seSBjb250ZW50VHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjY29weV9pZl9tYXRjaCBTM09iamVjdENvcHkjY29weV9pZl9tYXRjaH1cbiAgKi9cbiAgcmVhZG9ubHkgY29weUlmTWF0Y2g/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2NvcHlfaWZfbW9kaWZpZWRfc2luY2UgUzNPYmplY3RDb3B5I2NvcHlfaWZfbW9kaWZpZWRfc2luY2V9XG4gICovXG4gIHJlYWRvbmx5IGNvcHlJZk1vZGlmaWVkU2luY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2NvcHlfaWZfbm9uZV9tYXRjaCBTM09iamVjdENvcHkjY29weV9pZl9ub25lX21hdGNofVxuICAqL1xuICByZWFkb25seSBjb3B5SWZOb25lTWF0Y2g/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2NvcHlfaWZfdW5tb2RpZmllZF9zaW5jZSBTM09iamVjdENvcHkjY29weV9pZl91bm1vZGlmaWVkX3NpbmNlfVxuICAqL1xuICByZWFkb25seSBjb3B5SWZVbm1vZGlmaWVkU2luY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2N1c3RvbWVyX2FsZ29yaXRobSBTM09iamVjdENvcHkjY3VzdG9tZXJfYWxnb3JpdGhtfVxuICAqL1xuICByZWFkb25seSBjdXN0b21lckFsZ29yaXRobT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjY3VzdG9tZXJfa2V5IFMzT2JqZWN0Q29weSNjdXN0b21lcl9rZXl9XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbWVyS2V5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNjdXN0b21lcl9rZXlfbWQ1IFMzT2JqZWN0Q29weSNjdXN0b21lcl9rZXlfbWQ1fVxuICAqL1xuICByZWFkb25seSBjdXN0b21lcktleU1kNT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjZXhwZWN0ZWRfYnVja2V0X293bmVyIFMzT2JqZWN0Q29weSNleHBlY3RlZF9idWNrZXRfb3duZXJ9XG4gICovXG4gIHJlYWRvbmx5IGV4cGVjdGVkQnVja2V0T3duZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2V4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXIgUzNPYmplY3RDb3B5I2V4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXJ9XG4gICovXG4gIHJlYWRvbmx5IGV4cGVjdGVkU291cmNlQnVja2V0T3duZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2V4cGlyZXMgUzNPYmplY3RDb3B5I2V4cGlyZXN9XG4gICovXG4gIHJlYWRvbmx5IGV4cGlyZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2ZvcmNlX2Rlc3Ryb3kgUzNPYmplY3RDb3B5I2ZvcmNlX2Rlc3Ryb3l9XG4gICovXG4gIHJlYWRvbmx5IGZvcmNlRGVzdHJveT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjaWQgUzNPYmplY3RDb3B5I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNrZXkgUzNPYmplY3RDb3B5I2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2ttc19lbmNyeXB0aW9uX2NvbnRleHQgUzNPYmplY3RDb3B5I2ttc19lbmNyeXB0aW9uX2NvbnRleHR9XG4gICovXG4gIHJlYWRvbmx5IGttc0VuY3J5cHRpb25Db250ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNrbXNfa2V5X2lkIFMzT2JqZWN0Q29weSNrbXNfa2V5X2lkfVxuICAqL1xuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjbWV0YWRhdGEgUzNPYmplY3RDb3B5I21ldGFkYXRhfVxuICAqL1xuICByZWFkb25seSBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I21ldGFkYXRhX2RpcmVjdGl2ZSBTM09iamVjdENvcHkjbWV0YWRhdGFfZGlyZWN0aXZlfVxuICAqL1xuICByZWFkb25seSBtZXRhZGF0YURpcmVjdGl2ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjb2JqZWN0X2xvY2tfbGVnYWxfaG9sZF9zdGF0dXMgUzNPYmplY3RDb3B5I29iamVjdF9sb2NrX2xlZ2FsX2hvbGRfc3RhdHVzfVxuICAqL1xuICByZWFkb25seSBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNvYmplY3RfbG9ja19tb2RlIFMzT2JqZWN0Q29weSNvYmplY3RfbG9ja19tb2RlfVxuICAqL1xuICByZWFkb25seSBvYmplY3RMb2NrTW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjb2JqZWN0X2xvY2tfcmV0YWluX3VudGlsX2RhdGUgUzNPYmplY3RDb3B5I29iamVjdF9sb2NrX3JldGFpbl91bnRpbF9kYXRlfVxuICAqL1xuICByZWFkb25seSBvYmplY3RMb2NrUmV0YWluVW50aWxEYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNyZXF1ZXN0X3BheWVyIFMzT2JqZWN0Q29weSNyZXF1ZXN0X3BheWVyfVxuICAqL1xuICByZWFkb25seSByZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I3NlcnZlcl9zaWRlX2VuY3J5cHRpb24gUzNPYmplY3RDb3B5I3NlcnZlcl9zaWRlX2VuY3J5cHRpb259XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlclNpZGVFbmNyeXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNzb3VyY2UgUzNPYmplY3RDb3B5I3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I3NvdXJjZV9jdXN0b21lcl9hbGdvcml0aG0gUzNPYmplY3RDb3B5I3NvdXJjZV9jdXN0b21lcl9hbGdvcml0aG19XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNzb3VyY2VfY3VzdG9tZXJfa2V5IFMzT2JqZWN0Q29weSNzb3VyY2VfY3VzdG9tZXJfa2V5fVxuICAqL1xuICByZWFkb25seSBzb3VyY2VDdXN0b21lcktleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjc291cmNlX2N1c3RvbWVyX2tleV9tZDUgUzNPYmplY3RDb3B5I3NvdXJjZV9jdXN0b21lcl9rZXlfbWQ1fVxuICAqL1xuICByZWFkb25seSBzb3VyY2VDdXN0b21lcktleU1kNT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjc3RvcmFnZV9jbGFzcyBTM09iamVjdENvcHkjc3RvcmFnZV9jbGFzc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSN0YWdnaW5nX2RpcmVjdGl2ZSBTM09iamVjdENvcHkjdGFnZ2luZ19kaXJlY3RpdmV9XG4gICovXG4gIHJlYWRvbmx5IHRhZ2dpbmdEaXJlY3RpdmU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I3RhZ3MgUzNPYmplY3RDb3B5I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSN0YWdzX2FsbCBTM09iamVjdENvcHkjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSN3ZWJzaXRlX3JlZGlyZWN0IFMzT2JqZWN0Q29weSN3ZWJzaXRlX3JlZGlyZWN0fVxuICAqL1xuICByZWFkb25seSB3ZWJzaXRlUmVkaXJlY3Q/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGdyYW50IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNncmFudCBTM09iamVjdENvcHkjZ3JhbnR9XG4gICovXG4gIHJlYWRvbmx5IGdyYW50PzogUzNPYmplY3RDb3B5R3JhbnRbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBTM09iamVjdENvcHlHcmFudCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2VtYWlsIFMzT2JqZWN0Q29weSNlbWFpbH1cbiAgKi9cbiAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I2lkIFMzT2JqZWN0Q29weSNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjcGVybWlzc2lvbnMgUzNPYmplY3RDb3B5I3Blcm1pc3Npb25zfVxuICAqL1xuICByZWFkb25seSBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5I3R5cGUgUzNPYmplY3RDb3B5I3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfb2JqZWN0X2NvcHkjdXJpIFMzT2JqZWN0Q29weSN1cml9XG4gICovXG4gIHJlYWRvbmx5IHVyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzT2JqZWN0Q29weUdyYW50VG9UZXJyYWZvcm0oc3RydWN0PzogUzNPYmplY3RDb3B5R3JhbnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbWFpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbCksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIHBlcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5wZXJtaXNzaW9ucyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB1cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJpKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM09iamVjdENvcHlHcmFudFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzT2JqZWN0Q29weUdyYW50IHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVtYWlsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbWFpbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwZXJtaXNzaW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnBlcm1pc3Npb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdXJpOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51cmkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNPYmplY3RDb3B5R3JhbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNPYmplY3RDb3B5R3JhbnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VtYWlsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVtYWlsID0gdGhpcy5fZW1haWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZCA9IHRoaXMuX2lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGVybWlzc2lvbnMgPSB0aGlzLl9wZXJtaXNzaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cmkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXJpID0gdGhpcy5fdXJpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNPYmplY3RDb3B5R3JhbnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VyaSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbWFpbCA9IHZhbHVlLmVtYWlsO1xuICAgICAgdGhpcy5faWQgPSB2YWx1ZS5pZDtcbiAgICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdmFsdWUucGVybWlzc2lvbnM7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX3VyaSA9IHZhbHVlLnVyaTtcbiAgICB9XG4gIH1cblxuICAvLyBlbWFpbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1haWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWwoKSB7XG4gICAgdGhpcy5fZW1haWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Blcm1pc3Npb25zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwZXJtaXNzaW9ucycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyB1cmkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXJpPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1cmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVyaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXJpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXJpKCkge1xuICAgIHRoaXMuX3VyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VyaTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUzNPYmplY3RDb3B5R3JhbnRMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTM09iamVjdENvcHlHcmFudFtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTM09iamVjdENvcHlHcmFudE91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTM09iamVjdENvcHlHcmFudE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSBhd3NfczNfb2JqZWN0X2NvcHl9XG4qL1xuZXhwb3J0IGNsYXNzIFMzT2JqZWN0Q29weSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfczNfb2JqZWN0X2NvcHlcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgUzNPYmplY3RDb3B5IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIFMzT2JqZWN0Q29weSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgUzNPYmplY3RDb3B5IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19vYmplY3RfY29weSNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgUzNPYmplY3RDb3B5IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19zM19vYmplY3RfY29weVwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX29iamVjdF9jb3B5IGF3c19zM19vYmplY3RfY29weX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgUzNPYmplY3RDb3B5Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFMzT2JqZWN0Q29weUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3MzX29iamVjdF9jb3B5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYWNsID0gY29uZmlnLmFjbDtcbiAgICB0aGlzLl9idWNrZXQgPSBjb25maWcuYnVja2V0O1xuICAgIHRoaXMuX2J1Y2tldEtleUVuYWJsZWQgPSBjb25maWcuYnVja2V0S2V5RW5hYmxlZDtcbiAgICB0aGlzLl9jYWNoZUNvbnRyb2wgPSBjb25maWcuY2FjaGVDb250cm9sO1xuICAgIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiA9IGNvbmZpZy5jb250ZW50RGlzcG9zaXRpb247XG4gICAgdGhpcy5fY29udGVudEVuY29kaW5nID0gY29uZmlnLmNvbnRlbnRFbmNvZGluZztcbiAgICB0aGlzLl9jb250ZW50TGFuZ3VhZ2UgPSBjb25maWcuY29udGVudExhbmd1YWdlO1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gY29uZmlnLmNvbnRlbnRUeXBlO1xuICAgIHRoaXMuX2NvcHlJZk1hdGNoID0gY29uZmlnLmNvcHlJZk1hdGNoO1xuICAgIHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2UgPSBjb25maWcuY29weUlmTW9kaWZpZWRTaW5jZTtcbiAgICB0aGlzLl9jb3B5SWZOb25lTWF0Y2ggPSBjb25maWcuY29weUlmTm9uZU1hdGNoO1xuICAgIHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZSA9IGNvbmZpZy5jb3B5SWZVbm1vZGlmaWVkU2luY2U7XG4gICAgdGhpcy5fY3VzdG9tZXJBbGdvcml0aG0gPSBjb25maWcuY3VzdG9tZXJBbGdvcml0aG07XG4gICAgdGhpcy5fY3VzdG9tZXJLZXkgPSBjb25maWcuY3VzdG9tZXJLZXk7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXlNZDUgPSBjb25maWcuY3VzdG9tZXJLZXlNZDU7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IGNvbmZpZy5leHBlY3RlZEJ1Y2tldE93bmVyO1xuICAgIHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIgPSBjb25maWcuZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcjtcbiAgICB0aGlzLl9leHBpcmVzID0gY29uZmlnLmV4cGlyZXM7XG4gICAgdGhpcy5fZm9yY2VEZXN0cm95ID0gY29uZmlnLmZvcmNlRGVzdHJveTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9rZXkgPSBjb25maWcua2V5O1xuICAgIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0ID0gY29uZmlnLmttc0VuY3J5cHRpb25Db250ZXh0O1xuICAgIHRoaXMuX2ttc0tleUlkID0gY29uZmlnLmttc0tleUlkO1xuICAgIHRoaXMuX21ldGFkYXRhID0gY29uZmlnLm1ldGFkYXRhO1xuICAgIHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlID0gY29uZmlnLm1ldGFkYXRhRGlyZWN0aXZlO1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSBjb25maWcub2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cztcbiAgICB0aGlzLl9vYmplY3RMb2NrTW9kZSA9IGNvbmZpZy5vYmplY3RMb2NrTW9kZTtcbiAgICB0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlID0gY29uZmlnLm9iamVjdExvY2tSZXRhaW5VbnRpbERhdGU7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gY29uZmlnLnJlcXVlc3RQYXllcjtcbiAgICB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbiA9IGNvbmZpZy5zZXJ2ZXJTaWRlRW5jcnlwdGlvbjtcbiAgICB0aGlzLl9zb3VyY2UgPSBjb25maWcuc291cmNlO1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtO1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5ID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyS2V5O1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5TWQ1ID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyS2V5TWQ1O1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IGNvbmZpZy5zdG9yYWdlQ2xhc3M7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IGNvbmZpZy50YWdnaW5nRGlyZWN0aXZlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fd2Vic2l0ZVJlZGlyZWN0ID0gY29uZmlnLndlYnNpdGVSZWRpcmVjdDtcbiAgICB0aGlzLl9ncmFudC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmdyYW50O1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNsKCkge1xuICAgIHRoaXMuX2FjbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbDtcbiAgfVxuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldDtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9rZXlfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldEtleUVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldEtleUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYnVja2V0X2tleV9lbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRLZXlFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9idWNrZXRLZXlFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVja2V0S2V5RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9idWNrZXRLZXlFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRLZXlFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldEtleUVuYWJsZWQ7XG4gIH1cblxuICAvLyBjYWNoZV9jb250cm9sIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FjaGVDb250cm9sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYWNoZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYWNoZV9jb250cm9sJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoZUNvbnRyb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhY2hlQ29udHJvbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhY2hlQ29udHJvbCgpIHtcbiAgICB0aGlzLl9jYWNoZUNvbnRyb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hlQ29udHJvbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZUNvbnRyb2w7XG4gIH1cblxuICAvLyBjb250ZW50X2Rpc3Bvc2l0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudERpc3Bvc2l0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50RGlzcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X2Rpc3Bvc2l0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50RGlzcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnREaXNwb3NpdGlvbigpIHtcbiAgICB0aGlzLl9jb250ZW50RGlzcG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnREaXNwb3NpdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50RGlzcG9zaXRpb247XG4gIH1cblxuICAvLyBjb250ZW50X2VuY29kaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudEVuY29kaW5nPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50RW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X2VuY29kaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50RW5jb2RpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRFbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRFbmNvZGluZygpIHtcbiAgICB0aGlzLl9jb250ZW50RW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRFbmNvZGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50RW5jb2Rpbmc7XG4gIH1cblxuICAvLyBjb250ZW50X2xhbmd1YWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudExhbmd1YWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50TGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X2xhbmd1YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50TGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRMYW5ndWFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRMYW5ndWFnZSgpIHtcbiAgICB0aGlzLl9jb250ZW50TGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRMYW5ndWFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50TGFuZ3VhZ2U7XG4gIH1cblxuICAvLyBjb250ZW50X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRUeXBlKCkge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZTtcbiAgfVxuXG4gIC8vIGNvcHlfaWZfbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29weUlmTWF0Y2g/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvcHlJZk1hdGNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29weV9pZl9tYXRjaCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29weUlmTWF0Y2godmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvcHlJZk1hdGNoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29weUlmTWF0Y2goKSB7XG4gICAgdGhpcy5fY29weUlmTWF0Y2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlJZk1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcHlJZk1hdGNoO1xuICB9XG5cbiAgLy8gY29weV9pZl9tb2RpZmllZF9zaW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3B5SWZNb2RpZmllZFNpbmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb3B5SWZNb2RpZmllZFNpbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29weV9pZl9tb2RpZmllZF9zaW5jZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29weUlmTW9kaWZpZWRTaW5jZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29weUlmTW9kaWZpZWRTaW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcHlJZk1vZGlmaWVkU2luY2UoKSB7XG4gICAgdGhpcy5fY29weUlmTW9kaWZpZWRTaW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29weUlmTW9kaWZpZWRTaW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3B5SWZNb2RpZmllZFNpbmNlO1xuICB9XG5cbiAgLy8gY29weV9pZl9ub25lX21hdGNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlJZk5vbmVNYXRjaD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29weUlmTm9uZU1hdGNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29weV9pZl9ub25lX21hdGNoJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb3B5SWZOb25lTWF0Y2godmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvcHlJZk5vbmVNYXRjaCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcHlJZk5vbmVNYXRjaCgpIHtcbiAgICB0aGlzLl9jb3B5SWZOb25lTWF0Y2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlJZk5vbmVNYXRjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3B5SWZOb25lTWF0Y2g7XG4gIH1cblxuICAvLyBjb3B5X2lmX3VubW9kaWZpZWRfc2luY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29weUlmVW5tb2RpZmllZFNpbmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb3B5SWZVbm1vZGlmaWVkU2luY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X2lmX3VubW9kaWZpZWRfc2luY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlJZlVubW9kaWZpZWRTaW5jZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29weUlmVW5tb2RpZmllZFNpbmNlKCkge1xuICAgIHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29weUlmVW5tb2RpZmllZFNpbmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZTtcbiAgfVxuXG4gIC8vIGN1c3RvbWVyX2FsZ29yaXRobSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21lckFsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2FsZ29yaXRobScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tZXJBbGdvcml0aG0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbWVyQWxnb3JpdGhtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tZXJBbGdvcml0aG0oKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyQWxnb3JpdGhtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyQWxnb3JpdGhtO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbWVyS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21lcktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tZXJLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbWVyS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tZXJLZXkoKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyS2V5O1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfa2V5X21kNSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbWVyS2V5TWQ1Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21lcktleU1kNSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2tleV9tZDUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbWVyS2V5TWQ1KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21lcktleU1kNSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHRoaXMuX2N1c3RvbWVyS2V5TWQ1ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21lcktleU1kNUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21lcktleU1kNTtcbiAgfVxuXG4gIC8vIGV0YWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXRhZycpO1xuICB9XG5cbiAgLy8gZXhwZWN0ZWRfYnVja2V0X293bmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4cGVjdGVkQnVja2V0T3duZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4cGVjdGVkQnVja2V0T3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHBlY3RlZF9idWNrZXRfb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cGVjdGVkQnVja2V0T3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4cGVjdGVkQnVja2V0T3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHBlY3RlZEJ1Y2tldE93bmVyKCkge1xuICAgIHRoaXMuX2V4cGVjdGVkQnVja2V0T3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4cGVjdGVkQnVja2V0T3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lcjtcbiAgfVxuXG4gIC8vIGV4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cGVjdGVkU291cmNlQnVja2V0T3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyKCkge1xuICAgIHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4cGVjdGVkU291cmNlQnVja2V0T3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcjtcbiAgfVxuXG4gIC8vIGV4cGlyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHBpcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwaXJhdGlvbicpO1xuICB9XG5cbiAgLy8gZXhwaXJlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHBpcmVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleHBpcmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwaXJlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhwaXJlcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhwaXJlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4cGlyZXMoKSB7XG4gICAgdGhpcy5fZXhwaXJlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhwaXJlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHBpcmVzO1xuICB9XG5cbiAgLy8gZm9yY2VfZGVzdHJveSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JjZURlc3Ryb3k/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZvcmNlRGVzdHJveSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9kZXN0cm95Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3JjZURlc3Ryb3kodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2ZvcmNlRGVzdHJveSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcmNlRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb3JjZURlc3Ryb3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcmNlRGVzdHJveUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZURlc3Ryb3k7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyBrbXNfZW5jcnlwdGlvbl9jb250ZXh0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zRW5jcnlwdGlvbkNvbnRleHQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0VuY3J5cHRpb25Db250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2VuY3J5cHRpb25fY29udGV4dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zRW5jcnlwdGlvbkNvbnRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zRW5jcnlwdGlvbkNvbnRleHQoKSB7XG4gICAgdGhpcy5fa21zRW5jcnlwdGlvbkNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0VuY3J5cHRpb25Db250ZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0O1xuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIGxhc3RfbW9kaWZpZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9kaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X21vZGlmaWVkJyk7XG4gIH1cblxuICAvLyBtZXRhZGF0YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCdtZXRhZGF0YScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0YWRhdGEodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9tZXRhZGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldGFkYXRhKCkge1xuICAgIHRoaXMuX21ldGFkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRhZGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcbiAgfVxuXG4gIC8vIG1ldGFkYXRhX2RpcmVjdGl2ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRhZGF0YURpcmVjdGl2ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGFEaXJlY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRhZGF0YV9kaXJlY3RpdmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldGFkYXRhRGlyZWN0aXZlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRhZGF0YURpcmVjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldGFkYXRhRGlyZWN0aXZlKCkge1xuICAgIHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRhZGF0YURpcmVjdGl2ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YURpcmVjdGl2ZTtcbiAgfVxuXG4gIC8vIG9iamVjdF9sb2NrX2xlZ2FsX2hvbGRfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdF9sb2NrX2xlZ2FsX2hvbGRfc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cygpIHtcbiAgICB0aGlzLl9vYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXM7XG4gIH1cblxuICAvLyBvYmplY3RfbG9ja19tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2JqZWN0TG9ja01vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X2xvY2tfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0TG9ja01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdExvY2tNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2JqZWN0TG9ja01vZGUoKSB7XG4gICAgdGhpcy5fb2JqZWN0TG9ja01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdExvY2tNb2RlO1xuICB9XG5cbiAgLy8gb2JqZWN0X2xvY2tfcmV0YWluX3VudGlsX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvYmplY3RMb2NrUmV0YWluVW50aWxEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X2xvY2tfcmV0YWluX3VudGlsX2RhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9iamVjdExvY2tSZXRhaW5VbnRpbERhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdExvY2tSZXRhaW5VbnRpbERhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RMb2NrUmV0YWluVW50aWxEYXRlKCkge1xuICAgIHRoaXMuX29iamVjdExvY2tSZXRhaW5VbnRpbERhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tSZXRhaW5VbnRpbERhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZTtcbiAgfVxuXG4gIC8vIHJlcXVlc3RfY2hhcmdlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcXVlc3RDaGFyZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVlc3RfY2hhcmdlZCcpO1xuICB9XG5cbiAgLy8gcmVxdWVzdF9wYXllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcXVlc3RQYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVlc3RfcGF5ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RQYXllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdFBheWVyKCkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBheWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RQYXllcjtcbiAgfVxuXG4gIC8vIHNlcnZlcl9zaWRlX2VuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2ZXJTaWRlRW5jcnlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmVyU2lkZUVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2ZXJTaWRlRW5jcnlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbigpIHtcbiAgICB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmVyU2lkZUVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb247XG4gIH1cblxuICAvLyBzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gIH1cblxuICAvLyBzb3VyY2VfY3VzdG9tZXJfYWxnb3JpdGhtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lckFsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9jdXN0b21lcl9hbGdvcml0aG0nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKCkge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lckFsZ29yaXRobUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9jdXN0b21lcl9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlQ3VzdG9tZXJLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2N1c3RvbWVyX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQ3VzdG9tZXJLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlQ3VzdG9tZXJLZXkoKSB7XG4gICAgdGhpcy5fc291cmNlQ3VzdG9tZXJLZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5O1xuICB9XG5cbiAgLy8gc291cmNlX2N1c3RvbWVyX2tleV9tZDUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlQ3VzdG9tZXJLZXlNZDU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2N1c3RvbWVyX2tleV9tZDUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUN1c3RvbWVyS2V5TWQ1KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lcktleU1kNSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5TWQ1ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lcktleU1kNUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDdXN0b21lcktleU1kNTtcbiAgfVxuXG4gIC8vIHNvdXJjZV92ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlVmVyc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3ZlcnNpb25faWQnKTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfY2xhc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNsYXNzKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgfVxuXG4gIC8vIHRhZ2dpbmdfZGlyZWN0aXZlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ2dpbmdEaXJlY3RpdmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhZ2dpbmdEaXJlY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWdnaW5nX2RpcmVjdGl2ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnZ2luZ0RpcmVjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ2dpbmdEaXJlY3RpdmUoKSB7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnZ2luZ0RpcmVjdGl2ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdnaW5nRGlyZWN0aXZlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbl9pZCcpO1xuICB9XG5cbiAgLy8gd2Vic2l0ZV9yZWRpcmVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dlYnNpdGVSZWRpcmVjdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2Vic2l0ZVJlZGlyZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2Vic2l0ZV9yZWRpcmVjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2Vic2l0ZVJlZGlyZWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93ZWJzaXRlUmVkaXJlY3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWJzaXRlUmVkaXJlY3QoKSB7XG4gICAgdGhpcy5fd2Vic2l0ZVJlZGlyZWN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWJzaXRlUmVkaXJlY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vic2l0ZVJlZGlyZWN0O1xuICB9XG5cbiAgLy8gZ3JhbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JhbnQgPSBuZXcgUzNPYmplY3RDb3B5R3JhbnRMaXN0KHRoaXMsIFwiZ3JhbnRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZ3JhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYW50O1xuICB9XG4gIHB1YmxpYyBwdXRHcmFudCh2YWx1ZTogUzNPYmplY3RDb3B5R3JhbnRbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZ3JhbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdyYW50KCkge1xuICAgIHRoaXMuX2dyYW50LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyYW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYW50LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWNsKSxcbiAgICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0KSxcbiAgICAgIGJ1Y2tldF9rZXlfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2J1Y2tldEtleUVuYWJsZWQpLFxuICAgICAgY2FjaGVfY29udHJvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2FjaGVDb250cm9sKSxcbiAgICAgIGNvbnRlbnRfZGlzcG9zaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiksXG4gICAgICBjb250ZW50X2VuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250ZW50RW5jb2RpbmcpLFxuICAgICAgY29udGVudF9sYW5ndWFnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29udGVudExhbmd1YWdlKSxcbiAgICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29udGVudFR5cGUpLFxuICAgICAgY29weV9pZl9tYXRjaDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29weUlmTWF0Y2gpLFxuICAgICAgY29weV9pZl9tb2RpZmllZF9zaW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29weUlmTW9kaWZpZWRTaW5jZSksXG4gICAgICBjb3B5X2lmX25vbmVfbWF0Y2g6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvcHlJZk5vbmVNYXRjaCksXG4gICAgICBjb3B5X2lmX3VubW9kaWZpZWRfc2luY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZSksXG4gICAgICBjdXN0b21lcl9hbGdvcml0aG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbWVyQWxnb3JpdGhtKSxcbiAgICAgIGN1c3RvbWVyX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJLZXkpLFxuICAgICAgY3VzdG9tZXJfa2V5X21kNTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJLZXlNZDUpLFxuICAgICAgZXhwZWN0ZWRfYnVja2V0X293bmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leHBlY3RlZEJ1Y2tldE93bmVyKSxcbiAgICAgIGV4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIpLFxuICAgICAgZXhwaXJlczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhwaXJlcyksXG4gICAgICBmb3JjZV9kZXN0cm95OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VEZXN0cm95KSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2tleSksXG4gICAgICBrbXNfZW5jcnlwdGlvbl9jb250ZXh0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNFbmNyeXB0aW9uQ29udGV4dCksXG4gICAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlJZCksXG4gICAgICBtZXRhZGF0YTogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbWV0YWRhdGEpLFxuICAgICAgbWV0YWRhdGFfZGlyZWN0aXZlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZXRhZGF0YURpcmVjdGl2ZSksXG4gICAgICBvYmplY3RfbG9ja19sZWdhbF9ob2xkX3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cyksXG4gICAgICBvYmplY3RfbG9ja19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vYmplY3RMb2NrTW9kZSksXG4gICAgICBvYmplY3RfbG9ja19yZXRhaW5fdW50aWxfZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZSksXG4gICAgICByZXF1ZXN0X3BheWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXF1ZXN0UGF5ZXIpLFxuICAgICAgc2VydmVyX3NpZGVfZW5jcnlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24pLFxuICAgICAgc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2UpLFxuICAgICAgc291cmNlX2N1c3RvbWVyX2FsZ29yaXRobTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc291cmNlQ3VzdG9tZXJBbGdvcml0aG0pLFxuICAgICAgc291cmNlX2N1c3RvbWVyX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc291cmNlQ3VzdG9tZXJLZXkpLFxuICAgICAgc291cmNlX2N1c3RvbWVyX2tleV9tZDU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5TWQ1KSxcbiAgICAgIHN0b3JhZ2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0b3JhZ2VDbGFzcyksXG4gICAgICB0YWdnaW5nX2RpcmVjdGl2ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHdlYnNpdGVfcmVkaXJlY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlYnNpdGVSZWRpcmVjdCksXG4gICAgICBncmFudDogY2RrdGYubGlzdE1hcHBlcihzM09iamVjdENvcHlHcmFudFRvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9ncmFudC5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGFjbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYWNsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgYnVja2V0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9idWNrZXQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBidWNrZXRfa2V5X2VuYWJsZWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9idWNrZXRLZXlFbmFibGVkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGNhY2hlX2NvbnRyb2w6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NhY2hlQ29udHJvbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRfZGlzcG9zaXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRfZW5jb2Rpbmc6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRFbmNvZGluZyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRfbGFuZ3VhZ2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRMYW5ndWFnZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRfdHlwZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY29udGVudFR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjb3B5X2lmX21hdGNoOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jb3B5SWZNYXRjaCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvcHlfaWZfbW9kaWZpZWRfc2luY2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjb3B5X2lmX25vbmVfbWF0Y2g6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvcHlJZk5vbmVNYXRjaCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvcHlfaWZfdW5tb2RpZmllZF9zaW5jZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tZXJfYWxnb3JpdGhtOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jdXN0b21lckFsZ29yaXRobSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbWVyX2tleToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJLZXkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjdXN0b21lcl9rZXlfbWQ1OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jdXN0b21lcktleU1kNSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV4cGVjdGVkX2J1Y2tldF9vd25lcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBleHBpcmVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9leHBpcmVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZm9yY2VfZGVzdHJveToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2ZvcmNlRGVzdHJveSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBrZXk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2tleSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGttc19lbmNyeXB0aW9uX2NvbnRleHQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAga21zX2tleV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fa21zS2V5SWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fbWV0YWRhdGEpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICBtZXRhZGF0YV9kaXJlY3RpdmU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgb2JqZWN0X2xvY2tfbGVnYWxfaG9sZF9zdGF0dXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBvYmplY3RfbG9ja19tb2RlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9vYmplY3RMb2NrTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG9iamVjdF9sb2NrX3JldGFpbl91bnRpbF9kYXRlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcmVxdWVzdF9wYXllcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVxdWVzdFBheWVyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc2VydmVyX3NpZGVfZW5jcnlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3NvdXJjZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNvdXJjZV9jdXN0b21lcl9hbGdvcml0aG06IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc291cmNlX2N1c3RvbWVyX2tleToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc291cmNlQ3VzdG9tZXJLZXkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzb3VyY2VfY3VzdG9tZXJfa2V5X21kNToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc291cmNlQ3VzdG9tZXJLZXlNZDUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzdG9yYWdlX2NsYXNzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zdG9yYWdlQ2xhc3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdnaW5nX2RpcmVjdGl2ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHdlYnNpdGVfcmVkaXJlY3Q6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3dlYnNpdGVSZWRpcmVjdCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGdyYW50OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHMzT2JqZWN0Q29weUdyYW50VG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX2dyYW50LmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzT2JqZWN0Q29weUdyYW50TGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19