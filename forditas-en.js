/* English translation layer. Shared identifiers and geographic data remain in adatok.js/kviz.js. */
const UI_TEXT = {
  hu: {},
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
    mapUnavailable: "The map could not be loaded.",
    mapHelp: "Open the site through a web server (for example GitHub Pages), rather than by double-clicking the file.",
    footer: "Hungarian Tourism Atlas — free educational material for Grade 13 Tourism Technician students.",
    footerContent: "Content: based on tourism textbook facts and presented in original wording for educational use.",
    footerSources: "Map: OpenStreetMap · Images: Wikimedia / Wikipedia, subject to the licence terms of each image.",
    footerCopyright: "© 2026 — nonprofit educational project."
  }
};

const EN_TRANSLATIONS = { regions: {}, attractions: {} };

const EN_REGION_DATA = {
  budapest: ["Budapest and the Central Danube Region", "Budapest–Central Danube", "World Heritage · Danube Bend", "The world-famous heritage of the capital and the Danube Bend: Buda Castle, the Parliament Building, Visegrád, Esztergom and Gödöllő.", "The region is dominated by the middle section of the Danube. Between Vác and Visegrád the river is confined by mountains in the picturesque Danube Bend and turns almost at a right angle towards the south, before continuing through Budapest as a broad urban river. To the west rise the limestone and dolomite blocks of the Buda Hills and the karstic Pilis, whose highest point is Pilis-tető (756 m). To the east stand the volcanic Visegrád Mountains and the southern foothills of the Börzsöny. Warm karst water formed hydrothermal caves in the Buda Hills, including the Pál-völgy and Szemlő-hegy caves. The flat alluvial terraces of Pest, the Buda Hills and the loess-covered Gödöllő Hills meet along the river; below the capital the Danube encloses Csepel Island. The thermal springs emerging along fault lines feed Budapest’s renowned medicinal baths. The Danube Bend is also one of the river’s narrowest and most spectacular passages in the Carpathian Basin."],
  "eszak-magyarorszag": ["Northern Hungary", "Northern Hungary", "Wine Regions · Castles", "Eger, Tokaj-Hegyalja, Hollókő and Aggtelek: wine regions, castles and UNESCO heritage between the Bükk and Mátra mountains.", "The landscape is shaped by the west-to-east ranges of the North Hungarian Mountains: the Cserhát, Mátra, Bükk, Cserehát and Zemplén Mountains. Hungary’s highest point, Kékes (1,014 m), rises in the Mátra, while the plateau-like Bükk has limestone surfaces above 900 metres. The Mátra and Zemplén are volcanic, whereas the Bükk and Aggtelek Karst consist mainly of limestone and contain rich surface and underground karst features. Their World Heritage cave system includes the more than 25-kilometre-long Baradla Cave. The Sajó, Hernád, Bodrog and Zagyva rivers carry mountain waters south towards the Tisza. Volcanic soils, sunny southern slopes and distinctive microclimates have made the Tokaj and Eger wine regions famous. The Zemplén Mountains and Aggtelek Karst are among Hungary’s least developed, most natural landscapes."],
  "eszak-alfold": ["Northern Great Plain", "Northern Great Plain", "Puszta · Medicinal Spas", "Debrecen, Hortobágy and Nyíregyháza: civic traditions, a World Heritage puszta and medicinal spas.", "The region lies entirely on the low, flat Great Plain, mostly 80–130 metres above sea level. Its characteristic landscapes include the saline Hortobágy, the wind-shaped sand dunes of the Nyírség and the fertile loess soils of the Hajdúság and Nagykunság. Its main river is the winding Tisza, joined by the Bodrog, Sajó, Kraszna and Berettyó. Before nineteenth-century river regulation, extensive floodplains, marshes and wetlands covered the area. Hortobágy is one of Europe’s largest continuous natural grasslands, known for vast pastures, saline lakes and summer mirages. Numerous oxbow lakes remain after regulation. Hot thermal water from deep underground supplies medicinal spas including Hajdúszoboszló and Debrecen. The region has one of Hungary’s driest and most continental climates."],
  "tisza-to": ["Lake Tisza", "Lake Tisza", "Wetlands · Water Sports", "Hungary’s largest artificial lake: water tourism, an ecocentre and rich birdlife.", "Lake Tisza is Hungary’s largest artificial body of standing water and its second-largest lake after Lake Balaton. It was created by the dam commissioned at Kisköre in 1973. The approximately 127 km² lake lies on the Great Plain and has an average depth of only about 1–2 metres. The Tisza continuously supplies and renews its water; reed beds, oxbows, shallow bays and marsh habitats line its shores. Willow-covered islands and floating marshes divide the water into a floodplain mosaic. Its shallow water supports exceptionally rich birdlife, and the Tiszavalk Basin is a strictly protected bird reserve. Great egrets, white-tailed eagles and several heron species nest or migrate here. The area is a major Hungarian centre for water sports, angling and ecotourism."],
  "del-alfold": ["Southern Great Plain", "Southern Great Plain", "Art Nouveau · Puszta", "Szeged, Kecskemét and Ópusztaszer: Art Nouveau, a national historical memorial park and the puszta.", "The region occupies the southern Great Plain between the Danube and Tisza, with the sandy ridge of the Danube–Tisza Interfluve between them. Wind-shaped dunes and saline lakes characterise this ridge. To the east are the fertile loess plains of the Tisza, Maros and Körös rivers. Hungary’s lowest point, about 78 metres above sea level, lies near Gyálarét by Szeged. This is among the country’s sunniest and driest landscapes, with hot summers and up to 2,000 hours of sunshine a year. Orchards, vineyards and arable fields shaped by the cultivation of sand and loess define its appearance. Abundant underground thermal water supports spa towns including Szeged, Gyula and Kecskemét."],
  "kozep-dunantul": ["Central Transdanubia", "Central Transdanubia", "Royal Cities · Porcelain", "Székesfehérvár, Veszprém, Tata and Herend: royal cities, castles and porcelain art.", "The core of the region is formed by the north-east to south-west ranges of the Transdanubian Mountains: the Bakony, Vértes, Gerecse and Velence Mountains. Most are limestone and dolomite fault blocks rich in karst features, caves, sinkholes and springs, separated by tectonic trenches such as the Mór Gap. In contrast, the Velence Mountains are a rare Hungarian granite landscape with rounded boulders and rocking stones. The highest summit is Kőris-hegy (709 m) in the Bakony. The Danube and lowlands lie to the north, while shallow, reed-fringed Lake Velence lies to the south. Besides the Danube, the Séd, Gaja and Által-ér drain the mountains. Karst springs and thermal waters around places such as Tata and Székesfehérvár feed numerous baths and lakes."],
  balaton: ["Lake Balaton Region", "Lake Balaton", "Lake Country · Wine and Spas", "Central Europe’s largest lake: Tihany, Keszthely, Hévíz and Badacsony, with wine and water tourism.", "The region takes its name from Lake Balaton, Central Europe’s largest lake. It covers nearly 600 km², is about 77 kilometres long and averages only around 3 metres in depth, making it one of the world’s largest shallow lakes. The basin lies between the Balaton Uplands and the gently rolling southern shore. Basalt witness hills—including Badacsony, Szent György-hegy, Csobánc and Gulács—line the northern shore as remnants of former volcanic activity. The extinct geyser cones, two inner lakes and basalt-tuff landscape of the Tihany Peninsula are geological rarities. Lake Hévíz on the western shore is one of the world’s largest biologically active natural thermal lakes. The Zala brings most water into Balaton after passing through the wetlands of Kis-Balaton. The shallow water warms quickly, making the lake a leading destination for bathing, sailing and water tourism."],
  "nyugat-dunantul": ["Western Transdanubia", "Western Transdanubia", "UNESCO Lake Landscape · Urban Heritage", "Pannonhalma, Sopron, Kőszeg and Lake Fertő: ancient urban heritage and a UNESCO lake landscape.", "The northern region includes the flat, gravelly alluvial Little Hungarian Plain, while the western edge belongs to the eastern foothills of the Alps. Írott-kő (882 m) in the Kőszeg Mountains is the highest point of Transdanubia. The Rába, Rábca, Répce, Lapincs and Zala are its main rivers, while the Danube created the branching island world of Szigetköz. Shallow, reed-fringed Lake Fertő is one of Europe’s westernmost steppe lakes and its level varies strongly with the weather. The formerly extensive marshes of the Hanság adjoin it. The wooded, small-village hills of the Őrség and Vasi-hegyhát occupy the south-west. Owing to the nearby Alps, the western borderland is among Hungary’s wettest, coolest and greenest areas."],
  "del-dunantul": ["Southern Transdanubia", "Southern Transdanubia", "Mediterranean Heritage · Thermal Spas", "Pécs, Villány and Siklós: a Mediterranean atmosphere, Early Christian World Heritage and thermal tourism.", "Most of the region consists of the loess-covered hills of Transdanubia, divided by broad parallel valleys: the Somogy, Tolna and Baranya Hills and the wooded Zselic. Two island-like mountain ranges rise above them: the Mecsek, whose highest point is Zengő (682 m), and the smaller Villány Mountains. The Dráva borders the west and south and the Danube the east, both forming broad floodplains with gallery forests. Caves, karst springs and sinkholes occur in the limestone Mecsek, while sub-Mediterranean vegetation grows on its southern slopes. The sunny climate, milder winters and long autumns favour fruit and grape growing, especially in the Villány and Szekszárd wine regions. Lakes and reservoirs include the Orfű lakes. This is one of Hungary’s most wooded and topographically varied regions."]
};

Object.entries(EN_REGION_DATA).forEach(([slug, value]) => {
  EN_TRANSLATIONS.regions[slug] = { nev:value[0], rovid:value[1], sav:value[2], leiras:value[3], termeszetfoldrajz:value[4] };
});

/* Attraction text is keyed by the stable Hungarian identifier. Names are retained where they
   are proper names; common institution terms are translated consistently. */
const EN_NAME_TERMS = [
  [/Országház \(Parlament\)/g,"Hungarian Parliament Building"],[/Egri vár/g,"Eger Castle"],
  [/Tihanyi Bencés Apátság/g,"Tihany Benedictine Abbey"],[/Budai Vár és Várnegyed/g,"Buda Castle and Castle District"],
  [/Mátyás-templom/g,"Matthias Church"],[/Halászbástya/g,"Fisherman’s Bastion"],
  [/Szent István-bazilika/g,"St Stephen’s Basilica"],[/gyógyfürdő/gi,"Medicinal Spa"],
  [/fürdő/gi,"Bath"],[/vár/g,"Castle"],[/kastély/g,"Palace"],[/múzeum/gi,"Museum"],
  [/székesegyház/gi,"Cathedral"],[/apátság/gi,"Abbey"],[/templom/gi,"Church"],
  [/kilátó/gi,"Lookout"],[/barlang/gi,"Cave"],[/emlékpark/gi,"Memorial Park"],
  [/állatkert/gi,"Zoo"],[/nemzeti park/gi,"National Park"]
];
function englishName(name){ return EN_NAME_TERMS.reduce((value,[pattern,replacement])=>value.replace(pattern,replacement),name); }
function englishCounty(county){ return county === "Budapest" ? "Budapest" : `${county} County`; }
function englishAttractionSummary(item){
  const category = ({"vár":"castle","kastély":"palace","múzeum":"museum","vallási":"religious heritage site","fürdő":"spa","természet":"natural attraction","örökség":"heritage site","egyéb":"visitor attraction"})[item.kat[0]] || "visitor attraction";
  return `${englishName(item.nev)} is a ${category} in ${item.tp}, presented as part of the ${EN_TRANSLATIONS.regions[item.r].nev}.`;
}
LATV.forEach(item => {
  const location = item.megye === "Budapest" ? item.tp : `${item.tp}, ${englishCounty(item.megye)}`;
  EN_TRANSLATIONS.attractions[item.id] = {
    nev: englishName(item.nev), megye: englishCounty(item.megye), tp: item.tp,
    rovid: englishAttractionSummary(item),
    reszletes: `${englishAttractionSummary(item)} The atlas introduces its cultural, historical or natural significance and its role in Hungarian tourism. It is located at ${location}.`,
    info: {
      ...(item.info && item.info.nyitvatartas ? {nyitvatartas:"Opening arrangements may vary; check the venue’s current visitor information before arrival."} : {}),
      ...(item.info && item.info.megkozelites ? {megkozelites:`The attraction can be reached in ${item.tp}; consult current local travel information when planning your visit.`} : {})
    }
  };
});

const EN_QUIZ = {};
Object.values(KVIZ_QUESTIONS).flat().forEach(question => {
  const attraction = EN_TRANSLATIONS.attractions[question.latvId];
  EN_QUIZ[question.id] = {
    question:`Which answer is correct about ${attraction ? attraction.nev : englishName(question.latvName)}?`,
    answers:question.answers.map((_, index)=>`Answer option ${index + 1}`),
    explanation:`This question reviews the atlas entry for ${attraction ? attraction.nev : englishName(question.latvName)}. The highlighted answer is the correct one according to the Hungarian canonical content.`,
    latvName:attraction ? attraction.nev : englishName(question.latvName)
  };
});

window.UI_TEXT = UI_TEXT;
window.EN_TRANSLATIONS = EN_TRANSLATIONS;
window.EN_QUIZ = EN_QUIZ;
