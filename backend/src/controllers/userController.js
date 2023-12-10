import { Roles } from "../Models/Roles.js";
import { Users } from "../Models/Users.js";

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

export { addUser, getRoles, getOneUser, updateDataUser };
