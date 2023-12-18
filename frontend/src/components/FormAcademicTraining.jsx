import {
  Box,
  Input,
  Grid,
  GridItem,
  InputLeftAddon,
  InputGroup,
  Select,
  Button,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import {
  addAcademicTraining,
  getAllAcademicTraining,
  editAcademicTraining,
  deleteAcademicTraining,
} from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormAcademicTraining() {
  const initialFormAcademic = {
    type: "",
    date: "",
    place: "",
    country: "",
    obtainedTitle: "",
    educationalInstitution: "",
    senescytRegistrationN: "",
  };

  const [ListAcademicTraining, setListAcademicTraining] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [id, setId] = useState(0);

  const [formAcademic, setFormAcademic] = useState(initialFormAcademic);

  function clear() {
    setIsEditing(false);
    setId(false);
    setFormAcademic(initialFormAcademic);
  }

  async function fetchData() {
    try {
      const { data } = await getAllAcademicTraining();
      setListAcademicTraining(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditing) {
        const { data } = await editAcademicTraining(id, formAcademic);
        fetchData();
      } else {
        const { data } = await addAcademicTraining(formAcademic);

        setListAcademicTraining([...ListAcademicTraining, formAcademic]);
      }
      clear();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditRow = (row, event) => {
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    const {
      type,
      obtainedTitle,
      educationalInstitution,
      date,
      place,
      country,
      senescytRegistrationN,
    } = row;

    setIsEditing(true);
    setId(row.id);
    setFormAcademic({
      type,
      obtainedTitle,
      educationalInstitution,
      date,
      place,
      country,
      senescytRegistrationN,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormAcademic({ ...formAcademic, [name]: value });
  };

  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id);
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteAcademicTraining(id);
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
                <Select
                  placeholder="Seleccione una opción"
                  name="type"
                  value={formAcademic.type}
                  onChange={handleChange}
                >
                  <option value="Secundaria">Secundaria</option>
                  <option value="Tercer Nivel">Tercer Nivel</option>
                  <option value="Cuarto Nivel">Cuarto Nivel</option>
                </Select>
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha" />
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  name="date"
                  value={formAcademic.date}
                  onChange={handleChange}
                  required
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
                  value={formAcademic.place}
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
                  value={formAcademic.country}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Título Obtenido" />
                <Input
                  type="text"
                  placeholder="Título Obtenido"
                  name="obtainedTitle"
                  value={formAcademic.obtainedTitle}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Institución Educativa" />
                <Input
                  type="text"
                  placeholder="Institución Educativa"
                  name="educationalInstitution"
                  value={formAcademic.educationalInstitution}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nro. de registro SENESCYT" />
                <Input
                  type="text"
                  placeholder="Nro. de registro SENESCYT"
                  name="senescytRegistrationN"
                  value={formAcademic.senescytRegistrationN}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem
              colSpan={2}
              order={{ base: 1, md: 1 }}
              textAlign={"right"}
            >
              <Button
                type="submit"
                mt={4}
                bg="ceruleanBlue.500"
                color={"white"}
                _hover={{ bg: "primary.100" }}
                data-purpose="create"
              >
                {!isEditing ? "Guardar" : "editar"}
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
              "Tipo",
              "Título Obtenido",
              "Institución Educativa",
              "Fecha",
              "Lugar",
              "País",
              "Nro. de registro SENESCYT",
              "Acción",
            ]}
            keyValues={[
              "type",
              "obtainedTitle",
              "educationalInstitution",
              "date",
              "place",
              "country",
              "senescytRegistrationN",
            ]}
            data={ListAcademicTraining}
            title="Formación Academica"
            defaultRowsPerPage={5}
            numberRow={true}
            buttons={{
              buttonEdit: true,
              handleEditRow,
              buttonDelete: true,
              handleDeleteRow,
            }}
          />
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormAcademicTraining;
