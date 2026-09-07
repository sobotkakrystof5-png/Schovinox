## Score
80/100

## What Works
- **LocalBusiness JSON-LD is server-rendered site-wide** via `app/layout.tsx` (`localBusinessJsonLd`), confirmed present and syntactically valid on every captured page (home, o-nas, sluzby, grilovaci-lorny, projekt-1, reference, etc.). `@context` is `https://schema.org`, format is JSON-LD (correct, no Microdata/RDFa).
- **Type choice `HomeAndConstructionBusiness` is valid and not deprecated.** Reasonable fit for a zámečnictví/kovovýroba business; schema.org also has the more specific `Locksmith` subtype (see Findings).
- **The apex/www domain bug is fixed and live.** `lib/constants.ts` → `SITE.domain` defaults to `https://www.schovinox.cz`. Verified in the actual rendered HTML: both the LocalBusiness block (`"url":"https://www.schovinox.cz"`, `"image":"https://www.schovinox.cz/homepage-hero.jpeg"`) and every `BreadcrumbList` block use absolute `https://www.schovinox.cz/...` URLs — no apex/www mismatch on production.
- **BreadcrumbList is implemented correctly** via `components/seo/BreadcrumbJsonLd.tsx` and wired into 11 route templates (o-nas, sluzby, all 3 grill product pages, projekty index + `[slug]` detail, reference, cenik, galerie, kontakt). Multi-level trails are correct where hierarchy exists (e.g. project detail = Domů → Projekty → project name). Correctly **omitted on the homepage** (a single-item "Home" breadcrumb has no value and Google explicitly doesn't want it).
- **No FAQPage anywhere** — correct, matches current policy (Google retired FAQ rich results for all sites; no reason to add).
- **No fabricated Review/AggregateRating.** `lib/testimonials.ts` is currently an empty array with an explicit code comment: reviews only get added after verified submissions — "ne dřív, fingovat hodnocení nejde" (can't fake ratings). This is the right call; adding AggregateRating without real review data would violate Google's structured-data policies.
- No deprecated types (HowTo, SpecialAnnouncement, CourseInfo, etc.) anywhere in the codebase.

## Findings

**Severity: Moderate**
**Description:** The three grill product pages (`/grilovaci-lavice/grilovaci-lorny`, `/kulate-grily`, `/grilovaci-rosty`) have real, transactional data — named size variants and fixed Kč prices per variant (e.g. `LORNA_SERIES` in `lib/lorny.ts`: Řada 400/500, 6 variants, 2 200–3 700 Kč) — but carry **no Product/Offer schema at all**, only BreadcrumbList. This is the single biggest missed opportunity on the site: these are the pages meant to convert, and structured product/price data is what enables Google price display and Merchant-adjacent surfaces.
**Recommendation:** Add a `ProductGroup` with `hasVariant` (one `Product`/`Offer` per size) on each grill product page. Example for Grilovací Lorny (adapt `productGroupID`, `url`, and variant list per page — do not paste placeholder text):

```json
{
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "productGroupID": "grilovaci-lorny",
  "name": "Grilovací Lorna",
  "description": "Grilovací Lorna z potravinářského nerezu 1.4301, plech síly 2 mm, kartáčovaný povrch, mořené sváry.",
  "url": "https://www.schovinox.cz/grilovaci-lavice/grilovaci-lorny",
  "image": "https://www.schovinox.cz/lorny/lorna-5.jpeg",
  "brand": { "@type": "Brand", "name": "Schovinox" },
  "variesBy": ["size"],
  "hasVariant": [
    {
      "@type": "Product",
      "sku": "lorna-400x250",
      "name": "Grilovací Lorna 400 × 250 mm",
      "size": "400 × 250 mm",
      "offers": {
        "@type": "Offer",
        "url": "https://www.schovinox.cz/grilovaci-lavice/grilovaci-lorny",
        "priceCurrency": "CZK",
        "price": "2200",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@type": "Product",
      "sku": "lorna-500x500",
      "name": "Grilovací Lorna 500 × 500 mm",
      "size": "500 × 500 mm",
      "offers": {
        "@type": "Offer",
        "url": "https://www.schovinox.cz/grilovaci-lavice/grilovaci-lorny",
        "priceCurrency": "CZK",
        "price": "3700",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }
  ]
}
```
Repeat `hasVariant` for all 6 sizes from `LORNA_SERIES`. Note: Google's Product rich-result eligibility for `ProductGroup`/variants typically also wants a `Review`/`AggregateRating` at some point — don't fabricate one now (consistent with the reference-page policy above); add it once real reviews exist.

---

**Severity: Low**
**Description:** The `HomeAndConstructionBusiness` block is missing several Google-recommended (not required) LocalBusiness properties: `priceRange`, `@id`, `logo`, `description`, and `areaServed`. There's also no cross-linking `@id` between the LocalBusiness block and the BreadcrumbList/page entities, so Google has to infer they refer to the same site.
**Recommendation:** Extend `localBusinessJsonLd` in `app/layout.tsx`:
```json
{
  "@id": "https://www.schovinox.cz/#organization",
  "priceRange": "$$",
  "description": "Zakázková kovovýroba, zámečnické práce a svářečské řemeslo, kooperace pro firmy a výroba produktů na grilování z nerezu.",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Kraj Vysočina a okolí"
  }
}
```
(`logo` only if a square/transparent logo file — not the hero photo — actually exists; don't reuse `homepage-hero.jpeg` for both `image` and `logo`.) Confirm the real service area with the client before writing "Kraj Vysočina" — don't guess.

---

**Severity: Info**
**Description:** `@type: "HomeAndConstructionBusiness"` is valid, but schema.org also defines `Locksmith` as a direct subtype of `HomeAndConstructionBusiness`, and the site's own tagline leads with "Zámečnictví" (locksmith work) before kovovýroba/svářečství.
**Recommendation:** Optional refinement, not a fix: switching to `"@type": "Locksmith"` would be more specific for Google's entity understanding, at the cost of narrowing the implied category away from general metal fabrication/welding. Current choice is defensible as-is since the business does more than locks — flag for client decision, don't change silently.

---

**Severity: Info**
**Description:** In `BreadcrumbJsonLd.tsx`, the first breadcrumb item is always named after the business (`SITE.name`, "Schovinox") rather than the conventional "Domů"/"Home". This is spec-valid (schema.org `name` has no fixed vocabulary) and won't fail Google's Rich Results Test, but deviates from Google's own examples.
**Recommendation:** Cosmetic only — no action required unless the team wants strict convention alignment.

---

**Severity: Info**
**Description:** `/sluzby` lists distinct services (zakázková kovovýroba, kooperace, svářečské práce) with no `Service` schema, and there is no `WebSite` schema (with or without `SearchAction`).
**Recommendation:** Not required for any current rich result, but adding per-service `Service` entries (linked via `provider` back to the `@id` LocalBusiness above) would strengthen topical/entity signals for both classic search and AI-overview style surfaces. Low priority — implement after the Product schema gap above is closed.

---

**Severity: None (verify only)**
**Description:** Confirmed no regression from the recent apex→www domain default fix in `lib/constants.ts` reaching structured data — checked raw rendered JSON-LD on `home`, `grilovaci-lorny`, `o-nas`, `projekt-1`, `reference`, `sluzby`; all URLs correctly resolve to `https://www.schovinox.cz/...`.
**Recommendation:** None — just noting this was actively checked, not assumed.
