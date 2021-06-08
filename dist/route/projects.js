"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoute = void 0;
const express_1 = require("express");
const project_1 = require("../controller/project");
const auth_1 = require("../middleware/auth");
const route = express_1.Router();
route.get('/', async (req, res) => {
    const articles = await project_1.getProjects();
    res.send(articles);
});
route.post('/', auth_1.authByToken, async (req, res) => {
    try {
        const article = await project_1.createProject(req.body, req.user.email);
        res.status(200).send(article);
    }
    catch (e) {
        res.send(e);
    }
});
exports.projectRoute = route;
