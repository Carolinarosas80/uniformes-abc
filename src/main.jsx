import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";   // ← IMPORTANTE
import App from "./App";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>          {/* ← ENVOLVER TODO */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);