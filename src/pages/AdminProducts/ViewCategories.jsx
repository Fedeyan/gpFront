import React from "react";
import { useSelector } from "react-redux";

const ViewCategories = () => {
  const categoriesData = useSelector((store) => store.categories);

  return (
    <div className="container mt-4">
      <div className="col-md-12">
        <h2>Lista de Categorías</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Categoría</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.nombre}</td>
                  <td>
                    <div className="d-flex">
                      <button className="btn btn-sm btn-primary me-2">
                        Editar
                      </button>
                      <button className="btn btn-sm btn-danger">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewCategories;
