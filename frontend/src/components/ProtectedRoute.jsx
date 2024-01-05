import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ requiredRol }) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (!isLoading && !isAuthenticated) {
    return <Navigate to="login" replace />;
  }

  if (isAuthenticated && !requiredRol.includes(user.loginRol)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
