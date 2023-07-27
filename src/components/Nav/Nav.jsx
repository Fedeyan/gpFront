import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../api/axios";

const Nav = () => {
  const { boolIsLogIn } = useContext(AuthContext);

  async function logoutHandler() {
    try {
      const { bool } = await logout();
      if (bool === true) {
        alert("Cerraste sesion");
        return window.location.reload();
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <nav className=" shadow-sm top-0 w-100 navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          GP Motos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Buscar
            </button>
          </form>
          <ul className="navbar-nav">
            {!boolIsLogIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link">Mi pedido</Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => logoutHandler()}
                    className="nav-link"
                    to="/register"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
