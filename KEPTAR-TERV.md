# KÉPTÁR-TERV — átállás a saját képtárra (2. fázis előkészítése)

Ez a dokumentum **terv és elemzés**, nem kódmódosítás. A működő tartalmat
(`adatok.js`) NEM változtatja meg. A benne javasolt lépéseket külön, tudatos
döntés után kell végrehajtani.

Kapcsolódó elv (CLAUDE.md): a `kep` mező jelenleg Wikipédia-SZÓCIKKCÍM; a 2.
fázisban lokális fájlra (pl. `kepek/egri-var.jpg`) fog mutatni, a Wikipédia
csak tartalék marad.

---

## 1. Jelenlegi állapot számokban

- **Összesen: 157 látványosság, 9 régióban.** Mindegyik rekordnak van `kep`
  mezője (hiányzó: 0), és egyik sem hivatkozik ismeretlen régióra.

| Régió | Darab |
|---|---:|
| Budapest–Közép-Duna-vidék | 28 |
| Észak-Magyarország | 21 |
| Dél-Dunántúl | 20 |
| Dél-Alföld | 18 |
| Észak-Alföld | 16 |
| Közép-Dunántúl | 16 |
| Balaton | 15 |
| Nyugat-Dunántúl | 15 |
| Tisza-tó | 8 |
| **Összesen** | **157** |

A 2. fázis tehát kb. **157 saját kép** beszerzését/elkészítését és 157 `kep`
mező átírását jelenti (szócikkcímről lokális fájlútra).

---

## 2. Javasolt fájlnév-konvenció a `kepek/` mappához

Egyértelmű, ütközésmentes elnevezés az `id` alapján (az `id` egyedi és stabil):

```
kepek/{id}-{slug}.jpg      pl. kepek/1-budai-var.jpg, kepek/93-pecsi-dzsami.jpg
```

A betöltő (`alkalmazas.js`) átállításakor: ha a `kep` lokális útnak tűnik
(tartalmaz `/`-t vagy `kepek/`-kel kezdődik), azt töltse be előbb; ha a kép
hiányzik vagy hibás, essen vissza a jelenlegi ötszintű Wikipédia-keresésre.
Így az átállás fokozatos lehet, kép-kép után.

---

## 3. Problémás `kep` mezők (javítási javaslat)

A jelenlegi Wikipédia-betöltő ezeknél nem a látványosságról ad képet. Az
alábbi javaslatok WebSearch-csel ellenőrzött, **biztosan létező** magyar
Wikipédia-szócikkekre mutatnak. (A `hu.wikipedia.org` közvetlen elérését a
környezet hálózati szabálya blokkolja, ezért a létezést a találati URL-ek
igazolták.)

### 3.A) Tárgyi hiba — rossz szócikkre mutat (PRIORITÁS)

| id | Látványosság | Jelenlegi `kep` (hibás) | Javasolt `kep` |
|---:|---|---|---|
| 93 | Gázi Kászim pasa dzsámija | `Jakováli Haszan pasa dzsámija` | `Gázi Kászim pasa dzsámija` |

Ez **két különböző pécsi dzsámi**; a jelenlegi mező a másik épület képét
hozza. Ezt érdemes a Wikipédia-betöltő helyességéért is mielőbb javítani.

### 3.B) Településre/régióra mutató `kep` → konkrét, ellenőrzött szócikk

| id | Látványosság | Jelenlegi `kep` | Javasolt `kep` |
|---:|---|---|---|
| 153 | Máriapócsi nemzeti kegyhely | `Máriapócs` | `Máriapócs Nemzeti Kegyhely` |
| 147 | Dunaföldvári Csonka-torony | `Dunaföldvár` | `Csonka-torony (Dunaföldvár)` |
| 124 | Somogyvári Szent Egyed-apátság romjai | `Somogyvár` | `Bencés kolostor (Somogyvár)` |
| 36 | Nyírbátor – Báthori-templom | `Nyírbátor` | `Nyírbátori római katolikus minorita templom` |
| 121 | Balatonboglári Gömbkilátó | `Balatonboglár` | `Gömbkilátó` |
| 165 | Galyatető – Galyatetői kilátó | `Galyatető` | `Galya-kilátó` |
| 34 | Hajdúszoboszlói gyógyfürdő | `Hajdúszoboszló` | `Hajdúszoboszlói gyógyfürdő` |
| 162 | Szécsényi vár és Forgách-kastély | `Szécsény` | `Szécsényi vár` |
| 201 | Tisza-tavi Madárrezervátum | `Tisza-tó` | `Tisza-tavi madárrezervátum` |
| 135 | Makói Hagymatikum | `Makó` | `Hagymatikum` |
| 131 | Kiskőrös – Petőfi Sándor szülőháza | `Kiskőrös` | `Petőfi Szülőház és Emlékmúzeum` |
| 67 | Székesfehérvár – Romkert | `Székesfehérvár` | `Nagyboldogasszony-bazilika (Székesfehérvár)` |

### 3.C) Nincs biztosan létező dedikált szócikk — a 2. fázisban saját fotóval

Ezeknél a kereséssel nem találtam megbízhatóan a konkrét látványosságot
leíró szócikket, ezért a Wikipédia-betöltőt a település-cikk marad
kiszolgálni, amíg saját kép nem készül:

- Sziráki Teleki-kastély (`Szirák (település)`)
- Harkányi gyógyfürdő (`Harkány`)
- Mórahalmi Szent Erzsébet Gyógyfürdő (`Mórahalom`)
- Fertőrákosi Barlangszínház és Mithras-szentély (`Fertőrákos`)
- Egerszalóki Sódomb (`Egerszalók (település)`)
- Egyéb település-mutatók: Sarudi szabadstrand, Poroszlói Vizi Sétány,
  Kengyeli szélmalom, Hajós – Pincefalu, stb.

### 3.D) Enyhe névváltozatok — valószínűleg rendben

A `kep ≠ nev` esetek többsége csak pontosítás vagy kis-/nagybetű-, kötőjel-
eltérés (pl. „Budai Vár" → `Budavári Palota`, „Tihanyi Bencés Apátság" →
`Tihanyi apátság`). Ezek jó képet adnak; csak a fájlnév-leképezésnél kell
rájuk figyelni.

---

## 4. Tartalmi duplikátum-gyanú (KÜLÖN, tudatos döntést igényel)

Az alábbi rekordpárok azonos településen vannak, közel azonos koordinátával
és erősen átfedő leírással. **Ez tartalmi (és visszafordíthatatlan) döntés**,
ezért NEM része az automatikus javításnak — külön kell eldönteni, hogy
összevonjuk-e (törlés → 157 csökken), vagy megtartjuk-e mindkettőt külön
képpel és élesebb tematikai szétválasztással.

| Pár | „Szűkebb" rekord | „Bővebb" rekord |
|---|---|---|
| Balatonfüred | id:76 „Balatonfüred – Tagore sétány" | id:223 „Balatonfüred – fürdőváros és Tagore-sétány" |
| Szekszárd | id:98 „Szekszárd – borvidék" | id:229 „Szekszárd – belváros és borvidék" |

Megjegyzendő még egy közös `kep`-et használó, de **eltérő** látványosság-pár,
amelynél nincs külön szócikk (nem feltétlen hiba):

- id (Tisza-tó): „Kiskörei vízlépcső" és „Kiskörei Hallépső" — a hallépcső
  fizikailag a vízlépcső része; közös `kep` indokolható.

---

## 5. Javasolt végrehajtási sorrend a 2. fázishoz

1. **3.A** tárgyi hiba javítása (dzsámi) — azonnal, alacsony kockázat.
2. **3.B** `kep` finomítások alkalmazása (12 tétel).
3. Duplikátum-kérdés (4. pont) tudatos eldöntése.
4. Fájlnév-konvenció (2. pont) rögzítése, `kepek/` feltöltése.
5. `alkalmazas.js` betöltő átállítása: lokális kép előny, Wikipédia tartalék.
6. Minden módosítás után `node --check adatok.js` (CLAUDE.md 5. szabály).
