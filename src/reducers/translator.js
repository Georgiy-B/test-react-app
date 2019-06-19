import {
  FETCH_TRANSLATION,
  FETCH_TRANSLATION_SUCCESS,
  FETCH_TRANSLATION_ERROR
} from '../constants/translator';

const INITIAL_STATE = {
  translations: [],
  fetching: false,
  error: null
};

function translatorReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSLATION:
      return Object.assign({}, state, { fetching: true });
    case FETCH_TRANSLATION_SUCCESS:
      return Object.assign({}, INITIAL_STATE, { translations: action.payload });
    case FETCH_TRANSLATION_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    default:
      return state;
  }
}

export default translatorReducer;