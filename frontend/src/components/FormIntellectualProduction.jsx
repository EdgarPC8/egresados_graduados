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
  Tr,
  Thead,
  Tfoot,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";

function FormIntellectualProduction() {
  return (
    <form>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              PRODUCCIÓN INTELECTUAL
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
                <Input type="text" placeholder="Tipo" name="type" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Autoria" />
                <Input
                  type="text"
                  placeholder="Tipo de Autoria"
                  name="type_authorship"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha Inicio" />
                <Input placeholder="Fecha" size="md" type="date" name="date" />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre/Titulo" />
                <Input type="text" placeholder="Nombre/Titulo" name="name" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Enlace Web" />
                <Input type="text" placeholder="Enlace Web" name="web_link" />
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
                Guardar
              </Button>
            </GridItem>
          </Grid>
          <TableContainer mb={4}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Tipo</Th>
                  <Th>Nombre/Titulo</Th>
                  <Th>Tipo de Autoria</Th>
                  <Th>Fecha</Th>
                  <Th>Enlace Web</Th>
                </Tr>
              </Thead>
              {/* {datosIntellectual_production ? (
            <Tbody>
              {datosIntellectual_production.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item.type}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.type_authorship}</Td>
                  <Td>{reorderDate(item.date)}</Td>
                  <Td>{item.web_link}</Td>
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

export default FormIntellectualProduction;
