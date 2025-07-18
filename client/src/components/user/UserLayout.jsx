import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import CheckAuth from "../common/CheckAuth";

const UserLayout = () => {
  return (
    <>
      <CheckAuth />
      <div className="flex flex-col bg-white overflow-hidden">
        <UserHeader />
        <main className="flex flex-col w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserLayout;
