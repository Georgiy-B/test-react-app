import { Map, List } from 'immutable';

const SUPPORTED_LANGUAGES = {
  'English': 'en',
  'Russian': 'ru',
  'Belarusian': 'be'
};

const CODES = {
  'en': 'en-us',
  'ru': 'ru-ru'
};

const languagesMap = Map(SUPPORTED_LANGUAGES);
const languagesList = getLanguageListFromMap();

function getLanguageListFromMap() {
  let list = [];

  for (let [language, code] of languagesMap.entries()) {
    list.push(Map({ language, code }));
  }

  return List(list);
}

export function getSupportedLanguages() {
  return languagesList;
}

export function getCodeByLanguage(lang) {
  lang = lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
  return languagesMap.get(lang);
}

export function getLongCodeByShortCode(code) {
  return CODES[code];
}