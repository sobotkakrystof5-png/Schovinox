## Score

82/100

## What Works

- Homepage mobile above-the-fold is correct: H1 ("Řemeslo, které drží desetiletí."), subhead and **both** CTAs ("Nezávazná poptávka" + "Prohlédnout projekty") are fully visible without scrolling on a 375x812 viewport. Nav/hero are not oversized. (`home-mobile.png`)
- All imagery across homepage, `/sluzby`, `/grilovaci-lavice/grilovaci-lorny` and `/galerie` is real on-site/product photography, not stock or AI-generic placeholders — matches the brief's "no templated AI look" requirement. No broken images observed. (`sluzby-mobile.png`, `product-mobile.png`, `galerie-mobile.png`)
- Custom weld-bead-style red divider motif (wavy stitched line) recurs consistently as a section separator — a genuine bespoke visual signature rather than a generic UI element. (`home-mobile.png`, `kontakt-mobile.png`)
- Palette discipline holds on both breakpoints: red used only for CTAs/accents, off-white background, near-black text — no drift on mobile. (all screenshots)
- Contact form fields use correct input types in the DOM: `type="email"` for e-mail, `type="tel"` for phone — correct mobile keyboards will appear. Confirmed via rendered HTML, not just visually.
- `/kontakt` mobile leads with click-to-call: phone, e-mail, address, hours and a full-width "Zavolat" button all appear before the form — sensible for a craftsman audience that prefers calling. (`kontakt-mobile.png`)
- Hidden honeypot field (`id="website"`, `tabindex="-1"`) for spam protection is correctly invisible to real users — no visual footprint in any screenshot.
- No horizontal scroll or layout overlap observed on any of the 5 pages at either 1920x1080 (desktop) or 375x812 (mobile).

## Findings

**1. [Medium] Hamburger menu button is undersized for touch.**
The mobile nav toggle is `<button class="lg:hidden">` wrapping a bare 24x24px SVG with no padding classes — the tappable area is only ~24x24px, well under the 48x48px minimum recommended touch target.
Screenshot: `home-mobile.png`, `kontakt-mobile.png` (top-right icon).
Recommendation: add `p-3` (or similar) to the button itself so the tap target reaches ~44-48px while the icon stays visually small.

**2. [Medium] Contact form fields risk iOS auto-zoom.**
Name, e-mail, phone, message and the `select` on `/kontakt` all use Tailwind `text-sm` (14px). iOS Safari auto-zooms the viewport on focus for any input with font-size under 16px, causing a jarring zoom/pan when a user taps into the form.
Reference: confirmed in rendered HTML for `/kontakt` (`<input ... class="... text-sm ...">` on all fields).
Recommendation: bump field font-size to at least 16px on mobile, e.g. `text-base md:text-sm`.

**3. [Low] Lead form on /kontakt is not reachable without significant scrolling.**
The page headline promises "Poptejte zakázku bez závazků" but the first mobile viewport shows only contact info + a "Zavolat" button — the actual form fields (name/e-mail/message) require several more scrolls to reach. Likely intentional (call-first), but worth confirming with the client since the H1 sets an expectation of a form.
Screenshot: `kontakt-mobile.png`.
Recommendation: if the form should be a primary conversion path (not just a fallback to calling), add a short in-page anchor link near the hero (e.g. "Napsat zprávu ↓").

**4. [Low] No visible conversion CTA above the fold on mobile product/service pages.**
`/grilovaci-lavice/grilovaci-lorny` shows only a plain text link ("Přejít na ceník") in the first mobile viewport; `/sluzby` shows no CTA at all in the first screen. These are plausible landing pages from organic search.
Screenshots: `product-mobile.png`, `sluzby-mobile.png`.
Recommendation: consider a small persistent "Nezávazná poptávka" button (sticky footer bar or inline near the intro) on mobile for these two pages.

**5. [Info, no action needed] Consent checkbox is visually small (16x16px) but its `<label for="consent">` wraps the full sentence, giving a large effective tap target — not a real usability problem.**

## Notes on Coverage

Screenshots captured (desktop 1920x1080 + mobile 375x812) for: homepage, `/sluzby`, `/grilovaci-lavice/grilovaci-lorny`, `/kontakt`, `/galerie` — all 10 files present in `screenshots/`. Desktop renders were spot-checked (homepage in full, others via the same build/CSS) and show no layout breakage; the findings above are mobile-specific per the audit's focus.
