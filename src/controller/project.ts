import { getRepository } from "typeorm";
import { Project } from "../Models/projects";
import { User } from "../Models/users";
import { sanitization } from "../utils/sanitization";
import { slugify } from "../utils/slugify";

interface projectData {
    title: string,
    body: string,
    links: string[]
    tags: string[]
}

interface updateDetails {
    title: string,
    body: string,
    links: string[]
    tags: string[]
}

export async function getProjects(): Promise<Project[]> {
    const repo = getRepository(Project);

    const projects = await repo.find();

    return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
    const repo = getRepository(Project);

    try {
    const project = await repo.findOne(slug);
    if(!project) throw new Error("sorry! project not found");

    return project;
    } catch (e) {
        throw e;
    }
}

export async function createProject(data: projectData, email: string): Promise<Project> {
    //validation
    if(!data.body) throw new Error("body is empty");
    if(!data.title) throw new Error("title is empty");
    if(!data.tags) throw new Error("add upto one tag");
    try {

        const repo = getRepository(Project);
        const userRepo = getRepository(User);
        
        const user = await userRepo.findOne(email);
        if(!user) throw new Error("user does not exists");
        
        const newProject = await repo.save(new Project(
            await slugify(data.title),
            data.title,
            data.links,
            data.body,
            data.tags,
            await sanitization(user)
        ));
        return newProject;
    } catch (e) {
        throw e
    }
}

export async function updateProjectDetails(slug: string, data: updateDetails, email: string): Promise<Project> {
    try {
        const repo = getRepository(Project);
        const userRepo = getRepository(User);

        const user = await userRepo.findOne(email);
        if(!user) throw new Error("user does not exists");

        const project = await repo.findOne(slug);
        if(!project) throw new Error("sorry! project not found");

        if(data.body) project.body = data.body;
        if(data.title) project.title = data.title;
        if(data.tags) project.tags = data.tags;
        if(data.links) project.links = data.links;
        
        const newProject = await repo.save(project);
        return newProject;
    } catch (e) {
        throw e;
    }
}

export async function delteProject(slug: string, email: string) {
    try {
        const reop = getRepository(Project);
        const userRepo = getRepository(User);

        const user = await userRepo.findOne(email);
        if(!user) throw new Error("user does not exists");

        const project = await reop.findOne(slug);
        if(!project) throw new Error("sorry! project not found");

        await reop.remove(project);
    } catch (e) {
        throw e;
    }
}