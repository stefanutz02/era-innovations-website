const GA_ID = "G-1J5FN5PGZ9";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    gaInitialized?: boolean;
  }
}

export function initGA() {
  if (typeof window === "undefined") return;
  if (window.gaInitialized) return;
  window.gaInitialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}