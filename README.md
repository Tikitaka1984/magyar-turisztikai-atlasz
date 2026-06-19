# Magyar Turisztikai Atlasz

Ingyenes, online tananyag a 13. évfolyamos turisztikai technikus tanulók
számára. Magyarország mind a 9 turisztikai régióját lefedi, összesen
157 nevezetességgel, interaktív térképpel és tankönyvi mélységű
leírásokkal.

Élő változat: https://tikitaka1984.github.io/magyar-turisztikai-atlasz/

## A projekt felépítése

A korábbi egyetlen nagy fájl helyett a tartalom, a megjelenítés és a
működés most külön fájlokba van rendezve. Ez megkönnyíti a karbantartást
és a bővítést.

```
magyar-turisztikai-atlasz/
├── index.html        A váz: ezt nyitja meg a böngésző. Rövid, áttekinthető.
├── stilusok.css      Megjelenítés: színek, betűk, elrendezés.
├── adatok.js         TARTALOM: a 9 régió és a 157 nevezetesség adatai.
├── alkalmazas.js     MŰKÖDÉS: térkép, kártyák, kereső, képbetöltő.
├── kepek/            A jövőbeli saját képtár helye (egyelőre üres).
├── README.md         Ez a leírás.
└── CLAUDE.md         Projektleírás a Claude Code fejlesztőeszköz számára.
```

## Hogyan tegyek hozzá egy új nevezetességet?

Csak az `adatok.js` fájlt kell bővíteni. Minden nevezetesség egy
bejegyzés a `LATV` listában, a meglévők mintájára (egyedi `id`, régió,
név, vármegye, kategóriák, koordináták, leírások, `kep` mező a Wikipédia
szócikkcímével).

## Hogyan publikálom?

Az egész mappa egyben publikálható GitHub Pages-re (a `main` ágról).
Nincs szükség semmilyen telepítésre vagy fordításra: ez egyszerű,
statikus oldal.

## Alapelvek

- **Ingyenesség (no-cost):** a kész alkalmazás nem használ fizetős
  szolgáltatást. A térkép az OpenStreetMap ingyenes szolgáltatása.
- **Egyszerűség:** statikus oldal, telepítés és fordítás nélkül.
- **Megbízható források:** a leírások turisztikai tankönyvek tényadataira
  épülnek, saját megfogalmazásban.

## Külső szolgáltatások

- **Leaflet + OpenStreetMap** — interaktív térkép (ingyenes).
- **Wikipédia API** — a nevezetességek képei (amíg a saját képtár el nem
  készül).
