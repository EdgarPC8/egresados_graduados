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
import { addBooks } from "../api/cvRequest";

function FormBooks() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = Object.fromEntries(new FormData(event.target));

    try {
      const { data } = addBooks(dataForm);
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
              LIBROS
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
                <Input
                  type="text"
                  placeholder="(Divulgación, Científico)"
                  name="type"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Autoria" />
                <Input
                  type="text"
                  placeholder="(Autor, Coautor)"
                  name="type_authorship"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre de Editorial" />
                <Input
                  type="text"
                  placeholder="Nombre de Editorial"
                  name="editoral_name"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Origen de Editorial" />
                <Input
                  type="text"
                  placeholder="(Nacional, Internacional)"
                  name="editoral_origin"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Año" />
                <Input placeholder="Fecha" size="md" type="date" name="year" />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="ISB N." />
                <Input type="text" placeholder="ISB N." name="isb_n" />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Titulo" />
                <Input type="text" placeholder="Titulo" name="tittle" />
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
                  <Th rowSpan={2}>Titulo</Th>
                  <Th rowSpan={2}>Tipo</Th>
                  <Th rowSpan={2}>Tipo de Autoria</Th>
                  <Th rowSpan={2}>ISB N.</Th>
                  <Th colSpan={2} textAlign={"center"}>
                    Editorial
                  </Th>
                  <Th rowSpan={2}>Año</Th>
                </Tr>
                <Tr>
                  <Th textAlign={"center"}>Nombre</Th>
                  <Th textAlign={"center"}>Origen</Th>
                </Tr>
              </Thead>
              {/* {datosBooks ? (
                <Tbody>
                  {datosBooks.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.tittle}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.type_authorship}</Td>
                      <Td>{item.isb_n}</Td>
                      <Td>{item.editoral_name}</Td>
                      <Td>{item.editoral_origin}</Td>
                      <Td>{item.year}</Td>
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

export default FormBooks;
