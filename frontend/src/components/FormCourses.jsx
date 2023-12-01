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
import { useEffect, useState,useRef } from "react";
import {
  addCoursesWorkshops,
  getAllCoursesWorkshops,
  editCoursesWorkshops,
  deleteCoursesWorkshops,
} from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormCourses() {
  const [datosCoursesWorkshops, setDatosCoursesWorkshops] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);


  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");
  const [id, setId] = useState(false);
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [type_participation, setType_participation] = useState("");
  const [name, setName] = useState("");
  const [organized_by, setOrganized_by] = useState("");

  async function fetchData() {
    try {
      const { data } = await getAllCoursesWorkshops();
      setDatosCoursesWorkshops(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  function clear(){
    setbuttonSubmit("Guardar");
    setId(false);
    setStart_date("");
    setEnd_date("");
    setPlace("");
    setType("");
    setDuration("");
    setType_participation("");
    setName("");
    setOrganized_by("");
    setEditing(false)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editCoursesWorkshops({
          columns: formData,
          where: { where: { id: id } },
        });
        fetchData();
      } else {
        const { data } = await addCoursesWorkshops(formData); // assuming addCoursesWorkshops is an asynchronous function
        setDatosCoursesWorkshops([...datosCoursesWorkshops, formData]); // Assuming the returned data is the newly added item
      }
      clear()
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditRow = (row, event) => {
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setbuttonSubmit("Editar");
    setEditing(true);
    setId(row.id);
    setStart_date(row.start_date);
    setEnd_date(row.end_date);
    setPlace(row.place);
    setType(row.type);
    setDuration(row.duration);
    setType_participation(row.type_participation);
    setName(row.name);
    setOrganized_by(row.organized_by);
  };

  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id);
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteCoursesWorkshops(id);
      fetchData();
      clear()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <form onSubmit={handleSubmit}ref={form}>
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
                  name="start_date"
                  value={start_date}
                  onChange={(e) => setStart_date(e.target.value)}
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
                  name="end_date"
                  value={end_date}
                  onChange={(e) => setEnd_date(e.target.value)}
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
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
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
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo participación" />
                <RadioGroup
                  m={"auto"}
                  value={type_participation}
                  onChange={setType_participation}
                  name="type_participation"
                >
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="green"
                      value="Asistente"
                    >
                      Asistente
                    </Radio>
                    <Radio
                      colorScheme="green"
                      value="Expositor"
                    >
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Organizado Por" />
                <Input
                  type="text"
                  placeholder="Organizado Por"
                  name="organized_by"
                  value={organized_by}
                  onChange={(e) => setOrganized_by(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem
              colSpan={2}
              order={{ base: 1, md: 1 }}
              textAlign={"right"}
            >
              <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                {buttonSubmit}
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
              "organized_by",
              "place",
              "duration",
              "start_date",
              "end_date",
              "type_participation",
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
