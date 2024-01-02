import {
  Center,
  Image,
  IconButton,
  Icon,
  Stack,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Box,
  Heading,
  Button,
  Flex,
  Checkbox,
  Spacer,
  useToast,
  FormLabel,
} from "@chakra-ui/react";

import { FiUser, FiUserPlus, FiHash, FiTag, FiEdit2 } from "react-icons/fi";

import PasswordInput from "./PasswordInput";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneUser, addUser, getRoles } from "../api/userRequest";
import { urlPhotos } from "../api/axios";

function FormAddUser() {
  const toast = useToast();
  const { userId } = useParams();
  let initialForm = {
    ci: "",
    username: "",
    firstName: "",
    secondName: "",
    password: "",
    firstLastName: "",
    secondLastName: "",
    rol: [],
  };

  const [photo, setPhoto] = useState(null);
  const hiddenFileInput = useRef();

  const [form, setForm] = useState(initialForm);
  const [roles, setRoles] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // formData.append("photo", photo);
    // console.log(form)
    // const data = Object.fromEntries(formData);

    toast.promise(addUser(form), {
      loading: {
        title: "Añadiendo...",
        position: "top-right",
      },
      success: (d) => ({
        title: "Usuario",
        description: d.data.message,
        isClosable: true,
      }),
      error: (e) => ({
        title: "Error",
        description: e.response.data.message,
        isClosable: true,
      }),
    });
  };

  const handlePhoto = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setPhoto(files[0]);
    }
  };

  const photoUrl = photo
    ? URL.createObjectURL(photo)
    : userId
    ? `${urlPhotos}/${form.photo}`
    : "/noPhoto.jpg";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleChangeCheck = ({ rolId, isChecked }) => {
    setForm((prevForm) => {
      const exist = prevForm.rol.includes(rolId);
      const newRol =
        !exist && isChecked
          ? [...prevForm.rol, rolId]
          : prevForm.rol.filter((rol) => rol !== rolId);
      return { ...prevForm, rol: newRol };
    });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const { data } = await getOneUser(userId);
          // setPhoto(data.photo)
          // console.log(data)

          setForm(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    const loadRoles = async () => {
      const { data } = await getRoles();
      setRoles(data);
    };
    loadRoles();

    fetchUser();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Box bg="gray.50" minH="100vh" p={{ base: 4, md: 10 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          p={{ base: 10, md: 10 }}
          bg="white"
          rounded="lg"
          shadow="lg"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "stretch" }}
            justify={{ base: "flex-start", md: "center" }}
            mb={{ base: 4, md: 0 }}
            flex={1}
          >
            <Center>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Image
                  boxSize={{ base: "80px", md: "100px" }}
                  objectFit="cover"
                  borderRadius="full"
                  src={photoUrl}
                  alt="User"
                />

                <IconButton
                  bg="white"
                  style={{ position: "absolute", top: "0", right: "0" }}
                  isRound={true}
                  onClick={handlePhoto}
                  icon={<FiEdit2 />}
                />
                <Input
                  type="file"
                  ref={hiddenFileInput}
                  hidden
                  onChange={handleFileChange}
                />
              </div>
            </Center>
          </Flex>
          {/* <Spacer/> */}

          <Flex
            direction="column"
            align="stretch"
            justify={{ base: "center", md: "flex-end" }}
            flex={1}
          >
            <Grid templateColumns="repeat(1, 1fr)" gap={5}>
              <GridItem>
                <Stack spacing={4}>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiHash} color="gray.400" />
                      </InputLeftElement>

                      <Input
                        type="text"
                        placeholder="Cédula"
                        name="ci"
                        onChange={handleChange}
                        value={form.ci}
                        variant="flushed"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiTag} color="gray.400" />
                      </InputLeftElement>

                      <Input
                        type="text"
                        placeholder="Usuario"
                        name="username"
                        onChange={handleChange}
                        value={form.username}
                        variant="flushed"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiTag} color="gray.400" />
                      </InputLeftElement>

                      <Input
                        type="text"
                        placeholder="Primer Nombre"
                        name="firstName"
                        onChange={handleChange}
                        value={form.firstName}
                        variant="flushed"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiUser} color="gray.400" />
                      </InputLeftElement>

                      <Input
                        type="text"
                        placeholder="Segundo Nombre"
                        name="secondName"
                        variant="flushed"
                        onChange={handleChange}
                        value={form.secondName}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiUser} color="gray.400" />
                      </InputLeftElement>

                      <Input
                        type="text"
                        placeholder="Primer Apellido"
                        name="firstLastName"
                        onChange={handleChange}
                        value={form.firstLastName}
                        variant="flushed"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiUser} color="gray.400" />
                      </InputLeftElement>

                      <Input
                        type="text"
                        placeholder="Segundo Apellido"
                        name="secondLastName"
                        onChange={handleChange}
                        value={form.secondLastName}
                        variant="flushed"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <PasswordInput
                      name="password"
                      onChange={handleChange}
                      value={form.password}
                      variant="flushed"
                      placeholder="contraseña"
                    />
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel color="gray.600">Roles</FormLabel>
                    <Stack spacing={5} direction="row">
                      {roles.map((rol) => (
                        <Checkbox
                          key={rol.id}
                          value={rol.id}
                          onChange={(e) =>
                            handleChangeCheck({
                              rolId: rol.id,
                              isChecked: e.target.checked,
                            })
                          }
                        >
                          {rol.rol}
                        </Checkbox>
                      ))}
                    </Stack>
                  </FormControl>

                  <Flex
                    direction={{ base: "column", md: "row" }}
                    alignItems={{ base: "stretch", md: "center" }}
                    justifyContent={{ base: "flex-start", md: "flex-end" }}
                  >
                    <Button
                      type="submit"
                      bg="ceruleanBlue.500"
                      color="white"
                      _hover={{
                        bg: "ceruleanBlue.600",
                      }}
                      isDisabled={
                        !(
                          form.ci.trim() &&
                          form.firstLastName.trim() &&
                          form.firstName.trim() &&
                          form.secondName.trim() &&
                          form.secondLastName.trim() &&
                          form.rol.length
                        )
                      }
                    >
                      Guardar
                    </Button>
                  </Flex>
                </Stack>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Box>
    </form>
  );
}

export default FormAddUser;
