import { createContext, useContext, useState, useEffect } from "react";
import {
  getOneUser,
  loginRequest,
  verifyTokenRequest,
  loginExternal
} from "../api/userRequest";
import { jwt } from "../api/axios";

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
    try {
      setIsLoading(false);
      setIsAuthenticated(true);
      const session = await verifyTokenRequest();
      const sessionExternal=session.data
      
      if(sessionExternal.urlWebSession && sessionExternal.urlWebSession.urlWeb==='gaistms.marianosamiego.edu.ec'){
        const estudiante=sessionExternal.urlWebSession

        const data = {
          ci: estudiante.ci,
          firstName: estudiante.firstName,
          secondName: estudiante.secondName,
          firstLastName: estudiante.firstLastName,
          secondLastName: estudiante.secondLastName,
          photo: null,
          roles: [{rol:'Estudiante'}],
          userId: 2,
          username: sessionExternal.username,
          loginRol: 'Estudiante',
        };
  
        if (session.status === 200) {
          setUser(data);
        }
        return;
      }
      
      const user = await getOneUser(session.data.userId);

      const data = {
        ci: user.data.ci,
        firstLastName: user.data.firstLastName,
        firstName: user.data.firstName,
        photo: user.data.photo,
        roles: user.data.roles,
        secondLastName: user.data.secondLastName,
        secondName: user.data.secondName,
        userId: user.data.userId,
        username: user.data.username,
        loginRol: session.data.loginRol,
      };

      if (session.status === 200) {
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (user) => {
    try {
      const response = await loginRequest(user);
      const { data } = response;
      
      if (response.status === 200) {
        window.localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        loadUserProfile();
      }
    } catch (error) {
      // console.log(error.response.data);
      error.message='Datos Erroneos'
      setErrors(error);
    }
  };
  const signinExternal = async (user) => {
    try {
      const response = await loginExternal(user);
      const { data } = response;
  
      // Asegúrate de que la respuesta contenga el token
      if (data.token) {
        window.localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        loadUserProfile();
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
      setErrors(error.response ? error.response.data : { message: "Error desconocido" });
    }
  };

  const logout = async () => {
    window.localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const checkLogin = async () => {
    if (!jwt()) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    try {
      const session = await verifyTokenRequest();

      // console.log(user)
      if (session.status) {
        setIsLoading(false);
        setIsAuthenticated(true);
        loadUserProfile();
      }

      // console.log(res);
    } catch (error) {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
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
        signinExternal,
        errors,
        logout,
        isAuthenticated,
        loadUserProfile,
        isLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
