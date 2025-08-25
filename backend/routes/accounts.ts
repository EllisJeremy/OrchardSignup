import express from "express";
const router = express.Router();
import { pool } from "../index";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

router.get("/by-email", async (req, res) => {
  try {
    const email = req.query.email as string;

    const [rows] = await pool.query("SELECT * FROM accounts WHERE MATCH(?)", [email]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.post("/", async (req, res) => {
  const { email, password, name } = req.body;
  const obfuscatedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  try {
    const [result] = await pool.query(
      `INSERT INTO accounts 
        (accountEmail, accountPassword, accountName) 
       VALUES (?, ?, ?)`,
      [email, obfuscatedPassword, name]
    );

    res.status(201).json({ success: true, insertId: (result as any).insertId });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
