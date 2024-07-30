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
import { getToken, revokeToken } from "../services/auth";

import axiosWithConfig from "../services/api";
import { setAxiosConfig } from "../services/api";
import { toast } from "sonner";

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
        refresh_token: refreshToken,
      };
      const response = await getToken(payload);

      const { access_token, refresh_token } = response as tokenResponse;
      changeToken(access_token, refresh_token);
      return access_token;
    } catch (error) {
      console.error("Error refreshing the token:", error);
      changeToken("", "");
      throw error;
    }
  };

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        const newToken = await refreshAuthToken();
        setAxiosConfig(newToken);
        error.config.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosWithConfig(error.config);
      }
      toast.error(
        error.response?.data?.responseMessage || "An unexpected error occurred"
      );
      return Promise.reject(error);
    }
  );

  const idleLogoutTime = 1 * 60 * 1000; // 1 menit
  let idleTimeout: ReturnType<typeof setTimeout>;

  const resetTimer = () => {
    if (idleTimeout) {
      clearTimeout(idleTimeout);
    }
    if (token) {
      idleTimeout = setTimeout(() => {
        revokeToken(token);
        localStorage.clear();
        const url = import.meta.env.VITE_BASE_URL;
        window.location.href = `${url}logout`;
      }, idleLogoutTime);
    }
  };

  const changeToken = useCallback((token?: string, refreshToken?: string) => {
    const newToken = token ?? "";
    const newRefreshToken = refreshToken ?? "";
    setToken(newToken);
    setRefreshToken(newRefreshToken);

    if (newToken) {
      localStorage.setItem("token", newToken);
      // Reset timer when token changes
      resetTimer();
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

  useEffect(() => {
    if (token) {
      const eventHandler = () => {
        resetTimer();
      };

      window.addEventListener("mousemove", eventHandler);
      window.addEventListener("keydown", eventHandler);
      window.addEventListener("scroll", eventHandler);

      resetTimer(); // initial timer set when token is not empty

      return () => {
        window.removeEventListener("mousemove", eventHandler);
        window.removeEventListener("keydown", eventHandler);
        window.removeEventListener("scroll", eventHandler);

        if (idleTimeout) {
          clearTimeout(idleTimeout);
        }
      };
    }
  }, [token]);

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
