# -*- coding: utf-8 -*-
"""Hämtar Itamaes Search Console-data (båda properties) via gcloud ADC.
Kör: CLOUDSDK_PYTHON=/opt/homebrew/bin/python3.14 python3 hamta-gsc.py [start] [slut]
Skriver q-*.json (fråga), p-*.json (sida), qp-*.json (fråga+sida) per property.
"""
import json, subprocess, sys, urllib.request, urllib.parse, os, datetime
ENV = dict(os.environ, CLOUDSDK_PYTHON="/opt/homebrew/bin/python3.14")
T = subprocess.run(["gcloud", "auth", "application-default", "print-access-token"], capture_output=True, text=True, env=ENV).stdout.strip()
H = {"Authorization": f"Bearer {T}", "x-goog-user-project": "syns-nu-analysverktyg-platform", "Content-Type": "application/json"}
slut = sys.argv[2] if len(sys.argv) > 2 else (datetime.date.today() - datetime.timedelta(days=2)).isoformat()
start = sys.argv[1] if len(sys.argv) > 1 else (datetime.date.fromisoformat(slut) - datetime.timedelta(days=89)).isoformat()
UT = os.path.dirname(os.path.abspath(__file__))

def fraga(site, dims):
    rader, i = [], 0
    while True:
        body = {"startDate": start, "endDate": slut, "dimensions": dims, "rowLimit": 25000, "startRow": i}
        url = f"https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(site, safe='')}/searchAnalytics/query"
        r = json.load(urllib.request.urlopen(urllib.request.Request(url, json.dumps(body).encode(), H)))
        rows = r.get("rows", [])
        rader += rows
        if len(rows) < 25000:
            return rader
        i += 25000

for site, nyckel in [("https://itamae.se/", "apex"), ("https://www.itamae.se/", "www")]:
    for dims, pre in [(["query"], "q"), (["page"], "p"), (["query", "page"], "qp")]:
        rader = fraga(site, dims)
        json.dump({"site": site, "start": start, "slut": slut, "rows": rader},
                  open(os.path.join(UT, f"{pre}-{nyckel}-{start}_{slut}.json"), "w"), ensure_ascii=False)
        print(site, pre, len(rader))
