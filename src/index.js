import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import ProductsContextProvider from "./context/ProductsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProductsContextProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ProductsContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
