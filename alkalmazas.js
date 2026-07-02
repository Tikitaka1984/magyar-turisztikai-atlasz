/* ════════════════════════════════════════════════════════════
   MAGYAR TURISZTIKAI ATLASZ — ALKALMAZÁS-LOGIKA
   Térkép, kártyák, kereső, modális ablak és képbetöltő.
   Az adatokat az adatok.js szolgáltatja (ennek előbb kell betöltődnie).
   ════════════════════════════════════════════════════════════ */

/* ════════ SEGÉDFÜGGVÉNYEK ════════ */
const KAT_LIST = ["mind","vár","kastély","múzeum","vallási","fürdő","természet","örökség","egyéb"];
const KAT_LABEL = {mind:"Összes",vár:"Vár",kastély:"Kastély",múzeum:"Múzeum",vallási:"Vallási",fürdő:"Fürdő",természet:"Természet",örökség:"Örökség",egyéb:"Egyéb"};
const KAT_IKON = {vár:"🏰",kastély:"🏯",múzeum:"🏛️",vallási:"⛪",fürdő:"♨️",természet:"🌲",örökség:"🗿",egyéb:"📍"};
function ikonOf(l){return KAT_IKON[l.kat[0]]||"📍"}
function helyStr(l){return l.megye==='Budapest'?l.tp:l.tp+' · '+l.megye+' vármegye'}
function regioOf(slug){return REGIOK.find(r=>r.slug===slug)}
function latvOf(slug){return LATV.filter(l=>l.r===slug)}
function tagHtml(k){return `<span class="tag tag-${k}">${KAT_LABEL[k]||k}</span>`}
function normalizaltKeresoszoveg(ertek){return String(ertek||'').toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function kereshetoMezo(ertek){
  if(Array.isArray(ertek))return ertek.join(' ');
  if(ertek&&typeof ertek==='object')return Object.values(ertek).join(' ');
  return ertek||'';
}

let currentMap=null;
function clearMap(){if(currentMap){currentMap.remove();currentMap=null}}
function makeIcon(ikon,szin){return L.divIcon({html:`<div style="background:${szin};color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,.28);border:2px solid #fff">${ikon}</div>`,className:'',iconSize:[34,34],iconAnchor:[17,34],popupAnchor:[0,-36]})}

/* ════════ ÁLLAPOT (régióoldal) ════════ */
let aktivR=null,aktivSzuro="mind",aktivKereses="";
let elozoFokusz=null;
let kvizAllapot=null;

/* ════════ ROUTER ════════ */
function router(){
  closeModal();clearMap();
  const h=location.hash.replace(/^#/,'');
  if(h==='/kviz'){renderKvizValaszto()}
  else{
    const qm=h.match(/^\/kviz\/([^/]+)$/);
    const m=h.match(/^\/regio\/(.+)$/);
    if(qm){renderKviz(qm[1])}
    else if(m&&regioOf(m[1])){renderRegio(m[1])}
    else{renderHome()}
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',router);
window.addEventListener('load',router);

/* ════════ FŐOLDAL ════════ */
function renderHome(){
  const total=LATV.length;
  let cards='';
  REGIOK.forEach(r=>{
    const n=latvOf(r.slug).length;
    cards+=`<button class="regio-card kesz" data-count="${n}" onclick="location.hash='#/regio/${r.slug}'">
      <div class="regio-header" style="background:linear-gradient(135deg,${r.szin},${r.szin}cc)"><span class="regio-header-ikon">${r.ikon}</span><span class="regio-header-kep" id="rhk-${r.slug}"></span></div>
      <div class="regio-body">
        <div class="regio-nev">${r.nev}</div>
        <div class="regio-desc">${r.leiras}</div>
        <div class="regio-meta"><span>📍 ${n} látványosság</span><span class="regio-arrow">Megnyitás →</span></div>
      </div></button>`;
  });
  document.getElementById('app').innerHTML=`
    <section class="hero"><div class="hero-inner">
      <div class="hero-eyebrow">13. évfolyamos turisztikai technikusok számára</div>
      <h1>Magyar <em>Turisztikai Atlasz</em></h1>
      <p class="hero-desc">Interaktív digitális segédeszköz Magyarország turisztikai régióinak, nevezetességeinek és látványosságainak megismeréséhez – térképpel, adatlapokkal és ellenőrzött forrásokkal.</p>
      <div class="hero-stats">
        <div><div class="hero-stat-val">9</div><div class="hero-stat-label">turisztikai<br>régió</div></div>
        <div><div class="hero-stat-val">${total}</div><div class="hero-stat-label">látványosság<br>az atlaszban</div></div>
        <div><div class="hero-stat-val">2</div><div class="hero-stat-label">forrás-<br>könyv</div></div>
      </div>
      <button class="hero-quiz-btn" type="button" onclick="location.hash='#/kviz'">Kvíz indítása</button>
    </div></section>
    <div class="map-section">
      <div class="map-tooltip"><div class="map-tooltip-dot"></div><span>9 régió · kattints egy jelölőre a belépéshez</span></div>
      <div id="homeMap"></div>
    </div>
    <svg class="wave" viewBox="0 0 1400 34" preserveAspectRatio="none"><path d="M0,18 C300,4 500,32 700,18 C950,4 1150,32 1400,18 L1400,34 L0,34 Z" fill="#F7F4EF"/></svg>
    <main class="home-main">
      <div class="section-eyebrow">Magyarország 9 turisztikai régiója</div>
      <h2 class="section-title">Válassz régiót a felfedezéshez</h2>
      <p class="section-desc">Minden régió saját interaktív térképet, kereshető látványosság-katalógust és részletes adatlapokat tartalmaz.</p>
      <div class="regio-grid">${cards}</div>
      <div class="info-strip">
        <div><div class="info-strip-icon">📚</div><div class="info-strip-title">Ellenőrzött tananyag</div><div class="info-strip-text">Donka Attila: Idegenforgalmi földrajz I. és Magyarország Országismeret 2. alapján, saját megfogalmazásban.</div></div>
        <div><div class="info-strip-icon">🗺️</div><div class="info-strip-title">Interaktív térkép</div><div class="info-strip-text">Leaflet + OpenStreetMap – ingyenes, kulcs nélküli, koordinátás jelölőkkel.</div></div>
        <div><div class="info-strip-icon">🎓</div><div class="info-strip-title">13. évfolyam számára</div><div class="info-strip-text">A turisztikai technikus képzés digitális kiegészítője, tankönyvként és órai segédeszközként.</div></div>
      </div>
    </main>
    <footer><strong>Magyar Turisztikai Atlasz</strong> · 13. évfolyamos turisztikai technikusok számára<br>
    Tartalom: Donka Attila: Idegenforgalmi földrajz I. · Magyarország Országismeret 2. (tényadatok, saját megfogalmazás)<br>
    Térkép: © OpenStreetMap közreműködők · Képek: Wikimedia Commons (CC BY-SA)</footer>`;

  REGIOK.forEach(r=>regioFejlecKep(r,document.getElementById('rhk-'+r.slug)));

  if(typeof L==='undefined'){document.getElementById('homeMap').innerHTML=mapHiba();return;}
  currentMap=L.map('homeMap').setView([47.16,19.40],7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(currentMap);
  REGIOK.forEach(r=>{
    const n=latvOf(r.slug).length;
    const mk=L.marker(r.koord,{icon:makeIcon(r.ikon,r.szin)}).addTo(currentMap);
    mk.bindPopup(`<div style="font-family:Inter,sans-serif;min-width:180px"><div style="font-weight:700;color:#1A3A5C;margin-bottom:3px">${r.ikon} ${r.nev}</div><div style="font-size:.75rem;color:#6B7280;margin-bottom:6px">${n} látványosság</div><div style="display:inline-block;background:#C4782A;color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;cursor:pointer" onclick="location.hash='#/regio/${r.slug}'">Belépés →</div></div>`);
    mk.on('click',()=>mk.openPopup());
  });
  setTimeout(()=>currentMap&&currentMap.invalidateSize(),300);
}

/* ════════ RÉGIÓOLDAL ════════ */
function renderRegio(slug){
  aktivR=regioOf(slug);aktivSzuro="mind";aktivKereses="";
  document.getElementById('app').innerHTML=`
    <div class="r-header"><div class="r-header-inner">
      <div class="breadcrumb"><a onclick="location.hash='#/'">Magyar Turisztikai Atlasz</a> › ${aktivR.rovid}</div>
      <h1>${aktivR.nev.replace(aktivR.rovid,'')||aktivR.nev}<em></em></h1>
      <p class="r-sub">A régió nevezetességei · 13. évfolyamos turisztikai technikusok számára</p>
      ${kvizKerdesek(slug).length?`<button class="region-quiz-btn" type="button" onclick="location.hash='#/kviz/${slug}'">Kvíz indítása ebben a régióban</button>`:''}
    </div></div>
    ${termeszetfoldrajzDoboz(aktivR)}
    <div class="controls">
      <div class="search-wrap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="search" id="search" placeholder="Keresés helyszín neve alapján…" oninput="onSearch()"></div>
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
    `<button class="filter-btn${k===aktivSzuro?' active':''}" aria-pressed="${k===aktivSzuro?'true':'false'}" onclick="setSzuro('${k}')">${KAT_LABEL[k]}</button>`).join('');
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
  document.getElementById('count').textContent=`${lista.length} találat`;
  const grid=document.getElementById('grid');
  if(!lista.length){grid.innerHTML=`<div class="empty-state"><div style="font-size:2rem">🔍</div><p>Nincs találat erre a keresésre.</p></div>`;renderMarkers([]);return;}
  grid.innerHTML=lista.map(l=>`
    <div class="card" id="card-${l.id}" role="button" tabindex="0" onclick="activateCard(${l.id})" onkeydown="onCardKey(event,${l.id})">
      <div class="card-ph" id="cph-${l.id}">${l.kep?`<span class="card-ph-ikon">${ikonOf(l)}</span>`:`<span class="card-ph-ikon">${ikonOf(l)}</span>`}</div>
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
}

let markers={};
function renderMarkers(lista){
  Object.values(markers).forEach(m=>currentMap&&currentMap.removeLayer(m));markers={};
  if(!currentMap)return;
  lista.forEach(l=>{
    const m=L.marker([l.koord.lat,l.koord.lng],{icon:makeIcon(ikonOf(l),aktivR.szin)}).addTo(currentMap);
    m.bindPopup(`<div style="font-family:Inter,sans-serif"><div style="font-weight:700;color:#1A3A5C">${l.nev}</div><div style="font-size:.75rem;color:#6B7280">${l.tp}</div></div>`);
    m.on('click',()=>{openModal(l.id);hlCard(l.id)});
    markers[l.id]=m;
  });
  if(lista.length){currentMap.fitBounds(L.latLngBounds(lista.map(l=>[l.koord.lat,l.koord.lng])),{padding:[40,40],maxZoom:12})}
}
function activateCard(id){openModal(id);flyTo(id)}
function onCardKey(e,id){if(e.key==='Enter'||e.key===' '){e.preventDefault();activateCard(id)}}
function flyTo(id){const l=LATV.find(x=>x.id===id);if(l&&markers[id]&&currentMap){currentMap.flyTo([l.koord.lat,l.koord.lng],12,{duration:.7});setTimeout(()=>markers[id].openPopup(),750)}hlCard(id)}
function hlCard(id){document.querySelectorAll('.card').forEach(c=>c.classList.remove('hl'));const c=document.getElementById('card-'+id);if(c)c.classList.add('hl')}


/* ════════ KVÍZMODUL ════════ */
function renderKvizValaszto(uzenet){
  kvizAllapot=null;
  const cards=REGIOK.map(r=>{
    const kerdesSzam=kvizKerdesek(r.slug).length;
    const aktiv=kerdesSzam>0;
    return `<div class="quiz-region-card${aktiv?' active':''}">
      <div class="quiz-region-icon" style="background:linear-gradient(135deg,${r.szin},${r.szin}cc)">${r.ikon}</div>
      <div class="quiz-region-body">
        <h2>${r.nev}</h2>
        <p>${aktiv?`${kerdesSzam} kérdéses kvíz érhető el ehhez a régióhoz.`:'Ehhez a régióhoz még készül a kérdésbank.'}</p>
        <button type="button" class="quiz-start-btn" ${aktiv?`onclick="location.hash='#/kviz/${r.slug}'"`:'disabled'}>${aktiv?'Kvíz indítása':'Készül'}</button>
      </div>
    </div>`;
  }).join('');
  document.getElementById('app').innerHTML=`
    <main class="quiz-page">
      <div class="breadcrumb"><a onclick="location.hash='#/'">Magyar Turisztikai Atlasz</a> › Kvíz</div>
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
  const kerdesek=kvizKerdesek(slug);
  const regio=regioOf(slug);
  if(!kerdesek.length||!regio){renderKvizValaszto('Ehhez a régióhoz még nincs elérhető kérdésbank. Válassz egy aktív kvízrégiót.');return;}
  kvizAllapot={slug,kerdesek,index:0,pont:0,valaszolt:false};
  document.getElementById('app').innerHTML=`
    <main class="quiz-page">
      <div class="breadcrumb"><a onclick="location.hash='#/'">Magyar Turisztikai Atlasz</a> › <a onclick="location.hash='#/kviz'">Kvíz</a> › ${regio.nev}</div>
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
  document.getElementById('quizBox').innerHTML=`
    <div class="section-eyebrow">Kvíz vége</div>
    <h1>${regioOf(a.slug).nev} kvíz</h1>
    <p class="quiz-score">Pontszám: <strong>${a.pont} / ${a.kerdesek.length}</strong></p>
    <div class="quiz-actions">
      <button type="button" onclick="renderKviz('${a.slug}')">Újrakezdés</button>
      <button type="button" onclick="location.hash='#/kviz'">Másik régió választása</button>
      <button type="button" onclick="location.hash='#/'">Vissza az atlaszhoz</button>
    </div>`;
}

/* ════════ MODÁL ════════ */
function openModal(id){
  const l=LATV.find(x=>x.id===id);if(!l)return;
  const pi=l.info||{};
  const rows=[pi.nyitvatartas?`<div class="info-item"><div class="info-label">Nyitvatartás</div><div class="info-val">${pi.nyitvatartas}</div></div>`:'',
    pi.megkozelites?`<div class="info-item"><div class="info-label">Megközelítés</div><div class="info-val">${pi.megkozelites}</div></div>`:''].filter(Boolean).join('');
  const reg=regioOf(l.r);
  document.getElementById('modalContent').innerHTML=`
    <div class="modal-ph" id="mph-${l.id}"><span class="modal-ph-ikon">${ikonOf(l)}</span></div>
    <div class="modal-body">
      <div class="modal-kat">${l.kat.map(tagHtml).join('')}</div>
      <h2 id="modalTitle">${l.nev}</h2>
      <div class="modal-meta">
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${helyStr(l)}</span>
        <span>${reg?reg.ikon+' '+reg.rovid+' régió':''}</span>
      </div>
      <p class="modal-leiras">${l.reszletes}</p>
      ${rows?`<div class="modal-info">${rows}</div>`:''}
      <div class="modal-forras"><strong>Forrás:</strong> ${(l.forras||[]).join(' · ')} · Képek: Wikimedia Commons (CC BY-SA)</div>
    </div>`;
  const modal=document.getElementById('modal');
  const dialog=modal.querySelector('.modal');
  const closeButton=modal.querySelector('.modal-close button');
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
  elem.dataset.alt = l.nev + ' képe';
  if (l.kep_sajat && l.kep_sajat.trim()) {
    const img = document.createElement('img');
    img.src = l.kep_sajat.trim();
    img.alt = elem.dataset.alt;
    img.loading = 'lazy';
    img.onerror = () => _kepHibaPlaceholder(elem);
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block';
    elem.innerHTML = '';
    elem.appendChild(img);
  } else if (l.kep) {
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
  const megjelenit=url=>{
    if(!url)return;
    const img=document.createElement('img');
    img.src=url;
    img.alt=r.nev;
    img.loading='lazy';
    img.onerror=()=>{elem.innerHTML='';};
    img.style.cssText='width:100%;height:100%;object-fit:cover;display:block';
    elem.innerHTML='';
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
const _FETCH_TIMEOUT_MS=6500;
function fetchTimeout(url,options={},timeoutMs=_FETCH_TIMEOUT_MS){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),timeoutMs);
  return fetch(url,{...options,signal:controller.signal}).finally(()=>clearTimeout(timer));
}
/* Ötszintű képkeresés:
   1) magyar Wiki pageimages (kijelölt főkép)
   2) angol Wiki pageimages
   3) magyar Wiki összes képe -> első valódi fotó (térkép/címer/ikon kiszűrve)
   4) angol Wiki összes képe -> első valódi fotó
   5) Wikimedia Commons közvetlen képkeresés a névre */
function betoltKep(cim,elElem,meret,megjelenit){
  if(!cim||!elElem)return;
  const alkalmaz=megjelenit||(u=>_alkalmazKep(elElem,u,meret));
  const kulcs=cim+'@'+meret;
  if(_kepCache[kulcs]){alkalmaz(_kepCache[kulcs]);return;}
  const kesz=u=>{if(u){_kepCache[kulcs]=u;alkalmaz(u);}};
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
  elem.innerHTML=elem.dataset.placeholder||'';
  const status=document.createElement('span');
  status.className='kep-hiba';
  status.textContent='Kép nem elérhető';
  elem.appendChild(status);
}
function _alkalmazKep(elem,url,meret){
  if(!elem)return;
  const img=document.createElement('img');
  img.src=url;
  img.alt=elem.dataset.alt||'Látványosság képe';
  img.loading='lazy';
  img.onerror=()=>_kepHibaPlaceholder(elem);
  img.style.cssText='width:100%;height:100%;object-fit:cover;display:block';
  if(meret>400){
    const cap=document.createElement('span');
    cap.className='modal-ph-caption';
    cap.textContent='© Wikimedia Commons (CC BY-SA)';
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
  if(nyitva&&elozoFokusz&&typeof elozoFokusz.focus==='function'){elozoFokusz.focus()}
  elozoFokusz=null;
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

function mapHiba(){return '<div style="height:100%;min-height:300px;display:flex;align-items:center;justify-content:center;padding:2rem;text-align:center;background:#EAE5DD;color:#1A3A5C"><div style="max-width:420px"><strong>A térkép nem tölthető be.</strong><br><br>Nyisd meg a fájlt webszerveren keresztül (Netlify Drop vagy <code>python3 -m http.server</code>), ne dupla kattintással.</div></div>'}
