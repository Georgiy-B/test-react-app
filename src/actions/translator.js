import {
  FETCH_TRANSLATION,
  FETCH_TRANSLATION_SUCCESS,
  FETCH_TRANSLATION_ERROR
} from '../constants/translator';

export function fetchTranslation(text, fromLang, toLang) {
  return {
    type: FETCH_TRANSLATION,
    payload: {
      text,
      fromLang,
      toLang
    }
  };
}

export function fetchTranslationSuccess(translations) {
  return {
    type: FETCH_TRANSLATION_SUCCESS,
    payload: translations
  };
}

export function fetchTranslationError(error) {
  return {
    type: FETCH_TRANSLATION_ERROR,
    payload: error
  };
}