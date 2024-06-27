import { useLocation, useNavigate } from "react-router-dom";

import { getToken } from "../../services/auth";
import { useEffect } from "react";
import { useToken } from "../../hooks/useToken";

const OAuth2Callback = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { changeToken } = useToken();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const code = query.get("code");

    if (code) {
      const fetchToken = async () => {
        const payload = {
          grant_type: import.meta.env.VITE_GRANT_TYPE,
          redirect_uri: import.meta.env.VITE_REDIRECT_URI,
          code,
          code_verifier: import.meta.env.VITE_CODE_VERIFIER,
        };

        const response = await getToken(payload);

        const { access_token, refresh_token } = response as tokenResponse;

        changeToken(access_token, refresh_token);
        navigate("/");
      };

      fetchToken();
    }
  }, []);

  return <div>Loading...</div>;
};

export default OAuth2Callback;
