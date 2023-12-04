import { sequelize } from "../database/connection.js";
import { Roles } from "./Roles.js";
import { DataTypes } from "sequelize";
import { UserRoles } from "./UserRoles.js";
import { Professionals } from "./Professionals.js";
import { UserData } from "./UserData.js";
import { CompanyData } from "./CompanyData.js";

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
  },
  {
    timestamps: false,
  }
);
// Relacion muchos a muchos, tabla intermedia user_roles

Users.belongsToMany(Roles, { through: UserRoles, foreignKey: "userId" });
Roles.belongsToMany(Users, { through: UserRoles, foreignKey: "roleId" });

UserData.belongsTo(Users, {foreignKey: 'idUser' }); // Un usuario pertenece a un data
Professionals.belongsTo(Users, {foreignKey: 'idUser' }); // Un usuario pertenece a un data
CompanyData.belongsTo(Users, {foreignKey: 'idUser' }); // Un usuario pertenece a un data



