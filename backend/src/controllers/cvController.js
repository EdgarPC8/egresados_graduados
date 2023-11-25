import { 
  Professional_experience,
  Languages,
  Books,
  Academic_professional_merits ,
  Academic_training,
Teaching_experience,
Courses_workshops,
Intellectual_production,
} from "../Models/CV.js";

const addProfessionalExp= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Professional_experience.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

  res.json({ message: "Agregado con éxito" });
};



export {addProfessionalExp};
