import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const rot = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Sidorna är förrenderade (scripts/forrendera.mjs). Finns HTML redan tas den
// över, annars (npm run dev) renderas appen från början.
if (rot.hasChildNodes()) hydrateRoot(rot, app);
else createRoot(rot).render(app);
