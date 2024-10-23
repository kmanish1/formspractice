import { Outlet, createBrowserRouter } from "react-router-dom"
import Form from "./components/Form"
import Restaurant from "./components/Restaurant"
import Navbar from "./components/Navbar"
import Shimmer from "./components/Shimmer"
import { Suspense, lazy } from "react"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
// import RestaurantCard from "./components/RestaurantCard"
const RestaurantCard = lazy(() => import("./components/RestaurantCard"));

function App() {
  return (
    <Provider store={appStore}>
      <>
        <Navbar />
        <Outlet />
      </>
    </Provider>
  );
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
        element: (
          <Suspense>
            <RestaurantCard />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App
