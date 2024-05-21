import request from "@/service/request"

/**
 * 参数说明：
 * ? 可选
 * api 地址
 * data? 为对象 {key: value, ...}
 * method? 默认 get
 */
export const fetchUser = (data) => {
  return request("/users", data)
}

export const createUser = (data) => {
  return request("/users", data)
}

export const updateUser = (data) => {
  return request("/users", data)
}

export const deleteUser = (data) => {
  return request("/users", data)
}

export const getList = (data) => {
  return request("/users", data)
}
