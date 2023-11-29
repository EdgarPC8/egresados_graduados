import { sequelize } from "../database/connection.js";

const UserRoles = sequelize.define("user_roles", {}, { timestamps: false });

export { UserRoles };
