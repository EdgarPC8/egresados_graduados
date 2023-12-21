import Navbar from "./components/Navbar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/theme.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CV from "./pages/CV.jsx";
import Charts from "./pages/Charts.jsx";
import Quiz from "./pages/Quiz.jsx";
import Profile from "./pages/Profile.jsx";

import UserTable from "./components/UserTable.jsx";
import FormAddUser from "./components/FormAddUser.jsx";

import "@fontsource/inter"
import "@fontsource/inter/600.css";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <BrowserRouter>
        
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/cv" element={<CV />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/usuarios" element={<UserTable />} />
<<<<<<< HEAD
              <Route path="/agregar-usuario" element={<FormAddUser />} />
              <Route path="/editar-usuario/:userId" element={<FormAddUser />} />
=======
              <Route path="/charts" element={<Charts />} />
>>>>>>> c606493fc3bf7ca0cc50e58de8be273e12a799bf
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
