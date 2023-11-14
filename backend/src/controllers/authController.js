import { searchUser } from "../database/connection.js";
import bycrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email, password } = req.body;
  //Verificar si existe

  // console.log(user);
  try {
    const user = await searchUser({ email });

    // const passgenerate = await bycrypt.hash("admin", 10);
    // console.log(passgenerate);

    const isCorrectPassword = await bycrypt.compare(
      password,
      user.user_password
    );

    if (!user) {
      return res.status(400).json({ message: "Datos incorrectos" });
    }

    if (!isCorrectPassword) {
      return res.status(400).json({ message: "Datos incorrectos" });
    }

    const payload = {
      userId: user.id_user,
      userEmail: user.email,
    };

    //Crear token JWT
    const token = await createAccessToken({ payload });

    res.json({ message: "User auth", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifytoken = (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "privateKey");
    res.json(decoded);

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }

};

export { login, verifytoken };