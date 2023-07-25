import React, { useEffect } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCategories } from "../api/axios";
import { fetchAllProducts, fetchCategories } from "../redux/actions";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(function () {
    getAllProducts().then(function (response) {
      dispatch(fetchAllProducts(response));
    });

    getCategories().then(function (response) {
      dispatch(fetchCategories(response));
    });
  },[dispatch]);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
