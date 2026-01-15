import { createBrowserRouter } from "react-router";
import App from "../App";
import Contacts from "../pages/Contacts";
import Form from "../pages/Form";
import Show from "../pages/Show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Contacts />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/show",
        element: <Show />,
      },
    ],
  },
]);

export default router;
