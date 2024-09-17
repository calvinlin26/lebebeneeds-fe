import { Outlet, useLocation } from "react-router-dom";

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

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      // const url = import.meta.env.VITE_BASE_URL;
      // const endpoint = import.meta.env.VITE_ENDPOINT_OAUTH;
      // const clientId = import.meta.env.VITE_CLIENT_ID;
      // const redirectUri = import.meta.env.VITE_REDIRECT_URI;
      // const responseType = import.meta.env.VITE_REPONSE_TYPE;
      // const scope = import.meta.env.VITE_SCOPE;
      // const codeChallengeMethod = import.meta.env.VITE_CODE_CHALLENGE_METHOD;
      // const codeChallenge = import.meta.env.VITE_CODE_CHALLENGE;
      const url = (window as any).__RUNTIME_CONFIG__.REACT_APP_BASE_URL
      const endpoint = (window as any).__RUNTIME_CONFIG__.REACT_APP_ENDPOINT_OAUTH
      const clientId = (window as any).__RUNTIME_CONFIG__.REACT_APP_CLIENT_ID
      const redirectUri = (window as any).__RUNTIME_CONFIG__.REACT_APP_REDIRECT_URI
      const responseType = (window as any).__RUNTIME_CONFIG__.REACT_APP_RESPONSE_TYPE
      const scope = (window as any).__RUNTIME_CONFIG__.REACT_APP_SCOPE
      const codeChallengeMethod = (window as any).__RUNTIME_CONFIG__.REACT_APP_CODE_CHALLENGE_METHOD
      const codeChallenge = (window as any).__RUNTIME_CONFIG__.REACT_APP_CODE_CHALLENGE
      const oauth2Url = `${url}${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&code_challenge_method=${codeChallengeMethod}&code_challenge=${codeChallenge}`;
      window.location.href = oauth2Url;
      return null; // Don't render anything while redirecting
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
