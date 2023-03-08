import React from "react";
import { Link } from "react-router-dom";

const style = "text-white"

const Button = (props) => {

    return (
        <div>

            <button className="
            w-full
            ml-2 p-1 my-0.5
            rounded-l-md
            text-white  bg-gray-700
            flex items-center justify-center gap-2

            hover:bg-gray-500 hover:duration-250 
            hover:transition ease-in-out duration-250">

                <span className="place-content-center">
                    {props.icon}
                </span>
                
                <Link to={props.link}>{props.name}</Link>
                
            </button>
        </div>
        // <button className={style}>



    )
}

export default Button