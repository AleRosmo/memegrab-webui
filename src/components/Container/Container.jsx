import PropTypes from "prop-types";
import React from "react";

const Container = ({ title, children }) => (
	<div className='mx-4 mt-4 grow bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
		<div className='p-6 space-y-4 sm:p-8'>
			<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
				{title}
			</h1>
			{children}
		</div>
	</div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
