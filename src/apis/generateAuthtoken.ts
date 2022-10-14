import axios, { AxiosResponse } from "axios"
import APIConfig from "../configs/apiConfig"

const generateAuthToken = (apiKeys: APIKeys): Promise<string | null> =>
	axios
		.request({
			...APIConfig.AuthToken,
			method: "post",
			data: apiKeys,
		})
		.then(
			(res: AxiosResponse<AuthTokenResponse>) =>
				res.data.data?.authToken.token || null
		);

export default generateAuthToken