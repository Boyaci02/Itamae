# Itamae Sushi: sökord och konkurrenter

Gjord 3 november 2026. Underlag: GSC 90 dagar (4/8 till 1/11 2026), Google-autoförslag, Google- och Bing-sökningar gjorda samma dag och hämtning av konkurrenternas sidor. Ingen kod på itamae.se är ändrad och ingen har kontaktats.

## Källstatus

| Källa | Status | Kommentar |
|---|---|---|
| DataForSEO | Ej tillgänglig | Ingen MCP och inga inloggningsuppgifter i `~/.claude`, projektets `.claude/settings*.json`, miljövariabler eller `syns-nu-seo/config/.env.seo` |
| Keywords Everywhere | Ej tillgänglig | Ingen API-nyckel i miljö eller konfiguration |
| Google Ads Keyword Planner | Ej tillgänglig | Ingen `google-ads.yaml` och inget developer_token på datorn (biblioteket finns i `.venv-seo` men utan inloggningsuppgifter). Försökte via Chrome: kontot emanuelboyaci02@gmail.com är utloggat och jag loggar inte in med lösenord |
| GSC (de hämtade filerna) | OK | `gsc/fragor-sammanslagna-90d.json` och `qp-*.json` |
| Google-autoförslag | OK | suggestqueries.google.com, hl=sv, gl=se. Bekräftar att fraserna finns, ger ingen volym |
| Google-sökning (google.se, hl=sv, gl=se, pws=0) | Delvis OK | 11 sökord hämtades via Playwright, sedan kom en CAPTCHA (HTTP 429) och jag stoppade. Var Google tror att datorn står är okänt (autoförslagen pekade på Dalarna), men alla sökord har en ortsangivelse |
| Bing (sv-SE, i webbläsaren) | OK | Används för de sökord Google inte hann med. Bing via curl gav fel resultat (frågorna skrevs om) och användes inte |
| DuckDuckGo | Ej tillgänglig | Blockerades (svar 202, robotsida) |

**Volymerna nedan är alla uppskattade, ingen är uppmätt.** Metoden: GSC-visningar i 90 dagar delat med 3, alltså per månad. Det håller för lokala sökord där Itamae ligger på position 1 till 10, eftersom Google då visar Itamae (oftast i kartpaketet) för nästan varje sökning. Ligger Itamae under position 10 är siffran ett golv: den riktiga volymen är högre. Visningarna är det högsta värdet av www- och apex-egenskapen och aldrig summan. Ett undantag: "sushi" (pos 11) visas bara för en liten del av sökningarna, så den volymen går inte att uppskatta på det här sättet. "Sushi nära mig" räknar bara sökningar gjorda nära någon av restaurangerna.

## Alla kandidater

| Sökord | Volym/mån | Källa | GSC-position | GSC-visningar 90 d | Klick 90 d | Autocomplete |
|---|---|---|---|---|---|---|
| sushi | långt över 2 400 (ej uppskattningsbar) | GSC-visningar täcker bara en bråkdel vid pos 11 | 11,3 | 7301 | 7 | ja |
| sushi sundbyberg | ca 713 | Uppskattad, GSC-visningar/3 | 4,9 | 2138 | 83 | ja |
| sushi mörby centrum | ca 445 | Uppskattad, GSC-visningar/3 | 2,3 | 1335 | 210 | ja |
| sushi nära mig | ca 431 | Uppskattad, GSC-visningar/3 | 9,0 | 1294 | 5 | ja |
| sushi odenplan | ca 424 | Uppskattad, GSC-visningar/3 | 5,5 | 1273 | 60 | ja |
| sushi kungsholmen | ca 375 | Uppskattad, GSC-visningar/3 | 10,0 | 1125 | 8 | ja |
| sushi fridhemsplan | ca 190 | Uppskattad, GSC-visningar/3 | 10,0 | 571 | 0 | ja |
| sushi stockholm | ca 189 | Uppskattad, GSC-visningar/3 | 10,0 | 568 | 5 | ja |
| sushi danderyd | ca 174 | Uppskattad, GSC-visningar/3 | 3,8 | 523 | 57 | ja |
| sushi odengatan | ca 174 | Uppskattad, GSC-visningar/3 | 8,0 | 523 | 7 | ja |
| sushi mörby | ca 122 | Uppskattad, GSC-visningar/3 | 2,2 | 367 | 70 | ja |
| sushi fleminggatan | ca 118 | Uppskattad, GSC-visningar/3 | 4,0 | 355 | 30 | ja |
| sushi danderyds centrum | ca 102 | Uppskattad, GSC-visningar/3 | 3,5 | 306 | 30 | ja |
| sushi restaurang | ca 93 | Uppskattad, GSC-visningar/3 | 8,2 | 279 | 1 | ja |
| sushi hagastaden | ca 75 | Uppskattad, GSC-visningar/3 | 4,8 | 226 | 14 | ja |
| sushi st eriksplan | minst 75 | Uppskattad, GSC (golv, pos > 10) | 12,1 | 226 | 2 | ja |
| sushi sankt eriksplan | minst 29 | Uppskattad, GSC (golv, pos > 10) | 12,0 | 88 | 0 | ja |
| sushi norrtullsgatan | ca 64 | Uppskattad, GSC-visningar/3 | 10,1 | 191 | 2 | - |
| sushi runstensplan | ca 72 | Uppskattad, GSC-visningar/3 | 8,2 | 215 | 0 | - |
| sushi öppet nu | ca 53 | Uppskattad, GSC-visningar/3 | 8,7 | 159 | 0 | ja |
| sushi i närheten | ca 51 | Uppskattad, GSC-visningar/3 | 8,2 | 152 | 2 | - |
| bästa sushi sundbyberg | ca 48 | Uppskattad, GSC-visningar/3 | 10,2 | 143 | 3 | ja |
| sundbyberg sushi | ca 47 | Uppskattad, GSC-visningar/3 | 5,0 | 140 | 1 | - |
| odenplan sushi | ca 52 | Uppskattad, GSC-visningar/3 | 5,8 | 156 | 5 | - |
| mörby centrum sushi | ca 52 | Uppskattad, GSC-visningar/3 | 4,3 | 156 | 6 | - |
| danderyd sushi | ca 25 | Uppskattad, GSC-visningar/3 | 3,8 | 74 | 4 | - |
| sushi rådhuset | ca 14 | Uppskattad, GSC-visningar/3 | 9,3 | 41 | 0 | ja |
| sushi vasastan | minst 10 | Uppskattad, GSC (golv, pos > 10) | 16,4 | 30 | 0 | ja |
| sushi take away | ca 24 | Uppskattad, GSC-visningar/3 | 8,0 | 72 | 2 | ja |
| sushi takeaway | ca 12 | Uppskattad, GSC-visningar/3 | 8,6 | 37 | 0 | ja |
| take away sundbyberg | minst 11 | Uppskattad, GSC (golv, pos > 10) | 12,4 | 33 | 1 | ja |
| take away odenplan | minst 5 | Uppskattad, GSC (golv, pos > 10) | 12,3 | 14 | 0 | - |
| familjesushi | ca 68 | Uppskattad, GSC-visningar/3 | 9,7 | 205 | 4 | ja |
| familje sushi | ca 20 | Uppskattad, GSC-visningar/3 | 9,5 | 61 | 0 | - |
| familjesushi stockholm | ca 10 | Uppskattad, GSC-visningar/3 | 9,6 | 30 | 0 | ja |
| mörby centrum restauranger | ca 64 | Uppskattad, GSC-visningar/3 | 3,7 | 191 | 1 | ja |
| restaurang mörby centrum | ca 58 | Uppskattad, GSC-visningar/3 | 3,2 | 175 | 2 | ja |
| japansk restaurang kungsholmen | minst 24 | Uppskattad, GSC (golv, pos > 10) | 12,4 | 71 | 0 | ja |
| japansk restaurang odenplan | ca 13 | Uppskattad, GSC-visningar/3 | 9,7 | 40 | 0 | ja |
| japansk restaurang sundbyberg | ca 12 | Uppskattad, GSC-visningar/3 | 8,6 | 35 | 1 | ja |
| poke bowl hagastaden | ca 14 | Uppskattad, GSC-visningar/3 | 5,1 | 43 | 0 | ja |
| poke bowl sundbyberg | minst 13 | Uppskattad, GSC (golv, pos > 10) | 16,7 | 38 | 0 | ja |
| poke bowl kungsholmen | Ej uppskattningsbar | 9 visningar på pos 14 räcker inte | 13,8 | 9 | 0 | ja |
| poke bowl stockholm | Ej tillgänglig | Ingen volymkälla; finns i autocomplete | ingen visning | 0 | 0 | ja |
| sushi lunch | ca 14 | Uppskattad, GSC-visningar/3 | 10,5 | 43 | 0 | ja |
| lunch sushi | ca 11 | Uppskattad, GSC-visningar/3 | 10,0 | 33 | 0 | - |
| sushi catering stockholm | Ej uppskattningsbar | 1 visning på pos 41 räcker inte | 41,0 | 1 | 0 | ja |
| sushi hemleverans | minst 3 | Uppskattad, GSC (golv, pos > 10) | 10,7 | 10 | 0 | ja |
| yakiniku stockholm | minst 5 | Uppskattad, GSC (golv, pos > 10) | 12,3 | 15 | 0 | ja |
| lunch odenplan | Ej tillgänglig | Ingen volymkälla; finns i autocomplete | ingen visning | 0 | 0 | ja |
| lunch kungsholmen | Ej tillgänglig | Ingen volymkälla; finns i autocomplete | ingen visning | 0 | 0 | ja |
| lunch sundbyberg | ca 1 | Uppskattad, GSC-visningar/3 | 2,8 | 4 | 0 | ja |
| burgare sundbyberg | Ej tillgänglig | Ingen volymkälla; finns i autocomplete | ingen visning | 0 | 0 | ja |
| sushi karolinska | Ej tillgänglig | Ingen volymkälla; finns i autocomplete | ingen visning | 0 | 0 | ja |
| itamae meny | ca 128 | Uppskattad, GSC-visningar/3 | 1,6 | 385 | 235 | nej |
| itamae sundbyberg meny | ca 40 | Uppskattad, GSC-visningar/3 | 2,3 | 121 | 41 | - |

"Ej tillgänglig" betyder att ingen volymkälla fungerade och att Itamae inte haft en enda visning på sökordet i GSC. Frasen finns ändå i Googles autoförslag (kolumnen längst till höger), så folk söker på den. "itamae meny" fanns inte i autoförslagen i exakt den formen, men "itamae sushi meny" och "itamae odengatan meny" gjorde det.

## Topp 20: vem ligger över Itamae och varför

Itamaes position är snittet i GSC. Kolumnen "Över Itamae" visar organiska träffar 1 till 10 på Google den 3/11 (motor står i parentes). Om ett kartpaket visades står det sist.

| # | Sökord | Volym/mån (uppsk.) | Itamae pos | Över Itamae (motor) | Varför de ligger över | Målsida |
|---|---|---|---|---|---|---|
| 1 | sushi sundbyberg | ca 713 | 4,9 | thefork (Lulu), qopla (Koji), foodora stadssida, sushikartan, thefork (Din-Din), wolt (LuLu). itamae.se finns inte bland de tio, bara Itamaes sociala profil på plats 7. Kartpaket: Hanami 4,6 (123), Sushi Natu 4,3 (330), Esu Sushi & Poke 4,7 (206). (Google) | Kataloger och leveransappar dominerar. Itamae saknas i kartpaketet, där tre konkurrenter med 4,3 till 4,7 i betyg syns | /location/sundbyberg |
| 2 | sushi odenplan | ca 424 | 5,5 | foodora (MGL Sushi), tripadvisor (Minako), qopla (Malle Sushi), facebook (Minako), mapquest (Minako), sushisho.se, sedan wolt (Itamae Odenplan) på plats 7. Googles AI-översikt räknar upp Itamae Odenplan bland sex ställen. (Google) | Minako syns fyra gånger genom Tripadvisor (228 recensioner), Facebook och mapquest. Själva sajten är tunn: ingen schema, H1 på engelska. Ryktet gör jobbet | /location/odengatan |
| 3 | sushi kungsholmen | ca 375 | 10,0 | foodora (Naked Fish), ubereats (Yoku), sushikulturlindhagen.se, tripadvisor-lista, Naked Fish social profil, foodora (Itamae Kungsholmen) på plats 6, cylex, tripadvisor (Sukai), thatsup (Naked Fish). Leverantörsrutan visar Naked Fish, Haikyuu, Egi Sushi. (Google) | Naked Fish syns fem gånger. Sajten har Restaurant-schema med adress, öppettider och koordinater, och meta-beskrivningen är fylld med "kungsholmen sushi" och "rådhuset". Itamae syns bara via Foodora | /location/kungsholmen |
| 4 | sushi nära mig | ca 431 | 9,0 | Ej tillgänglig (resultatet beror på var sökaren står och kan inte hämtas rättvisande härifrån) | Ej tillgänglig. Avgörs av Google-profilerna | / plus Google-profilerna |
| 5 | sushi fridhemsplan | ca 190 | 10,0 | izakayasthlm.se, tripadvisor (Yami), yokusushi.se, thatsup (Ino), inoizakaya.se, umamisushi.se/japansk-restaurang-fridhemsplan, tripadvisor-lista, yumesushi.se, thatsup-lista, foodora (Yoku). Leverantörsrutan: INO Sushi 4,6 (1 600), Nagoya, RAI. (Google) | Umami har en egen landningssida för Fridhemsplan: titel och H1 med ortnamnet, cirka 1 000 ord och FAQPage-schema. INO har 1 600 betyg | /location/kungsholmen |
| 6 | sushi stockholm | ca 189 | 10,0 | foodora sushi-lista, hattorisushidevil.se, qopla (EDO), ubereats, thefork-topplista, izakayasthlm.se, moggesushi.se, tripadvisor-lista, YouTube-video, foodora Södermalm. (Google) | Brett sökord som domineras av listor och leveransappar. Svårt att vinna organiskt | /restauranger |
| 7 | sushi odengatan | ca 174 | 8,0 | gigis.se/lunch, gigis.se/dinner, Gigis social profil, thatsup-intervju (Gigis), facebook (Yume), wolt (Gigis), tripadvisor (Yume), sushiyama.se Odenplan, sushikartan. Kartpaket: Sushibygigis 4,8 (103), Yume Sushi 4,0 (298), Sushi Express 4,6 (296). (Google) | Gigis har menyn som vanliga HTML-sidor (lunch och middag) och fick pressomnämnanden när de öppnade. Itamae (Odengatan 62) saknas i kartpaketet | /location/odengatan |
| 8 | sushi danderyd | ca 174 | 3,8 | restrate (Nora), lunch-guiden (Nora), ubereats, Noras Instagram, ubereats (Nora), qopla (Umami Danderyd), qopla (Itamae Danderyd) på plats 7. Kartpaket: Nora Sushi 4,9 (82), Sushi Bar Kirin 4,0 (389), Akagi 4,8 (174). (Google) | Itamae saknas i kartpaketet för "danderyd". Nora har 4,9 i betyg och syns i flera lunchkataloger | /location/danderyd |
| 9 | sushi mörby centrum | ca 445 | 2,3 | sushibarkirin.se/meny-2, Kirins Instagram, wolt (Kirin), gastrogate (Kirin), foodora (Itamae Danderyd), danderydscentrum.se, sushikartan x2. Kartpaket: Sushi Bar Kirin 4,0 (389), **Itamae Sushi Bar 3,5 (154)**, Nora 4,9 (82). (Google) | itamae.se finns inte bland de tio organiska träffarna trots snittposition 2,3. Positionen och de 210 klicken kommer alltså med största sannolikhet från kartpaketet. Kirin syns fyra gånger organiskt och har bättre betyg (4,0 mot 3,5) | /location/danderyd |
| 10 | sushi st eriksplan | minst 75 | 12,1 | sushisho.se, tripadvisor (Izakaya Sthlm), Esa Sushi social profil, Esa-video, tripadvisor Vasastan-lista, thatsup.co.uk (Esa), sushiyama.se, inoizakaya.se, thatsup Torsplan, thatsup take away S:t Eriksplan. Leverantörsrutan: Izakaya Gävlegatan, RAW Sushi & Grill, Izakaya Sthlm. (Google) | Etablerade namn med många recensioner, plus Thatsup-listor per område. Itamae ligger långt ner | /location/odengatan |
| 11 | sushi fleminggatan | ca 118 | 4,0 | inoizakaya.se, inoizakaya.se/restauranger/ino-sushi (titel "INO SUSHI & BAR FLEMINGGATAN 95"), restaurangmenyn, thatsup (Saisho), foodora (INO), saishosushi.com, semeny (Matsu), **itamae.se på plats 8**. (Bing) | INO har en egen URL per restaurang med gatuadressen i titeln | /location/kungsholmen |
| 12 | sushi danderyds centrum | ca 102 | 3,5 | gastrogate (Kirin lunch), gastrogate (Kirin), qopla (Nora), Kirins Instagram, tripadvisor (stationen), sushikartan, foodora (Itamae Danderyd), ubereats, umamisushi.se (Danderyd-sida). Leverantörsrutan (UberEats): Itamae Sushi Danderyd 4,6 (476). (Google) | Kirin syns på lunchsajter (gastrogate). Umami har en sida som heter "Asiatisk restaurang i Danderyd". Att Mörby centrum byter namn till Danderyds centrum gör sökordet viktigare | /location/danderyd |
| 13 | sushi hagastaden | ca 75 | 4,8 | **foodora (Itamae Hagastaden) på plats 1**, dindinclub.se, kvartersmenyn, thatsup (Itamae Hagastaden), wolt (Itamae Hagastaden), kvartersmenyn, thatsup (Ino), Sushi Yama. Kartpaket: Izakaya Gävlegatan 4,8 (44), **itamae Hagastaden 3,9 (52)**, WATTAW 4,3 (274). (Google) | Itamae syns, men genom Foodora, Thatsup och Wolt och inte via itamae.se. Profilens webbplatslänk (hagastaden.itamae.se) är död, se diagnosrapporten | /location/hagastaden |
| 14 | familjesushi | ca 68 | 9,7 | msushilounge.com/familjesushi, sushiyama.se (familj/catering), tsukihana.net/lunch, otokosushi.se/meny, laumi.se/menu/familjsushi, katosushi.se (produkt), sorasushi.se/familjesushi, saiki.se, seastreet.se (guide), sushibay.se (catering). (Bing) | Alla har en egen sida eller produkt-URL med ordet "familjesushi" i titeln och menyn som HTML. Itamae har ingen sådan sida | /meny |
| 15 | bästa sushi sundbyberg | ca 48 | 10,2 | thefork-lista, sushinatu.se/sundbyberg, foodeist, restrate x2, kvartersmenyguiden-topplista, tripadvisor, offentligpanelen, restauranglulu.se/sundbyberg, sushikartan. (Bing) | Topplistor från kataloger. Sushi Natu och Lulu har egna ortssidor | /location/sundbyberg |
| 16 | japansk restaurang kungsholmen | minst 24 | 12,4 | lokalizakaya.se (titel "Japansk restaurang & sushi på Kungsholmen"), thefork, tripadvisor, thatsup, lokalizakaya.se/kontakt, saiki.se, restauranger.se, thatsup (Yo! Sushi). (Bing) | Lokal Izakaya har den exakta frasen i titeln på både startsidan och kontaktsidan | /location/kungsholmen |
| 17 | restaurang mörby centrum | ca 58 | 3,2 | tripadvisor (stationen), restaurangkartan, tripadvisor.com, phils.se/restauranger/danderyd ("burgare i Mörby centrum"), kvartersmenyn, restaurantguru, mabrahalsa, homemade.se. (Bing) | Kataloger plus en kedja (Phil's) med en egen ortssida | /location/danderyd |
| 18 | sushi vasastan | minst 10 | 16,4 | thefork Vasastan-lista, tripadvisor Vasastan, raw.se (titel "Sushi Vasastan"), sushitakiya.se, tripadvisor.com, thefork.com, rawbata.se, thatsup "Guiden till Vasastans bästa sushi". (Bing, curl. Det här resultatet stämde med frågan) | RAW har "Sushi Vasastan" som titel på startsidan. Itamae nämner inte Vasastan någonstans som Google kan läsa | /location/odengatan |
| 19 | poke bowl hagastaden / poke bowl sundbyberg | ca 14 / minst 13 | 5,1 / 16,7 | Hagastaden: semeny (Niji), foodora (Niji), hawaiipoke.se, restaurantguru x2, Niji Instagram, **itamae.se på plats 7**, dindinclub.se/meny/bowls, ubereats, hagastadsguiden (Itamae). Sundbyberg: restauranglulu.se x2, ohpoke.se, hawaiipoke.se x2, restaurangmenyn (Lulu), foodora (Lulu), utony, sushinatu.se, meny.menu. (Bing) | Poké-kedjor och Lulu har "poké" i namn och titel. Itamaes poké bowls syns inte i någon text som går att indexera | /location/hagastaden och /location/sundbyberg |
| 20 | sushi take away (stockholm) | ca 24 | 8,0 | thefork, takeaway.se, thatsup x2, yamashirosushi.se, raw.se/take-away, sayasushi.se, yasuragi.se (take away-sushi), yumesushi.se, foodora. (Bing) | RAW och Yasuragi har egna take away-sidor | /meny |

Varumärkesmål vid sidan av listan: "itamae meny" (ca 128/mån, pos 1,6, 235 klick) och "itamae sundbyberg meny" (ca 40/mån, pos 2,3) ska landa på /meny. I dag gör de det sannolikt inte, eftersom /meny pekar sin canonical mot startsidan (se nedan).

## Konkurrenternas sidor jämfört med itamae.se

Hämtade med curl 3/11. Ordantalet räknar synlig text i den HTML som servern skickar, alltså det som Google ser utan att köra JavaScript.

| Sida | Titel | H1 | Ord | Schema (JSON-LD) | Meny i HTML | Egen sida per ort |
|---|---|---|---|---|---|---|
| umamisushi.se/japansk-restaurang-fridhemsplan | Japansk restaurang Fridhemsplan, Beställ hem, Umami Sushi | Njut av en äkta japansk restaurang nära Fridhemsplan | 1 028 | FAQPage, BreadcrumbList, Organization, WebPage | nej | ja (även Danderyd, catering, hemkörning) |
| sushiyama.se/restaurants/stockholm-odenplan | Sushi i Stockholm, Odenplan | Stockholm, Odenplan | 361 | BreadcrumbList, Organization, WebPage | nej (beställning via länk) | ja, en URL per restaurang |
| restauranglulu.se/sundbyberg och /kungsholmen | Sundbyberg - Restaurang Lulu | Lulu Sundbyberg | 280 till 290 | Restaurant, BreadcrumbList, Organization | PDF | ja, plus /sushi-catering-stockholm |
| nakedfish.se | Naked Fish Sushi Bar | adress och öppettider som H1 | 215 | Restaurant, PostalAddress, GeoCoordinates, OpeningHoursSpecification | nej | nej |
| minakosushi.se | Minako - Authentic Japanese Sushi & Omakase in Stockholm | We strive to exceed expectations | 262 | ingen | separat menysida | nej |
| sushibarkirin.se | Sushibar Kirin | Välkommen | 111 | ingen | 4 PDF:er | nej |
| sushinatu.se | SUSHI NATU | Från havet till dig, Meny, Sundbyberg | 152 | ingen | nej | ja (/sundbyberg syns i Bing, gav 404 vid hämtning) |
| **itamae.se (/, /meny, /location/sundbyberg, /location/kungsholmen)** | samma titel på alla: "Itamae Sushi, Färsk sushi, takeaway & japansk mat" | ingen | 7 | ingen | nej | ja i appen, men servern skickar samma tomma skal på 2 KB för varje adress |

mglsushi.se gick inte att hämta (certifikatet gäller inte för www). Betyg och antal recensioner finns inte i någon av konkurrenternas sidkod. De betyg som står i topp 20-tabellen kommer från Googles kartpaket och leverantörsrutor.

### Det viktigaste på itamae.se

Alla adresser (/, /meny, /location/*) svarar med samma HTML: en tom `<div id="root">`, samma titel och beskrivning och `<link rel="canonical" href="https://itamae.se/">`. Utan att köra JavaScript ser Google alltså ingen H1, ingen text, ingen meny och ingen schema, och varje ortssida ber själv att bli räknad som startsidan. Det förklarar varför GSC säger "Webbadressen är okänd för Google" om /location/*. Sitemap.xml listar /location/kungsholmen och /location/sundbyberg, så sitemap och canonical säger emot varandra.

## Fem saker som förklarar varför de ligger över Itamae

1. **Ortssidorna finns inte för Google.** Sushi Yama, Lulu, Umami, INO och Sushi Natu har en egen URL per restaurang med orten i titel och H1, och servern skickar texten direkt. Itamaes /location/* har samma titel och canonical som startsidan och ingen text i HTML. Så länge det är så kan ingen ortssida ranka.
2. **Den icke-varumärkta synligheten kommer nästan bara från Google-profilerna.** På "sushi mörby centrum" (snitt 2,3, 210 klick) och "sushi sundbyberg" (4,9) finns itamae.se inte bland de tio organiska träffarna. Det som syns är Itamae i kartpaketet eller via Foodora, Wolt och Qopla. Att GSC-positionen kommer från kartpaketet är min slutsats av de här två bilderna, inte uppmätt.
3. **Betygen i kartpaketet är svagare än grannarnas.** Itamae Sushi Bar Mörby har 3,5 (154) mot Kirin 4,0 (389) och Nora 4,9. Itamae Hagastaden har 3,9 (52) mot Izakaya 4,8 och WATTAW 4,3 (274). I Sundbyberg, Odengatan och Danderyd är Itamae inte med i paketet alls. Samtidigt har Itamae Danderyd 4,6 (476) på UberEats och över 10 000 betyg på Foodora, enligt diagnosrapporten. Det förtroendet når inte Google.
4. **Kataloger och leveransappar tar halva första sidan.** Foodora, Wolt, UberEats, Qopla, TheFork, Tripadvisor, Thatsup, sushikartan, restrate och kvartersmenyn fyller 4 till 7 av 10 platser. Det enda sättet att synas där i dag är att ha profiler och listningar i ordning. Minako är tydligast: en tunn sajt men topplacering genom Tripadvisor (228 recensioner), Facebook och kartpaketet.
5. **Rätter och tjänster saknar egna sidor och text.** De som vinner "familjesushi", "poke bowl", "take away" och "catering" har en URL eller produktsida med just det ordet (M Sushi /familjesushi, Lulu /sushi-catering-stockholm, RAW /take-away, Umami /catering-stockholm). Itamaes meny syns inte i HTML, så Google kan inte koppla Itamae till poké bowls, familjesushi eller yakiniku.

Bra att veta: Umami Sushi, vars Fridhemsplan- och Danderydssidor ligger över Itamae, finns bland Syns Nus kunder i minnet (`project_umami_sushi`). Två egna kunder konkurrerar alltså om samma sökord på Kungsholmen och i Danderyd.

## Begränsningar

- Inga volymer är uppmätta. Utan DataForSEO, Keywords Everywhere eller inloggning i Keyword Planner går det inte att få riktiga siffror. Det snabbaste sättet att få dem är att Emanuel loggar in i Google Ads (MCC Syns Nu Media) i Chrome, så kan Keyword Planner köras på listan ovan.
- Google-sökningarna är en ögonblicksbild från en dator med okänd geoposition. Sökord 11 till 20 kommer från Bing, som rangordnar annorlunda än Google.
- Kartpaket kunde bara läsas där Google visade dem i HTML. Var Itamae står i Google Maps för respektive sökord är Ej tillgänglig.
