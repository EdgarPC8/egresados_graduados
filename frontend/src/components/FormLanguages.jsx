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

import { useEffect, useState, useRef } from "react";
import { addLanguages, getAllLanguages, editLanguages, deleteLanguages } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormLanguages() {
  const [datosLanguages, setDatosLanguages] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [name, setName] = useState("");
  const [speaking_level, setSpeaking_level] = useState("");
  const [writing_level, setWriting_level] = useState("");
  const [comprehension_level, setComprehension_level] = useState("");
  const [type_certification, setType_certification] = useState("");

  function clear() {
    setEditing(false);
    setId(false)
    setName("")
    setSpeaking_level("")
    setWriting_level("")
    setComprehension_level("")
    setType_certification("")
    setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllLanguages();
      setDatosLanguages(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editLanguages({ columns: formData, where: { where: { id: id } } });
        fetchData()
      } else {
        const { data } = await addLanguages(formData); // assuming addLanguages is an asynchronous function
        setDatosLanguages([...datosLanguages, formData]); // Assuming the returned data is the newly added item
      }
      clear()
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditRow = (row, event) => {
    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setbuttonSubmit("Editar")
    setEditing(true);
    setId(row.id)
    setName(row.name)
    setSpeaking_level(row.speaking_level)
    setWriting_level(row.writing_level)
    setComprehension_level(row.comprehension_level)
    setType_certification(row.type_certification)
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteLanguages(id);
      fetchData();
      clear()
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  


  return (
    <form onSubmit={handleSubmit} ref={form}>
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
                  name="name"value={name} onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Certificación" />
                <Input
                  type="text"
                  placeholder="(TOEPI, TOEIC, CPE, IELTS, PET, Otro)"
                  name="type_certification"value={type_certification} onChange={(e) => setType_certification(e.target.value)}
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
                      m={"auto"}
                      name="speaking_level"value={speaking_level} onChange={setSpeaking_level}
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
                    <RadioGroup m={"auto"} name="writing_level"value={writing_level} onChange={setWriting_level}>
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
                      m={"auto"}
                      name="comprehension_level"value={comprehension_level} onChange={setComprehension_level}
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
                {buttonSubmit}
              </Button>
            </GridItem>
          </Grid>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAccept={handleAcceptDelete}
            title="Datos"
            message="¿Estas Seguro que deseas eliminar?"
          >
          </Modal>
          <DataTable
            header={[
              'Idioma (Diferente al nativo)',
              'Hablado Básico/Medio/Alto',
              'Escritura Básico/Medio/Alto',
              'Comprensión Básico/Medio/Alto',
              'Tipo de Certificación',
              'Acción'
            ]}
            keyValues={[
              'name',
              'speaking_level',
              'writing_level',
              'comprehension_level',
              'type_certification',
            ]}
            data={datosLanguages}
            title="Idiomas"
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

export default FormLanguages;
