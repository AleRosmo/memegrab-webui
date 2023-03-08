import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "./Button/Button";

// const style = "fixed h-screen w-48 m-0 flex flex-col bg-gray-900 shadow-l"

const Layout = (props) => {


    const SideBar = () => {
        const button = props.childButtons.map((button) => {
            return (
                <Button key={button.name} name={button.name} link={button.link} icon={button.icon} />)
        })

        return (
            <div key="sidebar" className="
            w-48
            flex flex-col
            bg-stone-800 ">
                {button}
            </div>
        )
    }

    return (
        <>
            <SideBar />
            {/* <Outlet /> */}
        </>
    )
}

export default Layout