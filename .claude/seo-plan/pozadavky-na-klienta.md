# Podklady potřebné od klienta (pan Schovánek)

Tenhle soubor je čistě intake dokument — seznam faktů a rozhodnutí, které nejde nahradit domněnkou (viz CLAUDE.md: "Nedeláme si fakta o zakázkách sami"). Jakmile odpovědi dorazí, zapíšou se do kódu a body v `01-kriticke-a-rychle.md` / `02-obsah-a-duveryhodnost.md` / `03-technicke-a-schema.md` se odškrtnou.

Dá se poslat klientovi rovnou (např. jako e-mail nebo body k probrání telefonicky), nebo doplnit body, které už uživatel sám zná.

---

## A. Data ke 7 realizacím [→ body 1.2 + 2.4]

Pro každou zakázku prosím: **materiál** (přesné označení, např. "nerez 1.4301, plech 3 mm"), **lokalita** (město/obec, ne adresa zákazníka), **rok realizace**, a pokud možno **1–2 věty navíc**: co zákazník potřeboval, jaký problém to řešilo, proč zvolený materiál/postup. Pokud existují další fotky ze zakázky (rozpracované, detail, hotový výsledek) — i ty se hodí, aktuálně má každá stránka jen jednu fotku.

1. **Mycí stůl pro hasičskou zbrojnici** — materiál / lokalita / rok / doplňující kontext?
2. **Stoly do gastro zařízení** — materiál / lokalita / rok / doplňující kontext?
3. **CIP nádrže pro mlékárnu** — materiál / lokalita / rok / doplňující kontext?
4. **Kooperace pro firmu Nirosta: svařování nádrží** — materiál / lokalita / rok / doplňující kontext?
5. **Kooperace na výrobě míchadel** — materiál / lokalita / rok / doplňující kontext?
6. **Ohřevné vany se zásobníkem na vodu** — materiál / lokalita / rok / doplňující kontext?
7. **Průlezy sila bioplynové stanice** — materiál / lokalita / rok / doplňující kontext?

Pokud pro některou zakázku fakt reálně není k dispozici (např. přesný rok si nepamatuje) → řekněte to rovnou, ten řádek se pak z stránky odstraní úplně, ne že zůstanou tečky.

**Bonus otázka:** existují i realizace pro **soukromé zákazníky** (zábradlí, plot, brána, schodiště)? Aktuálně je všech 7 ukázek průmyslových/B2B, přitom `/sluzby` soukromé zakázky nabízí a v portfoliu pro ně není žádný důkaz. Pokud ano, 2–3 takové by šlo přidat.

---

## B. Reference / testimonials [→ bod 2.1]

- Kontakt (jméno + telefon/e-mail) na 5–8 předchozích zákazníků, u kterých dává smysl požádat o krátký posudek + svolení k publikaci. Ideálně mix soukromých a B2B zákazníků, pokud možno i někdo, kdo si nechal udělat grilovací Lornu.
- Kdo osloví zákazníky — klient sám, nebo má poslat uživatel/agentura?

---

## C. Google Business Profile [→ bod 2.2]

- Existuje už Google Business Profile pro Schovinox? Pokud ano — přístup/vlastnictví účtu?
- Pokud ne — kdo ho založí (potřebuje ověření adresou/telefonem, může trvat pár dní)?
- Otevírací doba a telefon pro GBP — shoduje se s webem (Po–Pá 7:00–18:00, 734 859 363), nebo je to jinak?
- Facebook: existuje ochota založit/propojit oficiální **stránku** firmy (ne skupinu, kterou má web teď)?

---

## D. Obsah `/sluzby` — kovovýroba a kooperace [→ bod 2.3]

- Jak typicky vypadá proces zakázky od poptávky po předání (kroky)?
- S jakými materiály se běžně pracuje (druhy nerezu/oceli, tloušťky)?
- Orientační doba realizace — zvlášť pro zakázkovou kovovýrobu a zvlášť pro kooperaci?
- Existuje minimální rozsah zakázky, kterou má smysl poptávat (nebo bere cokoliv)?

**Rozhodnutí, které se netýká klienta, ale potřebuje potvrdit uživatel před implementací** (dopad na strukturu webu): rozšířit obsah přímo na `/sluzby`, nebo vytvořit samostatné podstránky `/sluzby/zakazkova-kovovyroba` a `/sluzby/kooperace`? Viz otázka v chatu.

---

## E. FAQ obsah [→ bod 3.3]

5–8 nejčastějších dotazů, které zákazníci reálně pokládají, s odpovědí. Návrh na doplnění/upřesnění:

- Dělá Schovinox i drobné zámečnické opravy, nebo jen větší zakázky?
- Jak dlouho trvá výroba zábradlí / grilovací Lorny na míru?
- Jaká je hodinová sazba a od čeho se odvíjí cena zakázky?
- **Jak daleko od Kněžic firma jezdí?** (potřeba i pro `areaServed` ve schema a pro lokální SEO obecně — jedna odpověď, dvě použití)
- Pracujete i s materiálem dodaným zákazníkem?
- Jaká je záruka na provedenou práci?

Klient může tyhle doplnit, poopravit nebo nahradit jinými, které slyší častěji.

---

## F. Certifikace / kvalifikace / pojištění [→ bod 3.6]

- Existuje svářečský certifikát (např. ČSN EN ISO 9606) nebo jiná formální kvalifikace?
- Je firma pojištěná (odpovědnost za škodu)?
- Pokud ano k oběma — doplní se na `/o-nas` nebo `/sluzby`. Pokud ne, nic se nemění — jen se nebude nikde tvrdit potravinářský/farma standard bez podložení.

---

## Stav

- [x] Odesláno klientovi — datum: 6. 9. 2026
- [x] Odpovědi přijaty — datum: 7. 9. 2026 (body A, D, E, F kompletní; B — reference a C — GBP zatím bez odpovědi)
- [x] Zapracováno do kódu — 7. 9. 2026: body A (realizace), D (proces na `/sluzby`), E (FAQ), F (kvalifikace) zapsané. B (reference) a C (GBP) čekají na doplnění od klienta, viz `.claude/seo-plan/02-obsah-a-duveryhodnost.md` body 2.1 a 2.2.
