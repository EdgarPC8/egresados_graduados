import { insertData,selectData } from "../database/connection.js";


const setData = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  const respuesta= await insertData(data.Table,data.Sentencia)
  res.json(respuesta);
};

const getData = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  const respuesta= await selectData(data.Table,data.Columns,data.Conditions,data.GroupBy,data.OrderBy)
  res.json(respuesta);
};


export { getData,setData };
