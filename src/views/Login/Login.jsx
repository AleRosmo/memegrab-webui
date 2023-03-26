import axios, { formToJSON } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../components/Context";

import CenterContainer from "../../components/CenterContainer";
import LabelTextInput from "../../components/LabelTextInput";
import LoginButton from "../../components/LoginForm/LoginButton/LoginButton";
import LoginRemember from "../../components/LoginForm/LoginRemember/LoginRemember";

import LoginError from "../../components/LoginForm/LoginError";
import Logo from "../../components/Logo/Logo";
import AuthService from "../../services/auth.service";

export default function Login() {
	const context = useContext(AppContext);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [isError, setIsError] = useState();
	const [isInvalid, setIsInvalid] = useState();

	const ctx = useContext(AppContext);
	const navigate = useNavigate();

	// Check if logged in
	useEffect(() => {
		console.log("Check Auth from Login");
		ctx.setIsLoading(true);
		AuthService.check()
			.then((response) => {
				if (response === true) {
					ctx.setIsLogged(true);
					navigate("/");
					window.location.reload();
				}
			})
			.catch((response) => {
				console.error(response.data);
			});
	}, []);

	// Handle login
	const handleLogin = (e) => {
		console.log("Handling Login");
		e.preventDefault();
		ctx.setIsLoading(true);
		const form = formToJSON(e.target);
		AuthService.login(form)
			.then((response) => {
				console.log(response.data);
				navigate("/");
				window.location.reload();
			})
			.catch((error) => {
				const responseMessage =
					(error.response ** error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();
				console.log(responseMessage);
				ctx.setIsError(true);
			});
	};

	return (
		<section className='bg-gray-300 dark:bg-gray-900'>
			{!ctx.isLogged ? (
				<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
					<Logo key='logo' size='large' title='Test' />
					<CenterContainer title={"Sign in"}>
						<form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
							<LabelTextInput
								name='email'
								id='email'
								type='email'
								placeholder='your@email.com'
								onChange={setEmail}>
								Your email{" "}
							</LabelTextInput>
							<LabelTextInput
								name='password'
								id='password'
								type='password'
								placeholder='••••••••'
								onChange={setPassword}>
								{" "}
								Your password{" "}
							</LabelTextInput>
							<div className='flex items-center justify-between'>
								<LoginRemember />
								<a
									href='#'
									className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'>
									Forgot Password?
								</a>
							</div>
							<LoginButton />
							<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
								Don’t have an account yet?{" "}
								<a
									href='#'
									className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
									Sign up
								</a>
							</p>
						</form>
						{!ctx.isError ? null : <LoginError text='Invalid credentials.' />}
						{!ctx.isInvalid ? null : <LoginError text='Please log in again.' />}
					</CenterContainer>
				</div>
			) : (
				"Already logged in, readirecting..."
			)}
		</section>
	);
}
