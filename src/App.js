import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import { socket } from "./socket";
import { getAllProducts, getCategories } from "./api/axios";
import { fetchAllProducts, fetchCategories } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(function () {
    socket.on("connected", function() {
      console.log("Connection succefull")
    })

    socket.on("fetchCategories", function () {
      console.log("fetch-c")
      getCategories().then((response) => dispatch(fetchCategories(response)));
    });

    socket.on("fetchProducts", function () {
      console.log("fetch-p")
      getAllProducts().then((response) => dispatch(fetchAllProducts(response)));
    });
  });

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;
