import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { sidData, RUTTER, SITEMAP, BAS } from "./sidor";
import { locations } from "./data/platser";
import menyData from "./data/meny.json";

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}

export { sidData, RUTTER, SITEMAP, BAS, locations, menyData };
