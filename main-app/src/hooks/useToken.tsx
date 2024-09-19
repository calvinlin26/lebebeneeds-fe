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
  fieldValidation: Fieldvalidation[];
  changeToken: (token?: string, refreshToken?: string) => void;
}

interface Fieldvalidation {
  field: string;
  message: string;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  token: "",
  refreshToken: "",
  fieldValidation: [],
  changeToken: () => {},
};

export const TokenContext = createContext<Context>(contextValue);

export function TokenProvider({ children }: Readonly<Props>) {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") ?? ""
  );
  const [fieldValidation, setFieldValidation] = useState<Fieldvalidation[]>([]);

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
      const validation = error.response.data.validation;
      const status = error.response.data.responseCode ?? error.response.status;
      const code = error.code;
      const requestId = error.response.data.requestId ?? "N/A";
      let errorMessage = error.response.data.responseMessage ?? error.message;

      if (status == 401) {
        const newToken = await refreshAuthToken();
        setAxiosConfig(newToken);
        error.config.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosWithConfig(error.config);
      }

      if (validation) {
        setFieldValidation(validation);
      }

      toast.error(
        <div className="flex flex-col gap-2">
          <span className="text-base font-bold">{errorMessage}</span>
          <p className="text-xs">
            {code} - {status} with requestId: {requestId}
          </p>
        </div>
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
        // const url = import.meta.env.VITE_BASE_URL;
        // const endpoint = import.meta.env.VITE_ENDPOINT_LOGOUT;
        const url = (window as any).__RUNTIME_CONFIG__.REACT_APP_BASE_URL;
        const endpoint = (window as any).__RUNTIME_CONFIG__
          .REACT_APP_ENDPOINT_LOGOUT;
        window.location.href = `${url}${endpoint}`;
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
      fieldValidation,
    }),
    [token, refreshToken, changeToken, fieldValidation]
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
