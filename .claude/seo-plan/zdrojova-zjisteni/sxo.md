# SXO Analysis — schovinox.cz

Method note: no live SERP pull was performed; findings are derived from known Google
intent patterns for local trade-service queries (zámečník/kovovýroba/svářečské práce
[region], kooperace kovovýroba, grilovací lavice na zakázku) applied against 11
rendered captures (home, o-nas, sluzby, cenik, grilovaci-lorny, kulate-grily,
grilovaci-rosty, projekty + 7 project details, reference, galerie, kontakt).

## Score

**SXO Gap Score: 40/100** (separate from SEO Health Score)

Rationale: NAP/local signals and the /kontakt intake are solid, and two content
pieces (/o-nas, /grilovaci-lorny) show genuine craft depth. But the site loses
trust at the exact moments SERP-style local/B2B/product intent expects proof:
case-study pages ship literal placeholder text, the "Reference" page has zero
reviews, and /sluzby is a thin rozcestník rather than a real service catalog for
three distinct commercial intents.

**Correction (post-review):** the original pass of this analysis flagged the
`/grilovaci-lorny` price table as broken/absent. That was a false positive caused
by extracting page text through boilerplate-stripping (which drops link-wrapped
list items) and a regex that missed thousands separated by a non-breaking space
(`2 200`). Verified directly against the raw production HTML: all 6 size
variants render real prices server-side (2 200–3 700 Kč), and the hero's
"Přejít na ceník" link is a same-page anchor (`#cenik`) to that exact table, not
a link to the separate `/cenik` page. This item has been removed from Findings
below — no code or content change is needed here.

## What Works

- **/kontakt** has full NAP (Kněžice 88, phone, email, hours), click-to-call, and a
  segmented intake field ("Typ poptávky": kovovýroba / kooperace / grilování / jiné)
  — matches the Local Page taxonomy well.
- **/o-nas** reads as a real multi-generation craftsman story, not generic AI copy —
  strong E-E-A-T narrative tone ("Tři generace u jedné svářečky").
- **/grilovaci-lorny** and **/kulate-grily** have real content depth (386–458 words),
  concrete material specs (potravinářský nerez 1.4301, 2 mm plech, kyselinové
  moření) and 7 images each with a lightbox — this is Product-Page-appropriate depth.
- **/cenik** publishes an actual hourly rate (550 Kč/hod) for kovovýroba/kooperace —
  most local competitors hide pricing entirely, so this is a real differentiator
  for that one intent.
- Consistent `HomeAndConstructionBusiness` + `BreadcrumbList` schema across all
  pages, and OpeningHoursSpecification/PostalAddress on the homepage.
- /projekty is correctly split by intent (private kovovýroba vs. kooperace) in
  structure, even though the execution is thin (see Findings).

## Findings

**1. CRITICAL — Case-study pages ship literal placeholder text in production.**
All 7 `/projekty/projekt-1..7` detail pages render `Materiál: ......`,
`Lokalita: ......`, `Rok realizace: ....` instead of real facts (confirmed via
curl on all 7). This is the site's primary E-E-A-T/trust asset for exactly the
B2B kooperace persona doing vendor due diligence, and it currently reads as
broken/abandoned rather than credible.
*Recommendation:* Fill in real material/location/year data before the next
crawl. If a fact is genuinely unknown, remove the field entirely — a missing row
reads as intentional; three rows of dots reads as a bug.

**2. HIGH — /sluzby is a rozcestník teaser, not a Service Page.**
136 words total cover all three "obory" (kovovýroba, kooperace, grilování). No
process/methodology, no embedded case studies, no region/city named anywhere on
the page. The "Zjistit více" CTAs for Zakázková kovovýroba and Kooperace both
link straight to `/kontakt?typ=...` — there is no deeper page for either intent.
For local trade-service SERPs, Google typically rewards a Service Page with
process + case studies + local relevance over a category-teaser page; three
distinct commercial intents are being collapsed into one thin page with nothing
underneath for Google to rank on a per-service basis.
*Recommendation:* Build real sub-pages (e.g. `/sluzby/zakazkova-kovovyroba`,
`/sluzby/kooperace`) with process steps, typical materials/turnaround, and
2–3 embedded relevant case studies, before the CTA to /kontakt.

**4. HIGH — /reference has zero actual reviews.**
The page's own framing ("Reference píšou zákazníci. Ne my.") is a good
differentiation angle, but content is 84 words asking visitors to *submit* a
testimonial — no quotes, no images, no Review/AggregateRating schema. An empty
reviews page is worse than no page for a decision-stage evaluator (private or
B2B) actively looking for social proof: it signals zero validated customers.
*Recommendation:* Seed with 5–8 real reviews (name, project type, photo) before
linking this page from primary nav, or fold it into /o-nas until populated.

**5. HIGH — Case-study body copy is one sentence per project, even ignoring the
placeholder bug.** Each `/projekty/projekt-N` page has ~15–20 words of narrative
(e.g. "Výroba CIP nádrží pro mlékárnu. Zakázka pro potravinářský provoz s
vysokými nároky na čistotu a přesnost svarů.") — no process, no client quote, no
scope/dimensions, no before/after. This reads as a photo caption, not a case
study, undermining the page's stated purpose ("Sedm zakázek, na kterých je vidět
řemeslo").
*Recommendation:* Expand each to 100–150 words: problem → approach → material/
process detail → outcome.

**6. MEDIUM — Zero residential/consumer proof in the portfolio.** All 7 projects
are industrial/B2B (hasičská zbrojnice, gastro stoly, mlékárna CIP nádrže,
Nirosta kooperace, míchadla, ohřevné vany, sila bioplynové stanice). A private
customer searching for zábradlí/plot/schodiště repair — explicitly listed as
in-scope on /sluzby — finds no matching evidence anywhere in the portfolio.
*Recommendation:* Add 2–3 residential case studies (fence, railing, gate,
staircase) to /projekty.

**6. MEDIUM — /cenik satisfies only the kovovýroba/kooperace intent.** It has a
real number (550 Kč/hod) for that one intent, but no order-of-magnitude range
for typical consumer jobs (fence, gate, railing) — grill pricing itself is fine,
it lives on `/grilovaci-lorny` directly rather than on `/cenik`. At 74 words
/cenik is the thinnest page on the site and can't fully play the
"price-comparison" role its own URL promises for the trade-service intents.

**7. LOW — Project titles exist only as link text/image alt, not as H2/H3 on
/projekty**, layering a heading-hierarchy gap on top of the content-depth issue
in Finding 5.

## User Stories vs. Current Journey

- **Private customer (fence/railing repair, awareness→decision):** wants proof
  of similar residential work + a rough price range before calling, because
  contacting a stranger about a home repair feels risky; blocked by zero
  residential case studies (Finding 6) and no price range beyond an hourly rate
  (Finding 7). Journey home→/sluzby→/cenik→/kontakt technically completes (form
  works) but builds no persona-specific confidence en route.
- **B2B procurement/production manager (kooperace, consideration→decision):**
  wants evidence of comparable industrial work and reliability before risking
  their own client relationships; /projekty actually surfaces 2 relevant
  kooperace cases (Nirosta, míchadla) — good targeting — but hits the
  placeholder-dot detail pages (Finding 1) and an empty /reference (Finding 4)
  at the exact verification step. Best-matched persona, worst-served at trust.
- **Grill/lavička buyer (decision stage, price-sensitive):** wants clear
  per-size pricing before emailing — and gets it: the on-page price table on
  /grilovaci-lorny is real, complete, and one click from a pre-filled order
  email per size. This is the best-served persona-journey on the site.

## Limitations

No live SERP/PAA/AI-Overview pull was available in this session; SERP-consensus
page type and persona derivation are reasoned from known local-trade-query
patterns, not observed rankings. Full 7-dimension Gap Score breakdown and
persona 4-dimension scoring table were not completed within this pass —
recommend a follow-up pass if a granular per-persona scorecard is needed.
