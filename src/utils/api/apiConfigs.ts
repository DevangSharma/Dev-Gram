import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../constants/API";

export const postConfig = (pageNumber: number): AxiosRequestConfig => {
  return {
    method: "GET",
    baseURL: BASE_URL,

    url: "/photos",
    params: {
      client_id: process.env.REACT_APP_CLIENT_ID,
      per_page: 10,
      page: pageNumber,
    },
  };
};

export const userConfig = (username: string): AxiosRequestConfig => {
  return {
    method: "GET",
    baseURL: BASE_URL,
    url: "/users/" + username,
    params: {
      client_id: process.env.REACT_APP_CLIENT_ID,
    },
  };
};

export const userImagesConfig = (
  username: string,
  pageNumber: number
): AxiosRequestConfig => {
  return {
    method: "GET",
    baseURL: BASE_URL,
    url: "/users/" + username + "/photos",

    params: {
      client_id: process.env.REACT_APP_CLIENT_ID,
      per_page: 10,
      page: pageNumber,
    },
  };
};
