import { Get, Route, Security, Response, Request } from "tsoa";
import { UserAuth } from "./Authentication";
import { ErrorResponseModel } from "./ErrorResponseModel";

@Route("auth")
export class SecureController {
  @Security("api_key")
  @Get("UserInfo")
  public async userInfo(@Request() request: any): Promise<UserAuth> {
    return Promise.resolve(request.user);
  }

//   @Security("jwt", ["admin"])
//   @Get("EditUser")
//   public async userInfo(@Request() request: any): Promise<string> {
//     // Do something here
//   }
}