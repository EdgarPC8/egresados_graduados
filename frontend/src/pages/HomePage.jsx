import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeIcon from "/homeicon.svg";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { urlRequestsApi } from "../constants/url";

function HomePage() {
  const { signinExternal } = useAuth();

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== urlRequestsApi.urlAcademicSystem) {
        console.error("Mensaje de origen no permitido");
        //window.alert('Mensaje de origen no permitido')
        return;
      }
      console.log(event.data);
      signinExternal(event.data);
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Box p={20}>
      <Heading>Bienvenido</Heading>
      <Text mb={5}>
        Explora currículos detallados de estudiantes calificados. Encuentra el
        candidato ideal.
      </Text>
      <Link to="/curriculos">
        <Button
          bg="ceruleanBlue.500"
          color="white"
          _hover={{ bg: "ceruleanBlue.600" }}
        >
          Explorar
        </Button>
      </Link>
      <Box boxSize="300px">
        <Image src={HomeIcon} />
      </Box>
    </Box>
  );
}

export default HomePage;
