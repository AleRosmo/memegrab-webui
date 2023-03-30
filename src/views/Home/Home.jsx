import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContainerTable from "../../components/ContainerTable";
import AuthService from "../../services/auth.service";

export default function Home({ children }) {
	const navigate = useNavigate();

	// Check if logged in
	useEffect(() => {
		AuthService.validate().catch(() => {
			navigate("/login");
		});
	}, [navigate]);
	return <ContainerTable info={children} />;
}
