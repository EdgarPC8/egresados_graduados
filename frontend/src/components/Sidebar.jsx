import {
  Box,
  VStack,
  Text,
  IconButton,
  Menu,
  MenuItem,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { FiHome, FiFile, FiAward, FiFileText, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useAuth } from "../context/AuthContext";
import { urlPhotos } from "../api/axios";
import Navbar from "./Navbar";

function Sidebar() {
  const { user, logout, isAuthenticated } = useAuth();
  const Links = [
    {
      name: "Inicio",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "Curriculos",
      path: "/curriculos",
      icon: <FiFile />,
    },
    {
      name: "Hoja de Vida",
      path: "/cv",
      icon: <FiAward />,
    },
    {
      name: "Encuesta",
      path: "/quiz",
      icon: <FiFileText />,
    },
  ];

  return !isAuthenticated ? (
    ""
  ) : (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      top="0"
      h="100vh"
      w="200px"
      bg="gray.800"
      color="white"
      p={4}
      display="flex"
      flexDirection="column"
    >
      <Link to="/perfil">
        <Avatar mb={5} size={"sm"} src={`${urlPhotos}/${user.photo}`} />
      </Link>

      {/* Contenido del sidebar */}
      <VStack align="start" spacing={4} flex="1" mr={4}>
        {Links.map((link) => (
          <Link to={link.path} key={link.name}>
            <NavLink icon={link.icon}>{link.name}</NavLink>
          </Link>
        ))}
      </VStack>
      <Link to="/login">
        <IconButton
          colorScheme="gray.800"
          aria-label="Cerrar Sesión"
          icon={<FiLogOut />}
          onClick={logout}
          mt="auto" // Alinea el botón en la parte inferior
        />
      </Link>
    </Box>
  );
}

export default Sidebar;
