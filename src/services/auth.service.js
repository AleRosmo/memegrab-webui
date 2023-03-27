import axios from "axios";

const API_URL = "/auth";

const login = async (email, password) => {
	const response = await axios.post(
		API_URL + "/signin",
		{ email, password },
		{
			withCredentials: true,
		}
	);
	if (response.data.username) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

const check = async () => {
	const response = await axios.get(API_URL, {
		withCredentials: true,
	});
	if (response.status === 200) {
		return true;
	}
	return false;
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
	login,
	check,
	getCurrentUser,
};

export default AuthService;
