import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
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
        try {
          const response = await axios.post(
            "http://192.168.90.35:8080/oauth2/token",
            {
              client_id: "oidc-client-id",
              grant_type: "authorization_code",
              redirect_uri:
                "http://localhost:5173/login/oauth2/code/oidc-client",
              code,
              code_verifier: "ea3rEXbTCcvWGOL2m6J1lT2VWv-sLrnS2i-UeaNENbw",
            }
          );

          const { access_token } = response.data;
          changeToken(access_token);
          navigate("/");
        } catch (error) {
          console.error("Error fetching the access token:", error);
        }
      };

      fetchToken();
    }
  }, [search, changeToken, navigate]);

  return <div>Loading...</div>;
};

export default OAuth2Callback;
