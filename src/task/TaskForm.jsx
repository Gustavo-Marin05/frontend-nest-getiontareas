import { useState, useEffect } from "react";
import { createTask, getTaskById, updateTask } from "./api";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTaskById(id)
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
        })
        .catch((err) => {
          console.error("Error al obtener tarea:", err);
          navigate("/task");
        });
    }
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await updateTask(id, { title, description });
      } else {
        await createTask({ title, description });
      }
      navigate("/task");
    } catch (error) {
      console.error("Error al guardar tarea:", error);
      alert("Error al guardar la tarea");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-300">
          {id ? "✏️ Editar Tarea" : "✍️ Crear Nueva Tarea"}
        </h2>

        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-700 text-white border border-gray-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          required
        />

        <textarea
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-gray-700 text-white border border-gray-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          rows={4}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition"
        >
          {id ? "Actualizar Tarea" : "Guardar Tarea"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/task")}
          className="w-full text-indigo-400 hover:text-white hover:underline"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
