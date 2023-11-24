import Sequelize from "sequelize";

const sequelize = new Sequelize("egresados_graduados", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
