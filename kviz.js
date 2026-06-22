/* ════════════════════════════════════════════════════════════
   MAGYAR TURISZTIKAI ATLASZ — PILOT KVÍZMODUL
   Statikus, kézzel szerkesztett kérdésbank tanórai használathoz.
   ════════════════════════════════════════════════════════════ */

const KVIZ_QUESTIONS = {
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
  ]
};

function kvizKerdesek(slug){
  return (KVIZ_QUESTIONS[slug]||[]).slice();
}
