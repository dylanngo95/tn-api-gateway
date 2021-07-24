import { UserEntity } from "./UserModel";

// A post request should not contain an id.
export type UserCreationParams = Pick<UserEntity, "email" | "name" | "phoneNumber">;

export class UsersService {
  public get(id: number, name?: string): UserEntity {
    return {
      _id: id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumber: "",
      password: ""
    };
  }

  public create(userCreationParams: UserCreationParams): UserEntity {
    return {
      _id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
      password: ""
    };
  }
}