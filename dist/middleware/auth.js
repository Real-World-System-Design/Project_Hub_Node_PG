"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authByToken = void 0;
const jwt_1 = require("../utils/jwt");
async function authByToken(req, res, next) {
    var _a;
    const authHeader = (_a = req.header("authorization")) === null || _a === void 0 ? void 0 : _a.split(' ');
    if (!authHeader)
        return res.status(401).send("authorization failed");
    if (authHeader[0] != 'Token')
        return res.status(401).send("Token missing");
    try {
        const token = authHeader[1];
        const user = await jwt_1.decode(token);
        if (!user)
            throw new Error("No User found");
        req.user = user;
        return next();
    }
    catch (e) {
        res.send(e);
    }
}
exports.authByToken = authByToken;
