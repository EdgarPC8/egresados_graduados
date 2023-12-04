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
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import {
  addCoursesWorkshops,
  getAllCoursesWorkshops,
  editCoursesWorkshops,
  deleteCoursesWorkshops,
} from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormCourses() {
  const initialFormCourses = {
    starDate: "",
    endDate: "",
    place: "",
    type: "",
    duration: "",
    typeParticipation: "",
    name: "",
    organizedBy: "",
  };

  const [datosCoursesWorkshops, setDatosCoursesWorkshops] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [id, setId] = useState(0);
  const [formCourse, setFormCourse] = useState(initialFormCourses);

  async function fetchData() {
    try {
      const { data } = await getAllCoursesWorkshops();
      setDatosCoursesWorkshops(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  function clear() {
    setId(false);
    setFormCourse(initialFormCourses);
    setIsEditing(false);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditing) {
        const { data } = await editCoursesWorkshops(id, formCourse);
        fetchData();
      } else {
        const { data } = await addCoursesWorkshops(formCourse); // assuming addCoursesWorkshops is an asynchronous function
        setDatosCoursesWorkshops([...datosCoursesWorkshops, formCourse]); // Assuming the returned data is the newly added item
      }
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormCourse({ ...formCourse, [name]: value });
  };

  const handleEditRow = (row, event) => {
    const {
      starDate,
      endDate,
      place,
      type,
      duration,
      typeParticipation,
      name,
      organizedBy,
    } = row;
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsEditing(true);
    setId(row.id);

    setFormCourse({
      starDate,
      endDate,
      place,
      type,
      duration,
      typeParticipation,
      name,
      organizedBy,
    });
  };

  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id);
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteCoursesWorkshops(id);
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
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  name="startDate"
                  value={formCourse.starDate}
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
                  name="endDate"
                  value={formCourse.endDate}
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
                  value={formCourse.place}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo" />
                <Input
                  type="text"
                  placeholder="(Curso, Seminario, Taller, Congreso, Otro)"
                  name="type"
                  value={formCourse.type}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Duración" />

                <Input
                  type="number"
                  placeholder="En Horas"
                  name="duration"
                  value={formCourse.duration}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo participación" />
                <RadioGroup
                  m={"auto"}
                  value={formCourse.typeParticipation}
                  onChange={handleChange}
                  name="typeParticipation"
                >
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="Asistente">
                      Asistente
                    </Radio>
                    <Radio colorScheme="green" value="Expositor">
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

                <Input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  value={formCourse.name}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Organizado Por" />
                <Input
                  type="text"
                  placeholder="Organizado Por"
                  name="organizedBy"
                  value={formCourse.organizedBy}
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
              "Tipo",
              "Nombre",
              "Organizado Por:",
              "Lugar",
              "Duracion(Horas)",
              "Fecha Inicio",
              "Fecha Fin",
              "Tipo de Participación Asistente/Expositor",
              "Acción",
            ]}
            keyValues={[
              "type",
              "name",
              "organizedBy",
              "place",
              "duration",
              "startDate",
              "endDate",
              "typeParticipation",
            ]}
            data={datosCoursesWorkshops}
            title="Cursos"
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

export default FormCourses;
