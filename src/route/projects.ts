import { Router} from "express";
import { getProjects, createProject} from "../controller/project";
import { authByToken } from "../middleware/auth";

const route = Router();

route.get('/', async (req, res) => {
    const articles = await getProjects();
    res.send(articles)
})

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

export const projectRoute = route;