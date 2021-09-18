"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoute = void 0;
const express_1 = require("express");
const project_1 = require("../controller/project");
const auth_1 = require("../middleware/auth");
const route = (0, express_1.Router)();
route.get('/', async (req, res) => {
    const articles = await (0, project_1.getProjects)();
    res.send(articles);
});
route.get('/:slug', async (req, res) => {
    try {
        const project = await (0, project_1.getProjectBySlug)(req.params.slug);
        res.status(200).send(project);
    }
    catch (e) {
        res.status(500).send({
            err: `could not fetch project ${e}`
        });
    }
});
route.post('/create', auth_1.authByToken, async (req, res) => {
    try {
        const article = await (0, project_1.createProject)(req.body, req.user.email);
        res.status(200).send(article);
    }
    catch (e) {
        res.status(500).send({
            err: `error while creating project ${e}`
        });
    }
});
route.patch('/update/:slug', auth_1.authByToken, async (req, res) => {
    try {
        const project = await (0, project_1.updateProjectDetails)(req.params.slug, req.body, req.user.email);
        res.status(200).send(project);
    }
    catch (e) {
        res.status(500).send({
            err: `error while updating the project`
        });
    }
});
route.delete('/delete/:slug', auth_1.authByToken, async (req, res) => {
    try {
        const project = await (0, project_1.delteProject)(req.params.slug, req.user.email);
        res.status(200).send("sucess");
    }
    catch (e) {
        res.status(500).send({
            err: `error while deleting the project ${e}`
        });
    }
});
exports.projectRoute = route;
