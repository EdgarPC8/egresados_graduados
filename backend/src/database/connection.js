import pool from "mysql2/promise";

const connection = pool.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "egresados_graduados",
});


const insertData = async (tableName, dataObject) => {
  try {
    const columns = Object.keys(dataObject).join(',');
    const values = Object.values(dataObject).map(value => {
      if (value === null || value === undefined) {
        return 'NULL';
      } else if (typeof value === 'string') {
        return `'${value}'`;
      } else {
        return value;
      }
    }).join(',');
    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
    await connection.query(query);
    console.log('Datos insertados correctamente.');
    return 'Datos insertados correctamente.';
  } catch (error) {
    console.error('Error al insertar datos:', error);
    throw error; // Puedes manejar el error o relanzarlo para que lo maneje el código que llama a esta función
  }
};

const selectData = async (tableName, columns = null, conditions = null, groupBy = null, orderBy = null) => {
  try {
    let query = "SELECT ";

    if (!columns || columns.length === 0) {
      query += "*";
    } else {
      query += columns.join(", ");
    }

    query += ` FROM ${tableName}`;

    if (conditions && Object.keys(conditions).length > 0) {
      query += " WHERE ";

      const conditionStrings = [];
      for (const [column, value] of Object.entries(conditions)) {
        conditionStrings.push(`${column} = '${value}'`);
      }

      query += conditionStrings.join(" AND ");
    }

    if (groupBy !== null) {
      query += ` GROUP BY ${groupBy}`;
    }

    if (orderBy !== null) {
      query += ` ORDER BY ${orderBy}`;
    }

    const [result] = await connection.query(query);
    return result;
    // return result;
  } catch (error) {
    console.error('Error al seleccionar datos:', error);
    throw error;
  }
};

const getAllStudentsFromDb = async () => {
  const [students] = await connection.query("SELECT * FROM students");
  return students;
};

const searchUser = async ({ email }) => {
  const [[user]] = await connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return user;
};
export { getAllStudentsFromDb, searchUser,insertData,selectData };
