import "./styles/index.css";

import Notification from "./features/notification";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>
);
