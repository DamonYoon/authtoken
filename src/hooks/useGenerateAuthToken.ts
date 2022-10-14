import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import generateAuthToken from "../apis/generateAuthtoken";
import Keys from "../states/keys";

const useGenerateAuthToken = (apiKeys: APIKeys) => useMutation(
  [Keys.ASYNC_GENERATE_AUTH_TOKEN],
  () => generateAuthToken(apiKeys),
  {
    retry: false,
    onSuccess: () => {
      alert("Created new auth token successfully!");
    },
    onError: (error: AxiosError<AxiosErrorData>) => {
      alert(
        `Creating auth token failed\n${error.message}\n${error.response?.data.message}`
      );
    },
  }
)

export default useGenerateAuthToken