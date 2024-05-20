import axiosInstance from "./axiosInstance"

// 通用请求函数
const request = async (method = "GET", url, patamsData = {}) => {
  const config = {
    method,
    url,
  }
  if (method.toLowerCase() === "get") {
    config.params = patamsData // GET 请求的参数放在 params 中
  } else {
    config.data = patamsData // POST、PUT、DELETE 请求的参数放在 data 中
  }
  try {
    const response = await axiosInstance(config)
    return response.data
  } catch (error) {
    throw error
  }
}

export default request
