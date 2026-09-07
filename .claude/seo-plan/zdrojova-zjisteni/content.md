## Score

**58 / 100**

Copywriting voice is a genuine strength (specific, technical, no "AI slop" detected anywhere) but structural completeness problems — live placeholder data, empty testimonials page, thin/templated case studies, and an unbalanced service vs. product content depth — pull the score down materially.

## E-E-A-T Breakdown

| Factor | Score /100 | Notes |
|---|---|---|
| Experience (20%) | 65 | Strong narrative on `/o-nas` (age-based timeline, named founder quote); weak on `/projekty/*` (no process story, placeholder facts, one photo per case) |
| Expertise (25%) | 68 | Genuinely technical, specific detail on grill product pages (steel grade, plate thickness, welding/pickling process) is a real expertise signal; core trade services (`/sluzby`) get far less technical depth than the side product line |
| Authoritativeness (25%) | 50 | Named B2B clients (KFC, Nirosta, moštárny, masokombináty, farmaceutický průmysl) are good proof points but not backed by detail — the one project page tied to a named client (Nirosta, `projekt-4`) has empty placeholder fields; no certifications, press, or third-party recognition anywhere |
| Trustworthiness (30%) | 55 | Real address/phone/email/hours/IČO + LocalBusiness schema present sitewide, and an unusually honest anti-fake-review stance on `/reference` — both genuine positives. Dragged down hard by literal unfilled placeholder text live in production and a "100% spokojených zákazníků" claim with zero visible reviews backing it |

**Weighted E-E-A-T: ~59/100**

## AI Citation Readiness

**~55/100.** Product pages (`/grilovaci-lavice/grilovaci-lorny`, `/kulate-grily`) are citation-ready: concrete, quotable facts (steel 1.4301, 2mm/2.5mm/3mm plate, Ø475×750mm, 50kg motor, 27 000 Kč) under clear subheadings. The `/projekty/projekt-*` pages are the opposite case — an LLM or AI Overview trying to extract "what material/year/location" for these projects would retrieve literal placeholder dots (`......`, `....`) instead of an answer. `/sluzby` lacks the factual density needed for AI systems to cite it as a services authority.

## What Works

- Voice is specific and concrete throughout — steel grades, plate thicknesses, welding/pickling steps, named clients, named founder with a real quote ("Dominik Schovánek, zakladatel Schovinox"). This is the opposite of generic AI-website filler; no content-authenticity violations found on any of the 18 pages reviewed.
- `/reference` explicitly states testimonials are unedited and manually vetted ("Reference píšou zákazníci. Ne my.") — an unusually strong, differentiated trust signal in message (even though currently unbacked by content, see Findings).
- LocalBusiness JSON-LD (address, phone, opening hours, IČO, sameAs) present and valid on pages checked (e.g., `projekt-1`), reinforcing NAP consistency and local trust signals.
- `/o-nas` timeline gives granular, plausible first-hand detail (ages, years, named employers/sectors) rather than vague "years of experience" boilerplate — a good Experience signal.
- Titles and meta descriptions are unique per page, non-templated, and non-keyword-stuffed across all pages sampled.

## Findings

### 1. Placeholder metadata live in production on all 7 project detail pages
**Severity:** Critical
**Pages:** `/projekty/projekt-1` through `/projekty/projekt-7`
**Description:** Every case-study page displays literal unfilled placeholder text to real visitors: `Materiál: ......`, `Lokalita: ......`, `Rok realizace: ....`. Confirmed present in raw HTML on all 7 pages (visible in extracted text on projekt-2/3/6/7 directly; confirmed via HTML tag-strip on projekt-1). This is the single biggest trust/professionalism problem on the site — it reads as an unfinished site to any visitor who scrolls past the headline sentence, and it directly undermines claims like "16 let praxe" and "100+ dokončených realizací" by showing the underlying case data was never filled in.
**Recommendation:** Fill in real material/location/year for all 7 projects before this goes live to more traffic, or remove the fields entirely (as `projekt-1`'s HTML shows the component can render without ever mattering to the sentence copy) until real data exists. Do not ship "......" as visible UI text under any circumstance.

### 2. Case-study pages are template-thin with minimal unique content
**Severity:** High
**Pages:** `/projekty/projekt-1` through `/projekty/projekt-7`
**Description:** Each project page carries only 15–56 words of unique body copy — a single sentence describing the job — wrapped in identical structural boilerplate (metadata row, one hero photo, "Chci podobnou realizaci" CTA, "Další realizace" link to the next project). Only one photo per project was found in the rendered HTML (`data-nimg="fill"`, single `<img>`), not a gallery. For a craftsman business whose whole pitch is "look at real work, done by hand," this is a missed opportunity and reads as templated/duplicate structure across 7 URLs — exactly the "thin content ladder" pattern QRG raters are trained to flag, even though the sentences themselves are not generic AI phrasing.
**Recommendation:** Expand each case study to 150–250+ words: what the customer needed, why that material/thickness/process was chosen, any constraint solved, and 3–5 photos per project (in-progress + finished + in-situ). This also directly fixes the AI-citation-readiness gap noted above.

### 3. `/reference` has zero live testimonials despite site-wide "100% spokojených zákazníků" claim
**Severity:** High
**Pages:** `/reference` (50 words total), homepage stat block (`/`)
**Description:** The reference page's entire content is an invitation for customers to submit a review — there is currently no actual testimonial displayed. Meanwhile the homepage asserts "100 % spokojených zákazníků" as a hero-level stat with no citable evidence anywhere on the site. The honest "we don't fabricate quotes" framing is a genuine trust asset, but until real reviews appear, the numeric claim is functionally unverifiable, which is precisely what QRG trustworthiness scoring penalizes.
**Recommendation:** Either fast-track collecting 3–5 real testimonials to publish, or soften/remove the unverifiable "100%" stat until proof exists on `/reference`.

### 4. Core trade services get far less content depth than the side product line
**Severity:** Medium
**Pages:** `/sluzby` (116 words total for two services) vs. `/grilovaci-lavice/grilovaci-lorny` (310 words) and `/grilovaci-lavice/kulate-grily` (445 words)
**Description:** "Zjistit více" for both *Zakázková kovovýroba* and *Kooperace* — the two service lines that the `/o-nas` timeline actually uses to establish expertise (KFC servis, moštárny, masokombináty, farmaceutika, Nirosta) — link only to `/kontakt?typ=...`, a contact form, not to a dedicated content page. There is no page anywhere that goes deep on materials, process, typical turnaround, or capabilities for the core zámečnictví/kovovýroba business, while the secondary grilling product line has rich, specific, well-structured detail. This inverts the site's own stated priority ("Řemeslo, které drží desetiletí" is the H1) and leaves the higher-value B2B service lines under-documented for both users and AI/search systems.
**Recommendation:** Consider dedicated `/sluzby/zakazkova-kovovyroba` and `/sluzby/kooperace` pages (or substantially expand `/sluzby` itself) with the same level of concrete technical detail used on the grill product pages — this is where real topical-coverage gain is available without adding filler.

### 5. No certifications, licenses, or insurance mentioned anywhere
**Severity:** Medium
**Pages:** `/o-nas`, `/sluzby`, `/`, `/cenik`
**Description:** No mention of welding certification (e.g., ČSN EN ISO 9606), liability insurance, or other formal qualifications, despite the site describing food-grade (CIP nádrže pro mlékárnu, `projekt-3`) and pharmaceutical-adjacent work. For technical trade work, a stated credential is a strong, cheap Expertise/Trust signal.
**Recommendation:** If such certifications exist, add them to `/o-nas` or `/sluzby`. If they don't, no action needed — but don't claim food/pharma-grade work implicitly without backing it.

### 6. `/grilovaci-lavice/grilovaci-rosty` is a live "coming soon" page
**Severity:** Low
**Pages:** `/grilovaci-lavice/grilovaci-rosty` (84 words, "Připravujeme")
**Description:** Indexable page whose entire content is "we're still working on this, check back later." Honest, but thin and offers nothing to rank for or cite.
**Recommendation:** Low priority — either noindex until populated, or keep as-is since it's a minor sub-page; not urgent given low likely traffic.

### 7. Near-verbatim duplicate paragraphs across the two live grill product pages
**Severity:** Low
**Pages:** `/grilovaci-lavice/grilovaci-lorny`, `/grilovaci-lavice/kulate-grily`
**Description:** The "Ruční výroba" and "Potravinářský nerez 1.4301" description blocks are reused nearly word-for-word between the two pages (only the product noun changes). Minor internal duplication, low SEO risk given only 2 pages affected and clear product-line rationale for the shared claim.
**Recommendation:** Optional — vary the phrasing slightly per product if time allows; not a priority fix.

## Pages Reviewed

All 18 captured pages were reviewed for extracted text and structural content: `/`, `/o-nas`, `/sluzby`, `/grilovaci-lavice/grilovaci-lorny`, `/grilovaci-lavice/kulate-grily`, `/grilovaci-lavice/grilovaci-rosty`, `/projekty`, `/projekty/projekt-1` through `-7`, `/reference`, `/cenik`, `/galerie`, `/kontakt`. Certification/credential keyword sweep across `/o-nas`, `/sluzby`, `/`, `/cenik` returned no genuine matches (one false-positive substring hit in RSC payload noise, not real content).
