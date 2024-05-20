import { useNavigate, createSearchParams } from "react-router-dom"
import { Button } from "antd"

export default function Param() {
  const navigate = useNavigate("/detail")
  const params = { id: "1", grade: "2" }
  const handleClick = () => {
    navigate({
      pathname: "/detail",
      search: `?${createSearchParams(params)}`,
    })
  }

  return (
    <div>
      <h1>Param</h1>
      <Button onClick={handleClick}>go detail</Button>
    </div>
  )
}
