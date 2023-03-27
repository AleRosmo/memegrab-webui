import React from "react";
import AuthService from "../services/auth.service";

export default useLogin = ({ email, password }) => {
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
			ctx.setIsError(true);
		});
};
