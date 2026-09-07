# SEO plán — Schovinox

Zdroj: kompletní SEO audit z 6. 9. 2026 (10 specializovaných průchodů, všech 18 živých stránek). Plný report s screenshoty: https://claude.ai/code/artifact/045c951d-cf30-4c13-81c2-313edc58fa28

Skóre při auditu: **63/100** (Fair). Detailní zdrojová zjištění ze všech 10 dílčích auditů jsou uložená v `zdrojova-zjisteni/` v této složce — pro rychlý přehled stačí soubory 01–05 níže, do zdrojových souborů sahej jen když potřebuješ přesnou citaci/detail.

**Podklady od klienta (body 1.2, 2.1, 2.2, 2.3, 2.4, 3.3, 3.6):** otázky pro klienta jsou sepsané v `pozadavky-na-klienta.md` (pracovní verze s odkazy na kód a poznámkami) a `dotaznik-pro-klienta.md` (čistá verze v laickém jazyce, 6. 9. 2026 odeslaná/předaná panu Schovánkovi). Až dorazí odpovědi, zapiš je do kódu a odškrtni příslušné body níže — needěláme si fakta o zakázkách sami.

## Jak s tímhle plánem pracovat napříč sessions

1. Na začátku session si přečti tenhle soubor + zkontroluj, které kroky v 01–05 mají `- [x]` (hotovo) vs `- [ ]` (otevřené).
2. Pokračuj v první nehotové položce v pořadí souborů (01 → 05), pokud uživatel neřekne jinak.
3. Po dokončení kroku: zaškrtni `- [x]`, doplň datum a jednu větu co bylo uděláno (viz formát u položek). Commitni změnu v `.claude/seo-plan/` spolu s kódem, pokud šlo o kódovou změnu.
4. Položky označené **[OBSAH — klient]** nejdou udělat bez reálných dat od klienta (pana Schovánka) — před implementací se zeptej uživatele, jestli podklady má, nebo je над to nutné vyžádat od klienta. Needěláme si fakta o zakázkách sami.
5. Položky označené **[KÓD]** jsou samostatné, bezpečné dev úkoly — lze dělat rovnou.
6. Před nasazením čehokoliv na produkci: `next build` musí projít bez chyb (viz CLAUDE.md pravidla projektu).

## Stav fází

| # | Soubor | Téma | Stav |
|---|---|---|---|
| 0 | (hotovo mimo plán) | Oprava noindex/robots.txt bugu — web byl neviditelný pro Google | ✅ Hotovo a nasazeno 6. 9. 2026 |
| 1 | `01-kriticke-a-rychle.md` | Kritické + rychlé kódové výhry (tento týden) | ⬜ Otevřeno |
| 2 | `02-obsah-a-duveryhodnost.md` | Obsah a důvěryhodnost — reference, GBP, /sluzby, případové studie | ⬜ Otevřeno |
| 3 | `03-technicke-a-schema.md` | Technika, schema.org, bezpečnostní hlavičky, performance | ⬜ Otevřeno |
| 4 | `04-mistni-seo-a-ai-viditelnost.md` | Lokální SEO + viditelnost v AI vyhledávání (GEO) | ⬜ Otevřeno |
| 5 | `05-prubezne-a-monitoring.md` | Průběžné úkoly, citace, monitoring, zpětné odkazy | ⬜ Otevřeno |

## Co už je hotové

- **Oprava kritického bugu (6. 9. 2026):** `SITE.domain` v `lib/constants.ts` byl nastavený na apex doménu (`schovinox.cz`), ale Vercel servíruje produkci na `www.schovinox.cz`. `middleware.ts` a `app/robots.ts` proto vyhodnocovaly produkci jako cizí/preview hostname a posílaly `X-Robots-Tag: noindex, nofollow` + `robots.txt: Disallow: /` na celý živý web — od spuštění webu. Opraveno, ověřeno buildem, commitnuto (`6343512`), nasazeno, ověřeno na živém webu (`curl` potvrzuje `Allow: /`, žádný noindex header, sitemapa na správné doméně).
- **Další krok, který ještě nikdo neudělal:** odeslat sitemapu do Google Search Console a Bing Webmaster Tools a vyžádat re-indexaci klíčových stránek. Kódová oprava sama o sobě nesmaže historii "noindex", kterou už Google mohl zaznamenat. → viz `01-kriticke-a-rychle.md`.

## Cílové skóre po dokončení všech fází

Realistický odhad po dokončení fází 1–4 (bez ohledu na to, jak dlouho bude Google/AI enginům trvat re-indexace a nasbírání autority): **~85–90/100**. Zbytek (Local SEO, zpětné odkazy) roste přirozeně časem a nejde uspíšit čistě kódem — viz `05-prubezne-a-monitoring.md`.
