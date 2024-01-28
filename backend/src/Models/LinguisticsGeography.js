import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

export const Country = sequelize.define(
  "country",
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
    name: {
      type: DataTypes.STRING(80),
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

export const Cod_country_lenguage = sequelize.define(
  "cod_coungry_lenguage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codLP: {
      type: DataTypes.STRING(5),
      defaultValue: null,
    },
    description: {
      type: DataTypes.STRING(60),
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
export const Province = sequelize.define(
  "tbl_province",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    province: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
export const Canton = sequelize.define(
  "tbl_canton",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProvince: {
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
export const Parish = sequelize.define(
  "tbl_parish",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idCanton: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    parish: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

// Definición de relaciones entre modelos

Province.hasMany(Canton, { foreignKey: "id_province", sourceKey: "id" });
Canton.belongsTo(Province, { foreignKey: "id_province", sourceKey: "id" });

Canton.hasMany(Parish, { foreignKey: "id_canton", sourceKey: "id" });
Parish.belongsTo(Canton, { foreignKey: "id_canton", sourceKey: "id" });

// Sincronizar los modelos con la base de datos
// sequelize.sync();

// export { Quiz, Question_types, Questions, Options, Responses };
