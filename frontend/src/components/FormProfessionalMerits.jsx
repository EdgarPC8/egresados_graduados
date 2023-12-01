import {
  Box,
  Input,
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
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { addAcademicProfessionalMerits, getAllAcademicProfessionalMerits, editAcademicProfessionalMerits, deleteAcademicProfessionalMerits } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormProfessionalMerits() {
  const [datosAcademicProfessionalMerits, setDatosAcademicProfessionalMerits] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [granted_by, setGranted_by] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  function clear() {
    setEditing(false);
    setId(false)
    setName("")
    setDate("")
    setType("")
    setGranted_by("")
    setCountry("")
    setLocation("")
    setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllAcademicProfessionalMerits();
      setDatosAcademicProfessionalMerits(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editAcademicProfessionalMerits({ columns: formData, where: { where: { id: id } } });
        fetchData()
      } else {
        const { data } = await addAcademicProfessionalMerits(formData); // assuming addAcademicProfessionalMerits is an asynchronous function
        setDatosAcademicProfessionalMerits([...datosAcademicProfessionalMerits, formData]); // Assuming the returned data is the newly added item
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
    setName(row.name)
    setDate(row.date)
    setType(row.type)
    setGranted_by(row.granted_by)
    setCountry(row.country)
    setLocation(row.location)
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteAcademicProfessionalMerits(id);
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
              MÉRITOS ACADÉMICOS Y PROFESIONALES
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
                <InputLeftAddon children="País" />
                <Input type="text" placeholder="País" name="country"value={country} onChange={(e) => setCountry(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar" />
                <Input type="text" placeholder="Lugar" name="location"value={location} onChange={(e) => setLocation(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo" />
                <Input
                  type="text"
                  placeholder="(Nacional, Internacional)"
                  name="type"value={type} onChange={(e) => setType(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha" />
                <Input placeholder="Fecha" size="md" type="date" name="date"value={date} onChange={(e) => setDate(e.target.value)} />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre" />
                <Input type="text" placeholder="Nombre" name="name"value={name} onChange={(e) => setName(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Otorgado Por" />
                <Input
                  type="text"
                  placeholder="Otorgado Por"
                  name="granted_by"value={granted_by} onChange={(e) => setGranted_by(e.target.value)}
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
              'Nombre',
              'Fecha',
              'Tipo',
              'Otorgado Por',
              'País',
              'Lugar',
              'Acción'
            ]}
            keyValues={[
              'name',
              'date',
              'type',
              'granted_by',
              'country',
              'location',
            ]}
            data={datosAcademicProfessionalMerits}
            title="Meritos Académicos"
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

export default FormProfessionalMerits;
