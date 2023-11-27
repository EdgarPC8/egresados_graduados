// import { searchUser } from "../database/connection.js";
import { sequelize } from "../database/connection.js";
import { Users } from "../Models/Users.js";
import bycrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

// Función para agregar un usuario a la base de datos
async function agregarUsuario(email, password, rol) {
  try {
    // Crear un nuevo registro en la tabla Users
    const nuevoUsuario = await Users.create({
      email: email,
      password: password,
      rol: rol,
    });

    // Acción después de la creación exitosa del usuario
    console.log("Usuario creado:", nuevoUsuario.toJSON());
    return nuevoUsuario;
  } catch (error) {
    // Manejo de errores si ocurre algún problema durante la creación del usuario
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}

// Llamar a la función para agregar un usuario
// agregarUsuario("admin", "contraseña", 1);

const login = async (req, res) => {
  const { email, password } = req.body;
  //Verificar si existe

  // console.log(user);
  try {
    const user = await Users.findOne({ where: { email } });
    

    // const passgenerate = await bycrypt.hash("admin", 10);
    // console.log(passgenerate);

    if (!user) {
      return res.status(400).json({ message: "Datos incorrectos" });
    }

    const isCorrectPassword = await bycrypt.compare(
      password,
      user.password
    );
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
    console.log(error);
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
