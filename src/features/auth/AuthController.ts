import { Get, Route, Security, Response, Request, Post } from "tsoa";
import { JWTToken } from "./Auth";
import * as jwt from "jsonwebtoken";

@Route("auth")
export class SecureController {

  @Post("login")
  public async login(@Request() request: any): Promise<JWTToken> {
    var temp = 0;
    let email = request.body.email;
    let password = request.body.password;
    if (email === 'it.tinhngo@gmail.com' && password === '1234') {
      var token = jwt.sign(
        {
          email,
          iat: Date.now()
        },
        'shhhhh'
      );
      return Promise.resolve({
        access_token: token
      });
    }
    return Promise.reject("error");
  }

  @Security("api_key")
  @Get("user")
  public async user(@Request() request: any): Promise<string> {
    return Promise.resolve(request.user);
  }

  @Security("jwt", ['admin'])
  @Post("info")
  public async userInfo(@Request() request: any): Promise<string> {
    var temp = 0;
    return Promise.resolve("aaa");
  }
}