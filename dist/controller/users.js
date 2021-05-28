"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.getAllUsers = void 0;
const typeorm_1 = require("typeorm");
const users_1 = require("../Models/users");
const password_1 = require("../utils/password");
async function getAllUsers() {
    const repo = typeorm_1.getRepository(users_1.User);
    const users = repo.find();
    return users;
}
exports.getAllUsers = getAllUsers;
async function registerUser(data) {
    //validation
    if (!data.email)
        throw new Error('email filed is blank');
    if (!data.username)
        throw new Error('username filed is blank');
    if (!data.password)
        throw new Error('password filed is blank');
    const repo = typeorm_1.getRepository(users_1.User);
    try {
        const user = repo.save(new users_1.User(data.username, await password_1.hashPass(data.password), data.email));
        return user;
    }
    catch (e) {
        throw e;
    }
}
exports.registerUser = registerUser;
