// routes/login.ts
import express from "express";
import { pool } from "../index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const JWT_EXPIRES_IN = "1h";

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Get user from DB
    const [rows]: any = await pool.query(
      "SELECT accountId, accountEmail, accountPassword, accountFirstName, accountLastName, accountIsAdmin FROM accounts WHERE accountEmail = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }

    const user = rows[0];

    // 2. Verify password
    const passwordMatch = await bcrypt.compare(password, user.accountPassword);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }

    // 3. Create JWT
    const token = jwt.sign(
      { sub: user.accountId, email: user.accountEmail, isAdmin: user.accountIsAdmin },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

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
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
