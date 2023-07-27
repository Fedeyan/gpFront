import React, { createContext, useEffect, useState } from "react";
import { checkIfAdmin, getOrder, isLogin } from "../api/axios";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../redux/actions";
export const AuthContext = createContext("AuthContext");

const AuthProvider = ({ children }) => {
  const [boolIsLogIn, setIsLogIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [isAdminChecked, setIsAdminChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(function () {
    isLogin().then(function (response) {
      setIsLogIn(response.bool);
      if (response.bool === true) {
        checkIfAdmin().then((response) => {
          const { bool } = response;
          setIsAdminChecked(true);
          if (bool === true) {
            setIsAdmin(true);
          }
        });
      }
      setIsDispatched(true);
      if (response.bool === true) {
        getOrder().then((orderResponse) => {
          dispatch(fetchOrder(orderResponse));
        });
      }
    });
  });

  return (
    <AuthContext.Provider
      value={{ boolIsLogIn, isDispatched, isAdmin, isAdminChecked }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
