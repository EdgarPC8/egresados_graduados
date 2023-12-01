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
import { useEffect,useState,useRef } from "react";
import { addTeachingExperience, getAllTeachingExperience,editTeachingExperience,deleteTeachingExperience } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormTeaching() {
  const [datosTeachingExperience, setDatosTeachingExperience] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [educational_institution, setEducational_institution] = useState("");
  const [subject, setSubject] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [modality, setModality] = useState("");
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");

  function clear(){
      setEditing(false);
      setId(false)
      setEducational_institution("")
      setSubject("")
      setStart_date("")
      setEnd_date("")
      setModality("")
      setPlace("")
      setCountry("")
      setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllTeachingExperience();
      setDatosTeachingExperience(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editTeachingExperience({columns:formData,where:{where:{id:id}}}); 
        fetchData()
      } else {
        const { data } = await addTeachingExperience(formData); // assuming addTeachingExperience is an asynchronous function
        setDatosTeachingExperience([...datosTeachingExperience, formData]); // Assuming the returned data is the newly added item
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
    setEducational_institution(row.educational_institution)
    setSubject(row.subject)
    setStart_date(row.start_date)
    setEnd_date(row.end_date)
    setModality(row.modality)
    setPlace(row.place)
    setCountry(row.country)
  };
  const handleDeleteRow = async (row,event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteTeachingExperience(id);
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
                  name="start_date"value={start_date} onChange={(e) => setStart_date(e.target.value)}
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
                  name="end_date"value={end_date} onChange={(e) => setEnd_date(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar" />
                <Input type="text" placeholder="Lugar" name="place"value={place} onChange={(e) => setPlace(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="País" />
                <Input type="text" placeholder="País" name="country"value={country} onChange={(e) => setCountry(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Materia" />
                <Input
                  type="text"
                  placeholder="Materia/Componente Educativo"
                  required
                  name="subject"value={subject} onChange={(e) => setSubject(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Modalidad" />
                <Input type="text" placeholder="Modalidad" name="modality"value={modality} onChange={(e) => setModality(e.target.value)} />
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
                  name="educational_institution"value={educational_institution} onChange={(e) => setEducational_institution(e.target.value)}
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
          >
          </Modal>
          <DataTable
            header={[
              'Institución',
              'Materia',
              'Fecha',
              'Fecha',
              'Modalidad',
              'Lugar',
              'País',
              'Acción'
            ]}
            keyValues={[
              'educational_institution',
              'subject',
              'start_date',
              'end_date',
              'modality',
              'place',
              'country'
            ]}
            data={datosTeachingExperience}
            title="Experiencia Docente"
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

export default FormTeaching;
