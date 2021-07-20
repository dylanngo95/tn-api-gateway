import * as express from "express";
import * as jwt from "jsonwebtoken";

export interface UserAuth {
  id: number;
  email: string;
  name: string;
  createdAt: string
}

export async function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<UserAuth> {
  
  if (securityName === "api_key") {
    let token;
    if (request.query && request.query.access_token) {
      token = request.query.access_token;
    }

    if (token === "abc123456") {
      return Promise.resolve({
        id:  1,
        email: "it.tinhngo@gmail.com",
        name: "Dylan",
        createdAt: "2021"
      });
    } else {
      return Promise.reject({
        id:  1,
        email: "it.tinhngo@gmail.com",
        name: "Dylan",
        createdAt: "2021"
      });
    }
  }

  let cps = scopes ? scopes : [];

  return Promise.resolve({
    id: 1,
    email: "it.tinhngo@gmail.com",
    name: "Dylan",
    createdAt: "2021"
  });

  // if (securityName === "jwt") {
  //   const token =
  //     request.body.token ||
  //     request.query.token ||
  //     request.headers["x-access-token"];

  //   return new Promise((resolve, reject) => {
  //     if (!token) {
  //       reject(new Error("No token provided"));
  //     }
  //     jwt.verify(token, "[secret]", function (err: any, decoded: any) {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         // Check if JWT contains all required scopes
  //         for (let scope of scopes) {
  //           if (!decoded.scopes.includes(scope)) {
  //             reject(new Error("JWT does not contain required scope."));
  //           }
  //         }
  //         resolve(decoded);
  //       }
  //     });
  //   });
  // }
}