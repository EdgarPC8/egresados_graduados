import React, { useEffect, useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "../components/PDFDocument";
import { getProfessionalsById } from "../api/professionalRequest.js";
import { getOneUser } from "../api/userRequest.js";
import {
  getProfessionalExperienceById,
  getLanguagesById,
  getAcademicProfessionalMeritsById,
  getAcademicTrainingById,
  getTeachingExperienceById,
  getCoursesWorkshopsById,
  getIntellectualProductionById,
  getBooksById,
} from "../api/cvRequest";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function CvProfessionalPdf() {
  const [showPDF, setShowPDF] = useState(false);
  const { userId } = useParams();
  const { user } = useAuth();

  let initialFormProfessional = {
    ci: "",
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    bloodType: "",
    birthDate: "",
    gender: "",
    civilStatus: "",
    nationality: "",
    placeBirth: "",
    placeResidence: "",
    direction: "",
    homePhone: "",
    cellPhone: "",
    personalEmail: "",
    institutionalEmail: "",
    image: "",
    idUser: "",
  };
  const [formProfessional, setFormProfessional] = useState(
    initialFormProfessional,
  );

  const [ListAcademicTraining, setListAcademicTraining] = useState([]);
  const [ListProfessionalExperience, setListProfessionalExperience] = useState(
    [],
  );
  const [ListLanguages, setListLanguages] = useState([]);
  const [ListAcademicProfessionalMerits, setListAcademicProfessionalMerits] =
    useState([]);
  const [ListBooks, setListBooks] = useState([]);
  const [ListIntellectualProduction, setListIntellectualProduction] = useState(
    [],
  );
  const [ListCoursesWorkshops, setListCoursesWorkshops] = useState([]);
  const [ListTeachingExperience, setListTeachingExperience] = useState([]);
  async function fetchData({ userId }) {
    try {
      // const res = await verifyTokenRequest();
      // const idUser = res.data.userId;
      const { data } = await getOneUser(userId);
      const resProfessionals = await getProfessionalsById(userId);
      resProfessionals.data.image = data.photo;
      const professionalData = resProfessionals.data;

      const resAcademicTraining = await getAcademicTrainingById(userId);
      const resProfessionalExperience =
        await getProfessionalExperienceById(userId);
      const resLanguages = await getLanguagesById(userId);
      const resAcademicProfessionalMerits =
        await getAcademicProfessionalMeritsById(userId);
      const resBooks = await getBooksById(userId);
      const resIntellectualProduction =
        await getIntellectualProductionById(userId);
      const resCoursesWorkshops = await getCoursesWorkshopsById(userId);
      const resTeachingExperience = await getTeachingExperienceById(userId);

      const academicTrainingData = resAcademicTraining.data.map((objeto) => {
        const {
          type,
          obtainedTitle,
          educationalInstitution,
          date,
          place,
          country,
          senescytRegistrationN,
        } = objeto;
        return {
          0: type,
          1: obtainedTitle,
          2: educationalInstitution,
          3: date,
          4: place,
          5: country,
          6: senescytRegistrationN,
        };
      });
      const teachingData = resTeachingExperience.data.map((objeto) => {
        const {
          educationalInstitution,
          subject,
          startDate,
          endDate,
          modality,
          place,
          country,
        } = objeto;
        return {
          0: educationalInstitution,
          1: subject,
          2: startDate,
          3: endDate,
          4: modality,
          5: place,
          6: country,
        };
      });
      const coursesData = resCoursesWorkshops.data.map((objeto) => {
        const {
          startDate,
          endDate,
          place,
          type,
          duration,
          typeParticipation,
          name,
          organizedBy,
        } = objeto;
        return {
          0: type,
          1: name,
          2: organizedBy,
          3: place,
          4: duration,
          5: startDate,
          6: endDate,
          7: typeParticipation,
        };
      });
      const intellectualProductionData = resIntellectualProduction.data.map(
        (objeto) => {
          const { type, name, typeAuthorship, date, webLink } = objeto;
          return { 0: type, 1: name, 2: typeAuthorship, 3: date, 4: webLink };
        },
      );
      const booksData = resBooks.data.map((objeto) => {
        const {
          type,
          typeAuthorship,
          editorialName,
          editorialOrigin,
          year,
          isbN,
          title,
        } = objeto;
        return {
          0: title,
          1: type,
          2: typeAuthorship,
          3: isbN,
          4: editorialName,
          5: editorialOrigin,
          6: year,
        };
      });
      const professionalMeritsData = resAcademicProfessionalMerits.data.map(
        (objeto) => {
          const { name, date, type, grantedBy, country, location } = objeto;
          return {
            0: name,
            1: date,
            2: type,
            3: grantedBy,
            4: country,
            5: location,
          };
        },
      );
      const languagesData = resLanguages.data.map((objeto) => {
        const {
          name,
          speakingLevel,
          writingLevel,
          comprehensionLevel,
          typeCertification,
        } = objeto;
        return {
          0: name,
          1: speakingLevel,
          2: writingLevel,
          3: comprehensionLevel,
          4: typeCertification,
        };
      });
      const professionalExperienceData = resProfessionalExperience.data.map(
        (objeto) => {
          const {
            companyInstitution,
            position,
            responsibilities,
            immediateHead,
            telephone,
            startDate,
            endDate,
          } = objeto;
          return {
            0: companyInstitution,
            1: position,
            2: responsibilities,
            3: immediateHead,
            4: telephone,
            5: startDate,
            6: endDate,
          };
        },
      );

      setFormProfessional(professionalData);
      setListAcademicTraining(academicTrainingData);
      setListProfessionalExperience(professionalExperienceData);
      setListCoursesWorkshops(coursesData);
      setListAcademicProfessionalMerits(professionalMeritsData);
      setListBooks(booksData);
      setListIntellectualProduction(intellectualProductionData);
      setListLanguages(languagesData);
      setListTeachingExperience(teachingData);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  useEffect(() => {
    // Establecer el estado para mostrar el PDF
    //
    setShowPDF(true);
    if (userId) {
      fetchData({ userId });
      return;
    }
    fetchData({ userId: user.userId });
  }, []);
  return (
    <>
      {showPDF && (
        <PDFViewer width="100%" height="800px">
          <PDFDocument
            data={formProfessional}
            cv={{
              FormacionAcademica: {
                title: "FORMACIÓN ACADÉMICA",
                header: [
                  { width: "50%", title: "Tipo" },
                  { width: "50%", title: "Título Obtenido" },
                  { width: "50%", title: "Institución educativa" },
                  { width: "50%", title: "Fecha" },
                  { width: "50%", title: "Lugar" },
                  { width: "50%", title: "País" },
                  { width: "50%", title: "Nro" },
                ],
                values: ListAcademicTraining,
              },
              ExperienciaDocente: {
                title: "EXPERIENCIA DOCENTE",
                header: [
                  { width: "50%", title: "Institución" },
                  { width: "50%", title: "Materia" },
                  { width: "50%", title: "Fecha Inicio" },
                  { width: "50%", title: "Fecha Fin" },
                  { width: "50%", title: "Modalidad" },
                  { width: "50%", title: "Lugar" },
                  { width: "50%", title: "País" },
                ],
                values: ListTeachingExperience,
              },
              Cursos: {
                title: "CURSOS, TALLERES, SEMINARIOS, CONGRESOS Y /U OTROS",
                header: [
                  { width: "50%", title: "Tipos" },
                  { width: "50%", title: "Nombre" },
                  { width: "50%", title: "Organizado por:" },
                  { width: "50%", title: "Lugar" },
                  { width: "30%", title: "Duracion (Horas)" },
                  {
                    width: "80%",
                    row: [
                      { col: [{ title: "Fechas de Realización" }] },
                      {
                        col: [
                          { title: "Fecha Inicio" },
                          { title: "Fecha Fin" },
                        ],
                      },
                    ],
                  },

                  { width: "40%", title: "Tipo de Participación" },
                ],
                values: ListCoursesWorkshops,
                valuesPorcentajes: [
                  "50%",
                  "50%",
                  "50%",
                  "50%",
                  "30%",
                  "40%",
                  "40%",
                  "40%",
                ],
              },
              ProduccionIntelectual: {
                title: "PRODUCCIÓN INTELECTUAL",
                header: [
                  { width: "50%", title: "Tipo" },
                  { width: "50%", title: "Nombre/Titulo" },
                  { width: "50%", title: "Tipo de Autoria" },
                  { width: "50%", title: "Fecha" },
                  { width: "50%", title: "Enlace Web" },
                ],
                values: ListIntellectualProduction,
              },
              Libros: {
                title: "LIBROS",
                header: [
                  { width: "50%", title: "Titulo" },
                  { width: "50%", title: "Tipo" },
                  { width: "50%", title: "Tipo de Autoria" },
                  { width: "50%", title: "ISB N" },
                  {
                    width: "80%",
                    row: [
                      { col: [{ title: "Editorial" }] },
                      {
                        col: [{ title: "Nombre" }, { title: "Origen" }],
                      },
                    ],
                  },
                  { width: "50%", title: "Año" },
                ],
                values: ListBooks,
                valuesPorcentajes: [
                  "50%",
                  "50%",
                  "50%",
                  "50%",
                  "40%",
                  "40%",
                  "50%",
                ],
              },
              MeritosAcademicos: {
                title: "MERITOS ACADÉMICOS",
                header: [
                  { width: "50%", title: "Nombre" },
                  { width: "50%", title: "Fecha" },
                  { width: "50%", title: "Tipo" },
                  { width: "50%", title: "Otorgado por" },
                  { width: "50%", title: "País" },
                  { width: "50%", title: "Lugar" },
                ],
                values: ListAcademicProfessionalMerits,
              },
              Idiomas: {
                title: "IDIOMAS",
                header: [
                  { width: "30%", title: "Idioma" },
                  {
                    width: "90%",
                    row: [
                      { col: [{ title: "Nivel de dominio" }] },
                      {
                        col: [
                          { title: "Hablado" },
                          { title: "Escritura" },
                          { title: "Comprensión" },
                        ],
                      },
                    ],
                  },
                  { width: "50%", title: "Tipo de Certificación" },
                ],
                values: ListLanguages,
                valuesPorcentajes: ["30%", "30%", "30%", "30%", "50%"],
              },
              ExperienciaProfesional: {
                title: "EXPERIENCIA PROFESIONAL",
                header: [
                  { width: "50%", title: "Empresa/Institución" },
                  { width: "50%", title: "Cargo" },
                  { width: "50%", title: "Responsabilidades y/o Actividades" },
                  { width: "50%", title: "Jefe Inmediato" },
                  { width: "50%", title: "Teléfono" },
                  { width: "50%", title: "Fecha Inicio" },
                  { width: "50%", title: "Fecha Fin" },
                ],
                values: ListProfessionalExperience,
              },
            }}
          />
        </PDFViewer>
      )}
    </>
  );
}

export default CvProfessionalPdf;
