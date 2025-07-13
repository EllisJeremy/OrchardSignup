import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";
import tasksRoute from "./routes/tasks";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.mySQLPassword,
  database: "orchard",
});

app.use("/tasks", tasksRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
