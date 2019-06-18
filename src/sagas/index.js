import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_TOP_HEADLINES } from '../constants/news';
import { FETCH_DAILY_FORECAST } from '../constants/weather';
import handleFetchTopHeadlines from './news';
import handleFetchDailyForecast from './weather';

function* watchAll() {
  yield all([
    takeEvery(FETCH_TOP_HEADLINES, handleFetchTopHeadlines),
    takeEvery(FETCH_DAILY_FORECAST, handleFetchDailyForecast)
  ])
}

export default watchAll;