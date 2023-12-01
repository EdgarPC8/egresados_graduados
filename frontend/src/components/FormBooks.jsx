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
import { addBooks, getAllBooks, editBooks, deleteBooks } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";
function FormBooks() {
  const [datosBooks, setDatosBooks] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [tittle, setTittle] = useState("");
  const [type, setType] = useState("");
  const [type_authorship, setType_authorship] = useState("");
  const [isb_n, setIsb_n] = useState("");
  const [editoral_name, setEditoral_name] = useState("");
  const [editoral_origin, setEditoral_origin] = useState("");
  const [year, setYear] = useState("");

  function clear() {
    setEditing(false);
    setId(false)
    setTittle("")
    setType("")
    setType_authorship("")
    setIsb_n("")
    setEditoral_name("")
    setEditoral_origin("")
    setYear("")
    setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllBooks();
      setDatosBooks(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editBooks({ columns: formData, where: { where: { id: id } } });
        fetchData()
      } else {
        const { data } = await addBooks(formData); // assuming addBooks is an asynchronous function
        setDatosBooks([...datosBooks, formData]); // Assuming the returned data is the newly added item
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
    setTittle(row.tittle)
    setType(row.type)
    setType_authorship(row.type_authorship)
    setIsb_n(row.isb_n)
    setEditoral_name(row.editoral_name)
    setEditoral_origin(row.editoral_origin)
    setYear(row.year)
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteBooks(id);
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
              LIBROS
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
                <Input
                  type="text"
                  placeholder="(Divulgación, Científico)"
                  name="type"value={type} onChange={(e) => setType(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Autoria" />
                <Input
                  type="text"
                  placeholder="(Autor, Coautor)"
                  name="type_authorship"value={type_authorship} onChange={(e) => setType_authorship(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre de Editorial" />
                <Input
                  type="text"
                  placeholder="Nombre de Editorial"
                  name="editoral_name"value={editoral_name} onChange={(e) => setEditoral_name(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Origen de Editorial" />
                <Input
                  type="text"
                  placeholder="(Nacional, Internacional)"
                  name="editoral_origin"value={editoral_origin} onChange={(e) => setEditoral_origin(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Año" />
                <Input placeholder="Fecha" size="md" type="date" name="year"value={year} onChange={(e) => setYear(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="ISB N." />
                <Input type="text" placeholder="ISB N." name="isb_n"value={isb_n} onChange={(e) => setIsb_n(e.target.value)} />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Titulo" />
                <Input type="text" placeholder="Titulo" name="tittle"value={tittle} onChange={(e) => setTittle(e.target.value)} />
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
              'Titulo',
              'Tipo',
              'Tipo de Autoria',
              'ISB N.',
              'Nombre Editorial',
              'Origen Editorial',
              'Año',
              'Acción'
            ]}
            keyValues={[
              'tittle',
              'type',
              'type_authorship',
              'isb_n',
              'editoral_name',
              'editoral_origin',
              'year'
            ]}
            data={datosBooks}
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

export default FormBooks;
