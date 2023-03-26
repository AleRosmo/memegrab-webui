import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import ContainerTable from "../../components/ContainerTable";
import AuthService from "../../services/auth.service";

export default function Home({ children }) {
	const navigate = useNavigate();
	const ctx = useOutletContext();

	useEffect(() => {
		console.log("Check Auth from Home");
		ctx.setIsLoading(true);
		AuthService.check()
			.then((response) => {
				if (response === true) {
					ctx.setIsLogged(true);
				}
			})
			.catch((response) => {
				navigate("/login");
				console.error(response.data);
			});
		return () => {
			ctx.setIsLoading(false);
			ctx.setIsLogged(false);
		};
	}, []);

	return (
		<>
			<ContainerTable key='test1' title='test1' info={children} />
		</>
	);
}
