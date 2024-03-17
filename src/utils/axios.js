import axios from "axios";

import { HOST_API_KEY } from "../config-global";
// const HOST_API_KEY = "https://localhost:8080";

// 일반적인 http통신을 위한 객체
const axiosInstance = axios.create({
  baseURL: HOST_API_KEY,
});

// 파일전송을 위한 객체
const fileInstance = axios.create({
  baseURL: HOST_API_KEY,
  headers: {
    "Content-type": "muiltipart/form-data",
  },
});

// 요청 인터셉터 객체: 요청이 발송되기 전에 가로채서 요청을 가공한다.
axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 객체: 응답이 도착하기 전에 가로채서 응답에 대응을 .
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export { axiosInstance as axios, fileInstance as fileAxios };
