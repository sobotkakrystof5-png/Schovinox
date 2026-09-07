# Backlink Profile — schovinox.cz

**Tier: 0** (Common Crawl + verification crawler only; no Moz/Bing/DataForSEO keys configured). Confirmed via `backlinks_auth.py --check` (confidence: 1.00, tool output).

## Score

**INSUFFICIENT DATA — no numeric 0-100 authority score produced.**

Only 1 of the 7 standard weighted factors (referring domain count) has any evidence at Tier 0, and that evidence is "effectively zero." Per skill policy, a numeric score with <4/7 factors would be misleading and was rejected by the report validator's health-score check (confirmed via `validate_backlink_report.py`, PASS, 0 errors). This is **not a failing grade** — it reflects a first-ever audit of a newly launched, single-location local trade site that has never run link building or PR. Backlink footprint is expected to be near-zero at this stage; word-of-mouth and local citations matter far more for this business model than links.

## What Works

- Site is technically reachable and crawlable: `https://schovinox.cz` redirects (308) to `https://www.schovinox.cz`, which returns 200; `robots.txt` allows all crawlers and declares a sitemap (source: direct curl check, confidence: 0.95).
- No toxic, spammy, or reciprocal-link patterns exist — because no inbound links exist at all yet. Clean slate, nothing to disavow (source: verify crawler, confidence: 0.85).
- Domain isn't blocked from discovery: no CCBot exclusion in `robots.txt`, so future crawls can pick it up once external links/mentions appear (source: direct check, confidence: 0.95).

## Findings

| Severity | Description | Recommendation |
|---|---|---|
| Low | **Zero backlinks/citations detected in any Tier-0 source.** Domain not present in the Common Crawl hyperlink graph (`cc-main-2026-jan-feb-mar` release: `in_crawl: false`, `in_rankings: false`) and has no page captured in the CC URL index across 3 recent snapshots (CC-MAIN-2026-34, 2025-38, 2024-30) — "no captures found" for `schovinox.cz*` in all three (source: Common Crawl Graph + CC Index API, confidence: 0.50, domain-level, quarterly freshness). | Expected for a brand-new local site with no prior press or link building — not a fix-now item. Deprioritize aggressive link building; focus budget on local citations instead (see below). |
| Info | **The one known external property — the Facebook group `facebook.com/groups/649523349223013/` — could not be verified as linking back.** The verification crawler got HTTP 400 fetching the group URL (source: `verify_backlinks.py`, confidence: 0.85 for the HTTP result itself). This is **not** confirmation the link is absent — Facebook blocks unauthenticated/bot requests to group pages, so the crawler simply couldn't read the content either way. Treat as "unverifiable," not "verified missing." | Manually check (logged in) that the group post/pinned post/about section actually links to schovinox.cz. Even if it does, Facebook group posts are typically `nofollow`, not publicly indexed, and carry no CC/search authority — value is referral traffic and local word-of-mouth, not SEO link equity. Low priority; a quick manual confirmation is enough, no crawler fix needed. |
| Medium | **No visibility into local business citations** (Firmy.cz, Mapy.cz, Zlaté stránky, obor.cz-style directories, Google Business Profile) — Tier 0 tools don't check these, and none were supplied for verification. | For a local craftsman/lead-gen site, consistent NAP citations on 5-10 free Czech local directories will do more for visibility than backlink outreach. Treat as a citation-building task, not a "backlinks" task — track separately from this report. |
| Low | **Can't measure DA/PA, spam score, anchor text mix, or referring-domain counts** — no Moz/Bing/DataForSEO keys configured. | Not urgent for a site with ~0 links today. Worth revisiting once the site has been live longer and picks up its first few citations/mentions — a free Moz API key (2,500 rows/month) would be enough to re-baseline at that point. |

*All findings validated via `validate_backlink_report.py` (status: PASS, 0 errors, 1 info-level note applied above re: not equating CC absence with "low authority").*
