import { Outlet, createBrowserRouter } from "react-router-dom"
import Form from "./components/Form"
import Restaurant from "./components/Restaurant"
import Navbar from "./components/Navbar"
import Shimmer from "./components/Shimmer"
import RestaurantCard from "./components/RestaurantCard"

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurant />,
      },
      {
        path: "/about",
        element: <Form />,
      },
      {
        path: "/contact",
        element: <Shimmer />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantCard/>,
      },
    ],
  },
]);

export default App
