import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    if (!token)
      return res.status(401).json({ message: "No token, unauthorized" });

    jwt.verify(token, "privateKey", (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      console.log(user);
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { isAuthenticated };
