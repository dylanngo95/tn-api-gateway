export interface JWTPayload {
     id: number;
     email: string;
     name: string;
     createdAt: string;
}

export interface JWTToken {
     access_token: string;
}