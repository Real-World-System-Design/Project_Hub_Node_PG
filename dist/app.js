"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const projects_1 = require("./Models/projects");
const users_1 = require("./Models/users");
const cors_1 = __importDefault(require("cors"));
const morgan = require('morgan');
const log = require('./config/winston');
const allRoutes_1 = require("./route/allRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(morgan("combined", { "stream": log.stream }));
app.use(allRoutes_1.allRoutes);
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;
//app.get('/', (req, res) => {
//    res.send("HLO");
//});
app.get('/', function (req, res) {
    throw new Error('error thrown navigating to');
});
app.use(function (err, req, res, next) {
    log.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
    next(err);
});
async function start() {
    await (0, typeorm_1.createConnection)({
        type: "postgres",
        ssl: true,
        extra: {
            ssl: {
                "rejectUnauthorized": false
            }
        },
        url: DB_URL,
        dropSchema: false,
        synchronize: true,
        entities: [users_1.User, projects_1.Project],
        logging: true,
        logger: 'advanced-console'
    });
    app.listen(PORT, () => console.log(`server is starting on http://localhost:${PORT}`));
}
start();
