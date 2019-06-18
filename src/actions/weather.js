import {
  FETCH_DAILY_FORECAST,
  FETCH_DAILY_FORECAST_SUCCESS,
  FETCH_DAILY_FORECAST_ERROR
} from '../constants/weather';

export function fetchDailyForecast(city) {
  return {
    type: FETCH_DAILY_FORECAST,
    payload: city
  };
}

export function fetchDailyForecastSuccess({city, list}) {
  return {
    type: FETCH_DAILY_FORECAST_SUCCESS,
    payload: {city, list}
  };
}

export function fetchDailyForecastError(error) {
  return {
    type: FETCH_DAILY_FORECAST_ERROR,
    payload: error
  };
}