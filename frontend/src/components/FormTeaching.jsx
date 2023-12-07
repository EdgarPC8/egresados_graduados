import {
  Box,
  Input,
  Grid,
  GridItem,
  InputLeftAddon,
  InputGroup,
  Button,
  TableContainer,
  Table,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  Tfoot,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import {
  addTeachingExperience,
  getAllTeachingExperience,
  editTeachingExperience,
  deleteTeachingExperience,
} from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormTeaching() {
  const initialFormTeaching = {
    educationalInstitution: "",
    subject: "",
    startDate: "",
    endDate: "",
    modality: "",
    place: "",
    country: "",
  };

  const [datosTeachingExperience, setDatosTeachingExperience] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [id, setId] = useState(false);
  const [formTeaching, setFormTeaching] = useState(initialFormTeaching);

  function clear() {
    setIsEditing(false);
    setId(false);
    setFormTeaching(initialFormTeaching);
  }
  async function fetchData() {
    try {
      const { data } = await getAllTeachingExperience();
      setDatosTeachingExperience(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditing) {
        const { data } = await editTeachingExperience(id, formTeaching);
        fetchData();
      } else {
        const { data } = await addTeachingExperience(formTeaching); // assuming addTeachingExperience is an asynchronous function
        setDatosTeachingExperience([...datosTeachingExperience, formTeaching]); // Assuming the returned data is the newly added item
      }
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormTeaching({ ...formTeaching, [name]: value });
  };

  const handleEditRow = (row, event) => {
    const {
      educationalInstitution,
      subject,
      startDate,
      endDate,
      modality,
      place,
      country,
    } = row;
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsEditing(true);
    setId(row.id);
    setFormTeaching({
      educationalInstitution,
      subject,
      startDate,
      endDate,
      modality,
      place,
      country,
    });
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id);
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteTeachingExperience(id);
      fetchData();
      clear();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit} ref={form}>
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
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  required
                  name="startDate"
                  value={formTeaching.startDate}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha Fin" />
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  required
                  name="endDate"
                  value={formTeaching.endDate}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar" />
                <Input
                  type="text"
                  placeholder="Lugar"
                  name="place"
                  value={formTeaching.place}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="País" />
                <Input
                  type="text"
                  placeholder="País"
                  name="country"
                  value={formTeaching.country}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Materia" />
                <Input
                  type="text"
                  placeholder="Materia/Componente Educativo"
                  required
                  name="subject"
                  value={formTeaching.subject}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Modalidad" />
                <Input
                  type="text"
                  placeholder="Modalidad"
                  name="modality"
                  value={formTeaching.modality}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Institución Educativa" />
                <Input
                  type="text"
                  placeholder="Institución Educativa"
                  required
                  name="educationalInstitution"
                  value={formTeaching.educationalInstitution}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem
              colSpan={2}
              order={{ base: 1, md: 1 }}
              textAlign={"right"}
            >
              <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                {!isEditing ? "Guardar" : "Editar"}
              </Button>
            </GridItem>
          </Grid>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAccept={handleAcceptDelete}
            title="Datos"
            message="¿Estas Seguro que deseas eliminar?"
          ></Modal>
          <DataTable
            header={[
              "Institución",
              "Materia",
              "Fecha Inicio",
              "Fecha Fin",
              "Modalidad",
              "Lugar",
              "País",
              "Acción",
            ]}
            keyValues={[
              "educational_institution",
              "subject",
              "startDate",
              "endDate",
              "modality",
              "place",
              "country",
            ]}
            data={datosTeachingExperience}
            title="Experiencia Docente"
            defaultRowsPerPage={5}
            numberRow={true}
            buttons={{
              buttonEdit: true,
              handleEditRow: handleEditRow,
              buttonDelete: true,
              handleDeleteRow: handleDeleteRow,
            }}
          />
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormTeaching;
