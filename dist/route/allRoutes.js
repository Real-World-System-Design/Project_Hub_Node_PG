"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const express_1 = require("express");
const users_1 = require("./users");
const route = express_1.Router();
route.use('/users', users_1.userRoute);
exports.allRoutes = route;
