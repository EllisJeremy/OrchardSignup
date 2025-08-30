import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  // env access MUST run inside functions to prevent them from loading before index.ts
  const JWT_SECRET = process.env.JWT_SECRET!;
  const token = req.cookies.jwt;

  if (!token) return;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, email, isAdmin, iat, exp }
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
