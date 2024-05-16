import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { lazy, useEffect, useState } from "react"
import { getMenu } from "@/utils/server"
import { RouterContext } from "@/router/routerContext"
import { Spin } from "antd"

const Login = lazy(() => import("@/views/login"))
const LayoutMain = lazy(() => import("@/Layout"))
const NotFound = lazy(() => import("@/NotFound"))

// const Home = lazy(() => import("@/views/Home"))

const modules = import.meta.glob("@/views/*/index.jsx")
const components = Object.keys(modules).reduce((prev, cur) => {
  prev[cur.replace("@/views", "")] = modules[cur]
  return prev
}, {})

console.log("modules---", modules)

const routes = [
  // {
  //   path: "/login",
  //   Component: Login,
  // },
  // {
  //   path: "/",
  //   element: <Navigate to="/login" />,
  // },
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
      //   Component: Home,
      // },
      // {
      //   path: "/about",
      //   Component: About,
      // },
      // {
      //   path: "/info",
      //   Component: Info,
      // },
      // {
      //   path: "/demo",
      //   Component: "",
      //   children: [
      //     {
      //       path: "/demo/form",
      //       Component: DemoForm,
      //     },
      //     {
      //       path: "/demo/routeparam",
      //       Component: RouteParam,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]
const router = createBrowserRouter(routes)
export default function RootRoute() {
  // 菜单
  const [menus, setMenus] = useState([])
  // loading
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMenu().then((menus) => {
      setMenus(menus)
      setLoading(false)
    })

    // 获取菜单后动态添加路由
    router.routes[0].children = menus.map((menu) => {
      const { path, label, filePath } = menu
      return {
        path,
        label,
        Component: lazy(components[filePath]),
      }
    })
  }, [])
  // loading
  if (loading) return <Spin />
  return (
    <RouterContext.Provider value={{ menus }}>
      <RouterProvider router={router} />
    </RouterContext.Provider>
  )
}
