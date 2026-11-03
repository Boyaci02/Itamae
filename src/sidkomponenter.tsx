/**
 * Sidorna som byggdes för SEO-arbetet 3/11 2026: restaurangsidorna, menyn,
 * restauranglistan och 404. Allt innehåll är vanlig HTML som förrenderas, så
 * texten syns för Google och AI-crawlare utan JavaScript. Därför används inga
 * inträdesanimationer som startar på opacity 0 på brödtext, meny eller FAQ.
 */
import { useEffect, type ReactNode } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { locations, hittaPlats, type Plats } from "./data/platser";
import menyData from "./data/meny.json";
import { menyFor, sidData, BAS } from "./sidor";

/* ---------- Huvudet: titel, beskrivning, canonical och schema vid klick i appen ---------- */

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

export const SidHuvud = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const s = sidData(pathname);
    const vag = pathname.replace(/\/+$/, "") || "/";
    const canonical = BAS + (vag === "/" ? "/" : vag);
    document.title = s.titel;
    sattTagg('meta[name="description"]', "content", s.beskrivning);
    sattTagg('meta[name="robots"]', "content", s.robots ?? "index,follow");
    sattTagg('meta[property="og:title"]', "content", s.titel);
    sattTagg('meta[property="og:description"]', "content", s.beskrivning);
    sattTagg('meta[name="twitter:title"]', "content", s.titel);
    sattTagg('meta[name="twitter:description"]', "content", s.beskrivning);
    if (s.status === 200) {
      sattTagg('link[rel="canonical"]', "href", canonical);
      sattTagg('meta[property="og:url"]', "content", canonical);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }
    if (s.bild) {
      sattTagg('meta[property="og:image"]', "content", s.bild);
      sattTagg('meta[name="twitter:image"]', "content", s.bild);
    }
    document.head.querySelectorAll('script[data-sida]').forEach(e => e.remove());
    for (const block of s.schema) {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.dataset.sida = "1";
      el.textContent = JSON.stringify(block);
      document.head.appendChild(el);
    }
  }, [pathname]);
  return null;
};

/* ---------- Delar ---------- */

const kr = (r: { pris: number; fran: boolean }) => (r.fran ? `från ${r.pris} kr` : `${r.pris} kr`);
export const rattId = (namn: string) =>
  "ratt-" + namn.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Etikett = ({ children, ljus = false }: { children: ReactNode; ljus?: boolean }) => (
  <span className={`${ljus ? "text-white/55" : "text-itamae-green/55"} text-[11px] font-bold uppercase tracking-[0.3em] block`}>{children}</span>
);

const KnappBestall = ({ url, text = "Beställ take away" }: { url: string; text?: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-itamae-red text-white min-h-[48px] px-7 rounded-full text-[14px] font-bold shadow-lg transition-[transform,box-shadow,filter] duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl active:translate-y-0"
  >
    <ShoppingBag size={16} aria-hidden="true" />
    {text}
  </a>
);

type Ratt = { namn: string; pris: number; fran: boolean; besk: string };
type Sektion = { id: string; rubrik: string; under: string; ratter: Ratt[] };

export const MenyLista = ({ sektioner, rubrikNiva = 3 }: { sektioner: Sektion[]; rubrikNiva?: 2 | 3 }) => {
  const H = rubrikNiva === 2 ? "h2" : "h3";
  return (
    <div>
      <nav aria-label="Menyns kategorier" className="flex flex-wrap gap-2 mb-10 md:mb-14">
        {sektioner.map(s => (
          <a
            key={s.id}
            href={`#meny-${s.id}`}
            className="inline-flex items-center min-h-[44px] px-4 rounded-full border border-itamae-green/15 text-itamae-green text-[13px] font-medium transition-colors duration-200 hover:bg-itamae-green hover:text-white"
          >
            {s.rubrik}
          </a>
        ))}
      </nav>
      <div className="space-y-14 md:space-y-20">
        {sektioner.map(s => (
          <section key={s.id} id={`meny-${s.id}`} className="scroll-mt-28">
            <div className="mb-6 md:mb-8 border-b border-itamae-green/10 pb-4">
              <H className="font-serif italic text-itamae-green text-[28px] md:text-[34px] leading-tight">{s.rubrik}</H>
              {s.under && <p className="text-itamae-gray text-[14px] mt-2">{s.under}</p>}
            </div>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {s.ratter.map(r => (
                <li key={r.namn} id={rattId(r.namn)} className="scroll-mt-28">
                  <div className="flex items-baseline gap-3">
                    <span className="font-semibold text-itamae-charcoal text-[15px]">{r.namn}</span>
                    <span aria-hidden="true" className="flex-1 border-b border-dotted border-itamae-green/20 translate-y-[-4px]" />
                    <span className="text-itamae-green font-semibold text-[15px] tabular-nums whitespace-nowrap">{kr(r)}</span>
                  </div>
                  {r.besk && <p className="text-itamae-gray text-[14px] leading-relaxed mt-1 max-w-[52ch]">{r.besk}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

const Faq = ({ rubrik, fragor }: { rubrik: string; fragor: { q: string; a: string }[] }) => (
  <section id="faq" className="bg-itamae-cream py-20 md:py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <Etikett>Frågor och svar</Etikett>
      <h2 className="font-serif italic text-itamae-green text-[32px] md:text-[44px] leading-tight mt-3 mb-8 md:mb-10">{rubrik}</h2>
      <div className="divide-y divide-itamae-green/10 border-y border-itamae-green/10">
        {fragor.map(f => (
          <details key={f.q} className="group">
            <summary className="flex items-center justify-between gap-6 min-h-[56px] py-4 cursor-pointer list-none text-itamae-charcoal font-semibold text-[16px] md:text-[17px] [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="relative w-4 h-4 flex-shrink-0">
                <span className="absolute inset-x-0 top-1/2 h-px bg-itamae-green" />
                <span className="absolute inset-y-0 left-1/2 w-px bg-itamae-green transition-transform duration-200 ease-out group-open:scale-y-0" />
              </span>
            </summary>
            <p className="text-itamae-gray leading-relaxed pb-5 pr-10 text-[15px]">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Tider = ({ p, ljus = false }: { p: Plats; ljus?: boolean }) => (
  <dl className="space-y-1">
    {p.hoursDisplay.map(h => (
      <div key={h.label} className="flex gap-3">
        <dt className={ljus ? "text-white/60" : "text-itamae-gray"}>{h.label}</dt>
        <dd className={`tabular-nums ${ljus ? "text-white" : "text-itamae-charcoal"}`}>{h.value}</dd>
      </div>
    ))}
  </dl>
);

/* ---------- Restaurangsidan ---------- */

export const LocationDetail = () => {
  const { id } = useParams();
  const p = hittaPlats(id);
  if (!p) return <NotFound />;
  const meny = menyFor(p.id);
  const allaRatter = meny.flatMap(s => s.ratter);
  const tips = p.tips.map(n => allaRatter.find(r => r.namn === n)).filter(Boolean) as Ratt[];
  const andra = locations.filter(l => l.id !== p.id);

  return (
    <div>
      {/* Hero */}
      <section id="hero" className="bg-itamae-green text-white pt-28 md:pt-36 pb-16 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div className="itamae-entre">
            <nav aria-label="Brödsmulor" className="text-[12px] text-white/50 mb-8">
              <ol className="flex flex-wrap gap-2">
                <li><Link to="/" className="hover:text-white transition-colors">Start</Link><span aria-hidden="true" className="ml-2">/</span></li>
                <li><Link to="/restauranger" className="hover:text-white transition-colors">Restauranger</Link><span aria-hidden="true" className="ml-2">/</span></li>
                <li aria-current="page" className="text-white/80">{p.name}</li>
              </ol>
            </nav>
            <Etikett ljus>{p.etikett}</Etikett>
            <h1 className="font-serif italic font-bold leading-[1.02] mt-4 mb-6 md:mb-8 text-balance" style={{ fontSize: "clamp(40px, 6.4vw, 84px)" }}>
              {p.h1}
            </h1>
            <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">{p.ingress}</p>
            <ul className="mt-8 space-y-3 text-[15px]">
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-white/50 flex-shrink-0" aria-hidden="true" /><span>{p.address}, {p.zipCode}</span></li>
              <li className="flex items-start gap-3"><Clock size={18} className="mt-0.5 text-white/50 flex-shrink-0" aria-hidden="true" /><Tider p={p} ljus /></li>
              <li className="flex items-start gap-3"><Phone size={18} className="mt-0.5 text-white/50 flex-shrink-0" aria-hidden="true" /><a href={`tel:${p.phone.replace(/[\s-]/g, "")}`} className="underline-offset-4 hover:underline">{p.phone}</a></li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <KnappBestall url={p.orderUrl} />
              <a
                href="#meny"
                className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-full border border-white/40 text-white text-[14px] font-bold transition-colors duration-200 hover:bg-white hover:text-itamae-green"
              >
                Se menyn och priserna
              </a>
            </div>
          </div>
          <div className="itamae-entre itamae-entre-sen relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl">
            <img src={p.image} alt={`${p.fulltNamn} på ${p.address}`} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Om restaurangen + fakta */}
      <section id="om" className="bg-itamae-cream py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20">
          <div className="space-y-12 md:space-y-14">
            {p.stycken.map(s => (
              <div key={s.rubrik}>
                <h2 className="font-serif italic text-itamae-green text-[28px] md:text-[36px] leading-tight mb-4">{s.rubrik}</h2>
                <div className="space-y-4 text-itamae-charcoal/85 text-[16px] md:text-[17px] leading-[1.7] max-w-[62ch]">
                  {s.text.map((t, i) => <p key={i}>{t}</p>)}
                </div>
              </div>
            ))}
            {tips.length > 0 && (
              <div>
                <h2 className="font-serif italic text-itamae-green text-[28px] md:text-[36px] leading-tight mb-5">Några rätter att börja med</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tips.map(r => (
                    <li key={r.namn}>
                      <a href={`#${rattId(r.namn)}`} className="group flex h-full flex-col justify-between gap-2 rounded-xl border border-itamae-green/10 bg-white p-5 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-itamae-green/30">
                        <span className="font-semibold text-itamae-charcoal">{r.namn}</span>
                        <span className="text-itamae-gray text-[14px] leading-snug">{r.besk}</span>
                        <span className="text-itamae-green font-semibold text-[14px] tabular-nums">{kr(r)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 self-start rounded-2xl bg-white border border-itamae-green/10 p-7 md:p-8 space-y-7">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-itamae-green/55 mb-3">Öppettider</h2>
              <Tider p={p} />
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-itamae-green/55 mb-3">Adress</h2>
              <address className="not-italic text-itamae-charcoal leading-relaxed">{p.fulltNamn}<br />{p.address}<br />{p.zipCode}</address>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Itamae ${p.address} ${p.ort}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 min-h-[44px] text-itamae-red font-semibold text-[14px] hover:underline underline-offset-4">Vägbeskrivning <ArrowRight size={14} aria-hidden="true" /></a>
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-itamae-green/55 mb-3">Telefon</h2>
              <a href={`tel:${p.phone.replace(/[\s-]/g, "")}`} className="text-itamae-charcoal text-[18px] tabular-nums hover:text-itamae-red transition-colors">{p.phone}</a>
            </div>
            <KnappBestall url={p.orderUrl} />
          </aside>
        </div>

        <div className="max-w-6xl mx-auto mt-16 md:mt-20 rounded-2xl overflow-hidden border border-itamae-green/10 [&_iframe]:block [&_iframe]:h-[320px] md:[&_iframe]:h-[420px]">
          <div dangerouslySetInnerHTML={{ __html: p.mapIframe.replace('title="Karta"', `title="Karta till ${p.fulltNamn}"`) }} />
        </div>
      </section>

      {/* Meny */}
      <section id="meny" className="bg-white py-20 md:py-28 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <div>
              <Etikett>Meny med priser</Etikett>
              <h2 className="font-serif italic text-itamae-green text-[34px] md:text-[48px] leading-tight mt-3">Menyn på {p.fulltNamn}</h2>
              <p className="text-itamae-gray text-[14px] mt-3 max-w-[60ch]">Priserna kommer från vår beställning på Qopla och uppdaterades {menyData.hamtad.split("-").reverse().join("/").replace(/^0/, "")}. Vid beställning gäller priset i kassan.</p>
            </div>
            <KnappBestall url={p.orderUrl} text="Beställ från menyn" />
          </div>
          <MenyLista sektioner={meny} />
        </div>
      </section>

      <Faq rubrik={`Vanliga frågor om ${p.fulltNamn}`} fragor={p.faq} />

      {/* Andra restauranger */}
      <section id="kontakt" className="bg-itamae-green text-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Etikett ljus>Fler Itamae</Etikett>
          <h2 className="font-serif italic text-[32px] md:text-[44px] leading-tight mt-3 mb-10">Våra andra restauranger</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {andra.map(l => (
              <li key={l.id}>
                <Link to={`/location/${l.id}`} className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/15 p-6 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5">
                  <span>
                    <span className="block font-bold uppercase tracking-wide text-[18px]">{l.name}</span>
                    <span className="block text-white/55 text-[13px] mt-1">{l.address}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-[13px] text-white/80">Sushi i {l.omraden[0] === "Danderyd" ? "Mörby centrum" : l.omraden[0]} <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-white/60 text-[14px]">
            Se också <Link to="/meny" className="text-white underline underline-offset-4">hela menyn</Link> och <Link to="/restauranger" className="text-white underline underline-offset-4">alla restauranger med öppettider</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

/* ---------- Alla restauranger ---------- */

export const RestaurangerPage = () => (
  <div>
    <section id="hero" className="bg-itamae-green text-white pt-32 md:pt-40 pb-16 md:pb-20 px-6">
      <div className="max-w-6xl mx-auto itamae-entre">
        <Etikett ljus>Itamae Sushi · sedan 2000</Etikett>
        <h1 className="font-serif italic font-bold leading-[1.02] mt-4 mb-6 md:mb-8 text-balance max-w-[16ch]" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
          Våra sushirestauranger i Stockholm
        </h1>
        <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[58ch]">
          Vi har fem restauranger: tre i innerstan, en i Sundbyberg och en i Danderyd. Alla öppnar klockan elva, har samma sushi och poké bowls och går att beställa take away från. I Sundbyberg finns också hamburgare från grillen.
        </p>
      </div>
    </section>
    <section id="om" className="bg-itamae-cream py-16 md:py-24 px-6">
      <ul className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        {locations.map(p => (
          <li key={p.id} className="rounded-2xl bg-white border border-itamae-green/10 overflow-hidden flex flex-col">
            <Link to={`/location/${p.id}`} className="group block relative aspect-[16/9] overflow-hidden">
              <img src={p.image} alt={`${p.fulltNamn} på ${p.address}`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
            </Link>
            <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">
              <div>
                <h2 className="font-serif italic text-itamae-green text-[28px] md:text-[32px] leading-tight">
                  <Link to={`/location/${p.id}`} className="hover:underline underline-offset-4">{p.fulltNamn}</Link>
                </h2>
                <p className="text-itamae-gray text-[15px] mt-2 leading-relaxed">{p.ingress}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                <div><span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-itamae-green/55 mb-1">Adress</span>{p.address}<br />{p.zipCode}</div>
                <div><span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-itamae-green/55 mb-1">Öppet</span><Tider p={p} /></div>
              </div>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link to={`/location/${p.id}`} className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full border border-itamae-green/25 text-itamae-green text-[14px] font-bold transition-colors duration-200 hover:bg-itamae-green hover:text-white">
                  Meny och mer om {p.name}
                </Link>
                <KnappBestall url={p.orderUrl} text="Beställ" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

/* ---------- Menyn ---------- */

export const MenyPage = () => {
  const bas = menyFor("kungsholmen");
  const sund = menyFor("sundbyberg");
  const basNamn = new Set(bas.flatMap(s => s.ratter.map(r => r.namn)));
  const bara = sund
    .map(s => ({ ...s, ratter: s.ratter.filter(r => !basNamn.has(r.namn)) }))
    .filter(s => s.ratter.length > 0)
    .map(s => ({ ...s, id: `sundbyberg-${s.id}` }));

  return (
    <div>
      <section id="hero" className="bg-itamae-green text-white pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto itamae-entre">
          <Etikett ljus>Meny med priser</Etikett>
          <h1 className="font-serif italic font-bold leading-[1.02] mt-4 mb-6 md:mb-8" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
            Menyn på Itamae
          </h1>
          <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch]">
            Blandad sushi från 129 kr, nigiri, rullar, sashimi, poké bowls och varma rätter med ris. Menyn är densamma på Kungsholmen, Odengatan, Hagastaden och i Danderyd. Sundbyberg har allt detta och dessutom hamburgare, sallader och några rullar till, se längst ner.
          </p>
          <div className="mt-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/55 mb-3">Beställ från din restaurang</h2>
            <ul className="flex flex-wrap gap-2">
              {locations.map(p => (
                <li key={p.id}>
                  <a href={p.orderUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full border border-white/30 text-[14px] font-semibold transition-colors duration-200 hover:bg-white hover:text-itamae-green">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="meny" className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-itamae-gray text-[14px] mb-10 max-w-[60ch]">Priserna kommer från vår beställning på Qopla och uppdaterades {menyData.hamtad.split("-").reverse().join("/").replace(/^0/, "")}. Vid beställning gäller priset i kassan.</p>
          <MenyLista sektioner={bas} rubrikNiva={2} />
        </div>
      </section>
      <section id="sundbyberg" className="bg-itamae-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Etikett>Bara i Sundbyberg</Etikett>
          <h2 className="font-serif italic text-itamae-green text-[34px] md:text-[48px] leading-tight mt-3 mb-4">Grillen och det extra i Sundbyberg</h2>
          <p className="text-itamae-gray text-[15px] leading-relaxed mb-10 max-w-[60ch]">
            På <Link to="/location/sundbyberg" className="text-itamae-red underline underline-offset-4">Itamae Sushi &amp; Grill på Landsvägen 33</Link> finns de här rätterna utöver menyn ovan.
          </p>
          <MenyLista sektioner={bara} />
        </div>
      </section>
      <section id="kontakt" className="bg-itamae-green text-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif italic text-[28px] md:text-[36px] leading-tight mb-6">Menyn och öppettiderna per restaurang</h2>
          <ul className="flex flex-wrap gap-3">
            {locations.map(p => (
              <li key={p.id}>
                <Link to={`/location/${p.id}#meny`} className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full border border-white/25 text-[14px] transition-colors duration-200 hover:bg-white hover:text-itamae-green">
                  {p.fulltNamn} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

/* ---------- 404 ---------- */

export const NotFound = () => (
  <section id="hero" className="min-h-[80vh] bg-itamae-green text-white pt-36 pb-24 px-6 flex items-center">
    <div className="max-w-3xl mx-auto text-center">
      <Etikett ljus>Fel 404</Etikett>
      <h1 className="font-serif italic font-bold text-[44px] md:text-[64px] leading-tight mt-4 mb-6">Sidan finns inte</h1>
      <p className="text-white/70 text-[17px] leading-relaxed mb-10">Adressen kan ha ändrats när vi bytte hemsida. Här hittar du det mesta:</p>
      <ul className="flex flex-wrap justify-center gap-3">
        <li><Link to="/restauranger" className="inline-flex items-center min-h-[48px] px-6 rounded-full bg-white text-itamae-green font-bold text-[14px] transition-transform duration-200 hover:-translate-y-0.5">Våra restauranger</Link></li>
        <li><Link to="/meny" className="inline-flex items-center min-h-[48px] px-6 rounded-full border border-white/40 font-bold text-[14px] transition-colors duration-200 hover:bg-white hover:text-itamae-green">Menyn</Link></li>
        <li><Link to="/" className="inline-flex items-center min-h-[48px] px-6 rounded-full border border-white/40 font-bold text-[14px] transition-colors duration-200 hover:bg-white hover:text-itamae-green">Startsidan</Link></li>
      </ul>
    </div>
  </section>
);
