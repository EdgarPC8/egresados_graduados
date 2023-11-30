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

function FormTeaching() {
  return (
    <form>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              EXPERIENCIA DOCENTE
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
                  required
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
                  required
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
                <InputLeftAddon children="País" />
                <Input type="text" placeholder="País" name="country" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Materia" />
                <Input
                  type="text"
                  placeholder="Materia/Componente Educativo"
                  required
                  name="subject"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Modalidad" />
                <Input type="text" placeholder="Modalidad" name="modality" />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Institución Educativa" />
                <Input
                  type="text"
                  placeholder="Institución Educativa"
                  required
                  name="educational_institution"
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
                  <Th>#</Th>
                  <Th>Institución Educativa</Th>
                  <Th>Materia/Componente Educativo</Th>
                  <Th>Fecha Inicio</Th>
                  <Th>Fecha Fin</Th>
                  <Th>Modalidad</Th>
                  <Th>Lugar</Th>
                  <Th>País</Th>
                </Tr>
              </Thead>
              {/* {datosTeaching_experience ? (
                <Tbody>
                  {datosTeaching_experience.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.educational_institution}</Td>
                      <Td>{item.subject}</Td>
                      <Td>{reorderDate(item.start_date)}</Td>
                      <Td>{reorderDate(item.end_date)}</Td>
                      <Td>{item.modality}</Td>
                      <Td>{item.place}</Td>
                      <Td>{item.country}</Td>
                      <Td>
                        <Button
                          type="button"
                          mt={4}
                          bg="yellow"
                          _hover={{ bg: "yellow.300" }}
                          color={"white"}
                          onClick={(event) => handleEditClick(item, event)} // Maneja el clic en el botón de editar
                          data-form-id="formTeaching_experience"
                        >
                          <EditIcon />
                        </Button>

                        <Button
                          type="button"
                          mt={4}
                          bg="red"
                          _hover={{ bg: "red.600" }}
                          color={"white"}
                          onClick={(event) => handleDeleteClick(item.id, event)}
                        >
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
              )} */}
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormTeaching;
