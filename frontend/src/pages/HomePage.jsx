import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeIcon from "/homeicon.svg";

function HomePage() {
  return (
    <Box p={20} ml="200px">
      <Heading>Bienvenido</Heading>
      <Text mb={5}>
        Explora currículos detallados de estudiantes calificados. Encuentra el
        candidato ideal.
      </Text>
      <Link to="/curriculos">
        <Button
          bg="primary.200"
          color="white"
          _hover={{ color: "text.100", bg: "bg.200" }}
        >
          Explorar
        </Button>
      </Link>
      <Box boxSize="300px">
        <Image src={HomeIcon}/>
      </Box>

    </Box>
  );
}

export default HomePage;
