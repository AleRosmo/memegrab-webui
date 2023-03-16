import React from "react";
import PropTypes from "prop-types";

const CenterContainer = ({ title, children }) => (
  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:mx-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-200 md:text-2xl dark:text-white">
        {title}
      </h1>
      {children}
    </div>
  </div>
);

CenterContainer.propTypes = {};

CenterContainer.defaultProps = {};

export default CenterContainer;
