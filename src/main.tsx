import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// At the absolute bottom of your main.tsx or index.tsx file

// This event listener fires ONLY when the DOM, images, fonts, and sub-frames are 100% downloaded
window.addEventListener("load", () => {
  const loader = document.getElementById("app-loading-screen");
  if (loader) {
    // 1. Add a smooth fade-out transition by updating opacity
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    // 2. Safely remove it from the DOM tree entirely after the 700ms CSS transition finishes
    setTimeout(() => {
      loader.remove();
    }, 1000);
  }
});
