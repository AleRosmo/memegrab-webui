import React from "react";

const Button = (props) => {
    return (
        <button className="text-white">
            {props.name}
        </button>
    )
}

export default Button