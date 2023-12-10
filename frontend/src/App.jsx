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
import Quiz from "./pages/Quiz.jsx";
import Profile from "./pages/Profile.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Toaster />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/cv" element={<CV />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/perfil" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
