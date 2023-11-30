import {
  Box,
  Input,
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
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";

function FormProfessionalMerits() {
  return (
    <form>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              MÉRITOS ACADÉMICOS Y PROFESIONALES
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
                <InputLeftAddon children="País" />
                <Input type="text" placeholder="País" name="country" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar" />
                <Input type="text" placeholder="Lugar" name="location" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo" />
                <Input
                  type="text"
                  placeholder="(Nacional, Internacional)"
                  name="type"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha" />
                <Input placeholder="Fecha" size="md" type="date" name="date" />
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
                <InputLeftAddon children="Otorgado Por" />
                <Input
                  type="text"
                  placeholder="Otorgado Por"
                  name="granted_by"
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
                  <Th>Nombre</Th>
                  <Th>Fecha</Th>
                  <Th>Tipo</Th>
                  <Th>Otorgado Por</Th>
                  <Th>País</Th>
                  <Th>Lugar</Th>
                </Tr>
              </Thead>
              {/* {datosAcademic_professional_merits ? (
                <Tbody>
                  {datosAcademic_professional_merits.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.name}</Td>
                      <Td>{reorderDate(item.date)}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.granted_by}</Td>
                      <Td>{item.country}</Td>
                      <Td>{item.location}</Td>
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

export default FormProfessionalMerits;
