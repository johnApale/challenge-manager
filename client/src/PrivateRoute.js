import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

function PrivateRoute() {
  const { user } = UserAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default PrivateRoute;
