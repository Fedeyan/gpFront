import React, { createContext, useEffect, useState } from "react";
import { isLogin } from "../api/axios";
// import { useDispatch } from "react-redux";
export const AuthContext = createContext("AuthContext");

const AuthProvider = ({ children }) => {
  const [boolIsLogIn, setIsLogIn] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  //   const dispatch = useDispatch();
  useEffect(function () {
    isLogin().then(function (response) {
      setIsLogIn(response.bool);
      setIsDispatched(true);
    });
  });

  return (
    <AuthContext.Provider value={{ boolIsLogIn, isDispatched }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
