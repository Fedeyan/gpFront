import React, { useContext } from "react";
import Card from "../../components/Cards/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductsContext } from "../../context/ProductsContext";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container-fluid mt-3 bg-light">
      <div className="row">
        {/* Aumenta el tamaño del sidebar aquí */}
        <div className="col-md-3 col-lg-3 pr-0">
          <Sidebar />
        </div>
        {/* Reduce el tamaño del contenedor de cards aquí */}
        <div className="col-md-9 col-lg-9">
          <div className="row row-cols-sm-2 row-cols-md-4">
            {products &&
              products?.all.map(function (data) {
                return (
                  <div key={data.id} className="mb-3 px-1">
                    <Card data={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
