import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth(); // ✅ usamos register, no login
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password });
      
      navigate("/"); 
    } catch (error) {
      alert("Error al registrarse");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6 bg-gray-600"
      >
        <h2 className="text-2xl font-bold text-center text-white">Registrarse</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
        >
          Crear cuenta
        </button>

        <div className="text-center">
          <p className="text-white">¿Ya tienes cuenta?</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-2 text-green-300 hover:underline"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}
