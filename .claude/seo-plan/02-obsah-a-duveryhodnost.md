# 2. Obsah a důvěryhodnost (2–4 týdny)

Cíl fáze: doplnit důkazy, které na webu chybí. Tohle je fáze, kde se rozhoduje, jestli návštěvník/Google/AI systém webu věří — technika sama o sobě důvěru nezíská.

---

## 2.1 Získat a publikovat reálné reference [OBSAH — klient]

`/reference` aktuálně nemá jediný skutečný posudek — jen výzvu, ať zákazníci nějaký pošlou. Homepage přitom tvrdí *"100 % spokojených zákazníků"* bez jakéhokoli důkazu. Poctivý rámec stránky (*"Reference píšou zákazníci. Ne my."*) je dobrý diferenciátor, ale dokud tam nic není, nefunguje.

- [ ] Klient osloví 5–8 předchozích zákazníků (mix: soukromí + B2B, pokud možno i grilovací lavice) o krátký posudek + svolení k publikaci
- [ ] Publikovat na `/reference` (jméno, typ zakázky, případně foto)
- [ ] Zvážit zmírnění/odstranění "100 % spokojených zákazníků" na homepage, dokud reference nejsou live, nebo jakmile jsou live, provázat je s tímhle tvrzením
- [ ] Až budou reálné recenze k dispozici, přidat `Review`/`AggregateRating` schema (viz `03-technicke-a-schema.md`) — **ne dřív, fingovat hodnocení nejde** (viz `lib/testimonials.ts`, kód už tohle pravidlo respektuje)

---

## 2.2 Google Business Profile [OBSAH/ADMIN — klient, největší jednotlivá páka pro lokální SEO]

Aktuálně na webu není žádný odkaz na Google Business Profile, mapa na `/kontakt` je obecný dotaz na adresu (ne ověřený Place embed), a jediný externí profil je Facebook **skupina** (ne firemní stránka) — skupiny nemají recenze, otevírací dobu ani propojení na mapové výsledky.

- [ ] Ověřit/založit Google Business Profile (Kněžice 88, telefon, hodiny — shoda s NAP na webu)
- [ ] Nastavit systém žádosti o recenzi po dokončené zakázce (SMS/e-mail odkaz)
- [ ] Nahradit obecný Maps iframe na `/kontakt` ověřeným Place embedem [KÓD, po založení GBP]
- [ ] Přidat GBP URL do `sameAs` v LocalBusiness schema (`app/layout.tsx`) [KÓD, po založení GBP]
- [ ] Založit/propojit oficiální Facebook **stránku** (ne skupinu) jako doplněk nebo náhradu current group linku

**Proč tohle stojí nahoře v prioritě:** Local SEO skóre z auditu je 37/100 — nejslabší kategorie ze všech. Tohle je jediná položka v celém plánu, co ho zvedne nejvíc, a je to čistě administrativní/business úkol, ne kód.

---

## 2.3 Rozšířit /sluzby — hlavní byznys má nejtenčí obsah na webu [OBSAH — klient, pak KÓD]

`/sluzby` má 136 slov na tři obory (kovovýroba, kooperace, grilování) — méně, než mají jednotlivé grilovací produktové stránky (300–450 slov každá). Přitom právě kovovýroba a kooperace jsou obory, které dokládají jmenovaní klienti na `/o-nas` (KFC servis, Nirosta, mlékárny, farmaceutický průmysl). CTA "Zjistit více" u obou hlavních služeb vede rovnou na kontaktní formulář, nikde není hloubkový obsah.

- [x] S klientem probrat: typický proces zakázky, materiály se kterými pracuje, orientační doba realizace pro kovovýrobu a pro kooperaci — 7. 9. 2026: odpovědi přijaty (proces zakázky, žádný minimální rozsah, termíny se drží, materiál od zákazníka za podmínek vhodnosti).
- [x] Rozhodnout: rozšířit `/sluzby` samotnou, nebo vytvořit samostatné podstránky — **potvrzeno uživatelem 6. 9. 2026: rozšíří se přímo `/sluzby`, žádné nové podstránky.**
- [x] Napsat obsah se stejnou úrovní konkrétnosti jako grilovací stránky (materiály, tloušťky, technologie, ne obecné fráze) — 7. 9. 2026: rozšířeny texty u obou hlavních služeb + nová sekce „Jak probíhá zakázka" (4 kroky) na `/sluzby`.
- [ ] Propojit 2–3 relevantní realizace z `/projekty` přímo do textu jako doklad — zatím neuděláno, zvážit v další úpravě `/sluzby`.

---

## 2.4 Rozšířit případové studie na /projekty [OBSAH — klient, navazuje na 1.2]

I po opravě placeholder bugu (viz `01-kriticke-a-rychle.md` bod 1.2) mají stránky jen 15–56 slov textu na zakázku — jedna věta, jedna fotka, opakovaná šablona. Pro řemeslnou firmu, jejíž hlavní argument je "podívejte se na skutečnou práci", je tohle promarněná příležitost.

- [x] Pro každou ze 7 zakázek doplnit text: co zákazník potřeboval → jak se to řešilo → jaký materiál/postup a proč → výsledek — 7. 9. 2026: hotovo v `lib/projects.ts`, reálný text ~55–100 slov na zakázku (méně než cílových 100–150 slov jen tam, kde klient sám dodal míň detailu — nedoplňováno smyšlenými fakty).
- [ ] Pokud existují další fotky ze zakázky (v procesu, detail, hotový výsledek) — přidat 3–5 fotek místo jedné — klient vyzván, fotky zatím nedorazily.
- [ ] Zvážit doplnění 2–3 realizací pro soukromé zákazníky (zábradlí, plot, brána, schodiště) — **odpověď klienta 7. 9. 2026: ploty/brány/zábradlí standardně nedělá, špatná zkušenost.** Uživatel zatím rozhodl bonusovou otázku (rozšíření o soukromé realizace) nechat otevřenou — nerozhodovat bez dalšího pokynu.

**Poznámka:** body 1.2 a 2.4 se týkají stejných souborů/stránek — dává smysl je řešit v jedné session/edaci, ne odděleně.

---

## Definice hotovo pro tuhle fázi

Reálné reference publikované na `/reference`, GBP založený/ověřený a propojený, `/sluzby` má reálný hloubkový obsah pro kovovýrobu i kooperaci, všech 7 případových studií má 100+ slov a odpovídá realitě.
