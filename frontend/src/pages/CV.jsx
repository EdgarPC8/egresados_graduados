
import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Educación:", education);
    console.log("Experiencia:", experience);
  };

  return (
    <Box>
      <Container p={6} maxW="container.lg">
        <Grid templateColumns="8fr 1fr" gap={1} mt={2}>
          <GridItem>
            <Box bg="primary.200" color="white" p={4} borderRadius="md">
              <Heading as="h1" size="2xl" textAlign="center">
                HOJA DE VIDA
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="primary.200" color="white" borderRadius="md" p={4} alignItems="center">
              <Heading as="h3" size="md">
                CÓDIGO
              </Heading>
              <Heading as="h3" size="md">
                2131323x2342
              </Heading>
            </Box>
          </GridItem>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={1} mt={2}>
          <GridItem>
            <Box p={4} borderRadius="md">
              <Heading as="h3" size="lg" textAlign="left">
                DATOS PERSONALES
              </Heading>
              <Box p={4} borderRadius="md">
                <form onSubmit={handleSubmit}>
                  <FormControl mt={4}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Educación</FormLabel>
                    <Textarea
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Experiencia Laboral</FormLabel>
                    <Textarea
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </FormControl>
                </form>

              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderRadius="md" p={4} textAlign="right">
              <Heading as="h3" size="xl">
                FOTO CARNET
              </Heading>
            </Box>
          </GridItem>
        </Grid>



      </Container>
    </Box>
  );
}

export default ResumeForm;

