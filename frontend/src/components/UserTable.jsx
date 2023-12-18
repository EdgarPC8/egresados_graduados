import Tabl from "./Table";
import { useEffect, useState } from "react";
import { addUser, getUsers } from "../api/userRequest";
import { urlPhotos } from "../api/axios";
import { Avatar, Grid, GridItem, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Heading,
  Spacer,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  InputGroup,
  Center,
  Image,
  AlertDialogCloseButton,
  IconButton,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";

import { FiUser, FiUserPlus, FiHash, FiEdit2 } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { EmailIcon } from "@chakra-ui/icons";
import PasswordInput from "./PasswordInput";
function UserTable() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [photo, setPhoto] = useState(null);
  const hiddenFileInput = useRef();
  const [form, setForm] = useState({});

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handlePhoto = (event) => {
    hiddenFileInput.current.click();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const [userToDelete, setUserToDelete] = useState({});
  const cancelRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("photo", photo);
    const data = Object.fromEntries(formData);
    try {
      const newUser = await addUser(data);
    } catch (error) {}
  };

  const photoUrl = photo ? URL.createObjectURL(photo) : "./noPhoto.jpg";

  const columns = [
    {
      header: "Id",
      accessorKey: "userId",
      cell: (props) => props.row.index + 1,
    },
    {
      header: "Cédula",
      accessorKey: "ci",
    },

    {
      header: "Nombres Completos",
      accessorKey: "fullname",
      accessorFn: (row) =>
        `
        ${row.firstName} ${row.secondName} ${row.firstLastName} ${row.secondLastName}`,
    },

    {
      header: "Foto",
      accessorKey: "photo",
      cell: (props) => (
        <Avatar
          name={props.row.original.firstName}
          src={`${urlPhotos}/${props.row.original.photo}`}
        />
      ),
    },
    {
      header: "Acción",

      cell: (props) => (
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="yellow" onClick={() => console.log("hola")}>
            Editar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              setUserToDelete(props.row.original);
              onOpen();
            }}
          >
            Eliminar
          </Button>
        </Stack>
      ),
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userRequest = await getUsers();
        const data = await userRequest.data.filter(
          (us) => us.userId !== user.userId
        );
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <>
      <Box p={10}>
        <Flex alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Usuarios</Heading>
          </Box>
          <Spacer />
          <Button
            leftIcon={<FiUserPlus />}
            bg="ceruleanBlue.500"
            onClick={onOpenModal}
            color="white"
            _hover={{
              bg: "ceruleanBlue.600",
            }}
          >
            Añadir usuario
          </Button>
        </Flex>
        <Tabl data={users} columns={columns} />

        <Modal
          isOpen={isOpenModal}
          onClose={onCloseModal}
          size="xl"
          closeOnOverlayClick={false}
        >
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
          <form onSubmit={handleSubmit}>
            <ModalContent>
              <ModalHeader color="ceruleanBlue.900">Añadir usuario</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Center pb={6}>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
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
                    <Input
                      type="file"
                      ref={hiddenFileInput}
                      onChange={handleFileChange}
                      hidden
                    />
                  </div>
                </Center>
                <Stack spacing={4}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FiHash} color="gray.300" />
                          </InputLeftElement>

                          <Input type="text" placeholder="Cédula" name="ci" />
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FiUser} color="gray.300" />
                          </InputLeftElement>

                          <Input
                            type="text"
                            placeholder="Usuario"
                            name="username"
                          />
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FiUser} color="gray.300" />
                          </InputLeftElement>

                          <Input
                            type="text"
                            placeholder="Primer Nombre"
                            name="firstName"
                          />
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FiUser} color="gray.300" />
                          </InputLeftElement>

                          <Input
                            type="text"
                            placeholder="Segundo Nombre"
                            name="secondName"
                          />
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FiUser} color="gray.300" />
                          </InputLeftElement>

                          <Input
                            type="text"
                            placeholder="Primer Apellido"
                            name="firstLastName"
                          />
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FiUser} color="gray.300" />
                          </InputLeftElement>

                          <Input
                            type="text"
                            placeholder="Segundo Apellido"
                            name="secondLastName"
                          />
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem>
                      <FormControl>
                        <PasswordInput
                          placeholder="contraseña"
                          name="password"
                        />
                      </FormControl>
                    </GridItem>
                  </Grid>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button
                  type="submit"
                  bg="ceruleanBlue.500"
                  color="white"
                  _hover={{
                    bg: "ceruleanBlue.600",
                  }}
                  mr={3}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay bg="blackAlpha.300" backdropFilter="blur(10px)">
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Eliminar Usuario
              </AlertDialogHeader>

              <AlertDialogBody>
                ¿Estás seguro de eliminar ha {userToDelete.firstName}{" "}
                {userToDelete.firstLastName}?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </>
  );
}

export default UserTable;
