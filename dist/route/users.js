"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const users_1 = require("../controller/users");
const route = (0, express_1.Router)();
route.get('/', async (req, res) => {
    try {
        const users = await (0, users_1.getAllUsers)();
        res.status(200).send(users);
    }
    catch (e) {
        res.json({
            err: `could not get all users ${e}`
        });
    }
});
route.post('/register', async (req, res) => {
    try {
        const user = await (0, users_1.registerUser)(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send({
            err: `user registration failed ${e}`
        });
    }
});
route.post('/login', async (req, res) => {
    try {
        const user = await (0, users_1.loginUser)(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(`error while login ${e}`);
    }
});
exports.userRoute = route;
