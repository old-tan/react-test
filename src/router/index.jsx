import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { lazy, useEffect, useState } from "react"
import { getAdminMenu } from "@/utils/server"
import { RouterContext } from "@/router/routerContext"
import { Spin } from "antd"

const Login = lazy(() => import("@/views/login"))
const LayoutMain = lazy(() => import("@/Layout"))
const NotFound = lazy(() => import("@/views/notfound"))
import Loading from "@/components/Loading"

const modules = import.meta.glob("@/views/*/*.jsx")
const components = Object.keys(modules).reduce((prev, cur) => {
  prev[cur.replace("@/views", "")] = modules[cur]
  return prev
}, {})
const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutMain,
    children: [
      // {
      //   path: "/",
      //   element: <Navigate to="/home" />,
      // },
      // {
      //   path: "/home",
      //   label: "一级菜单-1",
      //   Component: lazy(() => import("@/views/Home")),
      // },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
])
export default function RootRoute() {
  const [menus, setMenus] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAdminMenu().then((adminMenus) => {
      setMenus(adminMenus.filter((item) => item.show === "1"))
      setLoading(false)

      // 获取菜单后动态添加路由
      router.routes[0].children = adminMenus.map((menu) => {
        const { filepath } = menu
        const lazyImportPath = `/src/views/${filepath}`

        return {
          ...menu,
          Component: lazy(components[lazyImportPath]),
        }
      })

      // 默认路由
      router.routes[0].children = [
        ...router.routes[0].children,
        {
          id: "home",
          path: "/",
          element: <Navigate to="/home" />,
        },
      ]
    })
  }, [])
  // loading
  if (loading) return <Loading />
  return (
    <RouterContext.Provider value={{ menus }}>
      <RouterProvider router={router} />
    </RouterContext.Provider>
  )
}
