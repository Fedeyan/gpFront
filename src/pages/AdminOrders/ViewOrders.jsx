import React from "react";
import { useSelector } from "react-redux";

const ViewOrders = () => {
  const orders = useSelector((store) => store.adminOrders);

  return (
    <div>
      <div className="col-md-12">
        <h2>Lista de pedidos.</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Pedido N°</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                console.log(order);
                return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order?.User?.nombre}</td>
                    <td>
                      {order?.status === true
                        ? "Aprobado"
                        : order?.status === false
                        ? "Rechazado"
                        : "Pendiente"}
                    </td>
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

export default ViewOrders;
