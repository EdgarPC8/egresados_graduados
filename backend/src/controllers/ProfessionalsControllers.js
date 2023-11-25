import { Professionals } from "../Models/Professionals.js";

const getAllProfessionals = async (req, res) => {
  const professionals = await Professionals.findAll();
  res.json(professionals);
};

const addProfessional = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Professionals.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

  res.json({ message: "Agregado con éxito" });
};





export { getAllProfessionals, addProfessional };
