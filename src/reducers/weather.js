import {
  FETCH_DAILY_FORECAST,
  FETCH_DAILY_FORECAST_SUCCESS,
  FETCH_DAILY_FORECAST_ERROR
} from '../constants/weather';

const INITIAL_STATE = {
  forecast: {
    city: {},
    list: [],
    fetching: false,
    error: null
  }
};

function weatherReducer(state=INITIAL_STATE, action) {
  let forecast;

  switch (action.type) {
    case FETCH_DAILY_FORECAST:
      forecast = Object.assign({}, state.forecast, { fetching: true });
      return Object.assign({}, state, { forecast });
    case FETCH_DAILY_FORECAST_SUCCESS:
      forecast = Object.assign({}, INITIAL_STATE.forecast, {
        city: action.payload.city,
        list: action.payload.list
      });
      return Object.assign({}, state, { forecast });
    case FETCH_DAILY_FORECAST_ERROR:
      forecast = Object.assign({}, state.forecast, {
        error: action.payload,
        fetching: false
      });
      return Object.assign({}, state, { forecast });
    default:
      return state;
  }
}

export default weatherReducer;