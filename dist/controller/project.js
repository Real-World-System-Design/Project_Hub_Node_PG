"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delteProject = exports.updateProjectDetails = exports.createProject = exports.getProjectBySlug = exports.getProjects = void 0;
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
async function getProjectBySlug(slug) {
    const repo = typeorm_1.getRepository(projects_1.Project);
    try {
        const project = await repo.findOne(slug);
        if (!project)
            throw new Error("sorry! project not found");
        return project;
    }
    catch (e) {
        throw e;
    }
}
exports.getProjectBySlug = getProjectBySlug;
async function createProject(data, email) {
    //validation
    if (!data.body)
        throw new Error("body is empty");
    if (!data.title)
        throw new Error("title is empty");
    if (!data.tags)
        throw new Error("add upto one tag");
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
async function updateProjectDetails(slug, data, email) {
    try {
        const repo = typeorm_1.getRepository(projects_1.Project);
        const userRepo = typeorm_1.getRepository(users_1.User);
        const user = await userRepo.findOne(email);
        if (!user)
            throw new Error("user does not exists");
        const project = await repo.findOne(slug);
        if (!project)
            throw new Error("sorry! project not found");
        if (data.body)
            project.body = data.body;
        if (data.title)
            project.title = data.title;
        if (data.tags)
            project.tags = data.tags;
        if (data.links)
            project.links = data.links;
        const newProject = await repo.save(project);
        return newProject;
    }
    catch (e) {
        throw e;
    }
}
exports.updateProjectDetails = updateProjectDetails;
async function delteProject(slug, email) {
    try {
        const reop = typeorm_1.getRepository(projects_1.Project);
        const userRepo = typeorm_1.getRepository(users_1.User);
        const user = await userRepo.findOne(email);
        if (!user)
            throw new Error("user does not exists");
        const project = await reop.findOne(slug);
        if (!project)
            throw new Error("sorry! project not found");
        await reop.remove(project);
    }
    catch (e) {
        throw e;
    }
}
exports.delteProject = delteProject;
