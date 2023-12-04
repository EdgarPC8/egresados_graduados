import { Roles } from "../Models/Roles.js";
import readline from "readline";
import path from "path";
import fs from "fs";
import fileDirName from "../libs/file-dirname.js";
import { Users } from "../Models/Users.js";
import { Professionals } from "../Models/Professionals.js";
import { UserData } from "../Models/UserData.js";
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

// const insertDefaultUsers = async () => {
//   const filePath = path.resolve(__dirname, "data", "users.csv");

//   const file = readline.createInterface(fs.createReadStream(filePath));

//   const users = [];
//   const users_roles = [];

//   file.on("line", async (credential) => {
//     const [userData,professionalData,companyData,email, password, rol] = credential.split(",");

//     users.push({userData,professionalData,companyData, email, password });
//     users_roles.push(rol);

//     // users.push({ email, password });

//     // users_roles

//     // Busca el rol por su nombre
//     // const role = await Roles.findOne({ where: { id: rol } });

//     // const user = await Users.create({ email, password });

//     // await user.addRole(role);
//   });

//   file.on("close", async () => {
//     try {
//       console.log("Usuarios y roles han sido agregados");

//       const createdUsers = await Users.bulkCreate(users, { returning: true });

//       const bulkUserRoles = createdUsers.map((user, index) => {
//         const roleId = parseInt(users_roles[index]); // Supongo que el email está asociado al rol en tu ejemplo
//         return { userId: user.id_user, roleId };
//       });

//       await UserRoles.bulkCreate(bulkUserRoles);

//       console.log("Usuarios y roles han sido agregados");
//     } catch (error) {
//       console.log("error al realizar la insercion masiva", error);
//     }
//   });
// };


const insertDefaultUsers = async () => {
    const cuentas = Usuario.cuentas;

    // Mapear y crear usuarios
    const users = cuentas.map(([email, password, roles, additionalData]) => {
      return { email, password, roles, additionalData };
    });

    // Crear usuarios en la base de datos
    const createdUsers = await Users.bulkCreate(users, { returning: true });

    // Crear roles de usuario
    const bulkUserRoles = [];
    createdUsers.forEach((user, index) => {
      const userRoles = users[index].roles.map(roleId => {
        return { userId: user.id_user, roleId };
      });
      bulkUserRoles.push(...userRoles);
    });
    // Esperar un tiempo y luego crear relaciones entre usuarios y roles
    setTimeout(async () => {
      await UserRoles.bulkCreate(bulkUserRoles);
      // Verificar si hay información adicional para crear ProfessionalData y UserData
      createdUsers.forEach(async (user, index) => {
        if (users[index].additionalData) {
          const userData = users[index].additionalData.userData;
          const professionalData = users[index].additionalData.professionals;
          // Crear UserData y ProfessionalData relacionados con el usuario creado
          const createdUserData = await UserData.create({ ...userData, idUser: user.id_user });
          const createdProfessionalData = await Professionals.create({ ...professionalData, idUser: user.id_user });
        }
      });
    }, 500);


};


const insertData = async () => {
  await insertRoles();
  await insertDefaultUsers();
};

export { insertData };
