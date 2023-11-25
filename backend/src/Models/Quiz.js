import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";


// -- tabla encuestas
// CREATE TABLE quiz (
//     id_quiz int (11)  PRIMARY KEY AUTO_INCREMENT,
//     title VARCHAR(100),
//     description TEXT,
//     date DATE
// );
// CREATE TABLE question_types (
//     id_question_type INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(50)
// );

// -- tabla preguntas
// CREATE TABLE questions (
//     id_question int (11)  PRIMARY KEY AUTO_INCREMENT,
//     id_quiz INT,
//     id_question_type INT,
//     question_text TEXT,
//     FOREIGN KEY (id_quiz) REFERENCES quiz(id_quiz),
//     FOREIGN KEY (id_question_type) REFERENCES question_types(id_question_type)
// );
// -- tabla opciones
// CREATE TABLE options (
//     id_option int (11)  PRIMARY KEY AUTO_INCREMENT,
//     id_question INT,
//     option_text TEXT,
//     FOREIGN KEY (id_question) REFERENCES questions(id_question)
// );

// CREATE TABLE responses (
  //     id_response int (11)  PRIMARY KEY AUTO_INCREMENT,
  //     id_quiz INT,
  //     id_question INT,
  //     user_id INT, -- si tienes un sistema de usuarios
  //     text_response TEXT,
  //     id_option INT, -- puede ser NULL para preguntas abiertas
  //     FOREIGN KEY (id_quiz) REFERENCES quiz(id_quiz),
  //     FOREIGN KEY (id_question) REFERENCES questions(id_question),
  //     FOREIGN KEY (id_option) REFERENCES options(id_option)
  // );
  export const Questions = sequelize.define(
    "questions",
    {
      id_question: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_quiz: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      id_question_type: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      question_text: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
    },
    {
      timestamps: false,
    }
  );
  export const Options = sequelize.define(
    "options",
    {
      id_option: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_question: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      option_text: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
    },
    {
      timestamps: false,
    }
  );
  // -- tabla respuestas
  export const Responses = sequelize.define(
  "responses",
  {
    id_response: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_quiz: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    id_question: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    user_id: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    text_response: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    id_option: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
// tipo de preguntas
export const Question_types = sequelize.define(
  "question_types",
  {
    id_question_type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

// -- Encuesta
export const QuizTable = sequelize.define(
  "quiz",
  {
    id_quiz: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    date: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

