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

import { useEffect, useState, useRef } from "react";
import { addProfessionalExperience, getAllProfessionalExperience, editProfessionalExperience, deleteProfessionalExperience } from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormProfessionalExperience() {
  const [datosProfessionalExperience, setDatosProfessionalExperience] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [buttonSubmit, setbuttonSubmit] = useState("Guardar");

  const [id, setId] = useState(false);
  const [nro, setNro] = useState("");
  const [company_institution, setCompany_institution] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [immediate_head, setImmediate_head] = useState("");
  const [telephone, setTelephone] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");

  function clear() {
    setEditing(false);
    setId(false)
    setNro("")
    setCompany_institution("")
    setPosition("")
    setResponsibilities("")
    setImmediate_head("")
    setTelephone("")
    setStart_date("")
    setEnd_date("")
    setbuttonSubmit("Guardar")
  }
  async function fetchData() {
    try {
      const { data } = await getAllProfessionalExperience();
      setDatosProfessionalExperience(data)
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      if (editing) {
        const { data } = await editProfessionalExperience({ columns: formData, where: { where: { id: id } } });
        fetchData()
      } else {
        const { data } = await addProfessionalExperience(formData); // assuming addProfessionalExperience is an asynchronous function
        setDatosProfessionalExperience([...datosProfessionalExperience, formData]); // Assuming the returned data is the newly added item
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
    setNro(row.nro)
    setCompany_institution(row.company_institution)
    setPosition(row.position)
    setResponsibilities(row.responsibilities)
    setImmediate_head(row.immediate_head)
    setTelephone(row.telephone)
    setStart_date(row.start_date)
    setEnd_date(row.end_date)
  };
  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id)
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteProfessionalExperience(id);
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
                  name="start_date"value={start_date} onChange={(e) => setStart_date(e.target.value)}
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
                  name="end_date"value={end_date} onChange={(e) => setEnd_date(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Cargo" />
                <Input type="text" placeholder="Cargo" name="position"value={position} onChange={(e) => setPosition(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono" />
                <Input type="text" placeholder="Teléfono" name="telephone"value={telephone} onChange={(e) => setTelephone(e.target.value)} />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Jefe Inmediato" />
                <Input
                  type="text"
                  placeholder="Jefe Inmediato"
                  name="immediate_head"value={immediate_head} onChange={(e) => setImmediate_head(e.target.value)}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Responsabiliades y/o Actividades" />
                <Input
                  type="text"
                  placeholder="Responsabiliades y/o Actividades"
                  name="responsibilities"value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)}
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
                  name="company_institution"value={company_institution} onChange={(e) => setCompany_institution(e.target.value)}
                />
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
              'Nro.',
              'Empresa/Institución',
              'Cargo',
              'Responsabilidades y/o Actividades',
              'Jefe Inmediato',
              'Teléfono',
              'Fecha Inicio',
              'Fecha Fin',
              'Acción'
            ]}
            keyValues={[
              'nro',
              'company_institution',
              'position',
              'responsibilities',
              'immediate_head',
              'telephone',
              'start_date',
              'end_date'
            ]}
            data={datosProfessionalExperience}
            title="Formación Academica"
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

export default FormProfessionalExperience;
