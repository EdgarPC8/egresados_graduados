import {
  ChakraProvider,
  Box,
  Heading,
  Input,
  Container,
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
  Textarea,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { addAcademicTraining, getAllAcademicTraining,editAcademicTraining } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import { putFormEditElementsInputs } from "../helpers/editForm.js";

function FormAcademicTraining() {
  const [datosAcademicTraining, setDatosAcademicTraining] = useState([]);
  const [editing, setEditing] = useState(false);
  const [idEdit, setIdEdit] = useState(false);
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
        // event.currentTarget.closest("form")?event.currentTarget.closest("form").querySelector('button[type="submit"]').innerText="Guardar":null;
        const form = event.currentTarget.closest("form");
        if (form) {
          const submitButton = form.querySelector('button[type="submit"]');
          submitButton?submitButton.innerText="Guardar":null;
        }
        const { data } = await editAcademicTraining({columns:formData,where:{where:{id:idEdit}}}); 
        fetchData()
      } else {
        const { data } = await addAcademicTraining(formData); // assuming addAcademicTraining is an asynchronous function
        setDatosAcademicTraining([...datosAcademicTraining, formData]); // Assuming the returned data is the newly added item
      }
      setEditing(false);
      event.target.reset(); // Reiniciar el formulario

    } catch (error) {
      console.log(error);
    }
  };


  // Función para editar una fila
  const handleEditRow = (row, event) => {
    setIdEdit(putFormEditElementsInputs(row, event))
    setEditing(true);
  };
  // Función para eliminar una fila
  const handleDeleteRow = (row) => {
    console.log(`Eliminando la fila con tipo ${row.type}`);
  };
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <form onSubmit={handleSubmit}>
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
                <Select placeholder="Seleccione una opción" name="type">
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
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar" />
                <Input type="text" placeholder="Lugar" name="place" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="País" />
                <Input type="text" placeholder="País" name="country" />
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
                Guardar
              </Button>
            </GridItem>
          </Grid>
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
