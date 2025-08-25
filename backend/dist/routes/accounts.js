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
const SALT_ROUNDS = 10;
router.get("/by-email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const [rows] = yield index_1.pool.query("SELECT * FROM accounts WHERE MATCH(?)", [email]);
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = req.body;
    const obfuscatedPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
    try {
        const [result] = yield index_1.pool.query(`INSERT INTO accounts 
        (accountEmail, accountPassword, accountName) 
       VALUES (?, ?, ?)`, [email, obfuscatedPassword, name]);
        res.status(201).json({ success: true, insertId: result.insertId });
    }
    catch (error) {
        console.error("Insert error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
exports.default = router;
