import React, { useContext } from "react";
import Card from "../../components/Cards/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductsContext } from "../../context/ProductsContext";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container-fluid mt-4 bg-light" style={{ marginLeft: 0 }}>
      <div className="row">
        <div className="col-md-3 col-lg-2 pr-0">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-10">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
            {products &&
              products?.all.map(function (data) {
                return (
                  <div key={data.id} className="col mb-3 px-1">
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
