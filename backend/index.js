import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import studentRoutes from "./src/routes/studentRoutes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());



const allowedOrigins = [
  // "http://dev.gym.com",
  "http://localhost",
  "http://localhost:5173"
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
app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Backend escuchando en el puesto ${PORT}`);
});
