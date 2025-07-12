import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
