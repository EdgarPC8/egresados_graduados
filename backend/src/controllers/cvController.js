import { where } from "sequelize";
import {
  AcademicTraining,
  TeachingExperience,
  CoursesWorkshops,
  IntellectualProduction,
  Books,
  AcademicProfessionalMerits,
  Languages,
  ProfessionalExperience,
} from "../Models/CV.js";

export const addProfessionalExperience = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await ProfessionalExperience.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};
export const editProfessionalExperience = async (req, res) => {
  const newData = req.body;
  try {
    const updatedProfessionalExperience = await ProfessionalExperience.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.experienceId // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteProfessionalExperience = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const updatedProfessionalExperience = await ProfessionalExperience.destroy({
      where: {
        id: taskId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllProfessionalExperience = async (req, res) => {
  const professionals = await ProfessionalExperience.findAll();
  res.json(professionals);
};

export const addLanguages = async (req, res) => {
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
export const editLanguages = async (req, res) => {
  const newData = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const updatedLanguages = await Languages.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.idLanguages // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteLanguages = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const updatedLanguages = await Languages.destroy({
      where: {
        id: taskId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllLanguages = async (req, res) => {
  const professionals = await Languages.findAll();
  res.json(professionals);
};

export const addAcademicProfessionalMerits = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await AcademicProfessionalMerits.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};
export const editAcademicProfessionalMerits = async (req, res) => {
  const newData = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const updatedAcademicProfessionalMerits =
      await AcademicProfessionalMerits.update(
        newData, // Aquí defines los campos y sus nuevos valores a actualizar
        req.params.meritId // Aquí estableces la condición para la actualización
      );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteAcademicProfessionalMerits = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const updatedAcademicProfessionalMerits =
      await AcademicProfessionalMerits.destroy({
        where: {
          id: taskId,
        },
      });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllAcademicProfessionalMerits = async (req, res) => {
  const professionals = await AcademicProfessionalMerits.findAll();
  res.json(professionals);
};

export const addAcademicTraining = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await AcademicTraining.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};
export const editAcademicTraining = async (req, res) => {
  const newData = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const updatedAcademicTraining = await AcademicTraining.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.academicId // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteAcademicTraining = async (req, res) => {
  try {
    const updatedAcademicTraining = await AcademicTraining.destroy({
      where: {
        id: req.params.academicId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllAcademicTraining = async (req, res) => {
  const professionals = await AcademicTraining.findAll();
  res.json(professionals);
};

export const addTeachingExperience = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await TeachingExperience.create(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json({ message: "Agregado con éxito" });
};
export const editTeachingExperience = async (req, res) => {
  const newData = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const updatedTeachingExperience = await TeachingExperience.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.teachingId // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteTeachingExperience = async (req, res) => {
  const teachingId = req.params.teachingId;
  try {
    const updatedTeachingExperience = await TeachingExperience.destroy({
      where: {
        id: teachingId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllTeachingExperience = async (req, res) => {
  const professionals = await TeachingExperience.findAll();
  res.json(professionals);
};

export const addCoursesWorkshops = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await CoursesWorkshops.create(data);
    res.json({ message: "Agregado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const editCoursesWorkshops = async (req, res) => {
  const newData = req.body;
  try {
    const updatedCoursesWorkshops = await CoursesWorkshops.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.courseId // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteCoursesWorkshops = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const updatedCoursesWorkshops = await CoursesWorkshops.destroy({
      where: {
        id: courseId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllCoursesWorkshops = async (req, res) => {
  const professionals = await CoursesWorkshops.findAll();
  res.json(professionals);
};

export const addIntellectualProduction = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await IntellectualProduction.create(data);
    res.json({ message: "Agregado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const editIntellectualProduction = async (req, res) => {
  const newData = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const updatedIntellectualProduction = await IntellectualProduction.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.intellectualId // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteIntellectualProduction = async (req, res) => {
  const intellectualId = req.params.intellectualId;
  try {
    const updatedIntellectualProduction = await IntellectualProduction.destroy({
      where: {
        id: intellectualId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllIntellectualProduction = async (req, res) => {
  const professionals = await IntellectualProduction.findAll();
  res.json(professionals);
};

export const addBooks = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Books.create(data);
    res.json({ message: "Agregado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const editBooks = async (req, res) => {
  const newData = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const updatedBooks = await Books.update(
      newData, // Aquí defines los campos y sus nuevos valores a actualizar
      req.params.bookId // Aquí estableces la condición para la actualización
    );
    res.json({ message: "Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteBooks = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const updatedBooks = await Books.destroy({
      where: {
        id: taskId,
      },
    });
    res.json({ message: "Eliminado con Exito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllBooks = async (req, res) => {
  const professionals = await Books.findAll();
  res.json(professionals);
};
