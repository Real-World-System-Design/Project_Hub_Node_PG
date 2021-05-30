"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.sign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = "veryverysecret";
async function sign(user) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({
            username: user.username,
            email: user.email
        }, secret, (err, signed) => {
            if (err)
                throw reject(err);
            resolve(signed);
        });
    });
}
exports.sign = sign;
;
async function decode(token) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err)
                throw reject(err);
            resolve(decoded);
        });
    });
}
exports.decode = decode;
;
