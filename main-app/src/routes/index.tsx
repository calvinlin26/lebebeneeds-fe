import Layout from "../components/layout";
import OAuth2Callback from "../features/authentication/auth-callback";
import ProtectedRoutes from "./protectedRoutes";
import UserManagement from "../features/user-management";
//General Routes
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
            element: <UserManagement />,
          },
        ],
      },
    ],
  },
]);
