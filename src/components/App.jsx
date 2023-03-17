import React, { createContext, useContext, useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { BiHome, BiLogIn } from "react-icons/bi";
import { Route, Routes, useOutletContext } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import AppProvider, { AppContext } from "./Context";

const iconStlye = "ml-1 mr-3";

export default function App() {
  // TODO: Custom type
  const saved = {
    title: "Saved",
    url: "http://localhost:8080/saved",
    headers: ["ID", "File Name", "Sender ID", "Timestamp"],
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
      <AppProvider>
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
