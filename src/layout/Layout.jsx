import React, { createContext, useContext, useEffect } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import SideButton from "../components/SideBar/ components/SideButton/SideButton";
import { AppContext } from "../components/Context";
import GetProfile from "../helper/profile";

const Layout = ({ buttons }) => {
  const sideButtons = buttons.map(({ name, icon, path }) => {
    return <SideButton key={name} name={name} icon={icon} path={path} />;
  });

  const context = useContext(AppContext);

  useEffect(() => {
    const profile = GetProfile();
    if (profile != null) {
      context.profile = profile
    } else {
      console.log("error fetching profile");
    }
  }, []);

  return (
    <div className="w-full h-screen flex">
      <SideBar>{sideButtons}</SideBar>
      <section className="bg-gray-300 dark:bg-gray-900 w-full h-screen overflow-auto flex flex-grow flex-shrink flex-wrap content-baseline">
        <Outlet context={context} />
      </section>
    </div>
  );
};

export default Layout;
