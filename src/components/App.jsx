import React, { useState } from "react";
import { BiHome, BiLogIn } from "react-icons/bi";
import { ImHammer2 } from "react-icons/im";
import { Route, Routes } from "react-router-dom";
import ContentMod from "../views/ContentMod/ContentMod";
import Home from "../views/Home/Home";
import Layout from "../views/Layout";
import Login from "../views/Login/Login";
import AppProvider from "./Context";

const iconStlye = "ml-1 mr-3";

export default function App() {
	const [isLoading, setIsLoading] = useState(false);

	// TODO: Custom type and dynamic load
	const saved = {
		title: "Saved",
		url: "/saved",
		headers: ["ID", "File Name", "Sender ID", "Timestamp"],
	};

	// ! MAKES SENSE TO USE state-pool https://www.npmjs.com/package/state-pool

	let context = {
		isLoading,
		setIsLoading,
		url: {
			home: "/",
			login: "/login/",
			profile: "/api/profile/",
			auth: "/api/auth/",
		},
		isLogged: false,
	};

	// !! COMPOUND COMPONENTS
	const buttons = [
		{
			name: "Home",
			path: "/",
			icon: <BiHome key='home' color='white' size='24' className={iconStlye} />,
		},
		{
			name: "Login",
			path: "/login",
			icon: (
				<BiLogIn key='login' color='white' size='24' className={iconStlye} />
			),
		},
		{
			name: "Content Mod",
			path: "/contentmod",
			icon: (
				<ImHammer2
					key='contentMod'
					color='white'
					size='22'
					className={iconStlye}
				/>
			),
		},
	];

	return (
		<>
			<AppProvider context={context}>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Layout buttons={buttons} />}>
						<Route index element={<Home>{saved}</Home>} />
						<Route path='/contentmod' element={<ContentMod info={saved} />} />
					</Route>
				</Routes>
			</AppProvider>
		</>
	);
}
