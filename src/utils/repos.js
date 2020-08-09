import axios from "axios";

const getRepos = async () => {
	try {
		let { data } = await axios({
			url: "/api/repos",
			method: "GET"
		});
		return data;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default getRepos;
