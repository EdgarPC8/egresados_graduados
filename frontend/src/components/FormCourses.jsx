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
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { addCoursesWorkShop } from "../api/cvRequest";

function FormCourses() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataForm = Object.fromEntries(new FormData(event.target));
    try {
      const { data } = addCoursesWorkShop(dataForm);
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
              CURSOS, TALLERES, SEMINARIOS, CONGRESOS, Y /U OTROS
              (Certificaciones hasta 5 años)
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
                  name="start_date"
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
                  name="end_date"
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
                <InputLeftAddon children="Tipo" />
                <Input
                  type="text"
                  placeholder="(Curso, Seminario, Taller, Congreso, Otro)"
                  name="type"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Duración" />
                <Input type="number" placeholder="En Horas" name="duration" />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo participación" />
                <RadioGroup m={"auto"}>
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="green"
                      value="Asistente"
                      name="type_participation"
                    >
                      Asistente
                    </Radio>
                    <Radio
                      colorScheme="green"
                      value="Expositor"
                      name="type_participation"
                    >
                      Expositor
                    </Radio>
                  </Stack>
                </RadioGroup>
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre" />
                <Input type="text" placeholder="Nombre" name="name" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Organizado Por" />
                <Input
                  type="text"
                  placeholder="Organizado Por"
                  name="organized_by"
                />
              </InputGroup>
            </GridItem>
            <GridItem
              colSpan={2}
              order={{ base: 1, md: 1 }}
              textAlign={"right"}
            >
              <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                Guardar
              </Button>
            </GridItem>
          </Grid>
          <TableContainer mb={4}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th rowSpan={2}>#</Th>
                  <Th rowSpan={2}>Tipo</Th>
                  <Th rowSpan={2}>Nombre</Th>
                  <Th rowSpan={2}>Organizado Por:</Th>
                  <Th rowSpan={2}>Lugar</Th>
                  <Th rowSpan={2}>Duracion(Horas)</Th>
                  <Th textAlign={"center"} colSpan={2}>
                    Fecha de Realización
                  </Th>
                  <Th textAlign={"center"} colSpan={2}>
                    Tipo de Participación
                  </Th>
                </Tr>
                <Tr>
                  <Th>Fecha Inicio</Th>
                  <Th>Fecha Fin</Th>
                  <Th textAlign={"center"}>Asistente/Expositor</Th>
                </Tr>
              </Thead>
              {/* {datosCourses_workshops ? (
                <Tbody>
                  {datosCourses_workshops.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.organized_by}</Td>
                      <Td>{item.place}</Td>
                      <Td>{item.duration}</Td>
                      <Td>{reorderDate(item.start_date)}</Td>
                      <Td>{reorderDate(item.end_date)}</Td>
                      <Td textAlign={"center"}>{item.type_participation}</Td>
                    </Tr>
                  ))}
                </Tbody>
              ) : (
                <Tbody>
                  <Tr>
                    <Td colSpan="7">Cargando datos...</Td>
                  </Tr>
                </Tbody>
              )} */}
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormCourses;
