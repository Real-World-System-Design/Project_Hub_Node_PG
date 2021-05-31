import { User } from "../Models/users";

export async function sanitization(user: User) {
    if(user.password) delete user.password
    return user
}