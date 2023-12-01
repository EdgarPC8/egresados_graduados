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
import { addAcademicTraining, getAllAcademicTraining, editAcademicTraining, deleteAcademicTraining } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormAcademicTraining() {
  const [datosAcademicTraining, setDatosAcademicTraining] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [obtained_tittle, setObtained_tittle] = useState("");
  const [educational_institution, setEducational_institution] = useState("");
  const [senescyt_registration_n, setSenescyt_registration_n] = useState("");

  function clear() {
    setEditing(false);
    setId(false)
    setType("")
    setDate("")
    setPlace("")
    setCountry("")
    setObtained_tittle("")
    setEducational_institution("")
    setSenescyt_registration_n("")
    setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllAcademicTraining();
      setDatosAcademicTraining(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editAcademicTraining({ columns: formData, where: { where: { id: id } } });
        fetchData()
      } else {
        const { data } = await addAcademicTraining(formData); // assuming addAcademicTraining is an asynchronous function
        setDatosAcademicTraining([...datosAcademicTraining, formData]); // Assuming the returned data is the newly added item
      }
      clear()
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditRow = (row, event) => {
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setbuttonSubmit("Editar")
    setEditing(true);
    setId(row.id)
    setType(row.type)
    setDate(row.date)
    setPlace(row.place)
    setCountry(row.country)
    setObtained_tittle(row.obtained_tittle)
    setEducational_institution(row.educational_institution)
    setSenescyt_registration_n(row.senescyt_registration_n)
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteAcademicTraining(id);
      fetchData();
      clear()
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
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
                <Select placeholder="Seleccione una opción" name="type" value={type} onChange={(e) => setType(e.target.value)} >
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
                  value={date} onChange={(e) => setDate(e.target.value)}
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar" />
                <Input type="text" placeholder="Lugar" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="País" />
                <Input type="text" placeholder="País" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
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
                  name="obtained_tittle"
                  value={obtained_tittle} onChange={(e) => setObtained_tittle(e.target.value)}
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
                  name="educational_institution"
                  value={educational_institution} onChange={(e) => setEducational_institution(e.target.value)}
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
                  name="senescyt_registration_n"
                  value={senescyt_registration_n} onChange={(e) => setSenescyt_registration_n(e.target.value)}
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
                bg="primary.200"
                color={"white"}
                _hover={{ bg: "primary.100" }}
                data-purpose="create"
              >
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
          >
          </Modal>
          <DataTable
            header={[
              'Tipo',
              'Título Obtenido',
              'Institución Educativa',
              'Fecha',
              'Lugar',
              'País',
              'Nro. de registro SENESCYT',
              'Acción'
            ]}
            keyValues={[
              'type',
              'obtained_tittle',
              'educational_institution',
              'date',
              'place',
              'country',
              'senescyt_registration_n'
            ]}
            data={datosAcademicTraining}
            title="Formación Academica"
            defaultRowsPerPage={5}
            numberRow={true}
            buttons={{
              buttonEdit: true,
              handleEditRow: handleEditRow,
              buttonDelete: true,
              handleDeleteRow: handleDeleteRow
            }}
          />
        </AccordionPanel>
      </AccordionItem>
    </form>

  );
}

export default FormAcademicTraining;
