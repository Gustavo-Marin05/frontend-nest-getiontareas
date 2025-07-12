import TaskList from "./TaskList";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function TasksPage() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Usa el logout del contexto

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // Opcional: mostrar mensaje de error al usuario
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="fixed flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition font-semibold shadow-sm m-5"
      >
        Cerrar sesión
      </button>
      <TaskList />
    </div>
  );
}