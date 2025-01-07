import { Outlet, useLocation } from "react-router-dom";

import { handleOAuthRedirect } from "../lib/utils";
import { useEffect } from "react";
import { useToken } from "../hooks/useToken";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const { token } = useToken();

  const tokenProtected = [
    "/",
    "/user-management",
    "/role-management",
    "/notification",
  ];

  useEffect(() => {
    const checkAuth = async () => {
      if (tokenProtected.includes(pathname)) {
        if (!token) {
          await handleOAuthRedirect();
        }
      }
    };

    checkAuth();
  }, [pathname]);

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return null;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
