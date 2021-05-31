"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const typeorm_1 = require("typeorm");
const projects_1 = require("../Models/projects");
const users_1 = require("../Models/users");
async function getProjects() {
    const repo = typeorm_1.getRepository(projects_1.Project);
    const projects = await repo.find();
    return projects;
}
exports.getProjects = getProjects;
async function createProject(data, email) {
    //validation
    if (!data.body)
        throw new Error("body is empty");
    if (!data.title)
        throw new Error("title is empty");
    // if(!data.taglist) throw new Error("taglist is empty");
    try {
        const repo = typeorm_1.getRepository(projects_1.Project);
        const userRepo = typeorm_1.getRepository(users_1.User);
        const user = await userRepo.findOne(email);
        if (!user)
            throw new Error("user does not exists");
        const article = repo.save(new projects_1.Project(data.title, data.title, data.body, user));
        return article;
    }
    catch (e) {
        throw e;
    }
}
exports.createProject = createProject;
