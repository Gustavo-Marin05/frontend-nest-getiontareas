import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage.jsx";
import TasksPage from "./task/TasksPage.jsx";
import TaskForm from "./task/TaskForm.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import RegisterPage from "./auth/RegisterPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


       
        
        <Route element={<ProtectedRoute />}>
          <Route path="/task" element={<TasksPage />} />
          <Route path="/task/create" element={<TaskForm />} />
          <Route path="/tasks/edit/:id" element={<TaskForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
