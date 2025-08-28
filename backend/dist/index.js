"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const express_1 = __importDefault(require("express"));
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const signup_1 = __importDefault(require("./routes/signup"));
dotenv_1.default.config();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
exports.pool = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: process.env.mySQLPassword,
    database: "orchard",
});
app.use("/tasks", tasks_1.default);
app.use("/accounts", signup_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
