import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // 👉 para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      onSuccess();
    } catch (error) {
      alert("Error al iniciar sesión");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6 bg-gray-600"
      >
        <h2 className="text-2xl font-bold text-center text-white">Iniciar sesión</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Iniciar sesión
        </button>

        <div className="text-center">
          <p className="text-white">¿No tienes cuenta?</p>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="mt-2 text-blue-300 hover:underline"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
