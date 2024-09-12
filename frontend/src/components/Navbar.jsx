import React, { useRef } from "react";
import {
  Box,
  Button,
  HStack,
  Stack,
  Avatar,
  useDisclosure,
  IconButton,
  Image,
  Flex,
  Center,
  AvatarBadge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiFile,
  FiAward,
  FiUser,
  FiLogOut,
  FiTarget,
} from "react-icons/fi";
import { FaChartPie } from "react-icons/fa";
import { TbBrandMatrix } from "react-icons/tb";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext";
import { urlPhotos } from "../api/axios";
import { FaYoutube } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { GiBookPile } from "react-icons/gi";
import NavLink from "./NavLink";
// Constantes para las vistas sin autenticación
const LinksToNoAuth = [
  {
    name: "Inicio",
    path: "/",
    icon: <FiHome />,
  },
];

// Constantes para las vistas con autenticación y permisos
const permisos = {
  Programador: [
    { name: "Inicio", link: "/", icon: <FiHome /> },
    { name: "Hoja de Vida", link: "/cv", icon: <FiAward /> },
    {
      name: "Panel de Control",
      icon: <FiTarget />,
      menu: {
        items: [
          { name: "Panel", link: "/panel", icon: <FiTarget /> },
          { name: "Actividad", link: "/actividad", icon: <FiTarget /> },
        ],
      },
    },
    {
      name: "Entidades",
      icon: <FiUser />,
      menu: {
        items: [
          { name: "Usuarios", link: "/usuarios", icon: <FiUser /> },
          { name: "Carreras", link: "/carreras", icon: <GiBookPile /> },
          { name: "Periodos", link: "/periodos", icon: <CgCalendarDates /> },
          { name: "Curriculos", link: "/curriculos", icon: <FiFile /> },
          { name: "Graficos", link: "/charts", icon: <FaChartPie /> },
        ],
      },
    },
    {
      name: "Encuestas",
      icon: <PiFiles />,
      menu: {
        items: [
          { name: "Administrar", link: "/encuestas", icon: <PiFiles /> },
          { name: "Sus encuesta", link: "/sus-encuestas", icon: <PiFiles /> },
        ],
      },
    },
    { name: "Tutoriales", link: "/tutoriales", icon: <FaYoutube /> },
    { name: "Matrices", link: "/matriz", icon: <TbBrandMatrix /> },
  ],
  Administrador: [
    {
      name: "Inicio",
      link: "/",
      icon: <FiHome />,
    },
    { name: "Hoja de Vida", link: "/cv", icon: <FiAward /> },
    {
      name: "Entidades",
      icon: <FiHome />,
      menu: {
        items: [
          // { name: "Usuarios", link: "/usuarios", icon: <FiUser /> },
          { name: "Carreras", link: "/carreras", icon: <GiBookPile /> },
          { name: "Periodos", link: "/periodos", icon: <CgCalendarDates /> },
          { name: "Curriculos", link: "/curriculos", icon: <FiFile /> },
          { name: "Graficos", link: "/charts", icon: <FaChartPie /> },
        ],
      },
    },
    {
      name: "Encuestas",
      icon: <PiFiles />,
      menu: {
        items: [
          { name: "Administrar", link: "/encuestas", icon: <PiFiles /> },
          { name: "Sus encuestas", link: "/sus-encuestas", icon: <PiFiles /> },
        ],
      },
    },
    { name: "Tutoriales", link: "/tutoriales", icon: <FaYoutube /> },
    { name: "Matrices", link: "/matriz", icon: <TbBrandMatrix /> },
  ],
  Profesional: [
    {
      name: "Inicio",
      link: "/",
      icon: <FiHome />,
    },
    { name: "Hoja de Vida", link: "/cv", icon: <FiAward /> },
    { name: "Encuesta", link: "/sus-encuestas", icon: <PiFiles /> },
  ],
  Estudiante: [
    {
      name: "Inicio",
      link: "/",
      icon: <FiHome />,
    },
    {
      name: "Encuestas",
      icon: <PiFiles />,
      menu: {
        items: [
          { name: "Sus encuestas", link: "/sus-encuestas", icon: <PiFiles /> },
        ],
      },
    },
  ],
};

const Navbar = () => {
  const btnRef = useRef();
  const { isAuthenticated, logout, user, isLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Páginas que se mostrarán según el rol del usuario
  const pagesToShow = permisos[user?.loginRol] || [];

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
                alt="Logo ISTMS"
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
                <Badge colorScheme="purple" mr={5}>
                  {user.loginRol}
                </Badge>
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
          ) : (
            !isOpen && (
              <Flex alignItems="center">
                <HStack spacing={4}>
                  <Link to="/register">
                    <Button>Registrarse</Button>
                  </Link>
                  <Link to="/login">
                    <Button>Iniciar Sesión</Button>
                  </Link>
                </HStack>
              </Flex>
            )
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
          <DrawerBody>
            {!isLoading && isAuthenticated ? (
              <Accordion allowToggle mt={10}>
                {pagesToShow.map((page) =>
                  page.menu ? (
                    <AccordionItem key={page.name}>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <NavLink type="text" icon={page.icon}>
                              {page.name}
                            </NavLink>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {page.menu.items.map((item) => (
                          <Link
                            to={item.link}
                            key={item.name}
                            onClick={onClose}
                          >
                            <NavLink icon={item.icon}>{item.name}</NavLink>
                          </Link>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ) : (
                    <AccordionItem key={page.name}>
                      <Link to={page.link} key={page.name} onClick={onClose}>
                        <NavLink icon={page.icon}>{page.name}</NavLink>
                      </Link>
                    </AccordionItem>
                  ),
                )}
              </Accordion>
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
              <Flex gap={2}>
                <Link to="/register">
                  <Button onClick={onClose}>Registrarse</Button>
                </Link>
                <Link to="/login">
                  <Button onClick={onClose} mr={4}>
                    Iniciar Sesión
                  </Button>
                </Link>
              </Flex>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
