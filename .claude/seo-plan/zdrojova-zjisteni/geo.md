## Score

**GEO Readiness: 47 / 100**

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 30 | 7.5 |
| Structural Readability | 20% | 55 | 11.0 |
| Multi-Modal Content | 15% | 50 | 7.5 |
| Authority & Brand Signals | 20% | 30 | 6.0 |
| Technical Accessibility | 20% | 75 | 15.0 |

Platform outlook: **Google AI Overviews** — low-medium (LocalBusiness schema + NAP is a real asset for local-pack-adjacent surfaces, but thin page copy limits extractable answers). **ChatGPT / OAI-SearchBot** — low (crawl access just fixed today; no citable long-form passages yet; no llms.txt). **Perplexity** — low (same crawl/content gaps; no third-party corroborating sources). **Bing Copilot** — low-medium (benefits most from the schema + clean SSR HTML already in place).

## What Works

- **Crawl-blocking bug is fixed and verified live.** `curl https://www.schovinox.cz/robots.txt` now returns `User-Agent: *` / `Allow: /` with a correct `Sitemap:` pointer — confirms the apex/www hostname mismatch (SITE.domain vs actual Vercel host) no longer produces `Disallow: /`. Blanket `Allow: /` covers GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, etc. equally — no need for crawler-specific rules unless the client later wants to opt out of training-only bots (CCBot, anthropic-ai, cohere-ai) while keeping search bots allowed, which isn't currently done but also isn't costing anything today.
- All 18 pages are server-rendered (`is_spa: false` on every capture) — AI crawlers get full HTML on first fetch, no JS-execution dependency.
- `HomeAndConstructionBusiness` JSON-LD with NAP, hours, and IČO is present sitewide; `BreadcrumbList` schema is present on every inner page (site-wide nav context for entity/answer engines).
- Sitemap logic is correct: the unfinished `/grilovaci-lavice/grilovaci-rosty` stub is properly `noindex, follow` and correctly excluded from `sitemap.xml` — not a bug.
- Image alt text is unusually strong for a small-business site: fully descriptive, material/context-specific (e.g. "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana... naplněná syrovým kuřecím masem s paprikou a cibulí"), not generic filler — a real multimodal-retrieval asset.

## Findings

**Severity: High**
**Description:** `llms.txt` does not exist (`/llms.txt` → 404 default Next.js not-found page). No RSL 1.0 licensing file either.
**Recommendation:** Add a minimal `llms.txt` at the root listing the 8 primary routes with one-line descriptions (services, product line, pricing, location, contact). Low effort (~1 hr), static file.

**Severity: High**
**Description:** Extracted body copy is far below the 134-167 word citation-optimal length on almost every page: home 76 words, kontakt 68, cenik 63, reference 50, and all 7 project case-study pages between 15-56 words (avg. ~42). There is no single page on the site with a self-contained passage in the ideal citation range.
**Recommendation:** Prioritize the 7 `/projekty/projekt-N` pages and `/cenik` — these are exactly the pages an AI answer engine would want to cite for "zámečník Kněžice" / "kolik stojí zámečnické práce" queries. Expand each project page to a 120-160 word case-study block (material, rozměry, lokalita, doba realizace). Medium effort (content writing, ~half day for all 7 + cenik).

**Severity: High**
**Description:** `/reference` page contains zero actual customer testimonials — only meta-commentary explaining that reviews will be added later. There is no third-party proof-of-work text anywhere on the site for an LLM to retrieve as a trust signal.
**Recommendation:** This is a content/business-process gap, not a code fix — get 3-5 real client reviews onto the page as soon as available. Until then, the page is a citability and authority dead zone. Flag to the client as time-sensitive (effort = none for us, depends on client collecting reviews).

**Severity: Medium**
**Description:** No FAQ content and no question-phrased headings anywhere on the site. Existing H2s are close (e.g. "Co je grilovací Lorna") but most are declarative ("Rozdíl je v provedení.", "Jedno provedení, jedna cena"). Per the citability model, question-based H2/H3 + direct 40-60 word answers is the single highest-leverage lever for AI-answer-engine citation on local-service queries, and it's entirely unused.
**Recommendation:** Add a short FAQ block (5-8 Q&As) to `/sluzby` and `/cenik` — e.g. "Dělá Schovinox i drobné zámečnické opravy?", "Jak dlouho trvá výroba zábradlí na míru?", "Kolik stojí hodinová sazba?" — each answered in one self-contained 40-60 word paragraph, plus `FAQPage` schema. Medium effort (content + ~2 hrs dev for schema).

**Severity: Medium**
**Description:** Product pages (`grilovaci-lorny`, `kulate-grily`) have explicit prices and dimensions in the copy but carry no `Product`/`Offer` schema — only the sitewide `HomeAndConstructionBusiness` + `BreadcrumbList` blocks. AI shopping/answer surfaces that parse structured price data have nothing machine-readable to read.
**Recommendation:** Add `Product` schema with `Offer` (price, currency, availability) to both grill product pages. Low-medium effort (~2-3 hrs dev), data already exists in the copy.

**Severity: Medium**
**Description:** No freshness signals anywhere — no `datePublished`/`dateModified` in any schema block and no visible "aktualizováno" text on any page. All 18 captures returned the crawler's fallback date, not a real per-page value.
**Recommendation:** Not urgent for a mostly-static local-business site, but low effort to add `dateModified` to the `HomeAndConstructionBusiness` schema and bump it on real content updates — helps recency-weighted AI retrieval over time.

**Severity: Medium**
**Description:** Brand presence outside the owned site is effectively zero: no Wikipedia entity, no YouTube (the strongest documented correlator with AI citation, ~0.74), no Reddit, no LinkedIn, no Google Business Profile reference. The only external `sameAs` is one Facebook Group link, not a Business Page. (Automated search-engine check was blocked by a CAPTCHA wall, so this is based on on-site signals only — worth a manual spot-check.)
<br>**Recommendation:** Realistic for a solo craftsman, but the single highest-ROI move is a Google Business Profile with matching NAP/hours/IČO — feeds both classic local pack and AI Overviews. Low effort, outside the codebase (client-side task, not dev).

**Severity: Low**
**Description:** `/sluzby` has a good self-contained 3-block structure (H2 per service) but each blurb is only 40-70 words — shorter than the 134-167 word citation sweet spot.
**Recommendation:** Expand each of the 3 service blurbs by ~1-2 sentences with concrete specifics (materials, typical turnaround, project types handled). Low effort.

**Severity: Low**
**Description:** `/cenik` states only one concrete figure (550 Kč/hod) with everything else "individuálně" — a citable stat, but no ranges for common jobs (e.g. zábradlí, schodiště, brána) that would answer "kolik stojí X" queries directly.
**Recommendation:** Add 2-4 indicative price ranges per common job type, clearly labeled as orientační. Low-medium effort (client input needed for numbers).

**Severity: Low**
**Description:** `/o-nas` skips heading levels (H1 → H3, no H2) — minor structural-parsing inconsistency versus the rest of the site.
**Recommendation:** Insert H2s for the timeline sections already present as H3s. Trivial effort.
