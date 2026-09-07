# Technical SEO — schovinox.cz

## Score

78/100

Held back mainly by (a) the historical indexing wipeout from the now-fixed host-mismatch bug, which means the site is starting from zero trust/history in Google's eyes regardless of current technical health, (b) live placeholder data on all 7 project pages, and (c) a completely bare security-header profile.

## What Works

- **Host-mismatch noindex/robots.txt bug is confirmed fixed and live.** `curl -I https://www.schovinox.cz/` returns `200` with no `X-Robots-Tag` header, `robots.txt` now serves `Allow: /` with a correct sitemap declaration, and `sitemap.xml` lists all 17 canonical URLs on `www.schovinox.cz`. Root cause was `SITE.domain` in `lib/constants.ts` being hardcoded to the apex while Vercel serves `www.schovinox.cz` — `app/robots.ts` and `middleware.ts` both compared `request host !== SITE.domain host` and treated the real production host as a "foreign" preview deploy, blanket-blocking crawling and adding `X-Robots-Tag: noindex, nofollow` to every response. Fix (`SITE.domain` → `https://www.schovinox.cz`) is deployed and verified.
- **No other host-mismatch instances found.** Audited every consumer of `SITE.domain` (`app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` metadataBase/OpenGraph/JSON-LD, `components/seo/BreadcrumbJsonLd.tsx`) plus a repo-wide grep for hardcoded `schovinox.cz` — everything derives from the single `SITE.domain` constant, and all per-page `canonical` values are relative paths resolved against `metadataBase`. Verified in rendered output across all 18 pages: canonical, `og:url`, and JSON-LD `url`/breadcrumb `item` fields are all consistently `https://www.schovinox.cz/...`. No mixed apex/www leakage anywhere.
- **Apex → www redirect is clean**: single 308 hop (`https://schovinox.cz/` → `https://www.schovinox.cz/`), no chain.
- **Fully server-rendered, no JS-rendering dependency.** `render_page.py` reports `is_spa: false` / `mode_used: raw` on all 18 captured pages — full content, meta tags, and JSON-LD are present in the initial HTML response with no client-side hydration required for indexing.
- **Sitemap validated clean** via `sitemap_discovery.py`: declared in robots.txt, resolves to a valid `urlset`, no broken/duplicate fallback sitemaps found.
- **Meta tags consistent and correct sitewide**: unique `<title>` (template `%s | Schovinox`), unique meta description, correct `viewport` (`width=device-width, initial-scale=1`, no zoom-blocking), `lang="cs"` on `<html>`, on every one of the 18 pages checked.
- **Coming-soon page handled correctly**: `/grilovaci-lavice/grilovaci-rosty` (no real content yet) correctly serves `<meta name="robots" content="noindex, follow">` and is excluded from `sitemap.xml` via the `comingSoon` flag in `lib/constants.ts` — a deliberate, well-implemented exception, not a bug.
- **Images use `next/image`** with responsive `srcSet`, explicit `sizes`, and `fetchPriority="high"` on the homepage hero (the likely LCP element) — good CWV practice, reduces oversized-image and CLS risk. Font loading uses `next/font` with `display: swap` (no FOIT).
- **Structured data present on every page**: `HomeAndConstructionBusiness` (LocalBusiness) JSON-LD sitewide plus `BreadcrumbList` on all non-home pages, all reported as syntactically valid blocks by the render tool. Deep schema validation deferred to the `seo-schema` sub-skill per scope.

## Findings

### Critical (Resolved — monitor only)
**Description:** Until today, every page on production served `X-Robots-Tag: noindex, nofollow` and `robots.txt` disallowed all crawling, due to the `SITE.domain` apex/www mismatch described above. This means the site has had **zero real indexing history** — Google has either never crawled it successfully or has old cached copies marked noindex. The fix is live and verified, but there is no historical signal to build on.
**Recommendation:** In Google Search Console (and Bing Webmaster Tools), submit `https://www.schovinox.cz/sitemap.xml`, use "Request Indexing" on the homepage and highest-priority pages (`/kontakt`, `/sluzby`), and check the URL Inspection tool over the next 1–2 weeks to confirm Google now sees `Allow` in robots.txt and no noindex tag. Do not assume "fixed in code" equals "fixed in Google's index" — verify via GSC coverage reports.

### High
**Description:** All 7 project detail pages (`/projekty/projekt-1` through `projekt-7`) ship literal placeholder text in production HTML: the spec list renders `Materiál: ......`, `Lokalita: ......`, `Rok realizace: ....` — dots, not real data — on every single project page. Example, `projekt-1` raw HTML: `<dt>Materiál</dt><dd>......</dd><dt>Lokalita</dt><dd>......</dd><dt>Rok realizace</dt><dd>....</dd>`. Combined with a single one-sentence description per project (~100–420 characters of unique body text, e.g. `projekt-1` extracted text is just "Výroba mycího stolu na míru pro hasičskou zbrojnici, řešení šité přesně na provozní potřeby jednotky."), these pages are both visibly broken to human visitors and thin/near-duplicate from a content standpoint — 6 of 7 pages share the same `Typ zakázky` value and near-identical boilerplate structure.
**Recommendation:** Fill in real material/location/year data for all 7 projects before the next crawl wave, or remove those `<dt>` rows entirely if the data isn't available/won't be published. This is a content-data task, not a code fix, but it directly affects indexability (thin/templated content) and is visible to every visitor today — treat as high priority independent of the SEO angle.

### Medium
**Description:** No application-level security headers are configured anywhere in the codebase. `middleware.ts` only conditionally sets `X-Robots-Tag`; `next.config.mjs` has no `headers()` block. Live response headers on every page checked (home, `/kontakt`, `/projekty/projekt-1`) show only `strict-transport-security` (a Vercel platform default) — no `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, or `Permissions-Policy`.
**Recommendation:** Add a `headers()` block in `next.config.mjs` (or extend `middleware.ts`) setting at minimum `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `X-Frame-Options: SAMEORIGIN` (or a CSP `frame-ancestors 'self'`). Not an indexing blocker, but Lighthouse/security scanners will flag it, and it's a trust signal for a business site that just added a contact form + SMTP mailer.

### Low
**Description:** IndexNow protocol (Bing/Yandex/Naver instant-push indexing) is not implemented — no key file, no ping endpoint call on deploy/content change found anywhere in the repo.
**Recommendation:** Given the site is effectively starting its indexing history from scratch today, IndexNow is a cheap, high-leverage addition: generate a key, serve `/​<key>.txt`, and fire a POST to the IndexNow API (all 3 engines share one endpoint) on deploy or via a small script hitting the 17 sitemap URLs. Not required for Google, but speeds up Bing/Yandex/Naver pickup while the site has no backlink/crawl-history momentum yet.

### Info
**Description:** `/grilovaci-lavice/grilovaci-rosty` remains a live, linked (nav "Grilování" flyout, labeled "Připravujeme") 200-status page with `noindex, follow` — correct current handling, just flagging that it's an intentional, not accidental, noindex so it isn't mistaken for a regression during future audits.
**Recommendation:** No action needed; revisit once the page has real content and drop the `comingSoon` flag (it will then auto-appear in `sitemap.xml` per `app/sitemap.ts` logic).
