import Dashboard from "../features/dashboard";
import Layout from "../components/layout";
import OAuth2Callback from "../features/authentication/auth-callback";
import ProtectedRoutes from "./protectedRoutes";
import UserManagement from "../features/user-management";
import BussinessParam from "../features/bussiness-param"
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <OAuth2Callback />,
    path: "/login/oauth2/code/oidc-client",
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/user-management",
            element: <UserManagement />,
          },
          {
            path: "/bussiness-param",
            element: <BussinessParam />
          }
        ],
      },
    ],
  },
]);
