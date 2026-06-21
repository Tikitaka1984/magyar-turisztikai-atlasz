# QA-CHECKLIST — Magyar Turisztikai Atlasz

Ez az ellenőrzőlista a GitHub Pages alatt futó statikus HTML/CSS/JS alkalmazás
kézi átvizsgálásához készült. A lista célja, hogy publikálás előtt gyorsan
ellenőrizhető legyen: nem sérült-e a régióválasztás, a keresés, a szűrés, a
térkép, a modális ablak vagy a képrendszer.

## GitHub Pages ellenőrzés

- [ ] Az oldal GitHub Pages URL-en megnyílik.
- [ ] Nem jelenik meg 404-es hiba a főoldalon.
- [ ] A `#/` hash útvonal betölti a főoldalt.
- [ ] Egy régió URL-je, például `#/regio/budapest`, közvetlen megnyitás után is működik.
- [ ] A böngésző konzoljában nincs kritikus JavaScript-hiba.
- [ ] A `stilusok.css`, `adatok.js` és `alkalmazas.js` fájlok sikeresen betöltődnek.

## Desktop böngészős teszt

- [ ] A főoldal asztali nézetben rendezett és olvasható.
- [ ] A navigációs sáv látható és használható.
- [ ] A főoldali térkép megjelenik.
- [ ] A régiókártyák háromoszlopos elrendezése megfelelő széles képernyőn.
- [ ] A régióoldalon a kártyalista és a térkép egymás mellett jelenik meg.
- [ ] A modális ablak nem lóg ki a képernyőből.

## Mobiltelefonos teszt

- [ ] A főoldal mobilon vízszintes görgetés nélkül használható.
- [ ] A régiókártyák egy oszlopba rendeződnek kis képernyőn.
- [ ] A régióoldalon a lista és a térkép egymás alá kerül.
- [ ] A keresőmező mobilon is jól használható.
- [ ] A kategóriaszűrők nem takarják ki a tartalmat.
- [ ] A modális ablak mobilon görgethető és bezárható.

## Régióválasztás ellenőrzése

- [ ] A főoldalon mind a 9 régió megjelenik.
- [ ] Minden régiókártya kattintható.
- [ ] Régiókártyára kattintva a megfelelő `#/regio/...` útvonal nyílik meg.
- [ ] A főoldali térképen a régiójelölők megjelennek.
- [ ] Régiójelölőre kattintva megjelenik a popup.
- [ ] A popupból elérhető a megfelelő régióoldal.

## Kategóriaszűrő ellenőrzése

- [ ] A régióoldalon megjelenik az „Összes” szűrő.
- [ ] A kategóriagombok megjelennek és kattinthatók.
- [ ] Egy kategória kiválasztása után csak a hozzá tartozó kártyák maradnak láthatók.
- [ ] A találatszám frissül kategóriaszűrés után.
- [ ] Az „Összes” visszaállítja a teljes régiós listát.
- [ ] A térképes markerek a szűrt listához igazodnak.

## Kereső ellenőrzése

- [ ] A keresőmezőbe írva a találati lista azonnal frissül.
- [ ] A kereső találatot ad látványosságnévre.
- [ ] A kereső találatot ad településnévre / helyszínre.
- [ ] A kereső találatot ad rövid leírásban szereplő szövegre.
- [ ] Nincs találat esetén megjelenik az üres állapot.
- [ ] A keresés és a kategóriaszűrés együtt működik.

## Térkép és markerek ellenőrzése

- [ ] A főoldali térkép betöltődik.
- [ ] A régióoldali térkép betöltődik.
- [ ] A térképcsempék megjelennek.
- [ ] A markerek a megfelelő régió / szűrt lista alapján jelennek meg.
- [ ] Kártyára kattintva a térkép az adott látványosságra navigál.
- [ ] Markerre kattintva megnyílik az adott látványosság modális ablaka.
- [ ] Ha a Leaflet nem tölt be, az oldal érthető hibaüzenetet mutat.

## Modális ablak ellenőrzése

- [ ] Látványosságkártyára kattintva megnyílik a modális ablak.
- [ ] A modális ablakban látható a cím, kategória, helyszín, leírás és forrás.
- [ ] Ha van nyitvatartás vagy megközelítés adat, megjelenik az információs blokk.
- [ ] Az X gomb bezárja a modális ablakot.
- [ ] Az overlayre kattintás bezárja a modális ablakot.
- [ ] Az Escape billentyű bezárja a modális ablakot.
- [ ] Bezárás után az oldal újra görgethető.

## Képek és kep_sajat mező ellenőrzése

- [ ] A kártyákon megjelenik kép vagy kategóriaikonos fallback.
- [ ] A modális ablakban megjelenik kép vagy kategóriaikonos fallback.
- [ ] A Wikipédia / Wikimedia / Commons alapú képlehívás nem okoz JavaScript-hibát.
- [ ] Ha egy látványosságnál van nem üres `kep_sajat`, az jelenik meg az automatikus képkeresés helyett.
- [ ] Üres vagy hiányzó `kep_sajat` esetén a `kep` mező alapján működik az automatikus képkeresés.
- [ ] Lassú vagy sikertelen képlehívás esetén az oldal többi része tovább használható.

## Akadálymentességi alapellenőrzés

- [ ] A fő tartalom billentyűzettel is bejárható.
- [ ] A látható fókuszállapotok ellenőrizhetők a fontos interaktív elemeken.
- [ ] A modális ablak Escape billentyűvel bezárható.
- [ ] A szövegkontraszt alapvetően olvasható világos és sötét felületeken.
- [ ] A gombok és keresőmező mobilon is elég nagy érintési célfelületet adnak.
- [ ] Képernyőolvasós ellenőrzésnél a fő tartalom és a navigáció értelmezhető.

## Publikálás előtti végső lista

- [ ] Csak a tervezett fájlok módosultak.
- [ ] Nem módosult az alkalmazáskód, ha a változás csak dokumentációs célú.
- [ ] Nem módosult a 157 látványosság tartalmi adata.
- [ ] Nem került be npm, build rendszer, framework, adatbázis vagy szerver.
- [ ] A README a tényleges fájlszerkezetet írja le.
- [ ] A QA-CHECKLIST alapján a fő funkciók kézzel ellenőrizhetők.
- [ ] A Git státusz áttekintése megtörtént commit előtt.
