import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { boolIsLogIn } = useContext(AuthContext);
  console.log(boolIsLogIn)
  return !boolIsLogIn ? <Navigate to={"/login"} /> : <Outlet />;
};

export default PrivateRoutes;
