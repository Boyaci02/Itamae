/**
 * Sidan /sushi-bar: text och frågor. Allt bygger på fakta som redan finns i
 * platser.ts, meny.json (Qopla) och FAQ_ALLMAN i sidor.ts. Itamaes namn på
 * Instagram är itamaesushibar (se sameAs i sidor.ts).
 */
import type { Faq, Stycke } from "./platser";

export const SUSHIBAR = {
  titel: "Sushi bar i Stockholm | Itamae Sushi Bar, fem restauranger",
  beskrivning: "Itamae Sushi Bar har fem sushirestauranger i Stockholm: Kungsholmen, Odenplan, Hagastaden, Sundbyberg och Mörby centrum. Blandad sushi från 129 kr, poké bowls och take away.",
  h1: "Sushi bar i Stockholm",
  ingress: "Itamae Sushi Bar är fem restauranger, tre i innerstan, en i Sundbyberg och en i Danderyd. Vi har gjort sushi i Stockholm sedan 2000.",
};

export const SUSHIBAR_STYCKEN: Stycke[] = [
  {
    rubrik: "Samma sushi på fem ställen",
    text: [
      "Itamae betyder köksmästare på japanska, det högsta en sushikock kan nå. Det är namnet på alla våra restauranger, och på Instagram heter vi itamaesushibar.",
      "Menyn är densamma på Kungsholmen, Odengatan, Hagastaden och i Danderyd. Blandad sushi finns i tre storlekar: Nami med åtta bitar för 129 kr, Joo med elva för 159 kr och Toku-Joo med fjorton för 189 kr. Vill du hellre välja själv finns nigiri med bara lax, räka, tonfisk eller avokado, sashimi, chirashi, temaki och ett dussin rullar. I Sundbyberg heter vi Itamae Sushi & Grill. Där finns samma sushi och dessutom hamburgare.",
    ],
  },
  {
    rubrik: "Mer än sushi",
    text: [
      "Poké bowls görs med rå eller ångkokt lax, tonfisk, teriyakikyckling, nötkött, tofu eller avokado. Yakiniku, yakitori och shake-mushi är de varma rätterna, och alla serveras med ris.",
      "Äter du inte fisk finns vegetarisk sushi, Avocado Roll och Tofurulle. Barnen kan välja mellan fyra rätter för 119 kr, till exempel sushi med sex bitar utan topping.",
    ],
  },
  {
    rubrik: "Take away och hemleverans",
    text: [
      "Alla restauranger öppnar klockan elva. Beställ på Qopla och hämta när maten är klar, eller få den hemkörd med Foodora, Wolt eller Uber Eats. Vi är kontantfria och tar kort och Swish.",
    ],
  },
];

/** En rad om läget per restaurang, från texterna i platser.ts. */
export const SUSHIBAR_LAGE: Record<string, string> = {
  kungsholmen: "Drygt 300 meter från T-bana Rådhuset.",
  odengatan: "Knappt 250 meter från tunnelbanan vid Odenplan.",
  hagastaden: "Vid Norra Stationsparken, drygt 400 meter från Karolinska universitetssjukhuset.",
  sundbyberg: "Runt 100 meter från tunnelbanan vid Sundbybergs centrum. Här finns också hamburgare.",
  danderyd: "Drygt 200 meter från tunnelbanan i Mörby centrum.",
};

export const SUSHIBAR_FAQ: Faq[] = [
  { q: "Var finns Itamae Sushi Bar?", a: "Vi har fem restauranger: Fleminggatan 16 på Kungsholmen, Odengatan 62 vid Odenplan, Norra Stationsgatan 66 i Hagastaden, Landsvägen 33 i Sundbyberg och Golfvägen 2 i Mörby centrum, Danderyd." },
  { q: "Vad betyder Itamae?", a: "Itamae betyder köksmästare på japanska, det högsta en sushikock kan nå." },
  { q: "Vilka öppettider har ni?", a: "Alla restauranger öppnar 11.00. Kungsholmen, Odengatan, Hagastaden och Danderyd stänger 21.00 alla dagar. Sundbyberg stänger 21.00 söndag till torsdag och 22.00 fredag och lördag." },
  { q: "Har ni annat än sushi?", a: "Ja. Poké bowls, varma rätter som yakiniku och yakitori, och i Sundbyberg även hamburgare från grillen." },
  { q: "Kan jag beställa take away?", a: "Ja. På varje restaurangs sida finns knappen Beställ take away, som leder till beställningen på Qopla. Hemleverans går via Foodora, Wolt och Uber Eats." },
  { q: "Hur betalar jag?", a: "Vi är kontantfria och tar kort och Swish." },
];
