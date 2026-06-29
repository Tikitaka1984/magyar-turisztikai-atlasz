/* ════════════════════════════════════════════════════════════
   MAGYAR TURISZTIKAI ATLASZ — PILOT KVÍZMODUL
   Statikus, kézzel szerkesztett kérdésbank tanórai használathoz.
   ════════════════════════════════════════════════════════════ */

var KVIZ_QUESTIONS = {
  budapest: [
    {
      id: "budapest-01",
      question: "Melyik látványosság található a Budapest, V. kerületben az atlasz adatai szerint?",
      answers: ["Széchenyi gyógyfürdő", "Országház (Parlament)", "Aquincumi Múzeum", "Memento Park"],
      correctIndex: 1,
      explanation: "Az Országház rekordjában a településmező Budapest, V. kerületként szerepel.",
      regionSlug: "budapest",
      latvId: 2,
      latvName: "Országház (Parlament)"
    },
    {
      id: "budapest-02",
      question: "Melyik kategóriába tartozik a Széchenyi gyógyfürdő?",
      answers: ["múzeum", "vallási", "fürdő", "vár"],
      correctIndex: 2,
      explanation: "A Széchenyi gyógyfürdő kategóriája az atlaszban: fürdő.",
      regionSlug: "budapest",
      latvId: 5,
      latvName: "Széchenyi gyógyfürdő"
    },
    {
      id: "budapest-03",
      question: "Melyik helyszín leírása említi Pannonia tartományi fővárosának romkertjét és múzeumát?",
      answers: ["Aquincumi Múzeum", "Magyar Nemzeti Múzeum", "Szentendrei Skanzen", "Memento Park"],
      correctIndex: 0,
      explanation: "Az Aquincumi Múzeum rövid leírása a római kori Aquincum romkertjét és múzeumát nevezi meg.",
      regionSlug: "budapest",
      latvId: 13,
      latvName: "Aquincumi Múzeum"
    },
    {
      id: "budapest-04",
      question: "Melyik látványosság található Gödöllőn?",
      answers: ["Gödöllői Királyi Kastély", "Esztergomi vár", "Visegrádi királyi palota és fellegvár", "Zsámbéki templomrom"],
      correctIndex: 0,
      explanation: "A Gödöllői Királyi Kastély települése az atlaszban Gödöllő.",
      regionSlug: "budapest",
      latvId: 14,
      latvName: "Gödöllői Királyi Kastély"
    },
    {
      id: "budapest-05",
      question: "Melyik látványosság kapcsolódik a Szent Jobb őrzőhelyéhez?",
      answers: ["Mátyás-templom", "Dohány utcai Zsinagóga", "Szent István-bazilika", "Gellért-hegyi Sziklatemplom"],
      correctIndex: 2,
      explanation: "A Szent István-bazilika rövid leírása szerint ez Budapest legnagyobb temploma és a Szent Jobb őrzőhelye.",
      regionSlug: "budapest",
      latvId: 101,
      latvName: "Szent István-bazilika"
    },
    {
      id: "budapest-06",
      question: "Melyik helyszín az ország legnagyobb szabadtéri múzeuma?",
      answers: ["Magyar Nemzeti Múzeum", "Szentendrei Skanzen", "Aquincumi Múzeum", "Fővárosi Állat- és Növénykert"],
      correctIndex: 1,
      explanation: "A Szentendrei Skanzen leírása az ország legnagyobb szabadtéri múzeumaként azonosítja a helyszínt.",
      regionSlug: "budapest",
      latvId: 11,
      latvName: "Szentendrei Skanzen"
    },
    {
      id: "budapest-07",
      question: "Melyik helyszín rövid leírása említi az első állandó dunai hidat?",
      answers: ["Lánchíd", "Nagyvásárcsarnok", "Hősök tere", "Halászbástya"],
      correctIndex: 0,
      explanation: "A Lánchíd rekordja szerint Budapest jelképe és az első állandó dunai híd.",
      regionSlug: "budapest",
      latvId: 212,
      latvName: "Lánchíd"
    },
    {
      id: "budapest-08",
      question: "Melyik látványosság található Visegrádon?",
      answers: ["Esztergomi Bazilika", "Visegrádi királyi palota és fellegvár", "Duna-Ipoly Nemzeti Park", "Vác – Székesegyház és belváros"],
      correctIndex: 1,
      explanation: "A Visegrádi királyi palota és fellegvár településmezője Visegrád.",
      regionSlug: "budapest",
      latvId: 9,
      latvName: "Visegrádi királyi palota és fellegvár"
    },
    {
      id: "budapest-09",
      question: "Melyik helyszín őrzi a Dunakanyar, a Pilis és az Ipoly-mente természeti értékeit?",
      answers: ["Gellért-hegy és Citadella", "Duna-Ipoly Nemzeti Park", "Fővárosi Állat- és Növénykert", "Szentendrei Skanzen"],
      correctIndex: 1,
      explanation: "A Duna-Ipoly Nemzeti Park rövid leírása pontosan ezeket a természeti értékeket említi.",
      regionSlug: "budapest",
      latvId: 12,
      latvName: "Duna-Ipoly Nemzeti Park"
    },
    {
      id: "budapest-10",
      question: "Melyik látványosság kategóriái között szerepel a kastély és az örökség?",
      answers: ["Gödöllői Királyi Kastély", "Budai Vár és Várnegyed", "Magyar Tudományos Akadémia", "Vajdahunyad vára"],
      correctIndex: 0,
      explanation: "A Gödöllői Királyi Kastély kategóriái az atlaszban: kastély és örökség.",
      regionSlug: "budapest",
      latvId: 14,
      latvName: "Gödöllői Királyi Kastély"
    }
  ],
  balaton: [
    {
      id: "balaton-01",
      question: "Melyik településen található a Tihanyi Bencés Apátság az atlasz adatai szerint?",
      answers: ["Balatonfüred", "Tihany", "Keszthely", "Szigliget"],
      correctIndex: 1,
      explanation: "A Tihanyi Bencés Apátság településmezője az atlaszban Tihany.",
      regionSlug: "balaton",
      latvId: 71,
      latvName: "Tihanyi Bencés Apátság"
    },
    {
      id: "balaton-02",
      question: "Melyik látványosság kategóriái között szerepel a kastély és az örökség?",
      answers: ["Festetics-kastély", "Hévízi-tó", "Sümegi vár", "Tapolcai-tavasbarlang"],
      correctIndex: 0,
      explanation: "A Festetics-kastély kategóriái az atlaszban: kastély és örökség.",
      regionSlug: "balaton",
      latvId: 72,
      latvName: "Festetics-kastély"
    },
    {
      id: "balaton-03",
      question: "Melyik helyszín rövid leírása nevezi a világ egyik legnagyobb biológiailag aktív termáltavának?",
      answers: ["Badacsony", "Hévízi-tó", "Keszthely – belváros és strand", "Balatonfüred – Tagore sétány"],
      correctIndex: 1,
      explanation: "A Hévízi-tó rövid leírása szerint a helyszín a világ egyik legnagyobb biológiailag aktív termáltava.",
      regionSlug: "balaton",
      latvId: 73,
      latvName: "Hévízi-tó"
    },
    {
      id: "balaton-04",
      question: "Melyik balatoni látványosság kapcsolódik bazaltorgonás tanúhegyhez és híres borvidékhez?",
      answers: ["Balatonboglári Gömbkilátó", "Badacsony", "Fonyód – Várhegy és Balaton-part", "Szigligeti vár"],
      correctIndex: 1,
      explanation: "A Badacsony leírása bazaltorgonás tanúhegyként és híres borvidékként mutatja be a helyszínt.",
      regionSlug: "balaton",
      latvId: 74,
      latvName: "Badacsony"
    },
    {
      id: "balaton-05",
      question: "Melyik látványosság található Szigligeten?",
      answers: ["Szigligeti vár", "Sümegi vár", "Somogyvári Szent Egyed-apátság romjai", "Tapolcai-tavasbarlang"],
      correctIndex: 0,
      explanation: "A Szigligeti vár településmezője az atlaszban Szigliget.",
      regionSlug: "balaton",
      latvId: 75,
      latvName: "Szigligeti vár"
    },
    {
      id: "balaton-06",
      question: "Melyik helyszínhez kapcsolódik a Kossuth-forrás és a Tagore sétány?",
      answers: ["Siófok", "Balatonföldvár – Hajózástörténeti Kilátó", "Balatonfüred – Tagore sétány", "Keszthely – belváros és strand"],
      correctIndex: 2,
      explanation: "A Balatonfüred – Tagore sétány leírása említi a Kossuth-forrást és a patinás Tagore sétányt.",
      regionSlug: "balaton",
      latvId: 76,
      latvName: "Balatonfüred – Tagore sétány"
    },
    {
      id: "balaton-07",
      question: "Melyik helyszín kategóriája az atlaszban vár?",
      answers: ["Sümegi vár", "Hévízi-tó", "Balatonboglári Gömbkilátó", "Festetics-kastély"],
      correctIndex: 0,
      explanation: "A Sümegi vár kategóriája az atlaszban: vár.",
      regionSlug: "balaton",
      latvId: 77,
      latvName: "Sümegi vár"
    },
    {
      id: "balaton-08",
      question: "Melyik balatoni helyszín leírása említi a vasbeton víztornyot és Kálmán Imre emlékét?",
      answers: ["Siófok", "Keszthely – belváros és strand", "Balatonboglári Gömbkilátó", "Fonyód – Várhegy és Balaton-part"],
      correctIndex: 0,
      explanation: "Siófok részletes leírása a vasbeton víztornyot és Kálmán Imre emlékét is megemlíti.",
      regionSlug: "balaton",
      latvId: 78,
      latvName: "Siófok"
    },
    {
      id: "balaton-09",
      question: "Melyik látványosság áll a Várdomb tetején Balatonbogláron?",
      answers: ["Balatonföldvár – Hajózástörténeti Kilátó", "Balatonboglári Gömbkilátó", "Fonyód – Várhegy és Balaton-part", "Badacsony"],
      correctIndex: 1,
      explanation: "A Balatonboglári Gömbkilátó leírása szerint a gömb alakú kilátó a Várdomb tetején áll.",
      regionSlug: "balaton",
      latvId: 121,
      latvName: "Balatonboglári Gömbkilátó"
    },
    {
      id: "balaton-10",
      question: "Melyik helyszín alatt húzódó barlangrendszer járatait lehet csónakkal bejárni?",
      answers: ["Tapolcai-tavasbarlang", "Hévízi-tó", "Somogyvári Szent Egyed-apátság romjai", "Szigligeti vár"],
      correctIndex: 0,
      explanation: "A Tapolcai-tavasbarlang leírása szerint a földalatti tóval kitöltött járatokat csónakkal lehet bejárni.",
      regionSlug: "balaton",
      latvId: 122,
      latvName: "Tapolcai-tavasbarlang"
    }

  ],
  "eszak-magyarorszag": [
    {
      id: "eszak-magyarorszag-01",
      question: "Melyik látványosság rekordja említi az 1552-es diadalmas várvédelmet és Dobó István várkapitányt?",
      answers: ["Diósgyőri vár", "Egri vár", "Sárospataki Rákóczi-vár", "Siroki vár"],
      correctIndex: 1,
      explanation: "Az Egri vár leírása az 1552-es diadalmas várvédelmet és Dobó István várkapitányt is megnevezi.",
      regionSlug: "eszak-magyarorszag",
      latvId: 21,
      latvName: "Egri vár"
    },
    {
      id: "eszak-magyarorszag-02",
      question: "Melyik településen található az Oszmán Birodalom legészakibb fennmaradt minaretje az atlasz szerint?",
      answers: ["Tokaj", "Eger", "Sárospatak", "Szécsény"],
      correctIndex: 1,
      explanation: "Az Egri minaret településmezője Eger, leírása pedig az Oszmán Birodalom legészakibb fennmaradt minaretjeként azonosítja.",
      regionSlug: "eszak-magyarorszag",
      latvId: 22,
      latvName: "Egri minaret"
    },
    {
      id: "eszak-magyarorszag-03",
      question: "Melyik helyszín leírása szerint nem skanzen, hanem valódi, lakott település?",
      answers: ["Hollókő Ófalu", "Mezőkövesdi Matyó Múzeum", "Szécsényi vár és Forgách-kastély", "Tokaj-Hegyalja borvidék"],
      correctIndex: 0,
      explanation: "Hollókő Ófalu leírása hangsúlyozza, hogy nem skanzen, hanem valódi, lakott település.",
      regionSlug: "eszak-magyarorszag",
      latvId: 23,
      latvName: "Hollókő Ófalu"
    },
    {
      id: "eszak-magyarorszag-04",
      question: "Melyik észak-magyarországi helyszín barlangrendszere több mint 25 kilométer hosszú?",
      answers: ["Miskolctapolcai Barlangfürdő", "Aggteleki-cseppkőbarlang (Baradla)", "Lillafüred", "Egerszalóki Sódomb"],
      correctIndex: 1,
      explanation: "Az Aggteleki-cseppkőbarlang (Baradla) rövid leírása szerint a világörökségi cseppkőbarlang több mint 25 km hosszú.",
      regionSlug: "eszak-magyarorszag",
      latvId: 24,
      latvName: "Aggteleki-cseppkőbarlang (Baradla)"
    },
    {
      id: "eszak-magyarorszag-05",
      question: "Melyik helyszínhez kapcsolódik a tokaji aszú és a világörökségi történelmi borvidék?",
      answers: ["Egri Szépasszony-völgy", "Tokaj-Hegyalja borvidék", "Tokaji zsinagóga és Fesztiválkatlan", "Mezőkövesdi Matyó Múzeum"],
      correctIndex: 1,
      explanation: "Tokaj-Hegyalja borvidék rövid leírása a világörökségi történelmi borvidéket a tokaji aszú hazájaként mutatja be.",
      regionSlug: "eszak-magyarorszag",
      latvId: 25,
      latvName: "Tokaj-Hegyalja borvidék"
    },
    {
      id: "eszak-magyarorszag-06",
      question: "Melyik miskolci helyszín jelképe a Palotaszálló és Magyarország legmagasabb vízesése?",
      answers: ["Lillafüred", "Diósgyőri vár", "Miskolctapolcai Barlangfürdő", "Tokaji zsinagóga és Fesztiválkatlan"],
      correctIndex: 0,
      explanation: "Lillafüred leírása a Palotaszállót és Magyarország legmagasabb, mintegy 20 méteres vízesését is említi.",
      regionSlug: "eszak-magyarorszag",
      latvId: 26,
      latvName: "Lillafüred"
    },
    {
      id: "eszak-magyarorszag-07",
      question: "Melyik látványosság szerepel az atlaszban Miskolc településsel és vár kategóriával?",
      answers: ["Salgó vára", "Diósgyőri vár", "Füzéri vár", "Siroki vár"],
      correctIndex: 1,
      explanation: "A Diósgyőri vár településmezője Miskolc, kategóriája pedig vár.",
      regionSlug: "eszak-magyarorszag",
      latvId: 27,
      latvName: "Diósgyőri vár"
    },
    {
      id: "eszak-magyarorszag-08",
      question: "Melyik helyszín leírása említi a Fátyol-vízesést és a lipicai ménest?",
      answers: ["Galyatető – Galyatetői kilátó", "Szilvásvárad – Szalajka-völgy", "Kékestető – Magyarország legmagasabb pontja", "Egerszalóki Sódomb"],
      correctIndex: 1,
      explanation: "A Szilvásvárad – Szalajka-völgy rekordja a Fátyol-vízesést és a lipicai ménest is megnevezi.",
      regionSlug: "eszak-magyarorszag",
      latvId: 28,
      latvName: "Szilvásvárad – Szalajka-völgy"
    },
    {
      id: "eszak-magyarorszag-09",
      question: "Melyik helyszínnél írja az atlasz, hogy rövid ideig itt őrizték a magyar Szent Koronát?",
      answers: ["Füzéri vár", "Sárospataki Rákóczi-vár", "Szécsényi vár és Forgách-kastély", "Salgó vára"],
      correctIndex: 0,
      explanation: "A Füzéri vár leírása szerint a mohácsi vész utáni időkben rövid ideig itt őrizték a magyar Szent Koronát.",
      regionSlug: "eszak-magyarorszag",
      latvId: 168,
      latvName: "Füzéri vár"
    },
    {
      id: "eszak-magyarorszag-10",
      question: "Melyik helyszín kategóriái között szerepel egyszerre a fürdő és a természet?",
      answers: ["Egerszalóki Sódomb", "Egri Szépasszony-völgy", "Mezőkövesdi Matyó Múzeum", "Sziráki Teleki-kastély"],
      correctIndex: 0,
      explanation: "Az Egerszalóki Sódomb kategóriái az atlaszban: természet és fürdő.",
      regionSlug: "eszak-magyarorszag",
      latvId: 166,
      latvName: "Egerszalóki Sódomb"
    }
  ],
  "del-dunantul": [
    {
      id: "del-dunantul-01",
      question: "Melyik dél-dunántúli helyszín kapcsolódik a római kori Sopianae világörökségi temetőjéhez?",
      answers: ["Pécs – Ókeresztény sírkamrák", "Gázi Kászim pasa dzsámija", "Pécsi Székesegyház", "Pécs – Zsolnay Kulturális Negyed"],
      correctIndex: 0,
      explanation: "A Pécs – Ókeresztény sírkamrák rekordja szerint a helyszín a római kori Sopianae világörökségi temetőjének része.",
      regionSlug: "del-dunantul",
      latvId: 92,
      latvName: "Pécs – Ókeresztény sírkamrák"
    },
    {
      id: "del-dunantul-02",
      question: "Melyik látványosság áll az atlasz szerint Pécs főterén, a Széchenyi téren?",
      answers: ["Pécs – Vasarely Múzeum", "Gázi Kászim pasa dzsámija", "Pécsi TV-torony (Misina-tető)", "Pécs – Csontváry Múzeum"],
      correctIndex: 1,
      explanation: "A Gázi Kászim pasa dzsámija leírása szerint az épület Pécs főterén, a Széchenyi téren áll.",
      regionSlug: "del-dunantul",
      latvId: 93,
      latvName: "Gázi Kászim pasa dzsámija"
    },
    {
      id: "del-dunantul-03",
      question: "Melyik településen található a Villányi borvidék rekordja az atlaszban?",
      answers: ["Szekszárd", "Villány", "Harkány", "Siklós"],
      correctIndex: 1,
      explanation: "A Villányi borvidék településmezője az atlaszban Villány.",
      regionSlug: "del-dunantul",
      latvId: 94,
      latvName: "Villányi borvidék"
    },
    {
      id: "del-dunantul-04",
      question: "Melyik dél-dunántúli látványosság kategóriája az atlaszban vár?",
      answers: ["Harkányi gyógyfürdő", "Siklósi vár", "Abaligeti-barlang", "Szennai skanzen"],
      correctIndex: 1,
      explanation: "A Siklósi vár kategóriája az atlaszban: vár.",
      regionSlug: "del-dunantul",
      latvId: 95,
      latvName: "Siklósi vár"
    },
    {
      id: "del-dunantul-05",
      question: "Melyik helyszín leírása említi, hogy gyógyvize magas kénhidrogén-tartalmú?",
      answers: ["Abaligeti-barlang", "Harkányi gyógyfürdő", "Duna–Dráva Nemzeti Park – Gemenci-erdő", "Pécsi TV-torony (Misina-tető)"],
      correctIndex: 1,
      explanation: "A Harkányi gyógyfürdő leírása szerint a harkányi gyógyvíz magas kénhidrogén-tartalma a világon is ritka.",
      regionSlug: "del-dunantul",
      latvId: 96,
      latvName: "Harkányi gyógyfürdő"
    },
    {
      id: "del-dunantul-06",
      question: "Melyik helyszínhez kapcsolódik a világhírű Zsolnay-porcelángyár egykori gyárterülete?",
      answers: ["Pécs – Zsolnay Kulturális Negyed", "Pécs – Vasarely Múzeum", "Pécs – Csontváry Múzeum", "Szekszárd – belváros és borvidék"],
      correctIndex: 0,
      explanation: "A Pécs – Zsolnay Kulturális Negyed rekordja szerint a negyed a világhírű Zsolnay-porcelángyár egykori gyárterületén jött létre.",
      regionSlug: "del-dunantul",
      latvId: 141,
      latvName: "Pécs – Zsolnay Kulturális Negyed"
    },
    {
      id: "del-dunantul-07",
      question: "Melyik dél-dunántúli emlékhely állít emléket az 1526. augusztus 29-i csata áldozatainak?",
      answers: ["Szigetvári vár", "Mohácsi Nemzeti Emlékhely", "Dunaföldvári Csonka-torony", "Somogyvári Szent Egyed-apátság romjai"],
      correctIndex: 1,
      explanation: "A Mohácsi Nemzeti Emlékhely az 1526. augusztus 29-i mohácsi csata áldozatainak állít emléket.",
      regionSlug: "del-dunantul",
      latvId: 145,
      latvName: "Mohácsi Nemzeti Emlékhely"
    },
    {
      id: "del-dunantul-08",
      question: "Melyik helyszín leírása említi Zrínyi Miklós 1566-os várvédelmét?",
      answers: ["Siklósi vár", "Szigetvári vár", "Dunaföldvári Csonka-torony", "Pécsi Székesegyház"],
      correctIndex: 1,
      explanation: "A Szigetvári vár leírása szerint 1566-ban Zrínyi Miklós serege legendás várvédelmet vívott itt.",
      regionSlug: "del-dunantul",
      latvId: 146,
      latvName: "Szigetvári vár"
    },
    {
      id: "del-dunantul-09",
      question: "Melyik településhez kapcsolódik a Rippl-Rónai Múzeum rekordja?",
      answers: ["Kaposvár", "Szenna", "Szekszárd", "Paks"],
      correctIndex: 0,
      explanation: "A Kaposvár – Rippl-Rónai Múzeum településmezője az atlaszban Kaposvár.",
      regionSlug: "del-dunantul",
      latvId: 148,
      latvName: "Kaposvár – Rippl-Rónai Múzeum"
    },
    {
      id: "del-dunantul-10",
      question: "Melyik dél-dunántúli helyszín nyerte el az atlasz leírása szerint az Europa Nostra-díjat?",
      answers: ["Szennai skanzen", "Pécs – Csontváry Múzeum", "Abaligeti-barlang", "Duna–Dráva Nemzeti Park – Gemenci-erdő"],
      correctIndex: 0,
      explanation: "A Szennai skanzen leírása szerint a gyűjtemény kiemelkedő szakmai értékét az Europa Nostra-díj jelzi.",
      regionSlug: "del-dunantul",
      latvId: 149,
      latvName: "Szennai skanzen"
    }
  ],
  "eszak-alfold": [
    {
      id: "eszak-alfold-01",
      question: "Melyik észak-alföldi látványosság leírása említi a „kálvinista Róma” központját?",
      answers: ["Déri Múzeum", "Debreceni Református Nagytemplom", "Máriapócsi nemzeti kegyhely", "Csarodai református templom"],
      correctIndex: 1,
      explanation: "A Debreceni Református Nagytemplom rövid leírása a magyar reformátusság jelképes templomaként és a „kálvinista Róma” központjaként azonosítja a helyszínt.",
      regionSlug: "eszak-alfold",
      latvId: 31,
      latvName: "Debreceni Református Nagytemplom"
    },
    {
      id: "eszak-alfold-02",
      question: "Melyik helyszínhez kapcsolódik Povolny Ferenc terve és az 1827–1833 közötti építés az atlasz szerint?",
      answers: ["Kengyeli szélmalom", "Hortobágyi Nemzeti Park – Kilenclyukú híd", "Tiszadobi Andrássy-kastély", "Tákosi református templom"],
      correctIndex: 1,
      explanation: "A Hortobágyi Nemzeti Park – Kilenclyukú híd rövid leírása szerint a Hortobágy jelképe Povolny Ferenc tervei alapján 1827–1833 között épült.",
      regionSlug: "eszak-alfold",
      latvId: 32,
      latvName: "Hortobágyi Nemzeti Park – Kilenclyukú híd"
    },
    {
      id: "eszak-alfold-03",
      question: "Melyik látványosság található Nyíregyházán és kapcsolódik a Sóstó üdülőövezet tölgyerdei környezetéhez?",
      answers: ["Nyíregyháza – Sóstó Állatpark", "Sóstói Múzeumfalu", "Máriapócsi nemzeti kegyhely", "Nyírbátori Báthori Várkastély és Panoptikum"],
      correctIndex: 0,
      explanation: "A Nyíregyháza – Sóstó Állatpark településmezője Nyíregyháza, leírása pedig a Sóstó üdülőövezet ősi tölgyerdejét említi.",
      regionSlug: "eszak-alfold",
      latvId: 33,
      latvName: "Nyíregyháza – Sóstó Állatpark"
    },
    {
      id: "eszak-alfold-04",
      question: "Melyik helyszín kategóriája az atlaszban fürdő?",
      answers: ["Nyíregyházi Állatpark (Sóstó Zoo)", "Hajdúszoboszlói gyógyfürdő", "Sóstói Múzeumfalu", "Déri Múzeum"],
      correctIndex: 1,
      explanation: "A Hajdúszoboszlói gyógyfürdő kategóriája az atlaszban: fürdő.",
      regionSlug: "eszak-alfold",
      latvId: 34,
      latvName: "Hajdúszoboszlói gyógyfürdő"
    },
    {
      id: "eszak-alfold-05",
      question: "Melyik debreceni helyszínhez kapcsolódik Munkácsy Mihály monumentális Krisztus-trilógiája?",
      answers: ["Debreceni Református Nagytemplom", "Déri Múzeum", "Jász Múzeum – Jászkürt", "Szolnoki RepTár – Repülőmúzeum"],
      correctIndex: 1,
      explanation: "A Déri Múzeum rövid leírása és részletes leírása is Munkácsy Mihály monumentális Krisztus-trilógiáját említi.",
      regionSlug: "eszak-alfold",
      latvId: 35,
      latvName: "Déri Múzeum"
    },
    {
      id: "eszak-alfold-06",
      question: "Melyik településen található a Báthori-templom az atlasz adatai szerint?",
      answers: ["Máriapócs", "Csaroda", "Nyírbátor", "Tiszadob"],
      correctIndex: 2,
      explanation: "A Nyírbátor – Báthori-templom településmezője az atlaszban Nyírbátor.",
      regionSlug: "eszak-alfold",
      latvId: 36,
      latvName: "Nyírbátor – Báthori-templom"
    },
    {
      id: "eszak-alfold-07",
      question: "Melyik észak-alföldi kastély leírása említi a 365 szobát, 52 tornyot, 12 tornyot és 4 bejáratot?",
      answers: ["Tiszadobi Andrássy-kastély", "Nyírbátori Báthori Várkastély és Panoptikum", "Debreceni Református Nagytemplom", "Jász Múzeum – Jászkürt"],
      correctIndex: 0,
      explanation: "A Tiszadobi Andrássy-kastély leírása szerint a 365 szoba az év napjait, az 52 torony a heteket, a 12 torony a hónapokat, a 4 bejárat pedig az évszakokat jelöli.",
      regionSlug: "eszak-alfold",
      latvId: 151,
      latvName: "Tiszadobi Andrássy-kastély"
    },
    {
      id: "eszak-alfold-08",
      question: "Melyik nemzeti kegyhely leírása említi az 1696-os és 1715-ös könnyezést?",
      answers: ["Csarodai református templom", "Tákosi református templom", "Máriapócsi nemzeti kegyhely", "Debreceni Református Nagytemplom"],
      correctIndex: 2,
      explanation: "A Máriapócsi nemzeti kegyhely leírása szerint az itt őrzött Mária-ikonon 1696-ban, majd 1715-ben is könnyezést észleltek.",
      regionSlug: "eszak-alfold",
      latvId: 153,
      latvName: "Máriapócsi nemzeti kegyhely"
    },
    {
      id: "eszak-alfold-09",
      question: "Melyik helyszín a „mosolygó szentek temploma” az atlasz leírása alapján?",
      answers: ["Csarodai református templom", "Tákosi református templom", "Nyírbátor – Báthori-templom", "Máriapócsi nemzeti kegyhely"],
      correctIndex: 0,
      explanation: "A Csarodai református templom rövid leírása a mosolygó szentek templomaként mutatja be a helyszínt.",
      regionSlug: "eszak-alfold",
      latvId: 154,
      latvName: "Csarodai református templom"
    },
    {
      id: "eszak-alfold-10",
      question: "Melyik szolnoki helyszín mutatja be a hazai repülés és légierő történetét?",
      answers: ["Jász Múzeum – Jászkürt", "Szolnoki RepTár – Repülőmúzeum", "Kengyeli szélmalom", "Déri Múzeum"],
      correctIndex: 1,
      explanation: "A Szolnoki RepTár – Repülőmúzeum leírása szerint a múzeum a hazai repülés és légierő történetét mutatja be.",
      regionSlug: "eszak-alfold",
      latvId: 156,
      latvName: "Szolnoki RepTár – Repülőmúzeum"
    }
  ],
  "tisza-to": [
    {
      id: "tisza-to-01",
      question: "Mi a Kiskörei Hallépső elsődleges ökológiai szerepe a vízlépcső mellett?",
      answers: [
        "Felmelegíti a sekély öböl vizét a strandolók kényelméért",
        "Tárolja az öntözővizet a környező szántóföldek számára",
        "Lehetővé teszi a halak átkelését a duzzasztott és a természetes folyószakasz között",
        "Megszűri a hajóforgalom által felkavart üledéket"
      ],
      correctIndex: 2,
      explanation: "A Kiskörei Hallépső leírása szerint a halak és más vízi élőlények biztonságos átkelését biztosítja a duzzasztott és a természetes folyószakasz között.",
      regionSlug: "tisza-to",
      latvId: 202,
      latvName: "Kiskörei Hallépső"
    },
    {
      id: "tisza-to-02",
      question: "Melyik állítás IGAZ a Tisza-tavi Madárrezervátumról az atlasz leírása alapján?",
      answers: [
        "Bárki szabadon, gyalogosan bejárhatja a fészkelőterületet",
        "A területre csak evezős hajóval, szervezett körülmények között szabad bemenni",
        "A rezervátum a tó déli, abádszalóki medencéjében fekszik",
        "Elsősorban a motoros vízi sportok engedélyezett helyszíne"
      ],
      correctIndex: 1,
      explanation: "A leírás szerint a rezervátumba csak evezős hajóval és csak szervezett körülmények között szabad bemenni; az öböl az északi tómedencében (Tiszavalki-öböl) található.",
      regionSlug: "tisza-to",
      latvId: 201,
      latvName: "Tisza-tavi Madárrezervátum"
    },
    {
      id: "tisza-to-03",
      question: "Milyen célból épült eredetileg a Tisza-tavat létrehozó duzzasztómű az atlasz szerint?",
      answers: [
        "Öntözés, árvízvédelem és energiatermelés céljából",
        "Nemzetközi hajóverseny-pálya kialakítása céljából",
        "Budapest ivóvízellátásának biztosítása céljából",
        "Nagyüzemi haltenyésztő telep létrehozása céljából"
      ],
      correctIndex: 0,
      explanation: "A Kiskörei vízlépcső leírása szerint a létesítmény eredetileg az öntözés, az árvízvédelem és az energiatermelés céljából épült.",
      regionSlug: "tisza-to",
      latvId: 43,
      latvName: "Kiskörei vízlépcső"
    },
    {
      id: "tisza-to-04",
      question: "Mi a fő különbség Abádszalók és a Sarudi szabadstrand turisztikai jellege között a leírások alapján?",
      answers: [
        "Mindkettő a tó keleti partján, Tiszafüred szomszédságában fekszik",
        "Abádszalók csendes madármegfigyelő hely, Sarud pörgő vízisport-központ",
        "Egyik sem alkalmas strandolásra, csak horgászatra használják",
        "Abádszalók pörgő vízisport-központ, Sarud csendes, természetközeli pihenőhely"
      ],
      correctIndex: 3,
      explanation: "Abádszalók a déli medence vízisport-központja (jet-ski, wakeboard), míg a Sarudi szabadstrand a tó nyugati partjának csendes, természetközeli pihenőhelye.",
      regionSlug: "tisza-to",
      latvId: 44,
      latvName: "Abádszalók"
    },
    {
      id: "tisza-to-05",
      question: "Miért kiemelt célpontja a Tisza-tavi Ökocentrum az iskolai osztálykirándulásoknak?",
      answers: [
        "Mert a régió egyetlen vízparti nagyszállodája működik itt",
        "Környezeti nevelési programjai és interaktív, természetismereti kiállításai miatt",
        "Mert itt rendezik a tó motorcsónak-versenyeit",
        "Mert ingyenes termálfürdő is tartozik hozzá"
      ],
      correctIndex: 1,
      explanation: "Az Ökocentrum leírása szerint a helyszín interaktív kiállításai, tanösvénye és környezeti nevelési programjai miatt az osztálykirándulások kedvelt célpontja.",
      regionSlug: "tisza-to",
      latvId: 41,
      latvName: "Tisza-tavi Ökocentrum"
    },
    {
      id: "tisza-to-06",
      question: "Mi jellemzi a Sarudi szabadstrand környékének természeti környezetét az atlasz szerint?",
      answers: [
        "Kiterjedt nádasok és gazdag madárvilág övezi",
        "Mély, hajózásra használt fő folyómeder szegélyezi",
        "Sűrűn beépített, nagyvárosi üdülőövezet veszi körül",
        "Kénhidrogénben gazdag gyógyforrások törnek fel a partján"
      ],
      correctIndex: 0,
      explanation: "Sarud leírása szerint az öblöt kiterjedt nádasok és gazdag madárvilág övezi, ezért a természetjárás és a madármegfigyelés kedvelt helyszíne.",
      regionSlug: "tisza-to",
      latvId: 45,
      latvName: "Sarudi szabadstrand"
    },
    {
      id: "tisza-to-07",
      question: "Mi teszi különlegessé a Poroszlói Vizi Sétányt a tó többi partszakaszához képest?",
      answers: [
        "Termálvizes élményfürdő tartozik hozzá",
        "Autóval körbejárható tanösvény vezet rajta a tó körül",
        "A nyílt vízbe épített pallórendszer csak csónakkal érhető el, és szárazföldről megszerezhetetlen élményt ad",
        "Üvegfalú folyosójából a vándorló halak mozgása figyelhető meg"
      ],
      correctIndex: 2,
      explanation: "A Vizi Sétány a tó nádasaiba és nyílt vizébe épített pallórendszer, amelyhez csak csónakkal lehet eljutni, és olyan élményt nyújt, amelyet szárazföldről nem lehetne megkapni.",
      regionSlug: "tisza-to",
      latvId: 203,
      latvName: "Poroszlói Vizi Sétány"
    },
    {
      id: "tisza-to-08",
      question: "Mit őriz a tiszafüredi Kiss Pál Múzeum az atlasz leírása szerint?",
      answers: [
        "A Tisza-tó vízimadarainak preparált gyűjteményét",
        "A kiskörei vízlépcső eredeti gépészeti berendezéseit",
        "A tó vízisport-emlékeit és egykori versenyhajóit",
        "A térség néprajzi emlékeit, köztük a híres tiszafüredi fazekasság darabjait"
      ],
      correctIndex: 3,
      explanation: "Tiszafüred leírása szerint a Kiss Pál Múzeum a térség néprajzi emlékeit, köztük a híres tiszafüredi fazekasság darabjait őrzi.",
      regionSlug: "tisza-to",
      latvId: 42,
      latvName: "Tiszafüred"
    },
    {
      id: "tisza-to-09",
      question: "Melyik település tölti be az atlasz szerint a tó keleti medencéjének turisztikai és közlekedési csomóponti szerepét?",
      answers: [
        "Kisköre",
        "Tiszafüred",
        "Poroszló",
        "Abádszalók"
      ],
      correctIndex: 1,
      explanation: "Tiszafüred leírása szerint a város a Tisza-tó keleti medencéjének turisztikai és közlekedési csomópontja.",
      regionSlug: "tisza-to",
      latvId: 42,
      latvName: "Tiszafüred"
    },
    {
      id: "tisza-to-10",
      question: "Az atlasz leírása szerint a tóméretet tekintve hányadik helyen áll a Tisza-tó az ország tavai között?",
      answers: [
        "Az ország legnagyobb tava",
        "Az ország második legnagyobb tava",
        "Az ország harmadik legnagyobb tava",
        "Az ország ötödik legnagyobb tava"
      ],
      correctIndex: 1,
      explanation: "A Kiskörei vízlépcső leírása szerint a duzzasztással létrejött mintegy 127 négyzetkilométeres Tisza-tó Magyarország második legnagyobb tava.",
      regionSlug: "tisza-to",
      latvId: 43,
      latvName: "Kiskörei vízlépcső"
    }
  ],
  "nyugat-dunantul": [
    {
      id: "nyugat-dunantul-01",
      question: "Az atlasz leírása alapján miért tekinthető a Pannonhalmi Főapátság a magyar kereszténység bölcsőjének?",
      answers: [
        "Mert itt koronázták meg Szent István királyt az államalapításkor",
        "Mert a Könnyező Szűzanya kegyképét itt őrzik zarándokhelyként",
        "Mert falai között nyomtatták az első magyar nyelvű könyvet",
        "Mert 996-ban, még az államalapítás előtt alapították, az ország legrégebbi szerzetesi közösségeként"
      ],
      correctIndex: 3,
      explanation: "A Pannonhalmi Főapátság leírása szerint az apátságot 996-ban, még az államalapítás előtt alapították bencés szerzetesek, és ez Magyarország legrégebbi szerzetesi közössége.",
      regionSlug: "nyugat-dunantul",
      latvId: 81,
      latvName: "Pannonhalmi Főapátság"
    },
    {
      id: "nyugat-dunantul-02",
      question: "Mi volt az atlasz szerint a kőszegi Jurisics-vár 1532-es ostromának nagy történelmi jelentősége?",
      answers: [
        "A védők kiverték az országból a teljes oszmán sereget",
        "Az ostrom után a várban írták alá a törökökkel kötött békét",
        "A maroknyi védősereg feltartóztatta Szulejmán seregét, és így megakadályozta Bécs ostromát",
        "A vár visszafoglalásával indult meg a török kiűzése Magyarországról"
      ],
      correctIndex: 2,
      explanation: "A Kőszeg – Jurisics-vár leírása szerint Jurisics Miklós maroknyi védőserege 1532-ben verte vissza Szulejmán szultán hatalmas seregét, amelynek feltartóztatása megakadályozta Bécs ostromát.",
      regionSlug: "nyugat-dunantul",
      latvId: 84,
      latvName: "Kőszeg – Jurisics-vár"
    },
    {
      id: "nyugat-dunantul-03",
      question: "Az atlasz leírása szerint milyen művelődéstörténeti eseményről nevezetes a sárvári Nádasdy-vár?",
      answers: [
        "Itt alapították az ország első egyetemét",
        "Itt nyomtatták 1541-ben az első, teljes egészében magyar nyelvű könyvet",
        "Itt állították össze az első magyar nyelvű szótárt",
        "Itt rendezték az első magyar nyelvű színházi előadást"
      ],
      correctIndex: 1,
      explanation: "A Sárvár – Nádasdy-vár leírása szerint a várban működött Sylvester János nyomdája, ahol 1541-ben elkészült az első, teljes egészében magyar nyelvű nyomtatott könyv, az Újszövetség magyar fordítása.",
      regionSlug: "nyugat-dunantul",
      latvId: 86,
      latvName: "Sárvár – Nádasdy-vár"
    },
    {
      id: "nyugat-dunantul-04",
      question: "Melyik építészeti korszak kiemelkedő, kéttornyú emléke a jáki apátsági templom az atlasz szerint?",
      answers: [
        "A gótikus építészet",
        "A reneszánsz építészet",
        "A barokk építészet",
        "A románkori (román) építészet"
      ],
      correctIndex: 3,
      explanation: "A Jáki apátsági templom leírása szerint a 13. század közepén emelt, kéttornyú bencés templom a magyar románkori építészet egyik legszebb és legépebben fennmaradt alkotása.",
      regionSlug: "nyugat-dunantul",
      latvId: 87,
      latvName: "Jáki apátsági templom"
    },
    {
      id: "nyugat-dunantul-05",
      question: "Az atlasz szerint melyik természeti jellemző teszi különlegessé a Fertő-tavat?",
      answers: [
        "Európa legnyugatibb sztyepptava, sekély, nádasokkal sűrűn övezett szikes tó",
        "Magyarország legnagyobb és legmélyebb hegyi tava",
        "Az ország egyetlen tengerszint alatti karsztforrása",
        "A világ egyik legnagyobb biológiailag aktív termáltava"
      ],
      correctIndex: 0,
      explanation: "A Fertő-tó kultúrtáj leírása szerint a Fertő-tó Európa legnyugatibb sztyepptava: sekély, nádasokkal sűrűn övezett szikes tó, amely határon átnyúló világörökségi kultúrtáj.",
      regionSlug: "nyugat-dunantul",
      latvId: 83,
      latvName: "Fertő-tó kultúrtáj"
    },
    {
      id: "nyugat-dunantul-06",
      question: "Az atlasz szerint mi történt 1989. augusztus 19-én a Páneurópai Piknik helyszínén?",
      answers: [
        "Aláírták a szovjet csapatok kivonásáról szóló egyezményt",
        "Itt kiáltották ki a Magyar Köztársaságot",
        "Rövid időre kinyitották a vasfüggöny kapuját, és több száz kelet-német állampolgár jutott át Ausztriába",
        "Lebontották a teljes magyar–osztrák határkerítést"
      ],
      correctIndex: 2,
      explanation: "A Páneurópai Piknik Emlékhely leírása szerint 1989. augusztus 19-én itt nyitották ki rövid időre a vasfüggöny kapuját, és több száz kelet-német állampolgárnak sikerült átjutnia Ausztriába – ez volt az első tömegszökés a vasfüggöny mögül.",
      regionSlug: "nyugat-dunantul",
      latvId: 226,
      latvName: "Páneurópai Piknik Emlékhely"
    },
    {
      id: "nyugat-dunantul-07",
      question: "Melyik világhírű zeneszerző élt és alkotott évtizedeken át udvari karmesterként a fertődi Esterházy-kastélyban?",
      answers: [
        "Liszt Ferenc",
        "Erkel Ferenc",
        "Wolfgang Amadeus Mozart",
        "Joseph Haydn"
      ],
      correctIndex: 3,
      explanation: "A Fertődi Esterházy-kastély leírása szerint Joseph Haydn 1766 és 1790 között élt és alkotott Eszterházán az Esterházy-udvar karmestereként és zeneszerzőjeként.",
      regionSlug: "nyugat-dunantul",
      latvId: 191,
      latvName: "Fertődi Esterházy-kastély"
    },
    {
      id: "nyugat-dunantul-08",
      question: "Az atlasz szerint miért viseli Sopron a „leghűségesebb város” (Civitas Fidelissima) címet?",
      answers: [
        "Mert lakói 1921-ben népszavazáson Magyarország mellett döntöttek",
        "Mert a város a hódoltság idején sosem került török kézre",
        "Mert hű maradt a királyhoz a Rákóczi-szabadságharc alatt",
        "Mert elsőként csatlakozott a reformáció ügyéhez"
      ],
      correctIndex: 0,
      explanation: "A Sopron – Tűztorony leírása szerint a torony alatti Hűség kapuja arra emlékeztet, hogy Sopron lakói 1921-ben népszavazáson Magyarország mellett döntöttek, ezért viseli a város a „leghűségesebb város” (Civitas Fidelissima) címet.",
      regionSlug: "nyugat-dunantul",
      latvId: 82,
      latvName: "Sopron – Tűztorony"
    },
    {
      id: "nyugat-dunantul-09",
      question: "Mi a fő különbség a fertődi Esterházy-kastély és a nagycenki Széchenyi-kastély atlaszbeli jellemzése között?",
      answers: [
        "Mindkettő gótikus stílusú középkori végvár volt",
        "A fertődi az ország legnagyobb rokokó kastélya, a nagycenki Széchenyi István szülőkastélya és emlékhelye",
        "A fertődi Széchenyi István szülőkastélya, a nagycenki rokokó zenei központ",
        "A fertődi ma gyógyfürdőként, a nagycenki bencés kolostorként működik"
      ],
      correctIndex: 1,
      explanation: "A Fertődi Esterházy-kastély az ország legnagyobb rokokó kastélyegyüttese („Magyar Versailles”), míg a Nagycenki Széchenyi-kastély Széchenyi István gróf szülőkastélya és nemzeti emlékhelye.",
      regionSlug: "nyugat-dunantul",
      latvId: 192,
      latvName: "Nagycenki Széchenyi-kastély"
    },
    {
      id: "nyugat-dunantul-10",
      question: "Melyik állítás IGAZ a szombathelyi Iseumról az atlasz leírása alapján?",
      answers: [
        "Egy középkori bencés kolostor fennmaradt romja",
        "A török hódoltság korának fennmaradt dzsámija",
        "Az egyiptomi istennő, Isis tiszteletére emelt ókori római szentély rekonstruált együttese",
        "Egy 19. század eleji eklektikus zsinagóga"
      ],
      correctIndex: 2,
      explanation: "A Szombathely – Iseum leírása szerint az Iseum az egyiptomi istennő, Isis tiszteletére emelt ókori szentély rekonstruált együttese a római Savaria városában.",
      regionSlug: "nyugat-dunantul",
      latvId: 88,
      latvName: "Szombathely – Iseum"
    }
  ],
  "del-alfold": [
    {
      id: "del-alfold-01",
      question: "Az atlasz leírása szerint melyik esemény után, a város újjáépítésekor emelték fogadalomból Szeged jelképét, a Fogadalmi templomot (szegedi dómot)?",
      answers: [
        "Az 1848–49-es szabadságharc szegedi harcai",
        "Az 1879-es nagy szegedi árvíz",
        "Az első világháború szegedi áldozatainak emléke",
        "A török hódoltság alóli felszabadulás"
      ],
      correctIndex: 1,
      explanation: "A szegedi dóm leírása szerint a kéttornyú, neoromán Fogadalmi templomot az 1879-es nagy szegedi árvíz után, a város újjáépítésekor, fogadalomból emelték.",
      regionSlug: "del-alfold",
      latvId: 51,
      latvName: "Szegedi Dóm (Fogadalmi templom)"
    },
    {
      id: "del-alfold-02",
      question: "Melyik 20. század eleji építészeti irányzat pompás, virág- és szívmotívumokkal díszített alkotása a kecskeméti Cifrapalota az atlasz szerint?",
      answers: [
        "A barokk",
        "A neoreneszánsz",
        "A magyar szecesszió",
        "A románkori építészet"
      ],
      correctIndex: 2,
      explanation: "A Cifrapalota leírása szerint az 1902-ben, Márkus Géza tervei alapján emelt, Zsolnay-majolikával borított épület a magyar szecesszió egyik legpompásabb alkotása.",
      regionSlug: "del-alfold",
      latvId: 52,
      latvName: "Kecskemét – Cifrapalota"
    },
    {
      id: "del-alfold-03",
      question: "Melyik állítás IGAZ a szegedi Új Zsinagógáról az atlasz leírása alapján?",
      answers: [
        "A középkorban, gótikus stílusban épült, eredetileg keresztény templomnak",
        "Ma már nem működő épület, kizárólag múzeumként látogatható",
        "Ybl Miklós tervei alapján, neoromán stílusban épült",
        "Magyarország második legnagyobb zsinagógája, a magyar szecesszió kiemelkedő alkotása"
      ],
      correctIndex: 3,
      explanation: "A leírás szerint az 1903-ban, Baumhorn Lipót tervei alapján emelt Új Zsinagóga Magyarország második legnagyobb zsinagógája, a magyar szecesszió kiemelkedő, ma is működő alkotása.",
      regionSlug: "del-alfold",
      latvId: 134,
      latvName: "Szegedi Új Zsinagóga"
    },
    {
      id: "del-alfold-04",
      question: "Mit ábrázol az Ópusztaszeri Nemzeti Történeti Emlékpark fő látványossága, a monumentális Feszty-körkép az atlasz szerint?",
      answers: [
        "A magyarok bejövetelét, vagyis a honfoglalást",
        "Az 1848–49-es szabadságharc csatáit",
        "A mohácsi csata tragédiáját",
        "Szent István államalapítását és koronázását"
      ],
      correctIndex: 0,
      explanation: "A Feszty-körkép Feszty Árpád 120 méter hosszú és 15 méter magas festménye, amely a magyarok bejövetelét, a honfoglalás drámáját ábrázolja.",
      regionSlug: "del-alfold",
      latvId: 53,
      latvName: "Ópusztaszeri Nemzeti Történeti Emlékpark"
    },
    {
      id: "del-alfold-05",
      question: "Melyik állítás IGAZ a gyulai várról az atlasz leírása alapján?",
      answers: [
        "Magyarország legmagasabban fekvő hegyi vára",
        "A 19. században, romantikus stílusban épült kastélyvár",
        "Közép-Európa egyetlen épségben fennmaradt síkvidéki téglavára",
        "A hódoltság idején sosem került török kézre"
      ],
      correctIndex: 2,
      explanation: "A gyulai vár leírása szerint Közép-Európa egyetlen épségben fennmaradt síkvidéki téglavára; a 15. században, gótikus stílusban épült, és a törökök csak hosszú ostrom után tudták elfoglalni.",
      regionSlug: "del-alfold",
      latvId: 54,
      latvName: "Gyulai vár"
    },
    {
      id: "del-alfold-06",
      question: "Mi a Kiskunsági Nemzeti Park bugaci területének fő turisztikai vonzereje az atlasz szerint?",
      answers: [
        "Cseppkőbarlangok és földalatti tavak hálózata",
        "A pusztai pásztorhagyomány és a csikósok látványos lovasbemutatói",
        "Bazaltorgonás tanúhegyek és híres borvidék",
        "Tengerszint alatti karsztforrásra épülő termálfürdő"
      ],
      correctIndex: 1,
      explanation: "Bugac leírása szerint a homokpuszta a magyar pásztorhagyomány élő színtere, ahol a csikósok látványos lovasprodukciói – köztük a híres ötös fogat – elevenítik fel a pásztorkultúrát.",
      regionSlug: "del-alfold",
      latvId: 55,
      latvName: "Kiskunsági Nemzeti Park – Bugac"
    },
    {
      id: "del-alfold-07",
      question: "Mi teszi különlegessé a kiskunhalasi Csipkeházban bemutatott halasi csipkét, ezt a magyar hungarikumot az atlasz szerint?",
      answers: [
        "Géppel, nagyüzemi tömeggyártással készül",
        "Kizárólag a 21. században kifejlesztett, gépi technikával állítják elő",
        "Kézzel, varrott technikával, finom öltésekből készül, és géppel nem utánozható",
        "Fémszálból szőtt, festett kelme, amely néhány óra alatt elkészül"
      ],
      correctIndex: 2,
      explanation: "A leírás szerint a halasi csipke különlegessége, hogy varrott technikával, kézzel, rendkívül finom öltésekből készül, géppel nem utánozható, és egy-egy darab hetekig, akár hónapokig készül.",
      regionSlug: "del-alfold",
      latvId: 133,
      latvName: "Kiskunhalas – Csipkeház"
    },
    {
      id: "del-alfold-08",
      question: "Mi a fő különbség a gyulai Almásy-kastély és a szabadkígyósi Wenckheim-kastély atlaszbeli bemutatása között?",
      answers: [
        "Mindkettő középkori, gótikus stílusú végvár volt",
        "A gyulai Almásy-kastély barokk, modern interaktív látogatóközpont, a szabadkígyósi Wenckheim-kastély Ybl Miklós tervezte neoreneszánsz főúri rezidencia",
        "A gyulai Almásy-kastélyt Ybl Miklós tervezte, a szabadkígyósi Wenckheim-kastély ma gyógyfürdőként működik",
        "Mindkettő ma a Munkácsy-gyűjteménynek ad otthont"
      ],
      correctIndex: 1,
      explanation: "A gyulai Almásy-kastély 18. századi barokk rezidencia, amely 2018 óta modern, interaktív látogatóközpontként működik, míg a szabadkígyósi Wenckheim-kastélyt Ybl Miklós tervezte neoreneszánsz stílusban a Wenckheim grófi család számára.",
      regionSlug: "del-alfold",
      latvId: 137,
      latvName: "Gyulai Almásy-kastély"
    },
    {
      id: "del-alfold-09",
      question: "Melyik magyar költő szülőháza és emlékmúzeuma látogatható az atlasz szerint Kiskőrösön?",
      answers: [
        "Arany János",
        "József Attila",
        "Petőfi Sándor",
        "Vörösmarty Mihály"
      ],
      correctIndex: 2,
      explanation: "A kiskőrösi, nádtetős parasztházban született 1823-ban Petőfi Sándor, a magyar romantika és a forradalmi líra legnagyobb költője.",
      regionSlug: "del-alfold",
      latvId: 131,
      latvName: "Kiskőrös – Petőfi Sándor szülőháza"
    },
    {
      id: "del-alfold-10",
      question: "Az atlasz szerint melyik építész nevéhez fűződik a makói Hagymatikum, a magyar organikus építészet egyik legismertebb alkotása?",
      answers: [
        "Ybl Miklós",
        "Lechner Ödön",
        "Baumhorn Lipót",
        "Makovecz Imre"
      ],
      correctIndex: 3,
      explanation: "A Hagymatikum leírása szerint a 2012-ben átadott gyógyfürdőt Makovecz Imre, a magyar organikus építészet legnagyobb mestere tervezte.",
      regionSlug: "del-alfold",
      latvId: 135,
      latvName: "Makói Hagymatikum"
    }
  ]
};

function kvizKerdesek(slug){
  return (KVIZ_QUESTIONS[slug]||[]).slice();
}

window.KVIZ_QUESTIONS = KVIZ_QUESTIONS;
window.kvizKerdesek = kvizKerdesek;
