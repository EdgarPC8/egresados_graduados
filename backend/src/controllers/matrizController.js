import {
  Matriz,
  Carreers,
  Periods,
  MatrizQuiz,
} from "../Models/Matriz.js";

import {
  Professionals,
} from "../Models/Professionals.js";

export const getAllMatriz = async (req, res) => {
  try {
    const matriz = await Matriz.findAll({
      attributes: ['id','grateDate', 'modality'],
      include: [
        { model: Professionals, attributes: ['firstName', 'secondName', 'firstLastName', 'secondLastName','ci'] },
        { model: Carreers, attributes: ['name'] },
        { model: Periods, attributes: ['name'] },
      ],
    });

    res.json(matriz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al obtener los datos de la matriz.' });
  }
};
export const getAllCareers = async (req, res) => {
  const professionals = await Carreers.findAll();
  res.json(professionals);
};
export const getAllPeriods = async (req, res) => {
  const professionals = await Periods.findAll();
  res.json(professionals);
};
export const addMatriz = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Matriz.create(data);
    res.json({ message: `Agregado con éxito` });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const addMatrizQuiz = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await MatrizQuiz.create(data);
    res.json({ message: `Agregado con éxito` });
    // res.json({ message: data });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const addCareer = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Carreers.create(data);
    res.json({ message: `Agregado con éxito` });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const addPeriod = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newProfessional = await Periods.create(data);
    res.json({ message: `Periodo Agregado con éxito` });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteMatriz = async (req, res) => {
  try {
    const removingUser = await Matriz.destroy({
      where: {
        id: req.params.matrizId,
      },
    });
    res.json({ message: "Eliminado con éxito" });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const editCareer = async (req, res) => {
  const data = req.body;
  const carrer=req.params;
  try {
    const editProfessional = await Carreers.update(data, {
      where: {
        idCarreer: carrer.careerId,
      },
    });
    res.json({ message: "Carrera Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const editPeriod = async (req, res) => {
  const data = req.body;
  const carrer=req.params;
  try {
    const editProfessional = await Periods.update(data, {
      where: {
        id: carrer.periodId,
      },
    });
    res.json({ message: "Periodo Editado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getMatrizFilter= async (req, res) => {
  const data = req.body; 
  try {
    const professional = await Matriz.findAll(
      {
        attributes: ['id','grateDate', 'modality'],
      include: [
        { model: Professionals, attributes: ['firstName', 'secondName', 'firstLastName', 'secondLastName','ci'] },
        { model: Carreers, attributes: ['name'] },
        { model: Periods, attributes: ['name'] },
      ],
        
      where: data,
    });
    res.json(professional);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getMatrizQuizFilter= async (req, res) => {
  const data = req.body; 
  try {
    const professional = await MatrizQuiz.findAll(
      {
        where: {
          quizId: req.params.quizId,
        },
    });
    res.json(professional);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteMatrizQuiz = async (req, res) => {
  try {
    const removingUser = await MatrizQuiz.destroy({
      where: {
        idMatriz: req.params.matrizId,
        quizId: req.params.quizId,
      },
    });
    res.json({ message: "Eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
 

