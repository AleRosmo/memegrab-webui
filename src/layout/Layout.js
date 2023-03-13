import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import SideButton from "../components/SideButton/SideButton";

const Layout = ({ buttons }) => {
  const sideButtons = buttons.map(({ name, icon, path }) => {
    return <SideButton key={name} name={name} icon={icon} path={path} />;
  });

  return (
    <div className="w-full h-screen flex">
      <SideBar>{sideButtons}</SideBar>
      <Outlet />
    </div>
  );
};

export default Layout;
