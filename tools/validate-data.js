#!/usr/bin/env node
/*
 * Magyar Turisztikai Atlasz adatvalidátor
 * Függőségmentes Node.js script az adatok.js és kviz.js szerkezeti ellenőrzésére.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const ADATOK_PATH = path.join(ROOT, 'adatok.js');
const KVIZ_PATH = path.join(ROOT, 'kviz.js');

const LAT_MIN = 45.5;
const LAT_MAX = 49.0;
const LNG_MIN = 16.0;
const LNG_MAX = 23.0;
const ISMERT_KATEGORIAK = new Set([
  'vár',
  'kastély',
  'múzeum',
  'vallási',
  'fürdő',
  'természet',
  'örökség',
  'egyéb',
]);

const hibak = {
  'Betöltési hibák': [],
  'Régiók': [],
  'Látványosságok': [],
  'Kvízkérdések': [],
};

function addError(group, message) {
  hibak[group].push(message);
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function inHungaryRange(lat, lng) {
  return lat >= LAT_MIN && lat <= LAT_MAX && lng >= LNG_MIN && lng <= LNG_MAX;
}

function formatKey(value, fallback) {
  if (value === undefined || value === null || value === '') {
    return fallback;
  }
  return String(value);
}

function loadData() {
  const sandbox = { console };
  sandbox.window = sandbox;
  vm.createContext(sandbox);

  try {
    const adatokSource = fs.readFileSync(ADATOK_PATH, 'utf8');
    vm.runInContext(
      `${adatokSource}\n\nglobalThis.__REGIOK__ = REGIOK;\nglobalThis.__LATV__ = LATV;`,
      sandbox,
      { filename: 'adatok.js' }
    );
  } catch (error) {
    addError('Betöltési hibák', `Nem sikerült betölteni az adatok.js fájlt: ${error.message}`);
  }

  try {
    const kvizSource = fs.readFileSync(KVIZ_PATH, 'utf8');
    vm.runInContext(
      `${kvizSource}\n\nglobalThis.__KVIZ_QUESTIONS__ = KVIZ_QUESTIONS;`,
      sandbox,
      { filename: 'kviz.js' }
    );
  } catch (error) {
    addError('Betöltési hibák', `Nem sikerült betölteni a kviz.js fájlt: ${error.message}`);
  }

  return {
    REGIOK: sandbox.__REGIOK__,
    LATV: sandbox.__LATV__,
    KVIZ_QUESTIONS: sandbox.__KVIZ_QUESTIONS__,
  };
}

function validateRegiok(REGIOK) {
  const slugs = new Set();
  const required = ['slug', 'nev', 'rovid', 'koord', 'zoom', 'ikon', 'szin'];

  if (!Array.isArray(REGIOK)) {
    addError('Régiók', 'A REGIOK nem létezik vagy nem tömb.');
    return slugs;
  }

  REGIOK.forEach((regio, index) => {
    const key = formatKey(regio && regio.slug, `REGIOK[${index}]`);

    if (!isObject(regio)) {
      addError('Régiók', `${key}: a régió nem objektum.`);
      return;
    }

    required.forEach((field) => {
      if (!(field in regio)) {
        addError('Régiók', `${key}: hiányzó mező: ${field}.`);
      }
    });

    if (!isNonEmptyString(regio.slug)) {
      addError('Régiók', `${key}: a slug hiányzik vagy üres.`);
    } else if (slugs.has(regio.slug)) {
      addError('Régiók', `${key}: duplikált régióslug.`);
    } else {
      slugs.add(regio.slug);
    }

    if (!Array.isArray(regio.koord) || regio.koord.length !== 2 || !isFiniteNumber(regio.koord[0]) || !isFiniteNumber(regio.koord[1])) {
      addError('Régiók', `${key}: a koord mezőnek kételemű számtömbnek kell lennie: [lat, lng].`);
    } else if (!inHungaryRange(regio.koord[0], regio.koord[1])) {
      addError('Régiók', `${key}: a koordináta kívül esik a várt magyarországi tartományon (${regio.koord[0]}, ${regio.koord[1]}).`);
    }
  });

  return slugs;
}

function validateLatv(LATV, regioSlugs) {
  const latvIds = new Set();
  const required = ['id', 'r', 'nev', 'megye', 'tp', 'kat', 'koord', 'rovid', 'reszletes', 'forras'];

  if (!Array.isArray(LATV)) {
    addError('Látványosságok', 'A LATV nem létezik vagy nem tömb.');
    return latvIds;
  }

  LATV.forEach((latv, index) => {
    const key = formatKey(latv && latv.id, `LATV[${index}]`);

    if (!isObject(latv)) {
      addError('Látványosságok', `${key}: a látványosság nem objektum.`);
      return;
    }

    required.forEach((field) => {
      if (!(field in latv)) {
        addError('Látványosságok', `${key}: hiányzó mező: ${field}.`);
      }
    });

    if (latv.id === undefined || latv.id === null || latv.id === '') {
      addError('Látványosságok', `${key}: hiányzó vagy üres id.`);
    } else if (latvIds.has(latv.id)) {
      addError('Látványosságok', `${key}: duplikált látványosság id.`);
    } else {
      latvIds.add(latv.id);
    }

    if (!regioSlugs.has(latv.r)) {
      addError('Látványosságok', `${key}: ismeretlen régióslug az r mezőben: ${formatKey(latv.r, 'üres')}.`);
    }

    if (!Array.isArray(latv.kat) || latv.kat.length === 0) {
      addError('Látványosságok', `${key}: a kat mezőnek nem üres tömbnek kell lennie.`);
    } else {
      latv.kat.forEach((kat) => {
        if (!ISMERT_KATEGORIAK.has(kat)) {
          addError('Látványosságok', `${key}: ismeretlen kategória: ${formatKey(kat, 'üres')}.`);
        }
      });
    }

    if (!isObject(latv.koord) || !isFiniteNumber(latv.koord.lat) || !isFiniteNumber(latv.koord.lng)) {
      addError('Látványosságok', `${key}: a koord mezőnek {lat, lng} számértékeket tartalmazó objektumnak kell lennie.`);
    } else if (!inHungaryRange(latv.koord.lat, latv.koord.lng)) {
      addError('Látványosságok', `${key}: a koordináta kívül esik a várt magyarországi tartományon (${latv.koord.lat}, ${latv.koord.lng}).`);
    }

    if (!isNonEmptyString(latv.rovid)) {
      addError('Látványosságok', `${key}: a rovid mező hiányzik vagy üres.`);
    }

    if (!isNonEmptyString(latv.reszletes)) {
      addError('Látványosságok', `${key}: a reszletes mező hiányzik vagy üres.`);
    }

    if (!Array.isArray(latv.forras) || latv.forras.length === 0) {
      addError('Látványosságok', `${key}: a forras mezőnek nem üres tömbnek kell lennie.`);
    }
  });

  return latvIds;
}

function validateKviz(KVIZ_QUESTIONS, regioSlugs, latvIds) {
  const questionIds = new Set();
  const required = ['id', 'question', 'answers', 'correctIndex', 'explanation', 'regionSlug', 'latvId', 'latvName'];

  if (!isObject(KVIZ_QUESTIONS)) {
    addError('Kvízkérdések', 'A KVIZ_QUESTIONS nem létezik vagy nem objektum.');
    return;
  }

  Object.entries(KVIZ_QUESTIONS).forEach(([slug, questions]) => {
    if (!regioSlugs.has(slug)) {
      addError('Kvízkérdések', `${slug}: a KVIZ_QUESTIONS kulcs nem létező régióslug.`);
    }

    if (!Array.isArray(questions)) {
      addError('Kvízkérdések', `${slug}: a régiós kérdéslista nem tömb.`);
      return;
    }

    questions.forEach((question, index) => {
      const key = formatKey(question && question.id, `${slug}[${index}]`);

      if (!isObject(question)) {
        addError('Kvízkérdések', `${key}: a kérdés nem objektum.`);
        return;
      }

      required.forEach((field) => {
        if (!(field in question)) {
          addError('Kvízkérdések', `${key}: hiányzó mező: ${field}.`);
        }
      });

      if (!isNonEmptyString(question.id)) {
        addError('Kvízkérdések', `${key}: hiányzó vagy üres kérdés id.`);
      } else if (questionIds.has(question.id)) {
        addError('Kvízkérdések', `${key}: duplikált kvízkérdés id.`);
      } else {
        questionIds.add(question.id);
      }

      if (!Array.isArray(question.answers) || question.answers.length < 2) {
        addError('Kvízkérdések', `${key}: az answers mezőnek legalább 2 elemből álló tömbnek kell lennie.`);
      }

      if (!Number.isInteger(question.correctIndex)) {
        addError('Kvízkérdések', `${key}: a correctIndex mezőnek egész számnak kell lennie.`);
      } else if (Array.isArray(question.answers) && (question.correctIndex < 0 || question.correctIndex >= question.answers.length)) {
        addError('Kvízkérdések', `${key}: a correctIndex nem érvényes index az answers tömbben.`);
      }

      if (question.regionSlug !== slug) {
        addError('Kvízkérdések', `${key}: a regionSlug (${formatKey(question.regionSlug, 'üres')}) nem egyezik a régiós kulccsal (${slug}).`);
      }

      if (!regioSlugs.has(question.regionSlug)) {
        addError('Kvízkérdések', `${key}: ismeretlen regionSlug: ${formatKey(question.regionSlug, 'üres')}.`);
      }

      if (!latvIds.has(question.latvId)) {
        addError('Kvízkérdések', `${key}: a latvId nem létező LATV id-ra mutat: ${formatKey(question.latvId, 'üres')}.`);
      }

      if ('latvName' in question && !isNonEmptyString(question.latvName)) {
        addError('Kvízkérdések', `${key}: a latvName szerepel, de üres.`);
      }
    });
  });
}

function printResult() {
  const groupsWithErrors = Object.entries(hibak).filter(([, items]) => items.length > 0);

  if (groupsWithErrors.length === 0) {
    console.log('Adatvalidáció sikeres. Nem találtam hibát.');
    return 0;
  }

  console.error('Adatvalidáció sikertelen. Talált hibák:');
  groupsWithErrors.forEach(([group, items]) => {
    console.error(`\n${group}:`);
    items.forEach((item) => console.error(`- ${item}`));
  });
  return 1;
}

const { REGIOK, LATV, KVIZ_QUESTIONS } = loadData();
const regioSlugs = validateRegiok(REGIOK);
const latvIds = validateLatv(LATV, regioSlugs);
validateKviz(KVIZ_QUESTIONS, regioSlugs, latvIds);

process.exitCode = printResult();
