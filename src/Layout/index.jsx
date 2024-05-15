import { Suspense, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Layout, Menu, Button, theme, Spin, Avatar } from "antd"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout
const items = [
  {
    key: "/home",
    icon: <UserOutlined />,
    label: "一级菜单-1",
  },
  {
    key: "/about",
    icon: <VideoCameraOutlined />,
    label: "一级菜单-2",
  },
  {
    key: "/info",
    icon: <UploadOutlined />,
    label: "一级菜单-3",
  },
]
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
  const [defaultTheme, setDefaultTheme] = useState("light")
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  // 路由导航
  const navigate = useNavigate()
  const handleNav = ({ key }) => {
    navigate(key)
  }
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
          <h3 className="title">统一管理平台</h3>
        </Logo>

        <Menu
          mode="inline"
          theme={defaultTheme}
          items={items}
          style={{ border: "none" }}
          defaultSelectedKeys={["/home"]}
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
          <Suspense fallback={<Spin />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
