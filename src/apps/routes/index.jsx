import { createBrowserRouter } from "react-router-dom";
import { commonPage, errogPage, privatePage } from "../pages";
import RequireAuth from "../middleware/RequireAuth";
import Layout from "../components/layout";

const privateRoute = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: privatePage.Home,
      },
      {
        path: "archive",
        element: privatePage.archive,
      },
      {
        path: "add-note",
        element: privatePage.addNote,
      },
      {
        path: "detail-note/:id",
        element: privatePage.detailNote,
      },
      {
        path: "/not-found-note",
        element: errogPage.NotFoundNote,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: commonPage.Login,
  },
  {
    path: "/register",
    element: commonPage.Register,
  },
  {
    path: "/",
    element: <RequireAuth redirectPath="/" />,
    children: privateRoute,
  },
  {
    path: "/*",
    element: errogPage.NotFound,
  },
]);

export default router;
