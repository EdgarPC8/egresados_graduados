import { createContext, useContext, useState, useEffect } from "react";
import {
  getOneUser,
  loginRequest,
  verifyTokenRequest,
} from "../api/userRequest";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ roles: [] });

  const loadUserProfile = async () => {
    const verify = await verifyTokenRequest();
    const { data } = await getOneUser(verify.data.userId);
    setUser(data);
  };

  const signin = async (user) => {
    // console.log(user)
    try {
      const response = await loginRequest(user);
      const { data } = response;
      window.localStorage.setItem("token", data.token);
      // const token = window.localStorage.getItem("token");

      if (response.status === 200) {
        setIsAuthenticated(true);
        loadUserProfile();
      }
    } catch (error) {
      // console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const logout = async () => {
    window.localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = `Bearer ${window.localStorage.getItem("token")}`;

      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest();
        setIsAuthenticated(true);

        // console.log(res);
      } catch (error) {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };
    checkLogin();
    loadUserProfile();
  }, []);

  useEffect(() => {
    if (errors.message) {
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  }, [errors]);

  // Verifica si tiene token el usuario

  return (
    <AuthContext.Provider
      value={{
        signin,
        errors,
        logout,
        isAuthenticated,
        isLoading,
        loadUserProfile,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
