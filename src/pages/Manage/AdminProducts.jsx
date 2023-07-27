import React from "react";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="list-group list-group-md">
            <Link
              to="/manage/products/list"
              className="list-group-item list-group-item-action"
            >
              Ver productos
            </Link>
            <Link
              to="/manage/products/add"
              className="list-group-item list-group-item-action"
            >
              Agregar productos
            </Link>

            <Link
              to="/admin/products/special"
              className="list-group-item list-group-item-action"
            >
              Productos en oferta
            </Link>
            <Link
              to="/admin/products/out-of-stock"
              className="list-group-item list-group-item-action"
            >
              Productos sin stock
            </Link>
            <Link
              to="/manage/categories/add"
              className="list-group-item list-group-item-action"
            >
              Agregar categoría
            </Link>
            <Link
              to="/manage/categories/list"
              className="list-group-item list-group-item-action"
            >
              Ver categorias
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
};

export default AdminProducts;
