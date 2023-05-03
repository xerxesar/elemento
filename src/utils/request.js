import axios from "axios";
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
console.log(process.env);
const BASE_API = process.env.VUE_APP_API_HOST || window.location.origin + "/";
const service = axios.create({
  //  baseURL: process.env.BASE_API, // api 的 base_url
  withCredentials: true,
  baseURL: BASE_API,
  timeout: 15000, // request timeout
});

// request interceptor
// service.interceptors.request.use(
//   config => {
//     Do something before request is sent
//     if (store.getters.token) {
//       让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//       config.headers['Authorization'] = 'Bearer ' + getToken()
//     }
//     return config
//   },
//   error => {
//     Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// // )

// response interceptor
service.interceptors.response.use(
  (response) => response,
  (response) => {
    const data = response.response.data;
    console.log(response);
    if (data.code === 401) {
      location.pathname = "/401";
    } else if (data.code === 403) {
      location.pathname = "/403";
    }
    return response;
  },
  (error) => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
