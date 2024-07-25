import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/index.css";
import { ShowcaseProvider } from "./hooks/useShowcaseContext";
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShowcaseProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ShowcaseProvider>
  </React.StrictMode>
);
