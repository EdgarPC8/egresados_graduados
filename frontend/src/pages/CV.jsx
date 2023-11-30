import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios.js";
import { reorderDate } from "../helpers/date.js";
import { handleEditClick, handleDeleteClick } from "../helpers/editForm.js";
import { form } from "../components/Forms.js";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import ProfessionalForm from "../components/ProfessionalForm.jsx";
import FormAcademicTraining from "../components/FormAcademicTraining.jsx";
import FormBooks from "../components/FormBooks.jsx";
import FormCourses from "../components/FormCourses.jsx";
import FormIntellectualProduction from "../components/FormIntellectualProduction.jsx";

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
import FormLanguages from "../components/FormLanguages.jsx";
import FormProfessionalExperience from "../components/FormProfessionalExperience.jsx";
import FormProfessionalMerits from "../components/FormProfessionalMerits.jsx";
import FormTeaching from "../components/FormTeaching.jsx";

function ResumeForm() {
  // Definición del estado inicial usando useState
  const [datosAcademic_training, setDatosAcademic_training] = useState(null);
  const [datosTeaching_experience, setDatosTeaching_experience] =
    useState(null);
  const [datosCourses_workshops, setDatosCourses_workshops] = useState(null);
  const [datosIntellectual_production, setDatosIntellectual_production] =
    useState(null);
  const [datosBooks, setDatosBooks] = useState(null);
  const [
    datosAcademic_professional_merits,
    setDatosAcademic_professional_merits,
  ] = useState(null);
  const [datosLanguages, setDatosLanguages] = useState(null);
  const [datosProfessional_experience, setDatosProfessional_experience] =
    useState(null);

  const dataTableRef1 = useRef();

  // async function fetchData() {
  //   try {
  //     const getAllAcademic_training = await axios.get("/cv/getAllAcademic_training");
  //     const getAllTeaching_experience = await axios.get("/cv/getAllTeaching_experience");
  //     const getAllCourses_workshops = await axios.get("/cv/getAllCourses_workshops");
  //     const getAllIntellectual_production = await axios.get("/cv/getAllIntellectual_production");
  //     const getAllBooks = await axios.get("/cv/getAllBooks");
  //     const getAllAcademic_professional_merits = await axios.get("/cv/getAllAcademic_professional_merits");
  //     const getAllLanguages = await axios.get("/cv/getAllLanguages");
  //     const getAllProfessional_experience = await axios.get("/cv/getAllProfessional_experience");

  //     setDatosAcademic_training(getAllAcademic_training.data);
  //     setDatosTeaching_experience(getAllTeaching_experience.data);
  //     setDatosCourses_workshops(getAllCourses_workshops.data);
  //     setDatosIntellectual_production(getAllIntellectual_production.data);
  //     setDatosBooks(getAllBooks.data);
  //     setDatosAcademic_professional_merits(getAllAcademic_professional_merits.data);
  //     setDatosLanguages(getAllLanguages.data);
  //     setDatosProfessional_experience(getAllProfessional_experience.data);
  //     return {
  //       getAllAcademic_training: getAllAcademic_training.data,
  //       getAllTeaching_experience: getAllTeaching_experience.data,
  //       getAllCourses_workshops: getAllCourses_workshops.data,
  //       getAllIntellectual_production: getAllIntellectual_production.data,
  //       getAllBooks: getAllBooks.data,
  //       getAllAcademic_professional_merits: getAllAcademic_professional_merits.data,
  //       getAllLanguages: getAllLanguages.data,
  //       getAllProfessional_experience: getAllProfessional_experience.data
  //     };
  //   } catch (error) {
  //     console.error('Error al obtener datos académicos:', error);
  //   }
  // }
  // // Obtener los datos académicos una vez al cargar el componente
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Este efecto se ejecuta solo una vez al montar el componente
  // Resto de tu código...

  // async function formAcademic_training(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   const form = document.getElementById("formAcademic_training");
  //   const submitButton = form.querySelector('button[type="submit"]');

  //   // const purpose = event.submitter.getAttribute('data-purpose'); // Obtén el valor de data-purpose del botón que desencadenó el envío
  //   try {
  //     if (submitButton.innerHTML === 'Guardar') {
  //     console.log('Datos del formulario para Crear:', dataForm);
  //       const { data } = await axios.post("/cv/addAcademic_training", dataForm);
  //       setDatosAcademic_training([...datosAcademic_training, dataForm]);
  //     } else if (submitButton.innerHTML === 'Editar') {
  //     console.log('Datos del formulario para Editar:', submitButton.value);
  //     const obj = {
  //       columns:dataForm,
  //       where: { where: { id: submitButton.value }},
  //     }
  //     const { data } = await axios.put("/cv/editAcademic_training", obj);
  //     console.log(data)
  //     const updatedData = await fetchData();
  //     setDatosAcademic_training(updatedData.getAllAcademic_training);

  //     }
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }
  // async function formTeaching_experience(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   const form = document.getElementById("formTeaching_experience");
  //   const submitButton = form.querySelector('button[type="submit"]');
  //   try {
  //     if (submitButton.innerHTML === 'Guardar') {
  //         const { data } = await axios.post("/cv/addTeaching_experience", dataForm);
  //         setDatosTeaching_experience([...datosTeaching_experience, dataForm]);

  //       } else if (submitButton.innerHTML === 'Editar') {
  //       console.log('Datos del formulario para Editar:', submitButton.value);
  //       // const obj = {
  //       //   columns:dataForm,
  //       //   where: { where: { id: submitButton.value }},
  //       // }
  //       // const { data } = await axios.put("/cv/editAcademic_training", obj);
  //       // console.log(data)
  //       // const updatedData = await fetchData();
  //       // setDatosAcademic_training(updatedData.getAllAcademic_training);

  //       }
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }
  // async function formCourses_workshops(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   console.log('Datos del formulario:', dataForm);
  //   try {
  //     // Puedes hacer la solicitud para agregar datos académicos aquí
  //     // Por ejemplo:

  //     const { data } = await axios.post("/cv/addCourses_workshops", dataForm);
  //     // Luego, si es necesario, actualizar los datos en el estado local:
  //     // console.log(dataForm)

  //     setDatosCourses_workshops([...datosCourses_workshops, dataForm]);
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }
  // async function formIntellectual_production(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   console.log('Datos del formulario:', dataForm);
  //   try {
  //     // Puedes hacer la solicitud para agregar datos académicos aquí
  //     // Por ejemplo:
  //     const { data } = await axios.post("/cv/addIntellectual_production", dataForm);
  //     // Luego, si es necesario, actualizar los datos en el estado local:
  //     // console.log(dataForm)

  //     setDatosIntellectual_production([...datosIntellectual_production, dataForm]);
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }

  // async function formAcademic_professional_merits(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   console.log('Datos del formulario:', dataForm);
  //   try {
  //     // Puedes hacer la solicitud para agregar datos académicos aquí
  //     // Por ejemplo:
  //     const { data } = await axios.post("/cv/addAcademic_professional_merits", dataForm);
  //     // Luego, si es necesario, actualizar los datos en el estado local:
  //     // console.log(dataForm)

  //     setDatosAcademic_professional_merits([...datosAcademic_professional_merits, dataForm]);
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }
  // async function formLanguages(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   console.log('Datos del formulario:', dataForm);
  //   try {
  //     // Puedes hacer la solicitud para agregar datos académicos aquí
  //     // Por ejemplo:
  //     const { data } = await axios.post("/cv/addLanguages", dataForm);
  //     // Luego, si es necesario, actualizar los datos en el estado local:
  //     // console.log(dataForm)

  //     setDatosLanguages([...datosLanguages, dataForm]);
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }
  // async function formProfessional_experience(event) {
  //   event.preventDefault();
  //   const dataForm = Object.fromEntries(new FormData(event.target));
  //   console.log('Datos del formulario:', dataForm);
  //   try {
  //     // Puedes hacer la solicitud para agregar datos académicos aquí
  //     // Por ejemplo:
  //     const { data } = await axios.post("/cv/addProfessional_experience", dataForm);
  //     // Luego, si es necesario, actualizar los datos en el estado local:
  //     // console.log(dataForm)

  //     setDatosProfessional_experience([...datosProfessional_experience, dataForm]);
  //   } catch (error) {
  //     console.error('Error en getAllProfessionals:', error);
  //     throw error;
  //   }
  // }

  return (
    <Box fontSize={50} mb={100}>
      <Container maxW={"container.xl"}>
        <Grid
          templateColumns={{ base: "8fr 1fr", md: "8fr 1fr" }}
          gap={1}
          mt={2}
        >
          <GridItem>
            <Box bg="primary.100" color="white" p={2} borderRadius="md">
              <Heading as="h1" textAlign="center">
                HOJA DE VIDA
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg="primary.100"
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
        <ProfessionalForm />
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Accordion allowToggle>
          <FormBooks />
          <FormAcademicTraining />
          <FormCourses />

          <FormIntellectualProduction />
          <FormLanguages />
          <FormProfessionalExperience />
          <FormProfessionalMerits />
          <FormTeaching />
        </Accordion>
      </Container>
    </Box>
  );
}

export default ResumeForm;
