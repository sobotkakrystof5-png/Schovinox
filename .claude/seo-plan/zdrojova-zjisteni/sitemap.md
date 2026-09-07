## Score
92/100

## What Works
- **Domain bug confirmed fixed.** `sitemap.xml` now lists all 17 URLs on `https://www.schovinox.cz/...` (verified via live `curl`), matching production `SITE.domain`. Apex `schovinox.cz` returns a 308 redirect to `www`, no mismatch.
- `robots.txt` now reads `Allow: /` and correctly points to `Sitemap: https://www.schovinox.cz/sitemap.xml`.
- No `X-Robots-Tag: noindex` on any live page checked (/, /o-nas, /sluzby, both grill pages, /projekty, /projekty/projekt-1, /projekty/projekt-7, /reference, /cenik, /galerie, /kontakt) — all return `200` with no noindex header. `middleware.ts` only injects `X-Robots-Tag: noindex, nofollow` when `request host !== productionHost`, so this is now dormant on the correct domain, exactly as designed.
- XML is well-formed (`xmllint --noout` passes), served with correct `content-type: application/xml`.
- URL count: 17/50,000, trivially within size/count limits.
- `app/sitemap.ts` correctly builds the list from `NAV_ITEMS` + `PROJECTS`, deduping the shared URL between the "Grilování" parent nav link and its first child (`grilovaci-lorny`) via `Set` — no duplicate `<loc>` entries.
- `/grilovaci-lavice/grilovaci-rosty` (comingSoon per `GRILL_PAGES`) is correctly filtered out of the sitemap **and** independently carries its own `<meta name="robots" content="noindex, follow">` on the live page — double-safe, won't get indexed even via internal nav link crawl.
- All 7 `/projekty/projekt-1..7` slugs from `lib/projects.ts` are present; no orphaned or missing project pages.
- Homepage `<link rel="canonical">` and sitemap `<loc>` both use the no-trailing-slash form consistently (`https://www.schovinox.cz`).
- No `changefreq` tags used (avoided already).
- No location-page doorway risk: 0 location pages, quality gate thresholds (30+/50+) don't apply.

## Findings

| Severity | Description | Recommendation |
|---|---|---|
| Info | Every `<url>` still carries a `<priority>` tag (1, 0.9, 0.7, or 0.6). Google has explicitly ignored `priority` and `changefreq` since 2020. | Optional cleanup: drop `priority` from `app/sitemap.ts` output entirely. Zero SEO impact either way — pure tidiness. |
| Low | No `<lastmod>` on any URL. Not required by Google, but real, accurate lastmod dates (tied to actual content changes, not build time) can help crawl prioritization for a small site like this. | If added later, source it from real content-change dates (e.g. project data last-edited date), not `new Date()` at build time — a lastmod that just tracks every deploy is worse than no lastmod (looks like boilerplate/fake freshness). Not urgent for a 17-page site. |
| Info | `/grilovaci-lavice/grilovaci-rosty` is reachable (200, linked from nav as "Připravujeme") but intentionally excluded from the sitemap and noindexed. | No action needed — this is the correct pattern for a placeholder page. Just confirm it gets a real `noindex` removal + sitemap inclusion the moment real content ships, so it isn't forgotten in "coming soon" limbo. |

No missing pages, no extra/dead pages, no redirect chains, no invalid XML, no oversized sitemap. The only prior critical issue — apex-domain sitemap + `Disallow: /` + universal noindex — is resolved and verified live.
