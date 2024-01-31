import Tabl from "../components/Table";
import { useEffect, useState } from "react";
import { addUser, getUsers, removeUser } from "../api/userRequest";
import { getAllQuizzes,addQuiz } from "../api/quizResquest";
import { urlPhotos } from "../api/axios";
import { useRef } from "react";
import {
  Button,
  useDisclosure,
  AlertDialog,
  Avatar,
  Grid,
  GridItem,
  Stack,
  useToast,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Image,
  Spacer,
  Flex,
  Box,
  Heading,
  Input,
  Container,
  InputLeftAddon,
  InputGroup,
  Select,
  TableContainer,
  Table,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  Tfoot,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";

import { useAuth } from "../context/AuthContext";
import { FiUserPlus } from "react-icons/fi";
import { EmailIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

function Quizzes() {
  const navigate = useNavigate();
  const toast = useToast();
  const { user } = useAuth();
  const [quizzes, setQuizzes] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentUser, setCurrentUser] = useState({});
  const cancelRef = useRef();

  const form = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(0);
  const columns = [
    {
      header: "Id",
      accessorKey: "idQuiz",
      cell: (props) => props.row.index + 1,
    },
    {
      header: "Titulo",
      accessorKey: "title",
    },
    {
      header: "Descripción",
      accessorKey: "description",
    },
    {
      header: "Fecha",
      accessorKey: "date",
    },
    {
      header: "Acción",

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
              setCurrentUser(props.row.original);
              onOpen();
            }}
          >
            Eliminar
          </Button>
        </Stack>
      ),
    },
  ];
  let initialFormQuiz = {
    title: "",
    description: "",
    date: "",
  };
  const [formQuiz, setFormQuiz] = useState(
    initialFormQuiz
  );
  const handleEditRow = (row) => {
    const {
      title,
      description,
      date,
    } = row;
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsEditing(true);
    setId(row.id);
    setFormQuiz({
      title,
      description,
      date,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formQuiz)

    if (isEditing) {
      // toast.promise(editProfessional(id, formQuiz), {
      //   loading: {
      //     title: "Editando...",
      //     position: "top-right",
      //   },
      //   success: (d) => ({
      //     title: "Información profesional",
      //     description: d.data.message,
      //     isClosable: true,
      //   }),
      //   error: (e) => ({
      //     title: "Error",
      //     description: e.response.data.message,
      //     isClosable: true,
      //   }),
      // });

      // fetchData();
      // clear();

      return;
    }

    toast.promise(addQuiz(formQuiz), {
      loading: {
        title: "Añadiendo...",
        position: "top-right",
      },
      success: (d) => ({
        title: "Encuesta",
        description: d.data.message,
        isClosable: true,
      }),
      error: (e) => ({
        title: "Error",
        description: e.response.data.message,
        isClosable: true,
      }),
    });

    clear();
    fetchUsers();

  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormQuiz({ ...formQuiz, [name]: value });
  };
  const clear = () => {
    setIsEditing(false);
    setId(false);
    setFormQuiz(initialFormQuiz);
  };
  

  const deleteUser = () => {
    toast.promise(removeUser(currentUser.userId), {
      loading: {
        title: "Eliminando...",
        position: "top-right",
      },
      success: (d) => ({
        title: "Usuario",
        description: d.data.message,
        isClosable: true,
      }),
      error: (e) => ({
        title: "Error",
        description: e.response.data.message,
        isClosable: true,
      }),
    });

    setUsers(users.filter((user) => user.userId !== currentUser.userId));
  };

  async function fetchUsers() {
    try {
      const { data } = await getAllQuizzes();
      setQuizzes(data)
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Box p={10}>
        <Box>
          <form onSubmit={handleSubmit} ref={form}>
            <Grid
              templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              gap={2}
              mt={2}
            >
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Titulo" />
                  <Input type="text" placeholder="Titulo" name="title" value={formQuiz.title ? formQuiz.title : ""}
                    onChange={handleChange} />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Fecha" />
                  <Input placeholder="Fecha" size="md" type="date" name="date" value={
                    formQuiz.date ? formQuiz.date : ""
                  }
                  onChange={handleChange}
                  required/>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                {/* <InputLeftAddon children="Descripción" /> */}
                <Textarea name="description" placeholder="Descripción" value={formQuiz.description ? formQuiz.description : ""}
                    onChange={handleChange} ></Textarea>
              </GridItem>
              <GridItem fontSize={"sm"}>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <Button type="submit" mt={4} bg="ceruleanBlue.500" color={"white"}>
                {!isEditing ? "Guardar" : "Editar"}
                </Button>
              </GridItem>

            </Grid>
          </form>
        </Box>
        <Flex alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Encuestas</Heading>
          </Box>
        </Flex>
        <Tabl data={quizzes} columns={columns} />

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay bg="blackAlpha.300" backdropFilter="blur(10px)">
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Eliminar Encuesta
              </AlertDialogHeader>

              <AlertDialogBody>
                ¿Estás seguro de eliminar ha {currentUser.firstName}
                {currentUser.firstLastName}?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteUser();
                    onClose();
                  }}
                  ml={3}
                >
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </>
  );
}

export default Quizzes;
