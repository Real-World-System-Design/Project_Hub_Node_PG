import {Router} from "express";
import { getAllUsers } from "../controller/users";

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

export const userRoute = route;