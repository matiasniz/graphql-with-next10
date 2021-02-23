import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth(props) {
  const [showLogin, setShowLogin] = useState(true);

  const { setTitleModal } = props;

  const showLoginForm = () => {
    setTitleModal("Inicia sesion");
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Registrate");
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
}
