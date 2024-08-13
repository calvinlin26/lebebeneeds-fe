import { createBrowserRouter } from "react-router-dom";
import Layout from "../features/components";

import Dashboard from "../features/dashboard";
import { listComponent, listComponentBackend, listComponentMobile } from "../lib/staticData";

export const router = createBrowserRouter([
  {
    // element: <ProtectedRoutes />,
    // children: [
    //   {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      ...listComponent,
      ...listComponentBackend,
      ...listComponentMobile,
    ],
    // },
    // ],
  },
]);
