import {Router} from "express";
import { projectRoute } from "./projects";
import {userRoute} from "./users";
const route = Router();

route.use('/users', userRoute);
route.use('/projects', projectRoute);

export const allRoutes = route;
