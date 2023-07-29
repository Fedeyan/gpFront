import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addProductList } from "../../api/axios";
import CustomAlert from "../Alerts/CustomAlert";

const AddProductForm = () => {
  const [alertData, setAlertData] = useState({
    show: false,
    heading: "",
    content: "",
    variant: "primary",
    reload: false,
  });
  const categories = useSelector((store) => store.categories);
  const [productData, setProductData] = useState({
    nombre: "",
    code: 0,
    marca: "",
    modelo: "",
    image: null,
    categoria: "",
    stock: 0,
  });

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;
    setProductData({ ...productData, [id]: newValue });
  };

  async function onSubmitHandler(e) {
    try {
      e.preventDefault();
      const { nombre, code, marca, modelo, image, categoria, stock } =
        productData;

      if (
        !nombre ||
        !code ||
        !marca ||
        !modelo ||
        !categoria ||
        !stock ||
        !image
      ) {
        if (!categoria) {
        return  setAlertData({
            show: true,
            heading: "Campos incompletos.",
            content: " Ingresa al menos una categoria.",
            variant: "danger",
          });
        }

        setAlertData({
          show: true,
          heading: "Campos incompletos.",
          content: "Por favor, complete todos los campos.",
          variant: "danger",
        });
        return;
      }

      if (
        typeof nombre !== "string" ||
        isNaN(Number(code)) ||
        typeof marca !== "string" ||
        typeof modelo !== "string" ||
        typeof categoria !== "string" ||
        isNaN(Number(stock)) ||
        !(image instanceof File)
      ) {
        const invalidFields = [];
        if (typeof nombre !== "string") invalidFields.push("Nombre");
        if (isNaN(Number(code))) invalidFields.push("Código");
        if (typeof marca !== "string") invalidFields.push("Marca");
        if (typeof modelo !== "string") invalidFields.push("Modelo");
        if (typeof categoria !== "string") invalidFields.push("Categoría");
        if (isNaN(Number(stock))) invalidFields.push("Stock");
        if (!(image instanceof File)) invalidFields.push("Imagen");

        setAlertData({
          show: true,
          heading: "Campos inválidos.",
          content: `Los siguientes campos tienen tipos de datos no válidos: ${invalidFields.join(
            ", "
          )}.`,
          variant: "danger",
        });
        return;
      }

      const result = await addProductList(
        nombre,
        Number(code),
        marca,
        modelo,
        image,
        categoria,
        Number(stock)
      );
      const { bool } = await result;
      if (bool === true) {
        setAlertData({
          show: true,
          heading: "Producto añadido con éxito.",
          content: "El producto se ha agregado exitosamente.",
          variant: "success",
        });
        setProductData({
          nombre: "",
          code: 0,
          marca: "",
          modelo: "",
          image: null,
          categoria: "",
          stock: 0,
        });
        return;
      } else {
        setAlertData({
          show: true,
          heading: "Error al agregar producto.",
          content: "Hay errores en los campos.",
          variant: "danger",
        });
        return;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="container mt-4 mb-5 bg-white shadow rounded-2">
      <CustomAlert setData={setAlertData} data={alertData} />
      <form
        onSubmit={onSubmitHandler}
        encType="multipart/form-data"
        className="row g-3 pb-2"
      >
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={productData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="code" className="form-label">
            Código
          </label>
          <input
            type="number"
            className="form-control"
            id="code"
            value={productData.code}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="marca" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="marca"
            value={productData.marca}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="modelo" className="form-label">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            id="modelo"
            value={productData.modelo}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-8">
          <label htmlFor="image" className="form-label">
            Imagen (Archivo)
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="categoria" className="form-label">
            Categoría
          </label>
          <select
            className="form-select"
            id="categoria"
            value={productData.categoria}
            onChange={handleChange}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            value={productData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
