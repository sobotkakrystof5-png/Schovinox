## Score

**37 / 100**

| Dimension | Weight | Score |
|---|---|---|
| GBP Signals | 25% | 7/25 |
| Reviews & Reputation | 20% | 2/20 |
| Local On-Page SEO | 20% | 10/20 |
| NAP Consistency & Citations | 15% | 10/15 |
| Local Schema Markup | 10% | 6/10 |
| Local Link & Authority Signals | 10% | 2/10 |

Business type: **Hybrid** (visible provozovna address + opening hours = brick-and-mortar signal; "od zaměření na místě přes výrobu v dílně až po montáž" = on-site/SAB component). Industry: Home Services (metal fabrication/welding/locksmith craft), plus a secondary e-commerce-style product line (grilovací lavice).

## What Works

- NAP is byte-for-byte consistent across the footer (all 18 pages), the `/kontakt` page body, and the `LocalBusiness` JSON-LD on every page: "Schovinox", "734 859 363" / "+420 734 859 363", "Kněžice 88, 289 02". No discrepancies found.
- `/kontakt` has a real, dynamic Google Maps `<iframe>` embed (not a static image) rendered server-side (present in raw HTML, not JS-injected).
- Valid `HomeAndConstructionBusiness` JSON-LD present sitewide with `name`, `address` (required props), plus `telephone`, `url`, `email`, `image`, `openingHoursSpecification`, and a CZ-specific `identifier` (IČO 08386587) — a nice, uncommon trust/verification addition.
- `BreadcrumbList` schema implemented alongside the LocalBusiness block.
- Dedicated service pages exist (`/sluzby` with 3 distinct services, plus separate `/grilovaci-lavice/*` product pages) — this is Whitespark's #1 local organic ranking factor and it's already structurally in place.
- `/reference` is honestly framed ("Reference píšou zákazníci. Ne my.") — no fabricated testimonials or fake logos, which protects against a credibility mistake even though the page currently has zero content.
- Named real B2B clients in project write-ups (KFC servis, Nirosta kooperace, mlékárna) — decent case-study-style proof, even if not yet fully utilized.

## Findings

**[CRITICAL] No review content or reputation signal anywhere on the site**
`/reference` currently displays zero actual testimonials — it's an empty call-to-action asking past customers to submit one. No rating, no review count, no `aggregateRating` in schema (correctly omitted rather than faked, but the underlying gap is real). Whitespark's 18-day ranking-cliff rule means a business with no review acquisition system at all is structurally exposed once it starts competing locally.
Recommendation: Set up a Google Business Profile review request flow now (post-job SMS/email link) and get the first 5–10 real reviews collected before/alongside any other local SEO push. Feature 2–3 on `/reference` as they arrive.

**[CRITICAL] No Google Business Profile reference anywhere on the site**
No GBP link, place ID, "Find us on Google" CTA, or GBP-tied Maps embed exists on any page. The Maps iframe on `/kontakt` uses a generic address-string query (`maps?q=Kněžice+88...&output=embed`), not a verified Place embed — it cannot be confirmed to be tied to an actual claimed/verified listing. `sameAs` in schema lists only a Facebook Group URL, no Google entity link.
Recommendation: Claim/verify the GBP listing (if not already done), then swap the Maps iframe to the verified Place embed URL and add the GBP profile URL to `sameAs`.

**[HIGH] Facebook presence is a Group, not a Page**
The only social link sitewide (footer text link + schema `sameAs`) is `facebook.com/groups/649523349223013/`. Groups don't carry a business profile, native reviews, hours, CTA button, or Maps/local-pack integration the way a Page does, and read as less authoritative for entity verification.
Recommendation: Create/link an official Facebook Business Page and either replace or add it alongside the group link; use the Page URL in `sameAs`.

**[HIGH] Project/case-study pages have unpopulated "Lokalita" and "Rok realizace" fields**
All 7 sampled `/projekty/[slug]` detail pages show a template field for location and year that is literally unfilled placeholder text (`......` / `....`). This is the single highest-value local-proof content this site could publish (naming the towns/regions where completed work happened) and it's built but empty.
Recommendation: Fill in real town/region + year for every project. This also gives natural local keyword coverage the site currently has none of.

**[HIGH] Zero current-tense service-area / coverage language anywhere on the site**
Searched all 18 pages for region/town/coverage keywords; the only hit is a historical anecdote in `/o-nas` about the grandfather's era ("čtyři roky zakázek po celé republice"), not a present-tense statement of what area Schovinox itself currently serves. `/sluzby` mentions on-site work ("zaměření na místě") but never says how far the business travels. Since Kněžice is a small village with negligible standalone search volume, not naming the nearby larger towns/region anywhere (title tags, meta descriptions, headings, or schema `areaServed`) leaves realistic local search queries uncovered.
Recommendation: Add an explicit, current service-area statement (nearby towns/region/radius) to `/kontakt` or `/sluzby`, and add `areaServed` to the LocalBusiness schema.

**[MEDIUM] Missing `geo` (GeoCoordinates) in LocalBusiness schema**
No `geo` property with lat/long is present anywhere in the JSON-LD, despite this being a recommended property (5-decimal precision expected).
Recommendation: Add `geo` with 5-decimal-precision coordinates for Kněžice 88.

**[MEDIUM] Missing `priceRange` in schema despite having a public rate**
`/cenik` publishes a clear hourly rate (550 Kč/hod), but this isn't reflected in schema as `priceRange`.
Recommendation: Add `priceRange` (e.g. "550 Kč/hod" or "$$") to the LocalBusiness JSON-LD — a low-effort addition.

**[MEDIUM] No verifiable Tier-1/CZ directory citations**
Could not verify presence on Yelp/BBB or, more relevantly for a Czech business, Firmy.cz, Seznam Firmy, or Zlaté stránky — no outbound signal to any of these on-site, and live citation lookups weren't available in this environment (see Limitations). The skill's default citation list (Yelp/BBB) is US-centric and only partially applicable here.
Recommendation: Manually verify/create listings on Firmy.cz and Seznam Firmy (Mapy.cz business listing) with NAP matching the site exactly; these matter more than Yelp/BBB for CZ local pack visibility.

**[LOW] Schema subtype could be reconsidered**
`HomeAndConstructionBusiness` is a valid but generic type; Schema.org's more specific `Locksmith` subtype would actually be a poor fit (too narrow — implies lock/key services only, not general custom metal fabrication/welding). No better-fitting Google-supported subtype exists for this exact trade mix, so the current choice is defensible; flagging only for awareness, not as an error requiring a fix.

**[LOW] Homepage "years in business" framing is potentially confusing**
Homepage stat block shows "16 let praxe v oboru" and "2 roky pod značkou Schovinox," while the hero subhead separately claims "čtyřicet let rodinné zkušenosti." These aren't necessarily contradictory (40 years may refer to combined multi-generational family experience vs. 16 years personal/professional trade experience), but as written it could read as inconsistent to a visitor or to an LLM extracting a single "years in business" fact.
Recommendation: Add one clarifying word (e.g., "napříč generacemi") next to the 40-year claim so the two numbers don't appear to conflict.

## Limitations

No live GBP/Google Maps Platform or DataForSEO access in this environment — GBP category, live review count/velocity, local pack position, and photo/post cadence could not be pulled directly and were assessed only from on-site signals. Tier-1/CZ directory presence (Firmy.cz, Seznam Firmy, Yelp, BBB) could not be verified live; only the absence of outbound links/mentions to these sources on-site was confirmed. Proximity (55.2% of ranking variance per Search Atlas) is outside the scope of any website-side audit.
