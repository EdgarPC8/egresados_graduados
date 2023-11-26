import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

const Paises = sequelize.define(
  "paises",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    iso: {
      type: DataTypes.CHAR(2),
      defaultValue: null,
    },
    nombre: {
      type: DataTypes.STRING(80),
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

  const Cod_lenguaje_pais = sequelize.define(
    "cod_lenguaje_pais",
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cod_LP: {
        type: DataTypes.STRING(5),
        defaultValue: null,
      },
      descripcion: {
        type: DataTypes.STRING(60),
        defaultValue: null,
      },
    },
    {
      timestamps: false,
    }
  );
const Provincia = sequelize.define(
  "tbl_provincia",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    provincia: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
const Canton = sequelize.define(
  "tbl_canton",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_provincia: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    canton: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
const Parroquia = sequelize.define(
  "tbl_parroquia",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_canton: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    parroquia: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
   
  },
  {
    timestamps: false,
  }
);


// Definición de relaciones entre modelos


Provincia.hasMany(Canton, { foreignKey: "id_provincia" });
Canton.belongsTo(Provincia, { foreignKey: "id_provincia" });

Canton.hasMany(Parroquia, { foreignKey: "id_canton" });
Parroquia.belongsTo(Canton, { foreignKey: "id_canton" });


// export { Quiz, Question_types, Questions, Options, Responses };

