import React, { useState } from "react";
import { addCategorie } from "../../api/axios";

const AddCategory = () => {
  const [nombre, setNombre] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (!nombre || typeof nombre !== "string") {
      return alert("El nombre de la categoria no es valido.");
    }
    const result = await addCategorie(String(nombre));
    const { bool, error, message } = result;

    if (bool === true) {
      setNombre("");
    }
    return alert(error || message);
  }
  return (
    <div className="container mt-4 mb-5 pb-3 pt-2 bg-white shadow rounded-2">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre de Categoría
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form-control"
            id="nombre"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Agregar Categoría
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
