import React from "react";

const style = 
"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg \
focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 \
dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"

const TextInput = ({type, name, id, placeholder}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={style}
      placeholder={placeholder}
      required=""
    />
  );
};

export default TextInput;
