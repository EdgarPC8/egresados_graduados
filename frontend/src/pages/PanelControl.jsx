import Tabl from "../components/Table";
import DataTable from "../components/DataTables";
import { useEffect, useState } from "react";
import { addUser, getUsers, removeUser } from "../api/userRequest";
import { getAllProfessionals } from "../api/professionalRequest";
import { urlPhotos } from "../api/axios";
import { useRef } from "react";
import {
    Button,
    useDisclosure,
    AlertDialog,
    Avatar,
    Grid,
    GridItem,
    Stack,
    useToast,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Box,
    Heading,
    Spacer,
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import { FiUserPlus } from "react-icons/fi";
import { EmailIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { isValidCI } from '../helpers/isValidCI.js';

function Resumes() {
    const navigate = useNavigate();
    const toast = useToast();
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState({
        totalCurriculums: 0,
        validCIs: 0,
        invalidCIs: 0,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [currentUser, setCurrentUser] = useState({});
    const cancelRef = useRef();

    const deleteUser = () => {
        toast.promise(removeUser(currentUser.userId), {
            loading: {
                title: "Eliminando...",
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

        setUsers(users.filter((user) => user.userId !== currentUser.userId));
    };

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
                `${row.firstName} ${row.secondName} ${row.firstLastName} ${row.secondLastName}`,
        },
           {
            header: "Celular",
            accessorKey: "cellPhone",
        },
        {
            header: "Valid CI",
            accessorKey: "validCI",
            cell: (props) => (props.row.original.validCI ? "Válido" : "Inválido"),
        },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userRequest = await getAllProfessionals();
                const usersWithValidation = userRequest.data.map(user => ({
                    ...user,
                    validCI: isValidCI(user.ci),
                }));

                setUsers(usersWithValidation);

                const totalCurriculums = usersWithValidation.length;
                const validCIs = usersWithValidation.filter(user => user.validCI).length;
                const invalidCIs = totalCurriculums - validCIs;

                setStats([{ totalCurriculums, validCIs, invalidCIs }]);
                console.log(usersWithValidation);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, [user]);

    return (
        <>
            <Box p={10}>
                <Tabl data={stats} columns={[
                    {
                        header: "Total de Curriculos",
                        accessorKey: "totalCurriculums",
                    },
                    {
                        header: "Cedulas validas",
                        accessorKey: "validCIs",
                    },
                    {
                        header: "Cedulas Invalidas",
                        accessorKey: "invalidCIs",
                    },
                ]} />


                <Flex alignItems="center" gap="2">
                    <Box p="2">
                        <Heading size="md">Currículos</Heading>
                    </Box>
                    <Spacer />
                </Flex>
                <Tabl data={users} columns={columns} />




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
                                ¿Estás seguro de eliminar ha {currentUser.firstName}
                                {currentUser.firstLastName}?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    colorScheme="red"
                                    onClick={() => {
                                        deleteUser();
                                        onClose();
                                    }}
                                    ml={3}
                                >
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

export default Resumes;
