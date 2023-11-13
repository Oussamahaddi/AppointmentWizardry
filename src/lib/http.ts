import Axios from "axios"

export const http = Axios.create({
	withCredentials: true,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})