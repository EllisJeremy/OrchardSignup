import express from "express";
const router = express.Router();
import { pool } from "../index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const JWT_EXPIRES_IN = "1h"; // adjust as needed

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user
    const [rows]: any = await pool.query(
      "SELECT accountId, accountEmail, accountPassword, accountFirstName, accountLastName, accountIsAdmin FROM accounts WHERE accountEmail = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }

    const user = rows[0];

    // 2. Compare password
    const passwordMatch = await bcrypt.compare(password, user.accountPassword);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      {
        sub: user.accountId,
        email: user.accountEmail,
        isAdmin: user.accountIsAdmin,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // 4. Respond with token and maybe minimal user info
    res.json({
      success: true,
      token,
      user: {
        id: user.accountId,
        email: user.accountEmail,
        firstName: user.accountFirstName,
        lastName: user.accountLastName,
        isAdmin: user.accountIsAdmin,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
