import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";


// -- Formacion Academica
export const Academic_training = sequelize.define(
  "academic_training",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
    place: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    country: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    obtained_tittle: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    educational_institution: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    senescyt_registration_n: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
// -- Experiencia Docente
export const Teaching_experience = sequelize.define(
  "teaching_experience",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    educational_institution: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    subject: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
    modality: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    place: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    country: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
//   -- Cursos Talleres Seminarios etc
export const Courses_workshops = sequelize.define(
  "courses_workshops",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    name: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    organized_by: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    duration: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    start_date: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    end_date: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    type_participation: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
// -- Produccion intelectual
export const Intellectual_production = sequelize.define(
  "intellectual_production",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    name: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    type_authorship: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    date: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    web_link: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
//   -- Libros
export const Books = sequelize.define(
  "books",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tittle: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    type: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    type_authorship: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    isb_n: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    editoral_name: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    editoral_origin: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    year: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
// -- Meritos academicos y profesionales
export const Academic_professional_merits = sequelize.define(
  "academic_professional_merits",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    date: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    type: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    granted_by: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    country: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    location: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
//   -- Idiomas
export const Languages = sequelize.define(
  "languages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_certification: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    speaking_level: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    writing_level: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    comprehension_level: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
// -- Experiencia Profesional
export const Professional_experience = sequelize.define(
  "professional_experience",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nro: {
      type: DataTypes.STRING(11),
      defaultValue: null,
    },
    company_institution: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    position: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    responsibilities: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    immediate_head: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    telephone: {
      type: DataTypes.STRING(10),
      defaultValue: null,
    },
    start_date: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    end_date: {
      type: DataTypes.STRING(5),
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
