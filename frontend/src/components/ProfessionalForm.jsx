import {
  Box,
  Heading,
  Input,
  Grid,
  GridItem,
  InputLeftAddon,
  InputGroup,
  Select,
  Button,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { getProfessionalsById } from "../api/professionalRequest.js";
import { verifyTokenRequest } from "../api/userRequest.js";
import DataTable from "../components/DataTables";
import Modal from "../components/AlertDialog";

function ProfessionalForm() {
  const form = useRef(null);
  let initialFormProfessional = {
    ci: "",
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    bloodType: "",
    birthDate: "",
    gender: "",
    civilStatus: "",
    nationality: "",
    placeBirth: "",
    placeResidence: "",
    direction: "",
    homePhone: "",
    cellPhone: "",
    personalEmail: "",
    institutionalEmail: "",
    image: "",
    idUser: "",
  };
  const [formProfessional, setFormProfessional] = useState(
    initialFormProfessional
  );

  async function fetchData() {
    try {
      const res = await verifyTokenRequest();
      const idUser = res.data.userId;
      const { data } = await getProfessionalsById(idUser);
      // setFormProfessional(data[0]);
      console.log(data)
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProfessional({ ...formProfessional, [name]: value });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(() => {
  //   console.log(formProfessional);
  //   setFormProfessional(formProfessional);
  // }, [formProfessional]);
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <Grid templateColumns={{ base: "1fr", md: "9fr 1fr" }} gap={4} mt={2}>
        <GridItem order={{ base: 2, md: 1 }}>
          <Heading as="h3" size="md" textAlign="left">
            DATOS PERSONALES
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={2} mt={2}>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Cedula" />
                <Input
                  value={formProfessional.ci ? formProfessional.ci : ""}
                  onChange={handleChange}
                  type="number"
                  placeholder="Cedula"
                  name="ci"
                  isRequired
                />
              </InputGroup>
            </GridItem>
            <GridItem></GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Primer Apellido" />
                <Input
                  type="text"
                  placeholder="Primer Apellido"
                  name="firstLastName"
                  value={
                    formProfessional.firstLastName
                      ? formProfessional.firstLastName
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Segundo Apellido" />
                <Input
                  type="text"
                  placeholder="Segundo Apellido"
                  name="secondLastName"
                  value={
                    formProfessional.secondLastName
                      ? formProfessional.secondLastName
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Primer Nombre" />
                <Input
                  type="text"
                  placeholder="Primer Nombre"
                  name="firstName"
                  value={
                    formProfessional.firstName ? formProfessional.firstName : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Segundo Nombre" />
                <Input
                  type="text"
                  placeholder="Segundo Nombre"
                  name="secondName"
                  value={
                    formProfessional.secondName
                      ? formProfessional.secondName
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Genero" />
                <Select
                  placeholder="Seleccione una opción"
                  name="gender"
                  value={formProfessional.gender ? formProfessional.gender : ""}
                  onChange={handleChange}
                >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </Select>
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Tipo de Sangre" />
                <Input
                  type="text"
                  placeholder="Tipo de Sangre"
                  name="bloodType"
                  value={
                    formProfessional.bloodType ? formProfessional.bloodType : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Fecha de nacimiento" />
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  name="birthDate"
                  value={
                    formProfessional.birthDate ? formProfessional.birthDate : ""
                  }
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Estado Civil" />
                <Select
                  placeholder="Seleccione una opción"
                  name="civilStatus"
                  value={
                    formProfessional.civilStatus
                      ? formProfessional.civilStatus
                      : ""
                  }
                  onChange={handleChange}
                >
                  <option value="option1">Soltero</option>
                  <option value="option2">Viudo</option>
                  <option value="option3">Casado</option>
                  <option value="option3">Divorciado</option>
                </Select>
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Nacionalidad" />
                <Input
                  type="text"
                  placeholder="Nacionalidad"
                  name="nationality"
                  value={
                    formProfessional.nationality
                      ? formProfessional.nationality
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono de domicilio" />
                <Input
                  type="tel"
                  placeholder="Teléfono de domicilio"
                  name="homePhone"
                  value={
                    formProfessional.homePhone ? formProfessional.homePhone : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono de celular" />
                <Input
                  type="tel"
                  placeholder="Teléfono de celular"
                  name="cellPhone"
                  value={
                    formProfessional.cellPhone ? formProfessional.cellPhone : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar de Nacimiento" />
                <Input
                  type="text"
                  placeholder="Lugar de Nacimiento"
                  name="placeBirth"
                  value={
                    formProfessional.placeBirth
                      ? formProfessional.placeBirth
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Dirección de domicilio" />
                <Input
                  type="text"
                  placeholder="Dirección de domicilio"
                  name="direction"
                  value={
                    formProfessional.direction ? formProfessional.direction : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar de residencia" />
                <Input
                  type="text"
                  placeholder="Lugar de residencia"
                  name="placeResidence"
                  value={
                    formProfessional.placeResidence
                      ? formProfessional.placeResidence
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="@" />
                <Input
                  type="email"
                  placeholder="Correo Electrónico Institucional"
                  name="institutionalEmail"
                  value={
                    formProfessional.institutionalEmail
                      ? formProfessional.institutionalEmail
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="@" />
                <Input
                  type="email"
                  placeholder="Correo Electrónico Personal"
                  name="personalEmail"
                  value={
                    formProfessional.personalEmail
                      ? formProfessional.personalEmail
                      : ""
                  }
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
            <GridItem fontSize={"sm"} border="1px solid #ccc" borderRadius={8}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                <GridItem fontSize={"lg"} margin={"auto"}>
                  Discapacidad:
                </GridItem>
                <GridItem fontSize={"sm"}>
                  <InputGroup>
                    <InputLeftAddon children="Tipo" w={110} />
                    <Input type="text" placeholder="Tipo" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Nro" w={110} />
                    <Input type="text" placeholder="Nro" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Porcentaje" w={110} />
                    <Input type="text" placeholder="Porcentaje" />
                  </InputGroup>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          order={{ base: 1, md: 1 }}
          textAlign={"center"}
          margin={"auto"}
        >
          <Box color="white" borderRadius="md" w={300} h={300}>
            <Image src="https://bit.ly/dan-abramov" borderRadius="full"></Image>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          order={{ base: 1, md: 1 }}
          textAlign={"center"}
          margin={"auto"}
        >
          <Button type="submit" mt={4} bg="primary.200" color={"white"}>
            Guardar Cambios
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}

export default ProfessionalForm;
