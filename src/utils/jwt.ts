import jwt from "jsonwebtoken";
import { User } from "../Models/users";

const secret = "veryverysecret";

export async function sign(user: User): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        jwt.sign({
            username: user.username,
            email: user.email
        }, secret, (err: any, signed: any) => {
            if(err) throw reject(err)
            resolve(signed)
        });
    });
};

export async function decode(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if(err) throw reject(err)
            resolve(decoded as User)
        });
    });
};