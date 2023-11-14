import pool from "mysql2/promise";

const connection = pool.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "egresados_graduados",
});

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

export { getAllStudentsFromDb, searchUser };
