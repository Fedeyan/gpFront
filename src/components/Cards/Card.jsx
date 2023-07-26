import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="card h-100">
      <img src={data.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.nombre}</h5>
        <p className="card-text">
          {data.descripcion}
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="mt-3">
          <Link to="#" className="btn btn-secondary">
            Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
