import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";


const SideBar = (props) => {
    const sidebar = "w-48 h-full gap-1 flex flex-col bg-stone-800"

    return (
        <aside key="sidebar" className={sidebar}>
            {props.children}
        </aside>
    )
}

export default SideBar