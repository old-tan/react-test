import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { message, Spin, Button } from "antd"
import { getList } from "@/api"
export default function List() {
  // 1. query 请求方式-----
  // Queries
  const paramData = { id: 1 }
  const query = useQuery({
    queryKey: ["todo"],
    queryFn: () => getList(),
  })
  const { isLoading, data, status } = query
  console.log(query)
  console.log(data)

  // 2. 普通请求方式-----
  // const [data, setData] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)
  // const [count, setCount] = useState(0)
  // const getUser = async () => {
  //   try {
  //     const userData = await getList()
  //     // console.log(userData)
  //     setData(userData)
  //   } catch (err) {
  //     setError(err.message)
  //     message.error(err.message)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }
  // const handleClick = () => {
  //   setIsLoading(true)
  //   setData([])
  //   let loadCount = count
  //   setTimeout(() => {
  //     loadCount++
  //     setCount(loadCount)
  //   }, 1000)
  // }
  // useEffect(() => {
  //   getUser()
  // }, [count])
  return (
    <>
      <h1>List</h1>
      <Button type="primary">刷新数据</Button>
      <ul>
        {isLoading ? (
          <Spin />
        ) : (
          data && data.map((item) => <li key={item.id}>{item.name}</li>)
        )}
      </ul>
    </>
  )
}
