import {
     Body,
     Controller,
     Get,
     Path,
     Post,
     Query,
     Route,
     SuccessResponse,
} from "tsoa";
import { User } from "./User";
import { UsersService, UserCreationParams } from "./UsersService";

@Route("users")
export class UsersController extends Controller {

     @Get("{userId}")
     public async getUser(
          @Path() userId: number,
          @Query() name?: string
     ): Promise<User> {
          return new UsersService().get(userId, name);
     }

     @SuccessResponse("201", "Created")
     @Post()
     public async createUser(
          @Body() requestBody: UserCreationParams
     ): Promise<void> {
          this.setStatus(201); // set return status 201
          new UsersService().create(requestBody);
          return;
     }
}