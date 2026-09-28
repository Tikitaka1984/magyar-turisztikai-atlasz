#!/usr/bin/env node
/* Dependency-free bilingual routing/data smoke checks for the static application. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const sandbox = {
  console,
  location: { hash: '#/' },
  document: { addEventListener() {} },
  setTimeout() {},
  clearTimeout() {},
};
sandbox.window = sandbox;
sandbox.window.addEventListener = () => {};
vm.createContext(sandbox);

function run(file, suffix = '') {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8') + suffix, sandbox, { filename: file });
}

run('adatok.js', '\nglobalThis.__REGIOK = REGIOK; globalThis.__LATV = LATV;');
run('kviz.js', '\nglobalThis.__KVIZ = KVIZ_QUESTIONS;');
run('forditas-en.js');
run('alkalmazas.js', `
  globalThis.__getLang = getLang;
  globalThis.__localizedPath = localizedPath;
  globalThis.__applyLanguage = applyLanguage;
  globalThis.__helyStr = helyStr;
  globalThis.__search = (slug, query) => {
    aktivR = regioOf(slug); aktivSzuro = 'mind'; aktivKereses = query;
    return szurtLista().map(item => item.id);
  };
`);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const englishRoutes = [
  '#/en/', '#/en/regiok', '#/en/regio/budapest', '#/en/regio/eszak-magyarorszag',
  '#/en/regio/eszak-alfold', '#/en/regio/tisza-to', '#/en/regio/del-alfold',
  '#/en/regio/kozep-dunantul', '#/en/regio/balaton', '#/en/regio/nyugat-dunantul',
  '#/en/regio/del-dunantul', '#/en/kviz', '#/en/kviz/balaton',
  '#/en/nyomtat/balaton', '#/en/nyomtat/budapest',
];
const hungarianRoutes = ['#/', '#/regiok', '#/regio/balaton', '#/kviz', '#/kviz/balaton', '#/nyomtat/balaton'];
englishRoutes.forEach(route => {
  sandbox.location.hash = route;
  assert(sandbox.__getLang() === 'en', `English route not recognised: ${route}`);
});
hungarianRoutes.forEach(route => {
  sandbox.location.hash = route;
  assert(sandbox.__getLang() === 'hu', `Hungarian route not recognised: ${route}`);
});

const switchCases = [
  ['/regio/balaton', '#/regio/balaton', '#/en/regio/balaton'],
  ['/kviz/balaton', '#/kviz/balaton', '#/en/kviz/balaton'],
  ['/nyomtat/balaton', '#/nyomtat/balaton', '#/en/nyomtat/balaton'],
];
switchCases.forEach(([pathValue, hu, en]) => {
  sandbox.location.hash = hu;
  assert(sandbox.__localizedPath(pathValue) === hu, `HU path changed for ${pathValue}`);
  sandbox.location.hash = en;
  assert(sandbox.__localizedPath(pathValue) === en, `EN path changed for ${pathValue}`);
});

sandbox.location.hash = '#/en/';
sandbox.__applyLanguage('en');
const checkedAttractions = [];
sandbox.__REGIOK.forEach(region => {
  const attractions = sandbox.__LATV.filter(item => item.r === region.slug).slice(0, 2);
  assert(attractions.length === 2, `${region.slug}: fewer than two attractions available for smoke QA`);
  attractions.forEach(item => {
    const translation = sandbox.EN_TRANSLATIONS.attractions[item.id];
    assert(item.nev === translation.nev, `${item.id}: English name was not applied`);
    assert(item.rovid === translation.rovid, `${item.id}: English summary was not applied`);
    assert(item.reszletes === translation.reszletes, `${item.id}: English detailed text was not applied`);
    Object.keys(translation.info || {}).forEach(field => assert(item.info[field] === translation.info[field], `${item.id}: info.${field} was not applied`));
    checkedAttractions.push(item.id);
  });
});
assert(checkedAttractions.length === 18, 'The attraction smoke sample must contain 18 entries');

Object.entries(sandbox.__KVIZ).forEach(([slug, questions]) => {
  assert(questions.length > 0, `${slug}: expected an active question bank`);
  questions.forEach(question => {
    const translation = sandbox.EN_QUIZ[question.id];
    assert(question.answers.length === translation.answers.length, `${question.id}: answer count changed`);
    assert(question.question === translation.question, `${question.id}: English question was not applied`);
    question.answers.forEach((answer, index) => assert(answer === translation.answers[index], `${question.id}: answer ${index} was reordered or not applied`));
    assert(Number.isInteger(question.correctIndex) && question.correctIndex >= 0 && question.correctIndex < question.answers.length, `${question.id}: invalid canonical correctIndex`);
    assert(question.explanation === translation.explanation, `${question.id}: explanation was not applied`);
  });
});

assert(sandbox.__helyStr({ tp: 'Eger', megye: 'Heves' }) === 'Eger · Heves County', 'English county formatting failed');
assert(sandbox.__helyStr({ tp: 'Budapest', megye: 'Budapest' }) === 'Budapest', 'Budapest must not receive a County suffix');
assert(sandbox.__search('budapest', 'Parliament').includes(2), 'English attraction-name search failed');
assert(sandbox.__search('budapest', 'Gothic Revival').includes(2), 'English detailed-text search failed');

sandbox.__applyLanguage('hu');
assert(sandbox.__LATV.find(item => item.id === 2).nev === 'Országház (Parlament)', 'Hungarian attraction text was not restored');
assert(sandbox.__KVIZ.budapest[0].question.startsWith('Az atlasz szerint'), 'Hungarian quiz text was not restored');

console.log(`Bilingual smoke QA passed: ${englishRoutes.length} EN routes, ${hungarianRoutes.length} HU routes, ${checkedAttractions.length} attraction sheets across 9 regions, and ${Object.values(sandbox.__KVIZ).flat().length} quiz questions.`);
