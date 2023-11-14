import {
  Container,
  Stack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

import PasswordInput from "../components/PasswordInput";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));
    // console.log(JSON.stringify(data));
    signin(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/inicio");
    }
  }, [isAuthenticated]);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Inicia Sesión en tu cuenta.
            </Heading>
            <Text>Es un gusto tener de vuelta 😄</Text>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Correo</FormLabel>
                    <Input id="email" name="email" />
                  </FormControl>
                  <PasswordInput />
                </Stack>
                <Button
                  bg="primary.200"
                  color="white"
                  type="submit"
                  _hover={{
                    bg: "primary.100",
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default LoginPage;
