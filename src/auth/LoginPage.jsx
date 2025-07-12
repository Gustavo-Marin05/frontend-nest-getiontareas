import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return <LoginForm onSuccess={() => navigate("/task")} />;
}
