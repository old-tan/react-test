import axiosInstance from "./axiosInstance"

// 通用请求函数
const request = async (url, params, method = "GET") => {
  const config = {
    url,
    method,
  }
  method.toLowerCase() === "get"
    ? (config.params = params) // GET 请求的参数放在 params 中
    : (config.data = params) // POST、PUT、DELETE 请求的参数放在 data 中

  try {
    const response = await axiosInstance(config)
    return response.data
  } catch (error) {
    throw error
  }
}

export default request
