import React, { useState } from "react";
import { login } from "../../api/axios";
import CustomAlert from "../Alerts/CustomAlert";

const LoginForm = () => {
  const [alertData, setAlertData] = useState({
    show: false,
    heading: "",
    content: "",
    variant: "primary",
    reload: false,
  });
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  function onChangeHandler(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const { username, password } = loginData;
    const mailRegEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;

    if (typeof username !== "string" || typeof password !== "string") {
      return setAlertData({
        show: true,
        heading: "Error en los campos.",
        content: "Se esperaban datos de tipo string.",
        variant: "info",
      });
    }

    if (!mailRegEx.test(username)) {
      return setAlertData({
        show: true,
        heading: "Mail inválido.",
        content: "Ingrese un mail válido.",
        variant: "danger",
      });
    }
    if (!passwordRegEx.test(password)) {
      return setAlertData({
        show: true,
        heading: "Contraseña invalida.",
        content: "Ingrese una contraseña válida.",
        variant: "danger",
      });
    }

    try {
      const response = await login(String(username), String(password));
      const { bool, message, error } = response;

      if (bool === true) {
        setAlertData({
          show: true,
          heading: "Iniciaste sesión.",
          content: message,
          variant: "success",
          reload: true,
        });
      } else if (bool === false) {
        setAlertData({
          show: true,
          heading: "Error.",
          content: error,
          variant: "danger",
          reload: false,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <CustomAlert setData={setAlertData} data={alertData} />

      <div className="container mt-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              onSubmit={(e) => onSubmitHandler(e)}
              className="p-3 border rounded"
            >
              <h3 className="mb-4">Iniciar sesión</h3>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Correo electrónico
                </label>
                <input
                  onChange={(e) => onChangeHandler(e)}
                  value={loginData.username}
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  onChange={(e) => onChangeHandler(e)}
                  value={loginData.password}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-dark">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
