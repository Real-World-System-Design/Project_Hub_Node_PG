"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const typeorm_1 = require("typeorm");
const projects_1 = require("../Models/projects");
const users_1 = require("../Models/users");
const sanitization_1 = require("../utils/sanitization");
const slugify_1 = require("../utils/slugify");
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
    if (!data.tags)
        throw new Error("taglist is empty");
    try {
        const repo = typeorm_1.getRepository(projects_1.Project);
        const userRepo = typeorm_1.getRepository(users_1.User);
        const user = await userRepo.findOne(email);
        if (!user)
            throw new Error("user does not exists");
        const newProject = await repo.save(new projects_1.Project(await slugify_1.slugify(data.title), data.title, data.links, data.body, data.tags, await sanitization_1.sanitization(user)));
        return newProject;
    }
    catch (e) {
        throw e;
    }
}
exports.createProject = createProject;
