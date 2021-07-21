import * as express from "express";
import * as jwt from "jsonwebtoken";
import { JWTPayload } from "./Auth";

export async function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<JWTPayload> {

  if (securityName === "api_key") {
    if (request.headers.authorization) {
      let authHeader = request.headers.authorization || '';
      if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);
        const payload = jwt.verify(token, 'shhhhh');
        return Promise.resolve({
          id: 1,
          email: (payload as any).email,
          name: "Dylan",
          createdAt: "2021"
        });
      }
    }
  }
  return Promise.reject('error');
}