import { where } from "sequelize";
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


const addAcademic_training= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Academic_training.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};

const editAcademic_training= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    // const newProfessional = await Academic_training.update({place:"Chile",where:{id:1}});
    const updatedAcademicTraining = await Academic_training.update(
      data.columns, // Aquí defines los campos y sus nuevos valores a actualizar
      data.where // Aquí estableces la condición para la actualización
      );
      res.json({ message: "Editado con éxito"  });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllAcademic_training = async (req, res) => {
  const professionals = await Academic_training.findAll();
  res.json(professionals);
};

const addTeaching_experience= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Teaching_experience.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};

const getAllTeaching_experience = async (req, res) => {
  const professionals = await Teaching_experience.findAll();
  res.json(professionals);
};

const addCourses_workshops= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Courses_workshops.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};

const getAllCourses_workshops = async (req, res) => {
  const professionals = await Courses_workshops.findAll();
  res.json(professionals);
};
const addIntellectual_production= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Intellectual_production.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};

const getAllIntellectual_production = async (req, res) => {
  const professionals = await Intellectual_production.findAll();
  res.json(professionals);
};
const addBooks= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Books.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};
const getAllBooks = async (req, res) => {
  const professionals = await Books.findAll();
  res.json(professionals);
};
const addAcademic_professional_merits= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Academic_professional_merits.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};

const getAllAcademic_professional_merits = async (req, res) => {
  const professionals = await Academic_professional_merits.findAll();
  res.json(professionals);
};
const addLanguages= async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Languages.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};
const getAllLanguages = async (req, res) => {
  const professionals = await Languages.findAll();
  res.json(professionals);
};
const addProfessional_experience= async (req, res) => {
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

const getAllProfessional_experience = async (req, res) => {
  const professionals = await Professional_experience.findAll();
  res.json(professionals);
};



export {addAcademic_training,getAllAcademic_training,editAcademic_training,
  addTeaching_experience,getAllTeaching_experience,
  addCourses_workshops,getAllCourses_workshops,
  addIntellectual_production,getAllIntellectual_production,
  addBooks,getAllBooks,
  addAcademic_professional_merits,getAllAcademic_professional_merits,
  addLanguages,getAllLanguages,
  addProfessional_experience,getAllProfessional_experience,
};
