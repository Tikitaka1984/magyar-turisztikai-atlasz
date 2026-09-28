/* English translation layer. Shared identifiers and geographic data remain in adatok.js/kviz.js. */
const UI_TEXT = {
  hu: {
    attractionCard: "adatlapjának megnyitása",
    regionCard: "régió megnyitása",
    didYouKnowLabel: "Tudtad-e érdekesség",
    bestScore: "Eddigi legjobb eredményed ebben a régióban:",
    printableSheet: "Magyar Turisztikai Atlasz · Nyomtatható tananyaglap",
    printSummary: "13. évfolyam, turisztikai technikus képzés",
    printFooter: "Forrás: turisztikai tankönyvi tényadatok alapján, saját oktatási célú megfogalmazásban · Térkép: OpenStreetMap.",
    nonprofitMaterial: "Magyar Turisztikai Atlasz — oktatási célú, nonprofit tananyag",
    prepared: "Készült", quizBankRandom: "Minden indításkor 5 véletlen kérdés a kérdésbankból.",
    quizBankAvailable: "kérdéses kvíz érhető el ehhez a régióhoz.", quizBankSoon: "Ehhez a régióhoz még készül a kérdésbank.",
    quizBankUnavailable: "Ehhez a régióhoz még nincs elérhető kérdésbank. Válassz egy aktív kvízrégiót.",
    startQuiz: "Kvíz indítása", comingSoon: "Készül", pilotQuiz: "Pilot kvízmodul",
    chooseQuizRegion: "Válassz kvízrégiót", quizIntro: "Válassz az aktív régiós kérdésbankok közül. A kvíz nem ment eredményt, nincs időmérő, és billentyűzettel is használható.",
    backToAtlas: "Vissza az atlaszhoz", chooseOtherRegion: "Másik régió választása", question: "kérdés", quizLabel: "kvíz",
    correct: "Helyes válasz.", incorrect: "Hibás válasz.", correctAnswer: "A helyes válasz:", nextQuestion: "Következő kérdés",
    quizComplete: "Kvíz vége", score: "Pontszám:", restart: "Újrakezdés",
    mapLoadError: "A térkép nem tölthető be.", mapLoadHelp: "Nyisd meg a fájlt webszerveren keresztül (Netlify Drop vagy python3 -m http.server), ne dupla kattintással."
  },
  en: {
    appTitle: "Hungarian Tourism Atlas",
    home: "Home", regions: "Regions", quiz: "Quiz", all: "All",
    castle: "Castle", palace: "Palace", museum: "Museum", religious: "Religious",
    spa: "Spa", nature: "Nature", heritage: "Heritage", other: "Other",
    imageLoading: "Loading image", imageUnavailable: "Image unavailable",
    attractionImage: "Image of the attraction", closeSheet: "Close information sheet",
    closeModal: "Close modal dialog", theme: "Switch light and dark theme",
    language: "Language selection", enter: "Open", attractions: "attractions",
    county: "County", openingHours: "Opening hours", access: "Getting there",
    source: "Source", region: "region", didYouKnow: "Did you know?",
    attractionCard: "Open information sheet for", regionCard: "Open region",
    didYouKnowLabel: "Did you know fact", bestScore: "Your best score in this region:",
    printableSheet: "Hungarian Tourism Atlas · Printable learning sheet",
    printSummary: "Grade 13 Tourism Technician programme",
    printFooter: "Source: original educational wording based on tourism textbook facts · Map: OpenStreetMap.",
    nonprofitMaterial: "Hungarian Tourism Atlas — nonprofit educational material", prepared: "Prepared",
    quizBankRandom: "Each attempt draws 5 random questions from the question bank.",
    quizBankAvailable: "questions are available for this region.", quizBankSoon: "The question bank for this region is being prepared.",
    quizBankUnavailable: "No question bank is available for this region yet. Choose a region with an active quiz.",
    startQuiz: "Start quiz", comingSoon: "Coming soon", pilotQuiz: "Pilot quiz module",
    chooseQuizRegion: "Choose a quiz region", quizIntro: "Choose one of the available regional question banks. Results are not saved, there is no timer, and the quiz is keyboard accessible.",
    backToAtlas: "Back to the atlas", chooseOtherRegion: "Choose another region", question: "question", quizLabel: "quiz",
    correct: "Correct answer.", incorrect: "Incorrect answer.", correctAnswer: "The correct answer is:", nextQuestion: "Next question",
    quizComplete: "Quiz complete", score: "Score:", restart: "Restart",
    mapLoadError: "The map could not be loaded.", mapLoadHelp: "Open the site through a web server (for example GitHub Pages), rather than by double-clicking the file.",
    mapUnavailable: "The map could not be loaded.",
    mapHelp: "Open the site through a web server (for example GitHub Pages), rather than by double-clicking the file.",
    footer: "Hungarian Tourism Atlas — free educational material for Grade 13 Tourism Technician students.",
    footerContent: "Content: based on tourism textbook facts and presented in original wording for educational use.",
    footerSources: "Map: OpenStreetMap · Images: Wikimedia / Wikipedia, subject to the licence terms of each image.",
    footerCopyright: "© 2026 — nonprofit educational project."
  }
};

const EN_TRANSLATIONS = {
  "regions": {
    "budapest": {
      "nev": "Budapest and the Central Danube Region",
      "rovid": "Budapest–Central Danube",
      "sav": "World Heritage · Danube Bend",
      "leiras": "The world-famous heritage of the capital and the Danube Bend: Buda Castle, the Parliament Building, Visegrád, Esztergom and Gödöllő.",
      "termeszetfoldrajz": "The region is dominated by the middle section of the Danube. Between Vác and Visegrád, the river is confined by mountains in the picturesque Danube Bend and turns almost at a right angle towards the south, before continuing through Budapest as a broad urban river. To the west rise the Buda Hills and the karstic Pilis, limestone and dolomite blocks belonging to the Transdanubian Mountains; the Pilis reaches its highest point at Pilis-tető (756 m). To the east stand the volcanic Visegrád Mountains, built of andesite, and the southern foothills of the Börzsöny, facing the opposite bank. In the Buda Hills, the dissolving action of lukewarm karst water formed hydrothermal caves, including the Pál-völgy and Szemlő-hegy caves. The flat alluvial terraces of Pest, the Buda hills and the loess-covered Gödöllő Hills to the north-east meet along the river; below the capital, the Danube encloses Csepel Island. A natural feature of the region is the Buda thermal line: lukewarm and hot karst springs emerging along faults in the hills feed Budapest’s renowned medicinal baths. The Danube Bend is also one of the river’s narrowest and most spectacular passages through the Carpathian Basin."
    },
    "eszak-magyarorszag": {
      "nev": "Northern Hungary",
      "rovid": "Northern Hungary",
      "sav": "Wine Regions · Castles",
      "leiras": "Eger, Tokaj-Hegyalja, Hollókő and Aggtelek: wine regions, castles and UNESCO heritage between the Bükk and Mátra mountains.",
      "termeszetfoldrajz": "The landscape is shaped by the west-to-east ranges of the North Hungarian Mountains: the Cserhát, Mátra, Bükk, Cserehát and Zemplén Mountains. Hungary’s highest point, Kékes (1,014 m), rises in the Mátra, while the plateau-like Bükk has limestone plateaus above 900 metres. The Mátra and Zemplén are volcanic and consist of andesite and rhyolite tuff, whereas the Bükk and Aggtelek Karst consist of limestone and contain rich surface and underground karst features. The jewel of the latter’s World Heritage cave system is the more than 25-kilometre-long Baradla Cave, which is rich in dripstone formations. The Sajó, Hernád, Bodrog and Zagyva rivers carry mountain waters south towards the Tisza, while loess-covered basins and hills flank the foothills. Volcanic soils, sunny southern slopes and distinctive microclimates have made the Tokaj and Eger wine regions famous. The Zemplén Mountains and Aggtelek Karst are among Hungary’s least developed and most natural landscapes."
    },
    "eszak-alfold": {
      "nev": "Northern Great Plain",
      "rovid": "Northern Great Plain",
      "sav": "Puszta · Medicinal Spas",
      "leiras": "Debrecen, Hortobágy and Nyíregyháza: a historic burgher city, a World Heritage puszta and medicinal spas.",
      "termeszetfoldrajz": "The region lies entirely on the low, flat Great Plain, mostly 80–130 metres above sea level, and its terrain is barely dissected. Its characteristic landscapes include the saline Hortobágy, the wind-shaped sand dunes of the Nyírség and the fertile loess soils of the Hajdúság and Nagykunság. Its main river is the winding Tisza, joined by the Bodrog, Sajó, Kraszna and Berettyó; before nineteenth-century river regulation, extensive floodplains, marshes and wetlands covered the area. Hortobágy is one of Europe’s largest continuous natural grasslands, known for its vast pastures, saline lakes and frequent summer mirages. Numerous oxbow lakes remain after regulation. Hot thermal water from deep underground supplies medicinal spas including Hajdúszoboszló and Debrecen. The region is one of Hungary’s driest areas and has a continental climate."
    },
    "tisza-to": {
      "nev": "Lake Tisza",
      "rovid": "Lake Tisza",
      "sav": "Wetlands · Water Sports",
      "leiras": "Hungary’s largest artificial lake: water tourism, an ecocentre and birdlife.",
      "termeszetfoldrajz": "Lake Tisza is Hungary’s largest artificial body of standing water and its second-largest lake after Lake Balaton. It was created by the dam commissioned at Kisköre in 1973. The lake lies in the middle of the flat Great Plain, where the Heves Plain meets the Borsod Floodplain; it covers approximately 127 km² and has an average depth of only around 1–2 metres. The Tisza continuously supplies and renews its water, while extensive reed beds, oxbows, shallow bays and marsh habitats line its shores. Willow-covered islands and floating marshes divide the water into a mosaic resembling a vast floodplain rather than a single open lake. Its shallow, slowly warming water supports one of Central Europe’s richest bird populations, and a large part of the lake—the Tiszavalk Basin—is a strictly protected bird reserve. Great egrets, white-tailed eagles and several heron species nest or migrate here. The area is a major Hungarian centre for water sports, angling and ecotourism."
    },
    "del-alfold": {
      "nev": "Southern Great Plain",
      "rovid": "Southern Great Plain",
      "sav": "Art Nouveau · Puszta",
      "leiras": "Szeged, Kecskemét and Ópusztaszer: Art Nouveau, a historical memorial park and the puszta.",
      "termeszetfoldrajz": "The region occupies the southern Great Plain between the Danube and Tisza, with the sandy ridge of the Danube–Tisza Interfluve between them. Wind-shaped sand dunes and mounds, together with saline lakes hidden among them—including the saline waters of the Kiskunság—characterise this ridge. To the east are the fertile loess plains of the Tisza, Maros and Körös rivers, among Hungary’s most important arable landscapes. Hungary’s lowest point, about 78 metres above sea level, lies near Gyálarét by Szeged. This is among the country’s sunniest and driest landscapes and has some of its hottest summers, with up to 2,000 hours of sunshine a year. The stabilisation and agricultural cultivation of the sand and loess ridges—with orchards, vineyards and arable fields—also define the landscape. Abundant underground thermal water supports spa towns including Szeged, Gyula and Kecskemét."
    },
    "kozep-dunantul": {
      "nev": "Central Transdanubia",
      "rovid": "Central Transdanubia",
      "sav": "Royal Cities · Porcelain",
      "leiras": "Székesfehérvár, Veszprém, Tata and Herend: royal cities, castles and porcelain art.",
      "termeszetfoldrajz": "The core of the region is formed by the north-east to south-west ranges of the Transdanubian Mountains: the Bakony, Vértes, Gerecse and Velence Mountains. Most are limestone and dolomite fault blocks rich in karst features, caves, sinkholes and springs, separated by tectonic trenches such as the Mór Gap. In contrast, the Velence Mountains are a rare Hungarian granite landscape with rounded boulders and rocking stones. The highest summit is Kőris-hegy (709 m) in the Bakony. The mountains are bordered to the north by the Danube and the plains between Tata and Székesfehérvár, and to the south by shallow, reed-fringed Lake Velence. Besides the Danube, the Séd, Gaja and Által-ér drain the mountains. Karst springs and thermal waters around places such as Tata and Székesfehérvár feed numerous baths and lakes."
    },
    "balaton": {
      "nev": "Lake Balaton Region",
      "rovid": "Lake Balaton",
      "sav": "Lake Country · Wine and Spas",
      "leiras": "Central Europe’s largest lake: Tihany, Keszthely, Hévíz and Badacsony, with wine and water tourism.",
      "termeszetfoldrajz": "The region takes its name from Lake Balaton, Central Europe’s largest lake. It covers nearly 600 km², is about 77 kilometres long and averages only around 3 metres in depth, making it one of the world’s largest shallow lakes. Its basin lies in a young trench formed by subsidence between the Balaton Uplands and the gently rolling southern shore of Somogy. Basalt witness hills—including Badacsony, Szent György-hegy, Csobánc and Gulács—line the northern shore as eroded remnants of former volcanic activity. The extinct geyser cones, two inner lakes—Belső-tó and Külső-tó—and basalt-tuff landscape of the Tihany Peninsula are geological rarities. Lake Hévíz on the western shore is one of the world’s largest biologically active natural thermal lakes, and its lukewarm water does not cool completely even in winter. The Zala brings most water into Balaton from the south-west after its water is filtered and purified through the marshes and bird habitats of Kis-Balaton. The shallow water warms quickly, making the lake a leading destination for bathing, sailing and water tourism."
    },
    "nyugat-dunantul": {
      "nev": "Western Transdanubia",
      "rovid": "Western Transdanubia",
      "sav": "UNESCO Lake Landscape · Urban History",
      "leiras": "Pannonhalma, Sopron, Kőszeg and Lake Fertő: ancient urban heritage and a UNESCO lake landscape.",
      "termeszetfoldrajz": "The northern region includes the flat, gravelly alluvial Little Hungarian Plain, while its western edge is formed by the West Hungarian Borderland, or Alpokalja, belonging to the eastern foothills of the Alps. Írott-kő (882 m) in the Kőszeg Mountains is the highest point of Transdanubia. The Rába, Rábca, Répce, Lapincs and Zala are its main rivers, while the Danube created the gravelly, branching island world of Szigetköz in Hungary’s north-western corner. Shallow, steppe-like Lake Fertő, fringed by extensive reed beds, is one of Europe’s westernmost saline lakes and its level varies strongly with the weather. Adjoining it is the Hanság, a largely drained former bogland that once connected Lake Fertő with the Little Hungarian Plain as a continuous marsh. The wooded, small-village hills of the Őrség and Vasi-hegyhát occupy the south-west. Owing to the nearby Alps, the western borderland is among Hungary’s wettest, coolest and greenest areas."
    },
    "del-dunantul": {
      "nev": "Southern Transdanubia",
      "rovid": "Southern Transdanubia",
      "sav": "Mediterranean Heritage · Thermal Spas",
      "leiras": "Pécs, Villány and Siklós: a Mediterranean atmosphere, Early Christian World Heritage and thermal tourism.",
      "termeszetfoldrajz": "Most of the region consists of the loess-covered landscapes of the Transdanubian Hills, divided by broad parallel valleys: the Somogy, Tolna and Baranya Hills and the wooded Zselic with its deep valleys. Two island-like mountain ranges rise from these hills in Hungary’s southern, Mediterranean-influenced region: the block-like Mecsek, whose highest point is Zengő (682 m), and the smaller Villány Mountains, known for their warm slopes. The Dráva borders the west and south and the Danube the east; both formed broad floodplains that were once marshy and remain interspersed with gallery forests. Caves, karst springs and sinkholes occur in the limestone Mecsek, while sub-Mediterranean vegetation, including sweet-chestnut groves, grows on its southern slopes. The sunny climate, milder winters and long autumns favour grape and fruit growing, especially in the Villány and Szekszárd wine regions. Lakes and reservoirs of various sizes, including the Orfű lakes, lie among the hills. This is one of Hungary’s most wooded and topographically varied regions."
    }
  },
  "attractions": {
    "1": {
      "nev": "Buda Castle and Castle District",
      "rovid": "The former seat of the Kingdom of Hungary, a UNESCO World Heritage Site on Castle Hill.",
      "reszletes": "The fortress and palace complex rising on Castle Hill is one of the most important sites in Hungarian history and, together with the historic Buda Castle District, has been a UNESCO World Heritage Site since 1987. The royal residence was developed after the 13th-century Mongol invasion and served as the seat of the Hungarian monarchs during the Middle Ages; it reached its zenith as a Renaissance court under King Matthias Corvinus. The building was severely damaged when the Ottomans entered in 1541 and during the siege that recaptured it in 1686; the present Baroque and Neoclassical palace is the result of reconstruction carried out in the 18th and 19th centuries. It was reduced to ruins again during the Second World War, and its restoration took decades. Today the Castle District houses numerous public collections, including the Hungarian National Gallery and the Budapest History Museum, and offers one of the finest views of the Danube and the Pest panorama. Together, the cobbled streets, Matthias Church and Fisherman’s Bastion evoke the atmosphere of medieval Buda.",
      "info": {
        "nyitvatartas": "Castle District open all day; museums Tue–Sun 10am–6pm",
        "megkozelites": "The Castle District can be reached on foot from Várfok utca; the Buda Castle Funicular runs up from Clark Ádám tér, while buses 16A and 116 serve the castle from Széll Kálmán tér."
      }
    },
    "2": {
      "nev": "Hungarian Parliament Building",
      "rovid": "One of Europe’s largest parliament buildings, an outstanding work of Historicism and a symbol of Budapest.",
      "reszletes": "The Hungarian Parliament Building is Budapest’s best-known building and a symbol of the entire country. Designed by Imre Steindl, it was built in the Gothic Revival style between 1885 and 1904. The 96-metre-high dome of the 271-metre-long building deliberately refers to the millennium of 1896 and the foundation of the Hungarian state. The building contains 691 rooms, nearly 20 kilometres of stairways and richly decorated interiors combining Gothic, Renaissance and Baroque elements. The Holy Crown and the coronation regalia are kept in the central Dome Hall, guarded by a military guard of honour. The building stands on Kossuth Lajos tér, directly on the bank of the Danube, and presents a particularly spectacular overall view from the river, forming part of the World Heritage panorama along the Danube. The Parliament Building may be visited on a guided tour with advance booking.",
      "info": {
        "nyitvatartas": "By guided tour with advance booking",
        "megkozelites": "Located on Kossuth Lajos tér; accessible by the M2 (red) metro line to Kossuth Lajos tér or by tram 2 along the Danube."
      }
    },
    "3": {
      "nev": "Matthias Church",
      "rovid": "The coronation church of Hungarian kings in the Castle District, restored by Frigyes Schulek.",
      "reszletes": "Officially known as the Church of Our Lady of Buda Castle, this is the most prominent church in the Castle District, with origins dating back to the 13th century. It is named after King Matthias Corvinus, who held his weddings here and also had its southern tower enlarged. It was converted into a mosque during the Ottoman occupation, before an extensive late-19th-century restoration by Frigyes Schulek restored—and even enhanced—its medieval Gothic Revival character in a Romantic spirit. Its colourful roof of Zsolnay tiles and richly painted interior walls make it an outstanding work of Hungarian Historicism. Several Hungarian monarchs were crowned within its walls, including Franz Joseph I and Charles IV. Today, alongside its religious role, it also hosts classical music concerts and the Collection of Ecclesiastical Art.",
      "info": {
        "megkozelites": "In the Castle District by Szentháromság tér; accessible from Széll Kálmán tér by bus 16A or 116, or on foot from within the castle."
      }
    },
    "4": {
      "nev": "Fisherman’s Bastion",
      "rovid": "A Romanesque Revival viewing terrace on Castle Hill, overlooking the Danube and the Pest panorama.",
      "reszletes": "Fisherman’s Bastion is a series of ornamental Romanesque Revival terraces extending along the eastern edge of Castle Hill, overlooking the Danube. Designed by Frigyes Schulek, it was built between 1895 and 1902 in connection with the reconstruction of Matthias Church. It is not a defensive fortification: from the outset it served as a lookout and promenade, offering an unparalleled panorama of the Danube, the Parliament Building and the Pest side. Its seven conical towers symbolise the seven Hungarian tribes that settled in the Carpathian Basin, while its white limestone walls evoke the atmosphere of medieval castle walls. It takes its name from the medieval fishermen’s guild, whose members were traditionally responsible for defending this section of the castle. Most of the terraces may be visited free of charge, while seasonal admission fees apply to the upper viewing levels. Today it is one of Budapest’s most popular photographic subjects and meeting places.",
      "info": {
        "megkozelites": "In the Castle District by Szentháromság tér; accessible from Széll Kálmán tér by bus 16A or 116, or on foot from within the castle."
      }
    },
    "5": {
      "nev": "Széchenyi Thermal Bath",
      "rovid": "One of Europe’s largest thermal baths, housed in a Neo-Baroque complex in Városliget.",
      "reszletes": "Széchenyi Thermal Bath operates in a monumental Neo-Baroque complex in Városliget and is one of Europe’s largest thermal baths. It opened in 1913 after exploratory drilling brought thermal water at 74–77°C to the surface from beneath Városliget. Its eighteen indoor pools and three large outdoor pools operate throughout the year; guests playing chess in the steaming water in winter are among the bath’s iconic images. Its medicinal water, containing sulphur, calcium, magnesium and bicarbonate, is recommended primarily for musculoskeletal and joint conditions. The bath’s sauna complex, steam rooms and massage services make it one of the centres of Hungarian health tourism. It receives several million Hungarian and international visitors each year.",
      "info": {
        "nyitvatartas": "Daily 6am–10pm",
        "megkozelites": "In Városliget; by the Széchenyi fürdő station on the M1 Millennium Underground."
      }
    },
    "6": {
      "nev": "Gellért Baths and Hotel",
      "rovid": "An Art Nouveau thermal bath and hotel at the foot of Gellért Hill.",
      "reszletes": "Gellért Thermal Baths and Hotel stands at the foot of Gellért Hill, by the Buda end of Liberty Bridge, and is one of Budapest’s best-known Art Nouveau buildings. It opened in 1918; its interiors are adorned with stained-glass windows, mosaic floors, ornate columns and statues. Its water is supplied by thermal springs of around 44°C rising from deep within Gellért Hill and is recommended for musculoskeletal and circulatory conditions. The complex comprises thirteen pools, steam rooms, a whirlpool bath and the famous outdoor wave pool. The adjoining hotel is a reminder of early-20th-century spa culture. The baths are one of the most valuable sites along Buda’s thermal spring line.",
      "info": {
        "nyitvatartas": "Daily 6am–8pm",
        "megkozelites": "By Szent Gellért tér; accessible by trams 19, 41, 47 and 49, and via Szent Gellért tér station on metro line M4."
      }
    },
    "7": {
      "nev": "Hungarian National Museum",
      "rovid": "The country’s oldest and largest public collection, housed in Mihály Pollack’s Neoclassical building.",
      "reszletes": "The Hungarian National Museum is the country’s oldest and largest public collection. It was founded in 1802 by Count Ferenc Széchényi through the donation of his own collection of books and coins. The Neoclassical building was constructed to designs by Mihály Pollack between 1837 and 1847 and is one of the masterpieces of Hungarian Reform Era architecture. Its permanent exhibitions present the archaeological heritage of the Carpathian Basin from the Stone Age to the Hungarian conquest, as well as the history of the Kingdom of Hungary. Its collection also includes important national relics. Its front steps are an emblematic site of the revolution of 15 March 1848, where tradition holds that Sándor Petőfi recited the National Song. The institution continues to play a prominent role in preserving national memory.",
      "info": {
        "nyitvatartas": "Tue–Sun 10am–6pm",
        "megkozelites": "On Múzeum körút; by Kálvin tér station on metro lines M3 and M4, and by trams 47 and 49."
      }
    },
    "8": {
      "nev": "Heroes’ Square",
      "rovid": "A monumental square created for the millennium of the Hungarian conquest in 1896, with a colonnade of chieftains.",
      "reszletes": "Heroes’ Square is one of Budapest’s most monumental squares. It was created as the central venue for the 1896 millennium celebrations marking the thousandth anniversary of the Hungarian conquest. At its centre stands the 36-metre-high column of the Millennium Monument, topped by a statue of the Archangel Gabriel holding the Holy Crown and the apostolic double cross. At the base of the column are equestrian statues of the seven chieftains who led the conquest, while the curving double colonnade behind it contains statues of prominent Hungarian rulers and historical figures. The square is framed by two major cultural institutions, the Museum of Fine Arts and the Kunsthalle, with Városliget extending behind it. The square is one of the most important symbolic sites of Hungarian historical memory and hosts national celebrations and commemorations. Since 2002 it has formed part of the UNESCO World Heritage Site together with the banks of the Danube and the Castle District.",
      "info": {
        "megkozelites": "At the entrance to Városliget; by Hősök tere station on the M1 Millennium Underground, or by trolleybuses 75 and 79."
      }
    },
    "9": {
      "nev": "Visegrád Royal Palace and Citadel",
      "rovid": "The medieval royal residence of the Angevins and Matthias Corvinus in the Danube Bend.",
      "reszletes": "Visegrád is one of the most important historical and tourist destinations in the Danube Bend, made memorable by the combination of its hilltop citadel and riverside royal palace. The citadel was built under Béla IV after the Mongol invasion of the 13th century and long served as the repository of the Holy Crown. The lower royal palace was built by the Angevin monarchs and was later transformed, particularly by Matthias Corvinus, into a magnificent Renaissance residence in the 15th century; it was also the venue of the 1335 Congress of Visegrád. The Renaissance fountain and stone carvings decorating the palace courtyard are outstanding, partly reconstructed examples of the Hungarian Renaissance. The citadel offers superb views of the bend in the Danube and the Börzsöny Mountains opposite. The town is also popular for its annual medieval tournaments and palace games.",
      "info": {
        "nyitvatartas": "Tue–Sun 9:00–17:00",
        "megkozelites": "Direct Volánbus service from Újpest-Városkapu in Budapest, or by train from Nyugati railway station to Nagymaros-Visegrád, followed by the ferry across the Danube."
      }
    },
    "10": {
      "nev": "Esztergom Basilica",
      "rovid": "Hungary’s largest church and the national cathedral of the Catholic Church, standing on Castle Hill.",
      "reszletes": "Esztergom Cathedral (the Basilica) is Hungary’s largest church and the national centre of the Catholic Church, standing high above the Danube on Castle Hill. It was built in the Neoclassical style between 1822 and 1869 to designs by several architects, including János Packh and József Hild, on the site once occupied by the medieval archiepiscopal cathedral. Its dome is 71.5 metres high; the main altarpiece inside is one of the world’s largest copies on canvas of Titian’s painting of the Assumption of the Virgin. Archbishops and other ecclesiastical dignitaries lie in its crypt, while the Bakócz Chapel is a rare original example of Hungarian Renaissance architecture. The basilica is clearly visible from Slovakia across the Danube and from the heights around Visegrád. Esztergom is also one of the country’s oldest towns and was its first royal seat.",
      "info": {
        "nyitvatartas": "Daily 8:00–18:00",
        "megkozelites": "By train from Nyugati railway station in Budapest or by coach; Castle Hill can be reached on foot from the town centre."
      }
    },
    "11": {
      "nev": "Szentendre Open-Air Museum",
      "rovid": "The country’s largest open-air museum, featuring original rural buildings from ten regional areas.",
      "reszletes": "The Hungarian Open-Air Museum, or Skanzen, is Hungary’s largest open-air museum, presenting the country’s rural architectural heritage across an area of nearly fifty hectares on the outskirts of Szentendre. Founded in 1967, its regional sections contain original farmhouses, churches, mills and agricultural buildings from the 18th to the 20th centuries that were dismantled and rebuilt here. The furnished interiors and craft demonstrations bring Hungarian peasant and market-town life to life. A working narrow-gauge railway runs through the museum, which holds heritage events and programmes associated with folk festivals throughout the year. The Skanzen is both a scholarly collection and a visitor attraction, providing an excellent setting for education in ethnography. Szentendre itself is also a popular artists’ town with a Mediterranean atmosphere in its centre.",
      "info": {
        "nyitvatartas": "Tue–Sun 9:00–17:00",
        "megkozelites": "Take the H5 suburban railway from Batthyány tér in Budapest to Szentendre, then bus 7 to the museum entrance."
      }
    },
    "12": {
      "nev": "Danube–Ipoly National Park",
      "rovid": "A national park protecting the natural treasures of the Danube Bend, the Pilis and the Ipoly region.",
      "reszletes": "Danube–Ipoly National Park was established in 1997 and covers around 60,000 hectares encompassing the natural treasures of the Danube Bend, the Pilis, the Visegrád Mountains, the southern Börzsöny and the Ipoly region. The area’s geological diversity—including limestone mountains, peaks of volcanic origin and river valleys—supports rich flora and fauna, including numerous protected bird species. The Pilis is one of Hungary’s most frequently visited protected natural areas because it directly adjoins the Budapest conurbation. Established nature trails, hiking routes and popular viewpoints, such as Prédikálószék and Dobogókő, make it accessible to visitors. The park also includes several caves and springs that attract hikers and scientific researchers. Its visitor centres also support environmental education.",
      "info": {
        "megkozelites": "By car or local bus services; buses towards the Pilis and Dobogókő depart from Pomáz and from the direction of Esztergom, while the Danube Bend can also be reached by train."
      }
    },
    "13": {
      "nev": "Aquincum Museum",
      "rovid": "The archaeological park and museum of Roman Aquincum, a provincial capital of Pannonia.",
      "reszletes": "The Aquincum Museum and Archaeological Park in Óbuda introduces visitors to Aquincum, one of the capitals of the former Roman province of Pannonia. Flourishing from the 2nd century onwards, the town developed from the civilian settlement established beside the military camp and is one of Central Europe’s best-preserved Roman settlements. Visitors walking through the open-air archaeological park can see the streets, houses, baths, market square and sanctuaries of the civilian town. Inside the museum, mosaic floors, wall paintings, stone monuments and everyday objects illustrate the culture of its inhabitants. The nearby military amphitheatre was once one of the largest arenas in the empire. The site is one of Hungary’s foremost showcases of Roman heritage.",
      "info": {
        "nyitvatartas": "Tue–Sun 10:00–18:00 (Apr–Oct)",
        "megkozelites": "Via the interconnected Buda tram network, or by taking the H5 suburban railway from Batthyány tér and alighting at Aquincum."
      }
    },
    "14": {
      "nev": "Gödöllő Royal Palace",
      "rovid": "One of Central Europe’s largest Baroque palaces and the summer residence of Queen Elisabeth (Sisi).",
      "reszletes": "The Grassalkovich Palace in Gödöllő is one of Central Europe’s largest Baroque palace complexes. Its construction was begun by Antal Grassalkovich around 1741. The horseshoe-shaped building, complemented by an ornamental garden and Baroque theatre, became the Hungarian summer residence of the House of Habsburg in the 19th century. It became famous above all as a favourite residence of Queen Elisabeth (Sisi), who preferred to spend her time in Hungary here. The rooms in the restored main wing evoke the grand interiors of the age of Franz Joseph I and Elisabeth and the atmosphere of the Austro-Hungarian Monarchy. The palace park, riding hall and Baroque theatre provide venues for special programmes. The building now operates as a museum and cultural centre and is one of the outstanding monuments of Hungarian aristocratic architecture.",
      "info": {
        "nyitvatartas": "Daily 10:00–18:00",
        "megkozelites": "Take the H8 suburban railway from Örs vezér tere in Budapest to the Szabadság tér stop in Gödöllő, then walk for a few minutes."
      }
    },
    "15": {
      "nev": "Memento Park",
      "rovid": "An open-air collection of original public statues from the socialist era.",
      "reszletes": "Memento Park was established in Tétény, on the southern outskirts of Budapest, in 1993 to ensure that the socialist statues removed from public spaces after the change of political system were not destroyed but could instead be viewed within an interpretative framework. The open-air collection preserves around forty original statues and reliefs, including works depicting Lenin, Marx and Engels and the workers’ movement, as well as a reconstruction of the boots from the statue of Stalin toppled in 1956. The park does not glorify the period, but documents and critically presents the politics of memory associated with the 20th-century dictatorship. Its exhibitions also encompass artefacts of communist propaganda and the Cold War. It is at once an open-air museum, a setting for history lessons and an internationally known attraction. It provides important insights into 20th-century Hungarian history.",
      "info": {
        "nyitvatartas": "Daily 10:00–18:00",
        "megkozelites": "By direct bus from Kelenföld railway station, or by buses 101B and 150."
      }
    },
    "101": {
      "nev": "St Stephen’s Basilica",
      "rovid": "Budapest’s largest church and the repository of the Holy Right, St Stephen’s right hand.",
      "reszletes": "St Stephen’s Basilica is Budapest’s largest church and is named after St Stephen, the king who founded the Hungarian state. The imposing Neo-Renaissance and Neoclassical church was built between 1851 and 1905 with the involvement of three architects, including Miklós Ybl; its dome rises to 96 metres, the same height as the Hungarian Parliament Building. Its most treasured relic is the Holy Right, the mummified right hand of King St Stephen, which is kept in a separate chapel. Thanks to its excellent acoustics, the basilica hosts classical music concerts and organ recitals. The viewing gallery around its dome offers panoramic views over the city. The church is one of Budapest’s most important religious and tourist centres.",
      "info": {
        "megkozelites": "A few minutes’ walk from Deák Ferenc tér station on metro lines M1, M2 and M3, or from Arany János utca station on the M3; it stands on Szent István tér."
      }
    },
    "102": {
      "nev": "Dohány Street Synagogue",
      "rovid": "Europe’s largest and the world’s second-largest synagogue, dating from 1859.",
      "reszletes": "The Dohány Street Synagogue is Europe’s largest and the world’s second-largest synagogue, and the principal place of worship of Budapest’s Jewish community. Built between 1854 and 1859 in a Romantic Moorish style, the building has two onion-domed towers and a richly decorated façade; it seats around three thousand people. With its outstanding organ, the synagogue also hosts classical music concerts. Its courtyard contains a memorial to the victims of the Holocaust, including a metal weeping willow whose leaves bear the names of victims. The complex also includes the Hungarian Jewish Museum. The synagogue is an outstanding memorial to the history of Hungarian Jewry and Budapest’s religious heritage.",
      "info": {
        "megkozelites": "A few minutes’ walk from the Astoria or Deák Ferenc tér stations on the M2 metro line; it stands on Dohány Street."
      }
    },
    "103": {
      "nev": "Gellért Hill and the Citadella",
      "rovid": "A 235-metre hill rising above the Danube, crowned by the Citadella and the Liberty Statue.",
      "reszletes": "Gellért Hill is a 235-metre-high rocky hill rising on the right bank of the Danube, one of Budapest’s landmarks and an excellent viewpoint. It is named after Bishop Saint Gerard, who, according to tradition, was thrown to his death from the hill. At its summit stands the Citadella, a fortress built by the Austrians in 1854 after the suppression of the War of Independence, which served as a military control point. The Liberty Statue crowning the summit was erected at the end of the Second World War; the female figure holding a palm branch aloft is one of the city’s symbols. Walking paths, viewing terraces and the Garden of Philosophers await visitors on the hillside. Gellért Hill forms part of the World Heritage panorama along the Danube.",
      "info": {
        "megkozelites": "On the Buda side, it can be reached by footpaths from Szent Gellért tér or Móricz Zsigmond körtér; bus 27 runs close to the hill."
      }
    },
    "104": {
      "nev": "Gellért Hill Cave Church",
      "rovid": "A chapel of the Pauline Order carved into the rock of Gellért Hill, near Szent Gellért tér.",
      "reszletes": "The Cave Church is a distinctive church created within a natural cave in Gellért Hill, with its entrance near Szent Gellért tér. The chapel was established in 1926 by the Pauline Order—the only monastic order founded in Hungary—and modelled on Lourdes. During the communist period, the church was sealed off and the monks were taken away; after the change of regime, it was reopened and restored. The chambers and altars carved into the rock, together with the Pauline tradition, create a unique sacred atmosphere. Beside the church rises the neo-Gothic tower of the Pauline monastery. The Cave Church is one of Budapest’s most distinctive religious monuments.",
      "info": {
        "megkozelites": "At Szent Gellért tér, near the Gellért Baths; accessible by trams 19, 41, 47 and 49, as well as the M4 metro line."
      }
    },
    "105": {
      "nev": "Vajdahunyad Castle",
      "rovid": "A fairy-tale castle complex in Városliget showcasing Hungarian architectural styles.",
      "reszletes": "Vajdahunyad Castle is a picturesque group of buildings on the shore of the lake in Városliget, erected for the 1896 Millennium Exhibition. Originally built as a temporary structure, it proved so successful that it was rebuilt in permanent materials between 1904 and 1908. The complex presents different periods of Hungarian architecture: its Romanesque, Gothic, Renaissance and Baroque sections evoke notable buildings of historic Hungary, including Vajdahunyad Castle in Transylvania and the portal of the church at Ják. Today, the building houses the Hungarian Agricultural Museum, one of Europe’s largest agricultural museums. A statue of Anonymus, the unnamed chronicler, stands in its courtyard. The castle and the Városliget lake are popular places for walking, while in winter the lake serves as an ice rink.",
      "info": {
        "megkozelites": "A few minutes’ walk through Városliget from the Hősök tere or Széchenyi fürdő stations on the M1 Millennium Underground line."
      }
    },
    "106": {
      "nev": "Budapest Zoo and Botanical Garden",
      "rovid": "Hungary’s oldest zoo, opened in Városliget in 1866.",
      "reszletes": "Budapest Zoo and Botanical Garden is Hungary’s oldest and one of its most visited zoos, having opened in Városliget in 1866. The institution displays not only animals but also plants, with an extensive palm house and botanical collection. Its Art Nouveau buildings, including the Elephant House and the Bird House, are architecturally significant in their own right and were built in the early 20th century. The zoo plays a major role in the conservation and breeding of endangered species, as well as in conservation education. In recent years, the grounds have been expanded to include the neighbouring site of the former amusement park. Budapest Zoo is a popular venue for family recreation and education.",
      "info": {
        "megkozelites": "By the Széchenyi fürdő station on the M1 Millennium Underground line in Városliget; it can also be reached by trolleybus 72."
      }
    },
    "107": {
      "nev": "Rudas Baths",
      "rovid": "An original domed Ottoman-era steam bath dating from around 1550, at the foot of Gellért Hill.",
      "reszletes": "Rudas Baths is one of Budapest’s oldest and most valuable baths, centred on an original 16th-century Turkish bath. Beneath the dome of the octagonal steam bath, built around 1550 during Ottoman rule, visitors can still bathe in the original pool from the period of Turkish occupation, where light filtering through holes in the dome creates a distinctive atmosphere. The thermal water contains calcium, magnesium, hydrogen carbonate and sulphur, and is recommended for joint and musculoskeletal complaints. The baths have been extended several times over the centuries and now also include a modern wellness area and a panoramic hot tub overlooking the Danube. Rudas is an outstanding monument to Buda’s thermal spring belt and Hungary’s Ottoman heritage. On certain days the baths admit men only, while at other times they operate on a mixed-gender basis.",
      "info": {
        "megkozelites": "At Döbrentei tér, at the foot of Gellért Hill; accessible by buses 7 and 8, and trams 19 and 41."
      }
    },
    "108": {
      "nev": "Vác – Cathedral and Town Centre",
      "rovid": "A Baroque episcopal town in the Danube Bend, with a cathedral and Hungary’s only triumphal arch.",
      "reszletes": "Vác is a Baroque-style episcopal town on the left bank of the Danube Bend and has been an important ecclesiastical centre since the Middle Ages. Its main square, Konstantin tér, is home to Vác Cathedral, which was built in the late 18th century in the Neoclassical style and is one of the country’s earliest Neoclassical churches. A distinctive feature of the town is the Stone Gate, or Triumphal Arch, Hungary’s only triumphal arch, erected in 1764 for the visit of Maria Theresa. The colourful townhouses of the Baroque centre, the Church of the Whites and the Danube promenade are the town’s principal sights. Another notable attraction is the Memento Mori exhibition, which displays naturally mummified bodies discovered in the crypt of the Church of the Whites. The town is a popular stop on excursions through the Danube Bend.",
      "info": {
        "megkozelites": "Directly by train from Budapest’s Nyugati railway station, or by car via Main Road 2; it can also be reached by ferry across the Danube from the opposite bank."
      }
    },
    "109": {
      "nev": "Zsámbék Church Ruins",
      "rovid": "The imposing twin-towered ruins of a 13th-century Premonstratensian abbey church.",
      "reszletes": "The Zsámbék church ruins are one of the finest and most distinctive monuments of Romanesque architecture in Hungary, standing on a hill above Zsámbék, west of Buda. The twin-towered church was built for Premonstratensian monks in the first half of the 13th century, in the late Romanesque and early Gothic styles. The building fell into ruin in the great earthquake of the 18th century, but its imposing walls, twin towers and pointed-arch windows still stand, creating a picturesque sight. Its stone carvings and architectural details make the ruined church a valuable monument for the study of the Middle Ages. A lapidarium and exhibition nearby present the history of the church. The Zsámbék ruins are a popular destination for excursions and photography.",
      "info": {
        "megkozelites": "Zsámbék can be reached from Budapest by car or bus via a turn-off from Main Road 1; the church ruins stand above the centre of the settlement."
      }
    },
    "110": {
      "nev": "Esztergom Castle",
      "rovid": "The castle of Hungary’s first royal seat, on Castle Hill beside the Basilica.",
      "reszletes": "Esztergom Castle is one of the cradles of Hungarian statehood and was the first royal seat, standing on Castle Hill directly beside the Basilica. Saint Stephen was born and crowned here, and from the 10th to the 13th century the castle was the centre of the Kingdom of Hungary and the seat of its rulers and archbishops. During the Ottoman period it changed hands several times and was severely damaged; its walls and palace were largely destroyed in the sieges. During the archaeological excavations and restoration completed in 2008, the towers and halls of the medieval royal palace were also reconstructed. Today the castle houses the Castle Museum, which presents relics of medieval Esztergom and the royal court. Castle Hill offers magnificent views of the Danube and the Slovak bank opposite.",
      "info": {
        "megkozelites": "Castle Hill can be reached on foot from central Esztergom, beside the Basilica; the city is accessible from Budapest by train and coach."
      }
    },
    "211": {
      "nev": "Great Market Hall",
      "rovid": "Budapest’s largest covered market, an Art Nouveau symbol of commerce in the city centre.",
      "reszletes": "The Great Market Hall is the largest covered market in Budapest and indeed in Hungary. It was inaugurated in 1897 on Vámház körút, near Fővám tér. The imposing Art Nouveau and Romanesque Revival building was designed by Samu Pecz; its iron structure, roof decorated with Zsolnay tiles and vast interior are themselves of historic architectural value. As well as fresh fruit, vegetables, meat products and artisan specialities, the market sells Hungarikums such as paprika, salami, pálinka and garlic. The Great Market Hall is one of Budapest’s most popular destinations among international visitors, who can experience an authentic market atmosphere here. Its upper-floor gallery is home to eateries and vendors of traditional crafts.",
      "info": {
        "megkozelites": "A few steps from the Fővám tér stop on tram 2; the Fővám tér station on metro line M4 is also nearby."
      }
    },
    "212": {
      "nev": "Chain Bridge",
      "rovid": "A symbol of Budapest and the first permanent bridge across the Danube, opened in 1849.",
      "reszletes": "The Chain Bridge is Budapest’s best-known and most beautiful bridge. Opened in 1849, it was the first permanent bridge across the Danube in Hungary. It was designed by the English engineer William Tierney Clark and built under the supervision of the Scottish engineer Adam Clark. Initiated by István Széchenyi, the bridge became a symbol of the Reform Era and of the unification of the two parts of the city, Buda and Pest. Its entrances are guarded by stone lions which, according to legend, have no tongues. The Chain Bridge was blown up in 1849 as Austrian troops retreated and was rebuilt after 1849; it was destroyed again during the Second World War and reopened in 1949. Following its 2021–2023 renovation, it also reopened to pedestrians and cyclists.",
      "info": {
        "megkozelites": "The Chain Bridge links Buda’s Castle District with central Pest; it can also be crossed on foot between Clark Ádám tér and Roosevelt tér."
      }
    },
    "213": {
      "nev": "Hungarian Academy of Sciences",
      "rovid": "Hungary’s foremost scientific institution, founded by István Széchenyi and housed in a Neo-Renaissance palace.",
      "reszletes": "The Hungarian Academy of Sciences (MTA) is the foremost institution of Hungarian science and intellectual life. It was founded by István Széchenyi in 1825, when he offered one year’s income at the Diet in Pozsony to establish the academy. The Neo-Renaissance palace on the bank of the Danube was inaugurated in 1865; its façade and imposing ceremonial hall were designed as symbols of contemporary Hungarian scientific and cultural aspirations. The building also houses a library, an archive and a valuable art collection. Standing beside Széchenyi tér, the palace is one of the finest reminders of the culture of Pest-Buda during the Reform Era and a defining element of the Danube panorama.",
      "info": {
        "megkozelites": "On Roosevelt tér, a few minutes from the Chain Bridge; it is also within walking distance of Vörösmarty tér station on metro line M1."
      }
    },
    "21": {
      "nev": "Eger Castle",
      "rovid": "The legendary site of the defence against the Ottoman siege of 1552, associated with Captain István Dobó.",
      "reszletes": "Eger Castle is one of the best-known sites in Hungarian history, standing on a rocky hill above the city. It was made legendary by its triumphant defence in 1552, when a small garrison led by Captain István Dobó repelled the siege by a vastly superior Ottoman army, an event also commemorated in Géza Gárdonyi’s novel Eclipse of the Crescent Moon. The walls and casemates of the 16th-century border fortress, as well as the remains of its Gothic cathedral, can still be explored. The castle is home to the István Dobó Castle Museum, which presents the history of the border-fortress battles and the city. Its bastions offer attractive views of Baroque Eger, the minaret and the ranges of the Bükk Mountains. Eger Castle is one of Hungary’s most visited historic memorial sites and a symbol of patriotic tradition.",
      "info": {
        "nyitvatartas": "Mon–Sun 8 am–6 pm",
        "megkozelites": "Castle Hill can be reached on foot from central Eger; the city is accessible from both Budapest and Miskolc by train and coach, or by car via a turn-off from the M3 motorway."
      }
    },
    "22": {
      "nev": "Eger Minaret",
      "rovid": "The northernmost surviving minaret of the Ottoman Empire, standing 40 metres tall.",
      "reszletes": "Eger Minaret is the northernmost surviving minaret of the Ottoman Empire and one of the most distinctive architectural relics of Ottoman rule in Hungary. The 14-sided tower, built of red sandstone and standing approximately 40 metres tall, was constructed in the 17th century during Ottoman rule in Eger as part of a mosque that was later demolished. According to tradition, the minaret survived because the local people were unable to pull it down even with oxen. Its top can be reached by a narrow spiral staircase of 97 steps, offering views over the city. The tower is now crowned by a cross, marking the Christian reconquest following Ottoman rule. The minaret is one of Eger’s symbols and a rare physical remnant of Hungary’s Ottoman heritage.",
      "info": {
        "megkozelites": "In central Eger, a few minutes’ walk from the castle; the city is accessible by train and coach from Budapest and Miskolc."
      }
    },
    "23": {
      "nev": "Hollókő Old Village",
      "rovid": "A UNESCO World Heritage Palóc village and a living ensemble of vernacular architecture.",
      "reszletes": "The Old Village of Hollókő is one of Hungary’s most distinctive World Heritage Sites. It has been on the UNESCO list since 1987 as a ‘living’ ensemble of vernacular historic buildings. The village lies among the hills of the Cserhát and preserves an authentic picture of 17th- and 18th-century Palóc vernacular architecture that remains in use today: whitewashed peasant houses with carved verandas and the characteristic church with its wooden tower and shingled roof. What makes it special is that it is not an open-air museum but a real, inhabited settlement where the traditional way of life and Palóc folk costumes remain present. The ruins of 13th-century Hollókő Castle rise above the village, offering attractive views of the landscape. At Easter, living folk traditions such as sprinkling with water, traditional dress and handicrafts are brought to life in the village, attracting international visitors as well. Hollókő is a symbol of Palóc culture and the preservation of tradition.",
      "info": {
        "megkozelites": "Accessible by car from Szécsény or Pásztó; by public transport, take a coach from Budapest, or a train to Pásztó followed by a local bus."
      }
    },
    "24": {
      "nev": "Aggtelek Stalactite Cave (Baradla)",
      "rovid": "The World Heritage stalactite cave of the Aggtelek Karst, extending for more than 25 kilometres.",
      "reszletes": "The Baradla Cave at Aggtelek is one of Europe’s most famous stalactite caves and forms part of the World Heritage Site of the Caves of Aggtelek Karst and Slovak Karst. The cave system has a total length of more than 25 kilometres and continues across the border into Slovakia under the name Domica. Its passages were shaped by water over millions of years. Among its spectacular formations of stalactites, stalagmites and columns, the best known is the enormous ‘Observatory’. One of the cave’s chambers is also used as a concert hall because of its excellent acoustics, and concerts are held there. Visitors can choose from several guided routes of varying lengths and difficulty. Together with the protected wildlife of the karst landscape above ground, the cave is a major destination for hiking and scientific research.",
      "info": {
        "nyitvatartas": "By guided tour",
        "megkozelites": "In the village of Aggtelek; the fastest route by car is from Miskolc, while the cave entrance can be reached by coach from Miskolc or Putnok."
      }
    },
    "25": {
      "nev": "Tokaj-Hegyalja Wine Region",
      "rovid": "A historic World Heritage wine region and the home of Tokaji Aszú.",
      "reszletes": "Tokaj-Hegyalja is Hungary’s most famous historic wine region and has been listed by UNESCO as a World Heritage cultural landscape since 2002. The region is centred on the town of Tokaj, where the Bodrog flows into the Tisza, and extends across the volcanic slopes of the Zemplén Mountains. Its unique microclimate—created by moisture from the rivers and abundant sunshine—favours the development of noble rot, which ripens the grapes and forms the basis of the world-famous Tokaji Aszú. Aszú wine is made from grapes affected by noble rot and aged for a long period; its sweetness is traditionally expressed in puttonyos, and it has been a sought-after dessert wine for centuries. The rows of cellars carved into loess and volcanic rock, as well as the grape harvest, are the main attractions for wine tourists. Tokaji wines were once supplied to royal and imperial Russian courts, establishing the region’s international reputation.",
      "info": {
        "megkozelites": "The town of Tokaj can be reached from Budapest by train on the Miskolc–Nyíregyháza line and by coach; the wine region can be explored by car from Main Road 38."
      }
    },
    "26": {
      "nev": "Lillafüred",
      "rovid": "A resort in the Bükk Mountains, home to the Palace Hotel and Hungary’s highest waterfall.",
      "reszletes": "Lillafüred is a picturesque resort in the heart of the Bükk Mountains. Administratively part of Miskolc, it lies on the shore of Lake Hámori. Its landmark is the Neo-Renaissance Palace Hotel, built in the 1920s, whose terraced hanging garden makes it one of the most striking buildings in the landscape. The resort is also home to Hungary’s highest waterfall, the approximately 20-metre Szinva Waterfall, which begins in the hotel garden. The area is made distinctive by its dripstone caves, including the Anna Travertine Cave and the Szent István Cave. The narrow-gauge trains of the Lillafüred State Forest Railway cross the Bükk Mountains along a scenic route. Lillafüred is a popular destination for hiking and mountain retreats and also preserves the memory of Ottó Herman and Attila József.",
      "info": {
        "megkozelites": "Lillafüred is a few kilometres from Miskolc and can be reached by the trains of the Lillafüred State Forest Railway, by local bus or by car; Miskolc can be reached from Budapest by train and via the M3 motorway."
      }
    },
    "27": {
      "nev": "Diósgyőr Castle",
      "rovid": "King Louis the Great’s Gothic castle of chivalry and the centre of the medieval queens’ estate.",
      "reszletes": "Diósgyőr Castle is one of Hungary’s most important medieval castles and stands in Miskolc’s Diósgyőr district. It acquired its present form, with four corner towers, under King Louis the Great in the 14th century, when it was rebuilt as a magnificent royal residence. In the Middle Ages it was traditionally the centre of the Hungarian queens’ estates and is therefore also known as the ‘Queens’ Castle’. The castle gradually fell into ruin during the Ottoman period and after Rákóczi’s War of Independence, but in recent decades it has undergone extensive reconstruction that has restored its Gothic appearance. Its renovated great halls, chapel and casemates are open to visitors, and it hosts the Diósgyőr Castle Games and displays of medieval combat. Today the castle is one of Miskolc’s principal tourist attractions and a living medieval experience park.",
      "info": {
        "nyitvatartas": "Tue–Sun 9 am–6 pm",
        "megkozelites": "From central Miskolc, take a local tram or bus to Diósgyőr, followed by a short walk; the city can be reached from Budapest by train and via the M3 motorway."
      }
    },
    "28": {
      "nev": "Szilvásvárad – Szalajka Valley",
      "rovid": "A picturesque valley in the Bükk Mountains, with the Fátyol Waterfall and the Lipizzaner stud.",
      "reszletes": "Szilvásvárad is a resort village in the northern Bükk Mountains, famous for its picturesque natural surroundings and Lipizzaner horses. Its main attraction is the Szalajka Valley, which can be explored along a gently rising woodland path or aboard the nostalgic narrow-gauge forest railway. The valley’s highlight is the cascading Fátyol Waterfall, whose water trickles like a veil over terraces of travertine. The Open-Air Forestry Museum is also located here and presents traditional woodland crafts, including charcoal burning and wood processing. Szilvásvárad is also renowned for its Lipizzaner stud: breeding the white ceremonial horses and carriage-driving competitions are important local traditions. The area’s well-maintained hiking trails, trout ponds and clean air make it a popular destination for nature walks.",
      "info": {
        "megkozelites": "Szilvásvárad can be reached by train on the Eger–Putnok line and by coach from Eger and Miskolc; the Szalajka Valley can be reached from the village on foot or by the narrow-gauge forest railway."
      }
    },
    "161": {
      "nev": "Salgó Castle",
      "rovid": "A hilltop castle built after the Mongol invasion and one of Nógrád County’s most visited ruins.",
      "reszletes": "Salgó Castle is one of the Nógrád region’s most distinctive hilltop castle ruins. It was built with the permission of King Béla IV after the Mongol invasion to defend against further attacks. Perched on a steep basalt crag, the castle was an impregnable natural stronghold and played a role in military events for centuries. It was demolished in the early 18th century after Rákóczi’s uprising, but its ruins remain impressive and offer beautiful panoramic views of the surrounding landscape from the summit of the basalt hill above Salgótarján. The approach to the castle makes a pleasant hike and lies within the Karancs-Medves Landscape Protection Area.",
      "info": {
        "megkozelites": "The route between Salgótarján and the castle can be covered on foot in approximately 1–2 hours; the town can be reached from Budapest by train or by leaving the M3 motorway."
      }
    },
    "162": {
      "nev": "Szécsény Castle and Forgách Mansion",
      "rovid": "A fortified town from the Rákóczi era and a Baroque mansion in the Nógrád region.",
      "reszletes": "Szécsény was one of the key locations of Rákóczi’s War of Independence. The Diet assembled here in 1705 and elected Francis II Rákóczi as the ruling prince of Hungary. The remains of the medieval fortress stand beside the 18th-century Forgách Mansion, which now houses the Ferenc Kubinyi Museum. The castle’s and mansion’s permanent exhibitions present the history of the Rákóczi era and the Nógrád region. Gothic cellars and sections of the old castle walls have also survived in the town. Szécsény is one of the principal centres preserving the traditions of the Palóc people and the heritage of the battles fought around Hungary’s border fortresses.",
      "info": {
        "megkozelites": "Szécsény lies between Balassagyarmat and Salgótarján and can be reached by car or coach via Main Road 22."
      }
    },
    "163": {
      "nev": "Teleki Mansion, Szirák",
      "rovid": "One of Hungary’s finest Baroque mansions, now a four-star hotel.",
      "reszletes": "The Teleki Mansion in Szirák is one of Hungary’s best-preserved and most famous Baroque mansions. It was completed by the Wattay family in 1748, in the mid-18th century, and later passed into the ownership of the Teleki family. During the Second World War, the building was occupied and severely damaged by Russian soldiers; following the socialist decades, it opened as a hotel in 1985. Today it operates as a four-star country-house hotel and is one of the finest establishments of its kind in Hungary. Its park, inner garden and original Baroque architecture make it distinctive. The mansion has also made a guest appearance in Paris: Margit Kovács’s handcrafted ceramics and equestrian games recapture the atmosphere of the Baroque world.",
      "info": {
        "megkozelites": "Szirák lies between Balassagyarmat and Pásztó and can be reached by car by turning off Main Road 2."
      }
    },
    "164": {
      "nev": "Sirok Castle",
      "rovid": "The Mátra Mountains’ largest castle ruin, which defended the hilltop for many centuries.",
      "reszletes": "Sirok Castle is the largest castle ruin in the Mátra Mountains and rises from a steep summit in a picturesque landscape. For several centuries, the fortress guarded a strategically important pass; it played a significant role under the medieval kings, during the period of Ottoman rule and during Rákóczi’s War of Independence. The castle walls and towers have survived in good condition, and the bastions offer panoramic views of the Mátra and Bükk Mountains and the plain around Eger. The village of Sirok lies below, and the castle entrance can be reached from the village along a hiking trail. The natural surroundings of the Mátra Landscape Protection Area make the excursion particularly special.",
      "info": {
        "megkozelites": "Sirok can be reached from Eger by car or coach via Main Road 25; the castle can be reached on foot from the village."
      }
    },
    "165": {
      "nev": "Galyatető – Galyatető Lookout Tower",
      "rovid": "A panoramic lookout tower and tourist centre on Hungary’s third-highest peak.",
      "reszletes": "Galyatető is Hungary’s third-highest peak, rising 964 metres above sea level, and one of the Mátra’s most popular hiking destinations. The Galyatető Grand Hotel and the Galyatető Tourist Centre at the summit also attract visitors during the winter months, when the ski slopes and bobsleigh track offer seasonal activities. In clear weather, the renovated, 13-metre-high panoramic lookout tower offers distant views of the Tatra Mountains, or at least of the Bükk and the surrounding uplands. The area also has biathlon courses, while its nature trails and bridleways provide further routes for visitors.",
      "info": {
        "megkozelites": "Galyatető can be reached from Gyöngyös by car or bus along the tourist road through the Mátra Mountains, or by the Mátra Forest Railway."
      }
    },
    "166": {
      "nev": "Egerszalók Salt Hill",
      "rovid": "Naturally formed travertine terraces, a unique salt hill and a medicinal spa.",
      "reszletes": "The Egerszalók Salt Hill is a unique natural formation of a kind found naturally in only a few places worldwide: after Pamukkale in Turkey and Yellowstone in North America, Egerszalók is the third such site. When the calcium-rich thermal water rising from deep underground reaches the surface, it deposits travertine, forming a whitish hill of terraces and curved lobes. Beside the salt hill is a modern spa and wellness hotel, the Saliris Resort and Spa, which also uses the distinctive thermal water for therapeutic purposes. Together, this spectacular natural phenomenon and the thermal baths make Egerszalók an outstanding health-tourism destination.",
      "info": {
        "megkozelites": "Egerszalók is a few kilometres from Eger by car along Main Road 25; the salt hill and spa are clearly signposted."
      }
    },
    "167": {
      "nev": "Rákóczi Castle, Sárospatak",
      "rovid": "A Renaissance castle that was the intellectual and political centre of the Rákóczi War of Independence.",
      "reszletes": "Rákóczi Castle in Sárospatak is one of the Zemplén region’s most important medieval and Renaissance monuments and is also known as the intellectual and political centre of the Rákóczi War of Independence. Continually expanded from the 16th century onwards, the castle enjoyed its heyday in the 17th century as the residence of the Rákóczi family, and its Renaissance courtyard was one of the period’s cultural centres. The castle houses the rich collection of the Rákóczi Museum, which explores the history of the border-fortress system and the War of Independence. The Red Tower and the Renaissance arcaded gallery are particularly striking. Sárospatak regards itself as one of Hungary’s most important cultural towns, a status also exemplified by its Reformed College.",
      "info": {
        "megkozelites": "Sárospatak can be reached by train on the Miskolc–Sátoraljaújhely railway line and by car along Main Road 37."
      }
    },
    "168": {
      "nev": "Füzér Castle",
      "rovid": "A border fortress built on a volcanic basalt mountain, where the Holy Crown was once kept.",
      "reszletes": "Füzér Castle is a medieval fortress rising on a steep volcanic basalt crag in the Zemplén Mountains, whose construction began after the Mongol invasion. The castle has particular historical significance because the Hungarian Holy Crown was kept here briefly during the turbulent period following the Battle of Mohács. The castle is also associated with the nobleman Péter Perényi, who influenced the fate of the crown. Following archaeological excavations and partial reconstruction completed in 2016, the fortress is now open to visitors; its towers and bastions offer breathtaking views of the Zemplén Mountains and Tokaj-Hegyalja.",
      "info": {
        "megkozelites": "Füzér can be reached by car from the vicinity of Sátoraljaújhely via a road through the Zemplén Mountains; the castle is reached from the village along a walking trail."
      }
    },
    "169": {
      "nev": "Tokaj Synagogue and Festival Arena",
      "rovid": "A Moorish-style synagogue and a 2,580-seat open-air Festival Arena in a quarry.",
      "reszletes": "The Tokaj Synagogue was built in the late 19th century in the Moorish style. The building was left abandoned for decades after the Holocaust, but from the 2000s onwards it was gradually restored and became a venue for cultural events. Its distinctive location, a former wine-stone quarry, provides the setting for the cultural venue known as the Festival Arena, which was converted into a 2,580-seat open-air auditorium surrounded by natural basalt rock walls. Visitors to the Tokaj Wine Days and other cultural events experience concerts enclosed by the rocks as something truly special. Together, the synagogue and the arena offer an attraction of a different kind alongside Tokaj’s wine tourism.",
      "info": {
        "megkozelites": "Tokaj can be reached by train on the Miskolc–Nyíregyháza railway line and by car along Main Road 38."
      }
    },
    "170": {
      "nev": "Matyó Museum, Mezőkövesd",
      "rovid": "A museum presenting the UNESCO-listed intangible heritage of Matyó embroidery and traditional dress.",
      "reszletes": "The Matyó Museum in Mezőkövesd is the foremost showcase of Matyóföld’s unique folk culture. In 2012, Matyó embroidery and traditional dress were added to UNESCO’s list of intangible cultural heritage as a unique, living folk textile tradition. The museum’s rich embroidery patterns, woven textiles, items of clothing and everyday objects illustrate the beauty of peasant life and the Matyó people’s sense of identity. Matyó embroidery is distinguished by its profusion of lily-of-the-valley, poppy and tulip motifs, which are regarded as one of the best-known Hungarian national treasures. Mezőkövesd is the cultural capital of Matyóföld, where the annual Matyó Days programme brings these traditions to life.",
      "info": {
        "megkozelites": "Mezőkövesd can be reached by train from both Eger and Miskolc, or by car along Main Road 25."
      }
    },
    "214": {
      "nev": "Miskolctapolca Cave Bath",
      "rovid": "A unique medicinal spa built inside a cave in Miskolctapolca.",
      "reszletes": "The Miskolctapolca Cave Bath is one of the world’s most distinctive bathing complexes, consisting of thermal-water pools created inside a natural limestone cave. The first bath building opened in 1743, although the cave’s water had been used even earlier. Today’s modern bathing complex was completed with pools built into the natural cave passages, stalactite formations and sauna facilities. The cave water has a temperature of 30–32 degrees Celsius, making it particularly suitable for treating musculoskeletal conditions. The cave air has therapeutic qualities, and its low pollen content also benefits people with respiratory conditions. This unique attraction draws several hundred thousand visitors each year and is one of Miskolc’s best-known tourist landmarks.",
      "info": {
        "megkozelites": "Miskolctapolca is part of the city of Miskolc; it can be reached from the city centre by bus 2 and trolleybus, or by car along Main Road 37."
      }
    },
    "215": {
      "nev": "Szépasszony Valley, Eger",
      "rovid": "The birthplace of Egri Bikavér: a picturesque wine valley with 32 cellars.",
      "reszletes": "Szépasszony Valley is one of Eger’s best-known and most visited attractions, with approximately 32 wine cellars standing side by side in an atmospheric valley on the edge of the city. The valley is the birthplace of the legendary Egri Bikavér and other Eger wines, including Kékfrankos, Kékoportó, Cabernet Sauvignon and Leányka. The cellars hold wine presentations and tastings, offering something for every enthusiast of wine culture. According to tradition, Szépasszony Valley has magical powers: anyone who drinks from it is said to long to return. The cellars are continuously extended throughout the year, and the revival of local traditions is especially spectacular during the autumn harvest. The valley’s picturesque natural setting and atmospheric wine cellars make it one of Eger’s most frequently visited destinations.",
      "info": {
        "megkozelites": "The valley can be reached from Eger on foot in approximately 20–25 minutes; buses 20 and 22 also stop nearby. Eger can be reached from Budapest by train."
      }
    },
    "216": {
      "nev": "Kékestető – Hungary’s Highest Point",
      "rovid": "At 1,014 metres, Kékes is the highest peak in both the Mátra Mountains and Hungary.",
      "reszletes": "At 1,014 metres above sea level, Kékestető is the highest point in Hungary and the crowning glory of the Mátra Mountains. The television and radio transmission tower on the summit is visible from afar, while in clear weather even the snow-covered peaks of the Tatra Mountains can be seen from the observation tower, which was renovated in 2023. Ski lifts, a bobsleigh track and a biathlon course provide winter sports facilities at the summit; during the summer season, hikers can enjoy nature trails, cycle routes and educational trails leading into the Mátra Mountains. Together with Mátraháza and Galyatető, Kékestető forms the main tourist axis of the Mátra Mountains. It is a popular destination accessible both by car and by the Mátra narrow-gauge railway.",
      "info": {
        "megkozelites": "Accessible by car from Gyöngyös via Route 24; it can also be reached from Mátraháza by ski lifts and hiking trails."
      }
    },
    "31": {
      "nev": "Great Reformed Church of Debrecen",
      "rovid": "The emblematic church of Hungarian Calvinism and the centre of the ‘Calvinist Rome’.",
      "reszletes": "The Great Reformed Church of Debrecen is Hungary’s largest Reformed church and the symbol of the city, standing at the heart of Debrecen, which is known as the ‘Calvinist Rome’. The Neoclassical building, with its two towers, was constructed between 1819 and 1824 on the site of an earlier church destroyed by fire, to designs by Mihály Péchy. The building has played an important role in Hungarian history: Parliament met here in 1849, and within its walls, under the leadership of Lajos Kossuth, the dethronement of the House of Habsburg was proclaimed. One of its towers houses the Rákóczi Bell, cast from the prince’s cannons. The austere, unadorned interior reflects the Reformed tradition. Together with the Reformed College, the Great Church has been a centre of Hungarian Protestant culture and education for centuries.",
      "info": {
        "megkozelites": "In central Debrecen, on Kossuth Square; the city can be reached from Budapest by train, including direct InterCity services, by coach, or by car via the M3 motorway. The church is reached from the railway station by walking along Piac Street."
      }
    },
    "32": {
      "nev": "Hortobágy National Park – Nine-Arched Bridge",
      "rovid": "The symbol of Hortobágy, built between 1827 and 1833 to designs by Ferenc Povolny, and Hungary’s longest stone road bridge.",
      "reszletes": "Hortobágy National Park, established in 1973, was Hungary’s first national park and is one of Europe’s largest continuous areas of natural grassland steppe. Since 1999, the landscape has been listed as a UNESCO World Heritage cultural landscape because it was shaped by several thousand years of sustainable pastoral farming. Ancient Hungarian breeds still graze on the plain, including Hungarian Grey cattle, Racka sheep, water buffalo and Nonius horses. The symbol of the plain is the stone-built Nine-Arched Bridge spanning the River Hortobágy. Constructed in the early 19th century, it was long the country’s longest stone bridge. The area is an important bird-migration route, with tens of thousands of cranes gathering here in autumn. Hortobágy is a landscape of pastoral culture, traditional inns and mirages, and an international symbol of the Hungarian puszta.",
      "info": {
        "megkozelites": "The village of Hortobágy can be reached by train on the Debrecen–Füzesabony railway line or by car via Main Road 33; the Nine-Arched Bridge and the Herdsmen’s Museum are located on the edge of the village."
      }
    },
    "33": {
      "nev": "Nyíregyháza – Sóstó Zoo",
      "rovid": "One of Hungary’s most beautiful zoos, set amid an oak forest.",
      "reszletes": "Sóstó Zoo in Nyíregyháza is one of Hungary’s most beautiful and modern zoos, set within an ancient oak forest in the Sóstó resort area beside the city. The zoo groups its species by continent and presents them in spacious, naturalistic enclosures, allowing visitors to experience a ‘journey around the world’. Its principal attractions include the Oceanarium, where sharks and tropical marine life can be observed, and the Green Pyramid tropical pavilion. The zoo actively participates in breeding programmes for endangered species. Nearby is the Sóstó Open-Air Museum Village, which presents the vernacular architecture of the Szabolcs region. Sóstó’s medicinal lake and spa make the area a popular holiday destination.",
      "info": {
        "nyitvatartas": "Daily from 9 am",
        "megkozelites": "Sóstó can be reached from central Nyíregyháza by local bus and the nostalgic Sóstó Museum Railway; the city is accessible from Budapest by train and via the M3 motorway."
      }
    },
    "34": {
      "nev": "Hajdúszoboszló Medicinal Spa",
      "rovid": "‘The Mecca of rheumatism’ – one of Europe’s largest medicinal and leisure-bathing complexes.",
      "reszletes": "Hajdúszoboszló is one of the Great Hungarian Plain’s leading spa towns and is often called ‘the Mecca of rheumatism’ because of its medicinal waters. The thermal water was discovered in 1925 during exploration for natural gas, and its exceptional therapeutic properties soon became apparent. The slightly saline, iodine- and bromine-rich medicinal water is primarily recommended for treating musculoskeletal, joint and gynaecological conditions, and is medically certified. The bathing complex has since grown to an immense size: its medicinal spa, leisure baths known as Aquapark, and open-air baths together cover almost thirty hectares. The town has numerous accommodation establishments and wellness centres built around spa tourism. Hajdúszoboszló is one of Hungary’s most frequently visited health-tourism destinations.",
      "info": {
        "nyitvatartas": "Daily",
        "megkozelites": "Hajdúszoboszló can be reached directly by train on the Budapest–Debrecen main railway line and by car via the M35 motorway; the spa is a short walk from the railway station."
      }
    },
    "35": {
      "nev": "Déri Museum",
      "rovid": "Debrecen’s venerable museum, home to Mihály Munkácsy’s monumental Christ Trilogy.",
      "reszletes": "The Déri Museum in Debrecen is one of the most important and venerable public collections east of the Tisza. It was founded thanks to a donation by silk manufacturer Frigyes Déri and opened in its Neoclassical building in 1930. The museum’s greatest treasure is Mihály Munkácsy’s monumental biblical trilogy: Christ before Pilate, Golgotha and Ecce Homo, which are displayed together in a dedicated gallery. Munkácsy’s three enormous canvases rank among the finest achievements of Hungarian painting. The museum also possesses rich archaeological, ethnographic and fine-art collections presenting the history of Debrecen and the region east of the Tisza. Allegorical sculptures by Ferenc Medgyessy stand in the square outside the building. The Déri Museum is one of the centres of the city’s cultural life.",
      "info": {
        "nyitvatartas": "Tue–Sun 10 am–6 pm",
        "megkozelites": "In central Debrecen, on Déri Square, a few minutes’ walk from the Great Church; the city can be reached from Budapest by train and via the M3 motorway."
      }
    },
    "36": {
      "nev": "Nyírbátor – Báthori Church",
      "rovid": "A late Gothic Reformed church and memorial site of the Báthori family.",
      "reszletes": "As the former centre of the Báthori family’s estates, Nyírbátor became one of the foremost heritage sites of Hungarian Gothic and Renaissance art. Its principal attraction is the Reformed church, formerly a Minorite church, commissioned by Chief Justice István Báthori in the late 15th century. It is an outstanding example of Hungarian late Gothic architecture, built in the form of a hall church. Beside the church stands a timber-built, Renaissance-inspired bell tower, one of the finest examples of wooden architecture in Hungary. The town is also home to the Baroque Minorite church, with its richly carved altars. Members of the Báthori family, including princes of Transylvania and a king of Poland, played important roles in the history of Central and Eastern Europe. Nyírbátor is known for its Winged Dragon Days festival and rich medieval heritage.",
      "info": {
        "megkozelites": "Nyírbátor can be reached from Debrecen by train on the Debrecen–Mátészalka railway line, or by coach and car via Main Road 471."
      }
    },
    "151": {
      "nev": "Andrássy Castle, Tiszadob",
      "rovid": "An eclectic castle on the banks of the Tisza, symbolically featuring 365 rooms and serving as an events venue.",
      "reszletes": "Andrássy Castle in Tiszadob was commissioned by Prime Minister Gyula Andrássy in the early 1880s as one of the most impressive aristocratic residences of the Andrássy counts. The building’s 365 rooms symbolise the days of the year, its 52 towers the weeks, its 12 towers the months, and its four entrances the seasons. Together with its park, the castle covers almost 1,000 hectares. Following renovation in recent decades, it has been opened to visitors with interactive exhibitions presenting the former aristocratic way of life. It also serves as a venue for conferences, weddings and events. Its location on the banks of the Tisza provides a picturesque natural backdrop.",
      "info": {
        "megkozelites": "Tiszadob lies between Nyíregyháza and Tiszaújváros and can be reached by car via Main Road 37; the castle stands in a park on the edge of the village."
      }
    },
    "152": {
      "nev": "Báthori Castle and Wax Museum, Nyírbátor",
      "rovid": "A late Gothic castle with 45 life-size wax figures depicting the Renaissance.",
      "reszletes": "The Báthori Castle in Nyírbátor is one of Hungary’s best-preserved late Gothic buildings, and its main building was fully restored in 2006. A unique wax museum awaits visitors inside the castle: 45 life-size wax figures in authentic period costumes evoke the history of the Renaissance, members of the Báthori dynasty, life at the Transylvanian court and the leading figures of the era. The Báthori family played a prominent role in Hungarian and Transylvanian history from the 15th to the 17th century: its members included Princes of Transylvania and a King of Poland–Lithuania. Together with the Gothic Reformed Church, the castle forms the backbone of Nyírbátor’s medieval heritage.",
      "info": {
        "megkozelites": "Nyírbátor can be reached by train on the Debrecen–Mátészalka railway line and by car via Main Road 471; the castle is in the town centre."
      }
    },
    "153": {
      "nev": "Máriapócs National Shrine",
      "rovid": "Hungary’s foremost Greek Catholic pilgrimage site, with a holy icon that wept twice.",
      "reszletes": "Máriapócs is Hungary’s most important Greek Catholic pilgrimage site, whose fame was founded on a miraculous event. In 1696, the faithful observed tears on the icon of the Virgin Mary kept here, and the phenomenon was repeated in 1715. Emperor Leopold I had the original icon taken to Vienna, but the miracle also occurred on the copy installed here. For centuries, the basilica-style pilgrimage church seen today has offered pilgrims the opportunity for spiritual renewal. A pope has also celebrated Mass in Máriapócs, and the shrine has been granted the rank of minor basilica. The site welcomes Greek Catholic pilgrims and followers of other religions throughout the year.",
      "info": {
        "megkozelites": "Máriapócs can be reached from Nyíregyháza by car or bus via Main Road 411; the pilgrimage church stands in the village’s main square."
      }
    },
    "154": {
      "nev": "Csaroda Reformed Church",
      "rovid": "Home to the finest frescoes of the Upper Tisza region, known as the Church of the Smiling Saints.",
      "reszletes": "The Reformed Church in Csaroda is an outstanding example of 13th-century rural Romanesque church architecture, renowned for its frescoes and smiling saints. The village church, with its rounded apse, shingled roof and round tower, is decorated with rich medieval murals; the figures’ distinctive, cheerful expressions gave it the name Church of the Smiling Saints. It is the best-preserved of the medieval churches in the Upper Tisza region that later became Reformed, and forms part of the Route of Central European Churches. Its painted coffered ceiling and stone pulpit are also valuable historic features.",
      "info": {
        "megkozelites": "Csaroda can be reached by car from the Vásárosnamény area by turning off Main Road 41; a circular route connects this small village in the Bereg region with other villages that have notable churches."
      }
    },
    "155": {
      "nev": "Tákos Reformed Church",
      "rovid": "The Bereg region’s Barefoot Notre-Dame, with wattle-and-daub walls and a painted coffered ceiling.",
      "reszletes": "The Reformed Church in Tákos is regarded as the jewel of the Bereg region’s village churches and, despite its modest size, has been nicknamed the Barefoot Notre-Dame because of its richly decorated interior. The building was constructed of adobe using wattle-and-daub walls—adobe packed around stakes—and has a shingled roof; its interior features a painted coffered ceiling and pews. The gentle rural landscape and the peasant Baroque wooden bell tower lend the site a distinctive atmosphere. Together, the churches of Tákos and Csaroda are the most attractive stops on the Bereg church route.",
      "info": {
        "megkozelites": "Tákos can be reached by car from the vicinity of Vásárosnamény along the road connecting the churches of the Bereg region."
      }
    },
    "156": {
      "nev": "RepTár Aviation Museum, Szolnok",
      "rovid": "An internationally acclaimed aviation museum featuring military aircraft and helicopters.",
      "reszletes": "RepTár in Szolnok is an internationally acclaimed museum presenting the history of Hungarian aviation and the air force, with a rich collection of military aircraft, helicopters, military technology and relics of civil aviation. The museum is open throughout the year, and a distinctive feature is that several aircraft are not merely exhibits but can be viewed up close and touched as part of interactive presentations. Associated with the traditions of Szolnok’s military airfield, the collection is outstanding among Hungary’s aviation museums and has also received praise from international experts. RepTár is a popular destination for visitors interested in technology and for groups of children.",
      "info": {
        "megkozelites": "Szolnok can be reached by train on the main Budapest–Debrecen railway line and by road via the M4 motorway; the museum stands near the airfield on the outskirts of the city."
      }
    },
    "157": {
      "nev": "Jász Museum – Jász Horn",
      "rovid": "The country’s oldest museum, housing the Horn of Lehel, the symbol of the Jász people.",
      "reszletes": "The Jász Museum in Jászberény is the country’s oldest provincial museum, founded in 1873. Its most treasured possession is the Horn of Lehel, a 12th-century Byzantine work carved from ivory and revered as a symbol of Jász unity. According to legend, before his execution, the chieftain Lehel struck Emperor Conrad on the head with this horn. The museum has rich archaeological, historical, ethnographic and fine-art collections presenting the history and traditions of the Jász people. Jászberény is one of the important centres of cultural life in Jász-Nagykun-Szolnok County and is also made attractive by the annual Csángó Festival.",
      "info": {
        "megkozelites": "Jászberény can be reached from the Budapest–Debrecen railway line via the Hatvan–Jászberény branch line, by bus from Szolnok, or by car via Main Road 31."
      }
    },
    "158": {
      "nev": "Kengyel Windmill",
      "rovid": "A working historic windmill at a distinctive site incorporating a kuchalom mound.",
      "reszletes": "The Kengyel windmill is one of the surviving historic examples of wind-power use on the Great Plain and remains operational today. Built in the mid-19th century, the mill is still in working order and demonstrates the traditional process of grain milling. A distinctive feature is that it stands on a kuchalom—an artificial, man-made mound—which is a reminder of the characteristic ways in which the landscape of the Great Plain was shaped. Before the advent of industrial milling, windmills were defining features of the Great Plain landscape; today, only a few survive in their original condition. Kengyel is among the characteristic landscape and technological heritage sites of Jász-Nagykun-Szolnok County.",
      "info": {
        "megkozelites": "Kengyel can be reached by car from the vicinity of Szolnok via Road 442; the windmill stands in open fields a short distance from the village."
      }
    },
    "217": {
      "nev": "Sóstó Open-Air Museum",
      "rovid": "An open-air folk museum of eastern Hungary featuring sill-beam houses and farmstead buildings.",
      "reszletes": "The Sóstó Open-Air Museum is an open-air ethnographic museum in the Sóstó spa resort area of Nyíregyháza, presenting the characteristic folk architecture, sill-beam houses, agricultural buildings and peasant way of life of the eastern Great Plain and the Upper Tisza region. Founded in the 1970s, the collection comprises original relocated buildings, including barns, stables, summer kitchens, blacksmiths’ workshops and houses, furnished with authentic period furniture, ceramics and textiles. The museum also presents the region’s traditional crafts—including basket weaving, woodcarving and pottery—as well as agricultural work. The Sóstó Open-Air Museum is a branch of the Jósa András Museum and, together with the Sóstó spa resort, offers a full day’s programme.",
      "info": {
        "megkozelites": "From central Nyíregyháza, take bus 8 or travel by car towards Sóstó; the museum is near the spa."
      }
    },
    "218": {
      "nev": "Nyíregyháza Animal Park (Sóstó Zoo)",
      "rovid": "Hungary’s second-largest zoo, home to 3,000 animals from nearly 500 species.",
      "reszletes": "Nyíregyháza Animal Park is Hungary’s second-largest zoo, covering approximately 14 hectares near the spa resort of Sóstó. The institution cares for more than 3,000 animals from nearly 500 different species. Rather than being kept in cages, the animals live in spacious, naturalistic enclosures, reflecting the principles of modern zoo management. Nyíregyháza Zoo is particularly well known for its Siberian tigers, African savannah section and horse-riding opportunities. Visitors can also tour the grounds on a miniature train. The animal park is open all year round and boasts one of the highest visitor numbers among Hungary’s zoos. Together, the spa and animal park make Nyíregyháza-Sóstó a popular destination for stays of several days.",
      "info": {
        "megkozelites": "From central Nyíregyháza by bus 8; it is also easily accessible by car towards Sóstó."
      }
    },
    "41": {
      "nev": "Lake Tisza Ecocentre",
      "rovid": "One of Europe’s largest freshwater aquarium systems and visitor centres.",
      "reszletes": "The Lake Tisza Ecocentre in Poroszló is one of Europe’s largest freshwater visitor attractions, introducing visitors to the rich wildlife of Lake Tisza. Its giant aquariums contain fish from the lake and the River Tisza—including enormous catfish and carp—in surroundings that recreate their natural habitats. Interactive exhibitions, a nature trail presenting aquatic habitats and an observation tower make learning about nature an engaging experience. The centre also includes a boating lake and a boardwalk, from which the birdlife of the lake can be observed at close quarters. The ecocentre is one of the main starting points for water-based and ecotourism activities around Lake Tisza, while its environmental education programmes make it a popular destination for school trips.",
      "info": {
        "nyitvatartas": "Seasonal",
        "megkozelites": "Poroszló can be reached by rail via the Budapest–Füzesabony line with a change, or by car on Main Road 33; the ecocentre stands on the lakeshore at the edge of the village."
      }
    },
    "42": {
      "nev": "Tiszafüred",
      "rovid": "The eastern gateway to Lake Tisza, with a spa, beaches and water sports.",
      "reszletes": "Tiszafüred is the largest resort town on the eastern shore of Lake Tisza and is known as the lake’s ‘eastern gateway’. The town is a centre for water-based tourism: its thermal baths, sandy public beaches and boat harbours attract visitors seeking both relaxation and sport. The Kis-Tisza oxbow and the surrounding aquatic habitats are popular with anglers and kayakers. The town is home to the Kiss Pál Museum, which preserves ethnographic artefacts from the region, including examples of the famous Tiszafüred pottery. The area’s rich birdlife also makes hiking and birdwatching popular. Tiszafüred is the tourism and transport hub of the lake’s eastern basin.",
      "info": {
        "megkozelites": "Tiszafüred can be reached by train on the Debrecen–Füzesabony line or by car on Main Roads 33 and 34; the lakeshore is a few minutes from the centre."
      }
    },
    "43": {
      "nev": "Kisköre Barrage",
      "rovid": "The barrage that created Lake Tisza, marking the lake’s southern edge.",
      "reszletes": "The Kisköre Barrage was built on the River Tisza, and its completion in 1973 created the approximately 127-square-kilometre Lake Tisza, Hungary’s second-largest lake. The facility was originally built for irrigation, flood control and energy generation, but the reservoir soon became a major holiday and nature conservation area. The dam complex also includes a hydroelectric power station and a navigation lock, allowing vessels to travel between the impounded and free-flowing sections of the river. The area around the barrage offers excellent fishing, while the structure itself is an interesting monument to the technological history of water management. Kisköre, situated at the lake’s southern edge, also has a spa and a harbour. The barrage clearly illustrates how people reshaped the landscape by creating a new artificial lake.",
      "info": {
        "megkozelites": "Kisköre can be reached by car from Main Roads 31 and 32, or by bus; the barrage is beside the town at the southern end of the lake."
      }
    },
    "44": {
      "nev": "Abádszalók",
      "rovid": "Lake Tisza’s water-sports centre, popular for jet skiing and sailing.",
      "reszletes": "Abádszalók is one of the most popular holiday resorts and water-sports centres in the southern basin of Lake Tisza. The shallow, rapidly warming waters of Abádszalók Bay are ideal for swimming, particularly for families with young children. The town is one of the few places on the lake where motorised water sports—jet skiing, wakeboarding and motorboating—are permitted, making it a popular destination for those seeking an active holiday. Its sandy beach, campsites and water adventure park attract large numbers of visitors during the summer season. The area’s cycle paths and boating opportunities also provide ways to explore nature. Abádszalók is one of the centres of active tourism around Lake Tisza.",
      "info": {
        "megkozelites": "Abádszalók can be reached by rail on the Kisújszállás–Kisköre line and by car on Road 3216; the beach and harbour are in the lakeside part of the town."
      }
    },
    "45": {
      "nev": "Sarud Public Beach",
      "rovid": "A quiet, natural beach on the lake’s western shore.",
      "reszletes": "Sarud is a quiet holiday village on the western shore of Lake Tisza, representing the lake’s peaceful, natural side. Its bay is bordered by extensive reed beds and has rich birdlife, making it particularly popular with those interested in nature, fishing and birdwatching. The sandy public beach offers a less crowded, family-friendly place to relax. The lakeshore can be explored easily by both bicycle and boat, and it connects to the Lake Tisza cycle route. The area lies close to protected aquatic habitats. Sarud is an excellent example of the lake’s quieter ecotourism appeal.",
      "info": {
        "megkozelites": "Sarud can be reached by car from Poroszló via Road 3303; it is also accessible by bicycle from the surrounding Lake Tisza settlements."
      }
    },
    "201": {
      "nev": "Lake Tisza Bird Reserve",
      "rovid": "A strictly protected ecological area for endangered bird species in the lake’s northern basin.",
      "reszletes": "The Bird Reserve, established in Tiszavalk Bay in the northern part of Lake Tisza, is one of the most important habitats and nesting grounds for waterbirds in the lake region. Thousands of birds breed here each year, including numerous endangered species that cannot find undisturbed nesting sites elsewhere. Entry to the reserve is permitted only by paddle boat and under organised conditions; however, the habitat can be observed very well from observation towers outside it: the Bölömbika, Fattyúszerkő and Küszvágó Csér observation towers. As a result of bird conservation, the number of formerly endangered species is steadily increasing, and the area has become an important destination for nature enthusiasts.",
      "info": {
        "megkozelites": "The Bird Reserve lies in the northern part of Tiszavalk Bay; the observation towers can be reached by car or bicycle from near Tiszafüred and the surrounding villages."
      }
    },
    "202": {
      "nev": "Kisköre Fish Pass",
      "rovid": "A glass-walled ecological corridor allowing fish to swim through safely.",
      "reszletes": "Built beside the Kisköre Barrage, the Fish Pass allows fish and other aquatic organisms to cross safely between the impounded and natural sections of the river. Part of the specially designed, glass-walled fish channel can be viewed from inside, allowing visitors to watch migrating fish and providing a unique attraction and nature-learning experience. To preserve a healthy river environment, specialist staff regularly monitor the operation of the fish pass and keep statistics on fish migration. Together, the Kisköre Barrage and Fish Pass form an important centre for ecotourism information and environmental education in the Lake Tisza region.",
      "info": {
        "megkozelites": "The Kisköre hydroelectric power station and Fish Pass can be reached on the riverbank beside the barrage, near Kisköre Bridge; the site is accessible on foot."
      }
    },
    "203": {
      "nev": "Poroszló Water Boardwalk",
      "rovid": "A system of boardwalks built over the open waters of Lake Tisza, accessible only by boat.",
      "reszletes": "The Poroszló Water Boardwalk is one of the most remarkable destinations for nature lovers at Lake Tisza: a system of boardwalks built among the lake’s reed beds and open waters, which can only be reached by rowing boat. The water route from Fűzfa Marina passes through marshy, densely reed-covered stretches near the shore, offering a close-to-nature experience that could never be enjoyed from dry land. From the boardwalk, visitors can observe waterbirds, aquatic plants and the lake’s wildlife at close quarters. Maintaining the boardwalk system is one of the most successful ecotourism projects in the Lake Tisza region, and together with the Ecocentre it offers a distinctive lakeside leisure experience.",
      "info": {
        "megkozelites": "The Water Boardwalk can be reached from Poroszló on a boat trip; boat and kayak hire is organised at the Ecocentre."
      }
    },
    "219": {
      "nev": "Lake Velence – Agárd and Gárdony",
      "rovid": "Hungary’s second most popular lakeside holiday area after Lake Balaton.",
      "reszletes": "Lake Velence is Hungary’s second-largest natural lake and the country’s warmest and largest shallow-water holiday lake. The resort towns of Agárd, Gárdony and Velence along its shores are major summer tourism destinations, offering swimming, sailing, windsurfing, cycling and horse riding. The eastern half of the lake contains a bird sanctuary and reed beds of outstanding value to nature lovers and birdwatchers. Lake Velence is also an attractive destination in winter, when ice skating and ice sailing are popular on its frozen surface. Agárd Medicinal and Thermal Spa offers services of European standard. The lake is Central Transdanubia’s most visited natural attraction.",
      "info": {
        "megkozelites": "By train on the Budapest–Székesfehérvár railway line, alighting at Agárd; it is also easily accessible by car via the M7 motorway."
      }
    },
    "220": {
      "nev": "Esterházy Palace and Blue-Dyeing Museum, Pápa",
      "rovid": "A Baroque aristocratic palace and Hungary’s only museum devoted to the Hungarikum tradition of blue dyeing.",
      "reszletes": "The Esterházy Palace in Pápa is one of Transdanubia’s most beautiful and best-preserved Baroque palaces, completed for the Esterházy family in 1784. Today, the palace hosts events, weddings and cultural programmes and is open to visitors throughout the year. Closely associated with the palace is the Blue-Dyeing Museum, which is unique in Hungary: blue dyeing—the colouring of textiles with indigo and then using the resist-dyeing process—is a tradition of Hungarian folk craftsmanship designated as a Hungarikum. Through the Kluge dynasty, the Pápa blue-dyeing manufactory operated continuously from the late 18th century, and its textiles, patterns and machinery can be seen in their original condition at the museum. The museum also holds demonstrations where visitors can watch blue dyeing live.",
      "info": {
        "megkozelites": "Pápa can be reached from Győr and Veszprém by train or bus, and by car via Main Road 83."
      }
    },
    "221": {
      "nev": "Székesfehérvár – Historic Centre and Coronation History",
      "rovid": "The former coronation city of the Kingdom of Hungary, where 37 kings were crowned and buried.",
      "reszletes": "Székesfehérvár was the first and longest-standing royal seat and coronation city of the Kingdom of Hungary, where 37 Hungarian kings were crowned and buried over a period of more than 1,000 years. The Ruin Garden in the historic centre presents the excavated remains of the coronation basilica and royal burial site, including the royal sarcophagi; it is one of Hungary’s most important archaeological and historical monuments. The Orb sculpture in Városháza Square was created to mark the 1,000th anniversary of the foundation of the state by Saint Stephen. Székesfehérvár’s Baroque historic centre, the Bishop’s Palace, the Black Eagle Pharmacy and numerous medieval church ruins are all open to visitors. The city’s 800-year-old baptismal font is one of Europe’s oldest liturgical objects still in continuous use.",
      "info": {
        "megkozelites": "Székesfehérvár can be reached by train on the Budapest–Szombathely main railway line or by car via the M7 motorway."
      }
    },
    "51": {
      "nev": "Szeged Cathedral (Votive Church)",
      "rovid": "A twin-towered Neo-Romanesque cathedral built in fulfilment of a vow after the great flood of 1879.",
      "reszletes": "Szeged Cathedral, officially the Votive Church of Our Lady of Hungary, is a symbol of Szeged and one of Hungary’s largest churches. It was built in fulfilment of a vow during the reconstruction of the city following the great Szeged flood of 1879, and was constructed in the Neo-Romanesque style between 1913 and 1930. Its twin-towered red-brick façade and towers, approximately 81 metres high, dominate the cityscape from afar. When built, its organ was one of Europe’s largest instruments, with more than ten thousand pipes. The arcades of Dóm Square in front of the church are adorned with statues forming the National Pantheon, and each summer the square hosts the Szeged Open-Air Festival, one of the country’s most prestigious open-air theatre events. The famous Szeged carillon can also be heard from the cathedral’s tower.",
      "info": {
        "megkozelites": "In central Szeged, on Dóm Square; the city can be reached from Budapest by train and via the M5 motorway, and the cathedral is within walking distance of the centre."
      }
    },
    "52": {
      "nev": "Kecskemét – Cifrapalota",
      "rovid": "A magnificent Hungarian Art Nouveau building, now an art gallery.",
      "reszletes": "Kecskemét’s Cifrapalota is one of the most magnificent examples of Hungarian Art Nouveau, built in 1902 to designs by Géza Márkus. Its façade is covered with colourful Zsolnay majolica decorated with floral and heart motifs, giving the building an undulating, fairy-tale appearance—from which the name ‘Cifra’, meaning ornate, derives. The building is a characteristic work of Hungarian-style Art Nouveau, the movement associated with Ödön Lechner. It now houses the art gallery of the Katona József Museum of Kecskemét, displaying the region’s fine-art collection. The ornate interiors, including the Peacock Room, are works of art in their own right. The Cifrapalota is one of the best-known examples of Kecskemét’s rich Art Nouveau architectural heritage.",
      "info": {
        "megkozelites": "In central Kecskemét, near the main square; the city can be reached from Budapest by train and via the M5 motorway."
      }
    },
    "53": {
      "nev": "Ópusztaszer National Heritage Park",
      "rovid": "A memorial site of the Hungarian Conquest and home to the Feszty Panorama.",
      "reszletes": "The Ópusztaszer National Heritage Park is the central memorial site of the Hungarian Conquest and the foundation of the state, standing, according to tradition, on the site of the first national assembly, the ‘Assembly of Szer’. The park’s main attraction is the Feszty Panorama, Árpád Feszty’s monumental painting, 120 metres long and 15 metres high, depicting the arrival of the Hungarians and created around the time of the Millennium. Presented as a circular panorama enhanced by sound and lighting effects, it brings the drama of the Hungarian Conquest to life. The heritage park also includes an extensive open-air museum presenting rural life, crafts and folk architecture from the Great Hungarian Plain. Visitors can also see the excavated ruins of an Árpád-era monastery and numerous exhibitions. Ópusztaszer is one of the most important sites of Hungarian national memory and the cult of the Conquest.",
      "info": {
        "nyitvatartas": "Tue–Sun",
        "megkozelites": "Ópusztaszer can be reached by car or bus from Szeged and Kistelek; the nearest railway station is in Kistelek, with a local service from there."
      }
    },
    "54": {
      "nev": "Gyula Castle",
      "rovid": "Central Europe’s only intact lowland brick castle.",
      "reszletes": "Gyula Castle is Central Europe’s only surviving intact lowland brick castle, built in the Gothic style in the 15th century. Protected by marshes and moats, the fortress was an important border stronghold during the Ottoman period and was captured by the Ottomans only after a lengthy siege. The well-preserved and restored castle now operates as a museum, presenting relics of life in the border fortresses. In summer, its courtyard provides a distinctive setting for the open-air performances of the Gyula Castle Theatre. Immediately beside the castle is the Gyula Castle Spa, whose thermal medicinal baths are one of the city’s principal attractions. With its Baroque historic centre and its status as the birthplace of Ferenc Erkel, Gyula is also a major tourist destination.",
      "info": {
        "nyitvatartas": "Daily",
        "megkozelites": "Gyula can be reached by train on the Békéscsaba–Gyula railway line or by car via Main Road 44; the castle and Castle Spa are in the town centre."
      }
    },
    "55": {
      "nev": "Kiskunság National Park – Bugac",
      "rovid": "The Bugac puszta, with herding displays and a sandy landscape.",
      "reszletes": "The Bugac area of Kiskunság National Park is one of the best-known living centres of the Hungarian puszta and pastoral traditions in the Danube–Tisza Interfluve. Its characteristic sandy grassland landscape consists of dunes, saline lakes and open pastures where ancient Hungarian livestock breeds graze. At the puszta displays, the spectacular equestrian performances of the csikós horsemen – including the famous five-horse team and whip-cracking – bring pastoral culture to life. A herding museum presents traditional pastoral life and its implements. The Bugac puszta can be explored by horse-drawn carriage and along nature trails, and is also a Special Protection Area for birds. Alongside Hortobágy, Kiskunság is one of the principal representatives of the nature and culture of the Hungarian Great Plain’s puszta.",
      "info": {
        "megkozelites": "Bugac can be reached from Kecskemét by car, bus or a nostalgic narrow-gauge railway; the puszta visitor site is a few kilometres from the village."
      }
    },
    "56": {
      "nev": "Szeged – Anna Thermal and Leisure Baths",
      "rovid": "Szeged’s city-centre thermal baths, with iodine- and bromine-rich thermal water.",
      "reszletes": "The Anna Thermal and Leisure Baths in Szeged operate in the city centre, in a building preserving the legacy of late 19th-century Art Nouveau bathing culture. The baths draw on the Anna Spring’s medicinal water, which is rich in iodine, bromine and minerals and is recommended primarily for treating musculoskeletal and joint complaints. The historic building has been renovated in recent years and expanded with modern wellness and leisure facilities, offering both traditional therapeutic bathing and bathing for families. The baths’ water is also known in bottled form. Thanks to their city-centre location, a visit can easily be combined with seeing the city’s sights. The Anna Baths are one of the centres of health tourism in Szeged.",
      "info": {
        "megkozelites": "Located in central Szeged, near Széchenyi tér, and easily reached on foot; the city is accessible by train and via the M5 motorway."
      }
    },
    "57": {
      "nev": "Szent Erzsébet Thermal Baths, Mórahalom",
      "rovid": "Modern thermal baths in the Homokhátság landscape, with officially certified medicinal water.",
      "reszletes": "The Szent Erzsébet Thermal Baths in Mórahalom are one of Homokhátság’s successful modern thermal-bath developments, which have transformed the small town into a health-tourism destination over recent decades. The baths’ officially certified medicinal water is recommended for treating musculoskeletal and rheumatic complaints. The complex offers medicinal pools, leisure and wellness facilities, as well as both indoor and outdoor pools. Accommodation connected to the baths also makes stays of several days possible. The surrounding area adds the distinctive landscape of Homokhátság, its traditional farmsteads and the experience of paprika. Mórahalom is a good example of how successful tourism can be built around thermal water in a smaller town on the Great Plain.",
      "info": {
        "megkozelites": "Mórahalom can be reached from Szeged by car on Main Road 55 and by bus; the baths are in the town centre."
      }
    },
    "131": {
      "nev": "Kiskőrös – Birthplace of Sándor Petőfi",
      "rovid": "The birthplace and memorial museum of Sándor Petőfi, Hungary’s greatest poet.",
      "reszletes": "The Petőfi Birthplace in Kiskőrös is one of the most important memorial sites in Hungarian literature, as Sándor Petőfi, the greatest poet of Hungarian Romanticism and revolutionary lyric poetry, was born here in 1823. The whitewashed, thatched peasant house on the Great Plain faithfully preserves the atmosphere of an early 19th-century market-town home. The house and its adjoining modern memorial museum contain an exhibition presenting the poet’s life, family and personal belongings. Renovated in 2022, the museum uses interactive features to offer an engaging introduction to the cult of Petőfi. Beside the birthplace, a sculpture park and literary memorials associated with the poet complement the visit. Kiskőrös is a centre of Petőfi remembrance and literary pilgrimage.",
      "info": {
        "megkozelites": "Kiskőrös can be reached by train on the Budapest–Kelebia railway line or by car on Main Road 53; the birthplace is in the town centre."
      }
    },
    "132": {
      "nev": "Kalocsa – Archbishop’s Cathedral and Paprika Museum",
      "rovid": "An archiepiscopal city with a Baroque cathedral and a museum devoted to paprika, a Hungarikum.",
      "reszletes": "Kalocsa is one of Hungary’s oldest archiepiscopal sees, founded by King Saint Stephen in the 11th century. The Cathedral of the Assumption stands in the city’s main square and is one of the country’s finest Baroque churches, built in the 18th century during the reign of Maria Theresa and featuring richly decorated interiors. Beside the cathedral are the Archbishop’s Palace and the important Cathedral Library. Kalocsa is known worldwide for its paprika and its colourful traditional painted folk art; the Paprika Museum presents the nearly two-hundred-year history of paprika cultivation and processing. The town’s Károly Viski Museum and folk heritage house introduce local traditions. Kalocsa is one of the centres of ecclesiastical heritage and Hungarian folk art.",
      "info": {
        "megkozelites": "Kalocsa can be reached from Budapest by car or bus on Main Road 51; the city centre can be explored on foot."
      }
    },
    "133": {
      "nev": "Kiskunhalas – Lace House",
      "rovid": "A showcase for the world-famous Halas lace, a Hungarian Hungarikum.",
      "reszletes": "Kiskunhalas is the birthplace of world-famous Halas lace, an outstanding product of Hungarian folk art and craftsmanship that has been designated a Hungarikum. Halas lace is distinctive because it is sewn entirely by hand using exceptionally fine stitches and cannot be replicated by machine; a single piece can take weeks or even months to complete. The Lace House and Lace Museum present the history, techniques and finest examples of lacemaking, and visitors can also watch the lacemakers at work. Halas lace has enjoyed international recognition since the early 20th century and is often presented as an official state gift. The town’s János Thorma Museum presents local history and the painter’s work. Kiskunhalas is an important destination for Hungary’s craft heritage.",
      "info": {
        "megkozelites": "Kiskunhalas can be reached by train on the Budapest–Kelebia railway line and by car on Main Road 53; the Lace House is in the town centre."
      }
    },
    "134": {
      "nev": "New Synagogue of Szeged",
      "rovid": "Hungary’s second-largest synagogue and an outstanding work of Art Nouveau.",
      "reszletes": "The New Synagogue of Szeged is Hungary’s second-largest and one of its most beautiful synagogues, as well as an outstanding work of Hungarian Art Nouveau. The building was completed in 1903 to designs by Lipót Baumhorn, the most prolific synagogue architect of the period. The interior of the monumental domed building is particularly opulent: its stained-glass windows, painted dome and decorations depict symbols of creation and faith. The synagogue remains an active religious centre, while its excellent acoustics also make it a venue for concerts and cultural events. The building is an important monument to the history of Szeged’s Jewish community and the city’s architectural heritage. The synagogue is one of Szeged’s most significant attractions.",
      "info": {
        "megkozelites": "Located on Gutenberg utca in central Szeged; the city can be reached from Budapest by train and via the M5 motorway, and the synagogue is within walking distance of the centre."
      }
    },
    "135": {
      "nev": "Hagymatikum, Makó",
      "rovid": "Thermal baths designed by Imre Makovecz, an outstanding work of organic architecture.",
      "reszletes": "The Hagymatikum in Makó is one of the best-known works of Hungarian organic architecture, designed by Imre Makovecz, the style’s foremost master. Opened in 2012, the thermal baths are named after the city’s symbol, the famous Makó onion, while the building’s forms also follow organic motifs inspired by nature. The complex was developed around an earlier thermal well drilled in the 1950s; its medicinal water is recommended for musculoskeletal and rheumatic complaints. The baths include therapeutic, leisure and wellness facilities and operate throughout the year. In addition to its onions and baths, Makó boasts several other buildings by Makovecz, including the Hagymaház. The Hagymatikum represents an exceptional meeting of health tourism and contemporary Hungarian architecture.",
      "info": {
        "megkozelites": "Makó can be reached from Szeged by car on Main Road 43 and by bus; the baths are in the town centre."
      }
    },
    "136": {
      "nev": "Békéscsaba – Mihály Munkácsy Museum",
      "rovid": "Békéscsaba’s museum, named after the locally born painter Mihály Munkácsy.",
      "reszletes": "The Mihály Munkácsy Museum in Békéscsaba is one of the major public collections of the Southern Great Plain. It is named after the world-famous painter Mihály Munkácsy, who had close ties to the town. Opened in 1914, the museum has rich natural history, archaeological, ethnographic and fine art collections. Highlights include the Munkácsy Memorial Room, several original works by the painter and his personal belongings. The museum presents the history of the Békés landscape and the town, as well as the area’s rich ethnographic heritage. The Munkácsy Memorial House, the painter’s former home, can also be visited in the town. Békéscsaba preserves the memory of one of the great figures of Hungarian painting and is also famous for Csaba sausage.",
      "info": {
        "megkozelites": "Békéscsaba can be reached by train on the Budapest–Lőkösháza main railway line and by car via Main Road 44; the museum is in the town centre."
      }
    },
    "137": {
      "nev": "Almásy Mansion, Gyula",
      "rovid": "A restored Baroque aristocratic mansion with an interactive visitor centre in the heart of Gyula.",
      "reszletes": "The Almásy Mansion in Gyula is one of the most beautifully restored Baroque aristocratic residences in the Southern Great Plain. It was built in the 18th century as the centre of the Almásy family’s estate. For centuries, the mansion was at the heart of aristocratic life in the region. Following an award-winning reconstruction completed in 2018, it opened not as a traditional museum of period furniture but as a modern, interactive visitor centre bringing 18th-century aristocratic and servant life to life. Period interiors and sound and lighting effects offer visitors a glimpse into everyday life at the mansion. In 2018, the visitor centre was named one of Europe’s 40 best museums. With the mansion, its brick castle and the Castle Spa, Gyula is one of the region’s most visited towns.",
      "info": {
        "megkozelites": "Gyula can be reached by train on the Békéscsaba–Gyula railway line and by car via Main Road 44; the mansion stands in the town centre, near the castle."
      }
    },
    "138": {
      "nev": "Szabadkígyós – Wenckheim Mansion",
      "rovid": "A Neo-Renaissance mansion designed by Miklós Ybl, and one of the finest buildings in Békés County.",
      "reszletes": "The Wenckheim Mansion in Szabadkígyós is one of the finest and best-preserved mansions in Békés County. It was built in the second half of the 19th century, between 1875 and 1879. The magnificent Neo-Renaissance building was designed for the aristocratic Wenckheim family by Miklós Ybl, one of the leading Hungarian architects of the period. The mansion was exceptionally modern for its time, with running water, gas lamps, a swimming pool and a tennis court. The building is surrounded by a well-maintained English landscape park with ancient trees and walking paths. The mansion now serves cultural and educational purposes and is open to visitors. Wenckheim Mansion is an outstanding monument to Hungarian aristocratic architecture and the heritage of Békés County.",
      "info": {
        "megkozelites": "Szabadkígyós can be reached from Békéscsaba and Gyula by car, bus or train; the mansion stands in parkland on the outskirts of the village."
      }
    },
    "139": {
      "nev": "Szarvas Arboretum",
      "rovid": "One of Hungary’s richest collections of living trees, the historic Pepikert.",
      "reszletes": "Szarvas Arboretum, commonly known as Pepikert, is one of Hungary’s richest and oldest collections of living trees. It covers approximately 82 hectares on the banks of the Holt-Körös. The garden was founded by the aristocratic Bolza family in the early 19th century and has been continually expanded ever since. The arboretum contains more than 1,600 species of trees and shrubs, around 300 varieties of conifer and numerous evergreens, including rare exotic plants. Well-maintained walking paths, lakes and rest areas await visitors, who can enjoy its diverse plant life throughout all four seasons. The arboretum is also a centre for scientific research and environmental education. Another attraction in Szarvas is the Mini Hungary model park, which further enriches the town’s tourism offering.",
      "info": {
        "megkozelites": "Szarvas can be reached by car and bus via Main Road 44; the arboretum lies on the outskirts of the town, on the banks of the Holt-Körös."
      }
    },
    "231": {
      "nev": "Hajós – Cellar Village",
      "rovid": "The unique village of wine-cellar rows in the Hajós–Baja wine region, and an icon of wine tourism.",
      "reszletes": "The Cellar Village of Hajós is one of Hungary’s most distinctive wine-tourism attractions: the village consists of unique rows of wine cellars built closely together by Swabian settlers in the 18th century and maintained for generations. Several hundred cellars collectively form the Cellar Village, where each has its own winemaking tradition and individual character. The Hajós–Baja wine region primarily produces white wines—Chardonnay, Olaszrizling and Rhine Riesling—but also offers good red wines. Wine celebrations and festivals are held in front of the cellars several times a year; in Hajós, visitors can truly experience the blending of folk wine poetry and a distinctive Swabian wine culture. An inn and accommodation welcome wine tourists in the village.",
      "info": {
        "megkozelites": "Hajós can be reached by car by turning off Main Road 51 from the direction of Kalocsa; it is also easily accessible from Kiskunhalas and Kecskemét."
      }
    },
    "232": {
      "nev": "Hódmezővásárhely – Tornyai Museum and Great Plain Painting",
      "rovid": "The town of the Great Plain school of painting, with the Tornyai Museum and an Art Nouveau town centre.",
      "reszletes": "Hódmezővásárhely is one of the Great Plain’s most important cultural towns, renowned for its school of Great Plain painting and traditional pottery. The János Tornyai Museum preserves a rich collection of Great Plain painting, the world of the Tisza and folk art from Hódmezővásárhely; works by János Tornyai, Béla Endre and other Great Plain painters offer poignant depictions of the landscape and peasant life. The town’s Art Nouveau buildings, Town Hall and Reformed Secondary School are all worth visiting. Hódmezővásárhely pottery is among the country’s finest traditional ceramics; the Potters’ House near the Csonka Mill demonstrates the continuity of the local craft. A visit to the municipal lido can be combined with walking in the countryside near the Tisza.",
      "info": {
        "megkozelites": "Hódmezővásárhely can be reached by train on the Békéscsaba–Szeged railway line and by car via Main Road 47."
      }
    },
    "61": {
      "nev": "Veszprém Castle",
      "rovid": "The historic castle quarter of the ‘City of Queens’, with Baroque palaces.",
      "reszletes": "Veszprém Castle is the historic quarter extending along the top of Castle Hill, which made Veszprém known as the ‘City of Queens’: in the Middle Ages, the Bishop of Veszprém held the right to crown Hungary’s queens. Baroque palaces, the Bishop’s Palace and the twin-towered cathedral line Vár Street, forming the centre of one of Hungary’s oldest bishoprics. Next to the cathedral stands the Gizella Chapel, dedicated to St Stephen and Gizella and containing remnants of medieval wall paintings. At the end of the quarter, the lookout point in the Fire Tower offers a fine panorama of the city and the edge of the Bakony Hills. Benedek Hill and the Séd Valley below the castle provide a picturesque backdrop. Veszprém was a European Capital of Culture in 2023, further enhancing its cultural appeal.",
      "info": {
        "megkozelites": "Veszprém can be reached from Budapest and Lake Balaton by car via Main Road 8 and by bus; the castle quarter is accessible on foot from the city centre."
      }
    },
    "62": {
      "nev": "Bory Castle",
      "rovid": "Sculptor Jenő Bory’s unique, hand-built ‘fairy-tale castle’.",
      "reszletes": "Bory Castle in Székesfehérvár is a unique creation: the sculptor and architect Jenő Bory built it over more than four decades, largely with his own hands, during the first half of the 20th century. The romantic, fairy-tale-like building combines the forms of medieval castles, Gothic and Renaissance architecture while also making bold use of reinforced concrete, a new material at the time. Towers, loggias, sculptures and rooms displaying the artist’s works make the castle distinctive, with the whole forming a kind of personal Gesamtkunstwerk. The courtyards and gardens are decorated with paintings by Bory’s wife, the artist Ilona Komócsin, and sculptures by Bory. The family continues to maintain the building to this day. Bory Castle is a symbol of perseverance and artistic passion, and one of Székesfehérvár’s most popular attractions.",
      "info": {
        "nyitvatartas": "Seasonal",
        "megkozelites": "In the Öreghegy district of Székesfehérvár; the city can be reached from Budapest by train and via the M7 motorway, and the castle can be reached from the city centre by bus or car."
      }
    },
    "63": {
      "nev": "Tata Old Castle",
      "rovid": "A Gothic lakeside castle on the shore of Tata’s Old Lake.",
      "reszletes": "Tata Old Castle is a Gothic castle standing on the shore of the town’s Old Lake. Its reflection in the water creates one of Hungary’s most picturesque castle views. Built in the 14th and 15th centuries, the fortress once served as a royal hunting lodge and residence; King Matthias and other monarchs also stayed here. The castle assumed a military role during the Ottoman period and was subsequently rebuilt several times; today it houses the Kuny Domokos Museum. Tata is known as the ‘town of waters’, as its lakes, springs, mills and canals define its townscape. The area around the castle, the English Garden and Lake Cseke are popular places for walks. Tata is a popular destination for excursions along the route between Budapest and Vienna.",
      "info": {
        "megkozelites": "Tata can be reached by train on the Budapest–Győr main railway line and by car via the M1 motorway; the castle stands on the lakeshore, close to the town centre."
      }
    },
    "64": {
      "nev": "Herend Porcelain Manufactory",
      "rovid": "The manufactory and visitor centre of the world-famous Herend porcelain brand.",
      "reszletes": "The Herend Porcelain Manufactory is home to one of the world’s most famous porcelain brands and was founded in 1826 in Herend, at the foot of the Bakony Hills. Hand-shaped and meticulously hand-painted Herend porcelain gained international recognition from the mid-19th century and won awards at world exhibitions; its customers included royal courts. Its distinctive patterns, including the Victoria pattern and the Apponyi decoration, remain sought-after collectors’ items. Next to the manufactory is the Porcelanium visitor centre, where visitors can watch the production process and explore the porcelain museum. In the miniature manufactory, craftspeople give live demonstrations of throwing and painting. Herend is an internationally recognised symbol of Hungarian applied art and craft traditions.",
      "info": {
        "nyitvatartas": "Mon–Sat",
        "megkozelites": "Herend can be reached from the vicinity of Veszprém by car or bus via Main Road 8; the village also has a railway station on the Veszprém–Szombathely line."
      }
    },
    "65": {
      "nev": "Zirc Cistercian Abbey",
      "rovid": "A Baroque abbey in the heart of the Bakony Hills, with a historic library and arboretum.",
      "reszletes": "Zirc Cistercian Abbey is a Baroque monastic centre in the heart of the Bakony Hills. Its origins date back to the 12th century, when Béla III settled Cistercian monks here. The present Baroque abbey church and monastery were built in the 18th century and form one of the centres of Cistercian life in Hungary. The abbey is famous for the Reguly Antal Historic Library, a Baroque library hall containing tens of thousands of volumes and retaining its original furnishings, making it one of Hungary’s finest historic libraries. The building adjoins the Arboretum, a well-maintained botanical garden displaying rare species of tree. The surrounding forests and nature trails of the Bakony Hills also offer opportunities for hiking. Zirc is the cultural and spiritual centre of the Bakony Hills.",
      "info": {
        "megkozelites": "Zirc can be reached by train on the Győr–Veszprém railway line and by car or bus via Main Road 82; the abbey stands in the town centre."
      }
    },
    "66": {
      "nev": "Várpalota – Thury Castle",
      "rovid": "A Renaissance border fortress where the Bakony and Vértes hills meet.",
      "reszletes": "Thury Castle in Várpalota is a Renaissance border fortress situated where the Bakony and Vértes hills meet, and was an important element of Hungary’s fortress system during the Ottoman period. It is named after György Thury, a castle captain renowned for fighting the Ottomans and one of the most famous border-fortress warriors of the 16th century. The quadrangular castle, built around an inner courtyard, served as a stronghold of frontier defence during the period of Ottoman rule. Today the building operates as a museum, presenting relics of life in the border fortresses and the history of the region. The castle stands in the town centre and, together with Várpalota’s industrial past, forms part of the region’s heritage. Thury Castle is a memorial to the heroism of the border fortresses.",
      "info": {
        "megkozelites": "Várpalota can be reached by train on the Budapest–Szombathely railway line and by car via Main Road 8; the castle is located in the town centre."
      }
    },
    "67": {
      "nev": "Székesfehérvár – Ruin Garden",
      "rovid": "The excavated ruins of the medieval coronation basilica and royal burial place.",
      "reszletes": "The Ruin Garden in Székesfehérvár, a National Memorial Site, preserves the excavated ruins of one of the most important sites in the medieval Kingdom of Hungary: the coronation and burial basilica. The Basilica of the Provostry of the Virgin Mary was built in the 11th century during the reign of Saint Stephen, and for centuries Hungarian kings were crowned and buried here, including Saint Stephen himself. The building was destroyed during the Ottoman period, and its stones were later removed for use in construction, so only its foundation walls and excavated remains can be seen today. The exhibitions in the open-air ruin garden and the medieval stone carvings illustrate the significance of the former basilica. The site is a symbolic centre of Hungarian statehood and medieval royal representation. The Baroque buildings of central Székesfehérvár complement the attraction.",
      "info": {
        "megkozelites": "In central Székesfehérvár, on Koronázó Square; the city can be reached from Budapest by train and via the M7 motorway, and the Ruin Garden is accessible on foot."
      }
    },
    "181": {
      "nev": "Komárom Fortification System",
      "rovid": "Central Europe’s largest surviving fortification system, comprising 14 structures.",
      "reszletes": "The Komárom Fortification System is one of Central Europe’s largest and most significant surviving military fortification complexes, comprising a total of 14 forts and structures across an area of 58 hectares. Its core is Monostor Fort, whose most spectacular structure is the Command Tower on the Danube side; with its 78 gun ports, it was regarded as the Gibraltar of the Danube. The Brigetio Heritage Visitor Centre presents both the history of the ancient Roman castrum and that of the 19th-century military forces. The fortification system remains an active heritage conservation and museum site, hosting archaeological research, drone surveys and tourism programmes.",
      "info": {
        "megkozelites": "Komárom can be reached by train on the Budapest–Győr main railway line and by car via the M1 motorway; the forts stand on the banks of the Danube."
      }
    },
    "182": {
      "nev": "Tata Esterházy Palace",
      "rovid": "The Baroque palace that hosted Napoleon, on the shore of Tata’s Old Lake.",
      "reszletes": "Tata Esterházy Palace is an 18th-century Baroque aristocratic residence on the shore of Tata’s Old Lake, built by the Counts Esterházy around 1770. The building has a special historical role because Napoleon I fled here from Habsburg power in 1809, and the palace served briefly as his accommodation. Comparable in size to Schönbrunn Palace, the building forms a harmonious ensemble with its park and the lakeshore, and characteristic Baroque garden design can also be observed. Today the palace houses a hotel, a museum and an events hall; when walking along Tata’s lakeshore, the building can be seen from its most spectacular angle.",
      "info": {
        "megkozelites": "Tata can be reached by train on the Budapest–Győr main railway line and by car via the M1 motorway; the palace stands on the shore of the Old Lake."
      }
    },
    "183": {
      "nev": "Majk Hermitage",
      "rovid": "A Camaldolese monastic hermitage with 18th-century cells at the foot of the Vértes Hills.",
      "reszletes": "Majk Hermitage is a unique 18th-century monastic complex at the foot of the Vértes Hills, founded and inhabited by Camaldolese monks who observed a vow of silence. The hermitage complex consists of small cells, a shared church and farm buildings, forming a harmonious whole with nature. A visitor centre and exhibitions are available today for tourists and pilgrims seeking retreat. Accommodation in hermitages is also provided for monks wishing to withdraw from the world. The special tranquillity, natural surroundings and historical aura of Majk Hermitage make it attractive to visitors who happen upon it.",
      "info": {
        "megkozelites": "Majk is a few kilometres by car from Tatabánya towards the Vértes Hills; the hermitage can also be reached along a woodland hiking trail."
      }
    },
    "184": {
      "nev": "Gorsium-Herculia (Tác)",
      "rovid": "The most significant excavated Roman city in ancient Pannonia.",
      "reszletes": "Gorsium-Herculia at Tác contains the remains of one of the most important and most thoroughly excavated military and civilian towns in the ancient province of Pannonia. This strategically important town, situated along the frontier, was also referred to as Herculia in the 2nd and 3rd centuries in memory of Emperor Claudius Gothicus. The street plan visible across the excavated ruins, the foundations of military camps, and the remains of temples and palaces all evoke Pannonia's flourishing period under the Roman Empire. Excavations and experimental archaeology activities are regularly conducted here, while the ancient spring festival is brought to life each year as part of the Floralia Roman Spring Festival.",
      "info": {
        "megkozelites": "Tác can be reached by car from Székesfehérvár by heading south on Main Road 62; Gorsium-Herculia is at the site signposted as the Tác-Fövenypuszta excavations."
      }
    },
    "185": {
      "nev": "Brunszvik Palace, Martonvásár",
      "rovid": "Beethoven's favourite palace and home to the Beethoven Museum, set within the palace grounds.",
      "reszletes": "Brunszvik Palace in Martonvásár was the 18th- and 19th-century Baroque residence of the Counts Brunszvik, later enriched with Neoclassical and Gothic Revival elements, and became famous for its personal connection with Beethoven. As a guest of the Brunszvik siblings, Ludwig van Beethoven spent extended periods in Martonvásár on several occasions and maintained a special relationship with members of the family in the early 1800s. The palace now houses the Beethoven Museum, while concerts are held in the grounds, particularly summer evening performances associated with the celebrated composer. A walk through the 18-hectare English landscape park evokes the aristocratic atmosphere of the Biedermeier era.",
      "info": {
        "megkozelites": "Martonvásár can be reached by direct train on the Budapest–Székesfehérvár railway line or by car via Main Road 70."
      }
    },
    "186": {
      "nev": "Nádasdy Palace, Nádasdladány",
      "rovid": "A 19th-century English Gothic Revival palace in the Tudor style in Fejér County.",
      "reszletes": "Nádasdy Palace in Nádasdladány is one of Hungary's most distinctive Gothic Revival palaces in the English Tudor style, designed and commissioned by Ferenc Nádasdy in the mid-19th century. With its red brickwork, ornate balconies and Gothic towers, the building resembles a Welsh castle more than an aristocratic residence in Transdanubia. After acquiring the palace, the Counts Károlyi further embellished it with the assistance of Miklós Ybl; the Tudor villa, which replaced the Baroque palace characteristic of György Károlyi, presents a distinctive sight. The palace is a member of the European Network of Cultural Centres.",
      "info": {
        "megkozelites": "Nádasdladány can be reached by car from Székesfehérvár via Main Road 63."
      }
    },
    "225": {
      "nev": "Fertőrákos Cave Theatre and Mithras Sanctuary",
      "rovid": "A cave stage created in a stone quarry and an ancient site of the Mithras cult near Sopron.",
      "reszletes": "The Fertőrákos Cave Theatre is one of Central Europe's most unusual cultural venues: a summer open-air stage created in the excavated depths of a former stone quarry, with a capacity of more than 1,000. The quarry was already being worked by the Romans in antiquity; the Leitha limestone extracted here was used to build churches and palaces throughout the region. The cave stage was created in 1921 and has since hosted operas, concerts and theatrical productions every summer, with the natural stone walls providing exceptional acoustics. A sanctuary of Mithras survives in the quarry and is one of Hungary's most complete relics of the ancient Mithras cult: its carved scenes depict the rituals of the solar cult. The site is an organised destination for heritage visits, adventure tours and cultural programmes.",
      "info": {
        "megkozelites": "Fertőrákos lies a few kilometres from Sopron and can be reached by car or bus via Road 84."
      }
    },
    "226": {
      "nev": "Pan-European Picnic Memorial Site",
      "rovid": "19 August 1989 – the historic European site where the Iron Curtain was opened.",
      "reszletes": "The Pan-European Picnic Memorial Site marks the location of one of the most famous events in modern European history. On 19 August 1989, during a picnic held here near the border at Fertőrákos, a gate in the Iron Curtain was briefly opened, allowing several hundred East German citizens to cross into western Hungary and then Austria. This was the first mass escape from behind the Iron Curtain and directly contributed to the fall of the Berlin Wall that November. A monument and open-air exhibition at the memorial site present the events leading up to the occasion, the participants' personal stories and its connections with the pan-European freedom movement. The site is a symbolic place of pilgrimage for European democracy.",
      "info": {
        "megkozelites": "The site lies a few kilometres from Fertőrákos and can be reached by car on roads running towards the border; it is also readily accessible from Sopron."
      }
    },
    "227": {
      "nev": "Zalaegerszeg – Synagogue and Town Centre",
      "rovid": "The twin-towered synagogue and eclectic-style Finance Palace in the Baroque town centre.",
      "reszletes": "Zalaegerszeg, the county town of Zala, is the most important town in south-western Transdanubia, with an attractive centre featuring buildings in a variety of styles. Its most outstanding building is the twin-towered synagogue, built in 1904; it has not been used for religious purposes since the Second World War but hosts concerts and exhibitions. Standing on Széchenyi Square is the eclectic-style Finance Palace, dating from the turn of the 20th century and built for one of Hungary's earliest financial institutions. The Göcsej Open-Air Museum preserves the area's ethnographic heritage, while the Thúry György Museum presents local history. Zalaegerszeg is the gateway to the Göcsej Hills and offers pleasant nature walks along the River Zala.",
      "info": {
        "megkozelites": "Zalaegerszeg can be reached by train on the Budapest–Nagykanizsa railway line or by car via Main Road 76."
      }
    },
    "71": {
      "nev": "Tihany Benedictine Abbey",
      "rovid": "A symbol of the Balaton Uplands and custodian of the oldest surviving record of the Hungarian language.",
      "reszletes": "Tihany Benedictine Abbey is one of the symbols of the Balaton Uplands and was founded by King Andrew I in 1055. Its foundation charter is not merely an ecclesiastical document: it is the first authentic charter to contain Hungarian words, including the famous phrase “feheruuaru rea meneh hodu utu rea”, making it an outstanding monument in the history of the Hungarian language. The present twin-towered abbey church was built in the Baroque style in the 18th century; its carved altars and pulpit are masterpieces by Sebestyén Stulhoff. King Andrew I is buried in the crypt, making the building a rare original site of a medieval royal burial. From its elevated position on the Tihany Peninsula, the church offers an unrivalled panorama of Lake Balaton. Together with its protected geological features, including geyser cones and the Inner Lake, the surrounding landscape is one of the region's most popular destinations.",
      "info": {
        "nyitvatartas": "Daily",
        "megkozelites": "By bus from Veszprém or Balatonfüred, or by car via Main Road 71; in summer, ferry and pleasure-boat services also operate from Balatonfüred and the southern shore."
      }
    },
    "72": {
      "nev": "Festetics Palace",
      "rovid": "One of Hungary's finest Baroque palaces, with the historic Helikon Library.",
      "reszletes": "Festetics Palace in Keszthely is one of Hungary's largest and finest Baroque aristocratic residences, begun by the Festetics family in the mid-18th century. The building, which contains more than one hundred rooms, acquired its present form enriched with Neo-Baroque elements in the late 19th century. Its most valuable section is the Helikon Library, which houses around one hundred thousand volumes in its original hand-carved furnishings, making it one of Hungary's most important surviving aristocratic book collections. The palace is complemented by a well-maintained English landscape park, a palm house and a carriage museum. In 1797, the enlightened aristocrat György Festetics founded the Georgikon here, one of Europe's first higher-education institutions for agriculture. Today, the palace operates as a museum and hosts concerts and exhibitions.",
      "info": {
        "nyitvatartas": "Tuesday–Sunday",
        "megkozelites": "In Keszthely town centre; take the train from Budapest or the southern shore of Lake Balaton to Keszthely, followed by a walk of a few minutes, or travel by car via Main Road 71."
      }
    },
    "73": {
      "nev": "Lake Hévíz",
      "rovid": "One of the world’s largest biologically active thermal lakes.",
      "reszletes": "Lake Hévíz is one of the world’s largest biologically active natural spa lakes, located in the town of Hévíz, a few kilometres from Lake Balaton. The approximately 4.4-hectare lake is fed by warm and hot springs rising from deep underground, so its temperature remains 23–25 °C even in winter and can reach around 38 °C in summer. Its sulphurous water, which contains a small amount of radon, and the therapeutic mud on the lake bed are recommended primarily for treating musculoskeletal, joint and rheumatic conditions. In summer, the lake’s surface is covered with Indian water lilies, creating a remarkable sight. The wooden bathhouse built over the water has been one of the centres of Hungarian bathing culture since the 19th century. Today, Hévíz is one of Hungary’s most important spa resorts and an international health-tourism destination.",
      "info": {
        "nyitvatartas": "Daily",
        "megkozelites": "In the centre of Hévíz; the nearest railway station is in Keszthely, from where it is a few minutes by local bus, or by car via a turn-off from Main Road 71."
      }
    },
    "74": {
      "nev": "Badacsony",
      "rovid": "A volcanic witness hill with basalt columns and a renowned wine region on the lake’s northern shore.",
      "reszletes": "Badacsony is one of the most distinctive volcanic witness hills on the northern shore of Lake Balaton, formed from the eroded remains of an extinct volcano. Spectacular basalt columns—polygonal pillars of rock—rise on its steep slopes; these are remnants of solidified lava and protected geological features. Centuries-old viticulture has developed on the hill’s slopes, and the white wines matured in its volcanic soil, including Kéknyelű, Szürkebarát and Olaszrizling, are among the treasures of Hungarian winemaking. The Kisfaludy Lookout and the hiking trails offer unrivalled views of the lake and the surrounding witness hills, including Szent György Hill and Gulács. The hill is also associated with the memory of painter József Egry and poet Sándor Kisfaludy. Today, Badacsony is one of the leading destinations for wine tourism and hiking around Lake Balaton.",
      "info": {
        "megkozelites": "At Badacsonytomaj; from the southern shore by ferry in summer, or by train on the railway line along Lake Balaton’s northern shore to Badacsony station, then on foot or by open-top shuttle to the hill."
      }
    },
    "75": {
      "nev": "Szigliget Castle",
      "rovid": "A picturesque hilltop castle ruin with unrivalled views of Lake Balaton.",
      "reszletes": "Szigliget Castle is one of the most picturesque medieval castle ruins in the Balaton Uplands. It was built in the mid-13th century, after the Mongol invasion, on top of a steep basalt cone overlooking the lake. The easily defended fortress was long considered impregnable; during the Ottoman period, it was one of the important frontier castles of the Lake Balaton region. In the 18th century, the Habsburg authorities had it demolished along with several other castles, yet its ruins remain impressive and have been partly restored in recent decades. The castle hill offers panoramic views of Lake Balaton, the witness hills and Keszthely Bay. The thatched, whitewashed wine press houses of the old village below the castle are among the finest examples of the atmosphere of the Balaton Uplands. Today, Szigliget is a popular destination for excursions and a settlement known for its artists’ retreat.",
      "info": {
        "megkozelites": "A footpath leads from the village of Szigliget up Castle Hill; the settlement can be reached by car from Main Road 71 and, in summer, by bus from nearby stretches of the lakeshore."
      }
    },
    "76": {
      "nev": "Balatonfüred – Tagore Promenade",
      "rovid": "The historic lakeside promenade and spa resort of this Reform Era bathing town.",
      "reszletes": "Balatonfüred is the oldest bathing town on the northern shore of Lake Balaton and the cradle of 19th-century Hungarian bathing culture. The town’s mineral springs, including the Kossuth Spring, had already made it a spa resort during the Reform Era; its carbonated medicinal water is recommended for cardiovascular conditions, which remain the specialism of the State Heart Hospital today. The historic, plane-tree-lined Tagore Promenade is an iconic place for strolling beside the lake and is adorned with commemorative trees planted for famous visitors to the town. The Balatonfüred Wine Weeks and the Anna Ball are traditional events in Hungarian social life. Many prominent figures of the Reform Era lived and worked in the town, and Hungary’s first stone-built theatre was also constructed here. Today, Balatonfüred is one of the lake’s most prestigious holiday and cultural centres, with a thriving sailing scene.",
      "info": {
        "megkozelites": "By train from Budapest and lakeside settlements to Balatonfüred, whose railway station is close to the shore; by car via Main Road 71, or in summer by scheduled boat services from the southern shore."
      }
    },
    "77": {
      "nev": "Sümeg Castle",
      "rovid": "One of Hungary’s largest hilltop medieval castles, with jousting tournaments.",
      "reszletes": "Sümeg Castle is one of Hungary’s largest and best-preserved hilltop medieval castles, standing on a cone-shaped hill at the edge of the Balaton Uplands. Construction began after the 13th-century Mongol invasion; in the Middle Ages it was a castle of the bishops of Veszprém, while during the Ottoman period it was an important frontier fortress that never remained under Ottoman control for any length of time. Its military role ended in the 18th century, but its walls and towers remained in good condition and have been restored in recent decades. The castle offers extensive panoramic views of the surrounding landscape. Sümeg’s main attraction is its spectacular medieval jousting and falconry display, brought to life in the castle courtyard. The town’s Episcopal Palace and the Maulbertsch frescoes in its Baroque parish church are also significant historic monuments.",
      "info": {
        "nyitvatartas": "Tue–Sun",
        "megkozelites": "Castle Hill can be reached on foot from the town of Sümeg; the town is accessible by train on the Celldömölk–Tapolca line, as well as by bus and car."
      }
    },
    "78": {
      "nev": "Siófok",
      "rovid": "The centre of the southern shore, known as the ‘capital of Lake Balaton’, with beaches and lively summers.",
      "reszletes": "Siófok is the largest town on the southern shore of Lake Balaton and is often referred to as the capital of the lake. The southern shore is characterised by shallow water that deepens gradually and warms up quickly, making it ideal for bathing, especially for families with young children. The town has extensive free and paid beaches, a harbour and lively summer nightlife, making it one of the centres of mass tourism. Its symbol is the reinforced-concrete water tower, which houses a lookout and café. The Krúdy and Petőfi promenades are popular places for summer strolling; operetta composer Imre Kálmán was born in the town, and a museum preserves his memory. With its festivals, concerts and water sports, Siófok is a popular destination among younger visitors.",
      "info": {
        "megkozelites": "Directly by train from Budapest on the southern-shore railway line to Siófok, whose railway station is in the town centre, or by car via the M7 motorway; in summer, scheduled boat services connect it with the northern shore."
      }
    },
    "121": {
      "nev": "Balatonboglár Sphere Lookout",
      "rovid": "A spherical aluminium lookout atop Várdomb, with views over the lake.",
      "reszletes": "The Balatonboglár Sphere Lookout is one of the southern shore’s most distinctive structures, standing atop Várdomb above the town. Officially named the János Xantus Sphere Lookout, its spherical aluminium structure was originally presented at the 1958 Brussels World’s Fair as a symbol of the Hungarian aluminium industry under the name ‘Hungarian Atomium’, before being moved to its present location in 1959. Its distinctive futuristic form reflects the industrial pride of the era. The lookout offers panoramic views of Lake Balaton, the southern shore and the surrounding hills. Várdomb is a destination for excursions associated with the volcanic witness hills of the Lake Balaton region. The Sphere Lookout attracts tens of thousands of visitors each year.",
      "info": {
        "megkozelites": "Balatonboglár can be reached by train on the southern-shore railway line and by car via Main Road 7; Várdomb is a short walk from the town."
      }
    },
    "122": {
      "nev": "Tapolca Lake Cave",
      "rovid": "A lake cave beneath a town in the Balaton Uplands, which can be explored by boat.",
      "reszletes": "Tapolca Lake Cave is one of the most unusual natural attractions in the Balaton Uplands, extending directly beneath the town of Tapolca. An underground lake fills the passages of the cave system, which formed in karst rock through the dissolving action of warm-water springs. The lake can be explored by boat, making the experience unique. The cave’s therapeutic, dust-free air has a beneficial effect on people suffering from respiratory illnesses, so it also operates as a therapeutic cave. The cave entrance is near the town’s main square, and visitors row across the lake through low passages. A visitor centre and exhibition are also associated with the cave. Tapolca Lake Cave is a popular destination for cave tourism and nature excursions.",
      "info": {
        "megkozelites": "Tapolca can be reached by train and car from Lake Balaton’s northern shore and from the direction of Sümeg; the cave entrance is in the town centre."
      }
    },
    "123": {
      "nev": "Balatonföldvár – Maritime History Lookout",
      "rovid": "A ship-shaped lookout and maritime history visitor centre on the southern shore.",
      "reszletes": "Balatonföldvár is one of the southern shore’s prestigious resort towns. One of its distinctive attractions is the ship-shaped lookout known as the ‘mast’, together with the adjoining Maritime History Visitor Centre. Its interactive exhibition presents the history of shipping and sailing on Lake Balaton, from the beginnings of steam navigation to the present day. The lookout offers a beautiful panorama of the lake and the southern shore. In the early 20th century, Balatonföldvár was developed as a purpose-designed resort town, with rows of villas and a harbour. The town is one of the centres of sailing on Lake Balaton. Its parks and promenades provide pleasant places to relax by the lake.",
      "info": {
        "megkozelites": "Balatonföldvár can be reached by train on the southern shore railway line and by car via Main Road 7; the visitor centre is located near the harbour."
      }
    },
    "124": {
      "nev": "Ruins of Somogyvár’s St Giles Abbey",
      "rovid": "The ruins of a Benedictine abbey founded by King Saint Ladislaus, and the king’s former burial place.",
      "reszletes": "The ruins of St Giles Abbey in Somogyvár stand on Kupavárhegy, south of Lake Balaton, and preserve an important monument of medieval Hungary. The abbey was founded in 1091 by King Saint Ladislaus for French Benedictine monks and had close ties with the Abbey of Saint-Gilles in southern France. In the 11th and 12th centuries, the monastery was an important centre of Hungarian–French ecclesiastical relations, and for a time only French monks were permitted to live there. According to tradition, King Saint Ladislaus was first buried here before his body was taken to Nagyvárad. The excavated foundation walls, the remains of the church and the collection of stonework illustrate the significance of the medieval abbey. The site is a National Memorial commemorating the early period of Hungarian statehood and Christianity.",
      "info": {
        "megkozelites": "Somogyvár can be reached by car and bus from Kaposvár and the southern shore of Lake Balaton; the ruins stand on a hill above the village and are accessible via a designated path."
      }
    },
    "191": {
      "nev": "Esterházy Palace, Fertőd",
      "rovid": "Hungary’s Versailles – the country’s largest Rococo palace complex.",
      "reszletes": "The Esterházy Palace in Fertőd, also known as the ‘Hungarian Versailles’, is the country’s largest and most magnificent Rococo palace complex. It largely acquired its present form between 1762 and 1784. Its main building and side wings stand in a park of approximately 300 hectares, whose statues, pleasure pavilions and Chinese pagoda once made it one of Europe’s most celebrated aristocratic residences. Joseph Haydn lived and worked at Eszterháza from 1766 to 1790 as conductor and composer at the Esterházy court, and through his work as a conductor, one of the foundations of European symphonic music was laid here. The palace now houses a museum, while regular Haydn concerts and music festivals bring its cultural heritage to life.",
      "info": {
        "megkozelites": "Fertőd can be reached by car between Sopron and Győr, by turning off Main Road 85; it is also accessible by bus from Sopron."
      }
    },
    "192": {
      "nev": "Széchenyi Palace, Nagycenk",
      "rovid": "The birthplace and memorial site of István Széchenyi, ‘the Greatest Hungarian’.",
      "reszletes": "The Széchenyi Palace in Nagycenk is the birthplace of Count István Széchenyi, known as ‘the Greatest Hungarian’, and was the aristocratic residence of the Széchenyi family. Its construction began in 1750. The building and park form one of the most important memorial sites dedicated to Széchenyi’s ideals, his activities during the Reform Era and the 19th-century concept of progress. The palace acquired its present form in 1840, during Széchenyi’s lifetime. It was damaged to a greater or lesser extent during the Second World War, but restoration was completed in 1988, and it has been a National Memorial since 2016. A museum and regular cultural events await visitors in the palace and its park, with a 300-year-old avenue of lime trees.",
      "info": {
        "megkozelites": "Nagycenk lies a few kilometres from Sopron and can be reached by car or bus via Main Road 84; a heritage narrow-gauge railway also runs from Sopron to the palace."
      }
    },
    "193": {
      "nev": "Árpád-era Abbey Church of Lébény",
      "rovid": "The best-preserved Romanesque Benedictine church from medieval Hungary.",
      "reszletes": "The Benedictine abbey church of Lébény – also known as the remains of Saint James’s Abbey – is one of the most complete and beautiful surviving Romanesque church complexes from medieval Hungary. Built around 1208, the twin-towered basilica is a rare, intact monument of Árpád-era religious architecture. Its façade, with carved stone portals and rows of Romanesque windows, represents the pinnacle of contemporary stonemasonry. The church was damaged during the Mongol invasion, the Ottoman occupation and the wars of reconquest, but it was restored each time. Today it is one of the country’s best-preserved Árpád-era church complexes, and its quiet rural setting is equally captivating.",
      "info": {
        "megkozelites": "Lébény can be reached from the vicinity of Győr by car via Main Road 14 and by train on the Győr–Hegyeshalom railway line."
      }
    },
    "194": {
      "nev": "Zalaegerszeg – Göcsej Open-Air Museum",
      "rovid": "An open-air museum presenting the traditional vernacular architecture of the Göcsej region.",
      "reszletes": "The Göcsej Open-Air Museum in Zalaegerszeg presents the traditional rural way of life, vernacular architecture and farming culture of the Göcsej region in the Zala Hills. The open-air collection includes homes, farm buildings, a blacksmith’s workshop, a watermill and a brandy-distilling hut, reconstructed to reflect their earliest known condition. The region is characterised by the so-called ‘szer’ settlement type, the traditional structure of closely interconnected villages, traces of which are also preserved by the museum. Visitors can also learn about Hövej lace, Hetés textiles and the distinctive traditions of Őrség.",
      "info": {
        "megkozelites": "Zalaegerszeg can be reached by train on the Budapest–Nagykanizsa railway line or by car via Main Road 76; the museum stands on the outskirts of the city in a natural park setting."
      }
    },
    "222": {
      "nev": "Keszthely – Town Centre and Beach",
      "rovid": "The largest town on Lake Balaton, with a Baroque centre and the lake’s most beautiful beach.",
      "reszletes": "Keszthely lies at the westernmost tip of Lake Balaton and has nearly 20,000 inhabitants. It is the largest settlement on the lake and one of its most important tourist centres. The town has an elegant Baroque centre dominated by Festetics Palace and its church; cafés, restaurants and shops selling folk handicrafts line Fő utca. Helikon Beach is one of the most beautiful beaches on Lake Balaton, with excellent facilities and the lake’s shallow, rapidly warming water. Keszthely is also the informal gateway to Balaton Uplands National Park, where Kis-Balaton and the mouth of the Zala form a valuable nature conservation area. Keszthely welcomes tourists throughout the year: Festetics Palace is also open in winter, while the Helikon Library is one of Hungary’s most beautiful palace libraries.",
      "info": {
        "megkozelites": "Keszthely is served by direct trains on the Budapest–Keszthely railway line and can also be reached by car by turning off the M7 motorway."
      }
    },
    "223": {
      "nev": "Balatonfüred – Spa Town and Tagore Promenade",
      "rovid": "The first spa town on Lake Balaton, home of the Anna Ball and Tagore Promenade.",
      "reszletes": "Balatonfüred is Hungary’s first and most famous lakeside spa town, whose springs were already being used for medicinal purposes in the 18th century. The town’s principal attraction is Gyógy tér, home to the Kossuth Lajos drinking fountain and numerous historic buildings, including the former Horváth House, where the Anna Ball was held. Tagore Promenade is a romantic lakeside walkway named in memory of the 1926 visit by the Indian Nobel Prize-winning poet Rabindranath Tagore; sailing boats and ferries bob beside the promenade. During the Reform Era associated with Lajos Kossuth, Balatonfüred was an important intellectual and social centre. The first Anna Ball in Balatonfüred was held here in 1825 and subsequently became an annual tradition. The town also has a cardiac hospital and a climate station.",
      "info": {
        "megkozelites": "Balatonfüred can be reached by train on the Budapest–Tapolca railway line or by car from the M7 motorway via Main Road 71."
      }
    },
    "224": {
      "nev": "Fonyód – Várhegy and the Balaton Shore",
      "rovid": "One of the largest towns on the southern shore, with a twin-peaked castle hill and a long beach.",
      "reszletes": "Fonyód is one of the most important resort towns and railway junctions on the southern shore of Lake Balaton. Its distinctive feature is Várhegy, a twin-peaked rise unique to the southern shore of the lake. It consists of the formerly separate Kis-Várhegy and Nagy-Várhegy hills and forms a striking natural landmark when viewed from the lake. Traces of prehistoric and medieval fortifications survive on top of the castle hill. Fonyód’s long, well-developed beaches play a major role in tourism on the southern shore, while regular boat services depart from the harbour for Badacsony on the northern shore. A pedestrian route linking the town with neighbouring Balatonboglár has become a popular feature of lakeside tourism.",
      "info": {
        "megkozelites": "Fonyód is easily accessible by train on the southern-shore railway line and by car via Main Road 7; it is approximately 130 km from Budapest."
      }
    },
    "81": {
      "nev": "Pannonhalma Archabbey",
      "rovid": "The country’s oldest Benedictine monastery, founded in 996, and a World Heritage Site.",
      "reszletes": "Pannonhalma Archabbey is Hungary’s oldest monastic community and the cradle of Hungarian Christianity. It was founded by Benedictine monks in 996, before the foundation of the Hungarian state. The abbey stands on Szent Márton Hill and has been a UNESCO World Heritage Site since 1996, marking its thousandth anniversary. The complex combines elements from the Romanesque, Gothic and Neoclassical periods; at its heart are the 13th-century basilica and crypt. The abbey’s famous library, containing several hundred thousand volumes, is one of the country’s largest historic libraries and preserves knowledge ranging from medieval codices to modern publications. The abbey also includes a secondary school, winery and herb garden, so both tradition and an active monastic life remain present today. Pannonhalma is a symbolic site of Hungarian cultural history and Christianity.",
      "info": {
        "nyitvatartas": "By guided tour",
        "megkozelites": "Pannonhalma can be reached from Győr by car or bus via Main Road 82; the nearest major railway junction is Győr, with local services running from there."
      }
    },
    "82": {
      "nev": "Sopron – Firewatch Tower",
      "rovid": "The symbol of ‘the most loyal town’, a medieval and Baroque observation tower.",
      "reszletes": "Sopron’s Firewatch Tower is the symbol of the town and a defining building in its richly historic centre. The lower section of the approximately 58-metre-high tower rests on Roman foundations, its cylindrical middle section is medieval, and its upper section with a balcony is Baroque, so the entire structure embodies the layers of the town’s history. It takes its name from the watchmen who observed fires and the approach of enemies from here and sounded warning blasts on their horns. The Gate of Loyalty beneath the tower commemorates the fact that Sopron’s residents voted to remain part of Hungary in a 1921 referendum, earning the town the title ‘the most loyal town’ (Civitas Fidelissima). The tower’s balcony offers fine views over the town centre and the surrounding hills. Sopron’s Gothic and Baroque centre and its proximity to Lake Fertő make it a major tourist destination.",
      "info": {
        "megkozelites": "In the centre of Sopron; the town can be reached from Budapest and Győr by train, or by car via Main Roads 84 and 85. The tower stands beside Fő tér."
      }
    },
    "83": {
      "nev": "Fertő Cultural Landscape",
      "rovid": "Europe’s westernmost steppe lake and a transboundary World Heritage cultural landscape.",
      "reszletes": "Lake Fertő is Europe’s westernmost steppe lake and a transboundary Hungarian–Austrian World Heritage cultural landscape, listed by UNESCO since 2001. The shallow saline lake, densely fringed with reed beds, has a highly variable water level and supports distinctive wildlife, particularly an outstanding variety of birdlife. On the Hungarian side, Fertőrákos is home to the famous quarry, whose monumental, cavern-like interior hosts concerts and opera performances. A network of cycle paths runs along the lakeshore and around the lake into Austria, making the area a major destination for cycle tourism. Water sports, including sailing and windsurfing, and birdwatching are also popular. The landscape also preserves evidence of centuries-old reed harvesting and viticulture.",
      "info": {
        "megkozelites": "Fertőrákos can be reached from Sopron by car or bus; the lakeside cycle paths are also accessible from Sopron and the surrounding villages."
      }
    },
    "84": {
      "nev": "Kőszeg – Jurisics Castle",
      "rovid": "A castle in the historic town centre preserving the memory of the Ottoman siege of 1532.",
      "reszletes": "Jurisics Castle in Kőszeg is a former border fortress preserving the memory of the 1532 Ottoman siege, one of the legendary events of Hungarian history. It was here that Miklós Jurisics and his small defending force repelled Sultan Suleiman’s vast army, delaying it and preventing the siege of Vienna; according to tradition, the midday bell is also connected with this victory. The castle, with its inner courtyard and corner towers, now operates as a museum and presents relics of the border-fortress campaigns. The centre of Kőszeg below the castle, focused on Jurisics tér, is one of the country’s best-preserved medieval and Baroque historic ensembles. The small town’s atmospheric streets, the Heroes’ Tower and its burghers’ houses evoke the atmosphere of past centuries. Situated at the eastern foothills of the Alps, Kőszeg is a popular historic small town.",
      "info": {
        "nyitvatartas": "Tue–Sun",
        "megkozelites": "Kőszeg can be reached by train on the Szombathely–Kőszeg railway line or by car from Main Road 87; the castle stands on the edge of the historic town centre."
      }
    },
    "85": {
      "nev": "Győr – Basilica and Káptalandomb",
      "rovid": "The heart of Győr’s Baroque town centre and the shrine of Our Lady of the Weeping Image.",
      "reszletes": "The historic heart of central Győr is Káptalandomb, a hill rising at the confluence of the Danube, Rába and Rábca rivers and forming the town’s ecclesiastical and historical centre. Győr Cathedral stands on the hill. Built on 11th-century foundations, it combines elements from the Romanesque, Gothic and Baroque periods. The church’s most precious treasure is the devotional image of Our Lady of the Weeping Image, a painting of Irish origin which, according to tradition, wept tears of blood in 1697 and has been a pilgrimage destination ever since. The cathedral contains the Gothic Hédervári Chapel and the ornate reliquary bust of King Saint Ladislaus, a masterpiece of Hungarian goldsmithing. Káptalandomb and the cobbled streets of the Baroque town centre are among Győr’s main tourist attractions. The town is a major stop on the Vienna–Budapest route.",
      "info": {
        "megkozelites": "Győr can be reached by train on the main Budapest–Vienna railway line and by car via the M1 motorway; Káptalandomb is within walking distance of the town centre."
      }
    },
    "86": {
      "nev": "Sárvár – Nádasdy Castle",
      "rovid": "A Renaissance castle where the first book in the Hungarian language was printed.",
      "reszletes": "Nádasdy Castle in Sárvár is a pentagonal Renaissance fortress with Italian-style bastions. In the 16th century, it was the centre of the Nádasdy family’s estates and an important centre of Hungarian culture. János Sylvester’s printing press operated in the castle, producing the first printed book written entirely in Hungarian in 1541, a Hungarian translation of the New Testament. The castle’s great hall is covered with monumental ceiling and wall frescoes depicting battles against the Ottomans and biblical scenes. The building now houses the Ferenc Nádasdy Museum. Beside the castle is Sárvár’s famous spa and leisure baths, the foundation of the town’s health tourism. The combination of historical heritage and thermal tourism makes Sárvár an attractive destination.",
      "info": {
        "megkozelites": "Sárvár can be reached by train on the Szombathely–Budapest railway line or by car via Main Road 84; both the castle and the baths are located in the town."
      }
    },
    "87": {
      "nev": "Ják Abbey Church",
      "rovid": "One of the finest twin-towered churches of Hungarian Romanesque architecture.",
      "reszletes": "Ják Abbey Church is one of the finest and best-preserved works of Hungarian Romanesque architecture. It was built in the mid-13th century as the church of a monastery founded by a noble clan. The most valuable feature of the twin-towered Benedictine church, dedicated to Saint George, is its richly carved, deeply recessed and multi-layered main portal, known as the ‘Ják Portal’, a masterpiece of Romanesque stone carving. Statues of Christ and the apostles stand in a row above the portal. The church is so distinctive that its portal served as the model for the entrance of Vajdahunyad Castle in Budapest. The circular Saint James’s Chapel stands beside the church. Ják is an outstanding monument to medieval Hungarian architecture and stone carving.",
      "info": {
        "megkozelites": "Ják can be reached from Szombathely by car or bus; the nearest railway station is in Szombathely, with local services continuing to the village."
      }
    },
    "88": {
      "nev": "Szombathely – Iseum",
      "rovid": "Roman Savaria’s sanctuary of Isis, a reconstructed ancient complex.",
      "reszletes": "The Iseum in Szombathely is one of Hungary’s most significant monuments from the Roman Empire: a reconstructed complex centred on an ancient sanctuary built in honour of the Egyptian goddess Isis. The original sanctuary was built in the second century in the Roman city of Savaria and attests to the presence of Eastern cults in Pannonia. The sanctuary was partially rebuilt on the basis of the excavated remains, giving visitors an insight into Roman religious architecture. The complex also includes an archaeological exhibition presenting life in the Roman city. Szombathely, or Savaria, is one of Hungary’s oldest cities, founded by the Romans, and the birthplace of Bishop Saint Martin. The Iseum is a major site within the city’s rich Roman heritage.",
      "info": {
        "megkozelites": "In central Szombathely; the city can be reached from Budapest and Győr by train, or by car via main roads 86 and 87."
      }
    },
    "228": {
      "nev": "Paks Nuclear Power Plant – Nuclear Energy Museum",
      "rovid": "Hungary’s only nuclear power plant and a museum presenting the history of nuclear energy.",
      "reszletes": "Paks Nuclear Power Plant is Hungary’s only nuclear power station and one of the largest in Central Europe, supplying approximately 40–50 per cent of the country’s electricity needs. Its four Soviet-designed VVER reactor units were commissioned between 1982 and 1987; the current capacity expansion project, Paks II, is one of Hungary’s most significant energy investments. Located within the power plant grounds, the Nuclear Energy Museum uses indoor and outdoor exhibitions to present the principles, history and current applications of nuclear energy and technology, displaying more than 2,000 objects, models and interactive exhibits. The museum receives ten thousand visitors annually, including many school groups, while the bank of the Danube near Paks is also a scenic destination for excursions.",
      "info": {
        "megkozelites": "Paks can be reached from Budapest by car via main road 6, or by train via Dunaföldvár; the museum is located at the entrance to the nuclear power plant."
      }
    },
    "229": {
      "nev": "Szekszárd – Town Centre and Wine Region",
      "rovid": "The seat of Tolna County, with an Art Nouveau town hall and the Szekszárd Bikavér wine region.",
      "reszletes": "Szekszárd is the seat of Tolna County and the capital of the Szekszárd wine region, where Szekszárd Bikavér wines—reds based on Blaufränkisch, Merlot and Kékoportó—rank among the outstanding products of Hungarian winemaking. The town’s main square is dominated by the eighteenth-century Baroque Inner-City Parish Church and the Town Hall, remodelled in the Art Nouveau style; the latter acquired its present form in 1904, and its façade is decorated with Zsolnay ceramics. The Mór Wosinsky County Museum presents the archaeological heritage of the Danube–Tisza Interfluve and Tolna County; the medieval Csonka Tower in Dunaföldvár is another monument of Tolna County. As part of the area’s wine tourism, wine cellars and harvest festivals offer visitors unique experiences.",
      "info": {
        "megkozelites": "Szekszárd can be reached by train on the Dombóvár–Bátaszék railway line or by car via main road 6; it is approximately 150 km from Budapest."
      }
    },
    "230": {
      "nev": "Danube–Dráva National Park – Gemenc Forest",
      "rovid": "The country’s largest floodplain forest, a treasure trove of wildlife along the Danube.",
      "reszletes": "The Gemenc region of Danube–Dráva National Park is Hungary’s largest floodplain forest, where oxbow lakes, islands and natural floodplain gallery forests alternate along the left bank of the Danube. Covering nearly 18,000 hectares, the area provides a habitat for floodplain wildlife, including deer, wild boar, black storks, white storks, white-tailed eagles and countless species of fish. The nostalgic narrow-gauge Gemenc Forest Railway enables visitors to travel deep into the forest; walking trails lead from its stops to oxbow lakes and woodland areas. The Gemenc Forest also attracts international interest through its world-famous red deer population and hunting tourism. Visitors can stay in the Habsburg-era hunting lodge at Karapancsa Castle and Manor.",
      "info": {
        "megkozelites": "Gemenc lies along the Danube between Baja and Szekszárd and can be reached by the Gemenc narrow-gauge railway and by boat; the area can also be explored on walking trails and by water tour."
      }
    },
    "91": {
      "nev": "Pécs Cathedral",
      "rovid": "Pécs’s four-towered cathedral, built on Romanesque foundations, on Dóm Square.",
      "reszletes": "Pécs Cathedral, officially the Cathedral of Saints Peter and Paul, is one of Pécs’s landmarks and the jewel of the city’s episcopal centre. The building stands on eleventh-century foundations dating from the reign of Saint Stephen and has undergone numerous alterations since the Romanesque period; it acquired its present four-towered, Romanesque Revival appearance during a major reconstruction at the end of the nineteenth century. Its four slender towers dominate Dóm Square and the city skyline from afar. The church’s crypt and richly decorated interior preserve examples of medieval and Historicist art. The cathedral forms part of the town-centre complex presenting Pécs’s Early Christian and medieval heritage. The Mediterranean atmosphere of central Pécs makes it one of southern Hungary’s principal tourist destinations.",
      "info": {
        "megkozelites": "In central Pécs, on Dóm Square; the city can be reached from Budapest by train and via the M6 motorway, and the cathedral is within walking distance of the centre."
      }
    },
    "92": {
      "nev": "Pécs – Early Christian Burial Chambers",
      "rovid": "The World Heritage-listed Early Christian cemetery of Roman Sopianae.",
      "reszletes": "The Early Christian burial chambers in Pécs form part of the World Heritage-listed cemetery of Roman Sopianae, now Pécs, which has been on the UNESCO list since 2000. Dating from the fourth century, the underground burial chambers and funerary structures are remarkable for their surviving wall paintings depicting biblical scenes, including Adam and Eve and Daniel in the lions’ den. The largest excavated structure is the seven-apsed Cella Septichora, above which a modern visitor centre has been built. These burial sites are outstanding and rare European relics of early Christianity in the Roman Empire. The painted burial chambers are significant in archaeological, art-historical and religious-historical terms. The site is the centre of Pécs’s Early Christian heritage.",
      "info": {
        "nyitvatartas": "Tue–Sun",
        "megkozelites": "In central Pécs, immediately beside the cathedral; the city can be reached from Budapest by train and via the M6 motorway."
      }
    },
    "93": {
      "nev": "Mosque of Gazi Pasha Qasim",
      "rovid": "The largest surviving Ottoman-period building in Hungary, on Széchenyi Square.",
      "reszletes": "The Mosque of Gazi Pasha Qasim is the largest surviving building from the period of Ottoman rule in Hungary and stands on Pécs’s main square, Széchenyi Square. It was built in the mid-sixteenth century, during Ottoman rule, using stone from an earlier Christian church; its distinctive dome and square massing display the features of classical Ottoman mosque architecture. After Ottoman rule ended, the mosque was converted into a Catholic church, but its original form has largely survived, and details from the Ottoman period can still be seen inside. The building remains an active church while also being the most significant physical monument of Hungary’s Ottoman heritage. Standing on the main square, the mosque is one of Pécs’s best-known landmarks. Together with the city’s other Ottoman monuments, it offers a unique presentation of the period of Ottoman rule.",
      "info": {
        "megkozelites": "In central Pécs, on Széchenyi Square; the city can be reached from Budapest by train and via the M6 motorway."
      }
    },
    "94": {
      "nev": "Villány Wine Region",
      "rovid": "Hungary’s southern historic wine region, renowned for its red wines.",
      "reszletes": "The Villány wine region is Hungary’s southernmost historic wine region and is best known for its full-bodied, high-quality red wines. The warm, Mediterranean-influenced climate and limestone soil provide excellent conditions for ripening red grape varieties, including Cabernet Sauvignon, Merlot, Cabernet Franc and Portugieser. The rows of cellars and press houses in Villány and Villánykövesd are centres of wine tourism, offering guests wine tastings and cellar visits. The wine region is one of the pioneers of the revival of Hungarian red-wine culture and boasts numerous internationally award-winning wineries. The Villány Wine Route was one of the country’s first established wine routes. The region’s cuisine and Swabian traditions further enrich the experience.",
      "info": {
        "megkozelites": "Villány can be reached from Pécs by train on the Pécs–Villány railway line or by car via roads 57 and 5701; the cellar rows are located within the settlement."
      }
    },
    "95": {
      "nev": "Siklós Castle",
      "rovid": "One of Hungary’s best-preserved, continuously inhabited medieval castles.",
      "reszletes": "Siklós Castle is one of Hungary’s best-preserved medieval castles and one of those that has been continuously inhabited for the longest time. It stands on a hill at the foot of the Villány Hills. Originating in the 13th century, the fortress combines Gothic and Renaissance elements. It served as an aristocratic residence in the Middle Ages and was never completely destroyed, so it retains the characteristic features of a period castle in excellent condition. Its highlights include the Gothic castle chapel with its rich stone carvings, as well as the vaulted knights’ halls and the casemates, which are open to visitors as a museum. The castle tower offers fine views of the surrounding countryside. Together with the nearby Harkány medicinal spa and the Villány wine region, Siklós is one of Southern Transdanubia’s main tourist destinations. The castle also hosts cultural events in summer.",
      "info": {
        "nyitvatartas": "Tue–Sun",
        "megkozelites": "Siklós can be reached from Pécs by car or coach via Main Road 58; the castle stands on a hill overlooking the town, close to the centre."
      }
    },
    "96": {
      "nev": "Harkány Medicinal Spa",
      "rovid": "A spa town in Southern Transdanubia renowned for its hydrogen sulphide-rich medicinal water.",
      "reszletes": "Harkány is one of Southern Transdanubia’s best-known spa towns, renowned for the unique composition of its medicinal water. The high hydrogen sulphide content of Harkány’s medicinal water is rare even worldwide, and it has proved effective primarily in treating joint and musculoskeletal conditions, as well as dermatological complaints, including psoriasis. The medicinal water was discovered in the first half of the 19th century, and the spa has developed continuously ever since. Its extensive medicinal and open-air bathing complex, together with its medical treatment department, makes the town one of Hungary’s major health-tourism centres. Siklós Castle and the Villány wine region are also within easy reach, allowing a visit to the spa to be combined with other activities. Harkány is a typical example of a Southern Transdanubian holiday destination built around thermal tourism.",
      "info": {
        "megkozelites": "Harkány can be reached from Pécs by car or coach via Main Road 58; the spa is located in the town centre."
      }
    },
    "97": {
      "nev": "Abaliget Cave",
      "rovid": "A spectacular, horizontal show cave with stalactites and stalagmites in the Western Mecsek.",
      "reszletes": "Abaliget Cave is one of the principal natural attractions of the Western Mecsek, an easily accessible, horizontal cave with stalactites and stalagmites. The cave was formed by an underground stream that accompanies visitors throughout the accessible route; its dripstone formations and distinctive subterranean features make it particularly interesting. The cave’s therapeutic microclimate, with dust-free, humid air, has a beneficial effect on people suffering from respiratory diseases, and it is therefore also used as a therapeutic cave. Near the entrance, a bat museum presents the bat life of the cave and its surroundings. The lake beside the cave and the developed rest areas provide a pleasant setting for an outing. Abaliget is a popular destination for hiking and cave tourism in the Mecsek.",
      "info": {
        "megkozelites": "Abaliget can be reached from Pécs by car or coach; the cave is located on the edge of the village."
      }
    },
    "98": {
      "nev": "Szekszárd Wine Region",
      "rovid": "A historic red-wine region among the hills and one of the homes of Bikavér.",
      "reszletes": "Szekszárd is the centre of one of Southern Transdanubia’s oldest and most important historic red-wine regions, set among the hills of Tolna County. Kadarka and Szekszárdi Bikavér, which has a centuries-old tradition, are characteristic wines of the region; the loess soil and favourable climate produce full-bodied red wines. Numerous press houses and cellars in the town and the surrounding hills welcome wine tourists. Szekszárd is also the gateway to the Gemenc Forest, one of Europe’s largest floodplain forests, and to Sárköz, an ethnographic region known for its colourful folk art. The poet Mihály Babits was born in the town, and a museum preserves his memory. Szekszárd is a meeting point of wine, nature and folk tradition.",
      "info": {
        "megkozelites": "Szekszárd can be reached by car via Main Road 6 and the M6 motorway, or by coach; the town lies between Budapest and Pécs."
      }
    },
    "141": {
      "nev": "Pécs – Zsolnay Cultural Quarter",
      "rovid": "A cultural quarter created on the former site of the world-famous Zsolnay ceramics factory.",
      "reszletes": "The Zsolnay Cultural Quarter is one of Pécs’s largest and most modern attractions, created on the approximately five-hectare former site of the world-famous Zsolnay porcelain factory. The Zsolnay factory became world-famous in the second half of the 19th century for its distinctive, frost-resistant ceramics with metallic, iridescent eosin glazes, which adorn numerous buildings in Hungary and abroad. The restored quarter houses exhibition spaces, museums, artists’ studios, university faculties and places to eat and drink. Two permanent exhibitions present the golden age of the Zsolnay family and the Pink Exhibition, while the mausoleum of Vilmos Zsolnay can also be visited. The quarter also hosts cultural programmes and festivals. The Zsolnay Quarter is an outstanding showcase for Hungarian applied arts and Pécs’s industrial heritage.",
      "info": {
        "megkozelites": "The Zsolnay Quarter can be reached from central Pécs by local bus or on foot; the city can be reached from Budapest by train and via the M6 motorway."
      }
    },
    "142": {
      "nev": "Pécs – Vasarely Museum",
      "rovid": "A museum dedicated to Pécs-born Victor Vasarely, the founder of Op Art.",
      "reszletes": "The Vasarely Museum in Pécs presents works by Victor Vasarely (Győző Vásárhelyi), who was born in the city and became world-famous in France. Vasarely was one of the founders and best-known representatives of Op Art, an artistic movement based on optical illusions and visual effects. The museum occupies a historic building on Baroque Káptalan Street and displays the artist’s geometric, vibrant works that create an impression of depth. Visitors can follow the development of Vasarely’s art from his early graphic works to his kinetic creations. The museum was founded in 1976 and is one of the gems of Pécs’s rich array of museums. The Vasarely Museum is an important Hungarian showcase for 20th-century modern art.",
      "info": {
        "megkozelites": "In central Pécs, on Káptalan Street near the cathedral; the city can be reached from Budapest by train and via the M6 motorway."
      }
    },
    "143": {
      "nev": "Pécs – Csontváry Museum",
      "rovid": "Home to major works by Tivadar Csontváry Kosztka, the solitary genius of painting.",
      "reszletes": "The Csontváry Museum in Pécs houses the most significant works of Tivadar Csontváry Kosztka (1853–1919), one of the most distinctive and enigmatic figures in Hungarian painting. Csontváry was an independent, visionary painter whose work cannot be classified within any particular movement. He received little recognition during his lifetime, but after his death came to be regarded as one of the giants of modern Hungarian painting. The museum displays his large-scale, monumental masterpieces, including the famous The Lonely Cedar and Pilgrimage to the Cedars in Lebanon. The paintings’ extraordinary colours and distinctive atmosphere make a powerful impression on visitors. The museum is located on Janus Pannonius Street in central Pécs. The Csontváry Museum is one of the foremost showcases of Hungarian art history.",
      "info": {
        "megkozelites": "In central Pécs, on Janus Pannonius Street near the cathedral; the city can be reached from Budapest by train and via the M6 motorway."
      }
    },
    "144": {
      "nev": "Pécs TV Tower (Misina Peak)",
      "rovid": "A 197-metre observation tower on the Mecsek’s Misina Peak, offering panoramic views of the city.",
      "reszletes": "The Pécs TV Tower is a 197-metre structure standing on the 535-metre Misina Peak in the Mecsek Mountains. Rising above the city, it is visible from far away. Its observation deck and café offer panoramic views of Pécs and the Mecsek, and in clear weather it is possible to see as far as the Villány Hills and even Lake Balaton. In addition to television broadcasting, the tower also serves tourism and is one of the Mecsek’s main excursion destinations. The summit is a popular destination in the forested hills above Pécs and can be reached by walking trails or by car. The tower is one of the city’s symbols and a prominent landmark. Misina Peak is a popular destination for hiking and views.",
      "info": {
        "megkozelites": "Misina Peak can be reached from central Pécs by car or bus 35; the tower stands on a summit in the Mecsek."
      }
    },
    "145": {
      "nev": "Mohács National Memorial Site",
      "rovid": "A memorial to the victims of the 1526 Battle of Mohács on the former battlefield.",
      "reszletes": "The Mohács National Memorial Site commemorates the victims of the Battle of Mohács, fought on 29 August 1526, near the former battlefield at Sátorhely. The disaster at Mohács was one of the greatest tragedies in Hungarian history: King Louis II lost his life in the battle, and the defeat led to the disintegration of the medieval Kingdom of Hungary and the beginning of approximately 150 years of Ottoman rule. A symbolic memorial park featuring wood carvings and sculptures has been created above the excavated mass graves. The exhibition in the visitor centre presents the history, background and consequences of the battle. The memorial site is a dignified place of national mourning and remembrance. Mohács is also known worldwide for its Busójárás festival, a traditional folk custom marking the banishment of winter.",
      "info": {
        "megkozelites": "The memorial site is located at Sátorhely, a few kilometres from Mohács; Mohács can be reached from Pécs by car or bus via main roads 57 and 56."
      }
    },
    "146": {
      "nev": "Szigetvár Castle",
      "rovid": "A memorial to Miklós Zrínyi’s heroic defence of the castle in 1566 on Hungary’s south-western frontier.",
      "reszletes": "Szigetvár Castle was the setting for an epic shared by Hungarian and Croatian history, where Miklós Zrínyi’s forces mounted a legendary defence against an overwhelmingly superior Ottoman army in 1566. The fortress, consisting of four islands originally surrounded by water and marshland, was an important part of the south-western border-fortress system in the 16th century. With around 2,500 soldiers, Zrínyi held back the enormous army of Sultan Suleiman I for more than a month; ultimately, the small defending force broke out from the burning ruins of the castle and died heroically. The siege is also associated with Suleiman’s death and the slowing of the Ottoman advance. The restored castle now operates as a museum, presenting the siege and Ottoman relics from the period of Turkish rule. Szigetvár is a symbol of heroism and Hungarian–Croatian friendship.",
      "info": {
        "megkozelites": "Szigetvár can be reached from Pécs by car or bus via main road 6, or by train; the castle is located in the town centre."
      }
    },
    "147": {
      "nev": "Csonka Tower, Dunaföldvár",
      "rovid": "A medieval castle tower standing on the banks of the Danube and a symbol of Dunaföldvár.",
      "reszletes": "The Csonka Tower in Dunaföldvár is a distinctive medieval castle tower standing on the right bank of the Danube and is one of the town’s symbols. The tower is the remnant of a 15th-century castle whose outer fortifications were demolished after Rákóczi’s War of Independence, leaving only the stocky cylindrical tower—hence the name ‘Csonka’, meaning ‘truncated’. The tower offers fine views of the Danube and the bridge spanning the river. The building now operates as a museum, presenting the history of the town and the surrounding area. The Danube and the opposite bank are clearly visible from the riverside beside the tower. Dunaföldvár is a stopping point for transport along the Danube and river tourism.",
      "info": {
        "megkozelites": "Dunaföldvár can be reached by car via main road 6 and the M6 motorway, or by bus; the Csonka Tower stands on the Danube waterfront in the town centre."
      }
    },
    "148": {
      "nev": "Kaposvár – Rippl-Rónai Museum",
      "rovid": "The museum of Somogy’s county town, commemorating the painter József Rippl-Rónai.",
      "reszletes": "Kaposvár, the county town of Somogy, is one of Southern Transdanubia’s important cultural centres and is closely associated with the painter József Rippl-Rónai. The Rippl-Rónai Museum houses the county’s rich archaeological, ethnographic and fine-art collections, with particular emphasis on works by the Kaposvár-born painter. Rippl-Rónai was an innovator of Hungarian painting and a major figure in Art Nouveau and Post-Impressionism; his former home, the Róma Villa, can also be visited as a museum. The distinguished Csiky Gergely Theatre also operates in the city. Kaposvár’s first permanent masonry-built theatre, it opened in 1911. The county town is also known for its wealth of Art Nouveau architecture. Kaposvár is an important regional centre for fine art and theatre.",
      "info": {
        "megkozelites": "Kaposvár can be reached by train on the Budapest–Gyékényes railway line and by car via main road 61; the museum is located in the city centre."
      }
    },
    "149": {
      "nev": "Szenna Open-Air Museum",
      "rovid": "A Europa Nostra Award-winning rural open-air museum featuring examples of Somogy folk architecture.",
      "reszletes": "The Szenna Open-Air Museum, officially named the Szenna Open-Air Ethnographic Collection, offers a unique presentation of rural folk architecture and ways of life in Somogy. Opened in 1978, the open-air museum displays sill-beam houses, agricultural buildings and traditional furnishings collected from across the Somogy region in an authentic setting. The collection’s centrepiece is the village’s listed Reformed church, with its painted coffered ceiling, and its wooden bell tower. The open-air museum brings traditional peasant life, crafts and folk customs to life. Its outstanding professional merit is reflected in the collection’s receipt of the prestigious Europa Nostra Award. Szenna lies on the edge of the Zselic hills near Kaposvár and is a popular destination for those interested in ethnographic heritage.",
      "info": {
        "megkozelites": "Szenna can be reached from Kaposvár by car or bus; the open-air museum is located in the centre of the village beside the Reformed church."
      }
    }
  }
};

const EN_QUIZ = {
  "budapest-01": {
    "question": "According to the atlas, whose designs was the Hungarian Parliament Building based on, and in what style was it built?",
    "answers": [
      "Designed by Miklós Ybl in the Neo-Renaissance style",
      "Designed by Mihály Pollack in the Neoclassical style",
      "Designed by Imre Steindl in the Gothic Revival style",
      "Designed by Frigyes Schulek in the Romanesque Revival style"
    ],
    "explanation": "According to the description of the Hungarian Parliament Building, it was built to designs by Imre Steindl in the Gothic Revival style between 1885 and 1904. (The misleading names are associated with other works in Budapest: Ybl–St Stephen's Basilica, Pollack–Hungarian National Museum, Schulek–Fisherman's Bastion.)",
    "latvName": "Hungarian Parliament Building"
  },
  "budapest-02": {
    "question": "Which statement about Fisherman's Bastion is TRUE according to the atlas?",
    "answers": [
      "It was once a genuine defensive fortification forming part of the castle wall facing the Danube",
      "It was never a defensive fortress: it was built as a lookout point and promenade, and its seven towers symbolise the seven Magyar tribes that conquered the Carpathian Basin",
      "Its colonnade is lined with equestrian statues of the seven Magyar chieftains",
      "Its towers were commissioned by King Matthias Corvinus in the 15th century"
    ],
    "explanation": "According to the description of Fisherman's Bastion, it was not a defensive fortification: from the outset, it served as a lookout point and promenade, while its seven conical towers symbolise the seven Magyar tribes that conquered the Carpathian Basin.",
    "latvName": "Fisherman's Bastion"
  },
  "budapest-03": {
    "question": "Budapest's baths were built in different architectural styles. Which pairing is correct according to the atlas?",
    "answers": [
      "Széchenyi Thermal Bath is an Art Nouveau building, while Gellért Baths is Neo-Baroque",
      "Rudas Baths is Art Nouveau, while Gellért Baths dates from the Ottoman era",
      "Széchenyi Thermal Bath dates from the Ottoman era, while Rudas Baths is Neo-Baroque",
      "Széchenyi Thermal Bath is Neo-Baroque, while Gellért Baths is an Art Nouveau building"
    ],
    "explanation": "According to the atlas, Széchenyi Thermal Bath is a monumental Neo-Baroque complex, Gellért Baths is Art Nouveau, and Rudas is an original 16th-century Turkish bath.",
    "latvName": "Széchenyi Thermal Bath"
  },
  "budapest-04": {
    "question": "According to the atlas, what happened to Matthias Church in Buda Castle during the Ottoman occupation?",
    "answers": [
      "The Ottomans blew it up, leaving only its southern tower standing",
      "It was converted into a mosque",
      "It was used as a Reformed place of worship",
      "It was walled up and used as a storehouse for the archbishop's treasury"
    ],
    "explanation": "According to the description of Matthias Church, the building was converted into a mosque during the Ottoman occupation and was later restored by Frigyes Schulek at the end of the 19th century.",
    "latvName": "Matthias Church"
  },
  "budapest-05": {
    "question": "The atlas makes two statements about the size of churches. Which is TRUE?",
    "answers": [
      "Esztergom Basilica is Hungary's largest church, while St Stephen's Basilica is Budapest's largest church",
      "St Stephen's Basilica is Hungary's largest church, while Esztergom Basilica is Budapest's largest church",
      "Matthias Church is Hungary's largest church, while St Stephen's Basilica is Budapest's largest church",
      "Esztergom Basilica is Budapest's largest church, while St Stephen's Basilica is Hungary's largest church"
    ],
    "explanation": "According to the atlas, Esztergom Cathedral (Basilica) is Hungary's largest church, while St Stephen's Basilica is Budapest's largest church.",
    "latvName": "St Stephen's Basilica"
  },
  "budapest-06": {
    "question": "According to the atlas, why was Vajdahunyad Castle in City Park built, and what does it showcase?",
    "answers": [
      "It was built for the 1896 Millennium Exhibition and showcases different periods of Hungarian architecture—Romanesque, Gothic, Renaissance and Baroque",
      "It was built as a medieval royal residence and evokes the splendour of the Angevin era and the Renaissance court of King Matthias Corvinus",
      "It was built by the Austrians as a military fortress after the suppression of the War of Independence",
      "It was created as an open-air display of public statues from the socialist era"
    ],
    "explanation": "According to the description of Vajdahunyad Castle, the complex was built for the 1896 Millennium Exhibition and showcases the Romanesque, Gothic, Renaissance and Baroque periods of Hungarian architecture.",
    "latvName": "Vajdahunyad Castle"
  },
  "budapest-07": {
    "question": "According to the atlas, which monastic order created the Cave Church in Gellért Hill?",
    "answers": [
      "The Benedictine Order",
      "The Premonstratensian Order",
      "The Pauline Order, the only monastic order founded in Hungary",
      "The Franciscan Order"
    ],
    "explanation": "According to the description of the Cave Church, the chapel was created in 1926 by the Pauline Order—the only monastic order founded in Hungary—following the model of Lourdes.",
    "latvName": "Gellért Hill Cave Church"
  },
  "budapest-08": {
    "question": "According to the atlas, why can the Chain Bridge be regarded as a symbol of the Hungarian Reform Era?",
    "answers": [
      "Because it was opened in 1896 in honour of the millennium",
      "Because it was built as a symbol of national reconstruction after the First World War",
      "Because it was built as the city's first bridge exclusively for pedestrians and cyclists",
      "Because, built at the initiative of István Széchenyi, it became the first permanent bridge across the Danube and a symbol of the unification of Buda and Pest"
    ],
    "explanation": "According to the description of the Chain Bridge, the bridge, built at the initiative of István Széchenyi, became the first permanent bridge across the Danube in 1849 and a symbol of both the unification of Buda and Pest and the Hungarian Reform Era.",
    "latvName": "Chain Bridge"
  },
  "budapest-09": {
    "question": "According to the atlas, the Baroque palace at Gödöllő became known as the favourite summer residence of which famous historical figure?",
    "answers": [
      "Maria Theresa",
      "Queen Elisabeth (Sisi)",
      "King Matthias Corvinus",
      "St Stephen"
    ],
    "explanation": "According to the description of the Royal Palace of Gödöllő, the building became famous primarily as Queen Elisabeth's (Sisi's) favourite place to stay in Hungary.",
    "latvName": "Royal Palace of Gödöllő"
  },
  "budapest-10": {
    "question": "According to the atlas, which attraction in central Vác is unique in Hungary?",
    "answers": [
      "The country's only completely preserved medieval city wall",
      "The northernmost surviving minaret of the Ottoman Empire",
      "The Stone Gate, Hungary's only triumphal arch",
      "The country's largest continuous Baroque main square"
    ],
    "explanation": "According to the description of Vác, the city's distinctive attraction is the Stone Gate (Triumphal Arch), Hungary's only triumphal arch, which was built in 1764 for Maria Theresa's visit.",
    "latvName": "Vác Cathedral and Town Centre"
  },
  "balaton-01": {
    "question": "According to the atlas, why is the 1055 foundation charter of Tihany Benedictine Abbey regarded as an outstanding monument of linguistic history?",
    "answers": [
      "Because it is the oldest charter written entirely in Hungarian",
      "Because it is the first authentic charter to preserve Hungarian words alongside its Latin text",
      "Because the first Hungarian-language book was printed within its walls",
      "Because its pages preserve the first Hungarian translation of the Bible"
    ],
    "explanation": "According to the description of Tihany Benedictine Abbey, the foundation charter of the abbey, founded by King Andrew I in 1055, is the first authentic charter to preserve Hungarian words embedded in a Latin text, including the famous phrase ‘feheruuaru rea meneh hodu utu rea’. It is therefore an outstanding monument of Hungarian linguistic history. (The charter is in Latin, while the first book printed in Hungarian is associated with Sárvár.)",
    "latvName": "Tihany Benedictine Abbey"
  },
  "balaton-02": {
    "question": "According to the atlas, what institution, pioneering in its day, did György Festetics establish beside the palace in Keszthely in 1797?",
    "answers": [
      "The Helikon Library, the country’s first public library",
      "The country’s first permanent stone-built theatre",
      "Hungary’s first specialist school of winemaking for the Balaton wine regions",
      "The Georgikon, one of Europe’s first higher-education institutions for agriculture"
    ],
    "explanation": "According to the description of Festetics Palace, the enlightened aristocrat György Festetics founded the Georgikon here in 1797, one of Europe’s first higher-education institutions for agriculture. (The Helikon Library is a valuable part of the palace, but it was not a school founded at that time; the first stone-built theatre is associated with Balatonfüred.)",
    "latvName": "Festetics Palace"
  },
  "balaton-03": {
    "question": "Which statement about Lake Hévíz is TRUE according to the atlas’s description?",
    "answers": [
      "It is an artificially dammed thermal lake created for therapeutic purposes in the 19th century",
      "It is a shallow bay of Lake Balaton, separated from the lake’s main basin by reed beds",
      "It is one of the world’s largest biologically active natural medicinal lakes, fed by springs rising from deep underground",
      "It is a cold, sulphur-free karst spring whose water is used primarily for drinking cures"
    ],
    "explanation": "According to the description of Lake Hévíz, it is one of the world’s largest biologically active natural medicinal lakes, fed by lukewarm and hot springs rising from deep underground, so its water remains at 23–25°C even in winter. Its sulphurous water with a low radon content and the therapeutic mud on the lake bed are recommended primarily for musculoskeletal and rheumatic complaints.",
    "latvName": "Lake Hévíz"
  },
  "balaton-04": {
    "question": "According to the atlas, how were the protected basalt organs visible on Badacsony’s steep slopes formed?",
    "answers": [
      "They formed from the solidified lava of an extinct volcano as polygonal columns of rock",
      "The waves of Lake Balaton carved them out of the lakeside cliff",
      "Ice Age glaciers gouged them out of the mountainside",
      "They formed from deposits of travertine left by thermal water rising from deep underground"
    ],
    "explanation": "According to the description of Badacsony, the mountain is the eroded remnant of an extinct volcano, known as a witness mountain. On its steep slopes rise the polygonal columns of solidified lava known as basalt organs, which are protected geological features. (The travertine formation created by thermal water is characteristic of the Salt Hill at Egerszalók.)",
    "latvName": "Badacsony"
  },
  "balaton-05": {
    "question": "According to the atlas, what happened in the 18th century to Szigliget Castle, which had served as a border fortress during the Ottoman period?",
    "answers": [
      "It was blown up by the retreating Ottoman army",
      "It was permanently destroyed by a fire caused by a lightning strike",
      "The aristocratic family that owned it had it converted into a Baroque palace",
      "The Habsburg authorities had it demolished along with several other castles"
    ],
    "explanation": "According to the description of Szigliget Castle, the fortress was built in the mid-13th century after the Mongol invasion and served as an important border fortress during the Ottoman period. In the 18th century, the Habsburg authorities had it demolished along with several other castles; its impressive ruins have been partially restored in recent decades.",
    "latvName": "Szigliget Castle"
  },
  "balaton-06": {
    "question": "According to the atlas, what health problems is Balatonfüred’s carbonated medicinal water recommended for, and which institution continues this tradition today?",
    "answers": [
      "Musculoskeletal and rheumatic complaints; a therapeutic mud bath",
      "Cardiovascular complaints; the State Heart Hospital",
      "Respiratory illnesses; a pulmonary sanatorium",
      "Digestive complaints; a drinking-cure centre"
    ],
    "explanation": "According to the description of Balatonfüred – Tagore Promenade, the carbonated medicinal water from the town’s mineral-water springs, including the Kossuth Spring, is recommended for cardiovascular complaints, which remain the speciality of the State Heart Hospital today. (Therapeutic mud treatment for musculoskeletal and rheumatic complaints is more characteristic of Hévíz.)",
    "latvName": "Balatonfüred – Tagore Promenade"
  },
  "balaton-07": {
    "question": "According to the atlas, what was Sümeg Castle’s role in the Middle Ages, and what is its main tourist attraction today?",
    "answers": [
      "It was an estate centre belonging to the queens of Hungary; today it houses a falconry museum",
      "It was the Festetics family’s hunting castle; today it houses a carriage museum",
      "It was the episcopal castle of Veszprém; today its main attraction is a spectacular display of jousting and falconry",
      "It was a border fortress that remained under Ottoman control for an extended period; today it houses an exhibition on Ottoman-era military history"
    ],
    "explanation": "According to the description of Sümeg Castle, in the Middle Ages the fortress was the episcopal castle of Veszprém, while during the Ottoman period it was an important border fortress that never remained under Ottoman control for any extended period. Its main attraction today is the spectacular display of medieval jousting and falconry brought to life in the castle courtyard.",
    "latvName": "Sümeg Castle"
  },
  "balaton-08": {
    "question": "According to the atlas, what is characteristic of the water along the southern shore of Lake Balaton, including at Siófok, and why does this make its beaches popular?",
    "answers": [
      "The water is shallow, deepens gradually and warms up quickly, making it ideal for families with young children",
      "The water is deep and cools quickly, making it suitable for long-distance swimmers",
      "The water is cool with strong waves, making it primarily a venue for sailing",
      "The water is lukewarm, rich in minerals and suitable for therapeutic bathing"
    ],
    "explanation": "According to the description of Siófok, the southern shore is characterised by shallow water that deepens gradually and warms up quickly, making it ideal for bathing, particularly for families with young children. This is precisely why the town is often referred to as ‘the capital of Lake Balaton’.",
    "latvName": "Siófok"
  },
  "balaton-09": {
    "question": "According to the atlas, in what original capacity was the distinctive spherical aluminium structure of the Sphere Lookout in Balatonboglár first exhibited?",
    "answers": [
      "As the panoramic tower of a grand hotel on the shore of Lake Balaton",
      "As the ‘Hungarian Atomium’, a symbol of Hungary’s aluminium industry, at the 1958 Brussels World’s Fair",
      "As one of the industrial pavilions at the 1896 Millennium Exhibition",
      "As an aquatic observation station for shipping on Lake Balaton"
    ],
    "explanation": "According to the description of the Balatonboglár Sphere Lookout, the spherical aluminium structure of the János Xantus Sphere Lookout, to give it its full name, was originally exhibited as the ‘Hungarian Atomium’, a symbol of Hungary’s aluminium industry, at the 1958 Brussels World’s Fair. It was then transported to the top of Várdomb in 1959.",
    "latvName": "Balatonboglár Sphere Lookout"
  },
  "balaton-10": {
    "question": "According to the atlas, besides the special experience of boating, what allows the Tapolca Lake Cave to function as a therapeutic cave?",
    "answers": [
      "Its dust-free air and therapeutic microclimate are beneficial for people suffering from respiratory illnesses",
      "Thermal medicinal pools have been created in its passages",
      "Its radon-bearing therapeutic mud relieves musculoskeletal complaints",
      "Its sulphurous vapours are used primarily to treat rheumatic patients"
    ],
    "explanation": "According to the description of the Tapolca Lake Cave, besides its passages filled by an underground lake and navigable by boat, the cave’s dust-free air and therapeutic microclimate also have beneficial effects for people suffering from respiratory illnesses, so it also functions as a therapeutic cave.",
    "latvName": "Tapolca Lake Cave"
  },
  "eszak-magyarorszag-01": {
    "question": "In its description of Eger Castle, the atlas mentions a famous novel in connection with the siege of 1552. Which work is it, and who commanded the defenders?",
    "answers": [
      "Mór Jókai: The Baron's Sons – under the command of Gergely Bornemissza",
      "Kálmán Mikszáth: The Black City – under the command of Miklós Zrínyi",
      "Géza Gárdonyi: Eclipse of the Crescent Moon – under the command of István Dobó",
      "Géza Gárdonyi: Slave of the Huns – under the command of István Dobó"
    ],
    "explanation": "According to the description of Eger Castle, its victorious defence in 1552 was mounted by the small force of the castle's captain, István Dobó, and is commemorated in Géza Gárdonyi's novel Eclipse of the Crescent Moon.",
    "latvName": "Eger Castle"
  },
  "eszak-magyarorszag-02": {
    "question": "Why does the atlas regard the Eger Minaret as an outstanding architectural monument?",
    "answers": [
      "Because it is the northernmost surviving minaret of the Ottoman Empire, and its summit is now topped by a cross",
      "Because it is Hungary's tallest bell tower, standing approximately 40 metres high",
      "Because it is the only minaret to have survived intact together with its original mosque",
      "Because it was converted from the tower of a Christian church during the Ottoman occupation"
    ],
    "explanation": "According to the description of the Eger Minaret, it is the northernmost surviving minaret of the Ottoman Empire. The mosque to which it belonged was later demolished, while the summit of the 40-metre tower is now topped by a cross.",
    "latvName": "Eger Minaret"
  },
  "eszak-magyarorszag-03": {
    "question": "Which statement about the Old Village of Hollókő is TRUE according to the atlas?",
    "answers": [
      "It is a carefully designed open-air museum to which peasant houses were brought from the surrounding area",
      "It is a Palóc mining village built during the industrialisation of the 19th century",
      "Faithfully reconstructed concrete replicas now stand in place of the Palóc peasant houses",
      "It is not an open-air museum but a genuine, inhabited Palóc settlement that has been a World Heritage Site since 1987"
    ],
    "explanation": "The description of the Old Village of Hollókő emphasises that it is not an open-air museum but a genuine, inhabited settlement. Its authentic ensemble of 17th- and 18th-century Palóc vernacular architecture has been a UNESCO World Heritage Site since 1987.",
    "latvName": "Old Village of Hollókő"
  },
  "eszak-magyarorszag-04": {
    "question": "According to the atlas, what makes one of the chambers in Aggtelek's Baradla Cave special?",
    "answers": [
      "It is used to treat people with respiratory conditions because of its therapeutic microclimate",
      "Its excellent acoustics mean that it is also used as a concert hall, with concerts held there",
      "Thermal medicinal pools have been created inside it",
      "An astronomical observatory dome operates deep inside it"
    ],
    "explanation": "According to the description of Baradla Cave, one of its chambers is used as a concert hall because of its excellent acoustics. (The ‘Observatory’ is a famous stalactite formation in the cave, not a real observatory; cave air with a therapeutic microclimate is a feature of the Cave Bath at Miskolctapolca.)",
    "latvName": "Aggtelek Stalactite Cave (Baradla)"
  },
  "eszak-magyarorszag-05": {
    "question": "According to the atlas, what makes it possible to produce the world-famous Tokaji Aszú?",
    "answers": [
      "The slow freezing of the grapes in cellars at a constant temperature",
      "Traditional dilution with water from the Bodrog followed by ageing",
      "Noble rot developing in the humid microclimate along the rivers, causing the grapes to become aszú berries",
      "The sulphurous air of cellars carved into volcanic rock"
    ],
    "explanation": "According to the description of Tokaj-Hegyalja, the special microclimate created by humidity along the rivers and sunshine favours the development of the noble rot that ripens the grapes. The resulting aszú berries form the basis of Tokaji Aszú, which is produced through lengthy ageing.",
    "latvName": "Tokaj-Hegyalja Wine Region"
  },
  "eszak-magyarorszag-06": {
    "question": "According to the atlas, the Salt Hill at Egerszalók is the third natural travertine formation of its kind in the world. Which two sites rank ahead of it?",
    "answers": [
      "Geysir in Iceland and Plitvice in Croatia",
      "Domica in Slovakia and Pamukkale in Turkey",
      "The Grand Canyon in the United States and Huanglong in China",
      "Pamukkale in Turkey and Yellowstone in North America"
    ],
    "explanation": "According to the description of the Egerszalók Salt Hill, it was formed from travertine deposited by calcium-rich thermal water rising from deep underground. After Pamukkale in Turkey and Yellowstone in North America, Egerszalók is the world's third site with such a natural formation.",
    "latvName": "Egerszalók Salt Hill"
  },
  "eszak-magyarorszag-07": {
    "question": "Which ruler is associated with the present Gothic form of Diósgyőr Castle, with its four corner towers, and what role did the castle play in the Middle Ages?",
    "answers": [
      "King Louis the Great; it was the centre of the Hungarian queens' estates and was known as the ‘Castle of Queens’",
      "Matthias Corvinus; it served as a magnificent Renaissance summer residence",
      "King Béla IV; it was a stronghold of border defence after the Mongol invasion",
      "Francis II Rákóczi; it was the princely seat of the War of Independence"
    ],
    "explanation": "According to the description of Diósgyőr Castle, it acquired its present form, with four corner towers, during the reign of King Louis the Great in the 14th century. In the Middle Ages, it was traditionally the centre of the Hungarian queens' estates and is therefore also known as the ‘Castle of Queens’.",
    "latvName": "Diósgyőr Castle"
  },
  "eszak-magyarorszag-08": {
    "question": "The atlas highlights two landmarks of Lillafüred. Which pairing is correct?",
    "answers": [
      "The Baroque Palace Hotel and the geyser of Lake Hámori",
      "The Neo-Renaissance Palace Hotel and Hungary's highest waterfall, approximately 20 metres high",
      "The Art Nouveau grand hotel and the country's deepest lake",
      "The Gothic Revival hunting lodge and a sulphurous medicinal spring"
    ],
    "explanation": "According to the description of Lillafüred, its landmark is the Neo-Renaissance Palace Hotel, and the settlement is also home to Hungary's highest waterfall, the approximately 20-metre-high Szinva Waterfall.",
    "latvName": "Lillafüred"
  },
  "eszak-magyarorszag-09": {
    "question": "According to the atlas, in which northern Hungarian castle was the Holy Crown of Hungary kept briefly during the turbulent period following the Battle of Mohács?",
    "answers": [
      "Rákóczi Castle in Sárospatak",
      "Salgó Castle",
      "Diósgyőr Castle",
      "Füzér Castle"
    ],
    "explanation": "According to the description of Füzér Castle, the Holy Crown of Hungary was kept here briefly in the period following the Battle of Mohács, in the fortress built on a volcanic basalt crag.",
    "latvName": "Füzér Castle"
  },
  "eszak-magyarorszag-10": {
    "question": "According to the atlas, what are the two main attractions of the Szalajka Valley at Szilvásvárad?",
    "answers": [
      "The cave bath with medicinal water and the whitish salt hill",
      "The Veil Waterfall, cascading like a veil over travertine terraces, and the Lipizzaner stud",
      "The basalt columns and a volcanic crater lake",
      "The World Heritage stalactite cave and the row of wine cellars"
    ],
    "explanation": "According to the description of Szilvásvárad and the Szalajka Valley, the jewel of the valley is the Veil Waterfall, which cascades like a veil over travertine terraces, while the settlement is also known for its Lipizzaner stud, which breeds white show horses.",
    "latvName": "Szilvásvárad – Szalajka Valley"
  },
  "del-dunantul-01": {
    "question": "According to the atlas, why is the Paks Nuclear Power Plant so important to Hungary’s energy supply?",
    "answers": [
      "It is Hungary’s only nuclear power plant and supplies approximately 40–50 per cent of the country’s electricity needs",
      "It is the country’s first hydroelectric power station, converting the energy of the Danube into electricity",
      "It is the country’s largest solar farm, producing entirely renewable energy",
      "It is the country’s only coal-fired power station, built near the coal mines of the Mecsek"
    ],
    "explanation": "According to the description of the Paks Nuclear Power Plant, it is Hungary’s only nuclear power plant and supplies approximately 40–50 per cent of the country’s electricity needs; its four Soviet-designed VVER reactor units were commissioned between 1982 and 1987.",
    "latvName": "Paks Nuclear Power Plant – Nuclear Energy Museum"
  },
  "del-dunantul-02": {
    "question": "According to the atlas, why were the Early Christian burial chambers of Pécs added to the UNESCO World Heritage List in 2000?",
    "answers": [
      "They are fourth-century painted burial chambers from Roman Sopianae, depicting biblical scenes and constituting rare examples of Early Christian heritage even within Europe",
      "They form the largest completely preserved complex of buildings from the period of Ottoman rule in Hungary",
      "They are richly furnished burial places of Hungarian princes from the time of the Hungarian conquest",
      "They are former venues of medieval Hungarian royal coronations"
    ],
    "explanation": "According to the description of the Early Christian burial chambers of Pécs, the site is the fourth-century cemetery of Roman Sopianae, with painted burial chambers depicting biblical scenes such as Adam and Eve and Daniel in the lions’ den; it has been on the UNESCO list since 2000 and is a rare example of Early Christian heritage even within Europe.",
    "latvName": "Pécs – Early Christian Burial Chambers"
  },
  "del-dunantul-03": {
    "question": "According to the atlas, what characterises the Mosque of Pasha Qasim on Széchenyi Square in Pécs?",
    "answers": [
      "It is the largest surviving building from the period of Ottoman rule in Hungary and was converted into a Catholic church after Ottoman rule ended",
      "It was the largest church of the Ottoman period and was completely destroyed when the Ottomans withdrew",
      "It was originally built as a Christian church in the nineteenth century in the Historicist style",
      "It is a fourth-century Early Christian building that was converted into a mosque during the Ottoman period"
    ],
    "explanation": "According to the description of the Mosque of Pasha Qasim, it is the largest surviving building from the period of Ottoman rule in Hungary. It was built in the sixteenth century using stones from an earlier Christian church and was converted into a Catholic church after Ottoman rule ended.",
    "latvName": "Mosque of Pasha Qasim"
  },
  "del-dunantul-04": {
    "question": "According to the atlas, what were the consequences of the 1526 Battle of Mohács, commemorated by the Mohács National Memorial Site?",
    "answers": [
      "King Louis II lost his life, and the defeat led to the disintegration of the medieval Kingdom of Hungary and the beginning of Ottoman rule",
      "Following Miklós Zrínyi’s heroic defence of the castle, the Ottoman army withdrew from the southern borderlands",
      "The victorious Hungarian army strengthened the southern system of border fortresses",
      "The battle led to the Peace of Szatmár, which ended Rákóczi’s War of Independence"
    ],
    "explanation": "According to the description of the Mohács National Memorial Site, King Louis II lost his life in the battle of 29 August 1526, and the defeat led to the disintegration of the medieval Kingdom of Hungary and the beginning of approximately 150 years of Ottoman rule.",
    "latvName": "Mohács National Memorial Site"
  },
  "del-dunantul-05": {
    "question": "According to the atlas, who led the heroic defence of Szigetvár Castle against overwhelming Ottoman forces in 1566?",
    "answers": [
      "Miklós Zrínyi",
      "István Dobó",
      "János Hunyadi",
      "Ferenc Rákóczi II"
    ],
    "explanation": "According to the description of Szigetvár Castle, in 1566 Miklós Zrínyi’s forces mounted a legendary defence against the numerically superior Ottoman army, holding back the forces of Sultan Suleiman I for more than a month with some 2,500 soldiers.",
    "latvName": "Szigetvár Castle"
  },
  "del-dunantul-06": {
    "question": "The atlas also presents two historic red-wine regions in Southern Transdanubia. Which statement about the Villány and Szekszárd wine regions is TRUE?",
    "answers": [
      "Villány is Hungary’s southernmost historic wine region, while the characteristic wines of the Szekszárd wine region are Kadarka and Bikavér",
      "Both wine regions are primarily famous for white wines and do not produce red wine",
      "The Villány wine region is known for its Kadarka, while Szekszárd is known for its Cabernet Sauvignon grown in a Mediterranean climate",
      "Szekszárd is Hungary’s southernmost wine region, while Villány lies in the Balaton Uplands"
    ],
    "explanation": "According to the atlas, Villány is Hungary’s southernmost historic wine region and is known for its full-bodied red wines, while the characteristic wines of the Szekszárd wine region are Kadarka and Szekszárd Bikavér.",
    "latvName": "Villány Wine Region"
  },
  "del-dunantul-07": {
    "question": "According to the atlas, what makes the Gemenc area of the Danube–Drava National Park special?",
    "answers": [
      "It is Hungary’s largest floodplain forest, with oxbow lakes, riparian woodlands and a world-famous red deer population",
      "It is the country’s highest mountain beech forest, where brown bears are also native",
      "It is a volcanic karst plateau divided by deep stalactite caves",
      "It is the country’s largest continuous sandy steppe, with soda lakes"
    ],
    "explanation": "According to the description of the Gemenc area of the Danube–Drava National Park, it is Hungary’s largest floodplain forest, with oxbow lakes, islands and riparian woodlands, as well as a world-famous red deer population.",
    "latvName": "Danube–Drava National Park – Gemenc Forest"
  },
  "del-dunantul-08": {
    "question": "Pécs boasts several museums associated with world-famous painters. According to the atlas, which pairing is correct?",
    "answers": [
      "The Vasarely Museum houses works by the founder of Op Art, while the Csontváry Museum holds works by the visionary master who painted The Lonely Cedar",
      "The Vasarely Museum exhibits works by Tivadar Csontváry Kosztka, while the Csontváry Museum exhibits works by József Rippl-Rónai",
      "Both museums display Vilmos Zsolnay’s eosin-glazed ceramics",
      "The Csontváry Museum represents Op Art, while the Vasarely Museum represents Art Nouveau"
    ],
    "explanation": "According to the atlas, the Vasarely Museum houses works by Victor Vasarely, one of the founders of Op Art, while the Csontváry Museum holds major works by Tivadar Csontváry Kosztka, the visionary painter of The Lonely Cedar.",
    "latvName": "Pécs – Csontváry Museum"
  },
  "del-dunantul-09": {
    "question": "According to the atlas, which extensive cultural attraction in Pécs was created on the former premises of a world-famous factory known for its eosin-glazed ceramics?",
    "answers": [
      "Pécs – Zsolnay Cultural Quarter",
      "Pécs – Vasarely Museum",
      "Pécs – Csontváry Museum",
      "Pécs – Early Christian Burial Chambers"
    ],
    "explanation": "According to the description of the Zsolnay Cultural Quarter, it was created on the approximately five-hectare former factory site of the world-famous Zsolnay porcelain factory, known for its eosin-glazed ceramics.",
    "latvName": "Pécs – Zsolnay Cultural Quarter"
  },
  "del-dunantul-10": {
    "question": "According to the atlas, which spa town in Southern Transdanubia has medicinal water with a high hydrogen sulphide content that is rare worldwide and is effective in treating psoriasis as well as musculoskeletal conditions?",
    "answers": [
      "Harkány",
      "Siklós",
      "Szigetvár",
      "Abaliget"
    ],
    "explanation": "According to the description of Harkány Spa, the high hydrogen sulphide content of Harkány’s medicinal water is rare worldwide, and it has proved effective primarily in treating musculoskeletal and joint conditions as well as dermatological conditions, including psoriasis.",
    "latvName": "Harkány Spa"
  },
  "eszak-alfold-01": {
    "question": "According to the atlas, which historical event is associated with the Great Reformed Church of Debrecen?",
    "answers": [
      "In 1849, under the leadership of Lajos Kossuth, the dethronement of the House of Habsburg was proclaimed here",
      "The Treaty of Szatmár, which ended Rákóczi's War of Independence, was signed here",
      "The last Prince of Transylvania was crowned within its walls",
      "The city vowed here to rebuild after a devastating flood"
    ],
    "explanation": "According to the description of the Great Reformed Church of Debrecen, Parliament convened here in 1849, and the dethronement of the House of Habsburg was proclaimed within its walls under the leadership of Lajos Kossuth.",
    "latvName": "Great Reformed Church of Debrecen"
  },
  "eszak-alfold-02": {
    "question": "Which statement about Hortobágy National Park is TRUE according to the atlas?",
    "answers": [
      "It is renowned for its artificially planted pine forests and hilly landscape",
      "It is Hungary's newest national park, established after the change of regime",
      "It is Hungary's first national park, founded in 1973, and has been a World Heritage cultural landscape since 1999",
      "All traditional livestock farming has ceased within its boundaries because of nature conservation"
    ],
    "explanation": "According to the description of Hortobágy National Park, it is Hungary's first national park, founded in 1973, and has been a World Heritage cultural landscape since 1999 as a testament to thousands of years of sustainable pastoralism; ancient Hungarian livestock breeds, such as Hungarian Grey cattle and Racka sheep, still graze on its plains.",
    "latvName": "Hortobágy National Park – Nine-Arch Bridge"
  },
  "eszak-alfold-03": {
    "question": "According to the atlas, under what circumstances was the medicinal water of Hajdúszoboszló discovered?",
    "answers": [
      "Monks from a medieval monastery uncovered the water of an ancient spring",
      "It was found in 1925 while drilling for natural gas",
      "It was discovered during the excavation of the remains of a Roman spa town",
      "It was discovered during the 19th-century regulation works on the River Tisza"
    ],
    "explanation": "According to the description of Hajdúszoboszló Spa, the thermal water was found in 1925 while drilling for natural gas, and its exceptional healing properties soon became apparent; because of its medicinal water, the town is also known as the ‘Mecca of rheumatism’.",
    "latvName": "Hajdúszoboszló Spa"
  },
  "eszak-alfold-04": {
    "question": "According to the atlas, which work of art is the most treasured possession of the Déri Museum in Debrecen?",
    "answers": [
      "Árpád Feszty's cyclorama depicting the Hungarian Conquest",
      "Bertalan Székely's historical murals",
      "Mihály Munkácsy's monumental biblical (Christ) trilogy",
      "Paintings by József Rippl-Rónai"
    ],
    "explanation": "According to the description of the Déri Museum, its greatest treasure is Mihály Munkácsy's monumental biblical trilogy: Christ before Pilate, Golgotha and Ecce Homo.",
    "latvName": "Déri Museum"
  },
  "eszak-alfold-05": {
    "question": "According to the atlas, the Báthori Church in Nyírbátor is an outstanding hall-church example of which architectural style?",
    "answers": [
      "Romanesque",
      "Baroque",
      "Art Nouveau",
      "Late Gothic"
    ],
    "explanation": "According to the description of the Báthori Church in Nyírbátor, the church, built in the late 15th century at the behest of István Báthori, Judge Royal, is an outstanding hall-church example of Hungarian Late Gothic architecture.",
    "latvName": "Nyírbátor – Báthori Church"
  },
  "eszak-alfold-06": {
    "question": "According to the atlas, who commissioned Andrássy Castle in Tiszadob, and what do its 365 rooms symbolise?",
    "answers": [
      "Kálmán Tisza; the country's 365 noble families",
      "Prime Minister Gyula Andrássy; the 365 days of the year",
      "The Counts Andrássy, for military purposes; the 365 soldiers stationed here",
      "István Széchenyi; a 365-kilometre stretch of the River Tisza"
    ],
    "explanation": "According to the description of Andrássy Castle in Tiszadob, the building was commissioned by Prime Minister Gyula Andrássy in the early 1880s; its 365 rooms symbolise the days of the year, its 52 towers the weeks, its 12 towers the months, and its four entrances the seasons.",
    "latvName": "Andrássy Castle, Tiszadob"
  },
  "eszak-alfold-07": {
    "question": "According to the atlas, Máriapócs is Hungary's most important pilgrimage site for which denomination, and what established its fame?",
    "answers": [
      "The Roman Catholic Church; the relics of a saint buried here",
      "The Reformed Church; the work of a famous preacher",
      "The Greek Catholic Church; its holy icon shedding tears on two occasions",
      "The Lutheran Church; the memory of a miraculous healing"
    ],
    "explanation": "According to the description of the National Shrine of Máriapócs, the settlement is Hungary's most important Greek Catholic pilgrimage site, whose fame was established when the icon of the Virgin Mary kept here shed tears in 1696 and again in 1715.",
    "latvName": "National Shrine of Máriapócs"
  },
  "eszak-alfold-08": {
    "question": "According to the atlas, why is the Reformed Church of Csaroda called the ‘Church of the Smiling Saints’?",
    "answers": [
      "Because the saints in its medieval wall paintings have unusually cheerful facial expressions",
      "Because rows of smiling angels appear on its painted coffered ceiling",
      "Because the villagers are known for their cheerful folk customs",
      "Because tradition holds that the church was painted by a master named Mosolygó"
    ],
    "explanation": "According to the description of the Reformed Church of Csaroda, this round-towered Romanesque village church was named the ‘Church of the Smiling Saints’ because the figures in its rich medieval wall paintings have unusually cheerful facial expressions.",
    "latvName": "Reformed Church of Csaroda"
  },
  "eszak-alfold-09": {
    "question": "Which statement about the Jász Museum in Jászberény is TRUE according to the atlas?",
    "answers": [
      "Its most treasured possession is Lehel's Horn, a gold horn dating from the time of the Hungarian Conquest",
      "It is the country's largest museum, displaying tens of thousands of objects",
      "It was founded during the Hungarian Reform Era as an ecclesiastical collection",
      "It is the country's oldest provincial museum and houses Lehel's Horn"
    ],
    "explanation": "According to the description of the Jász Museum, the institution, founded in 1873, is the country's oldest provincial museum, and its most treasured possession is Lehel's Horn, a 12th-century Byzantine work carved from ivory.",
    "latvName": "Jász Museum – Lehel's Horn"
  },
  "eszak-alfold-10": {
    "question": "According to the atlas, what does the RepTár in Szolnok present, and what makes it special for visitors?",
    "answers": [
      "The history of Hungary's railways; visitors can drive original steam locomotives",
      "The history of Hungarian aviation and the air force; several aircraft can be viewed up close and touched",
      "Relics of Hungarian space exploration; an original space capsule is on display",
      "The history of shipping on the River Tisza; authentic period steamships are lined up there"
    ],
    "explanation": "According to the description of the RepTár Aviation Museum in Szolnok, the museum presents the history of Hungarian aviation and the air force, and what makes it special is that several aircraft are not merely exhibits but can be viewed up close and touched as part of interactive demonstrations.",
    "latvName": "RepTár Aviation Museum, Szolnok"
  },
  "tisza-to-01": {
    "question": "What is the primary ecological role of the Kisköre Fish Pass beside the barrage?",
    "answers": [
      "It warms the water in the shallow bay for the comfort of bathers",
      "It stores irrigation water for the surrounding arable land",
      "It allows fish to move between the impounded and natural stretches of the river",
      "It filters sediment stirred up by boat traffic"
    ],
    "explanation": "According to the description of the Kisköre Fish Pass, it enables fish and other aquatic organisms to move safely between the impounded and natural stretches of the river.",
    "latvName": "Kisköre Fish Pass"
  },
  "tisza-to-02": {
    "question": "Which statement about the Lake Tisza Bird Reserve is TRUE according to the atlas description?",
    "answers": [
      "Anyone may freely explore the nesting area on foot",
      "The area may only be entered by rowing boat and as part of an organised visit",
      "The reserve lies in the lake's southern basin, near Abádszalók",
      "It is primarily an authorised venue for motorised water sports"
    ],
    "explanation": "According to the description, the reserve may only be entered by rowing boat and as part of an organised visit; the bay is in the northern basin of the lake, in Tiszavalk Bay.",
    "latvName": "Lake Tisza Bird Reserve"
  },
  "tisza-to-03": {
    "question": "According to the atlas, for what purpose was the barrage that created Lake Tisza originally built?",
    "answers": [
      "For irrigation, flood protection and power generation",
      "To create an international boat-racing course",
      "To secure Budapest's drinking-water supply",
      "To establish a large-scale fish farm"
    ],
    "explanation": "According to the description of the Kisköre Barrage, the facility was originally built for irrigation, flood protection and power generation.",
    "latvName": "Kisköre Barrage"
  },
  "tisza-to-04": {
    "question": "Based on the descriptions, what is the main difference between the tourism character of Abádszalók and Sarud Public Beach?",
    "answers": [
      "Both lie on the lake's eastern shore, near Tiszafüred",
      "Abádszalók is a quiet birdwatching location, while Sarud is a lively water-sports centre",
      "Neither is suitable for bathing; they are used only for fishing",
      "Abádszalók is a lively water-sports centre, while Sarud is a quiet retreat close to nature"
    ],
    "explanation": "Abádszalók is the water-sports centre of the southern basin, offering jet skiing and wakeboarding, while Sarud Public Beach is a quiet retreat close to nature on the lake's western shore.",
    "latvName": "Abádszalók"
  },
  "tisza-to-05": {
    "question": "Why is the Lake Tisza Ecocentre a particularly popular destination for school trips?",
    "answers": [
      "Because the region's only large waterfront hotel is located here",
      "Because of its environmental education programmes and interactive natural-history exhibitions",
      "Because the lake's motorboat races are held here",
      "Because it also includes a free thermal spa"
    ],
    "explanation": "According to the Ecocentre's description, its interactive exhibitions, nature trail and environmental education programmes make it a popular destination for school trips.",
    "latvName": "Lake Tisza Ecocentre"
  },
  "tisza-to-06": {
    "question": "According to the atlas, what characterises the natural environment around Sarud Public Beach?",
    "answers": [
      "It is surrounded by extensive reed beds and rich birdlife",
      "It is bordered by a deep main river channel used for navigation",
      "It is surrounded by a densely built-up urban holiday area",
      "Therapeutic springs rich in hydrogen sulphide rise along its shore"
    ],
    "explanation": "According to the description of Sarud, the bay is surrounded by extensive reed beds and rich birdlife, making it a popular location for nature walks and birdwatching.",
    "latvName": "Sarud Public Beach"
  },
  "tisza-to-07": {
    "question": "What makes the Poroszló Water Promenade special compared with the lake's other shore areas?",
    "answers": [
      "It includes a thermal adventure pool",
      "It has a nature trail around the lake that can be explored by car",
      "Its system of boardwalks built over open water is accessible only by boat and offers an experience unavailable from dry land",
      "The movements of migrating fish can be observed from its glass-walled corridor"
    ],
    "explanation": "The Water Promenade is a system of boardwalks built among the lake's reed beds and over its open water. It can only be reached by boat and offers an experience that could not be gained from dry land.",
    "latvName": "Poroszló Water Promenade"
  },
  "tisza-to-08": {
    "question": "According to the atlas description, what does the Kiss Pál Museum in Tiszafüred preserve?",
    "answers": [
      "A collection of preserved waterbirds from Lake Tisza",
      "The original mechanical equipment of the Kisköre Barrage",
      "Memorabilia from the lake's water sports and former racing boats",
      "The region's ethnographic heritage, including examples of Tiszafüred's famous pottery"
    ],
    "explanation": "According to the description of Tiszafüred, the Kiss Pál Museum preserves the region's ethnographic heritage, including examples of Tiszafüred's famous pottery.",
    "latvName": "Tiszafüred"
  },
  "tisza-to-09": {
    "question": "According to the atlas, which town serves as the tourism and transport hub of the lake's eastern basin?",
    "answers": [
      "Kisköre",
      "Tiszafüred",
      "Poroszló",
      "Abádszalók"
    ],
    "explanation": "According to the description of Tiszafüred, the town is the tourism and transport hub of Lake Tisza's eastern basin.",
    "latvName": "Tiszafüred"
  },
  "tisza-to-10": {
    "question": "According to the atlas description, where does Lake Tisza rank among the country's lakes by size?",
    "answers": [
      "It is the country's largest lake",
      "It is the country's second-largest lake",
      "It is the country's third-largest lake",
      "It is the country's fifth-largest lake"
    ],
    "explanation": "According to the description of the Kisköre Barrage, Lake Tisza, created by impoundment and covering approximately 127 square kilometres, is Hungary's second-largest lake.",
    "latvName": "Kisköre Barrage"
  },
  "nyugat-dunantul-01": {
    "question": "According to the atlas, why can Pannonhalma Archabbey be regarded as the cradle of Hungarian Christianity?",
    "answers": [
      "Because King Saint Stephen was crowned here at the time of the foundation of the state",
      "Because the miraculous image of Our Lady of Tears is kept here as a place of pilgrimage",
      "Because the first Hungarian-language book was printed within its walls",
      "Because it was founded in 996, before the foundation of the state, as the country's oldest monastic community"
    ],
    "explanation": "According to the description of Pannonhalma Archabbey, the abbey was founded by Benedictine monks in 996, before the foundation of the state, and is Hungary's oldest monastic community.",
    "latvName": "Pannonhalma Archabbey"
  },
  "nyugat-dunantul-02": {
    "question": "According to the atlas, what was the great historical significance of the 1532 siege of Jurisics Castle in Kőszeg?",
    "answers": [
      "The defenders drove the entire Ottoman army out of the country",
      "After the siege, the peace treaty with the Turks was signed in the castle",
      "The small band of defenders held up Suleiman's army, thereby preventing the siege of Vienna",
      "The recapture of the castle marked the beginning of the expulsion of the Turks from Hungary"
    ],
    "explanation": "According to the description of Kőszeg – Jurisics Castle, Miklós Jurisics's small band of defenders repelled Sultan Suleiman's vast army in 1532, delaying it and thereby preventing the siege of Vienna.",
    "latvName": "Kőszeg – Jurisics Castle"
  },
  "nyugat-dunantul-03": {
    "question": "According to the atlas, for which event in cultural history is Nádasdy Castle in Sárvár renowned?",
    "answers": [
      "The country's first university was founded here",
      "The first book written entirely in Hungarian was printed here in 1541",
      "The first Hungarian-language dictionary was compiled here",
      "The first Hungarian-language theatrical performance was staged here"
    ],
    "explanation": "According to the description of Sárvár – Nádasdy Castle, János Sylvester's printing press operated in the castle, where the first printed book written entirely in Hungarian, a Hungarian translation of the New Testament, was produced in 1541.",
    "latvName": "Sárvár – Nádasdy Castle"
  },
  "nyugat-dunantul-04": {
    "question": "According to the atlas, the twin-towered Abbey Church of Ják is an outstanding monument of which architectural period?",
    "answers": [
      "Gothic architecture",
      "Renaissance architecture",
      "Baroque architecture",
      "Romanesque architecture"
    ],
    "explanation": "According to the description of the Abbey Church of Ják, the twin-towered Benedictine church, built in the mid-13th century, is one of the finest and best-preserved works of Hungarian Romanesque architecture.",
    "latvName": "Abbey Church of Ják"
  },
  "nyugat-dunantul-05": {
    "question": "According to the atlas, which natural feature makes Lake Fertő special?",
    "answers": [
      "It is Europe's westernmost steppe lake, a shallow saline lake densely fringed with reed beds",
      "It is Hungary's largest and deepest mountain lake",
      "It is the country's only karst spring below sea level",
      "It is one of the world's largest biologically active thermal lakes"
    ],
    "explanation": "According to the description of the Lake Fertő Cultural Landscape, Lake Fertő is Europe's westernmost steppe lake: a shallow saline lake densely fringed with reed beds, forming a transboundary World Heritage cultural landscape.",
    "latvName": "Lake Fertő Cultural Landscape"
  },
  "nyugat-dunantul-06": {
    "question": "According to the atlas, what happened at the site of the Pan-European Picnic on 19 August 1989?",
    "answers": [
      "The agreement on the withdrawal of Soviet troops was signed",
      "The Republic of Hungary was proclaimed here",
      "A gate in the Iron Curtain was briefly opened, allowing several hundred East German citizens to cross into Austria",
      "The entire Hungarian–Austrian border fence was dismantled"
    ],
    "explanation": "According to the description of the Pan-European Picnic Memorial Site, a gate in the Iron Curtain was briefly opened here on 19 August 1989, enabling several hundred East German citizens to cross into Austria – the first mass escape from behind the Iron Curtain.",
    "latvName": "Pan-European Picnic Memorial Site"
  },
  "nyugat-dunantul-07": {
    "question": "Which world-famous composer lived and worked for decades as court Kapellmeister at Esterházy Palace in Fertőd?",
    "answers": [
      "Ferenc Liszt",
      "Ferenc Erkel",
      "Wolfgang Amadeus Mozart",
      "Joseph Haydn"
    ],
    "explanation": "According to the description of Esterházy Palace in Fertőd, Joseph Haydn lived and worked at Eszterháza from 1766 to 1790 as Kapellmeister and composer to the Esterházy court.",
    "latvName": "Esterházy Palace, Fertőd"
  },
  "nyugat-dunantul-08": {
    "question": "According to the atlas, why does Sopron bear the title ‘Most Faithful City’ (Civitas Fidelissima)?",
    "answers": [
      "Because its residents voted to remain part of Hungary in a 1921 referendum",
      "Because the city never fell into Turkish hands during the Ottoman occupation",
      "Because it remained loyal to the king during Rákóczi's War of Independence",
      "Because it was the first to embrace the cause of the Reformation"
    ],
    "explanation": "According to the description of Sopron – Firewatch Tower, the Gate of Loyalty beneath the tower commemorates the fact that Sopron's residents voted to remain part of Hungary in a 1921 referendum, which is why the city bears the title ‘Most Faithful City’ (Civitas Fidelissima).",
    "latvName": "Sopron – Firewatch Tower"
  },
  "nyugat-dunantul-09": {
    "question": "What is the main difference between the atlas's descriptions of Esterházy Palace in Fertőd and Széchenyi Palace in Nagycenk?",
    "answers": [
      "Both were medieval Gothic border fortresses",
      "The palace in Fertőd is the country's largest Rococo palace, while the one in Nagycenk is István Széchenyi's birthplace and a memorial site",
      "The palace in Fertőd is István Széchenyi's birthplace, while the one in Nagycenk is a Rococo centre of music",
      "The palace in Fertőd now operates as a spa, while the one in Nagycenk serves as a Benedictine monastery"
    ],
    "explanation": "Esterházy Palace in Fertőd is the country's largest Rococo palace complex (‘the Hungarian Versailles’), while Széchenyi Palace in Nagycenk is the birthplace of Count István Széchenyi and a national memorial site.",
    "latvName": "Széchenyi Palace, Nagycenk"
  },
  "nyugat-dunantul-10": {
    "question": "Which statement about the Iseum in Szombathely is TRUE according to the atlas?",
    "answers": [
      "It is the surviving ruin of a medieval Benedictine monastery",
      "It is a surviving mosque from the period of Ottoman occupation",
      "It is a reconstructed complex of an ancient Roman sanctuary built in honour of the Egyptian goddess Isis",
      "It is an early 19th-century Eclectic-style synagogue"
    ],
    "explanation": "According to the description of Szombathely – Iseum, the Iseum is the reconstructed complex of an ancient sanctuary built in honour of the Egyptian goddess Isis in the Roman city of Savaria.",
    "latvName": "Szombathely – Iseum"
  },
  "del-alfold-01": {
    "question": "According to the atlas, following which event was Szeged’s landmark, the Votive Church (Szeged Cathedral), built as a fulfilment of a vow during the city’s reconstruction?",
    "answers": [
      "The fighting in Szeged during the 1848–49 War of Independence",
      "The Great Flood of Szeged in 1879",
      "In memory of Szeged’s victims of the First World War",
      "The liberation from Ottoman rule"
    ],
    "explanation": "According to the description of Szeged Cathedral, the twin-towered, Romanesque Revival Votive Church was built as a fulfilment of a vow during the city’s reconstruction following the Great Flood of Szeged in 1879.",
    "latvName": "Szeged Cathedral (Votive Church)"
  },
  "del-alfold-02": {
    "question": "According to the atlas, the Cifrapalota in Kecskemét, lavishly decorated with floral and heart motifs, is an example of which early 20th-century architectural movement?",
    "answers": [
      "Baroque",
      "Renaissance Revival",
      "Hungarian Art Nouveau",
      "Romanesque architecture"
    ],
    "explanation": "According to the description of the Cifrapalota, the building, erected in 1902 to designs by Géza Márkus and clad in Zsolnay majolica, is one of the most magnificent examples of Hungarian Art Nouveau.",
    "latvName": "Kecskemét – Cifrapalota"
  },
  "del-alfold-03": {
    "question": "Which statement about the New Synagogue in Szeged is TRUE according to the atlas?",
    "answers": [
      "It was built in the Middle Ages in the Gothic style, originally as a Christian church",
      "It is no longer in use and can only be visited as a museum",
      "It was built to designs by Miklós Ybl in the Romanesque Revival style",
      "It is Hungary’s second-largest synagogue and an outstanding example of Hungarian Art Nouveau"
    ],
    "explanation": "According to the description, the New Synagogue, built in 1903 to designs by Lipót Baumhorn, is Hungary’s second-largest synagogue, an outstanding example of Hungarian Art Nouveau, and remains in use today.",
    "latvName": "New Synagogue, Szeged"
  },
  "del-alfold-04": {
    "question": "According to the atlas, what does the monumental Feszty Panorama, the main attraction of the Ópusztaszer National Heritage Park, depict?",
    "answers": [
      "The arrival of the Hungarians, or the Hungarian conquest of the Carpathian Basin",
      "The battles of the 1848–49 War of Independence",
      "The tragedy of the Battle of Mohács",
      "Saint Stephen’s founding of the state and his coronation"
    ],
    "explanation": "The Feszty Panorama is a painting by Árpád Feszty measuring 120 metres long and 15 metres high, depicting the arrival of the Hungarians and the drama of the conquest of the Carpathian Basin.",
    "latvName": "Ópusztaszer National Heritage Park"
  },
  "del-alfold-05": {
    "question": "Which statement about Gyula Castle is TRUE according to the atlas?",
    "answers": [
      "It is Hungary’s highest-altitude hilltop castle",
      "It is a castle-palace built in the 19th-century Romantic style",
      "It is Central Europe’s only intact lowland brick castle",
      "It never fell into Ottoman hands during the period of Ottoman rule"
    ],
    "explanation": "According to the description of Gyula Castle, it is Central Europe’s only intact lowland brick castle. It was built in the 15th century in the Gothic style, and the Ottomans were able to capture it only after a long siege.",
    "latvName": "Gyula Castle"
  },
  "del-alfold-06": {
    "question": "According to the atlas, what is the main tourist attraction of the Bugac area of Kiskunság National Park?",
    "answers": [
      "A network of stalactite caves and underground lakes",
      "The pastoral traditions of the puszta and the spectacular equestrian displays of the csikós horsemen",
      "Volcanic buttes with basalt columns and a famous wine region",
      "A thermal bath built over a karst spring below sea level"
    ],
    "explanation": "According to the description of Bugac, the sandy puszta is a living centre of Hungarian pastoral traditions, where spectacular equestrian performances by csikós horsemen—including the famous five-horse team—bring pastoral culture to life.",
    "latvName": "Kiskunság National Park – Bugac"
  },
  "del-alfold-07": {
    "question": "According to the atlas, what makes Halas lace, the Hungarikum displayed at the Lace House in Kiskunhalas, unique?",
    "answers": [
      "It is machine-made and mass-produced on an industrial scale",
      "It is produced exclusively using a machine technique developed in the 21st century",
      "It is handmade using a needle-lace technique with fine stitches and cannot be replicated by machine",
      "It is a dyed fabric woven from metal thread and can be completed in a few hours"
    ],
    "explanation": "According to the description, Halas lace is unique because it is handmade using a needle-lace technique with exceptionally fine stitches, cannot be replicated by machine, and each piece takes weeks or even months to complete.",
    "latvName": "Kiskunhalas – Lace House"
  },
  "del-alfold-08": {
    "question": "What is the main difference between the atlas’s descriptions of Almásy Palace in Gyula and Wenckheim Palace in Szabadkígyós?",
    "answers": [
      "Both were medieval Gothic border fortresses",
      "Almásy Palace in Gyula is a Baroque residence with a modern interactive visitor centre, while Wenckheim Palace in Szabadkígyós is a Renaissance Revival aristocratic residence designed by Miklós Ybl",
      "Almásy Palace in Gyula was designed by Miklós Ybl, while Wenckheim Palace in Szabadkígyós now operates as a spa",
      "Both now house the Munkácsy Collection"
    ],
    "explanation": "Almásy Palace in Gyula is an 18th-century Baroque residence that has operated as a modern, interactive visitor centre since 2018, while Wenckheim Palace in Szabadkígyós was designed by Miklós Ybl in the Renaissance Revival style for the aristocratic Wenckheim family.",
    "latvName": "Almásy Palace, Gyula"
  },
  "del-alfold-09": {
    "question": "According to the atlas, the birthplace and memorial museum of which Hungarian poet can be visited in Kiskőrös?",
    "answers": [
      "János Arany",
      "Attila József",
      "Sándor Petőfi",
      "Mihály Vörösmarty"
    ],
    "explanation": "Sándor Petőfi, the greatest poet of Hungarian Romanticism and revolutionary verse, was born in 1823 in the thatched peasant house in Kiskőrös.",
    "latvName": "Kiskőrös – Birthplace of Sándor Petőfi"
  },
  "del-alfold-10": {
    "question": "According to the atlas, which architect designed the Hagymatikum in Makó, one of the best-known works of Hungarian organic architecture?",
    "answers": [
      "Miklós Ybl",
      "Ödön Lechner",
      "Lipót Baumhorn",
      "Imre Makovecz"
    ],
    "explanation": "According to the description of the Hagymatikum, the spa, opened in 2012, was designed by Imre Makovecz, the foremost master of Hungarian organic architecture.",
    "latvName": "Hagymatikum, Makó"
  },
  "kozep-dunantul-01": {
    "question": "According to the atlas, what gives Székesfehérvár its outstanding historical significance in the medieval Kingdom of Hungary?",
    "answers": [
      "The Holy Crown of Hungary was kept here continuously for centuries",
      "The expulsion of the Ottomans from Hungary at the end of Ottoman rule began here",
      "Hungarian kings were crowned and buried here for more than a thousand years",
      "The Diets of the Reform Era were held here until 1848"
    ],
    "explanation": "According to the description of Székesfehérvár, the city was the first and longest-serving coronation city of the Kingdom of Hungary, where 37 Hungarian kings were crowned and buried over a period of more than 1,000 years.",
    "latvName": "Székesfehérvár – city centre and coronation history"
  },
  "kozep-dunantul-02": {
    "question": "Which world-famous composer stayed for extended periods on several occasions as a guest at the Brunszvik Mansion in Martonvásár, where a memorial museum dedicated to him now operates?",
    "answers": [
      "Ferenc Liszt",
      "Ferenc Erkel",
      "Joseph Haydn",
      "Ludwig van Beethoven"
    ],
    "explanation": "According to the description of the Brunszvik Mansion in Martonvásár, Beethoven stayed at the mansion for extended periods on several occasions as a guest of the Brunszvik siblings. It now houses the Beethoven Museum.",
    "latvName": "Brunszvik Mansion, Martonvásár"
  },
  "kozep-dunantul-03": {
    "question": "According to the atlas, the Esterházy Mansion in Pápa is home to Hungary's only museum devoted to which form of folk craftsmanship designated as a Hungarikum?",
    "answers": [
      "The tradition of blue-dyeing textiles with indigo",
      "The hand-painting of Herend porcelain",
      "Matyó embroidery",
      "Kalocsa decorative painting and embroidery"
    ],
    "explanation": "According to the description of the Esterházy Mansion and Blue-Dyeing Museum in Pápa, the Blue-Dyeing Museum associated with the mansion is unique in Hungary: blue-dyeing is a tradition of Hungarian folk craftsmanship designated as a Hungarikum.",
    "latvName": "Esterházy Mansion and Blue-Dyeing Museum, Pápa"
  },
  "kozep-dunantul-04": {
    "question": "According to the atlas, what makes Bory Castle in Székesfehérvár unique?",
    "answers": [
      "It was built as King Matthias's Renaissance hunting lodge",
      "The sculptor Jenő Bory built it from reinforced concrete over more than four decades, largely with his own hands",
      "It served as the border fortress of a 16th-century captain who fought the Ottomans",
      "It is a medieval Gothic water castle reflected in the surface of a lake"
    ],
    "explanation": "According to the description of Bory Castle, the sculptor and architect Jenő Bory built it over more than four decades, largely with his own hands, boldly using reinforced concrete, a new material of the period.",
    "latvName": "Bory Castle"
  },
  "kozep-dunantul-05": {
    "question": "According to the atlas, which historical figure fled to the Esterházy Mansion in Tata in 1809 and was accommodated there for a short time?",
    "answers": [
      "Francis II Rákóczi",
      "Emperor Franz Joseph",
      "Napoleon I, Emperor of the French",
      "Maria Theresa"
    ],
    "explanation": "According to the description of the Esterházy Mansion in Tata, Napoleon I fled there from Habsburg power in 1809, and the mansion served as his accommodation for a short time.",
    "latvName": "Esterházy Mansion, Tata"
  },
  "kozep-dunantul-06": {
    "question": "According to the atlas, which description characterises the Komárom fortification system?",
    "answers": [
      "A single circular Renaissance castle tower on an island in the Danube",
      "A surviving palisade fort built by the Ottomans during the period of Ottoman rule",
      "A fully reconstructed wooden palisade of an ancient Roman legionary fortress",
      "One of Central Europe's largest military fortification complexes, comprising 14 forts and structural sections"
    ],
    "explanation": "According to the description of the Komárom fortification system, it is one of Central Europe's largest surviving military fortification complexes, comprising a total of 14 forts and structural sections across an area of 58 hectares.",
    "latvName": "Komárom Fortification System"
  },
  "kozep-dunantul-07": {
    "question": "Which statement about Lake Velence is TRUE according to the atlas?",
    "answers": [
      "It is Hungary's largest and deepest natural lake",
      "It is a thermal lake fed by a karst spring below sea level",
      "It is Hungary's second-largest natural lake and its fastest-warming shallow recreational lake",
      "It is an artificial reservoir created by damming for energy production"
    ],
    "explanation": "According to the description of Lake Velence, it is Hungary's second-largest natural lake and the country's largest shallow recreational lake, as well as the one that warms up the most.",
    "latvName": "Lake Velence – Agárd and Gárdony"
  },
  "kozep-dunantul-08": {
    "question": "According to the atlas, members of which monastic order founded and inhabited the 18th-century cells of the Majk Hermitage at the foot of the Vértes Mountains?",
    "answers": [
      "Benedictine monks",
      "Camaldolese monks who observed a vow of silence",
      "Cistercian monks",
      "Pauline monks"
    ],
    "explanation": "According to the description of the Majk Hermitage, this unique 18th-century complex was founded and inhabited by Camaldolese monks who observed silence under a vow.",
    "latvName": "Majk Hermitage"
  },
  "kozep-dunantul-09": {
    "question": "According to the atlas, what is one of the most famous attractions in the Baroque building of Zirc Cistercian Abbey?",
    "answers": [
      "The Antal Reguly Historic Library, with its original furnishings and tens of thousands of volumes",
      "Beethoven's preserved former concert hall in Martonvásár",
      "The country's largest mansion library made of hand-painted porcelain",
      "A medieval fresco depicting the coronation of the Hungarian kings"
    ],
    "explanation": "According to the description of Zirc Cistercian Abbey, the abbey is famous for the Antal Reguly Historic Library, a Baroque library hall with its original furnishings and tens of thousands of volumes.",
    "latvName": "Zirc Cistercian Abbey"
  },
  "kozep-dunantul-10": {
    "question": "According to the atlas, in which Central Transdanubian settlement was the world-famous hand-painted porcelain manufactory founded in 1826?",
    "answers": [
      "Zirc",
      "Pápa",
      "Várpalota",
      "Herend"
    ],
    "explanation": "According to the description of the Herend Porcelain Manufactory, the home of one of the world's most famous porcelain brands was founded in 1826 in Herend, at the foot of the Bakony Mountains.",
    "latvName": "Herend Porcelain Manufactory"
  }
};

window.UI_TEXT = UI_TEXT;
window.EN_TRANSLATIONS = EN_TRANSLATIONS;
window.EN_QUIZ = EN_QUIZ;
