import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import PageHome from "./pages/PageHome";
import PageMovie from "./pages/PageMovie";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";
import PageProfile from "./pages/PageProfile";
import PageError from "./pages/PageError";
import ProtectedRoute from "./context/auth/ProtectedRoute";

const routes = [
  { path: "*", element: <Root /> },
  { path: "/login", element: <PageLogin />, index: true },
  { path: "/register", element: <PageRegister /> },

  {
    element: <ProtectedRoute />,
    errorElement: <PageError />,
    children: [
      { path: "/", element: <PageHome /> },
      { path: "/register", element: <PageRegister /> },
      { path: "/movies", element: <PageHome /> },
      { path: "/movies/:id", element: <PageMovie /> },
      { path: "/profile", element: <PageProfile /> },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
