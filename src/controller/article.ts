import { getRepository } from "typeorm";
import { Project } from "../Models/projects";
import { User } from "../Models/users";
import { sanitization } from "../utils/sanitization";
// import { slugify } from "../utils/slugify";



// taglist: string[]
interface projectData {
    title: string,
    body: string
}

export async function getProjects(): Promise<Project[]> {
    const repo = getRepository(Project);

    const projects = await repo.find();

    return projects;
}

export async function createProject(data: projectData, email: string): Promise<Project> {
    //validation
    if(!data.body) throw new Error("body is empty");
    if(!data.title) throw new Error("title is empty");
    // if(!data.taglist) throw new Error("taglist is empty");
    try {

        const repo = getRepository(Project);
        const userRepo = getRepository(User);
        
        const user = await userRepo.findOne(email);
        if(!user) throw new Error("user does not exists");
        
        const article = repo.save(new Project(
            data.title,
            data.title,
            data.body,
            await sanitization(user)
        ));
        return article;
    } catch (e) {
        throw e
    }
}