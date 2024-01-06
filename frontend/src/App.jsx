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
import CvPdf from "./pages/CvPdf.jsx";
import CvProfessionalPdf from "./components/CvProfessionalPdf.jsx";
import Quiz from "./pages/Quiz.jsx";
import Profile from "./pages/Profile.jsx";

import UserTable from "./components/UserTable.jsx";
import FormAddUser from "./components/FormAddUser.jsx";

import "@fontsource/inter";
import "@fontsource/inter/600.css";
import Logger from "./pages/Logger.jsx";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route
              element={
                <ProtectedRoute
                  requiredRol={["profesional", "administrador"]}
                />
              }
            >
              <Route path="/cv" element={<CV />} />

              <Route path="/quiz" element={<Quiz />} />
              <Route path="/perfil" element={<Profile />} />

              <Route path="/charts" element={<Charts />} />
              <Route path="/curriculos" element={<Resumes />} />
            </Route>

            
            <Route element={<ProtectedRoute requiredRol={["administrador"]} />}>
              <Route path="/actividad" element={<Logger />} />
              <Route path="/usuarios" element={<UserTable />} />
              <Route path="/agregar-usuario" element={<FormAddUser />} />
              <Route path="/editar-usuario/:userId" element={<FormAddUser />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/curriculos" element={<Resumes />} />
              <Route path="/cvPdf" element={<CvPdf />} />
              <Route path="/cvProfessionalPdf/:userId" element={<CvProfessionalPdf />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
