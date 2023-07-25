import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const categories = useSelector((store) => store.categories);
  return (
    <div>
      <ul>
        {categories &&
          categories?.map(function (cat) {
            return (
              <li key={cat.id}>
                <Link to={`${cat.nombre}`}>{cat.nombre}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
