import React, { useState, useEffect,useRef } from 'react';
import axios from "../api/axios.js";
import {reorderDate} from "../helpers/date.js";
import {handleEditClick,handleDeleteClick} from "../helpers/editForm.js";
import {form} from "../components/Forms.js";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import DataTable from "../components/DataTables.jsx"; 

import {
  ChakraProvider,
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
  FormControl,
} from "@chakra-ui/react";

function ResumeForm() {
// Definición del estado inicial usando useState
const [datosAcademic_training, setDatosAcademic_training] = useState(null);
const [datosTeaching_experience, setDatosTeaching_experience] = useState(null);
const [datosCourses_workshops, setDatosCourses_workshops] = useState(null);
const [datosIntellectual_production, setDatosIntellectual_production] = useState(null);
const [datosBooks, setDatosBooks] = useState(null);
const [datosAcademic_professional_merits, setDatosAcademic_professional_merits] = useState(null);
const [datosLanguages, setDatosLanguages] = useState(null);
const [datosProfessional_experience, setDatosProfessional_experience] = useState(null);

const dataTableRef1 = useRef();

async function fetchData() {
  try {
    const getAllAcademic_training = await axios.get("/cv/getAllAcademic_training");
    const getAllTeaching_experience = await axios.get("/cv/getAllTeaching_experience");
    const getAllCourses_workshops = await axios.get("/cv/getAllCourses_workshops");
    const getAllIntellectual_production = await axios.get("/cv/getAllIntellectual_production");
    const getAllBooks = await axios.get("/cv/getAllBooks");
    const getAllAcademic_professional_merits = await axios.get("/cv/getAllAcademic_professional_merits");
    const getAllLanguages = await axios.get("/cv/getAllLanguages");
    const getAllProfessional_experience = await axios.get("/cv/getAllProfessional_experience");

    setDatosAcademic_training(getAllAcademic_training.data);
    setDatosTeaching_experience(getAllTeaching_experience.data);
    setDatosCourses_workshops(getAllCourses_workshops.data);
    setDatosIntellectual_production(getAllIntellectual_production.data);
    setDatosBooks(getAllBooks.data);
    setDatosAcademic_professional_merits(getAllAcademic_professional_merits.data);
    setDatosLanguages(getAllLanguages.data);
    setDatosProfessional_experience(getAllProfessional_experience.data);
    return {
      getAllAcademic_training: getAllAcademic_training.data,
      getAllTeaching_experience: getAllTeaching_experience.data,
      getAllCourses_workshops: getAllCourses_workshops.data,
      getAllIntellectual_production: getAllIntellectual_production.data,
      getAllBooks: getAllBooks.data,
      getAllAcademic_professional_merits: getAllAcademic_professional_merits.data,
      getAllLanguages: getAllLanguages.data,
      getAllProfessional_experience: getAllProfessional_experience.data
    };
  } catch (error) {
    console.error('Error al obtener datos académicos:', error);
  }
}
// Obtener los datos académicos una vez al cargar el componente
useEffect(() => {
  fetchData();
}, []); // Este efecto se ejecuta solo una vez al montar el componente
// Resto de tu código...
async function formProfessional(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  try {
    const { data } = await axios.post("/professionals/addProfessional", dataForm);
    console.log(data);
    // En su lugar, podrías hacer una nueva solicitud para actualizar los datos si es necesario

  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formAcademic_training(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  const form = document.getElementById("formAcademic_training");
  const submitButton = form.querySelector('button[type="submit"]');

  // const purpose = event.submitter.getAttribute('data-purpose'); // Obtén el valor de data-purpose del botón que desencadenó el envío
  try {
    if (submitButton.innerHTML === 'Guardar') {
    console.log('Datos del formulario para Crear:', dataForm);
      const { data } = await axios.post("/cv/addAcademic_training", dataForm);
      setDatosAcademic_training([...datosAcademic_training, dataForm]);
    } else if (submitButton.innerHTML === 'Editar') {
    console.log('Datos del formulario para Editar:', submitButton.value);
    const obj = {
      columns:dataForm,
      where: { where: { id: submitButton.value }},
    }
    const { data } = await axios.put("/cv/editAcademic_training", obj);
    console.log(data)
    const updatedData = await fetchData();
    setDatosAcademic_training(updatedData.getAllAcademic_training);


    } 
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formTeaching_experience(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  const form = document.getElementById("formTeaching_experience");
  const submitButton = form.querySelector('button[type="submit"]');
  try {
    if (submitButton.innerHTML === 'Guardar') {
        const { data } = await axios.post("/cv/addTeaching_experience", dataForm);
        setDatosTeaching_experience([...datosTeaching_experience, dataForm]);


      } else if (submitButton.innerHTML === 'Editar') {
      console.log('Datos del formulario para Editar:', submitButton.value);
      // const obj = {
      //   columns:dataForm,
      //   where: { where: { id: submitButton.value }},
      // }
      // const { data } = await axios.put("/cv/editAcademic_training", obj);
      // console.log(data)
      // const updatedData = await fetchData();
      // setDatosAcademic_training(updatedData.getAllAcademic_training);
  
  
      } 
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formCourses_workshops(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  console.log('Datos del formulario:', dataForm);
  try {
    // Puedes hacer la solicitud para agregar datos académicos aquí
    // Por ejemplo:

    const { data } = await axios.post("/cv/addCourses_workshops", dataForm);
    // Luego, si es necesario, actualizar los datos en el estado local:
    // console.log(dataForm)

    setDatosCourses_workshops([...datosCourses_workshops, dataForm]);
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formIntellectual_production(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  console.log('Datos del formulario:', dataForm);
  try {
    // Puedes hacer la solicitud para agregar datos académicos aquí
    // Por ejemplo:
    const { data } = await axios.post("/cv/addIntellectual_production", dataForm);
    // Luego, si es necesario, actualizar los datos en el estado local:
    // console.log(dataForm)

    setDatosIntellectual_production([...datosIntellectual_production, dataForm]);
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formBooks(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  console.log('Datos del formulario:', dataForm);
  try {
    // Puedes hacer la solicitud para agregar datos académicos aquí
    // Por ejemplo:
    const { data } = await axios.post("/cv/addBooks", dataForm);
    // Luego, si es necesario, actualizar los datos en el estado local:
    // console.log(dataForm)

    setDatosBooks([...datosBooks, dataForm]);
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formAcademic_professional_merits(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  console.log('Datos del formulario:', dataForm);
  try {
    // Puedes hacer la solicitud para agregar datos académicos aquí
    // Por ejemplo:
    const { data } = await axios.post("/cv/addAcademic_professional_merits", dataForm);
    // Luego, si es necesario, actualizar los datos en el estado local:
    // console.log(dataForm)

    setDatosAcademic_professional_merits([...datosAcademic_professional_merits, dataForm]);
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formLanguages(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  console.log('Datos del formulario:', dataForm);
  try {
    // Puedes hacer la solicitud para agregar datos académicos aquí
    // Por ejemplo:
    const { data } = await axios.post("/cv/addLanguages", dataForm);
    // Luego, si es necesario, actualizar los datos en el estado local:
    // console.log(dataForm)

    setDatosLanguages([...datosLanguages, dataForm]);
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
async function formProfessional_experience(event) {
  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  console.log('Datos del formulario:', dataForm);
  try {
    // Puedes hacer la solicitud para agregar datos académicos aquí
    // Por ejemplo:
    const { data } = await axios.post("/cv/addProfessional_experience", dataForm);
    // Luego, si es necesario, actualizar los datos en el estado local:
    // console.log(dataForm)

    setDatosProfessional_experience([...datosProfessional_experience, dataForm]);
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}
  return (
    <Box fontSize={50} mb={100}>
      

      <Container maxW={"container.xl"}>
        <Grid templateColumns={{ base: "8fr 1fr", md: "8fr 1fr" }} gap={1} mt={2}>
          <GridItem>
            <Box bg="primary.100" color="white" p={2} borderRadius="md">
              <Heading as="h1" textAlign="center" >
                HOJA DE VIDA
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="primary.100" color="white" borderRadius="md" p={2} alignItems="center">
              <Heading as="h3" fontSize="xl">
                CÓDIGO
              </Heading>
              <Heading as="h3" fontSize={{ base: 10, md: "md" }} >
                2131323x2342
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <form onSubmit={formProfessional}>
        <Grid templateColumns={{ base: "1fr", md: "9fr 1fr" }} gap={4} mt={2}>
          <GridItem order={{ base: 2, md: 1 }}>
            <Heading as="h3" size="md" textAlign="left">
              DATOS PERSONALES
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={2} mt={2}>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Cedula' />
                  <Input type='number' placeholder='Cedula' name="ci" isRequired/>
                </InputGroup>
              </GridItem>
              <GridItem></GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Primer Apellido' />
                  <Input type='text' placeholder='Primer Apellido' name="first_lastname"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Segundo Apellido'/>
                  <Input type='text' placeholder='Segundo Apellido' name="second_lastname"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Primer Nombre' />
                  <Input type='text' placeholder='Primer Nombre' name="first_name"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Segundo Nombre' />
                  <Input type='text' placeholder='Segundo Nombre' name="second_name"/>
                </InputGroup>
              </GridItem>
             
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Genero' />
                  <Select placeholder='Seleccione una opción' name="gender">
                    <option value='F'>Femenino</option>
                    <option value='M'>Masculino</option>
                  </Select>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Tipo de Sangre' />
                  <Input type='text' placeholder='Tipo de Sangre' name="blood_type"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Fecha de nacimiento'/>
                  <Input
                    placeholder="Fecha"
                    size="md"
                    type="date"
                    name="birth_date"
                    required
                  />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Estado Civil' />
                  <Select placeholder='Seleccione una opción' name="civil_status">
                    <option value='option1'>Soltero</option>
                    <option value='option2'>Viudo</option>
                    <option value='option3'>Casado</option>
                    <option value='option3'>Divorciado</option>
                  </Select>
                </InputGroup>
              </GridItem>
              
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Nacionalidad' />
                  <Input type='text' placeholder='Nacionalidad' name="nationality"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Teléfono de domicilio' />
                  <Input type='tel' placeholder='Teléfono de domicilio' name="home_phone"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Teléfono de celular' />
                  <Input type='tel' placeholder='Teléfono de celular' name="cell_phone"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Lugar de Nacimiento' />
                  <Input type='text' placeholder='Lugar de Nacimiento' name="place_birth"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Dirección de domicilio' />
                  <Input type='text' placeholder='Dirección de domicilio' name="direction"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Lugar de residencia' />
                  <Input type='text' placeholder='Lugar de residencia' name="place_residence"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='@' />
                  <Input type='email' placeholder='Correo Electrónico Institucional' name="institutional_email"/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='@' />
                  <Input type='email' placeholder='Correo Electrónico Personal' name="personal_email"/>
                </InputGroup>
              </GridItem>
            </Grid>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>

              <GridItem fontSize={"sm"} border="1px solid #ccc" borderRadius={8}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                  <GridItem fontSize={"lg"} margin={"auto"} >
                    Discapacidad:
                  </GridItem>
                  <GridItem fontSize={"sm"}>
                    <InputGroup>
                      <InputLeftAddon children='Tipo' w={110} />
                      <Input type='text' placeholder='Tipo' />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon children='Nro' w={110} />
                      <Input type='text' placeholder='Nro' />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon children='Porcentaje' w={110} />
                      <Input type='text' placeholder='Porcentaje' />
                    </InputGroup>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem order={{ base: 1, md: 1 }} textAlign={"center"} margin={"auto"}>
            <Box bg="primary.200" color="white" borderRadius="md" w={300} h={300}>
              <Heading as="h3" mt={1}>
                Foto Carnet
              </Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"center"} margin={"auto"}>
            <Button type="submit" mt={4} bg="primary.200" color={"white"}>
              Guardar
            </Button>
          </GridItem>
        </Grid>
        </form>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Accordion allowToggle>
        <form onSubmit={form} id="formAcademic_training">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  FORMACIÓN ACADÉMICA
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo' />
                    <Select placeholder='Seleccione una opción' name="type">
                      <option value='Secundaria'>Secundaria</option>
                      <option value='Tercer Nivel'>Tercer Nivel</option>
                      <option value='Cuarto Nivel'>Cuarto Nivel</option>
                    </Select>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha' />
                    <Input placeholder="Fecha" size="md" type="date" name="date" required/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Lugar' />
                    <Input type='text' placeholder='Lugar' name="place"/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='País' />
                    <Input type='text' placeholder='País' name="country"/>
                  </InputGroup>
                </GridItem>

              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Título Obtenido' />
                    <Input type='text' placeholder='Título Obtenido' name="obtained_tittle" required/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Institución Educativa'/>
                    <Input type='text' placeholder='Institución Educativa' name="educational_institution" required/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Nro. de registro SENESCYT' />
                    <Input type='text' placeholder='Nro. de registro SENESCYT' name="senescyt_registration_n"/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"} _hover={{bg:"primary.100"}} data-purpose="create" >
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <ChakraProvider>
      <DataTable 
      tableTitle="Datos"
      data={datosAcademic_training} 
      columnHeaders={[
        '#',
        'Tipo',
        'Título Obtenido',
        'Institución Educativa',
        'Fecha',
        'Lugar',
        'País',
        'Nro. de registro SENESCYT',
        'Acción'
      ]} 
      columnKeys={[
        'rowNumber',
        'type',
        'date',
        'place',
        'country',
        'obtained_tittle',
        'educational_institution',
        'senescyt_registration_n',
        'senescyt_registration_n'
        ]} 
      ref={dataTableRef1}/>
      </ChakraProvider>
              {/* <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Tipo</Th>
                      <Th>Título Obtenido</Th>
                      <Th>Institución Educativa</Th>
                      <Th>Fecha</Th>
                      <Th>Lugar</Th>
                      <Th>País</Th>
                      <Th>Nro. de registro SENESCYT</Th>
                      <Th>Acción</Th>
                    </Tr>
                  </Thead>
                  {datosAcademic_training ? (
                    <Tbody>
                      {datosAcademic_training.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.type}</Td>
                          <Td>{reorderDate(item.date)}</Td>
                          <Td>{item.place}</Td>
                          <Td>{item.country}</Td>
                          <Td>{item.obtained_tittle}</Td>
                          <Td>{item.educational_institution}</Td>
                          <Td>{item.senescyt_registration_n}</Td>
                          <Td>
                          <Button
                            type="button"
                            mt={4}
                            bg="yellow"
                            _hover={{ bg: "yellow.300" }}
                            color={"white"}
                            onClick={(event) => handleEditClick(item,event)} // Maneja el clic en el botón de editar
                            data-form-id="formAcademic_training"
                          >
                            <EditIcon />
                          </Button>

                          <Button type="button" mt={4} bg="red"_hover={{bg:"red.600"}} color={"white"} onClick={(event)=> handleDeleteClick(item.id,event)}>
                            <DeleteIcon />
                          </Button>

                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}

                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer> */}
            </AccordionPanel>
          </AccordionItem>
        </form>
        <form onSubmit={formTeaching_experience} id='formTeaching_experience'>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  EXPERIENCIA DOCENTE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Inicio' />
                    <Input placeholder="Fecha" size="md" type="date" required name='start_date'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Fin' />
                    <Input placeholder="Fecha" size="md" type="date" required name='end_date'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Lugar' />
                    <Input type='text' placeholder='Lugar'  name='place'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='País' />
                    <Input type='text' placeholder='País'  name='country'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Materia' />
                    <Input type='text' placeholder='Materia/Componente Educativo' required name='subject'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Modalidad' />
                    <Input type='text' placeholder='Modalidad'  name='modality'/>
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Institución Educativa' />
                    <Input type='text' placeholder='Institución Educativa' required name='educational_institution'/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
               
                <TableContainer mb={4}>
                   <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Institución Educativa</Th>
                      <Th>Materia/Componente Educativo</Th>
                      <Th>Fecha Inicio</Th>
                      <Th>Fecha Fin</Th>
                      <Th>Modalidad</Th>
                      <Th>Lugar</Th>
                      <Th>País</Th>
                    </Tr>
                  </Thead>
                  {datosTeaching_experience ? (
                    <Tbody>
                      {datosTeaching_experience.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.educational_institution}</Td>
                          <Td>{item.subject}</Td>
                          <Td>{reorderDate(item.start_date)}</Td>
                          <Td>{reorderDate(item.end_date)}</Td>
                          <Td>{item.modality}</Td>
                          <Td>{item.place}</Td>
                          <Td>{item.country}</Td>
                          <Td>
                          <Button
                            type="button"
                            mt={4}
                            bg="yellow"
                            _hover={{ bg: "yellow.300" }}
                            color={"white"}
                            onClick={(event) => handleEditClick(item,event)} // Maneja el clic en el botón de editar
                            data-form-id="formTeaching_experience"
                          >
                            <EditIcon />
                          </Button>

                          <Button type="button" mt={4} bg="red"_hover={{bg:"red.600"}} color={"white"} onClick={(event)=> handleDeleteClick(item.id,event)}>
                            <DeleteIcon />
                          </Button>

                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
                
                </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </form>
        <form onSubmit={formCourses_workshops}>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  CURSOS, TALLERES, SEMINARIOS, CONGRESOS, Y /U OTROS (Certificaciones hasta 5 años)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Inicio' />
                    <Input placeholder="Fecha" size="md" type="date" name='start_date'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Fin' />
                    <Input placeholder="Fecha" size="md" type="date" name='end_date'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Lugar' />
                    <Input type='text' placeholder='Lugar' name='place'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo' />
                    <Input type='text' placeholder='(Curso, Seminario, Taller, Congreso, Otro)' name='type'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Duración' />
                    <Input type='number' placeholder='En Horas' name='duration'/>
                  </InputGroup>
                </GridItem>

                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo participación' />
                    <RadioGroup m={"auto"}>
                      <Stack spacing={5} direction='row'>
                        <Radio colorScheme='green' value='Asistente'name='type_participation'>
                          Asistente
                        </Radio>
                        <Radio colorScheme='green' value='Expositor'name='type_participation'>
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
                    <InputLeftAddon children='Nombre' />
                    <Input type='text' placeholder='Nombre' name='name'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Organizado Por' />
                    <Input type='text' placeholder='Organizado Por' name='organized_by'/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <TableContainer mb={4} >
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th rowSpan={2}>#</Th>
                      <Th rowSpan={2}>Tipo</Th>
                      <Th rowSpan={2}>Nombre</Th>
                      <Th rowSpan={2}>Organizado Por:</Th>
                      <Th rowSpan={2}>Lugar</Th>
                      <Th rowSpan={2}>Duracion(Horas)</Th>
                      <Th textAlign={"center"} colSpan={2}>Fecha de Realización</Th>
                      <Th textAlign={"center"} colSpan={2}>Tipo de Participación</Th>
                    </Tr>
                    <Tr>
                          <Th>Fecha Inicio</Th>
                          <Th>Fecha Fin</Th>
                          <Th  textAlign={"center"}>Asistente/Expositor</Th>
                    </Tr>
                    
                  </Thead>
                  {datosCourses_workshops ? (
                    <Tbody>
                      {datosCourses_workshops.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.type}</Td>
                          <Td>{item.name}</Td>
                          <Td>{item.organized_by}</Td>
                          <Td>{item.place}</Td>
                          <Td>{item.duration}</Td>
                          <Td>{reorderDate(item.start_date)}</Td>
                          <Td>{reorderDate(item.end_date)}</Td>
                          <Td textAlign={"center"}>{item.type_participation}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          </form>
        <form onSubmit={formIntellectual_production}>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  PRODUCCIÓN INTELECTUAL
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>

                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo' />
                    <Input type='text' placeholder='Tipo' name='type'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo de Autoria' />
                    <Input type='text' placeholder='Tipo de Autoria' name='type_authorship'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Inicio' />
                    <Input placeholder="Fecha" size="md" type="date" name='date'/>
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Nombre/Titulo' />
                    <Input type='text' placeholder='Nombre/Titulo' name='name'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Enlace Web' />
                    <Input type='text' placeholder='Enlace Web' name='web_link'/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Tipo</Th>
                      <Th>Nombre/Titulo</Th>
                      <Th>Tipo de Autoria</Th>
                      <Th>Fecha</Th>
                      <Th>Enlace Web</Th>
                    </Tr>
                  </Thead>
                  {datosIntellectual_production ? (
                    <Tbody>
                      {datosIntellectual_production.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.type}</Td>
                          <Td>{item.name}</Td>
                          <Td>{item.type_authorship}</Td>
                          <Td>{reorderDate(item.date)}</Td>
                          <Td>{item.web_link}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          </form>
        <form onSubmit={formBooks}>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  LIBROS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>

                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo' />
                    <Input type='text' placeholder='(Divulgación, Científico)' name='type'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo de Autoria' />
                    <Input type='text' placeholder='(Autor, Coautor)' name='type_authorship'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Nombre de Editorial' />
                    <Input type='text' placeholder='Nombre de Editorial' name='editoral_name'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Origen de Editorial' />
                    <Input type='text' placeholder='(Nacional, Internacional)' name='editoral_origin'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Año' />
                    <Input placeholder="Fecha" size="md" type="date" name='year'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='ISB N.' />
                    <Input type='text' placeholder='ISB N.' name='isb_n'/>
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Titulo' />
                    <Input type='text' placeholder='Titulo' name='tittle'/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th rowSpan={2}>#</Th>
                      <Th rowSpan={2}>Titulo</Th>
                      <Th rowSpan={2}>Tipo</Th>
                      <Th rowSpan={2}>Tipo de Autoria</Th>
                      <Th rowSpan={2}>ISB N.</Th>
                      <Th colSpan={2} textAlign={"center"}>Editorial</Th>
                      <Th rowSpan={2}>Año</Th>
                    </Tr>
                    <Tr>
                      <Th textAlign={"center"}>Nombre</Th>
                      <Th textAlign={"center"}>Origen</Th>
                    </Tr>
                  </Thead>
                  {datosBooks ? (
                    <Tbody>
                      {datosBooks.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.tittle}</Td>
                          <Td>{item.type}</Td>
                          <Td>{item.type_authorship}</Td>
                          <Td>{item.isb_n}</Td>
                          <Td>{item.editoral_name}</Td>
                          <Td>{item.editoral_origin}</Td>
                          <Td>{item.year}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          </form>
        <form onSubmit={formAcademic_professional_merits}>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  MÉRITOS ACADÉMICOS Y PROFESIONALES
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='País' />
                    <Input type='text' placeholder='País' name='country'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Lugar' />
                    <Input type='text' placeholder='Lugar' name='location'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo' />
                    <Input type='text' placeholder='(Nacional, Internacional)' name='type'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha' />
                    <Input placeholder="Fecha" size="md" type="date" name='date'/>
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Nombre' />
                    <Input type='text' placeholder='Nombre' name='name'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Otorgado Por' />
                    <Input type='text' placeholder='Otorgado Por' name='granted_by'/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Nombre</Th>
                      <Th>Fecha</Th>
                      <Th>Tipo</Th>
                      <Th>Otorgado Por</Th>
                      <Th>País</Th>
                      <Th>Lugar</Th>
                    </Tr>
                  </Thead>
                  {datosAcademic_professional_merits ? (
                    <Tbody>
                      {datosAcademic_professional_merits.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.name}</Td>
                          <Td>{reorderDate(item.date)}</Td>
                          <Td>{item.type}</Td>
                          <Td>{item.granted_by}</Td>
                          <Td>{item.country}</Td>
                          <Td>{item.location}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          </form>
        <form onSubmit={formLanguages}>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  IDIOMAS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Nombre' />
                    <Input type='text' placeholder='Diferente al Nativo' name='name'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Tipo de Certificación' />
                    <Input type='text' placeholder='(TOEPI, TOEIC, CPE, IELTS, PET, Otro)' name='type_certification'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"} border="1px solid #ccc" borderRadius={8}>
                  <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                    <GridItem fontSize={"lg"} margin={"auto"} >
                      Nivel de Dominio:
                    </GridItem>
                    <GridItem fontSize={"sm"}>
                      <InputGroup mt={3}>
                        <InputLeftAddon w={150} children='Hablado' />
                        <RadioGroup defaultValue='' m={"auto"} name="speaking_level">
                          <Stack spacing={5} direction='row'>
                            <Radio colorScheme='green' value=''>
                              Ninguno
                            </Radio>
                            <Radio colorScheme='green' value='Básico'>
                              Básico
                            </Radio>
                            <Radio colorScheme='green' value='Medio'>
                              Medio
                            </Radio>
                            <Radio colorScheme='green' value='Alto'>
                              Alto
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </InputGroup>
                      <InputGroup mt={3}>
                        <InputLeftAddon w={150} children='Escritura' />
                        <RadioGroup defaultValue='' m={"auto"} name="writing_level">
                          <Stack spacing={5} direction='row'>
                            <Radio colorScheme='green' value=''>
                              Ninguno
                            </Radio>
                            <Radio colorScheme='green' value='Básico'>
                              Básico
                            </Radio>
                            <Radio colorScheme='green' value='Medio'>
                              Medio
                            </Radio>
                            <Radio colorScheme='green' value='Alto'>
                              Alto
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </InputGroup>
                      <InputGroup mt={3}>
                        <InputLeftAddon w={150} children='Comprensión' />
                        <RadioGroup defaultValue='' m={"auto"} name="comprehension_level">
                          <Stack spacing={5} direction='row'>
                            <Radio colorScheme='green' value=''>
                              Ninguno
                            </Radio>
                            <Radio colorScheme='green' value='Básico'>
                              Básico
                            </Radio>
                            <Radio colorScheme='green' value='Medio'>
                              Medio
                            </Radio>
                            <Radio colorScheme='green' value='Alto'>
                              Alto
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </InputGroup>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th rowSpan={3} colSpan={1}>#</Th>
                      <Th rowSpan={3} colSpan={1}>Idioma (Diferente al nativo)</Th>
                      <Th colSpan={3} textAlign="center">Nivel de dominio</Th>
                      <Th rowSpan={3} colSpan={0}>Tipo de Certificación</Th>
                    </Tr>
                    <Tr>
                      <Th textAlign="center">Hablado</Th>
                      <Th textAlign="center">Escritura</Th>
                      <Th textAlign="center">Comprensión</Th>
                    </Tr>
                    <Tr>
                      <Th textAlign="center">Básico/Medio/Alto</Th>
                      <Th textAlign="center">Básico/Medio/Alto</Th>
                      <Th textAlign="center">Básico/Medio/Alto</Th>
                    </Tr>
                  </Thead>
                  {datosLanguages ? (
                    <Tbody>
                      {datosLanguages.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.name}</Td>
                          <Td textAlign="center">{item.speaking_level}</Td>
                          <Td textAlign="center">{item.writing_level}</Td>
                          <Td textAlign="center">{item.comprehension_level}</Td>
                          <Td textAlign="center">{item.type_certification}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          </form>
        <form onSubmit={formProfessional_experience}>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  EXPERIENCIA PROFESIONAL (Los ultimos 10 años)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid gap={2} mt={2} mb={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Inicio' />
                    <Input placeholder="Fecha" size="md" type="date" name='start_date'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Fecha Fin' />
                    <Input placeholder="Fecha" size="md" type="date" name='end_date'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Cargo' />
                    <Input type='text' placeholder='Cargo' name='position'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Teléfono' />
                    <Input type='text' placeholder='Teléfono' name='telephone'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Jefe Inmediato' />
                    <Input type='text' placeholder='Jefe Inmediato' name='immediate_head'/>
                  </InputGroup>
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Responsabiliades y/o Actividades' />
                    <Input type='text' placeholder='Responsabiliades y/o Actividades' name='responsibilities'/>
                  </InputGroup>
                </GridItem>
              </Grid>
              <Grid gap={2} mt={2} mb={2}>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children='Empresa/Institución' />
                    <Input type='text' placeholder='Comience por la ultima' name='company_institution'/>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={2} order={{ base: 1, md: 1 }} textAlign={"right"}>
                  <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                    Guardar
                  </Button>
                </GridItem>
              </Grid>
              <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
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
                  {datosProfessional_experience ? (
                    <Tbody>
                      {datosProfessional_experience.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.nro}</Td>
                          <Td>{item.company_institution}</Td>
                          <Td>{item.position}</Td>
                          <Td>{item.responsibilities}</Td>
                          <Td>{item.immediate_head}</Td>
                          <Td>{item.telephone}</Td>
                          <Td>{reorderDate(item.start_date)}</Td>
                          <Td>{reorderDate(item.end_date)}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          </form>
        </Accordion>

      </Container>
    </Box>
  );
}

export default ResumeForm;