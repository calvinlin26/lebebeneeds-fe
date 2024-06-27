// useToken.tsx
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { API } from "../services";
import { getToken } from "../services/auth";
import { setAxiosConfig } from "../services/api";

interface Context {
  token: string;
  refreshToken: string;
  changeToken: (token?: string, refreshToken?: string) => void;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  token: "",
  refreshToken: "",
  changeToken: () => {},
};

const TokenContext = createContext<Context>(contextValue);

export function TokenProvider({ children }: Readonly<Props>) {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") ?? ""
  );

  useEffect(() => {
    setAxiosConfig(token);
  }, [token]);

  const refreshAuthToken = async () => {
    try {
      const payload = {
        grant_type: "refresh_token",
        refreshToken,
      };
      const response = await getToken(payload);

      const { access_token, refresh_token } = response as tokenResponse;
      changeToken(access_token, refresh_token);
    } catch (error) {
      console.error("Error refreshing the token:", error);
      changeToken("", "");
    }
  };

  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        await refreshAuthToken();
        return API(error.config);
      }
      return Promise.reject(error);
    }
  );

  const changeToken = useCallback((token?: string, refreshToken?: string) => {
    const newToken = token ?? "";
    const newRefreshToken = refreshToken ?? "";
    setToken(newToken);
    setRefreshToken(newRefreshToken);

    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }

    if (newRefreshToken) {
      localStorage.setItem("refreshToken", newRefreshToken);
    } else {
      localStorage.removeItem("refreshToken");
    }
  }, []);

  const tokenContextValue = useMemo(
    () => ({
      token,
      refreshToken,
      changeToken,
    }),
    [token, refreshToken, changeToken]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error("ERROR, useToken must be used within TokenContext");
  }

  return context;
}
