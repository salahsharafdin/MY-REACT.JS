import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
        <ContactPage />
      </>
    ),
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
    {
        path: "/contactpage",
        element: <ContactPage />
    },
]);

export default router;