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
exports.pool = void 0;
const express_1 = __importDefault(require("express"));
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const signup_1 = __importDefault(require("./routes/signup"));
const login_1 = __importDefault(require("./routes/login"));
const accounts_1 = __importDefault(require("./routes/accounts"));
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
// ----- MIDDLEWARE -----
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Allow frontend at :5173 to talk to backend at :8080
app.get("/", (req, res) => {
    res.send("Orchard backend is running!");
});
app.get("/env", (req, res) => {
    res.send(`${process.env.DB_HOST} ${process.env.DB_USER} ${process.env.DB_PASS} ${process.env.DB_NAME}`);
});
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
// ----- DATABASE -----
exports.pool = promise_1.default.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || "orchard",
});
app.get("/health/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield exports.pool.query("SELECT NOW() AS now");
        res.json({ status: "ok", dbTime: rows[0].now });
    }
    catch (err) {
        console.error("DB connection failed:", err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
}));
// ----- ROUTES -----
app.use("/tasks", tasks_1.default);
app.use("/accounts", signup_1.default);
app.use("/accounts", login_1.default);
app.use("/accounts", accounts_1.default);
// ----- START -----
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
