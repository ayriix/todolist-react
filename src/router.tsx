import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";
import { MainPage } from "./pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/list",
        element: <ViewList />,
      },
      {
        path: "/list/:id",
        element: <ViewListItem />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
