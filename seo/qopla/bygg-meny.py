# -*- coding: utf-8 -*-
"""Gör src/data/meny.json av Qopla-menyerna (raw-*.json från hamta.py).

Qopla är facit för rätter och priser (kassan restaurangerna slår in på).
Menyn som används är "Meny" (egen beställning), inte leveranspartnernas.
Kampanjkategorin (Köp 1 få 1) och kassans merförsäljning ("Ny menykategori")
hör inte hemma på en meny och hoppas över. Rätter utan pris utelämnas, aldrig "0 kr".
Kör: python3 hamta.py && python3 bygg-meny.py
"""
import json, os, re

HAR = os.path.dirname(os.path.abspath(__file__))
UT = os.path.join(HAR, "..", "..", "src", "data", "meny.json")
PLATSER = ["kungsholmen", "odengatan", "hagastaden", "sundbyberg", "danderyd"]
HOPPA = {"BOGO Deal – Sushi & Dryck", "Ny menykategori"}

# Kategorinamn på svenska för sidan; Qoplas namn i nyckeln.
RUBRIK = {
    "Sushi Moriawase": ("sushi", "Sushi", "Kockens blandade nigiri och rullar, eller välj en sort"),
    "Sashimi": ("sashimi", "Sashimi och chirashi", "Rå fisk med grönsaker och ris"),
    "Temaki": ("temaki", "Temaki", "Handrullade strutar av sjögräs"),
    "Bowls": ("bowls", "Poké bowls", "Med ris, blandade grönsaker och chilimajonnäs"),
    "Makimono": ("rullar", "Rullar", "Uramaki och specialrullar"),
    "Varma Rätter": ("varmratter", "Varma rätter", "Med ris"),
    "Hamburgare": ("hamburgare", "Hamburgare", "Högrev och bringa, serveras med pommes. Går att få med Beyond Meat eller pankokyckling"),
    "Sallader": ("sallader", "Sallader", "Sallad och äggnudlar"),
    "Barnmeny": ("barnmeny", "Barnmeny", "Mindre portioner"),
    "Side Orders": ("tillbehor", "Tillbehör", "Att ha vid sidan av"),
    "Såser": ("saser", "Såser", ""),
    "Dryck": ("dryck", "Dryck", ""),
}

# Stavfel i kassan. Rätterna och innehållet ändras inte, bara stavningen.
RATTA = [
    ("acokado", "avokado"), ("Tempurafiterad", "Tempurafriterad"), ("Ångkoktax", "Ångkokt lax"),
    ("Crabbstick", "Crabstick"), ("Pankofriterad kycklingbröst", "Pankofriterat kycklingbröst"),
    ("Tunnskivad nötkött", "Tunnskivat nötkött"), ("4st ", "4 st "), ("2st ", "2 st "),
    ("2st", "2 st"), (" & ", " och "), ("Tillägsbeställning", "Tillbehör"),
]

def stada(t):
    t = re.sub(r"\s+", " ", (t or "").replace("\n", " ")).strip()
    for a, b in RATTA:
        t = t.replace(a, b)
    if t and not t.endswith((".", "!", "?")):
        t += "."
    return t

def namn(n):
    n = re.sub(r"\s+", " ", n).strip()
    return n.replace("2st", "2 st")

ut = {}
for p in PLATSER:
    d = json.load(open(os.path.join(HAR, f"raw-{p}.json")))
    meny = [m for m in d["menus"] if m["name"] == "Meny"][0]
    sektioner = []
    for k in sorted(meny["menuProductCategories"], key=lambda c: c.get("sortOrder") or 0):
        if k.get("disabled") or k["name"] in HOPPA:
            continue
        if k["name"] not in RUBRIK:
            raise SystemExit(f"Okänd kategori i Qopla: {k['name']} ({p}), lägg till i RUBRIK")
        sid, rubrik, under = RUBRIK[k["name"]]
        ratter = []
        rader = [(x.get("sortOrder") or 0, x["refProduct"], x.get("price"), False) for x in k["menuProducts"]] + \
                [(x.get("sortOrder") or 0, x["refBundleProduct"], x.get("price"), True) for x in k.get("menuBundleProducts") or []]
        for _, r, pris, paket in sorted(rader, key=lambda t: t[0]):
            if not r or r.get("disabled") or r.get("deleted"):
                continue
            pris = pris or r.get("defaultPrice")
            if not pris:
                print("UTAN PRIS, utelämnad:", p, r["name"]); continue
            besk = stada(r.get("description"))
            fran = paket and "antal bitar" in besk.lower()
            if r["name"] == "Familjesushi" or r["name"] == "Temaki":
                fran = True
            besk = besk.replace(" Välj antal bitar i nästa steg.", "").replace("Välj antal bitar i nästa steg.", "")
            ratter.append({"namn": namn(r["name"]), "pris": int(pris), "fran": bool(fran), "besk": besk.strip()})
        if ratter:
            sektioner.append({"id": sid, "rubrik": rubrik, "under": under, "ratter": ratter})
    ut[p] = {"qopla": d["shop"]["publicId"], "namn": d["shop"]["name"], "sektioner": sektioner}
    print(p, len(sektioner), "sektioner,", sum(len(s["ratter"]) for s in sektioner), "rätter")

json.dump({"hamtad": __import__("datetime").date.today().isoformat(), "kalla": "Qopla (api.qopla.com), menyn 'Meny'", "platser": ut},
          open(UT, "w"), ensure_ascii=False, indent=1)
# Är menyerna lika mellan restaurangerna?
bas = json.dumps(ut["kungsholmen"]["sektioner"], ensure_ascii=False, sort_keys=True)
for p in PLATSER:
    print(p, "samma som Kungsholmen" if json.dumps(ut[p]["sektioner"], ensure_ascii=False, sort_keys=True) == bas else "SKILJER SIG")
