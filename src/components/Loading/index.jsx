import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { useEffect, useState } from "react"
import { Spin } from "antd"
export default function Loading() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      NProgress.start()
      setVisible(true)
    }, 100)
    return () => {
      NProgress.done()
      window.clearTimeout(timer)
    }
  }, [])
  if (!visible) return null
  return <Spin />
}
