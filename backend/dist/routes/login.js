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
// routes/login.ts
const express_1 = __importDefault(require("express"));
const index_1 = require("../index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth_1 = require("../middleware/requireAuth");
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const JWT_SECRET = process.env.JWT_SECRET;
    console.log("login");
    console.log(JWT_SECRET);
    const JWT_EXPIRES_IN = "1h";
    const { email, password } = req.body;
    try {
        // 1. Get user from DB
        const [rows] = yield index_1.pool.query("SELECT accountId, accountEmail, accountPassword, accountFirstName, accountLastName, accountIsAdmin FROM accounts WHERE accountEmail = ?", [email]);
        if (rows.length === 0) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }
        const user = rows[0];
        // 2. Verify password
        const passwordMatch = yield bcrypt_1.default.compare(password, user.accountPassword);
        if (!passwordMatch) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }
        // 3. Create JWT
        const token = jsonwebtoken_1.default.sign({ id: user.accountId, email: user.accountEmail, isAdmin: user.accountIsAdmin }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        // 4. Send JWT in HttpOnly cookie
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 1000 * 60 * 60, // 1 hour
        });
        // 5. Respond with safe user info
        res.json({
            success: true,
            user: {
                id: user.accountId,
                email: user.accountEmail,
                firstName: user.accountFirstName,
                lastName: user.accountLastName,
                isAdmin: user.accountIsAdmin,
            },
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
router.get("/me", requireAuth_1.requireAuth, (req, res) => {
    console.log("hit endpoint");
    console.log("JWT from cookie:", req.cookies.jwt);
    res.json({ user: req.user });
});
exports.default = router;
