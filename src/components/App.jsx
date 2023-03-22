import React, { createContext, useContext, useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { BiHome, BiLogIn } from "react-icons/bi";
import { Route, Routes, useOutletContext } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import AppProvider from "./Context";

const iconStlye = "ml-1 mr-3";

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState();

  
  // TODO: Custom type and dynamic load
  const saved = {
    title: "Saved",
    url: "http://localhost:8080/saved",
    headers: ["ID", "File Name", "Sender ID", "Timestamp"],
  };

  // ! MAKES SENSE TO USE state-pool https://www.npmjs.com/package/state-pool

  let context = {
    isLoading,
    setIsLoading,
    isLogged,
    setIsLogged,
    url: {
      home: "/",
      login: "/login/",
      profile: "/api/profile/",
      auth: "/api/auth/",
    },
    profile: {},
    isLogged: false,
  };

  // !! COMPOUND COMPONENTS
  const buttons = [
    {
      name: "Home",
      path: "/",
      icon: <BiHome key="home" color="white" size="24" className={iconStlye} />,
    },
    {
      name: "Login",
      path: "/login",
      icon: (
        <BiLogIn key="login" color="white" size="24" className={iconStlye} />
      ),
    },
    {
      name: "palle",
      path: "/palle",
      icon: <FaFire key="palle" color="red" size="24" className={iconStlye} />,
    },
  ];

  return (
    <>
      <AppProvider context={context}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout buttons={buttons} />}>
            <Route index element={<Home>{saved}</Home>} />
            <Route path="/palle" element={"empty"} />
          </Route>
        </Routes>
      </AppProvider>
    </>
  );
}
