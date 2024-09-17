import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2EnclaveCertificateIamRoleAssociationConfig extends cdktf.TerraformMetaArguments {

  readonly id?: string;

  readonly certificateArn: string;

  readonly roleArn: string;
}

export class Ec2EnclaveCertificateIamRoleAssociation extends cdktf.TerraformResource {

  public static readonly tfResourceType = "aws_ec2_enclave_certificate_iam_role_association";

  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
    return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_enclave_certificate_iam_role_association", importId: importFromId, provider });
  }

  public constructor(scope: Construct, id: string, config: Ec2EnclaveCertificateIamRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_enclave_certificate_iam_role_association',
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

    this._id = config.id;
    this._certificateArn = config.certificateArn;
    this._roleArn = config.roleArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_arn: {
        value: cdktf.stringToHclTerraform(this._certificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
