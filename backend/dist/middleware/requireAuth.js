"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function requireAuth(req, res, next) {
    // env access MUST run inside functions to prevent them from loading before index.ts
    const JWT_SECRET = process.env.JWT_SECRET;
    console.log(JWT_SECRET);
    //console.log("here we are");
    const token = req.cookies.jwt;
    //console.log(token);
    if (!token)
        return res.status(401).json({ error: "Not logged in" });
    try {
        console.log(token);
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        console.log("after decode");
        req.user = decoded; // { sub, email, isAdmin, iat, exp }
        next();
    }
    catch (_a) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}
