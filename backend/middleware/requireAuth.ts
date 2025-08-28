import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function requireAuth(req, res, next) {
  console.log("here we are");
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ error: "Not logged in" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { sub, email, isAdmin, iat, exp }
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
