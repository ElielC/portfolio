import axios, { AxiosInstance } from "axios"
import { getCookie } from "cookies-next"

const apiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  validateStatus: () => true
})

export const uninterceptedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  validateStatus: () => true
})

apiAxios.interceptors.request.use(
  function (config) {
    const token = getCookie("@doctor-web:token")
    config.headers.Authorization = "Bearer " + token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
apiAxios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export const api = apiAxios

export const nextBackendApi = (host = ""): AxiosInstance =>
  axios.create({
    baseURL: `${host}/api/backend`
  })
