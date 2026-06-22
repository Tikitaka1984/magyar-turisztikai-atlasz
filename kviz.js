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
  ]
};

function kvizKerdesek(slug){
  return (KVIZ_QUESTIONS[slug]||[]).slice();
}

window.KVIZ_QUESTIONS = KVIZ_QUESTIONS;
window.kvizKerdesek = kvizKerdesek;
