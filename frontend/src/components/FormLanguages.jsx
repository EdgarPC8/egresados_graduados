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

function FormLanguages() {
  


  return (
    <form>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              IDIOMAS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre" />
                <Input
                  type="text"
                  placeholder="Diferente al Nativo"
                  name="name"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Certificación" />
                <Input
                  type="text"
                  placeholder="(TOEPI, TOEIC, CPE, IELTS, PET, Otro)"
                  name="type_certification"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"} border="1px solid #ccc" borderRadius={8}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                <GridItem fontSize={"lg"} margin={"auto"}>
                  Nivel de Dominio:
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup mt={3}>
                    <InputLeftAddon w={150} children="Hablado" />
                    <RadioGroup
                      defaultValue=""
                      m={"auto"}
                      name="speaking_level"
                    >
                      <Stack spacing={5} direction="row">
                        <Radio colorScheme="green" value="">
                          Ninguno
                        </Radio>
                        <Radio colorScheme="green" value="Básico">
                          Básico
                        </Radio>
                        <Radio colorScheme="green" value="Medio">
                          Medio
                        </Radio>
                        <Radio colorScheme="green" value="Alto">
                          Alto
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </InputGroup>
                  <InputGroup mt={3}>
                    <InputLeftAddon w={150} children="Escritura" />
                    <RadioGroup defaultValue="" m={"auto"} name="writing_level">
                      <Stack spacing={5} direction="row">
                        <Radio colorScheme="green" value="">
                          Ninguno
                        </Radio>
                        <Radio colorScheme="green" value="Básico">
                          Básico
                        </Radio>
                        <Radio colorScheme="green" value="Medio">
                          Medio
                        </Radio>
                        <Radio colorScheme="green" value="Alto">
                          Alto
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </InputGroup>
                  <InputGroup mt={3}>
                    <InputLeftAddon w={150} children="Comprensión" />
                    <RadioGroup
                      defaultValue=""
                      m={"auto"}
                      name="comprehension_level"
                    >
                      <Stack spacing={5} direction="row">
                        <Radio colorScheme="green" value="">
                          Ninguno
                        </Radio>
                        <Radio colorScheme="green" value="Básico">
                          Básico
                        </Radio>
                        <Radio colorScheme="green" value="Medio">
                          Medio
                        </Radio>
                        <Radio colorScheme="green" value="Alto">
                          Alto
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </InputGroup>
                </GridItem>
              </Grid>
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
                  <Th rowSpan={3} colSpan={1}>
                    #
                  </Th>
                  <Th rowSpan={3} colSpan={1}>
                    Idioma (Diferente al nativo)
                  </Th>
                  <Th colSpan={3} textAlign="center">
                    Nivel de dominio
                  </Th>
                  <Th rowSpan={3} colSpan={0}>
                    Tipo de Certificación
                  </Th>
                </Tr>
                <Tr>
                  <Th textAlign="center">Hablado</Th>
                  <Th textAlign="center">Escritura</Th>
                  <Th textAlign="center">Comprensión</Th>
                </Tr>
                <Tr>
                  <Th textAlign="center">Básico/Medio/Alto</Th>
                  <Th textAlign="center">Básico/Medio/Alto</Th>
                  <Th textAlign="center">Básico/Medio/Alto</Th>
                </Tr>
              </Thead>
              {/* {datosLanguages ? (
                <Tbody>
                  {datosLanguages.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.name}</Td>
                      <Td textAlign="center">{item.speaking_level}</Td>
                      <Td textAlign="center">{item.writing_level}</Td>
                      <Td textAlign="center">{item.comprehension_level}</Td>
                      <Td textAlign="center">{item.type_certification}</Td>
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

export default FormLanguages;
