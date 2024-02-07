import Tabl from "../components/Table";
import SelectData from "../components/SelectData";
import Modal from "../components/AlertDialog";
import { useEffect, useState } from "react";
import { addUser, getUsers, removeUser, changePassword } from "../api/userRequest";
import { getAllProfessionals, addProfessional } from "../api/professionalRequest";
import { getAllMatriz, addMatriz, removeMatriz, getAllCareers, getAllPeriods } from "../api/matrizResquest";
import { urlPhotos } from "../api/axios";
import { useRef } from "react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  useDisclosure,
  Grid,
  GridItem,
  Stack,
  useToast,
  Flex,
  Box,
  Heading,
  Center,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";

import { useAuth } from "../context/AuthContext";
import { FiUserPlus } from "react-icons/fi";
import { EmailIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

function Matriz() {
  const navigate = useNavigate();
  const toast = useToast();
  const { user } = useAuth();
  const [quizzes, setQuizzes] = useState([]);
  const [Careers, setCareers] = useState([]);
  const [Periods, setPeriods] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [createMatriz, setCreateMatriz] = useState([]);
  const [alertDialogMessage, setAlertDialogMessage] = useState('');

  const [selectedOptionCareer, setSelectedOptionCareer] = useState(null);
  const [selectedOptionPeriod, setSelectedOptionPeriod] = useState(null);
  const [selectedModality, setSelectedModality] = useState(null);
  const [year, setYear] = useState("");
  const [textValue, setTextValue] = useState("");


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSelectModalOpen, setSelectModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setDeleteUserModalOpen] = useState(false);


  const [DataMatriz, setDataMatriz] = useState(null);
  const cancelRef = useRef();

  const form = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(0);

  const columns = [
    {
      header: "#",
      accessorKey: "id",
      cell: (props) => props.row.index + 1,
    },
    {
      header: "Nombres Completos",
      accessorKey: "fullname",
      accessorFn: (row) =>
        `
        ${row.professional.firstName} ${row.professional.secondName} ${row.professional.firstLastName} ${row.professional.secondLastName}`,
    },
    {
      header: "Cedula",
      accessorKey: "professional.ci",
    },
    {
      header: "Carrera",
      accessorKey: "carreer.name",
    },
    {
      header: "Periodo",
      accessorKey: "period.name",
    },
    {
      header: "Modalidad",
      accessorKey: "modality",
    },
    {
      header: "Fecha de Grado",
      accessorKey: "grateDate",
    },
    {
      header: "Acción",

      cell: (props) => (
        <Center>

          <Stack spacing={4} direction="row" align="center">
            {/* <Button
            colorScheme="yellow"
            onClick={() => {
              handleEditRow(props.row.original);
            }}
          >
           <EditIcon></EditIcon>
          </Button> */}

            <Button
              colorScheme="red"
              onClick={() => {
                setDataMatriz(props.row.original);
                // console.log(props.row.original)
                setDeleteUserModalOpen(true)
              }}
            >
              <DeleteIcon></DeleteIcon>
            </Button>

          </Stack>
        </Center>

      ),
    },
  ];
  const columnsProfessionals = [
    {
      header: "#",
      accessorKey: "userId",
      cell: (props) => props.row.index + 1,
    },
    {
      header: "Cedula",
      accessorKey: "ci",
    },
    {
      header: "Nombres Completos",
      accessorKey: "fullname",
      accessorFn: (row) =>
        `
        ${row.firstName} ${row.secondName} ${row.firstLastName} ${row.secondLastName}`,
    },
    {
      header: "Fecha",
      accessorKey: "birthDate",
    },
    {
      header: "Acción",

      cell: (props) => (
        <Center>
          <Stack spacing={4} direction="row">
            <Button
              colorScheme="green"
              onClick={() => {
                handleAddProfessionalRow(props.row.original);
              }}
            >
              +          </Button>
          </Stack>
        </Center>

      ),
    },
  ];
  const columnsCreateMatriz = [
    {
      header: "#",
      accessorKey: "userId",
      cell: (props) => props.row.index + 1,
    },
    {
      header: "Cedula",
      accessorKey: "ci",
    },

    {
      header: "Nombres Completos",
      accessorKey: "fullname",
      accessorFn: (row) =>
        `
        ${row.firstName} ${row.secondName} ${row.firstLastName} ${row.secondLastName}`,
    },
    {
      header: "Carrera",
      accessorKey: "carreerName",
    },
    {
      header: "Periodo",
      accessorKey: "periodName",
    },
    {
      header: "Modalidad",
      accessorKey: "modality",
    },
    {
      header: "Año",
      accessorKey: "grateDate",
    },
    {
      header: "Acción",

      cell: (props) => (
        <Center>
          <Stack spacing={4} direction="row">
            <Button
              colorScheme="red"
              onClick={() => {
                handleDeleteProfessionalRow(props.row.original);
              }}
            >  - </Button>
          </Stack>
        </Center>

      ),
    },
  ];

  const transformedCarreras = Careers.map(item => ({
    value: item.idCarreer,
    label: `${item.name}`,
  }));
  const transformedPeriodos = Periods.map(item => ({
    value: item.id,
    label: `${item.name}`,
  }));

  let initialFormQuiz = {
    title: "",
    description: "",
    date: "",
  };
  const [formQuiz, setFormQuiz] = useState(
    initialFormQuiz
  );

  const handleSelectChangeCareer = (value, selectedOption) => {
    // Verifica si la primera opción está seleccionada
    if (selectedOption === "Seleccione una opción") {
      // Agrega aquí la lógica que deseas ejecutar cuando se selecciona la primera opción
        setSelectedOptionCareer(null);
    }else{
      
      setSelectedOptionCareer({ id: value, name: selectedOption });
    }
  
    // Actualiza el estado normalmente
  };
  
  const handleSelectChangePeriod = (value, selectedOption) => {
    // Verifica si la primera opción está seleccionada
    if (selectedOption === "Seleccione una opción") {
      // Agrega aquí la lógica que deseas ejecutar cuando se selecciona la primera opción
        setSelectedOptionPeriod(null);
    }else{
      
      setSelectedOptionPeriod({ id: value, name: selectedOption });
    }
  
    // Actualiza el estado normalmente
  };
  
  const handleSelectChangeModality = (value, selectedOption) => {
    // Verifica si la primera opción está seleccionada
    if (selectedOption === "Seleccione una opción") {
      // Agrega aquí la lógica que deseas ejecutar cuando se selecciona la primera opción
        setSelectedModality(null);
    }else{
      
      setSelectedModality(value);
    }
  
    // Actualiza el estado normalmente
  };
  
  const handleChangeYear = (event) => {
    let inputValue = event.target.value;

    // Elimina cualquier caracter no numérico
    inputValue = inputValue.replace(/\D/g, '');
  
    // Actualiza el estado solo si la cadena resultante es numérica y no está vacía
    if (/^\d+$/.test(inputValue) || inputValue === '') {
      setYear(inputValue);
    }
  };

  const handleAddProfessionalRow = (row) => {
    if (!selectedOptionCareer || !selectedOptionPeriod || !selectedModality || !year) {
      // Muestra el AlertDialog con el mensaje correspondiente
      setSelectModalOpen(true);
      return;
    }
    row.carreerName = selectedOptionCareer.name;
    row.periodName = selectedOptionPeriod.name;
    row.carreerId = selectedOptionCareer.id;
    row.periodId = selectedOptionPeriod.id;
    row.modality = selectedModality;
    row.grateDate = year;
    setCreateMatriz((prevCreateMatriz) => [...prevCreateMatriz, row]);

    setProfessionals((prevProfessionals) => prevProfessionals.filter(professional => professional.id !== row.id));
  };
  const handleDeleteProfessionalRow = (row) => {
    // Agrega el row al inicio de createMatriz

    setProfessionals((prevCreateMatriz) => [row, ...prevCreateMatriz]);

    // Elimina el row del array original (professionals)
    setCreateMatriz((prevProfessionals) => prevProfessionals.filter(professional => professional.id !== row.id));
  };

  const handleSubmit = () => {
    if (!selectedOptionCareer || !selectedOptionPeriod || !selectedModality || !year) {
      // Muestra el AlertDialog con el mensaje correspondiente
      setSelectModalOpen(true);
      return;
    }
    // console.log(formQuiz)
    const prueba = createMatriz.map(objeto => {
      const { id, carreerId, periodId, firstLastName, firstName } = objeto;
      return { data: { idProfessional: id, career: carreerId, idPeriod: periodId, name: firstLastName,grateDate:year,modality:selectedModality }, name: `${firstName} ${firstLastName}` }
    });

    prueba.forEach(element => {

      toast.promise(addMatriz(element.data), {
        loading: {
          title: "Añadiendo...",
          position: "top-right",
        },
        success: (d) => {
          fetchUsers();
          setCreateMatriz([])
          return {
            title: "Matriz",
            description: `${element.name} ${d.data.message}`,
            isClosable: true,
          };
        },
        error: (e) => ({
          title: "Error",
          description: e.response.data.message,
          isClosable: true,
        }),
      });

    });
    // if (isEditing) {
    //   toast.promise(editQuiz(id, formQuiz), {
    //     loading: {
    //       title: "Editando...",
    //       position: "top-right",
    //     },
    //     success: (d) => ({
    //       title: "Encuesta",
    //       description: d.data.message,
    //       isClosable: true,
    //     }),
    //     error: (e) => ({
    //       title: "Error",
    //       description: e.response.data.message,
    //       isClosable: true,
    //     }),
    //   });
    //   fetchUsers();
    //   clear();

    //   return;
    // }


    // fetchUsers();
    // clear();

  };


  const deleteMatriz = () => {
    toast.promise(removeMatriz(DataMatriz.id), {
      loading: {
        title: "Eliminando...",
        position: "top-right",
      },
      success: (d) => {
        // Acciones a ejecutar en caso de éxito
        setDataMatriz(null);
        setDeleteUserModalOpen(false);
        setQuizzes((prevQuizzes) => prevQuizzes.filter(item => item.id !== DataMatriz.id));

        return {
          title: "Matriz",
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
  };


  async function fetchUsers() {
    try {
      const resMatriz = await getAllMatriz();
      const resProfessionals = await getAllProfessionals();
      const resCareers = await getAllCareers();
      const resPeriods = await getAllPeriods();
      setQuizzes(resMatriz.data);
      setProfessionals(resProfessionals.data);
      setCareers(resCareers.data)
      setPeriods(resPeriods.data)
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
          <Grid
            templateColumns={{ base: "1fr", md: "4fr 4fr" }}
            gap={2}
            mt={2}
          >
            <GridItem fontSize={"sm"}>
              {/* <Textarea value={textValue} /> */}
              <SelectData title="Modalidad" options={[{ value: "Presencial", label: "Presencial" }]}
                onSelectChange={(value, selectedOption) =>
                  handleSelectChangeModality(value, selectedOption)
                } />
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Año" />
                <Input
                name="year"
                  type="text"
                  maxLength={4}
                  placeholder="yyyy"
                  onChange={handleChangeYear}
                  value={year}
                />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "6fr 4fr" }}
            gap={2}
            mt={2}
          >
            <GridItem fontSize={"sm"}>
              {/* <Textarea value={textValue} /> */}
              <SelectData title="Carrera" options={transformedCarreras}
                onSelectChange={(value, selectedOption) =>
                  handleSelectChangeCareer(value, selectedOption)
                } />

            </GridItem>
            <GridItem fontSize={"sm"}>
            <Link to="/carreras">
              <Button colorScheme="green">Agregar</Button>
            </Link>

            </GridItem>

            <GridItem fontSize={"sm"}>
              <SelectData title="Periodo" options={transformedPeriodos} onSelectChange={(value, selectedOption) =>
                handleSelectChangePeriod(value, selectedOption)
              } />
            </GridItem>
            <GridItem fontSize={"sm"}>
            <Link to="/periodos">
              <Button colorScheme="green">Agregar</Button>
            </Link>
            </GridItem>


          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 4fr" }}
            gap={2}
            mt={2}
          >
            <GridItem fontSize={"sm"}>
              Profesionales
              <Tabl data={professionals} columns={columnsProfessionals} />
            </GridItem>

            <GridItem fontSize={"sm"}>
              Enlace para crear Matrices
              <Tabl data={createMatriz} columns={columnsCreateMatriz} />
            </GridItem>
            <GridItem colSpan={2} fontSize={"sm"}>
              <Center>
                <Button
                  type="button"
                  mt={4}
                  bg="ceruleanBlue.500"
                  color={"white"}
                  onClick={handleSubmit}  // Reemplaza "tuFuncion" con la función que deseas ejecutar
                >
                  Guardar
                </Button>

              </Center>

            </GridItem>
          </Grid>
        </Box>
        <Flex alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Matrices</Heading>
          </Box>
        </Flex>
        <Tabl data={quizzes} columns={columns} />

        <Modal
          isOpen={isSelectModalOpen}
          onAccept={() => setSelectModalOpen(false)}
          title="Seleccione Carrera y Periodo"
          message={alertDialogMessage || 'Por favor, seleccione una carrera, período, modalidad y año.'}
        />

        <Modal
          isOpen={isDeleteUserModalOpen}
          onClose={() => setDeleteUserModalOpen(false)}
          onAccept={deleteMatriz}
          title="Eliminar de la Matriz"
          message={alertDialogMessage || `¿Estás seguro de eliminar a ${DataMatriz ? DataMatriz.professional.firstName : ''} ${DataMatriz ? DataMatriz.professional.firstLastName : ''} de la Matriz?`}
        // message={alertDialogMessage || `¿Estás seguro de eliminar a?`}
        />
      </Box>
    </>
  );
}

export default Matriz;
