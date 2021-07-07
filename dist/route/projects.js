"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoute = void 0;
const express_1 = require("express");
const project_1 = require("../controller/project");
// import { authByToken } from "../middleware/auth";
const route = express_1.Router();
route.get('/', async (req, res) => {
    const articles = await project_1.getProjects();
    res.send(articles);
});
// route.post('/', authByToken ,async(req, res) => {
//     try {
//         const article = await createProject(req.body, (req as any).user.email)
//         res.status(200).send(article);
//     } catch (e) {
//         res.send(e)
//     }
// })
route.post('/', async (req, res) => {
    const project = await project_1.createProject(req.body);
    res.send(project);
});
exports.projectRoute = route;
