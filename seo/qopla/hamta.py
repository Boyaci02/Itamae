# -*- coding: utf-8 -*-
"""Hämtar Itamaes fem menyer direkt ur Qopla. Facit för priser på sajten.

Lunchavtalen ligger i menuBundleProducts, inte menuProducts — missas de ser det
ut som om halva menyn saknas.
"""
import json, urllib.request, sys

API = "https://api.qopla.com/graphql"
HUS = {"kungsholmen": "qyZRx7WVdM", "sundbyberg": "qbgL3aM4Ov", "hagastaden": "qAa9ZDPdv1", "odengatan": "qvyAzJvzzJ", "danderyd": "q3Prp4Xj7z"}

SHOP_Q = """query getShopByPublicId($publicId: String!){ getShopByPublicId(publicId:$publicId){ id publicId name desc companyId menuIds organisationNumber
 activeHours{ closed date dayOfWeek desc startingHour stoppingHour }
 contactInformation{ name addressLine addressLine2 postCode city phoneNumber phoneNumber2 email latLng{ lat lng } } } }"""

MENU_Q = """query getMenusByIds($menuIds:[String],$includeDisabled:Boolean){ getMenusByIds(menuIds:$menuIds,includeDisabled:$includeDisabled){ id name description disabled eatingOptions sortOrder
 menuProductCategories{ id name description disabled sortOrder
  menuProducts{ id price sortOrder refProduct{ id name description contents defaultPrice disabled deleted imageUrl } }
  menuBundleProducts{ id price sortOrder refBundleProduct{ id name description contents defaultPrice disabled deleted imageUrl } } } } }"""

def gql(op, q, v):
    r = urllib.request.Request(API, data=json.dumps({"operationName": op, "query": q, "variables": v}).encode(),
                               headers={"Content-Type": "application/json", "Origin": "https://qopla.com",
                                        "User-Agent": "Mozilla/5.0"})
    return json.load(urllib.request.urlopen(r, timeout=60))

for nyckel, pid in HUS.items():
    s = gql("getShopByPublicId", SHOP_Q, {"publicId": pid})
    shop = (s.get("data") or {}).get("getShopByPublicId")
    if not shop:
        print(nyckel, "GICK INTE:", json.dumps(s)[:300]); continue
    m = gql("getMenusByIds", MENU_Q, {"menuIds": shop["menuIds"], "includeDisabled": True})
    menyer = (m.get("data") or {}).get("getMenusByIds") or []
    json.dump({"shop": shop, "menus": menyer}, open(f"raw-{nyckel}.json", "w"), ensure_ascii=False, indent=1)
    ci = shop["contactInformation"] or {}
    print(f"### {nyckel}  {shop['name']}  publicId={pid}")
    print("   ", ci.get("addressLine"), ci.get("postCode"), ci.get("city"), "| tel", ci.get("phoneNumber"))
    for mm in menyer:
        n = sum(len(c["menuProducts"]) + len(c["menuBundleProducts"]) for c in mm["menuProductCategories"])
        print(f"    meny '{mm['name']}' disabled={mm['disabled']} kategorier={len(mm['menuProductCategories'])} rätter={n}")
