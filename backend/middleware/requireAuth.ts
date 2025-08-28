import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  // env access MUST run inside functions to prevent them from loading before index.ts
  const JWT_SECRET = process.env.JWT_SECRET!;
  const token = req.cookies.jwt;

  if (!token) return;

  try {
    console.log(token);
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("after decode");
    req.user = decoded; // { id, email, isAdmin, iat, exp }
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
