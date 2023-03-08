import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

// const style = "fixed h-screen w-48 m-0 flex flex-col bg-gray-900 shadow-l"

const SideBar = (props) => {

    const navigate = useNavigate()

    const button = props.childButtons.map((button) => {
        return (
        <Button key={button.name} name={button.name} icon={button.icon} onClick={navigate('/test')} />)
    })
    
    return (
        <div key="sidebar" className="
            w-48
            flex flex-col
            bg-stone-800
        ">

            {button}

        </div>
    )
}

export default SideBar