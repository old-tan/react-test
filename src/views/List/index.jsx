import { useState, useEffect } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { message, Spin, Button } from "antd"
import { getList } from "@/api"
export default function List() {
  const queryClient = useQueryClient()
  // 1. query 请求方式-----
  const paramData = { id: 1 }
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["todo"],
    // queryFn: getList,
    queryFn: () => getList(),
  })
  console.log(data)
  // const handleRefetch = async () => {
  //   queryClient.invalidateQueries("todo")
  // }

  if (isLoading) return <Spin />
  if (error) return <div>Error: {error.message}</div>

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
      <Button type="primary" onClick={refetch}>
        Refetch Data
      </Button>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {item.name}
              {/* <Button type="primary">add</Button>
              <Button type="dashed">edit</Button>
              <Button type="primary" danger>
                del
              </Button> */}
            </li>
          ))}
      </ul>
    </>
  )
}
