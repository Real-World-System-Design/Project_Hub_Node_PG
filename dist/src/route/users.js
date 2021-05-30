"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const users_1 = require("../controller/users");
const route = express_1.Router();
route.get('/', async (req, res) => {
    try {
        const users = await users_1.getAllUsers();
        res.status(200).send(users);
    }
    catch (e) {
        res.json({
            err: `something went wrong ${e}`
        });
    }
});
route.post('/register', async (req, res) => {
    try {
        const user = await users_1.registerUser(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send({
            err: `server err ${e}`
        });
    }
});
route.post('/login', async (req, res) => {
    try {
        const user = await users_1.loginUser(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.json({
            err: e
        });
    }
});
exports.userRoute = route;
