import "./styles/index.css";

import MasterProduct from "./features/stock-per-variant";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MasterProduct />
    <Toaster richColors />
  </React.StrictMode>
);
