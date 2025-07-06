import express, { Express, Request, Response } from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
];

// get all posts
router.get("/json", (req: Request, res: Response) => {
  res.json(posts);
});

// get 1 post
router.get("/json/:id", (req: Request, res: Response) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

export default router;
