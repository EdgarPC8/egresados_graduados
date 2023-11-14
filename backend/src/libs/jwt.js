import jwt from "jsonwebtoken";

function createAccessToken({ payload }) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "privateKey",
      { algorithm: "HS256", expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}


export { createAccessToken };
