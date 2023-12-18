import { Professionals } from "../Models/Professionals.js";

export const getAllProfessionals = async (req, res) => {
  const professionals = await Professionals.findAll();
  res.json(professionals);
};

export const addProfessional = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Professionals.create(data);
    res.json({ message: "Agregado con éxito", data: data });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getProfessionalsById = async (req, res) => {
  const id = req.params.userId;
  try {
    const professional = await Professionals.findOne({
      where: {
        id: id,
      },
    });
    res.json(professional);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
