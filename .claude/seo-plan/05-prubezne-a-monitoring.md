# 5. Průběžné úkoly a monitoring

Cíl fáze: nízkonákladová práce, která se nedá "dokončit" jednou provždy, a sledování, jestli fáze 1–4 skutečně fungují. Zpětné odkazy a lokální autorita rostou časem — nedají se uspíšit čistě kódem.

---

## 5.1 IndexNow [KÓD]

Web teď staví historii indexace prakticky od nuly (viz `01-kriticke-a-rychle.md`) — IndexNow je levný způsob, jak urychlit vyzvednutí obsahu Bingem/Yandexem/Naverem (sdílí jeden endpoint).

- [ ] Vygenerovat IndexNow klíč
- [ ] Servírovat `/<klíč>.txt` na rootu
- [ ] Poslat POST na IndexNow API pro všech 17 URL ze sitemapy — buď ručně jednorázově, nebo malým skriptem spouštěným při deployi
- [ ] Není potřeba pro Google (ten IndexNow nepoužívá), ale zrychlí Bing/Yandex/Naver

---

## 5.2 Úklid sitemapy — kosmetické [KÓD, kdykoliv]

- [ ] Odstranit `<priority>` tagy z výstupu `app/sitemap.ts` — Google je ignoruje od 2020, nulový SEO dopad, jen nepořádek v kódu. Udělat příště, až se soubor stejně edituje kvůli jiné změně, ne jako samostatný deploy.
- [ ] Pokud se v budoucnu přidá `<lastmod>`, navázat ho na reálné datum změny obsahu (např. datum poslední úpravy dat zakázky), ne na `new Date()` při buildu — falešná aktuálnost při každém deployi je horší než žádná.

---

## 5.3 Zpětné odkazy — zatím neřešit aktivně [INFORMATIVNÍ]

Audit nenašel žádnou historii v Common Crawl (`in_crawl: false`) — nulový profil zpětných odkazů. **Tohle je pro nově spuštěný lokální web očekávané a není to teď problém k řešení.** Jediný známý externí odkaz (Facebook skupina) nešlo automatizovaně ověřit (Facebook blokuje boty), ale i kdyby odkazoval zpět, skupinové příspěvky obvykle nenesou SEO váhu.

- [ ] Neinvestovat teď čas/rozpočet do aktivního budování zpětných odkazů
- [ ] Priorita místo toho: lokální citace (`04-mistni-seo-a-ai-viditelnost.md` bod 4.2) — pro tenhle typ byznysu mají větší váhu
- [ ] Revidovat znovu za cca 6 měsíců, až bude mít web reálný provoz a pár citací — v tu chvíli dává smysl založit i zdarma Moz API klíč (2 500 řádků/měsíc) pro přesnější měření

---

## 5.4 Pravidelné sledování po nasazení fáze 1 [ADMIN]

- [ ] Týdně první měsíc po odeslání sitemapy: zkontrolovat GSC Coverage report (kolik stránek je indexovaných, jestli mizí chyby noindex)
- [ ] Po měsíci: zkontrolovat, jestli se web objevuje na branded dotaz ("Schovinox") a na základní lokální dotaz (např. "zámečník Kněžice" nebo relevantní okolní město z bodu 4.1)
- [ ] Po 2–3 měsících: zvážit opakování technického/performance auditu, abychom měli srovnání před/po (zejména LCP po opravě z `01-kriticke-a-rychle.md` bod 1.4, a Local SEO skóre po GBP z `02-obsah-a-duveryhodnost.md` bod 2.2)

---

## 5.5 Kdy spustit další plný audit

Nemá smysl spouštět celý 10-agentový audit znovu dřív, než budou hotové aspoň fáze 1–2 (`01`, `02`) — bez nich by výsledek jen zopakoval stejné nálezy. Doporučený okamžik pro re-audit: **po dokončení fáze 2**, cca za 4–6 týdnů od začátku práce na tomhle plánu.

---

## Definice hotovo — natrvalo otevřené

Tahle fáze se nikdy neuzavírá jako "hotovo" — je to udržovací režim. Aktualizuj `00-PREHLED.md` po každé významné změně stavu.
