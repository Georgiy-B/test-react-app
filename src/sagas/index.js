import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_TOP_HEADLINES } from '../constants/news';
import handleFetchTopHeadlines from './news';

function* watchAll() {
  yield all([
    takeEvery(FETCH_TOP_HEADLINES, handleFetchTopHeadlines)
  ])
}

export default watchAll;