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

  try {
    const obfuscatedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      `INSERT INTO accounts 
        (accountEmail, accountPassword, accountName, accountIsAdmin) 
       VALUES (?, ?, ?, ?)`,
      [email, obfuscatedPassword, name, false]
    );

    res.status(201).json({ success: true, insertId: (result as any).insertId });
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({
        success: false,
        error: "Email already exists",
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  }
});

export default router;
