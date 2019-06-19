import { call, put } from 'redux-saga/effects';
import { fetchTranslationSuccess, fetchTranslationError } from '../actions/translator';
import { fetchTranslation } from '../api/translator';

function* handleFetchTranslation(action) {
  try {
    const translations = yield call(fetchTranslation, action.payload);
    yield put(fetchTranslationSuccess(translations));
  } catch(error) {
    yield put(fetchTranslationError(error));
  }
}

export default handleFetchTranslation;