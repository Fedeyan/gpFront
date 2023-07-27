import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AdminRoutes = () => {
  const { isAdmin, isAdminChecked } = useContext(AuthContext);
  return !isAdminChecked ? null : !isAdmin ? (
    <Navigate to={"/"} />
  ) : (
    <div className="container-fluid mt-4 bg-light">
      <div className="row">
        <div className="col-md-3 col-lg-2 pr-0">
          <AdminSidebar />
        </div>
        <div className="col-md-9 col-lg-10">
          <div className="row">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoutes;
