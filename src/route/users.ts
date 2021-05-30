import {Router} from "express";
import { getAllUsers, loginUser, registerUser } from "../controller/users";

const route = Router();

route.get('/', async(req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (e) {
        res.json({
            err: `something went wrong ${e}`
        });
    }
});

route.post('/register', async(req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({
            err: `server err ${e}`
        });
    }
});

route.post('/login', async(req, res) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).send(user); 
    } catch (e) {
        res.json({
            err : e
        })
    }
})

export const userRoute = route;