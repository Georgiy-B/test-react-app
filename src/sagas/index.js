import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_TOP_HEADLINES } from '../constants/news';
import { FETCH_DAILY_FORECAST } from '../constants/weather';
import { FETCH_TRANSLATION } from '../constants/translator';
import { FETCH_URBAN_DEFINITIONS } from '../constants/urban';
import handleFetchTopHeadlines from './news';
import handleFetchDailyForecast from './weather';
import handleFetchTranslation from './translator';
import handleFetchUrbanDefinitions from './urban';

function* watchAll() {
  yield all([
    takeEvery(FETCH_TOP_HEADLINES, handleFetchTopHeadlines),
    takeEvery(FETCH_DAILY_FORECAST, handleFetchDailyForecast),
    takeEvery(FETCH_TRANSLATION, handleFetchTranslation),
    takeEvery(FETCH_URBAN_DEFINITIONS, handleFetchUrbanDefinitions)
  ])
}

export default watchAll;