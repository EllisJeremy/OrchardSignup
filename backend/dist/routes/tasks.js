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
const requireAuth_1 = require("../middleware/requireAuth");
const sendEmail_1 = require("../email/sendEmail");
const emailFormatter_1 = __importDefault(require("../email/emailFormatter"));
router.get("/by-month", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const year = req.query.year;
        const month = req.query.month;
        const start = `${year}-${month}-01`;
        const endDate = new Date(Number(year), Number(month), 0);
        const end = endDate.toISOString().split("T")[0];
        const [rows] = yield index_1.pool.query(`SELECT 
      t.taskId,
      t.taskDate,
      t.taskTitle,
      t.taskStartTime,
      t.taskEndTime,
      t.taskDescription,
      t.taskColor,
      t.taskType,
      t.taskRepeat,
      a.accountId AS ownerId,
      CONCAT(a.accountFirstName, ' ', a.accountLastName) AS ownerName,
      a.accountEmail AS ownerEmail
   FROM tasks t
   LEFT JOIN accounts a ON t.taskOwnerId = a.accountId
   WHERE t.taskDate BETWEEN ? AND ?
   ORDER BY t.taskDate, t.taskStartTime`, [start, end]);
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
}));
router.delete("/:taskId", requireAuth_1.requireAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: "Forbidden" });
    }
    const { taskId } = req.params;
    try {
        const [result] = yield index_1.pool.query("DELETE FROM tasks WHERE taskId = ?", [taskId]);
        res.sendStatus(204);
    }
    catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
router.post("/", requireAuth_1.requireAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: "Forbidden" });
    }
    const { taskDate, taskTitle, taskStartTime, taskDescription, taskColor, taskOwner, // accountId of assigned owner (can be null)
    taskType, taskRepeat, } = req.body;
    try {
        // 1. Insert task
        const [result] = yield index_1.pool.query(`INSERT INTO tasks 
        (taskDate, taskTitle, taskStartTime, taskDescription, taskColor, taskOwnerId, taskType, taskRepeat) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [
            taskDate,
            taskTitle,
            taskStartTime,
            taskDescription,
            taskColor,
            taskOwner,
            taskType,
            taskRepeat,
        ]);
        const insertId = result.insertId;
        // 2. If a taskOwner was assigned, fetch their info and email them
        if (taskOwner) {
            const [accounts] = yield index_1.pool.query(`SELECT accountFirstName, accountEmail 
         FROM accounts
         WHERE accountId = ?`, [taskOwner]);
            const owner = accounts[0];
            if (owner) {
                try {
                    const { text, html } = (0, emailFormatter_1.default)(owner.accountFirstName, taskTitle, taskDescription, taskDate, taskStartTime);
                    (0, sendEmail_1.sendEmail)(owner.accountEmail, "New Task Assigned to You", text, html).catch((err) => console.error("Email error:", err));
                }
                catch (err) {
                    console.error(" Failed to send assignment email:", err);
                }
            }
        }
        // 3. Respond
        res.status(201).json({ success: true, insertId });
    }
    catch (error) {
        console.error("Insert error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
router.patch("/:taskId/join", requireAuth_1.requireAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return res.status(403).json({ error: "Forbidden" });
    }
    const { taskId } = req.params;
    try {
        const [result] = yield index_1.pool.query(`UPDATE tasks 
       SET taskOwnerId = ? 
       WHERE taskId = ?`, [req.user.id, taskId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        const [tasks] = yield index_1.pool.query(`SELECT taskTitle, taskDescription, taskDate, taskStartTime, taskEndTime
       FROM tasks
       WHERE taskId = ?`, [taskId]);
        const task = tasks[0];
        try {
            const { text, html } = (0, emailFormatter_1.default)(req.user.firstName, task.taskTitle, task.taskDescription, task.taskDate, task.taskStartTime);
            (0, sendEmail_1.sendEmail)(req.user.email, "New Task Assigned to You", text, html).catch((err) => console.error("Email error:", err));
        }
        catch (err) {
            console.error("Failed to send signup email:", err);
        }
        res.status(200).json({ success: true, task });
    }
    catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
router.patch("/:taskId/drop", requireAuth_1.requireAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskId } = req.params;
    try {
        const [rows] = yield index_1.pool.query("SELECT taskOwnerId FROM tasks WHERE taskId = ?", [
            taskId,
        ]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        const currentOwnerId = rows[0].taskOwnerId;
        if (currentOwnerId !== req.user.id) {
            return res.status(403).json({ error: "Forbidden" });
        }
        const [result] = yield index_1.pool.query("UPDATE tasks SET taskOwnerId = NULL WHERE taskId = ?", [
            taskId,
        ]);
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.error("Drop task error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
exports.default = router;
