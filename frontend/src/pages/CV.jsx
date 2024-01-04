import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios.js";
import ProfessionalForm from "../components/ProfessionalForm.jsx";
import FormAcademicTraining from "../components/FormAcademicTraining.jsx";
import FormBooks from "../components/FormBooks.jsx";
import FormCourses from "../components/FormCourses.jsx";
import FormIntellectualProduction from "../components/FormIntellectualProduction.jsx";
import { FaEye } from "react-icons/fa";

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
import { Link } from "react-router-dom";


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

  return (
    <Box mb={100}>
      <Container maxW={"container.xl"}>
        <Grid
          templateColumns={{ base: "8fr 1fr", md: "8fr 1fr" }}
          gap={1}
          mt={2}
        >
          <GridItem>
            <Box bg="ceruleanBlue.500" color="white" p={2} borderRadius="md">
              <Heading as="h1" textAlign="center">
                HOJA DE VIDA
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg="ceruleanBlue.500"
              color="white"
              borderRadius="md"
              p={2}
              alignItems="center"
            >
              <Heading as="h1" textAlign="center">
                <Link to="/cvPdf" target="_blank">
                <Button
            colorScheme="red"
            leftIcon={<FaEye />}
          >
            PDF
          </Button>
                </Link>
              </Heading>
              
              {/* <Heading as="h3" fontSize="xl">
                CÓDIGO
              </Heading> */}
              {/* <Heading as="h3" fontSize={{ base: 10, md: "md" }}>
                2131323x2342
              </Heading> */}
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <ProfessionalForm />
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Accordion allowToggle>
          <FormAcademicTraining />
          <FormTeaching />
          <FormCourses />
          <FormIntellectualProduction />
          <FormBooks />
          <FormProfessionalMerits />
          <FormLanguages />
          <FormProfessionalExperience />
        </Accordion>
      </Container>
    </Box>
  );
}

export default ResumeForm;
