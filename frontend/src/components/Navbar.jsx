import React from "react";
import {
  Box,
  Button,
  HStack,
  Stack,
  Menu,
  MenuButton,
  Avatar,
  Text,
  MenuList,
  MenuItem,
  useDisclosure,
  MenuDivider,
  IconButton,
  VStack,
  Image,
  Flex,
  Center,
  AvatarBadge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";

import { Link } from "react-router-dom";

import NavLink from "./NavLink";

import {
  FiHome,
  FiFile,
  FiAward,
  FiFileText,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext";
import { urlPhotos } from "../api/axios";

const Navbar = () => {
  const btnRef = useRef();
  const { isAuthenticated, logout, user } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const LinksToNoAuth = [
    {
      name: "Inicio",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "Curriculos",
      path: "/curriculos",
      icon: <FiHome />,
    },
  ];

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
    {
      name: "Usuarios",
      path: "/usuarios",
      icon: <FiUser />,
    },
  ];

  return (
    <>
      <Box p={2}>
        <Flex alignItems="center" justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <IconButton
              size={"md"}
              icon={<HamburgerIcon />}
              aria-label={"Open Menu"}
              ref={btnRef}
              onClick={onOpen}
            />

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Image
                borderRadius="full"
                boxSize="50px"
                src="http://www.marianosamaniego.edu.ec/eva/pluginfile.php/1/core_admin/logo/0x200/1679244973/logoistms.jpeg"
                alt="Dan Abramov"
              />
              {!isAuthenticated &&
                LinksToNoAuth.map((link) => (
                  <Link to={link.path} key={link.name}>
                    <NavLink>{link.name}</NavLink>
                  </Link>
                ))}
            </HStack>
          </HStack>

          {isAuthenticated ? (
            <Flex>
              <Center>
                <Link to="/perfil">
                  <Avatar
                    size={"sm"}
                    mr="10px"
                    src={`${urlPhotos}/${user.photo}`}
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </Link>
              </Center>
            </Flex>
          ) : isOpen ? (
            ""
          ) : (
            <Link to="/login">
              <Button>Iniciar Sesión</Button>
            </Link>
          )}
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            {isAuthenticated ? (
              <Stack align="start" spacing={4} flex="1" mr={4}>
                {Links.map((link) => (
                  <Link to={link.path} key={link.name} onClick={onClose}>
                    <NavLink icon={link.icon}>{link.name}</NavLink>
                  </Link>
                ))}
              </Stack>
            ) : (
              <Stack align="start" spacing={4} flex="1" mr={4}>
                {LinksToNoAuth.map((link) => (
                  <Link to={link.path} key={link.name} onClick={onClose}>
                    <NavLink icon={link.icon}>{link.name}</NavLink>
                  </Link>
                ))}
              </Stack>
            )}
          </DrawerBody>

          <DrawerFooter>
            {isAuthenticated ? (
              <Link to="/login">
                <IconButton icon={<FiLogOut />} onClick={logout} />
              </Link>
            ) : (
              <Link to="/login">
                <Button>Iniciar Sesión</Button>
              </Link>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
