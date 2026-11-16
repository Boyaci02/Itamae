/**
 * Förrendering: skriver en färdig HTML-fil per adress i dist/, med egen titel,
 * beskrivning, canonical, Open Graph, JSON-LD och sidans innehåll. Skriver
 * också 404.html (som Vercel svarar med status 404), sitemap.xml och llms.txt.
 *
 * Körs efter `vite build` och `vite build --ssr` (se package.json).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(rot, "dist");
const { render, sidData, RUTTER, SITEMAP, BAS, locations, menyData } = await import(
  pathToFileURL(path.join(rot, "dist-ssr", "entry-server.js")).href
);

const mall = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON i <script> får inte innehålla "</script".
const jsonLd = o => JSON.stringify(o).replace(/</g, "\\u003c");

function huvud(vag, s) {
  const canonical = BAS + (vag === "/" ? "/" : vag);
  const rader = [
    `<title>${esc(s.titel)}</title>`,
    `<meta name="description" content="${esc(s.beskrivning)}" />`,
    `<meta name="robots" content="${s.robots ?? "index,follow"}" />`,
    `<meta property="og:title" content="${esc(s.titel)}" />`,
    `<meta property="og:description" content="${esc(s.beskrivning)}" />`,
    `<meta property="og:image" content="${esc(s.bild ?? "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d636702fd298b4a0cd.jpg")}" />`,
    `<meta name="twitter:title" content="${esc(s.titel)}" />`,
    `<meta name="twitter:description" content="${esc(s.beskrivning)}" />`,
  ];
  if (s.status === 200) {
    rader.push(`<link rel="canonical" href="${canonical}" />`, `<meta property="og:url" content="${canonical}" />`);
  }
  for (const block of s.schema) rader.push(`<script type="application/ld+json" data-sida="1">${jsonLd(block)}</script>`);
  return rader.join("\n    ");
}

function skriv(vag, fil) {
  const s = sidData(vag);
  const html = mall
    .replace("<!--sid-huvud-->", huvud(vag, s))
    .replace("<!--app-->", render(vag));
  const ut = path.join(dist, fil);
  fs.mkdirSync(path.dirname(ut), { recursive: true });
  fs.writeFileSync(ut, html);
  const ord = render(vag).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`${String(s.status).padEnd(4)}${vag.padEnd(34)} -> ${fil}  (${ord} ord)`);
}

for (const vag of RUTTER) skriv(vag, vag === "/" ? "index.html" : `${vag.slice(1)}.html`);
skriv("/404-sidan-finns-inte", "404.html");

// sitemap.xml
const idag = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP.map(v => `  <url><loc>${BAS}${v === "/" ? "/" : v}</loc><lastmod>${idag}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// llms.txt
const bas = menyData.platser.kungsholmen.sektioner;
const exempel = bas
  .filter(s => ["sushi", "bowls", "rullar", "varmratter", "sashimi"].includes(s.id))
  .map(s => `- ${s.rubrik}: ${s.ratter.slice(0, 4).map(r => `${r.namn} ${r.fran ? "från " : ""}${r.pris} kr`).join(", ")}`)
  .join("\n");
const llms = `# Itamae Sushi

> Sushirestauranger i Stockholm sedan 2000. Fem restauranger: Kungsholmen (Fleminggatan 16), Odenplan (Odengatan 62), Hagastaden (Norra Stationsgatan 66), Sundbyberg (Landsvägen 33, Itamae Sushi & Grill med hamburgare) och Danderyd (Golfvägen 2, Mörby centrum / Danderyds centrum). Sushi, sashimi, poké bowls, varma japanska rätter, take away och hemleverans. Kontantfritt, kort och Swish.

Kontor: Odengatan 62, 113 22 Stockholm. E-post: info@itamae.se. Itamae betyder köksmästare på japanska.

## Restauranger
${locations.map(p => `- [${p.fulltNamn}](${BAS}/location/${p.id}): ${p.address}, ${p.zipCode}. Tel ${p.phone}. Öppet ${p.hoursDisplay.map(h => `${h.label.toLowerCase()} ${h.value}`).join(", ")}. Beställ: ${p.orderUrl}`).join("\n")}

## Meny (priser från Qopla, hämtade ${menyData.hamtad})
${exempel}
- Hela menyn med priser: ${BAS}/meny

## Sidor
- [Alla restauranger](${BAS}/restauranger)
- [Meny](${BAS}/meny)
- [Sushi bar i Stockholm](${BAS}/sushi-bar)
- [Vanliga frågor](${BAS}/faq)
- [Kontakt](${BAS}/kontakt)
`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);
console.log("sitemap.xml, llms.txt och 404.html skrivna");
