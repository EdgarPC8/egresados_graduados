import { getAllStudentsFromDb,insertData } from "../database/connection.js";
import { Tables } from "../database/namesDataBase.js";

const getAllStudents = async (req, res) => {
  const students = await getAllStudentsFromDb();
  res.json(students);
};

const insertStudent = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  
  const respuesta= await insertData(Tables.students.name,data)
  res.json(respuesta);
};




export { getAllStudents,insertStudent };
