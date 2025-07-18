import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <AdminHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
