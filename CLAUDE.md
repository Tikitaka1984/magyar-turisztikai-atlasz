# CLAUDE.md — Projektkontextus a Claude Code számára

Ez a fájl a Claude Code fejlesztőeszköznek szól: összefoglalja a projekt
céljait, felépítését és szabályait, hogy a fejlesztés gyors és
következetes legyen. (Magyar munkanyelv, formális hangnem.)

## Mi ez a projekt?

A "Magyar Turisztikai Atlasz" egy ingyenes, statikus webes tananyag a
13. évfolyamos turisztikai technikus képzéshez. Magyarország 9 turisztikai
régióját és 157 nevezetességét mutatja be interaktív térképen, kereshető
kártyákkal és részletes adatlapokkal.

Élő változat: https://rakoczi-turisztikai-atlasz.netlify.app

## Architektúra

MEGJEGYZÉS: jelenleg LAPOS szerkezet (minden fájl a gyökérben),
a böngészős feltöltés egyszerűsége miatt. A Claude Code később
rendezett mappákba (css/, js/) szervezheti, ha szükséges.

Statikus, fordítás nélküli weboldal. NINCS build-lépés, NINCS csomagkezelő,
NINCS szerveroldali kód. A böngésző közvetlenül a fájlokat tölti be.

- `index.html` — a váz; betölti a CSS-t és a két JS-fájlt (sorrend számít).
- `stilusok.css` — minden stílus.
- `adatok.js` — TARTALOM: a `REGIOK` (9 régió) és a `LATV` (157 nevezetesség)
  tömbök. Tartalmi bővítés KIZÁRÓLAG itt történik.
- `alkalmazas.js` — MŰKÖDÉS: router, térkép (Leaflet), kártyák, kereső/szűrő,
  modális ablak, ötszintű képbetöltő. Az `adatok.js` után töltődik be.
- `kepek/` — a jövőbeli saját képtár helye (egyelőre üres).

## Betöltési sorrend (fontos)

1. Leaflet (CDN) → 2. `adatok.js` → 3. `alkalmazas.js`
Az `app.js` a `REGIOK` és `LATV` globális tömbökre épül, ezért az
`adatok.js`-nek előbb kell betöltődnie.

## Adatséma — egy nevezetesség (LATV elem)

```
{id, r (régió slug), nev, megye, tp (település), kat (kategóriatömb),
 kep (Wikipédia-szócikkcím), koord:{lat,lng}, rovid, reszletes,
 info:{nyitvatartas?, megkozelites}, forras:[...]}
```

## Képbetöltés

A `kep` mező jelenleg egy Wikipédia-SZÓCIKKCÍM (nem fájlnév, nem URL).
Az `alkalmazas.js` ötszintű kereséssel tölti be a képet:
1. magyar Wiki főkép (pageimages) → 2. angol Wiki főkép →
3. magyar Wiki bármely valódi fotója → 4. angol Wiki bármely fotója →
5. Wikimedia Commons közvetlen képkeresés.
A `_kizart` reguláris kifejezés kiszűri a térképeket, címereket, ikonokat.

### Saját kép megadása egy helyszínhez (`kep_sajat`)

Ha egy helyszínhez jobb képet szeretnél megadni az automata helyett,
add hozzá a `kep_sajat` mezőt az adott LATV-objektumhoz az `adatok.js`-ben.
A mező kétféle értéket fogad el:

```js
// Lokális fájl a kepek/ mappából:
kep_sajat: 'kepek/egri-var.jpg',

// Közvetlen kép-URL (http/https):
kep_sajat: 'https://example.com/kep.jpg',
```

Ha `kep_sajat` meg van adva és nem üres, az alkalmazás azt jeleníti meg
(és a Wikipédia-keresést kihagyja). Ha üres string vagy hiányzik, az automata
marad érvényes — semmi sem törik.

A 2. fázisban a saját képtár bevezetésekor a `kep` mező lokális fájlra
fog mutatni (pl. `kepek/egri-var.jpg`), és a betöltő ezt fogja előnyben
részesíteni, a Wikipédia csak tartalék marad.

## Fejlesztési alapelvek (KÖTELEZŐ betartani)

1. **No-cost:** a kész app nem hívhat fizetős API-t, nem futtathat AI-t.
   Csak ingyenes szolgáltatás (OpenStreetMap, Wikipédia) engedélyezett.
2. **Statikus marad:** ne vezess be build-lépést vagy szerveroldali
   függőséget, hacsak nincs kifejezett kérés rá.
3. **Tartalom ≠ működés:** a nevezetességek adatai az `adatok.js`-ben,
   a logika az `app.js`-ben marad.
4. **Idézőjelek:** a magyar nyitó idézőjel (U+201E) és az egyenes idézőjel
   keveredése korábban törte a JS-stringeket. Kódban következetesen
   egyenes idézőjelet kell használni.
5. **Ellenőrzés:** módosítás után a JS szintaxist ellenőrizni kell
   (`node --check`), publikálás előtt.
6. **Források:** a leírások tankönyvi tényadatokra épülnek, saját
   megfogalmazásban; ne legyen szó szerinti átvétel.

## Tervezett fejlesztési fázisok

- 1. fázis: rendezett szerkezet (KÉSZ — ez a mostani állapot).
- 2. fázis: saját képtár (kepek/ feltöltése, betöltő átállítása).
- 3. fázis: offline működés (PWA — telepíthető, offline képek).
- 4. fázis: diák kvíz-/gyakorlómodul.
- 5. fázis: folyamatos bővítés (új helyszínek, PDF-export).

## Publikálás

Az egész mappa egyben tölthető fel Netlify-ra. A cél a publikálás
automatizálása (Git-alapú, hogy egy módosítás magától élesedjen).
