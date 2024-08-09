import BussinessParam from "../features/bussiness-param";
import Dashboard from "../features/dashboard";
import Layout from "../components/layout";
import Notification from "../features/notification";
import OAuth2Callback from "../features/authentication/auth-callback";
import ProtectedRoutes from "./protectedRoutes";
import RoleManagement from "../features/role-management";
import UserManagement from "../features/user-management";
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
            path: "/roles-management",
            element: <RoleManagement />,
          },
          {
            path: "/bussiness-params",
            element: <BussinessParam />,
          },
          {
            path: "/notification",
            element: <Notification />,
          },
        ],
      },
    ],
  },
]);
