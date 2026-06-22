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
  ]
};

function kvizKerdesek(slug){
  return (KVIZ_QUESTIONS[slug]||[]).slice();
}

window.KVIZ_QUESTIONS = KVIZ_QUESTIONS;
window.kvizKerdesek = kvizKerdesek;
