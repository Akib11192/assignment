import React from "react";
import { useGetCurrentUserQuery } from "../features/auth-api";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const location = useLocation();
  const { data: user, isLoading, error } = useGetCurrentUserQuery();
  console.log(user);
  if (!user) {
    if (location.pathname === "/cart") {
      return <Navigate to="/login" />;
    }
  }
  if (user?.role !== "admin" && location.pathname === "/add-product") {
    return <Navigate to="/un-Auth" />;
  }

  return children;
};

export default CheckAuth;
