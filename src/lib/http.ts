import Axios from "axios"

export const http = Axios.create({
	baseURL: "http://localhost:3000",
	withCredentials: true,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})