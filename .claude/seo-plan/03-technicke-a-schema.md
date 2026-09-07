# 3. Technika, schema.org, bezpečnost, mobil (měsíc 2)

Cíl fáze: doladit technické detaily, které nejsou vidět na první pohled, ale ovlivňují rich results, AI čitelnost a důvěryhodnost. Většina bodů je čistě kódová a nezávislá na sobě — lze dělat v libovolném pořadí.

---

## 3.1 Bezpečnostní hlavičky [KÓD]

Live response hlavičky (ověřeno na `/`, `/kontakt`, `/projekty/projekt-1`) obsahují jen defaultní Vercel `strict-transport-security`. Chybí `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`. Nejde o blokátor indexace, ale bezpečnostní scannery to nahlásí — a web teď má živý kontaktní formulář + SMTP mailer, takže je to relevantní.

- [x] Přidat `headers()` blok do `next.config.mjs` — 6. 9. 2026: přidán `async headers()` s `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN` pro všechny cesty (`/:path*`).
- [ ] `next build` + ověřit hlavičky přes `curl -I` po nasazení — build prošel lokálně, `curl -I` čeká na deploy na produkci.

---

## 3.2 Product/Offer schema na grilovacích produktech [KÓD]

`lib/lorny.ts` a odpovídající soubor pro kulaté grily mají reálná data (6 variant, ceny 2 200–3 700 Kč), ale na stránce je jen `BreadcrumbList` — žádné `Product`/`Offer` schema. Data pro strukturovaná data tedy existují, jde jen o doplnění JSON-LD.

- [x] Přidat `ProductGroup` s `hasVariant` (jeden `Product`/`Offer` na velikost) na `/grilovaci-lavice/grilovaci-lorny` — 6. 9. 2026: nová komponenta `components/seo/ProductGroupJsonLd.tsx`, data z `LORNA_VARIANTS` (6 velikostí).
- [x] Totéž na `/grilovaci-lavice/kulate-grily` — 6. 9. 2026: **odchylka od zadání** — kulatý gril se prodává v jediném provedení (jedna cena, žádné varianty), takže `ProductGroup` s jedinou `hasVariant` položkou by bylo sémanticky špatně. Místo toho přidán plain `Product` + `Offer` (`components/seo/ProductJsonLd.tsx`).
- [ ] Vzor JSON-LD (uprav `productGroupID`, `url`, seznam variant dle `LORNA_SERIES`):

```json
{
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "productGroupID": "grilovaci-lorny",
  "name": "Grilovací Lorna",
  "url": "https://www.schovinox.cz/grilovaci-lavice/grilovaci-lorny",
  "image": "https://www.schovinox.cz/lorny/lorna-5.jpeg",
  "brand": { "@type": "Brand", "name": "Schovinox" },
  "variesBy": ["size"],
  "hasVariant": [
    {
      "@type": "Product",
      "sku": "lorna-400x250",
      "name": "Grilovací Lorna 400 × 250 mm",
      "size": "400 × 250 mm",
      "offers": {
        "@type": "Offer",
        "url": "https://www.schovinox.cz/grilovaci-lavice/grilovaci-lorny",
        "priceCurrency": "CZK",
        "price": "2200",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }
  ]
}
```

Zopakovat `hasVariant` pro všech 6 velikostí. Nedoplňovat `Review`/`AggregateRating`, dokud nejsou reálné recenze (viz `02-obsah-a-duveryhodnost.md` bod 2.1).

- [ ] Ověřit přes Google Rich Results Test po nasazení — čeká na deploy na produkci.

---

## 3.3 FAQ obsah + FAQPage schema [OBSAH — klient, pak KÓD]

Na webu není nikde otázková struktura (H2/H3 formulované jako otázka) ani FAQ schema. Podle citability modelu z auditu je tohle jednotlivě nejsilnější páka pro citaci v AI vyhledávání (AI Overviews, ChatGPT) u lokálních řemeslných dotazů — a aktuálně se nevyužívá vůbec.

- [x] S klientem sepsat 5–8 nejčastějších dotazů zákazníků — 7. 9. 2026: odpovědi přijaty (drobné opravy, doba výroby, dojezd, materiál od zákazníka, záruka, hodinová sazba, minimální rozsah).
- [x] Každou zodpovědět v jednom samostatném odstavci — 7. 9. 2026: odpovědi vycházejí přímo z faktů od klienta, délka cca 15–45 slov (kratší než cílových 40–60, ale bez vycpávky).
- [x] Umístit blok na `/sluzby` a `/cenik` — 7. 9. 2026: 5 otázek na `/sluzby` (sekce „Časté dotazy"), 2 otázky (sazba, minimální rozsah) na `/cenik`.
- [x] Přidat `FAQPage` JSON-LD odpovídající zveřejněným otázkám/odpovědím — 7. 9. 2026: nová komponenta `components/seo/FaqJsonLd.tsx`, použita na obou stránkách se stejnými daty jako viditelný obsah.

---

## 3.4 Doplnit LocalBusiness schema o doporučená pole [KÓD, jedno pole vyžaduje vstup od klienta]

`app/layout.tsx` (`localBusinessJsonLd`) má `name`, `address`, `telephone`, `url`, `email`, `image`, `openingHoursSpecification`, IČO — chybí několik Google-doporučených (ne povinných) polí.

- [x] `priceRange` — 6. 9. 2026: doplněno textově jako `"od 550 Kč/hod"` (dle `/cenik`).
- [x] `geo` (GeoCoordinates, 5 desetinných míst) pro Kněžice 88 — 6. 9. 2026: `50.25906, 15.33393` (Nominatim/OpenStreetMap, house-level match, ověřeno proti PSČ 289 02).
- [x] `@id` (`https://www.schovinox.cz/#organization`) — 6. 9. 2026: doplněno.
- [x] `areaServed` — 7. 9. 2026: klient potvrdil — vzdálenost sama o sobě nerozhoduje (spíš velikost zakázky), standardně jezdí do 100 km od Kněžic. Doplněno jako `GeoCircle` (`geoMidpoint` = Kněžice, `geoRadius` 100 000 m) do `localBusinessJsonLd` v `app/layout.tsx`.
- [x] `description` — 6. 9. 2026: doplněn krátký popis firmy do schema (odlišný text od meta description).

---

## 3.5 Mobilní UX drobnosti [KÓD]

Potvrzeno na screenshotech (375px viewport):

- [x] Hamburger menu tlačítko — 6. 9. 2026: přidáno `-m-3 p-3` na tlačítko v `components/layout/Header.tsx` (tap target ~48px, ikona vizuálně na stejném místě díky kompenzující zápornému marginu). Stejná oprava aplikovaná i na zavírací X tlačítko v `components/layout/MobileMenu.tsx` (stejný problém, nebyl v plánu výslovně, ale je to stejná třída bugu).
- [x] Formulářová pole na `/kontakt` — 6. 9. 2026: `inputClass` v `components/forms/ContactForm.tsx` a `components/forms/ReferenceForm.tsx` (formulář pro reference má stejný vzor) změněn na `text-base md:text-sm`.

---

## 3.6 Certifikace/kvalifikace, pokud existují [OBSAH — klient]

Zakázky zmiňují potravinářský/farmaceutický kontext (CIP nádrže pro mlékárnu, gastro vybavení), ale nikde na webu není zmínka o svářečském certifikátu, pojištění nebo jiné formální kvalifikaci.

- [x] Zeptat se klienta, jestli takové certifikace/pojištění existují — 7. 9. 2026: odpověď přijata. Svařování potrubí od Ø 5 mm bez horního omezení, zkoušky pro tlakové nádoby (RTG, kapilární zkoušky, ultrazvuk), tupé i koutové svary bez omezení, čtení výkresové dokumentace potrubních tras. Pojištění odpovědnosti klient nemá — dle plánu se tedy nikde neuvádí.
- [x] Pokud ano → doplnit na `/o-nas` nebo `/sluzby` — 7. 9. 2026: nová sekce „Kvalifikace a zkoušky" na `/o-nas`.
- [x] Pokud ne (pojištění) → nic neměnit — respektováno, pojištění se na web nedoplňuje.

---

## 3.7 (Volitelné) Nastavit Google API klíč pro budoucí audity [ADMIN]

Tenhle audit neměl přístup k Google Search Console / CrUX API — všechna výkonnostní data byla laboratorní (Lighthouse), ne reálná data od uživatelů. Pro přesnější budoucí audity:

- [ ] Založit Google Cloud API klíč s PageSpeed Insights + CrUX API
- [ ] Uložit do `~/.config/claude-seo/google-api.json` nebo `GOOGLE_API_KEY` env proměnné (na stroji, kde se pak audit pouští)
- [ ] Alternativa: pokud je zapnutý Vercel Analytics/Speed Insights na projektu, použít ten jako zdroj reálných dat mezitím

---

## Definice hotovo pro tuhle fázi

Bezpečnostní hlavičky nasazené, Product schema na obou grilovacích stránkách validní v Rich Results Test, FAQ blok publikovaný na `/sluzby` a `/cenik` s FAQPage schema, LocalBusiness schema kompletní, mobilní tap targety a formulářová pole opravené.
