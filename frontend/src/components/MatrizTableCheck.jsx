import Tabl from "../components/Table";
import { useEffect, useState } from "react";
import { getAllQuizzes, addQuiz, editQuiz } from "../api/quizResquest";
import {
  getAllMatriz,
  getAllPeriods,
  getAllCareers,
  getMatrizFilter,
  addMatrizQuiz,
  getMatrizQuizFilter,
  deleteMatrizQuiz,
} from "../api/matrizResquest";
import { useRef } from "react";
import SelectData from "../components/SelectData";
import { FaYoutube } from "react-icons/fa";
import {
  Button,
  useDisclosure,
  AlertDialog,
  Grid,
  GridItem,
  Stack,
  useToast,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Flex,
  Box,
  Heading,
  Input,
  InputLeftAddon,
  InputGroup,
  Textarea,
  Checkbox,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import { getAllStudents } from "../api/studentsResquest";
import { getAllStudents,getMatriculaFilter,addStudentsQuiz,
  deleteStudentsQuiz,
  getStudentQuizFilter} from "../api/matriculaResquest";



function MatrizTableCheck() {
  const navigate = useNavigate();
  const toast = useToast();
  const [quizzes, setQuizzes] = useState([]);
  const [students, setStudents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState({});
  const cancelRef = useRef();
  const form = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(0);
  const [matriz, setMatriz] = useState([]);
  const [matrizFilterQuiz, setMatrizFilterQuiz] = useState([]);
  const [Periods, setPeriods] = useState([]);
  const [Careers, setCareers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOptionCareer, setSelectedOptionCareer] = useState(null);
  const [selectedOptionPeriod, setSelectedOptionPeriod] = useState(null);

  const [selectAllStudents, setSelectAllStudents] = useState(false);
  const [selectedItemsStudents, setSelectedItemsStudents] = useState([]);
  const [matriculaFilterQuiz, setMatriculaFilterQuiz] = useState([]);


  const columnsCreateMatriz = [
    {
      header: "#",
      accessorKey: "index",
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
      header: () => (
        <>
          <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
        </>
      ),
      accessorKey: "selectAll",
      cell: (props) => (
        <Center>
          <Stack spacing={4} direction="row" align="center">
            <Checkbox
              isChecked={selectAll || props.row.original.isSelected}
              onChange={() => handleCheckboxChange(props.row.index)}
            />
          </Stack>
        </Center>
      ),
    },
  ];

 
  const handleSelectAll = () => {
    const updatedMatriz = matriz.map((item) => ({
      ...item,
      isSelected: !selectAll,
    }));
    setMatriz(updatedMatriz);
    setSelectAll(!selectAll);

    const selected = updatedMatriz.filter((item) => item.isSelected);
    setSelectedItems(selected);
  };
  const handleSelectAllStudents = () => {
    const updatedMatricula = students.map((item) => ({
      ...item,
      isSelected: !selectAllStudents,
    }));
    setStudents(updatedMatricula);
    setSelectAllStudents(!selectAllStudents);

    const selected = updatedMatricula.filter((item) => item.isSelected);
    setSelectedItemsStudents(selected);
  };

  const handleCheckboxChange = (index) => {
    const updatedMatriz = matriz.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    
    setMatriz(updatedMatriz);
    
    const selected = updatedMatriz.filter((item) => item.isSelected);
    const deselected = updatedMatriz.filter((item) => !item.isSelected && selectedItems.includes(item));
    
    // Combinar los seleccionados y deseleccionados
    const updatedSelectedItems = [...selected, ...deselected];
    
    setSelectAll(selected.length === matriz.length); // Actualizar selectAll en consecuencia
    setSelectedItems(updatedSelectedItems);
    
  };

  const handleCheckboxChangeStudents = (index) => {
    const updatedMatricula = students.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setStudents(updatedMatricula);

    const selected = updatedMatricula.filter((item) => item.isSelected);

    setSelectAllStudents(selected.length === students.length); // Actualizar selectAll en consecuencia

    setSelectedItemsStudents(selected);
  };

  const transformedPeriodos = Periods.map((item) => ({
    value: item.id,
    label: `${item.name}`,
  }));
  const transformedCarreras = Careers.map((item) => ({
    value: item.idCarreer,
    label: `${item.name}`,
  }));
  const [formQuiz, setFormQuiz] = useState(initialFormQuiz);
  const handleSelectChangePeriod = async (value, selectedOption) => {
    selectAll ? handleSelectAll() : null;

    // Verifica si la primera opción está seleccionada
    if (selectedOption === "Seleccione una opción") {
      // Agrega aquí la lógica que deseas ejecutar cuando se selecciona la primera opción
      setSelectedOptionPeriod(null);
      if (!selectedOptionCareer) {
        const res = await getMatrizFilter({});
        setMatriz(res.data);

        const resStudents = await getMatriculaFilter({});
        setStudents(resStudents.data);
      } else {
        const res = await getMatrizFilter({ career: selectedOptionCareer.id });
        setMatriz(res.data);

            const resStudents = await getMatriculaFilter({ id_especialidad: selectedOptionCareer.id });
            setStudents(resStudents.data);
      }
    } else {
      // whereFilter.career? whereFilter.idPeriod=value: setWhereFilter({idPeriod:value});
      setSelectedOptionPeriod({ id: value, name: selectedOption });

      if (!selectedOptionCareer) {
        const res = await getMatrizFilter({ idPeriod: value });
        setMatriz(res.data);

        const resStudents = await getMatriculaFilter({ id_periodoac: value });
        setStudents(resStudents.data);
      } else {
        const res = await getMatrizFilter({
          idPeriod: value,
          career: selectedOptionCareer.id,
        });
        setMatriz(res.data);

        const resStudents = await getMatriculaFilter({
          id_periodoac: value,
          id_especialidad: selectedOptionCareer.id,
        });
        setStudents(resStudents.data);
      }
    }

    // Actualiza el estado normalmente
  };
  const handleSelectChangeCareer = async (value, selectedOption) => {
    selectAll ? handleSelectAll() : null;

    // Verifica si la primera opción está seleccionada
    if (selectedOption === "Seleccione una opción") {
      // Agrega aquí la lógica que deseas ejecutar cuando se selecciona la primera opción
      setSelectedOptionCareer(null);
      if (!selectedOptionPeriod) {
        const res = await getMatrizFilter({});
        setMatriz(res.data);
        const resStudents = await getMatriculaFilter({});
        setStudents(resStudents.data);
      } else {
        const res = await getMatrizFilter({
          idPeriod: selectedOptionPeriod.id,
        });


        setMatriz(res.data);
        const resStudents = await getMatriculaFilter({
          id_periodoac: selectedOptionPeriod.id,
        });
        setStudents(resStudents.data);
      }
    } else {
      setSelectedOptionCareer({ id: value, name: selectedOption });

      if (!selectedOptionPeriod) {
        const res = await getMatrizFilter({ career: value });
        setMatriz(res.data);

        const resStudents = await getMatriculaFilter({ id_especialidad: value });
        setStudents(resStudents.data);
      } else {
        const res = await getMatrizFilter({
          idPeriod: selectedOptionPeriod.id,
          career: value,
        });
        setMatriz(res.data);

        const resStudents = await getMatriculaFilter({
          id_periodoac: selectedOptionPeriod.id,
          id_especialidad: value,
        });
        setStudents(resStudents.data);
      }
    }

    // Actualiza el estado normalmente
  };

  const handleEditRow = async (row) => {
    const { title, description, date } = row;
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // console.log(row.matriculas)
    setMatriz([]);
    setMatrizFilterQuiz([]);

    // const resFilete = await getMatrizQuizFilter(row.idQuiz);


    // const matrizFilterQuizData = resFilete.data.matrices;
    const matrizFilterQuizData = row.matrices;
    const matriculaFilterQuizData = row.matriculas;

    // Comparar y establecer isSelected en consecuencia
    const updatedMatriz = matriz.map((item) => ({
      ...item,
      isSelected: matrizFilterQuizData.some(
        (filterItem) => filterItem.matriz_quizzes.idMatriz === item.id,
      ),
    }));
    const updatedMatricula = students.map((item) => ({
      ...item,
      isSelected: matriculaFilterQuizData.some(
        (filterItem) => filterItem.students_quizzes.studentId === item.id_matricula,
      ),
    }));
    console.log(matrizFilterQuizData);

    setMatriz(updatedMatriz);
    setMatrizFilterQuiz(matrizFilterQuizData);

    setStudents(updatedMatricula);
    setMatriculaFilterQuiz(matriculaFilterQuizData);

    setIsEditing(true);
    setId(row.idQuiz);
    setFormQuiz({
      title,
      description,
      date,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Registros Seleccionados:", selectedItems);

    if (isEditing) {
      // Filtrar los elementos que ya están en matrizFilterQuiz

     


        const newSelectedItems = selectedItems.filter(
          (selectedItem) =>
            !matrizFilterQuiz.some(
              (filterItem) => filterItem.matriz_quizzes.idMatriz === selectedItem.id,
            ),
        );
        // Filtrar los elementos que ya estaban seleccionados y ahora están deseleccionados
        const deselectedItems = matrizFilterQuiz.filter(
          (selectedItem) =>
            !selectedItems.some((item) => item.id === selectedItem.matriz_quizzes.idMatriz),
        );
        // Filtra los nuevos elementos seleccionados que no estaban en la BD
// // Filtra los elementos que estaban en la BD pero ya no están seleccionados actualmente
// const deselectedItems = matrizFilterQuiz.filter(item => !selectedItems.includes(item));

// // Filtra los nuevos elementos seleccionados que no estaban en la BD
// const newSelectedItems = selectedItems.filter(item => !matrizFilterQuiz.includes(item));

// // Mostrar los resultados solo si hay cambios en la selección
// if (newSelectedItems.length > 0 || deselectedItems.length > 0) {
//     console.log("Los items que trae de la BD y los pone como seleccionados en la tabla", matrizFilterQuiz);
//     console.log("Los items que se han seleccionado en la tabla", selectedItems);
//     console.log("New selected items", newSelectedItems);
//     console.log("Deselected items", deselectedItems);
// } else {
//     console.log("No se han hecho cambios en la selección.");
// }

      const newSelectedItemsStundents = selectedItemsStudents.filter(
        (selectedItemStudents) =>
          !matriculaFilterQuiz.some(
            (filterItem) => filterItem.students_quizzes.studentId === selectedItemStudents.id_matricula,
          ),
      );
      const deselectedItemsStudents = matriculaFilterQuiz.filter(
        (selectedItemStudents) =>
          !selectedItemsStudents.some((item) => item.id_matricula === selectedItemStudents.students_quizzes.studentId),
      );


      // Realizar la edición solo para los nuevos elementos
      toast.promise(editQuiz(id, formQuiz), {
        loading: {
          title: "Editando...",
          position: "top-right",
        },
        success: (d) => {

//esto falta controlar el agregado y la elminacion de datos de la BD

          if(newSelectedItems.length>0 || selectedItems.length>0){
            newSelectedItems.forEach((element) => {
              addMatrizQuiz({ idMatriz: element.id, quizId: id });
            });

          }
          if(deselectedItems.length>0 || selectedItems.length>0){
            deselectedItems.forEach((element) => {
              if (element.matriz_quizzes.completed == 0) {
                deleteMatrizQuiz(element.matriz_quizzes.idMatriz, element.matriz_quizzes.quizId);
              }
            });
          }

          if(newSelectedItemsStundents.length>0 || selectedItemsStudents.length>0){
            newSelectedItemsStundents.forEach((element) => {
              addStudentsQuiz({ studentId: element.id_matricula, quizId: id });
            });

          }
          if(deselectedItemsStudents.length>0 || selectedItemsStudents.length>0){
            deselectedItemsStudents.forEach((element) => {
              // console.log(element);
              if (element.students_quizzes.completed == 0) {
                deleteStudentsQuiz(element.students_quizzes.studentId, element.students_quizzes.quizId);
              }
            });
          }
      
          fetchUsers();
          clear();

          return {
            title: "Encuesta",
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

      fetchUsers();
      clear();

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
    fetchUsers();
    clear();
  };

  return (
    <>
      <Box p={10}>
        <Box>
          <Link
            to="https://drive.google.com/file/d/1PX_UWgZs_8boMl629Zlh0AVpmh43VmDY/view?usp=sharing"
            target="_blank"
          >
            <Button colorScheme={"red"}>
              Tutorial
              <FaYoutube />
            </Button>
          </Link>
          <form onSubmit={handleSubmit} ref={form}>
            <Grid
              templateColumns={{ base: "1fr", md: "2fr 2fr" }}
              gap={2}
              mt={2}
            >
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children="Titulo" />
                  <Input
                    type="text"
                    placeholder="Titulo"
                    name="title"
                    value={formQuiz.title ? formQuiz.title : ""}
                    onChange={handleChange}
                  />
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
                    value={formQuiz.date ? formQuiz.date : ""}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"} colSpan={2}>
                {/* <InputLeftAddon children="Descripción" /> */}
                <Textarea
                  name="description"
                  placeholder="Descripción"
                  value={formQuiz.description ? formQuiz.description : ""}
                  onChange={handleChange}
                ></Textarea>
              </GridItem>

              {isEditing ? (
                <>
                  <GridItem fontSize={"sm"}>
                    <SelectData
                      title="Periodo"
                      options={transformedPeriodos}
                      onSelectChange={(value, selectedOption) =>
                        handleSelectChangePeriod(value, selectedOption)
                      }
                    />
                  </GridItem>
                  <GridItem fontSize={"sm"}>
                    <SelectData
                      title="Carrera"
                      options={transformedCarreras}
                      onSelectChange={(value, selectedOption) =>
                        handleSelectChangeCareer(value, selectedOption)
                      }
                    />
                  </GridItem>
                  <GridItem fontSize={"sm"} colSpan={2}>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                          Tabla de Matrices
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                      <Tabl data={matriz} columns={columnsCreateMatriz} />
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Tabla de Estudiantes
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                      <Tabl data={students} columns={columnsStudents} />

                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                    
                  </GridItem>
                </>
              ) : null}
              <GridItem fontSize={"sm"}>
                <Button
                  type="submit"
                  mt={4}
                  bg="ceruleanBlue.500"
                  color={"white"}
                >
                  {!isEditing ? "Guardar" : "Editar"}
                </Button>
                {isEditing && (
                  <Button
                    mt={4}
                    ml={4}
                    colorScheme="red"
                    onClick={() => {
                      clear();
                    }}
                  >
                    Cancelar Edición
                  </Button>
                )}
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

export default MatrizTableCheck;
