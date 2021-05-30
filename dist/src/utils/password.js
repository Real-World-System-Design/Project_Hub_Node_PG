"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchpass = exports.hashPass = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
async function hashPass(password) {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.hash(password, saltRounds, (err, hashedPass) => {
            if (err)
                throw reject(err);
            resolve(hashedPass);
        });
    });
}
exports.hashPass = hashPass;
async function matchpass(pass, hashedPass) {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(pass, hashedPass, (err, same) => {
            if (err)
                throw reject(err);
            return resolve(same);
        });
    });
}
exports.matchpass = matchpass;
