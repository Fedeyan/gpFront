import React, { useState } from "react";
import { addCategorie } from "../../api/axios";
import CustomAlert from "../../components/Alerts/CustomAlert";
const AddCategory = () => {
  const [nombre, setNombre] = useState("");
  const [alertData, setAlertData] = useState({
    show: false,
    heading: "",
    content: "",
    variant: "primary",
    reload: false,
  });

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (!nombre || typeof nombre !== "string") {
      setAlertData({
        show: true,
        heading: "Nombre de categoría no válido.",
        content: "Ingrese un nombre de categoría válido.",
        variant: "danger",
      });
      return;
    }
    const result = await addCategorie(String(nombre));
    const { bool, error, message } = result;

    if (bool === true) {
      setAlertData({
        show: true,
        heading: "Categoría agregada.",
        content: "La categoría se ha agregado exitosamente.",
        variant: "success",
      });
      setNombre("");
    } else {
      setAlertData({
        show: true,
        heading: "Error al agregar categoría.",
        content: error || message,
        variant: "danger",
      });
    }
  }

  return (
    <>
      <CustomAlert setData={setAlertData} data={alertData} />
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
    </>
  );
};

export default AddCategory;
