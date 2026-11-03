# -*- coding: utf-8 -*-
"""Skickar in sitemapen och kör URL-inspektion på nyckelsidorna (Search Console API, gcloud ADC).
Obs: API:t har ingen "Begär indexering". Den knappen finns bara i Search Console-gränssnittet.
Kör: python3 skicka-och-inspektera.py [--bara-inspektera]
"""
import json, os, subprocess, sys, urllib.parse, urllib.request, datetime
ENV = dict(os.environ, CLOUDSDK_PYTHON="/opt/homebrew/bin/python3.14")
T = subprocess.run(["gcloud", "auth", "application-default", "print-access-token"], capture_output=True, text=True, env=ENV).stdout.strip()
H = {"Authorization": f"Bearer {T}", "x-goog-user-project": "syns-nu-analysverktyg-platform", "Content-Type": "application/json"}
SITE = "https://itamae.se/"
SITEMAP = "https://itamae.se/sitemap.xml"
SIDOR = ["https://itamae.se/", "https://itamae.se/restauranger", "https://itamae.se/meny"] + \
        [f"https://itamae.se/location/{p}" for p in ["kungsholmen", "sundbyberg", "hagastaden", "odengatan", "danderyd"]]

def anrop(metod, url, body=None):
    r = urllib.request.Request(url, data=json.dumps(body).encode() if body is not None else None, headers=H, method=metod)
    with urllib.request.urlopen(r) as s:
        t = s.read().decode()
        return s.status, (json.loads(t) if t else {})

ut = {"tid": datetime.datetime.now().isoformat(timespec="seconds")}
if "--bara-inspektera" not in sys.argv:
    st, _ = anrop("PUT", f"https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe='')}/sitemaps/{urllib.parse.quote(SITEMAP, safe='')}")
    print("sitemap inskickad:", st)
    st, d = anrop("GET", f"https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe='')}/sitemaps")
    ut["sitemaps"] = d.get("sitemap", [])
    for s in ut["sitemaps"]:
        print("  ", s.get("path"), "senast inskickad", s.get("lastSubmitted"), "hämtad", s.get("lastDownloaded"), "pending" if s.get("isPending") else "", s.get("contents"))
ut["inspektion"] = {}
for u in SIDOR:
    st, d = anrop("POST", "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {"inspectionUrl": u, "siteUrl": SITE, "languageCode": "sv"})
    r = d.get("inspectionResult", {}).get("indexStatusResult", {})
    ut["inspektion"][u] = r
    print(f"{u:45} {r.get('verdict')} | {r.get('coverageState')} | google-canonical {r.get('googleCanonical')} | senast {r.get('lastCrawlTime')}")
json.dump(ut, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), f"inspektion-{datetime.date.today()}.json"), "w"), ensure_ascii=False, indent=1)
