"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const winston = require('winston');
// creates a new Winston Logger
const logger = new winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    ],
    exitOnError: false
});
exports.log = logger;
