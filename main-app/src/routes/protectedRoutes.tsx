import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useToken } from "../hooks/useToken";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const { token } = useToken();

  const tokenProtected = ["/"];

  if (tokenProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
    if (!token) {
      const clientId = "oidc-client-id";
      const redirectUri = "http://localhost:5173/login/oauth2/code/oidc-client";
      const responseType = "code";
      const scope = "openid";
      const codeChallengeMethod = "S256";
      const codeChallenge = "ea3rEXbTCcvWGOL2m6J1lT2VWv-sLrnS2i-UeaNENbw";

      const oauth2Url = `http://192.168.90.35:8080/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&code_challenge_method=${codeChallengeMethod}&code_challenge=${codeChallenge}`;

      window.location.href = oauth2Url;
      return null; // Don't render anything while redirecting
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
