"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const users_1 = require("./Models/users");
const allRoutes_1 = require("./route/allRoutes");
const app = express_1.default();
app.use(allRoutes_1.allRoutes);
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send("HLO");
});
async function start() {
    await typeorm_1.createConnection({
        type: "postgres",
        database: "project",
        password: "project",
        username: "project",
        dropSchema: true,
        synchronize: true,
        entities: [users_1.User],
        logging: true,
        logger: 'advanced-console'
    });
    app.listen(PORT, () => console.log(`server is starting on http://localhost:${PORT}`));
}
start();
