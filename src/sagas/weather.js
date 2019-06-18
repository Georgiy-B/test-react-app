import { call, put } from 'redux-saga/effects';
import { fetchDailyForecastSuccess, fetchDailyForecastError } from '../actions/weather';
import { fetchDailyForecast } from '../api/weather';

function* handleFetchDailyForecast(action) {
  try {
    const res = yield call(fetchDailyForecast, action.payload);
    yield put(fetchDailyForecastSuccess(res));
  } catch (error) {
    yield put(fetchDailyForecastError(error));
  }
}

export default handleFetchDailyForecast;