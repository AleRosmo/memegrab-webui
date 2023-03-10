import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../components/Button/Button";
import SideBar from "../components/SideBar/SideBar";

const Layout = ({ buttons }) => {
  const sideButtons = buttons.map(({ name, icon, path }) => {
    return <Button key={name} name={name} icon={icon} path={path} />;
  });

  return (
    <div className="w-full h-screen">
      <SideBar>{sideButtons}</SideBar>
      <Outlet />
    </div>
  );
};

export default Layout;
