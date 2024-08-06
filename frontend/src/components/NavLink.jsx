import { Button,Text,Icon,Flex } from "@chakra-ui/react";

const NavLink = (props) => {
  const { children, icon,type='button' } = props;

  if(type=="text"){
    return (

      <Flex align="center" color="black" textAlign="left" justifyContent="start">
      {icon}
      <Text ml={2} fontWeight="bold"> 
        {children}
      </Text>
    </Flex>

    )

  }
  return (
    <Button
      px={4}
      py={5}
      bg="white"
      color="bg.400"
      rounded="none"
      width="100%"
      textAlign="left"
      justifyContent="start"

      _hover={{
        textDecoration: "none",
        bg: "rgba(0, 0, 0, 0.1)",
        color: "gray.800",
      }}
    >
            <Flex align="center" color="black" textAlign="left" justifyContent="start">
      {icon}
      <Text ml={2} fontWeight="bold"> 
        {children}
      </Text>
    </Flex>
    </Button>
  );
};

export default NavLink;
