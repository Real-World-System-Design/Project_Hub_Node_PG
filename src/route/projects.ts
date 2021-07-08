import { Router} from "express";
import { getProjects, createProject, getProjectBySlug, updateProjectDetails, delteProject } from "../controller/project";
import { authByToken } from "../middleware/auth";

const route = Router();

route.get('/', async (req, res) => {
    const articles = await getProjects();
    res.send(articles)
});

route.get('/:slug', async(req, res) => {
    try {
        const project = await getProjectBySlug(req.params.slug);
        res.status(200).send(project);
    } catch (e) {
        res.status(500).send({
            err: `could not fetch project ${e}`
        });
    }
});

route.post('/create', authByToken ,async(req, res) => {
    try {
        const article = await createProject(req.body, (req as any).user.email)
        res.status(200).send(article);
    } catch (e) {
        res.status(500).send({
            err: `error while creating project ${e}`
        });
    }
});

route.patch('/update/:slug', authByToken, async(req, res) => {
    try {
        const project = await updateProjectDetails(req.params.slug, req.body, (req as any).user.email);
        res.status(200).send(project);
    } catch (e) {
        res.status(500).send({
            err: `error while updating the project`
        });
    }
});

route.delete('/delete/:slug', authByToken, async(req, res) => {
    try {
        const project = await delteProject(req.params.slug, (req as any).user.email);
        res.status(200).send("sucess");     
    } catch (e) {
        res.status(500).send({
            err: `error while deleting the project ${e}`
        });
    }
});

export const projectRoute = route;