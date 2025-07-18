import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return <Navigate to="/user/home" />;
    }

    if (location.pathname === "/auth/login") {
      console.log(location.pathname);
      if (location.pathname === "/user/home") {
        console.log(location.pathname);
        return <Navigate to="/auth/login" />;
      }
    }

    // if (location.pathname === "/auth/register") {
    //   if (location.pathname === "/user" || location.pathname === "/admin") {
    //     return <Navigate to="/auth/register" />;
    //   }
    // }

    // if (location.pathname === "/admin/dashboard") {
    //   if (location.pathname === "/user") {
    //     return <Navigate to="/admin/dashboard" />;
    //   }
    // }

    // if (
    //   location.pathname === "/user/home" ||
    //   location.pathname === "/user/dashboard"
    // ) {
    //   if (location.pathname === "/admin") {
    //     return <Navigate to="/user/home" />;
    //   }
    // }
  }, [location.pathname]);

  return <></>;
};

export default CheckAuth;
