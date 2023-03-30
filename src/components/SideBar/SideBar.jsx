import React from "react";
import Logo from "../basic/Logo";
import ProfileBox from "../ProfileBox";

const SideBar = ({ children }) => {
	const sidebar = "flex-shrink-0 w-48 h-full gap-1 flex flex-col bg-stone-800";

	return (
		<aside key='sidebar' className={sidebar}>
			<Logo size='small' />
			{/* // TODO: Single component hr */}
			<hr className='my-2 mx-3border-gray-300' />
			{children}
			<div className='mb-auto' />
			<ProfileBox profile={localStorage.getItem("user")} />
		</aside>
	);
};

export default SideBar;
