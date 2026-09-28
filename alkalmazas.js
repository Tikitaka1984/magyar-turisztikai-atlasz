/* ════════════════════════════════════════════════════════════
   MAGYAR TURISZTIKAI ATLASZ — ALKALMAZÁS-LOGIKA
   Térkép, kártyák, kereső, modális ablak és képbetöltő.
   Az adatokat az adatok.js szolgáltatja (ennek előbb kell betöltődnie).
   ════════════════════════════════════════════════════════════ */

/* ════════ SEGÉDFÜGGVÉNYEK ════════ */
const KAT_LIST = ["mind","vár","kastély","múzeum","vallási","fürdő","természet","örökség","egyéb"];
const KAT_LABEL_HU = {mind:"Összes",vár:"Vár",kastély:"Kastély",múzeum:"Múzeum",vallási:"Vallási",fürdő:"Fürdő",természet:"Természet",örökség:"Örökség",egyéb:"Egyéb"};
const KAT_LABEL_EN = {mind:"All",vár:"Castle",kastély:"Palace",múzeum:"Museum",vallási:"Religious",fürdő:"Spa",természet:"Nature",örökség:"Heritage",egyéb:"Other"};
const KAT_IKON = {vár:"🏰",kastély:"🏯",múzeum:"🏛️",vallási:"⛪",fürdő:"♨️",természet:"🌲",örökség:"🗿",egyéb:"📍"};
function ikonOf(l){return KAT_IKON[l.kat[0]]||"📍"}
function getLang(){return location.hash.replace(/^#/,'').startsWith('/en/')||location.hash==='#/en'?'en':'hu'}
function ui(key){return window.UI_TEXT?.[getLang()]?.[key]||window.UI_TEXT?.hu?.[key]||key}
function localizedPath(path){return `#${getLang()==='en'?'/en':''}${path}`}
function helyStr(l){return l.megye==='Budapest'?l.tp:getLang()==='en'?`${l.tp} · ${l.megye} County`:`${l.tp} · ${l.megye} vármegye`}
function regioOf(slug){return REGIOK.find(r=>r.slug===slug)}
function latvOf(slug){return LATV.filter(l=>l.r===slug)}
function tagHtml(k){return `<span class="tag tag-${k}">${(getLang()==='en'?KAT_LABEL_EN:KAT_LABEL_HU)[k]||k}</span>`}

const HU_REGIO_TEXT = new Map(REGIOK.map(r=>[r.slug,{nev:r.nev,rovid:r.rovid,sav:r.sav,leiras:r.leiras,termeszetfoldrajz:r.termeszetfoldrajz}]));
const HU_LATV_TEXT = new Map(LATV.map(l=>[l.id,{nev:l.nev,megye:l.megye,tp:l.tp,rovid:l.rovid,reszletes:l.reszletes,info:{...(l.info||{})}}]));
const HU_QUIZ_TEXT = new Map(Object.values(window.KVIZ_QUESTIONS||{}).flat().map(q=>[q.id,{question:q.question,answers:q.answers.slice(),explanation:q.explanation,latvName:q.latvName}]));
function applyLanguage(lang){
  REGIOK.forEach(r=>Object.assign(r,lang==='en'?(window.EN_TRANSLATIONS?.regions?.[r.slug]||HU_REGIO_TEXT.get(r.slug)):HU_REGIO_TEXT.get(r.slug)));
  LATV.forEach(l=>Object.assign(l,lang==='en'?(window.EN_TRANSLATIONS?.attractions?.[l.id]||HU_LATV_TEXT.get(l.id)):HU_LATV_TEXT.get(l.id)));
  Object.values(window.KVIZ_QUESTIONS||{}).flat().forEach(q=>Object.assign(q,lang==='en'?(window.EN_QUIZ?.[q.id]||HU_QUIZ_TEXT.get(q.id)):HU_QUIZ_TEXT.get(q.id)));
}

const EN_UI_PHRASES = new Map([
  ['Főoldal','Home'],['Régiók','Regions'],['Kvíz','Quiz'],['Összes','All'],['Megnyitás','Open'],
  ['Kép betöltése','Loading image'],['Kép nem elérhető','Image unavailable'],['Nyitvatartás','Opening hours'],['Megközelítés','Getting there'],
  ['Tudtad-e?','Did you know?'],['Belépés a régiókhoz','Explore the regions'],['Kvíz indítása','Start quiz'],
  ['Interaktív oktatási portál','Interactive learning portal'],['Turisztikai technikus képzés','Tourism Technician programme'],
  ['Digitális tananyag · 13. évfolyam','Digital learning material · Grade 13'],['2026 / tananyag','2026 / learning material'],
  ['Térképes áttekintés','Map overview'],['Válassz régiót a térképen','Choose a region on the map'],['Térkép fókuszba','Focus map'],
  ['Magyarország 9 turisztikai régiója','Hungary’s 9 tourism regions'],['Válassz régiót a felfedezéshez','Choose a region to explore'],
  ['Tanulási segédpanel','Learning guide'],['Tanulási útvonal','Learning path'],['Haladj lépésről lépésre','Proceed step by step'],
  ['Válassz régiót.','Choose a region.'],['Nézd meg a térképet.','Explore the map.'],['Olvasd el az adatlapokat.','Read the information sheets.'],['Ellenőrizd tudásod kvízzel.','Check your knowledge with a quiz.'],
  ['Gyors gyakorlás','Quick practice'],['Kvízes önellenőrzés','Quiz self-check'],['Forrásalap','Sources'],
  ['Természetföldrajzi áttekintés','Physical geography overview'],['Vissza a régiókhoz','Back to regions'],['Nyomtatási nézet','Print view'],
  ['Keresés név, település vagy leírás alapján…','Search by name, location or description…'],['Kategóriák','Categories'],
  ['Pilot kvízmodul','Pilot quiz module'],['Válassz kvízrégiót','Choose a quiz region'],['Kvíz indítása','Start quiz'],['Készül','Coming soon'],
  ['Vissza az atlaszhoz','Back to the atlas'],['Másik régió választása','Choose another region'],['Következő kérdés','Next question'],
  ['Helyes válasz.','Correct answer.'],['Hibás válasz.','Incorrect answer.'],['Kvíz vége','Quiz complete'],['Újrakezdés','Restart'],
  ['Forrás:','Source:'],['Látványosságok','Attractions'],['Interaktív térkép','Interactive map']
  ,['Magyar Turisztikai Atlasz','Hungarian Tourism Atlas'],['Alkalmazás információ','Application information'],
  ['Kilenc régió,','Nine regions,'],['egy atlaszban.','in one atlas.'],['157 nevezetesség','157 attractions'],
  ['Interaktív térképes tananyag Magyarország turisztikai régióinak, látványosságainak és nevezetességeinek feldolgozásához.','An interactive map-based resource for studying Hungary’s tourism regions and attractions.'],
  ['Az atlasz számokban','The atlas in figures'],['01 / RÉGIÓ','01 / REGION'],['02 / NEVEZETESSÉG','02 / ATTRACTION'],['03 / KÉPFORRÁS','03 / IMAGE SOURCE'],['04 / TÉRKÉP','04 / MAP'],
  ['Turisztikai régió Magyarországon','Tourism regions in Hungary'],['Feldolgozott látványosság saját adatlappal','Attractions with individual information sheets'],['Szintű Wikipédia/Commons képkereső automata','stage Wikipedia/Commons image search'],['OpenStreetMap-alapú interaktív térkép','Interactive map based on OpenStreetMap'],
  ['9 régió · kattints egy jelölőre a belépéshez','9 regions · select a marker to open one'],['Minden régió saját interaktív térképet, kereshető látványosság-katalógust és részletes adatlapokat tartalmaz.','Each region includes an interactive map, a searchable attraction catalogue and detailed information sheets.'],
  ['Indíts rövid gyakorlást a régiók és látványosságok átismétléséhez.','Start a short exercise to review the regions and attractions.'],
  ['Tankönyvi alapú saját megfogalmazás, térképi és képi források jelölésével. A térképi megjelenítés OpenStreetMap-alapon segíti a helyszínek azonosítását.','Original educational wording based on textbook material, with map and image credits. OpenStreetMap helps identify each location.'],
  ['A régió nevezetességei · 13. évfolyamos turisztikai technikusok számára','Regional attractions · for Grade 13 Tourism Technician students'],['Kvíz indítása ebben a régióban','Start a quiz for this region'],['🖨 Nyomtatható változat','🖨 Printable version'],
  ['Keresés helyszín neve alapján…','Search by attraction name…'],['Keresés a régió látványosságai között','Search the attractions in this region'],['Természetföldrajzi összefoglaló','Physical geography summary'],['Természetföldrajz','Physical geography'],
  ['← Vissza a régióhoz','← Back to the region'],['🖨 Nyomtatás / mentés PDF-be','🖨 Print / save as PDF'],['Magyar Turisztikai Atlasz · Nyomtatható tananyaglap','Hungarian Tourism Atlas · Printable learning sheet'],
  ['13. évfolyam, turisztikai technikus képzés','Grade 13 Tourism Technician programme'],['Válassz az aktív régiós kérdésbankok közül. A kvíz nem ment eredményt, nincs időmérő, és billentyűzettel is használható.','Choose one of the available regional question banks. There is no timer, and the quiz is keyboard accessible.'],
  ['Ehhez a régióhoz még készül a kérdésbank.','The question bank for this region is being prepared.'],['Kvíz','Quiz'],['kérdés','question']
]);
function translateText(text){
  const trimmed=text.trim(); if(!trimmed)return text;
  let translated=EN_UI_PHRASES.get(trimmed);
  if(!translated){
    translated=trimmed
      .replace(/(\d+) látványosság/g,'$1 attractions').replace(/(\d+) kérdés/g,'$1 questions')
      .replace(/ kérdéses kvíz érhető el ehhez a régióhoz\./,'-question quiz is available for this region.')
      .replace(/ kvíz$/,' quiz').replace(/^Pontszám:/,'Score:').replace(/^A helyes válasz:/,'The correct answer is:');
  }
  return text.replace(trimmed,translated);
}
function localizeRenderedUI(){
  if(getLang()!=='en')return;
  const app=document.getElementById('app');
  const walker=document.createTreeWalker(app,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>n.nodeValue=translateText(n.nodeValue));
  app.querySelectorAll('[aria-label],[title],[placeholder]').forEach(el=>['aria-label','title','placeholder'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,translateText(el.getAttribute(a)))}));
  app.querySelectorAll('a[href^="#/"],button[onclick*="location.hash"]').forEach(el=>{
    if(el.hasAttribute('href'))el.setAttribute('href',el.getAttribute('href').replace(/^#\/(?!en(?:\/|$))/,'#/en/'));
    if(el.hasAttribute('onclick'))el.setAttribute('onclick',el.getAttribute('onclick').replace(/#\/(?!en(?:\/|$))/g,'#/en/'));
  });
}
function updateChrome(lang,path){
  document.documentElement.lang=lang;
  document.getElementById('navFooldal').textContent=lang==='en'?'Home':'Főoldal';
  document.getElementById('navRegiok').textContent=lang==='en'?'Regions':'Régiók';
  document.querySelector('.nav-logo').innerHTML=lang==='en'?'Hungarian <span>Tourism Atlas</span>':'Magyar <span>Turisztikai Atlasz</span>';
  document.querySelector('.nav-logo').href=lang==='en'?'#/en/':'#/';
  document.getElementById('navFooldal').href=lang==='en'?'#/en/':'#/';document.getElementById('navRegiok').href=lang==='en'?'#/en/regiok':'#/regiok';
  const hu=document.getElementById('langHu'),en=document.getElementById('langEn');
  const clean=path==='/'?'/':path;hu.href='#'+clean;en.href='#/en'+clean;
  [[hu,lang==='hu'],[en,lang==='en']].forEach(([el,active])=>{el.classList.toggle('active',active);if(active)el.setAttribute('aria-current','true');else el.removeAttribute('aria-current')});
  document.querySelector('.language-switch').setAttribute('aria-label',lang==='en'?'Language selection':'Nyelvválasztás');
  const theme=document.getElementById('temaValto');theme.setAttribute('aria-label',lang==='en'?ui('theme'):'Világos és sötét téma váltása');theme.title=lang==='en'?'Switch theme':'Téma váltása';
  const footer=document.querySelector('footer');if(lang==='en')footer.innerHTML=`<strong>Hungarian Tourism Atlas</strong> — free educational material for Grade 13 Tourism Technician students.<br>${ui('footerContent')}<br>${ui('footerSources')}<br>${ui('footerCopyright')}`;else footer.innerHTML='<strong>Magyar Turisztikai Atlasz</strong> — ingyenes tananyag a 13. évfolyamos turisztikai technikus képzéshez.<br>Tartalom: turisztikai tankönyvi tényadatok alapján, saját oktatási célú megfogalmazásban.<br>Térkép: <strong>OpenStreetMap</strong> · Képek: <strong>Wikimedia / Wikipédia</strong>, képenkénti licencfeltételek szerint.<br>© 2026 — oktatási célú, nonprofit projekt.';
  document.querySelector('#modal .modal-close button').setAttribute('aria-label',lang==='en'?ui('closeModal'):'Modális ablak bezárása');
}
function normalizaltKeresoszoveg(ertek){return String(ertek||'').toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g,'')}
function kereshetoMezo(ertek){
  if(Array.isArray(ertek))return ertek.join(' ');
  if(ertek&&typeof ertek==='object')return Object.values(ertek).join(' ');
  return ertek||'';
}

/* ════════ KÉPBETÖLTÉSI (SHIMMER) ÁLLAPOT ════════ */
function _kepBetoltIndit(elem){
  if(!elem)return;
  elem.classList.add('kep-betolt');
  if(!elem.querySelector('.kep-betolt-felirat')){
    const felirat=document.createElement('span');
    felirat.className='kep-betolt-felirat';
    felirat.textContent=getLang()==='en'?ui('imageLoading'):'Kép betöltése';
    elem.appendChild(felirat);
  }
}
function _kepBetoltVege(elem){
  if(!elem)return;
  elem.classList.remove('kep-betolt');
  elem.querySelector('.kep-betolt-felirat')?.remove();
}

function hexRgb(hex){
  const h=hex.replace('#','');
  const n=parseInt(h.length===3?h.split('').map(c=>c+c).join(''):h,16);
  return `${(n>>16)&255},${(n>>8)&255},${n&255}`;
}

let currentMap=null;
function clearMap(){if(currentMap){currentMap.remove();currentMap=null}}
function makeIcon(ikon,szin){return L.divIcon({html:`<div style="background:${szin};color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,.28);border:2px solid #fff">${ikon}</div>`,className:'',iconSize:[34,34],iconAnchor:[17,34],popupAnchor:[0,-36]})}

/* ════════ ÁLLAPOT (régióoldal) ════════ */
let aktivR=null,aktivSzuro="mind",aktivKereses="";
let elozoFokusz=null;
let kvizAllapot=null;

/* ════════ ROUTER ════════ */
function frissitAktivNav(h){
  const nFo=document.getElementById('navFooldal'),nRe=document.getElementById('navRegiok');
  if(!nFo||!nRe)return;
  const fooldalAktiv=h===''||h==='/';
  const regiokAktiv=h==='/regiok'||/^\/regio\//.test(h)||/^\/nyomtat\//.test(h);
  [[nFo,fooldalAktiv],[nRe,regiokAktiv]].forEach(([el,aktiv])=>{
    el.classList.toggle('active',aktiv);
    if(aktiv)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');
  });
}
function router(){
  closeModal();clearMap();
  const raw=location.hash.replace(/^#/,'')||'/';
  const lang=raw==='/en'||raw.startsWith('/en/')?'en':'hu';
  const h=lang==='en'?(raw.replace(/^\/en(?=\/|$)/,'')||'/'):raw;
  applyLanguage(lang);updateChrome(lang,h);
  document.title=lang==='en'?'Hungarian Tourism Atlas':'Magyar Turisztikai Atlasz';
  frissitAktivNav(h);
  if(h==='/kviz'){renderKvizValaszto()}
  else{
    const qm=h.match(/^\/kviz\/([^/]+)$/);
    const nym=h.match(/^\/nyomtat\/(.+)$/);
    const m=h.match(/^\/regio\/(.+)$/);
    if(h==='/regiok'){
      renderHome();
      requestAnimationFrame(()=>{
        const regioCim=document.getElementById('regions-title');
        const regioSzakasz=document.getElementById('regiok');
        if(!regioSzakasz)return;
        regioCim?.focus({preventScroll:true});
        regioSzakasz.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }
    else if(qm){renderKviz(qm[1])}
    else if(nym&&regioOf(nym[1])){renderNyomtat(nym[1])}
    else if(m&&regioOf(m[1])){renderRegio(m[1])}
    else{renderHome()}
  }
  localizeRenderedUI();
  const regioMatch=h.match(/^\/regio\/(.+)$/);if(regioMatch&&regioOf(regioMatch[1]))document.title=`${regioOf(regioMatch[1]).nev} | ${lang==='en'?'Hungarian Tourism Atlas':'Magyar Turisztikai Atlasz'}`;
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',router);
window.addEventListener('load',router);

/* ════════ FŐOLDAL ════════ */
const NYIL_SVG='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
const HELY_SVG='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.1 7-11.3A7 7 0 0 0 5 9.7C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.7" r="2.4"/></svg>';

/* ════════ "TUDTAD-E?" KÁRTYA ════════ */
/* Betöltéskor véletlenszerűen kiválaszt egy mondatot valamelyik régió
   termeszetfoldrajz mezőjéből vagy egy látványosság reszletes leírásából.
   Csak a kellően hosszú (nem címszerű) mondatokat veszi figyelembe. */
function mondatokraBont(szoveg){
  return szoveg.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÖŐÚÜŰ])/).map(m=>m.trim()).filter(m=>m.length>=40);
}
function veletlenTudtadEMondat(){
  const mondatok=[];
  REGIOK.forEach(r=>{
    if(r.termeszetfoldrajz&&r.termeszetfoldrajz.trim())mondatokraBont(r.termeszetfoldrajz).forEach(m=>mondatok.push(m));
  });
  LATV.forEach(l=>{
    if(l.reszletes&&l.reszletes.trim())mondatokraBont(l.reszletes).forEach(m=>mondatok.push(m));
  });
  if(!mondatok.length)return '';
  return mondatok[Math.floor(Math.random()*mondatok.length)];
}
function tudtadEDoboz(){
  const mondat=veletlenTudtadEMondat();
  if(!mondat)return '';
  return `<section class="tudtad-box" aria-label="${ui('didYouKnowLabel')}">
    <div class="tudtad-cim"><span class="tudtad-ikon" aria-hidden="true">🔎</span> ${getLang()==='en'?ui('didYouKnow'):'Tudtad-e?'}</div>
    <p class="tudtad-szoveg">${mondat}</p>
  </section>`;
}

function renderHome(){
  const total=LATV.length;
  let cards='';
  REGIOK.forEach((r,i)=>{
    const n=latvOf(r.slug).length;
    const sorszam=String(i+1).padStart(2,'0');
    const savHtml=r.sav?`<span class="regio-sav" style="background:linear-gradient(90deg,rgba(${hexRgb(r.szin)},.94),rgba(${hexRgb(r.szin)},.62))">${HELY_SVG}${r.sav}</span>`:'';
    cards+=`<button class="regio-card kesz" data-count="${n}" aria-label="${getLang()==='en'?`${ui('regionCard')} ${r.nev}, ${n} ${ui('attractions')}`:`${r.nev} ${ui('regionCard')}, ${n} látványosság`}" onclick="location.hash='#/regio/${r.slug}'">
      <div class="regio-header" style="background:linear-gradient(135deg,${r.szin},${r.szin}cc)">
        <span class="regio-header-ikon">${r.ikon}</span>
        <span class="regio-header-kep" id="rhk-${r.slug}"></span>
        <span class="regio-index" aria-hidden="true">${sorszam}</span>
        ${savHtml}
      </div>
      <div class="regio-body">
        <div class="regio-nev">${r.nev}</div>
        <div class="regio-desc">${r.leiras}</div>
        <div class="regio-meta"><span>📍 ${n} látványosság</span><span class="regio-arrow">Megnyitás ${NYIL_SVG}</span></div>
      </div></button>`;
  });
  document.getElementById('app').innerHTML=`
    <main class="portal-page">
      <section class="portal-shell" aria-labelledby="portal-title">
        <div class="portal-topbar" aria-label="Alkalmazás információ">
          <div class="portal-brand">
            <span class="portal-brand-mark" aria-hidden="true">MTA</span>
            <div>
              <strong>Magyar Turisztikai Atlasz</strong>
              <span>Digitális tananyag · 13. évfolyam</span>
            </div>
          </div>
          <span class="portal-note">Turisztikai technikus képzés</span>
        </div>

        <div class="portal-impresszum">
          <span>Interaktív oktatási portál</span>
          <span>13. évfolyam · turisztikai technikus</span>
          <span class="portal-impresszum-accent">2026 / tananyag</span>
        </div>
        <header class="portal-hero-grid" aria-labelledby="portal-title">
          <div class="portal-hero-copy">
            <h1 id="portal-title" class="portal-title-hero">Kilenc régió,<br><em>${total} nevezetesség</em><br>egy atlaszban.</h1>
          </div>
          <div class="portal-hero-side">
            <p class="portal-desc">Interaktív térképes tananyag Magyarország turisztikai régióinak, látványosságainak és nevezetességeinek feldolgozásához.</p>
            <div class="portal-hero-actions">
              <button class="portal-hero-btn-outline" type="button" onclick="document.querySelector('.portal-section-card').scrollIntoView({behavior:'smooth',block:'start'})">Belépés a régiókhoz</button>
              <button class="portal-quiz-btn" style="width:auto;margin-top:0" type="button" onclick="location.hash='#/kviz'">Kvíz indítása</button>
            </div>
          </div>
        </header>
        ${tudtadEDoboz()}
        <div class="portal-statrow" aria-label="Az atlasz számokban">
          <div class="portal-stat"><span class="portal-stat-label">01 / RÉGIÓ</span><span class="portal-stat-val">9</span><span class="portal-stat-desc">Turisztikai régió Magyarországon</span></div>
          <div class="portal-stat"><span class="portal-stat-label">02 / NEVEZETESSÉG</span><span class="portal-stat-val">${total}</span><span class="portal-stat-desc">Feldolgozott látványosság saját adatlappal</span></div>
          <div class="portal-stat"><span class="portal-stat-label">03 / KÉPFORRÁS</span><span class="portal-stat-val">5</span><span class="portal-stat-desc">Szintű Wikipédia/Commons képkereső automata</span></div>
          <div class="portal-stat"><span class="portal-stat-label">04 / TÉRKÉP</span><span class="portal-stat-val">OSM</span><span class="portal-stat-desc">OpenStreetMap-alapú interaktív térkép</span></div>
        </div>

        <div class="portal-layout">
          <div class="portal-main-column">
            <section class="portal-main-card" aria-label="Interaktív térkép">
              <div class="portal-card-head">
                <div>
                  <span class="portal-section-label">Térképes áttekintés</span>
                  <h2>Válassz régiót a térképen</h2>
                </div>
                <button class="portal-map-jump" type="button" onclick="document.getElementById('homeMap').scrollIntoView({behavior:'smooth',block:'center'})">Térkép fókuszba</button>
              </div>
              <div class="portal-map-wrap">
                <div class="map-tooltip"><div class="map-tooltip-dot"></div><span>9 régió · kattints egy jelölőre a belépéshez</span></div>
                <div id="homeMap"></div>
              </div>
            </section>

            <section class="portal-section-card" id="regiok" aria-labelledby="regions-title">
              <div class="portal-card-head portal-card-head-stacked">
                <span class="portal-section-label">Magyarország 9 turisztikai régiója</span>
                <h2 id="regions-title" tabindex="-1">Válassz régiót a felfedezéshez</h2>
                <p>Minden régió saját interaktív térképet, kereshető látványosság-katalógust és részletes adatlapokat tartalmaz.</p>
              </div>
              <div class="regio-grid">${cards}</div>
            </section>
          </div>

          <aside class="portal-side" aria-label="Tanulási segédpanel">
            <section class="portal-side-card">
              <span class="portal-section-label">Tanulási útvonal</span>
              <h2>Haladj lépésről lépésre</h2>
              <ol class="learning-steps">
                <li>Válassz régiót.</li>
                <li>Nézd meg a térképet.</li>
                <li>Olvasd el az adatlapokat.</li>
                <li>Ellenőrizd tudásod kvízzel.</li>
              </ol>
            </section>
            <section class="portal-side-card portal-practice-card">
              <span class="portal-section-label">Gyors gyakorlás</span>
              <h2>Kvízes önellenőrzés</h2>
              <p>Indíts rövid gyakorlást a régiók és látványosságok átismétléséhez.</p>
              <button class="portal-quiz-btn" type="button" onclick="location.hash='#/kviz'">Kvíz indítása</button>
            </section>
            <section class="portal-side-card">
              <span class="portal-section-label">Forrásalap</span>
              <p class="portal-source-text">Tankönyvi alapú saját megfogalmazás, térképi és képi források jelölésével. A térképi megjelenítés OpenStreetMap-alapon segíti a helyszínek azonosítását.</p>
            </section>
          </aside>
        </div>
      </section>
    </main>`;

  REGIOK.forEach(r=>regioFejlecKep(r,document.getElementById('rhk-'+r.slug)));

  if(typeof L==='undefined'){document.getElementById('homeMap').innerHTML=mapHiba();return;}
  currentMap=L.map('homeMap').setView([47.16,19.40],7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(currentMap);
  REGIOK.forEach(r=>{
    const n=latvOf(r.slug).length;
    const mk=L.marker(r.koord,{icon:makeIcon(r.ikon,r.szin)}).addTo(currentMap);
    mk.bindPopup(`<div style="font-family:'Instrument Sans',sans-serif;min-width:180px"><div style="font-weight:700;color:#1A3A5C;margin-bottom:3px">${r.ikon} ${r.nev}</div><div style="font-size:.75rem;color:#6B7280;margin-bottom:6px">${n} ${getLang()==='en'?'attractions':'látványosság'}</div><a href="${localizedPath(`/regio/${r.slug}`)}" style="display:inline-block;background:#B3271E;color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;text-decoration:none">${getLang()==='en'?'Open':'Belépés'} →</a></div>`);
    mk.on('click',()=>mk.openPopup());
  });
  setTimeout(()=>currentMap&&currentMap.invalidateSize(),300);
}

/* ════════ RÉGIÓOLDAL ════════ */
function renderRegio(slug){
  aktivR=regioOf(slug);aktivSzuro="mind";aktivKereses="";
  document.getElementById('app').innerHTML=`
    <div class="r-header"><div class="r-header-inner">
      <div class="breadcrumb"><a href="#/">Magyar Turisztikai Atlasz</a> › ${aktivR.rovid}</div>
      <h1>${aktivR.nev}</h1>
      <p class="r-sub">A régió nevezetességei · 13. évfolyamos turisztikai technikusok számára</p>
      ${kvizKerdesek(slug).length?`<button class="region-quiz-btn" type="button" onclick="location.hash='#/kviz/${slug}'">Kvíz indítása ebben a régióban</button>`:''}
    </div></div>
    ${termeszetfoldrajzDoboz(aktivR)}
    <div class="print-cta-wrap"><a class="print-cta" href="#/nyomtat/${slug}">🖨 Nyomtatható változat</a></div>
    <div class="controls">
      <div class="search-wrap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="search" id="search" aria-label="Keresés a régió látványosságai között" placeholder="Keresés helyszín neve alapján…" oninput="onSearch()"></div>
      <div class="filters" id="filters"></div>
      <span class="result-count" id="count"></span>
    </div>
    <div class="split">
      <div class="card-grid" id="grid"></div>
      <div class="map-sticky"><div class="map-box">
        <div class="map-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Interaktív térkép</div>
        <div id="regioMap"></div>
      </div></div>
    </div>`;
  buildFilters();renderCards();
  if(typeof L==='undefined'){document.getElementById('regioMap').innerHTML=mapHiba();return;}
  currentMap=L.map('regioMap').setView(aktivR.koord,aktivR.zoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(currentMap);
  renderMarkers(latvOf(slug));
  setTimeout(()=>currentMap&&currentMap.invalidateSize(),300);
}

/* Természetföldrajzi összefoglaló doboz a régió kártyái felett.
   A szöveg a régió objektum termeszetfoldrajz mezőjéből származik (adatok.js).
   Ha a mező hiányzik vagy üres, semmit nem jelenít meg (semmi sem törik). */
function termeszetfoldrajzDoboz(regio){
  const szoveg=regio&&regio.termeszetfoldrajz&&regio.termeszetfoldrajz.trim();
  if(!szoveg)return '';
  return `<div class="geo-wrap">
      <section class="geo-box" aria-label="Természetföldrajzi összefoglaló">
        <div class="geo-box-cim"><span class="geo-box-ikon" aria-hidden="true">🌍</span> Természetföldrajz</div>
        <p class="geo-box-szoveg">${szoveg}</p>
      </section>
    </div>`;
}

function buildFilters(){
  document.getElementById('filters').innerHTML=KAT_LIST.map(k=>
    `<button class="filter-btn${k===aktivSzuro?' active':''}" aria-pressed="${k===aktivSzuro?'true':'false'}" onclick="setSzuro('${k}')">${(getLang()==='en'?KAT_LABEL_EN:KAT_LABEL_HU)[k]}</button>`).join('');
}
function setSzuro(k){aktivSzuro=k;buildFilters();renderCards()}
function onSearch(){aktivKereses=document.getElementById('search').value;renderCards()}

function szurtLista(){
  return latvOf(aktivR.slug).filter(l=>{
    const okK=aktivSzuro==='mind'||l.kat.includes(aktivSzuro);
    const q=normalizaltKeresoszoveg(aktivKereses);
    const kereshetoSzoveg=[l.nev,l.tp,l.rovid,l.megye,l.kategoria,l.kat,l.reszletes,l.info].map(kereshetoMezo).map(normalizaltKeresoszoveg).join(' ');
    const okQ=!q||kereshetoSzoveg.includes(q);
    return okK&&okQ;
  });
}

function renderCards(){
  const lista=szurtLista();
  document.getElementById('count').textContent=getLang()==='en'?`${lista.length} results`:`${lista.length} találat`;
  const grid=document.getElementById('grid');
  if(!lista.length){grid.innerHTML=`<div class="empty-state"><div style="font-size:2rem">🔍</div><p>${getLang()==='en'?'No results match this search.':'Nincs találat erre a keresésre.'}</p></div>`;renderMarkers([]);return;}
  grid.innerHTML=lista.map(l=>`
    <div class="card" id="card-${l.id}" role="button" tabindex="0" aria-label="${getLang()==='en'?`${ui('attractionCard')} ${l.nev}`:`${l.nev} ${ui('attractionCard')}`}" onclick="activateCard(${l.id})" onkeydown="onCardKey(event,${l.id})">
      <div class="card-ph" id="cph-${l.id}"><span class="card-ph-ikon">${ikonOf(l)}</span></div>
      <div class="card-body">
        <div class="card-kat">${l.kat.map(tagHtml).join('')}</div>
        <h3>${l.nev}</h3>
        <div class="card-tp"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${helyStr(l)}</div>
        <p class="card-leiras">${l.rovid}</p>
      </div></div>`).join('');
  renderMarkers(lista);
  setTimeout(()=>{
    lista.forEach(l=>{kepetMutat(l,document.getElementById('cph-'+l.id),400);});
  },50);
  localizeRenderedUI();
}

let markers={};
function renderMarkers(lista){
  Object.values(markers).forEach(m=>currentMap&&currentMap.removeLayer(m));markers={};
  if(!currentMap)return;
  lista.forEach(l=>{
    const m=L.marker([l.koord.lat,l.koord.lng],{icon:makeIcon(ikonOf(l),aktivR.szin)}).addTo(currentMap);
    m.bindPopup(`<div style="font-family:'Instrument Sans',sans-serif"><div style="font-weight:700;color:#1A3A5C">${l.nev}</div><div style="font-size:.75rem;color:#6B7280">${l.tp}</div></div>`);
    m.on('click',()=>{openModal(l.id);hlCard(l.id)});
    markers[l.id]=m;
  });
  if(lista.length){currentMap.fitBounds(L.latLngBounds(lista.map(l=>[l.koord.lat,l.koord.lng])),{padding:[40,40],maxZoom:12})}
}
function activateCard(id){openModal(id);flyTo(id)}
function onCardKey(e,id){if(e.key==='Enter'||e.key===' '){e.preventDefault();activateCard(id)}}
function flyTo(id){const l=LATV.find(x=>x.id===id);if(l&&markers[id]&&currentMap){currentMap.flyTo([l.koord.lat,l.koord.lng],12,{duration:.7});setTimeout(()=>markers[id].openPopup(),750)}hlCard(id)}
function hlCard(id){document.querySelectorAll('.card').forEach(c=>c.classList.remove('hl'));const c=document.getElementById('card-'+id);if(c)c.classList.add('hl')}


/* ════════ NYOMTATÓBARÁT RÉGIÓLAP ════════ */
/* A #/nyomtat/<regio-slug> útvonal letisztult, szöveg-központú tananyaglapot
   ad egy régióról: természetföldrajz + minden látványosság teljes adatlapja.
   Szándékosan KÉP NÉLKÜLI: a Wikipédia-képek nyomtatásban lassúak és
   képenkénti licencfeltételekhez kötöttek. A tényleges nyomtatási
   megjelenést a stilusok.css @media print blokkja adja. */
function renderNyomtat(slug){
  const r=regioOf(slug);
  const lista=latvOf(slug);
  const datum=new Date().toLocaleDateString(getLang()==='en'?'en-GB':'hu-HU',{year:'numeric',month:'long',day:'numeric'});
  document.title=getLang()==='en'?`${r.nev} — printable learning sheet`:`${r.nev} — nyomtatható tananyaglap`;
  const geo=r.termeszetfoldrajz&&r.termeszetfoldrajz.trim();
  const latvHtml=lista.map((l,i)=>{
    const pi=l.info||{};
    const infoSorok=[
      pi.nyitvatartas?`<div class="print-info-sor"><strong>${getLang()==='en'?ui('openingHours'):'Nyitvatartás'}:</strong> ${pi.nyitvatartas}</div>`:'',
      pi.megkozelites?`<div class="print-info-sor"><strong>${getLang()==='en'?ui('access'):'Megközelítés'}:</strong> ${pi.megkozelites}</div>`:''
    ].filter(Boolean).join('');
    return `<article class="print-latv">
      <div class="print-latv-fej">
        <h3>${i+1}. ${l.nev}</h3>
        <div class="print-latv-meta">${helyStr(l)} · ${getLang()==='en'?'Category':'Kategória'}: ${l.kat.map(k=>(getLang()==='en'?KAT_LABEL_EN:KAT_LABEL_HU)[k]||k).join(', ')}</div>
      </div>
      <p class="print-latv-rovid">${l.rovid}</p>
      <p class="print-latv-reszletes">${l.reszletes}</p>
      ${infoSorok?`<div class="print-latv-info">${infoSorok}</div>`:''}
      ${l.forras&&l.forras.length?`<div class="print-latv-forras">${getLang()==='en'?ui('source'):'Forrás'}: ${l.forras.join(' · ')}</div>`:''}
    </article>`;
  }).join('');
  document.getElementById('app').innerHTML=`
    <main class="print-page">
      <div class="print-toolbar">
        <a class="print-vissza" href="${localizedPath(`/regio/${slug}`)}">${getLang()==='en'?'← Back to the region':'← Vissza a régióhoz'}</a>
        <button type="button" class="print-gomb" onclick="window.print()">${getLang()==='en'?'🖨 Print / save as PDF':'🖨 Nyomtatás / mentés PDF-be'}</button>
      </div>
      <header class="print-fej">
        <div class="print-felcim">${ui('printableSheet')}</div>
        <h1>${r.nev}</h1>
        <p class="print-lead">${r.leiras}</p>
        <div class="print-osszegzes">${lista.length} ${getLang()==='en'?ui('attractions'):'látványosság'} · ${ui('printSummary')}</div>
      </header>
      ${geo?`<section class="print-szakasz">
        <h2>${getLang()==='en'?'Physical geography':'Természetföldrajz'}</h2>
        <p class="print-geo">${geo}</p>
      </section>`:''}
      <section class="print-szakasz">
        <h2>${getLang()==='en'?'Attractions':'Látványosságok'}</h2>
        ${latvHtml}
      </section>
      <footer class="print-lablec">
        ${ui('printFooter')}<br>
        ${ui('nonprofitMaterial')} · ${ui('prepared')}: ${datum}
      </footer>
    </main>`;
  localizeRenderedUI();
}

/* ════════ KVÍZMODUL ════════ */
const KVIZ_KERDES_LIMIT = 5;

/* ════════ KVÍZ LEGJOBB EREDMÉNY (localStorage, régiónként) ════════ */
/* Kulcs régiónként külön, hogy a régiók eredményei ne írják felül egymást.
   Privát böngészőmódban a localStorage írása/olvasása hibát dobhat — ilyenkor
   egyszerűen nem jelenik meg/mentődik eredmény, semmi sem törik. */
const KVIZ_EREDMENY_PREFIX = 'mta-kviz-legjobb:';
function getKvizLegjobb(slug){
  try{
    const nyers = localStorage.getItem(KVIZ_EREDMENY_PREFIX + slug);
    if(!nyers)return null;
    const adat = JSON.parse(nyers);
    if(!adat || typeof adat.pont !== 'number' || typeof adat.ossz !== 'number' || adat.ossz <= 0)return null;
    return adat;
  }catch(e){
    return null;
  }
}
function frissitKvizLegjobb(slug, pont, ossz){
  try{
    const jelenlegi = getKvizLegjobb(slug);
    if(jelenlegi && jelenlegi.pont / jelenlegi.ossz >= pont / ossz)return jelenlegi;
    const uj = {pont, ossz};
    localStorage.setItem(KVIZ_EREDMENY_PREFIX + slug, JSON.stringify(uj));
    return uj;
  }catch(e){
    return {pont, ossz};
  }
}
function kvizLegjobbSor(legjobb){
  return legjobb ? `<p class="quiz-best">${ui('bestScore')} <strong>${legjobb.pont}/${legjobb.ossz}</strong></p>` : '';
}

function kever(tomb){
  const a=tomb.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function kevertKerdesek(slug){
  const eredeti=window.KVIZ_QUESTIONS[slug]||[];
  return kever(eredeti)
    .slice(0,KVIZ_KERDES_LIMIT)
    .map(q=>{
      const indexek=kever(q.answers.map((_,i)=>i));
      return {
        ...q,
        answers:indexek.map(i=>q.answers[i]),
        correctIndex:indexek.indexOf(q.correctIndex)
      };
    });
}

function renderKvizValaszto(uzenet){
  kvizAllapot=null;
  const cards=REGIOK.map(r=>{
    const kerdesSzam=kvizKerdesek(r.slug).length;
    const aktiv=kerdesSzam>0;
    return `<div class="quiz-region-card${aktiv?' active':''}">
      <div class="quiz-region-icon" style="background:linear-gradient(135deg,${r.szin},${r.szin}cc)">${r.ikon}</div>
      <div class="quiz-region-body">
        <h2>${r.nev}</h2>
        <p>${aktiv?kerdesSzam>KVIZ_KERDES_LIMIT?`Minden indításkor ${KVIZ_KERDES_LIMIT} véletlen kérdés a ${kerdesSzam} kérdéses kérdésbankból.`:`${kerdesSzam} kérdéses kvíz érhető el ehhez a régióhoz.`:'Ehhez a régióhoz még készül a kérdésbank.'}</p>
        ${aktiv?kvizLegjobbSor(getKvizLegjobb(r.slug)):''}
        <button type="button" class="quiz-start-btn" ${aktiv?`onclick="location.hash='#/kviz/${r.slug}'"`:'disabled'}>${aktiv?'Kvíz indítása':'Készül'}</button>
      </div>
    </div>`;
  }).join('');
  document.getElementById('app').innerHTML=`
    <main class="quiz-page">
      <div class="breadcrumb"><a href="#/">Magyar Turisztikai Atlasz</a> › Kvíz</div>
      <section class="quiz-card">
        ${uzenet?`<p class="quiz-feedback"><strong>${uzenet}</strong></p>`:''}
        <div class="section-eyebrow">Pilot kvízmodul</div>
        <h1>Válassz kvízrégiót</h1>
        <p class="quiz-intro">Válassz az aktív régiós kérdésbankok közül. A kvíz nem ment eredményt, nincs időmérő, és billentyűzettel is használható.</p>
      </section>
      <div class="quiz-region-grid">${cards}</div>
      <div class="quiz-actions"><button type="button" onclick="location.hash='#/'">Vissza az atlaszhoz</button></div>
    </main>`;
}

function renderKviz(slug){
  const kerdesek=kevertKerdesek(slug);
  const regio=regioOf(slug);
  if(!kerdesek.length||!regio){renderKvizValaszto('Ehhez a régióhoz még nincs elérhető kérdésbank. Válassz egy aktív kvízrégiót.');return;}
  kvizAllapot={slug,kerdesek,index:0,pont:0,valaszolt:false};
  document.getElementById('app').innerHTML=`
    <main class="quiz-page">
      <div class="breadcrumb"><a href="#/">Magyar Turisztikai Atlasz</a> › <a href="#/kviz">Kvíz</a> › ${regio.nev}</div>
      <section class="quiz-card" id="quizBox"></section>
    </main>`;
  renderKvizKerdes();
}

function renderKvizKerdes(){
  const a=kvizAllapot;if(!a)return;
  if(a.index>=a.kerdesek.length){renderKvizEredmeny();return;}
  const q=a.kerdesek[a.index];
  document.getElementById('quizBox').innerHTML=`
    <div class="quiz-progress">${a.index+1} / ${a.kerdesek.length} kérdés</div>
    <h1>${regioOf(a.slug).nev} kvíz</h1>
    <p class="quiz-question">${q.question}</p>
    <div class="quiz-answers">${q.answers.map((ans,i)=>`<button type="button" class="quiz-answer" onclick="kvizValasz(${i})">${ans}</button>`).join('')}</div>
    <div class="quiz-feedback" aria-live="polite" id="quizFeedback"></div>
    <div class="quiz-actions">
      <button type="button" onclick="location.hash='#/kviz'">Másik régió választása</button>
      <button type="button" onclick="location.hash='#/'">Vissza az atlaszhoz</button>
    </div>`;
  localizeRenderedUI();
}

function kvizValasz(index){
  const a=kvizAllapot;if(!a||a.valaszolt)return;
  const q=a.kerdesek[a.index];
  a.valaszolt=true;
  const helyes=index===q.correctIndex;
  if(helyes)a.pont++;
  document.querySelectorAll('.quiz-answer').forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.correctIndex)btn.classList.add('correct');
    if(i===index&&!helyes)btn.classList.add('wrong');
  });
  document.getElementById('quizFeedback').innerHTML=`
    <strong>${helyes?'Helyes válasz.':'Hibás válasz.'}</strong>
    ${helyes?'':`<span>A helyes válasz: ${q.answers[q.correctIndex]}.</span>`}
    <span>${q.explanation}</span>
    <button type="button" class="quiz-next" onclick="kvizKovetkezo()">Következő kérdés</button>`;
  localizeRenderedUI();
  const next=document.querySelector('.quiz-next');if(next)next.focus();
}

function kvizKovetkezo(){
  if(!kvizAllapot)return;
  kvizAllapot.index++;
  kvizAllapot.valaszolt=false;
  renderKvizKerdes();
}

function renderKvizEredmeny(){
  const a=kvizAllapot;if(!a)return;
  const legjobb=frissitKvizLegjobb(a.slug,a.pont,a.kerdesek.length);
  document.getElementById('quizBox').innerHTML=`
    <div class="section-eyebrow">Kvíz vége</div>
    <h1>${regioOf(a.slug).nev} kvíz</h1>
    <p class="quiz-score">Pontszám: <strong>${a.pont} / ${a.kerdesek.length}</strong></p>
    ${kvizLegjobbSor(legjobb)}
    <div class="quiz-actions">
      <button type="button" onclick="renderKviz('${a.slug}')">Újrakezdés</button>
      <button type="button" onclick="location.hash='#/kviz'">Másik régió választása</button>
      <button type="button" onclick="location.hash='#/'">Vissza az atlaszhoz</button>
    </div>`;
  localizeRenderedUI();
}

/* ════════ MODÁL ════════ */
function getModalFocusableElements(dialog){
  if(!dialog)return [];
  return Array.from(dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'))
    .filter(el=>!el.hasAttribute('disabled')&&el.offsetParent!==null);
}

function handleModalFocusTrap(event){
  if(event.key!=='Tab')return;
  const modal=document.getElementById('modal');
  if(!modal||!modal.classList.contains('open'))return;
  const dialog=modal.querySelector('.modal');
  const focusableElements=getModalFocusableElements(dialog);
  if(!focusableElements.length){
    event.preventDefault();
    dialog?.focus();
    return;
  }

  const firstElement=focusableElements[0];
  const lastElement=focusableElements[focusableElements.length-1];
  const activeElement=document.activeElement;

  if(event.shiftKey){
    if(activeElement===firstElement||!dialog.contains(activeElement)){
      event.preventDefault();
      lastElement.focus();
    }
    return;
  }

  if(activeElement===lastElement||!dialog.contains(activeElement)){
    event.preventDefault();
    firstElement.focus();
  }
}

function openModal(id){
  const l=LATV.find(x=>x.id===id);if(!l)return;
  const pi=l.info||{};
  const rows=[pi.nyitvatartas?`<div class="info-item"><div class="info-label">${getLang()==='en'?'Opening hours':'Nyitvatartás'}</div><div class="info-val">${pi.nyitvatartas}</div></div>`:'',
    pi.megkozelites?`<div class="info-item"><div class="info-label">${getLang()==='en'?'Getting there':'Megközelítés'}</div><div class="info-val">${pi.megkozelites}</div></div>`:''].filter(Boolean).join('');
  const reg=regioOf(l.r);
  const modalTitleId=`modalTitle-${l.id}`;
  document.getElementById('modalContent').innerHTML=`
    <div class="modal-ph" id="mph-${l.id}"><span class="modal-ph-ikon">${ikonOf(l)}</span></div>
    <div class="modal-body">
      <div class="modal-kat">${l.kat.map(tagHtml).join('')}</div>
      <h2 id="${modalTitleId}">${l.nev}</h2>
      <div class="modal-meta">
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${helyStr(l)}</span>
        <span>${reg?reg.ikon+' '+reg.rovid+' '+(getLang()==='en'?'region':'régió'):''}</span>
      </div>
      <p class="modal-leiras">${l.reszletes}</p>
      ${rows?`<div class="modal-info">${rows}</div>`:''}
      <div class="modal-forras"><strong>${getLang()==='en'?'Source:':'Forrás:'}</strong> ${(l.forras||[]).join(' · ')} · ${getLang()==='en'?'Images: Wikimedia Commons, subject to the licence terms of each image.':'Képek: Wikimedia Commons, képenkénti licencfeltételek szerint.'}</div>
    </div>`;
  const modal=document.getElementById('modal');
  const dialog=modal.querySelector('.modal');
  const closeButton=modal.querySelector('.modal-close button');
  if(dialog){
    dialog.setAttribute('role','dialog');
    dialog.setAttribute('aria-modal','true');
    dialog.setAttribute('aria-labelledby',modalTitleId);
  }
  closeButton?.setAttribute('aria-label',getLang()==='en'?ui('closeSheet'):'Adatlap bezárása');
  elozoFokusz=document.activeElement;
  modal.classList.add('open');document.body.style.overflow='hidden';
  kepetMutat(l,document.getElementById('mph-'+l.id),800);
  setTimeout(()=>{(closeButton||dialog)?.focus();},0);
}

/* ════════ KÉPBETÖLTŐ — belépési pont ════════ */
/* Ha a látványosság objektumán van kep_sajat mező (nem üres), azt használja
   közvetlenül (lokális fájl VAGY http(s) URL egyaránt elfogadott).
   Egyébként az ötszintű Wikipédia/Commons automatát hívja meg. */
function kepetMutat(l, elem, meret) {
  if(!elem)return;
  elem.dataset.placeholder = `<span class="${meret>400?'modal':'card'}-ph-ikon">${ikonOf(l)}</span>`;
  elem.dataset.alt = getLang()==='en'?`Image of ${l.nev}`:l.nev + ' képe';
  if (l.kep_sajat && l.kep_sajat.trim()) {
    _kepBetoltIndit(elem);
    const img = document.createElement('img');
    img.src = l.kep_sajat.trim();
    img.alt = elem.dataset.alt;
    img.loading = 'lazy';
    img.onload = () => _kepBetoltVege(elem);
    img.onerror = () => _kepHibaPlaceholder(elem);
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block';
    elem.querySelectorAll('img').forEach(i=>i.remove());
    elem.appendChild(img);
  } else if (l.kep) {
    _kepBetoltIndit(elem);
    betoltKep(l.kep, elem, meret);
  }
}

/* ════════ RÉGIÓKÁRTYA FEJLÉCKÉP ════════ */
/* A főoldali régiókártya fejlécébe tölt fotót ugyanazzal az ötszintű
   Wikipédia/Commons automatával (kep_sajat elsőbbséggel). A siker a
   .regio-header-kep tárolót tölti fel; a színátmenet és az emoji a fejléc
   alatt marad, így hiba esetén minden a jelenlegi állapotban látszik. */
function regioFejlecKep(r, elem){
  if(!elem||!r)return;
  const meret=500;
  _kepBetoltIndit(elem);
  const megjelenit=url=>{
    if(!url){_kepBetoltVege(elem);return;}
    const img=document.createElement('img');
    img.src=url;
    img.alt=r.nev;
    img.loading='lazy';
    img.onload=()=>_kepBetoltVege(elem);
    img.onerror=()=>{_kepBetoltVege(elem);elem.innerHTML='';};
    img.style.cssText='width:100%;height:100%;object-fit:cover;display:block';
    elem.querySelectorAll('img').forEach(i=>i.remove());
    elem.appendChild(img);
  };
  if(r.kep_sajat && r.kep_sajat.trim()){megjelenit(r.kep_sajat.trim());return;}
  betoltKep(r.kep, elem, meret, megjelenit);
}

/* ════════ WIKIPÉDIA KÉPBETÖLTŐ (pageimages) ════════ */
/* A kep mező = Wikipédia-szócikk címe (magyar). A pageimages API a szócikk
   főképét adja vissza, így nincs fájlnév-találgatás. Ha a magyar Wikin nincs
   kép, az angolra esik vissza. */
const _kepCache={};
const _SESSION_KEP_CACHE_PREFIX='magyar-turisztikai-atlasz:kep:';
const _FETCH_TIMEOUT_MS=6500;
function fetchTimeout(url,options={},timeoutMs=_FETCH_TIMEOUT_MS){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),timeoutMs);
  return fetch(url,{...options,signal:controller.signal}).finally(()=>clearTimeout(timer));
}
function getSessionKepCache(kulcs){
  try{
    return sessionStorage.getItem(_SESSION_KEP_CACHE_PREFIX+kulcs)||null;
  }catch(e){
    return null;
  }
}
function setSessionKepCache(kulcs,url){
  if(!url)return;
  try{
    sessionStorage.setItem(_SESSION_KEP_CACHE_PREFIX+kulcs,url);
  }catch(e){
    /* A sessionStorage tiltása vagy quota hiba esetén a memóriacache marad. */
  }
}
function torolSessionKepCache(kulcs){
  try{
    sessionStorage.removeItem(_SESSION_KEP_CACHE_PREFIX+kulcs);
  }catch(e){
    /* Tiltott sessionStorage esetén nincs mit törölni. */
  }
}
/* ════════ TARTÓS KÉP-URL GYORSÍTÓTÁR (localStorage) ════════ */
/* A feloldott kép-URL-ek 30 napig megőrződnek, így újralátogatáskor a képek
   API-hívás nélkül, azonnal betöltődnek. A kulcs a kep mezőből (szócikkcím)
   és a kért méretből áll, az érték {url, t} JSON. Privát böngészőmódban a
   localStorage írása hibát dobhat — ilyenkor tárolás nélkül megy tovább. */
const _LOCAL_KEP_CACHE_PREFIX='mta-kep:';
const _LOCAL_KEP_CACHE_TTL_MS=30*24*60*60*1000; /* 30 nap */
function getLocalKepCache(kulcs){
  try{
    const nyers=localStorage.getItem(_LOCAL_KEP_CACHE_PREFIX+kulcs);
    if(!nyers)return null;
    const adat=JSON.parse(nyers);
    if(!adat||typeof adat.url!=='string'||!adat.url||typeof adat.t!=='number'||Date.now()-adat.t>_LOCAL_KEP_CACHE_TTL_MS){
      torolLocalKepCache(kulcs);
      return null;
    }
    return adat.url;
  }catch(e){
    return null;
  }
}
function setLocalKepCache(kulcs,url){
  if(!url)return;
  try{
    localStorage.setItem(_LOCAL_KEP_CACHE_PREFIX+kulcs,JSON.stringify({url:url,t:Date.now()}));
  }catch(e){
    /* Privát mód vagy quota hiba: a memória- és session-cache marad. */
  }
}
function torolLocalKepCache(kulcs){
  try{
    localStorage.removeItem(_LOCAL_KEP_CACHE_PREFIX+kulcs);
  }catch(e){
    /* Tiltott localStorage esetén nincs mit törölni. */
  }
}
/* A gyorsítótárból kiszolgált URL utólagos ellenőrzése: ha a kép már nem
   tölthető be (pl. a Commons-fájlt átnevezték), a hibaKezelo érvényteleníti
   a bejegyzést és visszaesik a normál API-láncra. */
function _kepUrlProba(url,hibaKezelo){
  const proba=new Image();
  proba.onerror=hibaKezelo;
  proba.src=url;
}
/* Ötszintű képkeresés (a memória-, session- és localStorage-cache után):
   1) magyar Wiki pageimages (kijelölt főkép)
   2) angol Wiki pageimages
   3) magyar Wiki összes képe -> első valódi fotó (térkép/címer/ikon kiszűrve)
   4) angol Wiki összes képe -> első valódi fotó
   5) Wikimedia Commons közvetlen képkeresés a névre */
function betoltKep(cim,elElem,meret,megjelenit){
  if(!cim||!elElem)return;
  const alkalmaz=megjelenit||(u=>_alkalmazKep(elElem,u,meret));
  const kulcs=cim+'@'+meret;
  const kesz=u=>{
    if(u){_kepCache[kulcs]=u;setSessionKepCache(kulcs,u);setLocalKepCache(kulcs,u);alkalmaz(u);}
    else if(!megjelenit){_kepHibaPlaceholder(elElem);}
    else{_kepBetoltVege(elElem);elElem.innerHTML='';}
  };
  if(_kepCache[kulcs]){alkalmaz(_kepCache[kulcs]);return;}
  const sessionUrl=getSessionKepCache(kulcs);
  if(sessionUrl){_kepCache[kulcs]=sessionUrl;alkalmaz(sessionUrl);return;}
  const localUrl=getLocalKepCache(kulcs);
  if(localUrl){
    _kepCache[kulcs]=localUrl;
    setSessionKepCache(kulcs,localUrl);
    alkalmaz(localUrl);
    _kepUrlProba(localUrl,()=>{
      delete _kepCache[kulcs];
      torolSessionKepCache(kulcs);
      torolLocalKepCache(kulcs);
      _kepApiLanc(cim,meret,kesz);
    });
    return;
  }
  _kepApiLanc(cim,meret,kesz);
}
/* Az ötszintű API-lánc kiemelve, hogy érvénytelenített cache-találat után is
   újrahívható legyen — a szintek sorrendje és logikája változatlan. */
function _kepApiLanc(cim,meret,kesz){
  _lekerFokep('hu',cim,meret).then(u=>{
    if(u){kesz(u);return;}
    _lekerFokep('en',cim,meret).then(u2=>{
      if(u2){kesz(u2);return;}
      _lekerBarmiKep('hu',cim,meret).then(u3=>{
        if(u3){kesz(u3);return;}
        _lekerBarmiKep('en',cim,meret).then(u4=>{
          if(u4){kesz(u4);return;}
          _lekerCommons(cim,meret).then(u5=>{kesz(u5);});
        });
      });
    });
  });
}
/* 5. szint: Wikimedia Commons közvetlen képkeresés (File: névtér) */
function _lekerCommons(cim,meret){
  const url='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch='+encodeURIComponent(cim)+'&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth='+meret+'&format=json&origin=*';
  return fetchTimeout(url).then(r=>r.ok?r.json():null).then(d=>{
    const pages=d?.query?.pages;
    if(!pages)return null;
    const kepek=Object.values(pages)
      .sort((a,b)=>(a.index||0)-(b.index||0))
      .map(p=>({t:p.title||'',info:p.imageinfo&&p.imageinfo[0]}))
      .filter(p=>p.info&&/\.(jpe?g|png)$/i.test(p.t)&&!_kizart.test(p.t));
    if(!kepek.length)return null;
    return kepek[0].info.thumburl||kepek[0].info.url||null;
  }).catch(()=>null);
}
/* 1-2. szint: kijelölt főkép */
function _lekerFokep(nyelv,cim,meret){
  const url='https://'+nyelv+'.wikipedia.org/w/api.php?action=query&titles='+encodeURIComponent(cim)+'&prop=pageimages&piprop=thumbnail&pithumbsize='+meret+'&redirects=1&format=json&origin=*';
  return fetchTimeout(url).then(r=>r.ok?r.json():null).then(d=>{
    const pages=d?.query?.pages;
    if(!pages)return null;
    return Object.values(pages)[0]?.thumbnail?.source||null;
  }).catch(()=>null);
}
/* 3-4. szint: a szócikk összes képe, az első valódi fotó kiválasztva */
const _kizart=/(\.svg|flag|coat|wappen|cimer|címer|locator|location|map_|_map|térkép|terkep|icon|logo|symbol|seal|disambig|commons-logo|wiki|edit-|ambox|question_|red_pog|pog\.|crystal|nuvola|gnome-|emblem|star_|arms)/i;
function _lekerBarmiKep(nyelv,cim,meret){
  const url='https://'+nyelv+'.wikipedia.org/w/api.php?action=query&generator=images&titles='+encodeURIComponent(cim)+'&gimlimit=20&prop=imageinfo&iiprop=url&iiurlwidth='+meret+'&redirects=1&format=json&origin=*';
  return fetchTimeout(url).then(r=>r.ok?r.json():null).then(d=>{
    const pages=d?.query?.pages;
    if(!pages)return null;
    const kepek=Object.values(pages)
      .map(p=>({t:p.title||'',info:p.imageinfo&&p.imageinfo[0]}))
      .filter(p=>p.info&&/\.(jpe?g|png)$/i.test(p.t)&&!_kizart.test(p.t));
    if(!kepek.length)return null;
    return kepek[0].info.thumburl||kepek[0].info.url||null;
  }).catch(()=>null);
}
function _kepHibaPlaceholder(elem){
  if(!elem)return;
  elem.classList.remove('kep-betolt');
  elem.innerHTML=elem.dataset.placeholder||'';
  const status=document.createElement('span');
  status.className='kep-hiba';
  status.textContent=getLang()==='en'?ui('imageUnavailable'):'Kép nem elérhető';
  elem.appendChild(status);
}
function _alkalmazKep(elem,url,meret){
  if(!elem)return;
  const img=document.createElement('img');
  img.src=url;
  img.alt=elem.dataset.alt||(getLang()==='en'?ui('attractionImage'):'Látványosság képe');
  img.loading='lazy';
  img.onload=()=>_kepBetoltVege(elem);
  img.onerror=()=>_kepHibaPlaceholder(elem);
  img.style.cssText='width:100%;height:100%;object-fit:cover;display:block';
  if(meret>400){
    const cap=document.createElement('span');
    cap.className='modal-ph-caption';
    cap.textContent=getLang()==='en'?'Wikimedia Commons, subject to the licence terms of each image.':'Wikimedia Commons, képenkénti licencfeltételek szerint.';
    elem.innerHTML='';
    elem.appendChild(img);
    elem.appendChild(cap);
  } else {
    elem.innerHTML='';
    elem.appendChild(img);
  }
}
function closeModal(){
  const modal=document.getElementById('modal');
  const nyitva=modal.classList.contains('open');
  modal.classList.remove('open');document.body.style.overflow='';
  if(nyitva&&elozoFokusz&&elozoFokusz.isConnected&&typeof elozoFokusz.focus==='function'){elozoFokusz.focus()}
  elozoFokusz=null;
}
document.addEventListener('keydown',e=>{
  handleModalFocusTrap(e);
  if(e.key==='Escape')closeModal();
});

function mapHiba(){return '<div style="height:100%;min-height:300px;display:flex;align-items:center;justify-content:center;padding:2rem;text-align:center;background:#EAE5DD;color:#1A3A5C"><div style="max-width:420px"><strong>A térkép nem tölthető be.</strong><br><br>Nyisd meg a fájlt webszerveren keresztül (Netlify Drop vagy <code>python3 -m http.server</code>), ne dupla kattintással.</div></div>'}
