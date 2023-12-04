import {
  Box,
  Text,
  Heading,
  Image,
  Center,
  Stack,
  Button,
  Input,
  IconButton,
  useDisclosure,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Spinner,
  FormHelperText,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import PasswordInput from "../components/PasswordInput";

import { FiEdit2 } from "react-icons/fi";

function Profile() {
  const initialFormProfile = {
    email: "",
    ci: "",
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    currentPassword: "",
    newPassword: ""
  };

  const [form, setForm] = useState(initialFormProfile);
  const [file, setFile] = useState(null);
  const hiddenFileInput = useRef();
  const [wantToEdit, setWantToEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //   const { isOpen, onToggle } = useDisclosure();

  const cancelEdit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setWantToEdit(false);
      setIsLoading(false);
    }, 1500);
  };

  const iWantEdit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setWantToEdit(true);
      setIsLoading(false);
    }, 1500);
  };

  const handlePhoto = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log("hola");
    // Aquí puedes manejar el archivo, por ejemplo, cargarlo a un servidor
  };

  return (
    <>
      {isLoading ? (
        <Center height="500px">
          <Box m={10} boxShadow="md" p={7} borderRadius="xl" bg="white">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </Center>
      ) : !wantToEdit ? (
        <Center>
          <Box
            m={10}
            boxShadow="md"
            p={7}
            borderRadius="xl"
            bg="white"
            style={{ position: "relative", display: "inline-block" }}
          >
            <IconButton
              bg="white"
              style={{ position: "absolute", top: "0", right: "0" }}
              isRound={true}
              onClick={iWantEdit}
              icon={<FiEdit2 />}
            />

            <Center>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="full"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </div>
            </Center>

            <Heading as="h4" size="md" mt={10} mb={9} color="text.300">
              Información del perfil
            </Heading>

            <Stack direction="row" spacing={3} mb={4}>
              <Text as="b" color="text.300">
                Nombres completos:
              </Text>
              <Text color="text.300">Patricicio Alexander Brice. S</Text>
            </Stack>
            <Stack direction="row" spacing={3} mb={4}>
              <Text as="b" color="text.300">
                Rol:
              </Text>
              <Text color="text.300">Admin</Text>
            </Stack>
            <Stack direction="row" spacing={3} mb={4}>
              <Text as="b" color="text.300">
                Email:
              </Text>
              <Text color="text.300">alecthompson@mail.com</Text>
            </Stack>
          </Box>
        </Center>
      ) : (
        <Center>
          <Box m={10} boxShadow="md" p={7} borderRadius="xl" bg="white">
            <Heading as="h4" size="md" mb={9} color="text.300">
              Editando información
            </Heading>
            <Center>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="full"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <IconButton
                  bg="white"
                  style={{ position: "absolute", top: "0", right: "0" }}
                  isRound={true}
                  onClick={handlePhoto}
                  icon={<FiEdit2 />}
                />
              </div>
            </Center>
            <Input
              type="file"
              ref={hiddenFileInput}
              onChange={handleFileChange}
              hidden
            />
            {/* <Stack spacing={5} mt="20px"> */}
            <Grid templateColumns="repeat(2, 1fr)" mt="20px" gap={6}>
              <GridItem>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel>Cédula</FormLabel>
                    <Input
                      type="text"
                      name="ci"
                      value={form.ci}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Primer Nombre</FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Segundo Nombre</FormLabel>
                    <Input
                      type="text"
                      name="secondName"
                      value={form.secondName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Stack>
              </GridItem>
              <GridItem>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="text" name="email" vale={form.email} onChange={handleChange}/>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Primer Apellido</FormLabel>
                    <Input
                      type="text"
                      name="firstLastName"
                      value={form.firstLastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Segundo Apellido</FormLabel>
                    <Input
                      type="text"
                      name="secondLastName"
                      value={form.secondLastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Stack>
              </GridItem>
            </Grid>
            <Stack spacing={4} direction="row" align="center" mt="20px">
              <Button
                bg="primary.200"
                color="white"
                _hover={{
                  bg: "primary.100",
                }}
              >
                Guardar
              </Button>
              <Button onClick={cancelEdit}>Cancelar</Button>
            </Stack>
          </Box>
        </Center>
      )}
    </>
  );
}

export default Profile;
