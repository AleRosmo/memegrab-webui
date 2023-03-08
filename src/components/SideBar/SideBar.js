import React from "react";
import Button from "../Button/Button";
import { FaFire } from "react-icons/fa"

const SideBar = (props) => {

    const button = props.childButtons.map((name) => {
        return (<Button key={name} name={name} />)
    })
    
    return (
        // <div key="sidebar" className={props.classes}>
        <div key="sidebar" className="fixed top-0 h-screen w-48 m-0 
                                        flex flex-col bg-gray-800 shadow-lg">
            {/* <Logo /> */}
            {button}
            <SideBarIcon icon={<FaFire color="white" size="48" />} />
        </div>
    )
}

//({icon}) the {} brackets are for input props
const SideBarIcon = ({icon}) => (
    <div>
        {icon}
    </div>
)

export default SideBar