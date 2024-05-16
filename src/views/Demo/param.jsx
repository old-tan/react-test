import { useSearchParams, useLocation } from "react-router-dom"
export default function RouteParam() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const grade = searchParams.get("grade")

  // const location = useLocation()
  // const { id, grade } = location.state

  console.log("stateParams---", { id, grade })
  return (
    <>
      <h1>RouteParam</h1>
      <h3>参数列表</h3>
      <ul>
        <li>id: {id}</li>
        <li>grade: {grade}</li>
      </ul>
    </>
  )
}
