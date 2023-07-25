import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/">GP Motos</Link>

        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
          <div>
            <form>
              <div>
                <input
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
                <div>
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
          </div>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
