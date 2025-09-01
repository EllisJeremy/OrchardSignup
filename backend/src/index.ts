import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import cookieParser from "cookie-parser";

import tasksRoute from "./routes/tasks";
import signupRoute from "./routes/signup";
import loginRoute from "./routes/login";
import accountsRoute from "./routes/accounts";

const port = process.env.PORT || 8080;

const app = express();
const allowedOrigins = ["http://localhost:5173", "https://beyondsunday.org"];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow REST tools like Postman (no origin header)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ----- MIDDLEWARE -----
app.use(express.json());
app.use(cookieParser());

// Allow frontend at :5173 to talk to backend at :8080
app.get("/", (req, res) => {
  res.send("Orchard backend is running!");
});

app.get("/env", (req, res) => {
  res.send(
    `${process.env.DB_HOST} ${process.env.DB_USER} ${process.env.DB_PASS} ${process.env.DB_NAME}`
  );
});

// ----- DATABASE -----
export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "orchard",
});

app.get("/health/db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    res.json({ status: "ok", dbTime: rows[0].now });
  } catch (err: any) {
    console.error("DB connection failed:", err.message);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// ----- ROUTES -----
app.use("/tasks", tasksRoute);
app.use("/accounts", signupRoute);
app.use("/accounts", loginRoute);
app.use("/accounts", accountsRoute);

// ----- START -----
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
