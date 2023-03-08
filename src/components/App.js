import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import { FaFire } from "react-icons/fa"
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";


const App = () => {


    const buttons = [
        {
            name: 'test',
            link: '/test',
            icon: <FaFire color="white" size="24" />,
        }]

    return (
        <>
            <Layout childButtons={buttons}/>
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </>
    )
}

export default App