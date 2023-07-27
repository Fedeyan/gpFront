import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { addProduct } from "../../api/axios";

const Card = ({ data }) => {
  const { boolIsLogIn } = useContext(AuthContext);
  const [cant, setCant] = useState(1);
  const [redirect, setRedirect] = useState(false);

  function onChangeHandler(e) {
    const currentValue = e.target.value;
    if (currentValue > 0 && currentValue <= data.stock) {
      setCant(currentValue);
    }
    if (currentValue <= 0) {
      setCant(1);
    }

    if (currentValue > data.stock) {
      setCant(data.stock);
    }
  }

  async function addHandler() {
    const result = await addProduct(data.code, cant);
    const { bool, message, error } = result;
    console.log(result);
    if (bool === false) {
      alert(error);
      return setRedirect(true);
    } else {
      return alert(message);
    }
  }

  return redirect ? (
    <Navigate to={"/login"} />
  ) : (
    <div className="card h-100">
      <img src={data.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{data.nombre}</h5>
        <p className="card-text text-center">{data.descripcion}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <b>Marca:</b> {data?.marca}
          </li>
          <li className="list-group-item text-center">
            <b>Modelo:</b> {data?.modelo}
          </li>
        </ul>
        {!data?.stock ? (
          <div className="mt-3 d-flex flex-column">
            <Link to="#" className="btn btn-dark disabled">
              Agregar al pedido
            </Link>
            <h6 className="mt-1 text-danger">Sin stock</h6>
          </div>
        ) : (
          <div className="mt-3 d-flex flex-column">
            {boolIsLogIn ? (
              <button onClick={() => addHandler()} className="btn btn-dark ">
                Agregar al pedido
              </button>
            ) : (
              <button onClick={() => addHandler()} className="btn btn-dark ">
                Agregar al pedido
              </button>
            )}

            <div className="d-flex justify-content-between">
              <div
                className="d-flex flex-column ml-md-2"
                style={{ width: "50%" }}
              >
                <label htmlFor="cant" className="text-center">
                  Cantidad
                </label>
                <input
                  value={cant}
                  onChange={(e) => onChangeHandler(e)}
                  type="number"
                  name="cant"
                  id="cant"
                  placeholder="0"
                  className="form-control"
                />
              </div>

              <div className="d-flex flex-column ml-md-2">
                <label htmlFor="stock" className="text-center">
                  Disponible
                </label>
                <span id="stock">{data.stock}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
