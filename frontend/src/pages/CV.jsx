import React from "react";
import ProfessionalForm from "../components/ProfessionalForm.jsx";
import FormAcademicTraining from "../components/FormAcademicTraining.jsx";
import FormBooks from "../components/FormBooks.jsx";
import FormCourses from "../components/FormCourses.jsx";
import FormIntellectualProduction from "../components/FormIntellectualProduction.jsx";

import { Box, Container, Accordion } from "@chakra-ui/react";
import FormLanguages from "../components/FormLanguages.jsx";
import FormProfessionalExperience from "../components/FormProfessionalExperience.jsx";
import FormProfessionalMerits from "../components/FormProfessionalMerits.jsx";
import FormTeaching from "../components/FormTeaching.jsx";

function ResumeForm() {
  return (
    <Box mb={100}>
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
