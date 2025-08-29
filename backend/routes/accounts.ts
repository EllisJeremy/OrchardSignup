import express from "express";
import { pool } from "../index";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const [rows]: any = await pool.query(
      "SELECT accountId, accountFirstName, accountLastName FROM accounts"
    );

    res.json(rows);
  } catch (err) {
    console.error("Fetch accounts error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
