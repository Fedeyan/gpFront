import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = useSelector((store) => store.categories);

  return (
    <div className="bg-light p-2 pt-0 pb-5 mt-2 ">
      <h4 className="pb-3 mb-0">Categorías</h4>
      <div style={{ maxHeight: "calc(100% - 50px)", overflowY: "auto" }}>
        <ul className="list-group mb-3">
          {categories &&
            categories?.map((cat) => (
              <li key={cat.id} className="list-group-item">
                <Link
                  to={`/${cat.nombre}`}
                  className="text-decoration-none text-dark"
                >
                  {cat.nombre}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
