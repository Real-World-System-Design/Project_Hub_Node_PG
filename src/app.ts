import express from 'express';
import {createConnection} from 'typeorm';
import { User } from './Models/users';
import {allRoutes} from "./route/allRoutes";

const app = express();
app.use(express.json());
app.use(allRoutes);

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("HLO");
});

async function start() {
    await createConnection({
        type: "postgres",
        database: "project",
        password: "project",
        username: "project",
        dropSchema: true,
        synchronize: true,
        entities: [User],
        logging: true,
        logger: 'advanced-console'
    })
    app.listen(PORT, () => console.log(`server is starting on http://localhost:${PORT}`))
}

start();