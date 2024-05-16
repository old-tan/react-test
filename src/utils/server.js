// 模拟获取路由菜单
export const getMenu = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          path: "/home",
          label: "一级菜单-1",
          filePath: "home/index.jsx",
        },
        {
          path: "/about",
          label: "一级菜单-2",
          filePath: "about/index.jsx",
        },
        {
          path: "/info",
          label: "一级菜单-3",
          filePath: "info/index.jsx",
        },
        {
          path: "/form",
          label: "form 表单",
          filePath: "form/index.jsx",
        },
        {
          path: "/param",
          label: "路由传参",
          filePath: "param/index.jsx",
        },
      ])
    }, 2000)
  })
}
