import { Roles } from "../Models/Roles.js";
import readline from "readline";
import path from "path";
import fs from "fs";
import fileDirName from "../libs/file-dirname.js";
import { Users } from "../Models/Users.js";
import { Professionals } from "../Models/Professionals.js";
// import { UserData } from "../Models/UserData.js";
const { __dirname } = fileDirName(import.meta);
import { UserRoles } from "../Models/UserRoles.js";

import { Usuario } from "./data/cuentas.js";

const insertRoles = async () => {
  const filePath = path.resolve(__dirname, "data", "roles.csv");

  const file = readline.createInterface(fs.createReadStream(filePath));

  const roles = [];

  file.on("line", async (rol) => {
    roles.push({ rol });
  });

  file.on("close", async () => {
    await Roles.bulkCreate(roles);
  });
};

const insertDefaultUsers = async () => {
  const cuentas = Usuario.cuentas;

  const users = cuentas.map(
    ([username, password, arrayRoles, { userInfo }]) => {
      const {
        ci,
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        photo,
      } = userInfo;

      return {
        username,
        password,
        ci,
        firstName,
        secondName,
        firstLastName,
        photo,
        secondLastName,
      };
    }
  );
  const professionals = cuentas.map(
    ([username, password, arrayRoles, { userInfo,professionals }]) => {
      const {
        ci,
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        birthDate,
        gender,
        direction,
        homePhone,
        cellPhone,
        personalEmail,
        institutionalEmail,
        image
      } = professionals;

      return {
        ci,
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        birthDate,
        gender,
        direction,
        homePhone,
        cellPhone,
        personalEmail,
        institutionalEmail,
        image
      };
    }
  );
  const createdProfessionals = await Professionals.bulkCreate(professionals, { returning: true });


  const rolesUser = cuentas.map(([username, password, roles]) => {
    return roles;
  });

  const createdUsers = await Users.bulkCreate(users, { returning: true });

  const bulkUserRoles = createdUsers
    .map((user, index) => {
      return rolesUser[index].map((roleId) => {
        return { userId: user.userId, roleId };
      });
    })
    .flat();

  await UserRoles.bulkCreate(bulkUserRoles);
};


const insertData = async () => {
  await insertRoles();
  setTimeout(async () => {
    await insertDefaultUsers();
  }, 2000);
};

export { insertData };
