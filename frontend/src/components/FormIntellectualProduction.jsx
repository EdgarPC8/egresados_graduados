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
import { useEffect, useState, useRef } from "react";
import { addIntellectualProduction, getAllIntellectualProduction, editIntellectualProduction, deleteIntellectualProduction } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function formIntellectualProduction() {
  const [datosIntellectualProduction, setDatosIntellectualProduction] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [type_authorship, setType_authorship] = useState("");
  const [date, setDate] = useState("");
  const [web_link, setWeb_link] = useState("");

  function clear() {
    setEditing(false);
    setId(false)
    setType("")
    setName("")
    setType_authorship("")
    setDate("")
    setWeb_link("")
    setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllIntellectualProduction();
      setDatosIntellectualProduction(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editIntellectualProduction({ columns: formData, where: { where: { id: id } } });
        fetchData()
      } else {
        const { data } = await addIntellectualProduction(formData); // assuming addIntellectualProduction is an asynchronous function
        setDatosIntellectualProduction([...datosIntellectualProduction, formData]); // Assuming the returned data is the newly added item
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
    setType(row.type)
    setName(row.name)
    setType_authorship(row.type_authorship)
    setDate(row.date)
    setWeb_link(row.web_link)
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteIntellectualProduction(id);
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
                <Input type="text" placeholder="Tipo" name="type"value={type} onChange={(e) => setType(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Autoria" />
                <Input
                  type="text"
                  placeholder="Tipo de Autoria"
                  name="type_authorship"value={type_authorship} onChange={(e) => setType_authorship(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha Inicio" />
                <Input placeholder="Fecha" size="md" type="date" name="date"value={date} onChange={(e) => setDate(e.target.value)} />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid gap={2} mt={2} mb={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nombre/Titulo" />
                <Input type="text" placeholder="Nombre/Titulo" name="name"value={name} onChange={(e) => setName(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Enlace Web" />
                <Input type="text" placeholder="Enlace Web" name="web_link"value={web_link} onChange={(e) => setWeb_link(e.target.value)} />
              </InputGroup>
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
              'Tipo',
              'Nombre/Titulo',
              'Tipo de Autoria',
              'Fecha',
              'Enlace Web',
              'Acción'
            ]}
            keyValues={[
              'type',
              'name',
              'type_authorship',
              'date',
              'web_link'
            ]}
            data={datosIntellectualProduction}
            title="Producción Intelectual"
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

export default formIntellectualProduction;
