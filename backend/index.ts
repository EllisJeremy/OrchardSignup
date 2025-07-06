import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
];

app.get("/json", (req: Request, res: Response) => {
  res.json(posts);
});

// start server
app.listen(port, () => {
  console.log("starting server...");
  console.log(`running on ${port}`);
});
