# Zdrojová zjištění — plný audit 6. 9. 2026

Syrové výstupy z 10 specializovaných audit-agentů, ze kterých vychází plán v `../01` až `../05`. Sahej sem jen když potřebuješ přesnou citaci, číslo, nebo detail, který se do souhrnných kroků nevešel — pro běžnou práci stačí soubory v nadřazené složce.

| Soubor | Agent | Skóre |
|---|---|---|
| `technical.md` | Technická SEO (crawlability, indexovatelnost, hlavičky) | 78/100 |
| `content.md` | Kvalita obsahu (E-E-A-T, čitelnost) | 58/100 |
| `schema.md` | Schema.org / strukturovaná data | 80/100 |
| `sitemap.md` | Sitemapa | 92/100 |
| `performance.md` | Výkon (Core Web Vitals, Lighthouse) | 80/100* |
| `visual.md` | Vizuál a mobilní UX (screenshoty) | 82/100 |
| `geo.md` | Viditelnost v AI vyhledávání (GEO) | 47/100 |
| `local.md` | Lokální SEO | 37/100 |
| `sxo.md` | Search Experience (SXO) — **viz poznámka níže** | 55/100 (opraveno) |
| `backlinks.md` | Zpětné odkazy | N/A — nový web, očekávané |

\* Performance skóre je syntetizované z Lighthouse lab dat (88–98/100 dle stránky); reálné CrUX/field data nebyla k dispozici, viz `../03-technicke-a-schema.md` bod 3.7.

## Důležitá oprava

Prvotní verze `sxo.md` obsahovala kritický nález "rozbitý slib ceny" na `/grilovaci-lavice/grilovaci-lorny` — po ověření přímo na živém HTML šlo o falešný poplach (extrakční nástroj chybně přeskočil ceny oddělené nedělitelnou mezerou, např. "2 200 Kč"). Ceník na stránce funguje správně a nevyžaduje žádnou opravu. Soubor `sxo.md` už obsahuje opravenou verzi s vysvětlením — necitovat původní "critical" nález o cenách, je neplatný.

Kompletní syntetizovaný report se screenshoty: https://claude.ai/code/artifact/045c951d-cf30-4c13-81c2-313edc58fa28
