"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const typeorm_1 = require("typeorm");
const users_1 = require("../Models/users");
async function getAllUsers() {
    const repo = typeorm_1.getRepository(users_1.User);
    const users = repo.find();
    return users;
}
exports.getAllUsers = getAllUsers;
