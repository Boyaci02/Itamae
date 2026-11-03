# Sökordskarta Itamae Sushi

Gjord 3 november 2026. Ska följas upp varje månad i SEO-rapporten (position före/efter per sökord).

Källstatus:
- Search Console, båda egenskaperna (itamae.se och www.itamae.se), 4/8 till 1/11 2026: hämtat (`gsc/`, skript `gsc/hamta-gsc.py`)
- Search Console, sidrapport 16 månader (gamla WordPress-adresser): hämtat (`gsc/p-16man-*.json`)
- Sökordskarta oktober från autopilotens verktyg (`syns-nu-seo/data/26/keyword-map-2026-10.json`): använd för målsidorna
- Sökvolym: **uppskattad**, ingen uppmätt. DataForSEO, Keywords Everywhere och Google Ads sökordsplanerare är inte tillgängliga (ingen nyckel, Ads-kontot utloggat). Volym = GSC-visningar per månad (90 dagar delat med 3, högsta värdet av de två egenskaperna, aldrig summan). Under position 10 är siffran ett golv. Google autocomplete (sv/se) bekräftar att fraserna finns.
- Vem som ligger över Itamae: Google sv/se via Playwright för 11 sökord, Bing sv-SE för resten (Google gav CAPTCHA). Detaljer per sökord: `research-sokord-konkurrenter.md`.

Varumärkesklick 90 dagar: 9 964. Övriga klick: 846 (8 %).

## Topp 20

| # | Sökord | Volym/mån (uppsk.) | Pos nu | Klick 90 d | Målsida | Titel som nu står på målsidan |
|---|---|---|---|---|---|---|
| 1 | sushi sundbyberg | ca 713 | 4,9 | 83 | /location/sundbyberg | Sushi i Sundbyberg \| Itamae Sushi & Grill, Landsvägen 33 |
| 2 | sushi mörby centrum | ca 445 | 2,3 | 210 | /location/danderyd | Sushi i Mörby centrum, Danderyd \| Itamae, Golfvägen 2 |
| 3 | sushi nära mig | ca 431 | 9,0 | 5 | / och Google-profilerna | Itamae Sushi \| Sushi i Stockholm sedan 2000, fem restauranger |
| 4 | sushi odenplan | ca 424 | 5,5 | 60 | /location/odengatan | Sushi vid Odenplan \| Itamae, Odengatan 62 |
| 5 | sushi kungsholmen | ca 375 | 10,0 | 8 | /location/kungsholmen | Sushi på Kungsholmen \| Itamae, Fleminggatan 16 |
| 6 | sushi fridhemsplan | ca 190 | 10,0 | 0 | /location/kungsholmen | (samma) |
| 7 | sushi stockholm | ca 189 | 10,0 | 5 | /restauranger | Våra sushirestauranger i Stockholm \| Itamae Sushi |
| 8 | sushi danderyd | ca 174 | 3,8 | 57 | /location/danderyd | (samma som 2) |
| 9 | sushi odengatan | ca 174 | 8,0 | 7 | /location/odengatan | (samma som 4) |
| 10 | sushi mörby | ca 122 | 2,2 | 70 | /location/danderyd | (samma som 2) |
| 11 | sushi fleminggatan | ca 118 | 4,0 | 30 | /location/kungsholmen | (samma som 5) |
| 12 | sushi danderyds centrum | ca 102 | 3,5 | 30 | /location/danderyd | (samma som 2) |
| 13 | sushi restaurang | ca 93 | 8,2 | 1 | /restauranger | (samma som 7) |
| 14 | sushi hagastaden | ca 75 | 4,8 | 14 | /location/hagastaden | Sushi i Hagastaden \| Itamae, Norra Stationsgatan 66 |
| 15 | sushi st eriksplan (+ sankt eriksplan) | minst 105 | 12,1 | 2 | /location/hagastaden | (samma som 14) |
| 16 | sushi norrtullsgatan | ca 64 | 10,1 | 2 | /location/hagastaden | (samma som 14) |
| 17 | familjesushi (+ familje sushi) | ca 89 | 9,7 | 4 | /meny | Itamae meny med priser \| Sushi, poké bowls och varma rätter |
| 18 | restaurang/restauranger mörby centrum | ca 180 (3 varianter) | 3,0–3,7 | 8 | /location/danderyd | (samma som 2) |
| 19 | bästa sushi sundbyberg | ca 48 | 10,2 | 3 | /location/sundbyberg | (samma som 1) |
| 20 | sushi take away | ca 24 | 8,0 | 2 | /meny och restaurangsidorna | (samma som 17) |

Varumärkesmål vid sidan av listan: "itamae meny" (ca 128/mån, pos 1,6) och "itamae sundbyberg meny" landar nu på /meny respektive restaurangsidans `#meny`. Före 3/11 gick de till en startsida utan meny.

Avvikelse från oktoberkartan: S:t Eriksplan och Norrtullsgatan pekas mot Hagastaden (närmast, 760 m respektive granne), inte Kungsholmen (950 m). Odenplan och Odengatan pekas mot Odengatan-restaurangen, som ligger 245 m från Odenplan. Fridhemsplan och Fleminggatan pekas mot Kungsholmen.

## Varför andra ligger över (sammanfattning)

1. **itamae.se gick inte att läsa för Google.** Varje adress gav samma tomma skal med startsidans canonical, och itamae.se svarade 307 till www. De gamla WordPress-adresserna (som /kungsholmen, 16 000 visningar på 90 dagar) visade en tom sida. Positionerna på "sushi mörby centrum" och "sushi sundbyberg" kommer med största sannolikhet från kartpaketet, inte från sajten.
2. **Kataloger och leveransappar tar 4 till 7 av de tio platserna** (Foodora, Wolt, Uber Eats, TheFork, Tripadvisor, Thatsup, sushikartan). Itamae syns ofta där, via Foodora och Wolt, men inte via egen sajt.
3. **Kartpaketet:** Itamae Mörby har 3,5 (154 omdömen) mot Kirins 4,0 (389) och Noras 4,9. Hagastaden har 3,9 (52). I Sundbyberg, vid Odengatan och för "sushi danderyd" syns Itamae inte i kartpaketet alls. Det kräver Google-profilerna, som vi inte förvaltar än.
4. **Konkurrenterna har en sida per ort och per rätt** med orten i titel och H1: INO (Fleminggatan 95 i titeln), Umami (Fridhemsplan-sida, ca 1 000 ord, FAQPage), RAW ("Sushi Vasastan"), M Sushi och Sora (/familjesushi), Lulu och Sushi Natu (Sundbyberg-sidor).
5. **Menyn som HTML:** Gigis, Kirin och de flesta i topp 10 har menyn som text. Itamaes meny fanns bara på Qopla.

Obs: Umami Sushi, också kund hos Syns Nu, ligger över Itamae på Fridhemsplan och Danderyd.

## Gjort på sajten 3/11 (åtgärd per sökord)

- Egen förrenderad sida per restaurang med orten i titel, H1 och beskrivning, 420–470 ord löptext och FAQ, karta, öppettider, avstånd till T-bana/pendeltåg (uppmätt mot OpenStreetMap) och hela menyn med priser.
- Danderyd-sidan nämner både Mörby centrum och Danderyds centrum (titel, H1, ingress, FAQ, schema areaServed).
- Hagastaden-sidan tar Norrtull och S:t Eriksplan, Kungsholmen tar Fridhemsplan, Rådhuset och Fleminggatan, Odengatan tar Odenplan och Vasastan, Sundbyberg tar Sumpan och "Sushi & Grill".
- /meny för "itamae meny" och "familjesushi" (Familjesushi från 399 kr står i menyn och i texten på fyra restaurangsidor).
- /restauranger för "sushi stockholm" och "sushi restaurang".
- Schema: Restaurant + Menu/MenuItem + FAQPage + BreadcrumbList per restaurang, Organization + WebSite + ItemList på startsidan.
- 301 från alla gamla adresser med visningar till rätt ny sida.

## Nästa månad (förslag, inte byggt)

- Google-profilerna: förvaltaråtkomst, rätt webbplats per profil (till /location/...), kategori "Sushirestaurang", inlägg och foton. Det är det som flyttar kartpaketet.
- Recensioner: Mörby (3,5) och Hagastaden (3,9) behöver fler omdömen. QR på kvitto/bord.
- Egna sidor: "poke bowl" (Hagastaden, Sundbyberg), "sushi take away", "familjesushi" som egen sida om /meny inte räcker, "sushi vasastan".
- Kataloger: Thatsup, Tripadvisor, Reco för de restauranger som saknas.
- Riktiga volymer: logga in Google Ads (Syns Nus MCC) i Chrome så kan sökordsplaneraren köras på listan.
