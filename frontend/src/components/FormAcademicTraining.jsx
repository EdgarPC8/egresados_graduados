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
import { addAcademicTraining } from "../api/cvRequest";

function FormAcademicTraining() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      const { data } = addAcademicTraining(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
          <ChakraProvider>
            {/* <DataTable
              tableTitle="Datos"
              data={datosAcademic_training}
              columnHeaders={[
                "#",
                "Tipo",
                "Título Obtenido",
                "Institución Educativa",
                "Fecha",
                "Lugar",
                "País",
                "Nro. de registro SENESCYT",
                "Acción",
              ]}
              columnKeys={[
                "rowNumber",
                "type",
                "date",
                "place",
                "country",
                "obtained_tittle",
                "educational_institution",
                "senescyt_registration_n",
                "senescyt_registration_n",
              ]}
              ref={dataTableRef1}
            /> */}
          </ChakraProvider>
          {/* <TableContainer mb={4}>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Tipo</Th>
                      <Th>Título Obtenido</Th>
                      <Th>Institución Educativa</Th>
                      <Th>Fecha</Th>
                      <Th>Lugar</Th>
                      <Th>País</Th>
                      <Th>Nro. de registro SENESCYT</Th>
                      <Th>Acción</Th>
                    </Tr>
                  </Thead>
                  {datosAcademic_training ? (
                    <Tbody>
                      {datosAcademic_training.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index+1}</Td>
                          <Td>{item.type}</Td>
                          <Td>{reorderDate(item.date)}</Td>
                          <Td>{item.place}</Td>
                          <Td>{item.country}</Td>
                          <Td>{item.obtained_tittle}</Td>
                          <Td>{item.educational_institution}</Td>
                          <Td>{item.senescyt_registration_n}</Td>
                          <Td>
                          <Button
                            type="button"
                            mt={4}
                            bg="yellow"
                            _hover={{ bg: "yellow.300" }}
                            color={"white"}
                            onClick={(event) => handleEditClick(item,event)} // Maneja el clic en el botón de editar
                            data-form-id="formAcademic_training"
                          >
                            <EditIcon />
                          </Button>

                          <Button type="button" mt={4} bg="red"_hover={{bg:"red.600"}} color={"white"} onClick={(event)=> handleDeleteClick(item.id,event)}>
                            <DeleteIcon />
                          </Button>

                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <Tbody>
                      <Tr>
                        <Td colSpan="7">Cargando datos...</Td>
                      </Tr>
                    </Tbody>
                  )}

                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer> */}
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormAcademicTraining;
