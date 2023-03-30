import React, { useContext, useState } from "react";
import CenterContainer from "../basic/CenterContainer";
import LabelTextInput from "../../components/LabelTextInput";
import LoginButton from "../../components/LoginForm/LoginButton/LoginButton";
import LoginError from "../../components/LoginForm/LoginError";
import LoginRemember from "../../components/LoginForm/LoginRemember/LoginRemember";
import Logo from "../basic/Logo";
import AuthService from "../../services/auth.service";
import { AppContext } from "../Context";

export default function LoginForm({ setIsLoggedIn }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [isError, setIsError] = useState();
	// const [isInvalid, setIsInvalid] = useState();

	const ctx = useContext(AppContext);

	const handleLogin = () => {
		console.log("Handling Login");
		ctx.setIsLoading(true);

		AuthService.login(email, password)
			.then((response) => {
				console.log(response.data);
				setIsLoggedIn(true);
			})
			.catch((error) => {
				const responseMessage =
					(error.response ** error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();
				console.log(responseMessage);
				setIsError(true);
			});
	};

	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
			<Logo key='logo' size='large' title='Test' />
			<CenterContainer title={"Sign in"}>
				<div className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
					<LabelTextInput
						key='email'
						type='email'
						name='email'
						placeholder='your@email.com'
						handleChange={setEmail}
						autocomplete='false'
						autofill='false'
						enabled='true'>
						{"Your email"}
					</LabelTextInput>
					<LabelTextInput
						key='password'
						type='password'
						name='password'
						placeholder='••••••••'
						handleChange={setPassword}
						autocomplete='false'
						autofill='false'
						enabled='true'>
						{"Your password"}
					</LabelTextInput>
					<div className='flex items-center justify-between'>
						<LoginRemember />
						<a
							href='/forgot'
							className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'>
							{"Forgot Password?"}
						</a>
					</div>
					<LoginButton click={handleLogin} />
					<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
						{"Don’t have an account yet?"}
						<a
							href={`/register?email=${email}`}
							className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
							{"Sign up"}
						</a>
					</p>
				</div>
				{!isError ? null : <LoginError text='Invalid credentials.' />}
				{/* {!isInvalid ? null : <LoginError text='Please log in again.' />} */}
			</CenterContainer>
		</div>
	);
}
