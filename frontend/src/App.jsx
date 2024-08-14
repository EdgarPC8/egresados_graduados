import Navbar from "./components/Navbar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/theme.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CV from "./pages/CV.jsx";
import Charts from "./pages/Charts.jsx";
import Resumes from "./pages/Resumes.jsx";
import CvProfessionalPdf from "./components/CvProfessionalPdf.jsx";
import PersonalQuizzes from "./pages/PersonalQuizzess.jsx";
import Profile from "./pages/Profile.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Matriz from "./pages/Matriz.jsx";
import Careers from "./pages/Careers.jsx";
import Periods from "./pages/Periods.jsx";
import Tutorials from "./pages/Tutorials.jsx";
import PanelControl from "./pages/PanelControl.jsx";

import UserTable from "./components/UserTable.jsx";
import FormAddUser from "./components/FormAddUser.jsx";

import "@fontsource/inter";
import "@fontsource/inter/600.css";
import Logger from "./pages/Logger.jsx";
import DocumentQuiz from "./pages/DocumentQuiz.jsx";
import FillQuiz from "./pages/FillQuiz.jsx";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <BrowserRouter basename="/alumni">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route
              element={
                <ProtectedRoute
                  requiredRol={["Profesional", "Programador", "Administrador"]}
                />
              }
            >
              <Route path="/cv" element={<CV />} />
              <Route path="/sus-encuestas" element={<PersonalQuizzes />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/cvPdf" element={<CvProfessionalPdf />} />
              <Route path="/encuesta/d/:quizId" element={<DocumentQuiz />} />

              <Route
                path="/encuesta/f/:quizId/matriz/:matrizId"
                element={<FillQuiz />}
              />
            </Route>
            <Route
              element={
                <ProtectedRoute
                  requiredRol={["Programador", "Administrador"]}
                />
              }
            >
              <Route path="/usuarios" element={<UserTable />} />
              <Route path="/agregar-usuario" element={<FormAddUser />} />
              <Route path="/editar-usuario/:userId" element={<FormAddUser />} />
              <Route path="/curriculos" element={<Resumes />} />
              <Route
                path="/cvProfessionalPdf/:userId"
                element={<CvProfessionalPdf />}
              />
              <Route path="/encuestas" element={<Quizzes />} />
              <Route path="/matriz" element={<Matriz />} />
              <Route path="/carreras" element={<Careers />} />
              <Route path="/periodos" element={<Periods />} />
              <Route path="/tutoriales" element={<Tutorials />} />
            </Route>

            <Route element={<ProtectedRoute requiredRol={["Programador"]} />}>
              <Route path="/actividad" element={<Logger />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/panel" element={<PanelControl />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
