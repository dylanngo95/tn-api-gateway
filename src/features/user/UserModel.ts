import { DbEntity, DbSchema } from '../../base/database/DbEntity';

export interface UserEntity extends DbEntity {
     email: string;
     password: string;
     name?: string;
     status?: string;
     phoneNumber?: string;
}

export const UserSchema = {
     ...DbSchema,
     email: { type: String, required: true },
     password: { type: String, required: true },
     name: { type: String, required: false },
     status: { type: String, required: false },
     phoneNumber: { type: String, required: false },
};