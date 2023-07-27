import React from "react";

const OrderTable = ({ product }) => {
  return (
    <tr key={product.id}>
      <td>
        <img
          src={product.imagen}
          alt={product.nombre}
          style={{ width: "100px", height: "auto" }}
        />
      </td>
      <td>{product.nombre}</td>
      <td>{`${product.marca} ${product.modelo}`}</td>
      <td>{product.price ? `$${product.price}` : "Sin datos"}</td>
      <td>{product.cant}</td>
      <td>{product.price ? product.price * product.cant : "Sin datos"}</td>
    </tr>
  );
};

export default OrderTable;
