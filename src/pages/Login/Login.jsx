import React, { useContext } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { boolIsLogIn } = useContext(AuthContext);
  return boolIsLogIn ? (
    <Navigate to={"/"} />
  ) : (
    <div className="container mt-5 pt-5 d-flex flex-column">
      <div className="flex-grow-1">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
