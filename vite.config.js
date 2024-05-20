import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  // console.log("env---", env.VITE_APP_BASE_API)
  // console.log("mode---", mode)
  return {
    plugins: [react(), svgr()],
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          // eg: localhost:3000/dev-api/user/me -> http://xxx.com/user/me
          rewrite: (path) => {
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), "")
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
