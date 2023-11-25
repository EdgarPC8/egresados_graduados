import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import professionalsRoutes from "./src/routes/professionalsRoutes.js";
import cvRoutes from "./src/routes/cvRoutes.js";
import quizRoutes from "./src/routes/quizRoutes.js";
import linguiGeoRoutes from "./src/routes/linguisticsGeographyRoutes.js";
import cors from "cors";
import { sequelize } from "./src/database/connection.js";


const app = express();
const PORT = 3000;

app.use(express.json());

const allowedOrigins = [
  // "http://dev.gym.com",
  "http://localhost",
  "http://localhost:5173",
  "http://192.168.137.250:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Verifica si el origen está en la lista de orígenes permitidos
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Acceso no permitido por CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true, // Permite el envío de cookies y encabezados de autenticación
};

app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/professionals", professionalsRoutes);
app.use("/api/cv", cvRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/linguiGeo", linguiGeoRoutes);

async function main() {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Conección realizada con éxito.");
    app.listen(PORT, () => {
      console.log(`Backend escuchando en el puesto ${PORT}`);
    });
  } catch (error) {
    console.error("Error en la conexión en la db:", error);
  }
}

main();
