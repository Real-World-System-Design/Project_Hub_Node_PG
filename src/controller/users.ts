import { getRepository } from "typeorm";
import { User } from "../Models/users";

export async function getAllUsers(): Promise<User[]> {
    const repo = getRepository(User);

    const users = repo.find();

    return users;
}