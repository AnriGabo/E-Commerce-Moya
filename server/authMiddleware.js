import jwt from "jsonwebtoken";

export default function authenticationToken(req, res, next) {
  const token = req.cookies.access;
  if (!token) return res.status(401).json({ message: "No Token" });

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = { id: payload.sub, email: payload.email };
    return next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: `Token Expired` });
    }
    return res.status(401).json({ message: "Invalid Token" });
  }
}
