import { getRepository } from "typeorm";
import { User } from "../Models/users";
import { hashPass } from "../utils/password";

interface userData {
    username: string,
    password: string,
    email: string
}

export async function getAllUsers(): Promise<User[]> {
    const repo = getRepository(User);

    const users = repo.find();

    return users;
}

export async function registerUser(data: userData): Promise<User>{
    //validation
    if(!data.email) throw new Error('email filed is blank');
    if(!data.username) throw new Error('username filed is blank');
    if(!data.password) throw new Error('password filed is blank');

    const repo = getRepository(User);
    try {
        const user = repo.save(new User(
            data.username,
            await hashPass(data.password),
            data.email
        ));
        return user;
    } catch (e) {
        throw e
    }
}