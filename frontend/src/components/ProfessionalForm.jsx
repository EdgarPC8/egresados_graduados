import {
  Heading,
  Input,
  Grid,
  GridItem,
  InputLeftAddon,
  InputGroup,
  Select,
  Button,
  useToast,
  Center,
  Avatar,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import {
  editProfessional,
  getProfessionalsById,
} from "../api/professionalRequest.js";
import { verifyTokenRequest } from "../api/userRequest.js";
import { useAuth } from "../context/AuthContext.jsx";
import { urlPhotos } from "../api/axios.js";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function ProfessionalForm() {
  const { user } = useAuth();
  const form = useRef(null);
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(0);

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
    aboutMe: "",
  };
  const [formProfessional, setFormProfessional] = useState(
    initialFormProfessional,
  );

  async function fetchData() {
    try {
      const res = await verifyTokenRequest();
      const idUser = res.data.userId;
      const { data } = await getProfessionalsById(idUser);
      if (!data) {
        return;
      }
      setFormProfessional(data);
      setIsEditing(true);
      setId(data.id);
    } catch (error) {
      console.error("Error al obtener datos académicos:", error);
    }
  }

  const clear = () => {
    setIsEditing(false);
    setId(false);
    setFormProfessional(initialFormProfessional);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isEditing) {
      toast.promise(editProfessional(id, formProfessional), {
        loading: {
          title: "Editando...",
          position: "top-right",
        },
        success: (d) => ({
          title: "Información profesional",
          description: d.data.message,
          isClosable: true,
        }),
        error: (e) => ({
          title: "Error",
          description: e.response.data.message,
          isClosable: true,
        }),
      });

      fetchData();
      clear();

      return;
    }

    // toast.promise(editProfessional(id, formProfessional), {
    //   loading: {
    //     title: "Añadiendo...",
    //     position: "top-right",
    //   },
    //   success: (d) => ({
    //     title: "Información profesional",
    //     description: d.data.message,
    //     isClosable: true,
    //   }),
    //   error: (e) => ({
    //     title: "Error",
    //     description: e.response.data.message,
    //     isClosable: true,
    //   }),
    // });

    clear();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProfessional({ ...formProfessional, [name]: value });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <Grid templateColumns={{ base: "1fr", md: "9fr 1fr" }} gap={4} mt={2}>
        <GridItem order={{ base: 2, md: 1 }}>
          <Heading as="h3" size="md" textAlign="left">
            DATOS PERSONALES
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={2} mt={2}>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Cedula" />
                <Input
                  value={formProfessional.ci ?? ""}
                  onChange={handleChange}
                  type="number"
                  placeholder="Cedula"
                  name="ci"
                  isRequired
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Primer Apellido" />
                <Input
                  type="text"
                  placeholder="Primer Apellido"
                  name="firstLastName"
                  value={formProfessional.firstLastName ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Segundo Apellido" />
                <Input
                  type="text"
                  placeholder="Segundo Apellido"
                  name="secondLastName"
                  value={formProfessional.secondLastName ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Primer Nombre" />
                <Input
                  type="text"
                  placeholder="Primer Nombre"
                  name="firstName"
                  value={formProfessional.firstName ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Segundo Nombre" />
                <Input
                  type="text"
                  placeholder="Segundo Nombre"
                  name="secondName"
                  value={formProfessional.secondName ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Genero" />
                <Select
                  placeholder="Seleccione una opción"
                  name="gender"
                  value={formProfessional.gender ?? ""}
                  onChange={handleChange}
                >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </Select>
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Tipo de Sangre" />
                <Input
                  type="text"
                  placeholder="Tipo de Sangre"
                  name="bloodType"
                  value={formProfessional.bloodType ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Fecha de nacimiento" />
                <Input
                  placeholder="Fecha"
                  size="md"
                  type="date"
                  name="birthDate"
                  value={formProfessional.birthDate ?? ""}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Estado Civil" />
                <Select
                  placeholder="Seleccione una opción"
                  name="civilStatus"
                  value={formProfessional.civilStatus ?? ""}
                  onChange={handleChange}
                >
                  <option value="Soltero">Soltero</option>
                  <option value="Viudo">Viudo</option>
                  <option value="Casado">Casado</option>
                  <option value="Divorciado">Divorciado</option>
                </Select>
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Nacionalidad" />
                <Input
                  type="text"
                  placeholder="Nacionalidad"
                  name="nationality"
                  value={formProfessional.nationality ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Teléfono de domicilio" />
                <Input
                  type="tel"
                  placeholder="Teléfono de domicilio"
                  name="homePhone"
                  value={formProfessional.homePhone ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Teléfono de celular" />
                <Input
                  type="tel"
                  placeholder="Teléfono de celular"
                  name="cellPhone"
                  value={formProfessional.cellPhone ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Lugar de Nacimiento" />
                <Input
                  type="text"
                  placeholder="Lugar de Nacimiento"
                  name="placeBirth"
                  value={formProfessional.placeBirth ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>

            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Dirección de domicilio" />
                <Input
                  type="text"
                  placeholder="Dirección de domicilio"
                  name="direction"
                  value={formProfessional.direction ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="Lugar de residencia" />
                <Input
                  type="text"
                  placeholder="Lugar de residencia"
                  name="placeResidence"
                  value={formProfessional.placeResidence ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="@" />
                <Input
                  type="email"
                  placeholder="Correo Electrónico Institucional"
                  name="institutionalEmail"
                  value={formProfessional.institutionalEmail ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon children="@" />
                <Input
                  type="email"
                  placeholder="Correo Electrónico Personal"
                  name="personalEmail"
                  value={formProfessional.personalEmail ?? ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <FormLabel>Acerca de mi</FormLabel>
              <Textarea
                placeholder="Coloque una descipción acerca de ti"
                name="aboutMe"
                value={formProfessional.aboutMe ?? ""}
                onChange={handleChange}
              />
            </GridItem>
          </Grid>
          {/* <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
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
          </Grid> */}
        </GridItem>
        <GridItem
          order={{ base: 1, md: 1 }}
          textAlign={"center"}
          margin={"auto"}
        >
          <Center w={200} h={200} mb={5}>
            <Avatar
              src={`${urlPhotos}/${user.photo}`}
              borderRadius="full"
              w={200}
              h={200}
            ></Avatar>
          </Center>

          <Link to="/cvPdf" target="_blank">
            <Button leftIcon={<FaEye />}>PDF</Button>
          </Link>
        </GridItem>
        <GridItem
          colSpan={2}
          order={{ base: 1, md: 1 }}
          textAlign={"center"}
          margin={"auto"}
        >
          <Button type="submit" mt={4} bg="ceruleanBlue.500" color={"white"}>
            {isEditing ? "Editar" : "Guardar"}
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}

export default ProfessionalForm;
