"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const typeorm_1 = require("typeorm");
const projects_1 = require("../Models/projects");
async function getProjects() {
    const repo = typeorm_1.getRepository(projects_1.Project);
    const projects = await repo.find();
    return projects;
}
exports.getProjects = getProjects;
// export async function createProject(data: projectData, email: string): Promise<Project> {
//     //validation
//     if(!data.body) throw new Error("body is empty");
//     if(!data.title) throw new Error("title is empty");
//     if(!data.taglist) throw new Error("taglist is empty");
//     try {
//         const repo = getRepository(Project);
//         const userRepo = getRepository(User);
//         const user = await userRepo.findOne(email);
//         if(!user) throw new Error("user does not exists");
//         const article = await repo.save(new Project(
//             await slugify(data.title),
//             data.title,
//             data.links,
//             data.body,
//             data.taglist,
//             await sanitization(user)
//         ));
//         return article;
//     } catch (e) {
//         throw e
//     }
// }
async function createProject(data) {
    const repo = typeorm_1.getRepository(projects_1.Project);
    const article = await repo.save(new projects_1.Project(data.title, data.title, data.body));
    return article;
}
exports.createProject = createProject;
