import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import AuthService from "../../services/auth.service";

export default function Login() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	// Check if logged in
	useEffect(() => {
		AuthService.validate()
			.then(() => {
				navigate("/");
			})
			.catch((res) => {
				setIsLoggedIn(false);
			});
	}, [navigate]);

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/");
		}
	}, [navigate, isLoggedIn]);
	return (
		<section className='bg-gray-300 dark:bg-gray-900'>
			{!isLoggedIn ? (
				<LoginForm setIsLoggedIn={setIsLoggedIn} />
			) : (
				"Already logged in, readirecting..."
			)}
		</section>
	);
}
