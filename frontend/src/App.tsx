import { Button } from "./components/ui/button"
import { AuthRoutes } from "./routes"


function App() {

  return (
    <>
    <h1>Hello World</h1>
    <Button variant={"secondary"}>Shadcn Button</Button>
    <AuthRoutes/>
    </>
  )
}

export default App
