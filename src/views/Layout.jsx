import React, { createContext, useContext, useEffect } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { AppContext } from "../components/Context";
import SideButton from "../components/SideBar/ components/SideButton/SideButton";
import SideBar from "../components/SideBar/SideBar";

const contentStyle =
	"bg-gray-300 dark:bg-gray-900 \
  w-full h-screen overflow-auto \
  flex flex-grow flex-shrink flex-wrap \
  content-baseline";

export default function Layout({ buttons }) {
	const context = useContext(AppContext);

	const sideButtons = buttons.map(({ name, icon, path }) => {
		return <SideButton key={name} name={name} icon={icon} path={path} />;
	});

	return (
		<div className='w-full h-screen flex'>
			<SideBar>{sideButtons}</SideBar>
			<section className={contentStyle}>
				<Outlet context={context} />
			</section>
		</div>
	);
}
