import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

// Definición del modelo Users
export const UserData = sequelize.define(
  "userData",
  {
    idUserData: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ci: {
      type: DataTypes.BIGINT,
    },
    firstName: {
      type: DataTypes.STRING(30),
    },
    secondName: {
      type: DataTypes.STRING(30),
    },
    firstLastName: {
      type: DataTypes.STRING(30),
    },
    secondLastName: {
      type: DataTypes.STRING(30),
    },
  },
  {
    timestamps: false,
  }
);

