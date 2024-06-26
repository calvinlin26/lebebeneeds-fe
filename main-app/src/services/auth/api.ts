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
