import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { resolveRoute } from "./site";

// Every page is prerendered at build time; the client only hydrates it.
const root = document.getElementById("root")!;
const route = resolveRoute(window.location.pathname);
hydrateRoot(
  root,
  <StrictMode>
    <App route={route} />
  </StrictMode>,
);
