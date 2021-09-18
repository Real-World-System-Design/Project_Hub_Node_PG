require('dotenv').config()
import express from 'express';
import {createConnection} from 'typeorm';
import { Project } from './Models/projects';
import { User } from './Models/users';
import cors from 'cors';
const morgan = require('morgan');
const log = require('./config/winston');
import {allRoutes} from "./route/allRoutes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined", { "stream": log.stream }));
app.use(allRoutes);

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

//app.get('/', (req, res) => {
//    res.send("HLO");
//});

app.get('/', function(req, res) {
    throw new Error('error thrown navigating to');
});
app.use(function(err: any, req: any, res: any, next: any) {
  log.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
  next(err)
})  

async function start() {
    await createConnection({
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
        entities: [User, Project],
        logging: true,
        logger: 'advanced-console'
    })
    app.listen(PORT, () => console.log(`server is starting on http://localhost:${PORT}`))
}

start();
