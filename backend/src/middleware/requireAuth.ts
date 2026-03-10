import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  // env access MUST run inside functions to prevent them from loading before index.ts
  const JWT_SECRET = process.env.JWT_SECRET!;
  const token = req.cookies.jwt;

  if (!token) return;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as Express.Request["user"];
    req.user = decoded; // { id, email, isAdmin, iat, exp }
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
