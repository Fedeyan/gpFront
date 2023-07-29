import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import { useContext, useEffect } from "react";
import { socket } from "./socket";
import {
  fetchAdminOrders,
  getAllProducts,
  getCategories,
  getOrder,
} from "./api/axios";
import {
  fetchAdminOrdersAction,
  fetchAllProducts,
  fetchCategories,
  fetchOrder,
} from "./redux/actions";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Order from "./pages/Order/Order";
import AdminRoutes from "./components/PrivateRoutes/AdminRoutes";
import AdminDashboard from "./pages/Manage/AdminDashboard";
import AdminProducts from "./pages/Manage/AdminProducts";
import ViewProducts from "./pages/AdminProducts/ViewProducts";
import AddProducts from "./pages/AdminProducts/AddProducts";
import AddCategory from "./pages/AdminProducts/AddCategory";
import ViewCategories from "./pages/AdminProducts/ViewCategories";
import ViewOrders from "./pages/AdminOrders/ViewOrders";

function App() {
  const { isDispatched } = useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(function () {
    socket.on("connected", function () {
      console.log("Connection successful");
    });

    socket.on("fetchCategories", function () {
      getCategories().then((response) => dispatch(fetchCategories(response)));
    });

    socket.on("fetchProducts", function () {
      getAllProducts().then((response) => dispatch(fetchAllProducts(response)));
    });

    socket.on("fetchOrder", function () {
      getOrder().then((response) => dispatch(fetchOrder(response)));
    });

    socket.on("sendOrder", function () {
      fetchAdminOrders().then((result) => {
        dispatch(fetchAdminOrdersAction(result));
      });
    });
  });

  return !isDispatched ? null : (
    <div
      className="App bg-light d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/order" element={<Order />}></Route>
          <Route element={<AdminRoutes />}>
            <Route path="/manage" element={<AdminDashboard />} />
            <Route path="/manage/products" element={<AdminProducts />}></Route>
            <Route path="/manage/products/list" element={<ViewProducts />} />
            <Route path="/manage/products/add" element={<AddProducts />} />
            <Route path="/manage/categories/add" element={<AddCategory />} />
            <Route
              path="/manage/categories/list"
              element={<ViewCategories />}
            />
            <Route path="/manage/orders" element={<ViewOrders />} />
          </Route>
        </Route>
      </Routes>
      <footer className=" bg-dark text-center p-1 text-light mt-auto">
        Sitio desarrollado por BasilOrien
      </footer>
    </div>
  );
}

export default App;
