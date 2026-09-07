# Performance — schovinox.cz

## Data source (be explicit)
No Google API credentials are configured (`google_auth.py --check` → Tier -1: PSI API and CrUX field data both `[MISSING]`, no API key). **All numbers below are lab data** from local Lighthouse 13.4.1 runs (real Chrome, headless, against the live production site) — not real-user field data. Field data would be needed to know real 75th-percentile pass/fail per Google's methodology; treat these lab numbers as a diagnostic proxy only. No FID is referenced anywhere (correctly retired; INP is not lab-measurable and is not fabricated below).

All 4 requested pages were tested: homepage (desktop + mobile), `/galerie`, `/grilovaci-lavice/grilovaci-lorny`, `/projekty` (mobile, Lighthouse default throttling — the standard "worst realistic case" profile).

## Score

| Page | Lighthouse Performance (mobile, throttled) | LCP | CLS | TBT |
|---|---|---|---|---|
| `/` (homepage) | 88/100 (desktop: 98/100) | 3.7s (desktop: 973ms) | 0 | 13ms (desktop: 0ms) |
| `/galerie` | 94/100 | 3.0s | 0 | 0ms |
| `/grilovaci-lavice/grilovaci-lorny` | 91/100 | 3.4s | 0 | 0ms |
| `/projekty` | 95/100 | 2.9s | 0 | 0ms |

Mobile LCP on every page sits inside Google's 2.5s–4.0s "Needs Improvement" band, close to the 2.5s "Good" line. CLS is a clean 0 across the board and TBT is negligible everywhere — this site has essentially no main-thread/layout-shift problem, it has an image-delivery-speed problem on mobile.

## What Works
- **Images are 100% `next/image`** — zero plain `<img>` tags anywhere in `app/` or `components/` (grep confirmed, 13 files import `next/image`).
- **`next.config.js`** enables AVIF/WebP output and a 1-year `minimumCacheTTL` — correct for a static content site.
- **Fonts use `next/font/google`** (`Space_Grotesk`, `Inter`, `app/layout.tsx`) with `display: "swap"`, self-hosted, no third-party font round-trip.
- **CLS is solved everywhere**: gallery images ship explicit `width`/`height` (`lib/gallery.ts`), and `fill`-based images all sit inside sized/aspect-ratio containers. Measured CLS = 0 on all 4 pages.
- **No render-blocking third-party scripts** found — the one `<script>` in `app/layout.tsx` is JSON-LD structured data, not a blocking tag.
- **Homepage hero LCP handling is correct and it shows**: `app/page.tsx` sets `priority` on the hero `<Image fill>`. Lighthouse's `lcp-discovery-insight` audit scores this **1/1** — `fetchpriority=high` applied, discoverable in initial HTML, not lazy-loaded. This is the only page of the 4 that gets this right.

## Findings

### 1. LCP image missing `priority` on 3 of 4 pages — HIGH, confirmed by Lighthouse
Lighthouse's `lcp-discovery-insight` audit (Lighthouse 13's insight-based LCP diagnostic) **fails (score 0)** on `/galerie`, `/grilovaci-lavice/grilovaci-lorny`, and `/projekty`. In each case the actual LCP element in the rendered HTML has `loading="lazy"` and no `fetchpriority="high"`:
- `/galerie`: LCP element is the first gallery thumbnail (`components/sections/GalleryGrid.tsx`) — snippet confirms `loading="lazy"`, no priority hint.
- `/grilovaci-lavice/grilovaci-lorny`: LCP element is the large tile in the product photo mosaic (`components/sections/ProductGallery.tsx`, the `col-span-2 row-span-2` first tile) — same component is reused on the kulaté-grily product page, so this affects that page too.
- `/projekty`: LCP element is the first project card image (`components/sections/ProjectCard.tsx`, rendered via `ProjectsGrid`) — same `alt="Mycí stůl pro hasičskou zbrojnici"` image that's also used correctly as a non-priority teaser on the homepage, but here it's the actual LCP candidate and isn't marked.

Compare to the homepage hero (`app/page.tsx`), which does this correctly and scores 1/1 on the same audit. This is a small, low-risk, high-confidence fix.

**Recommendation**: add `priority` to:
- The first N above-the-fold images in `GalleryGrid.tsx` (first visible row across breakpoints, e.g. first 4).
- The first tile rendered by `ProductGallery.tsx` (index 0, the large `col-span-2 row-span-2` tile) — pass a `priority` flag through as a prop since this component is shared across product pages.
- The first card rendered by `ProjectsGrid`/`ProjectCard.tsx` (index 0).

Expected impact: this removes the lazy-load delay and adds an early preload hint, which should measurably pull mobile LCP down on these 3 pages — can't quantify exact ms without a follow-up measurement, but the mechanism is proven correct on the homepage (973ms desktop / 3.7s mobile vs. these pages' 2.9–3.4s despite generally lighter content).

### 2. Homepage mobile LCP (3.7s) is the weakest of the 4, despite doing `priority` correctly — MEDIUM
TBT and CLS are both clean (13ms / 0), so the 3.7s isn't a main-thread or layout problem — it's bytes-to-paint under throttled mobile conditions. `network-server-latency` audit attributed ~430ms to server/TLS negotiation under the simulated profile; TTFB (`server-response-time`) was 388ms on mobile vs. 182ms on desktop for the same document.
**Recommendation**: verify the delivered `/homepage-hero.jpeg` is actually going through the Next.js image optimizer (AVIF/WebP, correctly sized `srcset` for mobile viewports, not an oversized fallback) — this is already using `sizes="100vw"` + `fill`, which is right, but worth confirming actual bytes transferred on a throttled connection are as small as they can be for a full-bleed hero.

### 3. No field data (CrUX) — HIGH priority to close, not a code issue
Without a Google API key, there's no way to see real 75th-percentile field LCP/INP/CLS — the only metric that actually determines Core Web Vitals pass/fail in Search Console and ranking. Lab numbers above are single synthetic traces and can only be used directionally.
**Recommendation**: add a Google Cloud API key with PageSpeed Insights + CrUX API enabled (`~/.config/claude-seo/google-api.json` or `GOOGLE_API_KEY` env var) so future audits use real field data. If Vercel Analytics/Speed Insights is enabled on this project, that's a usable first-party RUM source in the meantime.

## Not Measured / Not Applicable
- INP: not lab-measurable (requires real interaction timing); not reported, no proxy value fabricated.
- CrUX field data / PSI API: unavailable, no credentials configured (confirmed above).
- Desktop Lighthouse runs were only done for the homepage as a baseline comparison point; the other 3 pages were tested mobile-only given the time budget — mobile is the more failure-prone and more field-representative profile, so this was the right one to prioritize, but desktop numbers for those 3 pages are unknown.
