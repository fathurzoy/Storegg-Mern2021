import axios, { AxiosRequestConfig } from "axios";

export default async function callApi({
  url,
  method,
  data,
}: AxiosRequestConfig) {
  const response = await axios({ url: url, method: method, data }).catch(
    (err) => err.response
  );
  // console.log("api resp: ", response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };
  return res;
}