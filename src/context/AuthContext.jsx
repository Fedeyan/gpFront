import React, { createContext, useEffect, useState } from "react";
import { getOrder, isLogin } from "../api/axios";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../redux/actions";
export const AuthContext = createContext("AuthContext");

const AuthProvider = ({ children }) => {
  const [boolIsLogIn, setIsLogIn] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
    const dispatch = useDispatch();
  useEffect(function () {
    isLogin().then(function (response) {
      setIsLogIn(response.bool);
      setIsDispatched(true);
      if (response.bool === true) {
        getOrder().then(orderResponse=>{
          dispatch(fetchOrder(orderResponse))
        })
      }
    });
  });

  return (
    <AuthContext.Provider value={{ boolIsLogIn, isDispatched }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
