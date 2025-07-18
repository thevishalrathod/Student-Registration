import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/auth/AuthLayout";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserLayout from "./components/user/UserLayout";
import UserHome from "./pages/user/UserHome";
import CheckAuth from "./components/common/CheckAuth";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import axios from "axios";
import Logout from "./pages/auth/Logout";

function App() {
  const authMiddleware = async () => {
    await axios.get("http://localhost:3000/api/auth/check-auth");
  };

  useEffect(() => {
    authMiddleware();
  }, [authMiddleware]);

  return (
    <Routes>
      <Route path="/" element={<CheckAuth></CheckAuth>}></Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* User Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="home" element={<UserHome />} />
        <Route path="dashboard" element={<UserDashboard />} />
        {/* <Route path="logout" element={<Logout />} /> */}
      </Route>

      {/* Admin Routes */}
      <Route path="/admin">
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* <Route path="logout" element={<Logout />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
