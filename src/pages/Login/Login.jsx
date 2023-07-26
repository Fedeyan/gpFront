import React from "react";
import LoginForm from "../../components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="container mt-5 pt-5 d-flex flex-column"> {/* Usamos un contenedor flex */}
      <div className="flex-grow-1"> {/* Establecemos flex-grow en 1 para que ocupe el alto restante */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
