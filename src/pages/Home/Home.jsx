import React, { useContext } from "react";
import Card from "../../components/Cards/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductsContext } from "../../context/ProductsContext";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container-fluid d-flex p-0 mt-5" style={{ height: "100vh" }}>
      <div className="col-md-3 col-lg-2">
        <Sidebar />
      </div>
      <div className="col-md-9 col-lg-10 d-flex flex-column p-3 overflow-auto">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {products &&
            products?.all.map(function (data) {
              return (
                <div key={data.id} className="col mb-4">
                  <Card data={data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
