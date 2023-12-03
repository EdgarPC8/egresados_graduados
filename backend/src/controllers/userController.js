import { Roles } from "../Models/Roles.js";

const addUser = async (req, res) => {
  try {
    const { email, password, rol } = req.body;
    // crear un nuevo registro en la tabla users
    const nuevousuario = await users.create({
      email,
      password,
      rol,
    });

    res.json({ message: "usuario agregado con éxito" });

    // // acción después de la creación exitosa del usuario
    // console.log("usuario creado:", nuevousuario.tojson());
    // return nuevousuario;
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

export { addUser, getRoles };
