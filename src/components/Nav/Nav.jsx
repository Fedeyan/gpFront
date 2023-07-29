import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../api/axios";
import CustomAlert from "../Alerts/CustomAlert";

const Nav = () => {
  const [alertData, setAlertData] = useState({
    show: false,
    heading: "",
    content: "",
    variant: "primary",
    reload: false,
  });
  const { boolIsLogIn, isAdmin } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function logoutHandler() {
    try {
      const { bool } = await logout();
      if (bool === true) {
        return setAlertData({
          show: true,
          heading: "Cerraste sesion.",
          content: "Cerraste sesión",
          variant: "success",
          reload: true,
        });
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <CustomAlert setData={setAlertData} data={alertData} />
      <nav
        style={{ fontSize: "small" }}
        className=" shadow-sm top-0 w-100 navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            GP Motos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
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
                  {isAdmin ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/manage"}>
                          Administrar
                        </Link>
                      </li>
                    </>
                  ) : null}
                  <li className="nav-item">
                    <Link to={"/order"} className="nav-link">
                      Mi pedido
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">Alertas</button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => logoutHandler()}
                      className="nav-link"
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
    </>
  );
};

export default Nav;
