import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import SideButton from "../components/SideBar/ components/SideButton/SideButton";

const Layout = ({ buttons }) => {
  const sideButtons = buttons.map(({ name, icon, path }) => {
    return <SideButton key={name} name={name} icon={icon} path={path} />;
  });

  return (
    <div className="w-full h-screen flex">
      <SideBar>{sideButtons}</SideBar>
      <section className="bg-gray-300 dark:bg-gray-900 w-full h-screen overflow-auto flex flex-grow flex-shrink flex-wrap content-baseline">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
