import { Suspense, useState, lazy } from "react"
import { Outlet, useNavigate, useHref } from "react-router-dom"
import styled from "styled-components"
import { Layout, Menu, Button, theme, Spin, Avatar, Result } from "antd"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { useEffect } from "react"

import { useContext } from "react"
import { RouterContext } from "@/router/routerContext"

const { Header, Sider, Content } = Layout

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"

const Logo = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    margin: 0 5px;
  }
`

export default function LayoutMain() {
  // 展开/收起
  const [collapsed, setCollapsed] = useState(false)
  // 主题
  const [defaultTheme] = useState("light")
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const { menus } = useContext(RouterContext)

  // menu 选中状态
  const [selectedKeys, setSelectedKeys] = useState([])
  // 当前路由
  const pathname = useHref()

  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  // 路由导航
  const navigate = useNavigate()
  const handleNav = ({ key }) => navigate(key)

  return (
    <Layout>
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
          {!collapsed && <h3 className="title">统一管理平台</h3>}
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

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
