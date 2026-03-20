import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(() => {
          // Fail silently if service worker cannot be registered
        });
    });
  }
}

registerServiceWorker();

createRoot(document.getElementById("root")!).render(<App />);
