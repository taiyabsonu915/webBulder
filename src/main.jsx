import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
  </StrictMode>,
);
