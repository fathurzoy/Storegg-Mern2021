import axios from "axios";
import callApi from "../config/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;

const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  // const URL = "auth/signup";

  // const response = await axios
  //   .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
  //   .catch((err) => err.response);
  // // console.log("api resp: ", response);
  // const axiosResponse = response.data;
  // if (axiosResponse?.error === 1) {
  //   return axiosResponse;
  // }

  // return axiosResponse.data;

  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callApi({
    url: url,
    method: "POST",
    data: data,
  });
}

export async function setLogin(data: LoginTypes) {
  // const URL = "auth/signin";

  // const response = await axios
  //   .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
  //   .catch((err) => err.response);
  // // console.log("api resp: ", response);

  // if (response.status > 300) {
  //   const res = {
  //     error: true,
  //     message: response.data.message,
  //     data: null,
  //   };
  //   return res;
  // }

  // const res = {
  //   error: false,
  //   message: "success",
  //   data: response.data.data,
  // };
  // return res;

  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callApi({ url: url, method: "POST", data: data });
}
