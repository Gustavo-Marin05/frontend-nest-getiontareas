import { useEffect, useState } from "react";
import { deleteTask, getTasks } from "./api";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen  p-6 text-center">
      <h1 className="text-3xl font-bold text-center mb-8 ">📋 Tus Tareas</h1>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 shadow-md rounded-xl flex justify-between items-center"
          >
            <span className="text-gray-800 font-medium">{task.title}</span>

            <div >
              <button
                onClick={() => navigate(`/tasks/edit/${task.id}`)}
                className="mr-2  text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 px-3 py-1 rounded-xl"
              >
                Editar
              </button>

              <button
                onClick={() => deleteTask(task.id).then(loadTasks)}
                className="text-red-600 hover:text-white border border-red-600 hover:bg-red-600 transition px-3 py-1 rounded-xl"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón para redirigir a la página de creación */}
      <div>
        <button
          onClick={() => navigate("/task/create")}
          className="text-green-500 hover:text-white border border-green-500 hover:bg-green-500 transition px-4 py-2 rounded-xl mt-6 font-semibold"
        >
          Nueva tarea
        </button>
      </div>
    </div>
  );
}
