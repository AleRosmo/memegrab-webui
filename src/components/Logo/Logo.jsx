import React from "react";

const Logo = ({ size, title }) => {
  if (size === "large") {
      <a
        href="/login"
        className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white"
      >
        <img className="w-8 h-8 mr-2 invert" src="./logo.png" alt="logo" />
        <>{title}</>
      </a>
  }
  return <img src="./logo.png" alt="Logo" className="max-h-16" />;
};

export default Logo;
