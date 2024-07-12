// import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import UserManagement from "./features/user-management/detail";
// import { Toaster } from "mainApp/toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserManagement />
    <Toaster richColors />
  </React.StrictMode>
);
