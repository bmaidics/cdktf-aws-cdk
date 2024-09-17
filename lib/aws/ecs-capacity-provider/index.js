"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsCapacityProvider = exports.EcsCapacityProviderAutoScalingGroupProviderOutputReference = exports.ecsCapacityProviderAutoScalingGroupProviderToHclTerraform = exports.ecsCapacityProviderAutoScalingGroupProviderToTerraform = exports.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference = exports.ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform = exports.ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_warmup_period: cdktf.numberToTerraform(struct.instanceWarmupPeriod),
        maximum_scaling_step_size: cdktf.numberToTerraform(struct.maximumScalingStepSize),
        minimum_scaling_step_size: cdktf.numberToTerraform(struct.minimumScalingStepSize),
        status: cdktf.stringToTerraform(struct.status),
        target_capacity: cdktf.numberToTerraform(struct.targetCapacity),
    };
}
exports.ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform = ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform;
function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        instance_warmup_period: {
            value: cdktf.numberToHclTerraform(struct.instanceWarmupPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_scaling_step_size: {
            value: cdktf.numberToHclTerraform(struct.maximumScalingStepSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_scaling_step_size: {
            value: cdktf.numberToHclTerraform(struct.minimumScalingStepSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_capacity: {
            value: cdktf.numberToHclTerraform(struct.targetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform = ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform;
class EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceWarmupPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceWarmupPeriod = this._instanceWarmupPeriod;
        }
        if (this._maximumScalingStepSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumScalingStepSize = this._maximumScalingStepSize;
        }
        if (this._minimumScalingStepSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumScalingStepSize = this._minimumScalingStepSize;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._targetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCapacity = this._targetCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceWarmupPeriod = undefined;
            this._maximumScalingStepSize = undefined;
            this._minimumScalingStepSize = undefined;
            this._status = undefined;
            this._targetCapacity = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceWarmupPeriod = value.instanceWarmupPeriod;
            this._maximumScalingStepSize = value.maximumScalingStepSize;
            this._minimumScalingStepSize = value.minimumScalingStepSize;
            this._status = value.status;
            this._targetCapacity = value.targetCapacity;
        }
    }
    get instanceWarmupPeriod() {
        return this.getNumberAttribute('instance_warmup_period');
    }
    set instanceWarmupPeriod(value) {
        this._instanceWarmupPeriod = value;
    }
    resetInstanceWarmupPeriod() {
        this._instanceWarmupPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceWarmupPeriodInput() {
        return this._instanceWarmupPeriod;
    }
    get maximumScalingStepSize() {
        return this.getNumberAttribute('maximum_scaling_step_size');
    }
    set maximumScalingStepSize(value) {
        this._maximumScalingStepSize = value;
    }
    resetMaximumScalingStepSize() {
        this._maximumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumScalingStepSizeInput() {
        return this._maximumScalingStepSize;
    }
    get minimumScalingStepSize() {
        return this.getNumberAttribute('minimum_scaling_step_size');
    }
    set minimumScalingStepSize(value) {
        this._minimumScalingStepSize = value;
    }
    resetMinimumScalingStepSize() {
        this._minimumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumScalingStepSizeInput() {
        return this._minimumScalingStepSize;
    }
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
    }
    set targetCapacity(value) {
        this._targetCapacity = value;
    }
    resetTargetCapacity() {
        this._targetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetCapacityInput() {
        return this._targetCapacity;
    }
}
exports.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference = EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference[_a] = { fqn: "@cdktf/aws-cdk.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference", version: "0.0.0" };
function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_scaling_group_arn: cdktf.stringToTerraform(struct.autoScalingGroupArn),
        managed_termination_protection: cdktf.stringToTerraform(struct.managedTerminationProtection),
        managed_scaling: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct.managedScaling),
    };
}
exports.ecsCapacityProviderAutoScalingGroupProviderToTerraform = ecsCapacityProviderAutoScalingGroupProviderToTerraform;
function ecsCapacityProviderAutoScalingGroupProviderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auto_scaling_group_arn: {
            value: cdktf.stringToHclTerraform(struct.autoScalingGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_termination_protection: {
            value: cdktf.stringToHclTerraform(struct.managedTerminationProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_scaling: {
            value: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform(struct.managedScaling),
            isBlock: true,
            type: "list",
            storageClassType: "EcsCapacityProviderAutoScalingGroupProviderManagedScalingList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsCapacityProviderAutoScalingGroupProviderToHclTerraform = ecsCapacityProviderAutoScalingGroupProviderToHclTerraform;
class EcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // managed_scaling - computed: false, optional: true, required: false
        this._managedScaling = new EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(this, "managed_scaling");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._autoScalingGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingGroupArn = this._autoScalingGroupArn;
        }
        if (this._managedTerminationProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedTerminationProtection = this._managedTerminationProtection;
        }
        if (this._managedScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedScaling = this._managedScaling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoScalingGroupArn = undefined;
            this._managedTerminationProtection = undefined;
            this._managedScaling.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoScalingGroupArn = value.autoScalingGroupArn;
            this._managedTerminationProtection = value.managedTerminationProtection;
            this._managedScaling.internalValue = value.managedScaling;
        }
    }
    get autoScalingGroupArn() {
        return this.getStringAttribute('auto_scaling_group_arn');
    }
    set autoScalingGroupArn(value) {
        this._autoScalingGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get autoScalingGroupArnInput() {
        return this._autoScalingGroupArn;
    }
    get managedTerminationProtection() {
        return this.getStringAttribute('managed_termination_protection');
    }
    set managedTerminationProtection(value) {
        this._managedTerminationProtection = value;
    }
    resetManagedTerminationProtection() {
        this._managedTerminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get managedTerminationProtectionInput() {
        return this._managedTerminationProtection;
    }
    get managedScaling() {
        return this._managedScaling;
    }
    putManagedScaling(value) {
        this._managedScaling.internalValue = value;
    }
    resetManagedScaling() {
        this._managedScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get managedScalingInput() {
        return this._managedScaling.internalValue;
    }
}
exports.EcsCapacityProviderAutoScalingGroupProviderOutputReference = EcsCapacityProviderAutoScalingGroupProviderOutputReference;
_b = JSII_RTTI_SYMBOL_1;
EcsCapacityProviderAutoScalingGroupProviderOutputReference[_b] = { fqn: "@cdktf/aws-cdk.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider}
*/
class EcsCapacityProvider extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EcsCapacityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsCapacityProvider to import
    * @param importFromId The id of the existing EcsCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecs_capacity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsCapacityProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_capacity_provider", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ecs_capacity_provider',
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
        // auto_scaling_group_provider - computed: false, optional: false, required: true
        this._autoScalingGroupProvider = new EcsCapacityProviderAutoScalingGroupProviderOutputReference(this, "auto_scaling_group_provider");
        this._id = config.id;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._autoScalingGroupProvider.internalValue = config.autoScalingGroupProvider;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    get autoScalingGroupProvider() {
        return this._autoScalingGroupProvider;
    }
    putAutoScalingGroupProvider(value) {
        this._autoScalingGroupProvider.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get autoScalingGroupProviderInput() {
        return this._autoScalingGroupProvider.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            auto_scaling_group_provider: ecsCapacityProviderAutoScalingGroupProviderToTerraform(this._autoScalingGroupProvider.internalValue),
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
            auto_scaling_group_provider: {
                value: ecsCapacityProviderAutoScalingGroupProviderToHclTerraform(this._autoScalingGroupProvider.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EcsCapacityProviderAutoScalingGroupProviderList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.EcsCapacityProvider = EcsCapacityProvider;
_c = JSII_RTTI_SYMBOL_1;
EcsCapacityProvider[_c] = { fqn: "@cdktf/aws-cdk.ecsCapacityProvider.EcsCapacityProvider", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
EcsCapacityProvider.tfResourceType = "aws_ecs_capacity_provider";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Vjcy1jYXBhY2l0eS1wcm92aWRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQXNEL0IsU0FBZ0Isb0VBQW9FLENBQUMsTUFBNkk7SUFDaE8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNsRix5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2xGLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFaRCxvSkFZQztBQUdELFNBQWdCLHVFQUF1RSxDQUFDLE1BQTZJO0lBQ25PLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFP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Qzs7QUE1TEgsa0RBNkxDOzs7QUEzTEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxrQ0FBYyxHQUFHLDJCQUEyQixBQUE5QixDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc19jYXBhY2l0eV9wcm92aWRlclxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc0NhcGFjaXR5UHJvdmlkZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX2NhcGFjaXR5X3Byb3ZpZGVyI2lkIEVjc0NhcGFjaXR5UHJvdmlkZXIjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc19jYXBhY2l0eV9wcm92aWRlciNuYW1lIEVjc0NhcGFjaXR5UHJvdmlkZXIjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfY2FwYWNpdHlfcHJvdmlkZXIjdGFncyBFY3NDYXBhY2l0eVByb3ZpZGVyI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfY2FwYWNpdHlfcHJvdmlkZXIjdGFnc19hbGwgRWNzQ2FwYWNpdHlQcm92aWRlciN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIGF1dG9fc2NhbGluZ19ncm91cF9wcm92aWRlciBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX2NhcGFjaXR5X3Byb3ZpZGVyI2F1dG9fc2NhbGluZ19ncm91cF9wcm92aWRlciBFY3NDYXBhY2l0eVByb3ZpZGVyI2F1dG9fc2NhbGluZ19ncm91cF9wcm92aWRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyOiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfY2FwYWNpdHlfcHJvdmlkZXIjaW5zdGFuY2Vfd2FybXVwX3BlcmlvZCBFY3NDYXBhY2l0eVByb3ZpZGVyI2luc3RhbmNlX3dhcm11cF9wZXJpb2R9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlV2FybXVwUGVyaW9kPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfY2FwYWNpdHlfcHJvdmlkZXIjbWF4aW11bV9zY2FsaW5nX3N0ZXBfc2l6ZSBFY3NDYXBhY2l0eVByb3ZpZGVyI21heGltdW1fc2NhbGluZ19zdGVwX3NpemV9XG4gICovXG4gIHJlYWRvbmx5IG1heGltdW1TY2FsaW5nU3RlcFNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc19jYXBhY2l0eV9wcm92aWRlciNtaW5pbXVtX3NjYWxpbmdfc3RlcF9zaXplIEVjc0NhcGFjaXR5UHJvdmlkZXIjbWluaW11bV9zY2FsaW5nX3N0ZXBfc2l6ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWluaW11bVNjYWxpbmdTdGVwU2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX2NhcGFjaXR5X3Byb3ZpZGVyI3N0YXR1cyBFY3NDYXBhY2l0eVByb3ZpZGVyI3N0YXR1c31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfY2FwYWNpdHlfcHJvdmlkZXIjdGFyZ2V0X2NhcGFjaXR5IEVjc0NhcGFjaXR5UHJvdmlkZXIjdGFyZ2V0X2NhcGFjaXR5fVxuICAqL1xuICByZWFkb25seSB0YXJnZXRDYXBhY2l0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZ091dHB1dFJlZmVyZW5jZSB8IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV93YXJtdXBfcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlV2FybXVwUGVyaW9kKSxcbiAgICBtYXhpbXVtX3NjYWxpbmdfc3RlcF9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heGltdW1TY2FsaW5nU3RlcFNpemUpLFxuICAgIG1pbmltdW1fc2NhbGluZ19zdGVwX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluaW11bVNjYWxpbmdTdGVwU2l6ZSksXG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldENhcGFjaXR5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmdPdXRwdXRSZWZlcmVuY2UgfCBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGluc3RhbmNlX3dhcm11cF9wZXJpb2Q6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlV2FybXVwUGVyaW9kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBtYXhpbXVtX3NjYWxpbmdfc3RlcF9zaXplOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhpbXVtU2NhbGluZ1N0ZXBTaXplKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBtaW5pbXVtX3NjYWxpbmdfc3RlcF9zaXplOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5taW5pbXVtU2NhbGluZ1N0ZXBTaXplKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzdGF0dXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGFyZ2V0X2NhcGFjaXR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50YXJnZXRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5zdGFuY2VXYXJtdXBQZXJpb2QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VXYXJtdXBQZXJpb2QgPSB0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heGltdW1TY2FsaW5nU3RlcFNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4aW11bVNjYWxpbmdTdGVwU2l6ZSA9IHRoaXMuX21heGltdW1TY2FsaW5nU3RlcFNpemU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9taW5pbXVtU2NhbGluZ1N0ZXBTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbmltdW1TY2FsaW5nU3RlcFNpemUgPSB0aGlzLl9taW5pbXVtU2NhbGluZ1N0ZXBTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldENhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldENhcGFjaXR5ID0gdGhpcy5fdGFyZ2V0Q2FwYWNpdHk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heGltdW1TY2FsaW5nU3RlcFNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5pbXVtU2NhbGluZ1N0ZXBTaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0Q2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2luc3RhbmNlV2FybXVwUGVyaW9kID0gdmFsdWUuaW5zdGFuY2VXYXJtdXBQZXJpb2Q7XG4gICAgICB0aGlzLl9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplID0gdmFsdWUubWF4aW11bVNjYWxpbmdTdGVwU2l6ZTtcbiAgICAgIHRoaXMuX21pbmltdW1TY2FsaW5nU3RlcFNpemUgPSB2YWx1ZS5taW5pbXVtU2NhbGluZ1N0ZXBTaXplO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWUuc3RhdHVzO1xuICAgICAgdGhpcy5fdGFyZ2V0Q2FwYWNpdHkgPSB2YWx1ZS50YXJnZXRDYXBhY2l0eTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV93YXJtdXBfcGVyaW9kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VXYXJtdXBQZXJpb2Q/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlV2FybXVwUGVyaW9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2Vfd2FybXVwX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VXYXJtdXBQZXJpb2QodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlV2FybXVwUGVyaW9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VXYXJtdXBQZXJpb2QoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VXYXJtdXBQZXJpb2QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlV2FybXVwUGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlV2FybXVwUGVyaW9kO1xuICB9XG5cbiAgLy8gbWF4aW11bV9zY2FsaW5nX3N0ZXBfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heGltdW1TY2FsaW5nU3RlcFNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1TY2FsaW5nU3RlcFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX3NjYWxpbmdfc3RlcF9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhpbXVtU2NhbGluZ1N0ZXBTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bVNjYWxpbmdTdGVwU2l6ZSgpIHtcbiAgICB0aGlzLl9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhpbXVtU2NhbGluZ1N0ZXBTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1TY2FsaW5nU3RlcFNpemU7XG4gIH1cblxuICAvLyBtaW5pbXVtX3NjYWxpbmdfc3RlcF9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluaW11bVNjYWxpbmdTdGVwU2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluaW11bVNjYWxpbmdTdGVwU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbmltdW1fc2NhbGluZ19zdGVwX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pbmltdW1TY2FsaW5nU3RlcFNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbmltdW1TY2FsaW5nU3RlcFNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5pbXVtU2NhbGluZ1N0ZXBTaXplKCkge1xuICAgIHRoaXMuX21pbmltdW1TY2FsaW5nU3RlcFNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbmltdW1TY2FsaW5nU3RlcFNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluaW11bVNjYWxpbmdTdGVwU2l6ZTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXR1cygpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICAvLyB0YXJnZXRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldENhcGFjaXR5KCkge1xuICAgIHRoaXMuX3RhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRDYXBhY2l0eTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX2NhcGFjaXR5X3Byb3ZpZGVyI2F1dG9fc2NhbGluZ19ncm91cF9hcm4gRWNzQ2FwYWNpdHlQcm92aWRlciNhdXRvX3NjYWxpbmdfZ3JvdXBfYXJufVxuICAqL1xuICByZWFkb25seSBhdXRvU2NhbGluZ0dyb3VwQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc19jYXBhY2l0eV9wcm92aWRlciNtYW5hZ2VkX3Rlcm1pbmF0aW9uX3Byb3RlY3Rpb24gRWNzQ2FwYWNpdHlQcm92aWRlciNtYW5hZ2VkX3Rlcm1pbmF0aW9uX3Byb3RlY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IG1hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG1hbmFnZWRfc2NhbGluZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX2NhcGFjaXR5X3Byb3ZpZGVyI21hbmFnZWRfc2NhbGluZyBFY3NDYXBhY2l0eVByb3ZpZGVyI21hbmFnZWRfc2NhbGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgbWFuYWdlZFNjYWxpbmc/OiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck91dHB1dFJlZmVyZW5jZSB8IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0b19zY2FsaW5nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvU2NhbGluZ0dyb3VwQXJuKSxcbiAgICBtYW5hZ2VkX3Rlcm1pbmF0aW9uX3Byb3RlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbiksXG4gICAgbWFuYWdlZF9zY2FsaW5nOiBlY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmFnZWRTY2FsaW5nKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck91dHB1dFJlZmVyZW5jZSB8IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGF1dG9fc2NhbGluZ19ncm91cF9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dG9TY2FsaW5nR3JvdXBBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1hbmFnZWRfdGVybWluYXRpb25fcHJvdGVjdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWFuYWdlZF9zY2FsaW5nOiB7XG4gICAgICB2YWx1ZTogZWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck1hbmFnZWRTY2FsaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYW5hZ2VkU2NhbGluZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0b1NjYWxpbmdHcm91cEFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRvU2NhbGluZ0dyb3VwQXJuID0gdGhpcy5fYXV0b1NjYWxpbmdHcm91cEFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbiA9IHRoaXMuX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYW5hZ2VkU2NhbGluZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYW5hZ2VkU2NhbGluZyA9IHRoaXMuX21hbmFnZWRTY2FsaW5nPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFuYWdlZFNjYWxpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXV0b1NjYWxpbmdHcm91cEFybiA9IHZhbHVlLmF1dG9TY2FsaW5nR3JvdXBBcm47XG4gICAgICB0aGlzLl9tYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uID0gdmFsdWUubWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbjtcbiAgICAgIHRoaXMuX21hbmFnZWRTY2FsaW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYW5hZ2VkU2NhbGluZztcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvX3NjYWxpbmdfZ3JvdXBfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dG9TY2FsaW5nR3JvdXBBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dG9TY2FsaW5nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRvX3NjYWxpbmdfZ3JvdXBfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvU2NhbGluZ0dyb3VwQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0dyb3VwQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9TY2FsaW5nR3JvdXBBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1NjYWxpbmdHcm91cEFybjtcbiAgfVxuXG4gIC8vIG1hbmFnZWRfdGVybWluYXRpb25fcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYW5hZ2VkX3Rlcm1pbmF0aW9uX3Byb3RlY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIG1hbmFnZWRfc2NhbGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYW5hZ2VkU2NhbGluZyA9IG5ldyBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJtYW5hZ2VkX3NjYWxpbmdcIik7XG4gIHB1YmxpYyBnZXQgbWFuYWdlZFNjYWxpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZWRTY2FsaW5nO1xuICB9XG4gIHB1YmxpYyBwdXRNYW5hZ2VkU2NhbGluZyh2YWx1ZTogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck1hbmFnZWRTY2FsaW5nKSB7XG4gICAgdGhpcy5fbWFuYWdlZFNjYWxpbmcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hbmFnZWRTY2FsaW5nKCkge1xuICAgIHRoaXMuX21hbmFnZWRTY2FsaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbmFnZWRTY2FsaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZWRTY2FsaW5nLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc19jYXBhY2l0eV9wcm92aWRlciBhd3NfZWNzX2NhcGFjaXR5X3Byb3ZpZGVyfVxuKi9cbmV4cG9ydCBjbGFzcyBFY3NDYXBhY2l0eVByb3ZpZGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19lY3NfY2FwYWNpdHlfcHJvdmlkZXJcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgRWNzQ2FwYWNpdHlQcm92aWRlciByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBFY3NDYXBhY2l0eVByb3ZpZGVyIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBFY3NDYXBhY2l0eVByb3ZpZGVyIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfY2FwYWNpdHlfcHJvdmlkZXIjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEVjc0NhcGFjaXR5UHJvdmlkZXIgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2Vjc19jYXBhY2l0eV9wcm92aWRlclwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc19jYXBhY2l0eV9wcm92aWRlciBhd3NfZWNzX2NhcGFjaXR5X3Byb3ZpZGVyfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBFY3NDYXBhY2l0eVByb3ZpZGVyQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVjc0NhcGFjaXR5UHJvdmlkZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lY3NfY2FwYWNpdHlfcHJvdmlkZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGF1dG9fc2NhbGluZ19ncm91cF9wcm92aWRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIgPSBuZXcgRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImF1dG9fc2NhbGluZ19ncm91cF9wcm92aWRlclwiKTtcbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBQcm92aWRlcjtcbiAgfVxuICBwdWJsaWMgcHV0QXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyKHZhbHVlOiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBQcm92aWRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGF1dG9fc2NhbGluZ19ncm91cF9wcm92aWRlcjogZWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlclRvVGVycmFmb3JtKHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBQcm92aWRlci5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICBhdXRvX3NjYWxpbmdfZ3JvdXBfcHJvdmlkZXI6IHtcbiAgICAgICAgdmFsdWU6IGVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9hdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=