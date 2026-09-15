import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sidspecifik metadata.
 *
 * Sajten är en React-app och hela index.html delades av alla sidor, så Google
 * såg exakt samma titel, beskrivning och canonical för Kungsholmen som för
 * Danderyd. Sidorna konkurrerade då med varandra i stället för att ranka på
 * sin egen ort. Här sätts titel, beskrivning, canonical och Open Graph per
 * sida, plus LocalBusiness-schema på restaurangsidorna.
 */

const BAS = "https://itamae.se";

function sattTagg(selektor: string, attribut: string, varde: string) {
  let el = document.head.querySelector<HTMLElement>(selektor);
  if (!el) {
    el = document.createElement(selektor.startsWith("link") ? "link" : "meta");
    const match = selektor.match(/\[(.+?)="(.+?)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attribut, varde);
}

export interface SidMeta {
  titel: string;
  beskrivning: string;
  bild?: string;
  /** JSON-LD som läggs på sidan, till exempel LocalBusiness för en restaurang. */
  schema?: Record<string, unknown>;
}

export function useSidMeta({ titel, beskrivning, bild, schema }: SidMeta) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical = BAS + (pathname === "/" ? "/" : pathname);

    document.title = titel;
    sattTagg('meta[name="description"]', "content", beskrivning);
    sattTagg('link[rel="canonical"]', "href", canonical);
    sattTagg('meta[property="og:title"]', "content", titel);
    sattTagg('meta[property="og:description"]', "content", beskrivning);
    sattTagg('meta[property="og:url"]', "content", canonical);
    sattTagg('meta[name="twitter:title"]', "content", titel);
    sattTagg('meta[name="twitter:description"]', "content", beskrivning);
    if (bild) {
      sattTagg('meta[property="og:image"]', "content", bild);
      sattTagg('meta[name="twitter:image"]', "content", bild);
    }

    // Schemat tas bort när man lämnar sidan, annars följer Kungsholmens
    // adress med till nästa restaurangsida.
    let script: HTMLScriptElement | null = null;
    if (schema) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.sida = "1";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
  }, [pathname, titel, beskrivning, bild, schema]);
}

interface Oppettider {
  var: string;
  lor: string;
  son: string;
}

/** "11.00-21.00" → "11:00" och "21:00" enligt schema.org-format. */
function tider(intervall: string): [string, string] {
  const [fran, till] = intervall.split("-").map(t => t.trim().replace(".", ":"));
  return [fran, till];
}

export function restaurangSchema(plats: {
  name: string;
  address: string;
  zipCode: string;
  phone: string;
  image: string;
  hours: Oppettider;
  orderUrl?: string;
  id: string;
}) {
  const [postnummer, ...ort] = plats.zipCode.split(" ");
  const oppet = [
    { dagar: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], tid: plats.hours.var },
    { dagar: ["Saturday"], tid: plats.hours.lor },
    { dagar: ["Sunday"], tid: plats.hours.son },
  ].map(rad => {
    const [oppnar, stanger] = tider(rad.tid);
    return { "@type": "OpeningHoursSpecification", dayOfWeek: rad.dagar, opens: oppnar, closes: stanger };
  });

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `Itamae ${plats.name}`,
    image: plats.image,
    url: `${BAS}/location/${plats.id}`,
    telephone: plats.phone,
    servesCuisine: ["Japanese", "Sushi"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: plats.address,
      postalCode: postnummer,
      addressLocality: ort.join(" "),
      addressCountry: "SE",
    },
    openingHoursSpecification: oppet,
    ...(plats.orderUrl ? { acceptsReservations: false, hasMenu: plats.orderUrl } : {}),
  };
}
