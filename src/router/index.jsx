import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { lazy } from "react"

const LayoutMain = lazy(() => import("@/Layout"))
const NotFound = lazy(() => import("@/NotFound"))

const routes = [
  {
    path: "/",
    Component: LayoutMain,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        Component: lazy(() => import("@/views/Home")),
      },
      {
        path: "/about",
        Component: lazy(() => import("@/views/About")),
      },
      {
        path: "/info",
        Component: lazy(() => import("@/views/Info")),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]
const router = createBrowserRouter(routes)
export default function RootRoute() {
  return <RouterProvider router={router} />
}
