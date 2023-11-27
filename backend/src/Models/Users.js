import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Roles } from "./Roles.js";

export const Users = sequelize.define(
  "users",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(30),
    },
    password: {
      type: DataTypes.STRING(100),
    },
    rol: {
      type: DataTypes.INTEGER(11),
    },
  },
  {
    timestamps: false,
  }
);



// Relacion muchos a muchos, tabla intermedia user_roles

Users.belongsToMany(Roles, { through: "user_roles" });
Roles.belongsToMany(Users, { through: "user_roles" });
