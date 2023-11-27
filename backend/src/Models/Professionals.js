import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

// id int (11)  PRIMARY KEY AUTO_INCREMENT,
//     ci varchar (11) DEFAULT NULL,
//     first_name varchar(50) DEFAULT NULL,
//     second_name varchar(50) DEFAULT NULL,
//     first_last_name varchar(50) DEFAULT NULL,
//     second_last_name varchar(50) DEFAULT NULL,
//     birthday_date varchar(20) DEFAULT NULL,
//     gender varchar(5) DEFAULT NULL,
//     blood_type varchar(10) DEFAULT NULL,
//     civil_status varchar(50) DEFAULT NULL,
//     nationality varchar(50) DEFAULT NULL,
//     place_birth varchar(50) DEFAULT NULL,
//     place_residence varchar(100) DEFAULT NULL,
//     direction TEXT DEFAULT NULL,
//     home_phone varchar(20) DEFAULT NULL,
//     cell_phone varchar(20) DEFAULT NULL,
//     personal_email varchar(60) DEFAULT NULL,
//     institutional_email varchar(60) DEFAULT NULL,
//     imagen TEXT DEFAULT NULL

export const Professionals = sequelize.define(
  "professionals",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ci: {
      type: DataTypes.BIGINT(11),
      allowNull: false, // No permite valores nulos
      unique: true, // Hace que el campo sea único
    },
    first_name: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    second_name: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    first_lastname: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    second_lastname: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    blood_type: {
      type: DataTypes.STRING(10),
      defaultValue: null,
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
    gender: {
      type: DataTypes.STRING(5),
      defaultValue: null,
    },
    civil_status: {
      type: DataTypes.STRING(10),
      defaultValue: null,
    },
    nationality: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    place_birth: {
      type: DataTypes.STRING(100),
      defaultValue: null,
    },
    place_residence: {
      type: DataTypes.STRING(100),
      defaultValue: null,
    },
    direction: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    home_phone: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    cell_phone: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    personal_email: {
      type: DataTypes.STRING(60),
      defaultValue: null,
    },
    institutional_email: {
      type: DataTypes.STRING(60),
      defaultValue: null,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
