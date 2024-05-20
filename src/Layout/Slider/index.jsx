import { useState, useContext } from "react"
import {
  Outlet,
  useNavigate,
  createSearchParams,
  useHref,
  useMatches,
} from "react-router-dom"
import { RouterContext } from "@/router/routerContext"
import { Layout, Menu, theme, Avatar } from "antd"
const { Sider } = Layout
import styled from "styled-components"

const Logo = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    margin: 0 5px;
  }
`
const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
export default function LayoutSlider() {
  // menu 选中状态
  const [selectedKeys, setSelectedKeys] = useState([])
  // 当前路由
  const pathname = useHref()
  // 展开/收起
  const [collapsed, setCollapsed] = useState(false)
  // 主题
  const [defaultTheme] = useState("light")
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  // menus
  const { menus } = useContext(RouterContext)
  console.log("menus---", menus)
  // 路由导航
  const navigate = useNavigate()
  const handleNav = ({ key }) => {
    const params = { id: "1", grade: "2" }
    key === "/demo/routeparam"
      ? navigate({
          pathname: key,
          search: `?${createSearchParams(params)}`,
        })
      : navigate(key)

    // key === "/demo/routeparam"
    //   ? navigate(key, { state: params })
    //   : navigate(key)
  }
  return (
    <Sider
      theme={defaultTheme}
      style={{
        height: "100vh",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Logo>
        <Avatar src={url} />
        <h3 className="title">统一管理平台</h3>
      </Logo>

      <Menu
        mode="inline"
        theme={defaultTheme}
        items={menus}
        style={{ border: "none" }}
        selectedKeys={selectedKeys}
        defaultSelectedKeys={[pathname]}
        onClick={handleNav}
      />
    </Sider>
  )
}
