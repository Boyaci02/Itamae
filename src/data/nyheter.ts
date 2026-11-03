/**
 * Nyheter från bygget i mars 2026. "Ny plats" och "25 år" väntar på bekräftelse
 * från Marcel (3/11 2026) och visas inte förrän de är kontrollerade.
 */
export interface Nyhet {
  id: number; slug: string; tag: string; date: string; title: string; excerpt: string;
  image: string; featured: boolean; content: string[];
  /** Väntar på att Marcel bekräftar att det stämmer. Visas inte och förrenderas inte. */
  vantar?: boolean;
}

export const newsArticles: Nyhet[] = [
  {
    id: 1,
    slug: "ny-plats-stockholm",
    vantar: true,
    tag: "Nyhet",
    date: "20 mars 2026",
    title: "Itamae öppnar på ny plats i Stockholm",
    excerpt: "Vi är glada att kunna meddela att Itamae snart öppnar en ny restaurang i hjärtat av Stockholm. En ny destination för sushiälskare i stan.",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b36702fc576431e00.webp",
    featured: true,
    content: [
      "Vi är otroligt glada att kunna dela med oss av den spännande nyheten att Itamae snart öppnar ytterligare en restaurang i Stockholm. Den nya platsen kommer att ligga centralt och vara lättillgänglig för alla som älskar vår sushi.",
      "Precis som på våra övriga restauranger kommer den nya platsen att erbjuda hela vår meny – från klassisk nigiri och maki till smakrika bowls och shakemushi. Inredningen följer Itamaes stilrena estetik med en varm och välkomnande atmosfär.",
      "Datum för öppning och exakt adress kommer att tillkännages inom kort. Följ oss på Instagram och Facebook för att vara den första att få veta mer.",
    ],
  },
  {
    id: 2,
    slug: "var-meny-2026",
    tag: "Meny",
    date: "5 mars 2026",
    title: "Ny vårmeny med japanska smaker",
    excerpt: "Upplev vårens bästa råvaror i vår nya säsongsmeny – inspirerad av japansk tradition och svenska smaker.",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fab5b01496de.webp",
    featured: false,
    content: [
      "Med våren i luften lanserar vi en ny säsongsmeny som kombinerar japanska råvaror med det bästa från det svenska köket. Menyn är framtagen av våra kockar med fokus på friska smaker och hög kvalitet.",
      "Bland nyheterna hittar du bland annat vår nya vår-poke bowl med grillad lax, edamame och en lätt sesamdressing, samt ett urval av säsongsanpassade nigiri med lokalt inspirerade toppings.",
      "Vårmenyn finns tillgänglig på alla våra restauranger från och med den 5 mars. Välkommen att smaka!",
    ],
  },
  {
    id: 3,
    slug: "mot-vara-kockar",
    tag: "Bakom kulisserna",
    date: "15 feb 2026",
    title: "Möt våra kockar",
    excerpt: "Bakom varje rulle och varje bowl finns ett dedikerat team av kockar som brinner för japansk matkultur. Vi presenterar några av hjärnorna bakom Itamae.",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38eaefc96d3d.webp",
    featured: false,
    content: [
      "På Itamae är maten mer än bara en produkt – den är resultatet av passion, precision och många års erfarenhet. Våra kockar kommer från olika bakgrunder men delar en sak: en djup kärlek till japansk matkultur.",
      "Köksmästare på våra restauranger har utbildat sig i Japan och Sverige, och de kombinerar traditionella tekniker med moderna presentationer. Varje rät som lämnar vårt kök har genomgått samma noggranna kontroll och omsorg.",
      "Vi är stolta över att ha ett team som hela tiden utmanar sig självt och strävar efter att ge gästerna en upplevelse utöver det vanliga – varje dag.",
    ],
  },
  {
    id: 4,
    slug: "25-ar",
    vantar: true,
    tag: "Jubileum",
    date: "1 jan 2026",
    title: "Itamae firar 25 år",
    excerpt: "År 2000 öppnade Itamae sina dörrar för första gången. Nu firar vi 25 år av sushi, glädje och fantastiska gäster. Tack för att ni följt oss!",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d636e546320.webp",
    featured: false,
    content: [
      "Det är svårt att tro att det redan gått 25 år sedan vi öppnade den första Itamae-restaurangen. Det som började som en liten sushibar har vuxit till fem restauranger runt om i Stockholm-regionen – och resan har bara börjat.",
      "Under dessa 25 år har vi serverat hundratusentals gäster, lanserat otaliga menyer och byggt ett team som vi är otroligt stolta över. Det är ni – våra trogna gäster – som gjort allt detta möjligt.",
      "För att fira jubileet planerar vi en rad specialevenemang och begränsade menyer under 2026. Håll utkik på vår hemsida och sociala medier för mer information. Skål för 25 år – och för många fler!",
    ],
  },
];

export const publiceradeNyheter = newsArticles.filter(n => !n.vantar);
