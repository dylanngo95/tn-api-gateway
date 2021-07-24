import mongoose from 'mongoose';
import {
     Body,
     Controller,
     Get,
     Path,
     Post,
     Put,
     Query,
     Route
} from "tsoa";
import { UserEntity } from './UserModel';
import { UsersService } from "./UsersService";
import { inject, injectable } from 'tsyringe';
import { UserRepository } from './UserRepository';
import { UserRequestView } from './views/UserRequestView';
import { UserResponseView } from './views/UserResponseView';

@injectable()
@Route("users")
export class UsersController extends Controller {

     private userRepository: UserRepository

     constructor(
          userRepository: UserRepository
     ) {
          super();
          this.userRepository = userRepository;
     }

     @Get("{id}")
     public async getUser(
          @Path() id: string
     ): Promise<UserResponseView> {
          const userModel = await this.userRepository.findOnce(id);
          const userResponse: UserResponseView = {
               _id: userModel._id,
               email: userModel.email
          };
          return userResponse;
     }

     @Post()
     public async createUser(
          @Body() userView: UserRequestView
     ): Promise<UserResponseView> {
          const userModel = await this.userRepository.create({
               ...userView
          });
          const userViewResponse: UserResponseView = {
               _id: userModel._id,
               email: userModel.email
          };
          return userViewResponse;
     }

     @Put("{id}")
     public async updateUser(
          @Path() id: string,
          @Body() userView: UserRequestView
     ): Promise<string> {
          await this.userRepository.update(
               id,
               {
                    ...userView
               });
          return `The entity ${id} update is completed`;
     }
}