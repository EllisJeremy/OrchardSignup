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
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const pool = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: process.env.mySQLPassword,
    database: "orchard",
});
app.get("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const year = req.query.year;
        const month = req.query.month;
        const start = `${year}-${month}-01`;
        const endDate = new Date(Number(year), Number(month), 0);
        const end = endDate.toISOString().split("T")[0];
        const [rows] = yield pool.query("SELECT * FROM tasks WHERE taskDate BETWEEN ? AND ? ORDER BY taskDate, taskStartTime", [start, end]);
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
