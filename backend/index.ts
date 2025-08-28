import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import tasksRoute from "./routes/tasks";
import signupRoute from "./routes/signup";
import loginRoute from "./routes/login";

dotenv.config();
const port = process.env.PORT;

const app = express();

// ----- MIDDLEWARE -----
app.use(express.json());
app.use(cookieParser());

// Allow frontend at :5173 to talk to backend at :8080
app.use(
  cors({
    origin: "http://localhost:5173", // must be exact, not "*"
    credentials: true, // allow cookies
  })
);

// ----- DATABASE -----
export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.mySQLPassword, // from .env
  database: process.env.DB_NAME || "orchard",
});

// ----- ROUTES -----
app.use("/tasks", tasksRoute);
app.use("/accounts", signupRoute);
app.use("/login", loginRoute);
// optional: logout route here too

// ----- START -----
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
