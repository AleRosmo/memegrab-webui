import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const active = "bg-gray-500";
const inactive = "bg-gray-700";

const style = `flex ml-2 py-1.5 text-white rounded-l-md \
                hover:bg-gray-400 hover:duration-250 hover:transition \
                ease-in-out duration-250`;

const SideButton = ({ path, icon, name }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        const bg = isActive ? active : inactive;
        return [style, bg].join(" ");
      }}
    >
      <span className="ml-0.5">{icon}</span>

      <span className="flex-grow">{name}</span>
    </NavLink>
  );
};
export default SideButton;
