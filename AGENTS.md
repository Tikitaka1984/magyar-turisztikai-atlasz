# AGENTS.md — fejlesztési irányelvek Codexhez

## Projektjellemzők

A Magyar Turisztikai Atlasz statikus HTML/CSS/JavaScript oktatási webalkalmazás. A repó gyökérben lévő fájlokat a böngésző közvetlenül tölti be; nincs fordítási lépés és nincs szerveroldali futtatókörnyezet.

## Technológiai korlátok

- Ne vezess be Reactet, Vue-t, Angulart vagy más JavaScript frameworköt külön kérés nélkül.
- Ne vezess be npm-et, csomagkezelőt, build rendszert, adatbázist vagy szerveroldali kódot külön kérés nélkül.
- Ne adj hozzá új függőséget, ha a feladat statikus HTML/CSS/JavaScript módosítással megoldható.

## PR-szabályok

- Egy PR csak egy jól körülhatárolt célt teljesítsen.
- Kerüld a nagy, több témát érintő átírásokat.
- Ne módosíts adatsémát, térképlogikát, képbetöltő logikát vagy kvízműködést, ha a feladat nem ezt kéri.

## Betöltési sorrend

A betöltési sorrend fontos, mert az alkalmazás globális adatokra és kvízkérdésekre épül:

1. Leaflet CDN
2. `adatok.js`
3. `kviz.js`
4. `alkalmazas.js`

## Kötelező ellenőrzés módosítás után

Minden módosítás után futtasd:

```bash
node --check adatok.js
node --check kviz.js
node --check alkalmazas.js
node tools/validate-data.js
```
