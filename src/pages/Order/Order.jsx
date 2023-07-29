import React, { useState } from "react";
import OrderTable from "../../components/Tables/OrderTable";
import { useSelector } from "react-redux";
import { sendOrder } from "../../api/axios";
import CustomAlert from "../../components/Alerts/CustomAlert";

const Order = () => {
  const order = useSelector((store) => store.order);
  const products = order?.products;
  const bool = order?.bool;
  const message = order?.message;

  const [alertData, setAlertData] = useState({
    show: false,
    heading: "",
    content: "",
    variant: "primary",
    reload: false,
  });

  async function onSubmitHandler(e) {
    e.preventDefault();
    const result = await sendOrder();

    if (!result) {
      return alert("Sin respuesta del servidor. Reintente.");
    }

    const { bool, message, error } = result;
    if (!bool) {
      if (error && error.includes("continuar")) {
        return setAlertData({
          show: true,
          heading: "Error",
          content: error,
          variant: "danger",
          reload: true,
        });
      }
      return setAlertData({
        show: true,
        heading: "Error",
        content: error,
        variant: "danger",
      });
    }
    return setAlertData({
      show: true,
      heading: "Operación exitosa",
      content: message,
      variant: "success",
    });
  }

  return bool === false ? (
    <div className="container-fluid align-items-center">
      <h3 className="text-center mt-5">{message}</h3>
    </div>
  ) : (
    <div className="container mt-4">
      <div className="d-flex">
        <h3>Mi pedido </h3>
        <h5
          className={
            order?.status === null
              ? "text-warning"
              : order?.status === false
              ? "text-danger"
              : "text-success"
          }
        >
          ({order?.status === true ? "Aprobado" : "Pendiente"})
        </h5>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total parcial</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return <OrderTable key={index} product={product} />;
            })}
          </tbody>
        </table>
      </div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          className="btn bg-dark text-light mb-3 shadow"
          type="submit"
          value="Solicitar presupuesto"
        />
      </form>
      <CustomAlert data={alertData} setData={setAlertData} />
    </div>
  );
};

export default Order;
