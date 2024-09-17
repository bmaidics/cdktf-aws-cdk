import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2EnclaveCertificateIamRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    readonly id?: string;
    readonly certificateArn: string;
    readonly roleArn: string;
}
export declare class Ec2EnclaveCertificateIamRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_enclave_certificate_iam_role_association";
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    constructor(scope: Construct, id: string, config: Ec2EnclaveCertificateIamRoleAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
