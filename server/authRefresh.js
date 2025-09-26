import jwt from "jsonwebtoken";

app.post("/auth/refresh", (req, res) => {
  const refreshToken = req.cookies.refresh;
  if (!refreshToken) {
    return res.status(401).json({ message: `No Refresh Token` });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, {
      algorithms: ["HS256"],
      issuer: "MOYA",
    });

    const newAccess = jwt.sign(
      { sub: payload.sub, email: payload.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "13m", algorithm: "HS256", issuer: "MOYA" }
    );

    res.cookie("newAccess", newAccess, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 13 * 60 * 1000,
    });
    
    return res.json({ message: "Refreshed" });
  } catch {
    return res.status(401).json({ message: `Invalid Refresh Token` });
  }
});
