import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";
import { Professionals } from "./Professionals.js";
import { Quiz } from "./Quiz.js";

// NOMBRE	N. CEDULA	CARRERA	TELÉFONO	CORREO	MODALIDAD	FECHA GRADO	OCUPACIÓN ACTUAL	ESTUDIOS POST.	PERIODO

// -- Formacion Academica
export const StudenstQuiz = sequelize.define(
  "students_quizzes",
  {
    completed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    answers: {
      type: DataTypes.JSON,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  },
);
// StudenstQuiz.hasMany(Quiz, {
//     foreignKey: "idQuiz",
//     sourceKey: "idQuiz",
//     onDelete: "CASCADE",
//   });
//   Quiz.belongsTo(StudenstQuiz, {
//     foreignKey: "idQuiz",
//     sourceKey: "id",
//   });
