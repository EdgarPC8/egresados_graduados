import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

const Questions = sequelize.define(
  "questions",
  {
    id_question: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_quiz: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    id_question_type: {
      type: DataTypes.INTEGER,
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
const Options = sequelize.define(
  "options",
  {
    id_option: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_question: {
      type: DataTypes.INTEGER,
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
const Responses = sequelize.define(
  "responses",
  {
    id_response: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_quiz: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    id_question: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      //osea no le puedo poner aqui como parametro con cual va relacionado??
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    text_response: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    id_option: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
// tipo de preguntas
const Question_types = sequelize.define(
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
const Quiz = sequelize.define(
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
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

// Definición de relaciones entre modelos
Quiz.hasMany(Questions, { foreignKey: "idQuiz", sourceKey: "id_quiz" });
Questions.belongsTo(Quiz, { foreignKey: "idQuiz", sourceKey: "id_quiz" });


Question_types.hasMany(Questions, {
  foreignKey: "idQuestionType",
  sourceKey: "id_question_type",
});
Questions.belongsTo(Question_types, {
  foreignKey: "idQuestionType",
  sourceKey: "id_question_type",
});


Questions.hasMany(Options, {
  foreignKey: "idQuestion",
  sourceKey: "id_question",
});
Options.belongsTo(Questions, {
  foreignKey: "idQuestion",
  sourceKey: "id_question",
});


Quiz.hasMany(Responses, { foreignKey: "idQuiz", sourceKey: "id_quiz" });
Responses.belongsTo(Quiz, { foreignKey: "idQuiz", sourceKey: "id_quiz" });



Questions.hasMany(Responses, {
  foreignKey: "idQuestion",
  sourceKey: "id_question",
});
Responses.belongsTo(Questions, {
  foreignKey: "idQuestion",
  sourceKey: "id_question",
});


Options.hasMany(Responses, { foreignKey: "idOption", sourceKey: "id_option" });
Responses.belongsTo(Options, {
  foreignKey: "idOption",
  sourceKey: "id_option",
});


export { Quiz, Question_types, Questions, Options, Responses };
