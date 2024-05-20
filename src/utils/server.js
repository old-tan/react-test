// 模拟获取路由菜单，相当于后台配置
export const getAdminMenu = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          id: "/home",
          key: "/home",
          path: "/home",
          label: "一级菜单-1",
          show: "1",
          default: "1",
          filepath: "Home/index.jsx",
        },
        {
          id: "/about",
          key: "/about",
          path: "/about",
          label: "一级菜单-2",
          show: "1",
          default: "2",
          filepath: "About/index.jsx",
        },
        {
          id: "/info",
          key: "/info",
          path: "/info",
          label: "一级菜单-3",
          show: "1",
          default: "2",
          filepath: "Info/index.jsx",
        },
        {
          id: "/list",
          key: "/list",
          path: "/list",
          label: "列表Demo",
          show: "1",
          default: "2",
          filepath: "List/index.jsx",
        },
        {
          id: "/form",
          key: "/form",
          path: "/form",
          label: "form 表单",
          show: "1",
          default: "2",
          filepath: "Form/index.jsx",
        },
        {
          id: "/param",
          key: "/param",
          path: "/param",
          label: "路由传参",
          show: "1",
          default: "2",
          filepath: "Param/index.jsx",
        },
        {
          id: "/detail",
          key: "/detail",
          path: "/detail",
          label: "路由传参1",
          show: "2",
          default: "2",
          filepath: "Param/detail.jsx",
        },
      ])
    }, 1000)
  })
}

// 获取普通用户菜单
export const getUserMenus = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          key: "/home",
          path: "/home",
          label: "一级菜单-1",
          filePath: "home/index.jsx",
        },
        {
          key: "/about",
          path: "/about",
          label: "一级菜单-2",
          filePath: "about/index.jsx",
        },
      ])
    }, 1000)
  })
}
