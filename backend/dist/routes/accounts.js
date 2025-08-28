"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SALT_ROUNDS = 10;
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, firstName, lastName } = req.body;
    try {
        const obfuscatedPassword = yield bcrypt_1.default.hash(password, 10);
        const [result] = yield index_1.pool.query(`INSERT INTO accounts 
        (accountEmail, accountPassword, accountFirstName, accountLastName, accountIsAdmin) 
       VALUES (?, ?, ?, ?, ?)`, [email, obfuscatedPassword, firstName, lastName, false]);
        res.status(201).json({ success: true, insertId: result.insertId });
    }
    catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(400).json({
                success: false,
                error: "Email already exists",
            });
        }
        else {
            res.status(500).json({
                success: false,
                error: "Internal server error",
            });
        }
    }
}));
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const JWT_EXPIRES_IN = "1h"; // adjust as needed
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // 1. Find user
        const [rows] = yield index_1.pool.query("SELECT accountId, accountEmail, accountPassword, accountFirstName, accountLastName, accountIsAdmin FROM accounts WHERE accountEmail = ?", [email]);
        if (rows.length === 0) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }
        const user = rows[0];
        // 2. Compare password
        const passwordMatch = yield bcrypt_1.default.compare(password, user.accountPassword);
        if (!passwordMatch) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }
        // 3. Generate JWT
        const token = jsonwebtoken_1.default.sign({
            sub: user.accountId,
            email: user.accountEmail,
            isAdmin: user.accountIsAdmin,
        }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        // 4. Respond with token and maybe minimal user info
        res.json({
            success: true,
            token,
            user: {
                id: user.accountId,
                email: user.accountEmail,
                firstName: user.accountFirstName,
                lastName: user.accountLastName,
                isAdmin: user.accountIsAdmin,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
exports.default = router;
