import { Roles } from "../Models/Roles.js";
import { Users } from "../Models/Users.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const addUser = async (req, res) => {
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

const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await Users.findOne({
      attributes: [
        "userId",
        "firstName",
        "secondName",
        "ci",
        "firstLastName",
        "secondLastName",
        "photo",
      ],
      where: { userId },
      include: [
        {
          model: Roles,
          attributes: ["rol"],
        },
      ],
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateDataUser = async (req, res) => {
  const { ci, firstName, secondName, firstLastName, secondLastName } = req.body;

  try {
    const userUpdate = await Users.update(
      {
        ci,
        firstName,
        secondName,
        firstLastName,
        secondLastName,
      },
      {
        where: {
          userId: req.params.userId,
        },
      }
    );

    res.json(userUpdate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await Users.findOne({
      attributes: ["password"],
      where: { userId: req.params.userId },
    });

    const isCorrectPassword = await bycrypt.compare(
      currentPassword,
      user.password
    );

    if (!isCorrectPassword) {
      throw new Error("La contraseña actual proporcianda no es válida");
    }

    const passgenerate = await bycrypt.hash(newPassword, 10);

    const newPass = await Users.update(
      { password: passgenerate },
      { where: { userId: req.params.userId } }
    );
    res.json({ message: "Contraseña actualizada con éxito" });
  } catch (e) {
    return res.status(400).json({
      error: "Bad Request",
      message: e.message,
    });
  }
};

const getUsers = async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  const decoded = jwt.verify(token, "privateKey");
  console.log(decoded);

  try {
    const users = await Users.findAll({
      attributes: [
        "userId",
        "username",
        "ci",
        "firstName",
        "secondName",
        "firstLastName",
        "secondLastName",
        "photo",
      ],
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const removingUser = await Users.destroy({
      where: {
        userId: req.params.userId,
      },
    });

    res.json({ message: "Usuario eleminado con éxito" });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export {
  addUser,
  getRoles,
  getOneUser,
  updateDataUser,
  changePassword,
  deleteUser,
  getUsers,
};
