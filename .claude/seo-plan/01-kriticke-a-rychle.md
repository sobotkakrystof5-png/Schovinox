# 1. Kritické + rychlé výhry (tento týden)

Cíl fáze: zastavit ztrátu a opravit to, co je levné a má okamžitý dopad. Bez tohohle kroku nemá smysl řešit dalšího nic — Google nemůže odměnit obsah, který ještě neexistuje nebo je viditelně rozbitý.

---

## 1.1 Odeslat sitemapu a vyžádat re-indexaci [OBSAH/ADMIN — ne kód]

**Poznámka 6. 9. 2026:** uživatel tento bod zatím vědomě přeskočil (nemám přístup do GSC/Bing účtu, jde o čistě administrativní krok mimo kód). Zůstává otevřené, vrátit se k tomu později.

- [ ] Google Search Console: přidat/ověřit `www.schovinox.cz`, odeslat `https://www.schovinox.cz/sitemap.xml`
- [ ] GSC → URL Inspection: vyžádat indexaci pro `/`, `/kontakt`, `/sluzby` (nejvyšší priorita)
- [ ] Bing Webmaster Tools: stejný postup (ověření domény + sitemap)
- [ ] Za 1–2 týdny zkontrolovat GSC Coverage report — potvrdit, že Google vidí `Allow` v robots.txt a žádný noindex tag

**Proč:** Kódová oprava (`SITE.domain` → `www.schovinox.cz`, hotovo 6. 9. 2026) sama o sobě nesmaže historii "noindex", kterou Google mohl už zaznamenat. Bez tohohle kroku se oprava projeví jen postupně a náhodně.

**Vyžaduje:** přístup do Google Search Console / Bing Webmaster Tools pro doménu schovinox.cz (buď má klient, nebo je potřeba založit).

---

## 1.2 Doplnit reálná data na všech 7 stránkách realizací [OBSAH — klient]

**Stav: Kritické, živé na produkci právě teď.**

Všech 7 stránek `/projekty/projekt-1` až `/projekty/projekt-7` zobrazuje doslovný placeholder text místo dat:

```
Materiál: ......
Lokalita: ......
Rok realizace: ....
```

Potvrzeno na živém webu (screenshot v auditu). Soubor s daty: `lib/projects.ts` (najdi pole `material`, `location`, `year` nebo obdobná — zkontroluj přesný název polí v souboru před editací).

- [x] Vyžádat od klienta (pan Schovánek): materiál, lokalita, rok realizace pro každou ze 7 zakázek — 7. 9. 2026: odpovědi přijaty (materiál u všech 7, lokalita jen u projektu 1 a 5, rok u 1/2/3/4).
- [x] Pokud pro konkrétní zakázku fakt reálně není k dispozici → **odstranit ten řádek úplně**, ne nechat tečky — 7. 9. 2026: `app/projekty/[slug]/page.tsx` upraveno na podmíněné vykreslení `Materiál`/`Lokalita`/`Rok realizace`, řádek se nevykreslí, když pole chybí (ověřeno na produkčním buildu, `/projekty/projekt-4` zobrazuje jen Rok + Typ zakázky).
- [x] Zapsat data do `lib/projects.ts` — 7. 9. 2026: hotovo, typ `Project` má `material`/`location`/`year` jako volitelné.
- [x] `next build` + vizuální kontrola všech 7 stránek na produkci po nasazení — 7. 9. 2026: `next build` prošel bez chyb, HTML výstup ověřen lokálně (`next start`); vizuální kontrola na živé doméně čeká na deploy.

**Bonus v rámci stejné úpravy (viz `02-obsah-a-duveryhodnost.md` bod 2.4):** když už se editují tyhle stránky kvůli placeholderům, zvážit rovnou rozšíření textu popisu (aktuálně 15–56 slov na stránku) — ušetří to druhou editaci stejných souborů.

---

## 1.3 Opravit rozpor v letech praxe na homepage [OBSAH → KÓD]

Homepage tvrdí ve dvou místech dvě různá čísla:
- Hero: *"Kov, přesnost a čtyřicet let rodinné zkušenosti"*
- Statistika o kousek níž: *"16 let praxe v oboru"*

Obojí může být pravda zároveň (40 let napříč generacemi rodiny vs. 16 let osobní praxe pana Schovánka), ale jak je to napsané teď, čtenář i AI systém to přečte jako rozpor.

- [x] Ověřit s klientem správný výklad obou čísel — 6. 9. 2026: potvrzeno uživatelem — 40 let = rodinná tradice napříč generacemi, 16 let = osobní praxe pana Schovánka.
- [x] Doplnit jedno ujasňující slovo/frázi k 40letému údaji — 6. 9. 2026: hero i obě metadata (`description`, `openGraph.description`) doplněna o "napříč generacemi"; statistika přeznačena na "let osobní praxe zakladatele". Soubor: `app/page.tsx`.
- [x] `next build` + vizuální kontrola — build prošel bez chyb 6. 9. 2026.

---

## 1.4 Priority fix na 3 komponentách (LCP obrázky) [KÓD]

Lighthouse potvrzuje: hlavní obrázek nad ohybem chybí `priority`/`fetchpriority="high"` na 3 stránkách, ačkoliv homepage hero (`app/page.tsx`) to má správně už teď a je to jediná stránka, co v tomhle testu projde čistě.

- [x] `components/sections/GalleryGrid.tsx` — první viditelná dlaždice (galerie `/galerie`) — 6. 9. 2026: `priority={i === 0}` přidáno na `<Image>` v interním `.map()`.
- [x] `components/sections/ProductGallery.tsx` — první `col-span-2 row-span-2` dlaždice (sdíleno mezi `/grilovaci-lavice/grilovaci-lorny` a `/kulate-grily`) — 6. 9. 2026: `priority={i === 0}` přidáno na `<Image>` v interním `.map()`.
- [x] `components/sections/ProjectCard.tsx` — první karta v `ProjectsGrid` (`/projekty`) — 6. 9. 2026: přidán `priority?: boolean` prop na `ProjectCard`, protažen z `ProjectsGrid.tsx` jako `priority={i === 0}`.
- [x] Přidat `priority` prop protaženou přes komponentu jen pro první/index 0 položku, ne pro všechny — hotovo výše.
- [ ] Po nasazení znovu spustit Lighthouse na `/galerie`, `/grilovaci-lavice/grilovaci-lorny`, `/projekty` a potvrdit, že `lcp-discovery-insight` audit prochází (dřívější naměřené LCP: 3.0–3.4s mobile, cíl pod 2.5s) — čeká na deploy na produkci.

---

## Definice hotovo pro tuhle fázi

Všechny 4 body odškrtnuté, `next build` bez chyb, žádná stránka `/projekty/*` nezobrazuje tečky, GSC/Bing mají odeslanou sitemapu a vyžádanou indexaci klíčových stránek.
