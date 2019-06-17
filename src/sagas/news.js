import { call, put } from 'redux-saga/effects';
import { fetchTopHeadlinesError, fetchTopHeadlinesSuccess } from '../actions/news';
import { fetchTopHeadlines } from '../api/news';

function* handleFetchTopHeadlines() {
  try {
    const headlines = yield call(fetchTopHeadlines);
    yield put(fetchTopHeadlinesSuccess(headlines));
  } catch (err) {
    yield put(fetchTopHeadlinesError(err));
  }
}

export default handleFetchTopHeadlines;