import { createBrowserRouter } from "react-router";
import App from "../App";
import Contacts from "../pages/Contacts";
import Form from "../pages/Form";

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
    ],
  },
]);

export default router;
