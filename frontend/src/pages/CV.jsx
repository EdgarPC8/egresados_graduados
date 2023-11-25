import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Container,
  Grid,
  GridItem,
  InputLeftAddon,
  InputGroup,
  Select,
  Button,
  TableContainer,
  Table,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  Tfoot,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  RadioGroup,
  Stack,
  Radio,
  Flex,
} from "@chakra-ui/react";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5ed55d332f3150fd9f9851b9465d1a451e7c1e92
// const {data} = await insertStudent({ci:1104661598})
insertStudent({ci:1104661598})

console.log(data)


=======
>>>>>>> 3a6e8c1 (implementación de modelos en js para sequelize)
// const variable=await selectData({
//   Table:"students",
//   Columns:null,
//   Conditions:null,
//   GroupBy:null,
//   OrderBy:null,
// });
// console.log(variable)

// const variable=await insertData({Table:"students",Sentencia:{
//   id:98,
//   first_name:"",
//   last_name:"",
//   email:"",
//   gender:"",
//   ip_address:"",
// }});

// console.log(variable)

function ResumeForm() {
  const [name, setName] = useState("");
  // ... (resto de los estados)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    // ... (resto de los datos)
  };

  return (
    <Box fontSize={50} mb={100}>
      <Container maxW={"container.xl"}>
        <Grid
          templateColumns={{ base: "8fr 1fr", md: "8fr 1fr" }}
          gap={1}
          mt={2}
        >
          <GridItem>
            <Box bg="primary.200" color="white" p={2} borderRadius="md">
              <Heading as="h1" textAlign="center">
                HOJA DE VIDA
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg="primary.200"
              color="white"
              borderRadius="md"
              p={2}
              alignItems="center"
            >
              <Heading as="h3" fontSize="xl">
                CÓDIGO
              </Heading>
              <Heading as="h3" fontSize={{ base: 10, md: "md" }}>
                2131323x2342
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Grid templateColumns={{ base: "1fr", md: "9fr 1fr" }} gap={4} mt={2}>
          <GridItem order={{ base: 2, md: 1 }}>
            <Heading as="h3" size="md" textAlign="left">
              DATOS PERSONALES
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              gap={2}
              mt={2}
            >
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Primer Apellido" />
                  <Input type="text" placeholder="Primer Apellido" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Segundo Apellido" />
                  <Input type="text" placeholder="Segundo Apellido" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Primer Nombre" />
                  <Input type="text" placeholder="Primer Nombre" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Segundo Nombre" />
                  <Input type="text" placeholder="Segundo Nombre" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Fecha de nacimiento" />
                  <Input placeholder="Fecha" size="md" type="date" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Estado Civil" />
                  <Select placeholder="Seleccione una opción">
                    <option value="option1">Soltero</option>
                    <option value="option2">Viudo</option>
                    <option value="option3">Casado</option>
                    <option value="option3">Divorciado</option>
                  </Select>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Cedula" />
                  <Input type="text" placeholder="Cedula" />
                </InputGroup>
              </GridItem>

              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Tipo de Sangre" />
                  <Input type="text" placeholder="Tipo de Sangre" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Nacionalidad" />
                  <Input type="text" placeholder="Nacionalidad" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Teléfono de domicilio" />
                  <Input type="tel" placeholder="Teléfono de domicilio" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Teléfono de celular" />
                  <Input type="tel" placeholder="Teléfono de celular" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Lugar de Nacimiento" />
                  <Input type="text" placeholder="Lugar de Nacimiento" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Dirección de domicilio" />
                  <Input type="text" placeholder="Dirección de domicilio" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Lugar de residencia" />
                  <Input type="text" placeholder="Lugar de residencia" />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="@" />
                  <Input
                    type="email"
                    placeholder="Correo Electrónico Institucional"
                  />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="@" />
                  <Input
                    type="email"
                    placeholder="Correo Electrónico Personal"
                  />
                </InputGroup>
              </GridItem>
            </Grid>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
              <GridItem
                fontSize={"sm"}
                border="1px solid #ccc"
                borderRadius={8}
              >
                <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                  <GridItem fontSize={"lg"} margin={"auto"}>
                    Discapacidad:
                  </GridItem>
                  <GridItem fontSize={"sm"}>
                    <InputGroup>
                      <InputLeftAddon children="Tipo" w={110} />
                      <Input type="text" placeholder="Tipo" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon children="Nro" w={110} />
                      <Input type="text" placeholder="Nro" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon children="Porcentaje" w={110} />
                      <Input type="text" placeholder="Porcentaje" />
                    </InputGroup>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            order={{ base: 1, md: 1 }}
            textAlign={"center"}
            margin={"auto"}
          >
            <Box
              bg="primary.200"
              color="white"
              borderRadius="md"
              w={300}
              h={300}
            >
              <Heading as="h3" mt={1}>
                Foto Carnet
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  FORMACIÓN ACADÉMICA
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo" />
                    <Select placeholder="Seleccione una opción">
                      <option value="option1">Secundaria</option>
                      <option value="option2">Tercer Nivel</option>
                      <option value="option3">Cuarto Nivel</option>
                    </Select>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Lugar" />
                    <Input type="text" placeholder="Lugar" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="País" />
                    <Input type="text" placeholder="País" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Título Obtenido" />
                    <Input type="text" placeholder="Título Obtenido" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Institución Educativa" />
                    <Input type="text" placeholder="Institución Educativa" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nro. de registro SENESCYT" />
                    <Input
                      type="text"
                      placeholder="Nro. de registro SENESCYT"
                    />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Tipo</Th>
                      <Th>Título Obtenido</Th>
                      <Th>Institución Educativa</Th>
                      <Th>Fecha</Th>
                      <Th>Lugar</Th>
                      <Th>País</Th>
                      <Th>Nro. de registro SENESCYT</Th>
                    </Tr>
                  </Thead>
                  <Tbody></Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  EXPERIENCIA DOCENTE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Inicio" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Fin" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Lugar" />
                    <Input type="text" placeholder="Lugar" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="País" />
                    <Input type="text" placeholder="País" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Materia" />
                    <Input
                      type="text"
                      placeholder="Materia/Componente Educativo"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Modalidad" />
                    <Input type="text" placeholder="Modalidad" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Institución Educativa" />
                    <Input type="text" placeholder="Institución Educativa" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Institución Educativa</Th>
                      <Th>Materia/Componente Educativo</Th>
                      <Th>Fecha Inicio</Th>
                      <Th>Fecha Fin</Th>
                      <Th>Modalidad</Th>
                      <Th>Lugar</Th>
                      <Th>País</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  CURSOS, TALLERES, SEMINARIOS, CONGRESOS, Y /U OTROS
                  (Certificaciones hasta 5 años)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Inicio" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Fin" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Lugar" />
                    <Input type="text" placeholder="Lugar" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo" />
                    <Input
                      type="text"
                      placeholder="(Curso, Seminario, Taller, Congreso, Otro)"
                    />
                  </InputGroup>
                </GridItem>

                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo participación" />
                    <RadioGroup defaultValue="2" m={"auto"}>
                      <Stack spacing={5} direction="row">
                        <Radio colorScheme="green" value="1">
                          Asistente
                        </Radio>
                        <Radio colorScheme="green" value="2">
                          Expositor
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nombre" />
                    <Input type="text" placeholder="Nombre" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Organizado Por" />
                    <Input type="text" placeholder="Organizado Por" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Tipo</Th>
                      <Th>Nombre</Th>
                      <Th>Organizado Por:</Th>
                      <Th>Lugar</Th>
                      <Th>Duracion(Horas)</Th>
                      <Th>
                        <Tr>
                          <Th textAlign={"center"} colSpan={2}>
                            Fecha de Realización
                          </Th>
                        </Tr>
                        <Tr>
                          <Th>Fecha Inicio</Th>
                          <Th>Fecha Fin</Th>
                        </Tr>
                      </Th>
                      <Th>
                        <Tr>
                          <Th textAlign={"center"} colSpan={2}>
                            Tipo de Participación
                          </Th>
                        </Tr>
                        <Tr>
                          <Th>Asistente</Th>
                          <Th>Expositor</Th>
                        </Tr>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  PRODUCCIÓN INTELECTUAL
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo" />
                    <Input type="text" placeholder="Tipo" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo de Autoria" />
                    <Input type="text" placeholder="Tipo de Autoria" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Inicio" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nombre/Titulo" />
                    <Input type="text" placeholder="Nombre/Titulo" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Enlace Web" />
                    <Input type="text" placeholder="Enlace Web" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Tipo</Th>
                      <Th>Nombre/Titulo</Th>
                      <Th>Tipo de Autoria</Th>
                      <Th>Fecha</Th>
                      <Th>Enlace Web</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  LIBROS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo" />
                    <Input
                      type="text"
                      placeholder="(Divulgación, Científico)"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo de Autoria" />
                    <Input type="text" placeholder="(Autor, Coautor)" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nombre de Editorial" />
                    <Input type="text" placeholder="Nombre de Editorial" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Origen de Editorial" />
                    <Input
                      type="text"
                      placeholder="(Nacional, Internacional)"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Año" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nombre" />
                    <Input type="text" placeholder="Nombre" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Titulo</Th>
                      <Th>Tipo</Th>
                      <Th>Tipo de Autoria</Th>
                      <Th>ISB N.</Th>
                      <Th>
                        <Tr>
                          <Th textAlign={"center"} colSpan={2}>
                            Editorial
                          </Th>
                        </Tr>
                        <Tr>
                          <Th>Nombre</Th>
                          <Th>Origen</Th>
                        </Tr>
                      </Th>
                      <Th>Año</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  MÉRITOS ACADÉMICOS Y PROFESIONALES
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="País" />
                    <Input type="text" placeholder="País" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Lugar" />
                    <Input type="text" placeholder="Lugar" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo" />
                    <Input
                      type="text"
                      placeholder="(Nacional, Internacional)"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nombre" />
                    <Input type="text" placeholder="Nombre" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Otorgado Por" />
                    <Input type="text" placeholder="Otorgado Por" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Nombre</Th>
                      <Th>Fecha</Th>
                      <Th>Tipo</Th>
                      <Th>Otorgado Por</Th>
                      <Th>País</Th>
                      <Th>Lugar</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  IDIOMAS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Nombre" />
                    <Input type="text" placeholder="Diferente al Nativo" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo de Certificación" />
                    <Input
                      type="text"
                      placeholder="(TOEPI, TOEIC, CPE, IELTS, PET, Otro)"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem
                  fontSize={"sm"}
                  border="1px solid #ccc"
                  borderRadius={8}
                >
                  <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                    <GridItem fontSize={"lg"} margin={"auto"}>
                      Nivel de Dominio:
                    </GridItem>
                    <GridItem fontSize={"sm"}>
                      <InputGroup mt={3}>
                        <InputLeftAddon w={150} children="Hablado" />
                        <RadioGroup defaultValue="2" m={"auto"}>
                          <Stack spacing={5} direction="row">
                            <Radio colorScheme="green" value="1">
                              Básico
                            </Radio>
                            <Radio colorScheme="green" value="2">
                              Medio
                            </Radio>
                            <Radio colorScheme="green" value="3">
                              Alto
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </InputGroup>
                      <InputGroup mt={3}>
                        <InputLeftAddon w={150} children="Escritura" />
                        <RadioGroup defaultValue="2" m={"auto"}>
                          <Stack spacing={5} direction="row">
                            <Radio colorScheme="green" value="1">
                              Básico
                            </Radio>
                            <Radio colorScheme="green" value="2">
                              Medio
                            </Radio>
                            <Radio colorScheme="green" value="3">
                              Alto
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </InputGroup>
                      <InputGroup mt={3}>
                        <InputLeftAddon w={150} children="Comprensión" />
                        <RadioGroup defaultValue="2" m={"auto"}>
                          <Stack spacing={5} direction="row">
                            <Radio colorScheme="green" value="1">
                              Básico
                            </Radio>
                            <Radio colorScheme="green" value="2">
                              Medio
                            </Radio>
                            <Radio colorScheme="green" value="3">
                              Alto
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </InputGroup>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Idioma(Diferente al nativo)</Th>
                      <Th>
                        <Tr>
                          <Th textAlign={"center"} colSpan={9}>
                            Nivel de dominio
                          </Th>
                        </Tr>
                        <Tr>
                          <Th textAlign={"center"} colSpan={3}>
                            Hablado
                          </Th>
                          <Th textAlign={"center"} colSpan={3}>
                            Escritura
                          </Th>
                          <Th textAlign={"center"} colSpan={3}>
                            Comprensión
                          </Th>
                        </Tr>
                        <Tr>
                          <Th textAlign={"center"}>Básico</Th>
                          <Th textAlign={"center"}>Medio</Th>
                          <Th textAlign={"center"}>Alto</Th>
                          <Th textAlign={"center"}>Básico</Th>
                          <Th textAlign={"center"}>Medio</Th>
                          <Th textAlign={"center"}>Alto</Th>
                          <Th textAlign={"center"}>Básico</Th>
                          <Th textAlign={"center"}>Medio</Th>
                          <Th textAlign={"center"}>Alto</Th>
                        </Tr>
                      </Th>
                      <Th>Tipo de Certificación</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  EXPERIENCIA PROFESIONAL (Los ultimos 10 años)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid
                gap={2}
                mt={2}
                mb={2}
                templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              >
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Inicio" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Fecha Fin" />
                    <Input placeholder="Fecha" size="md" type="date" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Cargo" />
                    <Input type="text" placeholder="Cargo" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Teléfono" />
                    <Input type="text" placeholder="Teléfono" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Jefe Inmediato" />
                    <Input type="text" placeholder="Jefe Inmediato" />
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Responsabiliades y/o Actividades" />
                    <Input
                      type="text"
                      placeholder="Responsabiliades y/o Actividades"
                    />
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Empresa/Institución" />
                    <Input type="text" placeholder="Comience por la ultima" />
                  </InputGroup>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Nro.</Th>
                      <Th>Empresa/Institución</Th>
                      <Th>Cargo</Th>
                      <Th>Responsabilidades y/o Actividades</Th>
                      <Th>Jefe Inmediato</Th>
                      <Th>Teléfono</Th>
                      <Th>Fecha Inicio</Th>
                      <Th>Fecha Fin</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr> */}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}

export default ResumeForm;
