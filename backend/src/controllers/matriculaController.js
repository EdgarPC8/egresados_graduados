import { Matricula } from "../Models/Matricula.js";
import { Carreers,Periods } from "../Models/Matriz.js";
import { Students } from "../Models/Students.js";


export const getAllMatriculas = async (req, res) => {
  try {
    const data = await Matricula.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener los datos de los estudiantes." });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    // const data = await Matricula.findAll();
    const data = await Matricula.findAll({
      attributes: ["id_matricula"],
      include: [
        {
          model: Students,
          attributes: [
            "nombre_1",
            "nombre_2",
            "apellido_1",
            "apellido_2",
            "genero",
            "numero_documento",
            "id_estudiante",
            "tipo_documento",
          ],
        },
        { model: Carreers },
        { model: Periods },
      ],
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener los datos de los estudiantes." });
  }
};

export const getMatriculaFilter = async (req, res) => {
  const data = req.body;
  try {
    const professional = await Matricula.findAll({
      attributes: ["id_matricula",],
      include: [
        {
          model: Students,
          attributes: [
            "nombre_1",
            "nombre_2",
            "apellido_1",
            "apellido_2",
            "genero",
            "numero_documento",
            "id_estudiante",
            "tipo_documento",
          ],
        },
        { model: Carreers, attributes: ["name"] },
        { model: Periods, attributes: ["name"] },
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
