import React from "react";
import Logo from "../Logo/Logo";

const SideBar = ({ children }) => {
  const sidebar =
    "flex-shrink-0 w-48 h-full \
    gap-1 flex flex-col bg-stone-800";

  return (
    <aside key="sidebar" className={sidebar}>
      <Logo size="small" />
      // TODO: Single component hr
      <hr className="my-2 mx-3 border-gray-300" />
      {children}
    </aside>
  );
};

export default SideBar;
