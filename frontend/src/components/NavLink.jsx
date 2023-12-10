import { Box, Button } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";

const NavLink = (props) => {
  const { children, icon } = props;
  return (
    <Button
      px={2}
      py={1}
      bg="gray.800"
      color="white"
      rounded="md"
      leftIcon={icon}
      _hover={{
        textDecoration: "none",
        bg: "primary.300",
        color: "gray.800",
      }}
    >
      {children}
    </Button>
  );
};

export default NavLink;
