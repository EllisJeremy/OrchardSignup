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
router.get("/by-month", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const year = req.query.year;
        const month = req.query.month;
        const start = `${year}-${month}-01`;
        const endDate = new Date(Number(year), Number(month), 0);
        const end = endDate.toISOString().split("T")[0];
        const [rows] = yield index_1.pool.query("SELECT * FROM tasks WHERE taskDate BETWEEN ? AND ? ORDER BY taskDate, taskStartTime", [start, end]);
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
}));
exports.default = router;
