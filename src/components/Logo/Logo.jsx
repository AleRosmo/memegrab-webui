import React from "react";

const Logo = ({ size, title }) => {
  if (size === "large") {
    return (
      <a
        href="/login"
        className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white"
      >
        <img className="w-32 h-32 mr-2 invert" src="./logo.png" alt="logo" />
        {title}
      </a>
    );
  }
  return <img src="./logo.png" alt="Logo" className="max-h-16" />;
};

export default Logo;
