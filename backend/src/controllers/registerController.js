import { Roles } from "../Models/Roles.js";
import { Users } from "../Models/Users.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

export const registerUser = async (req, res) => {
  try {
    const {
      ci,
      username,
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      password,
    } = req.body;

    const passgenerate = await bycrypt.hash(password, 10);

    const photo = req.file ? req.file.filename : null;

    const newUser = await Users.create({
      ci,
      username,
      firstName,
      secondName,
      firstLastName,
      password: passgenerate,
      secondLastName,
      photo,
    });

    res.json({ message: "usuario agregado con éxito" });
  } catch (error) {
    // manejo de errores si ocurre algún problema durante la creación del usuario
    console.error("error al crear el usuario:", error);
  }
};


