# Magyar Turisztikai Atlasz

Ingyenes, online tananyag a 13. évfolyamos turisztikai technikus tanulók
számára. Magyarország mind a 9 turisztikai régióját lefedi, összesen
157 nevezetességgel, interaktív térképpel és tankönyvi mélységű
leírásokkal.

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
├── alkalmazas.js     MŰKÖDÉS: router, térkép, régióválasztás, szűrés, keresés, modális ablak, képbetöltő.
├── .nojekyll         GitHub Pages jelzés: ne fusson Jekyll-feldolgozás.
├── README.md         Projektleírás és használati dokumentáció.
└── CLAUDE.md         Projektkontextus fejlesztőeszközök számára.
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

A főoldalon a 9 turisztikai régió kártyaként és térképes jelölőként jelenik
meg. Egy régiókártyára vagy térképes régiójelölőre kattintva az alkalmazás
hash alapú útvonalra navigál, például:

```text
#/regio/budapest
```

A régióoldal az adott régióhoz tartozó látványosságokat listázza, és ugyanazt
a listát térképes markerekkel is megjeleníti.

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

Fontos korlátok:

- A `kep_sajat` továbbra is elsőbbséget élvez minden automatikus
  Wikipédia / Wikimedia / Commons találattal szemben.
- Az automatikusan lekért képek URL-jeit az alkalmazás csak futás közben,
  memóriában cache-eli; nincs `localStorage`-os vagy más tartós képcache.
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
