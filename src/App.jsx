import { createBrowserRouter } from "react-router-dom"
import Form from "./components/Form"
import Restaurant from "./components/Restaurant"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Restaurant/>
    </>
  )
}
export const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<Navbar/>
  }
])

export default App
