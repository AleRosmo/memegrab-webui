import React from "react";
import Label from "../basic/Label";
const inputStyle =
	"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500";

const LabelTextInput = ({
	type,
	name,
	placeholder,
	handleChange,
	autocomplete,
	autofill,
	enabled,
	value,
	children,
}) => {
	return (
		<>
			<Label name={name}>{children}</Label>
			<input
				type={type}
				placeholder={placeholder}
				required=''
				value={value}
				autoComplete={autocomplete}
				autofill={autofill}
				enabled={enabled}
				onChange={(e) => handleChange(e.target.value)}
				className={inputStyle}
			/>
		</>
	);
};

export default LabelTextInput;
