import { useState, useEffect } from "react"
import { message, Spin, Button } from "antd"
import { getList } from "@/api"
export default function List() {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(0)
  const getUser = async () => {
    try {
      const userData = await getList()
      // console.log(userData)
      setUsers(userData)
    } catch (err) {
      setError(err.message)
      message.error(err.message)
    } finally {
      setLoading(false)
    }
  }
  const handleClick = () => {
    setLoading(true)
    setUsers([])
    let loadCount = count
    setTimeout(() => {
      loadCount++
      setCount(loadCount)
    }, 1000)
  }
  useEffect(() => {
    getUser()
  }, [count])
  return (
    <>
      <h1>List</h1>
      <Button type="primary" onClick={handleClick} loading={loading}>
        刷新数据
      </Button>
      <ul>
        {loading ? (
          <Spin />
        ) : (
          users && users.map((item) => <li key={item.id}>{item.name}</li>)
        )}
      </ul>
    </>
  )
}
