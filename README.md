# Magyar Turisztikai Atlasz

Ingyenes, online tananyag a 13. évfolyamos turisztikai technikus tanulók
számára. Magyarországot 9 régiós oktatási/tananyagszerkezeti
felosztásban mutatja be, összesen 157 nevezetességgel, interaktív térképpel
és tankönyvi mélységű leírásokkal.

A projekt GitHub Pages alatt futó, statikus HTML/CSS/JS alkalmazás. Nincs
szükség szerverre, adatbázisra, npm-re, build rendszerre vagy frameworkre:
a böngésző közvetlenül a repóban lévő fájlokat tölti be.

## A projekt felépítése

A jelenlegi projekt lapos fájlszerkezetű: minden működéshez szükséges fájl
a repó gyökerében található. Ez egyszerűvé teszi a GitHub Pages publikálást
és a kézi ellenőrzést.

```
magyar-turisztikai-atlasz/
├── index.html        A HTML-váz; betölti a CSS-t, a külső könyvtárakat és a JS-fájlokat.
├── stilusok.css      Minden megjelenési szabály: layout, kártyák, térkép, modális ablak, mobilnézet.
├── adatok.js         TARTALOM: a 9 régió és a 157 nevezetesség adatai.
├── kviz.js           TARTALOM: a statikus kvízkérdésbank régiónkénti kérdésekkel.
├── alkalmazas.js     MŰKÖDÉS: router, térkép, régióválasztás, szűrés, keresés, modális ablak, képbetöltő és kvízvezérlés.
├── .nojekyll         GitHub Pages jelzés: ne fusson Jekyll-feldolgozás.
├── README.md         Projektleírás és használati dokumentáció.
├── CLAUDE.md         Projektkontextus fejlesztőeszközök számára.
└── AGENTS.md         Fejlesztési irányelvek Codex és más ügynökök számára.
```

## Külső függőségek és szolgáltatások

Az alkalmazás statikus, de néhány böngészőből elért külső szolgáltatásra
támaszkodik:

- **Google Fonts** — a használt betűtípusok betöltése.
- **Leaflet CSS/JS CDN** — az interaktív térkép kliensoldali könyvtára.
- **OpenStreetMap térképcsempék** — a térképalap megjelenítése.
- **Wikipédia / Wikimedia / Commons képlehívás** — a látványosságok képeinek
  automatikus betöltése, ha nincs külön megadott saját kép.

## Hogyan működik a régióválasztás?

A projekt 9 régiós oktatási/tananyagszerkezeti felosztást használ. Ez a
tananyagban alkalmazott régiólogika nem azonos teljesen az aktuális, 11
turisztikai térséget használó MTÜ-logika egy az egyben való leképezésével.
A cél az, hogy a látványosságok a tanulók számára áttekinthető, tananyagszerű
régiós szerkezetben jelenjenek meg.

A főoldalon a 9 oktatási/turisztikai régió kártyaként és térképes jelölőként
jelenik meg. Egy régiókártyára vagy térképes régiójelölőre kattintva az
alkalmazás hash alapú útvonalra navigál, például:

```text
#/regio/budapest
```

A régióoldal az adott régióhoz tartozó látványosságokat listázza, és ugyanazt
a listát térképes markerekkel is megjeleníti.

### Mit jelent a `budapest` régióslug?

A `budapest` régióslug a projektben a „Budapest és Közép-Duna-vidék” régiót
jelenti. Nem kizárólag Budapest közigazgatási területére vonatkozik, ezért
Budapest környéki és dunakanyari kiemelt helyszínek is tartozhatnak ide.

Ilyen példák lehetnek többek között:

- Visegrád;
- Esztergom;
- Szentendre;
- Vác;
- Gödöllő;
- Zsámbék.

Ezek a települések nem Budapest városrészei. A besorolás oktatási/turisztikai
régiós logikát követ, nem pedig városrészi vagy kizárólag közigazgatási
logikát. Későbbi fejlesztésként elképzelhető a 9 oktatási régió és az aktuális
MTÜ-térségek párhuzamos jelölése, de a jelenlegi dokumentációs pontosítás nem
vezet be új adatmezőt.

## Hogyan működik a kategóriaszűrés?

A régióoldalon kategóriagombok segítik a látványosságok szűrését. A szűrés
mindig az aktuálisan megnyitott régión belül működik.

A kategóriák például:

- vár
- kastély
- múzeum
- vallási
- fürdő
- természet
- örökség
- egyéb

Az „Összes” szűrő visszaállítja a teljes régiós találati listát.

## Hogyan működik a keresés?

A régióoldali kereső az aktuális régió látványosságai között keres. A jelenlegi
keresés az alábbi mezőket veszi figyelembe:

- látványosság neve;
- település / helyszín mező;
- rövid leírás.

A keresés és a kategóriaszűrés együtt működik: ha egy kategória aktív, akkor
a kereső csak azon belül ad találatokat.

## Hogyan működik a `kep_sajat` mező?

A látványosságok képei alapértelmezés szerint a `kep` mező alapján, Wikipédia /
Wikimedia / Commons lekérdezéssel töltődnek be. Ha egy látványossághoz biztosan
meghatározott képet szeretnénk használni, az adott `LATV` elemhez megadható a
`kep_sajat` mező.

Példák:

```js
// Lokális fájl, ha később saját képtár kerül a projektbe:
kep_sajat: 'kepek/egri-var.jpg',

// Közvetlen kép-URL:
kep_sajat: 'https://example.com/kep.jpg',
```

Ha a `kep_sajat` létezik és nem üres, az alkalmazás ezt használja, és nem indít
Wikipédia / Commons képkeresést az adott látványossághoz. Ha a mező hiányzik
vagy üres, marad az automatikus képkeresés a `kep` mező alapján.

A képbetöltés jelenlegi prioritási sorrendje:

1. `kep_sajat`;
2. memóriabeli `_kepCache`;
3. `sessionStorage`;
4. `localStorage`;
5. magyar Wikipédia főkép;
6. angol Wikipédia főkép;
7. magyar Wikipédia képlista;
8. angol Wikipédia képlista;
9. Wikimedia Commons keresés.

A `kep_sajat` továbbra is elsőbbséget élvez minden automatikus képkereséssel
szemben. A feloldott automatikus kép-URL-eket az alkalmazás először memóriában,
majd a böngészőfül munkamenetéig `sessionStorage`-ban, legfeljebb 30 napig pedig
`localStorage`-ban is gyorsítótárazza. A `localStorage`-bejegyzés az URL-t és az
időbélyeget tartalmazza; lejárt vagy sérült bejegyzés esetén az alkalmazás törli
a hibás adatot. Ha a `localStorage`-ból visszaadott kép-URL már nem működik, az
alkalmazás érvényteleníti az adott memória-, `sessionStorage`- és
`localStorage`-bejegyzést, majd újraindítja a Wikipédia / Commons fallback-láncot.
Privát mód, tiltott storage vagy quota hiba
esetén az oldal nem áll le: a rövidebb cache-rétegekkel, vagy szükség esetén
cache nélkül működik tovább.

Fontos korlát:

- A Wikimedia / Commons találatok jelenleg nem képenként auditált
  licencadatokkal jelennek meg, ezért publikálás előtt külön licenc- és
  forrásellenőrzés javasolt.

## Hogyan lehet új nevezetességet felvenni?

Új nevezetességet az `adatok.js` fájlban, a `LATV` tömbben kell felvenni. A
projekt jelenlegi működése szerint a tartalmi adatok bővítése kizárólag ebben
a fájlban történik.

Egy új bejegyzésnél figyelni kell az alábbiakra:

1. **Egyedi `id`:** ne ütközzön meglévő látványosság azonosítójával.
2. **Létező régióslug (`r`):** az érték egyezzen meg valamelyik `REGIOK` elem
   `slug` mezőjével.
3. **Alapadatok:** `nev`, `megye`, `tp`, `kat`, `koord`, `rovid`, `reszletes`.
4. **Kategóriák:** a `kat` tömb csak az alkalmazásban ismert kategóriákat
   használja.
5. **Koordináták:** a `koord` objektum tartalmazzon `lat` és `lng` számértéket.
6. **Kép:** a `kep` mező Wikipédia-szócikkcímként működik; opcionálisan
   megadható `kep_sajat` is.
7. **Forrás:** a `forras` tömbben legyen feltüntetve, mire épül a leírás.

## Hogyan működik a kvíz?

A kvíz régiónkénti statikus kérdésbankból dolgozik, amelyet a `kviz.js` tartalmaz.
Minden indításkor megkeveri az adott régió kérdéseinek sorrendjét, és minden
kérdésnél külön megkeveri a válaszlehetőségek sorrendjét is. A helyes válasz
indexe a keverés után újraszámolódik, ezért a visszajelzés továbbra is a helyes
válaszhoz kapcsolódik, miközben az eredeti `kviz.js` kérdésbank nem módosul.

A kvíz jelenleg nem ment eredményt és nem használ időmérőt. Válaszadás után
helyes/hibás visszajelzést és rövid magyarázatot jelenít meg; hibás válasz
esetén külön megmutatja a helyes választ is.


## Automatikus ellenőrzések

A repóhoz GitHub Actions ellenőrző workflow tartozik, amely minden pull requestnél
és a `main` ágra történő push esetén fut. A workflow Node.js 20 környezetben
ellenőrzi a JavaScript-fájlok szintaxisát, majd lefuttatja az adatvalidáló scriptet.

A projekt továbbra is statikus HTML/CSS/JavaScript alkalmazás: az automatikus
ellenőrzés nem használ `npm install` parancsot, npm-függőségeket vagy build lépést.

## Adatvalidáció

A tartalmi adatok ellenőrzésére függőségmentes Node.js validáló script használható.

Futtatás:

```bash
node tools/validate-data.js
```

A script ellenőrzi:

- régiók;
- látványosságok;
- kategóriák;
- koordináták;
- kvízkérdések;
- kvíz-hivatkozások.

## Hogyan publikálom GitHub Pages alatt?

A repó gyökere közvetlenül publikálható GitHub Pages alatt. Mivel az alkalmazás
relatív fájlhivatkozásokat és hash alapú útvonalakat használ, nincs szükség
külön szerveroldali átirányításra.

Általános lépések:

1. A módosítások commitolása és feltöltése a GitHub repóba.
2. GitHubon a **Settings → Pages** menüpont megnyitása.
3. Publikálási forrásként a megfelelő branch és a repó gyökere kiválasztása.
4. Az éles URL ellenőrzése asztali és mobil böngészőben.

## Alapelvek

- **Ingyenesség (no-cost):** a kész alkalmazás nem használ fizetős szolgáltatást.
- **Egyszerűség:** statikus oldal, telepítés és fordítás nélkül.
- **GitHub Pages kompatibilitás:** relatív fájlhivatkozások, `.nojekyll`, hash
  alapú navigáció.
- **Megbízható források:** a leírások turisztikai tankönyvek tényadataira
  épülnek, saját megfogalmazásban.
- **Tartalom és működés szétválasztása:** a tartalom az `adatok.js`, a működés
  az `alkalmazas.js`, a megjelenés a `stilusok.css` feladata.
