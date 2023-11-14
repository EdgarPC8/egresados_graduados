import Navbar from "./components/Navbar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/theme.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CV from "./pages/CV.jsx";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/curriculums" element="Lista Docentes" />
          <Route path="/inicio" element={<HomePage/>} />
          <Route path="/cv" element={<CV/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
