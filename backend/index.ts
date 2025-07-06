import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import posts from "./routes/posts";
const port = process.env.PORT || 8000;

const app = express();

// Routes
app.use(posts);

// start server
app.listen(port, () => {
  console.log("starting server...");
  console.log(`running on ${port}`);
});
