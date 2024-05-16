import { Suspense, useState } from "react"
import {
  Outlet,
  useNavigate,
  createSearchParams,
  useHref,
  useMatches,
} from "react-router-dom"
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
  console.log("menus---", menus)
  // menu 选中状态
  const [selectedKeys, setSelectedKeys] = useState([])
  // 当前路由
  const pathname = useHref()
  // // 获取匹配到的路由
  // const matches = useMatches()

  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

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

  // 路由鉴权
  // 匹配的路由返回的是个数组，默认最后一个就是当前路由。
  // if (
  //   matches.length &&
  //   !menus.some((menu) => matches[matches.length - 1].pathname === menu.path)
  // ) {
  //   return (
  //     <Result
  //       status="403"
  //       title="403"
  //       subTitle="Sorry, you are not authorized to access this page."
  //       extra={<Button type="primary">Back Home</Button>}
  //     />
  //   )
  // }

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
          <Suspense fallback={<Spin />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
