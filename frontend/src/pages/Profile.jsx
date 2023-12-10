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
  CloseButton,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useRef, useState, Fragment } from "react";
import toast from "react-hot-toast";

import PasswordInput from "../components/PasswordInput";

import { FiEdit2 } from "react-icons/fi";
import {
  getOneUser,
  updateDataUser,
  verifyTokenRequest,
} from "../api/userRequest";
import { urlPhotos } from "../api/axios";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const initialFormProfile = {
    email: "",
    ci: "",
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    currentPassword: "",
    newPassword: "",
  };

  const { user, loadUserProfile } = useAuth();

  const [form, setForm] = useState(initialFormProfile);
  const [photo, setPhoto] = useState(null);
  const hiddenFileInput = useRef();
  const [wantToEdit, setWantToEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const photoUrl = photo
    ? URL.createObjectURL(photo)
    : user.userId
    ? `${urlPhotos}/${user.photo}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf14RWxf6GFrK2A8CyOoXn4SEpZSBxuWOCs_T-A5peKF-fIpF&s";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const updateUser = await updateDataUser(form.userId, { ...form, photo });
      loadUserProfile();
      toast(
        (t) => (
          <>
            Datos actualizados correctamente
            <CloseButton onClick={() => toast.dismiss(t.id)} />
          </>
        ),
        {
          position: "top-center",
          duration: 5000,
          icon: "✅",
        }
      );
    } catch (error) {
      console.log(error);
    }

    // console.log(updateUser);
  };

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
      setForm(user);
    }, 1500);
  };

  const handlePhoto = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <>
      {isLoading ? (
        <Center height="500px" bg="bg.100" h="100vh">
          <Box m={10} boxShadow="md" p={7} borderRadius="xl">
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
        
          <Center bg="bg.100" h="100vh" >
            <Box
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
                    src={`${urlPhotos}/${user.photo}`}
                    alt="Dan Abramov"
                  />
                </div>
              </Center>

              <Heading as="h4" size="md" mt={10} mb={8} color="text.300">
                Información del perfil
              </Heading>

              <Stack direction="row" spacing={3} mb={4}>
                <Text as="b" color="text.300">
                  C.I:
                </Text>
                <Text color="text.300">{user.ci}</Text>
              </Stack>

              <Stack direction="row" spacing={3} mb={4}>
                <Text as="b" color="text.300">
                  Nombres completos:
                </Text>
                <Text color="text.300">
                  {user.firstName} {user.secondName} {user.firstLastName}{" "}
                  {user.secondLastName}
                </Text>
              </Stack>
              <Stack direction="row" spacing={3} mb={4}>
                <Text as="b" color="text.300">
                  {user.roles.length > 1 ? "Roles:" : "Rol:"}
                </Text>

                {user.roles.map((rol, index) => (
                  <Fragment key={index}>
                    <Text color="text.300">{rol.rol}</Text>
                    {index < user.roles.length - 1 && (
                      <Text color="text.300">/</Text>
                    )}
                  </Fragment>
                ))}
              </Stack>
              {/* <Stack direction="row" spacing={3} mb={4}>
              <Text as="b" color="text.300">
                Email:
              </Text>
              <Text color="text.300"></Text>
            </Stack> */}
            </Box>
          </Center>
      ) : (
        <Center bg="bg.100" h="100vh">
          <form onSubmit={handleSubmit}>
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
                    src={photoUrl}
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
                      <FormLabel>Segundo Nombre</FormLabel>
                      <Input
                        type="text"
                        name="secondName"
                        value={form.secondName}
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
                <GridItem>
                  <Stack spacing="5">
                    {/* <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="text"
                      name="email"
                      vale={form.email}
                      onChange={handleChange}
                    />
                  </FormControl> */}
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
                      <FormLabel>Primer Apellido</FormLabel>
                      <Input
                        type="text"
                        name="firstLastName"
                        value={form.firstLastName}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Stack>
                </GridItem>
              </Grid>
              <Stack spacing={4} direction="row" align="center" mt="20px">
                <Button
                  type="submit"
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
          </form>
        </Center>
      )}
    </>
  );
}

export default Profile;
