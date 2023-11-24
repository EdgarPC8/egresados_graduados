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

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
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
  const Links = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Curriculos",
      path: "/curriculos",
    },
    {
      name: "Cv",
      path: "/cv",
    },
  ];

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
      <Box p={2} bg="bg.100">
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
          {!isAuthenticated ? (
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
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuDivider />
                <Link to="/login" onClick={logout}>
                  <MenuItem>Salir</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          )}
        </Flex>
        {isOpen ? (
          <Box pb={4} pt={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
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
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
