import React from "react";

const style = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

const Label = ({ name, children }) => {
  return (
    <label htmlFor={name} className={style}>
      {children}
    </label>
  );
};

export default Label;
