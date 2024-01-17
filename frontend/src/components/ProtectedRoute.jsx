import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  Box,
  Center,
} from "@chakra-ui/react";

function ProtectedRoute({ requiredRol }) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (!isLoading && !isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  if (!isLoading && isAuthenticated && !requiredRol.includes(user.loginRol)) {
    return (
      <Box m={3}>
        <Alert
          borderRadius="md"
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="300px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Error
          </AlertTitle>
          <AlertDescription maxWidth="sm">No tiene acceso</AlertDescription>
        </Alert>
      </Box>
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
