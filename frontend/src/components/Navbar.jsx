import React from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  useDisclosure,
  MenuDivider,
  IconButton,
  Stack,
  Image,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext";
import { urlPhotos } from "../api/axios";

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: "bg.200",
      }}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { user } = useAuth();

  const LinksToNoAuth = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Curriculos",
      path: "/curriculos",
    },
  ];

  const { isAuthenticated, logout } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!isAuthenticated ? (
        <Box p={2}>
          <Flex alignItems="center" justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
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
                {!isAuthenticated
                  ? LinksToNoAuth.map((link) => (
                      <Link to={link.path} key={link.name}>
                        <NavLink>{link.name}</NavLink>
                      </Link>
                    ))
                  : Links.map((link) => (
                      <Link to={link.path} key={link.name}>
                        <NavLink>{link.name}</NavLink>
                      </Link>
                    ))}
              </HStack>
            </HStack>

            <Link to="/login">
              <Button
                bg="primary.200"
                color="white"
                _hover={{
                  bg: "primary.100",
                }}
              >
                Iniciar Sesión
              </Button>
            </Link>
          </Flex>
          {isOpen ? (
            <Box pb={4} pt={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {LinksToNoAuth.map((link) => (
                  <Link to={link.path} key={link.name}>
                    <NavLink>{link.name}</NavLink>
                  </Link>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
