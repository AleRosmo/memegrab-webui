import axios from "axios";

const review = (id, approved) => {
	axios
		.post("/mod/review", null, {
			withCredentials: true,
			params: { id, approved },
		})
		.then((response) => {
			console.log(response.status);
			return true;
		})
		.catch((error) => {
			console.log(error.status);
			return false;
		});
};

const ModService = {
	review,
};

export default ModService;
