import React from "react";
import { useSelector } from "react-redux";

const ViewProducts = () => {
  const products = useSelector((store) => store.products);
  const productsData = products?.all;
  return (
    <div>
      <div className="col-md-12">
        <h2>Lista de productos</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product) => {
                console.log(product);
                return (
                  <tr key={product.id}>
                    <td>{product.code}</td>
                    <td>
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        style={{ width: "150px", height: "150px" }}
                      />
                    </td>
                    <td>{product.nombre}</td>
                    <td>{product.stock}</td>
                    <td>
                      <ul className="list-unstyled d-flex mb-0">
                        <li className="me-2">
                          <button className="btn btn-sm btn-primary">
                            Editar
                          </button>
                        </li>
                        <li>
                          <button className="btn btn-sm btn-danger">
                            Eliminar
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
