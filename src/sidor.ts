/**
 * Titel, beskrivning, canonical och schema per adress.
 *
 * Samma funktion används på två ställen: förrenderingen (scripts/forrendera.mjs)
 * skriver in taggarna i varje sidas HTML, och SidHuvud i App.tsx uppdaterar dem
 * när man klickar runt i appen. Google och AI-crawlare får alltså färdig HTML
 * med rätt titel och schema utan att köra JavaScript.
 *
 * Kanonisk värd är https://itamae.se (utan www), sedan 3/11 2026.
 */
import menyData from "./data/meny.json";
import { locations, hittaPlats, type Plats } from "./data/platser";
import { newsArticles, publiceradeNyheter } from "./data/nyheter";

export const BAS = "https://itamae.se";
const LOGGA = "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69515d58ee104796b003ea6f.png";
const STANDARDBILD = "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d636702fd298b4a0cd.jpg";
const ORG_ID = `${BAS}/#organisation`;

export interface Sida {
  titel: string;
  beskrivning: string;
  bild?: string;
  robots?: string;
  schema: Record<string, unknown>[];
  status: 200 | 404;
}

type Ratt = { namn: string; pris: number; fran: boolean; besk: string };
type Sektion = { id: string; rubrik: string; under: string; ratter: Ratt[] };
export const menyFor = (id: string): Sektion[] =>
  (menyData.platser as Record<string, { sektioner: Sektion[] }>)[id]?.sektioner ?? [];

const absolut = (bild: string) => (bild.startsWith("http") ? bild : BAS + bild);

const organisation = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Itamae Sushi",
  url: `${BAS}/`,
  logo: LOGGA,
  email: "info@itamae.se",
  foundingDate: "2000",
  sameAs: ["https://www.instagram.com/itamaesushibar/", "https://www.facebook.com/itamaeOfficial/"],
  address: { "@type": "PostalAddress", streetAddress: "Odengatan 62", postalCode: "113 22", addressLocality: "Stockholm", addressCountry: "SE" },
};

const DAGAR = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function oppettider(p: Plats) {
  // Slå ihop dagar med samma tider till en rad.
  const grupper = new Map<string, string[]>();
  p.veckotider.forEach(([fran, till], i) => {
    const k = `${fran}-${till}`;
    grupper.set(k, [...(grupper.get(k) ?? []), DAGAR[i]]);
  });
  return [...grupper.entries()].map(([k, dagar]) => {
    const [opens, closes] = k.split("-");
    return { "@type": "OpeningHoursSpecification", dayOfWeek: dagar, opens, closes };
  });
}

export function menySchema(id: string, namn: string, url: string) {
  return {
    "@type": "Menu",
    "@id": `${url}#meny`,
    name: `Meny ${namn}`,
    inLanguage: "sv",
    hasMenuSection: menyFor(id).map(s => ({
      "@type": "MenuSection",
      name: s.rubrik,
      ...(s.under ? { description: s.under } : {}),
      hasMenuItem: s.ratter.map(r => ({
        "@type": "MenuItem",
        name: r.namn,
        ...(r.besk ? { description: r.besk } : {}),
        offers: r.fran
          ? { "@type": "AggregateOffer", lowPrice: r.pris, priceCurrency: "SEK" }
          : { "@type": "Offer", price: r.pris, priceCurrency: "SEK" },
      })),
    })),
  };
}

export function restaurangSchema(p: Plats) {
  const url = `${BAS}/location/${p.id}`;
  return {
    "@type": "Restaurant",
    "@id": `${url}#restaurang`,
    name: p.fulltNamn,
    url,
    image: absolut(p.image),
    telephone: `+46 ${p.phone.replace(/^0/, "").replace(/-/, " ")}`,
    servesCuisine: p.isGrill ? ["Sushi", "Japanskt", "Hamburgare"] : ["Sushi", "Japanskt"],
    priceRange: "59–399 kr",
    currenciesAccepted: "SEK",
    paymentAccepted: "Kort, Swish",
    acceptsReservations: false,
    address: { "@type": "PostalAddress", streetAddress: p.address, postalCode: p.postnummer, addressLocality: p.ort, addressCountry: "SE" },
    geo: { "@type": "GeoCoordinates", latitude: p.geo.lat, longitude: p.geo.lng },
    areaServed: p.omraden.map(o => ({ "@type": "Place", name: o })),
    openingHoursSpecification: oppettider(p),
    hasMenu: menySchema(p.id, p.fulltNamn, url),
    parentOrganization: { "@id": ORG_ID },
    potentialAction: {
      "@type": "OrderAction",
      target: { "@type": "EntryPoint", urlTemplate: p.orderUrl, actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp"],
    },
  };
}

const brodsmulor = (led: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: led.map(([namn, vag], i) => ({ "@type": "ListItem", position: i + 1, name: namn, item: BAS + vag })),
});

const faqSchema = (faq: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const graf = (...noder: Record<string, unknown>[]) => [{ "@context": "https://schema.org", "@graph": noder }];

export const FAQ_ALLMAN = [
  { q: "Har ni hemkörning?", a: "Ja. På varje restaurangs sida finns knappen Beställ take away, som leder till beställningen på Qopla. Hemleverans går också via Foodora, Wolt och Uber Eats." },
  { q: "Finns det vegansk sushi?", a: "Ja, vi har flera veganska alternativ. Utbudet skiljer sig lite mellan restaurangerna, se menyn på respektive restaurangs sida." },
  { q: "Har ni annan mat än sushi?", a: "Ja. Förutom sushi finns poké bowls, varma rätter som yakiniku och yakitori, och i Sundbyberg även hamburgare från grillen." },
  { q: "Hur länge har ni funnits?", a: "Vi öppnade vår första sushirestaurang år 2000." },
  { q: "Vilka öppettider har ni?", a: "Alla restauranger öppnar 11.00. Kungsholmen, Odengatan, Hagastaden och Danderyd stänger 21.00 alla dagar. Sundbyberg stänger 21.00 söndag till torsdag och 22.00 fredag och lördag." },
  { q: "Hur kan man betala hos er?", a: "Vi är kontantfria och tar kort och Swish." },
  { q: "Vad betyder Itamae?", a: "Itamae betyder köksmästare på japanska, det högsta en sushikock kan nå." },
];

const HEM: Sida = {
  titel: "Itamae Sushi | Sushi i Stockholm sedan 2000, fem restauranger",
  beskrivning: "Itamae Sushi har gjort sushi i Stockholm sedan 2000. Fem restauranger: Kungsholmen, Odenplan, Hagastaden, Sundbyberg och Danderyd. Se menyn och beställ take away.",
  schema: graf(
    organisation,
    { "@type": "WebSite", "@id": `${BAS}/#webbplats`, url: `${BAS}/`, name: "Itamae Sushi", inLanguage: "sv", publisher: { "@id": ORG_ID } },
    {
      "@type": "ItemList",
      name: "Itamaes restauranger",
      itemListElement: locations.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${BAS}/location/${p.id}`, name: p.fulltNamn })),
    },
  ),
  status: 200,
};

const INTE_HITTAD: Sida = {
  titel: "Sidan finns inte | Itamae Sushi",
  beskrivning: "Sidan du letar efter finns inte. Se våra restauranger och menyn på itamae.se.",
  robots: "noindex,follow",
  schema: [],
  status: 404,
};

export function sidData(pathname: string): Sida {
  const vag = pathname.replace(/\/+$/, "") || "/";
  if (vag === "/") return HEM;

  const plats = vag.match(/^\/location\/([^/]+)$/);
  if (plats) {
    const p = hittaPlats(plats[1]);
    if (!p) return INTE_HITTAD;
    return {
      titel: p.seo.titel,
      beskrivning: p.seo.beskrivning,
      bild: absolut(p.image),
      schema: graf(
        restaurangSchema(p),
        faqSchema(p.faq),
        brodsmulor([["Start", "/"], ["Restauranger", "/restauranger"], [p.fulltNamn, `/location/${p.id}`]]),
      ),
      status: 200,
    };
  }

  switch (vag) {
    case "/restauranger":
      return {
        titel: "Våra sushirestauranger i Stockholm | Itamae Sushi",
        beskrivning: "Fem Itamae i Stockholm: Fleminggatan på Kungsholmen, Odengatan vid Odenplan, Hagastaden, Sundbyberg och Mörby centrum i Danderyd. Adresser, öppettider och menyer.",
        schema: graf(organisation, ...locations.map(p => {
          const { hasMenu: _bortaMeny, ...utanMeny } = restaurangSchema(p);
          return utanMeny;
        }), brodsmulor([["Start", "/"], ["Restauranger", "/restauranger"]])),
        status: 200,
      };
    case "/meny":
      return {
        titel: "Itamae meny med priser | Sushi, poké bowls och varma rätter",
        beskrivning: "Hela menyn hos Itamae Sushi med priser: blandad sushi från 129 kr, rullar, sashimi, poké bowls, varma rätter och barnmeny. Hamburgare i Sundbyberg.",
        schema: graf(menySchema("kungsholmen", "Itamae Sushi", `${BAS}/meny`), brodsmulor([["Start", "/"], ["Meny", "/meny"]])),
        status: 200,
      };
    case "/kontakt":
      return {
        titel: "Kontakta oss | Itamae Sushi",
        beskrivning: "Kontakta Itamae Sushi. Telefonnummer, adresser och öppettider till våra fem restauranger i Stockholm, och e-post till kontoret på Odengatan.",
        schema: graf(organisation, brodsmulor([["Start", "/"], ["Kontakt", "/kontakt"]])),
        status: 200,
      };
    case "/faq":
      return {
        titel: "Vanliga frågor | Itamae Sushi",
        beskrivning: "Svar på vanliga frågor om Itamae Sushi: hemkörning, vegansk sushi, betalning och öppettider på våra restauranger i Stockholm.",
        schema: graf(faqSchema(FAQ_ALLMAN), brodsmulor([["Start", "/"], ["Vanliga frågor", "/faq"]])),
        status: 200,
      };
    case "/villkor":
      return {
        titel: "Villkor | Itamae Sushi",
        beskrivning: "Villkor och integritetspolicy för Itamae Sushi.",
        schema: [],
        status: 200,
      };
    case "/nyheter":
      return {
        titel: "Nyheter | Itamae Sushi",
        beskrivning: "Nyheter från Itamae Sushi.",
        schema: [],
        status: 200,
      };
  }

  const nyhet = vag.match(/^\/nyheter\/([^/]+)$/);
  if (nyhet) {
    const a = publiceradeNyheter.find(n => n.slug === nyhet[1]);
    if (!a) return INTE_HITTAD;
    return { titel: `${a.title} | Itamae Sushi`, beskrivning: a.excerpt, bild: a.image, schema: [], status: 200 };
  }
  return INTE_HITTAD;
}

/** Alla adresser som förrenderas. 404.html görs separat. */
export const RUTTER = [
  "/", "/restauranger", "/meny", ...locations.map(p => `/location/${p.id}`),
  "/kontakt", "/faq", "/villkor", "/nyheter", ...publiceradeNyheter.map(n => `/nyheter/${n.slug}`),
];

/** Det som ska in i sitemap.xml (nyheterna står utanför tills de är bekräftade). */
export const SITEMAP = [
  "/", "/restauranger", "/meny", ...locations.map(p => `/location/${p.id}`), "/kontakt", "/faq", "/villkor",
];

export { newsArticles };
