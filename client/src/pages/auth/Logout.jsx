import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get("http://localhost:3000/api/auth/logout",{withCredentials:true});
  };

  useEffect(() => {
    navigate("/auth/login");
    handleLogout();
  });

  return <></>;
};

export default Logout;
