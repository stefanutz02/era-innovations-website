// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import { initGA } from "@/lib/analytics";
import App from "./App";
import "./index.css";

// Init Google Analytics
initGA();

// Add favicon links dynamically if not in index.html
const addLink = (rel: string, href: string, type?: string, sizes?: string) => {
  if (document.querySelector(`link[rel="${rel}"]`)) return;
  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (type) link.type = type;
  if (sizes) link.setAttribute("sizes", sizes);
  document.head.appendChild(link);
};

// Favicon setup - loads from /assets/
addLink("icon", "/assets/favicon.ico", "image/x-icon");
addLink("icon", "/assets/favicon-16x16.png", "image/png", "16x16");
addLink("icon", "/assets/favicon-32x32.png", "image/png", "32x32");
addLink("apple-touch-icon", "/assets/apple-touch-icon.png", undefined, "180x180");
addLink("manifest", "/site.webmanifest");

// Preload critical assets
const preloadLink = (href: string, as: string, type?: string, crossorigin?: boolean) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  if (crossorigin) link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

// Preload logo and hero fonts
preloadLink("/assets/logo.svg", "image", "image/svg+xml");
preloadLink("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap", "style");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </React.StrictMode>
);