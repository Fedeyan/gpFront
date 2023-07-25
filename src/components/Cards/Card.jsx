import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div>
      <img src={data.imagen} alt="..." />
      <div>
        <h5>Card title</h5>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul>
        <li>An item</li>
        <li>A second item</li>
        <li>A third item</li>
      </ul>
      <div>
        <Link>Agregar al carrito</Link>
      </div>
    </div>
  );
};

export default Card;
