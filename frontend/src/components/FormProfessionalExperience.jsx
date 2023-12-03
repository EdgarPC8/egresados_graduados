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
import {
  addProfessionalExperience,
  getAllProfessionalExperience,
  editProfessionalExperience,
  deleteProfessionalExperience,
} from "../api/cvRequest";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function FormProfessionalExperience() {
  const initialFormProfessional = {
    nro: "",
    companyInstitution: "",
    position: "",
    responsibilities: "",
    immediateHead: "",
    telephone: "",
    startDate: "",
    endDate: "",
  };

  const [datosProfessionalExperience, setDatosProfessionalExperience] =
    useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);

  const [formProfessional, setFormProfessional] = useState(
    initialFormProfessional
  );

  const [id, setId] = useState(false);

  function clear() {
    setIsEditing(false);
    setId(false);
    setFormProfessional(initialFormProfessional);
  }
  async function fetchData() {
    try {
      const { data } = await getAllProfessionalExperience();
      setDatosProfessionalExperience(data);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditing) {
        const { data } = await editProfessionalExperience(id, formProfessional);
        fetchData();
      } else {
        const { data } = await addProfessionalExperience(formProfessional);
        setDatosProfessionalExperience([
          ...datosProfessionalExperience,
          formProfessional,
        ]);
      }
      clear();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditRow = (row, event) => {
    const {
      nro,
      companyInstitution,
      position,
      responsibilities,
      immediateHead,
      telephone,
      startDate,
      endDate,
    } = row;

    form.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsEditing(true);
    setId(row.id);

    setFormProfessional(
      nro,
      companyInstitution,
      position,
      responsibilities,
      immediateHead,
      telephone,
      startDate,
      endDate
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProfessional({ ...formProfessional, [name]: value });
  };

  const handleDeleteRow = async (row, event) => {
    setIsModalOpen(true);
    setId(row.id);
  };
  const handleAcceptDelete = async () => {
    try {
      const { data } = await deleteProfessionalExperience(id);
      fetchData();
      clear();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
                  name="startDate"
                  value={formProfessional.startDate}
                  onChange={handleChange}
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
                  name="endDate"
                  value={formProfessional.endDate}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Cargo" />
                <Input
                  type="text"
                  placeholder="Cargo"
                  name="position"
                  value={formProfessional.position}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono" />
                <Input
                  type="text"
                  placeholder="Teléfono"
                  name="telephone"
                  value={formProfessional.telephone}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Jefe Inmediato" />
                <Input
                  type="text"
                  placeholder="Jefe Inmediato"
                  name="immediateHead"
                  value={formProfessional.immediateHead}
                  onChange={handleChange}
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
                  value={formProfessional.responsibilities}
                  onChange={handleChange}
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
                  name="companyInstitution"
                  value={formProfessional.companyInstitution}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem
              colSpan={2}
              order={{ base: 1, md: 1 }}
              textAlign={"right"}
            >
              <Button type="submit" mt={4} bg="primary.200" color={"white"}>
                {!isEditing ? "Guardar" : "Editar"}
              </Button>
            </GridItem>
          </Grid>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAccept={handleAcceptDelete}
            title="Datos"
            message="¿Estas Seguro que deseas eliminar?"
          ></Modal>
          <DataTable
            header={[
              "Nro.",
              "Empresa/Institución",
              "Cargo",
              "Responsabilidades y/o Actividades",
              "Jefe Inmediato",
              "Teléfono",
              "Fecha Inicio",
              "Fecha Fin",
              "Acción",
            ]}
            keyValues={[
              "nro",
              "company_institution",
              "position",
              "responsibilities",
              "immediate_head",
              "telephone",
              "start_date",
              "end_date",
            ]}
            data={datosProfessionalExperience}
            title="Formación Academica"
            defaultRowsPerPage={5}
            numberRow={true}
            buttons={{
              buttonEdit: true,
              handleEditRow: handleEditRow,
              buttonDelete: true,
              handleDeleteRow: handleDeleteRow,
            }}
          />
        </AccordionPanel>
      </AccordionItem>
    </form>
  );
}

export default FormProfessionalExperience;
