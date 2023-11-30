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
} from "@chakra-ui/react";
import { addProfessional } from "../api/cvRequest";

function ProfessionalForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = Object.fromEntries(new FormData(event.target));
    try {
      const { data } = await addProfessional(dataForm);
      console.log(data);
    } catch (error) {
      console.error("Error en getAllProfessionals:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
                  name="first_lastname"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Segundo Apellido" />
                <Input
                  type="text"
                  placeholder="Segundo Apellido"
                  name="second_lastname"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Primer Nombre" />
                <Input
                  type="text"
                  placeholder="Primer Nombre"
                  name="first_name"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Segundo Nombre" />
                <Input
                  type="text"
                  placeholder="Segundo Nombre"
                  name="second_name"
                />
              </InputGroup>
            </GridItem>

            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Genero" />
                <Select placeholder="Seleccione una opción" name="gender">
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
                  name="blood_type"
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
                  name="birth_date"
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Estado Civil" />
                <Select placeholder="Seleccione una opción" name="civil_status">
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
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono de domicilio" />
                <Input
                  type="tel"
                  placeholder="Teléfono de domicilio"
                  name="home_phone"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Teléfono de celular" />
                <Input
                  type="tel"
                  placeholder="Teléfono de celular"
                  name="cell_phone"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar de Nacimiento" />
                <Input
                  type="text"
                  placeholder="Lugar de Nacimiento"
                  name="place_birth"
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
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="Lugar de residencia" />
                <Input
                  type="text"
                  placeholder="Lugar de residencia"
                  name="place_residence"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="@" />
                <Input
                  type="email"
                  placeholder="Correo Electrónico Institucional"
                  name="institutional_email"
                />
              </InputGroup>
            </GridItem>
            <GridItem fontSize={"sm"}>
              <InputGroup>
                <InputLeftAddon children="@" />
                <Input
                  type="email"
                  placeholder="Correo Electrónico Personal"
                  name="personal_email"
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
          <Box bg="primary.200" color="white" borderRadius="md" w={300} h={300}>
            <Heading as="h3" mt={1}>
              Foto Carnet
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          order={{ base: 1, md: 1 }}
          textAlign={"center"}
          margin={"auto"}
        >
          <Button type="submit" mt={4} bg="primary.200" color={"white"}>
            Guardar
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}

export default ProfessionalForm;
