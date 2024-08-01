import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/toast/index.tsx";
import { TokenProvider } from "./hooks/useToken.tsx";
import { router } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
    <Toaster richColors closeButton />
  </React.StrictMode>
);
