import { BaseRepository } from '../../base/repository/BaseRepository';
import { UserEntity, UserSchema } from './UserModel';
import { inject, injectable, singleton } from 'tsyringe';
import MongoConnection from '../../base/database/MongoConnection';

@singleton()
export class UserRepository extends BaseRepository<UserEntity> {
     constructor(@inject(MongoConnection) mongoConnection: MongoConnection) {
          super(mongoConnection, 'users', UserSchema);
     }
}