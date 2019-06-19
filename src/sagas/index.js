import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_TOP_HEADLINES } from '../constants/news';
import { FETCH_DAILY_FORECAST } from '../constants/weather';
import { FETCH_TRANSLATION } from '../constants/translator';
import handleFetchTopHeadlines from './news';
import handleFetchDailyForecast from './weather';
import handleFetchTranslation from './translator';

function* watchAll() {
  yield all([
    takeEvery(FETCH_TOP_HEADLINES, handleFetchTopHeadlines),
    takeEvery(FETCH_DAILY_FORECAST, handleFetchDailyForecast),
    takeEvery(FETCH_TRANSLATION, handleFetchTranslation)
  ])
}

export default watchAll;