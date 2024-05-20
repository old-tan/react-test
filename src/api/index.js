import request from "@/service/request"

/**
 * 默认 get 请求
 * data 为对象 {key: value}
 */
export const fetchUser = (data) => {
  return request("get", "/users", data)
}

export const createUser = (data) => {
  return request("post", "/users", data)
}

export const updateUser = (data) => {
  return request("put", "/users", data)
}

export const deleteUser = (data) => {
  return request("delete", "/users", data)
}

export const getList = (data) => {
  console.log("data---", data)
  return request("get", "/users", data)
}
