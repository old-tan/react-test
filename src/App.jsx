import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RootRoute from "./router"
// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRoute />
    </QueryClientProvider>
  )
}

export default App
