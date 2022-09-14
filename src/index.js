import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BillProvider } from "./Context/BillContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </React.StrictMode>
);

