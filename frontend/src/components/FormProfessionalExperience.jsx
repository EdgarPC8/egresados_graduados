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

function FormProfessionalExperience() {
  return (
    <form>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              EXPERIENCIA PROFESIONAL (Los ultimos 10 años)
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
                <InputLeftAddon children="Cargo" />
                <Input type="text" placeholder="Cargo" name="position" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono" />
                <Input type="text" placeholder="Teléfono" name="telephone" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Jefe Inmediato" />
                <Input
                  type="text"
                  placeholder="Jefe Inmediato"
                  name="immediate_head"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Responsabiliades y/o Actividades" />
                <Input
                  type="text"
                  placeholder="Responsabiliades y/o Actividades"
                  name="responsibilities"
                />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Empresa/Institución" />
                <Input
                  type="text"
                  placeholder="Comience por la ultima"
                  name="company_institution"
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
                  <Th>Nro.</Th>
                  <Th>Empresa/Institución</Th>
                  <Th>Cargo</Th>
                  <Th>Responsabilidades y/o Actividades</Th>
                  <Th>Jefe Inmediato</Th>
                  <Th>Teléfono</Th>
                  <Th>Fecha Inicio</Th>
                  <Th>Fecha Fin</Th>
                </Tr>
              </Thead>
              {/* {datosProfessional_experience ? (
                <Tbody>
                  {datosProfessional_experience.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.nro}</Td>
                      <Td>{item.company_institution}</Td>
                      <Td>{item.position}</Td>
                      <Td>{item.responsibilities}</Td>
                      <Td>{item.immediate_head}</Td>
                      <Td>{item.telephone}</Td>
                      <Td>{reorderDate(item.start_date)}</Td>
                      <Td>{reorderDate(item.end_date)}</Td>
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

export default FormProfessionalExperience;
