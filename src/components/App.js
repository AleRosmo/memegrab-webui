import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";

const App = () => {
  const buttons = [
    {
      name: "test",
      path: "/test",
      icon: <FaFire color="white" size="24" />,
    },
    {
      name: "test2",
      path: "/",
      icon: <FaFire color="orange" size="24" />,
    },
    {
      name: "palle",
      path: "/palle",
      icon: <FaFire color="red" size="24" />,
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout buttons={buttons} />}>
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/palle" element={'empty'} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
