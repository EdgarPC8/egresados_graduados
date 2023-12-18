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
  addBooks,
  getAllBooks,
  editBooks,
  deleteBooks,
} from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";
function FormBooks() {
  const [datosBooks, setDatosBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [id, setId] = useState(false);

  const initialFormBooks = {
    type: "",
    typeAuthorship: "",
    editoralName: "",
    editoralOrigin: "",
    year: "",
    isbN: "",
    title: "",
  };

  const [formBook, setFormBook] = useState(initialFormBooks);

  function clear() {
    setIsEditing(false);
    setId(false);
    setFormBook(initialFormBooks);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormBook({ ...formBook, [name]: value });
  };

  async function fetchData() {
    try {
      const { data } = await getAllBooks();
      setDatosBooks(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (isEditing) {
        const { data } = await editBooks(id, formBook);
        fetchData();
      } else {
        const { data } = await addBooks(formBook); // assuming addBooks is an asynchronous function
        setDatosBooks([...datosBooks, formBook]); // Assuming the returned data is the newly added item
      }
      clear();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditRow = (row, event) => {
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    const {
      id,
      title,
      type,
      typeAuthorship,
      isbN,
      editoralName,
      editoralOrigin,
      year,
    } = row;

    setIsEditing(true);
    setId(row.id);
    setFormBook({
      id,
      title,
      type,
      typeAuthorship,
      isbN,
      editoralName,
      editoralOrigin,
      year,
    });
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id);
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteBooks(id);
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
                  name="type"
                  value={formBook.type}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Autoria" />
                <Input
                  type="text"
                  placeholder="(Autor, Coautor)"
                  name="typeAuthorship"
                  value={formBook.typeAuthorship}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre de Editorial" />
                <Input
                  type="text"
                  placeholder="Nombre de Editorial"
                  name="editoralName"
                  value={formBook.editoralName}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Origen de Editorial" />
                <Input
                  type="text"
                  placeholder="(Nacional, Internacional)"
                  name="editoralOrigin"
                  value={formBook.editoralOrigin}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Año" />
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  name="year"
                  value={formBook.year}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="ISB N." />
                <Input
                  type="text"
                  placeholder="ISB N."
                  name="isbN"
                  value={formBook.isbN}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Titulo" />
                <Input
                  type="text"
                  placeholder="Titulo"
                  name="title"
                  value={formBook.title}
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
              "Titulo",
              "Tipo",
              "Tipo de Autoria",
              "ISB N.",
              "Nombre Editorial",
              "Origen Editorial",
              "Año",
              "Acción",
            ]}
            keyValues={[
              "title",
              "type",
              "typeAuthorship",
              "isbN",
              "editorialName",
              "editorialOrigin",
              "year",
            ]}
            data={datosBooks}
            title="Formación Academica"
            defaultRowsPerPage={5}
            numberRow={true}
            buttons={{
              buttonEdit: true,
              handleEditRow,
              buttonDelete: true,
              handleDeleteRow
            }}
          />
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormBooks;
