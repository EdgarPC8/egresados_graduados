import { getAllStudentsFromDb } from "../database/connection.js";

const getAllStudents = async (req, res) => {
  const students = await getAllStudentsFromDb();
  res.json(students);
};



export { getAllStudents };
