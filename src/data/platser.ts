/**
 * Restaurangerna: fakta och text per plats.
 *
 * Fakta (adress, telefon, öppettider) är desamma som stod på sajten innan
 * 3/11 2026. Avstånd till stationer och parker är uppmätta mot
 * OpenStreetMap från kartnålens koordinater, avrundade nedåt.
 * Menyn kommer från Qopla, se src/data/meny.json och seo/qopla/.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface Stycke {
  rubrik: string;
  text: string[];
}

export interface Plats {
  id: string;
  name: string;
  /** Namnet som restaurangen har i Qopla och på skylten. */
  fulltNamn: string;
  address: string;
  postnummer: string;
  ort: string;
  /** Visas under adressen, t.ex. "112 26 Stockholm". */
  zipCode: string;
  phone: string;
  geo: { lat: number; lng: number };
  image: string;
  orderUrl: string;
  isGrill: boolean;
  hours: { var: string; lor: string; son: string };
  /** Öppettider per dag för schema.org, måndag först. */
  veckotider: [string, string][];
  hoursDisplay: { label: string; value: string }[];
  mapIframe: string;
  /** Områden som sidan handlar om, för text och schema (areaServed). */
  omraden: string[];
  seo: { titel: string; beskrivning: string };
  h1: string;
  etikett: string;
  ingress: string;
  stycken: Stycke[];
  faq: Faq[];
  /** Rätter som nämns i texten och länkas till menyn. */
  tips: string[];
}

const KARTA = (src: string) =>
  `<iframe src="${src}" width="100%" height="420" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Karta"></iframe>`;

const alla = (fran: string, till: string): [string, string][] =>
  Array.from({ length: 7 }, () => [fran, till] as [string, string]);

const allaPlatser: Plats[] = [
  {
    id: "kungsholmen",
    name: "Kungsholmen",
    fulltNamn: "Itamae Kungsholmen",
    address: "Fleminggatan 16",
    postnummer: "112 26",
    ort: "Stockholm",
    zipCode: "112 26 Stockholm",
    phone: "08-32 70 32",
    geo: { lat: 59.33299706809522, lng: 18.04512301671291 },
    image: "/img/69a861d636702fd298b4a0cd.webp",
    orderUrl: "https://qopla.com/restaurant/itamae---kungsholmen/qyZRx7WVdM/order",
    isGrill: false,
    hours: { var: "11.00-21.00", lor: "11.00-21.00", son: "11.00-21.00" },
    veckotider: alla("11:00", "21:00"),
    hoursDisplay: [{ label: "Alla dagar", value: "11.00–21.00" }],
    mapIframe: KARTA("https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748550829!5m2!1sen!2ses!6m8!1m7!1sV1pAMf7nhbQiMKkkCxsVoA!2m2!1d59.33299706809522!2d18.04512301671291!3f315.73257326866565!4f0.4191554857457902!5f0.7820865974627469"),
    omraden: ["Kungsholmen", "Rådhuset", "Fridhemsplan", "Kungsbron", "Stockholm"],
    seo: {
      titel: "Sushi på Kungsholmen | Itamae, Fleminggatan 16",
      beskrivning: "Sushi, poké bowls och sashimi på Fleminggatan 16, nära Rådhuset och Fridhemsplan. Öppet 11–21 alla dagar. Se menyn med priser och beställ take away.",
    },
    h1: "Sushi på Kungsholmen",
    etikett: "Itamae Kungsholmen · Fleminggatan 16",
    ingress: "Vår restaurang på Fleminggatan ligger på östra Kungsholmen, några minuter från T-bana Rådhuset. Köket öppnar klockan elva varje dag.",
    stycken: [
      {
        rubrik: "Om restaurangen på Fleminggatan",
        text: [
          "Itamae har gjort sushi i Stockholm sedan 2000, och Fleminggatan är en av våra fem restauranger. Restaurangen ligger nära kontoren runt Rådhuset och Kungsbron och bostadskvarteren bort mot Fridhemsplan, så det är lika lätt att komma hit på lunchen som att hämta middag på väg hem.",
          "Menyn är densamma som på våra andra ställen i innerstan. Blandad sushi finns i tre storlekar, från Nami med åtta bitar till Toku-Joo med fjorton. Du kan också välja nigiri med bara lax, räka, tonfisk eller avokado, sashimi, chirashi och ett dussin rullar. Poké bowls görs med lax, tonfisk, kyckling, nötkött, tofu eller avokado. Vill du ha något varmt finns yakiniku, yakitori och shake-mushi, ångkokt lax med ponzumayo, alla med ris.",
        ],
      },
      {
        rubrik: "Hitta hit",
        text: [
          "Fleminggatan 16 ligger drygt 300 meter från T-bana Rådhuset på blå linjen. Från Fridhemsplan går du ungefär tio minuter österut längs Fleminggatan, och från Centralen tar promenaden över Kungsbron lika lång tid. Grubbensparken och Rådhusparken ligger ett par hundra meter bort om du vill äta ute en varm dag.",
        ],
      },
      {
        rubrik: "Lunch, take away och leverans",
        text: [
          "Eftersom vi öppnar klockan elva funkar det bra att komma hit på lunchen. En Nami kostar 129 kr och en poké bowl från 159 kr. Har du bråttom kan du beställa i förväg på Qopla och hämta när maten är klar. Vill du äta hemma kör Foodora, Wolt och Uber Eats ut från Fleminggatan.",
        ],
      },
      {
        rubrik: "Beställa till många",
        text: [
          "Familjesushi kostar från 399 kr och är gjord för att delas. Ska ni beställa till ett kontor eller ett kalas, ring restaurangen på 08-32 70 32 i god tid så att köket hinner förbereda.",
        ],
      },
    ],
    faq: [
      { q: "Vilka öppettider har Itamae Kungsholmen?", a: "Vi har öppet 11.00–21.00 alla dagar i veckan." },
      { q: "Hur tar jag mig till Itamae på Fleminggatan?", a: "Närmaste tunnelbana är Rådhuset på blå linjen, drygt 300 meter bort. Från Fridhemsplan och från Centralen är det ungefär tio minuters promenad." },
      { q: "Kan jag beställa take away eller hemleverans?", a: "Ja. Beställ på Qopla och hämta i restaurangen, eller välj hemleverans via Foodora, Wolt eller Uber Eats." },
      { q: "Finns det vegetarisk och vegansk sushi?", a: "Ja. Vegetarisk sushi, Avocado Roll, Tofurulle och poké bowl med tofu eller avokado finns på menyn. Fråga personalen vad som är helt veganskt, eftersom flera såser innehåller majonnäs." },
      { q: "Vad kostar sushin?", a: "Blandad sushi kostar 129 kr för åtta bitar, 159 kr för elva och 189 kr för fjorton. Poké bowls kostar 159–175 kr och rullarna 159–185 kr." },
      { q: "Hur betalar jag?", a: "Restaurangen är kontantfri. Vi tar kort och Swish." },
      { q: "Finns det barnmeny?", a: "Ja, fyra barnrätter för 119 kr, bland annat sushi med sex bitar utan topping och yakitori med ris." },
    ],
    tips: ["Nami", "Toku-Joo", "Poké Bowl Lax", "Shake-Mushi"],
  },
  {
    id: "odengatan",
    name: "Odengatan",
    fulltNamn: "Itamae Odenplan",
    address: "Odengatan 62",
    postnummer: "113 22",
    ort: "Stockholm",
    zipCode: "113 22 Stockholm",
    phone: "08-32 70 20",
    geo: { lat: 59.34320043629675, lng: 18.05224510701819 },
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d636702f76f6b4a0ce.jpg",
    orderUrl: "https://qopla.com/restaurant/itamae---odenplan/qvyAzJvzzJ/order",
    isGrill: false,
    hours: { var: "11.00-21.00", lor: "11.00-21.00", son: "11.00-21.00" },
    veckotider: alla("11:00", "21:00"),
    hoursDisplay: [{ label: "Alla dagar", value: "11.00–21.00" }],
    mapIframe: KARTA("https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748413372!5m2!1sen!2ses!6m8!1m7!1sJquFglDsorZyMqVrdUDX5A!2m2!1d59.34320043629675!2d18.05224510701819!3f333.0793921462883!4f-5.581497786661785!5f2.755265777737071"),
    omraden: ["Odenplan", "Vasastan", "Odengatan", "Rådmansgatan", "Stockholm"],
    seo: {
      titel: "Sushi vid Odenplan | Itamae, Odengatan 62",
      beskrivning: "Sushi och poké bowls på Odengatan 62 i Vasastan, ett par minuter från Odenplan. Öppet 11–21 alla dagar. Se hela menyn med priser och beställ take away.",
    },
    h1: "Sushi vid Odenplan",
    etikett: "Itamae Odenplan · Odengatan 62",
    ingress: "Itamae på Odengatan 62 ligger i Vasastan, ett par hundra meter öster om Odenplan. Här har vi också vårt kontor.",
    stycken: [
      {
        rubrik: "Om restaurangen på Odengatan",
        text: [
          "Odengatan är en av de mest trafikerade gatorna i Vasastan, med tunnelbana och pendeltåg vid Odenplan. Det är nära att svänga förbi på väg hem och hämta en låda sushi, eller att beställa i förväg och ta med maten till Observatorielunden, som ligger runt hörnet.",
          "Vet du inte vad du vill ha är Joo ett bra ställe att börja: elva bitar blandad nigiri och norimaki för 159 kr. Gillar du rullar har vi Rainbow Roll med lax, tonfisk och räkor ovanpå, Spicy Tuna Roll med koriander och vår egen Itamae Special Roll med tempurafriterad räka och halstrad laxöring. Poké bowls finns med rå eller ångkokt lax, tonfisk, kyckling, nötkött, tofu och avokado.",
        ],
      },
      {
        rubrik: "Hitta hit",
        text: [
          "Restaurangen ligger knappt 250 meter från tunnelbanan vid Odenplan, där gröna linjen stannar. Pendeltåget vid Stockholm Odenplan ligger ungefär lika nära. Kommer du från Rådmansgatan på röda linjen är det cirka 500 meter att gå, och från S:t Eriksplan knappt en kilometer.",
        ],
      },
      {
        rubrik: "Lunch, take away och leverans",
        text: [
          "Köket är igång från klockan elva och stänger 21, alla dagar. Beställer du på Qopla innan du går från jobbet står lunchen klar i disken. Hemleverans går via Foodora, Wolt och Uber Eats.",
        ],
      },
      {
        rubrik: "Vegetariskt, barn och tillbehör",
        text: [
          "Äter du inte fisk finns vegetarisk sushi, Avocado Roll, Tofurulle och poké bowl med tofu eller avokado. Barnmenyn har fyra rätter för 119 kr: sushi med sex bitar utan topping, yakitori, yakiniku och shake-mushi, alla med ris. Till maten kan du lägga till edamame, misosoppa, wakamesallad eller kimchi, och såserna kostar 15 kr styck. Prova vår egen Itamae-soja eller tryffelmajon.",
        ],
      },
    ],
    faq: [
      { q: "Vilka öppettider har Itamae vid Odenplan?", a: "Vi har öppet 11.00–21.00 alla dagar i veckan." },
      { q: "Hur nära Odenplan ligger restaurangen?", a: "Knappt 250 meter från tunnelbanan vid Odenplan, på Odengatan 62. Rådmansgatan ligger cirka 500 meter bort." },
      { q: "Kan jag beställa take away eller hemleverans?", a: "Ja. Beställ på Qopla och hämta i restaurangen, eller få maten levererad via Foodora, Wolt eller Uber Eats." },
      { q: "Vad betyder Itamae?", a: "Itamae är japanska och betyder köksmästare, det högsta en sushikock kan nå." },
      { q: "Hur länge har Itamae funnits?", a: "Vi öppnade vår första sushirestaurang år 2000." },
      { q: "Vad kostar sushin?", a: "Blandad sushi kostar 129 kr för åtta bitar, 159 kr för elva och 189 kr för fjorton. Poké bowls kostar 159–175 kr och rullarna 159–185 kr." },
      { q: "Hur betalar jag?", a: "Restaurangen är kontantfri. Vi tar kort och Swish." },
    ],
    tips: ["Joo", "Rainbow Roll", "Itamae Special Roll", "Spicy Tuna Roll"],
  },
  {
    id: "hagastaden",
    name: "Hagastaden",
    fulltNamn: "Itamae Hagastaden",
    address: "Norra Stationsgatan 66E-66F",
    postnummer: "113 64",
    ort: "Stockholm",
    zipCode: "113 64 Stockholm",
    phone: "08-32 71 32",
    geo: { lat: 59.34740445412145, lng: 18.03680259775461 },
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d61d4c8d62911d4785.jpeg",
    orderUrl: "https://qopla.com/restaurant/itamae---hagastaden/qAa9ZDPdv1/order",
    isGrill: false,
    hours: { var: "11.00-21.00", lor: "11.00-21.00", son: "11.00-21.00" },
    veckotider: alla("11:00", "21:00"),
    hoursDisplay: [{ label: "Alla dagar", value: "11.00–21.00" }],
    mapIframe: KARTA("https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748289780!5m2!1sen!2ses!6m8!1m7!1sxL07DVIDAr6wlcF-tvvLdg!2m2!1d59.34740445412145!2d18.03680259775461!3f308.7897302305288!4f3.7136599781424167!5f1.8719637665788689"),
    omraden: ["Hagastaden", "Norra Stationsgatan", "Karolinska", "Norrtull", "S:t Eriksplan", "Stockholm"],
    seo: {
      titel: "Sushi i Hagastaden | Itamae, Norra Stationsgatan 66",
      beskrivning: "Sushi och poké bowls på Norra Stationsgatan 66 i Hagastaden, nära Karolinska, Norrtull och S:t Eriksplan. Öppet 11–21 alla dagar. Se menyn med priser och beställ.",
    },
    h1: "Sushi i Hagastaden",
    etikett: "Itamae Hagastaden · Norra Stationsgatan 66",
    ingress: "Vi finns på Norra Stationsgatan 66 i Hagastaden, vid Norra Stationsparken och ett par kvarter från Karolinska.",
    stycken: [
      {
        rubrik: "Om restaurangen i Hagastaden",
        text: [
          "Kvarteren mellan Karolinska och Norra Stationsgatan har byggts upp de senaste åren, med nya bostäder, kontor och forskning kring sjukhuset. Mitt i det ligger vår restaurang, med samma sushi och samma meny som på Fleminggatan och Odengatan.",
          "Till lunch passar en poké bowl, till exempel med rå lax, ångkokt lax eller teriyakikyckling, alla med ris, grönsaker och chilimajonnäs. Vill du ha något varmt finns yakiniku med tunnskivat nötkött och yakinikusås. Vill du bara ha något litet räcker en temaki för 59 kr. Är du hungrig, ta Sashimi Moriawase med blandade fiskfiléer.",
        ],
      },
      {
        rubrik: "Hitta hit",
        text: [
          "Norra Stationsparken ligger precis utanför, och till Karolinska universitetssjukhuset är det drygt 400 meter. Bor du kring Norrtullsgatan eller Vanadisplan är vi den Itamae som ligger närmast. Närmaste pendeltåg är Stockholm Odenplan, omkring 650 meter bort. Till tunnelbanan vid S:t Eriksplan eller Odenplan är det ungefär tio minuters promenad.",
        ],
      },
      {
        rubrik: "Lunch, take away och leverans",
        text: [
          "Vi har öppet 11–21 varje dag. Den som inte vill stå i kö beställer på Qopla och hämtar. Hemkörning sköts av Foodora, Wolt och Uber Eats. Ska ni beställa till ett möte eller till många på jobbet, ring 08-32 71 32 i god tid.",
        ],
      },
      {
        rubrik: "Sushi till jobbet eller gruppen",
        text: [
          "Runt Hagastaden finns sjukhuset, forskningen och kontoren inom några minuters promenad. Ska ni äta tillsammans räcker Familjesushi från 399 kr till flera, och Toku-Joo med fjorton bitar kostar 189 kr. Beställ på Qopla i förväg så står maten klar när ni kommer. Den som inte äter fisk kan välja vegetarisk sushi, Tofurulle eller poké bowl med tofu, och barnmenyn kostar 119 kr.",
        ],
      },
    ],
    faq: [
      { q: "Vilka öppettider har Itamae Hagastaden?", a: "Vi har öppet 11.00–21.00 alla dagar i veckan." },
      { q: "Ligger Itamae nära Karolinska?", a: "Ja. Restaurangen ligger på Norra Stationsgatan 66, drygt 400 meter från Karolinska universitetssjukhuset." },
      { q: "Ligger restaurangen nära S:t Eriksplan och Norrtull?", a: "Ja. Från S:t Eriksplan är det ungefär tio minuters promenad, och Norrtull ligger strax norr om oss längs Norra Stationsgatan." },
      { q: "Vilken tunnelbana eller pendeltåg ligger närmast?", a: "Pendeltåget vid Stockholm Odenplan, omkring 650 meter bort. Tunnelbanan vid S:t Eriksplan och Odenplan ligger ungefär tio minuters promenad bort." },
      { q: "Kan jag beställa take away eller hemleverans?", a: "Ja. Beställ på Qopla och hämta i restaurangen, eller välj leverans via Foodora, Wolt eller Uber Eats." },
      { q: "Finns det vegetariska rätter?", a: "Ja, bland annat vegetarisk sushi, Avocado Roll, Tofurulle och poké bowl med tofu eller avokado." },
      { q: "Vad kostar sushin?", a: "Blandad sushi kostar 129 kr för åtta bitar, 159 kr för elva och 189 kr för fjorton. Poké bowls kostar 159–175 kr och rullarna 159–185 kr." },
      { q: "Finns det barnmeny?", a: "Ja, fyra barnrätter för 119 kr, bland annat sushi med sex bitar utan topping och yakitori med ris." },
      { q: "Hur betalar jag?", a: "Restaurangen är kontantfri. Vi tar kort och Swish." },
    ],
    tips: ["Poké Bowl Lax", "Chicken Teriyaki Bowl", "Yakiniku", "Sashimi Moriawase"],
  },
  {
    id: "sundbyberg",
    name: "Sundbyberg",
    fulltNamn: "Itamae Sushi & Grill Sundbyberg",
    address: "Landsvägen 33",
    postnummer: "172 63",
    ort: "Sundbyberg",
    zipCode: "172 63 Sundbyberg",
    phone: "08-28 78 28",
    geo: { lat: 59.35990314274139, lng: 17.97223218007605 },
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d6bffadfdbf6766b34.jpeg",
    orderUrl: "https://qopla.com/restaurant/itamae-sushi-&-grill---sundbyberg/qbgL3aM4Ov/order",
    isGrill: true,
    hours: { var: "11.00-21.00", lor: "11.00-22.00", son: "11.00-21.00" },
    veckotider: [
      ["11:00", "21:00"], ["11:00", "21:00"], ["11:00", "21:00"], ["11:00", "21:00"],
      ["11:00", "22:00"], ["11:00", "22:00"], ["11:00", "21:00"],
    ],
    hoursDisplay: [
      { label: "Fre–lör", value: "11.00–22.00" },
      { label: "Sön–tor", value: "11.00–21.00" },
    ],
    mapIframe: KARTA("https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748163634!5m2!1sen!2ses!6m8!1m7!1sy9eZvuDyk5x5BMHALuCzMw!2m2!1d59.35990314274139!2d17.97223218007605!3f250.7489!4f0!5f0.7820865974627469"),
    omraden: ["Sundbyberg", "Sundbybergs centrum", "Landsvägen", "Solna strand", "Duvbo"],
    seo: {
      titel: "Sushi i Sundbyberg | Itamae Sushi & Grill, Landsvägen 33",
      beskrivning: "Sushi, poké bowls och hamburgare på Landsvägen 33 i Sundbybergs centrum. Öppet 11–21, fredag och lördag till 22. Se menyn med priser och beställ take away.",
    },
    h1: "Sushi och grill i Sundbyberg",
    etikett: "Itamae Sushi & Grill · Landsvägen 33",
    ingress: "I Sundbyberg heter vi Itamae Sushi & Grill. Restaurangen ligger på Landsvägen 33, mitt i centrum och ett par minuter från stationen.",
    stycken: [
      {
        rubrik: "Om restaurangen i Sundbyberg",
        text: [
          "Sundbyberg är den enda av våra restauranger där det finns hamburgare på menyn. Burgarna görs på högrev och bringa och serveras med pommes, och alla går att få med Beyond Meat eller pankofriterad kyckling i stället. Så när halva sällskapet vill ha sushi och resten inte, behöver ni inte bråka om var ni ska äta.",
          "Sushin är densamma som på våra andra ställen, men menyn är större här. Utöver den vanliga sushin och rullarna finns Crispy Tuna Roll, Tonkatsu Roll, två sushiburritos, sallader med äggnudlar och en Panko Chicken Bowl med pankofriterat kycklingbröst och sweet mayo.",
        ],
      },
      {
        rubrik: "Hitta hit",
        text: [
          "Tunnelbanan vid Sundbybergs centrum på blå linjen ligger runt 100 meter bort, och pendeltåget stannar vid Sundbybergs station precis intill. Tvärbanan har också hållplats i centrum. Från Solna strand är det ungefär 600 meter att gå.",
        ],
      },
      {
        rubrik: "Lunch, take away och leverans",
        text: [
          "Vi öppnar klockan elva varje dag. Fredag och lördag har vi öppet till 22, övriga dagar till 21. Beställ på Qopla och hämta, eller få maten levererad med Foodora, Wolt eller Uber Eats. Familjesushi från 399 kr räcker till flera, och barnmenyn kostar 119 kr.",
        ],
      },
      {
        rubrik: "Sushi i Sumpan för hela sällskapet",
        text: [
          "Sumpan, som många kallar Sundbyberg, har ett centrum där det mesta ligger nära. Hos oss kan barnen välja sushi med sex bitar utan topping eller yakitori med ris för 119 kr, medan de vuxna tar en Rainbow Roll eller en Kimosabe Burger med brieost och rödlöksmarmelad. Vegetarianer har vegetarisk sushi, Tofurulle, Avokado Bowl och burgare med Beyond Meat att välja mellan.",
        ],
      },
    ],
    faq: [
      { q: "Vilka öppettider har Itamae i Sundbyberg?", a: "Söndag till torsdag 11.00–21.00, fredag och lördag 11.00–22.00." },
      { q: "Har Itamae i Sundbyberg hamburgare?", a: "Ja. Sundbyberg är vår enda restaurang med grill. Burgarna görs på högrev och bringa och serveras med pommes." },
      { q: "Kan jag få hamburgaren vegetarisk?", a: "Ja, alla burgare kan göras med Beyond Meat. Du kan också välja pankofriterad kyckling." },
      { q: "Hur tar jag mig till restaurangen?", a: "Landsvägen 33 ligger runt 100 meter från tunnelbanan vid Sundbybergs centrum. Pendeltåg och tvärbana stannar också i centrum." },
      { q: "Kan jag beställa take away eller hemleverans?", a: "Ja. Beställ på Qopla och hämta i restaurangen, eller välj leverans via Foodora, Wolt eller Uber Eats." },
      { q: "Vad kostar maten?", a: "Blandad sushi kostar 129 kr för åtta bitar, 159 kr för elva och 189 kr för fjorton. Poké bowls kostar 159–179 kr och hamburgarna 139–145 kr med pommes." },
      { q: "Hur betalar jag?", a: "Restaurangen är kontantfri. Vi tar kort och Swish." },
    ],
    tips: ["Kimosabe Burger", "Crispy Tuna Roll", "Panko Chicken Bowl", "Familjesushi"],
  },
  {
    id: "danderyd",
    name: "Danderyd",
    fulltNamn: "Itamae Danderyd",
    address: "Golfvägen 2",
    postnummer: "182 31",
    ort: "Danderyd",
    zipCode: "182 31 Danderyd",
    phone: "08-32 73 32",
    geo: { lat: 59.39671684193847, lng: 18.03666504119831 },
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d6bffadf11f1766b33.jpg",
    orderUrl: "https://qopla.com/restaurant/itamae---danderyd/q3Prp4Xj7z/order",
    isGrill: false,
    hours: { var: "11.00-21.00", lor: "11.00-21.00", son: "11.00-21.00" },
    veckotider: alla("11:00", "21:00"),
    hoursDisplay: [{ label: "Alla dagar", value: "11.00–21.00" }],
    mapIframe: KARTA("https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748474107!5m2!1sen!2ses!6m8!1m7!1sBj9pkpyWlavRp11sY6ZxyA!2m2!1d59.39671684193847!2d18.03666504119831!3f65.52715188774451!4f-1.2362561577949123!5f1.8051929351732046"),
    omraden: ["Danderyd", "Mörby centrum", "Danderyds centrum", "Mörby", "Djursholm"],
    seo: {
      titel: "Sushi i Mörby centrum, Danderyd | Itamae, Golfvägen 2",
      beskrivning: "Itamae på Golfvägen 2 vid Mörby centrum, i dag Danderyds centrum. Sushi, poké bowls och varma rätter, öppet 11–21 alla dagar. Se menyn med priser och beställ.",
    },
    h1: "Sushi i Mörby centrum, Danderyd",
    etikett: "Itamae Danderyd · Golfvägen 2",
    ingress: "Vår restaurang i Danderyd ligger på Golfvägen 2 vid Mörby centrum, som i dag heter Danderyds centrum. Tunnelbanan har ändstation ett par hundra meter bort.",
    stycken: [
      {
        rubrik: "Om restaurangen i Danderyd",
        text: [
          "Det här är vår nordligaste restaurang och den som ligger närmast för dig som bor i Danderyd, Mörby eller Djursholm. Det är lätt att ta med middag hem efter att ha handlat i centrumet, och röda linjen in mot stan börjar ett par hundra meter bort.",
          "Menyn är samma som i innerstan. Är ni flera som vill dela är Toku-Joo med fjorton bitar eller Familjesushi ett bra val. För den som vill ha fisk utan ris finns Sashimi Shake och Sashimi Moriawase. Chirashi är fiskfiléer och skaldjur på en bädd av sushiris, toppad med rom och salladslök.",
        ],
      },
      {
        rubrik: "Hitta hit",
        text: [
          "Tunnelbanans röda linje har sin ändstation i Mörby centrum, drygt 200 meter från restaurangen. Danderyds sjukhus ligger en station söderut, omkring 700 meter bort. Mörby park ligger precis bakom.",
        ],
      },
      {
        rubrik: "Lunch, take away och leverans",
        text: [
          "Vi har öppet 11–21 alla dagar. Handla klart i centrumet medan köket gör din beställning från Qopla, eller låt Foodora, Wolt eller Uber Eats köra hem den. Ska du beställa till många, ring 08-32 73 32 i god tid.",
        ],
      },
      {
        rubrik: "Vegetariskt, barn och tillbehör",
        text: [
          "Den som inte äter fisk kan välja vegetarisk sushi, Avocado Roll, Tofurulle eller poké bowl med tofu eller avokado. Barnmenyn har fyra rätter för 119 kr, bland annat sushi med sex bitar utan topping och yakitori med ris. Vill du ha något vid sidan av finns edamame, misosoppa, kimchi och en marinerad bläckfisksallad med chili, och såserna kostar 15 kr styck.",
        ],
      },
    ],
    faq: [
      { q: "Vilka öppettider har Itamae i Danderyd?", a: "Vi har öppet 11.00–21.00 alla dagar i veckan." },
      { q: "Är Mörby centrum och Danderyds centrum samma sak?", a: "Ja, det är samma centrum vid tunnelbanans ändstation. Vi ligger på Golfvägen 2." },
      { q: "Hur tar jag mig till Itamae i Danderyd?", a: "Åk röda linjen till Mörby centrum. Restaurangen ligger drygt 200 meter från stationen." },
      { q: "Kan jag beställa take away eller hemleverans?", a: "Ja. Beställ på Qopla och hämta i restaurangen, eller välj leverans via Foodora, Wolt eller Uber Eats." },
      { q: "Finns det vegetarisk sushi?", a: "Ja, vegetarisk sushi, Avocado Roll, Tofurulle och poké bowl med tofu eller avokado." },
      { q: "Vad kostar sushin?", a: "Blandad sushi kostar 129 kr för åtta bitar, 159 kr för elva och 189 kr för fjorton. Poké bowls kostar 159–175 kr och rullarna 159–185 kr." },
      { q: "Finns det barnmeny?", a: "Ja, fyra barnrätter för 119 kr, bland annat sushi med sex bitar utan topping och yakitori med ris." },
      { q: "Hur betalar jag?", a: "Restaurangen är kontantfri. Vi tar kort och Swish." },
    ],
    tips: ["Toku-Joo", "Familjesushi", "Sashimi Moriawase", "Chirashi"],
  },
];

/** Samma ordning som på sajten före 3/11 2026. */
const ORDNING = ["kungsholmen", "sundbyberg", "hagastaden", "odengatan", "danderyd"];
export const locations: Plats[] = ORDNING.map(id => allaPlatser.find(p => p.id === id)!);

export const hittaPlats = (id?: string) => locations.find(l => l.id === id);
