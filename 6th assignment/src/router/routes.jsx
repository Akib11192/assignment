import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import AddProducts from "../pages/AddProducts";
import CheckAuth from "../components/CheckAuth";
import UnAuth from "../pages/UnAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CheckAuth>
        <App />
      </CheckAuth>
    ),
    children: [
      { index: true, element: <Shop /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/add-product", element: <AddProducts /> },
      { path: "/un-Auth", element: <UnAuth /> },
    ],
  },
]);
