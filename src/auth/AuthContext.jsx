// src/auth/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { login as loginAPI, logout as logoutAPI, profile,create as registerAPI } from "./api.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
      const response = await profile();
      setIsAuthenticated(true);
      setUser(response.data);
    } catch {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const response = await loginAPI(credentials);
    setIsAuthenticated(true);
    setUser(response.data.user || response.data);
    return response.data;
  };

  const logout = async () => {
    try {
      await logoutAPI();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const register = async (user) => {
    await registerAPI(user);
    await checkAuth();
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        user,
        checkAuth,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
};
