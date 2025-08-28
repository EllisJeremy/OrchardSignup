import express from "express";
const router = express.Router();
import { pool } from "../index";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

router.post("/", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const obfuscatedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      `INSERT INTO accounts 
        (accountEmail, accountPassword, accountFirstName, accountLastName, accountIsAdmin) 
       VALUES (?, ?, ?, ?, ?)`,
      [email, obfuscatedPassword, firstName, lastName, false]
    );

    return res.status(201).json({ success: true });
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
