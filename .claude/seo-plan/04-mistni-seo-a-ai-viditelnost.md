# 4. Lokální SEO + viditelnost v AI vyhledávání (GEO)

Cíl fáze: Local SEO skóre z auditu (37/100) a GEO/AI skóre (47/100) jsou nejslabší dvě kategorie. Google Business Profile (`02-obsah-a-duveryhodnost.md` bod 2.2) a FAQ/schema (`03-technicke-a-schema.md` body 3.3–3.4) už řeší velkou část — tenhle soubor pokrývá zbytek.

---

## 4.1 Vyjádřit oblast působení současným časem [OBSAH — klient, pak KÓD]

Na celém webu není nikde věta v současném čase o tom, jaké okolí/region Schovinox reálně obsluhuje. Jediná zmínka regionu je historická anekdota na `/o-nas` o zakázkách dědečka "po celé republice" — to není totéž jako aktuální nabídka. Kněžice samotné je malá obec se zanedbatelným samostatným objemem vyhledávání, takže bez pojmenování okolních měst/regionu web nepokrývá reálné dotazy typu "zámečník [okolní město]".

- [ ] S klientem ujasnit: jak daleko reálně jezdí za zakázkami (okres, kraj, konkrétní okolní města?)
- [ ] Doplnit jednu jasnou větu o oblasti působení na `/kontakt` nebo `/sluzby`
- [ ] Použít stejnou informaci pro `areaServed` v schema (`03-technicke-a-schema.md` bod 3.4) a pro FAQ otázku "Jezdíte i mimo Kněžice?" (bod 3.3)

---

## 4.2 CZ lokální citace (adresáře) [ADMIN — klient nebo agentura, ne kód]

Tier-0 nástroje v auditu nemohly ověřit přítomnost v žádném adresáři — americký seznam (Yelp/BBB) stejně není pro CZ firmu relevantní. Pro lokální SEO v Česku mají větší váhu jiné zdroje.

- [ ] Založit/ověřit záznam na Firmy.cz s NAP přesně shodným s webem (název, adresa, telefon)
- [ ] Založit/ověřit záznam na Mapy.cz (Seznam) business listing
- [ ] Zvážit Zlaté stránky, obor.cz a podobné obor-specifické katalogy
- [ ] NAP musí být byte-for-byte shodné se stavem na webu (`Schovinox`, `734 859 363`, `Kněžice 88, 289 02`) — audit potvrdil, že tohle je na webu самotném už teď bezchybné, jde jen o to samé zopakovat vně webu

---

## 4.3 llms.txt [KÓD]

`/llms.txt` momentálně vrací 404. Nízká náročnost, statický soubor.

- [ ] Vytvořit `public/llms.txt` (nebo `app/llms.txt/route.ts` pro dynamické generování) s přehledem hlavních 8 sekcí webu a jednořádkovým popisem každé (služby, produktová řada, ceník, lokalita, kontakt)

---

## 4.4 Freshness signály [KÓD, nízká priorita]

Žádná stránka nemá `dateModified`/`datePublished` v schema ani viditelné "aktualizováno" v textu. Není urgentní pro převážně statický web, ale levné doplnit.

- [ ] Přidat `dateModified` do `HomeAndConstructionBusiness` schema v `app/layout.tsx`
- [ ] Aktualizovat ručně při reálných obsahových změnách (ne automaticky při každém deployi — falešná aktuálnost je horší než žádná, viz poznámka u sitemapy v `05-prubezne-a-monitoring.md`)

---

## 4.5 Nadpisová hierarchie na /o-nas [KÓD, kosmetické]

`/o-nas` přeskakuje z H1 rovnou na H3 pro sekce časové osy, bez H2. Drobná nekonzistence oproti zbytku webu.

- [ ] Doplnit H2 nad sekce časové osy, které jsou teď H3

---

## 4.6 Přítomnost mimo vlastní web [INFORMATIVNÍ — realistické pro sólo řemeslníka, nízká priorita]

Audit nenašel žádnou externí zmínku (Wikipedia, YouTube, Reddit, LinkedIn) — automatizované ověření navíc blokoval CAPTCHA, takže jde jen o on-site signály, stojí za ruční dokontrolu. Pro sólo řemeslnou firmu je tohle realisticky nízká priorita ve srovnání s Google Business Profile (bod 2.2), ale pokud se najde čas:

- [ ] Zvážit krátké video z dílny na YouTube (nejsilnější dokumentovaný korelát s AI citací dle auditu, ~0.74) — realizace, ne priorita teď
- [ ] Bez akce, pokud čas/rozpočet nejsou — nejde o kritický bod

---

## Definice hotovo pro tuhle fázi

Web má jasnou, aktuální větu o oblasti působení, firma je založená/ověřená na Firmy.cz a Mapy.cz se shodným NAP, `llms.txt` existuje a vrací smysluplný obsah.
