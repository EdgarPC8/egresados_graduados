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
  useToast,
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
import Tabl from "./Table";
function FormBooks() {
  const toast = useToast();
  const [dataBooks, setDataBooks] = useState([]);
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
      setDataBooks(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isEditing) {
      toast.promise(editBooks(id, formBook), {
        loading: {
          title: "Editando...",
          position: "top-right",
        },
        success: (d) => ({
          title: "Libros",
          description: d.data.message,
          isClosable: true,
        }),
        error: (e) => ({
          title: "Error",
          description: e.response.data.message,
          isClosable: true,
        }),
      });

      fetchData();

      clear();

      return;
    }

    toast.promise(addBooks(formBook), {
      loading: {
        title: "Añadiendo...",
        position: "top-right",
      },
      success: (d) => {
        setDataBooks([...dataBooks, formBook]);

        return {
          title: "Libros",
          description: d.data.message,
          isClosable: true,
        };
      },
      error: (e) => ({
        title: "Error",
        description: e.response.data.message,
        isClosable: true,
      }),
    });

    clear();
  };
  const handleEditRow = (row) => {
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
  const handleDeleteRow = async (row) => {
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

  const columns = [
    { header: "Titulo", accessorKey: "title" },
    { header: "Tipo", accessorKey: "type" },
    { header: "Tipo de Autoria", accessorKey: "typeAuthorship" },
    { header: "ISB N.", accessorKey: "isbN" },
    { header: "Nombre Editorial", accessorKey: "editorialName" },
    { header: "Origen Editorial", accessorKey: "editorialOrigin" },
    { header: "Año", accessorKey: "year" },

    {
      header: "Accion",
      cell: (props) => (
        <Stack spacing={4} direction="row" align="center">
          <Button
            colorScheme="yellow"
            onClick={() => {
              handleEditRow(props.row.original);
            }}
          >
            Editar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              handleDeleteRow(props.row.original);
            }}
          >
            Eliminar
          </Button>
        </Stack>
      ),
    },
  ];

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
              <Button
                type="submit"
                mt={4}
                bg="ceruleanBlue.500"
                color={"white"}
              >
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
          <Tabl columns={columns} data={dataBooks} />
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormBooks;
