import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { BiHome, BiLogIn } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
import Login from "../pages/Login/Login";

const iconStlye = "ml-1 mr-3";

const App = () => {
  // TODO: Custom type
  const saved = {
    title: "Saved",
    url: "http://localhost:8080/saved",
    headers: ["ID", "File Name", "Sender ID", "Timestamp"],
  };

  const buttons = [
    {
      name: "Home",
      path: "/",
      icon: <BiHome color="white" size="24" className={iconStlye} />,
    },
    {
      name: "Login",
      path: "/login",
      icon: <BiLogIn color="white" size="24" className={iconStlye} />,
    },
    {
      name: "palle",
      path: "/palle",
      icon: <FaFire color="red" size="24" className={iconStlye} />,
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout buttons={buttons} />}>
          <Route index element={<Home>{saved}</Home>} />
          <Route path="/palle" element={"empty"} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
