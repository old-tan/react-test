// 定制化 queryClient ｜ 【可以直接选择使用 react-query 中的 queryClient】
import { QueryClient } from "@tanstack/react-query"
import request from "./request"

const defaultQueryFn = ({ queryKey }) => {
  if (queryKey.length <= 2) {
    const [api, params] = queryKey
    const res = request(api, params)
    return res
  }
  throw Error("queryKey struct is not supported!")
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
})

export default queryClient
