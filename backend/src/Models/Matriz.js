import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";
import { Professionals } from "./Professionals.js";


// NOMBRE	N. CEDULA	CARRERA	TELÉFONO	CORREO	MODALIDAD	FECHA GRADO	OCUPACIÓN ACTUAL	ESTUDIOS POST.	PERIODO


// -- Formacion Academica
export const Matriz = sequelize.define(
    "matrices",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idProfessional: {
            type: DataTypes.INTEGER,
            defaultValue: null,
        },
        career: {
            type: DataTypes.INTEGER,
            defaultValue: null,
        },
        idPeriod: {
            type: DataTypes.INTEGER,
            defaultValue: null,
        },
        grateDate: {
            type: DataTypes.STRING(100),
            defaultValue: null,
        },
        modality: {
            type: DataTypes.STRING(100),
            defaultValue: null,
        },
        name: {
            type: DataTypes.STRING(150),
            defaultValue: null,
        },
        ci: {
            type: DataTypes.BIGINT,
          },
        phone: {
            type: DataTypes.STRING(15),
            defaultValue: null,
        },
        email: {
            type: DataTypes.STRING(100),
            defaultValue: null,
        },
        actualOcupation: {
            type: DataTypes.STRING(100),
            defaultValue: null,
        },
        postStudy: {
            type: DataTypes.STRING(100),
            defaultValue: null,
        },
    },
    {
        timestamps: false,
    }
);
export const Carreers = sequelize.define(
    "carreers",
    {
        idCarreer: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(150),
            defaultValue: null,
        },
    },
    {
        timestamps: false,
    }
);
export const Periods = sequelize.define(
    "periods",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(150),
            defaultValue: null,
        },
    },
    {
        timestamps: false,
    }
);

// ...

Professionals.hasMany(Matriz, { foreignKey: "idProfessional", sourceKey: "id", onDelete: 'CASCADE' });
Matriz.belongsTo(Professionals, { foreignKey: "idProfessional", sourceKey: "idProfessional" });

Carreers.hasMany(Matriz, { foreignKey: "career", sourceKey: "idCarreer", onDelete: 'CASCADE' });
Matriz.belongsTo(Carreers, { foreignKey: "career", sourceKey: "idCarreer" });

Periods.hasMany(Matriz, { foreignKey: "idPeriod", sourceKey: "id", onDelete: 'CASCADE' });
Matriz.belongsTo(Periods, { foreignKey: "idPeriod", sourceKey: "id" });




