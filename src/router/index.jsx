import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { lazy } from "react"

const LayoutMain = lazy(() => import("@/Layout"))
const NotFound = lazy(() => import("@/NotFound"))
const Login = lazy(() => import("@/views/Login"))
const Home = lazy(() => import("@/views/Home"))
const About = lazy(() => import("@/views/About"))
const Info = lazy(() => import("@/views/Info"))
const Demo = lazy(() => import("@/views/Demo"))
const DemoForm = lazy(() => import("@/views/Demo/Form"))

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/demo",
        element: "",
        children: [
          {
            path: "/demo/form",
            element: <DemoForm />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]
const router = createBrowserRouter(routes)
export default function RootRoute() {
  return <RouterProvider router={router} />
}
