import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 替换为你的 API 基础 URL
  timeout: import.meta.env.VITE_APP_TIMEOUT, // 请求超时时间
  headers: {
    "Content-Type": "application/json",
  },
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 可以在此处添加授权令牌或其他配置
    // config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    // 可以在此处统一处理错误
    if (error.response && error.response.status === 401) {
      // 例如重定向到登录页面
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
