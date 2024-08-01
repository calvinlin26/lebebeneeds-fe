import { API } from "..";

export const getToken = async (payload: tokenPayload) => {
  try {
    const response = await API.post("oauth2/token", payload, {
      auth: {
        username: "sample-client",
        password: "client-secret",
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data as tokenResponse;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const revokeToken = async (accessToken: string) => {
  try {
    const response = await API.post("oauth2/revoke", {token: accessToken}, {
    auth: {
      username: "sample-client",
      password: "client-secret",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const introspect = async (accessToken: string) => {
  try {
    const response = await API.post("oauth2/introspect", {token: accessToken}, {
    auth: {
      username: "sample-client",
      password: "client-secret",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};