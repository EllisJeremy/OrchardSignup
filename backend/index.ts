import express, { Express, Request, Response } from "express";
const port = 3000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello not ts yet");
});

app.listen(port, () => {
  console.log("this string  matter");
});
