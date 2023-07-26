import React, { useState } from "react";
import { login } from "../../api/axios";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  function onChangeHandler(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  async function onSubmitHandler(e) {
    // e.preventDefault();
    const { username, password } = loginData;
    const mailRegEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;

    if (typeof username !== "string" || typeof password !== "string") {
      return alert("El correo y la contraseña deben ser cadenas de texto.");
    }

    if (!mailRegEx.test(username)) {
      return alert("Ingresá un correo electrónico válido");
    }
    if (!passwordRegEx.test(password)) {
      return alert(
        "Ingresa una contraseña que tenga al menos 8 dígitos, una mayúscula y un número."
      );
    }

    try {
      const response = await login(String(username), String(password));
      const { bool, message, error } = response;

      if (bool === true) {
        alert(message);
      } else if (bool === false) {
        alert(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {" "}
        {/* Creamos una fila y centramos el formulario */}
        <div className="col-md-6">
          {" "}
          {/* Establecemos un ancho de 6 columnas para el formulario */}
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
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
