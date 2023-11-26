import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

// Definición del modelo Users
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

