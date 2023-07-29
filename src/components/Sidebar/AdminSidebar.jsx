import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="bg-light p-2 pt-0 pb-5 mt-2 ">
      <h4 className="pb-3 mb-0">Administrar</h4>
      <div style={{ maxHeight: "calc(100% - 50px)", overflowY: "auto" }}>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <Link
              to={`/manage/products`}
              className="text-decoration-none text-dark"
            >
              Productos
            </Link>
          </li>

          <li className="list-group-item">
            <Link
              to={`/manage/orders`}
              className="text-decoration-none text-dark"
            >
              Pedidos
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to={`/manage/products`}
              className="text-decoration-none text-dark"
            >
                Ventas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
